# Changed — Bundle Modifications Report (Part 137 / 140)

- **Updated at**: `2026-11-24T11:40 JST`
- **Part**: `137 / 140` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 136](part-136.md) · [Part 138 →](part-138.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (31kiid.1299b0d6 → fqwnlq.985c8f39 · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1179 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 787. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7736-L7740` → after: `L7736-L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7736-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7736-L7740) · [Before (L7736-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7736-L7740)

```diff
-             for (let ik = 0; ik < Xk.x; ik += lk.D)
-               for (let Fk = 0; Fk < Xk.y; Fk += lk.D)
-                 for (let Ik = 0; Ik < Xk.z; Ik += lk.D) {
-                   const yk = qk()(new Uint16Array(lk.D * lk.D * lk.D), [lk.D, lk.D, lk.D]),
-                     ak = kk.getRLEChunk((0, lk.X)(ik), (0, lk.X)(Fk), (0, lk.X)(Ik));
+             for (let XS = 0; XS < tS.x; XS += NS.x)
+               for (let HS = 0; HS < tS.y; HS += NS.x)
+                 for (let gS = 0; gS < tS.z; gS += NS.x) {
+                   const xS = uS()(new Uint16Array(NS.x * NS.x * NS.x), [NS.x, NS.x, NS.x]),
+                     qS = SS.getRLEChunk((0, NS.T)(XS), (0, NS.T)(HS), (0, NS.T)(gS));
```

#### 788. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7742-L7744` → after: `L7742-L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7742-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7742-L7744) · [Before (L7742-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7742-L7744)

```diff
-                   const tk = Math.min(lk.D, Xk.x - ik),
-                     Zk = Math.min(lk.D, Xk.y - Fk),
-                     jk = Math.min(lk.D, Xk.z - Ik);
+                   const fS = Math.min(NS.x, tS.x - XS),
+                     kS = Math.min(NS.x, tS.y - HS),
+                     aS = Math.min(NS.x, tS.z - gS);
```

#### 789. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7784` → after: `L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7784) · [Before (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7784)

```diff
-       39662: (kk, Fk, Ik) => {
+       39727: (SS, HS, gS) => {
```

#### 790. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7787-L7788` → after: `L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7788) · [Before (L7787-L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7787-L7788)

```diff
-           g: () => ak,
-           j: () => lk
+           g: () => NS
```

#### 791. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7790-L7793` → after: `L7790-L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793) · [Before (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793)

```diff
-         var Xk = Ik(39665),
-           Tk = Ik(39678),
-           ik = Ik(39669),
-           yk = Ik(39683);
+         var tS = gS(39733),
+           bS = gS(39740),
+           XS = gS(39735),
+           xS = gS(39747);
```

#### 792. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7796` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7796) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7796)

```diff
-           return new Xk.l([{
+           return new tS.j([{
```

#### 793. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7802` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7802) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7802)

```diff
-           }], `${kk}GlobalHeightmapOffset`)
+           }], `${SS}GlobalHeightmapOffset`)
```

#### 794. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7838` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7838) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7838)

```diff
-             null !== jk && (qk = jk, Lk = ik.p, tk = jk - ik.g, Zk = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(kk, Fk, Tk, yk, Ik, qk, Lk, tk, Zk)
+             null !== aS && (uS = aS, IS = XS.n, fS = aS - XS.g, kS = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(SS, HS, bS, xS, gS, uS, IS, fS, kS)
```

#### 795. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7851-L7852` → after: `L7851-L7852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7851-L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7851-L7852) · [Before (L7851-L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7851-L7852)

```diff
-               jk = ik.p,
-               ek = ik.m,
+               aS = XS.n,
+               KS = XS.j,
```

#### 796. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7862` → after: `L7862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7862) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7862)

```diff
-                 Fk < 1 && (jk = qk + Math.floor((ak - qk) * Fk), Zk >= jk && (jk = ik.p, wk = ik.j))
+                 HS < 1 && (aS = uS + Math.floor((qS - uS) * HS), kS >= aS && (aS = XS.n, jS = XS.h))
```

#### 797. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7880-L7881` → after: `L7880-L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7880-L7881) · [Before (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7880-L7881)

```diff
-             const Zk = yk.c.smoothHeightmapForFixedPointPrefab(Math.round(kk + Ik / 4), Math.round(Fk + Xk / 4), ak, this.nearestFixedPrefabInfoForChunk);
-             null !== Zk && qk > (ak = Zk) && (qk = ik.p, tk = 0), lk.set(kk, Fk, Tk.e.GroundHeight, ak), lk.set(kk, Fk, Tk.e.WaterHeight, qk), lk.set(kk, Fk, Tk.e.CavesAllowedBelowY, Lk), lk.set(kk, Fk, Tk.e.IsLake, tk), this.shouldCurtailCave(kk, Fk, null !== Zk) && lk.set(kk, F … [truncated]
+             const kS = xS.d.smoothHeightmapForFixedPointPrefab(Math.round(SS + gS / 4), Math.round(HS + tS / 4), qS, this.nearestFixedPrefabInfoForChunk);
+             null !== kS && uS > (qS = kS) && (uS = XS.n, fS = 0), NS.set(SS, HS, bS.f.GroundHeight, qS), NS.set(SS, HS, bS.f.WaterHeight, uS), NS.set(SS, HS, bS.f.CavesAllowedBelowY, IS), NS.set(SS, HS, bS.f.IsLake, fS), this.shouldCurtailCave(SS, HS, null !== kS) && NS.set(SS, H … [truncated]
```

#### 798. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7893` → after: `L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7893) · [Before (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7893)

```diff
-       39707: (kk, Fk, Ik) => {
+       39766: (SS, HS, gS) => {
```

#### 799. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7897-L7898` → after: `L7897-L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898) · [Before (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898)

```diff
-         var Xk = Ik(39665),
-           Tk = Ik(39712),
+         var tS = gS(39733),
+           bS = gS(39774),
```

#### 800. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7900-L7902` → after: `L7900-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902) · [Before (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902)

```diff
-           yk = Ik(4221),
-           lk = Ik(39756);
-         const ak = new lk.b("point cells", 500, 6e4);
+           xS = gS(4370),
+           NS = gS(39811);
+         const qS = new NS.d("point cells", 500, 6e4);
```

#### 801. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7919` → after: `L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919) · [Before (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919)

```diff
-             if (this.gridSize < Ik) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${Ik} (chunkSize=${kk}, halfBox=${Fk}). Points near chunk edges would be missed.`)
+             if (this.gridSize < gS) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${gS} (chunkSize=${SS}, halfBox=${HS}). Points near chunk edges would be missed.`)
```

#### 802. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7926` → after: `L7926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7926) · [Before (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7926)

```diff
-             return !!Xk.has((0, lk.d)(kk, Fk))
+             return !!tS.has((0, NS.f)(SS, HS))
```

#### 803. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7935` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935)

```diff
-               const Ik = (0, Xk.L)(ak, kk, Fk);
+               const gS = (0, tS.K)(qS, SS, HS);
```

#### 804. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7964` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964) · [Before (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964)

```diff
-               const kk = (0, Xk.L)(qk, Fk, Ik);
+               const SS = (0, tS.K)(uS, HS, gS);
```

#### 805. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7976` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976) · [Before (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976)

```diff
-               const tk = (0, Xk.L)(Lk, Fk, Ik) - yk;
+               const fS = (0, tS.K)(IS, HS, gS) - xS;
```

#### 806. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009)

```diff
-               const ik = new yk.f(`${kk}${Fk}${this.seed}jitter`);
+               const XS = new xS.i(`${SS}${HS}${this.seed}jitter`);
```

#### 807. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8020` → after: `L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020) · [Before (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020)

```diff
-               const lk = new yk.f(`${kk}${Fk}${this.seed}pts`),
+               const NS = new xS.i(`${SS}${HS}${this.seed}pts`),
```

#### 808. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8048` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8048) · [Before (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8048)

```diff
-               for (const kk of Tk) ak.add((0, lk.d)(kk[0], kk[1]))
+               for (const SS of bS) qS.add((0, NS.f)(SS[0], SS[1]))
```

#### 809. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8052` → after: `L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052)

```diff
-               points: this.useKthClosestPoint ? Tk : null
+               points: this.useKthClosestPoint ? bS : null
```

#### 810. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8057` → after: `L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057)

```diff
-       39776: (kk, Fk, Ik) => {
+       39831: (SS, HS, gS) => {
```

#### 811. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8061-L8070` → after: `L8061-L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070) · [Before (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070)

```diff
-         var Xk = Ik(39665),
-           Tk = Ik(39707),
-           ik = Ik(39678),
-           yk = Ik(39669),
-           lk = Ik(37749),
-           ak = Ik(39771),
-           qk = Ik(609),
-           Lk = Ik(628),
-           tk = Ik(39143),
-           Zk = Ik(4221);
+         var tS = gS(39733),
+           bS = gS(39766),
+           XS = gS(39740),
+           xS = gS(39735),
+           NS = gS(37750),
+           qS = gS(39824),
+           uS = gS(650),
+           IS = gS(680),
+           fS = gS(39153),
+           kS = gS(4370);
```

#### 812. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8085` → after: `L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085) · [Before (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085)

```diff
-             return null !== (Fk = wk[this.suffixMapping[kk]]) && void 0 !== Fk ? Fk : []
+             return null !== (HS = jS[this.suffixMapping[SS]]) && void 0 !== HS ? HS : []
```

#### 813. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8104` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104)

```diff
-               Fk[Ik] = (null !== (yk = Fk[Ik]) && void 0 !== yk ? yk : 0) + 1, Fk[Ik] >= Jk && Xk.splice(Xk.indexOf(Ik), 1)
+               HS[gS] = (null !== (xS = HS[gS]) && void 0 !== xS ? xS : 0) + 1, HS[gS] >= CS && tS.splice(tS.indexOf(gS), 1)
```

#### 814. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171)

```diff
-             return `r${kk}|m${Number(Fk)}`
+             return `r${SS}|m${Number(HS)}`
```

#### 815. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8205` → after: `L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205) · [Before (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205)

```diff
-             const [, jk, ek] = null !== (Tk = Qk.exec(tk)) && void 0 !== Tk ? Tk : [];
+             const [, aS, KS] = null !== (bS = DS.exec(fS)) && void 0 !== bS ? bS : [];
```

#### 816. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8208` → after: `L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208)

```diff
-               Zk = null !== (wk = null === (Hk = ik[`${Lk}|meta|${[Kk.split("").filter(((kk,Fk)=>jk.split("").some((kk=>{const Ik=Kk.indexOf(kk);return((Xk?3-Ik:Ik)+yk)%4===Fk})))).join(""),ek].filter(Boolean).join("|")}`]) || void 0 === Hk ? void 0 : Hk.id) && void 0 !== wk ? wk … [truncated]
+               kS = null !== (jS = null === (GS = XS[`${IS}|meta|${[QS.split("").filter(((SS,HS)=>aS.split("").some((SS=>{const gS=QS.indexOf(SS);return((tS?3-gS:gS)+xS)%4===HS})))).join(""),KS].filter(Boolean).join("|")}`]) || void 0 === GS ? void 0 : GS.id) && void 0 !== jS ? jS … [truncated]
```

#### 817. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8213` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213)

```diff
-               let Fk = tk.replace(`rot${qk}`, `rot${kk}`);
+               let HS = fS.replace(`rot${uS}`, `rot${SS}`);
```

#### 818. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8218` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218)

```diff
-                 Fk = `${Tk[1]}|${kk.join("")}`
+                 HS = `${bS[1]}|${SS.join("")}`
```

#### 819. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8220-L8221` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221)

```diff
-               const yk = `${Lk}|${Fk}`;
-               if (Zk = null !== (Jk = null === (xk = ik[yk]) || void 0 === xk ? void 0 : xk.id) && void 0 !== Jk ? Jk : null, null === Zk) {
+               const xS = `${IS}|${HS}`;
+               if (kS = null !== (CS = null === (nS = XS[xS]) || void 0 === nS ? void 0 : nS.id) && void 0 !== CS ? CS : null, null === kS) {
```

#### 820. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8229` → after: `L8229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8229) · [Before (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8229)

```diff
-         var zk = Ik(2775),
+         var ZS = gS(2990),
```

#### 821. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231)

```diff
-           vk = Ik(39683);
+           OS = gS(39747);
```

#### 822. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8236-L8238` → after: `L8236-L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8236-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8236-L8238) · [Before (L8236-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8236-L8238)

```diff
-             const ak = Ik.getOrGenerate(kk, Fk, lk, ik.d.FloorY);
-             if (ak === yk.n) continue;
-             nk(Tk, ak, Ik.getOrGenerate(kk, Fk, lk, ik.d.CeilingY))
+             const qS = gS.getOrGenerate(SS, HS, NS, XS.e.FloorY);
+             if (qS === xS.l) continue;
+             vS(bS, qS, gS.getOrGenerate(SS, HS, NS, XS.e.CeilingY))
```

#### 823. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8259` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259)

```diff
-         const Gk = new Zk.d([{
+         const ES = new kS.f([{
```

#### 824. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8272` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272)

```diff
-           pk = new Zk.d([{
+           LS = new kS.f([{
```

#### 825. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8282` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282)

```diff
-         const Rk = new Zk.d(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const yS = new kS.f(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 826. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8291` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291)

```diff
-             const Fk = `${Rk.sample(kk)} ${this.mobType}`;
+             const HS = `${yS.sample(SS)} ${this.mobType}`;
```

#### 827. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8307` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307)

```diff
-               const kk = new Zk.i(Xk.minItems, Xk.maxItems + 1),
+               const SS = new kS.l(tS.minItems, tS.maxItems + 1),
```

#### 828. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8311-L8312` → after: `L8311-L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312) · [Before (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312)

```diff
-                 const kk = Fk.amount ? new Zk.i(Fk.amount.min, Fk.amount.max + 1) : null,
-                   Xk = null !== (Ik = Fk.itemAttributesDistribution) && void 0 !== Ik ? Ik : null;
+                 const SS = HS.amount ? new kS.l(HS.amount.min, HS.amount.max + 1) : null,
+                   tS = null !== (gS = HS.itemAttributesDistribution) && void 0 !== gS ? gS : null;
```

#### 829. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8322` → after: `L8322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322)

```diff
-               const ik = new Zk.d(Tk);
+               const XS = new kS.f(bS);
```

#### 830. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8328` → after: `L8328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328) · [Before (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328)

```diff
-             this.itemCategoryDistributions = Fk, this.shouldEnchantDistribution = new Zk.c(kk.enchantmentProbability), this.enchantmentTier = kk.enchantmentTier
+             this.itemCategoryDistributions = HS, this.shouldEnchantDistribution = new kS.b(SS.enchantmentProbability), this.enchantmentTier = SS.enchantmentTier
```

#### 831. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8331` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331) · [Before (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331)

```diff
-             const Fk = Array(Lk.i).fill(null);
+             const HS = Array(IS.j).fill(null);
```

#### 832. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8339-L8341` → after: `L8339-L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341) · [Before (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341)

```diff
-                   Zk = null !== (Xk = null === (Tk = Lk.amountDistribution) || void 0 === Tk ? void 0 : Tk.sample(kk)) && void 0 !== Xk ? Xk : null,
-                   jk = null !== (ik = null === (yk = Lk.attributesDistribution) || void 0 === yk ? void 0 : yk.sample(kk)) && void 0 !== ik ? ik : {},
-                   ek = null !== (lk = this.getEnchantmentAttributesForItem(kk, tk)) && void 0 !== lk ? lk : {};
+                   kS = null !== (tS = null === (bS = IS.amountDistribution) || void 0 === bS ? void 0 : bS.sample(SS)) && void 0 !== tS ? tS : null,
+                   aS = null !== (XS = null === (xS = IS.attributesDistribution) || void 0 === xS ? void 0 : xS.sample(SS)) && void 0 !== XS ? XS : {},
+                   KS = null !== (NS = this.getEnchantmentAttributesForItem(SS, fS)) && void 0 !== NS ? NS : {};
```

#### 833. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8348` → after: `L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348) · [Before (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348)

```diff
-                       ...null !== (ak = jk.customAttributes) && void 0 !== ak ? ak : {},
+                       ...null !== (qS = aS.customAttributes) && void 0 !== qS ? qS : {},
```

#### 834. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8355)

```diff
-             return (0, Zk.n)(Fk, kk), Fk
+             return (0, kS.r)(HS, SS), HS
```

#### 835. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8642` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8642) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8642)

```diff
-             name: `${kk} Pickaxe`,
+             name: `${SS} Pickaxe`,
```

#### 836. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8646)

```diff
-             name: `${kk} Axe`,
+             name: `${SS} Axe`,
```

#### 837. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8650` → after: `L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8650) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8650)

```diff
-             name: `${kk} Spade`,
+             name: `${SS} Spade`,
```

#### 838. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8654` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8654) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8654)

```diff
-             name: `${kk} Hoe`,
+             name: `${SS} Hoe`,
```

#### 839. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8661` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661)

```diff
-           if (Fk < 0 || Fk > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${Fk}`);
+           if (HS < 0 || HS > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${HS}`);
```

#### 840. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8685` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8685) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8685)

```diff
-             name: `${kk} Sword`,
+             name: `${SS} Sword`,
```

#### 841. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8689` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8689) · [Before (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8689)

```diff
-             name: `${kk} Bow`,
+             name: `${SS} Bow`,
```

#### 842. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8693` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8693) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8693)

```diff
-             name: `${kk} Crossbow`,
+             name: `${SS} Crossbow`,
```

#### 843. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8706` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8706) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8706)

```diff
-           if (kk === ck.STONE) throw new Error(`${kk} armour is not supported`);
+           if (SS === zS.STONE) throw new Error(`${SS} armour is not supported`);
```

#### 844. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8708` → after: `L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8708) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8708)

```diff
-               name: `${kk} Helmet`,
+               name: `${SS} Helmet`,
```

#### 845. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8712` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8712) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8712)

```diff
-               name: `${kk} Chestplate`,
+               name: `${SS} Chestplate`,
```

#### 846. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8716` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8716) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8716)

```diff
-               name: `${kk} Gauntlets`,
+               name: `${SS} Gauntlets`,
```

#### 847. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8720` → after: `L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8720) · [Before (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8720)

```diff
-               name: `${kk} Leggings`,
+               name: `${SS} Leggings`,
```

#### 848. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8724` → after: `L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8724) · [Before (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8724)

```diff
-               name: `${kk} Boots`,
+               name: `${SS} Boots`,
```

#### 849. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8732)

```diff
-           [Lk.h.COMMON]: new Ck({
+           [IS.i.COMMON]: new iS({
```

#### 850. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8761` → after: `L8761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8761) · [Before (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8761)

```diff
-           [Lk.h.UNCOMMON]: new Ck({
+           [IS.i.UNCOMMON]: new iS({
```

#### 851. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8790` → after: `L8790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8790) · [Before (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8790)

```diff
-           [Lk.h.RARE]: new Ck({
+           [IS.i.RARE]: new iS({
```

#### 852. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8819` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8819) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8819)

```diff
-           [Lk.h.EPIC]: new Ck({
+           [IS.i.EPIC]: new iS({
```

#### 853. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8856` → after: `L8856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8856) · [Before (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8856)

```diff
-           [Lk.h.LEGENDARY]: new Ck({
+           [IS.i.LEGENDARY]: new iS({
```

#### 854. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8981` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981) · [Before (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981)

```diff
-             const kk = new Zk.f(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
+             const SS = new kS.i(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
```

#### 855. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8986` → after: `L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8986) · [Before (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8986)

```diff
-                   chestStr: (0, Lk.G)(Fk),
+                   chestStr: (0, IS.A)(HS),
```

#### 856. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8996` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996)

```diff
-             this.seed = void 0, this.se = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.JK = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 857. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999)

```diff
-               se: Ik,
+               JK: gS,
```

#### 858. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005)

```diff
-             iF.BLOCK_ID_MAPPINGS || (iF.BLOCK_ID_MAPPINGS = new Vk(Xk)), uk || (uk = new ek(yk)), this.seed = Fk, this.se = Ik, this.invisibleSolidBlockId = Xk["Invisible Solid"].id, this.emptySpawnerBlockId = Xk["Empty Spawner Block"].id, this.chestToLootChestBlockId = new qk.c( … [truncated]
+             bH.BLOCK_ID_MAPPINGS || (bH.BLOCK_ID_MAPPINGS = new hS(tS)), YS || (YS = new KS(xS)), this.seed = HS, this.JK = gS, this.invisibleSolidBlockId = tS["Invisible Solid"].id, this.emptySpawnerBlockId = tS["Empty Spawner Block"].id, this.chestToLootChestBlockId = new uS.c( … [truncated]
```

#### 859. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9012` → after: `L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012)

```diff
-             for (const Tk of ik.p) Lk[Tk] = Xk[`${Tk} Spawner Block`].id;
+             for (const bS of XS.o) IS[bS] = tS[`${bS} Spawner Block`].id;
```

#### 860. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9027` → after: `L9027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027)

```diff
-                   ak = new Tk.e(`prefab|${kk}|${yk}`, lk.minDistanceBetweenPrefabs, !1, !0, Fk, Xk, Ik, null, !0)
+                   qS = new bS.e(`prefab|${SS}|${xS}`, NS.minDistanceBetweenPrefabs, !1, !0, HS, tS, gS, null, !0)
```

#### 861. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9041` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041)

```diff
-             return new Zk.f(`${kk}|${Fk}|${this.seed}|prefabGenerator`)
+             return new kS.i(`${SS}|${HS}|${this.seed}|prefabGenerator`)
```

#### 862. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070)

```diff
-               qk = this.se >> 1,
+               uS = this.JK >> 1,
```

#### 863. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9072` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072)

```diff
-               Zk = kk + this.se + this.prefabRadius,
+               kS = SS + this.JK + this.prefabRadius,
```

#### 864. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9074` → after: `L9074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074)

```diff
-               ek = Fk + this.se + this.prefabRadius;
+               KS = HS + this.JK + this.prefabRadius;
```

#### 865. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9082` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082)

```diff
-                 if (Hk === ik.m.SURFACE && xk === ik.k.VERY_HIGH && !lk.regionMayHaveVeryHighSurfacePrefabs(Lk, jk, Zk, ek)) continue;
+                 if (GS === XS.l.SURFACE && nS === XS.j.VERY_HIGH && !NS.regionMayHaveVeryHighSurfacePrefabs(IS, aS, kS, KS)) continue;
```

#### 866. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9092` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092) · [Before (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092)

```diff
-                   if (Hk === ik.m.SURFACE && !qk.canPlaceSurfacePrefab(Fk, lk)) continue;
+                   if (GS === XS.l.SURFACE && !uS.canPlaceSurfacePrefab(HS, NS)) continue;
```

#### 867. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9111` → after: `L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111) · [Before (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111)

```diff
-                       console.error(`Invalid prefab rotation: ${Pk}`)
+                       console.error(`Invalid prefab rotation: ${PS}`)
```

#### 868. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9128` → after: `L9128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128)

```diff
-                   if (Hk === ik.m.SURFACE && null !== qk.maxSurfacePrefabRelief) {
+                   if (GS === XS.l.SURFACE && null !== uS.maxSurfacePrefabRelief) {
```

#### 869. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9135)

```diff
-                   const Ok = new tk.d;
+                   const cS = new fS.c;
```

#### 870. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9143` → after: `L9143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9143) · [Before (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9143)

```diff
-                   const nk = new tk.d;
+                   const vS = new fS.c;
```

#### 871. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173)

```diff
-                 const Xk = Tk.getOrGenerate(kk + Lk, Fk + Ik, ik.e.GroundHeight);
+                 const tS = bS.getOrGenerate(SS + IS, HS + gS, XS.f.GroundHeight);
```

#### 872. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9194-L9195` → after: `L9194-L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195) · [Before (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195)

```diff
-                 lk: kk,
-                 ak: Ik
+                 NS: SS,
+                 qS: gS
```

#### 873. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9208` → after: `L9208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208)

```diff
-                   if (Ik.getOrGenerate(qk, kk, ik.e.WaterHeight) !== yk.p) return {
+                   if (gS.getOrGenerate(uS, SS, XS.f.WaterHeight) !== xS.n) return {
```

#### 874. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9212-L9213` → after: `L9212-L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213) · [Before (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213)

```diff
-                   const Fk = Ik.getOrGenerate(qk, kk, ik.e.GroundHeight);
-                   if (ak.e.isInCave(qk, Fk, kk, Xk)) return {
+                   const HS = gS.getOrGenerate(uS, SS, XS.f.GroundHeight);
+                   if (qS.b.isInCave(uS, HS, SS, tS)) return {
```

#### 875. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9217` → after: `L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9217) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9217)

```diff
-                   if (vk.c.isNearFixedPointPrefab(qk, kk, Tk)) return {
+                   if (OS.d.isNearFixedPointPrefab(uS, SS, bS)) return {
```

#### 876. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9264-L9265` → after: `L9264-L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265) · [Before (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265)

```diff
-             if (lk === this.emptySpawnerBlockId && (lk = null !== (ak = Xk.spawnerBlockLocationToBlockId.get(kk, Fk, Ik)) && void 0 !== ak ? ak : this.defaultSpawnerBlockId), lk < 0) return lk;
-             if (lk = null !== (ik = null === (yk = Xk.blockIdMapping) || void 0 === yk ? void 0 : yk[lk]) && void 0 !== ik ? ik : lk, void 0 !== this.chestToLootChestBlockId.reverseGet(lk)) {
+             if (NS === this.emptySpawnerBlockId && (NS = null !== (qS = tS.spawnerBlockLocationToBlockId.get(SS, HS, gS)) && void 0 !== qS ? qS : this.defaultSpawnerBlockId), NS < 0) return NS;
+             if (NS = null !== (XS = null === (xS = tS.blockIdMapping) || void 0 === xS ? void 0 : xS[NS]) && void 0 !== XS ? XS : NS, void 0 !== this.chestToLootChestBlockId.reverseGet(NS)) {
```

#### 877. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267)

```diff
-               const ik = null !== (qk = Xk.chestLocationToQuality.get(kk, Fk, Ik)) && void 0 !== qk ? qk : iF.DEFAULT_CHEST_QUALITY,
+               const XS = null !== (uS = tS.chestLocationToQuality.get(SS, HS, gS)) && void 0 !== uS ? uS : bH.DEFAULT_CHEST_QUALITY,
```

#### 878. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9294` → after: `L9294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9294) · [Before (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9294)

```diff
-             } = kk, ik = Sk()(new Int32Array(Ik * Xk * Tk), [Ik, Xk, Tk]), yk = new tk.d;
+             } = SS, XS = JS()(new Int32Array(gS * tS * bS), [gS, tS, bS]), xS = new fS.c;
```

#### 879. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9296` → after: `L9296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9296) · [Before (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9296)

```diff
-             const ak = new tk.d;
+             const qS = new fS.c;
```

#### 880. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9298-L9302` → after: `L9298-L9302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302) · [Before (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302)

```diff
-             for (let qk = 0; qk < Ik; qk += Lk.D)
-               for (let Fk = 0; Fk < Xk; Fk += Lk.D)
-                 for (let tk = 0; tk < Tk; tk += Lk.D) {
-                   const Zk = Sk()(new Uint16Array(Lk.D * Lk.D * Lk.D), [Lk.D, Lk.D, Lk.D]),
-                     jk = kk.schematic.getRLEChunk((0, Lk.X)(qk), (0, Lk.X)(Fk), (0, Lk.X)(tk));
+             for (let uS = 0; uS < gS; uS += IS.x)
+               for (let HS = 0; HS < tS; HS += IS.x)
+                 for (let fS = 0; fS < bS; fS += IS.x) {
+                   const kS = JS()(new Uint16Array(IS.x * IS.x * IS.x), [IS.x, IS.x, IS.x]),
+                     aS = SS.schematic.getRLEChunk((0, IS.T)(uS), (0, IS.T)(HS), (0, IS.T)(fS));
```

#### 881. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9304-L9306` → after: `L9304-L9306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306) · [Before (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306)

```diff
-                   const ek = Math.min(Lk.D, Ik - qk),
-                     wk = Math.min(Lk.D, Xk - Fk),
-                     Hk = Math.min(Lk.D, Tk - tk);
+                   const KS = Math.min(IS.x, gS - uS),
+                     jS = Math.min(IS.x, tS - HS),
+                     GS = Math.min(IS.x, bS - fS);
```

#### 882. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9315` → after: `L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315)

```diff
-                         else if (this.emptySpawnerBlockId === lk) ak.get(Lk, jk, ek) || console.error(`Empty spawner block found in prefab ${kk.schematic.name} at (${Lk}, ${jk}, ${ek}) with no mob type specified. Defaulting to "${iF.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === NS) qS.get(IS, aS, KS) || console.error(`Empty spawner block found in prefab ${SS.schematic.name} at (${IS}, ${aS}, ${KS}) with no mob type specified. Defaulting to "${bH.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 883. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9318` → after: `L9318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318) · [Before (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318)

```diff
-                           void 0 !== Fk && (yk.get(Lk, jk, ek) || console.error(`Chest found in prefab ${kk.schematic.name} at (${Lk}, ${jk}, ${ek}) with no quality specified. Defaulting to "${iF.DEFAULT_CHEST_QUALITY}" quality.`), lk = Fk)
+                           void 0 !== HS && (xS.get(IS, aS, KS) || console.error(`Chest found in prefab ${SS.schematic.name} at (${IS}, ${aS}, ${KS}) with no quality specified. Defaulting to "${bH.DEFAULT_CHEST_QUALITY}" quality.`), NS = HS)
```

#### 884. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9341` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341)

```diff
-           }(kk, kk.shouldSwapXZ ? Ik : Fk)
+           }(SS, SS.shouldSwapXZ ? gS : HS)
```

#### 885. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9348` → after: `L9348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348) · [Before (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348)

```diff
-           }(kk, kk.shouldSwapXZ ? Fk : Ik)
+           }(SS, SS.shouldSwapXZ ? HS : gS)
```

#### 886. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9350` → after: `L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9350) · [Before (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9350)

```diff
-         iF.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, iF.BLOCK_ID_MAPPINGS = void 0, iF.DEFAULT_MOB_TYPE = "Draugr Zombie", iF.DEFAULT_CHEST_QUALITY = Lk.h.COMMON;
+         bH.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, bH.BLOCK_ID_MAPPINGS = void 0, bH.DEFAULT_MOB_TYPE = "Draugr Zombie", bH.DEFAULT_CHEST_QUALITY = IS.i.COMMON;
```

#### 887. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9371` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371)

```diff
-             const Ik = new Xk.h(2 * kk + 1, [-kk, -kk]);
+             const gS = new tS.f(2 * SS + 1, [-SS, -SS]);
```

#### 888. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9380` → after: `L9380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380) · [Before (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380)

```diff
-             this.se = Ik, this.seed = Xk, this.blockMetadata = ik, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.JK = gS, this.seed = tS, this.blockMetadata = XS, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 889. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383)

```diff
-                 [Lk.w.Maple]: {
+                 [IS.v.Maple]: {
```

#### 890. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391)

```diff
-                 [Lk.w.Pine]: {
+                 [IS.v.Pine]: {
```

#### 891. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9401` → after: `L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401)

```diff
-                 [Lk.w.Plum]: {
+                 [IS.v.Plum]: {
```

#### 892. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9409` → after: `L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409) · [Before (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409)

```diff
-                 [Lk.w.Cedar]: {
+                 [IS.v.Cedar]: {
```

#### 893. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9417` → after: `L9417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417) · [Before (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417)

```diff
-                 [Lk.w.Aspen]: {
+                 [IS.v.Aspen]: {
```

#### 894. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9427` → after: `L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427) · [Before (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427)

```diff
-                 [Lk.w.Jungle]: {
+                 [IS.v.Jungle]: {
```

#### 895. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9437` → after: `L9437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437) · [Before (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437)

```diff
-                 [Lk.w.Palm]: {
+                 [IS.v.Palm]: {
```

#### 896. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447)

```diff
-                 [Lk.w.AutumnMaple]: {
+                 [IS.v.AutumnMaple]: {
```

#### 897. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455)

```diff
-                 [Lk.w.Pear]: {
+                 [IS.v.Pear]: {
```

#### 898. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9465` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465) · [Before (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465)

```diff
-                 [Lk.w.Cherry]: {
+                 [IS.v.Cherry]: {
```

#### 899. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9475` → after: `L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475)

```diff
-                 [Lk.w.Spectral]: {
+                 [IS.v.Spectral]: {
```

#### 900. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483)

```diff
-                 [Lk.w.Mango]: {
+                 [IS.v.Mango]: {
```

#### 901. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9493` → after: `L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493) · [Before (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493)

```diff
-                 [Lk.w.AutumnAspen]: {
+                 [IS.v.AutumnAspen]: {
```

#### 902. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9503` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503)

```diff
-                 [Lk.w.Dead]: {
+                 [IS.v.Dead]: {
```

#### 903. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9513` → after: `L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513)

```diff
-                 [Lk.w.FallenLog]: {
+                 [IS.v.FallenLog]: {
```

#### 904. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9523-L9524` → after: `L9523-L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524) · [Before (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((kk => ik[kk].id)), this.maxTreeRadius = kk.maxTreeRadius, this.se <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.se <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((SS => XS[SS].id)), this.maxTreeRadius = SS.maxTreeRadius, this.JK <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.JK <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 905. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9598` → after: `L9598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598) · [Before (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598)

```diff
-               if (kk.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${kk.radius} for canopy type "${Tk}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (SS.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${SS.radius} for canopy type "${bS}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 906. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9602` → after: `L9602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602) · [Before (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602)

```diff
-             for (const Tk of kk.biomeSelector.Ok) Tk.biome.treeMinDist && (lk = Math.min(lk, Tk.biome.treeMinDist), ak = Math.max(ak, Tk.biome.treeMinDist));
+             for (const bS of SS.biomeSelector.cS) bS.biome.treeMinDist && (NS = Math.min(NS, bS.biome.treeMinDist), qS = Math.max(qS, bS.biome.treeMinDist));
```

#### 907. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9611-L9612` → after: `L9611-L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612) · [Before (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612)

```diff
-             for (let jk = kk - this.maxTreeRadius; jk < kk + this.se + this.maxTreeRadius; jk++)
-               for (let kk = Fk - this.maxTreeRadius; kk < Fk + this.se + this.maxTreeRadius; kk++) {
+             for (let aS = SS - this.maxTreeRadius; aS < SS + this.JK + this.maxTreeRadius; aS++)
+               for (let SS = HS - this.maxTreeRadius; SS < HS + this.JK + this.maxTreeRadius; SS++) {
```

#### 908. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9616-L9618` → after: `L9616-L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618) · [Before (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618)

```diff
-                   if (Ik.getOrGenerate(jk, kk, ik.e.WaterHeight) !== yk.p) continue;
-                   const Xk = Ik.getOrGenerate(jk, kk, ik.e.GroundHeight);
-                   if (ak.e.isInCave(jk, Xk, kk, Tk)) continue;
+                   if (gS.getOrGenerate(aS, SS, XS.f.WaterHeight) !== xS.n) continue;
+                   const tS = gS.getOrGenerate(aS, SS, XS.f.GroundHeight);
+                   if (qS.b.isInCave(aS, tS, SS, bS)) continue;
```

#### 909. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9620-L9621` → after: `L9620-L9621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621) · [Before (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621)

```diff
-                   if (vk.c.isNearFixedPointPrefab(jk, kk, qk)) continue;
-                   const ek = new Zk.f(`${jk}${kk}${this.seed}treeHeight`),
+                   if (OS.d.isNearFixedPointPrefab(aS, SS, uS)) continue;
+                   const KS = new kS.i(`${aS}${SS}${this.seed}treeHeight`),
```

#### 910. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9627` → after: `L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627) · [Before (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627)

```diff
-                   if (wk === Lk.w.FallenLog) {
+                   if (jS === IS.v.FallenLog) {
```

#### 911. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9630` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630)

```diff
-                       if (Ik.getOrGenerate(0 === Jk ? jk + Fk : jk, 0 === Jk ? kk : kk + Fk, ik.e.GroundHeight) !== Xk) {
+                       if (gS.getOrGenerate(0 === CS ? aS + HS : aS, 0 === CS ? SS : SS + HS, XS.f.GroundHeight) !== tS) {
```

#### 912. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9651-L9652` → after: `L9651-L9652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652) · [Before (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652)

```diff
-               ik = null !== (Ik = Tk.minHeight) && void 0 !== Ik ? Ik : this.minTreeHeight,
-               yk = null !== (Xk = Tk.maxHeight) && void 0 !== Xk ? Xk : this.maxTreeHeight;
+               XS = null !== (gS = bS.minHeight) && void 0 !== gS ? gS : this.minTreeHeight,
+               xS = null !== (tS = bS.maxHeight) && void 0 !== tS ? tS : this.maxTreeHeight;
```

#### 913. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9667-L9668` → after: `L9667-L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668) · [Before (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668)

```diff
-               const Tk = new Zk.f(`${ik.treeX}|${ik.treeZ}|${ik.trunkBase}|tree`);
-               if (ik.treeType === Lk.w.Dead || ik.treeType === Lk.w.FallenLog) {
+               const bS = new kS.i(`${XS.treeX}|${XS.treeZ}|${XS.trunkBase}|tree`);
+               if (XS.treeType === IS.v.Dead || XS.treeType === IS.v.FallenLog) {
```

#### 914. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9685` → after: `L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685) · [Before (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685)

```diff
-                 Tk >= Fk && Tk < Fk + this.se && ik >= Ik && ik < Ik + this.se && lk >= Xk && lk < Xk + this.se && kk.set(Tk - Fk, ik - Ik, lk - Xk, yk)
+                 bS >= HS && bS < HS + this.JK && XS >= gS && XS < gS + this.JK && NS >= tS && NS < tS + this.JK && SS.set(bS - HS, XS - gS, NS - tS, xS)
```

#### 915. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9687` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687)

```diff
-             if (Tk.treeType === Lk.w.FallenLog) {
+             if (bS.treeType === IS.v.FallenLog) {
```

#### 916. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689)

```diff
-               for (let kk = -1; kk < tk - 1; kk++) Zk(0 === Tk.vineDir ? lk + kk : lk, qk, 0 === Tk.vineDir ? ak : ak + kk);
+               for (let SS = -1; SS < fS - 1; SS++) kS(0 === bS.vineDir ? NS + SS : NS, uS, 0 === bS.vineDir ? qS : qS + SS);
```

#### 917. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9714` → after: `L9714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714) · [Before (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714)

```diff
-               wk = Math.min(jk, Ik + this.se - 1);
+               jS = Math.min(aS, gS + this.JK - 1);
```

#### 918. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9717` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717) · [Before (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717)

```diff
-               Jk = Math.min(yk + tk.radius, Fk + this.se - 1);
+               CS = Math.min(xS + fS.radius, HS + this.JK - 1);
```

#### 919. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9720` → after: `L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720) · [Before (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720)

```diff
-               Pk = Math.min(lk + tk.radius, Xk + this.se - 1);
+               PS = Math.min(NS + fS.radius, tS + this.JK - 1);
```

#### 920. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9795` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795) · [Before (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795)

```diff
-               if (wk !== jF.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${wk}`);
+               if (jS !== kH.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${jS}`);
```

#### 921. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9802-L9804` → after: `L9802-L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804) · [Before (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804)

```diff
-             const yk = Fk + this.se,
-               lk = Ik + this.se,
-               ak = Xk + this.se,
+             const xS = HS + this.JK,
+               NS = gS + this.JK,
+               qS = tS + this.JK,
```

#### 922. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9830` → after: `L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830) · [Before (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830)

```diff
-             const Fk = this.se >> 1,
+             const HS = this.JK >> 1,
```

#### 923. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9852` → after: `L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852) · [Before (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852)

```diff
-         var HF = Ik(39756);
+         var jH = gS(39811);
```

#### 924. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9856` → after: `L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856)

```diff
-             this.biomeSelector = kk, this.noWaterHeightmapGenerator = Fk, this.hydrology = Ik, this.lakeRadiusNoiseModifier = ik, this.seed = yk, this.needOutsideWaterDist = ak, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = SS, this.noWaterHeightmapGenerator = HS, this.hydrology = gS, this.lakeRadiusNoiseModifier = XS, this.seed = xS, this.needOutsideWaterDist = qS, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 925. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9866` → after: `L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866) · [Before (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866)

```diff
-               if ((0, Xk.P)(tk, kk, Fk) > ik) continue;
+               if ((0, tS.O)(fS, SS, HS) > XS) continue;
```

#### 926. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9870` → after: `L9870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870) · [Before (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870)

```diff
-               const Tk = (0, Xk.L)(Ik.origin, kk, Fk),
+               const bS = (0, tS.K)(gS.origin, SS, HS),
```

#### 927. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9887` → after: `L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887) · [Before (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887)

```diff
-             if (!(0, Lk.Q)(Fk)) return Fk.lake;
+             if (!(0, IS.K)(HS)) return HS.lake;
```

#### 928. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9900` → after: `L9900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900) · [Before (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900)

```diff
-             } = this, ik = new Zk.f(`${kk[0]}|${kk[1]}${this.seed}oasisLake`), yk = this.hydrology.getHydrologyWaterGenInfo(kk[0], kk[1]), lk = Math.floor(yk.distFromWater - yk.waterRadius - Tk);
+             } = this, XS = new kS.i(`${SS[0]}|${SS[1]}${this.seed}oasisLake`), xS = this.hydrology.getHydrologyWaterGenInfo(SS[0], SS[1]), NS = Math.floor(xS.distFromWater - xS.waterRadius - bS);
```

#### 929. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9920` → after: `L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920) · [Before (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920)

```diff
-             this.biomeSelector = kk, this.noWaterHeightmapGenerator = Fk, this.needOutsideWaterBodyDist = yk, this.Lk = ak, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = SS, this.noWaterHeightmapGenerator = HS, this.needOutsideWaterBodyDist = xS, this.IS = qS, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 930. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9932` → after: `L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932) · [Before (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, KF || (KF = new HF.b("water cells", lk ? 800 : 60, 6e4)), this.waterBodyInfos = KF.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, PH || (PH = new jH.d("water cells", NS ? 800 : 60, 6e4)), this.waterBodyInfos = PH.partition();
```

#### 931. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9934` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9934) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9934)

```diff
-             this.cellCenterMaxOffset = this.gridSize / 2 - qk, this.seed = Ik, this.lakeRadiusNoiseModifier = new Xk.l([{
+             this.cellCenterMaxOffset = this.gridSize / 2 - uS, this.seed = gS, this.lakeRadiusNoiseModifier = new tS.j([{
```

#### 932. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9940` → after: `L9940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940) · [Before (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940)

```diff
-             }], `${Ik}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, Xk.B)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new xF(kk, Fk, this, this.lakeRadiusNoiseModifier, Ik, Tk, yk, lk)
+             }], `${gS}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, tS.C)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new CH(SS, HS, this, this.lakeRadiusNoiseModifier, gS, bS, xS, NS)
```

#### 933. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9944` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944)

```diff
-             if (!this.Lk) return VF(this.needOutsideWaterBodyDist);
+             if (!this.IS) return wH(this.needOutsideWaterBodyDist);
```

#### 934. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9948` → after: `L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948) · [Before (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948)

```diff
-             return null === Tk || sF(Xk) <= sF(Tk) ? Xk : Tk
+             return null === bS || DH(tS) <= DH(bS) ? tS : bS
```

#### 935. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9974` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974) · [Before (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974)

```diff
-                 BL: kk,
+                 BI: SS,
```

#### 936. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9977` → after: `L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977) · [Before (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977)

```diff
-               } = (0, Xk.y)(Ik, Tk.origin, Tk.downhill.origin);
+               } = (0, tS.z)(gS, bS.origin, bS.downhill.origin);
```

#### 937. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9989` → after: `L9989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989) · [Before (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989)

```diff
-                 BL: kk,
+                 BI: SS,
```

#### 938. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9992` → after: `L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992) · [Before (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992)

```diff
-               } = (0, Xk.y)(Ik, Zk.origin, Tk.origin), ek = Math.floor(kk);
+               } = (0, tS.z)(gS, kS.origin, bS.origin), KS = Math.floor(SS);
```

#### 939. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10013` → after: `L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013) · [Before (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013)

```diff
-                 yk *= ik.lakeRadius / this.lakeSettings.maxRadius, Zk = ik.lakeRadius - yk, Ik = (0, Xk.L)(Tk.origin, kk, Fk) - Zk
+                 xS *= XS.lakeRadius / this.lakeSettings.maxRadius, kS = XS.lakeRadius - xS, gS = (0, tS.K)(bS.origin, SS, HS) - kS
```

#### 940. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10027` → after: `L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027) · [Before (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027)

```diff
-                 const Ik = (0, Xk.L)(Tk.origin, kk, Fk),
+                 const gS = (0, tS.K)(bS.origin, SS, HS),
```

#### 941. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054)

```diff
-             if (!(0, Lk.Q)(Ik)) return this.lastReadInfo.cellX = kk, this.lastReadInfo.cellZ = Fk, this.lastReadInfo.info = Ik, Ik;
+             if (!(0, IS.K)(gS)) return this.lastReadInfo.cellX = SS, this.lastReadInfo.cellZ = HS, this.lastReadInfo.info = gS, gS;
```

#### 942. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10118` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118)

```diff
-             return -1 !== Tk ? Xk : null
+             return -1 !== bS ? tS : null
```

#### 943. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10123` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123) · [Before (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123)

```diff
-               Tk = new Zk.f(`${kk}${Fk}${this.seed}riverCell`);
+               bS = new kS.i(`${SS}${HS}${this.seed}riverCell`);
```

#### 944. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10163-L10166` → after: `L10163-L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166) · [Before (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166)

```diff
-           Nk: 40,
-           lk: -85,
-           ak: -85,
-           Wk: .5
+           iS: 40,
+           NS: -85,
+           qS: -85,
+           WS: .5
```

#### 945. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10170-L10173` → after: `L10170-L10173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173) · [Before (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173)

```diff
-           Nk: 13,
-           lk: -100,
-           ak: -85,
-           Wk: .28
+           iS: 13,
+           NS: -100,
+           qS: -85,
+           WS: .28
```

#### 946. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10177-L10180` → after: `L10177-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180) · [Before (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180)

```diff
-           Nk: 10,
-           lk: -100,
-           ak: -75,
-           Wk: .4
+           iS: 10,
+           NS: -100,
+           qS: -75,
+           WS: .4
```

#### 947. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10184-L10187` → after: `L10184-L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187) · [Before (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187)

```diff
-           Nk: 5,
-           lk: -80,
-           ak: 15,
-           Wk: .5
+           iS: 5,
+           NS: -80,
+           qS: 15,
+           WS: .5
```

#### 948. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10191-L10194` → after: `L10191-L10194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194) · [Before (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194)

```diff
-           Nk: 4,
-           lk: -60,
-           ak: 40,
-           Wk: .5
+           iS: 4,
+           NS: -60,
+           qS: 40,
+           WS: .5
```

#### 949. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10198-L10199` → after: `L10198-L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199) · [Before (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199)

```diff
-             this.seed = Fk, this.se = Ik, this.Uk = void 0, this.Uk = Xk.map((Xk => {
-               const ik = new Tk.e("ore", Xk.Nk, !1, !0, `${Fk}${Xk.blockName}`, 20, Ik, null, !0);
+             this.seed = HS, this.JK = gS, this.yS = void 0, this.yS = tS.map((tS => {
+               const XS = new bS.e("ore", tS.iS, !1, !0, `${HS}${tS.blockName}`, 20, gS, null, !0);
```

#### 950. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10201` → after: `L10201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201)

```diff
-                 iL: (0, Lk.K)(Xk.blockName, kk),
+                 XI: (0, IS.E)(tS.blockName, SS),
```

#### 951. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10203-L10206` → after: `L10203-L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206) · [Before (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206)

```diff
-                 Nk: Xk.Nk,
-                 lk: Xk.lk,
-                 ak: Xk.ak,
-                 Wk: Xk.Wk,
+                 iS: tS.iS,
+                 NS: tS.NS,
+                 qS: tS.qS,
+                 WS: tS.WS,
```

#### 952. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10213-L10216` → after: `L10213-L10216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216) · [Before (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216)

```diff
-               Tk = new Zk.f(`${kk}${Fk}${this.seed}oreExists`);
-             for (const ik of this.Uk) {
-               const yk = ik.pointGenerator.getPointsAroundPoint(kk + this.se / 2, Fk + this.se / 2),
-                 lk = kk + this.se + ik.radius,
+               bS = new kS.i(`${SS}${HS}${this.seed}oreExists`);
+             for (const XS of this.yS) {
+               const xS = XS.pointGenerator.getPointsAroundPoint(SS + this.JK / 2, HS + this.JK / 2),
+                 NS = SS + this.JK + XS.radius,
```

#### 953. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10218` → after: `L10218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218)

```diff
-                 qk = Fk + this.se + ik.radius,
+                 uS = HS + this.JK + XS.radius,
```

#### 954. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10222-L10223` → after: `L10222-L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223) · [Before (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223)

```diff
-                 const yk = new Zk.f(`${tk[0]}${tk[1]}${this.seed}ore`),
-                   jk = Math.floor(yk.next() * (ik.ak + 1 - ik.lk)) + ik.lk,
+                 const xS = new kS.i(`${fS[0]}${fS[1]}${this.seed}ore`),
+                   aS = Math.floor(xS.next() * (XS.qS + 1 - XS.NS)) + XS.NS,
```

#### 955. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10225` → after: `L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225)

```diff
-                   wk = Math.min(kk + this.se - 1, tk[0] + ik.radius),
+                   jS = Math.min(SS + this.JK - 1, fS[0] + XS.radius),
```

#### 956. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10227` → after: `L10227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227)

```diff
-                   Jk = Math.min(Fk + this.se - 1, tk[1] + ik.radius);
+                   CS = Math.min(HS + this.JK - 1, fS[1] + XS.radius);
```

#### 957. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230)

```diff
-                     (0, Xk.F)(tk, kk, Fk) > ik.radius || (Tk.next() >= ik.Wk || Ik.push(kk, jk, Fk, ik.iL))
+                     (0, tS.E)(fS, SS, HS) > XS.radius || (bS.next() >= XS.WS || gS.push(SS, aS, HS, XS.XI))
```

#### 958. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237)

```diff
-             const ak = Ik + this.se,
+             const qS = gS + this.JK,
```

#### 959. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244)

```diff
-               if (qk < yk.get(tk, Zk, ik.e.GroundHeight) - Tk) {
+               if (uS < xS.get(fS, kS, XS.f.GroundHeight) - bS) {
```

#### 960. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10251` → after: `L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251)

```diff
-         var oF = Ik(39761);
+         var JH = gS(39815);
```

#### 961. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10261-L10262` → after: `L10261-L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262) · [Before (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262)

```diff
-             Kk: Ik,
-             Sk: Xk,
+             PS: gS,
+             ZS: tS,
```

#### 962. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10272` → after: `L10272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272)

```diff
-           return Ik.Jk && Xk.push({
+           return gS.GS && tS.push({
```

#### 963. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10274-L10275` → after: `L10274-L10275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275) · [Before (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275)

```diff
-             iL: kk[Fk].id
-           }), Ik.xk && Xk.push({
+             XI: SS[HS].id
+           }), gS.CS && tS.push({
```

#### 964. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10277` → after: `L10277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277) · [Before (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277)

```diff
-             iL: kk[`${Fk}|meta|rot2|side`].id
+             XI: SS[`${HS}|meta|rot2|side`].id
```

#### 965. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10280` → after: `L10280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280) · [Before (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280)

```diff
-             iL: kk[`${Fk}|meta|rot4|side`].id
+             XI: SS[`${HS}|meta|rot4|side`].id
```

#### 966. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10283` → after: `L10283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283) · [Before (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283)

```diff
-             iL: kk[`${Fk}|meta|rot1|side`].id
+             XI: SS[`${HS}|meta|rot1|side`].id
```

#### 967. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10286-L10287` → after: `L10286-L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287) · [Before (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287)

```diff
-             iL: kk[`${Fk}|meta|rot3|side`].id
-           }), Ik.Pk && Xk.push({
+             XI: SS[`${HS}|meta|rot3|side`].id
+           }), gS.nS && tS.push({
```

#### 968. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289)

```diff
-             iL: kk[`${Fk}|meta|rot1|top`].id
+             XI: SS[`${HS}|meta|rot1|top`].id
```

#### 969. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10298-L10300` → after: `L10298-L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300) · [Before (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300)

```diff
-                 Jk: !0,
-                 xk: !0,
-                 Pk: !0
+                 GS: !0,
+                 CS: !0,
+                 nS: !0
```

#### 970. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10303-L10306` → after: `L10303-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306) · [Before (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306)

```diff
-               Qk: .8,
-               sk: 0,
-               Kk: .12,
-               Sk: .25,
+               QS: .8,
+               DS: 0,
+               PS: .12,
+               ZS: .25,
```

#### 971. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10312-L10314` → after: `L10312-L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314) · [Before (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314)

```diff
-                 Jk: !0,
-                 xk: !0,
-                 Pk: !1
+                 GS: !0,
+                 CS: !0,
+                 nS: !1
```

#### 972. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10317-L10319` → after: `L10317-L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319) · [Before (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319)

```diff
-               Qk: .7,
-               sk: 2,
-               Kk: .58
+               QS: .7,
+               DS: 2,
+               PS: .58
```

#### 973. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10322` → after: `L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322)

```diff
-             const Ik = Fk.Vk;
+             const gS = HS.wS;
```

#### 974. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10326-L10328` → after: `L10326-L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328) · [Before (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328)

```diff
-                 Jk: Fk.Jk,
-                 xk: Fk.xk,
-                 Pk: Fk.Pk
+                 GS: HS.GS,
+                 CS: HS.CS,
+                 nS: HS.nS
```

#### 975. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10331-L10336` → after: `L10331-L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336) · [Before (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336)

```diff
-               Qk: Fk.Qk,
-               sk: Fk.sk,
-               Kk: Fk.Kk,
-               Sk: null === Ik || void 0 === Ik ? void 0 : Ik.Sk,
-               shallowClusterY: null === Ik || void 0 === Ik ? void 0 : Ik.vk,
-               deepClusterY: null === Ik || void 0 === Ik ? void 0 : Ik.Ek
+               QS: HS.QS,
+               DS: HS.DS,
+               PS: HS.PS,
+               ZS: null === gS || void 0 === gS ? void 0 : gS.ZS,
+               shallowClusterY: null === gS || void 0 === gS ? void 0 : gS.OS,
+               deepClusterY: null === gS || void 0 === gS ? void 0 : gS.dS
```

#### 976. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10355` → after: `L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355) · [Before (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355)

```diff
-             const Xk = this.heightmapVals.getOrGenerate(kk, Fk, ik.e.GroundHeight) - this.surfaceMargin,
+             const tS = this.heightmapVals.getOrGenerate(SS, HS, XS.f.GroundHeight) - this.surfaceMargin,
```

#### 977. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10362` → after: `L10362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362)

```diff
-               kk - ik.floorY + 1 < Tk || yk.push(kk === ik.ceilingY ? ik : {
+               SS - XS.floorY + 1 < bS || xS.push(SS === XS.ceilingY ? XS : {
```

#### 978. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10372` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372) · [Before (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372)

```diff
-             this.heightmapVals = kk, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new Xk.r(new UF(Fk)), this.decoratableCavesCache = new Xk.r(new CF(Fk, kk, Ik, Tk))
+             this.heightmapVals = SS, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new tS.n(new VH(HS)), this.decoratableCavesCache = new tS.n(new iH(HS, SS, gS, bS))
```

#### 979. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10378` → after: `L10378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378) · [Before (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378)

```diff
-             return this.heightmapVals.getOrGenerate(kk, Fk, ik.e.GroundHeight)
+             return this.heightmapVals.getOrGenerate(SS, HS, XS.f.GroundHeight)
```

#### 980. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10397` → after: `L10397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397) · [Before (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397)

```diff
-             cF(kk + ak.offset[0], Fk + ak.offset[1], Ik + ak.offset[2], ik) && (ak.offset === vF ? yk = ak : lk.push(ak))
+             zH(SS + qS.offset[0], HS + qS.offset[1], gS + qS.offset[2], XS) && (qS.offset === OH ? xS = qS : NS.push(qS))
```

#### 981. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10399` → after: `L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399) · [Before (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399)

```diff
-           return null !== yk ? yk : 0 === lk.length ? null : lk[Math.floor(Tk * lk.length)]
+           return null !== xS ? xS : 0 === NS.length ? null : NS[Math.floor(bS * NS.length)]
```

#### 982. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10404` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404)

```diff
-             this.se = Fk, this.seed = Ik, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.JK = HS, this.seed = gS, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 983. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10410` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410)

```diff
-               if (!Number.isInteger(Tk.clusterBoxSize) || Tk.clusterBoxSize < 2 || Tk.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${Tk.seedPrefix}" has invalid clusterBoxSize (${Tk.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(bS.clusterBoxSize) || bS.clusterBoxSize < 2 || bS.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${bS.seedPrefix}" has invalid clusterBoxSize (${bS.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 984. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10412` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412)

```diff
-               kk > yk && (yk = kk), lk += Math.max(Tk.Kk, null !== (ak = Tk.Sk) && void 0 !== ak ? ak : Tk.Kk)
+               SS > xS && (xS = SS), NS += Math.max(bS.PS, null !== (qS = bS.ZS) && void 0 !== qS ? qS : bS.PS)
```

#### 985. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10414` → after: `L10414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414) · [Before (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414)

```diff
-             if (lk > 1) throw new Error(`Cave decoration cluster chances sum to ${lk} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             if (NS > 1) throw new Error(`Cave decoration cluster chances sum to ${NS} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
```

#### 986. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10419` → after: `L10419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419) · [Before (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419)

```diff
-               ik = this.se,
+               XS = this.JK,
```

#### 987. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10436` → after: `L10436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436)

```diff
-             for (const lk of ik) lk.y >= Ik && lk.y < yk && kk.set(lk.x - Fk, lk.y - Ik, lk.z - Xk, lk.iL)
+             for (const NS of XS) NS.y >= gS && NS.y < xS && SS.set(NS.x - HS, NS.y - gS, NS.z - tS, NS.XI)
```

#### 988. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10441` → after: `L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441)

```diff
-             const qk = new Zk.f(`${this.seed}|${kk}|${Fk}|cluster`),
+             const uS = new kS.i(`${this.seed}|${SS}|${HS}|cluster`),
```

#### 989. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10455` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455)

```diff
-             if (this.scatterClusterCells(kk, wk, Fk, Jk, yk, qk, xk), !(xk.length < Jk.sk))
+             if (this.scatterClusterCells(SS, jS, HS, CS, xS, uS, nS), !(nS.length < CS.DS))
```

#### 990. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10461` → after: `L10461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461) · [Before (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461)

```diff
-               Qk: ak,
+               QS: qS,
```

#### 991. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10481` → after: `L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481) · [Before (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481)

```diff
-                     iL: xk.iL
+                     XI: nS.XI
```

#### 992. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10495` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495)

```diff
-             this.prefabGenerator = Xk, this.seed = void 0, this.se = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = tS, this.seed = void 0, this.JK = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 993. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10498` → after: `L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498) · [Before (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498)

```diff
-             if (Ik + this.se <= yk.s.bedrockLevel) return {
+             if (gS + this.JK <= xS.q.bedrockLevel) return {
```

#### 994. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10501)

```diff
-             const Pk = new tk.d,
+             const PS = new fS.c,
```

#### 995. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10505-L10507` → after: `L10505-L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507) · [Before (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507)

```diff
-             if (Qk >= Ik && Kk < Ik + this.se)
-               for (let Xk = Fk; Xk < Fk + this.se; Xk++)
-                 for (let ak = Tk; ak < Tk + this.se; ak++) {
+             if (DS >= gS && QS < gS + this.JK)
+               for (let tS = HS; tS < HS + this.JK; tS++)
+                 for (let qS = bS; qS < bS + this.JK; qS++) {
```

#### 996. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10510-L10512` → after: `L10510-L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512) · [Before (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512)

```diff
-                     tk = lk.get(Xk, ak, ik.e.GroundHeight);
-                   if (tk >= Ik && tk < Ik + this.se) {
-                     const qk = lk.get(Xk, ak, ik.e.IsLake) === yk.j ? Lk.getDryBedBlock(Xk, tk, ak) : Lk.getTopsoilBlock(Xk, tk, ak);
+                     fS = NS.get(tS, qS, XS.f.GroundHeight);
+                   if (fS >= gS && fS < gS + this.JK) {
+                     const uS = NS.get(tS, qS, XS.f.IsLake) === xS.h ? IS.getDryBedBlock(tS, fS, qS) : IS.getTopsoilBlock(tS, fS, qS);
```

#### 997. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10516-L10518` → after: `L10516-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518) · [Before (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518)

```diff
-             if (Qk + 1 >= Ik && Kk - 4 < Ik + this.se)
-               for (let Xk = Fk; Xk < Fk + this.se; Xk++)
-                 for (let yk = Tk; yk < Tk + this.se; yk++) {
+             if (DS + 1 >= gS && QS - 4 < gS + this.JK)
+               for (let tS = HS; tS < HS + this.JK; tS++)
+                 for (let xS = bS; xS < bS + this.JK; xS++) {
```

#### 998. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10521-L10522` → after: `L10521-L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522) · [Before (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522)

```diff
-                     Lk = lk.get(Xk, yk, ik.e.GroundHeight),
-                     tk = Math.min(Lk, Ik + this.se);
+                     IS = NS.get(tS, xS, XS.f.GroundHeight),
+                     fS = Math.min(IS, gS + this.JK);
```

#### 999. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10530-L10531` → after: `L10530-L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531) · [Before (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531)

```diff
-               for (let Ik = Math.max(Tk - 4, 0); Ik < Math.min(Tk, this.se); Ik++) kk.set(Fk, Ik, ik, this.dirtId);
-               Tk >= 0 && Tk < this.se && kk.set(Fk, Tk, ik, this.grassBlockId)
+               for (let gS = Math.max(bS - 4, 0); gS < Math.min(bS, this.JK); gS++) SS.set(HS, gS, XS, this.dirtId);
+               bS >= 0 && bS < this.JK && SS.set(HS, bS, XS, this.grassBlockId)
```

#### 1000. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10535-L10536` → after: `L10535-L10536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536) · [Before (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536)

```diff
-               for (let yk = Fk; yk < Fk + this.se; yk++)
-                 for (let ak = Tk; ak < Tk + this.se; ak++) {
+               for (let xS = HS; xS < HS + this.JK; xS++)
+                 for (let qS = bS; qS < bS + this.JK; qS++) {
```

#### 1001. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10538-L10539` → after: `L10538-L10539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539) · [Before (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539)

```diff
-                     Lk = lk.get(yk, ak, ik.e.GroundHeight),
-                     tk = Math.min(Lk - 4, Ik + this.se),
+                     IS = NS.get(xS, qS, XS.f.GroundHeight),
+                     fS = Math.min(IS - 4, gS + this.JK),
```

#### 1002. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10544` → after: `L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544) · [Before (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544)

```diff
-                     kk.set(yk - Fk, Xk - Ik, ak - Tk, 0 !== ik ? ik : qk)
+                     SS.set(xS - HS, tS - gS, qS - bS, 0 !== XS ? XS : uS)
```

#### 1003. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10548-L10550` → after: `L10548-L10550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550) · [Before (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550)

```diff
-             if (Qk - 4 >= Ik && this.oreGenerator.addOresToChunk(kk, Fk, Ik, Tk, 4, lk, ek), Qk >= Ik && (ak.e.addCavesToChunk(kk, Fk, Ik, Tk, lk, jk), fF.addCaveDecorationsToChunk(kk, Fk, Ik, Tk, this.se, Jk)), yk.s.bedrockLevel >= Ik && yk.s.bedrockLevel < Ik + this.se)
-               for (let Xk = Fk; Xk < Fk + this.se; Xk++)
-                 for (let ik = Tk; ik < Tk + this.se; ik++) kk.set(Xk - Fk, yk.s.bedrockLevel - Ik, ik - Tk, this.bedrockId);
+             if (DS - 4 >= gS && this.oreGenerator.addOresToChunk(SS, HS, gS, bS, 4, NS, KS), DS >= gS && (qS.b.addCavesToChunk(SS, HS, gS, bS, NS, aS), pH.addCaveDecorationsToChunk(SS, HS, gS, bS, this.JK, CS)), xS.q.bedrockLevel >= gS && xS.q.bedrockLevel < gS + this.JK)
+               for (let tS = HS; tS < HS + this.JK; tS++)
+                 for (let XS = bS; XS < bS + this.JK; XS++) SS.set(tS - HS, xS.q.bedrockLevel - gS, XS - bS, this.bedrockId);
```

#### 1004. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10553-L10555` → after: `L10553-L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555) · [Before (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555)

```diff
-               for (let ik = Fk; ik < Fk + this.se; ik++)
-                 for (let yk = Ik; yk < Ik + this.se; yk++)
-                   for (let lk = Tk; lk < Tk + this.se; lk++) {
+               for (let XS = HS; XS < HS + this.JK; XS++)
+                 for (let xS = gS; xS < gS + this.JK; xS++)
+                   for (let NS = bS; NS < bS + this.JK; NS++) {
```

#### 1005. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10566-L10567` → after: `L10566-L10567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567) · [Before (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567)

```diff
-               for (let Ik = Math.max(ik, 0); Ik < Math.min(yk, this.se); Ik++) kk.set(Fk, Ik, Tk, this.waterId);
-               yk >= 0 && yk < this.se && kk.set(Fk, yk, Tk, zk[Xk + 4])
+               for (let gS = Math.max(XS, 0); gS < Math.min(xS, this.JK); gS++) SS.set(HS, gS, bS, this.waterId);
+               xS >= 0 && xS < this.JK && SS.set(HS, xS, bS, ZS[tS + 4])
```

#### 1006. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10570-L10575` → after: `L10570-L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575) · [Before (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575)

```diff
-             if (this.addSurfaceBlocks(kk, Ik, xk.lilyPads), sk && Qk >= Ik && Kk < Ik + this.se)
-               for (let ak = Fk; ak < Fk + this.se; ak++)
-                 for (let qk = Tk; qk < Tk + this.se; qk++) {
-                   const Lk = lk.get(ak, qk, ik.e.WaterHeight),
-                     tk = lk.get(ak, qk, ik.e.GroundHeight);
-                   if (Lk !== yk.p && tk >= Ik && tk < Ik + this.se)
+             if (this.addSurfaceBlocks(SS, gS, nS.lilyPads), wS && DS >= gS && QS < gS + this.JK)
+               for (let qS = HS; qS < HS + this.JK; qS++)
+                 for (let uS = bS; uS < bS + this.JK; uS++) {
+                   const IS = NS.get(qS, uS, XS.f.WaterHeight),
+                     fS = NS.get(qS, uS, XS.f.GroundHeight);
+                   if (IS !== xS.n && fS >= gS && fS < gS + this.JK)
```

#### 1007. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10579` → after: `L10579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579) · [Before (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579)

```diff
-                       if ((0, Xk.P)(ik, ak, qk) < 100) Sk === ik[0] && Ek === ik[1] || (Sk = ik[0], Ek = ik[1], Ok = new Zk.f(`${this.seed}${Sk}${Ek}`).next() < .3 ? this.chalkId : this.clayId), kk.set(ak - Fk, tk - Ik, qk - Tk, Ok), tk - 1 >= Ik && kk.set(ak - Fk, tk - 1 - Ik, q … [truncated]
+                       if ((0, tS.O)(XS, qS, uS) < 100) JS === XS[0] && dS === XS[1] || (JS = XS[0], dS = XS[1], cS = new kS.i(`${this.seed}${JS}${dS}`).next() < .3 ? this.chalkId : this.clayId), SS.set(qS - HS, fS - gS, uS - bS, cS), fS - 1 >= gS && SS.set(qS - HS, fS - 1 - gS, u … [truncated]
```

#### 1008. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10588-L10591` → after: `L10588-L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591) · [Before (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591)

```diff
-               for (let ik = Fk; ik < Fk + this.se; ik++)
-                 for (let yk = Ik; yk < Ik + this.se; yk++)
-                   for (let lk = Tk; lk < Tk + this.se; lk++) {
-                     const ak = vk.c.getBlockFromFixedPointPrefab(ik, yk, lk, Xk);
+               for (let XS = HS; XS < HS + this.JK; XS++)
+                 for (let xS = gS; xS < gS + this.JK; xS++)
+                   for (let NS = bS; NS < bS + this.JK; NS++) {
+                     const qS = OS.d.getBlockFromFixedPointPrefab(XS, xS, NS, tS);
```

#### 1009. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10612` → after: `L10612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612) · [Before (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612)

```diff
-               Tk >= 0 && Tk < this.se && kk.set(Ik[Xk], Tk, Ik[Xk + 2], Ik[Xk + 3])
+               bS >= 0 && bS < this.JK && SS.set(gS[tS], bS, gS[tS + 2], gS[tS + 3])
```

#### 1010. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10626` → after: `L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626) · [Before (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626)

```diff
-             this.se = kk, this.biomeSelector = Fk, this.seed = Ik, this.random = new Zk.f(""), this.lilyPadId = void 0, this.lilyPadId = Xk["Lily Pad"].id
+             this.JK = SS, this.biomeSelector = HS, this.seed = gS, this.random = new kS.i(""), this.lilyPadId = void 0, this.lilyPadId = tS["Lily Pad"].id
```

#### 1011. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10636-L10637` → after: `L10636-L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637) · [Before (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637)

```diff
-             for (let Hk = kk; Hk < kk + this.se; Hk++)
-               for (let Jk = Fk; Jk < Fk + this.se; Jk++) {
+             for (let GS = SS; GS < SS + this.JK; GS++)
+               for (let CS = HS; CS < HS + this.JK; CS++) {
```

#### 1012. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10639-L10640` → after: `L10639-L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640) · [Before (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640)

```diff
-                   Pk = Ik.getOrGenerate(Hk, Jk, ik.e.GroundHeight),
-                   Kk = Ik.getOrGenerate(Hk, Jk, ik.e.WaterHeight);
+                   PS = gS.getOrGenerate(GS, CS, XS.f.GroundHeight),
+                   QS = gS.getOrGenerate(GS, CS, XS.f.WaterHeight);
```

#### 1013. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10644-L10645` → after: `L10644-L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645) · [Before (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645)

```diff
-                 if (Kk !== yk.p) {
-                   wk = !0, Pk < Kk && qk.push(Qk, sk, Pk + 1, Kk, xk.topwaterBlockType), xk.hasScatteredLakes && 1 === Ik.getOrGenerate(Hk, Jk, ik.e.IsLake) && (this.random.reseed(`${Hk}|${Jk}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(Hk, Jk, Ik) && tk … [truncated]
+                 if (QS !== xS.n) {
+                   jS = !0, PS < QS && uS.push(DS, wS, PS + 1, QS, nS.topwaterBlockType), nS.hasScatteredLakes && 1 === gS.getOrGenerate(GS, CS, XS.f.IsLake) && (this.random.reseed(`${GS}|${CS}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(GS, CS, gS) && fS … [truncated]
```

#### 1014. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10649-L10650` → after: `L10649-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650) · [Before (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650)

```diff
-                 if (xk.hasScatteredLakes && this.isBesideLake(Hk, Jk, Ik) && (this.random.reseed(`${Hk}|${Jk}|${this.seed}oasisShore`), this.random.next() < .85 && (Lk.push(Qk, Pk, sk), Vk = this.biomeSelector.baseBiome.floraGenerator)), !ak.e.isInCave(Hk, Pk, Jk, Xk) && !vk.c.is … [truncated]
-                   for (let Ik = Pk + 1; Ik <= Pk + xk.maxFloraHeight; Ik += this.se) Zk.startY = Ik, Vk.addBiomeFloraToColumn(Zk, kk, Fk, Hk, Ik, Jk, Pk)
+                 if (nS.hasScatteredLakes && this.isBesideLake(GS, CS, gS) && (this.random.reseed(`${GS}|${CS}|${this.seed}oasisShore`), this.random.next() < .85 && (IS.push(DS, PS, wS), hS = this.biomeSelector.baseBiome.floraGenerator)), !qS.b.isInCave(GS, PS, CS, tS) && !OS.d.is … [truncated]
+                   for (let gS = PS + 1; gS <= PS + nS.maxFloraHeight; gS += this.JK) kS.startY = gS, hS.addBiomeFloraToColumn(kS, SS, HS, GS, gS, CS, PS)
```

#### 1015. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663)

```diff
-             return Ik.getOrGenerate(kk + 1, Fk, ik.e.WaterHeight) !== yk.p && Ik.getOrGenerate(kk - 1, Fk, ik.e.WaterHeight) !== yk.p && Ik.getOrGenerate(kk, Fk + 1, ik.e.WaterHeight) !== yk.p && Ik.getOrGenerate(kk, Fk - 1, ik.e.WaterHeight) !== yk.p
+             return gS.getOrGenerate(SS + 1, HS, XS.f.WaterHeight) !== xS.n && gS.getOrGenerate(SS - 1, HS, XS.f.WaterHeight) !== xS.n && gS.getOrGenerate(SS, HS + 1, XS.f.WaterHeight) !== xS.n && gS.getOrGenerate(SS, HS - 1, XS.f.WaterHeight) !== xS.n
```

#### 1016. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10669` → after: `L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669) · [Before (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669)

```diff
-             return Ik.getOrGenerate(kk, Fk, ik.e.WaterHeight) !== yk.p && 1 === Ik.getOrGenerate(kk, Fk, ik.e.IsLake)
+             return gS.getOrGenerate(SS, HS, XS.f.WaterHeight) !== xS.n && 1 === gS.getOrGenerate(SS, HS, XS.f.IsLake)
```

#### 1017. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10672` → after: `L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672)

```diff
-         var gF = Ik(39662);
+         var RH = gS(39727);
```

#### 1018. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-             if (this.se = kk, this.hashChunkContents = tk, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.JK = SS, this.hashChunkContents = fS, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 1019. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10679` → after: `L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679) · [Before (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679)

```diff
-               mF = new HF.b("chunk columns", kk, 4e4)
+               TH = new jH.d("chunk columns", SS, 4e4)
```

#### 1020. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10681-L10682` → after: `L10681-L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682) · [Before (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682)

```diff
-             this.chunkColumnInfos = mF.partition(), this.caveGenerator = new ak.e(Tk, kk, Fk, null !== (Zk = null === qk || void 0 === qk ? void 0 : qk.tk.jk) && void 0 !== Zk ? Zk : "Lava");
-             const Pk = new SF(Fk, Tk, kk, null !== (jk = null === qk || void 0 === qk ? void 0 : qk.Uk) && void 0 !== jk ? jk : [...zF, ...null !== (ek = null === Lk || void 0 === Lk ? void 0 : Lk.gk) && void 0 !== ek ? ek : []]),
+             this.chunkColumnInfos = TH.partition(), this.caveGenerator = new qS.b(bS, SS, HS, null !== (kS = null === uS || void 0 === uS ? void 0 : uS.fS.aS) && void 0 !== kS ? kS : "Lava");
+             const PS = new ZH(HS, bS, SS, null !== (aS = null === uS || void 0 === uS ? void 0 : uS.yS) && void 0 !== aS ? aS : [...hH, ...null !== (KS = null === IS || void 0 === IS ? void 0 : IS.BS) && void 0 !== KS ? KS : []]),
```

#### 1021. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10684` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684)

```diff
-                 se: kk,
+                 JK: SS,
```

#### 1022. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10692-L10695` → after: `L10692-L10695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695) · [Before (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695)

```diff
-               Qk = null !== (wk = null === qk || void 0 === qk ? void 0 : qk.Ok) && void 0 !== wk ? wk : null,
-               sk = null !== (Hk = null === Lk || void 0 === Lk ? void 0 : Lk.buildBiomes) && void 0 !== Hk ? Hk : null,
-               Vk = null !== Qk ? (0, oF.i)(Qk, Kk) : null !== sk ? this.buildTerrainBiomes(sk, Kk) : (0, oF.l)(Kk);
-             this.biomeSelector = new oF.e(this, Pk, Tk, kk, Fk, Vk), this.treeGenerator = new eF(this, this.biomeSelector, kk, Tk, Fk), this.fixedPointPrefabTracker = new vk.c(lk, kk), this.prefabGenerator = new iF({
+               DS = null !== (jS = null === uS || void 0 === uS ? void 0 : uS.cS) && void 0 !== jS ? jS : null,
+               wS = null !== (GS = null === IS || void 0 === IS ? void 0 : IS.buildBiomes) && void 0 !== GS ? GS : null,
+               hS = null !== DS ? (0, JH.f)(DS, QS) : null !== wS ? this.buildTerrainBiomes(wS, QS) : (0, JH.j)(QS);
+             this.biomeSelector = new JH.c(this, PS, bS, SS, HS, hS), this.treeGenerator = new aH(this, this.biomeSelector, SS, bS, HS), this.fixedPointPrefabTracker = new OS.d(NS, SS), this.prefabGenerator = new bH({
```

#### 1023. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10697` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697)

```diff
-               se: kk,
+               JK: SS,
```

#### 1024. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10701` → after: `L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701) · [Before (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701)

```diff
-                 [ik.m.SURFACE]: {
+                 [XS.l.SURFACE]: {
```

#### 1025. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10703` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703)

```diff
-                     [ik.k.MEDIUM]: {
+                     [XS.j.MEDIUM]: {
```

#### 1026. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10706` → after: `L10706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706) · [Before (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706)

```diff
-                     [ik.k.HIGH]: {
+                     [XS.j.HIGH]: {
```

#### 1027. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10709` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709)

```diff
-                     [ik.k.VERY_HIGH]: {
+                     [XS.j.VERY_HIGH]: {
```

#### 1028. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-                 [ik.m.UNDERGROUND]: {
+                 [XS.l.UNDERGROUND]: {
```

#### 1029. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10716` → after: `L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10716) · [Before (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10716)

```diff
-                     [ik.k.MEDIUM]: {
+                     [XS.j.MEDIUM]: {
```

#### 1030. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10719-L10720` → after: `L10719-L10720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720) · [Before (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720)

```diff
-                     [ik.k.HIGH]: null,
-                     [ik.k.VERY_HIGH]: null
+                     [XS.j.HIGH]: null,
+                     [XS.j.VERY_HIGH]: null
```

#### 1031. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10725` → after: `L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725)

```diff
-             }), this.noWaterHeightmapGenerator = new gF.g((0, gF.j)(Tk)), this.heightmapPerturb = new Xk.l([{
+             }), this.noWaterHeightmapGenerator = new RH.d((0, RH.g)(bS)), this.heightmapPerturb = new tS.j([{
```

#### 1032. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10734` → after: `L10734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734) · [Before (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734)

```diff
-             }], `${Tk}HeightmapPerturb`);
+             }], `${bS}HeightmapPerturb`);
```

#### 1033. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10740` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740) · [Before (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740)

```diff
-             this.waterBodyGenerator = new QF(this.biomeSelector, this.noWaterHeightmapGenerator, Tk, kk, zk, this.needOutsideWaterDist, yk, null === (Jk = null === qk || void 0 === qk ? void 0 : qk.Lk) || void 0 === Jk || Jk), this.caveDecorationGenerator = new fF(Fk, kk, Tk, nul … [truncated]
+             this.waterBodyGenerator = new QH(this.biomeSelector, this.noWaterHeightmapGenerator, bS, SS, ZS, this.needOutsideWaterDist, xS, null === (CS = null === uS || void 0 === uS ? void 0 : uS.IS) || void 0 === CS || CS), this.caveDecorationGenerator = new pH(HS, SS, bS, nul … [truncated]
```

#### 1034. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10759` → after: `L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759) · [Before (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759)

```diff
-             const Ik = this.se,
+             const gS = this.JK,
```

#### 1035. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777)

```diff
-               if ((null !== (Tk = Xk.get(ik.key)) && void 0 !== Tk ? Tk : ik) !== ik) throw new Error(`A world-gen terrain built two biomes keyed "${ik.key}"`);
+               if ((null !== (bS = tS.get(XS.key)) && void 0 !== bS ? bS : XS) !== XS) throw new Error(`A world-gen terrain built two biomes keyed "${XS.key}"`);
```

#### 1036. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10787-L10788` → after: `L10787-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788) · [Before (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788)

```diff
-               const kk = `${Math.floor(ak.x/this.se)}|${Math.floor(ak.z/this.se)}`,
-                 Fk = null !== (yk = ik.get(kk)) && void 0 !== yk ? yk : [];
+               const SS = `${Math.floor(qS.x/this.JK)}|${Math.floor(qS.z/this.JK)}`,
+                 HS = null !== (xS = XS.get(SS)) && void 0 !== xS ? xS : [];
```

#### 1037. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10793-L10794` → after: `L10793-L10794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794) · [Before (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794)

```diff
-               const kk = Math.floor(ak[0].x / this.se) * this.se,
-                 Fk = Math.floor(ak[0].z / this.se) * this.se,
+               const SS = Math.floor(qS[0].x / this.JK) * this.JK,
+                 HS = Math.floor(qS[0].z / this.JK) * this.JK,
```

#### 1038. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815)

```diff
-                   Xk: qk.prefab.name
+                   tS: uS.prefab.name
```

#### 1039. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-               Lk = Xk.getOrGenerate(kk + Math.floor(this.se / 2), Fk + Math.floor(this.se / 2))[0].biome.oreGenerator.getOreBlocksForChunk(kk, Fk),
+               IS = tS.getOrGenerate(SS + Math.floor(this.JK / 2), HS + Math.floor(this.JK / 2))[0].biome.oreGenerator.getOreBlocksForChunk(SS, HS),
```

#### 1040. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10866` → after: `L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866)

```diff
-             return Xk.w.create(this.se, [kk, Fk], this.biomeSelector)
+             return tS.r.create(this.JK, [SS, HS], this.biomeSelector)
```

#### 1041. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10869-L10870` → after: `L10869-L10870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870) · [Before (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870)

```diff
-             const yk = new gF.d(Ik, Tk, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-             return Xk.t.create(this.se, [kk, Fk], ik.e.NumFields, yk)
+             const xS = new RH.b(gS, bS, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+             return tS.o.create(this.JK, [SS, HS], XS.f.NumFields, xS)
```

#### 1042. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874)

```diff
-       39665: (kk, Fk, Ik) => {
+       39733: (SS, HS, gS) => {
```

#### 1043. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10876-L10879` → after: `L10876-L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10876-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876-L10881) · [Before (L10876-L10879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876-L10879)

```diff
-           d: () => ck,
-           h: () => Sk,
-           l: () => Vk,
-           p: () => zk,
+           b: () => zS,
+           f: () => JS,
+           j: () => hS,
+           m: () => ZS,
+           n: () => ES,
+           o: () => yS,
```

#### 1044. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10881-L10889` → after: `L10883-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10883-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10883-L10889) · [Before (L10881-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10881-L10889)

```diff
-           t: () => Rk,
-           w: () => nk,
-           x: () => Kk,
-           y: () => Pk,
-           B: () => sk,
-           F: () => wk,
-           J: () => Qk,
-           L: () => xk,
-           P: () => Jk
+           v: () => QS,
+           z: () => PS,
+           C: () => wS,
+           E: () => jS,
+           I: () => DS,
+           K: () => nS,
+           O: () => CS
```

#### 1045. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10891` → after: `L10891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891) · [Before (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891)

```diff
-         var Xk = Ik(2775),
+         var tS = gS(2990),
```

#### 1046. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10904` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904)

```diff
-             const Fk = "function" == typeof kk ? kk : function(kk) {
+             const HS = "function" == typeof SS ? SS : function(SS) {
```

#### 1047. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11113` → after: `L11113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113) · [Before (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113)

```diff
-         var ek = Ik(39669);
+         var KS = gS(39735);
```

#### 1048. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11142` → after: `L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142) · [Before (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142)

```diff
-             BL: xk(kk, ik, yk),
+             BI: nS(SS, XS, xS),
```

#### 1049. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11173` → after: `L11173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173) · [Before (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173)

```diff
-             for (let Ik = 0; Ik < kk.length; Ik++) this._simplexes.push(new jk(`${Fk}${Ik}`))
+             for (let gS = 0; gS < SS.length; gS++) this._simplexes.push(new aS(`${HS}${gS}`))
```

#### 1050. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11198` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198)

```diff
-             for (let Tk = 0; Tk < kk.length; Tk++) this._simplexes.push(new jk(`${Ik}${Tk}`));
+             for (let bS = 0; bS < SS.length; bS++) this._simplexes.push(new aS(`${gS}${bS}`));
```

#### 1051. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11206` → after: `L11206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11206) · [Before (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11206)

```diff
-               if (Ik - this.remainingAmplitudes[Xk] > this.threshold.high || Ik + this.remainingAmplitudes[Xk] < this.threshold.low) return ek.c;
+               if (gS - this.remainingAmplitudes[tS] > this.threshold.high || gS + this.remainingAmplitudes[tS] < this.threshold.low) return KS.e;
```

#### 1052. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11334` → after: `L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334)

```diff
-             if (void 0 === Xk) throw new Error(`Number not found for x=${kk}, z=${Fk}, thirdIndex=${Ik}`);
+             if (void 0 === tS) throw new Error(`Number not found for x=${SS}, z=${HS}, thirdIndex=${gS}`);
```

#### 1053. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383)

```diff
-             if (void 0 === Tk) throw new Error(`Number not found for x=${kk}, z=${Fk}, thirdIndex=${Ik}, fourthIndex=${Xk}`);
+             if (void 0 === bS) throw new Error(`Number not found for x=${SS}, z=${HS}, thirdIndex=${gS}, fourthIndex=${tS}`);
```

#### 1054. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413` → after: `L11413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413)

```diff
-       39669: (kk, Fk, Ik) => {
+       39735: (SS, HS, gS) => {
```

#### 1055. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11415` → after: `L11415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11415) · [Before (L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11415)

```diff
-           c: () => ak,
+           e: () => qS,
```

#### 1056. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11418` → after: `L11419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11419) · [Before (L11418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11418)

```diff
-           m: () => ik,
+           l: () => NS,
```

#### 1057. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11420-L11421` → after: `L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11421) · [Before (L11420-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11420-L11421)

```diff
-           p: () => Tk,
-           s: () => Xk
+           q: () => tS
```

#### 1058. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       39678: (kk, Fk, Ik) => {
+       39740: (SS, HS, gS) => {
```

#### 1059. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11439-L11441` → after: `L11439-L11441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11439-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11439-L11441) · [Before (L11439-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11439-L11441)

```diff
-           k: () => lk,
-           m: () => yk,
-           p: () => ik
+           j: () => NS,
+           l: () => xS,
+           o: () => XS
```

#### 1060. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11460` → after: `L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460)

```diff
-       4221: (kk, Fk, Ik) => {
+       4370: (SS, HS, gS) => {
```

#### 1061. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11462-L11463` → after: `L11462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11462) · [Before (L11462-L11463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11462-L11463)

```diff
-           c: () => ak,
-           d: () => ik,
+           b: () => qS,
```

#### 1062. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11466-L11467` → after: `L11465-L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11465-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11465-L11467) · [Before (L11466-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11466-L11467)

```diff
-           m: () => yk,
-           n: () => Tk
+           l: () => NS,
+           n: () => xS,
+           r: () => bS
```

#### 1063. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11493` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493)

```diff
-             if (this.distribution = void 0, kk.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(kk)}`);
+             if (this.distribution = void 0, SS.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(SS)}`);
```

#### 1064. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11498` → after: `L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11498) · [Before (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11498)

```diff
-               if (Fk.has(Xk)) throw new Error(`Values must be unique: ${JSON.stringify(kk)}`);
+               if (HS.has(tS)) throw new Error(`Values must be unique: ${JSON.stringify(SS)}`);
```

#### 1065. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11501` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11501) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11501)

```diff
-               if (ik <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(kk)}`);
+               if (XS <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(SS)}`);
```

#### 1066. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, kk > Fk) throw new Error(`Min must be less than or equal to Max, but Min=${kk} and Max=${Fk}`);
+             if (this.offset = void 0, this.multiplier = void 0, SS > HS) throw new Error(`Min must be less than or equal to Max, but Min=${SS} and Max=${HS}`);
```

#### 1067. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new yk(kk, Fk, Ik), !Number.isInteger(kk) || !Number.isInteger(Fk)) throw new Error(`Min and Max must be integers, but Min=${kk} and Max=${Fk}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new xS(SS, HS, gS), !Number.isInteger(SS) || !Number.isInteger(HS)) throw new Error(`Min and Max must be integers, but Min=${SS} and Max=${HS}`)
```

#### 1068. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11552` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552)

```diff
-       628: (kk, Fk, Ik) => {
+       680: (SS, HS, gS) => {
```

#### 1069. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11554-L11555` → after: `L11554-L11555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11554-L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11554-L11555) · [Before (L11554-L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11554-L11555)

```diff
-           D: () => qk,
-           G: () => jk,
+           A: () => aS,
+           E: () => KS,
```

#### 1070. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11557-L11558` → after: `L11557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11557) · [Before (L11557-L11558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11557-L11558)

```diff
-           Q: () => ak,
-           X: () => tk,
+           T: () => fS,
```

#### 1071. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11563` → after: `L11563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11563) · [Before (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11563)

```diff
-           z: () => Zk
+           x: () => uS
```

#### 1072. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11565` → after: `L11565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565)

```diff
-         var Xk = Ik(633);
+         var tS = gS(687);
```

#### 1073. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11603` → after: `L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603) · [Before (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603)

```diff
-       633: (kk, Fk, Ik) => {
+       687: (SS, HS, gS) => {
```

#### 1074. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11609` → after: `L11609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609)

```diff
-       217: (kk, Fk, Ik) => {
+       236: (SS, HS, gS) => {
```

#### 1075. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11611` → after: `L11611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11611) · [Before (L11611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11611)

```diff
-           "./localConfigValues.ts.clientRelease": 224
+           "./localConfigValues.ts.clientRelease": 241
```

#### 1076. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11628` → after: `L11628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11628) · [Before (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11628)

```diff
-         }, Tk.resolve = ik, kk.exports = Tk, Tk.id = 217
+         }, bS.resolve = XS, SS.exports = bS, bS.id = 236
```

#### 1077. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11630` → after: `L11630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11630) · [Before (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11630)

```diff
-       224: (kk, Fk, Ik) => {
+       241: (SS, HS, gS) => {
```

#### 1078. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11654-L11659` → after: `L11654-L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11654-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11654-L11659) · [Before (L11654-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11654-L11659)

```diff
-   }, Ik.f = {}, Ik.e = kk => Promise.all(Object.keys(Ik.f).reduce(((Fk, Xk) => (Ik.f[Xk](kk, Fk), Fk)), [])), Ik.u = kk => "static/js/31kiid." + (69 === kk ? "worldgenTables" : kk) + "." + {
-     69: "5c741cc6",
-     72: "cbd9f9d4",
-     73: "7f829c2e",
-     74: "b3d5d6af",
-     75: "64cb6d14"
+   }, gS.f = {}, gS.e = SS => Promise.all(Object.keys(gS.f).reduce(((HS, tS) => (gS.f[tS](SS, HS), HS)), [])), gS.u = SS => "static/js/fqwnlq." + (69 === SS ? "worldgenTables" : SS) + "." + {
+     69: "7ba7830b",
+     72: "4321d779",
+     73: "0da0c4ce",
+     74: "1470cae8",
+     75: "e5403475"
```

#### 1079. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11730` → after: `L11730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11730) · [Before (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11730)

```diff
-       Ik = Fk < 0 ? this.length + Fk : Fk;
+       gS = HS < 0 ? this.length + HS : HS;
```

#### 1080. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11745-L11747` → after: `L11745-L11747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11745-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11745-L11747) · [Before (L11745-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11745-L11747)

```diff
-     QH: () => Nk,
-     sH: () => ck,
-     yt: () => Wk,
+     hG: () => WS,
+     ZG: () => zS,
+     bf: () => US,
```

#### 1081. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11750-L11760` → after: `L11750-L11760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11750-L11760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11750-L11760) · [Before (L11750-L11760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11750-L11760)

```diff
-     lt: () => fk,
-     qt: () => Bk,
-     Lt: () => dk,
-     tt: () => Yk,
-     Zt: () => Ak,
-     jt: () => gk,
-     et: () => mk,
-     wt: () => hk,
-     Pt: () => rk,
-     Qt: () => Dk,
-     Vt: () => Mk
+     Xf: () => pS,
+     xf: () => sS,
+     Nf: () => BS,
+     qf: () => MS,
+     uf: () => FS,
+     ff: () => RS,
+     kf: () => TS,
+     af: () => oS,
+     Cf: () => lS,
+     Qf: () => mS,
+     Df: () => eS
```

#### 1082. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11765` → after: `L11765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11765) · [Before (L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11765)

```diff
-   var qk = Ik(2775),
+   var uS = gS(2990),
```

#### 1083. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11800` → after: `L11800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11800) · [Before (L11800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11800)

```diff
-     return null === wk ? "not failed" : `${wk}: ${(kk=Hk)instanceof Error?`${kk.name}: ${kk.message}`:String(kk)}`;
+     return null === jS ? "not failed" : `${jS}: ${(SS=GS)instanceof Error?`${SS.name}: ${SS.message}`:String(SS)}`;
```

#### 1084. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11805` → after: `L11805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11805) · [Before (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11805)

```diff
-     if (!Sk()) throw new Error(`Bloxd wasm is not ready (${vk()}): check isBloxdWasmReady() first`);
+     if (!JS()) throw new Error(`Bloxd wasm is not ready (${OS()}): check isBloxdWasmReady() first`);
```

#### 1085. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11843` → after: `L11843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11843) · [Before (L11843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11843)

```diff
-       Pt: Tk
+       Cf: bS
```

#### 1086. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11864` → after: `L11864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11864) · [Before (L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11864)

```diff
-     ek = "failed", wk = Fk, Hk = kk, console.error(`Bloxd wasm failed (${Fk}):`, kk);
+     KS = "failed", jS = HS, GS = SS, console.error(`Bloxd wasm failed (${HS}):`, SS);
```

#### 1087. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11883-L11884` → after: `L11883-L11884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11883-L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11883-L11884) · [Before (L11883-L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11883-L11884)

```diff
-       reserveUpFront: Fk => kk().tt(Fk),
-       reserveAhead: Fk => kk().Lt(Fk),
+       reserveUpFront: HS => SS().qf(HS),
+       reserveAhead: HS => SS().Nf(HS),
```

#### 1088. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11886` → after: `L11886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11886) · [Before (L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11886)

```diff
-         kk().Zt(Fk)
+         SS().uf(HS)
```

#### 1089. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11888` → after: `L11888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11888) · [Before (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11888)

```diff
-       lowWater: () => Uk[kk().qt()] ?? "none",
+       lowWater: () => VS[SS().xf()] ?? "none",
```

#### 1090. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11911-L11913` → after: `L11911-L11913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11911-L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11911-L11913) · [Before (L11911-L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11911-L11913)

```diff
-       }(kk().jt()),
-       takeBallast: () => kk().et(),
-       takePressure: () => kk().wt()
+       }(SS().ff()),
+       takeBallast: () => SS().kf(),
+       takePressure: () => SS().af()
```

#### 1091. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11923` → after: `L11923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11923) · [Before (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11923)

```diff
-       xF.kRlq(kk, 0)
+       CH.gIsh(SS, 0)
```

#### 1092. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11926` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11926) · [Before (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11926)

```diff
-       const Fk = LF(kk, xF.ZP1O, xF.IeBc),
+       const HS = uH(SS, CH.AK2q, CH.JlvI),
```

#### 1093. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11928` → after: `L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11928) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11928)

```diff
-       xF.y1rU(this.__wbg_ptr, Fk, Ik)
+       CH.vZfB(this.__wbg_ptr, HS, gS)
```

#### 1094. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11931` → after: `L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11931) · [Before (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11931)

```diff
-       return xF.cJih(this.__wbg_ptr) >>> 0
+       return CH.pKK1(this.__wbg_ptr) >>> 0
```

#### 1095. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11934` → after: `L11934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11934) · [Before (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11934)

```diff
-       const kk = xF.bHVC();
+       const SS = CH.UIHP();
```

#### 1096. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11938` → after: `L11938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11938) · [Before (L11938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11938)

```diff
-       return xF.Fy6j(this.__wbg_ptr) >>> 0
+       return CH.KgEk(this.__wbg_ptr) >>> 0
```

#### 1097. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11941` → after: `L11941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11941) · [Before (L11941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11941)

```diff
-       return xF.oS0E(this.__wbg_ptr) >>> 0
+       return CH.jx1n(this.__wbg_ptr) >>> 0
```

#### 1098. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11944` → after: `L11944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944)

```diff
-       return xF.h3oA(this.__wbg_ptr) >>> 0
+       return CH.V0so(this.__wbg_ptr) >>> 0
```

#### 1099. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11955` → after: `L11955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11955) · [Before (L11955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11955)

```diff
-       xF.mZu4(kk, 0)
+       CH.VBfx(SS, 0)
```

#### 1100. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11958` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11958) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11958)

```diff
-       return xF.S4v7(this.__wbg_ptr, kk) >>> 0
+       return CH.FH4z(this.__wbg_ptr, SS) >>> 0
```

#### 1101. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11961` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11961) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11961)

```diff
-       return xF.YvHH(this.__wbg_ptr, kk) >>> 0
+       return CH.Uuiw(this.__wbg_ptr, SS) >>> 0
```

#### 1102. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11964` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964)

```diff
-       const Fk = xF.VQt2(void 0 === (Ik = kk) || null === Ik ? Number.MAX_SAFE_INTEGER : kk >>> 0);
+       const HS = CH.QAh0(void 0 === (gS = SS) || null === gS ? Number.MAX_SAFE_INTEGER : SS >>> 0);
```

#### 1103. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11969` → after: `L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11969) · [Before (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11969)

```diff
-       return xF.WbS8(this.__wbg_ptr) >>> 0
+       return CH.gg4T(this.__wbg_ptr) >>> 0
```

#### 1104. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11972` → after: `L11972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11972) · [Before (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11972)

```diff
-       return xF.pFSc(this.__wbg_ptr) >>> 0
+       return CH.hKCp(this.__wbg_ptr) >>> 0
```

#### 1105. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11975` → after: `L11975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11975) · [Before (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11975)

```diff
-       return xF.S0FR(this.__wbg_ptr, kk) >>> 0
+       return CH.LwA6(this.__wbg_ptr, SS) >>> 0
```

#### 1106. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11980` → after: `L11980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11980) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11980)

```diff
-     const Ik = LF(kk, xF.ZP1O, xF.IeBc),
+     const gS = uH(SS, CH.AK2q, CH.JlvI),
```

#### 1107. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11982` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11982) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11982)

```diff
-       Tk = xF.vimw(Ik, Xk, Fk);
+       bS = CH.VLtX(gS, tS, HS);
```

#### 1108. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11987` → after: `L11987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11987) · [Before (L11987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11987)

```diff
-     xF.APNj()
+     CH.wGNi()
```

#### 1109. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11991` → after: `L11991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11991) · [Before (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11991)

```diff
-     return xF.mfy4() >>> 0
+     return CH.GQPT() >>> 0
```

#### 1110. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11995` → after: `L11995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11995) · [Before (L11995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11995)

```diff
-     return 0 !== xF.jjsQ(kk)
+     return 0 !== CH.qEGK(SS)
```

#### 1111. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11999` → after: `L11999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11999) · [Before (L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11999)

```diff
-     return 0 !== xF.bLHq(kk)
+     return 0 !== CH.duiU(SS)
```

#### 1112. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12003` → after: `L12003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12003) · [Before (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12003)

```diff
-     xF.PYZa(kk)
+     CH.cJf1(SS)
```

#### 1113. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12007` → after: `L12007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12007) · [Before (L12007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12007)

```diff
-     return xF.Taod() >>> 0
+     return CH.Y4v4() >>> 0
```

#### 1114. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12011` → after: `L12011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12011) · [Before (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12011)

```diff
-     return xF.TyCW() >>> 0
+     return CH.IY3C() >>> 0
```

#### 1115. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12015` → after: `L12015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12015) · [Before (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12015)

```diff
-     return 0 !== xF.KVw5()
+     return 0 !== CH.SZNq()
```

#### 1116. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12019` → after: `L12019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12019) · [Before (L12019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12019)

```diff
-     return xF.o0yU() >>> 0
+     return CH.pF6R() >>> 0
```

#### 1117. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12025` → after: `L12025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12025) · [Before (L12025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12025)

```diff
-       const Ik = xF.gnub();
+       const gS = CH.dOFR();
```

#### 1118. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12028` → after: `L12028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12028) · [Before (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12028)

```diff
-       xF.ZNZb(kk, Fk, 1)
+       CH.xzf3(SS, HS, 1)
```

#### 1119. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12033` → after: `L12033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12033) · [Before (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12033)

```diff
-     xF.RcIP(XF(kk))
+     CH.tod0(gH(SS))
```

#### 1120. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12039` → after: `L12039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12039) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12039)

```diff
-       wf4t: {
+       mTWx: {
```

#### 1121. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12041` → after: `L12041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12041) · [Before (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12041)

```diff
-         B2nl: function(kk, Fk) {
+         rWcM: function(SS, HS) {
```

#### 1122. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12044` → after: `L12044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12044) · [Before (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12044)

```diff
-         BSB8: function(kk, Fk) {
+         XIPd: function(SS, HS) {
```

#### 1123. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12047` → after: `L12047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12047) · [Before (L12047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12047)

```diff
-         CHzL: function(kk) {
+         Agps: function(SS) {
```

#### 1124. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12050` → after: `L12050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12050) · [Before (L12050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12050)

```diff
-         CGYB: function(kk, Fk) {
+         EWQM: function(SS, HS) {
```

#### 1125. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12053` → after: `L12053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12053) · [Before (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12053)

```diff
-         MauK: function(kk) {
+         Qgin: function(SS) {
```

#### 1126. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12063` → after: `L12063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12063) · [Before (L12063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12063)

```diff
-     } : new FinalizationRegistry((kk => xF.kRlq(kk, 1))),
+     } : new FinalizationRegistry((SS => CH.gIsh(SS, 1))),
```

#### 1127. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12067` → after: `L12067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12067) · [Before (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12067)

```diff
-     } : new FinalizationRegistry((kk => xF.mZu4(kk, 1)));
+     } : new FinalizationRegistry((SS => CH.VBfx(SS, 1)));
```

#### 1128. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12144` → after: `L12144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12144) · [Before (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12144)

```diff
-     return JF = kk, xF = kk.exports, HF = Fk, iF = null, xF.ISpp(), xF
+     return GH = SS, CH = SS.exports, jH = HS, bH = null, CH.Fcf1(), CH
```

#### 1129. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12168` → after: `L12168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12168) · [Before (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12168)

```diff
-         if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
+         if (!SS.ok) throw new Error(`failed to fetch Wasm: ${SS.status} ${SS.statusText} fetching '${SS.url}'`);
```

#### 1130. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12198-L12199` → after: `L12198-L12199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12198-L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12198-L12199) · [Before (L12198-L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12198-L12199)

```diff
-       if (!Sk()) throw new Error(`Bloxd wasm is not ready (${vk()}): check isBloxdWasmReady() first`);
-       if (Kk !== kk) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${Fk}`)
+       if (!JS()) throw new Error(`Bloxd wasm is not ready (${OS()}): check isBloxdWasmReady() first`);
+       if (QS !== SS) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${HS}`)
```

#### 1131. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12202` → after: `L12202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12202) · [Before (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12202)

```diff
-   var zF = Ik(628);
+   var hH = gS(680);
```

#### 1132. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12209` → after: `L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12209) · [Before (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12209)

```diff
-       } = Ik(39776), jk = function(kk, Fk, Ik) {
+       } = gS(39831), aS = function(SS, HS, gS) {
```

#### 1133. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12211` → after: `L12211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12211) · [Before (L12211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12211)

```diff
-         for (const lk of kk.gk) GF(lk, Ik);
+         for (const NS of SS.BS) EH(NS, gS);
```

#### 1134. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12214` → after: `L12214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12214) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12214)

```diff
-           gk: kk.gk,
+           BS: SS.BS,
```

#### 1135. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12220` → after: `L12220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12220) · [Before (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12220)

```diff
-           throw new Error(`Custom world-gen terrain "${Xk.name}" is not in this generator's catalogue (${kk.length>0?kk.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${tS.name}" is not in this generator's catalogue (${SS.length>0?SS.join(", "):"empty"})`)
```

#### 1136. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12225` → after: `L12225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12225) · [Before (L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12225)

```diff
-               if (null !== kk.Ak) throw new Error(`Custom world-gen terrain "${kk.name}" takes no options`);
+               if (null !== SS.sS) throw new Error(`Custom world-gen terrain "${SS.name}" takes no options`);
```

#### 1137. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12229-L12230` → after: `L12229-L12230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12229-L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12229-L12230) · [Before (L12229-L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12229-L12230)

```diff
-             if (null !== kk.Ak) try {
-               Ik = JSON.parse(kk.Ak)
+             if (null !== SS.sS) try {
+               gS = JSON.parse(SS.sS)
```

#### 1138. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12232` → after: `L12232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12232) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12232)

```diff
-               throw new Error(`Custom world-gen terrain "${kk.name}" has invalid optionsJson: ${String(Xk)}`, {
+               throw new Error(`Custom world-gen terrain "${SS.name}" has invalid optionsJson: ${String(tS)}`, {
```

#### 1139. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12239` → after: `L12239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12239) · [Before (L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12239)

```diff
-           gk: kk.gk,
+           BS: SS.BS,
```

#### 1140. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12242` → after: `L12242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12242) · [Before (L12242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12242)

```diff
-       }(null !== (Lk = null === lk || void 0 === lk ? void 0 : lk.fk) && void 0 !== Lk ? Lk : null, ak, Fk);
+       }(null !== (IS = null === NS || void 0 === NS ? void 0 : NS.zS) && void 0 !== IS ? IS : null, qS, HS);
```

#### 1141. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12244` → after: `L12244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12244) · [Before (L12244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12244)

```diff
-       const ek = null !== (tk = null === lk || void 0 === lk ? void 0 : lk.layers) && void 0 !== tk ? tk : [];
+       const KS = null !== (fS = null === NS || void 0 === NS ? void 0 : NS.layers) && void 0 !== fS ? fS : [];
```

#### 1142. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12247` → after: `L12247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12247) · [Before (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12247)

```diff
-         const Ik = [...kk].sort(((kk, Fk) => kk.lk - Fk.lk));
+         const gS = [...SS].sort(((SS, HS) => SS.NS - HS.NS));
```

#### 1143. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12249` → after: `L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12249) · [Before (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12249)

```diff
-           if (Ik[Xk].lk < Ik[Xk - 1].ak) throw new Error(`Custom world-gen layers overlap: [${Ik[Xk-1].lk}, ${Ik[Xk-1].ak}) and [${Ik[Xk].lk}, ${Ik[Xk].ak})`)
+           if (gS[tS].NS < gS[tS - 1].qS) throw new Error(`Custom world-gen layers overlap: [${gS[tS-1].NS}, ${gS[tS-1].qS}) and [${gS[tS].NS}, ${gS[tS].qS})`)
```

#### 1144. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12261` → after: `L12261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12261) · [Before (L12261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12261)

```diff
-         if (Ik >= Tk.lk && Ik < Tk.ak) return ik.getChunk(kk, Fk, Ik - Tk.qk, Xk);
+         if (gS >= bS.NS && gS < bS.qS) return XS.getChunk(SS, HS, gS - bS.uS, tS);
```

#### 1145. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12279-L12280` → after: `L12279-L12280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12279-L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12279-L12280) · [Before (L12279-L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12279-L12280)

```diff
-     if (kk.lk >= kk.ak) throw new Error(`Custom world-gen layer has minY (${kk.lk}) >= maxY (${kk.ak})`);
-     if (kk.lk % zF.D !== 0 || kk.ak % zF.D !== 0 || kk.qk % zF.D !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${zF.D}); got minY=${kk.lk}, maxY=${kk.ak}, groundY=${kk.qk}`);
+     if (SS.NS >= SS.qS) throw new Error(`Custom world-gen layer has minY (${SS.NS}) >= maxY (${SS.qS})`);
+     if (SS.NS % hH.x !== 0 || SS.qS % hH.x !== 0 || SS.uS % hH.x !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${hH.x}); got minY=${SS.NS}, maxY=${SS.qS}, groundY=${SS.uS}`);
```

#### 1146. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12282-L12285` → after: `L12282-L12285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12282-L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12282-L12285) · [Before (L12282-L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12282-L12285)

```diff
-         if (void 0 === (0, zF.K)(kk.jk, Fk)) throw new Error(`Custom world-gen caves lavaPitBlock "${kk.jk}" not found in blockMetadata`);
-         if (kk.wk)
-           for (const Ik of kk.wk) vF(Ik, Fk)
-       }(kk.tk, Fk), 0 === kk.Ok.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, hH.E)(SS.aS, HS)) throw new Error(`Custom world-gen caves lavaPitBlock "${SS.aS}" not found in blockMetadata`);
+         if (SS.KS)
+           for (const gS of SS.KS) OH(gS, HS)
+       }(SS.fS, HS), 0 === SS.cS.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1147. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12287` → after: `L12287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12287) · [Before (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12287)

```diff
-     for (const Xk of kk.Ok) nF(Xk, Fk), Ik += Xk.frequency;
+     for (const tS of SS.cS) vH(tS, HS), gS += tS.frequency;
```

#### 1148. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12289` → after: `L12289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12289) · [Before (L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12289)

```diff
-     for (const Xk of kk.Uk) GF(Xk, Fk)
+     for (const tS of SS.yS) EH(tS, HS)
```

#### 1149. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12295-L12297` → after: `L12295-L12297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12295-L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12295-L12297) · [Before (L12295-L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12295-L12297)

```diff
-       Jk: Xk,
-       xk: Tk,
-       Pk: ik
+       GS: tS,
+       CS: bS,
+       nS: XS
```

#### 1150. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12299-L12300` → after: `L12299-L12300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12299-L12300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12299-L12300) · [Before (L12299-L12300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12299-L12300)

```diff
-     if (void 0 === (0, zF.K)(Ik, Fk)) throw new Error(`Custom world-gen cave decoration blockName "${Ik}" not found in blockMetadata`);
-     if (!Xk && !Tk && !ik) throw new Error(`Custom world-gen cave decoration "${Ik}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, hH.E)(gS, HS)) throw new Error(`Custom world-gen cave decoration blockName "${gS}" not found in blockMetadata`);
+     if (!tS && !bS && !XS) throw new Error(`Custom world-gen cave decoration "${gS}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1151. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12303-L12304` → after: `L12303-L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12303-L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12303-L12304) · [Before (L12303-L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12303-L12304)

```diff
-     if (ik && EF(Ik, "meta|rot1|top", Fk), OF(kk.Kk, Ik, "Kk"), OF(kk.Qk, Ik, "Qk"), !Number.isInteger(kk.sk) || kk.sk < 0) throw new Error(`Custom world-gen cave decoration "${Ik}" minPlacements must be a non-negative integer, got ${kk.sk}`);
-     if (!(0, zF.Q)(kk.Vk) && (OF(kk.Vk.Sk, Ik, "depthRamp.deepClusterChance"), kk.Vk.vk <= kk.Vk.Ek)) throw new Error(`Custom world-gen cave decoration "${Ik}" deepY must be strictly smaller than shallowY, but ${kk.Vk.vk} <= ${kk.Vk.Ek} `)
+     if (XS && dH(gS, "meta|rot1|top", HS), cH(SS.PS, gS, "PS"), cH(SS.QS, gS, "QS"), !Number.isInteger(SS.DS) || SS.DS < 0) throw new Error(`Custom world-gen cave decoration "${gS}" minPlacements must be a non-negative integer, got ${SS.DS}`);
+     if (!(0, hH.K)(SS.wS) && (cH(SS.wS.ZS, gS, "depthRamp.deepClusterChance"), SS.wS.OS <= SS.wS.dS)) throw new Error(`Custom world-gen cave decoration "${gS}" deepY must be strictly smaller than shallowY, but ${SS.wS.OS} <= ${SS.wS.dS} `)
```

#### 1152. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12308-L12309` → after: `L12308-L12309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12308-L12309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12308-L12309) · [Before (L12308-L12309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12308-L12309)

```diff
-     const Xk = `${kk}|${Fk}`;
-     if (void 0 === (0, zF.K)(Xk, Ik)) throw new Error(`Custom world-gen cave decoration "${kk}" is missing directional variant "${Xk}" required for wall/ceiling anchoring`)
+     const tS = `${SS}|${HS}`;
+     if (void 0 === (0, hH.E)(tS, gS)) throw new Error(`Custom world-gen cave decoration "${SS}" is missing directional variant "${tS}" required for wall/ceiling anchoring`)
```

#### 1153. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12313` → after: `L12313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12313) · [Before (L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12313)

```diff
-     if (kk < 0 || kk > 1) throw new Error(`Custom world-gen cave decoration "${Fk}" ${Ik} must be in [0, 1], got ${kk}`)
+     if (SS < 0 || SS > 1) throw new Error(`Custom world-gen cave decoration "${HS}" ${gS} must be in [0, 1], got ${SS}`)
```

#### 1154. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12317-L12323` → after: `L12317-L12323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12317-L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12317-L12323) · [Before (L12317-L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12317-L12323)

```diff
-     if (kk.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${kk.frequency}`);
-     if (void 0 === (0, zF.K)(kk.Gk, Fk)) throw new Error(`Custom world-gen biome topsoilBlock "${kk.Gk}" not found in blockMetadata`);
-     if (void 0 === (0, zF.K)(kk.uk, Fk)) throw new Error(`Custom world-gen biome lowsoilBlock "${kk.uk}" not found in blockMetadata`);
-     if (0 === kk.bk.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const Ik of kk.bk) {
-       if (Ik.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${Ik.frequency}`);
-       if (void 0 === (0, zF.K)(Ik.blockName, Fk)) throw new Error(`Custom world-gen biome stoneType blockName "${Ik.blockName}" not found in blockMetadata`)
+     if (SS.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${SS.frequency}`);
+     if (void 0 === (0, hH.E)(SS.ES, HS)) throw new Error(`Custom world-gen biome topsoilBlock "${SS.ES}" not found in blockMetadata`);
+     if (void 0 === (0, hH.E)(SS.LS, HS)) throw new Error(`Custom world-gen biome lowsoilBlock "${SS.LS}" not found in blockMetadata`);
+     if (0 === SS.YS.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const gS of SS.YS) {
+       if (gS.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${gS.frequency}`);
+       if (void 0 === (0, hH.E)(gS.blockName, HS)) throw new Error(`Custom world-gen biome stoneType blockName "${gS.blockName}" not found in blockMetadata`)
```

#### 1155. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12328-L12332` → after: `L12328-L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12328-L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12328-L12332) · [Before (L12328-L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12328-L12332)

```diff
-     if (void 0 === (0, zF.K)(kk.blockName, Fk)) throw new Error(`Custom world-gen ore blockName "${kk.blockName}" not found in blockMetadata`);
-     if (kk.radius < 0) throw new Error(`Custom world-gen ore "${kk.blockName}" radius must be >= 0, got ${kk.radius}`);
-     if (kk.Nk <= 0) throw new Error(`Custom world-gen ore "${kk.blockName}" minDistBetweenDeposits must be > 0, got ${kk.Nk}`);
-     if (kk.lk > kk.ak) throw new Error(`Custom world-gen ore "${kk.blockName}" minY (${kk.lk}) must be <= maxY (${kk.ak})`);
-     if (kk.Wk < 0 || kk.Wk > 1) throw new Error(`Custom world-gen ore "${kk.blockName}" spawnChance must be in [0, 1], got ${kk.Wk}`)
+     if (void 0 === (0, hH.E)(SS.blockName, HS)) throw new Error(`Custom world-gen ore blockName "${SS.blockName}" not found in blockMetadata`);
+     if (SS.radius < 0) throw new Error(`Custom world-gen ore "${SS.blockName}" radius must be >= 0, got ${SS.radius}`);
+     if (SS.iS <= 0) throw new Error(`Custom world-gen ore "${SS.blockName}" minDistBetweenDeposits must be > 0, got ${SS.iS}`);
+     if (SS.NS > SS.qS) throw new Error(`Custom world-gen ore "${SS.blockName}" minY (${SS.NS}) must be <= maxY (${SS.qS})`);
+     if (SS.WS < 0 || SS.WS > 1) throw new Error(`Custom world-gen ore "${SS.blockName}" spawnChance must be in [0, 1], got ${SS.WS}`)
```

#### 1156. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12338-L12341` → after: `L12338-L12341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12338-L12341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12338-L12341) · [Before (L12338-L12341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12338-L12341)

```diff
-       Nk: 10,
-       lk: -98,
-       ak: -78,
-       Wk: .4
+       iS: 10,
+       NS: -98,
+       qS: -78,
+       WS: .4
```

#### 1157. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12346-L12349` → after: `L12346-L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12346-L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12346-L12349) · [Before (L12346-L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12346-L12349)

```diff
-       Nk: 6,
-       lk: -40,
-       ak: 20,
-       Wk: .6
+       iS: 6,
+       NS: -40,
+       qS: 20,
+       WS: .6
```

#### 1158. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12353-L12356` → after: `L12353-L12356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12353-L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12353-L12356) · [Before (L12353-L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12353-L12356)

```diff
-       Nk: 10,
-       lk: -75,
-       ak: -55,
-       Wk: .4
+       iS: 10,
+       NS: -75,
+       qS: -55,
+       WS: .4
```

#### 1159. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12360` → after: `L12360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12360) · [Before (L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12360)

```diff
-       Ak: null
+       sS: null
```

#### 1160. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12363` → after: `L12363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12363) · [Before (L12363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12363)

```diff
-     [pF]: () => Ik(39657).b
+     [LH]: () => gS(39724).c
```

#### 1161. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12388` → after: `L12388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12388) · [Before (L12388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12388)

```diff
-       if (!gF.includes(Fk)) throw new Error(`Invalid port offset "${kk}". Must be one of: ${gF.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!RH.includes(HS)) throw new Error(`Invalid port offset "${SS}". Must be one of: ${RH.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1162. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12466)

```diff
-     const Fk = dF() ? DF : MF;
+     const HS = BH() ? mH : eH;
```

#### 1163. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12866` → after: `L12866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12866) · [Before (L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12866)

```diff
-     if (iI.has(kk)) throw new Error(`Duplicate leave code: ${kk}`);
+     if (bg.has(SS)) throw new Error(`Duplicate leave code: ${SS}`);
```

#### 1164. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12889` → after: `L12889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12889) · [Before (L12889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12889)

```diff
-     return kk === Fk ? ik + Xk * Xk <= kk * kk : kk > Fk ? Math.abs(Xk) <= Fk && ik + Xk * Xk <= kk * kk : ik <= kk * kk && ik + Xk * Xk <= Fk * Fk
+     return SS === HS ? XS + tS * tS <= SS * SS : SS > HS ? Math.abs(tS) <= HS && XS + tS * tS <= SS * SS : XS <= SS * SS && XS + tS * tS <= HS * HS
```

#### 1165. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12906` → after: `L12906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12906) · [Before (L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12906)

```diff
-     const kk = Promise.all([Ik.e(72), Ik.e(75), Ik.e(74), Ik.e(73), Ik.e(69)]).then((() => Ik(39768))).then((kk => {
+     const SS = Promise.all([gS.e(72), gS.e(75), gS.e(74), gS.e(73), gS.e(69)]).then((() => gS(39821))).then((SS => {
```

#### 1166. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12949` → after: `L12949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12949) · [Before (L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12949)

```diff
-               reason: `its memory stats trapped (${String(Fk)})`
+               reason: `its memory stats trapped (${String(HS)})`
```

#### 1167. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12955` → after: `L12955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12955) · [Before (L12955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12955)

```diff
-               const Ik = ak.VH();
+               const gS = qS.JG();
```

#### 1168. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12958` → after: `L12958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12958) · [Before (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12958)

```diff
-                 return String.fromCharCode(...new Uint8Array(nk().buffer, kk.zH(), 32))
+                 return String.fromCharCode(...new Uint8Array(vS().buffer, SS.OG(), 32))
```

#### 1169. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12971` → after: `L12971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12971) · [Before (L12971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12971)

```diff
-               yk = Hk.se, tk = new Uint16Array(yk * yk * yk),
+               xS = GS.JK, fS = new Uint16Array(xS * xS * xS),
```

#### 1170. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12980` → after: `L12980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12980) · [Before (L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12980)

```diff
-                           reason: `the memory ceiling was not set (${String(Xk)})`
+                           reason: `the memory ceiling was not set (${String(tS)})`
```

#### 1171. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12984` → after: `L12984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12984) · [Before (L12984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12984)

```diff
-                         ak = new(VF().QH)
+                         qS = new(wH().hG)
```

#### 1172. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12988` → after: `L12988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12988) · [Before (L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12988)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(Xk)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(tS)})`
```

#### 1173. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12998` → after: `L12998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12998) · [Before (L12998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12998)

```diff
-                           reason: `the block and item tables did not load (${String(Fk)})`
+                           reason: `the block and item tables did not load (${String(HS)})`
```

#### 1174. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13003` → after: `L13003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13003) · [Before (L13003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13003)

```diff
-                       reason: `wasm did not start (${Ek()})`
+                       reason: `wasm did not start (${dS()})`
```

#### 1175. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13007` → after: `L13007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13007) · [Before (L13007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13007)

```diff
-                     reason: `chunk size ${yk} is not the encoder's 32`
+                     reason: `chunk size ${xS} is not the encoder's 32`
```

#### 1176. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13018` → after: `L13018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13018) · [Before (L13018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13018)

```diff
-                 qk = new SF(yk, lk.blockMetadata, lk.itemMetadata, kk.Fk, !1, kk.Ik, kk.Tk, Xk, wk)
+                 uS = new ZH(xS, NS.blockMetadata, NS.itemMetadata, SS.HS, !1, SS.gS, SS.bS, tS, jS)
```

#### 1177. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13043` → after: `L13043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13043) · [Before (L13043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13043)

```diff
-                     const Ik = kk.SH(),
+                     const gS = SS.dG(),
```

#### 1178. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13045` → after: `L13045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13045) · [Before (L13045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13045)

```diff
-                       Tk = Fk.byteLength >= Xk ? Fk : new ArrayBuffer(Xk),
+                       bS = HS.byteLength >= tS ? HS : new ArrayBuffer(tS),
```

#### 1179. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13048` → after: `L13048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13048) · [Before (L13048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13048)

```diff
-                     return yk.set(new Uint8Array(ik, kk.zH(), WF)), yk.set(new Uint8Array(ik, kk.oH(), Ik), WF), {
+                     return xS.set(new Uint8Array(XS, SS.OG(), UH)), xS.set(new Uint8Array(XS, SS.cG(), gS), UH), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   36393: (kk, Fk, Ik) => {
+   36415: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6)

```diff
-       c: () => Tk
+       d: () => bS
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L41)

```diff
-           if (Fk > 0 && Ik.searchParams.set("cache-bust", `${Date.now()}-${Fk}`), await this.fetchWhole(Ik, kk)) return this.scriptUrl = Ik, !0;
+           if (HS > 0 && gS.searchParams.set("cache-bust", `${Date.now()}-${HS}`), await this.fetchWhole(gS, SS)) return this.scriptUrl = gS, !0;
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L83)

```diff
-   51008: (kk, Fk, Ik) => {
+   51055: (SS, HS, gS) => {
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L90)

```diff
-     const Xk = new(Ik(36393).c)(new URL(Ik.p + Ik.u(70), Ik.b), {
+     const tS = new(gS(36415).d)(new URL(gS.p + gS.u(70), gS.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/main.js` (1178 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see 31kiid.main.1299b0d6.js.LICENSE.txt */
+ /*! For license information please see fqwnlq.main.985c8f39.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L3)

```diff
-     var kk = [, , , , , , , , , , , , , , , (kk, Fk, Ik) => {
+     var SS = [, , , , , , , , , , (SS, HS, gS) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L7-L9` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L9-L10) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L7-L9)

```diff
-             J: () => fk,
-             L: () => sk,
-             M: () => Zk,
+             I: () => dS,
+             K: () => pS,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L12-L13` → after: `L13-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L13-L16) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L12-L13)

```diff
-             R: () => Lk,
-             V: () => Uk,
+             Q: () => DS,
+             T: () => YS,
+             W: () => IS,
+             X: () => VS,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L15-L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L18) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L15-L17)

```diff
-             Z: () => Kk,
-             b: () => ek,
-             bb: () => qk,
+             d: () => KS,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L21-L24)

```diff
-             hb: () => Xk,
-             j: () => wk,
-             k: () => lk,
-             n: () => ak,
+             gb: () => vS,
+             i: () => CS,
+             ib: () => tS,
+             l: () => jS,
+             o: () => NS,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L141)

```diff
-         }, , , , , (kk, Fk, Ik) => {
+         }, , , , , , , (SS, HS, gS) => {
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L143)

```diff
-             d: () => yk
+             c: () => xS
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L145)

```diff
-           var Xk = Ik(25);
+           var tS = gS(24);
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L167)

```diff
-             (Xk.d.set({
+             (tS.b.set({
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L174)

```diff
-         }, , , , , (kk, Fk, Ik) => {
+         }, , , , , , , (SS, HS, gS) => {
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L176-L177` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L176-L177) · [Before (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L176-L177)

```diff
-             d: () => PF,
-             f: () => sF,
+             b: () => nH,
+             c: () => DH,
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L179-L180` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L179-L180) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L179-L180)

```diff
-             h: () => KF,
-             j: () => VF
+             k: () => PH,
+             m: () => wH
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L182-L186` → after: `L182-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L182-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L182-L186) · [Before (L182-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L182-L186)

```diff
-           var Xk = Ik(34),
-             Tk = Ik(318),
-             ik = Ik(337),
-             yk = Ik(41),
-             lk = Ik(51),
+           var tS = gS(31),
+             bS = gS(369),
+             XS = gS(387),
+             xS = gS(45),
+             NS = gS(61),
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L189-L197` → after: `L189-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L189-L191) · [Before (L189-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L189-L197)

```diff
-             Lk = Ik(58),
-             tk = Ik(74),
-             Zk = Ik(95),
-             jk = Ik(250),
-             ek = Ik(302),
-             wk = Ik(309),
-             Hk = Ik(113),
-             Jk = Ik(641),
-             xk = Ik(646),
+             IS = gS(64),
+             fS = gS(77),
+             kS = gS(104),
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L199-L202` → after: `L193-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L193-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/main.js#L193-L202) · [Before (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/main.js#L199-L202)

```diff
-             Kk = Ik(729),
-             Qk = Ik(734),
-             sk = Ik(737),
-             Vk = Ik(272);
+             KS = gS(354),
+             jS = gS(362),
+             GS = gS(122),
+             CS = gS(693),
+             nS = gS(699),
+             PS = gS(321),
+             QS = gS(775),
+             DS = gS(783),
+             wS = gS(786),
+             hS = gS(307);
```
