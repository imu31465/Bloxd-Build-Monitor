# Changed — Bundle Modifications Report (Part 122 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `122 / 126` (**434** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 121](part-121.md) · [Part 123 →](part-123.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1017 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 875. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10827-L10828` → after: `L10827-L10828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10827-L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10827-L10828) · [Before (L10827-L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10827-L10828)

```diff
-               const RR = Math.floor(iR[0].x / this.LK) * this.LK,
-                 JR = Math.floor(iR[0].z / this.LK) * this.LK,
+               const rr = Math.floor(fr[0].x / this.hx) * this.hx,
+                 Sr = Math.floor(fr[0].z / this.hx) * this.hx,
```

#### 876. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10849` → after: `L10849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10849) · [Before (L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10849)

```diff
-                   qy: fR.prefab.name
+                   tZ: Er.prefab.name
```

#### 877. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10882` → after: `L10882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10882) · [Before (L10882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10882)

```diff
-               VR = yR.getOrGenerate(RR + Math.floor(this.LK / 2), JR + Math.floor(this.LK / 2))[0].biome.oreGenerator.getOreBlocksForChunk(RR, JR),
+               pr = Zr.getOrGenerate(rr + Math.floor(this.hx / 2), Sr + Math.floor(this.hx / 2))[0].biome.oreGenerator.getOreBlocksForChunk(rr, Sr),
```

#### 878. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10900` → after: `L10900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10900) · [Before (L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10900)

```diff
-             return yR.t.create(this.LK, [RR, JR], this.biomeSelector)
+             return Zr.r.create(this.hx, [rr, Sr], this.biomeSelector)
```

#### 879. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10904` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904)

```diff
-             return yR.q.create(this.LK, [RR, JR], uR.f.NumFields, ZR)
+             return Zr.n.create(this.hx, [rr, Sr], ar.f.NumFields, jr)
```

#### 880. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10908` → after: `L10908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10908) · [Before (L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10908)

```diff
-       41219: (RR, JR, GR) => {
+       41596: (rr, Sr, Qr) => {
```

#### 881. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10910-L10911` → after: `L10910-L10911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10910-L10911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10910-L10911) · [Before (L10910-L10911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10910-L10911)

```diff
-           c: () => mR,
-           d: () => lR,
+           e: () => Ar,
+           f: () => vr,
```

#### 882. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10913` → after: `L10913-L10914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10913-L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10913-L10914) · [Before (L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10913)

```diff
-           k: () => BR,
+           h: () => Tr,
+           j: () => Pr,
```

#### 883. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10915-L10916` → after: `L10916-L10918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10916-L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10916-L10918) · [Before (L10915-L10916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10915-L10916)

```diff
-           q: () => oR,
-           t: () => vR,
+           r: () => Xr,
+           s: () => er,
+           v: () => nr,
```

#### 884. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10920-L10923` → after: `L10921-L10923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10921-L10923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10921-L10923) · [Before (L10920-L10923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10920-L10923)

```diff
-           F: () => aR,
-           J: () => CR,
-           K: () => UR,
-           L: () => nR
+           E: () => Kr,
+           G: () => Yr,
+           H: () => zr
```

#### 885. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10925` → after: `L10925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10925) · [Before (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10925)

```diff
-         var yR = GR(3991),
+         var Zr = Qr(3938),
```

#### 886. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10938` → after: `L10938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10938) · [Before (L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10938)

```diff
-             const JR = "function" == typeof RR ? RR : function(RR) {
+             const Sr = "function" == typeof rr ? rr : function(rr) {
```

#### 887. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11147` → after: `L11147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11147) · [Before (L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11147)

```diff
-         var eR = GR(41226);
+         var Ur = Qr(41598);
```

#### 888. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11176` → after: `L11176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11176) · [Before (L11176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11176)

```diff
-             xZ: UR(RR, uR, ZR),
+             Oj: Yr(rr, ar, jr),
```

#### 889. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11207` → after: `L11207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11207) · [Before (L11207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11207)

```diff
-             for (let GR = 0; GR < RR.length; GR++) this._simplexes.push(new rR(`${JR}${GR}`))
+             for (let Qr = 0; Qr < rr.length; Qr++) this._simplexes.push(new Nr(`${Sr}${Qr}`))
```

#### 890. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11232` → after: `L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11232) · [Before (L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11232)

```diff
-             for (let tR = 0; tR < RR.length; tR++) this._simplexes.push(new rR(`${GR}${tR}`));
+             for (let Wr = 0; Wr < rr.length; Wr++) this._simplexes.push(new Nr(`${Qr}${Wr}`));
```

#### 891. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11388` → after: `L11388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11388) · [Before (L11388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11388)

```diff
-             if (void 0 === yR) throw new Error(`Number not found for x=${RR}, z=${JR}, thirdIndex=${GR}`);
+             if (void 0 === Zr) throw new Error(`Number not found for x=${rr}, z=${Sr}, thirdIndex=${Qr}`);
```

#### 892. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11437` → after: `L11437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11437) · [Before (L11437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11437)

```diff
-             if (void 0 === tR) throw new Error(`Number not found for x=${RR}, z=${JR}, thirdIndex=${GR}, fourthIndex=${yR}`);
+             if (void 0 === Wr) throw new Error(`Number not found for x=${rr}, z=${Sr}, thirdIndex=${Qr}, fourthIndex=${Zr}`);
```

#### 893. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11467` → after: `L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11467) · [Before (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11467)

```diff
-       41226: (RR, JR, GR) => {
+       41598: (rr, Sr, Qr) => {
```

#### 894. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11470-L11472` → after: `L11470-L11472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11470-L11472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11470-L11472) · [Before (L11470-L11472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11470-L11472)

```diff
-           f: () => ZR,
-           h: () => fR,
-           i: () => uR,
+           d: () => jr,
+           g: () => Er,
+           j: () => ar,
```

#### 895. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11474-L11475` → after: `L11474-L11475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11474-L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11474-L11475) · [Before (L11474-L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11474-L11475)

```diff
-           o: () => tR,
-           q: () => yR
+           l: () => Wr,
+           n: () => Zr
```

#### 896. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11488` → after: `L11488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11488) · [Before (L11488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11488)

```diff
-       41234: (RR, JR, GR) => {
+       41603: (rr, Sr, Qr) => {
```

#### 897. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11490` → after: `L11490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11490) · [Before (L11490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11490)

```diff
-           c: () => tR,
+           d: () => Wr,
```

#### 898. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11493-L11495` → after: `L11493-L11495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11493-L11495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493-L11495) · [Before (L11493-L11495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493-L11495)

```diff
-           l: () => qR,
-           o: () => ZR,
-           s: () => uR
+           m: () => Ir,
+           n: () => jr,
+           q: () => ar
```

#### 899. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11514` → after: `L11514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11514) · [Before (L11514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11514)

```diff
-       3031: (RR, JR, GR) => {
+       2999: (rr, Sr, Qr) => {
```

#### 900. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11516-L11519` → after: `L11516-L11518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11516-L11518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11516-L11518) · [Before (L11516-L11519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11516-L11519)

```diff
-           c: () => iR,
-           f: () => uR,
-           i: () => yR,
-           j: () => qR,
+           e: () => fr,
+           h: () => ar,
+           l: () => Zr,
```

#### 901. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11547` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11547) · [Before (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11547)

```diff
-             if (this.distribution = void 0, RR.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(RR)}`);
+             if (this.distribution = void 0, rr.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(rr)}`);
```

#### 902. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11552` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552)

```diff
-               if (JR.has(yR)) throw new Error(`Values must be unique: ${JSON.stringify(RR)}`);
+               if (Sr.has(Zr)) throw new Error(`Values must be unique: ${JSON.stringify(rr)}`);
```

#### 903. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11555` → after: `L11555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11555) · [Before (L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11555)

```diff
-               if (uR <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(RR)}`);
+               if (ar <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(rr)}`);
```

#### 904. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11580` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11580) · [Before (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11580)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, RR > JR) throw new Error(`Min must be less than or equal to Max, but Min=${RR} and Max=${JR}`);
+             if (this.offset = void 0, this.multiplier = void 0, rr > Sr) throw new Error(`Min must be less than or equal to Max, but Min=${rr} and Max=${Sr}`);
```

#### 905. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11590` → after: `L11590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11590) · [Before (L11590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11590)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new ZR(RR, JR, GR), !Number.isInteger(RR) || !Number.isInteger(JR)) throw new Error(`Min and Max must be integers, but Min=${RR} and Max=${JR}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new jr(rr, Sr, Qr), !Number.isInteger(rr) || !Number.isInteger(Sr)) throw new Error(`Min and Max must be integers, but Min=${rr} and Max=${Sr}`)
```

#### 906. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11606` → after: `L11606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11606) · [Before (L11606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11606)

```diff
-       679: (RR, JR, GR) => {
+       688: (rr, Sr, Qr) => {
```

#### 907. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11608-L11609` → after: `L11608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11608) · [Before (L11608-L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11608-L11609)

```diff
-           A: () => fR,
-           E: () => rR,
+           C: () => Nr,
```

#### 908. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11611-L11613` → after: `L11610-L11612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11610-L11612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11610-L11612) · [Before (L11611-L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11611-L11613)

```diff
-           I: () => iR,
-           X: () => KR,
-           e: () => qR,
+           L: () => fr,
+           U: () => xr,
+           c: () => Ir,
```

#### 909. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11615-L11617` → after: `L11614-L11617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11614-L11617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11614-L11617) · [Before (L11615-L11617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11615-L11617)

```diff
-           k: () => tR,
-           t: () => uR,
-           x: () => wR
+           l: () => Wr,
+           v: () => ar,
+           x: () => mr,
+           y: () => Er
```

#### 910. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11619` → after: `L11619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11619) · [Before (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11619)

```diff
-         var yR = GR(688);
+         var Zr = Qr(692);
```

#### 911. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11649` → after: `L11649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11649) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11649)

```diff
-         yR.d, Number(atob("NQ==")), Number(atob("MTM="));
+         Zr.e, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 912. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11657` → after: `L11657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11657) · [Before (L11657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11657)

```diff
-       688: (RR, JR, GR) => {
+       692: (rr, Sr, Qr) => {
```

#### 913. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11659` → after: `L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11659) · [Before (L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11659)

```diff
-           d: () => yR
+           e: () => Zr
```

#### 914. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11663` → after: `L11663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11663) · [Before (L11663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11663)

```diff
-       231: (RR, JR, GR) => {
+       230: (rr, Sr, Qr) => {
```

#### 915. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11682` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11682) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11682)

```diff
-         }, tR.resolve = uR, RR.exports = tR, tR.id = 231
+         }, Wr.resolve = ar, rr.exports = Wr, Wr.id = 230
```

#### 916. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11708-L11714` → after: `L11708-L11714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11708-L11714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11708-L11714) · [Before (L11708-L11714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11708-L11714)

```diff
-   }, GR.f = {}, GR.e = RR => Promise.all(Object.keys(GR.f).reduce(((JR, yR) => (GR.f[yR](RR, JR), JR)), [])), GR.u = RR => "static/js/4udp6d." + (82 === RR ? "worldgenTables" : RR) + "." + {
-     82: "3ad19461",
-     85: "53b91a22",
-     86: "946d3252",
-     87: "d1551abf",
-     88: "95387ef4",
-     89: "c4ce6fef"
+   }, Qr.f = {}, Qr.e = rr => Promise.all(Object.keys(Qr.f).reduce(((Sr, Zr) => (Qr.f[Zr](rr, Sr), Sr)), [])), Qr.u = rr => "static/js/fl4vv." + (82 === rr ? "worldgenTables" : rr) + "." + {
+     82: "c1e9b7fe",
+     85: "cc69f3a4",
+     86: "cc0ae6a9",
+     87: "4da7ffac",
+     88: "a93f6a08",
+     89: "2fe7c41d"
```

#### 917. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11789` → after: `L11789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11789) · [Before (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11789)

```diff
-       GR = JR < 0 ? this.length + JR : JR;
+       Qr = Sr < 0 ? this.length + Sr : Sr;
```

#### 918. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11804-L11806` → after: `L11804-L11806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11804-L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11804-L11806) · [Before (L11804-L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11804-L11806)

```diff
-     YL: () => IR,
-     kL: () => mR,
-     HK: () => zR,
+     dh: () => kr,
+     sh: () => Ar,
+     HE: () => Vr,
```

#### 919. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11809-L11819` → after: `L11809-L11819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11809-L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11809-L11819) · [Before (L11809-L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11809-L11819)

```diff
-     oK: () => SR,
-     cK: () => jR,
-     PK: () => dR,
-     IK: () => ER,
-     mK: () => YR,
-     zK: () => kR,
-     SK: () => QR,
-     jK: () => FR,
-     kK: () => TR,
-     FK: () => sR,
-     TK: () => hR
+     ip: () => ir,
+     tx: () => wr,
+     Rx: () => cr,
+     gx: () => Fr,
+     Cx: () => or,
+     Mx: () => br,
+     Gx: () => Jr,
+     kx: () => Dr,
+     wx: () => dr,
+     bx: () => sr,
+     Jx: () => ur
```

#### 920. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11826` → after: `L11826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11826) · [Before (L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11826)

```diff
-   var fR = GR(3991),
+   var Er = Qr(3938),
```

#### 921. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11862` → after: `L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11862) · [Before (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11862)

```diff
-     return null === aR ? "not failed" : `${aR}: ${(RR=LR)instanceof Error?`${RR.name}: ${RR.message}`:String(RR)}`;
+     return null === tr ? "not failed" : `${tr}: ${(rr=hr)instanceof Error?`${rr.name}: ${rr.message}`:String(rr)}`;
```

#### 922. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11867` → after: `L11867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11867) · [Before (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11867)

```diff
-     if (!pR()) throw new Error(`Bloxd wasm is not ready (${gR()}): check isBloxdWasmReady() first`);
+     if (!Or()) throw new Error(`Bloxd wasm is not ready (${Lr()}): check isBloxdWasmReady() first`);
```

#### 923. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11905` → after: `L11905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11905) · [Before (L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11905)

```diff
-       kK: tR
+       wx: Wr
```

#### 924. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11926` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11926) · [Before (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11926)

```diff
-     eR = "failed", aR = JR, LR = RR, nR = !1, console.error(`Bloxd wasm failed (${JR}):`, RR);
+     Ur = "failed", tr = Sr, hr = rr, zr = !1, console.error(`Bloxd wasm failed (${Sr}):`, rr);
```

#### 925. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11945-L11946` → after: `L11945-L11946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11945-L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11945-L11946) · [Before (L11945-L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11945-L11946)

```diff
-       reserveUpFront: JR => RR().IK(JR),
-       reserveAhead: JR => RR().PK(JR),
+       reserveUpFront: Sr => rr().gx(Sr),
+       reserveAhead: Sr => rr().Rx(Sr),
```

#### 926. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11948` → after: `L11948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11948) · [Before (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11948)

```diff
-         RR().mK(JR)
+         rr().Cx(Sr)
```

#### 927. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11950` → after: `L11950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11950) · [Before (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11950)

```diff
-       lowWater: () => cR[RR().cK()] ?? "none",
+       lowWater: () => Mr[rr().tx()] ?? "none",
```

#### 928. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11973-L11975` → after: `L11973-L11975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11973-L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11973-L11975) · [Before (L11973-L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11973-L11975)

```diff
-       }(RR().zK()),
-       takeBallast: () => RR().SK(),
-       takePressure: () => RR().jK()
+       }(rr().Mx()),
+       takeBallast: () => rr().Gx(),
+       takePressure: () => rr().kx()
```

#### 929. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11985` → after: `L11985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11985) · [Before (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11985)

```diff
-       UJ.zRH4(RR, 0)
+       YS.uYQJ(rr, 0)
```

#### 930. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11988` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988)

```diff
-       const JR = VJ(RR, UJ.ui7b, UJ.qlY1),
+       const Sr = pS(rr, YS.HmGc, YS.HmDh),
```

#### 931. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11990` → after: `L11990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11990) · [Before (L11990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11990)

```diff
-       UJ.EuPE(this.__wbg_ptr, JR, GR)
+       YS.aTDp(this.__wbg_ptr, Sr, Qr)
```

#### 932. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11993` → after: `L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11993) · [Before (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11993)

```diff
-       return UJ.lafx(this.__wbg_ptr) >>> 0
+       return YS.lBD1(this.__wbg_ptr) >>> 0
```

#### 933. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11996` → after: `L11996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11996) · [Before (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11996)

```diff
-       const RR = UJ.ZVSR();
+       const rr = YS.UAe6();
```

#### 934. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12000` → after: `L12000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12000) · [Before (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12000)

```diff
-       return UJ.xCw2(this.__wbg_ptr) >>> 0
+       return YS.MiDL(this.__wbg_ptr) >>> 0
```

#### 935. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12003` → after: `L12003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12003) · [Before (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12003)

```diff
-       return UJ.aunn(this.__wbg_ptr) >>> 0
+       return YS.ip6j(this.__wbg_ptr) >>> 0
```

#### 936. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12006` → after: `L12006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12006) · [Before (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12006)

```diff
-       return UJ.TEdv(this.__wbg_ptr) >>> 0
+       return YS.pvAk(this.__wbg_ptr) >>> 0
```

#### 937. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12017` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12017) · [Before (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12017)

```diff
-       UJ.M7qY(RR, 0)
+       YS.iiSY(rr, 0)
```

#### 938. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12020` → after: `L12020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12020) · [Before (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12020)

```diff
-       return UJ.kopD(this.__wbg_ptr, RR) >>> 0
+       return YS.sgLj(this.__wbg_ptr, rr) >>> 0
```

#### 939. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12023` → after: `L12023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12023) · [Before (L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12023)

```diff
-       return UJ.sRPI(this.__wbg_ptr, RR) >>> 0
+       return YS.RLo0(this.__wbg_ptr, rr) >>> 0
```

#### 940. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12026` → after: `L12026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12026) · [Before (L12026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12026)

```diff
-       const JR = UJ.GiZt(void 0 === (GR = RR) || null === GR ? Number.MAX_SAFE_INTEGER : RR >>> 0);
+       const Sr = YS.RPMr(void 0 === (Qr = rr) || null === Qr ? Number.MAX_SAFE_INTEGER : rr >>> 0);
```

#### 941. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12031` → after: `L12031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12031) · [Before (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12031)

```diff
-       return UJ.XQNw(this.__wbg_ptr) >>> 0
+       return YS.Byk1(this.__wbg_ptr) >>> 0
```

#### 942. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12034` → after: `L12034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12034) · [Before (L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12034)

```diff
-       return UJ.MUqH(this.__wbg_ptr) >>> 0
+       return YS.eSdR(this.__wbg_ptr) >>> 0
```

#### 943. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12037` → after: `L12037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12037) · [Before (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12037)

```diff
-       return UJ.PDRJ(this.__wbg_ptr, RR) >>> 0
+       return YS.mI3d(this.__wbg_ptr, rr) >>> 0
```

#### 944. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12042` → after: `L12042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12042) · [Before (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12042)

```diff
-     const GR = VJ(RR, UJ.ui7b, UJ.qlY1),
+     const Qr = pS(rr, YS.HmGc, YS.HmDh),
```

#### 945. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12044` → after: `L12044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12044) · [Before (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12044)

```diff
-       tR = UJ.UWvx(GR, yR, JR);
+       Wr = YS.zIa4(Qr, Zr, Sr);
```

#### 946. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12049` → after: `L12049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12049) · [Before (L12049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12049)

```diff
-     UJ.Kbdv()
+     YS.ndKg()
```

#### 947. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12053` → after: `L12053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12053) · [Before (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12053)

```diff
-     return UJ.LPw9() >>> 0
+     return YS.kERm() >>> 0
```

#### 948. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12057` → after: `L12057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12057) · [Before (L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12057)

```diff
-     return 0 !== UJ.biJD(RR)
+     return 0 !== YS.CM3z(rr)
```

#### 949. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12061` → after: `L12061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12061) · [Before (L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12061)

```diff
-     return 0 !== UJ.B4Zd(RR)
+     return 0 !== YS.qrCZ(rr)
```

#### 950. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12065` → after: `L12065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12065) · [Before (L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12065)

```diff
-     UJ.wITU(RR)
+     YS.PWdk(rr)
```

#### 951. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12069` → after: `L12069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12069) · [Before (L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12069)

```diff
-     return UJ.H87U() >>> 0
+     return YS.BBUh() >>> 0
```

#### 952. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12073` → after: `L12073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12073) · [Before (L12073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12073)

```diff
-     return UJ.l8O8() >>> 0
+     return YS.tOKa() >>> 0
```

#### 953. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12077` → after: `L12077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12077) · [Before (L12077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12077)

```diff
-     return 0 !== UJ.W1iZ()
+     return 0 !== YS.MWi1()
```

#### 954. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12081` → after: `L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12081) · [Before (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12081)

```diff
-     return UJ.x6Y8() >>> 0
+     return YS.x3eM() >>> 0
```

#### 955. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12087` → after: `L12087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12087) · [Before (L12087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12087)

```diff
-       const GR = UJ.EjKc();
+       const Qr = YS.KChZ();
```

#### 956. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12090` → after: `L12090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12090) · [Before (L12090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12090)

```diff
-       UJ.Pzeu(RR, JR, 1)
+       YS.vvZn(rr, Sr, 1)
```

#### 957. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12095` → after: `L12095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12095) · [Before (L12095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12095)

```diff
-     UJ.T3fI(yJ(RR))
+     YS.If2e(ZS(rr))
```

#### 958. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12101` → after: `L12101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12101) · [Before (L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12101)

```diff
-       Wkc8: {
+       pJ0e: {
```

#### 959. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12103` → after: `L12103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12103) · [Before (L12103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12103)

```diff
-         i5bf: function(RR, JR) {
+         wE7o: function(rr, Sr) {
```

#### 960. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12106` → after: `L12106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12106) · [Before (L12106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12106)

```diff
-         TJNU: function(RR, JR) {
+         dM5T: function(rr, Sr) {
```

#### 961. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12109` → after: `L12109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12109) · [Before (L12109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12109)

```diff
-         jeWO: function(RR) {
+         qJRB: function(rr) {
```

#### 962. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12112` → after: `L12112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12112) · [Before (L12112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12112)

```diff
-         G1ib: function(RR, JR) {
+         rQ1m: function(rr, Sr) {
```

#### 963. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12115` → after: `L12115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12115) · [Before (L12115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12115)

```diff
-         UvWX: function(RR) {
+         H7KA: function(rr) {
```

#### 964. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12125` → after: `L12125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12125) · [Before (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12125)

```diff
-     } : new FinalizationRegistry((RR => UJ.zRH4(RR, 1))),
+     } : new FinalizationRegistry((rr => YS.uYQJ(rr, 1))),
```

#### 965. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12129` → after: `L12129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12129) · [Before (L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12129)

```diff
-     } : new FinalizationRegistry((RR => UJ.M7qY(RR, 1)));
+     } : new FinalizationRegistry((rr => YS.iiSY(rr, 1)));
```

#### 966. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12206` → after: `L12206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12206) · [Before (L12206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12206)

```diff
-     return nJ = RR, UJ = RR.exports, LJ = JR, uJ = null, UJ.xlcQ(), UJ
+     return zS = rr, YS = rr.exports, hS = Sr, aS = null, YS.H2vX(), YS
```

#### 967. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12230` → after: `L12230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12230) · [Before (L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12230)

```diff
-         if (!RR.ok) throw new Error(`failed to fetch Wasm: ${RR.status} ${RR.statusText} fetching '${RR.url}'`);
+         if (!rr.ok) throw new Error(`failed to fetch Wasm: ${rr.status} ${rr.statusText} fetching '${rr.url}'`);
```

#### 968. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12260-L12261` → after: `L12260-L12261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12260-L12261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12260-L12261) · [Before (L12260-L12261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12260-L12261)

```diff
-       if (!pR()) throw new Error(`Bloxd wasm is not ready (${gR()}): check isBloxdWasmReady() first`);
-       if (CR !== RR) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${JR}`)
+       if (!Or()) throw new Error(`Bloxd wasm is not ready (${Lr()}): check isBloxdWasmReady() first`);
+       if (Kr !== rr) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${Sr}`)
```

#### 969. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12264` → after: `L12264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12264) · [Before (L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12264)

```diff
-   var BJ = GR(679);
+   var TS = Qr(688);
```

#### 970. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12271` → after: `L12271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12271) · [Before (L12271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12271)

```diff
-       } = GR(41323), rR = function(RR, JR, GR) {
+       } = Qr(41698), Nr = function(rr, Sr, Qr) {
```

#### 971. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12273` → after: `L12273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12273) · [Before (L12273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12273)

```diff
-         for (const qR of RR.Rt) xJ(qR, GR);
+         for (const Ir of rr.SW) HS(Ir, Qr);
```

#### 972. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12276` → after: `L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12276) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12276)

```diff
-           Rt: RR.Rt,
+           SW: rr.SW,
```

#### 973. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12282` → after: `L12282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12282) · [Before (L12282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12282)

```diff
-           throw new Error(`Custom world-gen terrain "${yR.name}" is not in this generator's catalogue (${RR.length>0?RR.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${Zr.name}" is not in this generator's catalogue (${rr.length>0?rr.join(", "):"empty"})`)
```

#### 974. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12287` → after: `L12287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12287) · [Before (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12287)

```diff
-               if (null !== RR.hy) throw new Error(`Custom world-gen terrain "${RR.name}" takes no options`);
+               if (null !== rr.rW) throw new Error(`Custom world-gen terrain "${rr.name}" takes no options`);
```

#### 975. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12291-L12292` → after: `L12291-L12292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12291-L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12291-L12292) · [Before (L12291-L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12291-L12292)

```diff
-             if (null !== RR.hy) try {
-               GR = JSON.parse(RR.hy)
+             if (null !== rr.rW) try {
+               Qr = JSON.parse(rr.rW)
```

#### 976. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12294` → after: `L12294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12294) · [Before (L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12294)

```diff
-               throw new Error(`Custom world-gen terrain "${RR.name}" has invalid optionsJson: ${String(yR)}`, {
+               throw new Error(`Custom world-gen terrain "${rr.name}" has invalid optionsJson: ${String(Zr)}`, {
```

#### 977. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12301` → after: `L12301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12301) · [Before (L12301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12301)

```diff
-           Rt: RR.Rt,
+           SW: rr.SW,
```

#### 978. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12304` → after: `L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12304) · [Before (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12304)

```diff
-       }(null !== (VR = null === qR || void 0 === qR ? void 0 : qR.Qy) && void 0 !== VR ? VR : null, iR, JR);
+       }(null !== (pr = null === Ir || void 0 === Ir ? void 0 : Ir.dZ) && void 0 !== pr ? pr : null, fr, Sr);
```

#### 979. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12306` → after: `L12306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12306) · [Before (L12306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12306)

```diff
-       const eR = null !== (KR = null === qR || void 0 === qR ? void 0 : qR.layers) && void 0 !== KR ? KR : [];
+       const Ur = null !== (xr = null === Ir || void 0 === Ir ? void 0 : Ir.layers) && void 0 !== xr ? xr : [];
```

#### 980. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12309` → after: `L12309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12309) · [Before (L12309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12309)

```diff
-         const GR = [...RR].sort(((RR, JR) => RR.wy - JR.wy));
+         const Qr = [...rr].sort(((rr, Sr) => rr.nZ - Sr.nZ));
```

#### 981. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12311` → after: `L12311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12311) · [Before (L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12311)

```diff
-           if (GR[yR].wy < GR[yR - 1].ey) throw new Error(`Custom world-gen layers overlap: [${GR[yR-1].wy}, ${GR[yR-1].ey}) and [${GR[yR].wy}, ${GR[yR].ey})`)
+           if (Qr[Zr].nZ < Qr[Zr - 1].eZ) throw new Error(`Custom world-gen layers overlap: [${Qr[Zr-1].nZ}, ${Qr[Zr-1].eZ}) and [${Qr[Zr].nZ}, ${Qr[Zr].eZ})`)
```

#### 982. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12323` → after: `L12323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12323) · [Before (L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12323)

```diff
-         if (GR >= tR.wy && GR < tR.ey) return uR.getChunk(RR, JR, GR - tR.Ly, yR);
+         if (Qr >= Wr.nZ && Qr < Wr.eZ) return ar.getChunk(rr, Sr, Qr - Wr.KZ, Zr);
```

#### 983. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12341-L12342` → after: `L12341-L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12341-L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12341-L12342) · [Before (L12341-L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12341-L12342)

```diff
-     if (RR.wy >= RR.ey) throw new Error(`Custom world-gen layer has minY (${RR.wy}) >= maxY (${RR.ey})`);
-     if (RR.wy % BJ.A !== 0 || RR.ey % BJ.A !== 0 || RR.Ly % BJ.A !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${BJ.A}); got minY=${RR.wy}, maxY=${RR.ey}, groundY=${RR.Ly}`);
+     if (rr.nZ >= rr.eZ) throw new Error(`Custom world-gen layer has minY (${rr.nZ}) >= maxY (${rr.eZ})`);
+     if (rr.nZ % TS.y !== 0 || rr.eZ % TS.y !== 0 || rr.KZ % TS.y !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${TS.y}); got minY=${rr.nZ}, maxY=${rr.eZ}, groundY=${rr.KZ}`);
```

#### 984. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12344-L12347` → after: `L12344-L12347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12344-L12347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12344-L12347) · [Before (L12344-L12347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12344-L12347)

```diff
-         if (void 0 === (0, BJ.F)(RR.Ay, JR)) throw new Error(`Custom world-gen caves lavaPitBlock "${RR.Ay}" not found in blockMetadata`);
-         if (RR.Cy)
-           for (const GR of RR.Cy) gJ(GR, JR)
-       }(RR.Uy, JR), 0 === RR.oy.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, TS.F)(rr.vZ, Sr)) throw new Error(`Custom world-gen caves lavaPitBlock "${rr.vZ}" not found in blockMetadata`);
+         if (rr.OZ)
+           for (const Qr of rr.OZ) LS(Qr, Sr)
+       }(rr.BZ, Sr), 0 === rr.AZ.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 985. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12349` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12349) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12349)

```diff
-     for (const yR of RR.oy) OJ(yR, JR), GR += yR.frequency;
+     for (const Zr of rr.AZ) PS(Zr, Sr), Qr += Zr.frequency;
```

#### 986. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12351` → after: `L12351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12351) · [Before (L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12351)

```diff
-     for (const yR of RR.jy) xJ(yR, JR)
+     for (const Zr of rr.oZ) HS(Zr, Sr)
```

#### 987. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12357-L12359` → after: `L12357-L12359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12357-L12359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12357-L12359) · [Before (L12357-L12359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12357-L12359)

```diff
-       My: yR,
-       By: tR,
-       ly: uR
+       lZ: Zr,
+       XZ: Wr,
+       PZ: ar
```

#### 988. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12361-L12362` → after: `L12361-L12362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12361-L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12361-L12362) · [Before (L12361-L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12361-L12362)

```diff
-     if (void 0 === (0, BJ.F)(GR, JR)) throw new Error(`Custom world-gen cave decoration blockName "${GR}" not found in blockMetadata`);
-     if (!yR && !tR && !uR) throw new Error(`Custom world-gen cave decoration "${GR}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, TS.F)(Qr, Sr)) throw new Error(`Custom world-gen cave decoration blockName "${Qr}" not found in blockMetadata`);
+     if (!Zr && !Wr && !ar) throw new Error(`Custom world-gen cave decoration "${Qr}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 989. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12365-L12366` → after: `L12365-L12366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12365-L12366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12365-L12366) · [Before (L12365-L12366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12365-L12366)

```diff
-     if (uR && bJ(GR, "meta|rot1|top", JR), vJ(RR.py, GR, "py"), vJ(RR.gy, GR, "gy"), !Number.isInteger(RR.vy) || RR.vy < 0) throw new Error(`Custom world-gen cave decoration "${GR}" minPlacements must be a non-negative integer, got ${RR.vy}`);
-     if (!(0, BJ.I)(RR.Oy) && (vJ(RR.Oy.Ny, GR, "depthRamp.deepClusterChance"), RR.Oy.Dy <= RR.Oy.Hy)) throw new Error(`Custom world-gen cave decoration "${GR}" deepY must be strictly smaller than shallowY, but ${RR.Oy.Dy} <= ${RR.Oy.Hy} `)
+     if (ar && lS(Qr, "meta|rot1|top", Sr), XS(rr.HZ, Qr, "HZ"), XS(rr.qZ, Qr, "qZ"), !Number.isInteger(rr.RZ) || rr.RZ < 0) throw new Error(`Custom world-gen cave decoration "${Qr}" minPlacements must be a non-negative integer, got ${rr.RZ}`);
+     if (!(0, TS.L)(rr.gZ) && (XS(rr.gZ.MZ, Qr, "depthRamp.deepClusterChance"), rr.gZ.GZ <= rr.gZ.kZ)) throw new Error(`Custom world-gen cave decoration "${Qr}" deepY must be strictly smaller than shallowY, but ${rr.gZ.GZ} <= ${rr.gZ.kZ} `)
```

#### 990. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12370-L12371` → after: `L12370-L12371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12370-L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12370-L12371) · [Before (L12370-L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12370-L12371)

```diff
-     const yR = `${RR}|${JR}`;
-     if (void 0 === (0, BJ.F)(yR, GR)) throw new Error(`Custom world-gen cave decoration "${RR}" is missing directional variant "${yR}" required for wall/ceiling anchoring`)
+     const Zr = `${rr}|${Sr}`;
+     if (void 0 === (0, TS.F)(Zr, Qr)) throw new Error(`Custom world-gen cave decoration "${rr}" is missing directional variant "${Zr}" required for wall/ceiling anchoring`)
```

#### 991. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12375` → after: `L12375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12375) · [Before (L12375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12375)

```diff
-     if (RR < 0 || RR > 1) throw new Error(`Custom world-gen cave decoration "${JR}" ${GR} must be in [0, 1], got ${RR}`)
+     if (rr < 0 || rr > 1) throw new Error(`Custom world-gen cave decoration "${Sr}" ${Qr} must be in [0, 1], got ${rr}`)
```

#### 992. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12379-L12385` → after: `L12379-L12385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12379-L12385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12379-L12385) · [Before (L12379-L12385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12379-L12385)

```diff
-     if (RR.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${RR.frequency}`);
-     if (void 0 === (0, BJ.F)(RR.Iy, JR)) throw new Error(`Custom world-gen biome topsoilBlock "${RR.Iy}" not found in blockMetadata`);
-     if (void 0 === (0, BJ.F)(RR.my, JR)) throw new Error(`Custom world-gen biome lowsoilBlock "${RR.my}" not found in blockMetadata`);
-     if (0 === RR.zy.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const GR of RR.zy) {
-       if (GR.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${GR.frequency}`);
-       if (void 0 === (0, BJ.F)(GR.blockName, JR)) throw new Error(`Custom world-gen biome stoneType blockName "${GR.blockName}" not found in blockMetadata`)
+     if (rr.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${rr.frequency}`);
+     if (void 0 === (0, TS.F)(rr.iZ, Sr)) throw new Error(`Custom world-gen biome topsoilBlock "${rr.iZ}" not found in blockMetadata`);
+     if (void 0 === (0, TS.F)(rr.wZ, Sr)) throw new Error(`Custom world-gen biome lowsoilBlock "${rr.wZ}" not found in blockMetadata`);
+     if (0 === rr.cZ.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const Qr of rr.cZ) {
+       if (Qr.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${Qr.frequency}`);
+       if (void 0 === (0, TS.F)(Qr.blockName, Sr)) throw new Error(`Custom world-gen biome stoneType blockName "${Qr.blockName}" not found in blockMetadata`)
```

#### 993. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12390-L12394` → after: `L12390-L12394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12390-L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12390-L12394) · [Before (L12390-L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12390-L12394)

```diff
-     if (void 0 === (0, BJ.F)(RR.blockName, JR)) throw new Error(`Custom world-gen ore blockName "${RR.blockName}" not found in blockMetadata`);
-     if (RR.radius < 0) throw new Error(`Custom world-gen ore "${RR.blockName}" radius must be >= 0, got ${RR.radius}`);
-     if (RR.Yy <= 0) throw new Error(`Custom world-gen ore "${RR.blockName}" minDistBetweenDeposits must be > 0, got ${RR.Yy}`);
-     if (RR.wy > RR.ey) throw new Error(`Custom world-gen ore "${RR.blockName}" minY (${RR.wy}) must be <= maxY (${RR.ey})`);
-     if (RR.ky < 0 || RR.ky > 1) throw new Error(`Custom world-gen ore "${RR.blockName}" spawnChance must be in [0, 1], got ${RR.ky}`)
+     if (void 0 === (0, TS.F)(rr.blockName, Sr)) throw new Error(`Custom world-gen ore blockName "${rr.blockName}" not found in blockMetadata`);
+     if (rr.radius < 0) throw new Error(`Custom world-gen ore "${rr.blockName}" radius must be >= 0, got ${rr.radius}`);
+     if (rr.JZ <= 0) throw new Error(`Custom world-gen ore "${rr.blockName}" minDistBetweenDeposits must be > 0, got ${rr.JZ}`);
+     if (rr.nZ > rr.eZ) throw new Error(`Custom world-gen ore "${rr.blockName}" minY (${rr.nZ}) must be <= maxY (${rr.eZ})`);
+     if (rr.DZ < 0 || rr.DZ > 1) throw new Error(`Custom world-gen ore "${rr.blockName}" spawnChance must be in [0, 1], got ${rr.DZ}`)
```

#### 994. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12400-L12403` → after: `L12400-L12403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12400-L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12400-L12403) · [Before (L12400-L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12400-L12403)

```diff
-       Yy: 10,
-       wy: -98,
-       ey: -78,
-       ky: .4
+       JZ: 10,
+       nZ: -98,
+       eZ: -78,
+       DZ: .4
```

#### 995. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12408-L12411` → after: `L12408-L12411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12408-L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12408-L12411) · [Before (L12408-L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12408-L12411)

```diff
-       Yy: 6,
-       wy: -40,
-       ey: 20,
-       ky: .6
+       JZ: 6,
+       nZ: -40,
+       eZ: 20,
+       DZ: .6
```

#### 996. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12415-L12418` → after: `L12415-L12418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12415-L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12415-L12418) · [Before (L12415-L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12415-L12418)

```diff
-       Yy: 10,
-       wy: -75,
-       ey: -55,
-       ky: .4
+       JZ: 10,
+       nZ: -75,
+       eZ: -55,
+       DZ: .4
```

#### 997. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12422` → after: `L12422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12422) · [Before (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12422)

```diff
-       hy: null
+       rW: null
```

#### 998. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12425` → after: `L12425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12425) · [Before (L12425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12425)

```diff
-     [NJ]: () => GR(41208).c
+     [qS]: () => Qr(41589).b
```

#### 999. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12449` → after: `L12449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12449) · [Before (L12449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12449)

```diff
-       if (!YJ.includes(JR)) throw new Error(`Invalid port offset "${RR}". Must be one of: ${YJ.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!oS.includes(Sr)) throw new Error(`Invalid port offset "${rr}". Must be one of: ${oS.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1000. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12527` → after: `L12527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12527) · [Before (L12527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12527)

```diff
-     const JR = jJ() ? TJ : sJ;
+     const Sr = wS() ? dS : sS;
```

#### 1001. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12936` → after: `L12936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12936) · [Before (L12936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12936)

```diff
-     if (tG.has(RR)) throw new Error(`Duplicate leave code: ${RR}`);
+     if (WQ.has(rr)) throw new Error(`Duplicate leave code: ${rr}`);
```

#### 1002. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12959` → after: `L12959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12959) · [Before (L12959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12959)

```diff
-     return RR === JR ? uR + yR * yR <= RR * RR : RR > JR ? Math.abs(yR) <= JR && uR + yR * yR <= RR * RR : uR <= RR * RR && uR + yR * yR <= JR * JR
+     return rr === Sr ? ar + Zr * Zr <= rr * rr : rr > Sr ? Math.abs(Zr) <= Sr && ar + Zr * Zr <= rr * rr : ar <= rr * rr && ar + Zr * Zr <= Sr * Sr
```

#### 1003. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12977` → after: `L12977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12977) · [Before (L12977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12977)

```diff
-     const RR = Promise.all([GR.e(85), GR.e(89), GR.e(86), GR.e(87), GR.e(88), GR.e(82)]).then((() => GR(41312))).then((RR => {
+     const rr = Promise.all([Qr.e(85), Qr.e(89), Qr.e(86), Qr.e(87), Qr.e(88), Qr.e(82)]).then((() => Qr(41692))).then((rr => {
```

#### 1004. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13020` → after: `L13020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13020) · [Before (L13020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13020)

```diff
-               reason: `its memory stats trapped (${String(JR)})`
+               reason: `its memory stats trapped (${String(Sr)})`
```

#### 1005. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13026` → after: `L13026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13026) · [Before (L13026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13026)

```diff
-               const GR = iR.QL();
+               const Qr = fr.uh();
```

#### 1006. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13029` → after: `L13029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13029) · [Before (L13029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13029)

```diff
-                 return String.fromCharCode(...new Uint8Array(OR().buffer, RR.FL(), 32))
+                 return String.fromCharCode(...new Uint8Array(Pr().buffer, rr.rz(), 32))
```

#### 1007. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13042` → after: `L13042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13042) · [Before (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13042)

```diff
-               ZR = LR.LK, KR = new Uint16Array(ZR * ZR * ZR),
+               jr = hr.hx, xr = new Uint16Array(jr * jr * jr),
```

#### 1008. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13051` → after: `L13051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13051) · [Before (L13051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13051)

```diff
-                           reason: `the memory ceiling was not set (${String(yR)})`
+                           reason: `the memory ceiling was not set (${String(Zr)})`
```

#### 1009. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13055` → after: `L13055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13055) · [Before (L13055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13055)

```diff
-                         iR = new(MJ().YL)
+                         fr = new(BS().dh)
```

#### 1010. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13059` → after: `L13059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13059) · [Before (L13059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13059)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(yR)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(Zr)})`
```

#### 1011. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13069` → after: `L13069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13069) · [Before (L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13069)

```diff
-                           reason: `${VG} (${String(JR)})`
+                           reason: `${pQ} (${String(Sr)})`
```

#### 1012. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13074` → after: `L13074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13074) · [Before (L13074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13074)

```diff
-                       reason: `wasm did not start (${bR()})`
+                       reason: `wasm did not start (${lr()})`
```

#### 1013. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13078` → after: `L13078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13078) · [Before (L13078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13078)

```diff
-                     reason: `chunk size ${ZR} is not the encoder's 32`
+                     reason: `chunk size ${jr} is not the encoder's 32`
```

#### 1014. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13089` → after: `L13089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13089) · [Before (L13089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13089)

```diff
-                 fR = new lJ(ZR, qR.blockMetadata, qR.itemMetadata, RR.uy, !1, RR.Zy, RR.iy, yR, aR)
+                 Er = new vS(jr, Ir.blockMetadata, Ir.itemMetadata, rr.NZ, !1, rr.UZ, rr.hZ, Zr, tr)
```

#### 1015. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13114` → after: `L13114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13114) · [Before (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13114)

```diff
-                     const GR = RR.TL(),
+                     const Qr = rr.Sz(),
```

#### 1016. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13116` → after: `L13116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13116) · [Before (L13116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13116)

```diff
-                       tR = JR.byteLength >= yR ? JR : new ArrayBuffer(yR),
+                       Wr = Sr.byteLength >= Zr ? Sr : new ArrayBuffer(Zr),
```

#### 1017. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13119` → after: `L13119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13119) · [Before (L13119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13119)

```diff
-                     return ZR.set(new Uint8Array(uR, RR.FL(), zJ)), ZR.set(new Uint8Array(uR, RR.sL(), GR), zJ), {
+                     return jr.set(new Uint8Array(ar, rr.rz(), VS)), jr.set(new Uint8Array(ar, rr.Qz(), Qr), VS), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   37561: (RR, JR, GR) => {
+   37945: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6)

```diff
-       b: () => tR
+       d: () => Wr
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L44)

```diff
-           if (JR > 0 && GR.searchParams.set("cache-bust", `${Date.now()}-${JR}`), await this.fetchWhole(GR, RR)) return this.scriptUrl = GR, !0;
+           if (Sr > 0 && Qr.searchParams.set("cache-bust", `${Date.now()}-${Sr}`), await this.fetchWhole(Qr, rr)) return this.scriptUrl = Qr, !0;
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L86)

```diff
-   54695: (RR, JR, GR) => {
+   55186: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L94)

```diff
-     const yR = new(GR(37561).b)(new URL(GR.p + GR.u(83), GR.b), {
+     const Zr = new(Qr(37945).d)(new URL(Qr.p + Qr.u(83), Qr.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/main.js` (1855 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see 4udp6d.main.2845de07.js.LICENSE.txt */
+ /*! For license information please see fl4vv.main.bd3c59ce.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3)

```diff
-     var RR = [, , , , , , , , , , , , , , (RR, JR, GR) => {
+     var rr = [, , , , , , , , , , , , , (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L5-L12` → after: `L5-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5-L15) · [Before (L5-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5-L12)

```diff
-             D: () => gR,
-             G: () => zR,
-             I: () => XR,
-             M: () => wR,
-             P: () => CR,
-             R: () => NR,
-             S: () => VR,
-             W: () => oR,
+             $: () => nr,
+             A: () => Nr,
+             E: () => xr,
+             H: () => Hr,
+             J: () => Lr,
+             N: () => Vr,
+             O: () => yr,
+             Q: () => mr,
+             U: () => Kr,
+             V: () => qr,
+             X: () => pr,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L16-L17` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L18-L19) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L16-L17)

```diff
-             d: () => LR,
-             db: () => fR,
+             cb: () => er,
+             f: () => hr,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L22)

```diff
-             k: () => qR,
+             kb: () => Xr,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L24)

```diff
-             o: () => UR,
+             ob: () => Zr,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L26-L29` → after: `L26-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L26-L29) · [Before (L26-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L26-L29)

```diff
-             s: () => tR,
-             u: () => rR,
-             x: () => KR,
-             z: () => xR
+             r: () => fr,
+             t: () => Yr,
+             w: () => ir,
+             x: () => Wr
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L141)

```diff
-         }, , , , (RR, JR, GR) => {
+         }, , , , , , (rr, Sr, Qr) => {
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L145-L146` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L145-L146) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L145-L146)

```diff
-           var yR = GR(25),
-             tR = GR(801);
+           var Zr = Qr(26),
+             Wr = Qr(807);
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L168)

```diff
-             (yR.d.set({
+             (Zr.c.set({
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L174-L176` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L174-L175) · [Before (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L174-L176)

```diff
-             d: () => WJ,
-             h: () => XJ,
-             j: () => CJ,
+             c: () => nS,
+             g: () => yS,
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L178` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L177-L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L178)

```diff
-             o: () => MJ
+             m: () => eS,
+             n: () => BS
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L180-L185` → after: `L180-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L180-L185) · [Before (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L180-L185)

```diff
-           var yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR, vR, OR, xR, NR, DR, HR, oR, cR, PR, IR, mR = GR(32),
-             zR = GR(359),
-             SR = GR(377),
-             jR = GR(46),
-             dR = GR(62),
-             ER = GR(41),
+           var Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr, Hr, qr, Rr, gr, Cr, Mr, Gr, kr, Ar = Qr(34),
+             Vr = Qr(360),
+             ir = Qr(379),
+             wr = Qr(43),
+             cr = Qr(67),
+             Fr = Qr(38),
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L187-L189` → after: `L187-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L187-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L187-L189) · [Before (L187-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L187-L189)

```diff
-             kR = GR(66),
-             QR = GR(83),
-             FR = GR(103),
+             br = Qr(72),
+             Jr = Qr(92),
+             Dr = Qr(109),
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L191-L193` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L191-L193) · [Before (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L191-L193)

```diff
-             sR = GR(327),
-             hR = GR(334),
-             RJ = GR(342),
+             sr = Qr(335),
+             ur = Qr(338),
+             rS = Qr(345),
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L195-L201` → after: `L195-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L195-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L195-L201) · [Before (L195-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L195-L201)

```diff
-             GJ = GR(123),
-             yJ = GR(706),
-             tJ = GR(709),
-             uJ = GR(304),
-             ZJ = GR(773),
-             qJ = GR(775),
-             iJ = GR(781);
+             QS = Qr(127),
+             ZS = Qr(705),
+             WS = Qr(712),
+             aS = Qr(317),
+             jS = Qr(778),
+             IS = Qr(782),
+             fS = Qr(789);
```

#### 17. `bundles/bloxd.io/main.js` (Changed code · before: `L205-L211` → after: `L205-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L205-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L205-L211) · [Before (L205-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L205-L211)

```diff
-             if (yJ.e) return "webgl_holdback";
-             if (!0 === jR.i.getItem(GJ.J)) return "old_intel_driver";
-             if (yJ.f && !0 === jR.i.getItem(GJ.F)) return "intel_gen9";
-             if (tJ.G && (0, yJ.c)(jR.i.getItem(GJ.E))) return "gpu_class_webgl";
-             if (tJ.G && !0 === jR.i.getItem(GJ.P)) return "gpu_wasm_arm";
-             const RR = tJ.G ? null : (0, yJ.g)();
-             return 26 === RR && (0, yJ.j)((0, uJ.d)()) ? "safari_26" : 27 === RR && (0, yJ.m)((0, uJ.d)()) ? "safari_27" : (0, RJ.y)() ? "off_after_loss" : (0, sR.d)() ? "few_wasm_memories" : null
+             if (ZS.h) return "webgl_holdback";
+             if (!0 === wr.j.getItem(QS.F)) return "old_intel_driver";
+             if (ZS.k && !0 === wr.j.getItem(QS.D)) return "intel_gen9";
+             if (WS.I && (0, ZS.d)(wr.j.getItem(QS.A))) return "gpu_class_webgl";
+             if (WS.I && !0 === wr.j.getItem(QS.L)) return "gpu_wasm_arm";
+             const rr = WS.I ? null : (0, ZS.n)();
+             return 26 === rr && (0, ZS.o)((0, aS.c)()) ? "safari_26" : 27 === rr && (0, ZS.p)((0, aS.c)()) ? "safari_27" : (0, rS.y)() ? "off_after_loss" : (0, sr.i)() ? "few_wasm_memories" : null
```

#### 18. `bundles/bloxd.io/main.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L215)

```diff
-             return yJ.n && null === VJ()
+             return ZS.r && null === pS()
```

#### 19. `bundles/bloxd.io/main.js` (Changed code · before: `L218-L219` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L218-L219) · [Before (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L218-L219)

```diff
-           const rJ = yJ.n && null === wJ;
-           let eJ = null === jR.i.getItem(zR.jc);
+           const NS = ZS.r && null === mS;
+           let US = null === wr.j.getItem(Vr.mc);
```

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L232-L233` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L232-L233) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L232-L233)

```diff
-             soundVolume: (0, dR.e)(),
-             musicVolume: null !== (yR = jR.i.getItem("musicVol")) && void 0 !== yR ? yR : .5,
+             soundVolume: (0, cr.d)(),
+             musicVolume: null !== (Zr = wr.j.getItem("musicVol")) && void 0 !== Zr ? Zr : .5,
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L249-L250` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L249-L250) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L249-L250)

```diff
-               const RR = jR.i.getItem("showDistantNametags");
-               return "boolean" === typeof RR ? RR : null
+               const rr = wr.j.getItem("showDistantNametags");
+               return "boolean" === typeof rr ? rr : null
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L264-L265` → after: `L264-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L264-L265) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L264-L265)

```diff
-             showDebugOverlay: null !== (tR = jR.i.getItem("showDebugOverlay")) && void 0 !== tR && tR,
-             enabledDebugFeatures: null !== (uR = jR.i.getItem("enabledDebugFeatures")) && void 0 !== uR ? uR : {},
+             showDebugOverlay: null !== (Wr = wr.j.getItem("showDebugOverlay")) && void 0 !== Wr && Wr,
+             enabledDebugFeatures: null !== (ar = wr.j.getItem("enabledDebugFeatures")) && void 0 !== ar ? ar : {},
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L275-L278` → after: `L275-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L275-L278) · [Before (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L275-L278)

```diff
-               useProfanityFilter: null === (ZR = jR.i.getItem("UseProfanityFilter")) || void 0 === ZR || ZR,
-               showChat: null === (qR = jR.i.getItem("showChat")) || void 0 === qR || qR,
-               showNewItemIndicator: null === (iR = jR.i.getItem("showNewItemIndicator")) || void 0 === iR || iR,
-               showFriendOnlineToasts: null === (fR = jR.i.getItem("showFriendOnlineToasts")) || void 0 === fR || fR,
+               useProfanityFilter: null === (jr = wr.j.getItem("UseProfanityFilter")) || void 0 === jr || jr,
+               showChat: null === (Ir = wr.j.getItem("showChat")) || void 0 === Ir || Ir,
+               showNewItemIndicator: null === (fr = wr.j.getItem("showNewItemIndicator")) || void 0 === fr || fr,
+               showFriendOnlineToasts: null === (Er = wr.j.getItem("showFriendOnlineToasts")) || void 0 === Er || Er,
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L281-L282` → after: `L281-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L281-L282) · [Before (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L281-L282)

```diff
-                 const JR = jR.i.getItem("friendRequestNotifications");
-                 return null !== (RR = ZJ.d.find((RR => RR === JR))) && void 0 !== RR ? RR : "toastAndTray"
+                 const Sr = wr.j.getItem("friendRequestNotifications");
+                 return null !== (rr = jS.d.find((rr => rr === Sr))) && void 0 !== rr ? rr : "toastAndTray"
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L284-L302` → after: `L284-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L284-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L284-L302) · [Before (L284-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L284-L302)

```diff
-               touchscreenSensitivity: null !== (VR = jR.i.getItem("touchscreenSensitivity")) && void 0 !== VR ? VR : 150,
-               mouseSensitivity: null !== (KR = jR.i.getItem("mouseSensitivity")) && void 0 !== KR ? KR : 15,
-               showCoordinates: null !== (wR = jR.i.getItem("showCoordinates")) && void 0 !== wR && wR,
-               showChunkCoordinates: null !== (rR = jR.i.getItem("showChunkCoordinates")) && void 0 !== rR && rR,
-               showFPS: null !== (eR = jR.i.getItem("showFPS")) && void 0 !== eR && eR,
-               disableBunnyHopping: null !== (aR = jR.i.getItem("disableBunnyHopping")) && void 0 !== aR && aR,
-               disableTexAtlas: null !== (LR = jR.i.getItem("disableTexAtlas")) && void 0 !== LR && LR,
-               disableFullscreen: null !== (nR = jR.i.getItem("disableFullscreen")) && void 0 !== nR && nR,
-               ezBridging: null === (UR = jR.i.getItem("ezBridging")) || void 0 === UR || UR,
-               ezTowering: null === (WR = jR.i.getItem("ezTowering")) || void 0 === WR || WR,
-               crouchIsToggle: null !== (AR = jR.i.getItem("crouchIsToggle")) && void 0 !== AR && AR,
-               vibration: null === (CR = jR.i.getItem("vibration")) || void 0 === CR || CR,
-               hideUiIsToggle: null !== (XR = jR.i.getItem("hideUiIsToggle")) && void 0 !== XR && XR,
-               enableLighting: null !== (MR = jR.i.getItem("enableLighting")) && void 0 !== MR && MR,
-               showFog: null !== (BR = jR.i.getItem("showFog")) && void 0 !== BR && BR,
-               fogChunkDistance: null !== (lR = jR.i.getItem("fogChunkDistance")) && void 0 !== lR ? lR : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (pr = wr.j.getItem("touchscreenSensitivity")) && void 0 !== pr ? pr : 150,
+               mouseSensitivity: null !== (xr = wr.j.getItem("mouseSensitivity")) && void 0 !== xr ? xr : 15,
+               showCoordinates: null !== (mr = wr.j.getItem("showCoordinates")) && void 0 !== mr && mr,
+               showChunkCoordinates: null !== (Nr = wr.j.getItem("showChunkCoordinates")) && void 0 !== Nr && Nr,
+               showFPS: null !== (Ur = wr.j.getItem("showFPS")) && void 0 !== Ur && Ur,
+               disableBunnyHopping: null !== (tr = wr.j.getItem("disableBunnyHopping")) && void 0 !== tr && tr,
+               disableTexAtlas: null !== (hr = wr.j.getItem("disableTexAtlas")) && void 0 !== hr && hr,
+               disableFullscreen: null !== (zr = wr.j.getItem("disableFullscreen")) && void 0 !== zr && zr,
+               ezBridging: null === (Yr = wr.j.getItem("ezBridging")) || void 0 === Yr || Yr,
+               ezTowering: null === (nr = wr.j.getItem("ezTowering")) || void 0 === nr || nr,
+               crouchIsToggle: null !== (er = wr.j.getItem("crouchIsToggle")) && void 0 !== er && er,
+               vibration: null === (Kr = wr.j.getItem("vibration")) || void 0 === Kr || Kr,
+               hideUiIsToggle: null !== (yr = wr.j.getItem("hideUiIsToggle")) && void 0 !== yr && yr,
+               enableLighting: null !== (Br = wr.j.getItem("enableLighting")) && void 0 !== Br && Br,
+               showFog: null !== (Tr = wr.j.getItem("showFog")) && void 0 !== Tr && Tr,
+               fogChunkDistance: null !== (vr = wr.j.getItem("fogChunkDistance")) && void 0 !== vr ? vr : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L306-L316` → after: `L306-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L306-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L306-L316) · [Before (L306-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L306-L316)

```diff
-               useWebGpu: null !== (vR = jR.i.getItem(zR.jc)) && void 0 !== vR ? vR : rJ,
-               pixelScale: null !== (OR = jR.i.getItem("pixelScale")) && void 0 !== OR ? OR : (0, FR.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (xR = jR.i.getItem("pixelSmoothing")) || void 0 === xR || xR,
-               showChunkBorders: null !== (NR = jR.i.getItem("showChunkBorders")) && void 0 !== NR && NR,
-               showWeaponRaycasts: null !== (DR = jR.i.getItem("showWeaponRaycasts")) && void 0 !== DR && DR,
-               chunkFadeIn: null === (HR = jR.i.getItem("chunkFadeIn")) || void 0 === HR || HR,
-               enableClipping: null !== (oR = jR.i.getItem("enableClipping")) && void 0 !== oR && oR,
-               clipDurationSeconds: null !== (cR = jR.i.getItem("clipDurationSeconds")) && void 0 !== cR ? cR : qJ.d,
-               showSoundDirections: null !== (PR = jR.i.getItem("showSoundDirections")) && void 0 !== PR && PR,
-               showTeamSymbols: null !== (IR = jR.i.getItem("showTeamSymbols")) && void 0 !== IR && IR,
-               ...(0, iJ.f)()
+               useWebGpu: null !== (Xr = wr.j.getItem(Vr.mc)) && void 0 !== Xr ? Xr : NS,
+               pixelScale: null !== (Pr = wr.j.getItem("pixelScale")) && void 0 !== Pr ? Pr : (0, Dr.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (Hr = wr.j.getItem("pixelSmoothing")) || void 0 === Hr || Hr,
+               showChunkBorders: null !== (qr = wr.j.getItem("showChunkBorders")) && void 0 !== qr && qr,
+               showWeaponRaycasts: null !== (Rr = wr.j.getItem("showWeaponRaycasts")) && void 0 !== Rr && Rr,
+               chunkFadeIn: null === (gr = wr.j.getItem("chunkFadeIn")) || void 0 === gr || gr,
+               enableClipping: null !== (Cr = wr.j.getItem("enableClipping")) && void 0 !== Cr && Cr,
+               clipDurationSeconds: null !== (Mr = wr.j.getItem("clipDurationSeconds")) && void 0 !== Mr ? Mr : IS.e,
+               showSoundDirections: null !== (Gr = wr.j.getItem("showSoundDirections")) && void 0 !== Gr && Gr,
+               showTeamSymbols: null !== (kr = wr.j.getItem("showTeamSymbols")) && void 0 !== kr && kr,
+               ...(0, fS.i)()
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L323)

```diff
-             const GR = null !== (JR = jR.i.getItem(hR.b)) && void 0 !== JR ? JR : (0, TR.h)();
+             const Qr = null !== (Sr = wr.j.getItem(ur.d)) && void 0 !== Sr ? Sr : (0, dr.j)();
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L333)

```diff
-             return null !== jR.i.getItem(hR.b)
+             return null !== wr.j.getItem(ur.d)
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L339)

```diff
-               for (const JR in RR) mR.n.JK(`appManagerUpdated|${JR}`, RR[JR])
+               for (const Sr in rr) Ar.i.Jp(`appManagerUpdated|${Sr}`, rr[Sr])
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L353` → after: `L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L353) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L353)

```diff
-               for (const uR in RR)(0, SR.fe)(aJ[uR], RR[uR]) || (JR[uR] = RR[uR], GR = !0);
+               for (const ar in rr)(0, ir.Yd)(tS[ar], rr[ar]) || (Sr[ar] = rr[ar], Qr = !0);
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L360)

```diff
-                 jR.i.setItem("UseProfanityFilter", RR.useProfanityFilter), jR.i.setItem("showChat", RR.showChat), jR.i.setItem("showNewItemIndicator", RR.showNewItemIndicator), jR.i.setItem("showFriendOnlineToasts", RR.showFriendOnlineToasts), jR.i.setItem("friendRequestNotificat … [truncated]
+                 wr.j.setItem("UseProfanityFilter", rr.useProfanityFilter), wr.j.setItem("showChat", rr.showChat), wr.j.setItem("showNewItemIndicator", rr.showNewItemIndicator), wr.j.setItem("showFriendOnlineToasts", rr.showFriendOnlineToasts), wr.j.setItem("friendRequestNotificat … [truncated]
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L362)

```diff
-               void 0 !== JR.soundVolume && jR.i.setItem("soundVol", JR.soundVolume), void 0 !== JR.musicVolume && jR.i.setItem("musicVol", JR.musicVolume), void 0 !== JR.showDistantNametags && jR.i.setItem("showDistantNametags", JR.showDistantNametags), void 0 !== JR.showDebugOve … [truncated]
+               void 0 !== Sr.soundVolume && wr.j.setItem("soundVol", Sr.soundVolume), void 0 !== Sr.musicVolume && wr.j.setItem("musicVol", Sr.musicVolume), void 0 !== Sr.showDistantNametags && wr.j.setItem("showDistantNametags", Sr.showDistantNametags), void 0 !== Sr.showDebugOve … [truncated]
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L374` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L374) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L374)

```diff
-                 openEverythingMenuName: zR.o.SETTINGS,
+                 openEverythingMenuName: Vr.q.SETTINGS,
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L379-L380` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L379-L380) · [Before (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L379-L380)

```diff
-               const JR = nJ() ? null : (0, TR.d)(RR);
-               return null !== JR && void 0 !== JR ? JR : aJ.clientEscMenuOptions.antiAliasing
+               const Sr = zS() ? null : (0, dr.e)(rr);
+               return null !== Sr && void 0 !== Sr ? Sr : tS.clientEscMenuOptions.antiAliasing
```

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L383-L384` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L383-L384) · [Before (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L383-L384)

```diff
-               (0, TR.e)(RR);
-               const JR = nJ() ? aJ.clientEscMenuOptions.antiAliasing : (0, TR.h)();
+               (0, dr.g)(rr);
+               const Sr = zS() ? tS.clientEscMenuOptions.antiAliasing : (0, dr.j)();
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L408)

```diff
-               let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RJ.k)(),
+               let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, rS.o)(),
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L411-L412` → after: `L411-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L411-L412) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L411-L412)

```diff
-               const yR = (0, RJ.u)(RR, JR, GR);
-               return (0, RJ.y)() && !0 === jR.i.getItem(zR.jc) && jR.i.removeItem(zR.jc), yR
+               const Zr = (0, rS.w)(rr, Sr, Qr);
+               return (0, rS.y)() && !0 === wr.j.getItem(Vr.mc) && wr.j.removeItem(Vr.mc), Zr
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L415)

```diff
-               (0, JJ.b)(RR) && (0, RJ.y)() && eJ && aJ.clientEscMenuOptions.useWebGpu && (wJ = VJ(), this.setEscMenuOptionsUnstored({
+               (0, SS.c)(rr) && (0, rS.y)() && US && tS.clientEscMenuOptions.useWebGpu && (mS = pS(), this.setEscMenuOptionsUnstored({
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L423)

```diff
-               return (0, RJ.F)() || !0 === jR.i.getItem(GJ.J) || (0, sR.d)()
+               return (0, rS.C)() || !0 === wr.j.getItem(QS.F) || (0, sr.i)()
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L429)

```diff
-               return eJ ? wJ : null
+               return US ? mS : null
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L432)

```diff
-               !0 === jR.i.getItem(GJ.J) && (0, FR.hasUsableWebGpuAdapter)()
+               !0 === wr.j.getItem(QS.F) && (0, Dr.hasUsableWebGpuAdapter)()
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L476)

```diff
-         }, , , , , , , (RR, JR, GR) => {
+         }, , , , , , , , (rr, Sr, Qr) => {
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L478` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L478-L479) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L478)

```diff
-             e: () => qR,
+             c: () => Ir,
+             g: () => ar,
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L480-L482` → after: `L481-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L481-L482) · [Before (L480-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L480-L482)

```diff
-             l: () => VR,
-             n: () => fR,
-             q: () => KR
+             i: () => Er,
+             j: () => xr
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L484)

```diff
-           var yR = GR(41),
+           var Zr = Qr(38),
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L494)

```diff
-               super(...arguments), this.KU = !1, this.rU = [], this.aU = {}
+               super(...arguments), this.rY = !1, this.ZY = [], this.aY = {}
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L498)

```diff
-               this.KU || !GR ? this.emit(RR, JR) : this.rU.push({
+               this.rY || !Qr ? this.emit(rr, Sr) : this.ZY.push({
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L505-L506` → after: `L505-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L505-L506) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L505-L506)

```diff
-               const yR = this.WU(RR, JR);
-               return this.on(RR, yR), this.aU[RR] = (null !== (GR = this.aU[RR]) && void 0 !== GR ? GR : 0) + 1, {
+               const Zr = this.fY(rr, Sr);
+               return this.on(rr, Zr), this.aY[rr] = (null !== (Qr = this.aY[rr]) && void 0 !== Qr ? Qr : 0) + 1, {
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L515` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L515) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L515)

```diff
-               const GR = this.WU(RR, JR);
+               const Qr = this.fY(rr, Sr);
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L524-L525` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L524-L525) · [Before (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L524-L525)

```diff
-                 GR = this.aU[JR];
-               GR > 1 ? this.aU[JR] = GR - 1 : 1 === GR && delete this.aU[JR]
+                 Qr = this.aY[Sr];
+               Qr > 1 ? this.aY[Sr] = Qr - 1 : 1 === Qr && delete this.aY[Sr]
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L532)

```diff
-                   console.error(`Error in PubSub listener for event ${RR}:`, yR)
+                   console.error(`Error in PubSub listener for event ${rr}:`, Zr)
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L537)

```diff
-               this.KU = RR, RR && (this.rU.forEach((RR => {
+               this.rY = rr, rr && (this.ZY.forEach((rr => {
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L542-L543` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L542-L543) · [Before (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L542-L543)

```diff
-                 this.JK(JR, GR)
-               })), this.rU = [])
+                 this.Jp(Sr, Qr)
+               })), this.ZY = [])
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L546` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L546) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L546)

```diff
-               this.rU = []
+               this.ZY = []
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L552)

```diff
-             fR.vU(!0)
+             Er.pY(!0)
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L561)

```diff
-         }, , , , , , , , , RR => {
+         }, , , , rr => {
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L568)

```diff
-             this.iK = RR, this.context = JR, this.once = GR || !1
+             this.Wx = rr, this.context = Sr, this.once = Qr || !1
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L574-L575` → after: `L574-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L574-L575) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L574-L575)

```diff
-               iR = GR ? GR + JR : JR;
-             return RR._events[iR] ? RR._events[iR].iK ? RR._events[iR] = [RR._events[iR], qR] : RR._events[iR].push(qR) : (RR._events[iR] = qR, RR._eventsCount++), RR
+               fr = Qr ? Qr + Sr : Sr;
+             return rr._events[fr] ? rr._events[fr].Wx ? rr._events[fr] = [rr._events[fr], Ir] : rr._events[fr].push(Ir) : (rr._events[fr] = Ir, rr._eventsCount++), rr
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L579)

```diff
-             0 === --RR._eventsCount ? RR._events = new yR : delete RR._events[JR]
+             0 === --rr._eventsCount ? rr._events = new Zr : delete rr._events[Sr]
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L591)

```diff
-             var JR = GR ? GR + RR : RR,
+             var Sr = Qr ? Qr + rr : rr,
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L594-L595` → after: `L594-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L594-L595) · [Before (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L594-L595)

```diff
-             if (yR.iK) return [yR.iK];
-             for (var tR = 0, uR = yR.length, ZR = new Array(uR); tR < uR; tR++) ZR[tR] = yR[tR].iK;
+             if (Zr.Wx) return [Zr.Wx];
+             for (var Wr = 0, ar = Zr.length, jr = new Array(ar); Wr < ar; Wr++) jr[Wr] = Zr[Wr].Wx;
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L598` → after: `L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L598) · [Before (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L598)

```diff
-             var JR = GR ? GR + RR : RR,
+             var Sr = Qr ? Qr + rr : rr,
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L600)

```diff
-             return yR ? yR.iK ? 1 : yR.length : 0
+             return Zr ? Zr.Wx ? 1 : Zr.length : 0
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L602)

```diff
-             var qR = GR ? GR + RR : RR;
+             var Ir = Qr ? Qr + rr : rr;
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L606-L607` → after: `L606-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L606-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L606-L607) · [Before (L606-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L606-L607)

```diff
-             if (VR.iK) {
-               switch (VR.once && this.removeListener(RR, VR.iK, void 0, !0), KR) {
+             if (pr.Wx) {
+               switch (pr.once && this.removeListener(rr, pr.Wx, void 0, !0), xr) {
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L609)

```diff
-                   return VR.iK.call(VR.context), !0;
+                   return pr.Wx.call(pr.context), !0;
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L611` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L611) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L611)

```diff
-                   return VR.iK.call(VR.context, JR), !0;
+                   return pr.Wx.call(pr.context, Sr), !0;
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L613)

```diff
-                   return VR.iK.call(VR.context, JR, yR), !0;
+                   return pr.Wx.call(pr.context, Sr, Zr), !0;
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L615)

```diff
-                   return VR.iK.call(VR.context, JR, yR, tR), !0;
+                   return pr.Wx.call(pr.context, Sr, Zr, Wr), !0;
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L617)

```diff
-                   return VR.iK.call(VR.context, JR, yR, tR, uR), !0;
+                   return pr.Wx.call(pr.context, Sr, Zr, Wr, ar), !0;
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L619)

```diff
-                   return VR.iK.call(VR.context, JR, yR, tR, uR, ZR), !0
+                   return pr.Wx.call(pr.context, Sr, Zr, Wr, ar, jr), !0
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L622)

```diff
-               VR.iK.apply(VR.context, iR)
+               pr.Wx.apply(pr.context, fr)
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L625)

```diff
-               for (fR = 0; fR < rR; fR++) switch (VR[fR].once && this.removeListener(RR, VR[fR].iK, void 0, !0), KR) {
+               for (Er = 0; Er < Nr; Er++) switch (pr[Er].once && this.removeListener(rr, pr[Er].Wx, void 0, !0), xr) {
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L627)

```diff
-                   VR[fR].iK.call(VR[fR].context);
+                   pr[Er].Wx.call(pr[Er].context);
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L630)

```diff
-                   VR[fR].iK.call(VR[fR].context, JR);
+                   pr[Er].Wx.call(pr[Er].context, Sr);
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L633)

```diff
-                   VR[fR].iK.call(VR[fR].context, JR, yR);
+                   pr[Er].Wx.call(pr[Er].context, Sr, Zr);
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L636` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L636) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L636)

```diff
-                   VR[fR].iK.call(VR[fR].context, JR, yR, tR);
+                   pr[Er].Wx.call(pr[Er].context, Sr, Zr, Wr);
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L641` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L641) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L641)

```diff
-                   VR[fR].iK.apply(VR[fR].context, iR)
+                   pr[Er].Wx.apply(pr[Er].context, fr)
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L650)

```diff
-             var uR = GR ? GR + RR : RR;
+             var ar = Qr ? Qr + rr : rr;
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L654` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L654) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L654)

```diff
-             if (qR.iK) qR.iK !== JR || tR && !qR.once || yR && qR.context !== yR || ZR(this, uR);
+             if (Ir.Wx) Ir.Wx !== Sr || Wr && !Ir.once || Zr && Ir.context !== Zr || jr(this, ar);
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L656-L657` → after: `L656-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L656-L657) · [Before (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L656-L657)

```diff
-               for (var iR = 0, fR = [], VR = qR.length; iR < VR; iR++)(qR[iR].iK !== JR || tR && !qR[iR].once || yR && qR[iR].context !== yR) && fR.push(qR[iR]);
-               fR.length ? this._events[uR] = 1 === fR.length ? fR[0] : fR : ZR(this, uR)
+               for (var fr = 0, Er = [], pr = Ir.length; fr < pr; fr++)(Ir[fr].Wx !== Sr || Wr && !Ir[fr].once || Zr && Ir[fr].context !== Zr) && Er.push(Ir[fr]);
+               Er.length ? this._events[ar] = 1 === Er.length ? Er[0] : Er : jr(this, ar)
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L660)

```diff
-           }, qR.prototype.IU = function(RR) {
+           }, Ir.prototype.hY = function(rr) {
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L662)

```diff
-             return RR ? (JR = GR ? GR + RR : RR, this._events[JR] && ZR(this, JR)) : (this._events = new yR, this._eventsCount = 0), this
+             return rr ? (Sr = Qr ? Qr + rr : rr, this._events[Sr] && jr(this, Sr)) : (this._events = new Zr, this._eventsCount = 0), this
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L666-L671` → after: `L666-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L666-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L666-L671) · [Before (L666-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L666-L671)

```diff
-             e: () => KR,
-             g: () => eR,
-             i: () => wR,
-             k: () => rR,
-             o: () => aR,
-             r: () => VR
+             d: () => xr,
+             h: () => Ur,
+             j: () => mr,
+             n: () => Nr,
+             r: () => tr,
+             s: () => pr
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L673)

```diff
-           var yR = GR(53),
+           var Zr = Qr(51),
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L675` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L675) · [Before (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L675)

```diff
-             uR = GR(60),
+             ar = Qr(59),
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L679)

```diff
-               return `bloxd-${RR}`
+               return `bloxd-${rr}`
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L705)

```diff
-                   ...GR ? fR : iR,
+                   ...Qr ? Er : fr,
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L717)

```diff
-                 return console.error("Caught error", GR, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (JR = this._cachedVals[RR]) && void 0 !== JR ? JR : null
+                 return console.error("Caught error", Qr, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (Sr = this._cachedVals[rr]) && void 0 !== Sr ? Sr : null
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L726` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L726)

```diff
-                 ZR().remove(RR, JR ? fR : iR)
+                 jr().remove(rr, Sr ? Er : fr)
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L754)

```diff
-                 return console.error("Caught error", GR, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", Qr, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L785)

```diff
-                 return console.error("Caught error", GR, "when attempting to read from sessionStorage."), null !== (JR = this._cachedVals[RR]) && void 0 !== JR ? JR : null
+                 return console.error("Caught error", Qr, "when attempting to read from sessionStorage."), null !== (Sr = this._cachedVals[rr]) && void 0 !== Sr ? Sr : null
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L812)

```diff
-                 return null !== (yR = this._cachedVals[RR]) && void 0 !== yR ? yR : null
+                 return null !== (Zr = this._cachedVals[rr]) && void 0 !== Zr ? Zr : null
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L834` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L834) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L834)

```diff
-                   for (let yR, tR, uR = 0, ZR = 0; tR = RR.charAt(ZR++); ~tR && (yR = uR % 4 ? 64 * yR + tR : tR, uR++ % 4) ? JR += String.fromCharCode(255 & yR >> (-2 * uR & 6)) : 0) tR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(tR);
+                   for (let Zr, Wr, ar = 0, jr = 0; Wr = rr.charAt(jr++); ~Wr && (Zr = ar % 4 ? 64 * Zr + Wr : Wr, ar++ % 4) ? Sr += String.fromCharCode(255 & Zr >> (-2 * ar & 6)) : 0) Wr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(Wr);
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L841` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L841) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L841)

```diff
-               return ZR ? tR = ZR : (tR = LR.FZAkcO(tR), RR[uR] = tR), tR
+               return jr ? Wr = jr : (Wr = hr.FZAkcO(Wr), rr[ar] = Wr), Wr
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L883)

```diff
-         }, , , , , , , (RR, JR, GR) => {
+         }, , , , , , , , (rr, Sr, Qr) => {
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1015)

```diff
-                 return RR instanceof this ? RR : uR.resolve(new this(tR), RR)
+                 return rr instanceof this ? rr : ar.resolve(new this(Wr), rr)
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L1064` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1064) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1064)

```diff
-                 return this.state !== iR ? KR(GR, this.state === qR ? RR : JR, this.outcome) : this.queue.push(new VR(GR, RR, JR)), GR
+                 return this.state !== fr ? xr(Qr, this.state === Ir ? rr : Sr, this.outcome) : this.queue.push(new pr(Qr, rr, Sr)), Qr
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L1437` → after: `L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1437) · [Before (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1437)

```diff
-                       return RR ? JR : OR(JR)
+                       return rr ? Sr : Pr(Sr)
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1713` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1713) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1713)

```diff
-                   RR instanceof ArrayBuffer ? (yR = RR, tR += GJ) : (yR = RR.buffer, "[object Int8Array]" === GR ? tR += tJ : "[object Uint8Array]" === GR ? tR += uJ : "[object Uint8ClampedArray]" === GR ? tR += ZJ : "[object Int16Array]" === GR ? tR += qJ : "[object Uint16Array] … [truncated]
+                   rr instanceof ArrayBuffer ? (Zr = rr, Wr += QS) : (Zr = rr.buffer, "[object Int8Array]" === Qr ? Wr += WS : "[object Uint8Array]" === Qr ? Wr += aS : "[object Uint8ClampedArray]" === Qr ? Wr += jS : "[object Int16Array]" === Qr ? Wr += IS : "[object Uint16Array] … [truncated]
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1737` → after: `L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1737) · [Before (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1737)

```diff
-                   case GJ:
+                   case QS:
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1739)

```diff
-                   case yJ:
+                   case ZS:
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1743)

```diff
-                   case tJ:
+                   case WS:
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1745` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1745) · [Before (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1745)

```diff
-                   case uJ:
+                   case aS:
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1747` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1747) · [Before (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1747)

```diff
-                   case ZJ:
+                   case jS:
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1749` → after: `L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1749) · [Before (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1749)

```diff
-                   case qJ:
+                   case IS:
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1751` → after: `L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1751) · [Before (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1751)

```diff
-                   case fJ:
+                   case ES:
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1753)

```diff
-                   case iJ:
+                   case fS:
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1755` → after: `L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1755) · [Before (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1755)

```diff
-                   case VJ:
+                   case pS:
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1757` → after: `L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1757) · [Before (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1757)

```diff
-                   case KJ:
+                   case xS:
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1759` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1759) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1759)

```diff
-                   case wJ:
+                   case mS:
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1797)

```diff
-                 return GR.jU = WJ, tR
+                 return Qr.TY = nS, Wr
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1819` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1819) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1819)

```diff
-                         yR && (yR = tR.jU.deserialize(yR)), JR(yR)
+                         Zr && (Zr = Wr.TY.deserialize(Zr)), Sr(Zr)
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L1839` → after: `L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1839) · [Before (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1839)

```diff
-                             if (fR && (fR = tR.jU.deserialize(fR)), void 0 !== (fR = RR(fR, iR.key, qR + 1))) return void JR(fR)
+                             if (Er && (Er = Wr.TY.deserialize(Er)), void 0 !== (Er = rr(Er, fr.key, Ir + 1))) return void Sr(Er)
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L1859)

```diff
-                     iR.jU.serialize(JR, (function(JR, fR) {
+                     fr.TY.serialize(Sr, (function(Sr, Er) {
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L2070` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2070) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2070)

```diff
-                 return GR.keyPrefix = cJ(RR, JR._defaultConfig), IJ() ? (JR._dbInfo = GR, GR.jU = WJ, fR.resolve()) : fR.reject()
+                 return Qr.keyPrefix = MS(rr, Sr._defaultConfig), kS() ? (Sr._dbInfo = Qr, Qr.TY = nS, Er.resolve()) : Er.reject()
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L2090` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2090) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2090)

```diff
-                   return yR && (yR = JR.jU.deserialize(yR)), yR
+                   return Zr && (Zr = Sr.TY.deserialize(Zr)), Zr
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L2102` → after: `L2102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2102) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2102)

```diff
-                         if (fR && (fR = JR.jU.deserialize(fR)), void 0 !== (fR = RR(fR, iR.substring(tR), ZR++))) return fR
+                         if (Er && (Er = Sr.TY.deserialize(Er)), void 0 !== (Er = rr(Er, fr.substring(Wr), jr++))) return Er
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L2160` → after: `L2160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2160) · [Before (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2160)

```diff
-                     ZR.jU.serialize(JR, (function(JR, yR) {
+                     jr.TY.serialize(Sr, (function(Sr, Zr) {
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2380` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2380) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2380)

```diff
-         }, , , , , , , (RR, JR, GR) => {
+         }, , , , , , , , (rr, Sr, Qr) => {
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2449` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2449) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2449)

```diff
-         }, , (RR, JR, GR) => {
+         }, , , , , , , , (rr, Sr, Qr) => {
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2451` → after: `L2451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2451) · [Before (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2451)

```diff
-             e: () => tR
+             d: () => Wr
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2453` → after: `L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2453) · [Before (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2453)

```diff
-           var yR = GR(46);
+           var Zr = Qr(43);
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2457` → after: `L2457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2457) · [Before (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2457)

```diff
-             return null !== (RR = yR.i.getItem("soundVol")) && void 0 !== RR ? RR : .5
+             return null !== (rr = Zr.j.getItem("soundVol")) && void 0 !== rr ? rr : .5
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2459-L2462` → after: `L2459-L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2459-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2459-L2462) · [Before (L2459-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2459-L2462)

```diff
-         }, , , , (RR, JR, GR) => {
-           RR.exports = GR(74)
-         }, , , , , , , , (RR, JR, GR) => {
-           var yR = GR(77),
+         }, , , , , (rr, Sr, Qr) => {
+           rr.exports = Qr(81)
+         }, , , , , , , , , (rr, Sr, Qr) => {
+           var Zr = Qr(83),
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2573-L2574` → after: `L2573-L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2573-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2573-L2574) · [Before (L2573-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2573-L2574)

```diff
-                   case tR:
-                   case uR:
+                   case Wr:
+                   case ar:
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2595` → after: `L2595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2595) · [Before (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2595)

```diff
-                   return null === RR || "object" !== typeof RR ? null : "function" === typeof(RR = wR && RR[wR] || RR["@@iterator"]) ? RR : null
+                   return null === rr || "object" !== typeof rr ? null : "function" === typeof(rr = mr && rr[mr] || rr["@@iterator"]) ? rr : null
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L2749` → after: `L2749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2749) · [Before (L2749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2749)

```diff
-         }, , , RR => {
+         }, , rr => {
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L2782` → after: `L2782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2782) · [Before (L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2782)

```diff
-         }, , , , , , (RR, JR, GR) => {
+         }, , , , , , , , , (rr, Sr, Qr) => {
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L2789` → after: `L2789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2789) · [Before (L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2789)

```diff
-           }(), RR.exports = GR(89)
+           }(), rr.exports = Qr(98)
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L2791-L2793` → after: `L2791-L2793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2791-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2791-L2793) · [Before (L2791-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2791-L2793)

```diff
-           var yR = GR(66),
-             tR = GR(77),
-             uR = GR(91);
+           var Zr = Qr(72),
+             Wr = Qr(83),
+             ar = Qr(103);
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L2880` → after: `L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2880) · [Before (L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2880)

```diff
-             }(JR) && (null === GR ? RR.removeAttribute(JR) : RR.setAttribute(JR, "" + GR)) : tR.mustUseProperty ? RR[tR.propertyName] = null === GR ? 3 !== tR.type && "" : GR : (JR = tR.attributeName, yR = tR.attributeNamespace, null === GR ? RR.removeAttribute(JR) : (GR = 3 ===  … [truncated]
+             }(Sr) && (null === Qr ? rr.removeAttribute(Sr) : rr.setAttribute(Sr, "" + Qr)) : Wr.mustUseProperty ? rr[Wr.propertyName] = null === Qr ? 3 !== Wr.type && "" : Qr : (Sr = Wr.attributeName, Zr = Wr.attributeNamespace, null === Qr ? rr.removeAttribute(Sr) : (Qr = 3 ===  … [truncated]
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L2921` → after: `L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L2921) · [Before (L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L2921)

```diff
-             return null === RR || "object" !== typeof RR ? null : "function" === typeof(RR = SR && RR[SR] || RR["@@iterator"]) ? RR : null
+             return null === rr || "object" !== typeof rr ? null : "function" === typeof(rr = ir && rr[ir] || rr["@@iterator"]) ? rr : null
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L3019` → after: `L3019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3019) · [Before (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3019)

```diff
-               case BR:
+               case Tr:
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L3021` → after: `L3021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3021) · [Before (L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3021)

```diff
-               case MR:
+               case Br:
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L3023` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3023) · [Before (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3023)

```diff
-               case pR:
+               case Or:
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L3025` → after: `L3025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3025) · [Before (L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3025)

```diff
-               case lR:
+               case vr:
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L3027` → after: `L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3027) · [Before (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3027)

```diff
-               case OR:
+               case Pr:
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L3029` → after: `L3029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3029) · [Before (L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3029)

```diff
-               case xR:
+               case Hr:
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L3033` → after: `L3033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3033) · [Before (L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3033)

```diff
-               case bR:
+               case lr:
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L3035` → after: `L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3035) · [Before (L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3035)

```diff
-               case gR:
+               case Lr:
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L3037` → after: `L3037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3037) · [Before (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3037)

```diff
-               case vR:
+               case Xr:
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L3040` → after: `L3040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3040) · [Before (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3040)

```diff
-               case NR:
+               case qr:
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L3042` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3042) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3042)

```diff
-               case HR:
+               case gr:
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L3044` → after: `L3044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3044) · [Before (L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3044)

```diff
-               case DR:
+               case Rr:
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L3128` → after: `L3128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3128) · [Before (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3128)

```diff
-               checked: null != GR ? GR : RR._wrapperState.initialChecked
+               checked: null != Qr ? Qr : rr._wrapperState.initialChecked
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L3428` → after: `L3428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3428) · [Before (L3428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3428)

```diff
-             RR: switch (JR) {
+             rr: switch (Sr) {
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L3494` → after: `L3494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3494) · [Before (L3494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3494)

```diff
-             return 3 === JR.tag ? GR : null
+             return 3 === Sr.tag ? Qr : null
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L3566` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3566) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3566)

```diff
-                 return GR.stateNode.current === GR ? RR : JR
+                 return Qr.stateNode.current === Qr ? rr : Sr
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L3778` → after: `L3778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3778) · [Before (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3778)

```diff
-             return 0 !== (RR = -1073741825 & RR.pendingLanes) ? RR : 1073741824 & RR ? 1073741824 : 0
+             return 0 !== (rr = -1073741825 & rr.pendingLanes) ? rr : 1073741824 & rr ? 1073741824 : 0
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L3902` → after: `L3902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3902) · [Before (L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3902)

```diff
-             return iy = tR.slice(RR, 1 < JR ? 1 - JR : void 0)
+             return fZ = Wr.slice(rr, 1 < Sr ? 1 - Sr : void 0)
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L3907` → after: `L3907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3907) · [Before (L3907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3907)

```diff
-             return "charCode" in RR ? 0 === (RR = RR.charCode) && 13 === JR && (RR = 13) : RR = JR, 10 === RR && (RR = 13), 32 <= RR || 13 === RR ? RR : 0
+             return "charCode" in rr ? 0 === (rr = rr.charCode) && 13 === Sr && (rr = 13) : rr = Sr, 10 === rr && (rr = 13), 32 <= rr || 13 === rr ? rr : 0
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L3921` → after: `L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L3921) · [Before (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L3921)

```diff
-               return this.isDefaultPrevented = (null != tR.defaultPrevented ? tR.defaultPrevented : !1 === tR.returnValue) ? Ky : wy, this.isPropagationStopped = wy, this
+               return this.isDefaultPrevented = (null != Wr.defaultPrevented ? Wr.defaultPrevented : !1 === Wr.returnValue) ? xZ : mZ, this.isPropagationStopped = mZ, this
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L4281` → after: `L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4281) · [Before (L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4281)

```diff
-               RR: {
+               rr: {
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L4323` → after: `L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4323) · [Before (L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4323)

```diff
-             var yR = GR.window === GR ? GR.document : 9 === GR.nodeType ? GR : GR.ownerDocument;
+             var Zr = Qr.window === Qr ? Qr.document : 9 === Qr.nodeType ? Qr : Qr.ownerDocument;
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L4361` → after: `L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4361) · [Before (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4361)

```diff
-               RR: {
+               rr: {
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L4427` → after: `L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4427) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4427)

```diff
-             if (0 === (1 & JR) && 0 === (2 & JR) && null !== yR) RR: for (;;) {
+             if (0 === (1 & Sr) && 0 === (2 & Sr) && null !== Zr) rr: for (;;) {
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L4461` → after: `L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4461) · [Before (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4461)

```diff
-               RR: {
+               rr: {
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L4511-L4513` → after: `L4511-L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4511-L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4511-L4513) · [Before (L4511-L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4511-L4513)

```diff
-                     case NG:
-                     case DG:
-                     case HG:
+                     case qQ:
+                     case RQ:
+                     case gQ:
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L4516` → after: `L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4516) · [Before (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4516)

```diff
-                     case oG:
+                     case CQ:
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L4556-L4557` → after: `L4556-L4557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4556-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4556-L4557) · [Before (L4556-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4556-L4557)

```diff
-                 if (iR = "mouseout" === RR || "pointerout" === RR, (!(qR = "mouseover" === RR || "pointerover" === RR) || 0 !== (16 & JR) || !(fR = GR.relatedTarget || GR.fromElement) || !wu(fR) && !fR[Vu]) && (iR || qR) && (qR = tR.window === tR ? tR : (qR = tR.ownerDocument) ?  … [truncated]
-                   if (VR = Xy, aR = "onMouseLeave", wR = "onMouseEnter", eR = "mouse", "pointerout" !== RR && "pointerover" !== RR || (VR = cy, aR = "onPointerLeave", wR = "onPointerEnter", eR = "pointer"), KR = null == iR ? qR : eu(iR), rR = null == fR ? qR : eu(fR), (qR = new V … [truncated]
+                 if (fr = "mouseout" === rr || "pointerout" === rr, (!(Ir = "mouseover" === rr || "pointerover" === rr) || 0 !== (16 & Sr) || !(Er = Qr.relatedTarget || Qr.fromElement) || !xa(Er) && !Er[Ea]) && (fr || Ir) && (Ir = Wr.window === Wr ? Wr : (Ir = Wr.ownerDocument) ?  … [truncated]
+                   if (pr = yZ, tr = "onMouseLeave", mr = "onMouseEnter", Ur = "mouse", "pointerout" !== rr && "pointerover" !== rr || (pr = MZ, tr = "onPointerLeave", mr = "onPointerEnter", Ur = "pointer"), xr = null == fr ? Ir : Na(fr), Nr = null == Er ? Ir : Na(Er), (Ir = new p … [truncated]
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L4603` → after: `L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4603) · [Before (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4603)

```diff
-                 if (jy) RR: {
+                 if (wZ) rr: {
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L4621` → after: `L4621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4621) · [Before (L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4621)

```diff
-                 }), UR ? WR.data = UR : null !== (UR = Ty(GR)) && (WR.data = UR))), (UR = Ey ? function(RR, JR) {
+                 }), Yr ? nr.data = Yr : null !== (Yr = dZ(Qr)) && (nr.data = Yr))), (Yr = FZ ? function(rr, Sr) {
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L4859` → after: `L4859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4859) · [Before (L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4859)

```diff
-             Fu = void 0 !== mu ? mu : function() {},
+             Ja = void 0 !== ka ? ka : function() {},
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L4864` → after: `L4864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4864) · [Before (L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4864)

```diff
-             JZ = 1e4 > RZ ? zu : function() {
+             rj = 1e4 > ua ? Aa : function() {
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L4870` → after: `L4870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4870) · [Before (L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4870)

```diff
-               case ju:
+               case ia:
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L4872` → after: `L4872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4872) · [Before (L4872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4872)

```diff
-               case du:
+               case wa:
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L4874` → after: `L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4874) · [Before (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4874)

```diff
-               case Eu:
+               case ca:
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L4876` → after: `L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4876) · [Before (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4876)

```diff
-               case Yu:
+               case Fa:
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L4878` → after: `L4878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L4878) · [Before (L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L4878)

```diff
-               case ku:
+               case oa:
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L5031` → after: `L5031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5031) · [Before (L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5031)

```diff
-               null === GR ? JR.next = JR : (JR.next = GR.next, GR.next = JR), RR.pending = JR
+               null === Qr ? Sr.next = Sr : (Sr.next = Qr.next, Qr.next = Sr), rr.pending = Sr
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L5051` → after: `L5051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5051) · [Before (L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5051)

```diff
-                   null === uR ? tR = uR = ZR : uR = uR.next = ZR, GR = GR.next
+                   null === ar ? Wr = ar = jr : ar = ar.next = jr, Qr = Qr.next
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L5053` → after: `L5053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5053) · [Before (L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5053)

```diff
-                 null === uR ? tR = uR = JR : uR = uR.next = JR
+                 null === ar ? Wr = ar = Sr : ar = ar.next = Sr
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L5063` → after: `L5063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5063) · [Before (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5063)

```diff
-             null === (RR = GR.lastBaseUpdate) ? GR.firstBaseUpdate = JR : RR.next = JR, GR.lastBaseUpdate = JR
+             null === (rr = Qr.lastBaseUpdate) ? Qr.firstBaseUpdate = Sr : rr.next = Sr, Qr.lastBaseUpdate = Sr
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L5076` → after: `L5076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5076) · [Before (L5076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5076)

```diff
-               fR.next = null, null === qR ? ZR = VR : qR.next = VR, qR = fR;
+               Er.next = null, null === Ir ? jr = pr : Ir.next = pr, Ir = Er;
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L5080` → after: `L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5080) · [Before (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5080)

```diff
-                 wR !== qR && (null === wR ? KR.firstBaseUpdate = VR : wR.next = VR, KR.lastBaseUpdate = fR)
+                 mr !== Ir && (null === mr ? xr.firstBaseUpdate = pr : mr.next = pr, xr.lastBaseUpdate = Er)
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L5096` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5096) · [Before (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5096)

```diff
-                   RR: {
+                   rr: {
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L5149` → after: `L5149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5149) · [Before (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5149)

```diff
-             GR = null === (GR = GR(yR, JR = RR.memoizedState)) || void 0 === GR ? JR : tR({}, JR, GR), RR.memoizedState = GR, 0 === RR.lanes && (RR.updateQueue.baseState = GR)
+             Qr = null === (Qr = Qr(Zr, Sr = rr.memoizedState)) || void 0 === Qr ? Sr : Wr({}, Sr, Qr), rr.memoizedState = Qr, 0 === rr.lanes && (rr.updateQueue.baseState = Qr)
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L5160` → after: `L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5160) · [Before (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5160)

```diff
-               uR.payload = JR, void 0 !== GR && null !== GR && (uR.callback = GR), MZ(RR, uR), of(RR, tR, yR)
+               ar.payload = Sr, void 0 !== Qr && null !== Qr && (ar.callback = Qr), yj(rr, ar), RE(rr, Wr, Zr)
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L5167` → after: `L5167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5167) · [Before (L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5167)

```diff
-               uR.tag = 1, uR.payload = JR, void 0 !== GR && null !== GR && (uR.callback = GR), MZ(RR, uR), of(RR, tR, yR)
+               ar.tag = 1, ar.payload = Sr, void 0 !== Qr && null !== Qr && (ar.callback = Qr), yj(rr, ar), RE(rr, Wr, Zr)
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L5174` → after: `L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5174) · [Before (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5174)

```diff
-               tR.tag = 2, void 0 !== JR && null !== JR && (tR.callback = JR), MZ(RR, tR), of(RR, yR, GR)
+               Wr.tag = 2, void 0 !== Sr && null !== Sr && (Wr.callback = Sr), yj(rr, Wr), RE(rr, Zr, Qr)
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L5186` → after: `L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5186) · [Before (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5186)

```diff
-             return "object" === typeof uR && null !== uR ? uR = UZ(uR) : (tR = gu(JR) ? lu : Mu.current, uR = (yR = null !== (yR = JR.contextTypes) && void 0 !== yR) ? pu(RR, tR) : Xu), JR = new JR(GR, uR), RR.memoizedState = null !== JR.state && void 0 !== JR.state ? JR.state :  … [truncated]
+             return "object" === typeof ar && null !== ar ? ar = zj(ar) : (Wr = Oa(Sr) ? Ta : ya.current, ar = (Zr = null !== (Zr = Sr.contextTypes) && void 0 !== Zr) ? va(rr, Wr) : Ka), Sr = new Sr(Qr, ar), rr.memoizedState = null !== Sr.state && void 0 !== Sr.state ? Sr.state :  … [truncated]
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L5197` → after: `L5197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5197) · [Before (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5197)

```diff
-             "object" === typeof uR && null !== uR ? tR.context = UZ(uR) : (uR = gu(JR) ? lu : Mu.current, tR.context = pu(RR, uR)), lZ(RR, GR, tR, yR), tR.state = RR.memoizedState, "function" === typeof(uR = JR.getDerivedStateFromProps) && (bZ(RR, JR, uR, GR), tR.state = RR.memoi … [truncated]
+             "object" === typeof ar && null !== ar ? Wr.context = zj(ar) : (ar = Oa(Sr) ? Ta : ya.current, Wr.context = va(rr, ar)), Tj(rr, Qr, Wr, Zr), Wr.state = rr.memoizedState, "function" === typeof(ar = Sr.getDerivedStateFromProps) && (Lj(rr, Sr, ar, Qr), Wr.state = rr.memoi … [truncated]
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L5249` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5249) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5249)

```diff
-               return JR.index = yR, RR ? null !== (yR = JR.alternate) ? (yR = yR.index) < GR ? (JR.flags = 2, GR) : yR : (JR.flags = 2, GR) : GR
+               return Sr.index = Zr, rr ? null !== (Zr = Sr.alternate) ? (Zr = Zr.index) < Qr ? (Sr.flags = 2, Qr) : Zr : (Sr.flags = 2, Qr) : Qr
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L5276` → after: `L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5276) · [Before (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5276)

```diff
-                   case XR:
+                   case yr:
```

#### 186. `bundles/bloxd.io/main.js` (Changed code · before: `L5278` → after: `L5278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5278) · [Before (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5278)

```diff
-                   case MR:
+                   case Br:
```

#### 187. `bundles/bloxd.io/main.js` (Changed code · before: `L5292` → after: `L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5292) · [Before (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5292)

```diff
-                   case XR:
+                   case yr:
```

#### 188. `bundles/bloxd.io/main.js` (Changed code · before: `L5294` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5294) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5294)

```diff
-                   case MR:
+                   case Br:
```

#### 189. `bundles/bloxd.io/main.js` (Changed code · before: `L5307-L5310` → after: `L5307-L5310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5307-L5310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5307-L5310) · [Before (L5307-L5310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5307-L5310)

```diff
-                   case XR:
-                     return RR = RR.get(null === yR.key ? GR : yR.key) || null, yR.type === BR ? KR(JR, RR, yR.props.children, tR, yR.key) : fR(JR, RR, yR, tR);
-                   case MR:
-                     return VR(JR, RR = RR.get(null === yR.key ? GR : yR.key) || null, yR, tR)
+                   case yr:
+                     return rr = rr.get(null === Zr.key ? Qr : Zr.key) || null, Zr.type === Tr ? xr(Sr, rr, Zr.props.children, Wr, Zr.key) : Er(Sr, rr, Zr, Wr);
+                   case Br:
+                     return pr(Sr, rr = rr.get(null === Zr.key ? Qr : Zr.key) || null, Zr, Wr)
```

#### 190. `bundles/bloxd.io/main.js` (Changed code · before: `L5326` → after: `L5326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5326) · [Before (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5326)

```diff
-                 RR && KR && null === nR.alternate && JR(tR, KR), ZR = uR(nR, ZR, aR), null === VR ? fR = nR : VR.sibling = nR, VR = nR, KR = LR
+                 rr && xr && null === zr.alternate && Sr(Wr, xr), jr = ar(zr, jr, tr), null === pr ? Er = zr : pr.sibling = zr, pr = zr, xr = hr
```

#### 191. `bundles/bloxd.io/main.js` (Changed code · before: `L5330` → after: `L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5330) · [Before (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5330)

```diff
-                 for (; aR < qR.length; aR++) null !== (KR = wR(tR, qR[aR], iR)) && (ZR = uR(KR, ZR, aR), null === VR ? fR = KR : VR.sibling = KR, VR = KR);
+                 for (; tr < Ir.length; tr++) null !== (xr = mr(Wr, Ir[tr], fr)) && (jr = ar(xr, jr, tr), null === pr ? Er = xr : pr.sibling = xr, pr = xr);
```

#### 192. `bundles/bloxd.io/main.js` (Changed code · before: `L5333` → after: `L5333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5333) · [Before (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5333)

```diff
-               for (KR = yR(tR, KR); aR < qR.length; aR++) null !== (LR = eR(KR, tR, aR, qR[aR], iR)) && (RR && null !== LR.alternate && KR.delete(null === LR.key ? aR : LR.key), ZR = uR(LR, ZR, aR), null === VR ? fR = LR : VR.sibling = LR, VR = LR);
+               for (xr = Zr(Wr, xr); tr < Ir.length; tr++) null !== (hr = Ur(xr, Wr, tr, Ir[tr], fr)) && (rr && null !== hr.alternate && xr.delete(null === hr.key ? tr : hr.key), jr = ar(hr, jr, tr), null === pr ? Er = hr : pr.sibling = hr, pr = hr);
```

#### 193. `bundles/bloxd.io/main.js` (Changed code · before: `L5350` → after: `L5350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5350) · [Before (L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5350)

```diff
-                 RR && aR && null === WR.alternate && JR(tR, aR), qR = uR(WR, qR, LR), null === KR ? VR = WR : KR.sibling = WR, KR = WR, aR = nR
+                 rr && tr && null === nr.alternate && Sr(Wr, tr), Ir = ar(nr, Ir, hr), null === xr ? pr = nr : xr.sibling = nr, xr = nr, tr = zr
```

#### 194. `bundles/bloxd.io/main.js` (Changed code · before: `L5354` → after: `L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5354) · [Before (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5354)

```diff
-                 for (; !UR.done; LR++, UR = iR.next()) null !== (UR = wR(tR, UR.value, fR)) && (qR = uR(UR, qR, LR), null === KR ? VR = UR : KR.sibling = UR, KR = UR);
+                 for (; !Yr.done; hr++, Yr = fr.next()) null !== (Yr = mr(Wr, Yr.value, Er)) && (Ir = ar(Yr, Ir, hr), null === xr ? pr = Yr : xr.sibling = Yr, xr = Yr);
```

#### 195. `bundles/bloxd.io/main.js` (Changed code · before: `L5357` → after: `L5357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5357) · [Before (L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5357)

```diff
-               for (aR = yR(tR, aR); !UR.done; LR++, UR = iR.next()) null !== (UR = eR(aR, tR, LR, UR.value, fR)) && (RR && null !== UR.alternate && aR.delete(null === UR.key ? LR : UR.key), qR = uR(UR, qR, LR), null === KR ? VR = UR : KR.sibling = UR, KR = UR);
+               for (tr = Zr(Wr, tr); !Yr.done; hr++, Yr = fr.next()) null !== (Yr = Ur(tr, Wr, hr, Yr.value, Er)) && (rr && null !== Yr.alternate && tr.delete(null === Yr.key ? hr : Yr.key), Ir = ar(Yr, Ir, hr), null === xr ? pr = Yr : xr.sibling = Yr, xr = Yr);
```

#### 196. `bundles/bloxd.io/main.js` (Changed code · before: `L5367-L5368` → after: `L5367-L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5367-L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5367-L5368) · [Before (L5367-L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5367-L5368)

```diff
-                 case XR:
-                   RR: {
+                 case yr:
+                   rr: {
```

#### 197. `bundles/bloxd.io/main.js` (Changed code · before: `L5388-L5389` → after: `L5388-L5389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5388-L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5388-L5389) · [Before (L5388-L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5388-L5389)

```diff
-                 case MR:
-                   RR: {
+                 case Br:
+                   rr: {
```

#### 198. `bundles/bloxd.io/main.js` (Changed code · before: `L5527` → after: `L5527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5527) · [Before (L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5527)

```diff
-               RR: {
+               rr: {
```

#### 199. `bundles/bloxd.io/main.js` (Changed code · before: `L5577` → after: `L5577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5577) · [Before (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5577)

```diff
-             if (wq = uR, rq = JR, JR.memoizedState = null, JR.updateQueue = null, JR.lanes = 0, Vq.current = null === RR || null === RR.memoizedState ? kq : Qq, RR = GR(yR, tR), nq) {
+             if (xI = ar, mI = Sr, Sr.memoizedState = null, Sr.updateQueue = null, Sr.lanes = 0, EI.current = null === rr || null === rr.memoizedState ? oI : bI, rr = Qr(Zr, Wr), hI) {
```

#### 200. `bundles/bloxd.io/main.js` (Changed code · before: `L5596` → after: `L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5596) · [Before (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5596)

```diff
-             return null === aq ? rq.memoizedState = aq = RR : aq = aq.next = RR, aq
+             return null === UI ? mI.memoizedState = UI = rr : UI = UI.next = rr, UI
```

#### 201. `bundles/bloxd.io/main.js` (Changed code · before: `L5614` → after: `L5614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5614) · [Before (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5614)

```diff
-               }, null === aq ? rq.memoizedState = aq = RR : aq = aq.next = RR
+               }, null === UI ? mI.memoizedState = UI = rr : UI = UI.next = rr
```

#### 202. `bundles/bloxd.io/main.js` (Changed code · before: `L5663` → after: `L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5663) · [Before (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5663)

```diff
-               null === iR ? uR = yR : iR.next = qR, Ut(yR, JR.memoizedState) || (sq = !0), JR.memoizedState = yR, JR.baseState = uR, JR.baseQueue = iR, GR.lastRenderedState = yR
+               null === fr ? ar = Zr : fr.next = Ir, zW(Zr, Sr.memoizedState) || (dI = !0), Sr.memoizedState = Zr, Sr.baseState = ar, Sr.baseQueue = fr, Qr.lastRenderedState = Zr
```

#### 203. `bundles/bloxd.io/main.js` (Changed code · before: `L5691` → after: `L5691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5691) · [Before (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5691)

```diff
-             if (null !== tR ? RR = tR === yR : (RR = RR.mutableReadLanes, (RR = (wq & RR) === RR) && (JR._workInProgressVersionPrimary = yR, iq.push(JR))), RR) return GR(JR._source);
+             if (null !== Wr ? rr = Wr === Zr : (rr = rr.mutableReadLanes, (rr = (xI & rr) === rr) && (Sr._workInProgressVersionPrimary = Zr, II.push(Sr))), rr) return Qr(Sr._source);
```

#### 204. `bundles/bloxd.io/main.js` (Changed code · before: `L5773` → after: `L5773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5773) · [Before (L5773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5773)

```diff
-             }, rq.updateQueue = JR, JR.lastEffect = RR.next = RR) : null === (GR = JR.lastEffect) ? JR.lastEffect = RR.next = RR : (yR = GR.next, GR.next = RR, RR.next = yR, JR.lastEffect = RR), RR
+             }, mI.updateQueue = Sr, Sr.lastEffect = rr.next = rr) : null === (Qr = Sr.lastEffect) ? Sr.lastEffect = rr.next = rr : (Zr = Qr.next, Qr.next = rr, rr.next = Zr, Sr.lastEffect = rr), rr
```

#### 205. `bundles/bloxd.io/main.js` (Changed code · before: `L5868` → after: `L5868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5868) · [Before (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5868)

```diff
-             if (null === ZR ? uR.next = uR : (uR.next = ZR.next, ZR.next = uR), JR.pending = uR, ZR = RR.alternate, RR === rq || null !== ZR && ZR === rq) nq = Lq = !0;
+             if (null === jr ? ar.next = ar : (ar.next = jr.next, jr.next = ar), Sr.pending = ar, jr = rr.alternate, rr === mI || null !== jr && jr === mI) hI = tI = !0;
```

#### 206. `bundles/bloxd.io/main.js` (Changed code · before: `L5875` → after: `L5875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L5875) · [Before (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L5875)

```diff
-               of(RR, tR, yR)
+               RE(rr, Wr, Zr)
```

#### 207. `bundles/bloxd.io/main.js` (Changed code · before: `L6070` → after: `L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6070) · [Before (L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6070)

```diff
-             return ZR = RR.child, 0 === (tR & uR) && (tR = ZR.memoizedProps, (GR = null !== (GR = GR.compare) ? GR : At)(tR, yR) && RR.ref === JR.ref) ? Ci(RR, JR, uR) : (JR.flags |= 1, (RR = LV(ZR, yR)).ref = JR.ref, RR.return = JR, JR.child = RR)
+             return jr = rr.child, 0 === (Wr & ar) && (Wr = jr.memoizedProps, (Qr = null !== (Qr = Qr.compare) ? Qr : nW)(Wr, Zr) && rr.ref === Sr.ref) ? ef(rr, Sr, ar) : (Sr.flags |= 1, (rr = Np(jr, Zr)).ref = Sr.ref, rr.return = Sr, Sr.child = rr)
```

#### 208. `bundles/bloxd.io/main.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6090)

```diff
-                 if (0 === (1073741824 & GR)) return RR = null !== uR ? uR.baseLanes | GR : GR, JR.lanes = JR.childLanes = 1073741824, JR.memoizedState = {
+                 if (0 === (1073741824 & Qr)) return rr = null !== ar ? ar.baseLanes | Qr : Qr, Sr.lanes = Sr.childLanes = 1073741824, Sr.memoizedState = {
```

#### 209. `bundles/bloxd.io/main.js` (Changed code · before: `L6107` → after: `L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6107) · [Before (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6107)

```diff
-             var uR = gu(GR) ? lu : Mu.current;
+             var ar = Oa(Qr) ? Ta : ya.current;
```

#### 210. `bundles/bloxd.io/main.js` (Changed code · before: `L6123` → after: `L6123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6123) · [Before (L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6123)

```diff
-               "object" === typeof fR && null !== fR ? fR = UZ(fR) : fR = pu(JR, fR = gu(GR) ? lu : Mu.current);
+               "object" === typeof Er && null !== Er ? Er = zj(Er) : Er = va(Sr, Er = Oa(Qr) ? Ta : ya.current);
```

#### 211. `bundles/bloxd.io/main.js` (Changed code · before: `L6130` → after: `L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6130) · [Before (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6130)

```diff
-               ZR = JR.stateNode, CZ(RR, JR), qR = JR.memoizedProps, fR = JR.type === JR.elementType ? qR : fZ(JR.type, qR), ZR.props = fR, KR = JR.pendingProps, wR = ZR.context, "object" === typeof(iR = GR.contextType) && null !== iR ? iR = UZ(iR) : iR = pu(JR, iR = gu(GR) ? lu : … [truncated]
+               jr = Sr.stateNode, ej(rr, Sr), Ir = Sr.memoizedProps, Er = Sr.type === Sr.elementType ? Ir : fj(Sr.type, Ir), jr.props = Er, xr = Sr.pendingProps, mr = jr.context, "object" === typeof(fr = Qr.contextType) && null !== fr ? fr = zj(fr) : fr = va(Sr, fr = Oa(Qr) ? Ta : … [truncated]
```

#### 212. `bundles/bloxd.io/main.js` (Changed code · before: `L6213` → after: `L6213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6213) · [Before (L6213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6213)

```diff
-               lK: null,
+               Ox: null,
```

#### 213. `bundles/bloxd.io/main.js` (Changed code · before: `L6219` → after: `L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6219) · [Before (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6219)

```diff
-             } : (ZR.isBackwards = JR, ZR.lK = null, ZR.renderingStartTime = 0, ZR.last = yR, ZR.tail = GR, ZR.tailMode = tR, ZR.lastEffect = uR)
+             } : (jr.isBackwards = Sr, jr.Ox = null, jr.renderingStartTime = 0, jr.last = Zr, jr.tail = Qr, jr.tailMode = Wr, jr.lastEffect = ar)
```

#### 214. `bundles/bloxd.io/main.js` (Changed code · before: `L6228` → after: `L6228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6228) · [Before (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6228)

```diff
-               if (null !== RR && 0 !== (64 & RR.flags)) RR: for (RR = JR.child; null !== RR;) {
+               if (null !== rr && 0 !== (64 & rr.flags)) rr: for (rr = Sr.child; null !== rr;) {
```

#### 215. `bundles/bloxd.io/main.js` (Changed code · before: `L6377` → after: `L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6377) · [Before (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6377)

```diff
-                     switch (fR = 9 === uR.nodeType ? uR : uR.ownerDocument, RR === rJ && (RR = aJ(GR)), RR === rJ ? "script" === GR ? ((RR = fR.createElement("div")).innerHTML = "<script><\/script>", RR = RR.removeChild(RR.firstChild)) : "string" === typeof yR.is ? RR = fR.create … [truncated]
+                     switch (Er = 9 === ar.nodeType ? ar : ar.ownerDocument, rr === NS && (rr = tS(Qr)), rr === NS ? "script" === Qr ? ((rr = Er.createElement("div")).innerHTML = "<script><\/script>", rr = rr.removeChild(rr.firstChild)) : "string" === typeof Zr.is ? rr = Er.create … [truncated]
```

#### 216. `bundles/bloxd.io/main.js` (Changed code · before: `L6454` → after: `L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6454) · [Before (L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6454)

```diff
-                   GR = EZ(dZ.current), EZ(SZ.current), Zq(JR) ? (yR = JR.stateNode, GR = JR.memoizedProps, yR[iu] = JR, yR.nodeValue !== GR && (JR.flags |= 4)) : ((yR = (9 === GR.nodeType ? GR : GR.ownerDocument).createTextNode(yR))[iu] = JR, JR.stateNode = yR)
+                   Qr = cj(wj.current), cj(Vj.current), aI(Sr) ? (Zr = Sr.stateNode, Qr = Sr.memoizedProps, Zr[Ia] = Sr, Zr.nodeValue !== Qr && (Sr.flags |= 4)) : ((Zr = (9 === Qr.nodeType ? Qr : Qr.ownerDocument).createTextNode(Zr))[Ia] = Sr, Sr.stateNode = Zr)
```

#### 217. `bundles/bloxd.io/main.js` (Changed code · before: `L6465` → after: `L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6465) · [Before (L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6465)

```diff
-                 if (qR = 0 !== (64 & JR.flags), null === (fR = yR.lK))
+                 if (Ir = 0 !== (64 & Sr.flags), null === (Er = Zr.Ox))
```

#### 218. `bundles/bloxd.io/main.js` (Changed code · before: `L6486` → after: `L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6486) · [Before (L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6486)

```diff
-                   yR.isBackwards ? (fR.sibling = JR.child, JR.child = fR) : (null !== (GR = yR.last) ? GR.sibling = fR : JR.child = fR, yR.last = fR)
+                   Zr.isBackwards ? (Er.sibling = Sr.child, Sr.child = Er) : (null !== (Qr = Zr.last) ? Qr.sibling = Er : Sr.child = Er, Zr.last = Er)
```

#### 219. `bundles/bloxd.io/main.js` (Changed code · before: `L6488` → after: `L6488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6488) · [Before (L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6488)

```diff
-                 return null !== yR.tail ? (GR = yR.tail, yR.lK = GR, yR.tail = GR.sibling, yR.lastEffect = JR.lastEffect, yR.renderingStartTime = JZ(), GR.sibling = null, JR = TZ.current, Cu(TZ, qR ? 1 & JR | 2 : 1 & JR), GR) : null;
+                 return null !== Zr.tail ? (Qr = Zr.tail, Zr.Ox = Qr, Zr.tail = Qr.sibling, Zr.lastEffect = Sr.lastEffect, Zr.renderingStartTime = rj(), Qr.sibling = null, Sr = Dj.current, ea(Dj, Ir ? 1 & Sr | 2 : 1 & Sr), Qr) : null;
```

#### 220. `bundles/bloxd.io/main.js` (Changed code · before: `L6638` → after: `L6638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6638) · [Before (L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6638)

```diff
-                 componentStack: null !== RR ? RR : ""
+                 componentStack: null !== rr ? rr : ""
```

#### 221. `bundles/bloxd.io/main.js` (Changed code · before: `L6669` → after: `L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6669) · [Before (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6669)

```diff
-                   JR = (RR = JR.stateNode).getSnapshotBeforeUpdate(JR.elementType === JR.type ? GR : fZ(JR.type, GR), yR), RR.__reactInternalSnapshotBeforeUpdate = JR
+                   Sr = (rr = Sr.stateNode).getSnapshotBeforeUpdate(Sr.elementType === Sr.type ? Qr : fj(Sr.type, Qr), Zr), rr.__reactInternalSnapshotBeforeUpdate = Sr
```

#### 222. `bundles/bloxd.io/main.js` (Changed code · before: `L6808` → after: `L6808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6808) · [Before (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6808)

```diff
-             RR: {
+             rr: {
```

#### 223. `bundles/bloxd.io/main.js` (Changed code · before: `L6827` → after: `L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6827) · [Before (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6827)

```diff
-             16 & GR.flags && (AJ(JR, ""), GR.flags &= -17);RR: JR: for (GR = RR;;) {
+             16 & Qr.flags && (eS(Sr, ""), Qr.flags &= -17);rr: Sr: for (Qr = rr;;) {
```

#### 224. `bundles/bloxd.io/main.js` (Changed code · before: `L6868` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6868) · [Before (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6868)

```diff
-                 RR: for (;;) {
+                 rr: for (;;) {
```

#### 225. `bundles/bloxd.io/main.js` (Changed code · before: `L6884` → after: `L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6884) · [Before (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6884)

```diff
-                 RR: for (var qR = RR, iR = tR, fR = iR;;)
+                 rr: for (var Ir = rr, fr = Wr, Er = fr;;)
```

#### 226. `bundles/bloxd.io/main.js` (Changed code · before: `L6985` → after: `L6985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L6985) · [Before (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L6985)

```diff
-           function Yi(RR, JR) {
+           function of(rr, Sr) {
```

#### 227. `bundles/bloxd.io/main.js` (Changed code · before: `L7029` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7029) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7029)

```diff
-             return 0 !== (48 & Ti) ? JZ() : -1 !== bf ? bf : bf = JZ()
+             return 0 !== (48 & df) ? rj() : -1 !== OE ? OE : OE = rj()
```

#### 228. `bundles/bloxd.io/main.js` (Changed code · before: `L7057` → after: `L7057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7057) · [Before (L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7057)

```diff
-           function of(RR, JR, GR) {
+           function RE(rr, Sr, Qr) {
```

#### 229. `bundles/bloxd.io/main.js` (Changed code · before: `L7086` → after: `L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7086) · [Before (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7086)

```diff
-             if (yR = jG(RR, RR === si ? Jf : 0), JR = zG, 0 === yR) null !== GR && (GR !== Qu && Pu(GR), RR.callbackNode = null, RR.callbackPriority = 0);
+             if (Zr = wQ(rr, rr === sf ? rE : 0), Sr = VQ, 0 === Zr) null !== Qr && (Qr !== ba && Ma(Qr), rr.callbackNode = null, rr.callbackPriority = 0);
```

#### 230. `bundles/bloxd.io/main.js` (Changed code · before: `L7126` → after: `L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7126) · [Before (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7126)

```diff
-             var GR = jG(RR, RR === si ? Jf : 0);
+             var Qr = wQ(rr, rr === sf ? rE : 0);
```

#### 231. `bundles/bloxd.io/main.js` (Changed code · before: `L7277` → after: `L7277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7277) · [Before (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7277)

```diff
-                 RR: {
+                 rr: {
```

#### 232. `bundles/bloxd.io/main.js` (Changed code · before: `L7359` → after: `L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7359) · [Before (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7359)

```diff
-             return Qi.current = Yq, null === RR ? Yq : RR
+             return Jf.current = FI, null === rr ? FI : rr
```

#### 233. `bundles/bloxd.io/main.js` (Changed code · before: `L7399` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7399) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7399)

```diff
-                 null !== RR && 0 === (2048 & RR.flags) && (null === RR.firstEffect && (RR.firstEffect = JR.firstEffect), null !== JR.lastEffect && (null !== RR.lastEffect && (RR.lastEffect.nextEffect = JR.firstEffect), RR.lastEffect = JR.lastEffect), 1 < JR.flags && (null !== RR. … [truncated]
+                 null !== rr && 0 === (2048 & rr.flags) && (null === rr.firstEffect && (rr.firstEffect = Sr.firstEffect), null !== Sr.lastEffect && (null !== rr.lastEffect && (rr.lastEffect.nextEffect = Sr.firstEffect), rr.lastEffect = Sr.lastEffect), 1 < Sr.flags && (null !== rr. … [truncated]
```

#### 234. `bundles/bloxd.io/main.js` (Changed code · before: `L7433` → after: `L7433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7433) · [Before (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7433)

```diff
-             if (null !== lf && 0 === (24 & yR) && lf.has(RR) && lf.delete(RR), RR === si && (Rf = si = null, Jf = 0), 1 < GR.flags ? null !== GR.lastEffect ? (GR.lastEffect.nextEffect = GR, yR = GR.firstEffect) : yR = GR : yR = GR.firstEffect, null !== yR) {
+             if (null !== BE && 0 === (24 & Zr) && BE.has(rr) && BE.delete(rr), rr === sf && (uf = sf = null, rE = 0), 1 < Qr.flags ? null !== Qr.lastEffect ? (Qr.lastEffect.nextEffect = Qr, Zr = Qr.firstEffect) : Zr = Qr : Zr = Qr.firstEffect, null !== Zr) {
```

#### 235. `bundles/bloxd.io/main.js` (Changed code · before: `L7439` → after: `L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7439) · [Before (L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7439)

```diff
-                 else RR: if (iR = (iR = qR.ownerDocument) && iR.defaultView || window, (VR = iR.getSelection && iR.getSelection()) && 0 !== VR.rangeCount) {
+                 else rr: if (fr = (fr = Ir.ownerDocument) && fr.defaultView || window, (pr = fr.getSelection && fr.getSelection()) && 0 !== pr.rangeCount) {
```

#### 236. `bundles/bloxd.io/main.js` (Changed code · before: `L7454` → after: `L7454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7454) · [Before (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7454)

```diff
-                   JR: for (;;) {
+                   Sr: for (;;) {
```

#### 237. `bundles/bloxd.io/main.js` (Changed code · before: `L7526` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7526) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7526)

```diff
-                 null !== qR && lt(WR) && (AR = qR.start, void 0 === (CR = qR.end) && (CR = AR), "selectionStart" in WR ? (WR.selectionStart = AR, WR.selectionEnd = Math.min(CR, WR.value.length)) : (CR = (AR = WR.ownerDocument || document) && AR.defaultView || window).getSelection … [truncated]
+                 null !== Ir && TW(nr) && (er = Ir.start, void 0 === (Kr = Ir.end) && (Kr = er), "selectionStart" in nr ? (nr.selectionStart = er, nr.selectionEnd = Math.min(Kr, nr.value.length)) : (Kr = (er = nr.ownerDocument || document) && er.defaultView || window).getSelection … [truncated]
```

#### 238. `bundles/bloxd.io/main.js` (Changed code · before: `L7569` → after: `L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7569) · [Before (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7569)

```diff
-               Nf || null === xf || (0 !== (8 & Lf.flags) ? tG(Lf, xf) && (Nf = !0) : 13 === Lf.tag && Yi(RR, Lf) && tG(Lf, xf) && (Nf = !0));
+               PE || null === XE || (0 !== (8 & UE.flags) ? WQ(UE, XE) && (PE = !0) : 13 === UE.tag && of(rr, UE) && WQ(UE, XE) && (PE = !0));
```

#### 239. `bundles/bloxd.io/main.js` (Changed code · before: `L7691-L7692` → after: `L7691-L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7691-L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7691-L7692) · [Before (L7691-L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7691-L7692)

```diff
-             else RR: switch (RR) {
-               case BR:
+             else rr: switch (rr) {
+               case Tr:
```

#### 240. `bundles/bloxd.io/main.js` (Changed code · before: `L7694` → after: `L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7694) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7694)

```diff
-               case cR:
+               case Mr:
```

#### 241. `bundles/bloxd.io/main.js` (Changed code · before: `L7697` → after: `L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7697) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7697)

```diff
-               case lR:
+               case vr:
```

#### 242. `bundles/bloxd.io/main.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7700)

```diff
-               case pR:
+               case Or:
```

#### 243. `bundles/bloxd.io/main.js` (Changed code · before: `L7702` → after: `L7702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7702) · [Before (L7702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7702)

```diff
-               case OR:
+               case Pr:
```

#### 244. `bundles/bloxd.io/main.js` (Changed code · before: `L7704` → after: `L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7704) · [Before (L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7704)

```diff
-               case xR:
+               case Hr:
```

#### 245. `bundles/bloxd.io/main.js` (Changed code · before: `L7706` → after: `L7706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7706) · [Before (L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7706)

```diff
-               case PR:
+               case Gr:
```

#### 246. `bundles/bloxd.io/main.js` (Changed code · before: `L7708` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7708) · [Before (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7708)

```diff
-               case IR:
+               case kr:
```

#### 247. `bundles/bloxd.io/main.js` (Changed code · before: `L7712` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7712) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7712)

```diff
-                   case gR:
+                   case Lr:
```

#### 248. `bundles/bloxd.io/main.js` (Changed code · before: `L7715` → after: `L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7715) · [Before (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7715)

```diff
-                   case bR:
+                   case lr:
```

#### 249. `bundles/bloxd.io/main.js` (Changed code · before: `L7718` → after: `L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7718) · [Before (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7718)

```diff
-                   case vR:
+                   case Xr:
```

#### 250. `bundles/bloxd.io/main.js` (Changed code · before: `L7721` → after: `L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7721) · [Before (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7721)

```diff
-                   case NR:
+                   case qr:
```

#### 251. `bundles/bloxd.io/main.js` (Changed code · before: `L7724` → after: `L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7724) · [Before (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7724)

```diff
-                   case DR:
+                   case Rr:
```

#### 252. `bundles/bloxd.io/main.js` (Changed code · before: `L7727` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7727) · [Before (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7727)

```diff
-                   case HR:
+                   case gr:
```

#### 253. `bundles/bloxd.io/main.js` (Changed code · before: `L7731` → after: `L7731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7731) · [Before (L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7731)

```diff
-                 throw Error(ZR(130, null == RR ? RR : typeof RR, ""))
+                 throw Error(jr(130, null == rr ? rr : typeof rr, ""))
```

#### 254. `bundles/bloxd.io/main.js` (Changed code · before: `L7764-L7765` → after: `L7764-L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7764-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7764-L7765) · [Before (L7764-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7764-L7765)

```diff
-             RR: if (GR) {
-               JR: {
+             rr: if (Qr) {
+               Sr: {
```

#### 255. `bundles/bloxd.io/main.js` (Changed code · before: `L7792` → after: `L7792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7792) · [Before (L7792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7792)

```diff
-             return null === JR.context ? JR.context = GR : JR.pendingContext = GR, (JR = XZ(uR, qR)).payload = {
+             return null === Sr.context ? Sr.context = Qr : Sr.pendingContext = Qr, (Sr = Kj(ar, Ir)).payload = {
```

#### 256. `bundles/bloxd.io/main.js` (Changed code · before: `L7794` → after: `L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7794) · [Before (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7794)

```diff
-             }, null !== (yR = void 0 === yR ? null : yR) && (JR.callback = yR), MZ(tR, JR), of(tR, qR, uR), qR
+             }, null !== (Zr = void 0 === Zr ? null : Zr) && (Sr.callback = Zr), yj(Wr, Sr), RE(Wr, Ir, ar), Ir
```

#### 257. `bundles/bloxd.io/main.js` (Changed code · before: `L7804` → after: `L7804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7804) · [Before (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7804)

```diff
-               RR.retryLane = 0 !== GR && GR < JR ? GR : JR
+               rr.retryLane = 0 !== Qr && Qr < Sr ? Qr : Sr
```

#### 258. `bundles/bloxd.io/main.js` (Changed code · before: `L7906` → after: `L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7906) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7906)

```diff
-                       if (null !== (tR = JR.memoizedState) && (tR.lK = null, tR.tail = null, tR.lastEffect = null), Cu(TZ, TZ.current), yR) break;
+                       if (null !== (Wr = Sr.memoizedState) && (Wr.Ox = null, Wr.tail = null, Wr.lastEffect = null), ea(Dj, Dj.current), Zr) break;
```

#### 259. `bundles/bloxd.io/main.js` (Changed code · before: `L7931` → after: `L7931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7931) · [Before (L7931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7931)

```diff
-                 RR: {
+                 rr: {
```

#### 260. `bundles/bloxd.io/main.js` (Changed code · before: `L7957` → after: `L7957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7957) · [Before (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7957)

```diff
-                 return yR = JR.type, tR = JR.pendingProps, ui(RR, JR, yR, tR = JR.elementType === yR ? tR : fZ(yR, tR), GR);
+                 return Zr = Sr.type, Wr = Sr.pendingProps, Wf(rr, Sr, Zr, Wr = Sr.elementType === Zr ? Wr : fj(Zr, Wr), Qr);
```

#### 261. `bundles/bloxd.io/main.js` (Changed code · before: `L7959` → after: `L7959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7959) · [Before (L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7959)

```diff
-                 return yR = JR.type, tR = JR.pendingProps, Zi(RR, JR, yR, tR = JR.elementType === yR ? tR : fZ(yR, tR), GR);
+                 return Zr = Sr.type, Wr = Sr.pendingProps, af(rr, Sr, Zr, Wr = Sr.elementType === Zr ? Wr : fj(Zr, Wr), Qr);
```

#### 262. `bundles/bloxd.io/main.js` (Changed code · before: `L7981` → after: `L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7981) · [Before (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7981)

```diff
-                 return yR = JR.type, tR = JR.pendingProps, Ri(RR, JR, yR, tR = JR.elementType === yR ? tR : fZ(yR, tR), GR);
+                 return Zr = Sr.type, Wr = Sr.pendingProps, uI(rr, Sr, Zr, Wr = Sr.elementType === Zr ? Wr : fj(Zr, Wr), Qr);
```

#### 263. `bundles/bloxd.io/main.js` (Changed code · before: `L7988` → after: `L7988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L7988) · [Before (L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L7988)

```diff
-                 RR: {
+                 rr: {
```

#### 264. `bundles/bloxd.io/main.js` (Changed code · before: `L8039` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8039) · [Before (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8039)

```diff
-                 return yR = JR.type, tR = JR.pendingProps, tR = JR.elementType === yR ? tR : fZ(yR, tR), null !== RR && (RR.alternate = null, JR.alternate = null, JR.flags |= 2), JR.tag = 1, gu(yR) ? (RR = !0, xu(JR)) : RR = !1, nZ(JR, GR), xZ(JR, yR, tR), DZ(JR, yR, tR, GR), qi( … [truncated]
+                 return Zr = Sr.type, Wr = Sr.pendingProps, Wr = Sr.elementType === Zr ? Wr : fj(Zr, Wr), null !== rr && (rr.alternate = null, Sr.alternate = null, Sr.flags |= 2), Sr.tag = 1, Oa(Zr) ? (rr = !0, Pa(Sr)) : rr = !1, hj(Sr, Qr), Pj(Sr, Zr, Wr), qj(Sr, Zr, Wr, Qr), jf( … [truncated]
```

#### 265. `bundles/bloxd.io/main.js` (Changed code · before: `L8056` → after: `L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8056) · [Before (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8056)

```diff
-             13 === RR.tag && (of(RR, 4, Df()), pV(RR, 4))
+             13 === rr.tag && (RE(rr, 4, HE()), Bp(rr, 4))
```

#### 266. `bundles/bloxd.io/main.js` (Changed code · before: `L8058` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8058) · [Before (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8058)

```diff
-             13 === RR.tag && (of(RR, 67108864, Df()), pV(RR, 67108864))
+             13 === rr.tag && (RE(rr, 67108864, HE()), Bp(rr, 67108864))
```

#### 267. `bundles/bloxd.io/main.js` (Changed code · before: `L8063` → after: `L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8063) · [Before (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8063)

```diff
-               of(RR, GR, JR), pV(RR, GR)
+               RE(rr, Qr, Sr), Bp(rr, Qr)
```

#### 268. `bundles/bloxd.io/main.js` (Changed code · before: `L8196-L8198` → after: `L8196-L8198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8196-L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8196-L8198) · [Before (L8196-L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8196-L8198)

```diff
-         }, , (RR, JR, GR) => {
-           RR.exports = GR(94)
-         }, , , (RR, JR) => {
+         }, , , , , (rr, Sr, Qr) => {
+           rr.exports = Qr(107)
+         }, , , , (rr, Sr) => {
```

#### 269. `bundles/bloxd.io/main.js` (Changed code · before: `L8275` → after: `L8275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8275) · [Before (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8275)

```diff
-             RR: for (;;) {
+             rr: for (;;) {
```

#### 270. `bundles/bloxd.io/main.js` (Changed code · before: `L8293` → after: `L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8293) · [Before (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8293)

```diff
-                 RR: for (var yR = 0, tR = RR.length; yR < tR;) {
+                 rr: for (var Zr = 0, Wr = rr.length; Zr < Wr;) {
```

#### 271. `bundles/bloxd.io/main.js` (Changed code · before: `L8312` → after: `L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8312) · [Before (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8312)

```diff
-             return 0 !== GR ? GR : RR.id - JR.id
+             return 0 !== Qr ? Qr : rr.id - Sr.id
```

#### 272. `bundles/bloxd.io/main.js` (Changed code · before: `L8352` → after: `L8352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8352) · [Before (L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8352)

```diff
-                   GR = JR.unstable_now(), "function" === typeof qR ? vR.callback = qR : vR === MR(pR) && BR(pR), HR(GR)
+                   Qr = Sr.unstable_now(), "function" === typeof Ir ? Xr.callback = Ir : Xr === Br(Or) && Tr(Or), gr(Qr)
```

#### 273. `bundles/bloxd.io/main.js` (Changed code · before: `L8412` → after: `L8412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8412) · [Before (L8412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8412)

```diff
-             switch ("object" === typeof ZR && null !== ZR ? ZR = "number" === typeof(ZR = ZR.delay) && 0 < ZR ? qR + ZR : qR : ZR = qR, RR) {
+             switch ("object" === typeof jr && null !== jr ? jr = "number" === typeof(jr = jr.delay) && 0 < jr ? Ir + jr : Ir : jr = Ir, rr) {
```

#### 274. `bundles/bloxd.io/main.js` (Changed code · before: `L8448` → after: `L8448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8448) · [Before (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8448)

```diff
-         }, , , , , , , , , (RR, JR, GR) => {
+         }, , (rr, Sr, Qr) => {
```

#### 275. `bundles/bloxd.io/main.js` (Changed code · before: `L8489-L8492` → after: `L8489-L8490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8489-L8490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8489-L8490) · [Before (L8489-L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8489-L8492)

```diff
-           var yR = GR(182),
-             tR = GR(203),
-             uR = GR(107),
-             ZR = GR.n(uR),
+           var Zr = Qr(190),
+             Wr = Qr(208),
```

#### 276. `bundles/bloxd.io/main.js` (Changed code · before: `L8494-L8501` → after: `L8492-L8501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8492-L8501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8492-L8501) · [Before (L8494-L8501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8494-L8501)

```diff
-             iR = GR(116),
-             fR = GR(123),
-             VR = GR(46),
-             KR = GR(134),
-             wR = GR(168),
-             rR = GR(173),
-             eR = GR(132);
-           KR.subsiteUsed && !KR.subsiteUsedData[KR.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${KR.subsiteUsed} but it is not enabled`);
+             jr = Qr.n(ar),
+             Ir = Qr(120),
+             fr = Qr(124),
+             Er = Qr(127),
+             pr = Qr(43),
+             xr = Qr(139),
+             mr = Qr(170),
+             Nr = Qr(174),
+             Ur = Qr(135);
+           xr.subsiteUsed && !xr.subsiteUsedData[xr.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${xr.subsiteUsed} but it is not enabled`);
```

#### 277. `bundles/bloxd.io/main.js` (Changed code · before: `L8509` → after: `L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8509) · [Before (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8509)

```diff
-             return [`Browser: ${UR()}`, `Version: ${WR()}`, `Platform: ${navigator.platform}`, `Platform Type: ${pR()}`, `Input Type: ${(0,iR.c)()}`].join(RR)
+             return [`Browser: ${Yr()}`, `Version: ${nr()}`, `Platform: ${navigator.platform}`, `Platform Type: ${Or()}`, `Input Type: ${(0,fr.b)()}`].join(rr)
```

#### 278. `bundles/bloxd.io/main.js` (Changed code · before: `L8537` → after: `L8537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8537) · [Before (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8537)

```diff
-             return LR().getPlatformType() || ("touchOnly" === (0, iR.c)() ? "tablet" : "desktop")
+             return hr().getPlatformType() || ("touchOnly" === (0, fr.b)() ? "tablet" : "desktop")
```

#### 279. `bundles/bloxd.io/main.js` (Changed code · before: `L8556` → after: `L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8556) · [Before (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8556)

```diff
-             return "macos" === RR && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== RR || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, iR.c)() ? yR.y.includes(RR) ? RR : "other" : "android"
+             return "macos" === rr && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== rr || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, fr.b)() ? Zr.B.includes(rr) ? rr : "other" : "android"
```

#### 280. `bundles/bloxd.io/main.js` (Changed code · before: `L8569` → after: `L8569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8569) · [Before (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8569)

```diff
-             return yR.D.includes(RR) ? RR : "other"
+             return Zr.N.includes(rr) ? rr : "other"
```

#### 281. `bundles/bloxd.io/main.js` (Changed code · before: `L8574` → after: `L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8574) · [Before (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8574)

```diff
-             return !oR() && ("mobile" === RR || "tablet" === RR || "touchOnly" === (0, iR.c)() || qR.currentUrl.hasSearchParam("mobile"))
+             return !Cr() && ("mobile" === rr || "tablet" === rr || "touchOnly" === (0, fr.b)() || Ir.currentUrl.hasSearchParam("mobile"))
```

#### 282. `bundles/bloxd.io/main.js` (Changed code · before: `L8586` → after: `L8586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8586) · [Before (L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8586)

```diff
-             return (0, yR.r)(KR.siteUsed)
+             return (0, Zr.s)(xr.siteUsed)
```

#### 283. `bundles/bloxd.io/main.js` (Changed code · before: `L8590` → after: `L8590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8590) · [Before (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8590)

```diff
-             return OR() || "mouseOnly" !== (0, iR.c)() || navigator.maxTouchPoints > 0
+             return Pr() || "mouseOnly" !== (0, fr.b)() || navigator.maxTouchPoints > 0
```

#### 284. `bundles/bloxd.io/main.js` (Changed code · before: `L8610-L8611` → after: `L8610-L8611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8610-L8611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8610-L8611) · [Before (L8610-L8611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8610-L8611)

```diff
-               useRecaptcha: !tR.g.recaptchaDisabled && !(0, KR.isDiscordClient)(),
-               useTurnstile: !tR.g.turnstileDisabled && !(0, KR.isDiscordClient)() && "mobileIos" !== KR.siteUsed && !wR.e,
+               useRecaptcha: !Wr.i.recaptchaDisabled && !(0, xr.isDiscordClient)(),
+               useTurnstile: !Wr.i.turnstileDisabled && !(0, xr.isDiscordClient)() && "mobileIos" !== xr.siteUsed && !mr.c,
```

#### 285. `bundles/bloxd.io/main.js` (Changed code · before: `L8663-L8664` → after: `L8663-L8664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8663-L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8663-L8664) · [Before (L8663-L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8663-L8664)

```diff
-               const RR = (0, eR.w)();
-               return void 0 === RR ? "not_probed" : (0, rR.e)(RR)
+               const rr = (0, Ur.y)();
+               return void 0 === rr ? "not_probed" : (0, Nr.b)(rr)
```

#### 286. `bundles/bloxd.io/main.js` (Changed code · before: `L8666` → after: `L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/main.js#L8666) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/main.js#L8666)

```diff
-             return hR ??= (0, rR.e)((0, eR.B)()), hR
+             return ur ??= (0, Nr.b)((0, Ur.D)()), ur
```
