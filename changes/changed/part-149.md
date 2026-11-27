# Changed — Bundle Modifications Report (Part 149 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `149 / 153` (**434** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 148](part-148.md) · [Part 150 →](part-150.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1187 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 1162. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12307-L12313` → after: `L12324-L12330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12324-L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12324-L12330) · [Before (L12307-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12307-L12313)

```diff
-     if (BB.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${BB.frequency}`);
-     if (void 0 === (0, UO.J)(BB.yQ, OB)) throw new Error(`Custom world-gen biome topsoilBlock "${BB.yQ}" not found in blockMetadata`);
-     if (void 0 === (0, UO.J)(BB.JQ, OB)) throw new Error(`Custom world-gen biome lowsoilBlock "${BB.JQ}" not found in blockMetadata`);
-     if (0 === BB.MQ.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const GB of BB.MQ) {
-       if (GB.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${GB.frequency}`);
-       if (void 0 === (0, UO.J)(GB.blockName, OB)) throw new Error(`Custom world-gen biome stoneType blockName "${GB.blockName}" not found in blockMetadata`)
+     if (ee.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${ee.frequency}`);
+     if (void 0 === (0, ti.I)(ee.EM, ie)) throw new Error(`Custom world-gen biome topsoilBlock "${ee.EM}" not found in blockMetadata`);
+     if (void 0 === (0, ti.I)(ee.gM, ie)) throw new Error(`Custom world-gen biome lowsoilBlock "${ee.gM}" not found in blockMetadata`);
+     if (0 === ee.OM.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const He of ee.OM) {
+       if (He.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${He.frequency}`);
+       if (void 0 === (0, ti.I)(He.blockName, ie)) throw new Error(`Custom world-gen biome stoneType blockName "${He.blockName}" not found in blockMetadata`)
```

#### 1163. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12318-L12322` → after: `L12335-L12339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12335-L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12335-L12339) · [Before (L12318-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12318-L12322)

```diff
-     if (void 0 === (0, UO.J)(BB.blockName, OB)) throw new Error(`Custom world-gen ore blockName "${BB.blockName}" not found in blockMetadata`);
-     if (BB.radius < 0) throw new Error(`Custom world-gen ore "${BB.blockName}" radius must be >= 0, got ${BB.radius}`);
-     if (BB.qQ <= 0) throw new Error(`Custom world-gen ore "${BB.blockName}" minDistBetweenDeposits must be > 0, got ${BB.qQ}`);
-     if (BB.XD > BB.wD) throw new Error(`Custom world-gen ore "${BB.blockName}" minY (${BB.XD}) must be <= maxY (${BB.wD})`);
-     if (BB.ZQ < 0 || BB.ZQ > 1) throw new Error(`Custom world-gen ore "${BB.blockName}" spawnChance must be in [0, 1], got ${BB.ZQ}`)
+     if (void 0 === (0, ti.I)(ee.blockName, ie)) throw new Error(`Custom world-gen ore blockName "${ee.blockName}" not found in blockMetadata`);
+     if (ee.radius < 0) throw new Error(`Custom world-gen ore "${ee.blockName}" radius must be >= 0, got ${ee.radius}`);
+     if (ee.ZM <= 0) throw new Error(`Custom world-gen ore "${ee.blockName}" minDistBetweenDeposits must be > 0, got ${ee.ZM}`);
+     if (ee.rb > ee.Qb) throw new Error(`Custom world-gen ore "${ee.blockName}" minY (${ee.rb}) must be <= maxY (${ee.Qb})`);
+     if (ee.wM < 0 || ee.wM > 1) throw new Error(`Custom world-gen ore "${ee.blockName}" spawnChance must be in [0, 1], got ${ee.wM}`)
```

#### 1164. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12328-L12331` → after: `L12345-L12348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12345-L12348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12345-L12348) · [Before (L12328-L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12328-L12331)

```diff
-       qQ: 10,
-       XD: -98,
-       wD: -78,
-       ZQ: .4
+       ZM: 10,
+       rb: -98,
+       Qb: -78,
+       wM: .4
```

#### 1165. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12336-L12339` → after: `L12353-L12356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12353-L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12353-L12356) · [Before (L12336-L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12336-L12339)

```diff
-       qQ: 6,
-       XD: -40,
-       wD: 20,
-       ZQ: .6
+       ZM: 6,
+       rb: -40,
+       Qb: 20,
+       wM: .6
```

#### 1166. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12343-L12346` → after: `L12360-L12363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12360-L12363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12360-L12363) · [Before (L12343-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12343-L12346)

```diff
-       qQ: 10,
-       XD: -75,
-       wD: -55,
-       ZQ: .4
+       ZM: 10,
+       rb: -75,
+       Qb: -55,
+       wM: .4
```

#### 1167. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12350` → after: `L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12367) · [Before (L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12350)

```diff
-       AQ: null
+       YM: null
```

#### 1168. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12353` → after: `L12370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12370) · [Before (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12353)

```diff
-     [FO]: () => GB(40694).b
+     [ai]: () => He(40768).e
```

#### 1169. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12377` → after: `L12394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12394) · [Before (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12377)

```diff
-       if (!bO.includes(OB)) throw new Error(`Invalid port offset "${BB}". Must be one of: ${bO.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!Ii.includes(ie)) throw new Error(`Invalid port offset "${ee}". Must be one of: ${Ii.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1170. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12455` → after: `L12472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12472) · [Before (L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12455)

```diff
-     const OB = aO() ? sO : xO;
+     const ie = ni() ? Qi : eH;
```

#### 1171. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12864` → after: `L12881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12881) · [Before (L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12864)

```diff
-     if (DG.has(BB)) throw new Error(`Duplicate leave code: ${BB}`);
+     if (KH.has(ee)) throw new Error(`Duplicate leave code: ${ee}`);
```

#### 1172. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12887` → after: `L12904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12904) · [Before (L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12887)

```diff
-     return BB === OB ? QB + YB * YB <= BB * BB : BB > OB ? Math.abs(YB) <= OB && QB + YB * YB <= BB * BB : QB <= BB * BB && QB + YB * YB <= OB * OB
+     return ee === ie ? Me + ye * ye <= ee * ee : ee > ie ? Math.abs(ye) <= ie && Me + ye * ye <= ee * ee : Me <= ee * ee && Me + ye * ye <= ie * ie
```

#### 1173. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12905` → after: `L12922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12922) · [Before (L12905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12905)

```diff
-     const BB = Promise.all([GB.e(84), GB.e(87), GB.e(85), GB.e(86), GB.e(81)]).then((() => GB(40790))).then((BB => {
+     const ee = Promise.all([He.e(84), He.e(87), He.e(85), He.e(86), He.e(81)]).then((() => He(40871))).then((ee => {
```

#### 1174. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12948` → after: `L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12965) · [Before (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12948)

```diff
-               reason: `its memory stats trapped (${String(OB)})`
+               reason: `its memory stats trapped (${String(ie)})`
```

#### 1175. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12954` → after: `L12971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12971) · [Before (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12954)

```diff
-               const GB = yB.gZ();
+               const He = Fe.jp();
```

#### 1176. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12957` → after: `L12974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12974) · [Before (L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12957)

```diff
-                 return String.fromCharCode(...new Uint8Array(mB().buffer, BB.rZ(), 32))
+                 return String.fromCharCode(...new Uint8Array(Ae().buffer, ee.sp(), 32))
```

#### 1177. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12970` → after: `L12987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12987) · [Before (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12970)

```diff
-               oB = ZB.pP, PB = new Uint16Array(oB * oB * oB),
+               Ke = pe.BR, Re = new Uint16Array(Ke * Ke * Ke),
```

#### 1178. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12979` → after: `L12996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12996) · [Before (L12979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12979)

```diff
-                           reason: `the memory ceiling was not set (${String(YB)})`
+                           reason: `the memory ceiling was not set (${String(ye)})`
```

#### 1179. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12983` → after: `L13000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13000) · [Before (L12983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12983)

```diff
-                         yB = new(nO().iZ)
+                         Fe = new(Wi().Sp)
```

#### 1180. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12987` → after: `L13004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13004) · [Before (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12987)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(YB)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(ye)})`
```

#### 1181. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12997` → after: `L13014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13014) · [Before (L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12997)

```diff
-                           reason: `${MG} (${String(OB)})`
+                           reason: `${kH} (${String(ie)})`
```

#### 1182. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13002` → after: `L13019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13019) · [Before (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13002)

```diff
-                       reason: `wasm did not start (${KB()})`
+                       reason: `wasm did not start (${De()})`
```

#### 1183. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13006` → after: `L13023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13023) · [Before (L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13006)

```diff
-                     reason: `chunk size ${oB} is not the encoder's 32`
+                     reason: `chunk size ${Ke} is not the encoder's 32`
```

#### 1184. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13017` → after: `L13034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13034) · [Before (L13017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13017)

```diff
-                 JB = new fO(oB, jB.blockMetadata, jB.itemMetadata, BB.uD, !1, BB.mD, BB.LD, YB, qB)
+                 Je = new Zi(Ke, Ue.blockMetadata, Ue.itemMetadata, ee.jb, !1, ee.sb, ee.hb, ye, Te)
```

#### 1185. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13042` → after: `L13059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13059) · [Before (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13042)

```diff
-                     const GB = BB.XZ(),
+                     const He = ee.Ip(),
```

#### 1186. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13044` → after: `L13061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13061) · [Before (L13044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13044)

```diff
-                       DB = OB.byteLength >= YB ? OB : new ArrayBuffer(YB),
+                       be = ie.byteLength >= ye ? ie : new ArrayBuffer(ye),
```

#### 1187. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13047` → after: `L13064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13064) · [Before (L13047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13047)

```diff
-                     return oB.set(new Uint8Array(QB, BB.rZ(), cO)), oB.set(new Uint8Array(QB, BB.wZ(), GB), cO), {
+                     return Ke.set(new Uint8Array(Me, ee.sp(), li)), Ke.set(new Uint8Array(Me, ee.hp(), He), li), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   37085: (BB, OB, GB) => {
+   37192: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6)

```diff
-       d: () => DB
+       b: () => be
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L44)

```diff
-           if (OB > 0 && GB.searchParams.set("cache-bust", `${Date.now()}-${OB}`), await this.fetchWhole(GB, BB)) return this.scriptUrl = GB, !0;
+           if (ie > 0 && He.searchParams.set("cache-bust", `${Date.now()}-${ie}`), await this.fetchWhole(He, ee)) return this.scriptUrl = He, !0;
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L86)

```diff
-   54103: (BB, OB, GB) => {
+   54302: (ee, ie, He) => {
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L94)

```diff
-     const YB = new(GB(37085).d)(new URL(GB.p + GB.u(82), GB.b), {
+     const ye = new(He(37192).b)(new URL(He.p + He.u(82), He.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/main.js` (1732 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see gw4e3a.main.937868ec.js.LICENSE.txt */
+ /*! For license information please see u88b9b.main.1969c480.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3)

```diff
-     var BB = [, , , , , , (BB, OB, GB) => {
+     var ee = [, , , , , , , , (ee, ie, He) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L6-L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7-L9) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6-L9)

```diff
-             G: () => IB,
-             I: () => dB,
-             L: () => cB,
-             M: () => SB,
+             E: () => we,
+             H: () => me,
+             J: () => Oe,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L11` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11-L12) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11)

```diff
-             P: () => VB,
+             O: () => ge,
+             S: () => Ve,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L13` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L14) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L13)

```diff
-             W: () => MB,
+             X: () => xe,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L22-L27` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L25-L27) · [Before (L22-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L22-L27)

```diff
-             jb: () => uB,
-             l: () => jB,
-             mb: () => YB,
-             p: () => yB,
-             t: () => RB,
-             v: () => hB,
+             m: () => Fe,
+             o: () => ze,
+             s: () => le,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L141)

```diff
-         }, , (BB, OB, GB) => {
+         }, , , , , (ee, ie, He) => {
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L143)

```diff
-             b: () => jB
+             c: () => Ue
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L145-L146` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L145-L146) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L145-L146)

```diff
-           var YB = GB(16),
-             DB = GB(758);
+           var ye = He(18),
+             be = He(737);
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L168)

```diff
-             (YB.c.set({
+             (ye.e.set({
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L171-L172` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L171-L172) · [Before (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L171-L172)

```diff
-           })), "VConsole" in window && (0, DB.c)()
-         }, , , , , , , , (BB, OB, GB) => {
+           })), "VConsole" in window && (0, be.e)()
+         }, , , , , (ee, ie, He) => {
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L174-L178` → after: `L174-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L174-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L174-L178) · [Before (L174-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L174-L178)

```diff
-             c: () => ZO,
-             g: () => WO,
-             k: () => RO,
-             m: () => NO,
-             o: () => AO
+             e: () => Xi,
+             h: () => Ei,
+             i: () => Bi,
+             l: () => zi,
+             m: () => gi
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L180-L185` → after: `L180-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L180-L185) · [Before (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L180-L185)

```diff
-           var YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB, FB, iB, LB, gB, rB, XB = GB(25),
-             wB = GB(331),
-             EB = GB(353),
-             cB = GB(31),
-             hB = GB(52),
-             aB = GB(29),
+           var ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe, Ae, Ye, Ve, ae, ce, xe, Le, Ce = He(27),
+             ve = He(335),
+             ue = He(347),
+             me = He(35),
+             le = He(50),
+             Se = He(30),
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L187-L200` → after: `L187-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L187-L200) · [Before (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L187-L200)

```diff
-             TB = GB(56),
-             bB = GB(70),
-             CB = GB(92),
-             HB = GB(248),
-             vB = GB(311),
-             sB = GB(320),
-             xB = GB(649),
-             tB = GB(113),
-             BO = GB(656),
-             OO = GB(662),
-             GO = GB(286),
-             YO = GB(729),
-             DO = GB(738),
-             QO = GB(747);
+             je = He(59),
+             se = He(77),
+             Ie = He(97),
+             he = He(245),
+             Ne = He(319),
+             Ge = He(325),
+             re = He(627),
+             Qe = He(115),
+             ei = He(643),
+             ii = He(645),
+             Hi = He(288),
+             yi = He(699),
+             bi = He(704),
+             Mi = He(710);
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L204-L210` → after: `L204-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L204-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L204-L210) · [Before (L204-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L204-L210)

```diff
-             if (BO.f) return "webgl_holdback";
-             if (!0 === cB.g.getItem(tB.J)) return "old_intel_driver";
-             if (BO.g && !0 === cB.g.getItem(tB.F)) return "intel_gen9";
-             if (OO.D && (0, BO.c)(cB.g.getItem(tB.D))) return "gpu_class_webgl";
-             if (OO.D && !0 === cB.g.getItem(tB.Q)) return "gpu_wasm_arm";
-             const BB = OO.D ? null : (0, BO.i)();
-             return 26 === BB && (0, BO.l)((0, GO.d)()) ? "safari_26" : 27 === BB && (0, BO.n)((0, GO.d)()) ? "safari_27" : (0, sB.y)() ? "off_after_loss" : null
+             if (ei.g) return "webgl_holdback";
+             if (!0 === me.i.getItem(Qe.H)) return "old_intel_driver";
+             if (ei.i && !0 === me.i.getItem(Qe.E)) return "intel_gen9";
+             if (ii.I && (0, ei.d)(me.i.getItem(Qe.D))) return "gpu_class_webgl";
+             if (ii.I && !0 === me.i.getItem(Qe.N)) return "gpu_wasm_arm";
+             const ee = ii.I ? null : (0, ei.m)();
+             return 26 === ee && (0, ei.o)((0, Hi.b)()) ? "safari_26" : 27 === ee && (0, ei.r)((0, Hi.b)()) ? "safari_27" : (0, Ge.C)() ? "off_after_loss" : null
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L214)

```diff
-             return BO.q && null === jO()
+             return ei.s && null === Ui()
```

#### 17. `bundles/bloxd.io/main.js` (Changed code · before: `L217-L218` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L217-L218) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L217-L218)

```diff
-           const MO = BO.q && null === JO;
-           let PO = null === cB.g.getItem(wB.nc);
+           const oi = ei.s && null === Ji;
+           let Ri = null === me.i.getItem(ve.nc);
```

#### 18. `bundles/bloxd.io/main.js` (Changed code · before: `L231-L232` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L231-L232) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L231-L232)

```diff
-             soundVolume: (0, hB.d)(),
-             musicVolume: null !== (YB = cB.g.getItem("musicVol")) && void 0 !== YB ? YB : .5,
+             soundVolume: (0, le.b)(),
+             musicVolume: null !== (ye = me.i.getItem("musicVol")) && void 0 !== ye ? ye : .5,
```

#### 19. `bundles/bloxd.io/main.js` (Changed code · before: `L247-L248` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L247-L248) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L247-L248)

```diff
-               const BB = cB.g.getItem("showDistantNametags");
-               return "boolean" === typeof BB ? BB : null
+               const ee = me.i.getItem("showDistantNametags");
+               return "boolean" === typeof ee ? ee : null
```

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L263-L264` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L263-L264) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L263-L264)

```diff
-             showDebugOverlay: null !== (DB = cB.g.getItem("showDebugOverlay")) && void 0 !== DB && DB,
-             enabledDebugFeatures: null !== (QB = cB.g.getItem("enabledDebugFeatures")) && void 0 !== QB ? QB : {},
+             showDebugOverlay: null !== (be = me.i.getItem("showDebugOverlay")) && void 0 !== be && be,
+             enabledDebugFeatures: null !== (Me = me.i.getItem("enabledDebugFeatures")) && void 0 !== Me ? Me : {},
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L274-L277` → after: `L274-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L274-L277) · [Before (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L274-L277)

```diff
-               useProfanityFilter: null === (oB = cB.g.getItem("UseProfanityFilter")) || void 0 === oB || oB,
-               showChat: null === (jB = cB.g.getItem("showChat")) || void 0 === jB || jB,
-               showNewItemIndicator: null === (yB = cB.g.getItem("showNewItemIndicator")) || void 0 === yB || yB,
-               showFriendOnlineToasts: null === (JB = cB.g.getItem("showFriendOnlineToasts")) || void 0 === JB || JB,
+               useProfanityFilter: null === (Ke = me.i.getItem("UseProfanityFilter")) || void 0 === Ke || Ke,
+               showChat: null === (Ue = me.i.getItem("showChat")) || void 0 === Ue || Ue,
+               showNewItemIndicator: null === (Fe = me.i.getItem("showNewItemIndicator")) || void 0 === Fe || Fe,
+               showFriendOnlineToasts: null === (Je = me.i.getItem("showFriendOnlineToasts")) || void 0 === Je || Je,
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L280-L281` → after: `L280-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L280-L281) · [Before (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L280-L281)

```diff
-                 const OB = cB.g.getItem("friendRequestNotifications");
-                 return null !== (BB = YO.d.find((BB => BB === OB))) && void 0 !== BB ? BB : "toastAndTray"
+                 const ie = me.i.getItem("friendRequestNotifications");
+                 return null !== (ee = yi.b.find((ee => ee === ie))) && void 0 !== ee ? ee : "toastAndTray"
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L283-L301` → after: `L283-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L283-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L283-L301) · [Before (L283-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L283-L301)

```diff
-               touchscreenSensitivity: null !== (MB = cB.g.getItem("touchscreenSensitivity")) && void 0 !== MB ? MB : 150,
-               mouseSensitivity: null !== (PB = cB.g.getItem("mouseSensitivity")) && void 0 !== PB ? PB : 15,
-               showCoordinates: null !== (zB = cB.g.getItem("showCoordinates")) && void 0 !== zB && zB,
-               showChunkCoordinates: null !== (lB = cB.g.getItem("showChunkCoordinates")) && void 0 !== lB && lB,
-               showFPS: null !== (pB = cB.g.getItem("showFPS")) && void 0 !== pB && pB,
-               disableBunnyHopping: null !== (qB = cB.g.getItem("disableBunnyHopping")) && void 0 !== qB && qB,
-               disableTexAtlas: null !== (ZB = cB.g.getItem("disableTexAtlas")) && void 0 !== ZB && ZB,
-               disableFullscreen: null !== (NB = cB.g.getItem("disableFullscreen")) && void 0 !== NB && NB,
-               ezBridging: null === (RB = cB.g.getItem("ezBridging")) || void 0 === RB || RB,
-               ezTowering: null === (WB = cB.g.getItem("ezTowering")) || void 0 === WB || WB,
-               crouchIsToggle: null !== (AB = cB.g.getItem("crouchIsToggle")) && void 0 !== AB && AB,
-               vibration: null === (VB = cB.g.getItem("vibration")) || void 0 === VB || VB,
-               hideUiIsToggle: null !== (SB = cB.g.getItem("hideUiIsToggle")) && void 0 !== SB && SB,
-               enableLighting: null !== (nB = cB.g.getItem("enableLighting")) && void 0 !== nB && nB,
-               showFog: null !== (UB = cB.g.getItem("showFog")) && void 0 !== UB && UB,
-               fogChunkDistance: null !== (fB = cB.g.getItem("fogChunkDistance")) && void 0 !== fB ? fB : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (oe = me.i.getItem("touchscreenSensitivity")) && void 0 !== oe ? oe : 150,
+               mouseSensitivity: null !== (Re = me.i.getItem("mouseSensitivity")) && void 0 !== Re ? Re : 15,
+               showCoordinates: null !== (ke = me.i.getItem("showCoordinates")) && void 0 !== ke && ke,
+               showChunkCoordinates: null !== (qe = me.i.getItem("showChunkCoordinates")) && void 0 !== qe && qe,
+               showFPS: null !== (fe = me.i.getItem("showFPS")) && void 0 !== fe && fe,
+               disableBunnyHopping: null !== (Te = me.i.getItem("disableBunnyHopping")) && void 0 !== Te && Te,
+               disableTexAtlas: null !== (pe = me.i.getItem("disableTexAtlas")) && void 0 !== pe && pe,
+               disableFullscreen: null !== (Xe = me.i.getItem("disableFullscreen")) && void 0 !== Xe && Xe,
+               ezBridging: null === (ze = me.i.getItem("ezBridging")) || void 0 === ze || ze,
+               ezTowering: null === (Be = me.i.getItem("ezTowering")) || void 0 === Be || Be,
+               crouchIsToggle: null !== (Ee = me.i.getItem("crouchIsToggle")) && void 0 !== Ee && Ee,
+               vibration: null === (ge = me.i.getItem("vibration")) || void 0 === ge || ge,
+               hideUiIsToggle: null !== (Oe = me.i.getItem("hideUiIsToggle")) && void 0 !== Oe && Oe,
+               enableLighting: null !== (de = me.i.getItem("enableLighting")) && void 0 !== de && de,
+               showFog: null !== (We = me.i.getItem("showFog")) && void 0 !== We && We,
+               fogChunkDistance: null !== (te = me.i.getItem("fogChunkDistance")) && void 0 !== te ? te : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L305-L313` → after: `L305-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L305-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L305-L313) · [Before (L305-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L305-L313)

```diff
-               useWebGpu: null !== (uB = cB.g.getItem(wB.nc)) && void 0 !== uB ? uB : MO,
-               pixelScale: null !== (mB = cB.g.getItem("pixelScale")) && void 0 !== mB ? mB : (0, CB.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (IB = cB.g.getItem("pixelSmoothing")) || void 0 === IB || IB,
-               showChunkBorders: null !== (FB = cB.g.getItem("showChunkBorders")) && void 0 !== FB && FB,
-               showWeaponRaycasts: null !== (iB = cB.g.getItem("showWeaponRaycasts")) && void 0 !== iB && iB,
-               chunkFadeIn: null === (LB = cB.g.getItem("chunkFadeIn")) || void 0 === LB || LB,
-               enableClipping: null !== (gB = cB.g.getItem("enableClipping")) && void 0 !== gB && gB,
-               clipDurationSeconds: null !== (rB = cB.g.getItem("clipDurationSeconds")) && void 0 !== rB ? rB : DO.c,
-               ...(0, QO.e)()
+               useWebGpu: null !== (Pe = me.i.getItem(ve.nc)) && void 0 !== Pe ? Pe : oi,
+               pixelScale: null !== (Ae = me.i.getItem("pixelScale")) && void 0 !== Ae ? Ae : (0, Ie.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (Ye = me.i.getItem("pixelSmoothing")) || void 0 === Ye || Ye,
+               showChunkBorders: null !== (Ve = me.i.getItem("showChunkBorders")) && void 0 !== Ve && Ve,
+               showWeaponRaycasts: null !== (ae = me.i.getItem("showWeaponRaycasts")) && void 0 !== ae && ae,
+               chunkFadeIn: null === (ce = me.i.getItem("chunkFadeIn")) || void 0 === ce || ce,
+               enableClipping: null !== (xe = me.i.getItem("enableClipping")) && void 0 !== xe && xe,
+               clipDurationSeconds: null !== (Le = me.i.getItem("clipDurationSeconds")) && void 0 !== Le ? Le : bi.f,
+               ...(0, Mi.f)()
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L320)

```diff
-             const GB = null !== (OB = cB.g.getItem(vB.c)) && void 0 !== OB ? OB : (0, HB.g)();
+             const He = null !== (ie = me.i.getItem(Ne.e)) && void 0 !== ie ? ie : (0, he.i)();
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L330)

```diff
-             return null !== cB.g.getItem(vB.c)
+             return null !== me.i.getItem(Ne.e)
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L336)

```diff
-               for (const OB in BB) XB.o.tM(`appManagerUpdated|${OB}`, BB[OB])
+               for (const ie in ee) Ce.h.yR(`appManagerUpdated|${ie}`, ee[ie])
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L350)

```diff
-               for (const QB in BB)(0, EB.Fe)(zO[QB], BB[QB]) || (OB[QB] = BB[QB], GB = !0);
+               for (const Me in ee)(0, ue.ee)(ki[Me], ee[Me]) || (ie[Me] = ee[Me], He = !0);
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L357)

```diff
-                 cB.g.setItem("UseProfanityFilter", BB.useProfanityFilter), cB.g.setItem("showChat", BB.showChat), cB.g.setItem("showNewItemIndicator", BB.showNewItemIndicator), cB.g.setItem("showFriendOnlineToasts", BB.showFriendOnlineToasts), cB.g.setItem("friendRequestNotificat … [truncated]
+                 me.i.setItem("UseProfanityFilter", ee.useProfanityFilter), me.i.setItem("showChat", ee.showChat), me.i.setItem("showNewItemIndicator", ee.showNewItemIndicator), me.i.setItem("showFriendOnlineToasts", ee.showFriendOnlineToasts), me.i.setItem("friendRequestNotificat … [truncated]
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L359` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L359) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L359)

```diff
-               void 0 !== OB.soundVolume && cB.g.setItem("soundVol", OB.soundVolume), void 0 !== OB.musicVolume && cB.g.setItem("musicVol", OB.musicVolume), void 0 !== OB.showDistantNametags && cB.g.setItem("showDistantNametags", OB.showDistantNametags), void 0 !== OB.showDebugOve … [truncated]
+               void 0 !== ie.soundVolume && me.i.setItem("soundVol", ie.soundVolume), void 0 !== ie.musicVolume && me.i.setItem("musicVol", ie.musicVolume), void 0 !== ie.showDistantNametags && me.i.setItem("showDistantNametags", ie.showDistantNametags), void 0 !== ie.showDebugOve … [truncated]
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L371)

```diff
-                 openEverythingMenuName: wB.p.SETTINGS,
+                 openEverythingMenuName: ve.r.SETTINGS,
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L377)

```diff
-               return null !== OB && void 0 !== OB ? OB : zO.clientEscMenuOptions.antiAliasing
+               return null !== ie && void 0 !== ie ? ie : ki.clientEscMenuOptions.antiAliasing
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L380-L381` → after: `L380-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L380-L381) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L380-L381)

```diff
-               (0, HB.f)(BB);
-               const OB = pO() ? zO.clientEscMenuOptions.antiAliasing : (0, HB.g)();
+               (0, he.e)(ee);
+               const ie = fi() ? ki.clientEscMenuOptions.antiAliasing : (0, he.i)();
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L405)

```diff
-               let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, sB.p)(),
+               let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ge.n)(),
```

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L408-L409` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L408-L409) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L408-L409)

```diff
-               const YB = (0, sB.v)(BB, OB, GB);
-               return (0, sB.y)() && !0 === cB.g.getItem(wB.nc) && cB.g.removeItem(wB.nc), YB
+               const ye = (0, Ge.x)(ee, ie, He);
+               return (0, Ge.C)() && !0 === me.i.getItem(ve.nc) && me.i.removeItem(ve.nc), ye
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L412)

```diff
-               (0, xB.b)(BB) && (0, sB.y)() && PO && zO.clientEscMenuOptions.useWebGpu && (JO = jO(), this.setEscMenuOptionsUnstored({
+               (0, re.d)(ee) && (0, Ge.C)() && Ri && ki.clientEscMenuOptions.useWebGpu && (Ji = Ui(), this.setEscMenuOptionsUnstored({
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L420)

```diff
-               return (0, sB.E)() || !0 === cB.g.getItem(tB.J)
+               return (0, Ge.H)() || !0 === me.i.getItem(Qe.H)
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L423)

```diff
-               return (0, sB.y)()
+               return (0, Ge.C)()
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L426` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L426) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L426)

```diff
-               return PO ? JO : null
+               return Ri ? Ji : null
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L429)

```diff
-               !0 === cB.g.getItem(tB.J) && (0, CB.hasUsableWebGpuAdapter)()
+               !0 === me.i.getItem(Qe.H) && (0, Ie.hasUsableWebGpuAdapter)()
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L475` → after: `L475-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L475-L477) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L475)

```diff
-             d: () => jB,
+             b: () => Ue,
+             e: () => Me,
+             g: () => oe,
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L477-L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L479) · [Before (L477-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L477-L479)

```diff
-             k: () => MB,
-             o: () => JB,
-             p: () => PB
+             j: () => Re
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L481)

```diff
-           var YB = GB(29),
+           var ye = He(30),
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L491)

```diff
-               super(...arguments), this.oN = !1, this.yN = [], this.zN = {}
+               super(...arguments), this.BX = !1, this.EX = [], this.Yz = {}
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L495)

```diff
-               this.oN || !GB ? this.emit(BB, OB) : this.yN.push({
+               this.BX || !He ? this.emit(ee, ie) : this.EX.push({
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L502-L503` → after: `L502-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L502-L503) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L502-L503)

```diff
-               const YB = this.lN(BB, OB);
-               return this.on(BB, YB), this.zN[BB] = (null !== (GB = this.zN[BB]) && void 0 !== GB ? GB : 0) + 1, {
+               const ye = this.yB(ee, ie);
+               return this.on(ee, ye), this.Yz[ee] = (null !== (He = this.Yz[ee]) && void 0 !== He ? He : 0) + 1, {
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L512)

```diff
-               const GB = this.lN(BB, OB);
+               const He = this.yB(ee, ie);
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L521-L522` → after: `L521-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L521-L522) · [Before (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L521-L522)

```diff
-                 GB = this.zN[OB];
-               GB > 1 ? this.zN[OB] = GB - 1 : 1 === GB && delete this.zN[OB]
+                 He = this.Yz[ie];
+               He > 1 ? this.Yz[ie] = He - 1 : 1 === He && delete this.Yz[ie]
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L529)

```diff
-                   console.error(`Error in PubSub listener for event ${BB}:`, YB)
+                   console.error(`Error in PubSub listener for event ${ee}:`, ye)
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L534` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L534) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L534)

```diff
-               this.oN = BB, BB && (this.yN.forEach((BB => {
+               this.BX = ee, ee && (this.EX.forEach((ee => {
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L539-L540` → after: `L539-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L539-L540) · [Before (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L539-L540)

```diff
-                 this.tM(OB, GB)
-               })), this.yN = [])
+                 this.yR(ie, He)
+               })), this.EX = [])
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L543` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L543) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L543)

```diff
-               this.yN = []
+               this.EX = []
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L549)

```diff
-             JB.ZN(!0)
+             Je.qB(!0)
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L558)

```diff
-         }, , , , BB => {
+         }, , , ee => {
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L565)

```diff
-             this.oP = BB, this.context = OB, this.once = GB || !1
+             this.oR = ee, this.context = ie, this.once = He || !1
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L571-L572` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L571-L572) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L571-L572)

```diff
-               yB = GB ? GB + OB : OB;
-             return BB._events[yB] ? BB._events[yB].oP ? BB._events[yB] = [BB._events[yB], jB] : BB._events[yB].push(jB) : (BB._events[yB] = jB, BB._eventsCount++), BB
+               Fe = He ? He + ie : ie;
+             return ee._events[Fe] ? ee._events[Fe].oR ? ee._events[Fe] = [ee._events[Fe], Ue] : ee._events[Fe].push(Ue) : (ee._events[Fe] = Ue, ee._eventsCount++), ee
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L576)

```diff
-             0 === --BB._eventsCount ? BB._events = new YB : delete BB._events[OB]
+             0 === --ee._eventsCount ? ee._events = new ye : delete ee._events[ie]
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L588)

```diff
-             var OB = GB ? GB + BB : BB,
+             var ie = He ? He + ee : ee,
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L591-L592` → after: `L591-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L591-L592) · [Before (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L591-L592)

```diff
-             if (YB.oP) return [YB.oP];
-             for (var DB = 0, QB = YB.length, oB = new Array(QB); DB < QB; DB++) oB[DB] = YB[DB].oP;
+             if (ye.oR) return [ye.oR];
+             for (var be = 0, Me = ye.length, Ke = new Array(Me); be < Me; be++) Ke[be] = ye[be].oR;
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L595)

```diff
-             var OB = GB ? GB + BB : BB,
+             var ie = He ? He + ee : ee,
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L597)

```diff
-             return YB ? YB.oP ? 1 : YB.length : 0
+             return ye ? ye.oR ? 1 : ye.length : 0
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L599` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L599) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L599)

```diff
-             var jB = GB ? GB + BB : BB;
+             var Ue = He ? He + ee : ee;
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L603-L604` → after: `L603-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L603-L604) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L603-L604)

```diff
-             if (MB.oP) {
-               switch (MB.once && this.removeListener(BB, MB.oP, void 0, !0), PB) {
+             if (oe.oR) {
+               switch (oe.once && this.removeListener(ee, oe.oR, void 0, !0), Re) {
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L606` → after: `L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L606) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L606)

```diff
-                   return MB.oP.call(MB.context), !0;
+                   return oe.oR.call(oe.context), !0;
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L608` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L608) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L608)

```diff
-                   return MB.oP.call(MB.context, OB), !0;
+                   return oe.oR.call(oe.context, ie), !0;
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L610)

```diff
-                   return MB.oP.call(MB.context, OB, YB), !0;
+                   return oe.oR.call(oe.context, ie, ye), !0;
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L612)

```diff
-                   return MB.oP.call(MB.context, OB, YB, DB), !0;
+                   return oe.oR.call(oe.context, ie, ye, be), !0;
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L614` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L614) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L614)

```diff
-                   return MB.oP.call(MB.context, OB, YB, DB, QB), !0;
+                   return oe.oR.call(oe.context, ie, ye, be, Me), !0;
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L616)

```diff
-                   return MB.oP.call(MB.context, OB, YB, DB, QB, oB), !0
+                   return oe.oR.call(oe.context, ie, ye, be, Me, Ke), !0
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L619)

```diff
-               MB.oP.apply(MB.context, yB)
+               oe.oR.apply(oe.context, Fe)
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L622)

```diff
-               for (JB = 0; JB < lB; JB++) switch (MB[JB].once && this.removeListener(BB, MB[JB].oP, void 0, !0), PB) {
+               for (Je = 0; Je < qe; Je++) switch (oe[Je].once && this.removeListener(ee, oe[Je].oR, void 0, !0), Re) {
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L624` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L624) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L624)

```diff
-                   MB[JB].oP.call(MB[JB].context);
+                   oe[Je].oR.call(oe[Je].context);
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L627)

```diff
-                   MB[JB].oP.call(MB[JB].context, OB);
+                   oe[Je].oR.call(oe[Je].context, ie);
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L630)

```diff
-                   MB[JB].oP.call(MB[JB].context, OB, YB);
+                   oe[Je].oR.call(oe[Je].context, ie, ye);
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L633)

```diff
-                   MB[JB].oP.call(MB[JB].context, OB, YB, DB);
+                   oe[Je].oR.call(oe[Je].context, ie, ye, be);
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L638` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L638) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L638)

```diff
-                   MB[JB].oP.apply(MB[JB].context, yB)
+                   oe[Je].oR.apply(oe[Je].context, Fe)
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L647)

```diff
-             var QB = GB ? GB + BB : BB;
+             var Me = He ? He + ee : ee;
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L651)

```diff
-             if (jB.oP) jB.oP !== OB || DB && !jB.once || YB && jB.context !== YB || oB(this, QB);
+             if (Ue.oR) Ue.oR !== ie || be && !Ue.once || ye && Ue.context !== ye || Ke(this, Me);
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L653-L654` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L653-L654) · [Before (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L653-L654)

```diff
-               for (var yB = 0, JB = [], MB = jB.length; yB < MB; yB++)(jB[yB].oP !== OB || DB && !jB[yB].once || YB && jB[yB].context !== YB) && JB.push(jB[yB]);
-               JB.length ? this._events[QB] = 1 === JB.length ? JB[0] : JB : oB(this, QB)
+               for (var Fe = 0, Je = [], oe = Ue.length; Fe < oe; Fe++)(Ue[Fe].oR !== ie || be && !Ue[Fe].once || ye && Ue[Fe].context !== ye) && Je.push(Ue[Fe]);
+               Je.length ? this._events[Me] = 1 === Je.length ? Je[0] : Je : Ke(this, Me)
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L657` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L657) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L657)

```diff
-           }, jB.prototype.mN = function(BB) {
+           }, Ue.prototype.zB = function(ee) {
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L659)

```diff
-             return BB ? (OB = GB ? GB + BB : BB, this._events[OB] && oB(this, OB)) : (this._events = new YB, this._eventsCount = 0), this
+             return ee ? (ie = He ? He + ee : ee, this._events[ie] && Ke(this, ie)) : (this._events = new ye, this._eventsCount = 0), this
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L661` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L661) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L661)

```diff
-         }, , (BB, OB, GB) => {
+         }, , , , , (ee, ie, He) => {
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L664-L665` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L664) · [Before (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L664-L665)

```diff
-             d: () => pB,
-             g: () => zB,
+             e: () => fe,
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L667-L668` → after: `L666-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L666-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L666-L668) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L667-L668)

```diff
-             k: () => qB,
-             m: () => MB
+             m: () => qe,
+             q: () => Te,
+             r: () => oe
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L670)

```diff
-           var YB = GB(39),
+           var ye = He(37),
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L672` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L672) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L672)

```diff
-             QB = GB(45),
+             Me = He(42),
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L676` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L676) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L676)

```diff
-               return `bloxd-${BB}`
+               return `bloxd-${ee}`
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L702)

```diff
-                   ...GB ? JB : yB,
+                   ...He ? Je : Fe,
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L714` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L714) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L714)

```diff
-                 return console.error("Caught error", GB, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (OB = this._cachedVals[BB]) && void 0 !== OB ? OB : null
+                 return console.error("Caught error", He, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (ie = this._cachedVals[ee]) && void 0 !== ie ? ie : null
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L723)

```diff
-                 oB().remove(BB, OB ? JB : yB)
+                 Ke().remove(ee, ie ? Je : Fe)
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L751)

```diff
-                 return console.error("Caught error", GB, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", He, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L782` → after: `L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L782) · [Before (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L782)

```diff
-                 return console.error("Caught error", GB, "when attempting to read from sessionStorage."), null !== (OB = this._cachedVals[BB]) && void 0 !== OB ? OB : null
+                 return console.error("Caught error", He, "when attempting to read from sessionStorage."), null !== (ie = this._cachedVals[ee]) && void 0 !== ie ? ie : null
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L809)

```diff
-                 return null !== (YB = this._cachedVals[BB]) && void 0 !== YB ? YB : null
+                 return null !== (ye = this._cachedVals[ee]) && void 0 !== ye ? ye : null
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L831` → after: `L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L831) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L831)

```diff
-                   for (let YB, DB, QB = 0, oB = 0; DB = BB.charAt(oB++); ~DB && (YB = QB % 4 ? 64 * YB + DB : DB, QB++ % 4) ? OB += String.fromCharCode(255 & YB >> (-2 * QB & 6)) : 0) DB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(DB);
+                   for (let ye, be, Me = 0, Ke = 0; be = ee.charAt(Ke++); ~be && (ye = Me % 4 ? 64 * ye + be : be, Me++ % 4) ? ie += String.fromCharCode(255 & ye >> (-2 * Me & 6)) : 0) be = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(be);
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L838` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L838) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L838)

```diff
-               return oB ? DB = oB : (DB = ZB.FZAkcO(DB), BB[QB] = DB), DB
+               return Ke ? be = Ke : (be = pe.FZAkcO(be), ee[Me] = be), be
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L880` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L880) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L880)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , (ee, ie, He) => {
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L1012` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1012) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1012)

```diff
-                 return BB instanceof this ? BB : QB.resolve(new this(DB), BB)
+                 return ee instanceof this ? ee : Me.resolve(new this(be), ee)
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1061)

```diff
-                 return this.state !== yB ? PB(GB, this.state === jB ? BB : OB, this.outcome) : this.queue.push(new MB(GB, BB, OB)), GB
+                 return this.state !== Fe ? Re(He, this.state === Ue ? ee : ie, this.outcome) : this.queue.push(new oe(He, ee, ie)), He
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L1434` → after: `L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1434) · [Before (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1434)

```diff
-                       return BB ? OB : mB(OB)
+                       return ee ? ie : Ae(ie)
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1710` → after: `L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1710) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1710)

```diff
-                   BB instanceof ArrayBuffer ? (YB = BB, DB += GO) : (YB = BB.buffer, "[object Int8Array]" === GB ? DB += DO : "[object Uint8Array]" === GB ? DB += QO : "[object Uint8ClampedArray]" === GB ? DB += oO : "[object Int16Array]" === GB ? DB += jO : "[object Uint16Array] … [truncated]
+                   ee instanceof ArrayBuffer ? (ye = ee, be += Hi) : (ye = ee.buffer, "[object Int8Array]" === He ? be += bi : "[object Uint8Array]" === He ? be += Mi : "[object Uint8ClampedArray]" === He ? be += Ki : "[object Int16Array]" === He ? be += Ui : "[object Uint16Array] … [truncated]
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1734` → after: `L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1734) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1734)

```diff
-                   case GO:
+                   case Hi:
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1736)

```diff
-                   case YO:
+                   case yi:
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1740` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1740) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1740)

```diff
-                   case DO:
+                   case bi:
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1742` → after: `L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1742) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1742)

```diff
-                   case QO:
+                   case Mi:
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1744` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1744) · [Before (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1744)

```diff
-                   case oO:
+                   case Ki:
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1746` → after: `L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1746) · [Before (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1746)

```diff
-                   case jO:
+                   case Ui:
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1748` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1748) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1748)

```diff
-                   case JO:
+                   case Ji:
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1750)

```diff
-                   case yO:
+                   case Fi:
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1752` → after: `L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1752) · [Before (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1752)

```diff
-                   case MO:
+                   case oi:
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1754` → after: `L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1754) · [Before (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1754)

```diff
-                   case PO:
+                   case Ri:
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1756` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1756) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1756)

```diff
-                   case zO:
+                   case ki:
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1794` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1794) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1794)

```diff
-                 return GB.FN = WO, DB
+                 return He.YB = Ei, be
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1816` → after: `L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1816) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1816)

```diff
-                         YB && (YB = DB.FN.deserialize(YB)), OB(YB)
+                         ye && (ye = be.YB.deserialize(ye)), ie(ye)
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L1836` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1836) · [Before (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1836)

```diff
-                             if (JB && (JB = DB.FN.deserialize(JB)), void 0 !== (JB = BB(JB, yB.key, jB + 1))) return void OB(JB)
+                             if (Je && (Je = be.YB.deserialize(Je)), void 0 !== (Je = ee(Je, Fe.key, Ue + 1))) return void ie(Je)
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L1856` → after: `L1856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L1856) · [Before (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L1856)

```diff
-                     yB.FN.serialize(OB, (function(OB, JB) {
+                     Fe.YB.serialize(ie, (function(ie, Je) {
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L2067` → after: `L2067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2067) · [Before (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2067)

```diff
-                 return GB.keyPrefix = rO(BB, OB._defaultConfig), wO() ? (OB._dbInfo = GB, GB.FN = WO, JB.resolve()) : JB.reject()
+                 return He.keyPrefix = Ci(ee, ie._defaultConfig), ui() ? (ie._dbInfo = He, He.YB = Ei, Je.resolve()) : Je.reject()
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2087)

```diff
-                   return YB && (YB = OB.FN.deserialize(YB)), YB
+                   return ye && (ye = ie.YB.deserialize(ye)), ye
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L2099` → after: `L2099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2099) · [Before (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2099)

```diff
-                         if (JB && (JB = OB.FN.deserialize(JB)), void 0 !== (JB = BB(JB, yB.substring(DB), oB++))) return JB
+                         if (Je && (Je = ie.YB.deserialize(Je)), void 0 !== (Je = ee(Je, Fe.substring(be), Ke++))) return Je
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L2157` → after: `L2157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2157) · [Before (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2157)

```diff
-                     oB.FN.serialize(OB, (function(OB, YB) {
+                     Ke.YB.serialize(ie, (function(ie, ye) {
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2377` → after: `L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2377) · [Before (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2377)

```diff
-         }, , , , , , (BB, OB, GB) => {
+         }, , , , , (ee, ie, He) => {
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2446` → after: `L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2446) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2446)

```diff
-         }, , , , , , , (BB, OB, GB) => {
+         }, , , , , , , , (ee, ie, He) => {
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2448` → after: `L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2448) · [Before (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2448)

```diff
-             d: () => DB
+             b: () => be
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2450` → after: `L2450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2450) · [Before (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2450)

```diff
-           var YB = GB(31);
+           var ye = He(35);
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2454` → after: `L2454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2454) · [Before (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2454)

```diff
-             return null !== (BB = YB.g.getItem("soundVol")) && void 0 !== BB ? BB : .5
+             return null !== (ee = ye.i.getItem("soundVol")) && void 0 !== ee ? ee : .5
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2456-L2459` → after: `L2456-L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2456-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2456-L2459) · [Before (L2456-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2456-L2459)

```diff
-         }, , , , (BB, OB, GB) => {
-           BB.exports = GB(60)
-         }, , , , (BB, OB, GB) => {
-           var YB = GB(65),
+         }, , , , , , , , , (ee, ie, He) => {
+           ee.exports = He(67)
+         }, , , , , , , , (ee, ie, He) => {
+           var ye = He(69),
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2570-L2571` → after: `L2570-L2571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2570-L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2570-L2571) · [Before (L2570-L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2570-L2571)

```diff
-                   case DB:
-                   case QB:
+                   case be:
+                   case Me:
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2592` → after: `L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2592) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2592)

```diff
-                   return null === BB || "object" !== typeof BB ? null : "function" === typeof(BB = zB && BB[zB] || BB["@@iterator"]) ? BB : null
+                   return null === ee || "object" !== typeof ee ? null : "function" === typeof(ee = ke && ee[ke] || ee["@@iterator"]) ? ee : null
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L2746` → after: `L2746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2746) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2746)

```diff
-         }, , , , , BB => {
+         }, , ee => {
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L2779` → after: `L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2779) · [Before (L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2779)

```diff
-         }, , , , , (BB, OB, GB) => {
+         }, , , , , , , , (ee, ie, He) => {
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L2786-L2790` → after: `L2786-L2790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2786-L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2786-L2790) · [Before (L2786-L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2786-L2790)

```diff
-           }(), BB.exports = GB(76)
-         }, , , , , , (BB, OB, GB) => {
-           var YB = GB(56),
-             DB = GB(65),
-             QB = GB(81);
+           }(), ee.exports = He(85)
+         }, , , , , , , , (ee, ie, He) => {
+           var ye = He(59),
+             be = He(69),
+             Me = He(88);
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L2877` → after: `L2877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2877) · [Before (L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2877)

```diff
-             }(OB) && (null === GB ? BB.removeAttribute(OB) : BB.setAttribute(OB, "" + GB)) : DB.mustUseProperty ? BB[DB.propertyName] = null === GB ? 3 !== DB.type && "" : GB : (OB = DB.attributeName, YB = DB.attributeNamespace, null === GB ? BB.removeAttribute(OB) : (GB = 3 ===  … [truncated]
+             }(ie) && (null === He ? ee.removeAttribute(ie) : ee.setAttribute(ie, "" + He)) : be.mustUseProperty ? ee[be.propertyName] = null === He ? 3 !== be.type && "" : He : (ie = be.attributeName, ye = be.attributeNamespace, null === He ? ee.removeAttribute(ie) : (He = 3 ===  … [truncated]
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L2918` → after: `L2918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L2918) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L2918)

```diff
-             return null === BB || "object" !== typeof BB ? null : "function" === typeof(BB = hB && BB[hB] || BB["@@iterator"]) ? BB : null
+             return null === ee || "object" !== typeof ee ? null : "function" === typeof(ee = le && ee[le] || ee["@@iterator"]) ? ee : null
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L3016` → after: `L3016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3016) · [Before (L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3016)

```diff
-               case UB:
+               case We:
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L3018` → after: `L3018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3018) · [Before (L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3018)

```diff
-               case nB:
+               case de:
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L3020` → after: `L3020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3020) · [Before (L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3020)

```diff
-               case kB:
+               case Ze:
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L3022` → after: `L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3022) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3022)

```diff
-               case fB:
+               case te:
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L3024` → after: `L3024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3024) · [Before (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3024)

```diff
-               case mB:
+               case Ae:
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L3026` → after: `L3026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3026) · [Before (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3026)

```diff
-               case IB:
+               case Ye:
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L3030` → after: `L3030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3030) · [Before (L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3030)

```diff
-               case KB:
+               case De:
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L3032` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3032) · [Before (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3032)

```diff
-               case dB:
+               case we:
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L3034` → after: `L3034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3034) · [Before (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3034)

```diff
-               case uB:
+               case Pe:
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L3037` → after: `L3037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3037) · [Before (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3037)

```diff
-               case FB:
+               case Ve:
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L3039` → after: `L3039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3039) · [Before (L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3039)

```diff
-               case LB:
+               case ce:
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L3041` → after: `L3041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3041) · [Before (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3041)

```diff
-               case iB:
+               case ae:
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L3125` → after: `L3125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3125) · [Before (L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3125)

```diff
-               checked: null != GB ? GB : BB._wrapperState.initialChecked
+               checked: null != He ? He : ee._wrapperState.initialChecked
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L3425` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3425) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3425)

```diff
-             BB: switch (OB) {
+             ee: switch (ie) {
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L3491` → after: `L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3491) · [Before (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3491)

```diff
-             return 3 === OB.tag ? GB : null
+             return 3 === ie.tag ? He : null
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L3563` → after: `L3563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3563) · [Before (L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3563)

```diff
-                 return GB.stateNode.current === GB ? BB : OB
+                 return He.stateNode.current === He ? ee : ie
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3775)

```diff
-             return 0 !== (BB = -1073741825 & BB.pendingLanes) ? BB : 1073741824 & BB ? 1073741824 : 0
+             return 0 !== (ee = -1073741825 & ee.pendingLanes) ? ee : 1073741824 & ee ? 1073741824 : 0
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L3899` → after: `L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3899) · [Before (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3899)

```diff
-             return yY = DB.slice(BB, 1 < OB ? 1 - OB : void 0)
+             return oy = be.slice(ee, 1 < ie ? 1 - ie : void 0)
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L3904` → after: `L3904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3904) · [Before (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3904)

```diff
-             return "charCode" in BB ? 0 === (BB = BB.charCode) && 13 === OB && (BB = 13) : BB = OB, 10 === BB && (BB = 13), 32 <= BB || 13 === BB ? BB : 0
+             return "charCode" in ee ? 0 === (ee = ee.charCode) && 13 === ie && (ee = 13) : ee = ie, 10 === ee && (ee = 13), 32 <= ee || 13 === ee ? ee : 0
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L3918` → after: `L3918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L3918) · [Before (L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L3918)

```diff
-               return this.isDefaultPrevented = (null != DB.defaultPrevented ? DB.defaultPrevented : !1 === DB.returnValue) ? PY : zY, this.isPropagationStopped = zY, this
+               return this.isDefaultPrevented = (null != be.defaultPrevented ? be.defaultPrevented : !1 === be.returnValue) ? qy : fy, this.isPropagationStopped = fy, this
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L4278` → after: `L4278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4278) · [Before (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4278)

```diff
-               BB: {
+               ee: {
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L4320` → after: `L4320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4320) · [Before (L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4320)

```diff
-             var YB = GB.window === GB ? GB.document : 9 === GB.nodeType ? GB : GB.ownerDocument;
+             var ye = He.window === He ? He.document : 9 === He.nodeType ? He : He.ownerDocument;
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L4358` → after: `L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4358) · [Before (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4358)

```diff
-               BB: {
+               ee: {
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L4424` → after: `L4424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4424) · [Before (L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4424)

```diff
-             if (0 === (1 & OB) && 0 === (2 & OB) && null !== YB) BB: for (;;) {
+             if (0 === (1 & ie) && 0 === (2 & ie) && null !== ye) ee: for (;;) {
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L4458` → after: `L4458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4458) · [Before (L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4458)

```diff
-               BB: {
+               ee: {
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L4508-L4510` → after: `L4508-L4510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4508-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4508-L4510) · [Before (L4508-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4508-L4510)

```diff
-                     case FG:
-                     case iG:
-                     case LG:
+                     case cH:
+                     case xH:
+                     case LH:
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L4513` → after: `L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4513) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4513)

```diff
-                     case gG:
+                     case CH:
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L4553-L4554` → after: `L4553-L4554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4553-L4554) · [Before (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4553-L4554)

```diff
-                 if (yB = "mouseout" === BB || "pointerout" === BB, (!(jB = "mouseover" === BB || "pointerover" === BB) || 0 !== (16 & OB) || !(JB = GB.relatedTarget || GB.fromElement) || !PQ(JB) && !JB[JQ]) && (yB || jB) && (jB = DB.window === DB ? DB : (jB = DB.ownerDocument) ?  … [truncated]
-                   if (MB = SY, qB = "onMouseLeave", zB = "onMouseEnter", pB = "mouse", "pointerout" !== BB && "pointerover" !== BB || (MB = rY, qB = "onPointerLeave", zB = "onPointerEnter", pB = "pointer"), PB = null == yB ? jB : lQ(yB), lB = null == JB ? jB : lQ(JB), (jB = new M … [truncated]
+                 if (Fe = "mouseout" === ee || "pointerout" === ee, (!(Ue = "mouseover" === ee || "pointerover" === ee) || 0 !== (16 & ie) || !(Je = He.relatedTarget || He.fromElement) || !qM(Je) && !Je[RM]) && (Fe || Ue) && (Ue = be.window === be ? be : (Ue = be.ownerDocument) ?  … [truncated]
+                   if (oe = Wy, Te = "onMouseLeave", ke = "onMouseEnter", fe = "mouse", "pointerout" !== ee && "pointerover" !== ee || (oe = vy, Te = "onPointerLeave", ke = "onPointerEnter", fe = "pointer"), Re = null == Fe ? Ue : TM(Fe), qe = null == Je ? Ue : TM(Je), (Ue = new o … [truncated]
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L4600` → after: `L4600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4600) · [Before (L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4600)

```diff
-                 if (aY) BB: {
+                 if (jy) ee: {
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L4618` → after: `L4618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4618) · [Before (L4618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4618)

```diff
-                 }), RB ? WB.data = RB : null !== (RB = sY(GB)) && (WB.data = RB))), (RB = TY ? function(BB, OB) {
+                 }), ze ? Be.data = ze : null !== (ze = Qy(He)) && (Be.data = ze))), (ze = Iy ? function(ee, ie) {
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L4856` → after: `L4856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4856) · [Before (L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4856)

```diff
-             HQ = void 0 !== wQ ? wQ : function() {},
+             GM = void 0 !== mM ? mM : function() {},
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L4861` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4861) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4861)

```diff
-             Bo = 1e4 > tQ ? EQ : function() {
+             HK = 1e4 > iK ? lM : function() {
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L4867` → after: `L4867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4867) · [Before (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4867)

```diff
-               case hQ:
+               case nM:
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L4869` → after: `L4869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4869) · [Before (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4869)

```diff
-               case aQ:
+               case jM:
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L4871` → after: `L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4871) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4871)

```diff
-               case eQ:
+               case sM:
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L4873` → after: `L4873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4873) · [Before (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4873)

```diff
-               case TQ:
+               case IM:
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L4875` → after: `L4875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L4875) · [Before (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L4875)

```diff
-               case bQ:
+               case hM:
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L5028` → after: `L5028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5028) · [Before (L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5028)

```diff
-               null === GB ? OB.next = OB : (OB.next = GB.next, GB.next = OB), BB.pending = OB
+               null === He ? ie.next = ie : (ie.next = He.next, He.next = ie), ee.pending = ie
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L5048` → after: `L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5048) · [Before (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5048)

```diff
-                   null === QB ? DB = QB = oB : QB = QB.next = oB, GB = GB.next
+                   null === Me ? be = Me = Ke : Me = Me.next = Ke, He = He.next
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L5050` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5050) · [Before (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5050)

```diff
-                 null === QB ? DB = QB = OB : QB = QB.next = OB
+                 null === Me ? be = Me = ie : Me = Me.next = ie
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L5060` → after: `L5060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5060) · [Before (L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5060)

```diff
-             null === (BB = GB.lastBaseUpdate) ? GB.firstBaseUpdate = OB : BB.next = OB, GB.lastBaseUpdate = OB
+             null === (ee = He.lastBaseUpdate) ? He.firstBaseUpdate = ie : ee.next = ie, He.lastBaseUpdate = ie
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L5073` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5073) · [Before (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5073)

```diff
-               JB.next = null, null === jB ? oB = MB : jB.next = MB, jB = JB;
+               Je.next = null, null === Ue ? Ke = oe : Ue.next = oe, Ue = Je;
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L5077` → after: `L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5077) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5077)

```diff
-                 zB !== jB && (null === zB ? PB.firstBaseUpdate = MB : zB.next = MB, PB.lastBaseUpdate = JB)
+                 ke !== Ue && (null === ke ? Re.firstBaseUpdate = oe : ke.next = oe, Re.lastBaseUpdate = Je)
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L5093` → after: `L5093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5093) · [Before (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5093)

```diff
-                   BB: {
+                   ee: {
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5146)

```diff
-             GB = null === (GB = GB(YB, OB = BB.memoizedState)) || void 0 === GB ? OB : DB({}, OB, GB), BB.memoizedState = GB, 0 === BB.lanes && (BB.updateQueue.baseState = GB)
+             He = null === (He = He(ye, ie = ee.memoizedState)) || void 0 === He ? ie : be({}, ie, He), ee.memoizedState = He, 0 === ee.lanes && (ee.updateQueue.baseState = He)
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L5183` → after: `L5183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5183) · [Before (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5183)

```diff
-             return "object" === typeof QB && null !== QB ? QB = Ro(QB) : (DB = kQ(OB) ? UQ : SQ.current, QB = (YB = null !== (YB = OB.contextTypes) && void 0 !== YB) ? fQ(BB, DB) : VQ), OB = new OB(GB, QB), BB.memoizedState = null !== OB.state && void 0 !== OB.state ? OB.state :  … [truncated]
+             return "object" === typeof Me && null !== Me ? Me = BK(Me) : (be = DM(ie) ? ZM : WM.current, Me = (ye = null !== (ye = ie.contextTypes) && void 0 !== ye) ? wM(ee, be) : dM), ie = new ie(He, Me), ee.memoizedState = null !== ie.state && void 0 !== ie.state ? ie.state :  … [truncated]
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L5194` → after: `L5194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5194) · [Before (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5194)

```diff
-             "object" === typeof QB && null !== QB ? DB.context = Ro(QB) : (QB = kQ(OB) ? UQ : SQ.current, DB.context = fQ(BB, QB)), fo(BB, GB, DB, YB), DB.state = BB.memoizedState, "function" === typeof(QB = OB.getDerivedStateFromProps) && (uo(BB, OB, QB, GB), DB.state = BB.memoi … [truncated]
+             "object" === typeof Me && null !== Me ? be.context = BK(Me) : (Me = DM(ie) ? ZM : WM.current, be.context = wM(ee, Me)), ZK(ee, He, be, ye), be.state = ee.memoizedState, "function" === typeof(Me = ie.getDerivedStateFromProps) && (PK(ee, ie, Me, He), be.state = ee.memoi … [truncated]
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L5246` → after: `L5246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5246) · [Before (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5246)

```diff
-               return OB.index = YB, BB ? null !== (YB = OB.alternate) ? (YB = YB.index) < GB ? (OB.flags = 2, GB) : YB : (OB.flags = 2, GB) : GB
+               return ie.index = ye, ee ? null !== (ye = ie.alternate) ? (ye = ye.index) < He ? (ie.flags = 2, He) : ye : (ie.flags = 2, He) : He
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L5273` → after: `L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5273) · [Before (L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5273)

```diff
-                   case SB:
+                   case Oe:
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L5275` → after: `L5275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5275) · [Before (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5275)

```diff
-                   case nB:
+                   case de:
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L5289` → after: `L5289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5289) · [Before (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5289)

```diff
-                   case SB:
+                   case Oe:
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L5291` → after: `L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5291) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5291)

```diff
-                   case nB:
+                   case de:
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L5304-L5307` → after: `L5304-L5307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5304-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5304-L5307) · [Before (L5304-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5304-L5307)

```diff
-                   case SB:
-                     return BB = BB.get(null === YB.key ? GB : YB.key) || null, YB.type === UB ? PB(OB, BB, YB.props.children, DB, YB.key) : JB(OB, BB, YB, DB);
-                   case nB:
-                     return MB(OB, BB = BB.get(null === YB.key ? GB : YB.key) || null, YB, DB)
+                   case Oe:
+                     return ee = ee.get(null === ye.key ? He : ye.key) || null, ye.type === We ? Re(ie, ee, ye.props.children, be, ye.key) : Je(ie, ee, ye, be);
+                   case de:
+                     return oe(ie, ee = ee.get(null === ye.key ? He : ye.key) || null, ye, be)
```

#### 186. `bundles/bloxd.io/main.js` (Changed code · before: `L5323` → after: `L5323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5323) · [Before (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5323)

```diff
-                 BB && PB && null === NB.alternate && OB(DB, PB), oB = QB(NB, oB, qB), null === MB ? JB = NB : MB.sibling = NB, MB = NB, PB = ZB
+                 ee && Re && null === Xe.alternate && ie(be, Re), Ke = Me(Xe, Ke, Te), null === oe ? Je = Xe : oe.sibling = Xe, oe = Xe, Re = pe
```

#### 187. `bundles/bloxd.io/main.js` (Changed code · before: `L5327` → after: `L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5327) · [Before (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5327)

```diff
-                 for (; qB < jB.length; qB++) null !== (PB = zB(DB, jB[qB], yB)) && (oB = QB(PB, oB, qB), null === MB ? JB = PB : MB.sibling = PB, MB = PB);
+                 for (; Te < Ue.length; Te++) null !== (Re = ke(be, Ue[Te], Fe)) && (Ke = Me(Re, Ke, Te), null === oe ? Je = Re : oe.sibling = Re, oe = Re);
```

#### 188. `bundles/bloxd.io/main.js` (Changed code · before: `L5330` → after: `L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5330) · [Before (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5330)

```diff
-               for (PB = YB(DB, PB); qB < jB.length; qB++) null !== (ZB = pB(PB, DB, qB, jB[qB], yB)) && (BB && null !== ZB.alternate && PB.delete(null === ZB.key ? qB : ZB.key), oB = QB(ZB, oB, qB), null === MB ? JB = ZB : MB.sibling = ZB, MB = ZB);
+               for (Re = ye(be, Re); Te < Ue.length; Te++) null !== (pe = fe(Re, be, Te, Ue[Te], Fe)) && (ee && null !== pe.alternate && Re.delete(null === pe.key ? Te : pe.key), Ke = Me(pe, Ke, Te), null === oe ? Je = pe : oe.sibling = pe, oe = pe);
```

#### 189. `bundles/bloxd.io/main.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5347)

```diff
-                 BB && qB && null === WB.alternate && OB(DB, qB), jB = QB(WB, jB, ZB), null === PB ? MB = WB : PB.sibling = WB, PB = WB, qB = NB
+                 ee && Te && null === Be.alternate && ie(be, Te), Ue = Me(Be, Ue, pe), null === Re ? oe = Be : Re.sibling = Be, Re = Be, Te = Xe
```

#### 190. `bundles/bloxd.io/main.js` (Changed code · before: `L5351` → after: `L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5351) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5351)

```diff
-                 for (; !RB.done; ZB++, RB = yB.next()) null !== (RB = zB(DB, RB.value, JB)) && (jB = QB(RB, jB, ZB), null === PB ? MB = RB : PB.sibling = RB, PB = RB);
+                 for (; !ze.done; pe++, ze = Fe.next()) null !== (ze = ke(be, ze.value, Je)) && (Ue = Me(ze, Ue, pe), null === Re ? oe = ze : Re.sibling = ze, Re = ze);
```

#### 191. `bundles/bloxd.io/main.js` (Changed code · before: `L5354` → after: `L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5354) · [Before (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5354)

```diff
-               for (qB = YB(DB, qB); !RB.done; ZB++, RB = yB.next()) null !== (RB = pB(qB, DB, ZB, RB.value, JB)) && (BB && null !== RB.alternate && qB.delete(null === RB.key ? ZB : RB.key), jB = QB(RB, jB, ZB), null === PB ? MB = RB : PB.sibling = RB, PB = RB);
+               for (Te = ye(be, Te); !ze.done; pe++, ze = Fe.next()) null !== (ze = fe(Te, be, pe, ze.value, Je)) && (ee && null !== ze.alternate && Te.delete(null === ze.key ? pe : ze.key), Ue = Me(ze, Ue, pe), null === Re ? oe = ze : Re.sibling = ze, Re = ze);
```

#### 192. `bundles/bloxd.io/main.js` (Changed code · before: `L5364-L5365` → after: `L5364-L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5364-L5365) · [Before (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5364-L5365)

```diff
-                 case SB:
-                   BB: {
+                 case Oe:
+                   ee: {
```

#### 193. `bundles/bloxd.io/main.js` (Changed code · before: `L5385-L5386` → after: `L5385-L5386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5385-L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5385-L5386) · [Before (L5385-L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5385-L5386)

```diff
-                 case nB:
-                   BB: {
+                 case de:
+                   ee: {
```

#### 194. `bundles/bloxd.io/main.js` (Changed code · before: `L5524` → after: `L5524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5524) · [Before (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5524)

```diff
-               BB: {
+               ee: {
```

#### 195. `bundles/bloxd.io/main.js` (Changed code · before: `L5574` → after: `L5574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5574) · [Before (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5574)

```diff
-             if (lj = QB, pj = OB, OB.memoizedState = null, OB.updateQueue = null, OB.lanes = 0, Pj.current = null === BB || null === BB.memoizedState ? Hj : vj, BB = GB(YB, DB), Rj) {
+             if (qU = Me, fU = ie, ie.memoizedState = null, ie.updateQueue = null, ie.lanes = 0, RU.current = null === ee || null === ee.memoizedState ? hU : NU, ee = He(ye, be), zU) {
```

#### 196. `bundles/bloxd.io/main.js` (Changed code · before: `L5593` → after: `L5593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5593) · [Before (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5593)

```diff
-             return null === Zj ? pj.memoizedState = Zj = BB : Zj = Zj.next = BB, Zj
+             return null === pU ? fU.memoizedState = pU = ee : pU = pU.next = ee, pU
```

#### 197. `bundles/bloxd.io/main.js` (Changed code · before: `L5611` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5611) · [Before (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5611)

```diff
-               }, null === Zj ? pj.memoizedState = Zj = BB : Zj = Zj.next = BB
+               }, null === pU ? fU.memoizedState = pU = ee : pU = pU.next = ee
```

#### 198. `bundles/bloxd.io/main.js` (Changed code · before: `L5660` → after: `L5660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5660) · [Before (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5660)

```diff
-               null === yB ? QB = YB : yB.next = jB, ND(YB, OB.memoizedState) || (tj = !0), OB.memoizedState = YB, OB.baseState = QB, OB.baseQueue = yB, GB.lastRenderedState = YB
+               null === Fe ? Me = ye : Fe.next = Ue, Bb(ye, ie.memoizedState) || (QU = !0), ie.memoizedState = ye, ie.baseState = Me, ie.baseQueue = Fe, He.lastRenderedState = ye
```

#### 199. `bundles/bloxd.io/main.js` (Changed code · before: `L5688` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5688) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5688)

```diff
-             if (null !== DB ? BB = DB === YB : (BB = BB.mutableReadLanes, (BB = (lj & BB) === BB) && (OB._workInProgressVersionPrimary = YB, Jj.push(OB))), BB) return GB(OB._source);
+             if (null !== be ? ee = be === ye : (ee = ee.mutableReadLanes, (ee = (qU & ee) === ee) && (ie._workInProgressVersionPrimary = ye, JU.push(ie))), ee) return He(ie._source);
```

#### 200. `bundles/bloxd.io/main.js` (Changed code · before: `L5770` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5770) · [Before (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5770)

```diff
-             }, pj.updateQueue = OB, OB.lastEffect = BB.next = BB) : null === (GB = OB.lastEffect) ? OB.lastEffect = BB.next = BB : (YB = GB.next, GB.next = BB, BB.next = YB, OB.lastEffect = BB), BB
+             }, fU.updateQueue = ie, ie.lastEffect = ee.next = ee) : null === (He = ie.lastEffect) ? ie.lastEffect = ee.next = ee : (ye = He.next, He.next = ee, ee.next = ye, ie.lastEffect = ee), ee
```

#### 201. `bundles/bloxd.io/main.js` (Changed code · before: `L5865` → after: `L5865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L5865) · [Before (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L5865)

```diff
-             if (null === oB ? QB.next = QB : (QB.next = oB.next, oB.next = QB), OB.pending = QB, oB = BB.alternate, BB === pj || null !== oB && oB === pj) Rj = Nj = !0;
+             if (null === Ke ? Me.next = Me : (Me.next = Ke.next, Ke.next = Me), ie.pending = Me, Ke = ee.alternate, ee === fU || null !== Ke && Ke === fU) zU = XU = !0;
```

#### 202. `bundles/bloxd.io/main.js` (Changed code · before: `L6067` → after: `L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6067) · [Before (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6067)

```diff
-             return oB = BB.child, 0 === (DB & QB) && (DB = oB.memoizedProps, (GB = null !== (GB = GB.compare) ? GB : WD)(DB, YB) && BB.ref === OB.ref) ? Sy(BB, OB, QB) : (OB.flags |= 1, (BB = lM(oB, YB)).ref = OB.ref, BB.return = OB, OB.child = BB)
+             return Ke = ee.child, 0 === (be & Me) && (be = Ke.memoizedProps, (He = null !== (He = He.compare) ? He : gb)(be, ye) && ee.ref === ie.ref) ? OF(ee, ie, Me) : (ie.flags |= 1, (ee = qo(Ke, ye)).ref = ie.ref, ee.return = ie, ie.child = ee)
```

#### 203. `bundles/bloxd.io/main.js` (Changed code · before: `L6087` → after: `L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6087) · [Before (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6087)

```diff
-                 if (0 === (1073741824 & GB)) return BB = null !== QB ? QB.baseLanes | GB : GB, OB.lanes = OB.childLanes = 1073741824, OB.memoizedState = {
+                 if (0 === (1073741824 & He)) return ee = null !== Me ? Me.baseLanes | He : He, ie.lanes = ie.childLanes = 1073741824, ie.memoizedState = {
```

#### 204. `bundles/bloxd.io/main.js` (Changed code · before: `L6104` → after: `L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6104) · [Before (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6104)

```diff
-             var QB = kQ(GB) ? UQ : SQ.current;
+             var Me = DM(He) ? ZM : WM.current;
```

#### 205. `bundles/bloxd.io/main.js` (Changed code · before: `L6120` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6120) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6120)

```diff
-               "object" === typeof JB && null !== JB ? JB = Ro(JB) : JB = fQ(OB, JB = kQ(GB) ? UQ : SQ.current);
+               "object" === typeof Je && null !== Je ? Je = BK(Je) : Je = wM(ie, Je = DM(He) ? ZM : WM.current);
```

#### 206. `bundles/bloxd.io/main.js` (Changed code · before: `L6127` → after: `L6127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6127) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6127)

```diff
-               oB = OB.stateNode, Vo(BB, OB), jB = OB.memoizedProps, JB = OB.type === OB.elementType ? jB : yo(OB.type, jB), oB.props = JB, PB = OB.pendingProps, zB = oB.context, "object" === typeof(yB = GB.contextType) && null !== yB ? yB = Ro(yB) : yB = fQ(OB, yB = kQ(GB) ? UQ : … [truncated]
+               Ke = ie.stateNode, OK(ee, ie), Ue = ie.memoizedProps, Je = ie.type === ie.elementType ? Ue : oK(ie.type, Ue), Ke.props = Je, Re = ie.pendingProps, ke = Ke.context, "object" === typeof(Fe = He.contextType) && null !== Fe ? Fe = BK(Fe) : Fe = wM(ie, Fe = DM(He) ? ZM : … [truncated]
```

#### 207. `bundles/bloxd.io/main.js` (Changed code · before: `L6210` → after: `L6210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6210) · [Before (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6210)

```diff
-               UP: null,
+               PR: null,
```

#### 208. `bundles/bloxd.io/main.js` (Changed code · before: `L6216` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6216) · [Before (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6216)

```diff
-             } : (oB.isBackwards = OB, oB.UP = null, oB.renderingStartTime = 0, oB.last = YB, oB.tail = GB, oB.tailMode = DB, oB.lastEffect = QB)
+             } : (Ke.isBackwards = ie, Ke.PR = null, Ke.renderingStartTime = 0, Ke.last = ye, Ke.tail = He, Ke.tailMode = be, Ke.lastEffect = Me)
```

#### 209. `bundles/bloxd.io/main.js` (Changed code · before: `L6225` → after: `L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6225) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6225)

```diff
-               if (null !== BB && 0 !== (64 & BB.flags)) BB: for (BB = OB.child; null !== BB;) {
+               if (null !== ee && 0 !== (64 & ee.flags)) ee: for (ee = ie.child; null !== ee;) {
```

#### 210. `bundles/bloxd.io/main.js` (Changed code · before: `L6374` → after: `L6374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6374) · [Before (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6374)

```diff
-                     switch (JB = 9 === QB.nodeType ? QB : QB.ownerDocument, BB === lO && (BB = qO(GB)), BB === lO ? "script" === GB ? ((BB = JB.createElement("div")).innerHTML = "<script><\/script>", BB = BB.removeChild(BB.firstChild)) : "string" === typeof YB.is ? BB = JB.create … [truncated]
+                     switch (Je = 9 === Me.nodeType ? Me : Me.ownerDocument, ee === qi && (ee = Ti(He)), ee === qi ? "script" === He ? ((ee = Je.createElement("div")).innerHTML = "<script><\/script>", ee = ee.removeChild(ee.firstChild)) : "string" === typeof ye.is ? ee = Je.create … [truncated]
```

#### 211. `bundles/bloxd.io/main.js` (Changed code · before: `L6451` → after: `L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6451) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6451)

```diff
-                   GB = bo(To.current), bo(ao.current), jj(OB) ? (YB = OB.stateNode, GB = OB.memoizedProps, YB[jQ] = OB, YB.nodeValue !== GB && (OB.flags |= 4)) : ((YB = (9 === GB.nodeType ? GB : GB.ownerDocument).createTextNode(YB))[jQ] = OB, OB.stateNode = YB)
+                   He = sK(jK.current), sK(SK.current), UU(ie) ? (ye = ie.stateNode, He = ie.memoizedProps, ye[JM] = ie, ye.nodeValue !== He && (ie.flags |= 4)) : ((ye = (9 === He.nodeType ? He : He.ownerDocument).createTextNode(ye))[JM] = ie, ie.stateNode = ye)
```

#### 212. `bundles/bloxd.io/main.js` (Changed code · before: `L6462` → after: `L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6462) · [Before (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6462)

```diff
-                 if (jB = 0 !== (64 & OB.flags), null === (JB = YB.UP))
+                 if (Ue = 0 !== (64 & ie.flags), null === (Je = ye.PR))
```

#### 213. `bundles/bloxd.io/main.js` (Changed code · before: `L6483` → after: `L6483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6483) · [Before (L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6483)

```diff
-                   YB.isBackwards ? (JB.sibling = OB.child, OB.child = JB) : (null !== (GB = YB.last) ? GB.sibling = JB : OB.child = JB, YB.last = JB)
+                   ye.isBackwards ? (Je.sibling = ie.child, ie.child = Je) : (null !== (He = ye.last) ? He.sibling = Je : ie.child = Je, ye.last = Je)
```

#### 214. `bundles/bloxd.io/main.js` (Changed code · before: `L6485` → after: `L6485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6485) · [Before (L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6485)

```diff
-                 return null !== YB.tail ? (GB = YB.tail, YB.UP = GB, YB.tail = GB.sibling, YB.lastEffect = OB.lastEffect, YB.renderingStartTime = Bo(), GB.sibling = null, OB = xo.current, AQ(xo, jB ? 1 & OB | 2 : 1 & OB), GB) : null;
+                 return null !== ye.tail ? (He = ye.tail, ye.PR = He, ye.tail = He.sibling, ye.lastEffect = ie.lastEffect, ye.renderingStartTime = HK(), He.sibling = null, ie = rK.current, OM(rK, Ue ? 1 & ie | 2 : 1 & ie), He) : null;
```

#### 215. `bundles/bloxd.io/main.js` (Changed code · before: `L6635` → after: `L6635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6635) · [Before (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6635)

```diff
-                 componentStack: null !== BB ? BB : ""
+                 componentStack: null !== ee ? ee : ""
```

#### 216. `bundles/bloxd.io/main.js` (Changed code · before: `L6666` → after: `L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6666) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6666)

```diff
-                   OB = (BB = OB.stateNode).getSnapshotBeforeUpdate(OB.elementType === OB.type ? GB : yo(OB.type, GB), YB), BB.__reactInternalSnapshotBeforeUpdate = OB
+                   ie = (ee = ie.stateNode).getSnapshotBeforeUpdate(ie.elementType === ie.type ? He : oK(ie.type, He), ye), ee.__reactInternalSnapshotBeforeUpdate = ie
```

#### 217. `bundles/bloxd.io/main.js` (Changed code · before: `L6805` → after: `L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6805) · [Before (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6805)

```diff
-             BB: {
+             ee: {
```

#### 218. `bundles/bloxd.io/main.js` (Changed code · before: `L6824` → after: `L6824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6824) · [Before (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6824)

```diff
-             16 & GB.flags && (AO(OB, ""), GB.flags &= -17);BB: OB: for (GB = BB;;) {
+             16 & He.flags && (gi(ie, ""), He.flags &= -17);ee: ie: for (He = ee;;) {
```

#### 219. `bundles/bloxd.io/main.js` (Changed code · before: `L6865` → after: `L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6865) · [Before (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6865)

```diff
-                 BB: for (;;) {
+                 ee: for (;;) {
```

#### 220. `bundles/bloxd.io/main.js` (Changed code · before: `L6881` → after: `L6881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L6881) · [Before (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L6881)

```diff
-                 BB: for (var jB = BB, yB = DB, JB = yB;;)
+                 ee: for (var Ue = ee, Fe = be, Je = Fe;;)
```

#### 221. `bundles/bloxd.io/main.js` (Changed code · before: `L7026` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7026) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7026)

```diff
-             return 0 !== (48 & sy) ? Bo() : -1 !== kJ ? kJ : kJ = Bo()
+             return 0 !== (48 & GF) ? HK() : -1 !== ZJ ? ZJ : ZJ = HK()
```

#### 222. `bundles/bloxd.io/main.js` (Changed code · before: `L7083` → after: `L7083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7083) · [Before (L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7083)

```diff
-             if (YB = aG(BB, BB === xy ? BJ : 0), OB = cG, 0 === YB) null !== GB && (GB !== CQ && rQ(GB), BB.callbackNode = null, BB.callbackPriority = 0);
+             if (ye = jH(ee, ee === rF ? eJ : 0), ie = SH, 0 === ye) null !== He && (He !== NM && vM(He), ee.callbackNode = null, ee.callbackPriority = 0);
```

#### 223. `bundles/bloxd.io/main.js` (Changed code · before: `L7123` → after: `L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7123) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7123)

```diff
-             var GB = aG(BB, BB === xy ? BJ : 0);
+             var He = jH(ee, ee === rF ? eJ : 0);
```

#### 224. `bundles/bloxd.io/main.js` (Changed code · before: `L7274` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7274) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7274)

```diff
-                 BB: {
+                 ee: {
```

#### 225. `bundles/bloxd.io/main.js` (Changed code · before: `L7356` → after: `L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7356) · [Before (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7356)

```diff
-             return Hy.current = Cj, null === BB ? Cj : BB
+             return hF.current = IU, null === ee ? IU : ee
```

#### 226. `bundles/bloxd.io/main.js` (Changed code · before: `L7396` → after: `L7396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7396) · [Before (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7396)

```diff
-                 null !== BB && 0 === (2048 & BB.flags) && (null === BB.firstEffect && (BB.firstEffect = OB.firstEffect), null !== OB.lastEffect && (null !== BB.lastEffect && (BB.lastEffect.nextEffect = OB.firstEffect), BB.lastEffect = OB.lastEffect), 1 < OB.flags && (null !== BB. … [truncated]
+                 null !== ee && 0 === (2048 & ee.flags) && (null === ee.firstEffect && (ee.firstEffect = ie.firstEffect), null !== ie.lastEffect && (null !== ee.lastEffect && (ee.lastEffect.nextEffect = ie.firstEffect), ee.lastEffect = ie.lastEffect), 1 < ie.flags && (null !== ee. … [truncated]
```

#### 227. `bundles/bloxd.io/main.js` (Changed code · before: `L7430` → after: `L7430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7430) · [Before (L7430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7430)

```diff
-             if (null !== nJ && 0 === (24 & YB) && nJ.has(BB) && nJ.delete(BB), BB === xy && (ty = xy = null, BJ = 0), 1 < GB.flags ? null !== GB.lastEffect ? (GB.lastEffect.nextEffect = GB, YB = GB.firstEffect) : YB = GB : YB = GB.firstEffect, null !== YB) {
+             if (null !== dJ && 0 === (24 & ye) && dJ.has(ee) && dJ.delete(ee), ee === rF && (QF = rF = null, eJ = 0), 1 < He.flags ? null !== He.lastEffect ? (He.lastEffect.nextEffect = He, ye = He.firstEffect) : ye = He : ye = He.firstEffect, null !== ye) {
```

#### 228. `bundles/bloxd.io/main.js` (Changed code · before: `L7436` → after: `L7436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7436) · [Before (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7436)

```diff
-                 else BB: if (yB = (yB = jB.ownerDocument) && yB.defaultView || window, (MB = yB.getSelection && yB.getSelection()) && 0 !== MB.rangeCount) {
+                 else ee: if (Fe = (Fe = Ue.ownerDocument) && Fe.defaultView || window, (oe = Fe.getSelection && Fe.getSelection()) && 0 !== oe.rangeCount) {
```

#### 229. `bundles/bloxd.io/main.js` (Changed code · before: `L7451` → after: `L7451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7451) · [Before (L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7451)

```diff
-                   OB: for (;;) {
+                   ie: for (;;) {
```

#### 230. `bundles/bloxd.io/main.js` (Changed code · before: `L7523` → after: `L7523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7523) · [Before (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7523)

```diff
-                 null !== jB && UD(WB) && (AB = jB.start, void 0 === (VB = jB.end) && (VB = AB), "selectionStart" in WB ? (WB.selectionStart = AB, WB.selectionEnd = Math.min(VB, WB.value.length)) : (VB = (AB = WB.ownerDocument || document) && AB.defaultView || window).getSelection … [truncated]
+                 null !== Ue && Zb(Be) && (Ee = Ue.start, void 0 === (ge = Ue.end) && (ge = Ee), "selectionStart" in Be ? (Be.selectionStart = Ee, Be.selectionEnd = Math.min(ge, Be.value.length)) : (ge = (Ee = Be.ownerDocument || document) && Ee.defaultView || window).getSelection … [truncated]
```

#### 231. `bundles/bloxd.io/main.js` (Changed code · before: `L7688-L7689` → after: `L7688-L7689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7688-L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7688-L7689) · [Before (L7688-L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7688-L7689)

```diff
-             else BB: switch (BB) {
-               case UB:
+             else ee: switch (ee) {
+               case We:
```

#### 232. `bundles/bloxd.io/main.js` (Changed code · before: `L7691` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7691) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7691)

```diff
-               case rB:
+               case Le:
```

#### 233. `bundles/bloxd.io/main.js` (Changed code · before: `L7694` → after: `L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7694) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7694)

```diff
-               case fB:
+               case te:
```

#### 234. `bundles/bloxd.io/main.js` (Changed code · before: `L7697` → after: `L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7697) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7697)

```diff
-               case kB:
+               case Ze:
```

#### 235. `bundles/bloxd.io/main.js` (Changed code · before: `L7699` → after: `L7699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7699) · [Before (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7699)

```diff
-               case mB:
+               case Ae:
```

#### 236. `bundles/bloxd.io/main.js` (Changed code · before: `L7701` → after: `L7701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7701) · [Before (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7701)

```diff
-               case IB:
+               case Ye:
```

#### 237. `bundles/bloxd.io/main.js` (Changed code · before: `L7703` → after: `L7703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7703) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7703)

```diff
-               case XB:
+               case Ce:
```

#### 238. `bundles/bloxd.io/main.js` (Changed code · before: `L7705` → after: `L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7705) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7705)

```diff
-               case wB:
+               case ve:
```

#### 239. `bundles/bloxd.io/main.js` (Changed code · before: `L7709` → after: `L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7709) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7709)

```diff
-                   case dB:
+                   case we:
```

#### 240. `bundles/bloxd.io/main.js` (Changed code · before: `L7712` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7712) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7712)

```diff
-                   case KB:
+                   case De:
```

#### 241. `bundles/bloxd.io/main.js` (Changed code · before: `L7715` → after: `L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7715) · [Before (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7715)

```diff
-                   case uB:
+                   case Pe:
```

#### 242. `bundles/bloxd.io/main.js` (Changed code · before: `L7718` → after: `L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7718) · [Before (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7718)

```diff
-                   case FB:
+                   case Ve:
```

#### 243. `bundles/bloxd.io/main.js` (Changed code · before: `L7721` → after: `L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7721) · [Before (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7721)

```diff
-                   case iB:
+                   case ae:
```

#### 244. `bundles/bloxd.io/main.js` (Changed code · before: `L7724` → after: `L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7724) · [Before (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7724)

```diff
-                   case LB:
+                   case ce:
```

#### 245. `bundles/bloxd.io/main.js` (Changed code · before: `L7728` → after: `L7728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7728) · [Before (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7728)

```diff
-                 throw Error(oB(130, null == BB ? BB : typeof BB, ""))
+                 throw Error(Ke(130, null == ee ? ee : typeof ee, ""))
```

#### 246. `bundles/bloxd.io/main.js` (Changed code · before: `L7761-L7762` → after: `L7761-L7762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7761-L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7761-L7762) · [Before (L7761-L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7761-L7762)

```diff
-             BB: if (GB) {
-               OB: {
+             ee: if (He) {
+               ie: {
```

#### 247. `bundles/bloxd.io/main.js` (Changed code · before: `L7789` → after: `L7789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7789) · [Before (L7789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7789)

```diff
-             return null === OB.context ? OB.context = GB : OB.pendingContext = GB, (OB = So(QB, jB)).payload = {
+             return null === ie.context ? ie.context = He : ie.pendingContext = He, (ie = dK(Me, Ue)).payload = {
```

#### 248. `bundles/bloxd.io/main.js` (Changed code · before: `L7801` → after: `L7801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7801) · [Before (L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7801)

```diff
-               BB.retryLane = 0 !== GB && GB < OB ? GB : OB
+               ee.retryLane = 0 !== He && He < ie ? He : ie
```

#### 249. `bundles/bloxd.io/main.js` (Changed code · before: `L7903` → after: `L7903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7903) · [Before (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7903)

```diff
-                       if (null !== (DB = OB.memoizedState) && (DB.UP = null, DB.tail = null, DB.lastEffect = null), AQ(xo, xo.current), YB) break;
+                       if (null !== (be = ie.memoizedState) && (be.PR = null, be.tail = null, be.lastEffect = null), OM(rK, rK.current), ye) break;
```

#### 250. `bundles/bloxd.io/main.js` (Changed code · before: `L7928` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7928) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7928)

```diff
-                 BB: {
+                 ee: {
```

#### 251. `bundles/bloxd.io/main.js` (Changed code · before: `L7954` → after: `L7954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7954) · [Before (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7954)

```diff
-                 return YB = OB.type, DB = OB.pendingProps, oy(BB, OB, YB, DB = OB.elementType === YB ? DB : yo(YB, DB), GB);
+                 return ye = ie.type, be = ie.pendingProps, KF(ee, ie, ye, be = ie.elementType === ye ? be : oK(ye, be), He);
```

#### 252. `bundles/bloxd.io/main.js` (Changed code · before: `L7956` → after: `L7956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7956) · [Before (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7956)

```diff
-                 return YB = OB.type, DB = OB.pendingProps, jy(BB, OB, YB, DB = OB.elementType === YB ? DB : yo(YB, DB), GB);
+                 return ye = ie.type, be = ie.pendingProps, UF(ee, ie, ye, be = ie.elementType === ye ? be : oK(ye, be), He);
```

#### 253. `bundles/bloxd.io/main.js` (Changed code · before: `L7978` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7978) · [Before (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7978)

```diff
-                 return YB = OB.type, DB = OB.pendingProps, Oy(BB, OB, YB, DB = OB.elementType === YB ? DB : yo(YB, DB), GB);
+                 return ye = ie.type, be = ie.pendingProps, iF(ee, ie, ye, be = ie.elementType === ye ? be : oK(ye, be), He);
```

#### 254. `bundles/bloxd.io/main.js` (Changed code · before: `L7985` → after: `L7985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L7985) · [Before (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L7985)

```diff
-                 BB: {
+                 ee: {
```

#### 255. `bundles/bloxd.io/main.js` (Changed code · before: `L8036` → after: `L8036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8036) · [Before (L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8036)

```diff
-                 return YB = OB.type, DB = OB.pendingProps, DB = OB.elementType === YB ? DB : yo(YB, DB), null !== BB && (BB.alternate = null, OB.alternate = null, OB.flags |= 2), OB.tag = 1, kQ(YB) ? (BB = !0, mQ(OB)) : BB = !1, No(OB, GB), Fo(OB, YB, DB), Lo(OB, YB, DB, GB), yy( … [truncated]
+                 return ye = ie.type, be = ie.pendingProps, be = ie.elementType === ye ? be : oK(ye, be), null !== ee && (ee.alternate = null, ie.alternate = null, ie.flags |= 2), ie.tag = 1, DM(ye) ? (ee = !0, VM(ie)) : ee = !1, zK(ie, He), VK(ie, ye, be), cK(ie, ye, be, He), FF( … [truncated]
```

#### 256. `bundles/bloxd.io/main.js` (Changed code · before: `L8193-L8195` → after: `L8193-L8195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8193-L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8193-L8195) · [Before (L8193-L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8193-L8195)

```diff
-         }, , , , , (BB, OB, GB) => {
-           BB.exports = GB(89)
-         }, , , , , , , , (BB, OB) => {
+         }, , , (ee, ie, He) => {
+           ee.exports = He(94)
+         }, , , , , , (ee, ie) => {
```

#### 257. `bundles/bloxd.io/main.js` (Changed code · before: `L8272` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8272) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8272)

```diff
-             BB: for (;;) {
+             ee: for (;;) {
```

#### 258. `bundles/bloxd.io/main.js` (Changed code · before: `L8290` → after: `L8290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8290) · [Before (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8290)

```diff
-                 BB: for (var YB = 0, DB = BB.length; YB < DB;) {
+                 ee: for (var ye = 0, be = ee.length; ye < be;) {
```

#### 259. `bundles/bloxd.io/main.js` (Changed code · before: `L8309` → after: `L8309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8309) · [Before (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8309)

```diff
-             return 0 !== GB ? GB : BB.id - OB.id
+             return 0 !== He ? He : ee.id - ie.id
```

#### 260. `bundles/bloxd.io/main.js` (Changed code · before: `L8349` → after: `L8349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8349) · [Before (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8349)

```diff
-                   GB = OB.unstable_now(), "function" === typeof jB ? uB.callback = jB : uB === nB(kB) && UB(kB), LB(GB)
+                   He = ie.unstable_now(), "function" === typeof Ue ? Pe.callback = Ue : Pe === de(Ze) && We(Ze), ce(He)
```

#### 261. `bundles/bloxd.io/main.js` (Changed code · before: `L8409` → after: `L8409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8409) · [Before (L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8409)

```diff
-             switch ("object" === typeof oB && null !== oB ? oB = "number" === typeof(oB = oB.delay) && 0 < oB ? jB + oB : jB : oB = jB, BB) {
+             switch ("object" === typeof Ke && null !== Ke ? Ke = "number" === typeof(Ke = Ke.delay) && 0 < Ke ? Ue + Ke : Ue : Ke = Ue, ee) {
```

#### 262. `bundles/bloxd.io/main.js` (Changed code · before: `L8486-L8488` → after: `L8486-L8488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8486-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8486-L8488) · [Before (L8486-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8486-L8488)

```diff
-           var YB = GB(182),
-             DB = GB(192),
-             QB = GB(96),
+           var ye = He(173),
+             be = He(186),
+             Me = He(100),
```

#### 263. `bundles/bloxd.io/main.js` (Changed code · before: `L8490-L8494` → after: `L8490-L8495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8490-L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8490-L8495) · [Before (L8490-L8494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8490-L8494)

```diff
-             jB = GB(98),
-             yB = GB(104),
-             JB = GB(113),
-             MB = GB(31),
-             PB = GB(120),
+             Ue = He(103),
+             Fe = He(107),
+             Je = He(115),
+             oe = He(35),
+             Re = He(125),
+             ke = He(157),
```

#### 264. `bundles/bloxd.io/main.js` (Changed code · before: `L8496-L8498` → after: `L8497-L8498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8497-L8498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8497-L8498) · [Before (L8496-L8498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8496-L8498)

```diff
-             lB = GB(173),
-             pB = GB(118);
-           PB.subsiteUsed && !PB.subsiteUsedData[PB.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${PB.subsiteUsed} but it is not enabled`);
+             fe = He(123);
+           Re.subsiteUsed && !Re.subsiteUsedData[Re.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${Re.subsiteUsed} but it is not enabled`);
```

#### 265. `bundles/bloxd.io/main.js` (Changed code · before: `L8506` → after: `L8506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8506) · [Before (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8506)

```diff
-             return [`Browser: ${RB()}`, `Version: ${WB()}`, `Platform: ${navigator.platform}`, `Platform Type: ${kB()}`, `Input Type: ${(0,yB.d)()}`].join(BB)
+             return [`Browser: ${ze()}`, `Version: ${Be()}`, `Platform: ${navigator.platform}`, `Platform Type: ${Ze()}`, `Input Type: ${(0,Fe.b)()}`].join(ee)
```

#### 266. `bundles/bloxd.io/main.js` (Changed code · before: `L8534` → after: `L8534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8534) · [Before (L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8534)

```diff
-             return ZB().getPlatformType() || ("touchOnly" === (0, yB.d)() ? "tablet" : "desktop")
+             return pe().getPlatformType() || ("touchOnly" === (0, Fe.b)() ? "tablet" : "desktop")
```

#### 267. `bundles/bloxd.io/main.js` (Changed code · before: `L8553` → after: `L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8553) · [Before (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8553)

```diff
-             return "macos" === BB && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== BB || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, yB.d)() ? YB.F.includes(BB) ? BB : "other" : "android"
+             return "macos" === ee && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== ee || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, Fe.b)() ? ye.z.includes(ee) ? ee : "other" : "android"
```

#### 268. `bundles/bloxd.io/main.js` (Changed code · before: `L8566` → after: `L8566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8566) · [Before (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8566)

```diff
-             return YB.Q.includes(BB) ? BB : "other"
+             return ye.H.includes(ee) ? ee : "other"
```

#### 269. `bundles/bloxd.io/main.js` (Changed code · before: `L8571` → after: `L8571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8571) · [Before (L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8571)

```diff
-             return !gB() && ("mobile" === BB || "tablet" === BB || "touchOnly" === (0, yB.d)() || jB.currentUrl.hasSearchParam("mobile"))
+             return !xe() && ("mobile" === ee || "tablet" === ee || "touchOnly" === (0, Fe.b)() || Ue.currentUrl.hasSearchParam("mobile"))
```

#### 270. `bundles/bloxd.io/main.js` (Changed code · before: `L8583` → after: `L8583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8583) · [Before (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8583)

```diff
-             return (0, YB.x)(PB.siteUsed)
+             return (0, ye.s)(Re.siteUsed)
```

#### 271. `bundles/bloxd.io/main.js` (Changed code · before: `L8587` → after: `L8587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8587) · [Before (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8587)

```diff
-             return mB() || "mouseOnly" !== (0, yB.d)() || navigator.maxTouchPoints > 0
+             return Ae() || "mouseOnly" !== (0, Fe.b)() || navigator.maxTouchPoints > 0
```

#### 272. `bundles/bloxd.io/main.js` (Changed code · before: `L8607-L8608` → after: `L8607-L8608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8607-L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8607-L8608) · [Before (L8607-L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8607-L8608)

```diff
-               useRecaptcha: !DB.f.recaptchaDisabled && !(0, PB.isDiscordClient)(),
-               useTurnstile: !DB.f.turnstileDisabled && !(0, PB.isDiscordClient)() && "mobileIos" !== PB.siteUsed && !zB.c,
+               useRecaptcha: !be.g.recaptchaDisabled && !(0, Re.isDiscordClient)(),
+               useTurnstile: !be.g.turnstileDisabled && !(0, Re.isDiscordClient)() && "mobileIos" !== Re.siteUsed && !ke.d,
```

#### 273. `bundles/bloxd.io/main.js` (Changed code · before: `L8660-L8661` → after: `L8660-L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8660-L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8660-L8661) · [Before (L8660-L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8660-L8661)

```diff
-               const BB = (0, pB.x)();
-               return void 0 === BB ? "not_probed" : (0, lB.c)(BB)
+               const ee = (0, fe.A)();
+               return void 0 === ee ? "not_probed" : (0, qe.b)(ee)
```

#### 274. `bundles/bloxd.io/main.js` (Changed code · before: `L8663` → after: `L8663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8663) · [Before (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8663)

```diff
-             return tB ??= (0, lB.c)((0, pB.F)()), tB
+             return Qe ??= (0, qe.b)((0, fe.G)()), Qe
```

#### 275. `bundles/bloxd.io/main.js` (Changed code · before: `L8692` → after: `L8692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8692) · [Before (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8692)

```diff
-             const YB = null !== (BB = null !== (OB = aB) && void 0 !== OB ? OB : null === (GB = (0, pB.F)()) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== BB ? BB : null;
+             const ye = null !== (ee = null !== (ie = Se) && void 0 !== ie ? ie : null === (He = (0, fe.G)()) || void 0 === He ? void 0 : He.vendor) && void 0 !== ee ? ee : null;
```

#### 276. `bundles/bloxd.io/main.js` (Changed code · before: `L8699` → after: `L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8699) · [Before (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8699)

```diff
-               const YB = null !== (BB = null !== (OB = aB) && void 0 !== OB ? OB : null === (GB = (0, pB.x)()) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== BB ? BB : null;
+               const ye = null !== (ee = null !== (ie = Se) && void 0 !== ie ? ie : null === (He = (0, fe.A)()) || void 0 === He ? void 0 : He.vendor) && void 0 !== ee ? ee : null;
```

#### 277. `bundles/bloxd.io/main.js` (Changed code · before: `L8730` → after: `L8730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8730) · [Before (L8730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8730)

```diff
-               const OB = await (0, JB.A)(BB);
+               const ie = await (0, Je.z)(ee);
```

#### 278. `bundles/bloxd.io/main.js` (Changed code · before: `L8735` → after: `L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8735) · [Before (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8735)

```diff
-               return MB.g.setItem(JB.J, (0, JB.d)(GB)), MB.g.setItem(JB.F, (0, JB.q)(GB)), "usable"
+               return oe.i.setItem(Je.H, (0, Je.e)(He)), oe.i.setItem(Je.E, (0, Je.m)(He)), "usable"
```

#### 279. `bundles/bloxd.io/main.js` (Changed code · before: `L8749` → after: `L8749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8749) · [Before (L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8749)

```diff
-                     for (let YB, DB, QB = 0, oB = 0; DB = BB.charAt(oB++); ~DB && (YB = QB % 4 ? 64 * YB + DB : DB, QB++ % 4) ? OB += String.fromCharCode(255 & YB >> (-2 * QB & 6)) : 0) DB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(DB);
+                     for (let ye, be, Me = 0, Ke = 0; be = ee.charAt(Ke++); ~be && (ye = Me % 4 ? 64 * ye + be : be, Me++ % 4) ? ie += String.fromCharCode(255 & ye >> (-2 * Me & 6)) : 0) be = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(be);
```

#### 280. `bundles/bloxd.io/main.js` (Changed code · before: `L8756` → after: `L8756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8756) · [Before (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8756)

```diff
-                 return oB ? DB = oB : (DB = lO.kGdYVv(DB), BB[QB] = DB), DB
+                 return Ke ? be = Ke : (be = qi.kGdYVv(be), ee[Me] = be), be
```

#### 281. `bundles/bloxd.io/main.js` (Changed code · before: `L8777` → after: `L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8777) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8777)

```diff
-                 BB = null !== (OB = BB) && void 0 !== OB ? OB : "";
+                 ee = null !== (ie = ee) && void 0 !== ie ? ie : "";
```

#### 282. `bundles/bloxd.io/main.js` (Changed code · before: `L8781` → after: `L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8781) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8781)

```diff
-                   GB += (null !== (YB = BB[DB]) && void 0 !== YB ? YB : DB.toString()).charCodeAt(0).toString(32)
+                   He += (null !== (ye = ee[be]) && void 0 !== ye ? ye : be.toString()).charCodeAt(0).toString(32)
```

#### 283. `bundles/bloxd.io/main.js` (Changed code · before: `L8785` → after: `L8785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8785) · [Before (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8785)

```diff
-               ZO = GB(224).shouldUseUkPrivacyPolicy;
+               Xi = He(225).shouldUseUkPrivacyPolicy;
```

#### 284. `bundles/bloxd.io/main.js` (Changed code · before: `L8788` → after: `L8788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L8788) · [Before (L8788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L8788)

```diff
-         }, , , , function(BB) {
+         }, , , function(ee) {
```

#### 285. `bundles/bloxd.io/main.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L9070)

```diff
-               var YB, DB = (YB = GB(91)) && YB.__esModule ? YB : {
+               var ye, be = (ye = He(91)) && ye.__esModule ? ye : {
```

#### 286. `bundles/bloxd.io/main.js` (Changed code · before: `L9122` → after: `L9122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L9122) · [Before (L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L9122)

```diff
-                 return BB && BB.__esModule ? BB : {
+                 return ee && ee.__esModule ? ee : {
```

#### 287. `bundles/bloxd.io/main.js` (Changed code · before: `L9188` → after: `L9188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L9188) · [Before (L9188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L9188)

```diff
-                 }, OB.Lp = function() {
+                 }, ie.Nf = function() {
```

#### 288. `bundles/bloxd.io/main.js` (Changed code · before: `L9191` → after: `L9191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L9191) · [Before (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L9191)

```diff
-                   return BB ? String(this.Lp().name).toLowerCase() || "" : this.Lp().name || ""
+                   return ee ? String(this.Nf().name).toLowerCase() || "" : this.Nf().name || ""
```

#### 289. `bundles/bloxd.io/main.js` (Changed code · before: `L9271` → after: `L9271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L9271) · [Before (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L9271)

```diff
-               var YB, DB = (YB = GB(17)) && YB.__esModule ? YB : {
+               var ye, be = (ye = He(17)) && ye.__esModule ? ye : {
```

#### 290. `bundles/bloxd.io/main.js` (Changed code · before: `L9671` → after: `L9671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L9671) · [Before (L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L9671)

```diff
-               var YB, DB = (YB = GB(17)) && YB.__esModule ? YB : {
+               var ye, be = (ye = He(17)) && ye.__esModule ? ye : {
```

#### 291. `bundles/bloxd.io/main.js` (Changed code · before: `L9812` → after: `L9812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L9812) · [Before (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L9812)

```diff
-               var YB, DB = (YB = GB(17)) && YB.__esModule ? YB : {
+               var ye, be = (ye = He(17)) && ye.__esModule ? ye : {
```

#### 292. `bundles/bloxd.io/main.js` (Changed code · before: `L10012` → after: `L10012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10012) · [Before (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10012)

```diff
-               var YB, DB = (YB = GB(17)) && YB.__esModule ? YB : {
+               var ye, be = (ye = He(17)) && ye.__esModule ? ye : {
```

#### 293. `bundles/bloxd.io/main.js` (Changed code · before: `L10083` → after: `L10083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10083) · [Before (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10083)

```diff
-         }, , (BB, OB, GB) => {
+         }, , , (ee, ie, He) => {
```

#### 294. `bundles/bloxd.io/main.js` (Changed code · before: `L10122` → after: `L10122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10122) · [Before (L10122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10122)

```diff
-                 jB = DB.pathname + (oB ? `?${oB}` : "") + DB.hash;
+                 Ue = be.pathname + (Ke ? `?${Ke}` : "") + be.hash;
```

#### 295. `bundles/bloxd.io/main.js` (Changed code · before: `L10139` → after: `L10139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10139) · [Before (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10139)

```diff
-                     for (let YB, DB, QB = 0, oB = 0; DB = BB.charAt(oB++); ~DB && (YB = QB % 4 ? 64 * YB + DB : DB, QB++ % 4) ? OB += String.fromCharCode(255 & YB >> (-2 * QB & 6)) : 0) DB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(DB);
+                     for (let ye, be, Me = 0, Ke = 0; be = ee.charAt(Ke++); ~be && (ye = Me % 4 ? 64 * ye + be : be, Me++ % 4) ? ie += String.fromCharCode(255 & ye >> (-2 * Me & 6)) : 0) be = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(be);
```

#### 296. `bundles/bloxd.io/main.js` (Changed code · before: `L10146` → after: `L10146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10146) · [Before (L10146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10146)

```diff
-                 return jB ? DB = jB : (DB = QB.TgIWQA(DB), BB[oB] = DB), DB
+                 return Ue ? be = Ue : (be = Me.TgIWQA(be), ee[Ke] = be), be
```

#### 297. `bundles/bloxd.io/main.js` (Changed code · before: `L10158` → after: `L10158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10158) · [Before (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10158)

```diff
-                 "string" === typeof(null === (OB = BB.data) || void 0 === OB ? void 0 : OB.type) && "updateSearchParam" === (null === (GB = BB.data) || void 0 === GB ? void 0 : GB.type) && (console.log(`Adding search param ${BB.data.name} with value ${BB.data.value}`), DB.setSear … [truncated]
+                 "string" === typeof(null === (ie = ee.data) || void 0 === ie ? void 0 : ie.type) && "updateSearchParam" === (null === (He = ee.data) || void 0 === He ? void 0 : He.type) && (console.log(`Adding search param ${ee.data.name} with value ${ee.data.value}`), be.setSear … [truncated]
```

#### 298. `bundles/bloxd.io/main.js` (Changed code · before: `L10185` → after: `L10185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10185) · [Before (L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10185)

```diff
-         }, , , , , , (BB, OB, GB) => {
+         }, , , , (ee, ie, He) => {
```

#### 299. `bundles/bloxd.io/main.js` (Changed code · before: `L10187` → after: `L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10187) · [Before (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10187)

```diff
-             d: () => qB
+             b: () => Te
```

#### 300. `bundles/bloxd.io/main.js` (Changed code · before: `L10217` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10217) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10217)

```diff
-         }, , , , , , , , , (BB, OB, GB) => {
+         }, , , , , , , , (ee, ie, He) => {
```

#### 301. `bundles/bloxd.io/main.js` (Changed code · before: `L10219-L10220` → after: `L10219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10219) · [Before (L10219-L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10219-L10220)

```diff
-             A: () => QB.r,
-             C: () => NB,
+             B: () => Xe,
```

#### 302. `bundles/bloxd.io/main.js` (Changed code · before: `L10222-L10223` → after: `L10221-L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10221-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10221-L10223) · [Before (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10222-L10223)

```diff
-             F: () => pB,
-             J: () => zB,
+             E: () => fe,
+             H: () => ke,
+             K: () => ze,
```

#### 303. `bundles/bloxd.io/main.js` (Changed code · before: `L10228` → after: `L10226-L10228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10226-L10228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10226-L10228) · [Before (L10228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10228)

```diff
-             h: () => MB,
+             e: () => Ke,
+             f: () => oe,
+             i: () => Je,
```

#### 304. `bundles/bloxd.io/main.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10230)

```diff
-             p: () => PB,
+             m: () => Ue,
```

#### 305. `bundles/bloxd.io/main.js` (Changed code · before: `L10232-L10234` → after: `L10232-L10234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10232-L10234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10232-L10234) · [Before (L10232-L10234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10232-L10234)

```diff
-             r: () => yB,
-             v: () => lB,
-             w: () => QB.o
+             s: () => qe,
+             v: () => Me.p,
+             z: () => Me.q
```

#### 306. `bundles/bloxd.io/main.js` (Changed code · before: `L10236` → after: `L10236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10236) · [Before (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10236)

```diff
-           var YB = GB(96),
+           var ye = He(100),
```

#### 307. `bundles/bloxd.io/main.js` (Changed code · before: `L10238` → after: `L10238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10238) · [Before (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10238)

```diff
-             QB = GB(116);
+             Me = He(120);
```

#### 308. `bundles/bloxd.io/main.js` (Changed code · before: `L10254` → after: `L10254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10254) · [Before (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10254)

```diff
-             let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (OB = null === (GB = globalThis.navigator) || void 0 === GB ? void 0 : GB.userAgent) && void 0 !== OB ? OB : "";
+             let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ie = null === (He = globalThis.navigator) || void 0 === He ? void 0 : He.userAgent) && void 0 !== ie ? ie : "";
```

#### 309. `bundles/bloxd.io/main.js` (Changed code · before: `L10260` → after: `L10260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10260) · [Before (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10260)

```diff
-             let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (OB = null === (GB = globalThis.navigator) || void 0 === GB ? void 0 : GB.userAgent) && void 0 !== OB ? OB : "";
+             let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ie = null === (He = globalThis.navigator) || void 0 === He ? void 0 : He.userAgent) && void 0 !== ie ? ie : "";
```

#### 310. `bundles/bloxd.io/main.js` (Changed code · before: `L10270` → after: `L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10270) · [Before (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10270)

```diff
-             let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (OB = null === (GB = globalThis.navigator) || void 0 === GB ? void 0 : GB.userAgent) && void 0 !== OB ? OB : "";
+             let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ie = null === (He = globalThis.navigator) || void 0 === He ? void 0 : He.userAgent) && void 0 !== ie ? ie : "";
```

#### 311. `bundles/bloxd.io/main.js` (Changed code · before: `L10281` → after: `L10281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10281) · [Before (L10281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10281)

```diff
-         }, , , (BB, OB, GB) => {
+         }, , , , , (ee, ie, He) => {
```

#### 312. `bundles/bloxd.io/main.js` (Changed code · before: `L10284-L10287` → after: `L10284-L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10284-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10284-L10287) · [Before (L10284-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10284-L10287)

```diff
-             g: () => QB,
-             k: () => jB,
-             o: () => JB,
-             r: () => DB
+             h: () => Me,
+             l: () => Ue,
+             p: () => Je,
+             q: () => be
```

#### 313. `bundles/bloxd.io/main.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10289)

```diff
-           var YB = GB(118);
+           var ye = He(123);
```

#### 314. `bundles/bloxd.io/main.js` (Changed code · before: `L10317` → after: `L10317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10317) · [Before (L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10317)

```diff
-               (0, YB.J)(BB, OB, MB)
+               (0, ye.M)(ee, ie, oe)
```

#### 315. `bundles/bloxd.io/main.js` (Changed code · before: `L10331-L10332` → after: `L10331-L10332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10331-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10331-L10332) · [Before (L10331-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10331-L10332)

```diff
-               vendor: null !== (OB = null === (GB = BB.info) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== OB ? OB : "",
-               architecture: null !== (YB = null === (DB = BB.info) || void 0 === DB ? void 0 : DB.architecture) && void 0 !== YB ? YB : ""
+               vendor: null !== (ie = null === (He = ee.info) || void 0 === He ? void 0 : He.vendor) && void 0 !== ie ? ie : "",
+               architecture: null !== (ye = null === (be = ee.info) || void 0 === be ? void 0 : be.architecture) && void 0 !== ye ? ye : ""
```

#### 316. `bundles/bloxd.io/main.js` (Changed code · before: `L10338` → after: `L10338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10338) · [Before (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10338)

```diff
-             return /swiftshader/i.test(`${null!==(OB=null===(GB=BB.info)||void 0===GB?void 0:GB.vendor)&&void 0!==OB?OB:""} ${null!==(YB=null===(DB=BB.info)||void 0===DB?void 0:DB.architecture)&&void 0!==YB?YB:""}`)
+             return /swiftshader/i.test(`${null!==(ie=null===(He=ee.info)||void 0===He?void 0:He.vendor)&&void 0!==ie?ie:""} ${null!==(ye=null===(be=ee.info)||void 0===be?void 0:be.architecture)&&void 0!==ye?ye:""}`)
```

#### 317. `bundles/bloxd.io/main.js` (Changed code · before: `L10343` → after: `L10343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10343) · [Before (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10343)

```diff
-             return null !== (OB = null !== (GB = null === (YB = BB.info) || void 0 === YB ? void 0 : YB.isFallbackAdapter) && void 0 !== GB ? GB : BB.isFallbackAdapter) && void 0 !== OB && OB
+             return null !== (ie = null !== (He = null === (ye = ee.info) || void 0 === ye ? void 0 : ye.isFallbackAdapter) && void 0 !== He ? He : ee.isFallbackAdapter) && void 0 !== ie && ie
```

#### 318. `bundles/bloxd.io/main.js` (Changed code · before: `L10349` → after: `L10349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10349) · [Before (L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10349)

```diff
-         }, , (BB, OB, GB) => {
+         }, , , (ee, ie, He) => {
```

#### 319. `bundles/bloxd.io/main.js` (Changed code · before: `L10351-L10352` → after: `L10351-L10352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10351-L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10351-L10352) · [Before (L10351-L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10351-L10352)

```diff
-             B: () => WB,
-             F: () => yB,
+             A: () => oe,
+             D: () => Be,
```

#### 320. `bundles/bloxd.io/main.js` (Changed code · before: `L10354-L10355` → after: `L10354-L10356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10354-L10356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10354-L10356) · [Before (L10354-L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10354-L10355)

```diff
-             J: () => NB,
-             N: () => ZB,
+             I: () => Oe,
+             M: () => Xe,
+             Q: () => pe,
```

#### 321. `bundles/bloxd.io/main.js` (Changed code · before: `L10357-L10361` → after: `L10358-L10361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10358-L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10358-L10361) · [Before (L10357-L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10357-L10361)

```diff
-             f: () => nB,
-             j: () => VB,
-             m: () => AB,
-             o: () => RB,
-             s: () => JB,
+             g: () => de,
+             k: () => ge,
+             n: () => Ee,
+             p: () => ze,
```

#### 322. `bundles/bloxd.io/main.js` (Changed code · before: `L10387` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10387) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10387)

```diff
-                     vendor: null !== (GB = BB.getParameter(null !== (YB = null === yB || void 0 === yB ? void 0 : yB.UNMASKED_VENDOR_WEBGL) && void 0 !== YB ? YB : BB.VENDOR)) && void 0 !== GB ? GB : "",
+                     vendor: null !== (He = ee.getParameter(null !== (ye = null === Fe || void 0 === Fe ? void 0 : Fe.UNMASKED_VENDOR_WEBGL) && void 0 !== ye ? ye : ee.VENDOR)) && void 0 !== He ? He : "",
```

#### 323. `bundles/bloxd.io/main.js` (Changed code · before: `L10414` → after: `L10414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10414) · [Before (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10414)

```diff
-             return DB ? YB : void 0
+             return be ? ye : void 0
```

#### 324. `bundles/bloxd.io/main.js` (Changed code · before: `L10441` → after: `L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10441) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10441)

```diff
-             return DB && null !== (BB = YB) && void 0 !== BB && BB.renderer ? YB : zB
+             return be && null !== (ee = ye) && void 0 !== ee && ee.renderer ? ye : ke
```

#### 325. `bundles/bloxd.io/main.js` (Changed code · before: `L10458` → after: `L10458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10458) · [Before (L10458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10458)

```diff
-             qB ??= null !== (OB = null === (GB = BB.getSupportedExtensions()) || void 0 === GB ? void 0 : GB.includes("KHR_parallel_shader_compile")) && void 0 !== OB ? OB : null
+             Te ??= null !== (ie = null === (He = ee.getSupportedExtensions()) || void 0 === He ? void 0 : He.includes("KHR_parallel_shader_compile")) && void 0 !== ie ? ie : null
```

#### 326. `bundles/bloxd.io/main.js` (Changed code · before: `L10495-L10498` → after: `L10495-L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10495-L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10495-L10498) · [Before (L10495-L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10495-L10498)

```diff
-           var YB = GB(162),
-             DB = GB(31),
-             QB = GB(98),
-             oB = GB(128);
+           var ye = He(153),
+             be = He(35),
+             Me = He(103),
+             Ke = He(134);
```

#### 327. `bundles/bloxd.io/main.js` (Changed code · before: `L10679-L10680` → after: `L10679-L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10679-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10679-L10680) · [Before (L10679-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10679-L10680)

```diff
-             zB = YB.L.filter((BB => MB[BB].enabled)),
-             lB = YB.N.filter((BB => PB[BB].enabled)),
+             ke = ye.A.filter((ee => oe[ee].enabled)),
+             qe = ye.E.filter((ee => Re[ee].enabled)),
```

#### 328. `bundles/bloxd.io/main.js` (Changed code · before: `L10686` → after: `L10686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10686) · [Before (L10686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10686)

```diff
-             return YB.p.includes(BB) && MB[BB].enabled
+             return ye.l.includes(ee) && oe[ee].enabled
```

#### 329. `bundles/bloxd.io/main.js` (Changed code · before: `L10694` → after: `L10694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10694) · [Before (L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10694)

```diff
-                 return DB.i.setItem(ZB, BB), BB
+                 return be.m.setItem(pe, ee), ee
```

#### 330. `bundles/bloxd.io/main.js` (Changed code · before: `L10700` → after: `L10700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10700) · [Before (L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10700)

```diff
-                 if (null !== (GB = null === (YB = MB[BB]) || void 0 === YB ? void 0 : YB.enabled) && void 0 !== GB && GB) return NB(BB) ? DB.i.setItem(ZB, BB) : DB.i.removeItem(ZB), BB;
+                 if (null !== (He = null === (ye = oe[ee]) || void 0 === ye ? void 0 : ye.enabled) && void 0 !== He && He) return Xe(ee) ? be.m.setItem(pe, ee) : be.m.removeItem(pe), ee;
```

#### 331. `bundles/bloxd.io/main.js` (Changed code · before: `L10703-L10704` → after: `L10703-L10704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10703-L10704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10703-L10704) · [Before (L10703-L10704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10703-L10704)

```diff
-               const yB = DB.i.getItem(ZB);
-               if (NB(yB)) return console.info(`Site used is ${yB}, kept from this tab's entry URL`), yB;
+               const Fe = be.m.getItem(pe);
+               if (Xe(Fe)) return console.info(`Site used is ${Fe}, kept from this tab's entry URL`), Fe;
```

#### 332. `bundles/bloxd.io/main.js` (Changed code · before: `L10710` → after: `L10710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10710) · [Before (L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10710)

```diff
-               return jB().includes("discord") && !jB().includes("/auth-callback/discord") && (BB = "discord"), (jB().includes("coolmathgames") || QB.currentUrl.hasSearchParam("coolmath")) && (BB = "coolmathgames"), jB().includes("gx.games") && (BB = "gxGames"), console.info(`Site … [truncated]
+               return Ue().includes("discord") && !Ue().includes("/auth-callback/discord") && (ee = "discord"), (Ue().includes("coolmathgames") || Me.currentUrl.hasSearchParam("coolmath")) && (ee = "coolmathgames"), Ue().includes("gx.games") && (ee = "gxGames"), console.info(`Site … [truncated]
```

#### 333. `bundles/bloxd.io/main.js` (Changed code · before: `L10746` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10746) · [Before (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10746)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , , , , , , , , (ee, ie, He) => {
```

#### 334. `bundles/bloxd.io/main.js` (Changed code · before: `L10749` → after: `L10749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10749) · [Before (L10749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10749)

```diff
-             h: () => jB
+             f: () => Ue
```

#### 335. `bundles/bloxd.io/main.js` (Changed code · before: `L10751-L10752` → after: `L10751-L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10751-L10752) · [Before (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10751-L10752)

```diff
-           var YB = GB(137),
-             DB = GB(145);
+           var ye = He(140),
+             be = He(147);
```

#### 336. `bundles/bloxd.io/main.js` (Changed code · before: `L10768` → after: `L10768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10768) · [Before (L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10768)

```diff
-                 return GB.success ? GB.data : (console.warn(`App bridge: the app's injected hello is invalid: ${YB.M(GB.error)}`), null)
+                 return He.success ? He.data : (console.warn(`App bridge: the app's injected hello is invalid: ${ye.Q(He.error)}`), null)
```

#### 337. `bundles/bloxd.io/main.js` (Changed code · before: `L10781` → after: `L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10781) · [Before (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10781)

```diff
-         }, , , , , , , , , (BB, OB, GB) => {
+         }, , , , , , (ee, ie, He) => {
```

#### 338. `bundles/bloxd.io/main.js` (Changed code · before: `L10784-L10785` → after: `L10784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10784) · [Before (L10784-L10785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10784-L10785)

```diff
-             c: () => TO,
-             g: () => wO,
+             e: () => si,
```

#### 339. `bundles/bloxd.io/main.js` (Changed code · before: `L10788-L10789` → after: `L10787-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10787-L10788) · [Before (L10788-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10788-L10789)

```diff
-             n: () => DG,
-             o: () => vO,
+             p: () => HH,
+             q: () => KH,
```

#### 340. `bundles/bloxd.io/main.js` (Changed code · before: `L10793-L10797` → after: `L10791-L10795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10791-L10795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10791-L10795) · [Before (L10793-L10797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10793-L10797)

```diff
-             v: () => zG,
-             B: () => rO,
-             E: () => CO,
-             H: () => MG,
-             K: () => RG,
+             y: () => Ai,
+             C: () => Yi,
+             G: () => fH,
+             I: () => Ci,
+             J: () => Ni,
```

#### 341. `bundles/bloxd.io/main.js` (Changed code · before: `L10800` → after: `L10798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10798) · [Before (L10800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10800)

```diff
-             R: () => AG,
+             Q: () => ae,
```

#### 342. `bundles/bloxd.io/main.js` (Changed code · before: `L10802` → after: `L10800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10800) · [Before (L10802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10802)

```diff
-             U: () => HO,
+             T: () => OH,
```

#### 343. `bundles/bloxd.io/main.js` (Changed code · before: `L10806` → after: `L10804-L10806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10804-L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10804-L10806) · [Before (L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10806)

```diff
-             bb: () => cO
+             bb: () => oH,
+             eb: () => eH,
+             hb: () => li
```

#### 344. `bundles/bloxd.io/main.js` (Changed code · before: `L10835` → after: `L10835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10835) · [Before (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10835)

```diff
-               const DB = GB?.Parent ? new QB : this;
+               const be = He?.Parent ? new Me : this;
```

#### 345. `bundles/bloxd.io/main.js` (Changed code · before: `L10858` → after: `L10858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L10858) · [Before (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L10858)

```diff
-               super(`Encountered unidirectional transform during encode: ${BB}`), this.name = "ZodEncodeError"
+               super(`Encountered unidirectional transform during encode: ${ee}`), this.name = "ZodEncodeError"
```

#### 346. `bundles/bloxd.io/main.js` (Changed code · before: `L11006` → after: `L11006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11006) · [Before (L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11006)

```diff
-             return "string" === typeof BB ? BB : BB?.message
+             return "string" === typeof ee ? ee : ee?.message
```

#### 347. `bundles/bloxd.io/main.js` (Changed code · before: `L11044` → after: `L11044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11044) · [Before (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11044)

```diff
-             for (const YB of GB) "number" === typeof YB ? OB.push(`[${YB}]`) : "symbol" === typeof YB ? OB.push(`[${JSON.stringify(String(YB))}]`) : /[^\w$]/.test(YB) ? OB.push(`[${JSON.stringify(YB)}]`) : (OB.length && OB.push("."), OB.push(YB));
+             for (const ye of He) "number" === typeof ye ? ie.push(`[${ye}]`) : "symbol" === typeof ye ? ie.push(`[${JSON.stringify(String(ye))}]`) : /[^\w$]/.test(ye) ? ie.push(`[${JSON.stringify(ye)}]`) : (ie.length && ie.push("."), ie.push(ye));
```

#### 348. `bundles/bloxd.io/main.js` (Changed code · before: `L11051` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11051) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11051)

```diff
-             for (const YB of GB) OB.push(`\u2716 ${YB.message}`), YB.path?.length && OB.push(`  \u2192 at ${FB(YB.path)}`);
+             for (const ye of He) ie.push(`\u2716 ${ye.message}`), ye.path?.length && ie.push(`  \u2192 at ${Ve(ye.path)}`);
```

#### 349. `bundles/bloxd.io/main.js` (Changed code · before: `L11296` → after: `L11296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11296) · [Before (L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11296)

```diff
-               xB.init(BB, OB), BB._zod.pattern = [...BB?._zod.bag?.patterns ?? []].pop() ?? (GB = BB._zod.bag, new RegExp(`^${GB?`[\\s\\S]{${GB?.minimum??0},${GB?.maximum??""}}`:"[\\s\\S]*"}$`)), BB._zod.parse = (GB, YB) => {
+               re.init(ee, ie), ee._zod.pattern = [...ee?._zod.bag?.patterns ?? []].pop() ?? (He = ee._zod.bag, new RegExp(`^${He?`[\\s\\S]{${He?.minimum??0},${He?.maximum??""}}`:"[\\s\\S]*"}$`)), ee._zod.parse = (He, ye) => {
```

#### 350. `bundles/bloxd.io/main.js` (Changed code · before: `L11390` → after: `L11390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11390) · [Before (L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11390)

```diff
-               if (!BB.shape?.[DB]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${DB}": expected a Zod schema`);
+               if (!ee.shape?.[be]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${be}": expected a Zod schema`);
```

#### 351. `bundles/bloxd.io/main.js` (Changed code · before: `L11501` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11501) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11501)

```diff
-                 return new RegExp(`^(${BB.map((BB=>zB(BB.source))).join("|")})$`)
+                 return new RegExp(`^(${ee.map((ee=>ke(ee.source))).join("|")})$`)
```

#### 352. `bundles/bloxd.io/main.js` (Changed code · before: `L11531` → after: `L11531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11531) · [Before (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11531)

```diff
-                 if (!YB || 0 === Object.keys(YB).length) throw new Error(`Invalid discriminated union option at index "${OB.options.indexOf(GB)}"`);
+                 if (!ye || 0 === Object.keys(ye).length) throw new Error(`Invalid discriminated union option at index "${ie.options.indexOf(He)}"`);
```

#### 353. `bundles/bloxd.io/main.js` (Changed code · before: `L11544` → after: `L11544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11544) · [Before (L11544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11544)

```diff
-                 if (!BB || 0 === BB.size) throw new Error(`Invalid discriminated union option at index "${OB.options.indexOf(YB)}"`);
+                 if (!ee || 0 === ee.size) throw new Error(`Invalid discriminated union option at index "${ie.options.indexOf(ye)}"`);
```

#### 354. `bundles/bloxd.io/main.js` (Changed code · before: `L11546` → after: `L11546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11546) · [Before (L11546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11546)

```diff
-                   if (GB.has(OB)) throw new Error(`Duplicate discriminator value "${String(OB)}"`);
+                   if (He.has(ie)) throw new Error(`Duplicate discriminator value "${String(ie)}"`);
```

#### 355. `bundles/bloxd.io/main.js` (Changed code · before: `L11648` → after: `L11648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11648) · [Before (L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11648)

```diff
-               BB._zod.values = YB, BB._zod.pattern = new RegExp(`^(${GB.filter((BB=>AB.has(typeof BB))).map((BB=>"string"===typeof BB?VB(BB):BB.toString())).join("|")})$`), BB._zod.parse = (OB, DB) => {
+               ee._zod.values = ye, ee._zod.pattern = new RegExp(`^(${He.filter((ee=>Ee.has(typeof ee))).map((ee=>"string"===typeof ee?ge(ee):ee.toString())).join("|")})$`), ee._zod.parse = (ie, be) => {
```

#### 356. `bundles/bloxd.io/main.js` (Changed code · before: `L11661` → after: `L11661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11661) · [Before (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11661)

```diff
-               BB._zod.values = GB, BB._zod.pattern = new RegExp(`^(${OB.values.map((BB=>"string"===typeof BB?VB(BB):BB?VB(BB.toString()):String(BB))).join("|")})$`), BB._zod.parse = (YB, DB) => {
+               ee._zod.values = He, ee._zod.pattern = new RegExp(`^(${ie.values.map((ee=>"string"===typeof ee?ge(ee):ee?ge(ee.toString()):String(ee))).join("|")})$`), ee._zod.parse = (ye, be) => {
```

#### 357. `bundles/bloxd.io/main.js` (Changed code · before: `L11676` → after: `L11676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11676) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11676)

```diff
-                   return (oB instanceof Promise ? oB : Promise.resolve(oB)).then((BB => (GB.value = BB, GB)))
+                   return (Ke instanceof Promise ? Ke : Promise.resolve(Ke)).then((ee => (He.value = ee, He)))
```

#### 358. `bundles/bloxd.io/main.js` (Changed code · before: `L11692` → after: `L11692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11692) · [Before (L11692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11692)

```diff
-                 return BB ? new RegExp(`^(${zB(BB.source)})?$`) : void 0
+                 return ee ? new RegExp(`^(${ke(ee.source)})?$`) : void 0
```

#### 359. `bundles/bloxd.io/main.js` (Changed code · before: `L11698` → after: `L11698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11698) · [Before (L11698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11698)

```diff
-                 return void 0 === BB.value ? BB : OB.innerType._zod.run(BB, GB)
+                 return void 0 === ee.value ? ee : ie.innerType._zod.run(ee, He)
```

#### 360. `bundles/bloxd.io/main.js` (Changed code · before: `L11704-L11705` → after: `L11704-L11705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11704-L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11704-L11705) · [Before (L11704-L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11704-L11705)

```diff
-                 return BB ? new RegExp(`^(${zB(BB.source)}|null)$`) : void 0
-               })), pB(BB._zod, "values", (() => OB.innerType._zod.values ? new Set([...OB.innerType._zod.values, null]) : void 0)), BB._zod.parse = (BB, GB) => null === BB.value ? BB : OB.innerType._zod.run(BB, GB)
+                 return ee ? new RegExp(`^(${ke(ee.source)}|null)$`) : void 0
+               })), fe(ee._zod, "values", (() => ie.innerType._zod.values ? new Set([...ie.innerType._zod.values, null]) : void 0)), ee._zod.parse = (ee, He) => null === ee.value ? ee : ie.innerType._zod.run(ee, He)
```

#### 361. `bundles/bloxd.io/main.js` (Changed code · before: `L11758` → after: `L11758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11758) · [Before (L11758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11758)

```diff
-                 DB = OB.oP(YB);
+                 be = ie.oR(ye);
```

#### 362. `bundles/bloxd.io/main.js` (Changed code · before: `L11815` → after: `L11815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L11815) · [Before (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L11815)

```diff
-                 return Object.keys(YB).length ? YB : void 0
+                 return Object.keys(ye).length ? ye : void 0
```

#### 363. `bundles/bloxd.io/main.js` (Changed code · before: `L12041` → after: `L12041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12041) · [Before (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12041)

```diff
-               values: Array.isArray(BB) ? BB : [BB],
+               values: Array.isArray(ee) ? ee : [ee],
```

#### 364. `bundles/bloxd.io/main.js` (Changed code · before: `L12099` → after: `L12099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12099) · [Before (L12099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12099)

```diff
-               catchValue: "function" === typeof OB ? OB : () => OB
+               catchValue: "function" === typeof ie ? ie : () => ie
```

#### 365. `bundles/bloxd.io/main.js` (Changed code · before: `L12122` → after: `L12122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12122) · [Before (L12122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12122)

```diff
-                 oP: OB,
+                 oR: ie,
```

#### 366. `bundles/bloxd.io/main.js` (Changed code · before: `L12127` → after: `L12127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12127) · [Before (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12127)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , , , , , , (ee, ie, He) => {
```

#### 367. `bundles/bloxd.io/main.js` (Changed code · before: `L12130` → after: `L12130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12130) · [Before (L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12130)

```diff
-             e: () => jB,
+             d: () => Ue,
```

#### 368. `bundles/bloxd.io/main.js` (Changed code · before: `L12132-L12133` → after: `L12132-L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12132-L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12132-L12133) · [Before (L12132-L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12132-L12133)

```diff
-             i: () => MB,
-             k: () => yB
+             j: () => oe,
+             n: () => Fe
```

#### 369. `bundles/bloxd.io/main.js` (Changed code · before: `L12135-L12141` → after: `L12135-L12141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12135-L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12135-L12141) · [Before (L12135-L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12135-L12141)

```diff
-           var YB = GB(137),
-             DB = GB(153);
-           const QB = YB.E({
-               safeArea: DB.h,
-               notificationCanAsk: YB.g(),
-               pushToken: YB.v(YB.W()),
-               privacyOptionsRequired: YB.v(YB.g())
+           var ye = He(140),
+             be = He(149);
+           const Me = ye.J({
+               safeArea: be.k,
+               notificationCanAsk: ye.h(),
+               pushToken: ye.G(ye._()),
+               privacyOptionsRequired: ye.G(ye.h())
```

#### 370. `bundles/bloxd.io/main.js` (Changed code · before: `L12143-L12148` → after: `L12143-L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12143-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12143-L12148) · [Before (L12143-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12143-L12148)

```diff
-             oB = YB.E({
-               protocol: YB.B(),
-               platform: YB.n(["ios", "android"]),
-               appVersion: YB.W(),
-               build: YB.W(),
-               capabilities: YB.P(YB.W(), YB.B())
+             Ke = ye.J({
+               protocol: ye.I(),
+               platform: ye.q(["ios", "android"]),
+               appVersion: ye._(),
+               build: ye._(),
+               capabilities: ye.S(ye._(), ye.I())
```

#### 371. `bundles/bloxd.io/main.js` (Changed code · before: `L12150` → after: `L12150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12150) · [Before (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12150)

```diff
-             jB = YB.o(oB, {
+             Ue = ye.r(Ke, {
```

#### 372. `bundles/bloxd.io/main.js` (Changed code · before: `L12153-L12155` → after: `L12153-L12155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12153-L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12153-L12155) · [Before (L12153-L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12153-L12155)

```diff
-             yB = YB.E({
-               protocols: YB.c(YB.B()),
-               webVersion: YB.W()
+             Fe = ye.J({
+               protocols: ye.e(ye.I()),
+               webVersion: ye._()
```

#### 373. `bundles/bloxd.io/main.js` (Changed code · before: `L12163` → after: `L12163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12163) · [Before (L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12163)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , (ee, ie, He) => {
```

#### 374. `bundles/bloxd.io/main.js` (Changed code · before: `L12165-L12167` → after: `L12165-L12167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12165-L12167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12165-L12167) · [Before (L12165-L12167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12165-L12167)

```diff
-             b: () => oB,
-             f: () => QB,
-             h: () => DB
+             d: () => Ke,
+             h: () => Me,
+             k: () => be
```

#### 375. `bundles/bloxd.io/main.js` (Changed code · before: `L12169-L12174` → after: `L12169-L12174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12169-L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12169-L12174) · [Before (L12169-L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12169-L12174)

```diff
-           var YB = GB(137);
-           const DB = YB.E({
-               top: YB.B(),
-               right: YB.B(),
-               bottom: YB.B(),
-               left: YB.B()
+           var ye = He(140);
+           const be = ye.J({
+               top: ye.I(),
+               right: ye.I(),
+               bottom: ye.I(),
+               left: ye.I()
```

#### 376. `bundles/bloxd.io/main.js` (Changed code · before: `L12177-L12178` → after: `L12177-L12178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12177-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12177-L12178) · [Before (L12177-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12177-L12178)

```diff
-               setOrientation: YB.E({
-                 orientation: YB.n(["portrait", "landscape", "default"])
+               setOrientation: ye.J({
+                 orientation: ye.q(["portrait", "landscape", "default"])
```

#### 377. `bundles/bloxd.io/main.js` (Changed code · before: `L12184` → after: `L12184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12184) · [Before (L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12184)

```diff
-         }, , , , , , , , , (BB, OB, GB) => {
+         }, , , , (ee, ie, He) => {
```

#### 378. `bundles/bloxd.io/main.js` (Changed code · before: `L12201-L12207` → after: `L12201-L12204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12201-L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12201-L12204) · [Before (L12201-L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12201-L12207)

```diff
-             L: () => pB,
-             M: () => ZB,
-             N: () => NB,
-             O: () => WB,
-             d: () => yB,
-             g: () => RB,
-             j: () => lB,
+             b: () => Fe,
+             f: () => ze,
+             h: () => qe,
+             k: () => Je,
```

#### 379. `bundles/bloxd.io/main.js` (Changed code · before: `L12209` → after: `L12206-L12207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12206-L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12206-L12207) · [Before (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12209)

```diff
-             p: () => qB,
+             n: () => Ke,
+             q: () => Ue,
```

#### 380. `bundles/bloxd.io/main.js` (Changed code · before: `L12213` → after: `L12213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12213) · [Before (L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12213)

```diff
-             w: () => DB
+             y: () => oe
```

#### 381. `bundles/bloxd.io/main.js` (Changed code · before: `L12278` → after: `L12278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12278) · [Before (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12278)

```diff
-         }, , , (BB, OB, GB) => {
+         }, , , , (ee, ie, He) => {
```

#### 382. `bundles/bloxd.io/main.js` (Changed code · before: `L12280` → after: `L12280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12280) · [Before (L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12280)

```diff
-             c: () => yB
+             d: () => Fe
```

#### 383. `bundles/bloxd.io/main.js` (Changed code · before: `L12282-L12285` → after: `L12282-L12285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12282-L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12282-L12285) · [Before (L12282-L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12282-L12285)

```diff
-           var YB = GB(145),
-             DB = GB(128),
-             QB = GB(31),
-             oB = GB(98);
+           var ye = He(147),
+             be = He(134),
+             Me = He(35),
+             Ke = He(103);
```

#### 384. `bundles/bloxd.io/main.js` (Changed code · before: `L12290` → after: `L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12290) · [Before (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12290)

```diff
-               oB.currentUrl.removeSearchParam(jB), BB ? QB.i.setItem(jB, "1") : QB.i.removeItem(jB)
+               Ke.currentUrl.removeSearchParam(Ue), ee ? Me.m.setItem(Ue, "1") : Me.m.removeItem(Ue)
```

#### 385. `bundles/bloxd.io/main.js` (Changed code · before: `L12293` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12293) · [Before (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12293)

```diff
-             return null !== BB ? (0, YB.i)(BB, "appCheck") : !!(0, DB.h)() || "1" === QB.i.getItem(jB) && void 0 !== window.ReactNativeWebView
+             return null !== ee ? (0, ye.j)(ee, "appCheck") : !!(0, be.f)() || "1" === Me.m.getItem(Ue) && void 0 !== window.ReactNativeWebView
```

#### 386. `bundles/bloxd.io/main.js` (Changed code · before: `L12297-L12299` → after: `L12297-L12298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12297-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12297-L12298) · [Before (L12297-L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12297-L12299)

```diff
-             c: () => PB,
-             d: () => JB,
-             g: () => MB,
+             b: () => Re,
+             f: () => Je,
```

#### 387. `bundles/bloxd.io/main.js` (Changed code · before: `L12302-L12303` → after: `L12303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12303) · [Before (L12302-L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12302-L12303)

```diff
-             n: () => qB,
-             o: () => lB
+             n: () => qe
```

#### 388. `bundles/bloxd.io/main.js` (Changed code · before: `L12305` → after: `L12305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12305) · [Before (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12305)

```diff
-           var YB = GB(180);
+           var ye = He(170);
```

#### 389. `bundles/bloxd.io/main.js` (Changed code · before: `L12322` → after: `L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12322) · [Before (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12322)

```diff
-             const OB = `${BB.vendor} ${BB.renderer}`;
+             const ie = `${ee.vendor} ${ee.renderer}`;
```

#### 390. `bundles/bloxd.io/main.js` (Changed code · before: `L12327` → after: `L12327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12327) · [Before (L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12327)

```diff
-             return "vm" === BB || YB.f.includes(BB)
+             return "vm" === ee || ye.j.includes(ee)
```

#### 391. `bundles/bloxd.io/main.js` (Changed code · before: `L12337-L12338` → after: `L12337-L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12337-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12337-L12338) · [Before (L12337-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12337-L12338)

```diff
-             (null !== (GB = BB.antiAliasing) && void 0 !== GB ? GB : OB.antiAliasing) && OB.antiAliasing && (DB.antiAliasing = BB.antiAliasing);
-             const QB = null !== (YB = BB.pixelScale) && void 0 !== YB ? YB : OB.pixelScale;
+             (null !== (He = ee.antiAliasing) && void 0 !== He ? He : ie.antiAliasing) && ie.antiAliasing && (be.antiAliasing = ee.antiAliasing);
+             const Me = null !== (ye = ee.pixelScale) && void 0 !== ye ? ye : ie.pixelScale;
```

#### 392. `bundles/bloxd.io/main.js` (Changed code · before: `L12345-L12346` → after: `L12345-L12346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12345-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12345-L12346) · [Before (L12345-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12345-L12346)

```diff
-             void 0 !== OB.antiAliasing && BB.antiAliasing === lB.antiAliasing && (YB.antiAliasing = null !== (DB = OB.antiAliasing) && void 0 !== DB ? DB : GB.antiAliasing);
-             void 0 !== OB.pixelScale && BB.pixelScale === lB.pixelScale && (YB.pixelScale = null !== (QB = OB.pixelScale) && void 0 !== QB ? QB : GB.pixelScale);
+             void 0 !== ie.antiAliasing && ee.antiAliasing === qe.antiAliasing && (ye.antiAliasing = null !== (be = ie.antiAliasing) && void 0 !== be ? be : He.antiAliasing);
+             void 0 !== ie.pixelScale && ee.pixelScale === qe.pixelScale && (ye.pixelScale = null !== (Me = ie.pixelScale) && void 0 !== Me ? Me : He.pixelScale);
```

#### 393. `bundles/bloxd.io/main.js` (Changed code · before: `L12349` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12349) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12349)

```diff
-         }, , , , , , , (BB, OB, GB) => {
+         }, , , , , (ee, ie, He) => {
```

#### 394. `bundles/bloxd.io/main.js` (Changed code · before: `L12353-L12355` → after: `L12352-L12356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12352-L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12352-L12356) · [Before (L12353-L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12353-L12355)

```diff
-             C: () => pB,
-             G: () => qB,
-             b: () => zB,
+             E: () => pe,
+             F: () => be,
+             I: () => Ke,
+             K: () => fe,
+             O: () => Te,
```

#### 395. `bundles/bloxd.io/main.js` (Changed code · before: `L12358` → after: `L12359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12359) · [Before (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12358)

```diff
-             i: () => yB,
+             j: () => Xe,
```

#### 396. `bundles/bloxd.io/main.js` (Changed code · before: `L12363` → after: `L12363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12363) · [Before (L12363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12363)

```diff
-             u: () => lB,
+             t: () => ye,
```

#### 397. `bundles/bloxd.io/main.js` (Changed code · before: `L12384` → after: `L12384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12384) · [Before (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12384)

```diff
-         }, , (BB, OB, GB) => {
+         }, , , (ee, ie, He) => {
```

#### 398. `bundles/bloxd.io/main.js` (Changed code · before: `L12389-L12397` → after: `L12389-L12394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12389-L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12389-L12394) · [Before (L12389-L12397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12389-L12397)

```diff
-             J: () => MB,
-             N: () => QB,
-             P: () => qB,
-             Q: () => yB,
-             b: () => zB,
-             e: () => DB,
-             g: () => lB,
-             k: () => JB,
-             o: () => pB,
+             H: () => Fe,
+             c: () => ke,
+             d: () => be,
+             g: () => qe,
+             i: () => Je,
+             m: () => fe,
```

#### 399. `bundles/bloxd.io/main.js` (Changed code · before: `L12399-L12400` → after: `L12396-L12400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12396-L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12396-L12400) · [Before (L12399-L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12399-L12400)

```diff
-             t: () => ZB,
-             x: () => RB
+             r: () => pe,
+             s: () => ze,
+             w: () => Xe,
+             y: () => Re,
+             z: () => Ue
```

#### 400. `bundles/bloxd.io/main.js` (Changed code · before: `L12402` → after: `L12402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12402) · [Before (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12402)

```diff
-           var YB = GB(186);
+           var ye = He(182);
```

#### 401. `bundles/bloxd.io/main.js` (Changed code · before: `L12419` → after: `L12419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12419) · [Before (L12419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12419)

```diff
-             return YB.B.some((OB => OB === BB))
+             return ye.G.some((ie => ie === ee))
```

#### 402. `bundles/bloxd.io/main.js` (Changed code · before: `L12421` → after: `L12421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12421) · [Before (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12421)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , , , , , , , , (ee, ie, He) => {
```

#### 403. `bundles/bloxd.io/main.js` (Changed code · before: `L12424-L12425` → after: `L12424-L12428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12424-L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/main.js#L12424-L12428) · [Before (L12424-L12425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/main.js#L12424-L12425)

```diff
-             B: () => JB,
-             E: () => aB,
+             Ab: () => ae,
+             C: () => Ie,
+             Cb: () => Ke,
+             D: () => ne,
+             Eb: () => te,
```
