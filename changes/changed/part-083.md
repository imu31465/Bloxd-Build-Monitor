# Changed — Bundle Modifications Report (Part 083 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `83 / 86` (**429** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 082](part-082.md) · [Part 084 →](part-084.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/main.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/main.js` (1777 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78)

#### 345. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11006` → after: `L11009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11009) · [Before (L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11006)

```diff
-             return "string" === typeof BB ? BB : BB?.message
+             return "string" === typeof WW ? WW : WW?.message
```

#### 346. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11044` → after: `L11047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11047) · [Before (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11044)

```diff
-             for (const YB of GB) "number" === typeof YB ? OB.push(`[${YB}]`) : "symbol" === typeof YB ? OB.push(`[${JSON.stringify(String(YB))}]`) : /[^\w$]/.test(YB) ? OB.push(`[${JSON.stringify(YB)}]`) : (OB.length && OB.push("."), OB.push(YB));
+             for (const mW of OW) "number" === typeof mW ? iW.push(`[${mW}]`) : "symbol" === typeof mW ? iW.push(`[${JSON.stringify(String(mW))}]`) : /[^\w$]/.test(mW) ? iW.push(`[${JSON.stringify(mW)}]`) : (iW.length && iW.push("."), iW.push(mW));
```

#### 347. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11051` → after: `L11054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11054) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11051)

```diff
-             for (const YB of GB) OB.push(`\u2716 ${YB.message}`), YB.path?.length && OB.push(`  \u2192 at ${FB(YB.path)}`);
+             for (const mW of OW) iW.push(`\u2716 ${mW.message}`), mW.path?.length && iW.push(`  \u2192 at ${dW(mW.path)}`);
```

#### 348. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11296` → after: `L11299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11299) · [Before (L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11296)

```diff
-               xB.init(BB, OB), BB._zod.pattern = [...BB?._zod.bag?.patterns ?? []].pop() ?? (GB = BB._zod.bag, new RegExp(`^${GB?`[\\s\\S]{${GB?.minimum??0},${GB?.maximum??""}}`:"[\\s\\S]*"}$`)), BB._zod.parse = (GB, YB) => {
+               FW.init(WW, iW), WW._zod.pattern = [...WW?._zod.bag?.patterns ?? []].pop() ?? (OW = WW._zod.bag, new RegExp(`^${OW?`[\\s\\S]{${OW?.minimum??0},${OW?.maximum??""}}`:"[\\s\\S]*"}$`)), WW._zod.parse = (OW, mW) => {
```

#### 349. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11390` → after: `L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11393) · [Before (L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11390)

```diff
-               if (!BB.shape?.[DB]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${DB}": expected a Zod schema`);
+               if (!WW.shape?.[EW]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${EW}": expected a Zod schema`);
```

#### 350. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11501` → after: `L11504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11504) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11501)

```diff
-                 return new RegExp(`^(${BB.map((BB=>zB(BB.source))).join("|")})$`)
+                 return new RegExp(`^(${WW.map((WW=>xW(WW.source))).join("|")})$`)
```

#### 351. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11531` → after: `L11534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11534) · [Before (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11531)

```diff
-                 if (!YB || 0 === Object.keys(YB).length) throw new Error(`Invalid discriminated union option at index "${OB.options.indexOf(GB)}"`);
+                 if (!mW || 0 === Object.keys(mW).length) throw new Error(`Invalid discriminated union option at index "${iW.options.indexOf(OW)}"`);
```

#### 352. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11544` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11547) · [Before (L11544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11544)

```diff
-                 if (!BB || 0 === BB.size) throw new Error(`Invalid discriminated union option at index "${OB.options.indexOf(YB)}"`);
+                 if (!WW || 0 === WW.size) throw new Error(`Invalid discriminated union option at index "${iW.options.indexOf(mW)}"`);
```

#### 353. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11546` → after: `L11549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11549) · [Before (L11546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11546)

```diff
-                   if (GB.has(OB)) throw new Error(`Duplicate discriminator value "${String(OB)}"`);
+                   if (OW.has(iW)) throw new Error(`Duplicate discriminator value "${String(iW)}"`);
```

#### 354. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11648` → after: `L11651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11651) · [Before (L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11648)

```diff
-               BB._zod.values = YB, BB._zod.pattern = new RegExp(`^(${GB.filter((BB=>AB.has(typeof BB))).map((BB=>"string"===typeof BB?VB(BB):BB.toString())).join("|")})$`), BB._zod.parse = (OB, DB) => {
+               WW._zod.values = mW, WW._zod.pattern = new RegExp(`^(${OW.filter((WW=>MW.has(typeof WW))).map((WW=>"string"===typeof WW?KW(WW):WW.toString())).join("|")})$`), WW._zod.parse = (iW, EW) => {
```

#### 355. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11661` → after: `L11664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11664) · [Before (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11661)

```diff
-               BB._zod.values = GB, BB._zod.pattern = new RegExp(`^(${OB.values.map((BB=>"string"===typeof BB?VB(BB):BB?VB(BB.toString()):String(BB))).join("|")})$`), BB._zod.parse = (YB, DB) => {
+               WW._zod.values = OW, WW._zod.pattern = new RegExp(`^(${iW.values.map((WW=>"string"===typeof WW?KW(WW):WW?KW(WW.toString()):String(WW))).join("|")})$`), WW._zod.parse = (mW, EW) => {
```

#### 356. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11676` → after: `L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11679) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11676)

```diff
-                   return (oB instanceof Promise ? oB : Promise.resolve(oB)).then((BB => (GB.value = BB, GB)))
+                   return (PW instanceof Promise ? PW : Promise.resolve(PW)).then((WW => (OW.value = WW, OW)))
```

#### 357. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11692` → after: `L11695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11695) · [Before (L11692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11692)

```diff
-                 return BB ? new RegExp(`^(${zB(BB.source)})?$`) : void 0
+                 return WW ? new RegExp(`^(${xW(WW.source)})?$`) : void 0
```

#### 358. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11698` → after: `L11701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11701) · [Before (L11698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11698)

```diff
-                 return void 0 === BB.value ? BB : OB.innerType._zod.run(BB, GB)
+                 return void 0 === WW.value ? WW : iW.innerType._zod.run(WW, OW)
```

#### 359. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11704-L11705` → after: `L11707-L11708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11707-L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11707-L11708) · [Before (L11704-L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11704-L11705)

```diff
-                 return BB ? new RegExp(`^(${zB(BB.source)}|null)$`) : void 0
-               })), pB(BB._zod, "values", (() => OB.innerType._zod.values ? new Set([...OB.innerType._zod.values, null]) : void 0)), BB._zod.parse = (BB, GB) => null === BB.value ? BB : OB.innerType._zod.run(BB, GB)
+                 return WW ? new RegExp(`^(${xW(WW.source)}|null)$`) : void 0
+               })), AW(WW._zod, "values", (() => iW.innerType._zod.values ? new Set([...iW.innerType._zod.values, null]) : void 0)), WW._zod.parse = (WW, OW) => null === WW.value ? WW : iW.innerType._zod.run(WW, OW)
```

#### 360. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11758` → after: `L11761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11761) · [Before (L11758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11758)

```diff
-                 DB = OB.oP(YB);
+                 EW = iW.cZ(mW);
```

#### 361. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11815` → after: `L11818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R11818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L11818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L11818) · [Before (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L11815)

```diff
-                 return Object.keys(YB).length ? YB : void 0
+                 return Object.keys(mW).length ? mW : void 0
```

#### 362. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12041` → after: `L12044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12044) · [Before (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12041)

```diff
-               values: Array.isArray(BB) ? BB : [BB],
+               values: Array.isArray(WW) ? WW : [WW],
```

#### 363. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12099` → after: `L12102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12102) · [Before (L12099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12099)

```diff
-               catchValue: "function" === typeof OB ? OB : () => OB
+               catchValue: "function" === typeof iW ? iW : () => iW
```

#### 364. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12122` → after: `L12125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12125) · [Before (L12122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12122)

```diff
-                 oP: OB,
+                 cZ: iW,
```

#### 365. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12127` → after: `L12130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12130) · [Before (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12127)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , , (WW, iW, OW) => {
```

#### 366. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12131-L12133` → after: `L12133-L12136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12133-L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12133-L12136) · [Before (L12131-L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12131-L12133)

```diff
-             h: () => oB,
-             i: () => MB,
-             k: () => yB
+             g: () => LW,
+             k: () => PW,
+             n: () => tW,
+             q: () => cW
```

#### 367. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12135-L12141` → after: `L12138-L12144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12138-L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12138-L12144) · [Before (L12135-L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12135-L12141)

```diff
-           var YB = GB(137),
-             DB = GB(153);
-           const QB = YB.E({
-               safeArea: DB.h,
-               notificationCanAsk: YB.g(),
-               pushToken: YB.v(YB.W()),
-               privacyOptionsRequired: YB.v(YB.g())
+           var mW = OW(141),
+             EW = OW(152);
+           const NW = mW.H({
+               safeArea: EW.i,
+               notificationCanAsk: mW.j(),
+               pushToken: mW.D(mW.bb()),
+               privacyOptionsRequired: mW.D(mW.j())
```

#### 368. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12143-L12148` → after: `L12146-L12151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12146-L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12146-L12151) · [Before (L12143-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12143-L12148)

```diff
-             oB = YB.E({
-               protocol: YB.B(),
-               platform: YB.n(["ios", "android"]),
-               appVersion: YB.W(),
-               build: YB.W(),
-               capabilities: YB.P(YB.W(), YB.B())
+             PW = mW.H({
+               protocol: mW.G(),
+               platform: mW.r(["ios", "android"]),
+               appVersion: mW.bb(),
+               build: mW.bb(),
+               capabilities: mW.T(mW.bb(), mW.G())
```

#### 369. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12150` → after: `L12153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12153) · [Before (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12150)

```diff
-             jB = YB.o(oB, {
+             LW = mW.v(PW, {
```

#### 370. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12153-L12155` → after: `L12156-L12158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12156-L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12156-L12158) · [Before (L12153-L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12153-L12155)

```diff
-             yB = YB.E({
-               protocols: YB.c(YB.B()),
-               webVersion: YB.W()
+             cW = mW.H({
+               protocols: mW.h(mW.G()),
+               webVersion: mW.bb()
```

#### 371. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12165` → after: `L12168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12168) · [Before (L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12165)

```diff
-             b: () => oB,
+             c: () => PW,
```

#### 372. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12167` → after: `L12170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12170) · [Before (L12167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12167)

```diff
-             h: () => DB
+             i: () => EW
```

#### 373. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12169-L12174` → after: `L12172-L12177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12172-L12177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12172-L12177) · [Before (L12169-L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12169-L12174)

```diff
-           var YB = GB(137);
-           const DB = YB.E({
-               top: YB.B(),
-               right: YB.B(),
-               bottom: YB.B(),
-               left: YB.B()
+           var mW = OW(141);
+           const EW = mW.H({
+               top: mW.G(),
+               right: mW.G(),
+               bottom: mW.G(),
+               left: mW.G()
```

#### 374. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12177-L12178` → after: `L12180-L12181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12180-L12181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12180-L12181) · [Before (L12177-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12177-L12178)

```diff
-               setOrientation: YB.E({
-                 orientation: YB.n(["portrait", "landscape", "default"])
+               setOrientation: mW.H({
+                 orientation: mW.r(["portrait", "landscape", "default"])
```

#### 375. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12184` → after: `L12187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12187) · [Before (L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12184)

```diff
-         }, , , , , , , , , (BB, OB, GB) => {
+         }, , (WW, iW, OW) => {
```

#### 376. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12197` → after: `L12200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12200) · [Before (L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12197)

```diff
-             A: () => QB,
+             C: () => NW,
```

#### 377. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12200-L12202` → after: `L12203-L12204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12203-L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12203-L12204) · [Before (L12200-L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12200-L12202)

```diff
-             I: () => MB,
-             L: () => pB,
-             M: () => ZB,
+             G: () => tW,
+             K: () => AW,
```

#### 378. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12204-L12210` → after: `L12206-L12213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12206-L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12206-L12213) · [Before (L12204-L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12204-L12210)

```diff
-             O: () => WB,
-             d: () => yB,
-             g: () => RB,
-             j: () => lB,
-             l: () => JB,
-             p: () => qB,
-             r: () => oB,
+             Q: () => UW,
+             S: () => sW,
+             c: () => cW,
+             f: () => kW,
+             h: () => lW,
+             k: () => wW,
+             o: () => bW,
+             q: () => PW,
```

#### 379. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12212-L12213` → after: `L12215-L12216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12215-L12216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12215-L12216) · [Before (L12212-L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12212-L12213)

```diff
-             v: () => YB,
-             w: () => DB
+             w: () => mW,
+             y: () => EW
```

#### 380. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12278` → after: `L12281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12281) · [Before (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12278)

```diff
-         }, , , (BB, OB, GB) => {
+         }, , , , , , , (WW, iW, OW) => {
```

#### 381. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12280` → after: `L12283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12283) · [Before (L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12280)

```diff
-             c: () => yB
+             b: () => cW
```

#### 382. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12282-L12285` → after: `L12285-L12288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12285-L12288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12285-L12288) · [Before (L12282-L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12282-L12285)

```diff
-           var YB = GB(145),
-             DB = GB(128),
-             QB = GB(31),
-             oB = GB(98);
+           var mW = OW(144),
+             EW = OW(139),
+             NW = OW(39),
+             PW = OW(109);
```

#### 383. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12290` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12293) · [Before (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12290)

```diff
-               oB.currentUrl.removeSearchParam(jB), BB ? QB.i.setItem(jB, "1") : QB.i.removeItem(jB)
+               PW.currentUrl.removeSearchParam(LW), WW ? NW.j.setItem(LW, "1") : NW.j.removeItem(LW)
```

#### 384. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12292-L12293` → after: `L12295-L12296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12295-L12296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12295-L12296) · [Before (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12292-L12293)

```diff
-             const BB = (0, DB.e)();
-             return null !== BB ? (0, YB.i)(BB, "appCheck") : !!(0, DB.h)() || "1" === QB.i.getItem(jB) && void 0 !== window.ReactNativeWebView
+             const WW = (0, EW.d)();
+             return null !== WW ? (0, mW.n)(WW, "appCheck") : !!(0, EW.h)() || "1" === NW.j.getItem(LW) && void 0 !== window.ReactNativeWebView
```

#### 385. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12295` → after: `L12298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12298) · [Before (L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12295)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , (WW, iW, OW) => {
```

#### 386. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12297-L12301` → after: `L12300-L12302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12300-L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12300-L12302) · [Before (L12297-L12301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12297-L12301)

```diff
-             c: () => PB,
-             d: () => JB,
-             g: () => MB,
-             h: () => zB,
-             l: () => pB,
+             b: () => ZW,
+             f: () => wW,
+             j: () => tW,
```

#### 387. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12303` → after: `L12304-L12306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12304-L12306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12304-L12306) · [Before (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12303)

```diff
-             o: () => lB
+             r: () => AW,
+             v: () => bW,
+             w: () => lW
```

#### 388. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12305` → after: `L12308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12308) · [Before (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12305)

```diff
-           var YB = GB(180);
+           var mW = OW(167);
```

#### 389. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12322` → after: `L12325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12325) · [Before (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12322)

```diff
-             const OB = `${BB.vendor} ${BB.renderer}`;
+             const iW = `${WW.vendor} ${WW.renderer}`;
```

#### 390. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12327` → after: `L12330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12330) · [Before (L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12327)

```diff
-             return "vm" === BB || YB.f.includes(BB)
+             return "vm" === WW || mW.h.includes(WW)
```

#### 391. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12337-L12338` → after: `L12340-L12341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12340-L12341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12340-L12341) · [Before (L12337-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12337-L12338)

```diff
-             (null !== (GB = BB.antiAliasing) && void 0 !== GB ? GB : OB.antiAliasing) && OB.antiAliasing && (DB.antiAliasing = BB.antiAliasing);
-             const QB = null !== (YB = BB.pixelScale) && void 0 !== YB ? YB : OB.pixelScale;
+             (null !== (OW = WW.antiAliasing) && void 0 !== OW ? OW : iW.antiAliasing) && iW.antiAliasing && (EW.antiAliasing = WW.antiAliasing);
+             const NW = null !== (mW = WW.pixelScale) && void 0 !== mW ? mW : iW.pixelScale;
```

#### 392. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12345-L12346` → after: `L12348-L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12348-L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12348-L12349) · [Before (L12345-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12345-L12346)

```diff
-             void 0 !== OB.antiAliasing && BB.antiAliasing === lB.antiAliasing && (YB.antiAliasing = null !== (DB = OB.antiAliasing) && void 0 !== DB ? DB : GB.antiAliasing);
-             void 0 !== OB.pixelScale && BB.pixelScale === lB.pixelScale && (YB.pixelScale = null !== (QB = OB.pixelScale) && void 0 !== QB ? QB : GB.pixelScale);
+             void 0 !== iW.antiAliasing && WW.antiAliasing === lW.antiAliasing && (mW.antiAliasing = null !== (EW = iW.antiAliasing) && void 0 !== EW ? EW : OW.antiAliasing);
+             void 0 !== iW.pixelScale && WW.pixelScale === lW.pixelScale && (mW.pixelScale = null !== (NW = iW.pixelScale) && void 0 !== NW ? NW : OW.pixelScale);
```

#### 393. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12349` → after: `L12352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12352) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12349)

```diff
-         }, , , , , , , (BB, OB, GB) => {
+         }, , , , (WW, iW, OW) => {
```

#### 394. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12351-L12354` → after: `L12354-L12356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12354-L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12354-L12356) · [Before (L12351-L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12351-L12354)

```diff
-             A: () => DB,
-             B: () => oB,
-             C: () => pB,
-             G: () => qB,
+             D: () => PW,
+             F: () => AW,
+             I: () => bW,
```

#### 395. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12356-L12358` → after: `L12358-L12360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12358-L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12358-L12360) · [Before (L12356-L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12356-L12358)

```diff
-             c: () => PB,
-             f: () => NB,
-             i: () => yB,
+             e: () => ZW,
+             h: () => UW,
+             i: () => cW,
```

#### 396. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12362` → after: `L12364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12364) · [Before (L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12362)

```diff
-             q: () => jB,
+             r: () => LW,
```

#### 397. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12364` → after: `L12366-L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12366-L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12366-L12367) · [Before (L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12364)

```diff
-             x: () => ZB
+             v: () => jW,
+             z: () => EW
```

#### 398. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12380` → after: `L12383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12383) · [Before (L12380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12380)

```diff
-             pB = ["none", "compatibility_mode", "not_requested", "webgl_holdback", "off_after_loss", "old_intel_driver", "intel_gen9", "gpu_class_webgl", "gpu_wasm_arm", "safari_26", "safari_27", "no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_er … [truncated]
+             AW = ["none", "compatibility_mode", "not_requested", "webgl_holdback", "off_after_loss", "old_intel_driver", "intel_gen9", "gpu_class_webgl", "gpu_wasm_arm", "safari_26", "safari_27", "few_wasm_memories", "no_webgpu_api", "no_adapter", "compatibility_held", "software_ … [truncated]
```

#### 399. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12387` → after: `L12390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12390) · [Before (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12387)

```diff
-             C: () => PB,
+             E: () => NW,
```

#### 400. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12389-L12398` → after: `L12392-L12399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12392-L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12392-L12399) · [Before (L12389-L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12389-L12398)

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
-             p: () => oB,
+             I: () => cW,
+             d: () => xW,
+             h: () => EW,
+             j: () => lW,
+             l: () => wW,
+             n: () => AW,
+             q: () => PW,
+             r: () => jW,
```

#### 401. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12400` → after: `L12401-L12403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12401-L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12401-L12403) · [Before (L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12400)

```diff
-             x: () => RB
+             u: () => UW,
+             x: () => ZW,
+             z: () => LW
```

#### 402. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12402` → after: `L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12405) · [Before (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12402)

```diff
-           var YB = GB(186);
+           var mW = OW(172);
```

#### 403. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12419` → after: `L12422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12422) · [Before (L12419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12419)

```diff
-             return YB.B.some((OB => OB === BB))
+             return mW.L.some((iW => iW === WW))
```

#### 404. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12421` → after: `L12424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12424) · [Before (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12421)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , , (WW, iW, OW) => {
```

#### 405. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12423-L12425` → after: `L12426-L12428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12426-L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12426-L12428) · [Before (L12423-L12425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12423-L12425)

```diff
-             $: () => xB,
-             B: () => JB,
-             E: () => aB,
+             Ab: () => PW,
+             C: () => Ei,
+             Cb: () => TW,
```

#### 406. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12430-L12431` → after: `L12434-L12438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12434-L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12434-L12438) · [Before (L12430-L12431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12430-L12431)

```diff
-             T: () => GO,
-             X: () => HB,
+             S: () => Wi,
+             U: () => vW,
+             V: () => IW,
+             W: () => GW,
+             Z: () => wi,
```

#### 407. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12435-L12437` → after: `L12442-L12443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12442-L12443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12442-L12443) · [Before (L12435-L12437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12435-L12437)

```diff
-             db: () => cB,
-             e: () => uB,
-             eb: () => XB,
+             d: () => nW,
+             fb: () => ti,
```

#### 408. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12443-L12445` → after: `L12447-L12449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12447-L12449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12447-L12449) · [Before (L12443-L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12443-L12445)

```diff
-             kb: () => NB,
-             m: () => BO,
-             ob: () => qB,
+             l: () => LW,
+             mb: () => aW,
+             nb: () => RW,
```

#### 409. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12447-L12448` → after: `L12451-L12452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12451-L12452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12451-L12452) · [Before (L12447-L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12447-L12448)

```diff
-             pb: () => iB,
-             s: () => yB,
+             rb: () => kW,
+             t: () => tW,
```

#### 410. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12452-L12454` → after: `L12456-L12458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12456-L12458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12456-L12458) · [Before (L12452-L12454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12452-L12454)

```diff
-             x: () => sB,
-             y: () => CB,
-             z: () => eB
+             wb: () => bW,
+             z: () => mi,
+             zb: () => eW
```

#### 411. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12456-L12458` → after: `L12460-L12462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12460-L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12460-L12462) · [Before (L12456-L12458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12456-L12458)

```diff
-           var YB = GB(162),
-             DB = GB(180),
-             QB = GB(188);
+           var mW = OW(154),
+             EW = OW(167),
+             NW = OW(179);
```

#### 412. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12471-L12472` → after: `L12475-L12476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12475-L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12475-L12476) · [Before (L12471-L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12471-L12472)

```diff
-             MB = ["shop.buy_pack", "shop.gift_pack", "shop.buy_premium_currency", "auth.login_provider", "auth.login_done", "auth.login_failed", "home.create_game_cta", "home.browser_tip", "home.season_pass_strip", "season_pass.tier_toast", "season_pass.reward_preview", "home.gam … [truncated]
-             PB = ["cached", "a", "b", "a_b", "appCheck", "appCheck_b", ...["failed", "error", "timeout", "late", "refused"].map((BB => `appCheck_b_${BB}`))],
+             tW = ["shop.buy_pack", "shop.gift_pack", "shop.buy_premium_currency", "auth.login_provider", "auth.login_done", "auth.login_failed", "home.create_game_cta", "home.browser_tip", "home.season_pass_strip", "season_pass.tier_toast", "season_pass.reward_preview", "home.gam … [truncated]
+             ZW = ["cached", "a", "b", "a_b", "appCheck", "appCheck_b", ...["failed", "error", "timeout", "late", "refused"].map((WW => `appCheck_b_${WW}`))],
```

#### 413. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12480` → after: `L12484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12484) · [Before (L12480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12480)

```diff
-             WB = [...lB.flatMap((BB => [`${pB}:${BB}:popup`, `${pB}:${BB}:click`, `${qB}:${BB}`, ...zB.map((OB => `${qB}:${BB}:${OB}`))])), ...ZB.map((BB => `${NB}:${BB}`)), RB],
+             sW = [...lW.flatMap((WW => [`${AW}:${WW}:popup`, `${AW}:${WW}:click`, `${bW}:${WW}`, ...xW.map((iW => `${bW}:${WW}:${iW}`))])), ...jW.map((WW => `${UW}:${WW}`)), kW],
```

#### 414. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12483` → after: `L12487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12487) · [Before (L12483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12483)

```diff
-             SB = AB.flatMap((BB => VB.map((OB => `${BB}:${OB}`)))),
+             SW = MW.flatMap((WW => KW.map((iW => `${WW}:${iW}`)))),
```

#### 415. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12487` → after: `L12491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12491) · [Before (L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12487)

```diff
-             }, ((BB, OB) => `queued_${OB}`));
+             }, ((WW, iW) => `queued_${iW}`));
```

#### 416. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12490` → after: `L12494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12494) · [Before (L12490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12490)

```diff
-             return `queued_${Math.min(BB,nB)}`
+             return `queued_${Math.min(WW,YW)}`
```

#### 417. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12503-L12505` → after: `L12507-L12509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12507-L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12507-L12509) · [Before (L12503-L12505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12503-L12505)

```diff
-             mB = ["ok", "fetch", "timeout", "integrity", "compile", "call", ...uB.flatMap((BB => [`instantiate_${BB}`, `core_${BB}`]))],
-             IB = dB.flatMap((BB => KB.flatMap((OB => kB.map((GB => `${BB}:${OB}:${GB}`)))))),
-             FB = mB.flatMap((BB => kB.map((OB => `${BB}:${OB}`)))),
+             uW = ["ok", "fetch", "timeout", "integrity", "compile", "call", ...nW.flatMap((WW => [`instantiate_${WW}`, `core_${WW}`]))],
+             oW = hW.flatMap((WW => HW.flatMap((iW => JW.map((OW => `${WW}:${iW}:${OW}`)))))),
+             dW = uW.flatMap((WW => JW.map((iW => `${WW}:${iW}`)))),
```

#### 418. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12508-L12509` → after: `L12513-L12520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12513-L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12513-L12520) · [Before (L12508-L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12508-L12509)

```diff
-             gB = [...PB, ...WB, ...["blocked", "blocked_ipv6", "direct_reachable", "cf_unreachable", "cf_join", "cf_join_failed", ...LB.map((BB => `cf_join_failed:${BB}`)), "cf_join_refused", "cf_join_left", "alias_recovery_on", "alias_recovery_holdout", "cf_failed_since_route",  … [truncated]
-             rB = (QB.g, QB.i, YB.N, DB.A, 20),
+             DW = ["blocked", "blocked_ipv6", "direct_reachable", "cf_unreachable", "cf_join", "cf_join_failed", ...gW.map((WW => `cf_join_failed:${WW}`)), "cf_join_refused", "cf_join_left", "alias_recovery_on", "alias_recovery_holdout", "cf_failed_since_route", "cf_retry_joined", … [truncated]
+             VW = ["ios_app", "ios_web"],
+             pW = ["promo_yes", "promo_no"],
+             fW = ["canvas_page", "canvas_offscreen"],
+             CW = ["raf_30", "raf_60", "raf_66_129", "raf_130_149", "raf_150_169", "raf_170_plus", "raf_unknown"],
+             XW = VW.flatMap((WW => pW.flatMap((iW => fW.flatMap((OW => CW.map((mW => `${WW}:${iW}:${OW}:${mW}`)))))))),
+             BW = [...ZW, ...sW, ...DW, "direct", "cf", "direct_failed", "cf_failed", ...MW, ...SW, ...yW, ...eW, ...vW, ...oW, ...dW, "hidden", "left", "played", "long_0", "long_lt10", "long_lt30", "long_ge30", "adinplay", "adsense", "adsolve", "aditude", "site_sdk", ...XW, "cont … [truncated]
+             qW = (NW.h, NW.j, mW.Q, EW.z, 20),
```

#### 419. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12521` → after: `L12532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12532) · [Before (L12521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12521)

```diff
-             vB = new RegExp(`^[A-Za-z0-9_.:-]{0,${HB}}$`),
+             mi = new RegExp(`^[A-Za-z0-9_.:-]{0,${Oi}}$`),
```

#### 420. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12529` → after: `L12540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12540) · [Before (L12529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12529)

```diff
-         }, , (BB, OB, GB) => {
+         }, , , , , , , (WW, iW, OW) => {
```

#### 421. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12531-L12533` → after: `L12542-L12544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12542-L12544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12542-L12544) · [Before (L12531-L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12531-L12533)

```diff
-             c: () => jB,
-             g: () => YB,
-             i: () => DB,
+             d: () => LW,
+             h: () => mW,
+             j: () => EW,
```

#### 422. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12535-L12536` → after: `L12546-L12547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12546-L12547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12546-L12547) · [Before (L12535-L12536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12535-L12536)

```diff
-             m: () => JB,
-             o: () => yB,
+             l: () => wW,
+             p: () => cW,
```

#### 423. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12544-L12557` → after: `L12555-L12568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12555-L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12555-L12568) · [Before (L12544-L12557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12544-L12557)

```diff
-               operatingSystem: "dj",
-               platformType: "nj",
-               gpuVendor: "Uj",
-               gpuFamily: "Fj",
-               softwareRenderer: "Tj",
-               iosDeviceClass: "tj",
-               deviceMemory: "vj",
-               screenResolutionBand: "Oy",
-               refreshHzBand: "xj",
-               renderBackend: "fj",
-               webgpuFallbackReason: "cj",
-               antiAliasing: "By",
-               shaderPackActive: "Ej",
-               shaderPackShadows: "Cj"
+               operatingSystem: "kw",
+               platformType: "Aw",
+               gpuVendor: "bw",
+               gpuFamily: "yw",
+               softwareRenderer: "Vw",
+               iosDeviceClass: "Rw",
+               deviceMemory: "Xw",
+               screenResolutionBand: "Iw",
+               refreshHzBand: "qw",
+               renderBackend: "jw",
+               webgpuFallbackReason: "dw",
+               antiAliasing: "Gw",
+               shaderPackActive: "ow",
+               shaderPackShadows: "fw"
```

#### 424. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12563` → after: `L12574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12574) · [Before (L12563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12563)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , , (WW, iW, OW) => {
```

#### 425. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12565` → after: `L12576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12576) · [Before (L12565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12565)

```diff
-             c: () => jB,
+             e: () => LW,
```

#### 426. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12568-L12570` → after: `L12580-L12581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12580-L12581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12580-L12581) · [Before (L12568-L12570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12568-L12570)

```diff
-             m: () => MB,
-             q: () => QB,
-             r: () => yB
+             k: () => NW,
+             m: () => cW
```

#### 427. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12572-L12573` → after: `L12583-L12584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12583-L12584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12583-L12584) · [Before (L12572-L12573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12572-L12573)

```diff
-           var YB = GB(200),
-             DB = GB(210);
+           var mW = OW(190),
+             EW = OW(202);
```

#### 428. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12585-L12586` → after: `L12596-L12597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12596-L12597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12596-L12597) · [Before (L12585-L12586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12585-L12586)

```diff
-               sZ: .5,
-               xZ: 1.8,
+               tU: .5,
+               ZU: 1.8,
```

#### 429. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12596` → after: `L12607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12607) · [Before (L12596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12596)

```diff
-               pP: 32,
+               jZ: 32,
```

#### 430. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12603` → after: `L12614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12614) · [Before (L12603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12603)

```diff
-               tZ: !0,
+               xU: !0,
```

#### 431. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12607` → after: `L12618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12618) · [Before (L12607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12607)

```diff
-               BN: 6,
+               lU: 6,
```

#### 432. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12642` → after: `L12653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12653) · [Before (L12642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12642)

```diff
-               az: 3,
+               Fx: 3,
```

#### 433. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12645` → after: `L12656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12656) · [Before (L12645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12645)

```diff
-               discordPreprodId: DB.c,
+               discordPreprodId: EW.b,
```

#### 434. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L12647-L12648` → after: `L12658-L12659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R12658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L12658-L12659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L12658-L12659) · [Before (L12647-L12648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L12647-L12648)

```diff
-               turnstileDisabled: !1 === YB.c.greenlightChecksEnabled,
-               recaptchaDisabled: !1 === YB.c.greenlightChecksEnabled,
+               turnstileDisabled: !1 === mW.b.greenlightChecksEnabled,
+               recaptchaDisabled: !1 === mW.b.greenlightChecksEnabled,
```

#### 435. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13045` → after: `L13056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13056) · [Before (L13045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13045)

```diff
-             if (PB.has(BB)) throw new Error(`Duplicate leave code: ${BB}`);
+             if (ZW.has(WW)) throw new Error(`Duplicate leave code: ${WW}`);
```

#### 436. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13050` → after: `L13061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13061) · [Before (L13050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13050)

```diff
-             c: () => QB
+             b: () => NW
```

#### 437. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13052-L13053` → after: `L13063-L13064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13063-L13064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13063-L13064) · [Before (L13052-L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13052-L13053)

```diff
-           var YB = GB(204),
-             DB = GB(206);
+           var mW = OW(192),
+             EW = OW(195);
```

#### 438. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13072` → after: `L13083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13083) · [Before (L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13072)

```diff
-           (0, DB.k)() && function(BB) {
+           (0, EW.h)() && function(WW) {
```

#### 439. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13078` → after: `L13089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13089) · [Before (L13078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13078)

```diff
-               if (void 0 !== GB) throw new Error(`Rename ${OB} to ${GB} in packages/shared/src/localConfigValues.ts`);
+               if (void 0 !== OW) throw new Error(`Rename ${iW} to ${OW} in packages/shared/src/localConfigValues.ts`);
```

#### 440. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13083` → after: `L13094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13094) · [Before (L13083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13083)

```diff
-               const BB = GB(217);
+               const WW = OW(204);
```

#### 441. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13087` → after: `L13098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13098) · [Before (L13087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13087)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , (WW, iW, OW) => {
```

#### 442. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13102` → after: `L13113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13113) · [Before (L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13102)

```diff
-             f: () => QB
+             h: () => NW
```

#### 443. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13104` → after: `L13115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13115) · [Before (L13104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13104)

```diff
-         }, , (BB, OB, GB) => {
+         }, , , (WW, iW, OW) => {
```

#### 444. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13109` → after: `L13120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13120) · [Before (L13109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13109)

```diff
-             k: () => QB
+             h: () => NW
```

#### 445. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13111` → after: `L13122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13122) · [Before (L13111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13111)

```diff
-           var YB = GB(210);
+           var mW = OW(202);
```

#### 446. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13122` → after: `L13133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13133) · [Before (L13122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13122)

```diff
-               return BB.includes("preprod") || BB.includes(YB.c)
+               return WW.includes("preprod") || WW.includes(mW.b)
```

#### 447. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13133` → after: `L13144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13144) · [Before (L13133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13133)

```diff
-               if (!JB.includes(OB)) throw new Error(`Invalid port offset "${BB}". Must be one of: ${JB.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+               if (!wW.includes(iW)) throw new Error(`Invalid port offset "${WW}". Must be one of: ${wW.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 448. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13211` → after: `L13222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13222) · [Before (L13211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13211)

```diff
-             const OB = oB() ? lB : pB;
+             const iW = PW() ? lW : AW;
```

#### 449. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13223` → after: `L13234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13234) · [Before (L13223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13223)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , , , , , , (WW, iW, OW) => {
```

#### 450. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13225` → after: `L13236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13236) · [Before (L13225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13225)

```diff
-             c: () => DB,
+             b: () => EW,
```

#### 451. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13230` → after: `L13241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13241) · [Before (L13230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13230)

```diff
-         }, , , , , , , BB => {
+         }, , WW => {
```

#### 452. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13235-L13236` → after: `L13246-L13247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13246-L13247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13246-L13247) · [Before (L13235-L13236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13235-L13236)

```diff
-           OB.keys = () => [], OB.resolve = OB, OB.id = 217, BB.exports = OB
-         }, , , , , , , (BB, OB, GB) => {
+           iW.keys = () => [], iW.resolve = iW, iW.id = 204, WW.exports = iW
+         }, , , , , , , , (WW, iW, OW) => {
```

#### 453. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13244` → after: `L13255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13255) · [Before (L13244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13244)

```diff
-           var YB = GB(232),
+           var mW = OW(216),
```

#### 454. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13246` → after: `L13257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13257) · [Before (L13246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13246)

```diff
-             QB = GB(235),
+             NW = OW(220),
```

#### 455. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13248` → after: `L13259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13259) · [Before (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13248)

```diff
-             jB = GB(242),
+             LW = OW(228),
```

#### 456. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13250` → after: `L13261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13261) · [Before (L13250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13250)

```diff
-             JB = GB(244);
+             wW = OW(232);
```

#### 457. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13354` → after: `L13365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13365) · [Before (L13354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13354)

```diff
-             return void 0 === GB && (GB = zB(OB), null === GB && console.error(`LocationDetection: "${OB}" (listed for ${BB}) is not a timezone this browser recognises`), pB.set(OB, GB)), GB
+             return void 0 === OW && (OW = xW(iW), null === OW && console.error(`LocationDetection: "${iW}" (listed for ${WW}) is not a timezone this browser recognises`), AW.set(iW, OW)), OW
```

#### 458. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13359` → after: `L13370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13370) · [Before (L13359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13359)

```diff
-             return (null !== (GB = lB[BB]) && void 0 !== GB ? GB : []).some((GB => qB(BB, GB) === OB))
+             return (null !== (OW = lW[WW]) && void 0 !== OW ? OW : []).some((OW => bW(WW, OW) === iW))
```

#### 459. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13369` → after: `L13380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13380) · [Before (L13369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13369)

```diff
-               return (null !== (OB = lB[BB]) && void 0 !== OB ? OB : []).map((OB => ({
+               return (null !== (iW = lW[WW]) && void 0 !== iW ? iW : []).map((iW => ({
```

#### 460. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13378` → after: `L13389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13389) · [Before (L13378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13378)

```diff
-               GB < OB.length && (0, JB.b)(YB)
+               OW < iW.length && (0, wW.d)(mW)
```

#### 461. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13380` → after: `L13391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13391) · [Before (L13380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13380)

```diff
-             (0, JB.b)(YB)
+             (0, wW.d)(mW)
```

#### 462. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13393` → after: `L13404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13404) · [Before (L13393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13393)

```diff
-         }, , , , , , , , function(BB) {
+         }, , , , function(WW) {
```

#### 463. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13423` → after: `L13434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13434) · [Before (L13423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13423)

```diff
-                 return !YB || YB.length >= OB ? BB : "" + Array(OB + 1 - YB.length).join(GB) + BB
+                 return !mW || mW.length >= iW ? WW : "" + Array(iW + 1 - mW.length).join(OW) + WW
```

#### 464. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13440` → after: `L13451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13451) · [Before (L13440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13440)

```diff
-                   return +(-(YB + (GB - DB) / (QB ? DB - oB : oB - DB)) || 0)
+                   return +(-(mW + (OW - EW) / (NW ? EW - PW : PW - EW)) || 0)
```

#### 465. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13486` → after: `L13497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13497) · [Before (L13486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13486)

```diff
-                 var GB = "object" == typeof OB ? OB : {};
+                 var OW = "object" == typeof iW ? iW : {};
```

#### 466. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13546` → after: `L13557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13557) · [Before (L13546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13546)

```diff
-                       return YB ? DB : DB.endOf(jB)
+                       return mW ? EW : EW.endOf(LW)
```

#### 467. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13556` → after: `L13567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13567) · [Before (L13556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13556)

```diff
-                     case PB:
+                     case ZW:
```

#### 468. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13558` → after: `L13569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13569) · [Before (L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13558)

```diff
-                     case JB:
+                     case wW:
```

#### 469. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13560` → after: `L13571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13571) · [Before (L13560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13560)

```diff
-                     case yB:
+                     case cW:
```

#### 470. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13563-L13565` → after: `L13574-L13576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13574-L13576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13574-L13576) · [Before (L13563-L13565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13563-L13565)

```diff
-                       return lB(YB ? NB - AB : NB + (6 - AB), ZB);
-                     case jB:
-                     case zB:
+                       return lW(mW ? UW - MW : UW + (6 - MW), jW);
+                     case LW:
+                     case xW:
```

#### 471. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13567` → after: `L13578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13578) · [Before (L13567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13567)

```diff
-                     case oB:
+                     case PW:
```

#### 472. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13569` → after: `L13580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13580) · [Before (L13569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13569)

```diff
-                     case QB:
+                     case NW:
```

#### 473. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13571` → after: `L13582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13582) · [Before (L13571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13571)

```diff
-                     case DB:
+                     case EW:
```

#### 474. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13698` → after: `L13709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13709) · [Before (L13698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13698)

```diff
-                     case PB:
+                     case ZW:
```

#### 475. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13701` → after: `L13712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13712) · [Before (L13701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13701)

```diff
-                     case JB:
+                     case wW:
```

#### 476. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13704` → after: `L13715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13715) · [Before (L13704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13704)

```diff
-                     case MB:
+                     case tW:
```

#### 477. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13707` → after: `L13718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13718) · [Before (L13707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13707)

```diff
-                     case yB:
+                     case cW:
```

#### 478. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13710` → after: `L13721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13721) · [Before (L13710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13710)

```diff
-                     case jB:
+                     case LW:
```

#### 479. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13713` → after: `L13724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13724) · [Before (L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13713)

```diff
-                     case oB:
+                     case PW:
```

#### 480. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13716` → after: `L13727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13727) · [Before (L13716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13716)

```diff
-                     case QB:
+                     case NW:
```

#### 481. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13719` → after: `L13730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13730) · [Before (L13719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13719)

```diff
-                     case DB:
+                     case EW:
```

#### 482. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13725` → after: `L13736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13736) · [Before (L13725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13725)

```diff
-                   return lB ? pB : fB.a(pB)
+                   return lW ? AW : TW.a(AW)
```

#### 483. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13767` → after: `L13778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13778) · [Before (L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13767)

```diff
-         }, , , function(BB) {
+         }, , , , function(WW) {
```

#### 484. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13814` → after: `L13825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13825) · [Before (L13814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13814)

```diff
-                     return 0 === oB ? 0 : "+" === QB ? oB : -oB
+                     return 0 === PW ? 0 : "+" === NW ? PW : -PW
```

#### 485. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13816` → after: `L13827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13827) · [Before (L13816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13816)

```diff
-                 var oB = Math.abs(YB) <= 16 ? 60 * YB : YB,
+                 var PW = Math.abs(mW) <= 16 ? 60 * mW : mW,
```

#### 486. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13852` → after: `L13863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13863) · [Before (L13852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13852)

```diff
-         }, , , , , , , function(BB) {
+         }, , , , , , , , function(WW) {
```

#### 487. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13958` → after: `L13969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13969) · [Before (L13958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13958)

```diff
-         }, , (BB, OB, GB) => {
+         }, , , , (WW, iW, OW) => {
```

#### 488. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13960` → after: `L13971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13971) · [Before (L13960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13960)

```diff
-             b: () => DB
+             d: () => EW
```

#### 489. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13971` → after: `L13982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13982) · [Before (L13971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13971)

```diff
-                 QB = null !== (OB = DB.nativeRequestIdleCallback) && void 0 !== OB ? OB : DB.requestIdleCallback,
+                 NW = null !== (iW = EW.nativeRequestIdleCallback) && void 0 !== iW ? iW : EW.requestIdleCallback,
```

#### 490. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13988` → after: `L13999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R13999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L13999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L13999) · [Before (L13988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13988)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , , , , , , , , (WW, iW, OW) => {
```

#### 491. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13990-L13992` → after: `L14001-L14003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14001-L14003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14001-L14003) · [Before (L13990-L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13990-L13992)

```diff
-             b: () => MB,
-             f: () => zB,
-             g: () => JB
+             d: () => tW,
+             g: () => xW,
+             k: () => wW
```

#### 492. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L13994-L13998` → after: `L14005-L14009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14005-L14009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14005-L14009) · [Before (L13994-L13998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L13994-L13998)

```diff
-           var YB = GB(254),
-             DB = GB(258),
-             QB = GB(92),
-             oB = GB(264),
-             jB = GB(118);
+           var mW = OW(243),
+             EW = OW(248),
+             NW = OW(100),
+             PW = OW(253),
+             LW = OW(131);
```

#### 493. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14003` → after: `L14014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14014) · [Before (L14003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14003)

```diff
-             if ((0, oB.e)()) return !1;
+             if ((0, PW.g)()) return !1;
```

#### 494. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14006-L14007` → after: `L14017-L14018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14017-L14018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14017-L14018) · [Before (L14006-L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14006-L14007)

```diff
-             const JB = null !== (BB = null !== (OB = null === (GB = (0, jB.o)()) || void 0 === GB ? void 0 : GB.renderer) && void 0 !== OB ? OB : null === (DB = (0, jB.F)()) || void 0 === DB ? void 0 : DB.renderer) && void 0 !== BB ? BB : "";
-             return lB((0, YB.p)(JB).family)
+             const wW = null !== (WW = null !== (iW = null === (OW = (0, LW.j)()) || void 0 === OW ? void 0 : OW.renderer) && void 0 !== iW ? iW : null === (EW = (0, LW.w)()) || void 0 === EW ? void 0 : EW.renderer) && void 0 !== WW ? WW : "";
+             return lW((0, mW.m)(wW).family)
```

#### 495. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14011` → after: `L14022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14022) · [Before (L14011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14011)

```diff
-             return !(0, oB.e)() && PB(BB)
+             return !(0, PW.g)() && ZW(WW)
```

#### 496. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14017` → after: `L14028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14028) · [Before (L14017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14017)

```diff
-             const OB = (0, DB.d)(BB.vendor, BB.architecture);
+             const iW = (0, EW.f)(WW.vendor, WW.architecture);
```

#### 497. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14028` → after: `L14039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14039) · [Before (L14028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14028)

```diff
-         }, , , , , , (BB, OB, GB) => {
+         }, , (WW, iW, OW) => {
```

#### 498. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14032-L14035` → after: `L14043-L14046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14043-L14046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14043-L14046) · [Before (L14032-L14035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14032-L14035)

```diff
-             l: () => lB,
-             p: () => PB,
-             t: () => MB,
-             u: () => pB
+             i: () => lW,
+             m: () => ZW,
+             n: () => tW,
+             q: () => AW
```

#### 499. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14037-L14038` → after: `L14048-L14049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14048-L14049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14048-L14049) · [Before (L14037-L14038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14037-L14038)

```diff
-           var YB = GB(92),
-             DB = GB(118);
+           var mW = OW(100),
+             EW = OW(131);
```

#### 500. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14043` → after: `L14054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14054) · [Before (L14043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14043)

```diff
-                 return "intel" === OB ? `windows_intel_${GB()}` : "nvidia" === OB || "amd" === OB ? `windows_${OB}` : "other";
+                 return "intel" === iW ? `windows_intel_${OW()}` : "nvidia" === iW || "amd" === iW ? `windows_${iW}` : "other";
```

#### 501. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14049` → after: `L14060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14060) · [Before (L14049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14049)

```diff
-                 return "qualcomm" === OB || "arm" === OB ? `android_${OB}` : "android_other";
+                 return "qualcomm" === iW || "arm" === iW ? `android_${iW}` : "android_other";
```

#### 502. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14145` → after: `L14156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14156) · [Before (L14145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14145)

```diff
-               const OB = (0, DB.F)();
+               const iW = (0, EW.w)();
```

#### 503. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14147` → after: `L14158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14158) · [Before (L14147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14147)

```diff
-             }(), null !== (BB = zB) && void 0 !== BB ? BB : "other"
+             }(), null !== (WW = xW) && void 0 !== WW ? WW : "other"
```

#### 504. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14153` → after: `L14164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14164) · [Before (L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14153)

```diff
-               GB = (0, DB.x)();
+               OW = (0, EW.q)();
```

#### 505. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14155` → after: `L14166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14166) · [Before (L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14155)

```diff
-               const BB = null === GB ? (0, DB.B)() : GB;
+               const WW = null === OW ? (0, EW.t)() : OW;
```

#### 506. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14174` → after: `L14185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14185) · [Before (L14174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14174)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , , , , (WW, iW, OW) => {
```

#### 507. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14179` → after: `L14189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14189) · [Before (L14179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14179)

```diff
-             j: () => kB,
+             i: () => kW,
```

#### 508. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14181-L14182` → after: `L14191-L14193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14191-L14193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14191-L14193) · [Before (L14181-L14182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14181-L14182)

```diff
-             q: () => SB,
-             r: () => nB
+             p: () => MW,
+             r: () => SW,
+             t: () => YW
```

#### 509. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14184-L14189` → after: `L14195-L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14195-L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14195-L14200) · [Before (L14184-L14189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14184-L14189)

```diff
-           var YB = GB(180),
-             DB = GB(92),
-             QB = GB(118),
-             oB = GB(173),
-             jB = GB(31),
-             yB = GB(254);
+           var mW = OW(167),
+             EW = OW(100),
+             NW = OW(131),
+             PW = OW(163),
+             LW = OW(39),
+             cW = OW(243);
```

#### 510. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14301-L14302` → after: `L14312-L14313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14312-L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14312-L14313) · [Before (L14301-L14302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14301-L14302)

```diff
-             if ((0, oB.d)(OB)) return "unknown";
-             if ((0, oB.g)(OB)) return "other";
+             if ((0, PW.f)(iW)) return "unknown";
+             if ((0, PW.j)(iW)) return "other";
```

#### 511. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14305` → after: `L14316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14316) · [Before (L14305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14305)

```diff
-             if (/\b(mali|immortalis)\b/.test(QB)) return null !== (jB = NB(JB, QB)) && void 0 !== jB ? jB : "other_arm";
+             if (/\b(mali|immortalis)\b/.test(NW)) return null !== (LW = UW(wW, NW)) && void 0 !== LW ? LW : "other_arm";
```

#### 512. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14308` → after: `L14319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14319) · [Before (L14308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14308)

```diff
-             if (ZB) return null !== (RB = MB[ZB[1]]) && void 0 !== RB ? RB : "other_qualcomm";
+             if (jW) return null !== (kW = tW[jW[1]]) && void 0 !== kW ? kW : "other_qualcomm";
```

#### 513. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14312` → after: `L14323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14323) · [Before (L14312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14312)

```diff
-             const WB = null !== (GB = NB(pB, QB)) && void 0 !== GB ? GB : (0, DB.normaliseGpuVendor)(BB),
+             const sW = null !== (OW = UW(AW, NW)) && void 0 !== OW ? OW : (0, EW.normaliseGpuVendor)(WW),
```

#### 514. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14316` → after: `L14327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14327) · [Before (L14316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14316)

```diff
-                     return (0, yB.p)(OB).family;
+                     return (0, cW.m)(iW).family;
```

#### 515. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14319` → after: `L14330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14330) · [Before (L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14319)

```diff
-                     const BB = (0, yB.t)(OB);
+                     const WW = (0, cW.n)(iW);
```

#### 516. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14333` → after: `L14344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14344) · [Before (L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14333)

```diff
-             return null !== (YB = null !== AB && void 0 !== AB ? AB : qB[WB]) && void 0 !== YB ? YB : "other"
+             return null !== (mW = null !== MW && void 0 !== MW ? MW : bW[sW]) && void 0 !== mW ? mW : "other"
```

#### 517. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14340` → after: `L14351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14351) · [Before (L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14340)

```diff
-             return null !== (GB = null !== (YB = null === (QB = ZB[oB]) || void 0 === QB ? void 0 : QB[jB]) && void 0 !== YB ? YB : qB[oB]) && void 0 !== GB ? GB : "other"
+             return null !== (OW = null !== (mW = null === (NW = jW[PW]) || void 0 === NW ? void 0 : NW[LW]) && void 0 !== mW ? mW : bW[PW]) && void 0 !== OW ? OW : "other"
```

#### 518. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14351` → after: `L14362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14362) · [Before (L14351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14351)

```diff
-             jB.g.getItem(VB) !== GB && jB.g.setItem(VB, GB)
+             LW.i.getItem(KW) !== OW && LW.i.setItem(KW, OW)
```

#### 519. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14356-L14357` → after: `L14367-L14368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14367-L14368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14367-L14368) · [Before (L14356-L14357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14356-L14357)

```diff
-             const OB = jB.g.getItem(VB);
-             return null !== (BB = YB.n.find((BB => BB === OB && "_unloaded" !== BB))) && void 0 !== BB ? BB : null
+             const iW = LW.i.getItem(KW);
+             return null !== (WW = mW.n.find((WW => WW === iW && "_unloaded" !== WW))) && void 0 !== WW ? WW : null
```

#### 520. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14363` → after: `L14374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14374) · [Before (L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14363)

```diff
-               const BB = (0, QB.o)();
+               const WW = (0, NW.j)();
```

#### 521. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14365` → after: `L14376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14376) · [Before (L14365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14365)

```diff
-               const OB = (0, QB.m)();
+               const iW = (0, NW.f)();
```

#### 522. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14367` → after: `L14378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14378) · [Before (L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14367)

```diff
-               if ("" === OB.architecture || (0, QB.j)()) {
+               if ("" === iW.architecture || (0, NW.d)()) {
```

#### 523. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14384-L14385` → after: `L14395-L14396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14395-L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14395-L14396) · [Before (L14384-L14385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14384-L14385)

```diff
-                     oB = null !== (OB = QB[1]) && void 0 !== OB ? OB : QB[0];
-                   return null !== (GB = null === (YB = /^vulkan [\d.]+ \((.*)\)$/i.exec(oB)) || void 0 === YB ? void 0 : YB[1]) && void 0 !== GB ? GB : oB.replace(/^angle metal renderer:\s*/i, "")
+                     PW = null !== (iW = NW[1]) && void 0 !== iW ? iW : NW[0];
+                   return null !== (OW = null === (mW = /^vulkan [\d.]+ \((.*)\)$/i.exec(PW)) || void 0 === mW ? void 0 : mW[1]) && void 0 !== OW ? OW : PW.replace(/^angle metal renderer:\s*/i, "")
```

#### 524. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14387-L14389` → after: `L14398-L14400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14398-L14400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14398-L14400) · [Before (L14387-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14387-L14389)

```diff
-                 DB = (0, yB.t)(YB),
-                 QB = `${void 0===DB?"":`:${DB}`}${GB?":similar":""}`;
-               return `${YB.replace(/\(0x[0-9a-f]+\)/gi,"").replace(/\((r|tm)\)|[\xae\u2122]/gi,"").toLowerCase().replace(/[^a-z0-9.-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,64-QB.length)}${QB}`
+                 EW = (0, cW.n)(mW),
+                 NW = `${void 0===EW?"":`:${EW}`}${OW?":similar":""}`;
+               return `${mW.replace(/\(0x[0-9a-f]+\)/gi,"").replace(/\((r|tm)\)|[\xae\u2122]/gi,"").toLowerCase().replace(/[^a-z0-9.-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,64-NW.length)}${NW}`
```

#### 525. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14393` → after: `L14404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14404) · [Before (L14393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14393)

```diff
-               return `webgpu:${BB(OB.vendor)}:${BB(OB.architecture)}`.slice(0, 64)
+               return `webgpu:${WW(iW.vendor)}:${WW(iW.architecture)}`.slice(0, 64)
```

#### 526. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14397` → after: `L14408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14408) · [Before (L14397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14397)

```diff
-         }, , , , , , (BB, OB, GB) => {
+         }, , , , , (WW, iW, OW) => {
```

#### 527. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14400-L14402` → after: `L14411-L14413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14411-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14411-L14413) · [Before (L14400-L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14400-L14402)

```diff
-             e: () => VB,
-             h: () => pB,
-             j: () => SB
+             g: () => KW,
+             i: () => AW,
+             m: () => SW
```

#### 528. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14404-L14409` → after: `L14415-L14420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14415-L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14415-L14420) · [Before (L14404-L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14404-L14409)

```diff
-           var YB = GB(307);
-           const DB = "ios_lowmem_msaa_v1";
-           var QB = GB(271),
-             oB = GB(92),
-             jB = GB(286),
-             yB = GB(31);
+           var mW = OW(292),
+             EW = OW(294),
+             NW = OW(259),
+             PW = OW(100),
+             LW = OW(274),
+             cW = OW(39);
```

#### 529. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14411` → after: `L14422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14422) · [Before (L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14411)

```diff
-             MB = new Set(Object.values(YB.c).flatMap((BB => BB.filter((BB => {
+             tW = new Set(Object.values(mW.e).flatMap((WW => WW.filter((WW => {
```

#### 530. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14428` → after: `L14439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14439) · [Before (L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14428)

```diff
-             } = (0, jB.k)();
+             } = (0, LW.j)();
```

#### 531. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14445` → after: `L14456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14456) · [Before (L14445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14445)

```diff
-             return void 0 === ZB && (ZB = pB() && "msaa_off" === QB.b.ios_lowmem_msaa_v1), ZB
+             return void 0 === jW && (jW = AW() && "msaa_off" === NW.d.ios_lowmem_msaa_v1), jW
```

#### 532. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14450-L14451` → after: `L14461-L14462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14461-L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14461-L14462) · [Before (L14450-L14451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14450-L14451)

```diff
-             return !!zB && (null !== (BB = RB()) && void 0 !== BB ? BB : AB() && (null !== (OB = NB) && void 0 !== OB ? OB : function() {
-               const BB = yB.g.getItem(PB);
+             return !!xW && (null !== (WW = kW()) && void 0 !== WW ? WW : MW() && (null !== (iW = UW) && void 0 !== iW ? iW : function() {
+               const WW = cW.i.getItem(ZW);
```

#### 533. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14457-L14458` → after: `L14468-L14469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14468-L14469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14468-L14469) · [Before (L14457-L14458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14457-L14458)

```diff
-             null === RB() && AB() && BB(DB).then((BB => {
-               null !== BB && (NB = BB, BB ? yB.g.setItem(PB, Date.now()) : yB.g.removeItem(PB))
+             null === kW() && MW() && WW(EW.j).then((WW => {
+               null !== WW && (UW = WW, WW ? cW.i.setItem(ZW, Date.now()) : cW.i.removeItem(ZW))
```

#### 534. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14461` → after: `L14472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14472) · [Before (L14461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14461)

```diff
-         }, , , , , , , (BB, OB, GB) => {
+         }, , , , , , (WW, iW, OW) => {
```

#### 535. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14463-L14466` → after: `L14474-L14478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14474-L14478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14474-L14478) · [Before (L14463-L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14463-L14466)

```diff
-             b: () => jB,
-             c: () => zB,
-             f: () => PB,
-             h: () => MB
+             d: () => LW,
+             e: () => lW,
+             i: () => xW,
+             k: () => cW,
+             l: () => ZW
```

#### 536. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14468-L14470` → after: `L14480-L14482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14480-L14482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14480-L14482) · [Before (L14468-L14470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14468-L14470)

```diff
-           var YB = GB(275),
-             DB = GB(31),
-             QB = GB(283);
+           var mW = OW(267),
+             EW = OW(39),
+             NW = OW(269);
```

#### 537. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14474-L14475` → after: `L14486-L14487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14486-L14487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14486-L14487) · [Before (L14474-L14475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14474-L14475)

```diff
-               const GB = QB.z[BB].bucketWeights;
-               return (0, YB.c)(GB, OB, BB)
+               const OW = NW.L[WW].bucketWeights;
+               return (0, mW.b)(OW, iW, WW)
```

#### 538. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14477` → after: `L14489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14489) · [Before (L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14477)

```diff
-               const OB = `ab_p_${BB}`;
+               const iW = `ab_p_${WW}`;
```

#### 539. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14480` → after: `L14492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14492) · [Before (L14480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14480)

```diff
-                 GB = parseFloat(DB.g.getItem(OB))
+                 OW = parseFloat(EW.i.getItem(iW))
```

#### 540. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14482` → after: `L14494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14494) · [Before (L14482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14482)

```diff
-                 console.error(`Failed to parse user percentile for "${BB}", defaulting to a random percentile:`, YB)
+                 console.error(`Failed to parse user percentile for "${WW}", defaulting to a random percentile:`, mW)
```

#### 541. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14484` → after: `L14496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14496) · [Before (L14484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14484)

```diff
-               return (isNaN(GB) || GB < 0 || GB >= 1) && (GB = Math.random()), DB.g.setItem(OB, GB), GB
+               return (isNaN(OW) || OW < 0 || OW >= 1) && (OW = Math.random()), EW.i.setItem(iW, OW), OW
```

#### 542. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14488-L14492` → after: `L14500-L14503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14500-L14503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14500-L14503) · [Before (L14488-L14492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14488-L14492)

```diff
-               const BB = {};
-               for (const OB in QB.z) BB[OB] = oB(OB);
-               return BB
-             }(),
-             yB = new Set;
+             const WW = {};
+             for (const iW in NW.L) WW[iW] = PW(iW);
+             return WW
+           }();
```

#### 543. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14495` → after: `L14506-L14515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14506-L14515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14506-L14515) · [Before (L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14495)

```diff
-             return `ab_exposed_${BB}`
+             const iW = NW.L[WW].bucketWeights;
+             return Object.entries(iW).some((WW => {
+               let [iW, OW] = WW;
+               return "control" !== iW && OW > 0
+             }))
+           }
+           const wW = new Set;
+ 
+           function tW(WW) {
+             return `ab_exposed_${WW}`
```

#### 544. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14499` → after: `L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14519) · [Before (L14499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14499)

```diff
-             yB.add(BB), DB.g.setItem(JB(BB), !0)
+             wW.add(WW), EW.i.setItem(tW(WW), !0)
```

#### 545. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14503` → after: `L14523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14523) · [Before (L14503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14503)

```diff
-             return yB.has(BB) || !0 === DB.g.getItem(JB(BB))
+             return wW.has(WW) || !0 === EW.i.getItem(tW(WW))
```

#### 546. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14510` → after: `L14530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14530) · [Before (L14510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14510)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , , , , , , , (WW, iW, OW) => {
```

#### 547. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14517` → after: `L14537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14537) · [Before (L14517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14517)

```diff
-             throw new Error(`Failed to determine A/B testing bucket: test key=${GB} user percentile=${OB} bucket weights=${JSON.stringify(BB)}`)
+             throw new Error(`Failed to determine A/B testing bucket: test key=${OW} user percentile=${iW} bucket weights=${JSON.stringify(WW)}`)
```

#### 548. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14520` → after: `L14540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14540) · [Before (L14520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14520)

```diff
-             c: () => YB
+             b: () => mW
```

#### 549. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14522` → after: `L14542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14542) · [Before (L14522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14522)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , (WW, iW, OW) => {
```

#### 550. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14527-L14532` → after: `L14547-L14554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14547-L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14547-L14554) · [Before (L14527-L14532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14527-L14532)

```diff
-             C: () => YB,
-             c: () => QB,
-             g: () => lB,
-             j: () => zB,
-             k: () => PB,
-             m: () => MB,
+             D: () => wW,
+             H: () => EW,
+             L: () => jW,
+             M: () => mW,
+             d: () => NW,
+             h: () => AW,
+             l: () => bW,
+             n: () => xW,
```

#### 551. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14534` → after: `L14556-L14557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14556-L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14556-L14557) · [Before (L14534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14534)

```diff
-             s: () => jB,
+             p: () => tW,
+             q: () => lW,
```

#### 552. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14536-L14537` → after: `L14559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14559) · [Before (L14536-L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14536-L14537)

```diff
-             u: () => JB,
-             x: () => DB,
+             w: () => LW,
```

#### 553. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14654` → after: `L14678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14678) · [Before (L14654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14654)

```diff
-                 ccuAnalyticsOtherLabels: ["game_name_with_variation", "kj"],
+                 ccuAnalyticsOtherLabels: ["game_name_with_variation", "Uw"],
```

#### 554. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14725` → after: `L14749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14749) · [Before (L14725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14725)

```diff
-                 ccuAnalyticsOtherLabels: ["Ij", "fj"]
+                 ccuAnalyticsOtherLabels: ["Yw", "jw"]
```

#### 555. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14745` → after: `L14769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14769) · [Before (L14745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14745)

```diff
-                 ccuAnalyticsOtherLabels: ["Ij", "fj"]
+                 ccuAnalyticsOtherLabels: ["Yw", "jw"]
```

#### 556. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14765` → after: `L14789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14789) · [Before (L14765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14765)

```diff
-                 ccuAnalyticsOtherLabels: ["nj"],
+                 ccuAnalyticsOtherLabels: ["Aw"],
```

#### 557. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14797` → after: `L14821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14821) · [Before (L14797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14797)

```diff
-                 ccuAnalyticsOtherLabels: ["nj"],
+                 ccuAnalyticsOtherLabels: ["Aw"],
```

#### 558. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14818` → after: `L14842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14842) · [Before (L14818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14818)

```diff
-                 ccuAnalyticsOtherLabels: ["dj"]
+                 ccuAnalyticsOtherLabels: ["kw"]
```

#### 559. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14838` → after: `L14862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14862) · [Before (L14838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14838)

```diff
-                 ccuAnalyticsOtherLabels: ["uj", "site_used"],
+                 ccuAnalyticsOtherLabels: ["Kw", "site_used"],
```

#### 560. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14859` → after: `L14883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14883) · [Before (L14859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14859)

```diff
-                 ccuAnalyticsOtherLabels: ["uj", "site_used"],
+                 ccuAnalyticsOtherLabels: ["Kw", "site_used"],
```

#### 561. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14950` → after: `L14974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14974) · [Before (L14950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14950)

```diff
-                 ccuAnalyticsOtherLabels: ["Ij", "fj"],
+                 ccuAnalyticsOtherLabels: ["Yw", "jw"],
```

#### 562. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14971` → after: `L14995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R14995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L14995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L14995) · [Before (L14971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14971)

```diff
-                 ccuAnalyticsOtherLabels: ["site_used", "nj"],
+                 ccuAnalyticsOtherLabels: ["site_used", "Aw"],
```

#### 563. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L14993` → after: `L15017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15017) · [Before (L14993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L14993)

```diff
-                 ccuAnalyticsOtherLabels: ["tj", "By"],
+                 ccuAnalyticsOtherLabels: ["Rw", "Gw"],
```

#### 564. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15020` → after: `L15044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15044) · [Before (L15020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15020)

```diff
-                 ccuAnalyticsOtherLabels: ["nj"],
+                 ccuAnalyticsOtherLabels: ["Aw"],
```

#### 565. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15023-L15025` → after: `L15047-L15049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15047-L15049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15047-L15049) · [Before (L15023-L15025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15023-L15025)

```diff
-               ios_iphone_lowmem_v1: {
-                 name: "Lighter memory use on iPhones",
-                 summary: "On iPhone Safari, except models known to have 6 GB, whether using less memory cuts crashes.",
+               save_prompt_where_v1: {
+                 name: "Where guests are asked to save",
+                 summary: "Where a guest who plays is asked to log in to keep their progress, beyond today's homepage pop-up (not CrazyGames).",
```

#### 566. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15027-L15029` → after: `L15051-L15061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15051-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15051-L15061) · [Before (L15027-L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15027-L15029)

```diff
-                   lighter: {
-                     label: "Lighter memory",
-                     description: "When memory runs high, the game frees stored sounds and sheds load, such as render distance."
+                   in_game: {
+                     label: "Card in the game",
+                     description: "A small corner card at a calm moment after 10 minutes of play."
+                   },
+                   exit_sheet: {
+                     label: "Ask on leaving",
+                     description: "A sheet asks them to save when they press Leave Lobby."
+                   },
+                   hud_chip: {
+                     label: "Save button",
+                     description: "A small Save button in the corner from 5 minutes of play."
```

#### 567. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15032-L15033` → after: `L15064-L15065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15064-L15065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15064-L15065) · [Before (L15032-L15033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15032-L15033)

```diff
-                     label: "Usual memory (current)",
-                     description: "Memory is used as usual."
+                     label: "Homepage only (current)",
+                     description: "Only today's homepage pop-up."
```

#### 568. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15037-L15038` → after: `L15069-L15072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15069-L15072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15069-L15072) · [Before (L15037-L15038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15037-L15038)

```diff
-                   lighter: 50,
-                   control: 50
+                   in_game: 1,
+                   exit_sheet: 0,
+                   hud_chip: 0,
+                   control: 1
```

#### 569. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15041-L15043` → after: `L15075-L15077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15075-L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15075-L15077) · [Before (L15041-L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15041-L15043)

```diff
-                 ccuAnalyticsOtherLabels: ["tj"],
-                 extraLabelValues: [PB],
-                 primaryMetric: "visit_play_minutes"
+                 ccuAnalyticsOtherLabels: ["site_used", "Aw"],
+                 ccuFromExposure: !0,
+                 primaryMetric: "return_days_1_to_7"
```

#### 570. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15045-L15047` → after: `L15079-L15081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15079-L15081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15079-L15081) · [Before (L15045-L15047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15045-L15047)

```diff
-               ios_banner_v1: {
-                 name: "Lighter banner ads on iOS",
-                 summary: "On bloxd.io in an iPhone or iPad browser, whether fewer or unloaded banner ads cut crashes.",
+               save_prompt_look_v1: {
+                 name: "Save prompt wording",
+                 summary: "What the save pop-up says to a guest (not CrazyGames).",
```

#### 571. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15049-L15055` → after: `L15083-L15085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15083-L15085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15083-L15085) · [Before (L15049-L15055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15049-L15055)

```diff
-                   clear: {
-                     label: "Unload hidden banners",
-                     description: "A banner ad seen for 3 s, then hidden for 30 s, is unloaded instead of kept in the background."
-                   },
-                   nobanner: {
-                     label: "No in-game banners",
-                     description: "No banner ads on the respawn screen, in-game menu or inventory, and hidden ones are unloaded."
+                   value: {
+                     label: "Save your progress",
+                     description: "Says how long they played and that guest progress lives only in this browser."
```

#### 572. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15057-L15059` → after: `L15087-L15089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15087-L15089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15087-L15089) · [Before (L15057-L15059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15057-L15059)

```diff
-                   control: {
-                     label: "Usual banners (current)",
-                     description: "Banner ads show and stay loaded as usual."
+                   classic: {
+                     label: "Log in (current)",
+                     description: 'Today\'s "Log in to keep your progress".'
```

#### 573. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15063-L15065` → after: `L15093-L15094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15093-L15094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15093-L15094) · [Before (L15063-L15065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15063-L15065)

```diff
-                   clear: 10,
-                   nobanner: 0,
-                   control: 90
+                   value: 1,
+                   classic: 1
```

#### 574. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15068-L15070` → after: `L15097-L15099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15097-L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15097-L15099) · [Before (L15068-L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15068-L15070)

```diff
-                 ccuAnalyticsOtherLabels: ["nj"],
-                 extraLabelValues: [zB],
-                 primaryMetric: "visit_play_minutes"
+                 ccuAnalyticsOtherLabels: ["site_used", "Aw"],
+                 ccuFromExposure: !0,
+                 primaryMetric: "return_days_1_to_7"
```

#### 575. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15072` → after: `L15101-L15113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15101-L15113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15101-L15113) · [Before (L15072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15072)

```diff
-               auto_pickup_v1: {
+               app_prompt_ingame_v1: {
+                 name: "Get the app, in the game",
+                 summary: "Phone and tablet browser players on bloxd.io are also asked to get the app inside a game.",
+                 arms: {
+                   in_game: {
+                     label: "Card in the game",
+                     description: "A small corner card at a calm moment after 10 minutes of play."
+                   },
+                   control: {
+                     label: "Homepage only (current)",
+                     description: "Only today's homepage pop-up."
+                   }
+                 },
```

#### 576. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15074-L15075` → after: `L15115-L15116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15115-L15116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15115-L15116) · [Before (L15074-L15075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15074-L15075)

```diff
-                   on: 10,
-                   off: 90
+                   in_game: 1,
+                   control: 1
```

#### 577. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15078-L15080` → after: `L15119-L15202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15119-L15202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15119-L15202) · [Before (L15078-L15080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15078-L15080)

```diff
-                 ccuAnalyticsOtherLabels: ["game_name_with_variation"],
-                 primaryMetric: "day_play_minutes",
-                 name: "Drops fly to your inventory",
+                 ccuAnalyticsOtherLabels: ["site_used", "Aw"],
+                 ccuFromExposure: !0,
+                 primaryMetric: "return_days_1_to_7"
+               },
+               daily_drop_ingame_v1: {
+                 name: "Daily chest ready, in the game",
+                 summary: "Players are told in the game when their Lucky Skin Block is ready.",
+                 arms: {
+                   toast: {
+                     label: "Card in the game",
+                     description: "A card at 3 minutes of play, once per chest, opening the Store over the game."
+                   },
+                   control: {
+                     label: "Homepage only (current)",
+                     description: "Only the homepage pointer and the Store."
+                   }
+ ... (68 more added lines; see GitHub link above)
```

#### 578. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15111` → after: `L15233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15233) · [Before (L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15111)

```diff
-                 ccuAnalyticsOtherLabels: ["tj", "fj"],
+                 ccuAnalyticsOtherLabels: ["Rw", "jw"],
```

#### 579. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15142` → after: `L15526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15526) · [Before (L15142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15142)

```diff
-         }, , , (BB, OB, GB) => {
+         }, , , , , (WW, iW, OW) => {
```

#### 580. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15146` → after: `L15530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15530) · [Before (L15146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15146)

```diff
-             k: () => oB
+             j: () => PW
```

#### 581. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15148-L15150` → after: `L15532-L15534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15532-L15534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15532-L15534) · [Before (L15148-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15148-L15150)

```diff
-           var YB = GB(307),
-             DB = GB(92),
-             QB = GB(294);
+           var mW = OW(292),
+             EW = OW(100),
+             NW = OW(281);
```

#### 582. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15169` → after: `L15553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15553) · [Before (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15169)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , , , , , , (WW, iW, OW) => {
```

#### 583. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15171` → after: `L15555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15555) · [Before (L15171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15171)

```diff
-             c: () => KB,
+             d: () => HW,
```

#### 584. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15173` → after: `L15557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15557) · [Before (L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15173)

```diff
-             i: () => uB,
+             g: () => nW,
```

#### 585. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15177-L15178` → after: `L15561-L15562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15561-L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15561-L15562) · [Before (L15177-L15178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15177-L15178)

```diff
-           var YB = GB(92),
-             DB = GB(298);
+           var mW = OW(100),
+             EW = OW(284);
```

#### 586. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15195` → after: `L15579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15579) · [Before (L15195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15195)

```diff
-               topLevel: !(0, DB.f)()
+               topLevel: !(0, EW.e)()
```

#### 587. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15244` → after: `L15628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15628) · [Before (L15244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15244)

```diff
-             return "windows" === BB ? OB > 1 - JB : "macos" !== BB || (MB(OB, 1) || MB(OB, 2))
+             return "windows" === WW ? iW > 1 - wW : "macos" !== WW || (tW(iW, 1) || tW(iW, 2))
```

#### 588. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15269` → after: `L15653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15653) · [Before (L15269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15269)

```diff
-             const YB = "windows" === GB && BB.outerWidth < BB.availWidth ? pB : 0,
+             const mW = "windows" === OW && WW.outerWidth < WW.availWidth ? AW : 0,
```

#### 589. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15287` → after: `L15671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15671) · [Before (L15287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15287)

```diff
-             return void 0 === jB || 0 !== yB.length && !yB.includes(jB) ? null !== (DB = null !== (QB = yB.find((BB => 1 === BB || zB(oB / BB)))) && void 0 !== QB ? QB : yB[0]) && void 0 !== DB ? DB : 1 : jB
+             return void 0 === LW || 0 !== cW.length && !cW.includes(LW) ? null !== (EW = null !== (NW = cW.find((WW => 1 === WW || xW(PW / WW)))) && void 0 !== NW ? NW : cW[0]) && void 0 !== EW ? EW : 1 : LW
```

#### 590. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15341` → after: `L15725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15725) · [Before (L15341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15341)

```diff
-             return Math.min(OB.screenWidth, OB.screenHeight) * (null !== (BB = KB()) && void 0 !== BB ? BB : OB.devicePixelRatio / NB(OB, oB(), (0, YB.getOperatingSystem)(), (0, YB.isBlink)()))
+             return Math.min(iW.screenWidth, iW.screenHeight) * (null !== (WW = HW()) && void 0 !== WW ? WW : iW.devicePixelRatio / UW(iW, PW(), (0, mW.getOperatingSystem)(), (0, mW.isBlink)()))
```

#### 591. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15343` → after: `L15727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15727) · [Before (L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15343)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , , (WW, iW, OW) => {
```

#### 592. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15360-L15361` → after: `L15744-L15745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15744-L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15744-L15745) · [Before (L15360-L15361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15360-L15361)

```diff
-             e: () => YB,
-             f: () => DB
+             b: () => mW,
+             e: () => EW
```

#### 593. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15363` → after: `L15747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15747) · [Before (L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15363)

```diff
-         }, , , , , , , , , (BB, OB, GB) => {
+         }, , , , , , , , (WW, iW, OW) => {
```

#### 594. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15365` → after: `L15749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15749) · [Before (L15365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15365)

```diff
-             c: () => YB,
+             e: () => mW,
```

#### 595. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15384` → after: `L15768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15768) · [Before (L15384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15384)

```diff
-             return `${Math.min(BB,OB)}x${Math.max(BB,OB)}@${GB}`
+             return `${Math.min(WW,iW)}x${Math.max(WW,iW)}@${OW}`
```

#### 596. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15386` → after: `L15770-L15851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15770-L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15770-L15851) · [Before (L15386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15386)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , (WW, iW, OW) => {
+           OW.d(iW, {
+             c: () => EW,
+             d: () => PW,
+             f: () => NW,
+             j: () => mW,
+             l: () => LW
+           });
+           const mW = "ios_lowmem_msaa_v1",
+             EW = "connect_retry_v1",
+             NW = "ios_input_draw_timing_v1",
+             PW = "cubewarfare_gun_picks_v1",
+             LW = "tip_after_onboarding_v1"
+         }, , , , , (WW, iW, OW) => {
+           OW.d(iW, {
+             b: () => wW,
+ ... (66 more added lines; see GitHub link above)
```

#### 597. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15391` → after: `L15856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15856) · [Before (L15391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15391)

```diff
-           var YB = GB(31);
+           var mW = OW(39);
```

#### 598. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15395` → after: `L15860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15860) · [Before (L15395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15395)

```diff
-             return null === YB.g.getItem(DB) || null === YB.g.getItem("pixelScale")
+             return null === mW.i.getItem(EW) || null === mW.i.getItem("pixelScale")
```

#### 599. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15397` → after: `L15862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15862) · [Before (L15397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15397)

```diff
-         }, , , , , , , , , (BB, OB, GB) => {
+         }, , , , , , , , (WW, iW, OW) => {
```

#### 600. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15399` → after: `L15864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15864) · [Before (L15399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15399)

```diff
-             B: () => SB,
+             A: () => oW,
```

#### 601. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15401` → after: `L15866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15866) · [Before (L15401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15401)

```diff
-             E: () => iB,
+             G: () => JW,
```

#### 602. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15404` → after: `L15870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15870) · [Before (L15404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15404)

```diff
-             e: () => PB,
+             d: () => ZW,
```

#### 603. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15412` → after: `L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15877) · [Before (L15412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15412)

```diff
-             x: () => LB,
+             w: () => yW,
```

#### 604. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15415-L15421` → after: `L15880-L15886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15880-L15886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15880-L15886) · [Before (L15415-L15421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15415-L15421)

```diff
-           var YB, DB = GB(331),
-             QB = GB(347),
-             oB = GB(353),
-             jB = GB(92),
-             yB = GB(328),
-             JB = GB(31),
-             MB = GB(113);
+           var mW, EW = OW(327),
+             NW = OW(339),
+             PW = OW(344),
+             LW = OW(100),
+             cW = OW(324),
+             wW = OW(39),
+             tW = OW(119);
```

#### 605. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15427` → after: `L15892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15892) · [Before (L15427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15427)

```diff
-             return `${(0,jB.getBrowserName)()} ${String((0,jB.getBrowserVersion)()).split(".")[0]}`
+             return `${(0,LW.getBrowserName)()} ${String((0,LW.getBrowserVersion)()).split(".")[0]}`
```

#### 606. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15431` → after: `L15896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15896) · [Before (L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15431)

```diff
-             let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JB.g.getItem(DB.pc);
+             let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wW.i.getItem(EW.rc);
```

#### 607. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15438` → after: `L15903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15903) · [Before (L15438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15438)

```diff
-                 }, JB.g.setItem(DB.pc, OB)), Date.now() - OB.at < QB.g) return OB
+                 }, wW.i.setItem(EW.rc, iW)), Date.now() - iW.at < NW.d) return iW
```

#### 608. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15440` → after: `L15905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15905) · [Before (L15440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15440)

```diff
-             return JB.g.removeItem(DB.pc), NB(["hidden", "visible"]), null
+             return wW.i.removeItem(EW.rc), UW(["hidden", "visible"]), null
```

#### 609. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15445-L15446` → after: `L15910-L15911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15910-L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15910-L15911) · [Before (L15445-L15446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15445-L15446)

```diff
-             const DB = null !== (GB = JB.g.getItem(zB)) && void 0 !== GB ? GB : {};
-             JB.g.setItem(zB, {
+             const EW = null !== (OW = wW.i.getItem(xW)) && void 0 !== OW ? OW : {};
+             wW.i.setItem(xW, {
```

#### 610. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15448` → after: `L15913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15913) · [Before (L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15448)

```diff
-               [BB]: (null !== (YB = DB[BB]) && void 0 !== YB ? YB : 0) + OB
+               [WW]: (null !== (mW = EW[WW]) && void 0 !== mW ? mW : 0) + iW
```

#### 611. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15454` → after: `L15919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15919) · [Before (L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15454)

```diff
-             const GB = null !== (OB = JB.g.getItem(zB)) && void 0 !== OB ? OB : {},
+             const OW = null !== (iW = wW.i.getItem(xW)) && void 0 !== iW ? iW : {},
```

#### 612. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15457` → after: `L15922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15922) · [Before (L15457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15457)

```diff
-             return Object.keys(YB).length > 0 && (0 === Object.keys(GB).length ? JB.g.removeItem(zB) : JB.g.setItem(zB, GB)), YB
+             return Object.keys(mW).length > 0 && (0 === Object.keys(OW).length ? wW.i.removeItem(xW) : wW.i.setItem(xW, OW)), mW
```

#### 613. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15462` → after: `L15927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15927) · [Before (L15462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15462)

```diff
-             return null !== (OB = BB.holdStep) && void 0 !== OB ? OB : 1
+             return null !== (iW = WW.holdStep) && void 0 !== iW ? iW : 1
```

#### 614. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15466` → after: `L15931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15931) · [Before (L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15466)

```diff
-             return "ios" === (0, jB.getOperatingSystem)() ? OB - BB.at < QB.g : OB - BB.at < QB.i[RB(BB) - 1]
+             return "ios" === (0, LW.getOperatingSystem)() ? iW - WW.at < NW.d : iW - WW.at < NW.e[kW(WW) - 1]
```

#### 615. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15468` → after: `L15933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15933) · [Before (L15468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15468)

```diff
-           const AB = JB.g.getItem(DB.pc),
+           const MW = wW.i.getItem(EW.rc),
```

#### 616. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15470` → after: `L15935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15935) · [Before (L15470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15470)

```diff
-             SB = null === VB ? "none" : null !== (YB = VB.firstPage) && void 0 !== YB ? YB : "visible";
+             SW = null === KW ? "none" : null !== (mW = KW.firstPage) && void 0 !== mW ? mW : "visible";
```

#### 617. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15475` → after: `L15940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15940) · [Before (L15475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15475)

```diff
-             const GB = (0, yB.c)(),
+             const OW = (0, cW.d)(),
```

#### 618. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15483` → after: `L15948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15948) · [Before (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15483)

```diff
-             const YB = JB.g.setItem(DB.pc, function(BB, OB, GB) {
+             const mW = wW.i.setItem(EW.rc, function(WW, iW, OW) {
```

#### 619. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15487` → after: `L15952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15952) · [Before (L15487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15487)

```diff
-               const JB = null !== BB && GB - BB.at < oB.g ? (null !== (YB = BB.losses) && void 0 !== YB ? YB : 1) + 1 : 1,
+               const wW = null !== WW && OW - WW.at < PW.k ? (null !== (mW = WW.losses) && void 0 !== mW ? mW : 1) + 1 : 1,
```

#### 620. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15490` → after: `L15955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15955) · [Before (L15490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15490)

```diff
-                 zB = jB ? QB.i.length : PB ? MB : Math.min(MB + 1, QB.i.length);
+                 xW = LW ? NW.e.length : ZW ? tW : Math.min(tW + 1, NW.e.length);
```

#### 621. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15494` → after: `L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15959) · [Before (L15494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15494)

```diff
-                 firstPage: null === BB ? OB : null !== (DB = BB.firstPage) && void 0 !== DB ? DB : "visible",
+                 firstPage: null === WW ? iW : null !== (EW = WW.firstPage) && void 0 !== EW ? EW : "visible",
```

#### 622. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15531` → after: `L15996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R15996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L15996) · [Before (L15531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15531)

```diff
-             return `${BB.vendor}/${BB.architecture}`
+             return `${WW.vendor}/${WW.architecture}`
```

#### 623. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15535` → after: `L16000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16000) · [Before (L15535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15535)

```diff
-             const BB = JB.g.getItem(MB.N);
+             const WW = wW.i.getItem(tW.E);
```

#### 624. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15540` → after: `L16005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16005) · [Before (L15540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15540)

```diff
-             const DB = kB.reloaded(OB, GB) && "visible" === nB((0, yB.f)());
+             const EW = JW.reloaded(iW, OW) && "visible" === YW((0, cW.g)());
```

#### 625. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15544` → after: `L16009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16009) · [Before (L15544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15544)

```diff
-               OB.includes(GB) || JB.g.setItem(MB.N, {
+               iW.includes(OW) || wW.i.setItem(tW.E, {
```

#### 626. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15561` → after: `L16026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16026) · [Before (L15561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15561)

```diff
-             return null === BB ? null : WB(BB, Date.now()) ? BB : null
+             return null === WW ? null : sW(WW, Date.now()) ? WW : null
```

#### 627. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15567` → after: `L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16032) · [Before (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15567)

```diff
-             return null !== OB && ("ios" !== (0, jB.getOperatingSystem)() || (null !== (BB = OB.losses) && void 0 !== BB ? BB : 1) > 1)
+             return null !== iW && ("ios" !== (0, LW.getOperatingSystem)() || (null !== (WW = iW.losses) && void 0 !== WW ? WW : 1) > 1)
```

#### 628. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15574` → after: `L16039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16039) · [Before (L15574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15574)

```diff
-               return [OB, null !== (GB = BB[OB]) && void 0 !== GB ? GB : null]
+               return [iW, null !== (OW = WW[iW]) && void 0 !== OW ? OW : null]
```

#### 629. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15585-L15586` → after: `L16050-L16051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16050-L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16050-L16051) · [Before (L15585-L15586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15585-L15586)

```diff
-               now: JB.g.getItem(DB.pc),
-               unreported: JB.g.getItem(zB)
+               now: wW.i.getItem(EW.rc),
+               unreported: wW.i.getItem(xW)
```

#### 630. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15589` → after: `L16054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16054) · [Before (L15589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15589)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , , , , , , , , (WW, iW, OW) => {
```

#### 631. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15593` → after: `L16057-L16058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16057-L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16057-L16058) · [Before (L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15593)

```diff
-             f: () => JB,
+             d: () => LW,
+             g: () => wW,
```

#### 632. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15626` → after: `L16091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16091) · [Before (L15626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15626)

```diff
-             I: () => oB,
+             H: () => sW,
```

#### 633. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15628-L15629` → after: `L16093-L16094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16093-L16094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16093-L16094) · [Before (L15628-L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15628-L15629)

```diff
-             K: () => AB,
-             Mb: () => CB,
+             L: () => KW,
+             N: () => zW,
```

#### 634. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15631-L15632` → after: `L16096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16096) · [Before (L15631-L15632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15631-L15632)

```diff
-             O: () => WB,
-             P: () => VB,
+             Q: () => JW,
```

#### 635. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15634-L15640` → after: `L16098-L16103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16098-L16103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16098-L16103) · [Before (L15634-L15640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15634-L15640)

```diff
-             R: () => sB,
-             U: () => kB,
-             Ub: () => DB,
-             Xb: () => lB,
-             Y: () => PB,
-             _: () => SB,
-             ab: () => zB,
+             Sb: () => bW,
+             T: () => ZW,
+             Vb: () => AW,
+             X: () => SW,
+             Yb: () => EW,
+             _b: () => lW,
```

#### 636. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15644-L15646` → after: `L16108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16108) · [Before (L15644-L15646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15644-L15646)

```diff
-             eb: () => TB,
-             ec: () => fB,
-             f: () => aB,
+             d: () => BW,
```

#### 637. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15650-L15651` → after: `L16114-L16115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16114-L16115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16114-L16115) · [Before (L15650-L15651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15650-L15651)

```diff
-             hb: () => UB,
-             hc: () => LB,
+             ic: () => mi,
+             j: () => CW,
```

#### 638. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15653-L15654` → after: `L16117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16117) · [Before (L15653-L15654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15653-L15654)

```diff
-             kb: () => NB,
-             l: () => EB,
+             kc: () => vW,
```

#### 639. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15658` → after: `L16121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16121) · [Before (L15658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15658)

```diff
-             nc: () => vB,
+             ob: () => Wi,
```

#### 640. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15661` → after: `L16124-L16126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16124-L16126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16124-L16126) · [Before (L15661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15661)

```diff
-             qb: () => ZB,
+             rb: () => jW,
+             rc: () => QW,
+             s: () => VW,
```

#### 641. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15663-L15664` → after: `L16128-L16129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16128-L16129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16128-L16129) · [Before (L15663-L15664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15663-L15664)

```diff
-             tb: () => gB,
-             wb: () => FB,
+             vb: () => gW,
+             w: () => Ni,
```

#### 642. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15666-L15667` → after: `L16131-L16132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16131-L16132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16131-L16132) · [Before (L15666-L15667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15666-L15667)

```diff
-             z: () => hB,
-             zb: () => IB
+             yb: () => dW,
+             z: () => NW
```

#### 643. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15669` → after: `L16134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16134) · [Before (L15669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15669)

```diff
-           var YB = GB(339);
+           var mW = OW(330);
```

#### 644. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15762` → after: `L16227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16227) · [Before (L15762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15762)

```diff
-             return OB.endsWith("games") ? OB : `${OB} Games`
+             return iW.endsWith("games") ? iW : `${iW} Games`
```

#### 645. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15804` → after: `L16269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16269) · [Before (L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15804)

```diff
-             return null !== (OB = nB[BB]) && void 0 !== OB ? OB : BB
+             return null !== (iW = YW[WW]) && void 0 !== iW ? iW : WW
```

#### 646. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15838` → after: `L16303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16303) · [Before (L15838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15838)

```diff
-             return (0, YB.g)(null !== (OB = null === BB || void 0 === BB ? void 0 : BB.color) && void 0 !== OB ? OB : null === BB || void 0 === BB ? void 0 : BB.colour)
+             return (0, mW.e)(null !== (iW = null === WW || void 0 === WW ? void 0 : WW.color) && void 0 !== iW ? iW : null === WW || void 0 === WW ? void 0 : WW.colour)
```

#### 647. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15862` → after: `L16327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16327) · [Before (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15862)

```diff
-               return [YB, `${YB}s`, `${YB}es`].some((BB => QB.endsWith(BB))) ? "" : GB + YB
+               return [mW, `${mW}s`, `${mW}es`].some((WW => NW.endsWith(WW))) ? "" : OW + mW
```

#### 648. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15979` → after: `L16444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16444) · [Before (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15979)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , , (WW, iW, OW) => {
```

#### 649. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15981-L15982` → after: `L16446-L16447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16446-L16447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16446-L16447) · [Before (L15981-L15982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15981-L15982)

```diff
-             c: () => QB,
-             g: () => oB
+             d: () => NW,
+             e: () => PW
```

#### 650. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15992` → after: `L16457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16457) · [Before (L15992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15992)

```diff
-             return QB(BB) ? BB : void 0
+             return NW(WW) ? WW : void 0
```

#### 651. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15994` → after: `L16459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16459) · [Before (L15994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L15994)

```diff
-         }, , , , , , , , (BB, OB, GB) => {
+         }, , , , , , , , , (WW, iW, OW) => {
```

#### 652. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16001` → after: `L16466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16466) · [Before (L16001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16001)

```diff
-             n: () => jB
+             l: () => LW
```

#### 653. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16003-L16004` → after: `L16468-L16469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16468-L16469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16468-L16469) · [Before (L16003-L16004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16003-L16004)

```diff
-           var YB = GB(182),
-             DB = GB(353);
+           var mW = OW(169),
+             EW = OW(344);
```

#### 654. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16012-L16014` → after: `L16477-L16479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16477-L16479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16477-L16479) · [Before (L16012-L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16012-L16014)

```diff
-           const yB = 28 * DB.g,
-             JB = [DB.g, 7 * DB.g, yB];
-           YB.t.filter((BB => "not_ios" !== BB && "_unloaded" !== BB));
+           const cW = 28 * EW.k,
+             wW = [EW.k, 7 * EW.k, cW];
+           mW.r.filter((WW => "not_ios" !== WW && "_unloaded" !== WW));
```

#### 655. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16021` → after: `L16486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16486) · [Before (L16021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16021)

```diff
-             return `${BB} ${OB}`
+             return `${WW} ${iW}`
```

#### 656. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16023` → after: `L16488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16488) · [Before (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16023)

```diff
-         }, , , , , , (BB, OB, GB) => {
+         }, , , , , (WW, iW, OW) => {
```

#### 657. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16029-L16033` → after: `L16494-L16499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16494-L16499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16494-L16499) · [Before (L16029-L16033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16029-L16033)

```diff
-             Ac: () => UO,
-             Ae: () => fB,
-             B: () => hB,
-             Dd: () => DO,
-             De: () => xB,
+             Bd: () => xi,
+             C: () => sW,
+             Cb: () => vi,
+             Cc: () => fW,
+             Ce: () => eW,
+             Dc: () => vW,
```

#### 658. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16035-L16036` → after: `L16501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16501) · [Before (L16035-L16036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16035-L16036)

```diff
-             Ec: () => MO,
-             F: () => TB,
+             Fb: () => ui,
```

#### 659. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16039-L16046` → after: `L16504-L16508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16504-L16508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16504-L16508) · [Before (L16039-L16046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16039-L16046)

```diff
-             Fe: () => ZO,
-             H: () => OO,
-             Hc: () => kO,
-             He: () => JO,
-             Ib: () => MG,
-             J: () => CO,
-             Jd: () => fO,
-             Kb: () => KO,
+             G: () => XW,
+             Gc: () => rW,
+             Gd: () => qi,
+             Hb: () => MO,
+             K: () => RW,
```

#### 660. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16050-L16052` → after: `L16513-L16514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16513-L16514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16513-L16514) · [Before (L16050-L16052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16050-L16052)

```diff
-             Le: () => NG,
-             N: () => HO,
-             Nd: () => tB,
+             M: () => ri,
+             Md: () => gW,
```

#### 661. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16058-L16063` → after: `L16518-L16520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16518-L16520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16518-L16520) · [Before (L16058-L16063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16058-L16063)

```diff
-             Qb: () => uO,
-             Rd: () => aB,
-             S: () => qB,
-             Sd: () => eB,
-             Se: () => IB,
-             Tc: () => SO,
+             Qd: () => Li,
+             Rc: () => DW,
+             Tb: () => wO,
```

#### 662. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16066` → after: `L16523-L16524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16523-L16524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16523-L16524) · [Before (L16066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16066)

```diff
-             Ub: () => ZG,
+             Uc: () => ki,
+             V: () => bW,
```

#### 663. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16068` → after: `L16526-L16528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16526-L16528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16526-L16528) · [Before (L16068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16068)

```diff
-             Ve: () => bB,
+             Vd: () => TW,
+             Wb: () => SW,
+             X: () => Qi,
```

#### 664. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16074` → after: `L16532-L16534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16532-L16534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16532-L16534) · [Before (L16074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16074)

```diff
-             Ze: () => WO,
+             Z: () => OO,
+             Zb: () => di,
+             Zd: () => FW,
```

#### 665. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16076-L16080` → after: `L16536-L16538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16536-L16538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16536-L16538) · [Before (L16076-L16080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16076-L16080)

```diff
-             ac: () => oG,
-             b: () => XO,
-             bc: () => SB,
-             bf: () => nB,
-             cb: () => WG,
+             _b: () => ei,
+             ae: () => ji,
+             cc: () => Hi,
```

#### 666. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16085-L16086` → after: `L16546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16546) · [Before (L16085-L16086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16085-L16086)

```diff
-             ef: () => AB,
-             f: () => yG,
+             fc: () => Ri,
```

#### 667. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16088-L16092` → after: `L16548-L16555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16548-L16555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16548-L16555) · [Before (L16088-L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16088-L16092)

```diff
-             g: () => DG,
-             ge: () => zO,
-             ib: () => pB,
-             ic: () => IO,
-             if: () => UB,
+             gb: () => NO,
+             h: () => ZO,
+             hb: () => EO,
+             hc: () => ci,
+             hd: () => jW,
+             he: () => KO,
+             ie: () => UW,
+             jc: () => yi,
```

#### 668. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16099-L16100` → after: `L16564-L16567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16564-L16567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16564-L16567) · [Before (L16099-L16100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16099-L16100)

```diff
-             mc: () => dO,
-             nb: () => GG,
+             le: () => si,
+             m: () => PO,
+             mb: () => zW,
+             nc: () => Zi,
```

#### 669. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16108-L16116` → after: `L16577-L16581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16577-L16581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16577-L16581) · [Before (L16108-L16116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16108-L16116)

```diff
-             rb: () => OG,
-             rc: () => eO,
-             rd: () => rB,
-             rf: () => iB,
-             tc: () => aO,
-             te: () => gB,
-             u: () => mB,
-             ub: () => BG,
-             ud: () => RO,
+             s: () => uW,
+             sb: () => Oi,
+             sc: () => Ii,
+             sd: () => dW,
+             uc: () => nW,
```

#### 670. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16124-L16125` → after: `L16588-L16591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16588-L16591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16588-L16591) · [Before (L16124-L16125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16124-L16125)

```diff
-             zb: () => qG,
-             zd: () => lG
+             yb: () => lO,
+             yc: () => hW,
+             yd: () => mi,
+             ye: () => KW
```

#### 671. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16127-L16128` → after: `L16593-L16594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16593-L16594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16593-L16594) · [Before (L16127-L16128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16127-L16128)

```diff
-           var YB = GB(358),
-             DB = GB(363),
+           var mW = OW(349),
+             EW = OW(352),
```

#### 672. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16130-L16136` → after: `L16596-L16602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16596-L16602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16596-L16602) · [Before (L16130-L16136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16130-L16136)

```diff
-             oB = GB(615),
-             jB = GB(624),
-             yB = GB(641),
-             JB = GB(627),
-             MB = GB(162),
-             PB = GB(633),
-             zB = GB(331);
+             PW = OW(614),
+             LW = OW(622),
+             cW = OW(643),
+             wW = OW(625),
+             tW = OW(154),
+             ZW = OW(632),
+             xW = OW(327);
```

#### 673. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16162` → after: `L16628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16628) · [Before (L16162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16162)

```diff
-             return GB > 0 ? `${GB}:${ZB(YB)}:${ZB(DB)}` : `${YB}:${ZB(DB)}`
+             return OW > 0 ? `${OW}:${jW(mW)}:${jW(EW)}` : `${mW}:${jW(EW)}`
```

#### 674. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16207` → after: `L16673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16673) · [Before (L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16207)

```diff
-             return null !== (GB = VB(OB)) && void 0 !== GB ? GB : `item:${AB(BB)}`
+             return null !== (OW = KW(iW)) && void 0 !== OW ? OW : `item:${MW(WW)}`
```

#### 675. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16234` → after: `L16700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16700) · [Before (L16234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16234)

```diff
-             KB = ["Torch", ...dB.map((BB => `${BB} Torch`))];
+             HW = ["Torch", ...hW.map((WW => `${WW} Torch`))];
```

#### 676. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16238` → after: `L16704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16704) · [Before (L16238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16238)

```diff
-             return "rock" === BB.heldToolType ? BB.harvestLevel > (null !== (OB = BB.heldToolLevel) && void 0 !== OB ? OB : 0) : "rock" === BB.blockHarvestType && 0 !== BB.blockHarvestLevel
+             return "rock" === WW.heldToolType ? WW.harvestLevel > (null !== (iW = WW.heldToolLevel) && void 0 !== iW ? iW : 0) : "rock" === WW.blockHarvestType && 0 !== WW.blockHarvestLevel
```

#### 677. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16241` → after: `L16707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16707) · [Before (L16241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16241)

```diff
-             IB = ["Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", ...YB.p.map((BB => `${BB} Spade`))],
+             oW = ["Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", ...mW.o.map((WW => `${WW} Spade`))],
```

#### 678. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16274` → after: `L16740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16740) · [Before (L16274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16274)

```diff
-             JO = new jB.c({
+             wi = new LW.b({
```

#### 679. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16287` → after: `L16753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16753) · [Before (L16287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16287)

```diff
-             return BB === OB ? 0 !== BB || 0 !== OB || 1 / BB === 1 / OB : BB !== BB && OB !== OB
+             return WW === iW ? 0 !== WW || 0 !== iW || 1 / WW === 1 / iW : WW !== WW && iW !== iW
```

#### 680. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16314` → after: `L16780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16780) · [Before (L16314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16314)

```diff
-             return Number.isInteger(OB) && OB >= 0 && OB < 1e16 ? OB : null
+             return Number.isInteger(iW) && iW >= 0 && iW < 1e16 ? iW : null
```

#### 681. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16338` → after: `L16804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16804) · [Before (L16338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16338)

```diff
-               content: null !== BB && void 0 !== BB ? BB : "",
+               content: null !== WW && void 0 !== WW ? WW : "",
```

#### 682. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16367` → after: `L16833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16833) · [Before (L16367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16367)

```diff
-             return `${BB} Spawn Orb`
+             return `${WW} Spawn Orb`
```

#### 683. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16371` → after: `L16837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16837) · [Before (L16371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16371)

```diff
-             return `${BB} Spawner Block`
+             return `${WW} Spawner Block`
```

#### 684. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16375` → after: `L16841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16841) · [Before (L16375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16375)

```diff
-             return `Caught Mob ${BB.replaceAll(" ","_")} ${RB(OB)}`
+             return `Caught Mob ${WW.replaceAll(" ","_")} ${kW(iW)}`
```

#### 685. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16389` → after: `L16855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16855) · [Before (L16389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16389)

```diff
-             return LO[BB] ? LO[BB] : `${BB} Painting`
+             return gi[WW] ? gi[WW] : `${WW} Painting`
```

#### 686. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16411` → after: `L16877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16877) · [Before (L16411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16411)

```diff
-             return GB % 24 === 0 ? YB : new Intl.ListFormat(BB).format([YB, cO(BB, "hour", GB % 24)])
+             return OW % 24 === 0 ? mW : new Intl.ListFormat(WW).format([mW, Bi(WW, "hour", OW % 24)])
```

#### 687. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16423` → after: `L16889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16889) · [Before (L16423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16423)

```diff
-             if (!JB.n.includes(OB)) return !1;
+             if (!wW.t.includes(iW)) return !1;
```

#### 688. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16427` → after: `L16893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16893) · [Before (L16427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16427)

```diff
-             } = JB.h[OB];
+             } = wW.l[iW];
```

#### 689. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16447` → after: `L16913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16913) · [Before (L16447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16447)

```diff
-             return OB in JB.v && (OB === JB.b || (0, oB.e)(BB))
+             return iW in wW.C && (iW === wW.d || (0, PW.e)(WW))
```

#### 690. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16461` → after: `L16927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16927) · [Before (L16461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16461)

```diff
-               return BB > 0 && BB < OB ? BB : (BB % OB + OB) % OB
+               return WW > 0 && WW < iW ? WW : (WW % iW + iW) % iW
```

#### 691. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16473` → after: `L16939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L16939) · [Before (L16473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16473)

```diff
-               YB.min = BB, YB.max = "excludeMax" === GB ? OB : OB + 1;
+               mW.min = WW, mW.max = "excludeMax" === OW ? iW : iW + 1;
```

#### 692. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16542` → after: `L17008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17008) · [Before (L16542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16542)

```diff
-           MB.j.CHAT_MSG, MB.j.CHAT_MSG, MB.j.PLAYER_JOIN, MB.j.PLAYER_REPORT, MB.j.PLAYER_NAME_CHANGE, MB.j.ADMIN_ACTIVITY, MB.j.MODERATION, MB.j.LOBBY_INFO, MB.j.TRIBE_NAME, MB.j.TRIBE_INFO, MB.j.FACTION_NAME, MB.j.FACTION_INFO, MB.j.NAME_TAG, MB.j.BOOK, MB.j.BOARD, MB.j.MULTI_L … [truncated]
+           tW.h.CHAT_MSG, tW.h.CHAT_MSG, tW.h.PLAYER_JOIN, tW.h.PLAYER_REPORT, tW.h.PLAYER_NAME_CHANGE, tW.h.ADMIN_ACTIVITY, tW.h.MODERATION, tW.h.LOBBY_INFO, tW.h.TRIBE_NAME, tW.h.TRIBE_INFO, tW.h.FACTION_NAME, tW.h.FACTION_INFO, tW.h.NAME_TAG, tW.h.BOOK, tW.h.BOARD, tW.h.MULTI_L … [truncated]
```

#### 693. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16627` → after: `L17097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17097) · [Before (L16627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16627)

```diff
-             return null !== (OB = xO[BB]) && void 0 !== OB ? OB : BB
+             return null !== (iW = iO[WW]) && void 0 !== iW ? iW : WW
```

#### 694. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16653` → after: `L17123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17123) · [Before (L16653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16653)

```diff
-             return void 0 === OB ? BB : `${BB}_${OB}`
+             return void 0 === iW ? WW : `${WW}_${iW}`
```

#### 695. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16668` → after: `L17138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17138) · [Before (L16668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16668)

```diff
-             return null !== (GB = null === BB || void 0 === BB || null === (YB = BB.attributes) || void 0 === YB || null === (DB = YB.customAttributes) || void 0 === DB || null === (QB = DB.enchantments) || void 0 === QB ? void 0 : QB[OB]) && void 0 !== GB ? GB : null
+             return null !== (OW = null === WW || void 0 === WW || null === (mW = WW.attributes) || void 0 === mW || null === (EW = mW.customAttributes) || void 0 === EW || null === (NW = EW.enchantments) || void 0 === NW ? void 0 : NW[iW]) && void 0 !== OW ? OW : null
```

#### 696. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16675` → after: `L17145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17145) · [Before (L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16675)

```diff
-               if (PB.c.includes(BB)) return BB
+               if (ZW.d.includes(WW)) return WW
```

#### 697. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16681` → after: `L17151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17151) · [Before (L16681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16681)

```diff
-             return yB.x - PB.c.length + PB.c.indexOf(BB)
+             return cW.r - ZW.d.length + ZW.d.indexOf(WW)
```

#### 698. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16690-L16691` → after: `L17160-L17161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17160-L17161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17160-L17161) · [Before (L16690-L16691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16690-L16691)

```diff
-             const GB = null !== BB && void 0 !== BB ? BB : 450;
-             return !OB || OB <= 0 ? GB : GB / 2 ** (OB / 5)
+             const OW = null !== WW && void 0 !== WW ? WW : 450;
+             return !iW || iW <= 0 ? OW : OW / 2 ** (iW / 5)
```

#### 699. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16746` → after: `L17216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17216) · [Before (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16746)

```diff
-             }] : (GB = BB, Array.isArray(GB) ? BB.flatMap((BB => qG(BB, OB))) : "entityName" in BB || "translationKey" in BB ? [{
+             }] : (OW = WW, Array.isArray(OW) ? WW.flatMap((WW => kO(WW, iW))) : "translationKey" in WW ? [{
```

#### 700. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16749` → after: `L17219-L17222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17219-L17222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17219-L17222) · [Before (L16749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16749)

```diff
-             }] : (0, zB.zb)(BB) ? [BB] : [{
+             }] : "entityName" in WW ? [{
+               str: WW,
+               style: sO(iW, WW.style)
+             }] : (0, xW.Cb)(WW) ? [WW] : [{
```

#### 701. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16751-L16754` → after: `L17224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17224) · [Before (L16751-L16754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16751-L16754)

```diff
-               style: {
-                 ...OB,
-                 ...BB.style
-               }
+               style: sO(iW, WW.style)
```

#### 702. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16793-L16797` → after: `L17284-L17288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17284-L17288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17284-L17288) · [Before (L16793-L16797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16793-L16797)

```diff
-             h: () => oB,
-             k: () => QB,
-             l: () => DB,
-             p: () => YB,
-             q: () => jB
+             g: () => PW,
+             j: () => NW,
+             m: () => EW,
+             o: () => mW,
+             p: () => LW
```

#### 703. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16801` → after: `L17292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17292) · [Before (L16801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16801)

```diff
-             QB = YB.map((BB => `${BB} Boomerang`)),
+             NW = mW.map((WW => `${WW} Boomerang`)),
```

#### 704. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16805-L16806` → after: `L17296-L17297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17296-L17297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17296-L17297) · [Before (L16805-L16806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16805-L16806)

```diff
-         }, , , , , (BB, OB, GB) => {
-           var YB = GB(368);
+         }, , , (WW, iW, OW) => {
+           var mW = OW(360);
```

#### 705. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16808` → after: `L17299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17299) · [Before (L16808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16808)

```diff
-             EPSILON: GB(375),
+             EPSILON: OW(369),
```

#### 706. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16811-L16842` → after: `L17302-L17333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17302-L17333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17302-L17333) · [Before (L16811-L16842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16811-L16842)

```diff
-             clone: GB(383),
-             angle: GB(389),
-             pp: GB(395),
-             copy: GB(403),
-             set: GB(410),
-             equals: GB(412),
-             exactEquals: GB(417),
-             add: GB(421),
-             subtract: GB(425),
-             sub: GB(427),
-             multiply: GB(432),
-             mul: GB(438),
-             divide: GB(444),
-             div: GB(446),
-             min: GB(452),
-             max: GB(461),
- ... (16 more removed lines; see GitHub link above)
+             clone: OW(378),
+             angle: OW(382),
+             fi: OW(387),
+             copy: OW(406),
+             set: OW(411),
+             equals: OW(416),
+             exactEquals: OW(419),
+             add: OW(428),
+             subtract: OW(431),
+             sub: OW(433),
+             multiply: OW(439),
+             mul: OW(447),
+             divide: OW(449),
+             div: OW(454),
+             min: OW(458),
+             max: OW(465),
+ ... (16 more added lines; see GitHub link above)
```

#### 707. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16844-L16845` → after: `L17335-L17336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17335-L17336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17335-L17336) · [Before (L16844-L16845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16844-L16845)

```diff
-             cross: GB(558),
-             lerp: GB(563),
+             cross: OW(557),
+             lerp: OW(565),
```

#### 708. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16848-L16853` → after: `L17339-L17344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17339-L17344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17339-L17344) · [Before (L16848-L16853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16848-L16853)

```diff
-             transformMat3: GB(583),
-             transformQuat: GB(587),
-             gq: GB(595),
-             sq: GB(603),
-             YZ: GB(607),
-             forEach: GB(611)
+             transformMat3: OW(586),
+             transformQuat: OW(592),
+             cj: OW(595),
+             wj: OW(602),
+             tj: OW(605),
+             forEach: OW(610)
```

#### 709. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16855` → after: `L17346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17346) · [Before (L16855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16855)

```diff
-         }, , , , , BB => {
+         }, , , , , , , , WW => {
```

#### 710. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16860` → after: `L17351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17351) · [Before (L16860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16860)

```diff
-         }, , , , , , , BB => {
+         }, , , , , , , , , WW => {
```

#### 711. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16862` → after: `L17353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17353) · [Before (L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16862)

```diff
-         }, , , , , , , , BB => {
+         }, , , , , , , , , WW => {
```

#### 712. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16867` → after: `L17358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17358) · [Before (L16867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16867)

```diff
-         }, , , , , , (BB, OB, GB) => {
+         }, , , , (WW, iW, OW) => {
```

#### 713. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16875-L16876` → after: `L17366-L17367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17366-L17367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17366-L17367) · [Before (L16875-L16876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16875-L16876)

```diff
-           var YB = GB(395),
-             DB = GB(397),
+           var mW = OW(387),
+             EW = OW(396),
```

#### 714. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16878` → after: `L17369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17369) · [Before (L16878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16878)

```diff
-         }, , , , , , BB => {
+         }, , , , , WW => {
```

#### 715. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16883` → after: `L17374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17374) · [Before (L16883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16883)

```diff
-         }, , BB => {
+         }, , , , , , , , , WW => {
```

#### 716. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16892` → after: `L17383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17383) · [Before (L16892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16892)

```diff
-         }, , , BB => {
+         }, , , , WW => {
```

#### 717. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16896` → after: `L17387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17387) · [Before (L16896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16896)

```diff
-         }, , , BB => {
+         }, , , , , , WW => {
```

#### 718. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16900` → after: `L17391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17391) · [Before (L16900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16900)

```diff
-         }, , , , , , , BB => {
+         }, , , , , WW => {
```

#### 719. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16904` → after: `L17395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17395) · [Before (L16904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16904)

```diff
-         }, , (BB, OB, GB) => {
+         }, , , , , (WW, iW, OW) => {
```

#### 720. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16914-L16915` → after: `L17405-L17406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17405-L17406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17405-L17406) · [Before (L16914-L16915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16914-L16915)

```diff
-           var YB = GB(375)
-         }, , , , , BB => {
+           var mW = OW(369)
+         }, , , WW => {
```

#### 721. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16919` → after: `L17410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17410) · [Before (L16919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16919)

```diff
-         }, , , , BB => {
+         }, , , , , , , , , WW => {
```

#### 722. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16923` → after: `L17414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17414) · [Before (L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16923)

```diff
-         }, , , , BB => {
+         }, , , WW => {
```

#### 723. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16928-L16929` → after: `L17419-L17420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17419-L17420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17419-L17420) · [Before (L16928-L16929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16928-L16929)

```diff
-           BB.exports = GB(425)
-         }, , , , , BB => {
+           WW.exports = OW(431)
+         }, , , , , , WW => {
```

#### 724. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16933-L16935` → after: `L17424-L17426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17424-L17426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17424-L17426) · [Before (L16933-L16935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16933-L16935)

```diff
-         }, , , , , , (BB, OB, GB) => {
-           BB.exports = GB(432)
-         }, , , , , , BB => {
+         }, , , , , , , , (WW, iW, OW) => {
+           WW.exports = OW(439)
+         }, , WW => {
```

#### 725. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16939-L16941` → after: `L17430-L17432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17430-L17432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17430-L17432) · [Before (L16939-L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16939-L16941)

```diff
-         }, , (BB, OB, GB) => {
-           BB.exports = GB(444)
-         }, , , , , , BB => {
+         }, , , , , (WW, iW, OW) => {
+           WW.exports = OW(449)
+         }, , , , WW => {
```

#### 726. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16945` → after: `L17436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17436) · [Before (L16945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16945)

```diff
-         }, , , , , , , , , BB => {
+         }, , , , , , , WW => {
```

#### 727. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16953` → after: `L17444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17444) · [Before (L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16953)

```diff
-         }, , , , , , , , , BB => {
+         }, , , , , , WW => {
```

#### 728. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16957` → after: `L17448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17448) · [Before (L16957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16957)

```diff
-         }, , , , , , BB => {
+         }, , , , , , , , WW => {
```

#### 729. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16961` → after: `L17452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17452) · [Before (L16961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16961)

```diff
-         }, , , , , , BB => {
+         }, , WW => {
```

#### 730. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16965` → after: `L17456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17456) · [Before (L16965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16965)

```diff
-         }, , , , , , BB => {
+         }, , WW => {
```

#### 731. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16969` → after: `L17460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17460) · [Before (L16969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16969)

```diff
-         }, , , , , , , , BB => {
+         }, , , , , , , WW => {
```

#### 732. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16976-L16978` → after: `L17467-L17469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17467-L17469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17467-L17469) · [Before (L16976-L16978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16976-L16978)

```diff
-         }, , , , , , (BB, OB, GB) => {
-           BB.exports = GB(503)
-         }, , , , , , BB => {
+         }, , , , (WW, iW, OW) => {
+           WW.exports = OW(497)
+         }, , , , , WW => {
```

#### 733. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16985-L16987` → after: `L17476-L17478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17476-L17478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17476-L17478) · [Before (L16985-L16987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16985-L16987)

```diff
-         }, , , , , , , (BB, OB, GB) => {
-           BB.exports = GB(515)
-         }, , , BB => {
+         }, , , , , , (WW, iW, OW) => {
+           WW.exports = OW(506)
+         }, , , , , WW => {
```

#### 734. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L16994-L16996` → after: `L17485-L17487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17485-L17487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17485-L17487) · [Before (L16994-L16996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L16994-L16996)

```diff
-         }, , , , , , (BB, OB, GB) => {
-           BB.exports = GB(525)
-         }, , , , , BB => {
+         }, , , , , , , , (WW, iW, OW) => {
+           WW.exports = OW(517)
+         }, , , , , , , , , WW => {
```

#### 735. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17003-L17005` → after: `L17494-L17496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17494-L17496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17494-L17496) · [Before (L17003-L17005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17003-L17005)

```diff
-         }, , , , (BB, OB, GB) => {
-           BB.exports = GB(536)
-         }, , , , , , , , BB => {
+         }, , , , , , (WW, iW, OW) => {
+           WW.exports = OW(534)
+         }, , , , WW => {
```

#### 736. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17009` → after: `L17500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17500) · [Before (L17009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17009)

```diff
-         }, , , , , , BB => {
+         }, , , , , , , WW => {
```

#### 737. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17013` → after: `L17504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17504) · [Before (L17013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17013)

```diff
-         }, , , , BB => {
+         }, , , , , , WW => {
```

#### 738. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17023` → after: `L17514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17514) · [Before (L17023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17023)

```diff
-         }, , , , , BB => {
+         }, , , , , , , , WW => {
```

#### 739. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17030` → after: `L17521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17521) · [Before (L17030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17030)

```diff
-         }, , , , , , , , BB => {
+         }, , , , , , WW => {
```

#### 740. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17046` → after: `L17537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17537) · [Before (L17046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17046)

```diff
-         }, , , , BB => {
+         }, , , , , , , WW => {
```

#### 741. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17053` → after: `L17544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17544) · [Before (L17053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17053)

```diff
-         }, , , , BB => {
+         }, , , , , , WW => {
```

#### 742. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17068` → after: `L17559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17559) · [Before (L17068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17068)

```diff
-         }, , , , , , , , BB => {
+         }, , , WW => {
```

#### 743. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17078` → after: `L17569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17569) · [Before (L17078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17078)

```diff
-         }, , , , , , , , BB => {
+         }, , , , , , , WW => {
```

#### 744. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17088` → after: `L17579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17579) · [Before (L17088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17088)

```diff
-         }, , , , BB => {
+         }, , , WW => {
```

#### 745. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17098` → after: `L17589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17589) · [Before (L17098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17098)

```diff
-         }, , , , (BB, OB, GB) => {
+         }, , , , , (WW, iW, OW) => {
```

#### 746. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17107` → after: `L17598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17598) · [Before (L17107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17107)

```diff
-           var YB = GB(368)()
+           var mW = OW(360)()
```

#### 747. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17111` → after: `L17602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17602) · [Before (L17111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17111)

```diff
-             f: () => QB,
+             g: () => NW,
```

#### 748. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17141` → after: `L17637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17637) · [Before (L17141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17141)

```diff
-         }, , , , , , , , , (BB, OB, GB) => {
+         }, , , , , , , , (WW, iW, OW) => {
```

#### 749. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17143` → after: `L17639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17639) · [Before (L17143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17143)

```diff
-             c: () => YB
+             b: () => mW
```

#### 750. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17151-L17152` → after: `L17647-L17648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17647-L17648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17647-L17648) · [Before (L17151-L17152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17151-L17152)

```diff
-                 if (void 0 !== GB[BB]) throw new Error(`Duplicate value found in bi-directional table: ${String(BB)}`);
-                 GB[BB] = "string" === OB ? YB : Number(YB)
+                 if (void 0 !== OW[WW]) throw new Error(`Duplicate value found in bi-directional table: ${String(WW)}`);
+                 OW[WW] = "string" === iW ? mW : Number(mW)
```

#### 751. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17165-L17166` → after: `L17661-L17663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17661-L17663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17661-L17663) · [Before (L17165-L17166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17165-L17166)

```diff
-             b: () => zB,
-             e: () => yB,
+             C: () => AW,
+             E: () => mW,
+             d: () => lW,
```

#### 752. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17169-L17170` → after: `L17666-L17667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17666-L17667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17666-L17667) · [Before (L17169-L17170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17169-L17170)

```diff
-             n: () => JB,
-             r: () => oB,
+             p: () => cW,
+             t: () => tW,
```

#### 753. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17172` → after: `L17669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17669) · [Before (L17172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17172)

```diff
-             x: () => YB
+             y: () => LW
```

#### 754. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17339` → after: `L17840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17840) · [Before (L17339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17339)

```diff
-         }, , , , , , (BB, OB, GB) => {
+         }, , , , , , , (WW, iW, OW) => {
```

#### 755. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17343` → after: `L17843-L17845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17843-L17845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17843-L17845) · [Before (L17343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17343)

```diff
-             h: () => MB,
+             e: () => LW,
+             g: () => tW,
+             i: () => wW,
```

#### 756. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17345-L17346` → after: `L17847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17847) · [Before (L17345-L17346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17345-L17346)

```diff
-             m: () => QB,
-             p: () => oB
+             k: () => PW
```

#### 757. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17348-L17349` → after: `L17849-L17850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17849-L17850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17849-L17850) · [Before (L17348-L17349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17348-L17349)

```diff
-           var YB = GB(358),
-             DB = GB(635);
+           var mW = OW(349),
+             EW = OW(639);
```

#### 758. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17353` → after: `L17854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17854) · [Before (L17353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17353)

```diff
-             jB = ["Wood", "Iron", "Gold", "Diamond", "Fur", "Military", ...YB.p, ...YB.h, ...YB.q, ...YB.d],
+             LW = ["Wood", "Iron", "Gold", "Diamond", "Fur", "Military", ...mW.o, ...mW.g, ...mW.p, ...mW.d],
```

#### 759. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17355` → after: `L17856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17856) · [Before (L17355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17355)

```diff
-             JB = ["Player", ...DB.o],
+             wW = ["Player", ...EW.k],
```

#### 760. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17357` → after: `L17858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17858) · [Before (L17357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17357)

```diff
-         }, , (BB, OB, GB) => {
+         }, , , , , , , (WW, iW, OW) => {
```

#### 761. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17359-L17360` → after: `L17860-L17861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17860-L17861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17860-L17861) · [Before (L17359-L17360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17359-L17360)

```diff
-             D: () => PB,
-             c: () => qB,
+             B: () => ZW,
+             d: () => bW,
```

#### 762. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17364` → after: `L17866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17866) · [Before (L17364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17364)

```diff
-             o: () => JB,
+             m: () => lW,
```

#### 763. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17366-L17368` → after: `L17868-L17869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17868-L17869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17868-L17869) · [Before (L17366-L17368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17366-L17368)

```diff
-             s: () => pB,
-             w: () => yB,
-             z: () => DB
+             t: () => cW,
+             x: () => EW
```

#### 764. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17456` → after: `L17957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17957) · [Before (L17456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17456)

```diff
-             if (0 === OB.size) throw new Error(`No visible variations for mob type: ${BB}.`);
+             if (0 === iW.size) throw new Error(`No visible variations for mob type: ${WW}.`);
```

#### 765. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17459` → after: `L17960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17960) · [Before (L17459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17459)

```diff
-         }, , , , , , (BB, OB, GB) => {
+         }, , , , (WW, iW, OW) => {
```

#### 766. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17462-L17463` → after: `L17963-L17964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17963-L17964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17963-L17964) · [Before (L17462-L17463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17462-L17463)

```diff
-             C: () => lB,
-             E: () => JB,
+             A: () => wW,
+             B: () => sW,
```

#### 767. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17465-L17466` → after: `L17966-L17968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17966-L17968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17966-L17968) · [Before (L17465-L17466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17465-L17466)

```diff
-             N: () => VB,
-             Q: () => yB,
+             K: () => cW,
+             L: () => SW,
+             O: () => jW,
```

#### 768. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17469-L17470` → after: `L17971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17971) · [Before (L17469-L17470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17469-L17470)

```diff
-             V: () => zB,
-             X: () => qB,
+             W: () => bW,
```

#### 769. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17473-L17475` → after: `L17974-L17977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17974-L17977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17974-L17977) · [Before (L17473-L17475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17473-L17475)

```diff
-             cb: () => ZB,
-             i: () => AB,
-             p: () => DB,
+             e: () => MW,
+             k: () => EW,
+             m: () => NW,
+             o: () => LW,
```

#### 770. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17477-L17478` → after: `L17979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17979) · [Before (L17477-L17478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17477-L17478)

```diff
-             t: () => jB,
-             x: () => oB
+             y: () => lW
```

#### 771. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17480` → after: `L17981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R17981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L17981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L17981) · [Before (L17480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17480)

```diff
-           var YB = GB(645);
+           var mW = OW(649);
```

#### 772. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17510` → after: `L18011-L18012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R18011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L18011-L18012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L18011-L18012) · [Before (L17510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17510)

```diff
-             return [BB[0] & PB, BB[1] & PB, BB[2] & PB]
+             return WW[0] < 0 || WW[1] < 0 || WW[2] < 0 || WW[0] >= wW || WW[1] >= wW || WW[2] >= wW ? [(iW = WW)[0] & ZW, iW[1] & ZW, iW[2] & ZW] : WW;
+             var iW
```

#### 773. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L17514` → after: `L18016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R18016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L18016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.js#L18016) · [Before (L17514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.js#L17514)

```diff
-             return `${zB(BB[0])}|${zB(BB[1])}|${zB(BB[2])}`
+             return `${xW(WW[0])}|${xW(WW[1])}|${xW(WW[2])}`
```
