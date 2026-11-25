# Changed — Bundle Modifications Report (Part 048 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `48 / 56` (**395** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 047](part-047.md) · [Part 049 →](part-049.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (1053 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed)

#### 659. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7736-L7740` → after: `L7736-L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7736-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7736-L7740) · [Before (L7736-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7736-L7740)

```diff
-             for (let TQ = 0; TQ < wQ.x; TQ += sQ.v)
-               for (let WQ = 0; WQ < wQ.y; WQ += sQ.v)
-                 for (let XQ = 0; XQ < wQ.z; XQ += sQ.v) {
-                   const zQ = PQ()(new Uint16Array(sQ.v * sQ.v * sQ.v), [sQ.v, sQ.v, sQ.v]),
-                     FQ = QQ.getRLEChunk((0, sQ.M)(TQ), (0, sQ.M)(WQ), (0, sQ.M)(XQ));
+             for (let jM = 0; jM < OM.x; jM += PM.y)
+               for (let rM = 0; rM < OM.y; rM += PM.y)
+                 for (let iM = 0; iM < OM.z; iM += PM.y) {
+                   const aM = QM()(new Uint16Array(PM.y * PM.y * PM.y), [PM.y, PM.y, PM.y]),
+                     nM = MM.getRLEChunk((0, PM.R)(jM), (0, PM.R)(rM), (0, PM.R)(iM));
```

#### 660. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7742-L7744` → after: `L7742-L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7742-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7742-L7744) · [Before (L7742-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7742-L7744)

```diff
-                   const JQ = Math.min(sQ.v, wQ.x - TQ),
-                     rQ = Math.min(sQ.v, wQ.y - WQ),
-                     IQ = Math.min(sQ.v, wQ.z - XQ);
+                   const LM = Math.min(PM.y, OM.x - jM),
+                     mM = Math.min(PM.y, OM.y - rM),
+                     HM = Math.min(PM.y, OM.z - iM);
```

#### 661. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7779` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7779) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7779)

```diff
-             XQ.set(QQ, WQ, wQ.f.DistanceToNearestFixedPrefab, qQ), XQ.set(QQ, WQ, wQ.f.HeightOfNearestFixedPrefab, TQ)
+             iM.set(MM, rM, OM.j.DistanceToNearestFixedPrefab, SM), iM.set(MM, rM, OM.j.HeightOfNearestFixedPrefab, jM)
```

#### 662. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7784` → after: `L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7784) · [Before (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7784)

```diff
-       39946: (QQ, WQ, XQ) => {
+       40790: (MM, rM, iM) => {
```

#### 663. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7787-L7788` → after: `L7787-L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7787-L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7787-L7788) · [Before (L7787-L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7787-L7788)

```diff
-           f: () => FQ,
-           i: () => sQ
+           e: () => nM,
+           g: () => PM
```

#### 664. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7790-L7793` → after: `L7790-L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793) · [Before (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793)

```diff
-         var wQ = XQ(39954),
-           qQ = XQ(39970),
-           TQ = XQ(39962),
-           zQ = XQ(39979);
+         var OM = iM(40793),
+           SM = iM(40804),
+           jM = iM(40798),
+           aM = iM(40813);
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7802` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7802) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7802)

```diff
-           }], `${QQ}GlobalHeightmapOffset`)
+           }], `${MM}GlobalHeightmapOffset`)
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7838` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7838) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7838)

```diff
-             null !== IQ && (PQ = IQ, gQ = TQ.q, JQ = IQ - TQ.g, rQ = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(QQ, WQ, qQ, zQ, XQ, PQ, gQ, JQ, rQ)
+             null !== HM && (QM = HM, zM = jM.s, LM = HM - jM.f, mM = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(MM, rM, SM, aM, iM, QM, zM, LM, mM)
```

#### 667. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7851` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7851) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7851)

```diff
-               IQ = TQ.q,
+               HM = jM.s,
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7862` → after: `L7862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7862) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7862)

```diff
-                 WQ < 1 && (IQ = PQ + Math.floor((FQ - PQ) * WQ), rQ >= IQ && (IQ = TQ.q, BQ = TQ.i))
+                 rM < 1 && (HM = QM + Math.floor((nM - QM) * rM), mM >= HM && (HM = jM.s, JM = jM.i))
```

#### 669. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7870` → after: `L7870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7870) · [Before (L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7870)

```diff
-               jQ = rQ - TQ.g
+               hM = mM - jM.f
```

#### 670. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7880-L7881` → after: `L7880-L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7880-L7881) · [Before (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7880-L7881)

```diff
-             const rQ = zQ.b.smoothHeightmapForFixedPointPrefab(Math.round(QQ + XQ / 4), Math.round(WQ + wQ / 4), FQ, this.nearestFixedPrefabInfoForChunk);
-             null !== rQ && PQ > (FQ = rQ) && (PQ = TQ.q, JQ = 0), sQ.set(QQ, WQ, qQ.e.GroundHeight, FQ), sQ.set(QQ, WQ, qQ.e.WaterHeight, PQ), sQ.set(QQ, WQ, qQ.e.CavesAllowedBelowY, gQ), sQ.set(QQ, WQ, qQ.e.IsLake, JQ), this.shouldCurtailCave(QQ, WQ, null !== rQ) && sQ.set(QQ, W … [truncated]
+             const mM = aM.e.smoothHeightmapForFixedPointPrefab(Math.round(MM + iM / 4), Math.round(rM + OM / 4), nM, this.nearestFixedPrefabInfoForChunk);
+             null !== mM && QM > (nM = mM) && (QM = jM.s, LM = 0), PM.set(MM, rM, SM.f.GroundHeight, nM), PM.set(MM, rM, SM.f.WaterHeight, QM), PM.set(MM, rM, SM.f.CavesAllowedBelowY, zM), PM.set(MM, rM, SM.f.IsLake, LM), this.shouldCurtailCave(MM, rM, null !== mM) && PM.set(MM, r … [truncated]
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7893` → after: `L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7893) · [Before (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7893)

```diff
-       40002: (QQ, WQ, XQ) => {
+       40832: (MM, rM, iM) => {
```

#### 672. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7895` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7895) · [Before (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7895)

```diff
-           b: () => PQ
+           c: () => QM
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7897-L7898` → after: `L7897-L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898) · [Before (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898)

```diff
-         var wQ = XQ(39954),
-           qQ = XQ(40006),
+         var OM = iM(40793),
+           SM = iM(40835),
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7900-L7902` → after: `L7900-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902) · [Before (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902)

```diff
-           zQ = XQ(4545),
-           sQ = XQ(40041);
-         const FQ = new sQ.d("point cells", 500, 6e4);
+           aM = iM(4586),
+           PM = iM(40878);
+         const nM = new PM.c("point cells", 500, 6e4);
```

#### 675. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7919` → after: `L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7919) · [Before (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7919)

```diff
-             if (this.gridSize < XQ) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${XQ} (chunkSize=${QQ}, halfBox=${WQ}). Points near chunk edges would be missed.`)
+             if (this.gridSize < iM) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${iM} (chunkSize=${MM}, halfBox=${rM}). Points near chunk edges would be missed.`)
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7926` → after: `L7926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7926) · [Before (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7926)

```diff
-             return !!wQ.has((0, sQ.h)(QQ, WQ))
+             return !!OM.has((0, PM.d)(MM, rM))
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7935` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7935) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7935)

```diff
-               const XQ = (0, wQ.H)(FQ, QQ, WQ);
+               const iM = (0, OM.D)(nM, MM, rM);
```

#### 678. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7964` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7964) · [Before (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7964)

```diff
-               const QQ = (0, wQ.H)(PQ, WQ, XQ);
+               const MM = (0, OM.D)(QM, rM, iM);
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7976` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7976) · [Before (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7976)

```diff
-               const JQ = (0, wQ.H)(gQ, WQ, XQ) - zQ;
+               const LM = (0, OM.D)(zM, rM, iM) - aM;
```

#### 680. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8009)

```diff
-               const TQ = new zQ.e(`${QQ}${WQ}${this.seed}jitter`);
+               const jM = new aM.h(`${MM}${rM}${this.seed}jitter`);
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8020` → after: `L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8020) · [Before (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8020)

```diff
-               const sQ = new zQ.e(`${QQ}${WQ}${this.seed}pts`),
+               const PM = new aM.h(`${MM}${rM}${this.seed}pts`),
```

#### 682. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8048` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8048) · [Before (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8048)

```diff
-               for (const QQ of qQ) FQ.add((0, sQ.h)(QQ[0], QQ[1]))
+               for (const MM of SM) nM.add((0, PM.d)(MM[0], MM[1]))
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8052` → after: `L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8052) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8052)

```diff
-               points: this.useKthClosestPoint ? qQ : null
+               points: this.useKthClosestPoint ? SM : null
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8057` → after: `L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8057) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8057)

```diff
-       40060: (QQ, WQ, XQ) => {
+       40899: (MM, rM, iM) => {
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8061-L8070` → after: `L8061-L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070) · [Before (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070)

```diff
-         var wQ = XQ(39954),
-           qQ = XQ(40002),
-           TQ = XQ(39970),
-           zQ = XQ(39962),
-           sQ = XQ(38002),
-           FQ = XQ(40054),
-           PQ = XQ(643),
-           gQ = XQ(663),
-           JQ = XQ(39413),
-           rQ = XQ(4545);
+         var OM = iM(40793),
+           SM = iM(40832),
+           jM = iM(40804),
+           aM = iM(40798),
+           PM = iM(38710),
+           nM = iM(40896),
+           QM = iM(596),
+           zM = iM(625),
+           LM = iM(40201),
+           mM = iM(4586);
```

#### 686. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8085` → after: `L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8085) · [Before (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8085)

```diff
-             return null !== (WQ = BQ[this.suffixMapping[QQ]]) && void 0 !== WQ ? WQ : []
+             return null !== (rM = JM[this.suffixMapping[MM]]) && void 0 !== rM ? rM : []
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8104` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8104) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8104)

```diff
-               WQ[XQ] = (null !== (zQ = WQ[XQ]) && void 0 !== zQ ? zQ : 0) + 1, WQ[XQ] >= VQ && wQ.splice(wQ.indexOf(XQ), 1)
+               rM[iM] = (null !== (aM = rM[iM]) && void 0 !== aM ? aM : 0) + 1, rM[iM] >= yM && OM.splice(OM.indexOf(iM), 1)
```

#### 688. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8171)

```diff
-             return `r${QQ}|m${Number(WQ)}`
+             return `r${MM}|m${Number(rM)}`
```

#### 689. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8205` → after: `L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8205) · [Before (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8205)

```diff
-             const [, IQ, jQ] = null !== (qQ = UQ.exec(JQ)) && void 0 !== qQ ? qQ : [];
+             const [, HM, hM] = null !== (SM = GM.exec(LM)) && void 0 !== SM ? SM : [];
```

#### 690. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8208` → after: `L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8208) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8208)

```diff
-               rQ = null !== (BQ = null === (yQ = TQ[`${gQ}|meta|${[GQ.split("").filter(((QQ,WQ)=>IQ.split("").some((QQ=>{const XQ=GQ.indexOf(QQ);return((wQ?3-XQ:XQ)+zQ)%4===WQ})))).join(""),jQ].filter(Boolean).join("|")}`]) || void 0 === yQ ? void 0 : yQ.id) && void 0 !== BQ ? BQ … [truncated]
+               mM = null !== (JM = null === (dM = jM[`${zM}|meta|${[UM.split("").filter(((MM,rM)=>HM.split("").some((MM=>{const iM=UM.indexOf(MM);return((OM?3-iM:iM)+aM)%4===rM})))).join(""),hM].filter(Boolean).join("|")}`]) || void 0 === dM ? void 0 : dM.id) && void 0 !== JM ? JM … [truncated]
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8213` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8213) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8213)

```diff
-               let WQ = JQ.replace(`rot${PQ}`, `rot${QQ}`);
+               let rM = LM.replace(`rot${QM}`, `rot${MM}`);
```

#### 692. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8218` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8218) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8218)

```diff
-                 WQ = `${qQ[1]}|${QQ.join("")}`
+                 rM = `${SM[1]}|${MM.join("")}`
```

#### 693. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8220-L8221` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221)

```diff
-               const zQ = `${gQ}|${WQ}`;
-               if (rQ = null !== (VQ = null === (DQ = TQ[zQ]) || void 0 === DQ ? void 0 : DQ.id) && void 0 !== VQ ? VQ : null, null === rQ) {
+               const aM = `${zM}|${rM}`;
+               if (mM = null !== (yM = null === (lM = jM[aM]) || void 0 === lM ? void 0 : lM.id) && void 0 !== yM ? yM : null, null === mM) {
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8229` → after: `L8229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8229) · [Before (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8229)

```diff
-         var dQ = XQ(3079),
+         var bM = iM(3160),
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8231)

```diff
-           aQ = XQ(39979);
+           tM = iM(40813);
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8236` → after: `L8236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8236) · [Before (L8236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8236)

```diff
-             const FQ = XQ.getOrGenerate(QQ, WQ, sQ, TQ.c.FloorY);
+             const nM = iM.getOrGenerate(MM, rM, PM, jM.b.FloorY);
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8238` → after: `L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8238) · [Before (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8238)

```diff
-             iQ(qQ, FQ, XQ.getOrGenerate(QQ, WQ, sQ, TQ.c.CeilingY))
+             RM(SM, nM, iM.getOrGenerate(MM, rM, PM, jM.b.CeilingY))
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8259` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8259) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8259)

```diff
-         const cQ = new rQ.d([{
+         const pM = new mM.g([{
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8272` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8272) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8272)

```diff
-           AQ = new rQ.d([{
+           WM = new mM.g([{
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8282` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8282) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8282)

```diff
-         const CQ = new rQ.d(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const kM = new mM.g(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8291` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8291) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8291)

```diff
-             const WQ = `${CQ.sample(QQ)} ${this.mobType}`;
+             const rM = `${kM.sample(MM)} ${this.mobType}`;
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8307` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8307) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8307)

```diff
-               const QQ = new rQ.h(wQ.minItems, wQ.maxItems + 1),
+               const MM = new mM.j(OM.minItems, OM.maxItems + 1),
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8311-L8312` → after: `L8311-L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312) · [Before (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312)

```diff
-                 const QQ = WQ.amount ? new rQ.h(WQ.amount.min, WQ.amount.max + 1) : null,
-                   wQ = null !== (XQ = WQ.itemAttributesDistribution) && void 0 !== XQ ? XQ : null;
+                 const MM = rM.amount ? new mM.j(rM.amount.min, rM.amount.max + 1) : null,
+                   OM = null !== (iM = rM.itemAttributesDistribution) && void 0 !== iM ? iM : null;
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8322` → after: `L8322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8322) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8322)

```diff
-               const TQ = new rQ.d(qQ);
+               const jM = new mM.g(SM);
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8328` → after: `L8328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8328) · [Before (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8328)

```diff
-             this.itemCategoryDistributions = WQ, this.shouldEnchantDistribution = new rQ.c(QQ.enchantmentProbability), this.enchantmentTier = QQ.enchantmentTier
+             this.itemCategoryDistributions = rM, this.shouldEnchantDistribution = new mM.e(MM.enchantmentProbability), this.enchantmentTier = MM.enchantmentTier
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8331` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8331) · [Before (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8331)

```diff
-             const WQ = Array(gQ.g).fill(null);
+             const rM = Array(zM.p).fill(null);
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8339-L8341` → after: `L8339-L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341) · [Before (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341)

```diff
-                   rQ = null !== (wQ = null === (qQ = gQ.amountDistribution) || void 0 === qQ ? void 0 : qQ.sample(QQ)) && void 0 !== wQ ? wQ : null,
-                   IQ = null !== (TQ = null === (zQ = gQ.attributesDistribution) || void 0 === zQ ? void 0 : zQ.sample(QQ)) && void 0 !== TQ ? TQ : {},
-                   jQ = null !== (sQ = this.getEnchantmentAttributesForItem(QQ, JQ)) && void 0 !== sQ ? sQ : {};
+                   mM = null !== (OM = null === (SM = zM.amountDistribution) || void 0 === SM ? void 0 : SM.sample(MM)) && void 0 !== OM ? OM : null,
+                   HM = null !== (jM = null === (aM = zM.attributesDistribution) || void 0 === aM ? void 0 : aM.sample(MM)) && void 0 !== jM ? jM : {},
+                   hM = null !== (PM = this.getEnchantmentAttributesForItem(MM, LM)) && void 0 !== PM ? PM : {};
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8348` → after: `L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8348) · [Before (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8348)

```diff
-                       ...null !== (FQ = IQ.customAttributes) && void 0 !== FQ ? FQ : {},
+                       ...null !== (nM = HM.customAttributes) && void 0 !== nM ? nM : {},
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8642` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8642) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8642)

```diff
-             name: `${QQ} Pickaxe`,
+             name: `${MM} Pickaxe`,
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8646)

```diff
-             name: `${QQ} Axe`,
+             name: `${MM} Axe`,
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8650` → after: `L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8650) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8650)

```diff
-             name: `${QQ} Spade`,
+             name: `${MM} Spade`,
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8654` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8654) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8654)

```diff
-             name: `${QQ} Hoe`,
+             name: `${MM} Hoe`,
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8661` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8661) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8661)

```diff
-           if (WQ < 0 || WQ > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${WQ}`);
+           if (rM < 0 || rM > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${rM}`);
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8685` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8685) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8685)

```diff
-             name: `${QQ} Sword`,
+             name: `${MM} Sword`,
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8689` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8689) · [Before (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8689)

```diff
-             name: `${QQ} Bow`,
+             name: `${MM} Bow`,
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8693` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8693) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8693)

```diff
-             name: `${QQ} Crossbow`,
+             name: `${MM} Crossbow`,
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8706` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8706) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8706)

```diff
-           if (QQ === fQ.STONE) throw new Error(`${QQ} armour is not supported`);
+           if (MM === YM.STONE) throw new Error(`${MM} armour is not supported`);
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8708` → after: `L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8708) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8708)

```diff
-               name: `${QQ} Helmet`,
+               name: `${MM} Helmet`,
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8712` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8712) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8712)

```diff
-               name: `${QQ} Chestplate`,
+               name: `${MM} Chestplate`,
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8716` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8716) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8716)

```diff
-               name: `${QQ} Gauntlets`,
+               name: `${MM} Gauntlets`,
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8720` → after: `L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8720) · [Before (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8720)

```diff
-               name: `${QQ} Leggings`,
+               name: `${MM} Leggings`,
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8724` → after: `L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8724) · [Before (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8724)

```diff
-               name: `${QQ} Boots`,
+               name: `${MM} Boots`,
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8732)

```diff
-           [gQ.f.COMMON]: new LQ({
+           [zM.l.COMMON]: new oM({
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8761` → after: `L8761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8761) · [Before (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8761)

```diff
-           [gQ.f.UNCOMMON]: new LQ({
+           [zM.l.UNCOMMON]: new oM({
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8790` → after: `L8790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8790) · [Before (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8790)

```diff
-           [gQ.f.RARE]: new LQ({
+           [zM.l.RARE]: new oM({
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8819` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8819) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8819)

```diff
-           [gQ.f.EPIC]: new LQ({
+           [zM.l.EPIC]: new oM({
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8856` → after: `L8856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8856) · [Before (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8856)

```diff
-           [gQ.f.LEGENDARY]: new LQ({
+           [zM.l.LEGENDARY]: new oM({
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8981` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8981) · [Before (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8981)

```diff
-             const QQ = new rQ.e(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
+             const MM = new mM.h(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8986` → after: `L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8986) · [Before (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8986)

```diff
-                   chestStr: (0, gQ.y)(WQ),
+                   chestStr: (0, zM.A)(rM),
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8996` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8996) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8996)

```diff
-             this.seed = void 0, this.Ij = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.HL = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8999)

```diff
-               Ij: XQ,
+               HL: iM,
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9005)

```diff
-             qW.BLOCK_ID_MAPPINGS || (qW.BLOCK_ID_MAPPINGS = new vQ(wQ)), RQ || (RQ = new jQ(zQ)), this.seed = WQ, this.Ij = XQ, this.invisibleSolidBlockId = wQ["Invisible Solid"].id, this.emptySpawnerBlockId = wQ["Empty Spawner Block"].id, this.chestToLootChestBlockId = new PQ.d( … [truncated]
+             Sr.BLOCK_ID_MAPPINGS || (Sr.BLOCK_ID_MAPPINGS = new eM(OM)), sM || (sM = new hM(aM)), this.seed = rM, this.HL = iM, this.invisibleSolidBlockId = OM["Invisible Solid"].id, this.emptySpawnerBlockId = OM["Empty Spawner Block"].id, this.chestToLootChestBlockId = new QM.e( … [truncated]
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9012` → after: `L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9012) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9012)

```diff
-             for (const qQ of TQ.o) gQ[qQ] = wQ[`${qQ} Spawner Block`].id;
+             for (const SM of jM.r) zM[SM] = OM[`${SM} Spawner Block`].id;
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9027` → after: `L9027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9027) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9027)

```diff
-                   FQ = new qQ.b(`prefab|${QQ}|${zQ}`, sQ.minDistanceBetweenPrefabs, !1, !0, WQ, wQ, XQ, null, !0)
+                   nM = new SM.c(`prefab|${MM}|${aM}`, PM.minDistanceBetweenPrefabs, !1, !0, rM, OM, iM, null, !0)
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9041` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9041) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9041)

```diff
-             return new rQ.e(`${QQ}|${WQ}|${this.seed}|prefabGenerator`)
+             return new mM.h(`${MM}|${rM}|${this.seed}|prefabGenerator`)
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9070)

```diff
-               PQ = this.Ij >> 1,
+               QM = this.HL >> 1,
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9072` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9072) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9072)

```diff
-               rQ = QQ + this.Ij + this.prefabRadius,
+               mM = MM + this.HL + this.prefabRadius,
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9074` → after: `L9074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9074) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9074)

```diff
-               jQ = WQ + this.Ij + this.prefabRadius;
+               hM = rM + this.HL + this.prefabRadius;
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9082` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9082) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9082)

```diff
-                 if (yQ === TQ.k.SURFACE && DQ === TQ.g.VERY_HIGH && !sQ.regionMayHaveVeryHighSurfacePrefabs(gQ, IQ, rQ, jQ)) continue;
+                 if (dM === jM.o.SURFACE && lM === jM.l.VERY_HIGH && !PM.regionMayHaveVeryHighSurfacePrefabs(zM, HM, mM, hM)) continue;
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9092` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9092) · [Before (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9092)

```diff
-                   if (yQ === TQ.k.SURFACE && !PQ.canPlaceSurfacePrefab(WQ, sQ)) continue;
+                   if (dM === jM.o.SURFACE && !QM.canPlaceSurfacePrefab(rM, PM)) continue;
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9111` → after: `L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9111) · [Before (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9111)

```diff
-                       console.error(`Invalid prefab rotation: ${pQ}`)
+                       console.error(`Invalid prefab rotation: ${EM}`)
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9128` → after: `L9128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9128) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9128)

```diff
-                   if (yQ === TQ.k.SURFACE && null !== PQ.maxSurfacePrefabRelief) {
+                   if (dM === jM.o.SURFACE && null !== QM.maxSurfacePrefabRelief) {
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9135)

```diff
-                   const hQ = new JQ.e;
+                   const uM = new LM.c;
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9143` → after: `L9143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9143) · [Before (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9143)

```diff
-                   const iQ = new JQ.e;
+                   const RM = new LM.c;
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9173)

```diff
-                 const wQ = qQ.getOrGenerate(QQ + gQ, WQ + XQ, TQ.e.GroundHeight);
+                 const OM = SM.getOrGenerate(MM + zM, rM + iM, jM.f.GroundHeight);
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9194-L9195` → after: `L9194-L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195) · [Before (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195)

```diff
-                 mX: QQ,
-                 MX: XQ
+                 XS: MM,
+                 KS: iM
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9208` → after: `L9208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9208) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9208)

```diff
-                   if (XQ.getOrGenerate(PQ, QQ, TQ.e.WaterHeight) !== zQ.q) return {
+                   if (iM.getOrGenerate(QM, MM, jM.f.WaterHeight) !== aM.s) return {
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9212-L9213` → after: `L9212-L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213) · [Before (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213)

```diff
-                   const WQ = XQ.getOrGenerate(PQ, QQ, TQ.e.GroundHeight);
-                   if (FQ.b.isInCave(PQ, WQ, QQ, wQ)) return {
+                   const rM = iM.getOrGenerate(QM, MM, jM.f.GroundHeight);
+                   if (nM.c.isInCave(QM, rM, MM, OM)) return {
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9217` → after: `L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9217) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9217)

```diff
-                   if (aQ.b.isNearFixedPointPrefab(PQ, QQ, qQ)) return {
+                   if (tM.e.isNearFixedPointPrefab(QM, MM, SM)) return {
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9264-L9265` → after: `L9264-L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265) · [Before (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265)

```diff
-             if (sQ === this.emptySpawnerBlockId && (sQ = null !== (FQ = wQ.spawnerBlockLocationToBlockId.get(QQ, WQ, XQ)) && void 0 !== FQ ? FQ : this.defaultSpawnerBlockId), sQ < 0) return sQ;
-             if (sQ = null !== (TQ = null === (zQ = wQ.blockIdMapping) || void 0 === zQ ? void 0 : zQ[sQ]) && void 0 !== TQ ? TQ : sQ, void 0 !== this.chestToLootChestBlockId.reverseGet(sQ)) {
+             if (PM === this.emptySpawnerBlockId && (PM = null !== (nM = OM.spawnerBlockLocationToBlockId.get(MM, rM, iM)) && void 0 !== nM ? nM : this.defaultSpawnerBlockId), PM < 0) return PM;
+             if (PM = null !== (jM = null === (aM = OM.blockIdMapping) || void 0 === aM ? void 0 : aM[PM]) && void 0 !== jM ? jM : PM, void 0 !== this.chestToLootChestBlockId.reverseGet(PM)) {
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9267)

```diff
-               const TQ = null !== (PQ = wQ.chestLocationToQuality.get(QQ, WQ, XQ)) && void 0 !== PQ ? PQ : qW.DEFAULT_CHEST_QUALITY,
+               const jM = null !== (QM = OM.chestLocationToQuality.get(MM, rM, iM)) && void 0 !== QM ? QM : Sr.DEFAULT_CHEST_QUALITY,
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9294` → after: `L9294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9294) · [Before (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9294)

```diff
-             } = QQ, TQ = HQ()(new Int32Array(XQ * wQ * qQ), [XQ, wQ, qQ]), zQ = new JQ.e;
+             } = MM, jM = wM()(new Int32Array(iM * OM * SM), [iM, OM, SM]), aM = new LM.c;
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9296` → after: `L9296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9296) · [Before (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9296)

```diff
-             const FQ = new JQ.e;
+             const nM = new LM.c;
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9298-L9302` → after: `L9298-L9302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302) · [Before (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302)

```diff
-             for (let PQ = 0; PQ < XQ; PQ += gQ.v)
-               for (let WQ = 0; WQ < wQ; WQ += gQ.v)
-                 for (let JQ = 0; JQ < qQ; JQ += gQ.v) {
-                   const rQ = HQ()(new Uint16Array(gQ.v * gQ.v * gQ.v), [gQ.v, gQ.v, gQ.v]),
-                     IQ = QQ.schematic.getRLEChunk((0, gQ.M)(PQ), (0, gQ.M)(WQ), (0, gQ.M)(JQ));
+             for (let QM = 0; QM < iM; QM += zM.y)
+               for (let rM = 0; rM < OM; rM += zM.y)
+                 for (let LM = 0; LM < SM; LM += zM.y) {
+                   const mM = wM()(new Uint16Array(zM.y * zM.y * zM.y), [zM.y, zM.y, zM.y]),
+                     HM = MM.schematic.getRLEChunk((0, zM.R)(QM), (0, zM.R)(rM), (0, zM.R)(LM));
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9304-L9306` → after: `L9304-L9306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306) · [Before (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306)

```diff
-                   const jQ = Math.min(gQ.v, XQ - PQ),
-                     BQ = Math.min(gQ.v, wQ - WQ),
-                     yQ = Math.min(gQ.v, qQ - JQ);
+                   const hM = Math.min(zM.y, iM - QM),
+                     JM = Math.min(zM.y, OM - rM),
+                     dM = Math.min(zM.y, SM - LM);
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9315` → after: `L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9315) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9315)

```diff
-                         else if (this.emptySpawnerBlockId === sQ) FQ.get(gQ, IQ, jQ) || console.error(`Empty spawner block found in prefab ${QQ.schematic.name} at (${gQ}, ${IQ}, ${jQ}) with no mob type specified. Defaulting to "${qW.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === PM) nM.get(zM, HM, hM) || console.error(`Empty spawner block found in prefab ${MM.schematic.name} at (${zM}, ${HM}, ${hM}) with no mob type specified. Defaulting to "${Sr.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9318` → after: `L9318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9318) · [Before (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9318)

```diff
-                           void 0 !== WQ && (zQ.get(gQ, IQ, jQ) || console.error(`Chest found in prefab ${QQ.schematic.name} at (${gQ}, ${IQ}, ${jQ}) with no quality specified. Defaulting to "${qW.DEFAULT_CHEST_QUALITY}" quality.`), sQ = WQ)
+                           void 0 !== rM && (aM.get(zM, HM, hM) || console.error(`Chest found in prefab ${MM.schematic.name} at (${zM}, ${HM}, ${hM}) with no quality specified. Defaulting to "${Sr.DEFAULT_CHEST_QUALITY}" quality.`), PM = rM)
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9341` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9341) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9341)

```diff
-           }(QQ, QQ.shouldSwapXZ ? XQ : WQ)
+           }(MM, MM.shouldSwapXZ ? iM : rM)
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9348` → after: `L9348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9348) · [Before (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9348)

```diff
-           }(QQ, QQ.shouldSwapXZ ? WQ : XQ)
+           }(MM, MM.shouldSwapXZ ? rM : iM)
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9350` → after: `L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9350) · [Before (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9350)

```diff
-         qW.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, qW.BLOCK_ID_MAPPINGS = void 0, qW.DEFAULT_MOB_TYPE = "Draugr Zombie", qW.DEFAULT_CHEST_QUALITY = gQ.f.COMMON;
+         Sr.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, Sr.BLOCK_ID_MAPPINGS = void 0, Sr.DEFAULT_MOB_TYPE = "Draugr Zombie", Sr.DEFAULT_CHEST_QUALITY = zM.l.COMMON;
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9371` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9371) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9371)

```diff
-             const XQ = new wQ.f(2 * QQ + 1, [-QQ, -QQ]);
+             const iM = new OM.h(2 * MM + 1, [-MM, -MM]);
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9380` → after: `L9380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9380) · [Before (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9380)

```diff
-             this.Ij = XQ, this.seed = wQ, this.blockMetadata = TQ, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.HL = iM, this.seed = OM, this.blockMetadata = jM, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9383)

```diff
-                 [gQ.p.Maple]: {
+                 [zM.u.Maple]: {
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9391)

```diff
-                 [gQ.p.Pine]: {
+                 [zM.u.Pine]: {
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9401` → after: `L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9401) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9401)

```diff
-                 [gQ.p.Plum]: {
+                 [zM.u.Plum]: {
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9409` → after: `L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9409) · [Before (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9409)

```diff
-                 [gQ.p.Cedar]: {
+                 [zM.u.Cedar]: {
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9417` → after: `L9417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9417) · [Before (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9417)

```diff
-                 [gQ.p.Aspen]: {
+                 [zM.u.Aspen]: {
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9427` → after: `L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9427) · [Before (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9427)

```diff
-                 [gQ.p.Jungle]: {
+                 [zM.u.Jungle]: {
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9437` → after: `L9437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9437) · [Before (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9437)

```diff
-                 [gQ.p.Palm]: {
+                 [zM.u.Palm]: {
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9447)

```diff
-                 [gQ.p.AutumnMaple]: {
+                 [zM.u.AutumnMaple]: {
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9455)

```diff
-                 [gQ.p.Pear]: {
+                 [zM.u.Pear]: {
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9465` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9465) · [Before (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9465)

```diff
-                 [gQ.p.Cherry]: {
+                 [zM.u.Cherry]: {
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9475` → after: `L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9475) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9475)

```diff
-                 [gQ.p.Spectral]: {
+                 [zM.u.Spectral]: {
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9483)

```diff
-                 [gQ.p.Mango]: {
+                 [zM.u.Mango]: {
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9493` → after: `L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9493) · [Before (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9493)

```diff
-                 [gQ.p.AutumnAspen]: {
+                 [zM.u.AutumnAspen]: {
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9503` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9503) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9503)

```diff
-                 [gQ.p.Dead]: {
+                 [zM.u.Dead]: {
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9513` → after: `L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9513) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9513)

```diff
-                 [gQ.p.FallenLog]: {
+                 [zM.u.FallenLog]: {
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9523-L9524` → after: `L9523-L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524) · [Before (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((QQ => TQ[QQ].id)), this.maxTreeRadius = QQ.maxTreeRadius, this.Ij <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.Ij <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((MM => jM[MM].id)), this.maxTreeRadius = MM.maxTreeRadius, this.HL <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.HL <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9598` → after: `L9598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9598) · [Before (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9598)

```diff
-               if (QQ.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${QQ.radius} for canopy type "${qQ}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (MM.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${MM.radius} for canopy type "${SM}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9602-L9603` → after: `L9602-L9603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9602-L9603) · [Before (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9602-L9603)

```diff
-             for (const qQ of QQ.biomeSelector.Dw) qQ.biome.treeMinDist && (sQ = Math.min(sQ, qQ.biome.treeMinDist), FQ = Math.max(FQ, qQ.biome.treeMinDist));
-             this.treePointGen = new qQ.b("tree", 6, !0, !1, wQ, 300, XQ, {
+             for (const SM of MM.biomeSelector.Jj) SM.biome.treeMinDist && (PM = Math.min(PM, SM.biome.treeMinDist), nM = Math.max(nM, SM.biome.treeMinDist));
+             this.treePointGen = new SM.c("tree", 6, !0, !1, OM, 300, iM, {
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9611-L9612` → after: `L9611-L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612) · [Before (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612)

```diff
-             for (let IQ = QQ - this.maxTreeRadius; IQ < QQ + this.Ij + this.maxTreeRadius; IQ++)
-               for (let QQ = WQ - this.maxTreeRadius; QQ < WQ + this.Ij + this.maxTreeRadius; QQ++) {
+             for (let HM = MM - this.maxTreeRadius; HM < MM + this.HL + this.maxTreeRadius; HM++)
+               for (let MM = rM - this.maxTreeRadius; MM < rM + this.HL + this.maxTreeRadius; MM++) {
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9616-L9618` → after: `L9616-L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618) · [Before (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618)

```diff
-                   if (XQ.getOrGenerate(IQ, QQ, TQ.e.WaterHeight) !== zQ.q) continue;
-                   const wQ = XQ.getOrGenerate(IQ, QQ, TQ.e.GroundHeight);
-                   if (FQ.b.isInCave(IQ, wQ, QQ, qQ)) continue;
+                   if (iM.getOrGenerate(HM, MM, jM.f.WaterHeight) !== aM.s) continue;
+                   const OM = iM.getOrGenerate(HM, MM, jM.f.GroundHeight);
+                   if (nM.c.isInCave(HM, OM, MM, SM)) continue;
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9620-L9621` → after: `L9620-L9621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621) · [Before (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621)

```diff
-                   if (aQ.b.isNearFixedPointPrefab(IQ, QQ, PQ)) continue;
-                   const jQ = new rQ.e(`${IQ}${QQ}${this.seed}treeHeight`),
+                   if (tM.e.isNearFixedPointPrefab(HM, MM, QM)) continue;
+                   const hM = new mM.h(`${HM}${MM}${this.seed}treeHeight`),
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9627` → after: `L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9627) · [Before (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9627)

```diff
-                   if (BQ === gQ.p.FallenLog) {
+                   if (JM === zM.u.FallenLog) {
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9630` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9630) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9630)

```diff
-                       if (XQ.getOrGenerate(0 === VQ ? IQ + WQ : IQ, 0 === VQ ? QQ : QQ + WQ, TQ.e.GroundHeight) !== wQ) {
+                       if (iM.getOrGenerate(0 === yM ? HM + rM : HM, 0 === yM ? MM : MM + rM, jM.f.GroundHeight) !== OM) {
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9651-L9652` → after: `L9651-L9652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652) · [Before (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652)

```diff
-               TQ = null !== (XQ = qQ.minHeight) && void 0 !== XQ ? XQ : this.minTreeHeight,
-               zQ = null !== (wQ = qQ.maxHeight) && void 0 !== wQ ? wQ : this.maxTreeHeight;
+               jM = null !== (iM = SM.minHeight) && void 0 !== iM ? iM : this.minTreeHeight,
+               aM = null !== (OM = SM.maxHeight) && void 0 !== OM ? OM : this.maxTreeHeight;
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9667-L9668` → after: `L9667-L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668) · [Before (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668)

```diff
-               const qQ = new rQ.e(`${TQ.treeX}|${TQ.treeZ}|${TQ.trunkBase}|tree`);
-               if (TQ.treeType === gQ.p.Dead || TQ.treeType === gQ.p.FallenLog) {
+               const SM = new mM.h(`${jM.treeX}|${jM.treeZ}|${jM.trunkBase}|tree`);
+               if (jM.treeType === zM.u.Dead || jM.treeType === zM.u.FallenLog) {
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9685` → after: `L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9685) · [Before (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9685)

```diff
-                 qQ >= WQ && qQ < WQ + this.Ij && TQ >= XQ && TQ < XQ + this.Ij && sQ >= wQ && sQ < wQ + this.Ij && QQ.set(qQ - WQ, TQ - XQ, sQ - wQ, zQ)
+                 SM >= rM && SM < rM + this.HL && jM >= iM && jM < iM + this.HL && PM >= OM && PM < OM + this.HL && MM.set(SM - rM, jM - iM, PM - OM, aM)
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9687` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9687) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9687)

```diff
-             if (qQ.treeType === gQ.p.FallenLog) {
+             if (SM.treeType === zM.u.FallenLog) {
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9689)

```diff
-               for (let QQ = -1; QQ < JQ - 1; QQ++) rQ(0 === qQ.vineDir ? sQ + QQ : sQ, PQ, 0 === qQ.vineDir ? FQ : FQ + QQ);
+               for (let MM = -1; MM < LM - 1; MM++) mM(0 === SM.vineDir ? PM + MM : PM, QM, 0 === SM.vineDir ? nM : nM + MM);
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9714` → after: `L9714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9714) · [Before (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9714)

```diff
-               BQ = Math.min(IQ, XQ + this.Ij - 1);
+               JM = Math.min(HM, iM + this.HL - 1);
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9717` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9717) · [Before (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9717)

```diff
-               VQ = Math.min(zQ + JQ.radius, WQ + this.Ij - 1);
+               yM = Math.min(aM + LM.radius, rM + this.HL - 1);
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9720` → after: `L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9720) · [Before (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9720)

```diff
-               pQ = Math.min(sQ + JQ.radius, wQ + this.Ij - 1);
+               EM = Math.min(PM + LM.radius, OM + this.HL - 1);
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9795` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9795) · [Before (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9795)

```diff
-               if (BQ !== rW.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${BQ}`);
+               if (JM !== mr.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${JM}`);
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9802-L9804` → after: `L9802-L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804) · [Before (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804)

```diff
-             const zQ = WQ + this.Ij,
-               sQ = XQ + this.Ij,
-               FQ = wQ + this.Ij,
+             const aM = rM + this.HL,
+               PM = iM + this.HL,
+               nM = OM + this.HL,
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9830` → after: `L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9830) · [Before (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9830)

```diff
-             const WQ = this.Ij >> 1,
+             const rM = this.HL >> 1,
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9852` → after: `L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9852) · [Before (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9852)

```diff
-         var BW = XQ(40041);
+         var Jr = iM(40878);
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9856` → after: `L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9856) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9856)

```diff
-             this.biomeSelector = QQ, this.noWaterHeightmapGenerator = WQ, this.hydrology = XQ, this.lakeRadiusNoiseModifier = TQ, this.seed = zQ, this.needOutsideWaterDist = FQ, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = MM, this.noWaterHeightmapGenerator = rM, this.hydrology = iM, this.lakeRadiusNoiseModifier = jM, this.seed = aM, this.needOutsideWaterDist = nM, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9866` → after: `L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9866) · [Before (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9866)

```diff
-               if ((0, wQ.J)(JQ, QQ, WQ) > TQ) continue;
+               if ((0, OM.G)(LM, MM, rM) > jM) continue;
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9870` → after: `L9870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9870) · [Before (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9870)

```diff
-               const qQ = (0, wQ.H)(XQ.origin, QQ, WQ),
+               const SM = (0, OM.D)(iM.origin, MM, rM),
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9887` → after: `L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9887) · [Before (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9887)

```diff
-             if (!(0, gQ.G)(WQ)) return WQ.lake;
+             if (!(0, zM.J)(rM)) return rM.lake;
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9900` → after: `L9900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9900) · [Before (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9900)

```diff
-             } = this, TQ = new rQ.e(`${QQ[0]}|${QQ[1]}${this.seed}oasisLake`), zQ = this.hydrology.getHydrologyWaterGenInfo(QQ[0], QQ[1]), sQ = Math.floor(zQ.distFromWater - zQ.waterRadius - qQ);
+             } = this, jM = new mM.h(`${MM[0]}|${MM[1]}${this.seed}oasisLake`), aM = this.hydrology.getHydrologyWaterGenInfo(MM[0], MM[1]), PM = Math.floor(aM.distFromWater - aM.waterRadius - SM);
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9920` → after: `L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9920) · [Before (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9920)

```diff
-             this.biomeSelector = QQ, this.noWaterHeightmapGenerator = WQ, this.needOutsideWaterBodyDist = zQ, this.Ww = FQ, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = MM, this.noWaterHeightmapGenerator = rM, this.needOutsideWaterBodyDist = aM, this.VS = nM, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9932` → after: `L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9932) · [Before (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9932)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, pW || (pW = new BW.d("water cells", sQ ? 800 : 60, 6e4)), this.waterBodyInfos = pW.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, Er || (Er = new Jr.c("water cells", PM ? 800 : 60, 6e4)), this.waterBodyInfos = Er.partition();
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9940` → after: `L9940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9940) · [Before (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9940)

```diff
-             }], `${XQ}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, wQ.y)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new VW(QQ, WQ, this, this.lakeRadiusNoiseModifier, XQ, qQ, zQ, sQ)
+             }], `${iM}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, OM.u)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new yr(MM, rM, this, this.lakeRadiusNoiseModifier, iM, SM, aM, PM)
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9944` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9944) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9944)

```diff
-             if (!this.Ww) return bW(this.needOutsideWaterBodyDist);
+             if (!this.VS) return Cr(this.needOutsideWaterBodyDist);
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9948` → after: `L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9948) · [Before (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9948)

```diff
-             return null === qQ || UW(wQ) <= UW(qQ) ? wQ : qQ
+             return null === SM || Gr(OM) <= Gr(SM) ? OM : SM
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9974` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9974) · [Before (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9974)

```diff
-                 Az: QQ,
+                 RQ: MM,
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9977` → after: `L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9977) · [Before (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9977)

```diff
-               } = (0, wQ.v)(XQ, qQ.origin, qQ.downhill.origin);
+               } = (0, OM.t)(iM, SM.origin, SM.downhill.origin);
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9989` → after: `L9989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9989) · [Before (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9989)

```diff
-                 Az: QQ,
+                 RQ: MM,
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9992` → after: `L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9992) · [Before (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9992)

```diff
-               } = (0, wQ.v)(XQ, rQ.origin, qQ.origin), jQ = Math.floor(QQ);
+               } = (0, OM.t)(iM, mM.origin, SM.origin), hM = Math.floor(MM);
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10013` → after: `L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10013) · [Before (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10013)

```diff
-                 zQ *= TQ.lakeRadius / this.lakeSettings.maxRadius, rQ = TQ.lakeRadius - zQ, XQ = (0, wQ.H)(qQ.origin, QQ, WQ) - rQ
+                 aM *= jM.lakeRadius / this.lakeSettings.maxRadius, mM = jM.lakeRadius - aM, iM = (0, OM.D)(SM.origin, MM, rM) - mM
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10027` → after: `L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10027) · [Before (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10027)

```diff
-                 const XQ = (0, wQ.H)(qQ.origin, QQ, WQ),
+                 const iM = (0, OM.D)(SM.origin, MM, rM),
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10054)

```diff
-             if (!(0, gQ.G)(XQ)) return this.lastReadInfo.cellX = QQ, this.lastReadInfo.cellZ = WQ, this.lastReadInfo.info = XQ, XQ;
+             if (!(0, zM.J)(iM)) return this.lastReadInfo.cellX = MM, this.lastReadInfo.cellZ = rM, this.lastReadInfo.info = iM, iM;
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10118` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10118) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10118)

```diff
-             return -1 !== qQ ? wQ : null
+             return -1 !== SM ? OM : null
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10123` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10123) · [Before (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10123)

```diff
-               qQ = new rQ.e(`${QQ}${WQ}${this.seed}riverCell`);
+               SM = new mM.h(`${MM}${rM}${this.seed}riverCell`);
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10163-L10166` → after: `L10163-L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166) · [Before (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166)

```diff
-           lw: 40,
-           mX: -85,
-           MX: -85,
-           hw: .5
+           ej: 40,
+           XS: -85,
+           KS: -85,
+           bj: .5
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10170-L10173` → after: `L10170-L10173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173) · [Before (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173)

```diff
-           lw: 13,
-           mX: -100,
-           MX: -85,
-           hw: .28
+           ej: 13,
+           XS: -100,
+           KS: -85,
+           bj: .28
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10177-L10180` → after: `L10177-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180) · [Before (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180)

```diff
-           lw: 10,
-           mX: -100,
-           MX: -75,
-           hw: .4
+           ej: 10,
+           XS: -100,
+           KS: -75,
+           bj: .4
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10184-L10187` → after: `L10184-L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187) · [Before (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187)

```diff
-           lw: 5,
-           mX: -80,
-           MX: 15,
-           hw: .5
+           ej: 5,
+           XS: -80,
+           KS: 15,
+           bj: .5
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10191-L10194` → after: `L10191-L10194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194) · [Before (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194)

```diff
-           lw: 4,
-           mX: -60,
-           MX: 40,
-           hw: .5
+           ej: 4,
+           XS: -60,
+           KS: 40,
+           bj: .5
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10198-L10199` → after: `L10198-L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199) · [Before (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199)

```diff
-             this.seed = WQ, this.Ij = XQ, this.Hw = void 0, this.Hw = wQ.map((wQ => {
-               const TQ = new qQ.b("ore", wQ.lw, !1, !0, `${WQ}${wQ.blockName}`, 20, XQ, null, !0);
+             this.seed = rM, this.HL = iM, this.Gj = void 0, this.Gj = OM.map((OM => {
+               const jM = new SM.c("ore", OM.ej, !1, !0, `${rM}${OM.blockName}`, 20, iM, null, !0);
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10201` → after: `L10201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10201) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10201)

```diff
-                 ez: (0, gQ.B)(wQ.blockName, QQ),
+                 jP: (0, zM.D)(OM.blockName, MM),
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10203-L10206` → after: `L10203-L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206) · [Before (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206)

```diff
-                 lw: wQ.lw,
-                 mX: wQ.mX,
-                 MX: wQ.MX,
-                 hw: wQ.hw,
+                 ej: OM.ej,
+                 XS: OM.XS,
+                 KS: OM.KS,
+                 bj: OM.bj,
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10213-L10216` → after: `L10213-L10216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216) · [Before (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216)

```diff
-               qQ = new rQ.e(`${QQ}${WQ}${this.seed}oreExists`);
-             for (const TQ of this.Hw) {
-               const zQ = TQ.pointGenerator.getPointsAroundPoint(QQ + this.Ij / 2, WQ + this.Ij / 2),
-                 sQ = QQ + this.Ij + TQ.radius,
+               SM = new mM.h(`${MM}${rM}${this.seed}oreExists`);
+             for (const jM of this.Gj) {
+               const aM = jM.pointGenerator.getPointsAroundPoint(MM + this.HL / 2, rM + this.HL / 2),
+                 PM = MM + this.HL + jM.radius,
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10218` → after: `L10218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10218) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10218)

```diff
-                 PQ = WQ + this.Ij + TQ.radius,
+                 QM = rM + this.HL + jM.radius,
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10222-L10223` → after: `L10222-L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223) · [Before (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223)

```diff
-                 const zQ = new rQ.e(`${JQ[0]}${JQ[1]}${this.seed}ore`),
-                   IQ = Math.floor(zQ.next() * (TQ.MX + 1 - TQ.mX)) + TQ.mX,
+                 const aM = new mM.h(`${LM[0]}${LM[1]}${this.seed}ore`),
+                   HM = Math.floor(aM.next() * (jM.KS + 1 - jM.XS)) + jM.XS,
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10225` → after: `L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10225) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10225)

```diff
-                   BQ = Math.min(QQ + this.Ij - 1, JQ[0] + TQ.radius),
+                   JM = Math.min(MM + this.HL - 1, LM[0] + jM.radius),
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10227` → after: `L10227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10227) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10227)

```diff
-                   VQ = Math.min(WQ + this.Ij - 1, JQ[1] + TQ.radius);
+                   yM = Math.min(rM + this.HL - 1, LM[1] + jM.radius);
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10230)

```diff
-                     (0, wQ.A)(JQ, QQ, WQ) > TQ.radius || (qQ.next() >= TQ.hw || XQ.push(QQ, IQ, WQ, TQ.ez))
+                     (0, OM.y)(LM, MM, rM) > jM.radius || (SM.next() >= jM.bj || iM.push(MM, HM, rM, jM.jP))
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10237)

```diff
-             const FQ = XQ + this.Ij,
+             const nM = iM + this.HL,
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10244)

```diff
-               if (PQ < zQ.get(JQ, rQ, TQ.e.GroundHeight) - qQ) {
+               if (QM < aM.get(LM, mM, jM.f.GroundHeight) - SM) {
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10251` → after: `L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10251) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10251)

```diff
-         var HW = XQ(40046);
+         var wr = iM(40883);
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10261-L10262` → after: `L10261-L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262) · [Before (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262)

```diff
-             gw: XQ,
-             Bw: wQ,
+             Pj: iM,
+             mj: OM,
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10272` → after: `L10272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10272) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10272)

```diff
-           return XQ.sw && wQ.push({
+           return iM.Sj && OM.push({
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10274-L10275` → after: `L10274-L10275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275) · [Before (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275)

```diff
-             ez: QQ[WQ].id
-           }), XQ.Fw && wQ.push({
+             jP: MM[rM].id
+           }), iM.jj && OM.push({
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10277` → after: `L10277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10277) · [Before (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10277)

```diff
-             ez: QQ[`${WQ}|meta|rot2|side`].id
+             jP: MM[`${rM}|meta|rot2|side`].id
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10280` → after: `L10280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10280) · [Before (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10280)

```diff
-             ez: QQ[`${WQ}|meta|rot4|side`].id
+             jP: MM[`${rM}|meta|rot4|side`].id
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10283` → after: `L10283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10283) · [Before (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10283)

```diff
-             ez: QQ[`${WQ}|meta|rot1|side`].id
+             jP: MM[`${rM}|meta|rot1|side`].id
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10286-L10287` → after: `L10286-L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287) · [Before (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287)

```diff
-             ez: QQ[`${WQ}|meta|rot3|side`].id
-           }), XQ.Pw && wQ.push({
+             jP: MM[`${rM}|meta|rot3|side`].id
+           }), iM.aj && OM.push({
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10289)

```diff
-             ez: QQ[`${WQ}|meta|rot1|top`].id
+             jP: MM[`${rM}|meta|rot1|top`].id
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10298-L10300` → after: `L10298-L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300) · [Before (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300)

```diff
-                 sw: !0,
-                 Fw: !0,
-                 Pw: !0
+                 Sj: !0,
+                 jj: !0,
+                 aj: !0
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10303-L10306` → after: `L10303-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306) · [Before (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306)

```diff
-               Jw: .8,
-               rw: 0,
-               gw: .12,
-               Bw: .25,
+               nj: .8,
+               Qj: 0,
+               Pj: .12,
+               mj: .25,
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10312-L10314` → after: `L10312-L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314) · [Before (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314)

```diff
-                 sw: !0,
-                 Fw: !0,
-                 Pw: !1
+                 Sj: !0,
+                 jj: !0,
+                 aj: !1
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10317-L10319` → after: `L10317-L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319) · [Before (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319)

```diff
-               Jw: .7,
-               rw: 2,
-               gw: .58
+               nj: .7,
+               Qj: 2,
+               Pj: .58
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10322` → after: `L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10322) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10322)

```diff
-             const XQ = WQ.Iw;
+             const iM = rM.zj;
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10326-L10328` → after: `L10326-L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328) · [Before (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328)

```diff
-                 sw: WQ.sw,
-                 Fw: WQ.Fw,
-                 Pw: WQ.Pw
+                 Sj: rM.Sj,
+                 jj: rM.jj,
+                 aj: rM.aj
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10331-L10336` → after: `L10331-L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336) · [Before (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336)

```diff
-               Jw: WQ.Jw,
-               rw: WQ.rw,
-               gw: WQ.gw,
-               Bw: null === XQ || void 0 === XQ ? void 0 : XQ.Bw,
-               shallowClusterY: null === XQ || void 0 === XQ ? void 0 : XQ.yw,
-               deepClusterY: null === XQ || void 0 === XQ ? void 0 : XQ.Vw
+               nj: rM.nj,
+               Qj: rM.Qj,
+               Pj: rM.Pj,
+               mj: null === iM || void 0 === iM ? void 0 : iM.mj,
+               shallowClusterY: null === iM || void 0 === iM ? void 0 : iM.Hj,
+               deepClusterY: null === iM || void 0 === iM ? void 0 : iM.hj
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10355` → after: `L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10355) · [Before (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10355)

```diff
-             const wQ = this.heightmapVals.getOrGenerate(QQ, WQ, TQ.e.GroundHeight) - this.surfaceMargin,
+             const OM = this.heightmapVals.getOrGenerate(MM, rM, jM.f.GroundHeight) - this.surfaceMargin,
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10362` → after: `L10362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10362) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10362)

```diff
-               QQ - TQ.floorY + 1 < qQ || zQ.push(QQ === TQ.ceilingY ? TQ : {
+               MM - jM.floorY + 1 < SM || aM.push(MM === jM.ceilingY ? jM : {
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10372` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10372) · [Before (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10372)

```diff
-             this.heightmapVals = QQ, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new wQ.m(new uW(WQ)), this.decoratableCavesCache = new wQ.m(new LW(WQ, QQ, XQ, qQ))
+             this.heightmapVals = MM, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new OM.l(new Zr(rM)), this.decoratableCavesCache = new OM.l(new or(rM, MM, iM, SM))
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10378` → after: `L10378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10378) · [Before (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10378)

```diff
-             return this.heightmapVals.getOrGenerate(QQ, WQ, TQ.e.GroundHeight)
+             return this.heightmapVals.getOrGenerate(MM, rM, jM.f.GroundHeight)
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10397` → after: `L10397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10397) · [Before (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10397)

```diff
-             fW(QQ + FQ.offset[0], WQ + FQ.offset[1], XQ + FQ.offset[2], TQ) && (FQ.offset === aW ? zQ = FQ : sQ.push(FQ))
+             Yr(MM + nM.offset[0], rM + nM.offset[1], iM + nM.offset[2], jM) && (nM.offset === tr ? aM = nM : PM.push(nM))
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10399` → after: `L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10399) · [Before (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10399)

```diff
-           return null !== zQ ? zQ : 0 === sQ.length ? null : sQ[Math.floor(qQ * sQ.length)]
+           return null !== aM ? aM : 0 === PM.length ? null : PM[Math.floor(SM * PM.length)]
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10404` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10404) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10404)

```diff
-             this.Ij = WQ, this.seed = XQ, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.HL = rM, this.seed = iM, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10410` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10410) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10410)

```diff
-               if (!Number.isInteger(qQ.clusterBoxSize) || qQ.clusterBoxSize < 2 || qQ.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${qQ.seedPrefix}" has invalid clusterBoxSize (${qQ.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(SM.clusterBoxSize) || SM.clusterBoxSize < 2 || SM.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${SM.seedPrefix}" has invalid clusterBoxSize (${SM.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10412` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10412) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10412)

```diff
-               QQ > zQ && (zQ = QQ), sQ += Math.max(qQ.gw, null !== (FQ = qQ.Bw) && void 0 !== FQ ? FQ : qQ.gw)
+               MM > aM && (aM = MM), PM += Math.max(SM.Pj, null !== (nM = SM.mj) && void 0 !== nM ? nM : SM.Pj)
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10414-L10415` → after: `L10414-L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10414-L10415) · [Before (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10414-L10415)

```diff
-             if (sQ > 1) throw new Error(`Cave decoration cluster chances sum to ${sQ} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-             this.pointsGen = new qQ.b("caveDeco", 10, !1, !0, XQ, 4, WQ, null, !0), this.pointsGen.assertReachableFromChunkCentre(WQ, zQ), this.configs = TQ, this.maxHalfBox = zQ
+             if (PM > 1) throw new Error(`Cave decoration cluster chances sum to ${PM} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             this.pointsGen = new SM.c("caveDeco", 10, !1, !0, iM, 4, rM, null, !0), this.pointsGen.assertReachableFromChunkCentre(rM, aM), this.configs = jM, this.maxHalfBox = aM
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10419` → after: `L10419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10419) · [Before (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10419)

```diff
-               TQ = this.Ij,
+               jM = this.HL,
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10436` → after: `L10436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10436) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10436)

```diff
-             for (const sQ of TQ) sQ.y >= XQ && sQ.y < zQ && QQ.set(sQ.x - WQ, sQ.y - XQ, sQ.z - wQ, sQ.ez)
+             for (const PM of jM) PM.y >= iM && PM.y < aM && MM.set(PM.x - rM, PM.y - iM, PM.z - OM, PM.jP)
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10441` → after: `L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10441) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10441)

```diff
-             const PQ = new rQ.e(`${this.seed}|${QQ}|${WQ}|cluster`),
+             const QM = new mM.h(`${this.seed}|${MM}|${rM}|cluster`),
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10455` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10455) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10455)

```diff
-             if (this.scatterClusterCells(QQ, BQ, WQ, VQ, zQ, PQ, DQ), !(DQ.length < VQ.rw))
+             if (this.scatterClusterCells(MM, JM, rM, yM, aM, QM, lM), !(lM.length < yM.Qj))
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10461` → after: `L10461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10461) · [Before (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10461)

```diff
-               Jw: FQ,
+               nj: nM,
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10481` → after: `L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10481) · [Before (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10481)

```diff
-                     ez: DQ.ez
+                     jP: lM.jP
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10495` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10495) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10495)

```diff
-             this.prefabGenerator = wQ, this.seed = void 0, this.Ij = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = OM, this.seed = void 0, this.HL = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10498` → after: `L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10498) · [Before (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10498)

```diff
-             if (XQ + this.Ij <= zQ.u.bedrockLevel) return {
+             if (iM + this.HL <= aM.v.bedrockLevel) return {
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10501)

```diff
-             const pQ = new JQ.e,
+             const EM = new LM.c,
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10505-L10507` → after: `L10505-L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507) · [Before (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507)

```diff
-             if (UQ >= XQ && GQ < XQ + this.Ij)
-               for (let wQ = WQ; wQ < WQ + this.Ij; wQ++)
-                 for (let FQ = qQ; FQ < qQ + this.Ij; FQ++) {
+             if (GM >= iM && UM < iM + this.HL)
+               for (let OM = rM; OM < rM + this.HL; OM++)
+                 for (let nM = SM; nM < SM + this.HL; nM++) {
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10510-L10512` → after: `L10510-L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512) · [Before (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512)

```diff
-                     JQ = sQ.get(wQ, FQ, TQ.e.GroundHeight);
-                   if (JQ >= XQ && JQ < XQ + this.Ij) {
-                     const PQ = sQ.get(wQ, FQ, TQ.e.IsLake) === zQ.i ? gQ.getDryBedBlock(wQ, JQ, FQ) : gQ.getTopsoilBlock(wQ, JQ, FQ);
+                     LM = PM.get(OM, nM, jM.f.GroundHeight);
+                   if (LM >= iM && LM < iM + this.HL) {
+                     const QM = PM.get(OM, nM, jM.f.IsLake) === aM.i ? zM.getDryBedBlock(OM, LM, nM) : zM.getTopsoilBlock(OM, LM, nM);
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10516-L10518` → after: `L10516-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518) · [Before (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518)

```diff
-             if (UQ + 1 >= XQ && GQ - 4 < XQ + this.Ij)
-               for (let wQ = WQ; wQ < WQ + this.Ij; wQ++)
-                 for (let zQ = qQ; zQ < qQ + this.Ij; zQ++) {
+             if (GM + 1 >= iM && UM - 4 < iM + this.HL)
+               for (let OM = rM; OM < rM + this.HL; OM++)
+                 for (let aM = SM; aM < SM + this.HL; aM++) {
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10521-L10522` → after: `L10521-L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522) · [Before (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522)

```diff
-                     gQ = sQ.get(wQ, zQ, TQ.e.GroundHeight),
-                     JQ = Math.min(gQ, XQ + this.Ij);
+                     zM = PM.get(OM, aM, jM.f.GroundHeight),
+                     LM = Math.min(zM, iM + this.HL);
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10530-L10531` → after: `L10530-L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531) · [Before (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531)

```diff
-               for (let XQ = Math.max(qQ - 4, 0); XQ < Math.min(qQ, this.Ij); XQ++) QQ.set(WQ, XQ, TQ, this.dirtId);
-               qQ >= 0 && qQ < this.Ij && QQ.set(WQ, qQ, TQ, this.grassBlockId)
+               for (let iM = Math.max(SM - 4, 0); iM < Math.min(SM, this.HL); iM++) MM.set(rM, iM, jM, this.dirtId);
+               SM >= 0 && SM < this.HL && MM.set(rM, SM, jM, this.grassBlockId)
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10535-L10536` → after: `L10535-L10536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536) · [Before (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536)

```diff
-               for (let zQ = WQ; zQ < WQ + this.Ij; zQ++)
-                 for (let FQ = qQ; FQ < qQ + this.Ij; FQ++) {
+               for (let aM = rM; aM < rM + this.HL; aM++)
+                 for (let nM = SM; nM < SM + this.HL; nM++) {
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10538-L10539` → after: `L10538-L10539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539) · [Before (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539)

```diff
-                     gQ = sQ.get(zQ, FQ, TQ.e.GroundHeight),
-                     JQ = Math.min(gQ - 4, XQ + this.Ij),
+                     zM = PM.get(aM, nM, jM.f.GroundHeight),
+                     LM = Math.min(zM - 4, iM + this.HL),
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10544` → after: `L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10544) · [Before (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10544)

```diff
-                     QQ.set(zQ - WQ, wQ - XQ, FQ - qQ, 0 !== TQ ? TQ : PQ)
+                     MM.set(aM - rM, OM - iM, nM - SM, 0 !== jM ? jM : QM)
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10548-L10550` → after: `L10548-L10550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550) · [Before (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550)

```diff
-             if (UQ - 4 >= XQ && this.oreGenerator.addOresToChunk(QQ, WQ, XQ, qQ, 4, sQ, jQ), UQ >= XQ && (FQ.b.addCavesToChunk(QQ, WQ, XQ, qQ, sQ, IQ), tW.addCaveDecorationsToChunk(QQ, WQ, XQ, qQ, this.Ij, VQ)), zQ.u.bedrockLevel >= XQ && zQ.u.bedrockLevel < XQ + this.Ij)
-               for (let wQ = WQ; wQ < WQ + this.Ij; wQ++)
-                 for (let TQ = qQ; TQ < qQ + this.Ij; TQ++) QQ.set(wQ - WQ, zQ.u.bedrockLevel - XQ, TQ - qQ, this.bedrockId);
+             if (GM - 4 >= iM && this.oreGenerator.addOresToChunk(MM, rM, iM, SM, 4, PM, hM), GM >= iM && (nM.c.addCavesToChunk(MM, rM, iM, SM, PM, HM), Ar.addCaveDecorationsToChunk(MM, rM, iM, SM, this.HL, yM)), aM.v.bedrockLevel >= iM && aM.v.bedrockLevel < iM + this.HL)
+               for (let OM = rM; OM < rM + this.HL; OM++)
+                 for (let jM = SM; jM < SM + this.HL; jM++) MM.set(OM - rM, aM.v.bedrockLevel - iM, jM - SM, this.bedrockId);
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10553-L10555` → after: `L10553-L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555) · [Before (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555)

```diff
-               for (let TQ = WQ; TQ < WQ + this.Ij; TQ++)
-                 for (let zQ = XQ; zQ < XQ + this.Ij; zQ++)
-                   for (let sQ = qQ; sQ < qQ + this.Ij; sQ++) {
+               for (let jM = rM; jM < rM + this.HL; jM++)
+                 for (let aM = iM; aM < iM + this.HL; aM++)
+                   for (let PM = SM; PM < SM + this.HL; PM++) {
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10566-L10567` → after: `L10566-L10567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567) · [Before (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567)

```diff
-               for (let XQ = Math.max(TQ, 0); XQ < Math.min(zQ, this.Ij); XQ++) QQ.set(WQ, XQ, qQ, this.waterId);
-               zQ >= 0 && zQ < this.Ij && QQ.set(WQ, zQ, qQ, dQ[wQ + 4])
+               for (let iM = Math.max(jM, 0); iM < Math.min(aM, this.HL); iM++) MM.set(rM, iM, SM, this.waterId);
+               aM >= 0 && aM < this.HL && MM.set(rM, aM, SM, bM[OM + 4])
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10570-L10575` → after: `L10570-L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575) · [Before (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575)

```diff
-             if (this.addSurfaceBlocks(QQ, XQ, DQ.lilyPads), bQ && UQ >= XQ && GQ < XQ + this.Ij)
-               for (let FQ = WQ; FQ < WQ + this.Ij; FQ++)
-                 for (let PQ = qQ; PQ < qQ + this.Ij; PQ++) {
-                   const gQ = sQ.get(FQ, PQ, TQ.e.WaterHeight),
-                     JQ = sQ.get(FQ, PQ, TQ.e.GroundHeight);
-                   if (gQ !== zQ.q && JQ >= XQ && JQ < XQ + this.Ij)
+             if (this.addSurfaceBlocks(MM, iM, lM.lilyPads), CM && GM >= iM && UM < iM + this.HL)
+               for (let nM = rM; nM < rM + this.HL; nM++)
+                 for (let QM = SM; QM < SM + this.HL; QM++) {
+                   const zM = PM.get(nM, QM, jM.f.WaterHeight),
+                     LM = PM.get(nM, QM, jM.f.GroundHeight);
+                   if (zM !== aM.s && LM >= iM && LM < iM + this.HL)
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10579` → after: `L10579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10579) · [Before (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10579)

```diff
-                       if ((0, wQ.J)(TQ, FQ, PQ) < 100) HQ === TQ[0] && lQ === TQ[1] || (HQ = TQ[0], lQ = TQ[1], hQ = new rQ.e(`${this.seed}${HQ}${lQ}`).next() < .3 ? this.chalkId : this.clayId), QQ.set(FQ - WQ, JQ - XQ, PQ - qQ, hQ), JQ - 1 >= XQ && QQ.set(FQ - WQ, JQ - 1 - XQ, P … [truncated]
+                       if ((0, OM.G)(jM, nM, QM) < 100) wM === jM[0] && gM === jM[1] || (wM = jM[0], gM = jM[1], uM = new mM.h(`${this.seed}${wM}${gM}`).next() < .3 ? this.chalkId : this.clayId), MM.set(nM - rM, LM - iM, QM - SM, uM), LM - 1 >= iM && MM.set(nM - rM, LM - 1 - iM, Q … [truncated]
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10588-L10591` → after: `L10588-L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591) · [Before (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591)

```diff
-               for (let TQ = WQ; TQ < WQ + this.Ij; TQ++)
-                 for (let zQ = XQ; zQ < XQ + this.Ij; zQ++)
-                   for (let sQ = qQ; sQ < qQ + this.Ij; sQ++) {
-                     const FQ = aQ.b.getBlockFromFixedPointPrefab(TQ, zQ, sQ, wQ);
+               for (let jM = rM; jM < rM + this.HL; jM++)
+                 for (let aM = iM; aM < iM + this.HL; aM++)
+                   for (let PM = SM; PM < SM + this.HL; PM++) {
+                     const nM = tM.e.getBlockFromFixedPointPrefab(jM, aM, PM, OM);
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10612` → after: `L10612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10612) · [Before (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10612)

```diff
-               qQ >= 0 && qQ < this.Ij && QQ.set(XQ[wQ], qQ, XQ[wQ + 2], XQ[wQ + 3])
+               SM >= 0 && SM < this.HL && MM.set(iM[OM], SM, iM[OM + 2], iM[OM + 3])
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10626` → after: `L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10626) · [Before (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10626)

```diff
-             this.Ij = QQ, this.biomeSelector = WQ, this.seed = XQ, this.random = new rQ.e(""), this.lilyPadId = void 0, this.lilyPadId = wQ["Lily Pad"].id
+             this.HL = MM, this.biomeSelector = rM, this.seed = iM, this.random = new mM.h(""), this.lilyPadId = void 0, this.lilyPadId = OM["Lily Pad"].id
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10636-L10637` → after: `L10636-L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637) · [Before (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637)

```diff
-             for (let yQ = QQ; yQ < QQ + this.Ij; yQ++)
-               for (let VQ = WQ; VQ < WQ + this.Ij; VQ++) {
+             for (let dM = MM; dM < MM + this.HL; dM++)
+               for (let yM = rM; yM < rM + this.HL; yM++) {
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10639-L10640` → after: `L10639-L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640) · [Before (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640)

```diff
-                   pQ = XQ.getOrGenerate(yQ, VQ, TQ.e.GroundHeight),
-                   GQ = XQ.getOrGenerate(yQ, VQ, TQ.e.WaterHeight);
+                   EM = iM.getOrGenerate(dM, yM, jM.f.GroundHeight),
+                   UM = iM.getOrGenerate(dM, yM, jM.f.WaterHeight);
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10644-L10645` → after: `L10644-L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645) · [Before (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645)

```diff
-                 if (GQ !== zQ.q) {
-                   BQ = !0, pQ < GQ && PQ.push(UQ, bQ, pQ + 1, GQ, DQ.topwaterBlockType), DQ.hasScatteredLakes && 1 === XQ.getOrGenerate(yQ, VQ, TQ.e.IsLake) && (this.random.reseed(`${yQ}|${VQ}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(yQ, VQ, XQ) && JQ … [truncated]
+                 if (UM !== aM.s) {
+                   JM = !0, EM < UM && QM.push(GM, CM, EM + 1, UM, lM.topwaterBlockType), lM.hasScatteredLakes && 1 === iM.getOrGenerate(dM, yM, jM.f.IsLake) && (this.random.reseed(`${dM}|${yM}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(dM, yM, iM) && LM … [truncated]
```

#### 887. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10649-L10650` → after: `L10649-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650) · [Before (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650)

```diff
-                 if (DQ.hasScatteredLakes && this.isBesideLake(yQ, VQ, XQ) && (this.random.reseed(`${yQ}|${VQ}|${this.seed}oasisShore`), this.random.next() < .85 && (gQ.push(UQ, pQ, bQ), vQ = this.biomeSelector.baseBiome.floraGenerator)), !FQ.b.isInCave(yQ, pQ, VQ, wQ) && !aQ.b.is … [truncated]
-                   for (let XQ = pQ + 1; XQ <= pQ + DQ.maxFloraHeight; XQ += this.Ij) rQ.startY = XQ, vQ.addBiomeFloraToColumn(rQ, QQ, WQ, yQ, XQ, VQ, pQ)
+                 if (lM.hasScatteredLakes && this.isBesideLake(dM, yM, iM) && (this.random.reseed(`${dM}|${yM}|${this.seed}oasisShore`), this.random.next() < .85 && (zM.push(GM, EM, CM), eM = this.biomeSelector.baseBiome.floraGenerator)), !nM.c.isInCave(dM, EM, yM, OM) && !tM.e.is … [truncated]
+                   for (let iM = EM + 1; iM <= EM + lM.maxFloraHeight; iM += this.HL) mM.startY = iM, eM.addBiomeFloraToColumn(mM, MM, rM, dM, iM, yM, EM)
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10663)

```diff
-             return XQ.getOrGenerate(QQ + 1, WQ, TQ.e.WaterHeight) !== zQ.q && XQ.getOrGenerate(QQ - 1, WQ, TQ.e.WaterHeight) !== zQ.q && XQ.getOrGenerate(QQ, WQ + 1, TQ.e.WaterHeight) !== zQ.q && XQ.getOrGenerate(QQ, WQ - 1, TQ.e.WaterHeight) !== zQ.q
+             return iM.getOrGenerate(MM + 1, rM, jM.f.WaterHeight) !== aM.s && iM.getOrGenerate(MM - 1, rM, jM.f.WaterHeight) !== aM.s && iM.getOrGenerate(MM, rM + 1, jM.f.WaterHeight) !== aM.s && iM.getOrGenerate(MM, rM - 1, jM.f.WaterHeight) !== aM.s
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10669` → after: `L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10669) · [Before (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10669)

```diff
-             return XQ.getOrGenerate(QQ, WQ, TQ.e.WaterHeight) !== zQ.q && 1 === XQ.getOrGenerate(QQ, WQ, TQ.e.IsLake)
+             return iM.getOrGenerate(MM, rM, jM.f.WaterHeight) !== aM.s && 1 === iM.getOrGenerate(MM, rM, jM.f.IsLake)
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10672` → after: `L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10672) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10672)

```diff
-         var YW = XQ(39946);
+         var Xr = iM(40790);
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10677) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-             if (this.Ij = QQ, this.hashChunkContents = JQ, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.HL = MM, this.hashChunkContents = LM, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 892. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10679` → after: `L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10679) · [Before (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10679)

```diff
-               NW = new BW.d("chunk columns", QQ, 4e4)
+               Ir = new Jr.c("chunk columns", MM, 4e4)
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10681-L10682` → after: `L10681-L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682) · [Before (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682)

```diff
-             this.chunkColumnInfos = NW.partition(), this.caveGenerator = new FQ.b(qQ, QQ, WQ, null !== (rQ = null === PQ || void 0 === PQ ? void 0 : PQ.Xw.qw) && void 0 !== rQ ? rQ : "Lava");
-             const pQ = new dW(WQ, qQ, QQ, null !== (IQ = null === PQ || void 0 === PQ ? void 0 : PQ.Hw) && void 0 !== IQ ? IQ : [...vW, ...null !== (jQ = null === gQ || void 0 === gQ ? void 0 : gQ.Cw) && void 0 !== jQ ? jQ : []]),
+             this.chunkColumnInfos = Ir.partition(), this.caveGenerator = new nM.c(SM, MM, rM, null !== (mM = null === QM || void 0 === QM ? void 0 : QM.cS.rj) && void 0 !== mM ? mM : "Lava");
+             const EM = new br(rM, SM, MM, null !== (HM = null === QM || void 0 === QM ? void 0 : QM.Gj) && void 0 !== HM ? HM : [...er, ...null !== (hM = null === zM || void 0 === zM ? void 0 : zM.Rj) && void 0 !== hM ? hM : []]),
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10684` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10684) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10684)

```diff
-                 Ij: QQ,
+                 HL: MM,
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10692-L10695` → after: `L10692-L10695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695) · [Before (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695)

```diff
-               UQ = null !== (BQ = null === PQ || void 0 === PQ ? void 0 : PQ.Dw) && void 0 !== BQ ? BQ : null,
-               bQ = null !== (yQ = null === gQ || void 0 === gQ ? void 0 : gQ.buildBiomes) && void 0 !== yQ ? yQ : null,
-               vQ = null !== UQ ? (0, HW.e)(UQ, GQ) : null !== bQ ? this.buildTerrainBiomes(bQ, GQ) : (0, HW.i)(GQ);
-             this.biomeSelector = new HW.c(this, pQ, qQ, QQ, WQ, vQ), this.treeGenerator = new IW(this, this.biomeSelector, QQ, qQ, WQ), this.fixedPointPrefabTracker = new aQ.b(sQ, QQ), this.prefabGenerator = new qW({
+               GM = null !== (JM = null === QM || void 0 === QM ? void 0 : QM.Jj) && void 0 !== JM ? JM : null,
+               CM = null !== (dM = null === zM || void 0 === zM ? void 0 : zM.buildBiomes) && void 0 !== dM ? dM : null,
+               eM = null !== GM ? (0, wr.c)(GM, UM) : null !== CM ? this.buildTerrainBiomes(CM, UM) : (0, wr.g)(UM);
+             this.biomeSelector = new wr.b(this, EM, SM, MM, rM, eM), this.treeGenerator = new Hr(this, this.biomeSelector, MM, SM, rM), this.fixedPointPrefabTracker = new tM.e(PM, MM), this.prefabGenerator = new Sr({
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10697` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10697) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10697)

```diff
-               Ij: QQ,
+               HL: MM,
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10701` → after: `L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10701) · [Before (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10701)

```diff
-                 [TQ.k.SURFACE]: {
+                 [jM.o.SURFACE]: {
```

#### 898. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10703` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10703) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10703)

```diff
-                     [TQ.g.MEDIUM]: {
+                     [jM.l.MEDIUM]: {
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10706` → after: `L10706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10706) · [Before (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10706)

```diff
-                     [TQ.g.HIGH]: {
+                     [jM.l.HIGH]: {
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10709` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10709) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10709)

```diff
-                     [TQ.g.VERY_HIGH]: {
+                     [jM.l.VERY_HIGH]: {
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10714) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-                 [TQ.k.UNDERGROUND]: {
+                 [jM.o.UNDERGROUND]: {
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10716` → after: `L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10716) · [Before (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10716)

```diff
-                     [TQ.g.MEDIUM]: {
+                     [jM.l.MEDIUM]: {
```

#### 903. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10719-L10720` → after: `L10719-L10720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720) · [Before (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720)

```diff
-                     [TQ.g.HIGH]: null,
-                     [TQ.g.VERY_HIGH]: null
+                     [jM.l.HIGH]: null,
+                     [jM.l.VERY_HIGH]: null
```

#### 904. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10725` → after: `L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10725) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10725)

```diff
-             }), this.noWaterHeightmapGenerator = new YW.f((0, YW.i)(qQ)), this.heightmapPerturb = new wQ.i([{
+             }), this.noWaterHeightmapGenerator = new Xr.e((0, Xr.g)(SM)), this.heightmapPerturb = new OM.i([{
```

#### 905. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10734` → after: `L10734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10734) · [Before (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10734)

```diff
-             }], `${qQ}HeightmapPerturb`);
+             }], `${SM}HeightmapPerturb`);
```

#### 906. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10740` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10740) · [Before (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10740)

```diff
-             this.waterBodyGenerator = new GW(this.biomeSelector, this.noWaterHeightmapGenerator, qQ, QQ, dQ, this.needOutsideWaterDist, zQ, null === (VQ = null === PQ || void 0 === PQ ? void 0 : PQ.Ww) || void 0 === VQ || VQ), this.caveDecorationGenerator = new tW(WQ, QQ, qQ, nul … [truncated]
+             this.waterBodyGenerator = new Ur(this.biomeSelector, this.noWaterHeightmapGenerator, SM, MM, bM, this.needOutsideWaterDist, aM, null === (yM = null === QM || void 0 === QM ? void 0 : QM.VS) || void 0 === yM || yM), this.caveDecorationGenerator = new Ar(rM, MM, SM, nul … [truncated]
```

#### 907. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10759` → after: `L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10759) · [Before (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10759)

```diff
-             const XQ = this.Ij,
+             const iM = this.HL,
```

#### 908. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10777)

```diff
-               if ((null !== (qQ = wQ.get(TQ.key)) && void 0 !== qQ ? qQ : TQ) !== TQ) throw new Error(`A world-gen terrain built two biomes keyed "${TQ.key}"`);
+               if ((null !== (SM = OM.get(jM.key)) && void 0 !== SM ? SM : jM) !== jM) throw new Error(`A world-gen terrain built two biomes keyed "${jM.key}"`);
```

#### 909. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10787-L10788` → after: `L10787-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788) · [Before (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788)

```diff
-               const QQ = `${Math.floor(FQ.x/this.Ij)}|${Math.floor(FQ.z/this.Ij)}`,
-                 WQ = null !== (zQ = TQ.get(QQ)) && void 0 !== zQ ? zQ : [];
+               const MM = `${Math.floor(nM.x/this.HL)}|${Math.floor(nM.z/this.HL)}`,
+                 rM = null !== (aM = jM.get(MM)) && void 0 !== aM ? aM : [];
```

#### 910. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10793-L10794` → after: `L10793-L10794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794) · [Before (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794)

```diff
-               const QQ = Math.floor(FQ[0].x / this.Ij) * this.Ij,
-                 WQ = Math.floor(FQ[0].z / this.Ij) * this.Ij,
+               const MM = Math.floor(nM[0].x / this.HL) * this.HL,
+                 rM = Math.floor(nM[0].z / this.HL) * this.HL,
```

#### 911. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10815)

```diff
-                   NX: PQ.prefab.name
+                   xS: QM.prefab.name
```

#### 912. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10848) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-               gQ = wQ.getOrGenerate(QQ + Math.floor(this.Ij / 2), WQ + Math.floor(this.Ij / 2))[0].biome.oreGenerator.getOreBlocksForChunk(QQ, WQ),
+               zM = OM.getOrGenerate(MM + Math.floor(this.HL / 2), rM + Math.floor(this.HL / 2))[0].biome.oreGenerator.getOreBlocksForChunk(MM, rM),
```

#### 913. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10866` → after: `L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10866) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10866)

```diff
-             return wQ.o.create(this.Ij, [QQ, WQ], this.biomeSelector)
+             return OM.p.create(this.HL, [MM, rM], this.biomeSelector)
```

#### 914. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10870` → after: `L10870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10870) · [Before (L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10870)

```diff
-             return wQ.n.create(this.Ij, [QQ, WQ], TQ.e.NumFields, zQ)
+             return OM.m.create(this.HL, [MM, rM], jM.f.NumFields, aM)
```

#### 915. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10874)

```diff
-       39954: (QQ, WQ, XQ) => {
+       40793: (MM, rM, iM) => {
```

#### 916. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10876-L10877` → after: `L10876-L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10876-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10876-L10877) · [Before (L10876-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10876-L10877)

```diff
-           d: () => fQ,
-           f: () => HQ,
+           e: () => YM,
+           h: () => wM,
```

#### 917. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10881-L10884` → after: `L10882-L10885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10882-L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10882-L10885) · [Before (L10881-L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10881-L10884)

```diff
-           n: () => CQ,
-           o: () => iQ,
-           s: () => GQ,
-           v: () => pQ,
+           p: () => RM,
+           r: () => UM,
+           t: () => EM,
+           u: () => CM,
```

#### 918. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10886` → after: `L10887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10887) · [Before (L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10886)

```diff
-           A: () => BQ,
+           z: () => GM,
```

#### 919. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10888-L10889` → after: `L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10889) · [Before (L10888-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10888-L10889)

```diff
-           H: () => DQ,
-           J: () => VQ
+           G: () => yM
```

#### 920. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10891` → after: `L10891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10891) · [Before (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10891)

```diff
-         var wQ = XQ(3079),
+         var OM = iM(3160),
```

#### 921. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10904` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10904) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10904)

```diff
-             const WQ = "function" == typeof QQ ? QQ : function(QQ) {
+             const rM = "function" == typeof MM ? MM : function(MM) {
```

#### 922. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11113` → after: `L11113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11113) · [Before (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11113)

```diff
-         var jQ = XQ(39962);
+         var hM = iM(40798);
```

#### 923. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11142` → after: `L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11142) · [Before (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11142)

```diff
-             Az: DQ(QQ, TQ, zQ),
+             RQ: lM(MM, jM, aM),
```

#### 924. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11173` → after: `L11173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11173) · [Before (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11173)

```diff
-             for (let XQ = 0; XQ < QQ.length; XQ++) this._simplexes.push(new IQ(`${WQ}${XQ}`))
+             for (let iM = 0; iM < MM.length; iM++) this._simplexes.push(new HM(`${rM}${iM}`))
```

#### 925. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11198` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11198) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11198)

```diff
-             for (let qQ = 0; qQ < QQ.length; qQ++) this._simplexes.push(new IQ(`${XQ}${qQ}`));
+             for (let SM = 0; SM < MM.length; SM++) this._simplexes.push(new HM(`${iM}${SM}`));
```

#### 926. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11206` → after: `L11206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11206) · [Before (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11206)

```diff
-               if (XQ - this.remainingAmplitudes[wQ] > this.threshold.high || XQ + this.remainingAmplitudes[wQ] < this.threshold.low) return jQ.d;
+               if (iM - this.remainingAmplitudes[OM] > this.threshold.high || iM + this.remainingAmplitudes[OM] < this.threshold.low) return hM.e;
```

#### 927. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11334` → after: `L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11334) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11334)

```diff
-             if (void 0 === wQ) throw new Error(`Number not found for x=${QQ}, z=${WQ}, thirdIndex=${XQ}`);
+             if (void 0 === OM) throw new Error(`Number not found for x=${MM}, z=${rM}, thirdIndex=${iM}`);
```

#### 928. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11383)

```diff
-             if (void 0 === qQ) throw new Error(`Number not found for x=${QQ}, z=${WQ}, thirdIndex=${XQ}, fourthIndex=${wQ}`);
+             if (void 0 === SM) throw new Error(`Number not found for x=${MM}, z=${rM}, thirdIndex=${iM}, fourthIndex=${OM}`);
```

#### 929. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413` → after: `L11413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11413) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11413)

```diff
-       39962: (QQ, WQ, XQ) => {
+       40798: (MM, rM, iM) => {
```

#### 930. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11415-L11416` → after: `L11415-L11416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11415-L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11415-L11416) · [Before (L11415-L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11415-L11416)

```diff
-           d: () => FQ,
-           g: () => zQ,
+           e: () => nM,
+           f: () => aM,
```

#### 931. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11420-L11421` → after: `L11420-L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11420-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11420-L11421) · [Before (L11420-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11420-L11421)

```diff
-           q: () => qQ,
-           u: () => wQ
+           s: () => SM,
+           v: () => OM
```

#### 932. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11434) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       39970: (QQ, WQ, XQ) => {
+       40804: (MM, rM, iM) => {
```

#### 933. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11436-L11437` → after: `L11436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11436) · [Before (L11436-L11437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11436-L11437)

```diff
-           c: () => qQ,
-           e: () => wQ,
+           b: () => SM,
```

#### 934. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11439-L11441` → after: `L11438-L11441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11438-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11438-L11441) · [Before (L11439-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11439-L11441)

```diff
-           g: () => sQ,
-           k: () => zQ,
-           o: () => TQ
+           j: () => nM,
+           l: () => PM,
+           o: () => aM,
+           r: () => jM
```

#### 935. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11460` → after: `L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11460) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11460)

```diff
-       4545: (QQ, WQ, XQ) => {
+       4586: (MM, rM, iM) => {
```

#### 936. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11493` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11493) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11493)

```diff
-             if (this.distribution = void 0, QQ.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(QQ)}`);
+             if (this.distribution = void 0, MM.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(MM)}`);
```

#### 937. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11498` → after: `L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11498) · [Before (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11498)

```diff
-               if (WQ.has(wQ)) throw new Error(`Values must be unique: ${JSON.stringify(QQ)}`);
+               if (rM.has(OM)) throw new Error(`Values must be unique: ${JSON.stringify(MM)}`);
```

#### 938. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11501` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11501) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11501)

```diff
-               if (TQ <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(QQ)}`);
+               if (jM <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(MM)}`);
```

#### 939. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11526) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, QQ > WQ) throw new Error(`Min must be less than or equal to Max, but Min=${QQ} and Max=${WQ}`);
+             if (this.offset = void 0, this.multiplier = void 0, MM > rM) throw new Error(`Min must be less than or equal to Max, but Min=${MM} and Max=${rM}`);
```

#### 940. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11536)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new zQ(QQ, WQ, XQ), !Number.isInteger(QQ) || !Number.isInteger(WQ)) throw new Error(`Min and Max must be integers, but Min=${QQ} and Max=${WQ}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new aM(MM, rM, iM), !Number.isInteger(MM) || !Number.isInteger(rM)) throw new Error(`Min and Max must be integers, but Min=${MM} and Max=${rM}`)
```

#### 941. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11552` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11552)

```diff
-       663: (QQ, WQ, XQ) => {
+       625: (MM, rM, iM) => {
```

#### 942. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11554-L11559` → after: `L11554-L11559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11554-L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11554-L11559) · [Before (L11554-L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11554-L11559)

```diff
-           B: () => jQ,
-           G: () => FQ,
-           M: () => JQ,
-           b: () => sQ,
-           f: () => zQ,
-           g: () => qQ,
+           A: () => HM,
+           D: () => hM,
+           J: () => nM,
+           R: () => LM,
+           e: () => PM,
+           l: () => aM,
```

#### 943. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11561-L11562` → after: `L11561-L11562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11561-L11562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11561-L11562) · [Before (L11561-L11562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11561-L11562)

```diff
-           s: () => rQ,
-           v: () => PQ,
+           u: () => jM,
+           x: () => mM,
```

#### 944. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11565` → after: `L11565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11565) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11565)

```diff
-         var wQ = XQ(670);
+         var OM = iM(632);
```

#### 945. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11603` → after: `L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11603) · [Before (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11603)

```diff
-       670: (QQ, WQ, XQ) => {
+       632: (MM, rM, iM) => {
```

#### 946. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11607` → after: `L11607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11607) · [Before (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11607)

```diff
-         const wQ = 872
+         const OM = 873
```

#### 947. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11609` → after: `L11609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11609) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11609)

```diff
-       258: QQ => {
+       203: MM => {
```

#### 948. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11614` → after: `L11614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11614) · [Before (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11614)

```diff
-         WQ.keys = () => [], WQ.resolve = WQ, WQ.id = 258, QQ.exports = WQ
+         rM.keys = () => [], rM.resolve = rM, rM.id = 203, MM.exports = rM
```

#### 949. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11637-L11642` → after: `L11637-L11642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11637-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11637-L11642) · [Before (L11637-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11637-L11642)

```diff
-   }, XQ.f = {}, XQ.e = QQ => Promise.all(Object.keys(XQ.f).reduce(((WQ, wQ) => (XQ.f[wQ](QQ, WQ), WQ)), [])), XQ.u = QQ => "static/js/8104he." + (72 === QQ ? "worldgenTables" : QQ) + "." + {
-     72: "b7a89c26",
-     75: "0a03bed6",
-     76: "3d38bc02",
-     77: "f8218cd7",
-     78: "da060d50"
+   }, iM.f = {}, iM.e = MM => Promise.all(Object.keys(iM.f).reduce(((rM, OM) => (iM.f[OM](MM, rM), rM)), [])), iM.u = MM => "static/js/fo1voe." + (81 === MM ? "worldgenTables" : MM) + "." + {
+     81: "5e0cac4d",
+     84: "bf318c88",
+     85: "a453181b",
+     86: "017adafc",
+     87: "8ca63803"
```

#### 950. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11649` → after: `L11649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11649) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11649)

```diff
-   }, XQ.j = 73, XQ.p = "/", (() => {
+   }, iM.j = 82, iM.p = "/", (() => {
```

#### 951. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11682` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11682) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11682)

```diff
-         73: 0
+         82: 0
```

#### 952. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11717` → after: `L11717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11717) · [Before (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11717)

```diff
-       XQ = WQ < 0 ? this.length + WQ : WQ;
+       iM = rM < 0 ? this.length + rM : rM;
```

#### 953. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11732-L11734` → after: `L11732-L11734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11732-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11732-L11734) · [Before (L11732-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11732-L11734)

```diff
-     vy: () => kQ,
-     Hy: () => fQ,
-     Mg: () => SQ,
+     Yd: () => fM,
+     Nd: () => YM,
+     PQ: () => NM,
```

#### 954. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11737-L11747` → after: `L11737-L11747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11737-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11737-L11747) · [Before (L11737-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11737-L11747)

```diff
-     QJ: () => tQ,
-     WJ: () => oQ,
-     XJ: () => eQ,
-     wJ: () => nQ,
-     qJ: () => xQ,
-     TJ: () => YQ,
-     zJ: () => NQ,
-     sJ: () => ZQ,
-     JJ: () => OQ,
-     IJ: () => KQ,
-     jJ: () => mQ
+     HQ: () => AM,
+     XQ: () => xM,
+     SL: () => vM,
+     RL: () => FM,
+     pL: () => BM,
+     WL: () => XM,
+     sL: () => IM,
+     DL: () => KM,
+     fL: () => qM,
+     NL: () => TM,
+     AL: () => VM
```

#### 955. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11754` → after: `L11754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11754) · [Before (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11754)

```diff
-   var PQ = XQ(3079),
+   var QM = iM(3160),
```

#### 956. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11789` → after: `L11789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11789) · [Before (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11789)

```diff
-     return null === BQ ? "not failed" : `${BQ}: ${(QQ=yQ)instanceof Error?`${QQ.name}: ${QQ.message}`:String(QQ)}`;
+     return null === JM ? "not failed" : `${JM}: ${(MM=dM)instanceof Error?`${MM.name}: ${MM.message}`:String(MM)}`;
```

#### 957. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11794` → after: `L11794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11794) · [Before (L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11794)

```diff
-     if (!HQ()) throw new Error(`Bloxd wasm is not ready (${aQ()}): check isBloxdWasmReady() first`);
+     if (!wM()) throw new Error(`Bloxd wasm is not ready (${tM()}): check isBloxdWasmReady() first`);
```

#### 958. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11832` → after: `L11832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11832) · [Before (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11832)

```diff
-       JJ: qQ
+       fL: SM
```

#### 959. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11853` → after: `L11853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11853) · [Before (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11853)

```diff
-     jQ = "failed", BQ = WQ, yQ = QQ, console.error(`Bloxd wasm failed (${WQ}):`, QQ);
+     hM = "failed", JM = rM, dM = MM, console.error(`Bloxd wasm failed (${rM}):`, MM);
```

#### 960. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11872-L11873` → after: `L11872-L11873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11872-L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11872-L11873) · [Before (L11872-L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11872-L11873)

```diff
-       reserveUpFront: WQ => QQ().wJ(WQ),
-       reserveAhead: WQ => QQ().XJ(WQ),
+       reserveUpFront: rM => MM().RL(rM),
+       reserveAhead: rM => MM().SL(rM),
```

#### 961. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11875` → after: `L11875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11875) · [Before (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11875)

```diff
-         QQ().qJ(WQ)
+         MM().pL(rM)
```

#### 962. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11877` → after: `L11877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11877) · [Before (L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11877)

```diff
-       lowWater: () => uQ[QQ().WJ()] ?? "none",
+       lowWater: () => ZM[MM().XQ()] ?? "none",
```

#### 963. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11900-L11902` → after: `L11900-L11902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11900-L11902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11900-L11902) · [Before (L11900-L11902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11900-L11902)

```diff
-       }(QQ().TJ()),
-       takeBallast: () => QQ().zJ(),
-       takePressure: () => QQ().sJ()
+       }(MM().WL()),
+       takeBallast: () => MM().sL(),
+       takePressure: () => MM().DL()
```

#### 964. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11912` → after: `L11912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11912) · [Before (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11912)

```diff
-       VW.ZXiz(QQ, 0)
+       yr.xf8I(MM, 0)
```

#### 965. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11915` → after: `L11915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11915) · [Before (L11915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11915)

```diff
-       const WQ = PW(QQ, VW.BCaw, VW.HmIn),
+       const rM = Qr(MM, yr.fUOL, yr.TnPD),
```

#### 966. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11917` → after: `L11917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11917) · [Before (L11917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11917)

```diff
-       VW.MH47(this.__wbg_ptr, WQ, XQ)
+       yr.twcE(this.__wbg_ptr, rM, iM)
```

#### 967. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11920` → after: `L11920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11920) · [Before (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11920)

```diff
-       return VW.NNoI(this.__wbg_ptr) >>> 0
+       return yr.Dp3L(this.__wbg_ptr) >>> 0
```

#### 968. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11923` → after: `L11923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11923) · [Before (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11923)

```diff
-       const QQ = VW.zE22();
+       const MM = yr.Werc();
```

#### 969. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11927` → after: `L11927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11927) · [Before (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11927)

```diff
-       return VW.UbgZ(this.__wbg_ptr) >>> 0
+       return yr.lUgX(this.__wbg_ptr) >>> 0
```

#### 970. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11930` → after: `L11930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11930) · [Before (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11930)

```diff
-       return VW.UamX(this.__wbg_ptr) >>> 0
+       return yr.ZQVh(this.__wbg_ptr) >>> 0
```

#### 971. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11933` → after: `L11933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11933) · [Before (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11933)

```diff
-       return VW.EORL(this.__wbg_ptr) >>> 0
+       return yr.sade(this.__wbg_ptr) >>> 0
```

#### 972. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11944` → after: `L11944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11944) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11944)

```diff
-       VW.xYXL(QQ, 0)
+       yr.kfqu(MM, 0)
```

#### 973. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11947` → after: `L11947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11947) · [Before (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11947)

```diff
-       return VW.pA4G(this.__wbg_ptr, QQ) >>> 0
+       return yr.Uwrf(this.__wbg_ptr, MM) >>> 0
```

#### 974. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11950` → after: `L11950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11950) · [Before (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11950)

```diff
-       return VW.ekng(this.__wbg_ptr, QQ) >>> 0
+       return yr.kyK4(this.__wbg_ptr, MM) >>> 0
```

#### 975. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11953` → after: `L11953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11953) · [Before (L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11953)

```diff
-       const WQ = VW.r8m4(void 0 === (XQ = QQ) || null === XQ ? Number.MAX_SAFE_INTEGER : QQ >>> 0);
+       const rM = yr.bb80(void 0 === (iM = MM) || null === iM ? Number.MAX_SAFE_INTEGER : MM >>> 0);
```

#### 976. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11958` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11958) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11958)

```diff
-       return VW.cwJg(this.__wbg_ptr) >>> 0
+       return yr.HqeW(this.__wbg_ptr) >>> 0
```

#### 977. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11961` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11961) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11961)

```diff
-       return VW.E3Bb(this.__wbg_ptr) >>> 0
+       return yr.NMl8(this.__wbg_ptr) >>> 0
```

#### 978. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11964` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11964) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11964)

```diff
-       return VW.jrQr(this.__wbg_ptr, QQ) >>> 0
+       return yr.aS1Z(this.__wbg_ptr, MM) >>> 0
```

#### 979. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11969` → after: `L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11969) · [Before (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11969)

```diff
-     const XQ = PW(QQ, VW.BCaw, VW.HmIn),
+     const iM = Qr(MM, yr.fUOL, yr.TnPD),
```

#### 980. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11971` → after: `L11971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11971) · [Before (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11971)

```diff
-       qQ = VW.jMjC(XQ, wQ, WQ);
+       SM = yr.smxk(iM, OM, rM);
```

#### 981. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11976` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11976) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11976)

```diff
-     VW.nsef()
+     yr.ihFU()
```

#### 982. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11980` → after: `L11980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11980) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11980)

```diff
-     return VW.jq7k() >>> 0
+     return yr.phES() >>> 0
```

#### 983. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11984` → after: `L11984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11984) · [Before (L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11984)

```diff
-     return 0 !== VW.xDZK(QQ)
+     return 0 !== yr.raMV(MM)
```

#### 984. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11988` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11988) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11988)

```diff
-     return 0 !== VW.J4fb(QQ)
+     return 0 !== yr.ZsRo(MM)
```

#### 985. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11992` → after: `L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11992) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11992)

```diff
-     VW.y84F(QQ)
+     yr.fGp8(MM)
```

#### 986. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11996` → after: `L11996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11996) · [Before (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11996)

```diff
-     return VW.TzK7() >>> 0
+     return yr.OySK() >>> 0
```

#### 987. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12000` → after: `L12000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12000) · [Before (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12000)

```diff
-     return VW.SBTM() >>> 0
+     return yr.GO7m() >>> 0
```

#### 988. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12004` → after: `L12004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12004) · [Before (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12004)

```diff
-     return 0 !== VW.Y2ox()
+     return 0 !== yr.F9DQ()
```

#### 989. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12008` → after: `L12008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12008) · [Before (L12008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12008)

```diff
-     return VW.tMKz() >>> 0
+     return yr.mqQL() >>> 0
```

#### 990. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12014` → after: `L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12014) · [Before (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12014)

```diff
-       const XQ = VW.IiWA();
+       const iM = yr.gb0Z();
```

#### 991. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12017` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12017) · [Before (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12017)

```diff
-       VW.JsYP(QQ, WQ, 1)
+       yr.tdab(MM, rM, 1)
```

#### 992. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12022` → after: `L12022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12022) · [Before (L12022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12022)

```diff
-     VW.hBvg(XW(QQ))
+     yr.DyMY(ir(MM))
```

#### 993. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12028` → after: `L12028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12028) · [Before (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12028)

```diff
-       tMhp: {
+       ubqt: {
```

#### 994. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12030` → after: `L12030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12030) · [Before (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12030)

```diff
-         Wv8g: function(QQ, WQ) {
+         JqhQ: function(MM, rM) {
```

#### 995. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12033` → after: `L12033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12033) · [Before (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12033)

```diff
-         u72D: function(QQ, WQ) {
+         jSOa: function(MM, rM) {
```

#### 996. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12036` → after: `L12036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12036) · [Before (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12036)

```diff
-         BdOt: function(QQ) {
+         h6KF: function(MM) {
```

#### 997. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12039` → after: `L12039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12039) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12039)

```diff
-         eECO: function(QQ, WQ) {
+         MQbf: function(MM, rM) {
```

#### 998. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12042` → after: `L12042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12042) · [Before (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12042)

```diff
-         AeMJ: function(QQ) {
+         b3Rm: function(MM) {
```

#### 999. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12052` → after: `L12052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12052) · [Before (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12052)

```diff
-     } : new FinalizationRegistry((QQ => VW.ZXiz(QQ, 1))),
+     } : new FinalizationRegistry((MM => yr.xf8I(MM, 1))),
```

#### 1000. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12056` → after: `L12056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12056) · [Before (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12056)

```diff
-     } : new FinalizationRegistry((QQ => VW.xYXL(QQ, 1)));
+     } : new FinalizationRegistry((MM => yr.kfqu(MM, 1)));
```

#### 1001. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12133` → after: `L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12133) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12133)

```diff
-     return yW = QQ, VW = QQ.exports, BW = WQ, qW = null, VW.Y4CZ(), VW
+     return dr = MM, yr = MM.exports, Jr = rM, Sr = null, yr.yfGf(), yr
```

#### 1002. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12157` → after: `L12157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12157) · [Before (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12157)

```diff
-         if (!QQ.ok) throw new Error(`failed to fetch Wasm: ${QQ.status} ${QQ.statusText} fetching '${QQ.url}'`);
+         if (!MM.ok) throw new Error(`failed to fetch Wasm: ${MM.status} ${MM.statusText} fetching '${MM.url}'`);
```

#### 1003. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12187-L12188` → after: `L12187-L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12187-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12187-L12188) · [Before (L12187-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12187-L12188)

```diff
-       if (!HQ()) throw new Error(`Bloxd wasm is not ready (${aQ()}): check isBloxdWasmReady() first`);
-       if (GQ !== QQ) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${WQ}`)
+       if (!wM()) throw new Error(`Bloxd wasm is not ready (${tM()}): check isBloxdWasmReady() first`);
+       if (UM !== MM) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${rM}`)
```

#### 1004. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12191` → after: `L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12191) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12191)

```diff
-   var vW = XQ(663);
+   var er = iM(625);
```

#### 1005. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12198` → after: `L12198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12198) · [Before (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12198)

```diff
-       } = XQ(40060), IQ = function(QQ, WQ, XQ) {
+       } = iM(40899), HM = function(MM, rM, iM) {
```

#### 1006. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12200` → after: `L12200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12200) · [Before (L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12200)

```diff
-         for (const sQ of QQ.Cw) cW(sQ, XQ);
+         for (const PM of MM.Rj) pr(PM, iM);
```

#### 1007. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12203` → after: `L12203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12203) · [Before (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12203)

```diff
-           Cw: QQ.Cw,
+           Rj: MM.Rj,
```

#### 1008. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12209` → after: `L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12209) · [Before (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12209)

```diff
-           throw new Error(`Custom world-gen terrain "${wQ.name}" is not in this generator's catalogue (${QQ.length>0?QQ.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${OM.name}" is not in this generator's catalogue (${MM.length>0?MM.join(", "):"empty"})`)
```

#### 1009. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12214` → after: `L12214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12214) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12214)

```diff
-               if (null !== QQ.Ew) throw new Error(`Custom world-gen terrain "${QQ.name}" takes no options`);
+               if (null !== MM.uj) throw new Error(`Custom world-gen terrain "${MM.name}" takes no options`);
```

#### 1010. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12218-L12219` → after: `L12218-L12219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12218-L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12218-L12219) · [Before (L12218-L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12218-L12219)

```diff
-             if (null !== QQ.Ew) try {
-               XQ = JSON.parse(QQ.Ew)
+             if (null !== MM.uj) try {
+               iM = JSON.parse(MM.uj)
```

#### 1011. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12221` → after: `L12221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12221) · [Before (L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12221)

```diff
-               throw new Error(`Custom world-gen terrain "${QQ.name}" has invalid optionsJson: ${String(wQ)}`, {
+               throw new Error(`Custom world-gen terrain "${MM.name}" has invalid optionsJson: ${String(OM)}`, {
```

#### 1012. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12228` → after: `L12228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12228) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12228)

```diff
-           Cw: QQ.Cw,
+           Rj: MM.Rj,
```

#### 1013. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12231` → after: `L12231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12231) · [Before (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12231)

```diff
-       }(null !== (gQ = null === sQ || void 0 === sQ ? void 0 : sQ.iw) && void 0 !== gQ ? gQ : null, FQ, WQ);
+       }(null !== (zM = null === PM || void 0 === PM ? void 0 : PM.wj) && void 0 !== zM ? zM : null, nM, rM);
```

#### 1014. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12233` → after: `L12233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12233) · [Before (L12233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12233)

```diff
-       const jQ = null !== (JQ = null === sQ || void 0 === sQ ? void 0 : sQ.layers) && void 0 !== JQ ? JQ : [];
+       const hM = null !== (LM = null === PM || void 0 === PM ? void 0 : PM.layers) && void 0 !== LM ? LM : [];
```

#### 1015. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12236` → after: `L12236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12236) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12236)

```diff
-         const XQ = [...QQ].sort(((QQ, WQ) => QQ.mX - WQ.mX));
+         const iM = [...MM].sort(((MM, rM) => MM.XS - rM.XS));
```

#### 1016. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12238` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12238) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12238)

```diff
-           if (XQ[wQ].mX < XQ[wQ - 1].MX) throw new Error(`Custom world-gen layers overlap: [${XQ[wQ-1].mX}, ${XQ[wQ-1].MX}) and [${XQ[wQ].mX}, ${XQ[wQ].MX})`)
+           if (iM[OM].XS < iM[OM - 1].KS) throw new Error(`Custom world-gen layers overlap: [${iM[OM-1].XS}, ${iM[OM-1].KS}) and [${iM[OM].XS}, ${iM[OM].KS})`)
```

#### 1017. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12250` → after: `L12250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12250) · [Before (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12250)

```diff
-         if (XQ >= qQ.mX && XQ < qQ.MX) return TQ.getChunk(QQ, WQ, XQ - qQ.Qw, wQ);
+         if (iM >= SM.XS && iM < SM.KS) return jM.getChunk(MM, rM, iM - SM.qS, OM);
```

#### 1018. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12268-L12269` → after: `L12268-L12269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12268-L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12268-L12269) · [Before (L12268-L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12268-L12269)

```diff
-     if (QQ.mX >= QQ.MX) throw new Error(`Custom world-gen layer has minY (${QQ.mX}) >= maxY (${QQ.MX})`);
-     if (QQ.mX % vW.v !== 0 || QQ.MX % vW.v !== 0 || QQ.Qw % vW.v !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${vW.v}); got minY=${QQ.mX}, maxY=${QQ.MX}, groundY=${QQ.Qw}`);
+     if (MM.XS >= MM.KS) throw new Error(`Custom world-gen layer has minY (${MM.XS}) >= maxY (${MM.KS})`);
+     if (MM.XS % er.y !== 0 || MM.KS % er.y !== 0 || MM.qS % er.y !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${er.y}); got minY=${MM.XS}, maxY=${MM.KS}, groundY=${MM.qS}`);
```

#### 1019. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12271-L12274` → after: `L12271-L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12271-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12271-L12274) · [Before (L12271-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12271-L12274)

```diff
-         if (void 0 === (0, vW.B)(QQ.qw, WQ)) throw new Error(`Custom world-gen caves lavaPitBlock "${QQ.qw}" not found in blockMetadata`);
-         if (QQ.Tw)
-           for (const XQ of QQ.Tw) aW(XQ, WQ)
-       }(QQ.Xw, WQ), 0 === QQ.Dw.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, er.D)(MM.rj, rM)) throw new Error(`Custom world-gen caves lavaPitBlock "${MM.rj}" not found in blockMetadata`);
+         if (MM.ij)
+           for (const iM of MM.ij) tr(iM, rM)
+       }(MM.cS, rM), 0 === MM.Jj.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1020. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12276` → after: `L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12276) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12276)

```diff
-     for (const wQ of QQ.Dw) iW(wQ, WQ), XQ += wQ.frequency;
+     for (const OM of MM.Jj) Rr(OM, rM), iM += OM.frequency;
```

#### 1021. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12278` → after: `L12278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12278) · [Before (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12278)

```diff
-     for (const wQ of QQ.Hw) cW(wQ, WQ)
+     for (const OM of MM.Gj) pr(OM, rM)
```

#### 1022. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12284-L12286` → after: `L12284-L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12284-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12284-L12286) · [Before (L12284-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12284-L12286)

```diff
-       sw: wQ,
-       Fw: qQ,
-       Pw: TQ
+       Sj: OM,
+       jj: SM,
+       aj: jM
```

#### 1023. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12288-L12289` → after: `L12288-L12289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12288-L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12288-L12289) · [Before (L12288-L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12288-L12289)

```diff
-     if (void 0 === (0, vW.B)(XQ, WQ)) throw new Error(`Custom world-gen cave decoration blockName "${XQ}" not found in blockMetadata`);
-     if (!wQ && !qQ && !TQ) throw new Error(`Custom world-gen cave decoration "${XQ}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, er.D)(iM, rM)) throw new Error(`Custom world-gen cave decoration blockName "${iM}" not found in blockMetadata`);
+     if (!OM && !SM && !jM) throw new Error(`Custom world-gen cave decoration "${iM}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1024. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12292-L12293` → after: `L12292-L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12292-L12293) · [Before (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12292-L12293)

```diff
-     if (TQ && lW(XQ, "meta|rot1|top", WQ), hW(QQ.gw, XQ, "gw"), hW(QQ.Jw, XQ, "Jw"), !Number.isInteger(QQ.rw) || QQ.rw < 0) throw new Error(`Custom world-gen cave decoration "${XQ}" minPlacements must be a non-negative integer, got ${QQ.rw}`);
-     if (!(0, vW.G)(QQ.Iw) && (hW(QQ.Iw.Bw, XQ, "depthRamp.deepClusterChance"), QQ.Iw.yw <= QQ.Iw.Vw)) throw new Error(`Custom world-gen cave decoration "${XQ}" deepY must be strictly smaller than shallowY, but ${QQ.Iw.yw} <= ${QQ.Iw.Vw} `)
+     if (jM && gr(iM, "meta|rot1|top", rM), ur(MM.Pj, iM, "Pj"), ur(MM.nj, iM, "nj"), !Number.isInteger(MM.Qj) || MM.Qj < 0) throw new Error(`Custom world-gen cave decoration "${iM}" minPlacements must be a non-negative integer, got ${MM.Qj}`);
+     if (!(0, er.J)(MM.zj) && (ur(MM.zj.mj, iM, "depthRamp.deepClusterChance"), MM.zj.Hj <= MM.zj.hj)) throw new Error(`Custom world-gen cave decoration "${iM}" deepY must be strictly smaller than shallowY, but ${MM.zj.Hj} <= ${MM.zj.hj} `)
```

#### 1025. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12297-L12298` → after: `L12297-L12298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12297-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12297-L12298) · [Before (L12297-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12297-L12298)

```diff
-     const wQ = `${QQ}|${WQ}`;
-     if (void 0 === (0, vW.B)(wQ, XQ)) throw new Error(`Custom world-gen cave decoration "${QQ}" is missing directional variant "${wQ}" required for wall/ceiling anchoring`)
+     const OM = `${MM}|${rM}`;
+     if (void 0 === (0, er.D)(OM, iM)) throw new Error(`Custom world-gen cave decoration "${MM}" is missing directional variant "${OM}" required for wall/ceiling anchoring`)
```

#### 1026. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12302` → after: `L12302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12302) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12302)

```diff
-     if (QQ < 0 || QQ > 1) throw new Error(`Custom world-gen cave decoration "${WQ}" ${XQ} must be in [0, 1], got ${QQ}`)
+     if (MM < 0 || MM > 1) throw new Error(`Custom world-gen cave decoration "${rM}" ${iM} must be in [0, 1], got ${MM}`)
```

#### 1027. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12306-L12312` → after: `L12306-L12312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12306-L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12306-L12312) · [Before (L12306-L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12306-L12312)

```diff
-     if (QQ.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${QQ.frequency}`);
-     if (void 0 === (0, vW.B)(QQ.Gw, WQ)) throw new Error(`Custom world-gen biome topsoilBlock "${QQ.Gw}" not found in blockMetadata`);
-     if (void 0 === (0, vW.B)(QQ.Uw, WQ)) throw new Error(`Custom world-gen biome lowsoilBlock "${QQ.Uw}" not found in blockMetadata`);
-     if (0 === QQ.bw.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const XQ of QQ.bw) {
-       if (XQ.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${XQ.frequency}`);
-       if (void 0 === (0, vW.B)(XQ.blockName, WQ)) throw new Error(`Custom world-gen biome stoneType blockName "${XQ.blockName}" not found in blockMetadata`)
+     if (MM.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${MM.frequency}`);
+     if (void 0 === (0, er.D)(MM.yj, rM)) throw new Error(`Custom world-gen biome topsoilBlock "${MM.yj}" not found in blockMetadata`);
+     if (void 0 === (0, er.D)(MM.lj, rM)) throw new Error(`Custom world-gen biome lowsoilBlock "${MM.lj}" not found in blockMetadata`);
+     if (0 === MM.Ej.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const iM of MM.Ej) {
+       if (iM.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${iM.frequency}`);
+       if (void 0 === (0, er.D)(iM.blockName, rM)) throw new Error(`Custom world-gen biome stoneType blockName "${iM.blockName}" not found in blockMetadata`)
```

#### 1028. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12317-L12321` → after: `L12317-L12321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12317-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12317-L12321) · [Before (L12317-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12317-L12321)

```diff
-     if (void 0 === (0, vW.B)(QQ.blockName, WQ)) throw new Error(`Custom world-gen ore blockName "${QQ.blockName}" not found in blockMetadata`);
-     if (QQ.radius < 0) throw new Error(`Custom world-gen ore "${QQ.blockName}" radius must be >= 0, got ${QQ.radius}`);
-     if (QQ.lw <= 0) throw new Error(`Custom world-gen ore "${QQ.blockName}" minDistBetweenDeposits must be > 0, got ${QQ.lw}`);
-     if (QQ.mX > QQ.MX) throw new Error(`Custom world-gen ore "${QQ.blockName}" minY (${QQ.mX}) must be <= maxY (${QQ.MX})`);
-     if (QQ.hw < 0 || QQ.hw > 1) throw new Error(`Custom world-gen ore "${QQ.blockName}" spawnChance must be in [0, 1], got ${QQ.hw}`)
+     if (void 0 === (0, er.D)(MM.blockName, rM)) throw new Error(`Custom world-gen ore blockName "${MM.blockName}" not found in blockMetadata`);
+     if (MM.radius < 0) throw new Error(`Custom world-gen ore "${MM.blockName}" radius must be >= 0, got ${MM.radius}`);
+     if (MM.ej <= 0) throw new Error(`Custom world-gen ore "${MM.blockName}" minDistBetweenDeposits must be > 0, got ${MM.ej}`);
+     if (MM.XS > MM.KS) throw new Error(`Custom world-gen ore "${MM.blockName}" minY (${MM.XS}) must be <= maxY (${MM.KS})`);
+     if (MM.bj < 0 || MM.bj > 1) throw new Error(`Custom world-gen ore "${MM.blockName}" spawnChance must be in [0, 1], got ${MM.bj}`)
```

#### 1029. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12327-L12330` → after: `L12327-L12330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12327-L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12327-L12330) · [Before (L12327-L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12327-L12330)

```diff
-       lw: 10,
-       mX: -98,
-       MX: -78,
-       hw: .4
+       ej: 10,
+       XS: -98,
+       KS: -78,
+       bj: .4
```

#### 1030. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12335-L12338` → after: `L12335-L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12335-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12335-L12338) · [Before (L12335-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12335-L12338)

```diff
-       lw: 6,
-       mX: -40,
-       MX: 20,
-       hw: .6
+       ej: 6,
+       XS: -40,
+       KS: 20,
+       bj: .6
```

#### 1031. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12342-L12345` → after: `L12342-L12345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12342-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12342-L12345) · [Before (L12342-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12342-L12345)

```diff
-       lw: 10,
-       mX: -75,
-       MX: -55,
-       hw: .4
+       ej: 10,
+       XS: -75,
+       KS: -55,
+       bj: .4
```

#### 1032. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12349` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12349) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12349)

```diff
-       Ew: null
+       uj: null
```

#### 1033. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12352` → after: `L12352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12352) · [Before (L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12352)

```diff
-     [AW]: () => XQ(39944).b
+     [Wr]: () => iM(40787).d
```

#### 1034. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12376` → after: `L12376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12376) · [Before (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12376)

```diff
-       if (!xW.includes(WQ)) throw new Error(`Invalid port offset "${QQ}". Must be one of: ${xW.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!Br.includes(rM)) throw new Error(`Invalid port offset "${MM}". Must be one of: ${Br.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1035. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12454` → after: `L12454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12454) · [Before (L12454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12454)

```diff
-     const WQ = oW() ? OW : KW;
+     const rM = xr() ? qr : Tr;
```

#### 1036. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12470` → after: `L12470-L12473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12470-L12473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12470-L12473) · [Before (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12470)

```diff
-     msnDevPublicKey: null
+     sessionReplayEnabled: !1,
+     msnDevPublicKey: null,
+     seasonPassStartedInDev: !0,
+     localXpBoost: void 0
```

#### 1037. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12855` → after: `L12858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12858) · [Before (L12855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12855)

```diff
-     if (wX.has(QQ)) throw new Error(`Duplicate leave code: ${QQ}`);
+     if (Oi.has(MM)) throw new Error(`Duplicate leave code: ${MM}`);
```

#### 1038. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12878` → after: `L12881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12881) · [Before (L12878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12878)

```diff
-     return QQ === WQ ? TQ + wQ * wQ <= QQ * QQ : QQ > WQ ? Math.abs(wQ) <= WQ && TQ + wQ * wQ <= QQ * QQ : TQ <= QQ * QQ && TQ + wQ * wQ <= WQ * WQ
+     return MM === rM ? jM + OM * OM <= MM * MM : MM > rM ? Math.abs(OM) <= rM && jM + OM * OM <= MM * MM : jM <= MM * MM && jM + OM * OM <= rM * rM
```

#### 1039. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12896` → after: `L12899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12899) · [Before (L12896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12896)

```diff
-     const QQ = Promise.all([XQ.e(75), XQ.e(78), XQ.e(77), XQ.e(76), XQ.e(72)]).then((() => XQ(40048))).then((QQ => {
+     const MM = Promise.all([iM.e(84), iM.e(87), iM.e(85), iM.e(86), iM.e(81)]).then((() => iM(40889))).then((MM => {
```

#### 1040. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12939` → after: `L12942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12942) · [Before (L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12939)

```diff
-               reason: `its memory stats trapped (${String(WQ)})`
+               reason: `its memory stats trapped (${String(rM)})`
```

#### 1041. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12945` → after: `L12948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12948) · [Before (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12945)

```diff
-               const XQ = FQ.ly();
+               const iM = nM.Ad();
```

#### 1042. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12948` → after: `L12951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12951) · [Before (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12948)

```diff
-                 return String.fromCharCode(...new Uint8Array(iQ().buffer, QQ.hy(), 32))
+                 return String.fromCharCode(...new Uint8Array(RM().buffer, MM.xd(), 32))
```

#### 1043. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12961` → after: `L12964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12964) · [Before (L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12961)

```diff
-               zQ = yQ.Ij, JQ = new Uint16Array(zQ * zQ * zQ),
+               aM = dM.HL, LM = new Uint16Array(aM * aM * aM),
```

#### 1044. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12970` → after: `L12973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12973) · [Before (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12970)

```diff
-                           reason: `the memory ceiling was not set (${String(wQ)})`
+                           reason: `the memory ceiling was not set (${String(OM)})`
```

#### 1045. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12974` → after: `L12977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12977) · [Before (L12974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12974)

```diff
-                         FQ = new(bW().vy)
+                         nM = new(Cr().Yd)
```

#### 1046. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12978` → after: `L12981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12981) · [Before (L12978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12978)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(wQ)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(OM)})`
```

#### 1047. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12988` → after: `L12991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12991) · [Before (L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12988)

```diff
-                           reason: `${PX} (${String(WQ)})`
+                           reason: `${Qi} (${String(rM)})`
```

#### 1048. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12993` → after: `L12996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12996) · [Before (L12993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12993)

```diff
-                       reason: `wasm did not start (${lQ()})`
+                       reason: `wasm did not start (${gM()})`
```

#### 1049. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12997` → after: `L13000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13000) · [Before (L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12997)

```diff
-                     reason: `chunk size ${zQ} is not the encoder's 32`
+                     reason: `chunk size ${aM} is not the encoder's 32`
```

#### 1050. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13008` → after: `L13011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13011) · [Before (L13008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13008)

```diff
-                 PQ = new dW(zQ, sQ.blockMetadata, sQ.itemMetadata, QQ.xX, !1, QQ.YX, QQ.ZX, wQ, BQ)
+                 QM = new br(aM, PM.blockMetadata, PM.itemMetadata, MM.YS, !1, MM.NS, MM.vS, OM, JM)
```

#### 1051. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13033` → after: `L13036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13036) · [Before (L13033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13033)

```diff
-                     const XQ = QQ.iy(),
+                     const iM = MM.vd(),
```

#### 1052. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13035` → after: `L13038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13038) · [Before (L13035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13035)

```diff
-                       qQ = WQ.byteLength >= wQ ? WQ : new ArrayBuffer(wQ),
+                       SM = rM.byteLength >= OM ? rM : new ArrayBuffer(OM),
```

#### 1053. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13038` → after: `L13041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13041) · [Before (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13038)

```diff
-                     return zQ.set(new Uint8Array(TQ, QQ.hy(), SW)), zQ.set(new Uint8Array(TQ, QQ.Ay(), XQ), SW), {
+                     return aM.set(new Uint8Array(jM, MM.xd(), Nr)), aM.set(new Uint8Array(jM, MM.Fd(), iM), Nr), {
```
