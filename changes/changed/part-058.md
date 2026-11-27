# Changed — Bundle Modifications Report (Part 058 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `58 / 153` (**410** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 057](part-057.md) · [Part 059 →](part-059.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (774 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 650. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6704` → after: `L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6704) · [Before (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6704)

```diff
-           YB && (fB = !!YB.facetNormals, kB = !!YB.facetPositions, dB = !!YB.facetPartitioning, uB = !0 === YB.useRightHandedSystem ? -1 : 1, mB = YB.ratio || 0, KB = !!YB.depthSort, IB = YB.distanceTo, KB && void 0 === IB && (IB = DB.r.Zero()));
+           ye && (te = !!ye.facetNormals, Ze = !!ye.facetPositions, we = !!ye.facetPartitioning, Pe = !0 === ye.useRightHandedSystem ? -1 : 1, Ae = ye.ratio || 0, De = !!ye.depthSort, Ye = ye.distanceTo, De && void 0 === Ye && (Ye = be.p.Zero()));
```

#### 651. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6733)

```diff
-               BB.ind = 3 * QB, BB.sqDistance = DB.r.DistanceSquared(YB.facetPositions[QB], IB)
+               ee.ind = 3 * Me, ee.sqDistance = be.p.DistanceSquared(ye.facetPositions[Me], Ye)
```

#### 652. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6762` → after: `L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6762) · [Before (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6762)

```diff
-               for (jB = jB || new DB.t(0, 0, 1, 1), yB = yB || new DB.t(0, 0, 1, 1), pB = 0, PB = 0; PB < lB / 2; PB++) oB[pB] = jB.x + (jB.z - jB.x) * oB[pB], oB[pB + 1] = jB.y + (jB.w - jB.y) * oB[pB + 1], oB[pB + lB] = yB.x + (yB.z - yB.x) * oB[pB + lB], oB[pB + lB + 1] = yB.y … [truncated]
+               for (Ue = Ue || new be.s(0, 0, 1, 1), Fe = Fe || new be.s(0, 0, 1, 1), fe = 0, Re = 0; Re < qe / 2; Re++) Ke[fe] = Ue.x + (Ue.z - Ue.x) * Ke[fe], Ke[fe + 1] = Ue.y + (Ue.w - Ue.y) * Ke[fe + 1], Ke[fe + qe] = Fe.x + (Fe.z - Fe.x) * Ke[fe + qe], Ke[fe + qe + 1] = Fe.y … [truncated]
```

#### 653. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6811` → after: `L6811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6811) · [Before (L6811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6811)

```diff
-         OB = [JB.j.filter((function() {
+         ie = [Je.h.filter((function() {
```

#### 654. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6813` → after: `L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6813) · [Before (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6813)

```diff
-         }))], GB = [JB.j.filter((function() {
+         }))], He = [Je.h.filter((function() {
```

#### 655. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6815` → after: `L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6815) · [Before (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6815)

```diff
-         }))], pB = [JB.j.filter((function() {
+         }))], fe = [Je.h.filter((function() {
```

#### 656. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6817` → after: `L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6817) · [Before (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6817)

```diff
-         }))], qB = [JB.j.filter((function() {
+         }))], Te = [Je.h.filter((function() {
```

#### 657. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6819` → after: `L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6819) · [Before (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6819)

```diff
-         }))], (0, YB.h)(BB, null, OB, {
+         }))], (0, ye.i)(ee, null, ie, {
```

#### 658. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6829` → after: `L6829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6829) · [Before (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6829)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, GB, {
+         }, null, pe), (0, ye.i)(ee, null, He, {
```

#### 659. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6839` → after: `L6839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6839) · [Before (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6839)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, pB, {
+         }, null, pe), (0, ye.i)(ee, null, fe, {
```

#### 660. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6849` → after: `L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6849) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6849)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, qB, {
+         }, null, pe), (0, ye.i)(ee, null, Te, {
```

#### 661. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6865` → after: `L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6865) · [Before (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6865)

```diff
-       })(), BB.FRONTSIDE = ((0, YB.j)(BB, ZB), 0), BB.BACKSIDE = 1, BB.DOUBLESIDE = 2, BB.DEFAULTSIDE = 0, BB._UniqueIdGenerator = 0, BB
+       })(), ee.FRONTSIDE = ((0, ye.l)(ee, pe), 0), ee.BACKSIDE = 1, ee.DOUBLESIDE = 2, ee.DEFAULTSIDE = 0, ee._UniqueIdGenerator = 0, ee
```

#### 662. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6868-L6873` → after: `L6868-L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6868-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6868-L6873) · [Before (L6868-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6868-L6873)

```diff
-   41472: (BB, OB, GB) => {
-     var YB = GB(37778),
-       DB = GB(39366),
-       QB = GB(41300),
-       oB = GB(41411),
-       jB = GB(41150);
+   41601: (ee, ie, He) => {
+     var ye = He(37917),
+       be = He(39467),
+       Me = He(41429),
+       Ke = He(41524),
+       Ue = He(41247);
```

#### 663. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6882` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6882) · [Before (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6882)

```diff
-       GB.uBB(Number.POSITIVE_INFINITY), YB.uBB(Number.NEGATIVE_INFINITY);
+       He.Iee(Number.POSITIVE_INFINITY), ye.Iee(Number.NEGATIVE_INFINITY);
```

#### 664. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6896-L6897` → after: `L6896-L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6896-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6896-L6897) · [Before (L6896-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6896-L6897)

```diff
-       const oB = YB.k.Xp[7],
-         jB = YB.k.Xp[8];
+       const Ke = ye.j.rf[7],
+         Ue = ye.j.rf[8];
```

#### 665. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6900` → after: `L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6900) · [Before (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6900)

```diff
-           for (let MB = 0; MB < 2; ++MB) oB.set(yB ? OB.x : BB.x, JB ? OB.y : BB.y, MB ? OB.z : BB.z), YB.r.TransformCoordinatesToRef(oB, GB, jB), DB.minimizeInPlace(jB), QB.maximizeInPlace(jB)
+           for (let oe = 0; oe < 2; ++oe) Ke.set(Fe ? ie.x : ee.x, Je ? ie.y : ee.y, oe ? ie.z : ee.z), ye.p.TransformCoordinatesToRef(Ke, He, Ue), be.minimizeInPlace(Ue), Me.maximizeInPlace(Ue)
```

#### 666. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6904-L6905` → after: `L6904-L6905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6904-L6905) · [Before (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6904-L6905)

```diff
-       const oB = YB.k.Xp[7];
-       for (let jB = 0; jB < 3 * OB; jB += 3) YB.r.TransformCoordinatesFromFloatsToRef(BB[jB], BB[jB + 1], BB[jB + 2], GB, oB), DB.minimizeInPlace(oB), QB.maximizeInPlace(oB)
+       const Ke = ye.j.rf[7];
+       for (let Ue = 0; Ue < 3 * ie; Ue += 3) ye.p.TransformCoordinatesFromFloatsToRef(ee[Ue], ee[Ue + 1], ee[Ue + 2], He, Ke), be.minimizeInPlace(Ke), Me.maximizeInPlace(Ke)
```

#### 667. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6908` → after: `L6908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6908) · [Before (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6908)

```diff
-     pB || (pB = !0, oB.c.prototype.thinInstanceAdd = function(BB) {
+     fe || (fe = !0, Ke.b.prototype.thinInstanceAdd = function(ee) {
```

#### 668. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6910` → after: `L6910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6910) · [Before (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6910)

```diff
-       if (!this.JF().Lp().getCaps().instancedArrays) return DB.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
+       if (!this.Xx().Nf().getCaps().instancedArrays) return be.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
```

#### 669. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6917` → after: `L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6917) · [Before (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6917)

```diff
-     }, oB.c.prototype.thinInstanceAddSelf = function() {
+     }, Ke.b.prototype.thinInstanceAddSelf = function() {
```

#### 670. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6919-L6922` → after: `L6919-L6922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6919-L6922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6919-L6922) · [Before (L6919-L6922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6919-L6922)

```diff
-       return this.thinInstanceAdd(YB.d.IdentityReadOnly, BB)
-     }, oB.c.prototype.thinInstanceRegisterAttribute = function(BB, OB) {
-       BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), this.removeVerticesData(BB), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[BB] = OB, this._userThinInstanceBuffersStorage.sizes[BB] = OB * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, oB.c.prototype.thinInstanceSetMatrixAt = function(BB, OB) {
+       return this.thinInstanceAdd(ye.b.IdentityReadOnly, ee)
+     }, Ke.b.prototype.thinInstanceRegisterAttribute = function(ee, ie) {
+       ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), this.removeVerticesData(ee), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[ee] = ie, this._userThinInstanceBuffersStorage.sizes[ee] = ie * Math.max(32, this._thinInstanceDataSt … [truncated]
+     }, Ke.b.prototype.thinInstanceSetMatrixAt = function(ee, ie) {
```

#### 671. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6926-L6927` → after: `L6926-L6927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6926-L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6926-L6927) · [Before (L6926-L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6926-L6927)

```diff
-       return OB.copyToArray(YB, 16 * BB), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[BB] = OB), GB && (this.HBB("matrix"), this.Ep || this.thinInstanceRefreshBoundingInfo(!1)), !0
-     }, oB.c.prototype.thinInstanceSetAttributeAt = function(BB, OB, GB) {
+       return ie.copyToArray(ye, 16 * ee), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[ee] = ie), He && (this.qie("matrix"), this.eT || this.thinInstanceRefreshBoundingInfo(!1)), !0
+     }, Ke.b.prototype.thinInstanceSetAttributeAt = function(ee, ie, He) {
```

#### 672. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6929-L6930` → after: `L6929-L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6929-L6930) · [Before (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6929-L6930)

```diff
-       return BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[BB] || OB >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(BB, 0), this._userThinInsta … [truncated]
-     }, Object.defineProperty(oB.c.prototype, "rBB", {
+       return ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[ee] || ie >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(ee, 0), this._userThinInsta … [truncated]
+     }, Object.defineProperty(Ke.b.prototype, "Hie", {
```

#### 673. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6940` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6940) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6940)

```diff
-     }), oB.c.prototype._thinInstanceCreateMatrixBuffer = function(BB, OB) {
+     }), Ke.b.prototype._thinInstanceCreateMatrixBuffer = function(ee, ie) {
```

#### 674. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6942` → after: `L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6942) · [Before (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6942)

```diff
-       const YB = new jB.c(this.Lp(), OB, !GB, 16, !1, !0);
+       const ye = new Ue.b(this.Nf(), ie, !He, 16, !1, !0);
```

#### 675. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6945` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6945) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6945)

```diff
-     }, oB.c.prototype.DOB = function(BB, OB) {
+     }, Ke.b.prototype.Bie = function(ee, ie) {
```

#### 676. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6948` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6948) · [Before (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6948)

```diff
-       if (GB = GB || 16, "matrix" === BB) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = OB ? OB.length : 32 * GB, this._thinInstanceDataStorage.matrixData = OB, this._thin … [truncated]
+       if (He = He || 16, "matrix" === ee) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = ie ? ie.length : 32 * He, this._thinInstanceDataStorage.matrixData = ie, this._thin … [truncated]
```

#### 677. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6952` → after: `L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6952) · [Before (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6952)

```diff
-         const YB = new jB.c(this.Lp(), OB, !0, 16, !1, !0);
+         const ye = new Ue.b(this.Nf(), ie, !0, 16, !1, !0);
```

#### 678. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6955-L6956` → after: `L6955-L6956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6955-L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6955-L6956) · [Before (L6955-L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6955-L6956)

```diff
-       } else BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), null === OB ? this._userThinInstanceBuffersStorage?.data[BB] && (this.removeVerticesData(BB), delete this._userThinInstanceBuffersStorage.data[BB], delete this._userThinInstanceBuffersStorage.strides[BB], delete … [truncated]
-     }, oB.c.prototype.HBB = function(BB) {
+       } else ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), null === ie ? this._userThinInstanceBuffersStorage?.data[ee] && (this.removeVerticesData(ee), delete this._userThinInstanceBuffersStorage.data[ee], delete this._userThinInstanceBuffersStorage.strides[ee], delete … [truncated]
+     }, Ke.b.prototype.qie = function(ee) {
```

#### 679. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6958` → after: `L6958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6958) · [Before (L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6958)

```diff
-     }, oB.c.prototype.thinInstancePartialBufferUpdate = function(BB, OB, GB) {
+     }, Ke.b.prototype.thinInstancePartialBufferUpdate = function(ee, ie, He) {
```

#### 680. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6967` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6967) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6967)

```diff
-     }, oB.c.prototype.thinInstanceGetWorldMatrices = function() {
+     }, Ke.b.prototype.thinInstanceGetWorldMatrices = function() {
```

#### 681. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6972` → after: `L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6972) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6972)

```diff
-         for (let OB = 0; OB < this._thinInstanceDataStorage.instancesCount; ++OB) this._thinInstanceDataStorage.worldMatrices[OB] = YB.d.FromArray(BB, 16 * OB)
+         for (let ie = 0; ie < this._thinInstanceDataStorage.instancesCount; ++ie) this._thinInstanceDataStorage.worldMatrices[ie] = ye.b.FromArray(ee, 16 * ie)
```

#### 682. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6975` → after: `L6975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6975) · [Before (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6975)

```diff
-     }, oB.c.prototype.thinInstanceRefreshBoundingInfo = function() {
+     }, Ke.b.prototype.thinInstanceRefreshBoundingInfo = function() {
```

#### 683. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6991-L6998` → after: `L6991-L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6991-L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L6991-L6998) · [Before (L6991-L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L6991-L6998)

```diff
-               NB = YB.k.Vector4[0],
-               RB = YB.k.Xp[1],
-               WB = YB.k.Xp[2],
-               AB = YB.k.Xp[3],
-               VB = YB.k.Xp[4],
-               SB = YB.k.Xp[5],
-               nB = YB.k.Xp[6],
-               UB = YB.k.Matrix[2],
+               Xe = ye.j.Vector4[0],
+               ze = ye.j.rf[1],
+               Be = ye.j.rf[2],
+               Ee = ye.j.rf[3],
+               ge = ye.j.rf[4],
+               Oe = ye.j.rf[5],
+               de = ye.j.rf[6],
+               We = ye.j.Matrix[2],
```

#### 684. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7001` → after: `L7001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7001) · [Before (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7001)

```diff
-             RB.uBB(Number.POSITIVE_INFINITY), WB.uBB(Number.NEGATIVE_INFINITY), AB.uBB(Number.POSITIVE_INFINITY), VB.uBB(Number.NEGATIVE_INFINITY);
+             ze.Iee(Number.POSITIVE_INFINITY), Be.Iee(Number.NEGATIVE_INFINITY), Ee.Iee(Number.POSITIVE_INFINITY), ge.Iee(Number.NEGATIVE_INFINITY);
```

#### 685. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7013` → after: `L7013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7013) · [Before (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7013)

```diff
-               MB(DB, kB, SB, nB), PB(SB, nB, fB), RB.minimizeInPlace(SB), WB.maximizeInPlace(nB), YB.d.FromArrayToRef(qB, 16 * QB, UB), fB ? zB(SB, nB, UB, AB, VB) : lB(DB, kB, UB, AB, VB)
+               oe(be, Ze, Oe, de), Re(Oe, de, te), ze.minimizeInPlace(Oe), Be.maximizeInPlace(de), ye.b.FromArrayToRef(Te, 16 * Me, We), te ? ke(Oe, de, We, Ee, ge) : qe(be, Ze, We, Ee, ge)
```

#### 686. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7015` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7015) · [Before (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7015)

```diff
-             return !(!isFinite(RB.x) || !isFinite(AB.x)) && (BB.Gw().reConstruct(AB, VB), BB.rawBoundingInfo = new QB.e(RB, WB), function(BB, OB) {
+             return !(!isFinite(ze.x) || !isFinite(Ee.x)) && (ee.WC().reConstruct(Ee, ge), ee.rawBoundingInfo = new Me.c(ze, Be), function(ee, ie) {
```

#### 687. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7026-L7027` → after: `L7026-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7026-L7027) · [Before (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7026-L7027)

```diff
-         const BB = this.Gw();
-         this.rawBoundingInfo = new QB.e(BB.minimum, BB.maximum)
+         const ee = this.WC();
+         this.rawBoundingInfo = new Me.c(ee.minimum, ee.maximum)
```

#### 688. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7029` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7029) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7029)

```diff
-       const pB = this.Gw(),
+       const fe = this.WC(),
```

#### 689. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7033` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7033) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7033)

```diff
-       YB.k.Xp[0].uBB(Number.POSITIVE_INFINITY), YB.k.Xp[1].uBB(Number.NEGATIVE_INFINITY);
+       ye.j.rf[0].Iee(Number.POSITIVE_INFINITY), ye.j.rf[1].Iee(Number.NEGATIVE_INFINITY);
```

#### 690. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7035-L7036` → after: `L7035-L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7035-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7035-L7036) · [Before (L7035-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7035-L7036)

```diff
-         YB.d.FromArrayToRef(qB, 16 * QB, YB.k.Matrix[0]);
-         for (let BB = 0; BB < oB.length; ++BB) YB.r.TransformCoordinatesToRef(oB[BB], YB.k.Matrix[0], YB.k.Xp[2]), YB.k.Xp[0].minimizeInPlace(YB.k.Xp[2]), YB.k.Xp[1].maximizeInPlace(YB.k.Xp[2])
+         ye.b.FromArrayToRef(Te, 16 * Me, ye.j.Matrix[0]);
+         for (let ee = 0; ee < Ke.length; ++ee) ye.p.TransformCoordinatesToRef(Ke[ee], ye.j.Matrix[0], ye.j.rf[2]), ye.j.rf[0].minimizeInPlace(ye.j.rf[2]), ye.j.rf[1].maximizeInPlace(ye.j.rf[2])
```

#### 691. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7038-L7039` → after: `L7038-L7039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7038-L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7038-L7039) · [Before (L7038-L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7038-L7039)

```diff
-       pB.reConstruct(YB.k.Xp[0], YB.k.Xp[1]), this._updateBoundingInfo()
-     }, oB.c.prototype._thinInstanceRecreateBuffer = function(BB) {
+       fe.reConstruct(ye.j.rf[0], ye.j.rf[1]), this._updateBoundingInfo()
+     }, Ke.b.prototype._thinInstanceRecreateBuffer = function(ee) {
```

#### 692. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7041-L7042` → after: `L7041-L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7041-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7041-L7042) · [Before (L7041-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7041-L7042)

```diff
-       "matrix" === BB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, OB)) : "previousMatrix" === BB ? this._scene.needsPreviousWorldMatr … [truncated]
-     }, oB.c.prototype._thinInstanceUpdateBufferSize = function(BB) {
+       "matrix" === ee ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, ie)) : "previousMatrix" === ee ? this._scene.needsPreviousWorldMatr … [truncated]
+     }, Ke.b.prototype._thinInstanceUpdateBufferSize = function(ee) {
```

#### 693. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7058` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7058) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7058)

```diff
-         GB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", QB, !1), this._thinInstanceDataStorage.matrixData = QB, this._thinInstanceDataStorage.matrixBufferSize = yB, this._scene … [truncated]
+         He ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Me, !1), this._thinInstanceDataStorage.matrixData = Me, this._thinInstanceDataStorage.matrixBufferSize = Fe, this._scene … [truncated]
```

#### 694. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7060` → after: `L7060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7060) · [Before (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7060)

```diff
-     }, oB.c.prototype._thinInstanceInitializeUserStorage = function() {
+     }, Ke.b.prototype._thinInstanceInitializeUserStorage = function() {
```

#### 695. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7067` → after: `L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7067) · [Before (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7067)

```diff
-     }, oB.c.prototype._disposeThinInstanceSpecificData = function() {
+     }, Ke.b.prototype._disposeThinInstanceSpecificData = function() {
```

#### 696. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7071` → after: `L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7071) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7071)

```diff
-   41444: (BB, OB, GB) => {
+   41559: (ee, ie, He) => {
```

#### 697. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7073-L7074` → after: `L7073-L7074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7073-L7074) · [Before (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7073-L7074)

```diff
-       e: () => RB,
-       h: () => qB
+       c: () => ze,
+       d: () => Te
```

#### 698. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7076-L7083` → after: `L7076-L7083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7076-L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7076-L7083) · [Before (L7076-L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7076-L7083)

```diff
-     var YB, DB, QB, oB, jB = GB(40998),
-       yB = GB(41004),
-       JB = GB(41022),
-       MB = GB(37802),
-       PB = GB(37778),
-       zB = GB(41220),
-       lB = GB(37823),
-       pB = GB(40890);
+     var ye, be, Me, Ke, Ue = He(41113),
+       Fe = He(41121),
+       Je = He(41141),
+       oe = He(37931),
+       Re = He(37917),
+       ke = He(41323),
+       qe = He(37949),
+       fe = He(40985);
```

#### 699. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7086` → after: `L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7086) · [Before (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7086)

```diff
-       let OB, GB, YB, DB, QB, oB, lB, pB, qB, ZB = zB.b,
+       let ie, He, ye, be, Me, Ke, qe, fe, Te, pe = ke.d,
```

#### 700. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7120` → after: `L7120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7120) · [Before (L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7120)

```diff
-           super(OB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new PB.r(0, 0, 1), this._up = new PB.r(0, 1, 0), this._right = new PB.r(1, 0, 0), this._position = (0, jB.j)(this, NB, PB.r.Zero()), this._rotation = ((0, jB.j)(this, R … [truncated]
+           super(ie, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Re.p(0, 0, 1), this._up = new Re.p(0, 1, 0), this._right = new Re.p(1, 0, 0), this._position = (0, Ue.l)(this, Xe, Re.p.Zero()), this._rotation = ((0, Ue.l)(this, z … [truncated]
```

#### 701. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7153` → after: `L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7153) · [Before (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7153)

```diff
-           this._rotationQuaternion = BB, BB && this._rotation.uBB(0), this._markAsDirtyInternal()
+           this._rotationQuaternion = ee, ee && this._rotation.Iee(0), this._markAsDirtyInternal()
```

#### 702. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7159` → after: `L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7159) · [Before (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7159)

```diff
-           return PB.r.TransformNormalFromFloatsToRef(0, 0, this.JF().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
+           return Re.p.TransformNormalFromFloatsToRef(0, 0, this.Xx().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
```

#### 703. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7162` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7162) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7162)

```diff
-           return PB.r.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
+           return Re.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
```

#### 704. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7165` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7165) · [Before (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7165)

```diff
-           return PB.r.TransformNormalFromFloatsToRef(this.JF().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
+           return Re.p.TransformNormalFromFloatsToRef(this.Xx().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
```

#### 705. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7168` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7168) · [Before (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7168)

```diff
-           return this._poseMatrix ? (this._poseMatrix.IU(BB), this) : (this._poseMatrix = BB.clone(), this)
+           return this._poseMatrix ? (this._poseMatrix.jD(ee), this) : (this._poseMatrix = ee.clone(), this)
```

#### 706. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7171` → after: `L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7171) · [Before (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7171)

```diff
-           return this._poseMatrix || (this._poseMatrix = PB.d.Identity()), this._poseMatrix
+           return this._poseMatrix || (this._poseMatrix = Re.b.Identity()), this._poseMatrix
```

#### 707. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7196` → after: `L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7196) · [Before (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7196)

```diff
-           return this._pivotMatrix.IU(BB), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = OB, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
+           return this._pivotMatrix.jD(ee), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = ie, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
```

#### 708. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7212` → after: `L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7212) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7212)

```diff
-           return BB ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.uBB(0), this._rotationQuaternion = this._rotationQuaternion || PB.f.Identity(), BB.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(! … [truncated]
+           return ee ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Iee(0), this._rotationQuaternion = this._rotationQuaternion || Re.f.Identity(), ee.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(! … [truncated]
```

#### 709. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7217` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7217) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7217)

```diff
-         get yyB() {
+         get AFe() {
```

#### 710. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7231-L7232` → after: `L7231-L7232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7231-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7231-L7232) · [Before (L7231-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7231-L7232)

```diff
-             const BB = PB.k.Matrix[0];
-             this.parent.getWorldMatrix().invertToRef(BB), PB.r.TransformCoordinatesFromFloatsToRef(OB, GB, YB, BB, this.position)
+             const ee = Re.j.Matrix[0];
+             this.parent.getWorldMatrix().invertToRef(ee), Re.p.TransformCoordinatesFromFloatsToRef(ie, He, ye, ee, this.position)
```

#### 711. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7234` → after: `L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7234) · [Before (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7234)

```diff
-           return this._absolutePosition.IU(BB), this
+           return this._absolutePosition.jD(ee), this
```

#### 712. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7237` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7237) · [Before (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7237)

```diff
-           return this.computeWorldMatrix(), this.position = PB.r.TransformNormal(BB, this._localMatrix), this
+           return this.computeWorldMatrix(), this.position = Re.p.TransformNormal(ee, this._localMatrix), this
```

#### 713. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7241-L7242` → after: `L7241-L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7241-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7241-L7242) · [Before (L7241-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7241-L7242)

```diff
-           const BB = PB.k.Matrix[0];
-           return this._localMatrix.invertToRef(BB), PB.r.TransformNormal(this.position, BB)
+           const ee = Re.j.Matrix[0];
+           return this._localMatrix.invertToRef(ee), Re.p.TransformNormal(this.position, ee)
```

#### 714. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7245` → after: `L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7245) · [Before (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7245)

```diff
-           return this.computeWorldMatrix(!0), this.position = PB.r.TransformCoordinates(BB, this._localMatrix), this
+           return this.computeWorldMatrix(!0), this.position = Re.p.TransformCoordinates(ee, this._localMatrix), this
```

#### 715. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7256` → after: `L7256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7256) · [Before (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7256)

```diff
-               const BB = PB.k.Matrix[0];
+               const ee = Re.j.Matrix[0];
```

#### 716. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7258` → after: `L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7258) · [Before (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7258)

```diff
-               const OB = PB.k.Matrix[1];
+               const ie = Re.j.Matrix[1];
```

#### 717. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7261` → after: `L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7261) · [Before (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7261)

```diff
-               const BB = PB.k.Quaternion[0];
+               const ee = Re.j.Quaternion[0];
```

#### 718. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7263` → after: `L7263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7263) · [Before (L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7263)

```diff
-               const OB = PB.k.Matrix[0];
+               const ie = Re.j.Matrix[0];
```

#### 719. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7265` → after: `L7265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7265) · [Before (L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7265)

```diff
-               const GB = PB.k.Matrix[1];
+               const He = Re.j.Matrix[1];
```

#### 720. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7270` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7270) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7270)

```diff
-           const OB = PB.r.Zero();
+           const ie = Re.p.Zero();
```

#### 721. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7274` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7274) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7274)

```diff
-           return PB.r.TransformNormalToRef(BB, this.getWorldMatrix(), OB), this
+           return Re.p.TransformNormalToRef(ee, this.getWorldMatrix(), ie), this
```

#### 722. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7287)

```diff
-           0 == this.JF().getRenderId() && this.computeWorldMatrix(!0);
+           0 == this.Xx().getRenderId() && this.computeWorldMatrix(!0);
```

#### 723. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7290-L7291` → after: `L7290-L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7290-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7290-L7291) · [Before (L7290-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7290-L7291)

```diff
-             const OB = PB.k.Matrix[0];
-             GB.invertToRef(OB), BB = PB.r.TransformCoordinates(BB, OB)
+             const ie = Re.j.Matrix[0];
+             He.invertToRef(ie), ee = Re.p.TransformCoordinates(ee, ie)
```

#### 724. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7293` → after: `L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7293) · [Before (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7293)

```diff
-           return this.setPivotMatrix(PB.d.Translation(-BB.x, -BB.y, -BB.z), !0)
+           return this.setPivotMatrix(Re.b.Translation(-ee.x, -ee.y, -ee.z), !0)
```

#### 725. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7296)

```diff
-           const BB = PB.r.Zero();
+           const ee = Re.p.Zero();
```

#### 726. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7303` → after: `L7303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7303) · [Before (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7303)

```diff
-           const BB = PB.r.Zero();
+           const ee = Re.p.Zero();
```

#### 727. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7307` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7307) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7307)

```diff
-           return this.getPivotPointToRef(BB), PB.r.TransformCoordinatesToRef(BB, this.getWorldMatrix(), BB), this
+           return this.getPivotPointToRef(ee), Re.p.TransformCoordinatesToRef(ee, this.getWorldMatrix(), ee), this
```

#### 728. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7309` → after: `L7309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7309) · [Before (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7309)

```diff
-         DYB(BB) {
+         tye(ee) {
```

#### 729. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7312-L7313` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7312-L7313) · [Before (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7312-L7313)

```diff
-             for (const OB of this._children) OB.DYB(BB);
-           return super.DYB(BB)
+             for (const ie of this._children) ie.tye(ee);
+           return super.tye(ee)
```

#### 730. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7319-L7324` → after: `L7319-L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7319-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7319-L7324) · [Before (L7319-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7319-L7324)

```diff
-           const DB = PB.k.Quaternion[0],
-             QB = PB.k.Xp[0],
-             oB = PB.k.Xp[1],
-             jB = PB.k.Matrix[1];
-           PB.d.IdentityToRef(jB);
-           const yB = PB.k.Matrix[0];
+           const be = Re.j.Quaternion[0],
+             Me = Re.j.rf[0],
+             Ke = Re.j.rf[1],
+             Ue = Re.j.Matrix[1];
+           Re.b.IdentityToRef(Ue);
+           const Fe = Re.j.Matrix[0];
```

#### 731. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7327` → after: `L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7327) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7327)

```diff
-           return JB || (JB = BB._TmpRotation, PB.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, JB)), PB.d.ComposeToRef(this.SP, JB, this.position, yB), this.parent && yB.multiplyToRef(this.parent.computeWorldMatrix(!0), yB), OB && (OB.computeWo … [truncated]
+           return Je || (Je = ee._TmpRotation, Re.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Je)), Re.b.ComposeToRef(this.wR, Je, this.position, Fe), this.parent && Fe.multiplyToRef(this.parent.computeWorldMatrix(!0), Fe), ie && (ie.computeWo … [truncated]
```

#### 732. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7352` → after: `L7352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7352) · [Before (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7352)

```diff
-           if (OB.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.uBB(0)), YB && 0 !== YB) {
+           if (ie.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Iee(0)), ye && 0 !== ye) {
```

#### 733. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7355-L7356` → after: `L7355-L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7355-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7355-L7356) · [Before (L7355-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7355-L7356)

```diff
-                 YB = PB.k.Matrix[0];
-               BB.invertToRef(YB), OB = PB.r.TransformNormal(OB, YB), BB.determinant() < 0 && (GB *= -1)
+                 ye = Re.j.Matrix[0];
+               ee.invertToRef(ye), ie = Re.p.TransformNormal(ie, ye), ee.determinant() < 0 && (He *= -1)
```

#### 734. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7363-L7372` → after: `L7363-L7372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7363-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7363-L7372) · [Before (L7363-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7363-L7372)

```diff
-           OB.normalize(), this.rotationQuaternion || (this.rotationQuaternion = PB.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.uBB(0));
-           const YB = PB.k.Xp[0],
-             DB = PB.k.Xp[1],
-             QB = PB.k.Xp[2],
-             oB = PB.k.Quaternion[0],
-             jB = PB.k.Matrix[0],
-             yB = PB.k.Matrix[1],
-             JB = PB.k.Matrix[2],
-             MB = PB.k.Matrix[3];
-           return BB.subtractToRef(this.position, YB), PB.d.TranslationToRef(YB.x, YB.y, YB.z, jB), PB.d.TranslationToRef(-YB.x, -YB.y, -YB.z, yB), PB.d.RotationAxisToRef(OB, GB, JB), yB.multiplyToRef(JB, MB), MB.multiplyToRef(jB, MB), MB.decompose(DB, oB, QB), this.position.addIn … [truncated]
+           ie.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Re.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Iee(0));
+           const ye = Re.j.rf[0],
+             be = Re.j.rf[1],
+             Me = Re.j.rf[2],
+             Ke = Re.j.Quaternion[0],
+             Ue = Re.j.Matrix[0],
+             Fe = Re.j.Matrix[1],
+             Je = Re.j.Matrix[2],
+             oe = Re.j.Matrix[3];
+           return ee.subtractToRef(this.position, ye), Re.b.TranslationToRef(ye.x, ye.y, ye.z, Ue), Re.b.TranslationToRef(-ye.x, -ye.y, -ye.z, Fe), Re.b.RotationAxisToRef(ie, He, Je), Fe.multiplyToRef(Je, oe), oe.multiplyToRef(Ue, oe), oe.decompose(be, Ke, Me), this.position.addIn … [truncated]
```

#### 735. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7385-L7386` → after: `L7385-L7386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7385-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7385-L7386) · [Before (L7385-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7385-L7386)

```diff
-           this.rotationQuaternion ? YB = this.rotationQuaternion : (YB = PB.k.Quaternion[1], PB.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, YB));
-           const DB = PB.k.Quaternion[0];
+           this.rotationQuaternion ? ye = this.rotationQuaternion : (ye = Re.j.Quaternion[1], Re.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, ye));
+           const be = Re.j.Quaternion[0];
```

#### 736. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7399` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7399) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7399)

```diff
-           const YB = this.JF().getRenderId();
+           const ye = this.Xx().getRenderId();
```

#### 737. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7401` → after: `L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7401) · [Before (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7401)

```diff
-           GB = GB || this.JF().activeCamera, this._updateCache();
+           He = He || this.Xx().activeCamera, this._updateCache();
```

#### 738. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7409` → after: `L7409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7409) · [Before (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7409)

```diff
-             yB = BB._TmpTranslation, yB.zOB(this._position.x + OB[12], this._position.y + OB[13], this._position.z + OB[14])
+             Fe = ee._TmpTranslation, Fe.wie(this._position.x + ie[12], this._position.y + ie[13], this._position.z + ie[14])
```

#### 739. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7411` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7411) · [Before (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7411)

```diff
-           if (oB.zOB(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
+           if (Ke.wie(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
```

#### 740. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7413` → after: `L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7413) · [Before (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7413)

```diff
-               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(PB.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.zOB(0, 0, 0))
+               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Re.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.wie(0, 0, 0))
```

#### 741. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7417-L7421` → after: `L7417-L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7417-L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7417-L7421) · [Before (L7417-L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7417-L7421)

```diff
-             const BB = PB.k.Matrix[1];
-             PB.d.ScalingToRef(oB.x, oB.y, oB.z, BB);
-             const OB = PB.k.Matrix[0];
-             jB.toRotationMatrix(OB), this._pivotMatrix.multiplyToRef(BB, PB.k.Matrix[4]), PB.k.Matrix[4].multiplyToRef(OB, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTrans … [truncated]
-           } else PB.d.ComposeToRef(oB, jB, yB, this._localMatrix);
+             const ee = Re.j.Matrix[1];
+             Re.b.ScalingToRef(Ke.x, Ke.y, Ke.z, ee);
+             const ie = Re.j.Matrix[0];
+             Ue.toRotationMatrix(ie), this._pivotMatrix.multiplyToRef(ee, Re.j.Matrix[4]), Re.j.Matrix[4].multiplyToRef(ie, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTrans … [truncated]
+           } else Re.b.ComposeToRef(Ke, Ue, Fe, this._localMatrix);
```

#### 742. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7426-L7431` → after: `L7426-L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7426-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7426-L7431) · [Before (L7426-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7426-L7431)

```diff
-                 BB.getSkeleton().prepare(), BB.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), PB.k.Matrix[7])
-               } else PB.k.Matrix[7].IU(QB.getWorldMatrix());
-               const OB = PB.k.Xp[5],
-                 GB = PB.k.Xp[6],
-                 YB = PB.k.Quaternion[0];
-               PB.k.Matrix[7].decompose(GB, YB, OB), PB.d.ScalingToRef(GB.x, GB.y, GB.z, PB.k.Matrix[7]), PB.k.Matrix[7].setTranslation(OB), BB.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(YB, OB), this._localMatrix.setTranslation(OB)), this._local … [truncated]
+                 ee.getSkeleton().prepare(), ee.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Re.j.Matrix[7])
+               } else Re.j.Matrix[7].jD(Me.getWorldMatrix());
+               const ie = Re.j.rf[5],
+                 He = Re.j.rf[6],
+                 ye = Re.j.Quaternion[0];
+               Re.j.Matrix[7].decompose(He, ye, ie), Re.b.ScalingToRef(He.x, He.y, He.z, Re.j.Matrix[7]), Re.j.Matrix[7].setTranslation(ie), ee.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(ye, ie), this._localMatrix.setTranslation(ie)), this._local … [truncated]
```

#### 743. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7434` → after: `L7434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7434) · [Before (L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7434)

```diff
-               BB.getSkeleton().prepare(), this._localMatrix.multiplyToRef(BB.getFinalMatrix(), PB.k.Matrix[6]), PB.k.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
+               ee.getSkeleton().prepare(), this._localMatrix.multiplyToRef(ee.getFinalMatrix(), Re.j.Matrix[6]), Re.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
```

#### 744. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7437` → after: `L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7437) · [Before (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7437)

```diff
-           } else this._worldMatrix.IU(this._localMatrix);
+           } else this._worldMatrix.jD(this._localMatrix);
```

#### 745. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7440` → after: `L7440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7440) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7440)

```diff
-               const OB = PB.k.Xp[0];
+               const ie = Re.j.rf[0];
```

#### 746. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7443-L7445` → after: `L7443-L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7443-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7443-L7445) · [Before (L7443-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7443-L7445)

```diff
-               this._worldMatrix.invertToRef(PB.k.Matrix[1]);
-               const DB = PB.k.Xp[1];
-               PB.r.TransformCoordinatesToRef(YB, PB.k.Matrix[1], DB), DB.normalize();
+               this._worldMatrix.invertToRef(Re.j.Matrix[1]);
+               const be = Re.j.rf[1];
+               Re.p.TransformCoordinatesToRef(ye, Re.j.Matrix[1], be), be.normalize();
```

#### 747. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7449-L7453` → after: `L7449-L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7449-L7453) · [Before (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7449-L7453)

```diff
-               if (PB.f.RotationYawPitchRollToRef(QB, jB, 0, PB.k.Quaternion[0]), (this.billboardMode & BB.BILLBOARDMODE_ALL) !== BB.BILLBOARDMODE_ALL) {
-                 const OB = PB.k.Xp[1];
-                 PB.k.Quaternion[0].toEulerAnglesToRef(OB), (this.billboardMode & BB.BILLBOARDMODE_X) !== BB.BILLBOARDMODE_X && (OB.x = 0), (this.billboardMode & BB.BILLBOARDMODE_Y) !== BB.BILLBOARDMODE_Y && (OB.y = 0), (this.billboardMode & BB.BILLBOARDMODE_Z) !== BB.BILLBOARDMOD … [truncated]
-               } else PB.d.FromQuaternionToRef(PB.k.Quaternion[0], PB.k.Matrix[0]);
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(PB.k.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(PB.k.Xp[0])
+               if (Re.f.RotationYawPitchRollToRef(Me, Ue, 0, Re.j.Quaternion[0]), (this.billboardMode & ee.BILLBOARDMODE_ALL) !== ee.BILLBOARDMODE_ALL) {
+                 const ie = Re.j.rf[1];
+                 Re.j.Quaternion[0].toEulerAnglesToRef(ie), (this.billboardMode & ee.BILLBOARDMODE_X) !== ee.BILLBOARDMODE_X && (ie.x = 0), (this.billboardMode & ee.BILLBOARDMODE_Y) !== ee.BILLBOARDMODE_Y && (ie.y = 0), (this.billboardMode & ee.BILLBOARDMODE_Z) !== ee.BILLBOARDMOD … [truncated]
+               } else Re.b.FromQuaternionToRef(Re.j.Quaternion[0], Re.j.Matrix[0]);
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Re.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Re.j.rf[0])
```

#### 748. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7455-L7461` → after: `L7455-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7455-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7455-L7461) · [Before (L7455-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7455-L7461)

```diff
-               const OB = PB.k.Xp[0];
-               this._worldMatrix.getTranslationToRef(OB), PB.k.Matrix[1].IU(GB.getViewMatrix());
-               const YB = this.JF().useRightHandedSystem;
-               if (YB && PB.k.Matrix[1].multiplyToRef(BB._TmpRHRestore, PB.k.Matrix[1]), PB.k.Matrix[1].setTranslationFromFloats(0, 0, 0), PB.k.Matrix[1].invertToRef(PB.k.Matrix[0]), (this.billboardMode & BB.BILLBOARDMODE_ALL) !== BB.BILLBOARDMODE_ALL) {
-                 PB.k.Matrix[0].decompose(void 0, PB.k.Quaternion[0], void 0);
-                 const OB = PB.k.Xp[1];
-                 PB.k.Quaternion[0].toEulerAnglesToRef(OB), (this.billboardMode & BB.BILLBOARDMODE_X) !== BB.BILLBOARDMODE_X && (OB.x = 0), (this.billboardMode & BB.BILLBOARDMODE_Y) !== BB.BILLBOARDMODE_Y && (OB.y = 0), (this.billboardMode & BB.BILLBOARDMODE_Z) !== BB.BILLBOARDMOD … [truncated]
+               const ie = Re.j.rf[0];
+               this._worldMatrix.getTranslationToRef(ie), Re.j.Matrix[1].jD(He.getViewMatrix());
+               const ye = this.Xx().useRightHandedSystem;
+               if (ye && Re.j.Matrix[1].multiplyToRef(ee._TmpRHRestore, Re.j.Matrix[1]), Re.j.Matrix[1].setTranslationFromFloats(0, 0, 0), Re.j.Matrix[1].invertToRef(Re.j.Matrix[0]), (this.billboardMode & ee.BILLBOARDMODE_ALL) !== ee.BILLBOARDMODE_ALL) {
+                 Re.j.Matrix[0].decompose(void 0, Re.j.Quaternion[0], void 0);
+                 const ie = Re.j.rf[1];
+                 Re.j.Quaternion[0].toEulerAnglesToRef(ie), (this.billboardMode & ee.BILLBOARDMODE_X) !== ee.BILLBOARDMODE_X && (ie.x = 0), (this.billboardMode & ee.BILLBOARDMODE_Y) !== ee.BILLBOARDMODE_Y && (ie.y = 0), (this.billboardMode & ee.BILLBOARDMODE_Z) !== ee.BILLBOARDMOD … [truncated]
```

#### 749. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7463-L7464` → after: `L7463-L7464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7463-L7464) · [Before (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7463-L7464)

```diff
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(PB.k.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(PB.k.Xp[0])
-             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : QB && QB._nonUniformScaling ? this._updateNonUniformScalingState(QB._nonUniformScaling) : this._up … [truncated]
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Re.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Re.j.rf[0])
+             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Me && Me._nonUniformScaling ? this._updateNonUniformScalingState(Me._nonUniformScaling) : this._up … [truncated]
```

#### 750. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7474` → after: `L7474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7474) · [Before (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7474)

```diff
-                 const BB = PB.k.Matrix[0];
+                 const ee = Re.j.Matrix[0];
```

#### 751. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7476-L7477` → after: `L7476-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7476-L7477) · [Before (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7476-L7477)

```diff
-                 const OB = PB.k.Quaternion[0];
-                 BB.decompose(GB.SP, OB, GB.position), GB.rotationQuaternion ? GB.rotationQuaternion.IU(OB) : OB.toEulerAnglesToRef(GB.rotation)
+                 const ie = Re.j.Quaternion[0];
+                 ee.decompose(He.wR, ie, He.position), He.rotationQuaternion ? He.rotationQuaternion.jD(ie) : ie.toEulerAnglesToRef(He.rotation)
```

#### 752. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7481` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7481) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7481)

```diff
-           this.SP.zOB(1, 1, 1), this.position.zOB(0, 0, 0), this.rotation.zOB(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = PB.f.Identity()), this._worldMatrix = PB.d.Identity()
+           this.wR.wie(1, 1, 1), this.position.wie(0, 0, 0), this.rotation.wie(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Re.f.Identity()), this._worldMatrix = Re.b.Identity()
```

#### 753. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7492` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7492) · [Before (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7492)

```diff
-           return BB || (BB = this.JF().activeCamera), PB.r.TransformCoordinates(this.getAbsolutePosition(), BB.getViewMatrix())
+           return ee || (ee = this.Xx().activeCamera), Re.p.TransformCoordinates(this.getAbsolutePosition(), ee.getViewMatrix())
```

#### 754. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7496` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7496) · [Before (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7496)

```diff
-           return BB || (BB = this.JF().activeCamera), this.getAbsolutePosition().subtract(BB.globalPosition).length()
+           return ee || (ee = this.Xx().activeCamera), this.getAbsolutePosition().subtract(ee.globalPosition).length()
```

#### 755. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7499` → after: `L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7499) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7499)

```diff
-           const DB = JB.d.Clone((() => new BB(OB, this.JF())), this);
+           const be = Je.c.Clone((() => new ee(ie, this.Xx())), this);
```

#### 756. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7510-L7511` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7510-L7511) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7510-L7511)

```diff
-           const OB = JB.d.Serialize(this, BB);
-           return OB.type = this.getClassName(), OB.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(OB), OB.localMatrix = this.getPivotMatrix().dDB(), OB.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (OB.mF = !0), JB.d.AppendSerializedAnimation … [truncated]
+           const ie = Je.c.Serialize(this, ee);
+           return ie.type = this.getClassName(), ie.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(ie), ie.localMatrix = this.getPivotMatrix().Qbe(), ie.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (ie.RL = !0), Je.c.AppendSerializedAnimation … [truncated]
```

#### 757. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7519` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7519) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7519)

```diff
-           if (this.JF().stopAnimation(this), this.JF().removeTransformNode(this), this._parentContainer) {
+           if (this.Xx().stopAnimation(this), this.Xx().removeTransformNode(this), this._parentContainer) {
```

#### 758. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7535` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7535) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7535)

```diff
-           OB && (this.rotationQuaternion ? (DB = this.rotationQuaternion.clone(), this.rotationQuaternion.zOB(0, 0, 0, 1)) : this.rotation && (YB = this.rotation.clone(), this.rotation.zOB(0, 0, 0)));
+           ie && (this.rotationQuaternion ? (be = this.rotationQuaternion.clone(), this.rotationQuaternion.wie(0, 0, 0, 1)) : this.rotation && (ye = this.rotation.clone(), this.rotation.wie(0, 0, 0)));
```

#### 759. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7541` → after: `L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7541) · [Before (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7541)

```diff
-           return this.SP.scaleInPlace(yB), OB && (this.rotationQuaternion && DB ? this.rotationQuaternion.IU(DB) : this.rotation && YB && this.rotation.IU(YB)), this
+           return this.wR.scaleInPlace(Fe), ie && (this.rotationQuaternion && be ? this.rotationQuaternion.jD(be) : this.rotation && ye && this.rotation.jD(ye)), this
```

#### 760. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7548)

```diff
-         OB = [(0, yB.H)("position")], GB = [(0, yB.H)("rotation")], YB = [(0, yB.z)("rotationQuaternion")], DB = [(0, yB.H)("SP")], QB = [(0, yB.L)("billboardMode")], oB = [(0, yB.L)()], lB = [(0, yB.L)("infiniteDistance")], pB = [(0, yB.L)()], qB = [(0, yB.L)()], (0, jB.h)(null, … [truncated]
+         ie = [(0, Fe.P)("position")], He = [(0, Fe.P)("rotation")], ye = [(0, Fe.F)("rotationQuaternion")], be = [(0, Fe.P)("wR")], Me = [(0, Fe.R)("billboardMode")], Ke = [(0, Fe.R)()], qe = [(0, Fe.R)("infiniteDistance")], fe = [(0, Fe.R)()], Te = [(0, Fe.R)()], (0, Ue.i)(null, … [truncated]
```

#### 761. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7561` → after: `L7561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7561) · [Before (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7561)

```diff
-         }, NB, RB), (0, jB.h)(null, null, GB, {
+         }, Xe, ze), (0, Ue.i)(null, null, He, {
```

#### 762. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7574` → after: `L7574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7574) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7574)

```diff
-         }, WB, AB), (0, jB.h)(null, null, YB, {
+         }, Be, Ee), (0, Ue.i)(null, null, ye, {
```

#### 763. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7587` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7587) · [Before (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7587)

```diff
-         }, VB, SB), (0, jB.h)(null, null, DB, {
+         }, ge, Oe), (0, Ue.i)(null, null, be, {
```

#### 764. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7600` → after: `L7600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7600) · [Before (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7600)

```diff
-         }, nB, UB), (0, jB.h)(null, null, QB, {
+         }, de, We), (0, Ue.i)(null, null, Me, {
```

#### 765. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7613` → after: `L7613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7613) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7613)

```diff
-         }, fB, kB), (0, jB.h)(null, null, oB, {
+         }, te, Ze), (0, Ue.i)(null, null, Ke, {
```

#### 766. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7626` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7626) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7626)

```diff
-         }, dB, KB), (0, jB.h)(null, null, lB, {
+         }, we, De), (0, Ue.i)(null, null, qe, {
```

#### 767. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7639` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7639) · [Before (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7639)

```diff
-         }, uB, mB), (0, jB.h)(null, null, pB, {
+         }, Pe, Ae), (0, Ue.i)(null, null, fe, {
```

#### 768. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7652` → after: `L7652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7652) · [Before (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7652)

```diff
-         }, IB, FB), (0, jB.h)(null, null, qB, {
+         }, Ye, Ve), (0, Ue.i)(null, null, Te, {
```

#### 769. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7671` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7671) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7671)

```diff
-       })(), BB.BILLBOARDMODE_NONE = 0, BB.BILLBOARDMODE_X = 1, BB.BILLBOARDMODE_Y = 2, BB.BILLBOARDMODE_Z = 4, BB.BILLBOARDMODE_ALL = 7, BB.BILLBOARDMODE_USE_POSITION = 128, BB.BillboardUseParentOrientation = !1, BB._TmpRotation = PB.f.Zero(), BB._TmpScaling = PB.r.Zero(), BB._Tm … [truncated]
+       })(), ee.BILLBOARDMODE_NONE = 0, ee.BILLBOARDMODE_X = 1, ee.BILLBOARDMODE_Y = 2, ee.BILLBOARDMODE_Z = 4, ee.BILLBOARDMODE_ALL = 7, ee.BILLBOARDMODE_USE_POSITION = 128, ee.BillboardUseParentOrientation = !1, ee._TmpRotation = Re.f.Zero(), ee._TmpScaling = Re.p.Zero(), ee._Tm … [truncated]
```

#### 770. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7675-L7676` → after: `L7675-L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7675-L7676) · [Before (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7675-L7676)

```diff
-       const YB = JB.d.Parse((() => new qB(BB.name, OB)), BB, OB, GB);
-       if (BB.localMatrix ? YB.setPreTransformMatrix(PB.d.FromArray(BB.localMatrix)) : BB.pivotMatrix && YB.setPivotMatrix(PB.d.FromArray(BB.pivotMatrix)), YB.Zk(BB.isEnabled), YB._waitingParsedUniqueId = BB.uniqueId, void 0 !== BB.parentId && (YB._waitingParentId = BB.parentId),  … [truncated]
+       const ye = Je.c.Parse((() => new Te(ee.name, ie)), ee, ie, He);
+       if (ee.localMatrix ? ye.setPreTransformMatrix(Re.b.FromArray(ee.localMatrix)) : ee.pivotMatrix && ye.setPivotMatrix(Re.b.FromArray(ee.pivotMatrix)), ye.JY(ee.isEnabled), ye._waitingParsedUniqueId = ee.uniqueId, void 0 !== ee.parentId && (ye._waitingParentId = ee.parentId),  … [truncated]
```

#### 771. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7682)

```diff
-         zB.b.ParseAnimationRanges(YB, BB, OB)
+         ke.d.ParseAnimationRanges(ye, ee, ie)
```

#### 772. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7690)

```diff
-     }(YB = qB.prototype).mC ?? (YB.mC = (0, pB.g)("TransformNode", "mC")), (DB = qB.prototype).applyImpulse ?? (DB.applyImpulse = (0, pB.g)("TransformNode", "applyImpulse")), (QB = qB.prototype).applyAngularImpulse ?? (QB.applyAngularImpulse = (0, pB.g)("TransformNode", "applyAng … [truncated]
+     }(ye = Te.prototype).XN ?? (ye.XN = (0, fe.h)("TransformNode", "XN")), (be = Te.prototype).applyImpulse ?? (be.applyImpulse = (0, fe.h)("TransformNode", "applyImpulse")), (Me = Te.prototype).applyAngularImpulse ?? (Me.applyAngularImpulse = (0, fe.h)("TransformNode", "applyAng … [truncated]
```

#### 773. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7692` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7692) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7692)

```diff
-   41420: (BB, OB, GB) => {
+   41532: (ee, ie, He) => {
```

#### 774. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7748` → after: `L7747-L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7747-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/280.js#L7747-L7748) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/280.js#L7748)

```diff
-       l: () => oB
+       m: () => Ue,
+       q: () => Ke
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (499 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 1. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4)

```diff
-   41150: (BB, OB, GB) => {
+   41247: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L7-L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L7-L8)

```diff
-       d: () => qB,
-       e: () => JB,
+       f: () => Je,
```

#### 3. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L11-L14` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L11-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L11-L14)

```diff
-     var YB = GB(40929),
-       DB = GB(39366),
-       QB = GB(41067),
-       oB = GB(40972);
+     var ye = He(41036),
+       be = He(39467),
+       Me = He(41175),
+       Ke = He(41084);
```

#### 4. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L26)

```diff
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, oB.c)(), BB && BB.JF ? this._engine = BB.JF().Lp() : this._engine = BB, this._updatable = GB, this._instanced = jB, this._divisor = JB || 1, this._label = MB, OB instanceof YB.b ? (this._data = null, this._buffer = OB) … [truncated]
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Ke.c)(), ee && ee.Xx ? this._engine = ee.Xx().Nf() : this._engine = ee, this._updatable = He, this._instanced = Ue, this._divisor = Je || 1, this._label = oe, ie instanceof ye.c ? (this._data = null, this._buffer = ie) … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L31-L32)

```diff
-         const jB = QB ? OB : OB * Float32Array.BYTES_PER_ELEMENT,
-           JB = YB ? QB ? YB : YB * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         const Ue = Me ? ie : ie * Float32Array.BYTES_PER_ELEMENT,
+           Je = ye ? Me ? ye : ye * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
```

#### 6. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L55-L56` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L55-L56) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L55-L56)

```diff
-           if (this._buffer.CP > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.CP, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.CP, void 0, this._label));
-           DB.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+           if (this._buffer.bk > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.bk, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.bk, void 0, this._label));
+           be.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
```

#### 7. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L64)

```diff
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, BB, YB ? OB : OB * Float32Array.BYTES_PER_ELEMENT, GB ? GB * this.byteStride : void 0), this._data = 0 === OB && void 0 === GB ? BB : null)
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, ee, ye ? ie : ie * Float32Array.BYTES_PER_ELEMENT, He ? He * this.byteStride : void 0), this._data = 0 === ie && void 0 === He ? ee : null)
```

#### 8. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L97-L98` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L97-L98) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L97-L98)

```diff
-         const AB = (0, QB.s)(this.type);
-         NB ? (this._size = lB || (oB ? oB / AB : JB(GB)), this.byteStride = oB || this._buffer.byteStride || this._size * AB, this.byteOffset = zB || 0) : (this._size = lB || oB || JB(GB), this.byteStride = oB ? oB * AB : this._buffer.byteStride || this._size * AB, this.byteOffse … [truncated]
+         const Ee = (0, Me.o)(this.type);
+         Xe ? (this._size = qe || (Ke ? Ke / Ee : Je(He)), this.byteStride = Ke || this._buffer.byteStride || this._size * Ee, this.byteOffset = ke || 0) : (this._size = qe || Ke || Je(He), this.byteStride = Ke ? Ke * Ee : this._buffer.byteStride || this._size * Ee, this.byteOffse … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L119)

```diff
-             throw new Error(`Invalid vertex buffer type '${BB}'`)
+             throw new Error(`Invalid vertex buffer type '${ee}'`)
```

#### 10. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L139)

```diff
-         return GB ? (0, QB.r)(GB, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, BB, OB) : null
+         return He ? (0, Me.n)(He, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, ee, ie) : null
```

#### 11. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L148)

```diff
-         return this.byteStride / (0, QB.s)(this.type)
+         return this.byteStride / (0, Me.o)(this.type)
```

#### 12. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L150-L151)

```diff
-       uYB() {
-         return this.byteOffset / (0, QB.s)(this.type)
+       Qye() {
+         return this.byteOffset / (0, Me.o)(this.type)
```

#### 13. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L154)

```diff
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, QB.s)(this.type) : this._size
+         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Me.o)(this.type) : this._size
```

#### 14. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L176)

```diff
-         (0, QB.k)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, BB, this.normalized, ((BB, GB) => {
+         (0, Me.f)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, ee, this.normalized, ((ee, He) => {
```

#### 15. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L213)

```diff
-       return (0, QB.s)(BB)
+       return (0, Me.o)(ee)
```

#### 16. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L217)

```diff
-       (0, QB.k)(BB, OB, GB, YB, DB, oB, jB, ((BB, OB) => {
+       (0, Me.f)(ee, ie, He, ye, be, Ke, Ue, ((ee, ie) => {
```

#### 17. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L223)

```diff
-       return (0, QB.r)(BB, OB, GB, YB, DB, oB, jB, yB)
+       return (0, Me.n)(ee, ie, He, ye, be, Ke, Ue, Fe)
```

#### 18. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L232)

```diff
-   40929: (BB, OB, GB) => {
+   41036: (ee, ie, He) => {
```

#### 19. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L234)

```diff
-       b: () => YB
+       c: () => ye
```

#### 20. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L241)

```diff
-         this.references = 0, this.CP = 0, this.is32Bits = !1, this.uniqueId = YB._Counter++
+         this.references = 0, this.bk = 0, this.is32Bits = !1, this.uniqueId = ye._Counter++
```

#### 21. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L246)

```diff
-   41145: (BB, OB, GB) => {
+   41242: (ee, ie, He) => {
```

#### 22. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L250-L251)

```diff
-     var YB = GB(37778),
-       DB = GB(41150);
+     var ye = He(37917),
+       be = He(41247);
```

#### 23. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L260)

```diff
-         let GB, QB = this.pickedMesh.KDB();
+         let He, Me = this.pickedMesh.eMe();
```

#### 24. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L262-L264` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L262-L264) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L262-L264)

```diff
-         const oB = YB.k.Xp[0],
-           jB = YB.k.Xp[1],
-           yB = YB.k.Xp[2];
+         const Ke = ye.j.rf[0],
+           Ue = ye.j.rf[1],
+           Fe = ye.j.rf[2];
```

#### 25. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L267-L270` → after: `L267-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L267-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L267-L270) · [Before (L267-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L267-L270)

```diff
-           let OB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId], oB) : oB.zOB(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
-             JB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId + 1], jB) : jB.zOB(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
-             MB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId + 2], yB) : yB.zOB(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]);
-           OB = OB.scale(this.bu), JB = JB.scale(this.bv), MB = MB.scale(1 - this.bu - this.bv), GB = new YB.r(OB.x + JB.x + MB.x, OB.y + JB.y + MB.y, OB.z + JB.z + MB.z)
+           let ie = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId], Ke) : Ke.wie(ee[3 * this.faceId * 3], ee[3 * this.faceId * 3 + 1], ee[3 * this.faceId * 3 + 2]),
+             Je = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId + 1], Ue) : Ue.wie(ee[3 * (3 * this.faceId + 1)], ee[3 * (3 * this.faceId + 1) + 1], ee[3 * (3 * this.faceId + 1) + 2]),
+             oe = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId + 2], Fe) : Fe.wie(ee[3 * (3 * this.faceId + 2)], ee[3 * (3 * this.faceId + 2) + 1], ee[3 * (3 * this.faceId + 2) + 2]);
+           ie = ie.scale(this.bu), Je = Je.scale(this.bv), oe = oe.scale(1 - this.bu - this.bv), He = new ye.p(ie.x + Je.x + oe.x, ie.y + Je.y + oe.y, ie.z + Je.z + oe.z)
```

#### 26. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L273-L275` → after: `L273-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L273-L275) · [Before (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L273-L275)

```diff
-             OB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId], oB) : oB.zOB(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
-             JB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId + 1], jB) : jB.zOB(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
-             MB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId + 2], yB) : yB.zOB(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]),
+             ie = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId], Ke) : Ke.wie(ee[3 * this.faceId * 3], ee[3 * this.faceId * 3 + 1], ee[3 * this.faceId * 3 + 2]),
+             Je = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId + 1], Ue) : Ue.wie(ee[3 * (3 * this.faceId + 1)], ee[3 * (3 * this.faceId + 1) + 1], ee[3 * (3 * this.faceId + 1) + 2]),
+             oe = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId + 2], Fe) : Fe.wie(ee[3 * (3 * this.faceId + 2)], ee[3 * (3 * this.faceId + 2) + 1], ee[3 * (3 * this.faceId + 2) + 2]),
```

#### 27. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L278)

```diff
-           GB = YB.r.Cross(PB, zB)
+           He = ye.p.Cross(Re, ke)
```

#### 28. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L285-L286` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L285-L286) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L285-L286)

```diff
-               const BB = YB.k.Matrix[0];
-               YB.d.FromArrayToRef(GB, DB, BB), YB.r.TransformNormalToRef(OB, BB, OB)
+               const ee = ye.j.Matrix[0];
+               ye.b.FromArrayToRef(He, be, ee), ye.p.TransformNormalToRef(ie, ee, ie)
```

#### 29. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L290)

```diff
-           BB.nonUniformScaling && (YB.k.Matrix[0].IU(GB), GB = YB.k.Matrix[0], GB.setTranslationFromFloats(0, 0, 0), GB.invert(), GB.transposeToRef(YB.k.Matrix[1]), GB = YB.k.Matrix[1]), YB.r.TransformNormalToRef(OB, GB, OB)
+           ee.nonUniformScaling && (ye.j.Matrix[0].jD(He), He = ye.j.Matrix[0], He.setTranslationFromFloats(0, 0, 0), He.invert(), He.transposeToRef(ye.j.Matrix[1]), He = ye.j.Matrix[1]), ye.p.TransformNormalToRef(ie, He, ie)
```

#### 30. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L293-L294` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L293-L294) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L293-L294)

```diff
-           const OB = YB.k.Xp[0].IU(GB);
-           BB || JB(this.pickedMesh, OB), YB.r.Dot(OB, this.ray.direction) > 0 && GB.negateInPlace()
+           const ie = ye.j.rf[0].jD(He);
+           ee || Je(this.pickedMesh, ie), ye.p.Dot(ie, this.ray.direction) > 0 && He.negateInPlace()
```

#### 31. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L301)

```diff
-         const OB = this.pickedMesh.KDB();
+         const ie = this.pickedMesh.eMe();
```

#### 32. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L305-L308` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L305-L308) · [Before (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L305-L308)

```diff
-         let QB = YB.o.FromArray(GB, 2 * OB[3 * this.faceId]),
-           oB = YB.o.FromArray(GB, 2 * OB[3 * this.faceId + 1]),
-           jB = YB.o.FromArray(GB, 2 * OB[3 * this.faceId + 2]);
-         return QB = QB.scale(this.bu), oB = oB.scale(this.bv), jB = jB.scale(1 - this.bu - this.bv), new YB.o(QB.x + oB.x + jB.x, QB.y + oB.y + jB.y)
+         let Me = ye.n.FromArray(He, 2 * ie[3 * this.faceId]),
+           Ke = ye.n.FromArray(He, 2 * ie[3 * this.faceId + 1]),
+           Ue = ye.n.FromArray(He, 2 * ie[3 * this.faceId + 2]);
+         return Me = Me.scale(this.bu), Ke = Ke.scale(this.bv), Ue = Ue.scale(1 - this.bu - this.bv), new ye.n(Me.x + Ke.x + Ue.x, Me.y + Ke.y + Ue.y)
```

#### 33. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L312)

```diff
-   40972: (BB, OB, GB) => {
+   41084: (ee, ie, He) => {
```

#### 34. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L316)

```diff
-     var YB = GB(40849);
+     var ye = He(40936);
```

#### 35. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L322)

```diff
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(BB), GB = BB.is32Bits ? OB instanceof Uint32Array ? OB : new Uint32Array(OB) : OB instanceof Uint16Array ? OB : new Uint16Array(OB), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, GB, … [truncated]
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(ee), He = ee.is32Bits ? ie instanceof Uint32Array ? ie : new Uint32Array(ie) : ie instanceof Uint16Array ? ie : new Uint16Array(ie), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, He, … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L330)

```diff
-   40938: (BB, OB, GB) => {
+   41051: (ee, ie, He) => {
```

#### 37. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L369)

```diff
-   40905: (BB, OB, GB) => {
+   41e3: (ee, ie, He) => {
```

#### 38. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L371)

```diff
-       d: () => RB
+       e: () => ze
```

#### 39. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L373-L378` → after: `L373-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L373-L378) · [Before (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L373-L378)

```diff
-     var YB = GB(37802),
-       DB = GB(40857),
-       QB = GB(37796),
-       oB = GB(39366),
-       jB = GB(37793),
-       yB = GB(40911);
+     var ye = He(37931),
+       be = He(40945),
+       Me = He(37929),
+       Ke = He(39467),
+       Ue = He(37927),
+       Fe = He(41005);
```

#### 40. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L612-L616` → after: `L612-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L612-L616) · [Before (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L612-L616)

```diff
-     var zB = GB(40914),
-       lB = GB(40890),
-       pB = GB(40837),
-       qB = GB(40870),
-       ZB = GB(40883);
+     var ke = He(41013),
+       qe = He(40985),
+       fe = He(40924),
+       Te = He(40968),
+       pe = He(40979);
```

#### 41. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L625)

```diff
-       if ((0, qB.j)()) {
+       if ((0, Te.m)()) {
```

#### 42. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L652)

```diff
-       get fDB() {
+       get Gbe() {
```

#### 43. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L655)

```diff
-       set fDB(BB) {
+       set Gbe(ee) {
```

#### 44. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L677)

```diff
-         if (BB) return this.isNDCHalfZRange ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, this.fDB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SR … [truncated]
+         if (ee) return this.isNDCHalfZRange ? ee.IS_NDC_HALF_ZRANGE = "" : delete ee.IS_NDC_HALF_ZRANGE, this.Gbe ? ee.USE_REVERSE_DEPTHBUFFER = "" : delete ee.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? ee.USE_EXACT_SRGB_CONVERSIONS = "" : delete ee.USE_EXACT_SR … [truncated]
```

#### 45. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L680)

```diff
-           return this.isNDCHalfZRange && (BB += "#define IS_NDC_HALF_ZRANGE"), this.fDB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
+           return this.isNDCHalfZRange && (ee += "#define IS_NDC_HALF_ZRANGE"), this.Gbe && (ee && (ee += "\n"), ee += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (ee && (ee += "\n"), ee += "#define USE_EXACT_SRGB_CONVERSIONS"), ee
```

#### 46. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L702)

```diff
-         oB.b.Warn(this.name + " context successfully restored."), this.ip.notifyObservers(this), this._contextWasLost = !1
+         Ke.e.Warn(this.name + " context successfully restored."), this.hf.notifyObservers(this), this._contextWasLost = !1
```

#### 47. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L763)

```diff
-             BB && BB(this.customAnimationFrameRequester.wp), delete this.customAnimationFrameRequester.wp
+             ee && ee(this.customAnimationFrameRequester.Qf), delete this.customAnimationFrameRequester.Qf
```

#### 48. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L767)

```diff
-           if (this._frameHandler = 0, (0, qB.j)()) {
+           if (this._frameHandler = 0, (0, Te.m)()) {
```

#### 49. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L796)

```diff
-           (this.lV || !this.renderEvenInBackground && this._windowIsBackground) && (BB = !1), BB && (this.zW(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.AP())
+           (this.RZ || !this.renderEvenInBackground && this._windowIsBackground) && (ee = !1), ee && (this.LO(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.ZR())
```

#### 50. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L814)

```diff
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.wp = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.w … [truncated]
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Qf = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Q … [truncated]
```

#### 51. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L826)

```diff
-         this._depthCullingState.zOffset = this.fDB ? -BB : BB
+         this._depthCullingState.zOffset = this.Gbe ? -ee : ee
```

#### 52. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L830)

```diff
-         return this.fDB ? -BB : BB
+         return this.Gbe ? -ee : ee
```

#### 53. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L833)

```diff
-         this._depthCullingState.zOffsetUnits = this.fDB ? -BB : BB
+         this._depthCullingState.zOffsetUnits = this.Gbe ? -ee : ee
```

#### 54. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L837)

```diff
-         return this.fDB ? -BB : BB
+         return this.Gbe ? -ee : ee
```

#### 55. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L840)

```diff
-         return (0, qB.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
+         return (0, Te.m)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
```

#### 56. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L906)

```diff
-           }), yB && yB(GB, zB)) : (oB.b.Warn(`Failed to load ${BB}, falling back to ${UB}`), this._createTextureBase(UB, OB, nB.invertY, YB, DB, jB, yB, JB, MB, PB, nB, lB, qB, ZB, NB, WB))
+           }), Fe && Fe(He, ke)) : (Ke.e.Warn(`Failed to load ${ee}, falling back to ${We}`), this._createTextureBase(We, ie, de.invertY, ye, be, Ue, Fe, Je, oe, Re, de, qe, Te, pe, Xe, Be))
```

#### 57. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L954)

```diff
-         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, qB.c)() ? document : null
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Te.h)() ? document : null
```

#### 58. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1009)

```diff
-         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new JB, this._stencilStateComposer = new MB, this._stencilState = new PB, this._alphaState = new zB.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
+         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Je, this._stencilStateComposer = new oe, this._stencilState = new Re, this._alphaState = new ke.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1014)

```diff
-         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new YB.b, this.onCanvasFocusObservable = new YB.b, this.onNewSceneAddedObservable = new YB.b, this.onResizeObservable = new YB.b, this.onCanvasPointerOutObservable = new YB.b, this.onE … [truncated]
+         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new ye.d, this.onCanvasFocusObservable = new ye.d, this.onNewSceneAddedObservable = new ye.d, this.onResizeObservable = new ye.d, this.onCanvasPointerOutObservable = new ye.d, this.onE … [truncated]
```

#### 60. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1016-L1017` → after: `L1016-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1016-L1017) · [Before (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1016-L1017)

```diff
-         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
-         const DB = (0, qB.j)() && window.devicePixelRatio || 1,
+         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
+         const be = (0, Te.m)() && window.devicePixelRatio || 1,
```

#### 61. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1024)

```diff
-           const BB = (0, qB.j)() && window.devicePixelRatio || 1,
+           const ee = (0, Te.m)() && window.devicePixelRatio || 1,
```

#### 62. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1028)

```diff
-         if ((0, qB.j)() && (0, qB.c)())
+         if ((0, Te.m)() && (0, Te.h)())
```

#### 63. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1052)

```diff
-         throw (0, lB.j)("engine.rawTexture")
+         throw (0, qe.l)("engine.rawTexture")
```

#### 64. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1055)

```diff
-         throw (0, lB.j)("engine.rawTexture")
+         throw (0, qe.l)("engine.rawTexture")
```

#### 65. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1058)

```diff
-         throw (0, lB.j)("engine.rawTexture")
+         throw (0, qe.l)("engine.rawTexture")
```

#### 66. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1061)

```diff
-         throw (0, lB.j)("engine.rawTexture")
+         throw (0, qe.l)("engine.rawTexture")
```

#### 67. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1069-L1070` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1069-L1070) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1069-L1070)

```diff
-           this.hostInformation.isMobile = -1 !== BB.indexOf("Mobile") || -1 !== BB.indexOf("Mac") && (0, qB.c)() && "ontouchend" in document
-         }, this._checkForMobile(), (0, qB.j)() && window.addEventListener("resize", this._checkForMobile))
+           this.hostInformation.isMobile = -1 !== ee.indexOf("Mobile") || -1 !== ee.indexOf("Mac") && (0, Te.h)() && "ontouchend" in document
+         }, this._checkForMobile(), (0, Te.m)() && window.addEventListener("resize", this._checkForMobile))
```

#### 68. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1115)

```diff
-         if (!ZB.b.loadImage) throw (0, lB.j)("FileTools");
+         if (!pe.b.loadImage) throw (0, qe.l)("FileTools");
```

#### 69. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1126` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1126) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1126)

```diff
-         throw (0, lB.j)("FileTools")
+         throw (0, qe.l)("FileTools")
```

#### 70. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1134` → after: `L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1134) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1134)

```diff
-         this._boundRenderFunction = null, this.lF.notifyObservers(this), this.lF.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
+         this._boundRenderFunction = null, this.Bx.notifyObservers(this), this.Bx.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
```

#### 71. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1139)

```diff
-         throw (0, lB.j)("LoadingScreen")
+         throw (0, qe.l)("LoadingScreen")
```

#### 72. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1153)

```diff
-   40864: (BB, OB, GB) => {
+   40954: (ee, ie, He) => {
```

#### 73. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1155)

```diff
-       b: () => YB
+       d: () => ye
```

#### 74. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1170)

```diff
-   40878: (BB, OB, GB) => {
+   40972: (ee, ie, He) => {
```

#### 75. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1172-L1175` → after: `L1172-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1172-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1172-L1173) · [Before (L1172-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1172-L1175)

```diff
-       c: () => zB,
-       d: () => WB,
-       f: () => pB,
-       j: () => lB,
+       e: () => ke,
+       i: () => Be,
```

#### 76. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1177` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1175) · [Before (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1177)

```diff
-       o: () => RB,
+       n: () => qe,
```

#### 77. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1182` → after: `L1178-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1178-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1178-L1182) · [Before (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1182)

```diff
-       u: () => jB
+       w: () => Re,
+       A: () => Je,
+       D: () => oe,
+       F: () => Fe,
+       I: () => Ue
```

#### 78. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1222)

```diff
-         const DB = OB.dDB();
+         const be = ie.Qbe();
```

#### 79. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1318)

```diff
-         this._cacheMatrix(BB, OB) && (this.engine.setMatrices(this._uniforms[BB], OB.dDB()) || (this._valueCache[BB] = null))
+         this._cacheMatrix(ee, ie) && (this.engine.setMatrices(this._uniforms[ee], ie.Qbe()) || (this._valueCache[ee] = null))
```

#### 80. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1367)

```diff
-     var DB = GB(40883);
+     var be = He(40979);
```

#### 81. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1465)

```diff
-       return NB((0, DB.d)(BB, GB, YB), OB, QB, oB)
+       return Xe((0, be.e)(ee, He, ye), ie, Me, Ke)
```

#### 82. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1474)

```diff
-         throw new Error(`Something went wrong while creating a gl ${OB} shader object. gl error=${DB}, gl isContextLost=${GB.isContextLost()}, _contextWasLost=${YB}`)
+         throw new Error(`Something went wrong while creating a gl ${ie} shader object. gl error=${be}, gl isContextLost=${He.isContextLost()}, _contextWasLost=${ye}`)
```

#### 83. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1492)

```diff
-   40849: (BB, OB, GB) => {
+   40936: (ee, ie, He) => {
```

#### 84. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1496-L1501` → after: `L1496-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1496-L1501) · [Before (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1496-L1501)

```diff
-     var YB = GB(40857),
-       DB = GB(40878),
-       QB = GB(40905),
-       oB = GB(40918),
-       jB = GB(39366),
-       yB = GB(40870);
+     var ye = He(40945),
+       be = He(40972),
+       Me = He(41e3),
+       Ke = He(41022),
+       Ue = He(39467),
+       Fe = He(40968);
```

#### 85. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1542-L1549` → after: `L1542-L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1542-L1549) · [Before (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1542-L1549)

```diff
-     var zB = GB(40920),
-       lB = GB(40932),
-       pB = GB(40938),
-       qB = GB(40837),
-       ZB = GB(40883),
-       NB = GB(40868),
-       RB = GB(40947),
-       WB = GB(40914);
+     var ke = He(41030),
+       qe = He(41044),
+       fe = He(41051),
+       Te = He(40924),
+       pe = He(40979),
+       Xe = He(40960),
+       ze = He(41059),
+       Be = He(41013);
```

#### 86. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1551)

```diff
-     class VB extends QB.d {
+     class ge extends Me.e {
```

#### 87. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1568)

```diff
-         return this.Pq > 1 && !this.disableUniformBuffers
+         return this.dT > 1 && !this.disableUniformBuffers
```

#### 88. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1615)

```diff
-               (0, DB.s)(this._gl)
+               (0, be.F)(this._gl)
```

#### 89. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1617)

```diff
-               BB.preventDefault(), this._contextWasLost = !0, (0, DB.s)(this._gl), jB.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
+               ee.preventDefault(), this._contextWasLost = !0, (0, be.F)(this._gl), Ue.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
```

#### 90. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1641-L1644` → after: `L1641-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1641-L1644) · [Before (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1641-L1644)

```diff
-         this._shaderProcessor = this.Pq > 1 ? new PB : new JB;
-         const oB = `Babylon.js v${VB.Version}`;
-         jB.b.Log(oB + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", oB);
-         const yB = (0, DB.u)(this._gl);
+         this._shaderProcessor = this.dT > 1 ? new Re : new Je;
+         const Ke = `Babylon.js v${ge.Version}`;
+         Ue.e.Log(Ke + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Ke);
+         const Fe = (0, be.I)(this._gl);
```

#### 91. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1727)

```diff
-         if (this._caps.blendParametersPerTarget = !!OB, this._alphaState = new WB.e(this._caps.blendParametersPerTarget), OB && (this._gl.blendEquationSeparateIndexed = OB.blendEquationSeparateiOES.bind(OB), this._gl.blendEquationIndexed = OB.blendEquationiOES.bind(OB), this._gl. … [truncated]
+         if (this._caps.blendParametersPerTarget = !!ie, this._alphaState = new Be.d(this._caps.blendParametersPerTarget), ie && (this._gl.blendEquationSeparateIndexed = ie.blendEquationSeparateiOES.bind(ie), this._gl.blendEquationIndexed = ie.blendEquationiOES.bind(ie), this._gl. … [truncated]
```

#### 92. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1863)

```diff
-               void 0 !== GB && (0, RB.m)(GB) ? (VB._TempClearColorUint32[0] = 255 * BB.r, VB._TempClearColorUint32[1] = 255 * BB.g, VB._TempClearColorUint32[2] = 255 * BB.b, VB._TempClearColorUint32[3] = 255 * BB.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, VB._TempClearColorUin … [truncated]
+               void 0 !== He && (0, ze.k)(He) ? (ge._TempClearColorUint32[0] = 255 * ee.r, ge._TempClearColorUint32[1] = 255 * ee.g, ge._TempClearColorUint32[2] = 255 * ee.b, ge._TempClearColorUint32[3] = 255 * ee.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, ge._TempClearColorUin … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1868)

```diff
-         GB && (this.fDB ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), oB |= this._gl.DEPTH_BUFFER_BIT), YB && (this._gl.clearStencil(DB), oB |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(oB)
+         He && (this.Gbe ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Ke |= this._gl.DEPTH_BUFFER_BIT), ye && (this._gl.clearStencil(be), Ke |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Ke)
```

#### 94. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1872` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1872) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1872)

```diff
-           const GB = (0, RB.m)(YB),
+           const He = (0, ze.k)(ye),
```

#### 95. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1882)

```diff
-         super.AP(), this._badOS && this.flushFramebuffer()
+         super.ZR(), this._badOS && this.flushFramebuffer()
```

#### 96. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1900)

```diff
-           BB.is3D && (BB.texture.width === MB.width && BB.texture.height === MB.height && BB.texture.depth === MB.depth || jB.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
+           ee.is3D && (ee.texture.width === oe.width && ee.texture.height === oe.height && ee.texture.depth === oe.depth || Ue.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
```

#### 97. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1964-L1965` → after: `L1964-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1964-L1965) · [Before (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1964-L1965)

```diff
-         const YB = new zB.b(GB);
-         return this.bindArrayBuffer(YB), "number" !== typeof BB ? BB instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(BB), OB), YB.CP = 4 * BB.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, OB), YB.CP = BB.byteLength) : (this._gl.bufferDa … [truncated]
+         const ye = new ke.d(He);
+         return this.bindArrayBuffer(ye), "number" !== typeof ee ? ee instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(ee), ie), ye.bk = 4 * ee.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, ee, ie), ye.bk = ee.byteLength) : (this._gl.bufferDa … [truncated]
```

#### 98. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L1975)

```diff
-           DB = new zB.b(YB);
+           be = new ke.d(ye);
```

#### 99. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2162)

```diff
-         OB && OB.program && (OB.program.__SPECTOR_rebuildProgram = null, (0, NB.k)(OB), this._gl && (this._currentProgram === OB.program && this._setProgram(null), this._gl.deleteProgram(OB.program)))
+         ie && ie.program && (ie.program.__SPECTOR_rebuildProgram = null, (0, Xe.m)(ie), this._gl && (this._currentProgram === ie.program && this._setProgram(null), this._gl.deleteProgram(ie.program)))
```

#### 100. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2165)

```diff
-         return (0, ZB.h)(BB, this.isNDCHalfZRange, this.fDB, this.useExactSrgbConversions)
+         return (0, pe.f)(ee, this.isNDCHalfZRange, this.Gbe, this.useExactSrgbConversions)
```

#### 101. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2170-L2171` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2170-L2171) · [Before (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2170-L2171)

```diff
-         const lB = "string" === typeof BB ? BB : BB.vertexToken || BB.vertexSource || BB.vertexElement || BB.vertex,
-           pB = "string" === typeof BB ? BB : BB.fragmentToken || BB.fragmentSource || BB.fragmentElement || BB.fragment,
+         const qe = "string" === typeof ee ? ee : ee.vertexToken || ee.vertexSource || ee.vertexElement || ee.vertex,
+           fe = "string" === typeof ee ? ee : ee.fragmentToken || ee.fragmentSource || ee.fragmentElement || ee.fragment,
```

#### 102. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2181` → after: `L2181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2181) · [Before (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2181)

```diff
-         this._gl && (0, DB.u)(this._gl);
+         this._gl && (0, be.I)(this._gl);
```

#### 103. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2190-L2191` → after: `L2190-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2190-L2191) · [Before (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2190-L2191)

```diff
-         const oB = (0, DB.u)(this._gl);
-         return oB._contextWasLost = this._contextWasLost, oB.validateShaderPrograms = this.validateShaderPrograms, (0, DB.q)(BB, OB, GB, YB || this._gl, QB)
+         const Ke = (0, be.I)(this._gl);
+         return Ke._contextWasLost = this._contextWasLost, Ke.validateShaderPrograms = this.validateShaderPrograms, (0, be.A)(ee, ie, He, ye || this._gl, Me)
```

#### 104. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2195-L2196` → after: `L2195-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2195-L2196) · [Before (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2195-L2196)

```diff
-         const jB = (0, DB.u)(this._gl);
-         return jB._contextWasLost = this._contextWasLost, jB.validateShaderPrograms = this.validateShaderPrograms, (0, DB.r)(BB, OB, GB, YB, QB || this._gl, oB)
+         const Ue = (0, be.I)(this._gl);
+         return Ue._contextWasLost = this._contextWasLost, Ue.validateShaderPrograms = this.validateShaderPrograms, (0, be.D)(ee, ie, He, ye, Me || this._gl, Ke)
```

#### 105. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2203)

```diff
-           (0, DB.u)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
+           (0, be.I)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
```

#### 106. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2205` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2205) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2205)

```diff
-         const OB = (0, DB.p)(this._gl, BB);
+         const ie = (0, be.w)(this._gl, ee);
```

#### 107. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2211)

```diff
-         return (0, DB.f)(BB, this._gl, this.validateShaderPrograms)
+         return (0, be.k)(ee, this._gl, this.validateShaderPrograms)
```

#### 108. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2214-L2215` → after: `L2214-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2214-L2215) · [Before (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2214-L2215)

```diff
-         const zB = (0, DB.u)(this._gl);
-         return zB._contextWasLost = this._contextWasLost, zB.validateShaderPrograms = this.validateShaderPrograms, zB._createShaderProgramInjection = this._createShaderProgram.bind(this), zB.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), zB.createShader … [truncated]
+         const ke = (0, be.I)(this._gl);
+         return ke._contextWasLost = this._contextWasLost, ke.validateShaderPrograms = this.validateShaderPrograms, ke._createShaderProgramInjection = this._createShaderProgram.bind(this), ke.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), ke.createShader … [truncated]
```

#### 109. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2219)

```diff
-         return (0, DB.c)(BB, OB, GB, YB, QB)
+         return (0, be.e)(ee, ie, He, ye, Me)
```

#### 110. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2222)

```diff
-         return !this._isDisposed && (0, DB.j)(BB, this._gl, this.validateShaderPrograms)
+         return !this._isDisposed && (0, be.n)(ee, this._gl, this.validateShaderPrograms)
```

#### 111. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2225` → after: `L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2225) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2225)

```diff
-         (0, DB.d)(BB, OB)
+         (0, be.i)(ee, ie)
```

#### 112. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2244` → after: `L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2244) · [Before (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2244)

```diff
-         (BB = null !== BB && (0, oB.b)(BB) ? BB.effect : BB) && BB !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(BB), this._currentEffect = BB, BB.onBind && BB.onBind(BB), BB._onBindObservable && BB._onBindObservable.notifyObse … [truncated]
+         (ee = null !== ee && (0, Ke.e)(ee) ? ee.effect : ee) && ee !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(ee), this._currentEffect = ee, ee.onBind && ee.onBind(ee), ee._onBindObservable && ee._onBindObservable.notifyObse … [truncated]
```

#### 113. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2407-L2409` → after: `L2407-L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2407-L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2407-L2409) · [Before (L2407-L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2407-L2409)

```diff
-         void 0 !== OB && "object" === typeof OB ? (GB = !!OB.generateMipMaps, QB = !!OB.createMipMaps, oB = void 0 === OB.type ? 0 : OB.type, yB = void 0 === OB.samplingMode ? 3 : OB.samplingMode, JB = void 0 === OB.format ? 5 : OB.format, MB = void 0 !== OB.useSRGBBuffer && OB.u … [truncated]
-         const ZB = (0, RB.f)(JB),
-           NB = (0, RB.b)(JB),
+         void 0 !== ie && "object" === typeof ie ? (He = !!ie.generateMipMaps, Me = !!ie.createMipMaps, Ke = void 0 === ie.type ? 0 : ie.type, Fe = void 0 === ie.samplingMode ? 3 : ie.samplingMode, Je = void 0 === ie.format ? 5 : ie.format, oe = void 0 !== ie.useSRGBBuffer && ie.u … [truncated]
+         const pe = (0, ze.i)(Je),
+           Xe = (0, ze.e)(Je),
```

#### 114. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2427` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2427) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2427)

```diff
-         if (WB.texParameteri(kB, WB.TEXTURE_MAG_FILTER, fB.mag), WB.texParameteri(kB, WB.TEXTURE_MIN_FILTER, fB.min), WB.texParameteri(kB, WB.TEXTURE_WRAP_S, WB.CLAMP_TO_EDGE), WB.texParameteri(kB, WB.TEXTURE_WRAP_T, WB.CLAMP_TO_EDGE), ZB && this.Pq > 1 && (0 === lB ? (WB.texPara … [truncated]
+         if (Be.texParameteri(Ze, Be.TEXTURE_MAG_FILTER, te.mag), Be.texParameteri(Ze, Be.TEXTURE_MIN_FILTER, te.min), Be.texParameteri(Ze, Be.TEXTURE_WRAP_S, Be.CLAMP_TO_EDGE), Be.texParameteri(Ze, Be.TEXTURE_WRAP_T, Be.CLAMP_TO_EDGE), pe && this.dT > 1 && (0 === qe ? (Be.texPara … [truncated]
```

#### 115. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2429` → after: `L2429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2429) · [Before (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2429)

```diff
-           if (BB = (0, RB.f)(AB.format) ? this._setupFramebufferDepthAttachments((0, RB.b)(AB.format), 19 !== AB.format, AB.width, AB.height, PB, AB.format, !0) : this._createRenderBuffer(AB.width, AB.height, PB, -1, this._getRGBABufferInternalSizedFormat(AB.type, AB.format, AB._ … [truncated]
+           if (ee = (0, ze.i)(Ee.format) ? this._setupFramebufferDepthAttachments((0, ze.e)(Ee.format), 19 !== Ee.format, Ee.width, Ee.height, Re, Ee.format, !0) : this._createRenderBuffer(Ee.width, Ee.height, Re, -1, this._getRGBABufferInternalSizedFormat(Ee.type, Ee.format, Ee._ … [truncated]
```

#### 116. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2437)

```diff
-         return BB && this._caps.supportSRGBBuffers && (this.Pq > 1 || OB)
+         return ee && this._caps.supportSRGBBuffers && (this.dT > 1 || ie)
```

#### 117. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2474)

```diff
-         return 1 === this.Pq ? (GB = this._getInternalFormat(BB, OB), YB = GB) : (GB = this._getInternalFormat(BB, !1), YB = this._getRGBABufferInternalSizedFormat(0, BB, OB)), {
+         return 1 === this.dT ? (He = this._getInternalFormat(ee, ie), ye = He) : (He = this._getInternalFormat(ee, !1), ye = this._getRGBABufferInternalSizedFormat(0, ee, ie)), {
```

#### 118. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2623-L2624` → after: `L2623-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2623-L2624) · [Before (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2623-L2624)

```diff
-           PB = Math.min(MB, this.needPOTTextures ? (0, lB.f)(YB.width, MB) : YB.width),
-           zB = Math.min(MB, this.needPOTTextures ? (0, lB.f)(YB.height, MB) : YB.height),
+           Re = Math.min(oe, this.needPOTTextures ? (0, qe.h)(ye.width, oe) : ye.width),
+           ke = Math.min(oe, this.needPOTTextures ? (0, qe.h)(ye.height, oe) : ye.height),
```

#### 119. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2634` → after: `L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2634) · [Before (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2634)

```diff
-         return this.Pq > 1 ? 15 === BB ? DB = YB.DEPTH_COMPONENT16 : 16 === BB ? DB = YB.DEPTH_COMPONENT24 : 17 === BB || 13 === BB ? DB = GB ? YB.DEPTH24_STENCIL8 : YB.DEPTH_COMPONENT24 : 14 === BB ? DB = YB.DEPTH_COMPONENT32F : 18 === BB && (DB = GB ? YB.DEPTH32F_STENCIL8 : YB. … [truncated]
+         return this.dT > 1 ? 15 === ee ? be = ye.DEPTH_COMPONENT16 : 16 === ee ? be = ye.DEPTH_COMPONENT24 : 17 === ee || 13 === ee ? be = He ? ye.DEPTH24_STENCIL8 : ye.DEPTH_COMPONENT24 : 14 === ee ? be = ye.DEPTH_COMPONENT32F : 18 === ee && (be = He ? ye.DEPTH32F_STENCIL8 : ye. … [truncated]
```

#### 120. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2668` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2668) · [Before (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2668)

```diff
-         this._currentProgram !== BB && ((0, DB.o)(BB, this._gl), this._currentProgram = BB)
+         this._currentProgram !== ee && ((0, be.s)(ee, this._gl), this._currentProgram = ee)
```

#### 121. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2690)

```diff
-           if (this._activateCurrentTexture(), OB && OB.isMultiview) throw jB.b.Error(["_bindTextureDirectly called with a multiview texture!", BB, OB]), "_bindTextureDirectly called with a multiview texture!";
+           if (this._activateCurrentTexture(), ie && ie.isMultiview) throw Ue.e.Error(["_bindTextureDirectly called with a multiview texture!", ee, ie]), "_bindTextureDirectly called with a multiview texture!";
```

#### 122. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2702)

```diff
-         for (let BB = 0; BB < this._maxSimultaneousTextures; BB++) this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Pq > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
+         for (let ee = 0; ee < this._maxSimultaneousTextures; ee++) this._activeChannel = ee, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.dT > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
```

#### 123. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2725` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2725) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2725)

```diff
-         if (!OB) return null != this._boundTexturesCache[BB] && (this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Pq > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
+         if (!ie) return null != this._boundTexturesCache[ee] && (this._activeChannel = ee, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.dT > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
```

#### 124. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L2777)

```diff
-         (0, yB.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
+         (0, Fe.m)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
```

#### 125. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3088` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3088) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3088)

```diff
-           if (oB.length < MB) return jB.b.Error(`Data buffer is too small to store the read pixels (${oB.length} should be more than ${MB})`), Promise.resolve(oB)
+           if (Ke.length < oe) return Ue.e.Error(`Data buffer is too small to store the read pixels (${Ke.length} should be more than ${oe})`), Promise.resolve(Ke)
```

#### 126. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3101` → after: `L3101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3101) · [Before (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3101)

```diff
-           const BB = QB.d._CreateCanvas(1, 1),
+           const ee = Me.e._CreateCanvas(1, 1),
```

#### 127. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3111` → after: `L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3111) · [Before (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3111)

```diff
-           const BB = QB.d._CreateCanvas(1, 1),
+           const ee = Me.e._CreateCanvas(1, 1),
```

#### 128. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3184` → after: `L3184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3184) · [Before (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3184)

```diff
-     }], VB._ConcatenateShader = ZB.d, VB._IsSupported = null, VB._HasMajorPerformanceCaveat = null
+     }], ge._ConcatenateShader = pe.e, ge._IsSupported = null, ge._HasMajorPerformanceCaveat = null
```

#### 129. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3186` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3186) · [Before (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3186)

```diff
-   41201: (BB, OB, GB) => {
+   41292: (ee, ie, He) => {
```

#### 130. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3189)

```diff
-         c: () => DB
+         d: () => be
```

#### 131. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3197)

```diff
-   41197: (BB, OB, GB) => {
+   41289: (ee, ie, He) => {
```

#### 132. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3199-L3201` → after: `L3199-L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3199-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3199-L3201) · [Before (L3199-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3199-L3201)

```diff
-       d: () => YB,
-       h: () => QB,
-       l: () => DB
+       e: () => ye,
+       g: () => Me,
+       j: () => be
```

#### 133. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3222` → after: `L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3222) · [Before (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3222)

```diff
-   41190: (BB, OB, GB) => {
+   41286: (ee, ie, He) => {
```

#### 134. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3225-L3226` → after: `L3225-L3226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3225-L3226) · [Before (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3225-L3226)

```diff
-       d: () => oB,
-       f: () => jB
+       f: () => Ke,
+       i: () => Ue
```

#### 135. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3228` → after: `L3228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3228) · [Before (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3228)

```diff
-     var YB = GB(37778);
+     var ye = He(37917);
```

#### 136. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3238)

```diff
-         super(BB, OB), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new YB.o(GB, DB)
+         super(ee, ie), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new ye.n(He, be)
```

#### 137. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3254` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3254) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3254)

```diff
-   41211: (BB, OB, GB) => {
+   41301: (ee, ie, He) => {
```

#### 138. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3265` → after: `L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3265) · [Before (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3265)

```diff
-   40837: (BB, OB, GB) => {
+   40924: (ee, ie, He) => {
```

#### 139. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3269-L3270` → after: `L3269-L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3269-L3270) · [Before (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3269-L3270)

```diff
-     var YB, DB = GB(37802),
-       QB = GB(40844);
+     var ye, be = He(37931),
+       Me = He(40929);
```

#### 140. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3295)

```diff
-         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
+         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
```

#### 141. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3372)

```diff
-   40947: (BB, OB, GB) => {
+   41059: (ee, ie, He) => {
```

#### 142. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3389-L3390` → after: `L3389-L3390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3389-L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3389-L3390) · [Before (L3389-L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3389-L3390)

```diff
-       b: () => oB,
-       f: () => YB,
+       e: () => Ke,
+       i: () => ye,
```

#### 143. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3392` → after: `L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3392) · [Before (L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3392)

```diff
-       m: () => QB
+       k: () => Me
```

#### 144. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3395` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3395) · [Before (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3395)

```diff
-   40844: (BB, OB, GB) => {
+   40929: (ee, ie, He) => {
```

#### 145. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3453` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3453) · [Before (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3453)

```diff
-   41127: (BB, OB, GB) => {
+   41227: (ee, ie, He) => {
```

#### 146. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3461` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3461) · [Before (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3461)

```diff
-   40918: (BB, OB, GB) => {
+   41022: (ee, ie, He) => {
```

#### 147. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3466` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3466) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3466)

```diff
-       b: () => YB
+       e: () => ye
```

#### 148. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3469` → after: `L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3469) · [Before (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3469)

```diff
-   41323: (BB, OB, GB) => {
+   41446: (ee, ie, He) => {
```

#### 149. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3471` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3471) · [Before (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3471)

```diff
-       d: () => DB
+       b: () => be
```

#### 150. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3473)

```diff
-     var YB = GB(40899);
+     var ye = He(40995);
```

#### 151. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3491` → after: `L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3491) · [Before (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3491)

```diff
-             OB.Lp().onEndFrameObservable.addOnce((() => {
+             ie.Nf().onEndFrameObservable.addOnce((() => {
```

#### 152. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3500` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3500) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3500)

```diff
-   40868: (BB, OB, GB) => {
+   40960: (ee, ie, He) => {
```

#### 153. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3502-L3503` → after: `L3502-L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3502-L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3502-L3503) · [Before (L3502-L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3502-L3503)

```diff
-       e: () => PB,
-       g: () => lB,
+       c: () => Re,
+       f: () => qe,
```

#### 154. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3505` → after: `L3505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3505) · [Before (L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3505)

```diff
-       k: () => MB
+       m: () => oe
```

#### 155. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3507-L3512` → after: `L3507-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3507-L3512) · [Before (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3507-L3512)

```diff
-     var YB = GB(40870),
-       DB = GB(40878),
-       QB = GB(40864),
-       oB = GB(39366),
-       jB = GB(40896),
-       yB = GB(40883);
+     var ye = He(40968),
+       be = He(40972),
+       Me = He(40954),
+       Ke = He(39467),
+       Ue = He(40988),
+       Fe = He(40979);
```

#### 156. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3515` → after: `L3515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3515) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3515)

```diff
-       return (0, DB.u)(OB).cachedPipelines[BB]
+       return (0, be.I)(ie).cachedPipelines[ee]
```

#### 157. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3522` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3522) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3522)

```diff
-         const BB = (0, DB.u)(GB),
+         const ee = (0, be.I)(He),
```

#### 158. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3530-L3531` → after: `L3530-L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3530-L3531) · [Before (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3530-L3531)

```diff
-       const PB = (0, YB.j)() ? oB?.getHostDocument() : null;
-       JB = "string" === typeof OB ? OB : "string" === typeof OB.vertexSource ? "source:" + OB.vertexSource : "string" === typeof OB.vertexElement ? PB?.getElementById(OB.vertexElement) || OB.vertexElement : OB.vertex || OB, MB = "string" === typeof OB ? OB : "string" === typeof O … [truncated]
+       const Re = (0, ye.m)() ? Ke?.getHostDocument() : null;
+       Je = "string" === typeof ie ? ie : "string" === typeof ie.vertexSource ? "source:" + ie.vertexSource : "string" === typeof ie.vertexElement ? Re?.getElementById(ie.vertexElement) || ie.vertexElement : ie.vertex || ie, oe = "string" === typeof ie ? ie : "string" === typeof i … [truncated]
```

#### 159. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3536-L3537` → after: `L3536-L3537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3536-L3537) · [Before (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3536-L3537)

```diff
-             (0, jB.f)(BB), (0, jB.i)(YB, BB, ((YB, MB) => {
-               yB && (yB._vertexSourceCodeBeforeMigration = MB), GB && (YB = GB("vertex", YB)), BB.isFragment = !0, (0, jB.i)(JB, BB, ((oB, JB) => {
+             (0, Ue.i)(ee), (0, Ue.o)(ye, ee, ((ye, oe) => {
+               Fe && (Fe._vertexSourceCodeBeforeMigration = oe), He && (ye = He("vertex", ye)), ee.isFragment = !0, (0, Ue.o)(Je, ee, ((Ke, Je) => {
```

#### 160. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3539` → after: `L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3539) · [Before (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3539)

```diff
-                 const MB = (0, jB.b)(YB, oB, BB);
+                 const oe = (0, Ue.e)(ye, Ke, ee);
```

#### 161. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3567` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3567) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3567)

```diff
-         return void DB((0, YB.b)(BB))
+         return void be((0, ye.e)(ee))
```

#### 162. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3573` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3573) · [Before (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3573)

```diff
-       const JB = QB.b.GetShadersStore(oB);
+       const Je = Me.d.GetShadersStore(Ke);
```

#### 163. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3577` → after: `L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3577) · [Before (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3577)

```diff
-       if (MB = "." === BB[0] || "/" === BB[0] || BB.indexOf("http") > -1 ? BB : QB.b.GetShadersRepository(oB) + BB, !(jB = jB || yB.i)) throw new Error("loadFileInjection is not defined");
+       if (oe = "." === ee[0] || "/" === ee[0] || ee.indexOf("http") > -1 ? ee : Me.d.GetShadersRepository(Ke) + ee, !(Ue = Ue || Fe.i)) throw new Error("loadFileInjection is not defined");
```

#### 164. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3582)

```diff
-         const QB = BB.context ? (0, DB.u)(BB.context) : null;
+         const Me = ee.context ? (0, be.I)(ee.context) : null;
```

#### 165. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3591` → after: `L3591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3591) · [Before (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3591)

```diff
-         throw oB.b.Error("Error compiling effect"), QB
+         throw Ke.e.Error("Error compiling effect"), Me
```

#### 166. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3595)

```diff
-   40857: (BB, OB, GB) => {
+   40945: (ee, ie, He) => {
```

#### 167. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3599-L3603` → after: `L3599-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3599-L3603) · [Before (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3599-L3603)

```diff
-     var YB = GB(37802),
-       DB = GB(39366),
-       QB = GB(40864),
-       oB = GB(40868),
-       jB = GB(40899);
+     var ye = He(37931),
+       be = He(39467),
+       Me = He(40954),
+       Ke = He(40960),
+       Ue = He(40995);
```

#### 168. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3606` → after: `L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3606) · [Before (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3606)

```diff
-         return QB.b.ShadersRepository
+         return Me.d.ShadersRepository
```

#### 169. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3609` → after: `L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3609) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3609)

```diff
-         QB.b.ShadersRepository = BB
+         Me.d.ShadersRepository = ee
```

#### 170. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3615` → after: `L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3615) · [Before (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3615)

```diff
-         return this._onBindObservable || (this._onBindObservable = new YB.b), this._onBindObservable
+         return this._onBindObservable || (this._onBindObservable = new ye.d), this._onBindObservable
```

#### 171. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3631` → after: `L3631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3631) · [Before (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3631)

```diff
-         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new YB.b, this.onErrorObservable = new YB.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
+         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new ye.d, this.onErrorObservable = new ye.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
```

#### 172. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3644-L3645` → after: `L3644-L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3644-L3645) · [Before (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3644-L3645)

```diff
-             GB = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${OB}`);
-           BB && "string" === typeof BB.stack && (GB.stack = `${GB.message}\nCaused by: ${BB.stack}`), this._processCompilationErrors(GB)
+             He = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${ie}`);
+           ee && "string" === typeof ee.stack && (He.stack = `${He.message}\nCaused by: ${ee.stack}`), this._processCompilationErrors(He)
```

#### 173. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3647` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3647) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3647)

```diff
-           this._onReleaseEffectsObserver = null, this.lV || this.dispose(!0)
+           this._onReleaseEffectsObserver = null, this.RZ || this.dispose(!0)
```

#### 174. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3663-L3664` → after: `L3663-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3663-L3664) · [Before (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3663-L3664)

```diff
-           shadersRepository: QB.b.GetShadersRepository(this._shaderLanguage),
-           includesShadersStore: QB.b.GetIncludesShadersStore(this._shaderLanguage),
+           shadersRepository: Me.d.GetShadersRepository(this._shaderLanguage),
+           includesShadersStore: Me.d.GetIncludesShadersStore(this._shaderLanguage),
```

#### 175. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3669` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3669) · [Before (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3669)

```diff
-           fDB: this._engine.fDB,
+           Gbe: this._engine.Gbe,
```

#### 176. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3672` → after: `L3672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3672) · [Before (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3672)

```diff
-         (0, oB.e)(DB, this.name, this._processFinalCode, ((BB, GB) => {
+         (0, Ke.c)(be, this.name, this._processFinalCode, ((ee, He) => {
```

#### 177. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3687` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3687) · [Before (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3687)

```diff
-         return !!this._engine.lV || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
+         return !!this._engine.RZ || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
```

#### 178. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3742)

```diff
-         (0, jB.d)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (OB => {
+         (0, Ue.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (ie => {
```

#### 179. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3775)

```diff
-             fDB: this._engine.fDB,
+             Gbe: this._engine.Gbe,
```

#### 180. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3788` → after: `L3788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3788) · [Before (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3788)

```diff
-           const BB = this.Lp().scenes;
+           const ee = this.Nf().scenes;
```

#### 181. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3812-L3813` → after: `L3812-L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3812-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3812-L3813) · [Before (L3812-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3812-L3813)

```diff
-           this._pipelineContext = (0, oB.g)({
-             existingPipelineContext: BB ? OB : null,
+           this._pipelineContext = (0, Ke.f)({
+             existingPipelineContext: ee ? ie : null,
```

#### 182. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3840` → after: `L3840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3840) · [Before (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3840)

```diff
-             YB.length >= OB && (DB = `Offending line [${OB}] in ${GB?"fragment":"vertex"} code: ${YB[OB-1]}`)
+             ye.length >= ie && (be = `Offending line [${ie}] in ${He?"fragment":"vertex"} code: ${ye[ie-1]}`)
```

#### 183. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3850)

```diff
-         if (DB.b.Error("Unable to compile effect:"), DB.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), DB.b.Error(`Attributes: ${GB.join(" ")}`), DB.b.Error("Defines:\n" + this.defines), yB.LogShaderCodeOnCompilationError) {
+         if (be.e.Error("Unable to compile effect:"), be.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), be.e.Error(`Attributes: ${He.join(" ")}`), be.e.Error("Defines:\n" + this.defines), Fe.LogShaderCodeOnCompilationError) {
```

#### 184. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3853` → after: `L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3853) · [Before (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3853)

```diff
-           this._pipelineContext?._getVertexShaderCode() && ([BB, OB] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), BB && (DB.b.Error("Vertex code:"), DB.b.Error(BB))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
+           this._pipelineContext?._getVertexShaderCode() && ([ee, ie] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), ee && (be.e.Error("Vertex code:"), be.e.Error(ee))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
```

#### 185. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3855)

```diff
-         DB.b.Error("Error: " + this._compilationError);
+         be.e.Error("Error: " + this._compilationError);
```

#### 186. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3862` → after: `L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L3862) · [Before (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L3862)

```diff
-         OB && (this._pipelineContext = OB, this._isReady = !0, QB()), YB ? (this._pipelineContext = null, YB.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, DB.b.Error("Trying next fallback."), this.defines = YB.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
+         ie && (this._pipelineContext = ie, this._isReady = !0, Me()), ye ? (this._pipelineContext = null, ye.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, be.e.Error("Trying next fallback."), this.defines = ye.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
```

#### 187. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4022` → after: `L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4022) · [Before (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4022)

```diff
-         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, oB.k)(this._pipelineContext), this._engine._r … [truncated]
+         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Ke.m)(this._pipelineContext), this._engine._r … [truncated]
```

#### 188. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4026` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4026) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4026)

```diff
-         OB && (QB.b.GetShadersStore(YB)[`${BB}PixelShader`] = OB), GB && (QB.b.GetShadersStore(YB)[`${BB}VertexShader`] = GB)
+         ie && (Me.d.GetShadersStore(ye)[`${ee}PixelShader`] = ie), He && (Me.d.GetShadersStore(ye)[`${ee}VertexShader`] = He)
```

#### 189. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4032)

```diff
-     yB.LogShaderCodeOnCompilationError = !0, yB.PersistentMode = !1, yB.AutomaticallyClearCodeCache = !1, yB._UniqueIdSeed = 0, yB._BaseCache = {}, yB.ShadersStore = QB.b.ShadersStore, yB.IncludesShadersStore = QB.b.IncludesShadersStore
+     Fe.LogShaderCodeOnCompilationError = !0, Fe.PersistentMode = !1, Fe.AutomaticallyClearCodeCache = !1, Fe._UniqueIdSeed = 0, Fe._BaseCache = {}, Fe.ShadersStore = Me.d.ShadersStore, Fe.IncludesShadersStore = Me.d.IncludesShadersStore
```

#### 190. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4034` → after: `L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4034) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4034)

```diff
-   41164: (BB, OB, GB) => {
+   41264: (ee, ie, He) => {
```

#### 191. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4036-L4038` → after: `L4036-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4036-L4038) · [Before (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4036-L4038)

```diff
-       c: () => MB,
-       f: () => nB,
-       j: () => SB
+       b: () => oe,
+       e: () => de,
+       i: () => Oe
```

#### 192. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4040-L4046` → after: `L4040-L4046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4040-L4046) · [Before (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4040-L4046)

```diff
-     var YB = GB(40857),
-       DB = GB(37778),
-       QB = GB(37816),
-       oB = GB(41136);
-     const jB = new DB.d,
-       yB = new DB.d,
-       JB = new DB.d,
+     var ye = He(40945),
+       be = He(37917),
+       Me = He(37946),
+       Ke = He(41238);
+     const Ue = new be.b,
+       Fe = new be.b,
+       Je = new be.b,
```

#### 193. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4048` → after: `L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4048) · [Before (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4048)

```diff
-         JF: () => {},
+         Xx: () => {},
```

#### 194. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4053-L4054` → after: `L4053-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4053-L4054) · [Before (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4053-L4054)

```diff
-       const YB = GB.dDB(),
-         DB = OB.dDB();
+       const ye = He.Qbe(),
+         be = ie.Qbe();
```

#### 195. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4060` → after: `L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4060) · [Before (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4060)

```diff
-       return (0, QB.m)(OB, yB), PB(BB, yB, JB), (0, QB.m)(JB, GB), GB
+       return (0, Me.e)(ie, Fe), Re(ee, Fe, Je), (0, Me.e)(Je, He), He
```

#### 196. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4065-L4066` → after: `L4065-L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4065-L4066) · [Before (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4065-L4066)

```diff
-       const YB = GB.dDB(),
-         DB = OB.dDB();
+       const ye = He.Qbe(),
+         be = ie.Qbe();
```

#### 197. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4072` → after: `L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4072) · [Before (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4072)

```diff
-       return (0, QB.t)(lB(BB, OB, YB), GB, YB), YB
+       return (0, Me.p)(qe(ee, ie, ye), He, ye), ye
```

#### 198. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4076` → after: `L4076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4076) · [Before (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4076)

```diff
-       return (0, QB.m)(GB, yB), (0, QB.t)(OB, yB, JB), PB(BB, JB, yB), lB(BB, GB, JB), (0, QB.t)(yB, JB, YB), YB
+       return (0, Me.e)(He, Fe), (0, Me.p)(ie, Fe, Je), Re(ee, Je, Fe), qe(ee, He, Je), (0, Me.p)(Fe, Je, ye), ye
```

#### 199. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4080` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4080) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4080)

```diff
-       return (0, QB.m)(GB, yB), (0, QB.t)(OB, yB, JB), PB(BB, JB, yB), pB(BB, YB, DB, JB), (0, QB.t)(yB, JB, oB), oB
+       return (0, Me.e)(He, Fe), (0, Me.p)(ie, Fe, Je), Re(ee, Je, Fe), fe(ee, ye, be, Je), (0, Me.p)(Fe, Je, Ke), Ke
```

#### 200. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4084` → after: `L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4084) · [Before (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4084)

```diff
-       const GB = MB.JF();
+       const He = oe.Xx();
```

#### 201. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4111` → after: `L4111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4111) · [Before (L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4111)

```diff
-     const RB = oB.d,
+     const ze = Ke.b,
```

#### 202. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4128` → after: `L4128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4128) · [Before (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4128)

```diff
-   41129: (BB, OB, GB) => {
+   41235: (ee, ie, He) => {
```

#### 203. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4130-L4131` → after: `L4130-L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4130-L4131) · [Before (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4130-L4131)

```diff
-       b: () => QB,
-       f: () => DB
+       d: () => Me,
+       g: () => be
```

#### 204. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4133` → after: `L4133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4133) · [Before (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4133)

```diff
-     var YB = GB(41127);
+     var ye = He(41227);
```

#### 205. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4143` → after: `L4143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4143) · [Before (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4143)

```diff
-   41119: (BB, OB, GB) => {
+   41222: (ee, ie, He) => {
```

#### 206. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4145-L4146` → after: `L4145-L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4145-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4145-L4146) · [Before (L4145-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4145-L4146)

```diff
-       d: () => KB,
-       f: () => IB
+       e: () => De,
+       g: () => Ye
```

#### 207. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4148-L4153` → after: `L4148-L4153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4148-L4153) · [Before (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4148-L4153)

```diff
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(37802),
-       oB = GB(37894),
-       jB = GB(37807),
-       yB = GB(37778);
+     var ye = He(41113),
+       be = He(41121),
+       Me = He(37931),
+       Ke = He(38022),
+       Ue = He(37938),
+       Fe = He(37917);
```

#### 208. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4191` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4191) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4191)

```diff
-       const GB = Number.isNaN(BB) ? MB : Math.max(BB, MB),
+       const He = Number.isNaN(ee) ? oe : Math.max(ee, oe),
```

#### 209. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4197` → after: `L4197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4197) · [Before (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4197)

```diff
-         JB[BB][0] <= YB ? DB = BB : QB = BB
+         Je[ee][0] <= ye ? be = ee : Me = ee
```

#### 210. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4203-L4206` → after: `L4203-L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4203-L4206) · [Before (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4203-L4206)

```diff
-         VB = yB.o.Lerp(new yB.o(lB, pB), new yB.o(NB, RB), AB),
-         SB = yB.o.Normalize(new yB.o(1, qB)),
-         nB = yB.o.Normalize(new yB.o(1, WB)),
-         UB = yB.o.Normalize(yB.o.Lerp(SB, nB, AB)),
+         ge = Fe.n.Lerp(new Fe.n(qe, fe), new Fe.n(Xe, ze), Ee),
+         Oe = Fe.n.Normalize(new Fe.n(1, Te)),
+         de = Fe.n.Normalize(new Fe.n(1, Be)),
+         We = Fe.n.Normalize(Fe.n.Lerp(Oe, de, Ee)),
```

#### 211. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4208` → after: `L4208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4208) · [Before (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4208)

```diff
-       VB.CDB(UB.scale(fB / 3e3));
+       ge.XMe(We.scale(te / 3e3));
```

#### 212. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4212` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4212) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4212)

```diff
-       return new yB.r(dB / KB, 1, (1 - dB - KB) / KB)
+       return new Fe.p(we / De, 1, (1 - we - De) / De)
```

#### 213. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4214-L4215` → after: `L4214-L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4214-L4215) · [Before (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4214-L4215)

```diff
-     const lB = yB.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
-       pB = yB.d.Invert(lB);
+     const qe = Fe.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
+       fe = Fe.b.Invert(qe);
```

#### 214. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4218` → after: `L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4218) · [Before (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4218)

```diff
-       const GB = OB > 0 ? BB / OB : 10;
+       const He = ie > 0 ? ee / ie : 10;
```

#### 215. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4223-L4225` → after: `L4223-L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4223-L4225) · [Before (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4223-L4225)

```diff
-       const GB = yB.r.TransformNormal(BB, lB),
-         YB = yB.r.TransformNormal(OB, lB),
-         DB = yB.d.FromArray([qB(YB.x, GB.x), 0, 0, 0, 0, qB(YB.y, GB.y), 0, 0, 0, 0, qB(YB.z, GB.z), 0, 0, 0, 0, 1]);
+       const He = Fe.p.TransformNormal(ee, qe),
+         ye = Fe.p.TransformNormal(ie, qe),
+         be = Fe.b.FromArray([Te(ye.x, He.x), 0, 0, 0, 0, Te(ye.y, He.y), 0, 0, 0, 0, Te(ye.z, He.z), 0, 0, 0, 0, 1]);
```

#### 216. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4228-L4233` → after: `L4228-L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4228-L4233) · [Before (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4228-L4233)

```diff
-     const NB = new yB.r(.95047, 1, 1.08883),
-       RB = yB.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(ZB(NB, zB(6500, 0))),
-       WB = yB.d.Invert(RB),
-       AB = yB.r.TransformNormal(new yB.r(1, 1, 1), RB);
-     var VB = GB(41022),
-       SB = GB(41127);
+     const Xe = new Fe.p(.95047, 1, 1.08883),
+       ze = Fe.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(pe(Xe, ke(6500, 0))),
+       Be = Fe.b.Invert(ze),
+       Ee = Fe.p.TransformNormal(new Fe.p(1, 1, 1), ze);
+     var ge = He(41141),
+       Oe = He(41227);
```

#### 217. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4262` → after: `L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4262) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4262)

```diff
-           this._dirty = !0, this._tempColor = new oB.g(0, 0, 0, 0), this._globalCurve = new oB.g(0, 0, 0, 0), this._highlightsCurve = new oB.g(0, 0, 0, 0), this._midtonesCurve = new oB.g(0, 0, 0, 0), this._shadowsCurve = new oB.g(0, 0, 0, 0), this._positiveCurve = new oB.g(0, 0,  … [truncated]
+           this._dirty = !0, this._tempColor = new Ke.g(0, 0, 0, 0), this._globalCurve = new Ke.g(0, 0, 0, 0), this._highlightsCurve = new Ke.g(0, 0, 0, 0), this._midtonesCurve = new Ke.g(0, 0, 0, 0), this._shadowsCurve = new Ke.g(0, 0, 0, 0), this._positiveCurve = new Ke.g(0, 0,  … [truncated]
```

#### 218. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4409` → after: `L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4409) · [Before (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4409)

```diff
-           return VB.d.Clone((() => new BB), this)
+           return ge.c.Clone((() => new ee), this)
```

#### 219. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4412` → after: `L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4412) · [Before (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4412)

```diff
-           return VB.d.Serialize(this)
+           return ge.c.Serialize(this)
```

#### 220. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4422)

```diff
-         OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], lB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
+         ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], Ue = [(0, be.R)()], Fe = [(0, be.R)()], Je = [(0, be.R)()], oe = [(0, be.R)()], Re = [(0, be.R)()], ke = [(0, be.R)()], qe = [(0, be.R)()], fe = [(0, be.R)()], Te = [(0, be.R)()], (0, ye.i)(null, null, ie, {
```

#### 221. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4435` → after: `L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4435) · [Before (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4435)

```diff
-         }, ZB, NB), (0, YB.h)(null, null, GB, {
+         }, pe, Xe), (0, ye.i)(null, null, He, {
```

#### 222. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4448` → after: `L4448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4448) · [Before (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4448)

```diff
-         }, RB, WB), (0, YB.h)(null, null, QB, {
+         }, ze, Be), (0, ye.i)(null, null, Me, {
```

#### 223. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4461` → after: `L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4461) · [Before (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4461)

```diff
-         }, AB, nB), (0, YB.h)(null, null, jB, {
+         }, Ee, de), (0, ye.i)(null, null, Ue, {
```

#### 224. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4474` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4474) · [Before (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4474)

```diff
-         }, UB, fB), (0, YB.h)(null, null, yB, {
+         }, We, te), (0, ye.i)(null, null, Fe, {
```

#### 225. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4487` → after: `L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4487) · [Before (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4487)

```diff
-         }, kB, dB), (0, YB.h)(null, null, JB, {
+         }, Ze, we), (0, ye.i)(null, null, Je, {
```

#### 226. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4500` → after: `L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4500) · [Before (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4500)

```diff
-         }, KB, uB), (0, YB.h)(null, null, MB, {
+         }, De, Pe), (0, ye.i)(null, null, oe, {
```

#### 227. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4513` → after: `L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4513) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4513)

```diff
-         }, mB, IB), (0, YB.h)(null, null, PB, {
+         }, Ae, Ye), (0, ye.i)(null, null, Re, {
```

#### 228. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4526` → after: `L4526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4526) · [Before (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4526)

```diff
-         }, FB, iB), (0, YB.h)(null, null, zB, {
+         }, Ve, ae), (0, ye.i)(null, null, ke, {
```

#### 229. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4539` → after: `L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4539) · [Before (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4539)

```diff
-         }, LB, gB), (0, YB.h)(null, null, lB, {
+         }, ce, xe), (0, ye.i)(null, null, qe, {
```

#### 230. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4552` → after: `L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4552) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4552)

```diff
-         }, rB, XB), (0, YB.h)(null, null, pB, {
+         }, Le, Ce), (0, ye.i)(null, null, fe, {
```

#### 231. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4565` → after: `L4565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4565) · [Before (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4565)

```diff
-         }, wB, EB), (0, YB.h)(null, null, qB, {
+         }, ve, ue), (0, ye.i)(null, null, Te, {
```

#### 232. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4593-L4595` → after: `L4593-L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4593-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4593-L4595) · [Before (L4593-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4593-L4595)

```diff
-     var fB = GB(40932),
-       kB = GB(41129),
-       dB = GB(37823);
+     var te = He(41044),
+       Ze = He(41235),
+       we = He(37949);
```

#### 233. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4656` → after: `L4656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4656) · [Before (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4656)

```diff
-             this.colorCurves = (0, YB.j)(this, HB, new nB), this._colorCurvesEnabled = ((0, YB.j)(this, vB), (0, YB.j)(this, sB, !1)), this._colorGradingTexture = ((0, YB.j)(this, xB), (0, YB.j)(this, tB, void 0)), this._colorGradingEnabled = ((0, YB.j)(this, BO), (0, YB.j)(this, … [truncated]
+             this.colorCurves = (0, ye.l)(this, he, new de), this._colorCurvesEnabled = ((0, ye.l)(this, Ne), (0, ye.l)(this, Ge, !1)), this._colorGradingTexture = ((0, ye.l)(this, re), (0, ye.l)(this, Qe, void 0)), this._colorGradingEnabled = ((0, ye.l)(this, ei), (0, ye.l)(this, … [truncated]
```

#### 234. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4722` → after: `L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4722) · [Before (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4722)

```diff
-             BB = Number.isNaN(BB) ? MB : Math.max(BB, MB), this._temperature !== BB && (this._temperature = BB, this._updateParameters())
+             ee = Number.isNaN(ee) ? oe : Math.max(ee, oe), this._temperature !== ee && (this._temperature = ee, this._updateParameters())
```

#### 235. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4734` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4734) · [Before (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4734)

```diff
-               return yB.d.GetAsMatrix3x3(YB)
+               return Fe.b.GetAsMatrix3x3(ye)
```

#### 236. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4816-L4817` → after: `L4816-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4816-L4817) · [Before (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4816-L4817)

```diff
-               const GB = 1 / (this.outputTextureWidth || BB.Lp().getRenderWidth()),
-                 YB = 1 / (this.outputTextureHeight || BB.Lp().getRenderHeight());
+               const He = 1 / (this.outputTextureWidth || ee.Nf().getRenderWidth()),
+                 ye = 1 / (this.outputTextureHeight || ee.Nf().getRenderHeight());
```

#### 237. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4819` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4819) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4819)

```diff
-                 const DB = null != OB ? OB : YB / GB;
+                 const be = null != ie ? ie : ye / He;
```

#### 238. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4823` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4823) · [Before (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4823)

```diff
-                 oB = (0, fB.k)(oB, jB, this.vignetteStretch), QB = (0, fB.k)(QB, jB, this.vignetteStretch), BB.setFloat4("vignetteSettings1", oB, QB, -oB * this.vignetteCenterX, -QB * this.vignetteCenterY);
+                 Ke = (0, te.m)(Ke, Ue, this.vignetteStretch), Me = (0, te.m)(Me, Ue, this.vignetteStretch), ee.setFloat4("vignetteSettings1", Ke, Me, -Ke * this.vignetteCenterX, -Me * this.vignetteCenterY);
```

#### 239. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4835` → after: `L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4835) · [Before (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4835)

```diff
-             return VB.d.Clone((() => new BB), this)
+             return ge.c.Clone((() => new ee), this)
```

#### 240. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4838` → after: `L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4838) · [Before (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4838)

```diff
-             return VB.d.Serialize(this)
+             return ge.c.Serialize(this)
```

#### 241. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4848` → after: `L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4848) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4848)

```diff
-           OB = [(0, DB.l)()], GB = [(0, DB.L)()], JB = [(0, DB.B)("colorGradingTexture")], lB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], NB = [(0, DB.L)()], SB = [(0, DB.L)()], dB = [(0, DB.L)()], KB = [(0, DB.L)()], uB = [(0, DB.L)()], mB = [(0, DB.L)()], IB = [(0, … [truncated]
+           ie = [(0, be.l)()], He = [(0, be.R)()], Je = [(0, be.H)("colorGradingTexture")], qe = [(0, be.R)()], fe = [(0, be.R)()], Te = [(0, be.R)()], Xe = [(0, be.R)()], Oe = [(0, be.R)()], we = [(0, be.R)()], De = [(0, be.R)()], Pe = [(0, be.R)()], Ae = [(0, be.R)()], Ye = [(0, … [truncated]
```

#### 242. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4861` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4861) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4861)

```diff
-           }, HB, vB), (0, YB.h)(null, null, GB, {
+           }, he, Ne), (0, ye.i)(null, null, He, {
```

#### 243. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4874` → after: `L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4874) · [Before (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4874)

```diff
-           }, sB, xB), (0, YB.h)(null, null, JB, {
+           }, Ge, re), (0, ye.i)(null, null, Je, {
```

#### 244. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4887` → after: `L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4887) · [Before (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4887)

```diff
-           }, tB, BO), (0, YB.h)(null, null, lB, {
+           }, Qe, ei), (0, ye.i)(null, null, qe, {
```

#### 245. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4900` → after: `L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4900) · [Before (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4900)

```diff
-           }, OO, GO), (0, YB.h)(null, null, pB, {
+           }, ii, Hi), (0, ye.i)(null, null, fe, {
```

#### 246. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4913` → after: `L4913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4913) · [Before (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4913)

```diff
-           }, YO, DO), (0, YB.h)(null, null, qB, {
+           }, yi, bi), (0, ye.i)(null, null, Te, {
```

#### 247. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4926` → after: `L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4926) · [Before (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4926)

```diff
-           }, QO, oO), (0, YB.h)(null, null, NB, {
+           }, Mi, Ki), (0, ye.i)(null, null, Xe, {
```

#### 248. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4939` → after: `L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4939) · [Before (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4939)

```diff
-           }, jO, yO), (0, YB.h)(null, null, SB, {
+           }, Ui, Fi), (0, ye.i)(null, null, Oe, {
```

#### 249. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4952` → after: `L4952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4952) · [Before (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4952)

```diff
-           }, JO, MO), (0, YB.h)(null, null, dB, {
+           }, Ji, oi), (0, ye.i)(null, null, we, {
```

#### 250. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4965` → after: `L4965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4965) · [Before (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4965)

```diff
-           }, PO, zO), (0, YB.h)(null, null, KB, {
+           }, Ri, ki), (0, ye.i)(null, null, De, {
```

#### 251. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4978` → after: `L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4978) · [Before (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4978)

```diff
-           }, lO, pO), (0, YB.h)(null, null, uB, {
+           }, qi, fi), (0, ye.i)(null, null, Pe, {
```

#### 252. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4991` → after: `L4991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L4991) · [Before (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L4991)

```diff
-           }, qO, ZO), (0, YB.h)(null, null, mB, {
+           }, Ti, Xi), (0, ye.i)(null, null, Ae, {
```

#### 253. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5004` → after: `L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5004) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5004)

```diff
-           }, NO, RO), (0, YB.h)(null, null, IB, {
+           }, zi, Bi), (0, ye.i)(null, null, Ye, {
```

#### 254. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5017` → after: `L5017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5017) · [Before (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5017)

```diff
-           }, WO, AO), (0, YB.h)(null, null, FB, {
+           }, Ei, gi), (0, ye.i)(null, null, Ve, {
```

#### 255. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5030` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5030) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5030)

```diff
-           }, VO, SO), (0, YB.h)(null, null, iB, {
+           }, Oi, di), (0, ye.i)(null, null, ae, {
```

#### 256. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5043` → after: `L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5043) · [Before (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5043)

```diff
-           }, nO, UO), (0, YB.h)(null, null, LB, {
+           }, Wi, ti), (0, ye.i)(null, null, ce, {
```

#### 257. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5056` → after: `L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5056) · [Before (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5056)

```diff
-           }, fO, kO), (0, YB.h)(null, null, gB, {
+           }, Zi, wi), (0, ye.i)(null, null, xe, {
```

#### 258. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5069` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5069) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5069)

```diff
-           }, dO, KO), (0, YB.h)(null, null, rB, {
+           }, Di, Pi), (0, ye.i)(null, null, Le, {
```

#### 259. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5082` → after: `L5082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5082) · [Before (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5082)

```diff
-           }, uO, mO), (0, YB.h)(null, null, XB, {
+           }, Ai, Yi), (0, ye.i)(null, null, Ce, {
```

#### 260. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5095` → after: `L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5095) · [Before (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5095)

```diff
-           }, IO, FO), (0, YB.h)(null, null, wB, {
+           }, Vi, ai), (0, ye.i)(null, null, ve, {
```

#### 261. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5108` → after: `L5108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5108) · [Before (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5108)

```diff
-           }, iO, LO), (0, YB.h)(null, null, EB, {
+           }, ci, xi), (0, ye.i)(null, null, ue, {
```

#### 262. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5121` → after: `L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5121) · [Before (L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5121)

```diff
-           }, gO, rO), (0, YB.h)(null, null, cB, {
+           }, Li, Ci), (0, ye.i)(null, null, me, {
```

#### 263. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5134` → after: `L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5134) · [Before (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5134)

```diff
-           }, XO, wO), (0, YB.h)(null, null, hB, {
+           }, vi, ui), (0, ye.i)(null, null, le, {
```

#### 264. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5147` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5147) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5147)

```diff
-           }, EO, cO), (0, YB.h)(null, null, aB, {
+           }, mi, li), (0, ye.i)(null, null, Se, {
```

#### 265. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5160` → after: `L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5160) · [Before (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5160)

```diff
-           }, hO, aO), (0, YB.h)(null, null, eB, {
+           }, Si, ni), (0, ye.i)(null, null, ne, {
```

#### 266. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5173` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5173) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5173)

```diff
-           }, eO, TO), (0, YB.h)(null, null, TB, {
+           }, ji, si), (0, ye.i)(null, null, je, {
```

#### 267. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5186` → after: `L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5186) · [Before (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5186)

```diff
-           }, bO, CO), (0, YB.h)(null, null, bB, {
+           }, Ii, Ni), (0, ye.i)(null, null, se, {
```

#### 268. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5199` → after: `L5199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5199) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5199)

```diff
-           }, HO, vO), (0, YB.h)(null, null, CB, {
+           }, Gi, ri), (0, ye.i)(null, null, Ie, {
```

#### 269. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5218)

```diff
-         })(), BB.TONEMAPPING_STANDARD = 0, BB.TONEMAPPING_ACES = 1, BB.TONEMAPPING_KHR_PBR_NEUTRAL = 2, BB.PrepareUniforms = kB.f, BB.PrepareSamplers = kB.b, BB._VIGNETTEMODE_MULTIPLY = 0, BB._VIGNETTEMODE_OPAQUE = 1, BB
+         })(), ee.TONEMAPPING_STANDARD = 0, ee.TONEMAPPING_ACES = 1, ee.TONEMAPPING_KHR_PBR_NEUTRAL = 2, ee.PrepareUniforms = Ze.g, ee.PrepareSamplers = Ze.d, ee._VIGNETTEMODE_MULTIPLY = 0, ee._VIGNETTEMODE_OPAQUE = 1, ee
```

#### 270. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5223` → after: `L5223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5223) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5223)

```diff
-       const OB = VB.d.Parse((() => new KB), BB, null, null);
+       const ie = ge.c.Parse((() => new De), ee, null, null);
```

#### 271. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5228` → after: `L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5228) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5228)

```diff
-       uB || (uB = !0, KB.Parse = mB, VB.d._ImageProcessingConfigurationParser = mB, (0, dB.f)("BABYLON.ImageProcessingConfiguration", KB))
+       Pe || (Pe = !0, De.Parse = Ae, ge.c._ImageProcessingConfigurationParser = Ae, (0, we.e)("BABYLON.ImageProcessingConfiguration", De))
```

#### 272. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5231` → after: `L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5231) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5231)

```diff
-   41136: (BB, OB, GB) => {
+   41238: (ee, ie, He) => {
```

#### 273. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5233` → after: `L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5233) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5233)

```diff
-       d: () => QB
+       b: () => Me
```

#### 274. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5235-L5236` → after: `L5235-L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5235-L5236) · [Before (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5235-L5236)

```diff
-     var YB = GB(39366),
-       DB = GB(41097);
+     var ye = He(39467),
+       be = He(41203);
```

#### 275. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5243)

```diff
-         this._uniformNames = [], this._valueCache = {}, this._engine = BB, this._noUBO = !BB.supportsUniformBuffers || DB, this._dynamic = GB, this._name = YB ?? "no-name", this._data = OB || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
+         this._uniformNames = [], this._valueCache = {}, this._engine = ee, this._noUBO = !ee.supportsUniformBuffers || be, this._dynamic = He, this._name = ye ?? "no-name", this._data = ie || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
```

#### 276. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5265` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5265) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5265)

```diff
-         if (OB = BB <= 2 ? BB : 4, this._uniformLocationPointer % OB !== 0) {
+         if (ie = ee <= 2 ? ee : 4, this._uniformLocationPointer % ie !== 0) {
```

#### 277. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5300` → after: `L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5300) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5300)

```diff
-         this.addUniform(BB, Array.prototype.slice.call(OB.dDB()))
+         this.addUniform(ee, Array.prototype.slice.call(ie.Qbe()))
```

#### 278. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5423` → after: `L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5423) · [Before (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5423)

```diff
-           if (this._buffer) return void YB.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + BB);
+           if (this._buffer) return void ye.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + ee);
```

#### 279. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5438` → after: `L5438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5438) · [Before (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5438)

```diff
-         if (void 0 === QB) return void YB.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
+         if (void 0 === Me) return void ye.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
```

#### 280. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5449` → after: `L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5449) · [Before (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5449)

```diff
-             if (this._bufferData[QB + 4 * jB + YB] !== DB.j.FloatRound(OB[yB]) && (BB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[QB + 4 * jB + YB] = OB[yB]), YB++, YB === oB.strideSize) {
+             if (this._bufferData[Me + 4 * Ue + ye] !== be.h.FloatRound(ie[Fe]) && (ee = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Me + 4 * Ue + ye] = ie[Fe]), ye++, ye === Ke.strideSize) {
```

#### 281. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5544` → after: `L5544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5544) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5544)

```diff
-         this._cacheMatrix(BB, OB) && this.updateUniform(BB, OB.dDB(), 16)
+         this._cacheMatrix(ee, ie) && this.updateUniform(ee, ie.Qbe(), 16)
```

#### 282. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5688` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5688) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5688)

```diff
-   40920: (BB, OB, GB) => {
+   41030: (ee, ie, He) => {
```

#### 283. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5690` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5690) · [Before (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5690)

```diff
-       b: () => DB
+       d: () => be
```

#### 284. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5692-L5693` → after: `L5692-L5693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5692-L5693) · [Before (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5692-L5693)

```diff
-     var YB = GB(40929);
-     class DB extends YB.b {
+     var ye = He(41036);
+     class be extends ye.c {
```

#### 285. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L5702` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/281.js#L5702) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/281.js#L5702)

```diff
-   41012: (BB, OB, GB) => {
+   41129: (ee, ie, He) => {
```
