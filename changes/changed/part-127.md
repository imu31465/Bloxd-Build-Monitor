# Changed — Bundle Modifications Report (Part 127 / 141)

- **Updated at**: `2026-11-25T08:36 JST`
- **Part**: `127 / 141` (**433** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 126](part-126.md) · [Part 128 →](part-128.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1817 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 831. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10004` → after: `L10004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10004) · [Before (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10004)

```diff
-                       if (ZB.getOrGenerate(0 === yB ? FB + IB : FB, 0 === yB ? BB : BB + IB, oB.f.GroundHeight) !== TB) {
+                       if (Vt.getOrGenerate(0 === Nt ? Et + et : Et, 0 === Nt ? tt : tt + et, Dt.h.GroundHeight) !== Ot) {
```

#### 832. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10025-L10026` → after: `L10025-L10026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10025-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10025-L10026) · [Before (L10025-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10025-L10026)

```diff
-               oB = null !== (ZB = JB.minHeight) && void 0 !== ZB ? ZB : this.minTreeHeight,
-               GB = null !== (TB = JB.maxHeight) && void 0 !== TB ? TB : this.maxTreeHeight;
+               Dt = null !== (Vt = qt.minHeight) && void 0 !== Vt ? Vt : this.minTreeHeight,
+               mt = null !== (Ot = qt.maxHeight) && void 0 !== Ot ? Ot : this.maxTreeHeight;
```

#### 833. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10041-L10042` → after: `L10041-L10042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10041-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10041-L10042) · [Before (L10041-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10041-L10042)

```diff
-               const JB = new zB.j(`${oB.treeX}|${oB.treeZ}|${oB.trunkBase}|tree`);
-               if (oB.treeType === nB.v.Dead || oB.treeType === nB.v.FallenLog) {
+               const qt = new lt.k(`${Dt.treeX}|${Dt.treeZ}|${Dt.trunkBase}|tree`);
+               if (Dt.treeType === Xt.s.Dead || Dt.treeType === Xt.s.FallenLog) {
```

#### 834. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10059` → after: `L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10059) · [Before (L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10059)

```diff
-                 JB >= IB && JB < IB + this.YN && oB >= ZB && oB < ZB + this.YN && vB >= TB && vB < TB + this.YN && BB.set(JB - IB, oB - ZB, vB - TB, GB)
+                 qt >= et && qt < et + this.ff && Dt >= Vt && Dt < Vt + this.ff && dt >= Ot && dt < Ot + this.ff && tt.set(qt - et, Dt - Vt, dt - Ot, mt)
```

#### 835. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10061` → after: `L10061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10061) · [Before (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10061)

```diff
-             if (JB.treeType === nB.v.FallenLog) {
+             if (qt.treeType === Xt.s.FallenLog) {
```

#### 836. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10063` → after: `L10063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10063) · [Before (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10063)

```diff
-               for (let BB = -1; BB < hB - 1; BB++) zB(0 === JB.vineDir ? vB + BB : vB, cB, 0 === JB.vineDir ? kB : kB + BB);
+               for (let tt = -1; tt < Qt - 1; tt++) lt(0 === qt.vineDir ? dt + tt : dt, Ht, 0 === qt.vineDir ? jt : jt + tt);
```

#### 837. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10088` → after: `L10088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10088) · [Before (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10088)

```diff
-               gB = Math.min(FB, ZB + this.YN - 1);
+               wt = Math.min(Et, Vt + this.ff - 1);
```

#### 838. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10091` → after: `L10091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10091) · [Before (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10091)

```diff
-               yB = Math.min(GB + hB.radius, IB + this.YN - 1);
+               Nt = Math.min(mt + Qt.radius, et + this.ff - 1);
```

#### 839. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10094` → after: `L10094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10094) · [Before (L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10094)

```diff
-               WB = Math.min(vB + hB.radius, TB + this.YN - 1);
+               bt = Math.min(dt + Qt.radius, Ot + this.ff - 1);
```

#### 840. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10169` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10169) · [Before (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10169)

```diff
-               if (gB !== zI.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${gB}`);
+               if (wt !== Ee.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${wt}`);
```

#### 841. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10176-L10178` → after: `L10176-L10178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10176-L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10176-L10178) · [Before (L10176-L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10176-L10178)

```diff
-             const GB = IB + this.YN,
-               vB = ZB + this.YN,
-               kB = TB + this.YN,
+             const mt = et + this.ff,
+               dt = Vt + this.ff,
+               jt = Ot + this.ff,
```

#### 842. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10204` → after: `L10204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10204) · [Before (L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10204)

```diff
-             const IB = this.YN >> 1,
+             const et = this.ff >> 1,
```

#### 843. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10226` → after: `L10226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10226) · [Before (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10226)

```diff
-         var gI = ZB(39832);
+         var ye = Vt(39975);
```

#### 844. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10230)

```diff
-             this.biomeSelector = BB, this.noWaterHeightmapGenerator = IB, this.hydrology = ZB, this.lakeRadiusNoiseModifier = oB, this.seed = GB, this.needOutsideWaterDist = kB, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = tt, this.noWaterHeightmapGenerator = et, this.hydrology = Vt, this.lakeRadiusNoiseModifier = Dt, this.seed = mt, this.needOutsideWaterDist = jt, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 845. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10240` → after: `L10240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10240) · [Before (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10240)

```diff
-               if ((0, TB.L)(hB, BB, IB) > oB) continue;
+               if ((0, Ot.F)(Qt, tt, et) > Dt) continue;
```

#### 846. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10244)

```diff
-               const JB = (0, TB.I)(ZB.origin, BB, IB),
+               const qt = (0, Ot.D)(Vt.origin, tt, et),
```

#### 847. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10261` → after: `L10261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10261) · [Before (L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10261)

```diff
-             if (!(0, nB.L)(IB)) return IB.lake;
+             if (!(0, Xt.B)(et)) return et.lake;
```

#### 848. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10274` → after: `L10274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10274) · [Before (L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10274)

```diff
-             } = this, oB = new zB.j(`${BB[0]}|${BB[1]}${this.seed}oasisLake`), GB = this.hydrology.getHydrologyWaterGenInfo(BB[0], BB[1]), vB = Math.floor(GB.distFromWater - GB.waterRadius - JB);
+             } = this, Dt = new lt.k(`${tt[0]}|${tt[1]}${this.seed}oasisLake`), mt = this.hydrology.getHydrologyWaterGenInfo(tt[0], tt[1]), dt = Math.floor(mt.distFromWater - mt.waterRadius - qt);
```

#### 849. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10294` → after: `L10294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10294) · [Before (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10294)

```diff
-             this.biomeSelector = BB, this.noWaterHeightmapGenerator = IB, this.needOutsideWaterBodyDist = GB, this.TT = kB, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = tt, this.noWaterHeightmapGenerator = et, this.needOutsideWaterBodyDist = mt, this.EO = jt, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 850. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10308` → after: `L10308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10308) · [Before (L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10308)

```diff
-             this.cellCenterMaxOffset = this.gridSize / 2 - cB, this.seed = ZB, this.lakeRadiusNoiseModifier = new TB.g([{
+             this.cellCenterMaxOffset = this.gridSize / 2 - Ht, this.seed = Vt, this.lakeRadiusNoiseModifier = new Ot.i([{
```

#### 851. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10314` → after: `L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10314) · [Before (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10314)

```diff
-             }], `${ZB}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, TB.z)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new yI(BB, IB, this, this.lakeRadiusNoiseModifier, ZB, JB, GB, vB)
+             }], `${Vt}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, Ot.x)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new ae(tt, et, this, this.lakeRadiusNoiseModifier, Vt, qt, mt, dt)
```

#### 852. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10318` → after: `L10318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10318) · [Before (L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10318)

```diff
-             if (!this.TT) return QI(this.needOutsideWaterBodyDist);
+             if (!this.EO) return ue(this.needOutsideWaterBodyDist);
```

#### 853. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10322` → after: `L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10322) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10322)

```diff
-             return null === JB || CI(TB) <= CI(JB) ? TB : JB
+             return null === qt || Ce(Ot) <= Ce(qt) ? Ot : qt
```

#### 854. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10348` → after: `L10348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10348) · [Before (L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10348)

```diff
-                 uG: BB,
+                 pm: tt,
```

#### 855. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10363` → after: `L10363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10363) · [Before (L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10363)

```diff
-                 uG: BB,
+                 pm: tt,
```

#### 856. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10387` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10387) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10387)

```diff
-                 GB *= oB.lakeRadius / this.lakeSettings.maxRadius, zB = oB.lakeRadius - GB, ZB = (0, TB.I)(JB.origin, BB, IB) - zB
+                 mt *= Dt.lakeRadius / this.lakeSettings.maxRadius, lt = Dt.lakeRadius - mt, Vt = (0, Ot.D)(qt.origin, tt, et) - lt
```

#### 857. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10401` → after: `L10401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10401) · [Before (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10401)

```diff
-                 const ZB = (0, TB.I)(JB.origin, BB, IB),
+                 const Vt = (0, Ot.D)(qt.origin, tt, et),
```

#### 858. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10428` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10428) · [Before (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10428)

```diff
-             if (!(0, nB.L)(ZB)) return this.lastReadInfo.cellX = BB, this.lastReadInfo.cellZ = IB, this.lastReadInfo.info = ZB, ZB;
+             if (!(0, Xt.B)(Vt)) return this.lastReadInfo.cellX = tt, this.lastReadInfo.cellZ = et, this.lastReadInfo.info = Vt, Vt;
```

#### 859. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10492` → after: `L10492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10492) · [Before (L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10492)

```diff
-             return -1 !== JB ? TB : null
+             return -1 !== qt ? Ot : null
```

#### 860. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10497` → after: `L10497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10497) · [Before (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10497)

```diff
-               JB = new zB.j(`${BB}${IB}${this.seed}riverCell`);
+               qt = new lt.k(`${tt}${et}${this.seed}riverCell`);
```

#### 861. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10537-L10540` → after: `L10537-L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10537-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10537-L10540) · [Before (L10537-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10537-L10540)

```diff
-           pT: 40,
-           BT: -85,
-           IT: -85,
-           aT: .5
+           zO: 40,
+           XO: -85,
+           QO: -85,
+           oO: .5
```

#### 862. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10544-L10547` → after: `L10544-L10547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10544-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10544-L10547) · [Before (L10544-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10544-L10547)

```diff
-           pT: 13,
-           BT: -100,
-           IT: -85,
-           aT: .28
+           zO: 13,
+           XO: -100,
+           QO: -85,
+           oO: .28
```

#### 863. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10551-L10554` → after: `L10551-L10554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10551-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10551-L10554) · [Before (L10551-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10551-L10554)

```diff
-           pT: 10,
-           BT: -100,
-           IT: -75,
-           aT: .4
+           zO: 10,
+           XO: -100,
+           QO: -75,
+           oO: .4
```

#### 864. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10558-L10561` → after: `L10558-L10561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10558-L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10558-L10561) · [Before (L10558-L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10558-L10561)

```diff
-           pT: 5,
-           BT: -80,
-           IT: 15,
-           aT: .5
+           zO: 5,
+           XO: -80,
+           QO: 15,
+           oO: .5
```

#### 865. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10565-L10568` → after: `L10565-L10568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10565-L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10565-L10568) · [Before (L10565-L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10565-L10568)

```diff
-           pT: 4,
-           BT: -60,
-           IT: 40,
-           aT: .5
+           zO: 4,
+           XO: -60,
+           QO: 40,
+           oO: .5
```

#### 866. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10572-L10573` → after: `L10572-L10573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10572-L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10572-L10573) · [Before (L10572-L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10572-L10573)

```diff
-             this.seed = IB, this.YN = ZB, this.YT = void 0, this.YT = TB.map((TB => {
-               const oB = new JB.d("ore", TB.pT, !1, !0, `${IB}${TB.blockName}`, 20, ZB, null, !0);
+             this.seed = et, this.ff = Vt, this.kO = void 0, this.kO = Ot.map((Ot => {
+               const Dt = new qt.b("ore", Ot.zO, !1, !0, `${et}${Ot.blockName}`, 20, Vt, null, !0);
```

#### 867. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10575` → after: `L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10575) · [Before (L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10575)

```diff
-                 KG: (0, nB.G)(TB.blockName, BB),
+                 qd: (0, Xt.y)(Ot.blockName, tt),
```

#### 868. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10577-L10580` → after: `L10577-L10580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10577-L10580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10577-L10580) · [Before (L10577-L10580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10577-L10580)

```diff
-                 pT: TB.pT,
-                 BT: TB.BT,
-                 IT: TB.IT,
-                 aT: TB.aT,
+                 zO: Ot.zO,
+                 XO: Ot.XO,
+                 QO: Ot.QO,
+                 oO: Ot.oO,
```

#### 869. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10587-L10590` → after: `L10587-L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10587-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10587-L10590) · [Before (L10587-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10587-L10590)

```diff
-               JB = new zB.j(`${BB}${IB}${this.seed}oreExists`);
-             for (const oB of this.YT) {
-               const GB = oB.pointGenerator.getPointsAroundPoint(BB + this.YN / 2, IB + this.YN / 2),
-                 vB = BB + this.YN + oB.radius,
+               qt = new lt.k(`${tt}${et}${this.seed}oreExists`);
+             for (const Dt of this.kO) {
+               const mt = Dt.pointGenerator.getPointsAroundPoint(tt + this.ff / 2, et + this.ff / 2),
+                 dt = tt + this.ff + Dt.radius,
```

#### 870. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10592` → after: `L10592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10592) · [Before (L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10592)

```diff
-                 cB = IB + this.YN + oB.radius,
+                 Ht = et + this.ff + Dt.radius,
```

#### 871. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10596-L10597` → after: `L10596-L10597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10596-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10596-L10597) · [Before (L10596-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10596-L10597)

```diff
-                 const GB = new zB.j(`${hB[0]}${hB[1]}${this.seed}ore`),
-                   FB = Math.floor(GB.next() * (oB.IT + 1 - oB.BT)) + oB.BT,
+                 const mt = new lt.k(`${Qt[0]}${Qt[1]}${this.seed}ore`),
+                   Et = Math.floor(mt.next() * (Dt.QO + 1 - Dt.XO)) + Dt.XO,
```

#### 872. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10599` → after: `L10599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10599) · [Before (L10599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10599)

```diff
-                   gB = Math.min(BB + this.YN - 1, hB[0] + oB.radius),
+                   wt = Math.min(tt + this.ff - 1, Qt[0] + Dt.radius),
```

#### 873. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10601` → after: `L10601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10601) · [Before (L10601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10601)

```diff
-                   yB = Math.min(IB + this.YN - 1, hB[1] + oB.radius);
+                   Nt = Math.min(et + this.ff - 1, Qt[1] + Dt.radius);
```

#### 874. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10604` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10604) · [Before (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10604)

```diff
-                     (0, TB.D)(hB, BB, IB) > oB.radius || (JB.next() >= oB.aT || ZB.push(BB, FB, IB, oB.KG))
+                     (0, Ot.A)(Qt, tt, et) > Dt.radius || (qt.next() >= Dt.oO || Vt.push(tt, Et, et, Dt.qd))
```

#### 875. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10611` → after: `L10611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10611) · [Before (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10611)

```diff
-             const kB = ZB + this.YN,
+             const jt = Vt + this.ff,
```

#### 876. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10618` → after: `L10618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10618) · [Before (L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10618)

```diff
-               if (cB < GB.get(hB, zB, oB.f.GroundHeight) - JB) {
+               if (Ht < mt.get(Qt, lt, Dt.h.GroundHeight) - qt) {
```

#### 877. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10625` → after: `L10625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10625) · [Before (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10625)

```diff
-         var OI = ZB(39839);
+         var ve = Vt(39979);
```

#### 878. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10635-L10636` → after: `L10635-L10636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10635-L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10635-L10636) · [Before (L10635-L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10635-L10636)

```diff
-             zT: ZB,
-             yT: TB,
+             CO: Vt,
+             WO: Ot,
```

#### 879. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10646` → after: `L10646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10646) · [Before (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10646)

```diff
-           return ZB.cT && TB.push({
+           return Vt.MO && Ot.push({
```

#### 880. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10648-L10649` → after: `L10648-L10649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10648-L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10648-L10649) · [Before (L10648-L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10648-L10649)

```diff
-             KG: BB[IB].id
-           }), ZB.nT && TB.push({
+             qd: tt[et].id
+           }), Vt.bO && Ot.push({
```

#### 881. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10651` → after: `L10651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10651) · [Before (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10651)

```diff
-             KG: BB[`${IB}|meta|rot2|side`].id
+             qd: tt[`${et}|meta|rot2|side`].id
```

#### 882. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10654` → after: `L10654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10654) · [Before (L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10654)

```diff
-             KG: BB[`${IB}|meta|rot4|side`].id
+             qd: tt[`${et}|meta|rot4|side`].id
```

#### 883. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10657` → after: `L10657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10657) · [Before (L10657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10657)

```diff
-             KG: BB[`${IB}|meta|rot1|side`].id
+             qd: tt[`${et}|meta|rot1|side`].id
```

#### 884. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10660-L10661` → after: `L10660-L10661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10660-L10661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10660-L10661) · [Before (L10660-L10661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10660-L10661)

```diff
-             KG: BB[`${IB}|meta|rot3|side`].id
-           }), ZB.hT && TB.push({
+             qd: tt[`${et}|meta|rot3|side`].id
+           }), Vt.JO && Ot.push({
```

#### 885. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10663)

```diff
-             KG: BB[`${IB}|meta|rot1|top`].id
+             qd: tt[`${et}|meta|rot1|top`].id
```

#### 886. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10672-L10674` → after: `L10672-L10674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10672-L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10672-L10674) · [Before (L10672-L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10672-L10674)

```diff
-                 cT: !0,
-                 nT: !0,
-                 hT: !0
+                 MO: !0,
+                 bO: !0,
+                 JO: !0
```

#### 887. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10677-L10680` → after: `L10677-L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10677-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10677-L10680) · [Before (L10677-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10677-L10680)

```diff
-               FT: .8,
-               NT: 0,
-               zT: .12,
-               yT: .25,
+               uO: .8,
+               KO: 0,
+               CO: .12,
+               WO: .25,
```

#### 888. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10686-L10688` → after: `L10686-L10688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10686-L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10686-L10688) · [Before (L10686-L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10686-L10688)

```diff
-                 cT: !0,
-                 nT: !0,
-                 hT: !1
+                 MO: !0,
+                 bO: !0,
+                 JO: !1
```

#### 889. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10691-L10693` → after: `L10691-L10693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10691-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10691-L10693) · [Before (L10691-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10691-L10693)

```diff
-               FT: .7,
-               NT: 2,
-               zT: .58
+               uO: .7,
+               KO: 2,
+               CO: .58
```

#### 890. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10696` → after: `L10696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10696) · [Before (L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10696)

```diff
-             const ZB = IB.gT;
+             const Vt = et.hO;
```

#### 891. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10700-L10702` → after: `L10700-L10702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10700-L10702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10700-L10702) · [Before (L10700-L10702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10700-L10702)

```diff
-                 cT: IB.cT,
-                 nT: IB.nT,
-                 hT: IB.hT
+                 MO: et.MO,
+                 bO: et.bO,
+                 JO: et.JO
```

#### 892. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10705-L10710` → after: `L10705-L10710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10705-L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10705-L10710) · [Before (L10705-L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10705-L10710)

```diff
-               FT: IB.FT,
-               NT: IB.NT,
-               zT: IB.zT,
-               yT: null === ZB || void 0 === ZB ? void 0 : ZB.yT,
-               shallowClusterY: null === ZB || void 0 === ZB ? void 0 : ZB.UT,
-               deepClusterY: null === ZB || void 0 === ZB ? void 0 : ZB.WT
+               uO: et.uO,
+               KO: et.KO,
+               CO: et.CO,
+               WO: null === Vt || void 0 === Vt ? void 0 : Vt.WO,
+               shallowClusterY: null === Vt || void 0 === Vt ? void 0 : Vt.SO,
+               deepClusterY: null === Vt || void 0 === Vt ? void 0 : Vt.cO
```

#### 893. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10729` → after: `L10729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10729) · [Before (L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10729)

```diff
-             const TB = this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight) - this.surfaceMargin,
+             const Ot = this.heightmapVals.getOrGenerate(tt, et, Dt.h.GroundHeight) - this.surfaceMargin,
```

#### 894. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10736` → after: `L10736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10736) · [Before (L10736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10736)

```diff
-               BB - oB.floorY + 1 < JB || GB.push(BB === oB.ceilingY ? oB : {
+               tt - Dt.floorY + 1 < qt || mt.push(tt === Dt.ceilingY ? Dt : {
```

#### 895. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10746` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10746) · [Before (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10746)

```diff
-             this.heightmapVals = BB, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new TB.k(new rI(IB)), this.decoratableCavesCache = new TB.k(new mI(IB, BB, ZB, JB))
+             this.heightmapVals = tt, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new Ot.n(new ke(et)), this.decoratableCavesCache = new Ot.n(new Ge(et, tt, Vt, qt))
```

#### 896. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10752` → after: `L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10752) · [Before (L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10752)

```diff
-             return this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight)
+             return this.heightmapVals.getOrGenerate(tt, et, Dt.h.GroundHeight)
```

#### 897. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10771` → after: `L10771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10771) · [Before (L10771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10771)

```diff
-             LI(BB + kB.offset[0], IB + kB.offset[1], ZB + kB.offset[2], oB) && (kB.offset === YI ? GB = kB : vB.push(kB))
+             oe(tt + jt.offset[0], et + jt.offset[1], Vt + jt.offset[2], Dt) && (jt.offset === We ? mt = jt : dt.push(jt))
```

#### 898. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10773` → after: `L10773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10773) · [Before (L10773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10773)

```diff
-           return null !== GB ? GB : 0 === vB.length ? null : vB[Math.floor(JB * vB.length)]
+           return null !== mt ? mt : 0 === dt.length ? null : dt[Math.floor(qt * dt.length)]
```

#### 899. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10778` → after: `L10778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10778) · [Before (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10778)

```diff
-             this.YN = IB, this.seed = ZB, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.ff = et, this.seed = Vt, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 900. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10784` → after: `L10784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10784) · [Before (L10784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10784)

```diff
-               if (!Number.isInteger(JB.clusterBoxSize) || JB.clusterBoxSize < 2 || JB.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${JB.seedPrefix}" has invalid clusterBoxSize (${JB.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(qt.clusterBoxSize) || qt.clusterBoxSize < 2 || qt.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${qt.seedPrefix}" has invalid clusterBoxSize (${qt.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 901. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10786` → after: `L10786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10786) · [Before (L10786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10786)

```diff
-               BB > GB && (GB = BB), vB += Math.max(JB.zT, null !== (kB = JB.yT) && void 0 !== kB ? kB : JB.zT)
+               tt > mt && (mt = tt), dt += Math.max(qt.CO, null !== (jt = qt.WO) && void 0 !== jt ? jt : qt.CO)
```

#### 902. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10788-L10789` → after: `L10788-L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10788-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10788-L10789) · [Before (L10788-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10788-L10789)

```diff
-             if (vB > 1) throw new Error(`Cave decoration cluster chances sum to ${vB} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-             this.pointsGen = new JB.d("caveDeco", 10, !1, !0, ZB, 4, IB, null, !0), this.pointsGen.assertReachableFromChunkCentre(IB, GB), this.configs = oB, this.maxHalfBox = GB
+             if (dt > 1) throw new Error(`Cave decoration cluster chances sum to ${dt} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             this.pointsGen = new qt.b("caveDeco", 10, !1, !0, Vt, 4, et, null, !0), this.pointsGen.assertReachableFromChunkCentre(et, mt), this.configs = Dt, this.maxHalfBox = mt
```

#### 903. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10793` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10793) · [Before (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10793)

```diff
-               oB = this.YN,
+               Dt = this.ff,
```

#### 904. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10810` → after: `L10810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10810) · [Before (L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10810)

```diff
-             for (const vB of oB) vB.y >= ZB && vB.y < GB && BB.set(vB.x - IB, vB.y - ZB, vB.z - TB, vB.KG)
+             for (const dt of Dt) dt.y >= Vt && dt.y < mt && tt.set(dt.x - et, dt.y - Vt, dt.z - Ot, dt.qd)
```

#### 905. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10815)

```diff
-             const cB = new zB.j(`${this.seed}|${BB}|${IB}|cluster`),
+             const Ht = new lt.k(`${this.seed}|${tt}|${et}|cluster`),
```

#### 906. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10829` → after: `L10829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10829) · [Before (L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10829)

```diff
-             if (this.scatterClusterCells(BB, gB, IB, yB, GB, cB, UB), !(UB.length < yB.NT))
+             if (this.scatterClusterCells(tt, wt, et, Nt, mt, Ht, Mt), !(Mt.length < Nt.KO))
```

#### 907. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10835` → after: `L10835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10835) · [Before (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10835)

```diff
-               FT: kB,
+               uO: jt,
```

#### 908. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10855` → after: `L10855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10855) · [Before (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10855)

```diff
-                     KG: UB.KG
+                     qd: Mt.qd
```

#### 909. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10869` → after: `L10869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10869) · [Before (L10869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10869)

```diff
-             this.prefabGenerator = TB, this.seed = void 0, this.YN = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = Ot, this.seed = void 0, this.ff = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 910. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10872` → after: `L10872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10872) · [Before (L10872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10872)

```diff
-             if (ZB + this.YN <= GB.r.bedrockLevel) return {
+             if (Vt + this.ff <= mt.o.bedrockLevel) return {
```

#### 911. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10879-L10881` → after: `L10879-L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10879-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10879-L10881) · [Before (L10879-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10879-L10881)

```diff
-             if (CB >= ZB && dB < ZB + this.YN)
-               for (let TB = IB; TB < IB + this.YN; TB++)
-                 for (let kB = JB; kB < JB + this.YN; kB++) {
+             if (Ct >= Vt && Jt < Vt + this.ff)
+               for (let Ot = et; Ot < et + this.ff; Ot++)
+                 for (let jt = qt; jt < qt + this.ff; jt++) {
```

#### 912. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10884-L10886` → after: `L10884-L10886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10884-L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10884-L10886) · [Before (L10884-L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10884-L10886)

```diff
-                     hB = vB.get(TB, kB, oB.f.GroundHeight);
-                   if (hB >= ZB && hB < ZB + this.YN) {
-                     const cB = vB.get(TB, kB, oB.f.IsLake) === GB.f ? nB.getDryBedBlock(TB, hB, kB) : nB.getTopsoilBlock(TB, hB, kB);
+                     Qt = dt.get(Ot, jt, Dt.h.GroundHeight);
+                   if (Qt >= Vt && Qt < Vt + this.ff) {
+                     const Ht = dt.get(Ot, jt, Dt.h.IsLake) === mt.e ? Xt.getDryBedBlock(Ot, Qt, jt) : Xt.getTopsoilBlock(Ot, Qt, jt);
```

#### 913. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10890-L10892` → after: `L10890-L10892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10890-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10890-L10892) · [Before (L10890-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10890-L10892)

```diff
-             if (CB + 1 >= ZB && dB - 4 < ZB + this.YN)
-               for (let TB = IB; TB < IB + this.YN; TB++)
-                 for (let GB = JB; GB < JB + this.YN; GB++) {
+             if (Ct + 1 >= Vt && Jt - 4 < Vt + this.ff)
+               for (let Ot = et; Ot < et + this.ff; Ot++)
+                 for (let mt = qt; mt < qt + this.ff; mt++) {
```

#### 914. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10895-L10896` → after: `L10895-L10896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10895-L10896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10895-L10896) · [Before (L10895-L10896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10895-L10896)

```diff
-                     nB = vB.get(TB, GB, oB.f.GroundHeight),
-                     hB = Math.min(nB, ZB + this.YN);
+                     Xt = dt.get(Ot, mt, Dt.h.GroundHeight),
+                     Qt = Math.min(Xt, Vt + this.ff);
```

#### 915. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10904-L10905` → after: `L10904-L10905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10904-L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10904-L10905) · [Before (L10904-L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10904-L10905)

```diff
-               for (let ZB = Math.max(JB - 4, 0); ZB < Math.min(JB, this.YN); ZB++) BB.set(IB, ZB, oB, this.dirtId);
-               JB >= 0 && JB < this.YN && BB.set(IB, JB, oB, this.grassBlockId)
+               for (let Vt = Math.max(qt - 4, 0); Vt < Math.min(qt, this.ff); Vt++) tt.set(et, Vt, Dt, this.dirtId);
+               qt >= 0 && qt < this.ff && tt.set(et, qt, Dt, this.grassBlockId)
```

#### 916. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10909-L10910` → after: `L10909-L10910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10909-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10909-L10910) · [Before (L10909-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10909-L10910)

```diff
-               for (let GB = IB; GB < IB + this.YN; GB++)
-                 for (let kB = JB; kB < JB + this.YN; kB++) {
+               for (let mt = et; mt < et + this.ff; mt++)
+                 for (let jt = qt; jt < qt + this.ff; jt++) {
```

#### 917. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10912-L10913` → after: `L10912-L10913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10912-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10912-L10913) · [Before (L10912-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10912-L10913)

```diff
-                     nB = vB.get(GB, kB, oB.f.GroundHeight),
-                     hB = Math.min(nB - 4, ZB + this.YN),
+                     Xt = dt.get(mt, jt, Dt.h.GroundHeight),
+                     Qt = Math.min(Xt - 4, Vt + this.ff),
```

#### 918. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10918` → after: `L10918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10918) · [Before (L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10918)

```diff
-                     BB.set(GB - IB, TB - ZB, kB - JB, 0 !== oB ? oB : cB)
+                     tt.set(mt - et, Ot - Vt, jt - qt, 0 !== Dt ? Dt : Ht)
```

#### 919. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10922-L10924` → after: `L10922-L10924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10922-L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10922-L10924) · [Before (L10922-L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10922-L10924)

```diff
-             if (CB - 4 >= ZB && this.oreGenerator.addOresToChunk(BB, IB, ZB, JB, 4, vB, NB), CB >= ZB && (kB.b.addCavesToChunk(BB, IB, ZB, JB, vB, FB), uI.addCaveDecorationsToChunk(BB, IB, ZB, JB, this.YN, yB)), GB.r.bedrockLevel >= ZB && GB.r.bedrockLevel < ZB + this.YN)
-               for (let TB = IB; TB < IB + this.YN; TB++)
-                 for (let oB = JB; oB < JB + this.YN; oB++) BB.set(TB - IB, GB.r.bedrockLevel - ZB, oB - JB, this.bedrockId);
+             if (Ct - 4 >= Vt && this.oreGenerator.addOresToChunk(tt, et, Vt, qt, 4, dt, ft), Ct >= Vt && (jt.c.addCavesToChunk(tt, et, Vt, qt, dt, Et), Ue.addCaveDecorationsToChunk(tt, et, Vt, qt, this.ff, Nt)), mt.o.bedrockLevel >= Vt && mt.o.bedrockLevel < Vt + this.ff)
+               for (let Ot = et; Ot < et + this.ff; Ot++)
+                 for (let Dt = qt; Dt < qt + this.ff; Dt++) tt.set(Ot - et, mt.o.bedrockLevel - Vt, Dt - qt, this.bedrockId);
```

#### 920. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10927-L10929` → after: `L10927-L10929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10927-L10929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10927-L10929) · [Before (L10927-L10929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10927-L10929)

```diff
-               for (let oB = IB; oB < IB + this.YN; oB++)
-                 for (let GB = ZB; GB < ZB + this.YN; GB++)
-                   for (let vB = JB; vB < JB + this.YN; vB++) {
+               for (let Dt = et; Dt < et + this.ff; Dt++)
+                 for (let mt = Vt; mt < Vt + this.ff; mt++)
+                   for (let dt = qt; dt < qt + this.ff; dt++) {
```

#### 921. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10940-L10941` → after: `L10940-L10941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10940-L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10940-L10941) · [Before (L10940-L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10940-L10941)

```diff
-               for (let ZB = Math.max(oB, 0); ZB < Math.min(GB, this.YN); ZB++) BB.set(IB, ZB, JB, this.waterId);
-               GB >= 0 && GB < this.YN && BB.set(IB, GB, JB, wB[TB + 4])
+               for (let Vt = Math.max(Dt, 0); Vt < Math.min(mt, this.ff); Vt++) tt.set(et, Vt, qt, this.waterId);
+               mt >= 0 && mt < this.ff && tt.set(et, mt, qt, ht[Ot + 4])
```

#### 922. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10944-L10949` → after: `L10944-L10949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10944-L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10944-L10949) · [Before (L10944-L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10944-L10949)

```diff
-             if (this.addSurfaceBlocks(BB, ZB, UB.lilyPads), QB && CB >= ZB && dB < ZB + this.YN)
-               for (let kB = IB; kB < IB + this.YN; kB++)
-                 for (let cB = JB; cB < JB + this.YN; cB++) {
-                   const nB = vB.get(kB, cB, oB.f.WaterHeight),
-                     hB = vB.get(kB, cB, oB.f.GroundHeight);
-                   if (nB !== GB.n && hB >= ZB && hB < ZB + this.YN)
+             if (this.addSurfaceBlocks(tt, Vt, Mt.lilyPads), ut && Ct >= Vt && Jt < Vt + this.ff)
+               for (let jt = et; jt < et + this.ff; jt++)
+                 for (let Ht = qt; Ht < qt + this.ff; Ht++) {
+                   const Xt = dt.get(jt, Ht, Dt.h.WaterHeight),
+                     Qt = dt.get(jt, Ht, Dt.h.GroundHeight);
+                   if (Xt !== mt.k && Qt >= Vt && Qt < Vt + this.ff)
```

#### 923. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10953` → after: `L10953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10953) · [Before (L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10953)

```diff
-                       if ((0, TB.L)(oB, kB, cB) < 100) OB === oB[0] && iB === oB[1] || (OB = oB[0], iB = oB[1], pB = new zB.j(`${this.seed}${OB}${iB}`).next() < .3 ? this.chalkId : this.clayId), BB.set(kB - IB, hB - ZB, cB - JB, pB), hB - 1 >= ZB && BB.set(kB - IB, hB - 1 - ZB, c … [truncated]
+                       if ((0, Ot.F)(Dt, jt, Ht) < 100) vt === Dt[0] && St === Dt[1] || (vt = Dt[0], St = Dt[1], ct = new lt.k(`${this.seed}${vt}${St}`).next() < .3 ? this.chalkId : this.clayId), tt.set(jt - et, Qt - Vt, Ht - qt, ct), Qt - 1 >= Vt && tt.set(jt - et, Qt - 1 - Vt, H … [truncated]
```

#### 924. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10962-L10965` → after: `L10962-L10965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10962-L10965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10962-L10965) · [Before (L10962-L10965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10962-L10965)

```diff
-               for (let oB = IB; oB < IB + this.YN; oB++)
-                 for (let GB = ZB; GB < ZB + this.YN; GB++)
-                   for (let vB = JB; vB < JB + this.YN; vB++) {
-                     const kB = YB.b.getBlockFromFixedPointPrefab(oB, GB, vB, TB);
+               for (let Dt = et; Dt < et + this.ff; Dt++)
+                 for (let mt = Vt; mt < Vt + this.ff; mt++)
+                   for (let dt = qt; dt < qt + this.ff; dt++) {
+                     const jt = Wt.c.getBlockFromFixedPointPrefab(Dt, mt, dt, Ot);
```

#### 925. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10986` → after: `L10986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L10986) · [Before (L10986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L10986)

```diff
-               JB >= 0 && JB < this.YN && BB.set(ZB[TB], JB, ZB[TB + 2], ZB[TB + 3])
+               qt >= 0 && qt < this.ff && tt.set(Vt[Ot], qt, Vt[Ot + 2], Vt[Ot + 3])
```

#### 926. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11000` → after: `L11000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11000) · [Before (L11000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11000)

```diff
-             this.YN = BB, this.biomeSelector = IB, this.seed = ZB, this.random = new zB.j(""), this.lilyPadId = void 0, this.lilyPadId = TB["Lily Pad"].id
+             this.ff = tt, this.biomeSelector = et, this.seed = Vt, this.random = new lt.k(""), this.lilyPadId = void 0, this.lilyPadId = Ot["Lily Pad"].id
```

#### 927. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11010-L11011` → after: `L11010-L11011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11010-L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11010-L11011) · [Before (L11010-L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11010-L11011)

```diff
-             for (let qB = BB; qB < BB + this.YN; qB++)
-               for (let yB = IB; yB < IB + this.YN; yB++) {
+             for (let yt = tt; yt < tt + this.ff; yt++)
+               for (let Nt = et; Nt < et + this.ff; Nt++) {
```

#### 928. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11013-L11014` → after: `L11013-L11014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11013-L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11013-L11014) · [Before (L11013-L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11013-L11014)

```diff
-                   WB = ZB.getOrGenerate(qB, yB, oB.f.GroundHeight),
-                   dB = ZB.getOrGenerate(qB, yB, oB.f.WaterHeight);
+                   bt = Vt.getOrGenerate(yt, Nt, Dt.h.GroundHeight),
+                   Jt = Vt.getOrGenerate(yt, Nt, Dt.h.WaterHeight);
```

#### 929. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11018-L11019` → after: `L11018-L11019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11018-L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11018-L11019) · [Before (L11018-L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11018-L11019)

```diff
-                 if (dB !== GB.n) {
-                   gB = !0, WB < dB && cB.push(CB, QB, WB + 1, dB, UB.topwaterBlockType), UB.hasScatteredLakes && 1 === ZB.getOrGenerate(qB, yB, oB.f.IsLake) && (this.random.reseed(`${qB}|${yB}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(qB, yB, ZB) && hB … [truncated]
+                 if (Jt !== mt.k) {
+                   wt = !0, bt < Jt && Ht.push(Ct, ut, bt + 1, Jt, Mt.topwaterBlockType), Mt.hasScatteredLakes && 1 === Vt.getOrGenerate(yt, Nt, Dt.h.IsLake) && (this.random.reseed(`${yt}|${Nt}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(yt, Nt, Vt) && Qt … [truncated]
```

#### 930. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11023-L11024` → after: `L11023-L11024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11023-L11024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11023-L11024) · [Before (L11023-L11024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11023-L11024)

```diff
-                 if (UB.hasScatteredLakes && this.isBesideLake(qB, yB, ZB) && (this.random.reseed(`${qB}|${yB}|${this.seed}oasisShore`), this.random.next() < .85 && (nB.push(CB, WB, QB), sB = this.biomeSelector.baseBiome.floraGenerator)), !kB.b.isInCave(qB, WB, yB, TB) && !YB.b.is … [truncated]
-                   for (let ZB = WB + 1; ZB <= WB + UB.maxFloraHeight; ZB += this.YN) zB.startY = ZB, sB.addBiomeFloraToColumn(zB, BB, IB, qB, ZB, yB, WB)
+                 if (Mt.hasScatteredLakes && this.isBesideLake(yt, Nt, Vt) && (this.random.reseed(`${yt}|${Nt}|${this.seed}oasisShore`), this.random.next() < .85 && (Xt.push(Ct, bt, ut), Kt = this.biomeSelector.baseBiome.floraGenerator)), !jt.c.isInCave(yt, bt, Nt, Ot) && !Wt.c.is … [truncated]
+                   for (let Vt = bt + 1; Vt <= bt + Mt.maxFloraHeight; Vt += this.ff) lt.startY = Vt, Kt.addBiomeFloraToColumn(lt, tt, et, yt, Vt, Nt, bt)
```

#### 931. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11037` → after: `L11037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11037) · [Before (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11037)

```diff
-             return ZB.getOrGenerate(BB + 1, IB, oB.f.WaterHeight) !== GB.n && ZB.getOrGenerate(BB - 1, IB, oB.f.WaterHeight) !== GB.n && ZB.getOrGenerate(BB, IB + 1, oB.f.WaterHeight) !== GB.n && ZB.getOrGenerate(BB, IB - 1, oB.f.WaterHeight) !== GB.n
+             return Vt.getOrGenerate(tt + 1, et, Dt.h.WaterHeight) !== mt.k && Vt.getOrGenerate(tt - 1, et, Dt.h.WaterHeight) !== mt.k && Vt.getOrGenerate(tt, et + 1, Dt.h.WaterHeight) !== mt.k && Vt.getOrGenerate(tt, et - 1, Dt.h.WaterHeight) !== mt.k
```

#### 932. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11043` → after: `L11043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11043) · [Before (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11043)

```diff
-             return ZB.getOrGenerate(BB, IB, oB.f.WaterHeight) !== GB.n && 1 === ZB.getOrGenerate(BB, IB, oB.f.IsLake)
+             return Vt.getOrGenerate(tt, et, Dt.h.WaterHeight) !== mt.k && 1 === Vt.getOrGenerate(tt, et, Dt.h.IsLake)
```

#### 933. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11046` → after: `L11046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11046) · [Before (L11046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11046)

```diff
-         var bI = ZB(39733);
+         var pe = Vt(39888);
```

#### 934. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11051` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11051) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11051)

```diff
-             if (this.YN = BB, this.hashChunkContents = hB, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.ff = tt, this.hashChunkContents = Qt, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 935. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11055-L11056` → after: `L11055-L11056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11055-L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11055-L11056) · [Before (L11055-L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11055-L11056)

```diff
-             this.chunkColumnInfos = xI.partition(), this.caveGenerator = new kB.b(JB, BB, IB, null !== (zB = null === cB || void 0 === cB ? void 0 : cB.JT.GT) && void 0 !== zB ? zB : "Lava");
-             const WB = new wI(IB, JB, BB, null !== (FB = null === cB || void 0 === cB ? void 0 : cB.YT) && void 0 !== FB ? FB : [...sI, ...null !== (NB = null === nB || void 0 === nB ? void 0 : nB.RT) && void 0 !== NB ? NB : []]),
+             this.chunkColumnInfos = xe.partition(), this.caveGenerator = new jt.c(qt, tt, et, null !== (lt = null === Ht || void 0 === Ht ? void 0 : Ht.fO.yO) && void 0 !== lt ? lt : "Lava");
+             const bt = new he(et, qt, tt, null !== (Et = null === Ht || void 0 === Ht ? void 0 : Ht.kO) && void 0 !== Et ? Et : [...Ke, ...null !== (ft = null === Xt || void 0 === Xt ? void 0 : Xt.BO) && void 0 !== ft ? ft : []]),
```

#### 936. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11058` → after: `L11058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11058) · [Before (L11058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11058)

```diff
-                 YN: BB,
+                 ff: tt,
```

#### 937. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11066-L11069` → after: `L11066-L11069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11066-L11069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11066-L11069) · [Before (L11066-L11069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11066-L11069)

```diff
-               CB = null !== (gB = null === cB || void 0 === cB ? void 0 : cB.dT) && void 0 !== gB ? gB : null,
-               QB = null !== (qB = null === nB || void 0 === nB ? void 0 : nB.buildBiomes) && void 0 !== qB ? qB : null,
-               sB = null !== CB ? (0, OI.d)(CB, dB) : null !== QB ? this.buildTerrainBiomes(QB, dB) : (0, OI.f)(dB);
-             this.biomeSelector = new OI.c(this, WB, JB, BB, IB, sB), this.treeGenerator = new FI(this, this.biomeSelector, BB, JB, IB), this.fixedPointPrefabTracker = new YB.b(vB, BB), this.prefabGenerator = new JI({
+               Ct = null !== (wt = null === Ht || void 0 === Ht ? void 0 : Ht.RO) && void 0 !== wt ? wt : null,
+               ut = null !== (yt = null === Xt || void 0 === Xt ? void 0 : Xt.buildBiomes) && void 0 !== yt ? yt : null,
+               Kt = null !== Ct ? (0, ve.e)(Ct, Jt) : null !== ut ? this.buildTerrainBiomes(ut, Jt) : (0, ve.f)(Jt);
+             this.biomeSelector = new ve.b(this, bt, qt, tt, et, Kt), this.treeGenerator = new fe(this, this.biomeSelector, tt, qt, et), this.fixedPointPrefabTracker = new Wt.c(dt, tt), this.prefabGenerator = new De({
```

#### 938. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11071` → after: `L11071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11071) · [Before (L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11071)

```diff
-               YN: BB,
+               ff: tt,
```

#### 939. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11075` → after: `L11075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11075) · [Before (L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11075)

```diff
-                 [oB.n.SURFACE]: {
+                 [Dt.o.SURFACE]: {
```

#### 940. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11077` → after: `L11077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11077) · [Before (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11077)

```diff
-                     [oB.l.MEDIUM]: {
+                     [Dt.k.MEDIUM]: {
```

#### 941. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11080` → after: `L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11080) · [Before (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11080)

```diff
-                     [oB.l.HIGH]: {
+                     [Dt.k.HIGH]: {
```

#### 942. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11083` → after: `L11083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11083) · [Before (L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11083)

```diff
-                     [oB.l.VERY_HIGH]: {
+                     [Dt.k.VERY_HIGH]: {
```

#### 943. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11088` → after: `L11088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11088) · [Before (L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11088)

```diff
-                 [oB.n.UNDERGROUND]: {
+                 [Dt.o.UNDERGROUND]: {
```

#### 944. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11090` → after: `L11090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11090) · [Before (L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11090)

```diff
-                     [oB.l.MEDIUM]: {
+                     [Dt.k.MEDIUM]: {
```

#### 945. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11093-L11094` → after: `L11093-L11094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11093-L11094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11093-L11094) · [Before (L11093-L11094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11093-L11094)

```diff
-                     [oB.l.HIGH]: null,
-                     [oB.l.VERY_HIGH]: null
+                     [Dt.k.HIGH]: null,
+                     [Dt.k.VERY_HIGH]: null
```

#### 946. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11099` → after: `L11099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11099) · [Before (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11099)

```diff
-             }), this.noWaterHeightmapGenerator = new bI.h((0, bI.j)(JB)), this.heightmapPerturb = new TB.g([{
+             }), this.noWaterHeightmapGenerator = new pe.i((0, pe.k)(qt)), this.heightmapPerturb = new Ot.i([{
```

#### 947. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11108` → after: `L11108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11108) · [Before (L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11108)

```diff
-             }], `${JB}HeightmapPerturb`);
+             }], `${qt}HeightmapPerturb`);
```

#### 948. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11114` → after: `L11114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11114) · [Before (L11114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11114)

```diff
-             this.waterBodyGenerator = new dI(this.biomeSelector, this.noWaterHeightmapGenerator, JB, BB, wB, this.needOutsideWaterDist, GB, null === (yB = null === cB || void 0 === cB ? void 0 : cB.TT) || void 0 === yB || yB), this.caveDecorationGenerator = new uI(IB, BB, JB, nul … [truncated]
+             this.waterBodyGenerator = new Je(this.biomeSelector, this.noWaterHeightmapGenerator, qt, tt, ht, this.needOutsideWaterDist, mt, null === (Nt = null === Ht || void 0 === Ht ? void 0 : Ht.EO) || void 0 === Nt || Nt), this.caveDecorationGenerator = new Ue(et, tt, qt, nul … [truncated]
```

#### 949. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11133` → after: `L11133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11133) · [Before (L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11133)

```diff
-             const ZB = this.YN,
+             const Vt = this.ff,
```

#### 950. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11151` → after: `L11151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11151) · [Before (L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11151)

```diff
-               if ((null !== (JB = TB.get(oB.key)) && void 0 !== JB ? JB : oB) !== oB) throw new Error(`A world-gen terrain built two biomes keyed "${oB.key}"`);
+               if ((null !== (qt = Ot.get(Dt.key)) && void 0 !== qt ? qt : Dt) !== Dt) throw new Error(`A world-gen terrain built two biomes keyed "${Dt.key}"`);
```

#### 951. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11161-L11162` → after: `L11161-L11162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11161-L11162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11161-L11162) · [Before (L11161-L11162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11161-L11162)

```diff
-               const BB = `${Math.floor(kB.x/this.YN)}|${Math.floor(kB.z/this.YN)}`,
-                 IB = null !== (GB = oB.get(BB)) && void 0 !== GB ? GB : [];
+               const tt = `${Math.floor(jt.x/this.ff)}|${Math.floor(jt.z/this.ff)}`,
+                 et = null !== (mt = Dt.get(tt)) && void 0 !== mt ? mt : [];
```

#### 952. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11167-L11168` → after: `L11167-L11168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11167-L11168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11167-L11168) · [Before (L11167-L11168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11167-L11168)

```diff
-               const BB = Math.floor(kB[0].x / this.YN) * this.YN,
-                 IB = Math.floor(kB[0].z / this.YN) * this.YN,
+               const tt = Math.floor(jt[0].x / this.ff) * this.ff,
+                 et = Math.floor(jt[0].z / this.ff) * this.ff,
```

#### 953. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11189` → after: `L11189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11189) · [Before (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11189)

```diff
-                   DZ: cB.prefab.name
+                   mO: Ht.prefab.name
```

#### 954. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11222` → after: `L11222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11222) · [Before (L11222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11222)

```diff
-               nB = TB.getOrGenerate(BB + Math.floor(this.YN / 2), IB + Math.floor(this.YN / 2))[0].biome.oreGenerator.getOreBlocksForChunk(BB, IB),
+               Xt = Ot.getOrGenerate(tt + Math.floor(this.ff / 2), et + Math.floor(this.ff / 2))[0].biome.oreGenerator.getOreBlocksForChunk(tt, et),
```

#### 955. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11240` → after: `L11240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11240) · [Before (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11240)

```diff
-             return TB.p.create(this.YN, [BB, IB], this.biomeSelector)
+             return Ot.s.create(this.ff, [tt, et], this.biomeSelector)
```

#### 956. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11243-L11244` → after: `L11243-L11244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11243-L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11243-L11244) · [Before (L11243-L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11243-L11244)

```diff
-             const GB = new bI.d(ZB, JB, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-             return TB.o.create(this.YN, [BB, IB], oB.f.NumFields, GB)
+             const mt = new pe.e(Vt, qt, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+             return Ot.q.create(this.ff, [tt, et], Dt.h.NumFields, mt)
```

#### 957. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11248` → after: `L11248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11248) · [Before (L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11248)

```diff
-       39735: (BB, IB, ZB) => {
+       39890: (tt, et, Vt) => {
```

#### 958. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11254-L11256` → after: `L11253-L11255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11253-L11255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11253-L11255) · [Before (L11254-L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11254-L11256)

```diff
-           k: () => HB,
-           o: () => RB,
-           p: () => aB,
+           j: () => ht,
+           n: () => It,
+           q: () => Ft,
```

#### 959. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11259` → after: `L11259-L11261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11259-L11261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11259-L11261) · [Before (L11259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11259)

```diff
-           z: () => QB,
+           x: () => ut,
+           A: () => wt,
+           B: () => Ct,
```

#### 960. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11261-L11263` → after: `L11263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11263) · [Before (L11261-L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11261-L11263)

```diff
-           G: () => CB,
-           I: () => UB,
-           L: () => yB
+           F: () => Nt
```

#### 961. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11265` → after: `L11265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11265) · [Before (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11265)

```diff
-         var TB = ZB(3e3),
+         var Ot = Vt(2934),
```

#### 962. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11278` → after: `L11278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11278) · [Before (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11278)

```diff
-             const IB = "function" == typeof BB ? BB : function(BB) {
+             const et = "function" == typeof tt ? tt : function(tt) {
```

#### 963. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11487` → after: `L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11487) · [Before (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11487)

```diff
-         var NB = ZB(39743);
+         var ft = Vt(39893);
```

#### 964. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11516` → after: `L11516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11516) · [Before (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11516)

```diff
-             uG: UB(BB, oB, GB),
+             pm: Mt(tt, Dt, mt),
```

#### 965. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11547` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11547) · [Before (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11547)

```diff
-             for (let ZB = 0; ZB < BB.length; ZB++) this._simplexes.push(new FB(`${IB}${ZB}`))
+             for (let Vt = 0; Vt < tt.length; Vt++) this._simplexes.push(new Et(`${et}${Vt}`))
```

#### 966. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11572` → after: `L11572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11572) · [Before (L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11572)

```diff
-             for (let JB = 0; JB < BB.length; JB++) this._simplexes.push(new FB(`${ZB}${JB}`));
+             for (let qt = 0; qt < tt.length; qt++) this._simplexes.push(new Et(`${Vt}${qt}`));
```

#### 967. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11580` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11580) · [Before (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11580)

```diff
-               if (ZB - this.remainingAmplitudes[TB] > this.threshold.high || ZB + this.remainingAmplitudes[TB] < this.threshold.low) return NB.d;
+               if (Vt - this.remainingAmplitudes[Ot] > this.threshold.high || Vt + this.remainingAmplitudes[Ot] < this.threshold.low) return ft.c;
```

#### 968. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11708` → after: `L11708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11708) · [Before (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11708)

```diff
-             if (void 0 === TB) throw new Error(`Number not found for x=${BB}, z=${IB}, thirdIndex=${ZB}`);
+             if (void 0 === Ot) throw new Error(`Number not found for x=${tt}, z=${et}, thirdIndex=${Vt}`);
```

#### 969. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11757` → after: `L11757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11757) · [Before (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11757)

```diff
-             if (void 0 === JB) throw new Error(`Number not found for x=${BB}, z=${IB}, thirdIndex=${ZB}, fourthIndex=${TB}`);
+             if (void 0 === qt) throw new Error(`Number not found for x=${tt}, z=${et}, thirdIndex=${Vt}, fourthIndex=${Ot}`);
```

#### 970. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11787` → after: `L11787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11787) · [Before (L11787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11787)

```diff
-       39743: (BB, IB, ZB) => {
+       39893: (tt, et, Vt) => {
```

#### 971. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11791-L11792` → after: `L11792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11792) · [Before (L11791-L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11791-L11792)

```diff
-           f: () => cB,
-           g: () => oB,
+           i: () => Dt,
```

#### 972. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11794-L11795` → after: `L11794-L11795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11794-L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11794-L11795) · [Before (L11794-L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11794-L11795)

```diff
-           n: () => JB,
-           r: () => TB
+           k: () => qt,
+           o: () => Ot
```

#### 973. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11808` → after: `L11808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11808) · [Before (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11808)

```diff
-       39748: (BB, IB, ZB) => {
+       39896: (tt, et, Vt) => {
```

#### 974. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11810-L11815` → after: `L11810-L11815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11810-L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11810-L11815) · [Before (L11810-L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11810-L11815)

```diff
-           c: () => JB,
-           f: () => TB,
-           j: () => kB,
-           l: () => vB,
-           n: () => GB,
-           q: () => oB
+           d: () => qt,
+           h: () => Ot,
+           i: () => jt,
+           k: () => dt,
+           o: () => mt,
+           r: () => Dt
```

#### 975. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11834` → after: `L11834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11834) · [Before (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11834)

```diff
-       4428: (BB, IB, ZB) => {
+       4347: (tt, et, Vt) => {
```

#### 976. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11836-L11839` → after: `L11836-L11838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11836-L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11836-L11838) · [Before (L11836-L11839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11836-L11839)

```diff
-           e: () => kB,
-           i: () => oB,
-           j: () => TB,
-           l: () => vB,
+           d: () => jt,
+           g: () => Dt,
+           k: () => Ot,
```

#### 977. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11841` → after: `L11840-L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11840-L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11840-L11841) · [Before (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11841)

```diff
-           s: () => JB
+           s: () => mt,
+           v: () => qt
```

#### 978. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11867` → after: `L11867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11867) · [Before (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11867)

```diff
-             if (this.distribution = void 0, BB.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(BB)}`);
+             if (this.distribution = void 0, tt.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(tt)}`);
```

#### 979. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11872` → after: `L11872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11872) · [Before (L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11872)

```diff
-               if (IB.has(TB)) throw new Error(`Values must be unique: ${JSON.stringify(BB)}`);
+               if (et.has(Ot)) throw new Error(`Values must be unique: ${JSON.stringify(tt)}`);
```

#### 980. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11875` → after: `L11875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11875) · [Before (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11875)

```diff
-               if (oB <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(BB)}`);
+               if (Dt <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(tt)}`);
```

#### 981. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11900` → after: `L11900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11900) · [Before (L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11900)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, BB > IB) throw new Error(`Min must be less than or equal to Max, but Min=${BB} and Max=${IB}`);
+             if (this.offset = void 0, this.multiplier = void 0, tt > et) throw new Error(`Min must be less than or equal to Max, but Min=${tt} and Max=${et}`);
```

#### 982. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11910` → after: `L11910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11910) · [Before (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11910)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new GB(BB, IB, ZB), !Number.isInteger(BB) || !Number.isInteger(IB)) throw new Error(`Min and Max must be integers, but Min=${BB} and Max=${IB}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new mt(tt, et, Vt), !Number.isInteger(tt) || !Number.isInteger(et)) throw new Error(`Min and Max must be integers, but Min=${tt} and Max=${et}`)
```

#### 983. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11926` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11926) · [Before (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11926)

```diff
-       665: (BB, IB, ZB) => {
+       710: (tt, et, Vt) => {
```

#### 984. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11928-L11934` → after: `L11928-L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11928-L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11928-L11931) · [Before (L11928-L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11928-L11934)

```diff
-           C: () => cB,
-           F: () => FB,
-           G: () => NB,
-           L: () => kB,
-           T: () => hB,
-           d: () => vB,
-           i: () => GB,
+           B: () => jt,
+           H: () => Qt,
+           e: () => dt,
+           h: () => mt,
```

#### 985. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11936` → after: `L11933-L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11933-L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11933-L11936) · [Before (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11936)

```diff
-           v: () => oB,
+           s: () => Dt,
+           t: () => lt,
+           u: () => Ht,
+           w: () => Et,
```

#### 986. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11939` → after: `L11939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11939) · [Before (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11939)

```diff
-         var TB = ZB(671);
+         var Ot = Vt(712);
```

#### 987. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11969` → after: `L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11969) · [Before (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11969)

```diff
-         TB.b, Number(atob("NQ==")), Number(atob("MTM="));
+         Ot.d, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 988. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11977` → after: `L11977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11977) · [Before (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11977)

```diff
-       671: (BB, IB, ZB) => {
+       712: (tt, et, Vt) => {
```

#### 989. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11979` → after: `L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11979) · [Before (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11979)

```diff
-           b: () => TB
+           d: () => Ot
```

#### 990. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11983-L11984` → after: `L11983-L11984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11983-L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L11983-L11984) · [Before (L11983-L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L11983-L11984)

```diff
-       36335: (BB, IB, ZB) => {
-         BB.exports = ZB.p + "static/media/bloxd_wasm_bg.aa99019a959b1a22dab3.wasm"
+       36542: (tt, et, Vt) => {
+         tt.exports = Vt.p + "static/media/bloxd_wasm_bg.64474d163218655c8ebd.wasm"
```

#### 991. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12066` → after: `L12066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12066) · [Before (L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12066)

```diff
-       ZB = IB < 0 ? this.length + IB : IB;
+       Vt = et < 0 ? this.length + et : et;
```

#### 992. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12081` → after: `L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12081) · [Before (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12081)

```diff
-     Vn: () => cB,
+     pX: () => Ht,
```

#### 993. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12083` → after: `L12083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12083) · [Before (L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12083)

```diff
-     Sn: () => hB,
+     xX: () => Qt,
```

#### 994. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12085-L12094` → after: `L12085-L12094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12085-L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12085-L12094) · [Before (L12085-L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12085-L12094)

```diff
-     Bh: () => FB,
-     Ih: () => NB,
-     Zh: () => gB,
-     Th: () => qB,
-     Jh: () => yB,
-     oh: () => UB,
-     Gh: () => WB,
-     kh: () => dB,
-     nh: () => CB,
-     hh: () => QB,
+     TX: () => Et,
+     gX: () => ft,
+     sX: () => wt,
+     tQ: () => yt,
+     eQ: () => Nt,
+     VQ: () => Mt,
+     OQ: () => bt,
+     qQ: () => Jt,
+     DQ: () => Ct,
+     mQ: () => ut,
```

#### 995. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12097-L12111` → after: `L12097-L12111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12097-L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12097-L12111) · [Before (L12097-L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12097-L12111)

```diff
-     zh: () => sB,
-     Fh: () => wB,
-     Nh: () => OB,
-     gh: () => YB,
-     qh: () => iB,
-     yh: () => pB,
-     Uh: () => aB,
-     Wh: () => HB,
-     dh: () => MB,
-     Ch: () => jB,
-     Qh: () => PB,
-     sh: () => RB,
-     Oh: () => rB,
-     Yh: () => mB,
-     ih: () => XB
+     dQ: () => Kt,
+     jQ: () => ht,
+     HQ: () => vt,
+     XQ: () => Wt,
+     QQ: () => St,
+     lQ: () => ct,
+     EQ: () => Rt,
+     fQ: () => It,
+     wQ: () => Pt,
+     yQ: () => Zt,
+     NQ: () => Lt,
+     aQ: () => Ft,
+     MQ: () => kt,
+     bQ: () => Gt,
+     JQ: () => zt
```

#### 996. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12125` → after: `L12125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12125) · [Before (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12125)

```diff
-       OI.VvWi(BB, 0)
+       ve.x2Af(tt, 0)
```

#### 997. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12128` → after: `L12128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12128) · [Before (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12128)

```diff
-       const BB = OI.IbXN(this.__wbg_ptr);
+       const tt = ve.rLMm(this.__wbg_ptr);
```

#### 998. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12133` → after: `L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12133) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12133)

```diff
-       return OI.UviD(this.__wbg_ptr) >>> 0
+       return ve.D8cT(this.__wbg_ptr) >>> 0
```

#### 999. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12136` → after: `L12136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12136) · [Before (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12136)

```diff
-       const BB = OI.PfkX();
+       const tt = ve.itQy();
```

#### 1000. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12140` → after: `L12140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12140) · [Before (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12140)

```diff
-       return OI.C5GE(this.__wbg_ptr) >>> 0
+       return ve.ICYr(this.__wbg_ptr) >>> 0
```

#### 1001. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12143` → after: `L12143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12143) · [Before (L12143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12143)

```diff
-       const IB = OI.zxKP(this.__wbg_ptr, BB);
+       const et = ve.jY71(this.__wbg_ptr, tt);
```

#### 1002. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12148` → after: `L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12148) · [Before (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12148)

```diff
-       const IB = OI.TmAP(this.__wbg_ptr, BB);
+       const et = ve.p7wJ(this.__wbg_ptr, tt);
```

#### 1003. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12183` → after: `L12183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12183) · [Before (L12183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12183)

```diff
-       OI.lOfU(BB, 0)
+       ve.AJoG(tt, 0)
```

#### 1004. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12186` → after: `L12186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12186) · [Before (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12186)

```diff
-       const ZB = OI.sgWq(this.__wbg_ptr, BB, IB);
+       const Vt = ve.CAuP(this.__wbg_ptr, tt, et);
```

#### 1005. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12191` → after: `L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12191) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12191)

```diff
-       const IB = OI.tKJj(this.__wbg_ptr, BB);
+       const et = ve.waCJ(this.__wbg_ptr, tt);
```

#### 1006. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12196` → after: `L12196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12196) · [Before (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12196)

```diff
-       OI.aJxf(this.__wbg_ptr)
+       ve.Jsqi(this.__wbg_ptr)
```

#### 1007. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12199` → after: `L12199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12199) · [Before (L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12199)

```diff
-       return OI.pjX2() >>> 0
+       return ve.tGHt() >>> 0
```

#### 1008. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12202` → after: `L12202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12202) · [Before (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12202)

```diff
-       return OI.qAtq(this.__wbg_ptr) >>> 0
+       return ve.yoaD(this.__wbg_ptr) >>> 0
```

#### 1009. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12205` → after: `L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12205) · [Before (L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12205)

```diff
-       const BB = OI.Gjtt(this.__wbg_ptr);
+       const tt = ve.Sbrw(this.__wbg_ptr);
```

#### 1010. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12209` → after: `L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12209) · [Before (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12209)

```diff
-       return OI.wKLn(this.__wbg_ptr) >>> 0
+       return ve.FYA2(this.__wbg_ptr) >>> 0
```

#### 1011. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12212` → after: `L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12212) · [Before (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12212)

```diff
-       return OI.D7sp(this.__wbg_ptr) >>> 0
+       return ve.sqee(this.__wbg_ptr) >>> 0
```

#### 1012. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12215` → after: `L12215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12215) · [Before (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12215)

```diff
-       return OI.JVox() >>> 0
+       return ve.YGdI() >>> 0
```

#### 1013. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12218` → after: `L12218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12218) · [Before (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12218)

```diff
-       const BB = OI.ovMl();
+       const tt = ve.ymW8();
```

#### 1014. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12222` → after: `L12222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12222) · [Before (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12222)

```diff
-       return OI.uW1U(this.__wbg_ptr) >>> 0
+       return ve.cvUE(this.__wbg_ptr) >>> 0
```

#### 1015. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12225` → after: `L12225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12225) · [Before (L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12225)

```diff
-       return OI.V8YV(this.__wbg_ptr) >>> 0
+       return ve.pMKG(this.__wbg_ptr) >>> 0
```

#### 1016. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12228` → after: `L12228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12228) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12228)

```diff
-       return OI.Tb7g(this.__wbg_ptr) >>> 0
+       return ve.UmqC(this.__wbg_ptr) >>> 0
```

#### 1017. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12231` → after: `L12231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12231) · [Before (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12231)

```diff
-       return OI.xdmR(this.__wbg_ptr, BB) >>> 0
+       return ve.wvQ5(this.__wbg_ptr, tt) >>> 0
```

#### 1018. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12234` → after: `L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12234) · [Before (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12234)

```diff
-       const ZB = OI.lgEt(this.__wbg_ptr, BB, IB);
+       const Vt = ve.qSYI(this.__wbg_ptr, tt, et);
```

#### 1019. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12238` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12238) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12238)

```diff
-       const ZB = NI(BB, OI.VwSS),
+       const Vt = we(tt, ve.l2E5),
```

#### 1020. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12240` → after: `L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12240) · [Before (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12240)

```diff
-       OI.JqXD(this.__wbg_ptr, ZB, TB, IB)
+       ve.Q46E(this.__wbg_ptr, Vt, Ot, et)
```

#### 1021. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12245` → after: `L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12245) · [Before (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12245)

```diff
-         const ZB = OI.HXtR(this.__wbg_ptr);
+         const Vt = ve.Kfqe(this.__wbg_ptr);
```

#### 1022. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12248` → after: `L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12248) · [Before (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12248)

```diff
-         OI.t267(BB, IB, 1)
+         ve.dTko(tt, et, 1)
```

#### 1023. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12260` → after: `L12260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12260) · [Before (L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12260)

```diff
-       OI.cjls(BB, 0)
+       ve.pTae(tt, 0)
```

#### 1024. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12264` → after: `L12264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12264) · [Before (L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12264)

```diff
-       const ZB = OI.T3z0(this.__wbg_ptr, BB, IB.__wbg_ptr);
+       const Vt = ve.oN2Q(this.__wbg_ptr, tt, et.__wbg_ptr);
```

#### 1025. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12269` → after: `L12269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12269) · [Before (L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12269)

```diff
-       const BB = OI.RvN3(this.__wbg_ptr);
+       const tt = ve.uS6N(this.__wbg_ptr);
```

#### 1026. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12274` → after: `L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12274) · [Before (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12274)

```diff
-       const hB = OI.wTDN(this.__wbg_ptr, BB.__wbg_ptr, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB);
+       const Qt = ve.WUsQ(this.__wbg_ptr, tt.__wbg_ptr, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt);
```

#### 1027. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12279` → after: `L12279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12279) · [Before (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12279)

```diff
-       const BB = OI.Qi8F(this.__wbg_ptr);
+       const tt = ve.BSSk(this.__wbg_ptr);
```

#### 1028. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12281` → after: `L12281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12281) · [Before (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12281)

```diff
-       return OI.t267(BB[0], 8 * BB[1], 8), IB
+       return ve.dTko(tt[0], 8 * tt[1], 8), et
```

#### 1029. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12284` → after: `L12284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12284) · [Before (L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12284)

```diff
-       return OI.vbtJ(this.__wbg_ptr) >>> 0
+       return ve.nz47(this.__wbg_ptr) >>> 0
```

#### 1030. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12287` → after: `L12287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12287) · [Before (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12287)

```diff
-       return OI.d6ma(this.__wbg_ptr) >>> 0
+       return ve.xiky(this.__wbg_ptr) >>> 0
```

#### 1031. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12290` → after: `L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12290) · [Before (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12290)

```diff
-       return OI.mTKR(this.__wbg_ptr) >>> 0
+       return ve.UgdC(this.__wbg_ptr) >>> 0
```

#### 1032. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12293` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12293) · [Before (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12293)

```diff
-       const kB = OI.ETFC(BB, IB, ZB, TB, JB, oB, GB, vB);
+       const jt = ve.Qubx(tt, et, Vt, Ot, qt, Dt, mt, dt);
```

#### 1033. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12299` → after: `L12299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12299) · [Before (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12299)

```diff
-       const IB = OI.qF7A(this.__wbg_ptr, BB.__wbg_ptr);
+       const et = ve.eekZ(this.__wbg_ptr, tt.__wbg_ptr);
```

#### 1034. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12304` → after: `L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12304) · [Before (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12304)

```diff
-       const IB = OI.lYkF(this.__wbg_ptr, BB);
+       const et = ve.ZdKq(this.__wbg_ptr, tt);
```

#### 1035. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12308` → after: `L12308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12308) · [Before (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12308)

```diff
-       return OI.IxBx(this.__wbg_ptr) >>> 0
+       return ve.oYqx(this.__wbg_ptr) >>> 0
```

#### 1036. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12312` → after: `L12312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12312) · [Before (L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12312)

```diff
-       const ZB = OI.WjjO(this.__wbg_ptr, BB.__wbg_ptr, IB.__wbg_ptr);
+       const Vt = ve.ZLfW(this.__wbg_ptr, tt.__wbg_ptr, et.__wbg_ptr);
```

#### 1037. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12317` → after: `L12317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12317) · [Before (L12317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12317)

```diff
-       const IB = OI.DJbX(this.__wbg_ptr, BB);
+       const et = ve.pJ7A(this.__wbg_ptr, tt);
```

#### 1038. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12322` → after: `L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12322) · [Before (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12322)

```diff
-       const ZB = OI.TtY1(this.__wbg_ptr, BB, IB.__wbg_ptr);
+       const Vt = ve.n4Jo(this.__wbg_ptr, tt, et.__wbg_ptr);
```

#### 1039. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12326` → after: `L12326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12326) · [Before (L12326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12326)

```diff
-       const IB = qI(BB, OI.VwSS),
+       const et = Ne(tt, ve.l2E5),
```

#### 1040. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12328` → after: `L12328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12328) · [Before (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12328)

```diff
-         TB = OI.iv6M(this.__wbg_ptr, IB, ZB);
+         Ot = ve.Fn1y(this.__wbg_ptr, et, Vt);
```

#### 1041. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12332` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12332) · [Before (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12332)

```diff
-       const GB = OI.wvVf(this.__wbg_ptr, BB, IB, ZB, TB, JB, oB);
+       const mt = ve.Axma(this.__wbg_ptr, tt, et, Vt, Ot, qt, Dt);
```

#### 1042. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12336` → after: `L12336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12336) · [Before (L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12336)

```diff
-       const JB = NI(BB, OI.VwSS),
+       const qt = we(tt, ve.l2E5),
```

#### 1043. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12338` → after: `L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12338) · [Before (L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12338)

```diff
-         GB = qI(IB, OI.VwSS),
+         mt = Ne(et, ve.l2E5),
```

#### 1044. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12340` → after: `L12340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12340) · [Before (L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12340)

```diff
-         kB = qI(ZB, OI.VwSS),
+         jt = Ne(Vt, ve.l2E5),
```

#### 1045. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12342` → after: `L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12342) · [Before (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12342)

```diff
-         nB = qI(TB, OI.VwSS),
+         Xt = Ne(Ot, ve.l2E5),
```

#### 1046. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12344` → after: `L12344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12344) · [Before (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12344)

```diff
-         zB = OI.Ordq(this.__wbg_ptr, JB, oB, GB, vB, kB, cB, nB, hB);
+         lt = ve.kpT4(this.__wbg_ptr, qt, Dt, mt, dt, jt, Ht, Xt, Qt);
```

#### 1047. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12349` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12349) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12349)

```diff
-       const ZB = OI.nYXS(this.__wbg_ptr, BB, IB.__wbg_ptr);
+       const Vt = ve.ngoX(this.__wbg_ptr, tt, et.__wbg_ptr);
```

#### 1048. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12353` → after: `L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12353) · [Before (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12353)

```diff
-       const TB = OI.OTUN(this.__wbg_ptr, BB, IB, ZB);
+       const Ot = ve.j1Ix(this.__wbg_ptr, tt, et, Vt);
```

#### 1049. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12358` → after: `L12358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12358) · [Before (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12358)

```diff
-       return OI.Rf2M(this.__wbg_ptr, BB.__wbg_ptr, IB, ZB, TB, JB, oB, GB, vB, kB, cB)
+       return ve.Pa5B(this.__wbg_ptr, tt.__wbg_ptr, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht)
```

#### 1050. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12373` → after: `L12373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12373) · [Before (L12373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12373)

```diff
-       OI.qGxN(BB, 0)
+       ve.bExh(tt, 0)
```

#### 1051. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12376` → after: `L12376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12376) · [Before (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12376)

```diff
-       const IB = OI.TDRm(this.__wbg_ptr, BB);
+       const et = ve.kf55(this.__wbg_ptr, tt);
```

#### 1052. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12381` → after: `L12381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12381) · [Before (L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12381)

```diff
-       return OI.FZXn(this.__wbg_ptr, BB, IB, ZB)
+       return ve.udwU(this.__wbg_ptr, tt, et, Vt)
```

#### 1053. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12384` → after: `L12384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12384) · [Before (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12384)

```diff
-       return OI.rTlR(this.__wbg_ptr, BB, IB, ZB) >>> 0
+       return ve.Dnz0(this.__wbg_ptr, tt, et, Vt) >>> 0
```

#### 1054. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12387` → after: `L12387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12387) · [Before (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12387)

```diff
-       return 0 !== OI.DPJq(this.__wbg_ptr, BB, IB, ZB, TB)
+       return 0 !== ve.QegG(this.__wbg_ptr, tt, et, Vt, Ot)
```

#### 1055. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12390` → after: `L12390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12390) · [Before (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12390)

```diff
-       OI.MWSi(this.__wbg_ptr)
+       ve.phlL(this.__wbg_ptr)
```

#### 1056. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12393` → after: `L12393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12393) · [Before (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12393)

```diff
-       const IB = OI.vW1m(this.__wbg_ptr, BB);
+       const et = ve.BcBT(this.__wbg_ptr, tt);
```

#### 1057. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12396` → after: `L12396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12396) · [Before (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12396)

```diff
-       return OI.t267(IB[0], 1 * IB[1], 1), ZB
+       return ve.dTko(et[0], 1 * et[1], 1), Vt
```

#### 1058. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12399` → after: `L12399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12399) · [Before (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12399)

```diff
-       return OI.fqaP(this.__wbg_ptr, BB, IB) >>> 0
+       return ve.RSxS(this.__wbg_ptr, tt, et) >>> 0
```

#### 1059. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12402` → after: `L12402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12402) · [Before (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12402)

```diff
-       OI.cSzL(this.__wbg_ptr)
+       ve.qih3(this.__wbg_ptr)
```

#### 1060. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12405` → after: `L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12405) · [Before (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12405)

```diff
-       OI.NZVH(this.__wbg_ptr, BB, IB, ZB)
+       ve.kzxB(this.__wbg_ptr, tt, et, Vt)
```

#### 1061. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12408` → after: `L12408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12408) · [Before (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12408)

```diff
-       const IB = OI.fJDB(this.__wbg_ptr, BB);
+       const et = ve.k3TQ(this.__wbg_ptr, tt);
```

#### 1062. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12412` → after: `L12412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12412) · [Before (L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12412)

```diff
-       return OI.sjkM(this.__wbg_ptr) >>> 0
+       return ve.alIW(this.__wbg_ptr) >>> 0
```

#### 1063. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12415` → after: `L12415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12415) · [Before (L12415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12415)

```diff
-       return OI.iDmU(this.__wbg_ptr) >>> 0
+       return ve.flKk(this.__wbg_ptr) >>> 0
```

#### 1064. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12418` → after: `L12418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12418) · [Before (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12418)

```diff
-       OI.VXXt(this.__wbg_ptr, BB, IB, ZB)
+       ve.q5fN(this.__wbg_ptr, tt, et, Vt)
```

#### 1065. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12421` → after: `L12421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12421) · [Before (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12421)

```diff
-       OI.VzK9(this.__wbg_ptr, BB, IB, ZB)
+       ve.P040(this.__wbg_ptr, tt, et, Vt)
```

#### 1066. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12424` → after: `L12424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12424) · [Before (L12424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12424)

```diff
-       return OI.n9yk(this.__wbg_ptr) >>> 0
+       return ve.JLQc(this.__wbg_ptr) >>> 0
```

#### 1067. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12427` → after: `L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12427) · [Before (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12427)

```diff
-       return OI.ywfN(this.__wbg_ptr) >>> 0
+       return ve.mlsF(this.__wbg_ptr) >>> 0
```

#### 1068. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12430` → after: `L12430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12430) · [Before (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12430)

```diff
-       const BB = OI.XR8H();
+       const tt = ve.Z0LA();
```

#### 1069. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12434` → after: `L12434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12434) · [Before (L12434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12434)

```diff
-       const BB = OI.Q4fD();
+       const tt = ve.rslU();
```

#### 1070. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12438` → after: `L12438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12438) · [Before (L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12438)

```diff
-       return OI.jyZE(this.__wbg_ptr) >>> 0
+       return ve.FLPI(this.__wbg_ptr) >>> 0
```

#### 1071. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12441` → after: `L12441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12441) · [Before (L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12441)

```diff
-       return OI.ci83(this.__wbg_ptr) >>> 0
+       return ve.bCMj(this.__wbg_ptr) >>> 0
```

#### 1072. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12444` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12444) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12444)

```diff
-       const JB = OI.Yd12(this.__wbg_ptr, BB, IB, ZB, TB);
+       const qt = ve.mHIX(this.__wbg_ptr, tt, et, Vt, Ot);
```

#### 1073. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12448` → after: `L12448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12448) · [Before (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12448)

```diff
-       return OI.GkVD(this.__wbg_ptr) >>> 0
+       return ve.KkCS(this.__wbg_ptr) >>> 0
```

#### 1074. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12451` → after: `L12451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12451) · [Before (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12451)

```diff
-       return OI.LvNb(this.__wbg_ptr) >>> 0
+       return ve.RaaD(this.__wbg_ptr) >>> 0
```

#### 1075. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12454` → after: `L12454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12454) · [Before (L12454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12454)

```diff
-       OI.hF7t(this.__wbg_ptr, BB, IB, ZB, TB)
+       ve.S6v3(this.__wbg_ptr, tt, et, Vt, Ot)
```

#### 1076. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12457` → after: `L12457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12457) · [Before (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12457)

```diff
-       OI.ZGiQ(this.__wbg_ptr, BB)
+       ve.gYlc(this.__wbg_ptr, tt)
```

#### 1077. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12460` → after: `L12460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12460) · [Before (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12460)

```diff
-       const oB = gI(IB, OI.VwSS),
+       const Dt = ye(et, ve.l2E5),
```

#### 1078. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12462` → after: `L12462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12462) · [Before (L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12462)

```diff
-         vB = NI(ZB, OI.VwSS),
+         dt = we(Vt, ve.l2E5),
```

#### 1079. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12464` → after: `L12464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12464) · [Before (L12464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12464)

```diff
-         cB = qI(TB, OI.VwSS),
+         Ht = Ne(Ot, ve.l2E5),
```

#### 1080. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12466)

```diff
-         hB = OI.R7R5(this.__wbg_ptr, BB, oB, GB, vB, kB, cB, nB, JB);
+         Qt = ve.Jx9x(this.__wbg_ptr, tt, Dt, mt, dt, jt, Ht, Xt, qt);
```

#### 1081. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12470` → after: `L12470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12470) · [Before (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12470)

```diff
-       const JB = gI(BB, OI.VwSS),
+       const qt = ye(tt, ve.l2E5),
```

#### 1082. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12472` → after: `L12472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12472) · [Before (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12472)

```diff
-         GB = NI(IB, OI.VwSS),
+         mt = we(et, ve.l2E5),
```

#### 1083. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12474` → after: `L12474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12474) · [Before (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12474)

```diff
-         kB = qI(ZB, OI.VwSS),
+         jt = Ne(Vt, ve.l2E5),
```

#### 1084. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12476` → after: `L12476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12476) · [Before (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12476)

```diff
-         nB = gI(TB, OI.VwSS),
+         Xt = ye(Ot, ve.l2E5),
```

#### 1085. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12478` → after: `L12478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12478) · [Before (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12478)

```diff
-         zB = OI.VvFs(this.__wbg_ptr, JB, oB, GB, vB, kB, cB, nB, hB);
+         lt = ve.MF2I(this.__wbg_ptr, qt, Dt, mt, dt, jt, Ht, Xt, Qt);
```

#### 1086. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12482` → after: `L12482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12482) · [Before (L12482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12482)

```diff
-       const IB = gI(BB, OI.VwSS),
+       const et = ye(tt, ve.l2E5),
```

#### 1087. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12484` → after: `L12484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12484) · [Before (L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12484)

```diff
-         TB = OI.yjnu(this.__wbg_ptr, IB, ZB);
+         Ot = ve.prPt(this.__wbg_ptr, et, Vt);
```

#### 1088. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12488` → after: `L12488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12488) · [Before (L12488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12488)

```diff
-       return OI.oJwn(this.__wbg_ptr) >>> 0
+       return ve.svmN(this.__wbg_ptr) >>> 0
```

#### 1089. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12491` → after: `L12491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12491) · [Before (L12491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12491)

```diff
-       const IB = OI.C4U1(this.__wbg_ptr, BB);
+       const et = ve.ENTa(this.__wbg_ptr, tt);
```

#### 1090. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12496` → after: `L12496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12496) · [Before (L12496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12496)

```diff
-       return OI.P3LM(this.__wbg_ptr) >>> 0
+       return ve.dzB9(this.__wbg_ptr) >>> 0
```

#### 1091. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12499` → after: `L12499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12499) · [Before (L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12499)

```diff
-       const BB = OI.PEwY(this.__wbg_ptr);
+       const tt = ve.Zkdx(this.__wbg_ptr);
```

#### 1092. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12501` → after: `L12501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12501) · [Before (L12501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12501)

```diff
-       return OI.t267(BB[0], 8 * BB[1], 8), IB
+       return ve.dTko(tt[0], 8 * tt[1], 8), et
```

#### 1093. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12504` → after: `L12504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12504) · [Before (L12504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12504)

```diff
-       return OI.XBta(this.__wbg_ptr) >>> 0
+       return ve.L4gj(this.__wbg_ptr) >>> 0
```

#### 1094. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12507` → after: `L12507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12507) · [Before (L12507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12507)

```diff
-       const BB = OI.szu9(this.__wbg_ptr);
+       const tt = ve.PJDG(this.__wbg_ptr);
```

#### 1095. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12509` → after: `L12509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12509) · [Before (L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12509)

```diff
-       return OI.t267(BB[0], 4 * BB[1], 4), TB
+       return ve.dTko(tt[0], 4 * tt[1], 4), Ot
```

#### 1096. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12520` → after: `L12520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12520) · [Before (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12520)

```diff
-       OI.vgcz(BB, 0)
+       ve.FH5G(tt, 0)
```

#### 1097. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12523` → after: `L12523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12523) · [Before (L12523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12523)

```diff
-       const IB = NI(BB, OI.VwSS),
+       const et = we(tt, ve.l2E5),
```

#### 1098. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12525` → after: `L12525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12525) · [Before (L12525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12525)

```diff
-         TB = OI.dVJy(this.__wbg_ptr, IB, ZB);
+         Ot = ve.eUw4(this.__wbg_ptr, et, Vt);
```

#### 1099. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12529` → after: `L12529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12529) · [Before (L12529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12529)

```diff
-       return OI.xdWf(this.__wbg_ptr) >>> 0
+       return ve.i5iD(this.__wbg_ptr) >>> 0
```

#### 1100. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12532` → after: `L12532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12532) · [Before (L12532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12532)

```diff
-       return OI.F21B(this.__wbg_ptr) >>> 0
+       return ve.mvXi(this.__wbg_ptr) >>> 0
```

#### 1101. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12535` → after: `L12535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12535) · [Before (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12535)

```diff
-       const BB = OI.W9cb();
+       const tt = ve.EYlT();
```

#### 1102. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12540` → after: `L12540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12540) · [Before (L12540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12540)

```diff
-       const ZB = OI.aOer(this.__wbg_ptr, BB.__wbg_ptr, IB);
+       const Vt = ve.wGvu(this.__wbg_ptr, tt.__wbg_ptr, et);
```

#### 1103. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12545` → after: `L12545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12545) · [Before (L12545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12545)

```diff
-       const IB = NI(BB, OI.VwSS),
+       const et = we(tt, ve.l2E5),
```

#### 1104. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12547` → after: `L12547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12547) · [Before (L12547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12547)

```diff
-       OI.o9Lm(this.__wbg_ptr, IB, ZB)
+       ve.r8Zz(this.__wbg_ptr, et, Vt)
```

#### 1105. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12550` → after: `L12550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12550) · [Before (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12550)

```diff
-       const IB = NI(BB, OI.VwSS),
+       const et = we(tt, ve.l2E5),
```

#### 1106. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12552` → after: `L12552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12552) · [Before (L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12552)

```diff
-       OI.H2hI(this.__wbg_ptr, IB, ZB)
+       ve.I7Sa(this.__wbg_ptr, et, Vt)
```

#### 1107. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12563` → after: `L12563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12563) · [Before (L12563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12563)

```diff
-       OI.wkxq(BB, 0)
+       ve.rloY(tt, 0)
```

#### 1108. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12566` → after: `L12566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12566) · [Before (L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12566)

```diff
-       const ZB = gI(BB, OI.VwSS),
+       const Vt = ye(tt, ve.l2E5),
```

#### 1109. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12568` → after: `L12568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12568) · [Before (L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12568)

```diff
-       return OI.cPua(this.__wbg_ptr, ZB, TB, IB) >>> 0
+       return ve.NGZz(this.__wbg_ptr, Vt, Ot, et) >>> 0
```

#### 1110. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12572` → after: `L12572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12572) · [Before (L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12572)

```diff
-       const TB = gI(ZB, OI.VwSS),
+       const Ot = ye(Vt, ve.l2E5),
```

#### 1111. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12574` → after: `L12574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12574) · [Before (L12574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12574)

```diff
-         oB = OI.uxxl(this.__wbg_ptr, BB.__wbg_ptr, IB, TB, JB);
+         Dt = ve.G8AS(this.__wbg_ptr, tt.__wbg_ptr, et, Ot, qt);
```

#### 1112. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12579` → after: `L12579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12579) · [Before (L12579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12579)

```diff
-       return OI.BVVF(this.__wbg_ptr, BB) >>> 0
+       return ve.XhEL(this.__wbg_ptr, tt) >>> 0
```

#### 1113. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12582` → after: `L12582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12582) · [Before (L12582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12582)

```diff
-       const BB = OI.qOAO();
+       const tt = ve.fOkw();
```

#### 1114. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12587` → after: `L12587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12587) · [Before (L12587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12587)

```diff
-       const ZB = OI.tyIm(this.__wbg_ptr, BB.__wbg_ptr, IB);
+       const Vt = ve.U5Va(this.__wbg_ptr, tt.__wbg_ptr, et);
```

#### 1115. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12592` → after: `L12592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12592) · [Before (L12592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12592)

```diff
-       const IB = gI(BB, OI.VwSS),
+       const et = ye(tt, ve.l2E5),
```

#### 1116. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12594` → after: `L12594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12594) · [Before (L12594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12594)

```diff
-       OI.yUFG(this.__wbg_ptr, IB, ZB)
+       ve.D1Qk(this.__wbg_ptr, et, Vt)
```

#### 1117. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12597` → after: `L12597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12597) · [Before (L12597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12597)

```diff
-       return OI.mdKw(this.__wbg_ptr) >>> 0
+       return ve.a4Ce(this.__wbg_ptr) >>> 0
```

#### 1118. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12600` → after: `L12600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12600) · [Before (L12600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12600)

```diff
-       return OI.m4TE(this.__wbg_ptr) >>> 0
+       return ve.NrZb(this.__wbg_ptr) >>> 0
```

#### 1119. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12611` → after: `L12611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12611) · [Before (L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12611)

```diff
-       OI.fpCo(BB, 0)
+       ve.R34H(tt, 0)
```

#### 1120. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12614` → after: `L12614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12614) · [Before (L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12614)

```diff
-       const IB = OI.Mkxj(this.__wbg_ptr, BB);
+       const et = ve.keKH(this.__wbg_ptr, tt);
```

#### 1121. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12619` → after: `L12619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12619) · [Before (L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12619)

```diff
-       var JB = zI(TB) ? 0 : yI(TB, OI.VwSS, OI.CvSx),
+       var qt = Ee(Ot) ? 0 : ae(Ot, ve.l2E5, ve.LBdo),
```

#### 1122. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12621` → after: `L12621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12621) · [Before (L12621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12621)

```diff
-       const GB = OI.Y6Y1(this.__wbg_ptr, BB, zI(IB) ? Number.MAX_SAFE_INTEGER : IB | 0, ZB, JB, oB);
+       const mt = ve.vkH4(this.__wbg_ptr, tt, Ee(et) ? Number.MAX_SAFE_INTEGER : et | 0, Vt, qt, Dt);
```

#### 1123. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12626` → after: `L12626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12626) · [Before (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12626)

```diff
-       const IB = yI(BB, OI.VwSS, OI.CvSx),
+       const et = ae(tt, ve.l2E5, ve.LBdo),
```

#### 1124. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12628` → after: `L12628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12628) · [Before (L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12628)

```diff
-       OI.SL90(this.__wbg_ptr, IB, ZB)
+       ve.PXNV(this.__wbg_ptr, et, Vt)
```

#### 1125. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12631` → after: `L12631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12631) · [Before (L12631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12631)

```diff
-       return OI.IQKV(this.__wbg_ptr)
+       return ve.zAtO(this.__wbg_ptr)
```

#### 1126. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12634` → after: `L12634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12634) · [Before (L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12634)

```diff
-       return OI.g3Ca(this.__wbg_ptr, BB) >>> 0
+       return ve.Fpcx(this.__wbg_ptr, tt) >>> 0
```

#### 1127. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12637` → after: `L12637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12637) · [Before (L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12637)

```diff
-       return OI.BbAj(this.__wbg_ptr) >>> 0
+       return ve.CaWr(this.__wbg_ptr) >>> 0
```

#### 1128. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12640` → after: `L12640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12640) · [Before (L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12640)

```diff
-       return OI.uciI(this.__wbg_ptr) >>> 0
+       return ve.xdk7(this.__wbg_ptr) >>> 0
```

#### 1129. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12643` → after: `L12643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12643) · [Before (L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12643)

```diff
-       const ZB = OI.cepJ(this.__wbg_ptr, BB, IB);
+       const Vt = ve.jhPv(this.__wbg_ptr, tt, et);
```

#### 1130. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12647` → after: `L12647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12647) · [Before (L12647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12647)

```diff
-       return OI.U7m2(this.__wbg_ptr) >>> 0
+       return ve.uvgD(this.__wbg_ptr) >>> 0
```

#### 1131. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12650` → after: `L12650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12650) · [Before (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12650)

```diff
-       return OI.Oreh(this.__wbg_ptr) >>> 0
+       return ve.jmSn(this.__wbg_ptr) >>> 0
```

#### 1132. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12653` → after: `L12653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12653) · [Before (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12653)

```diff
-       return OI.OK9t(this.__wbg_ptr) >>> 0
+       return ve.Ga55(this.__wbg_ptr) >>> 0
```

#### 1133. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12656` → after: `L12656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12656) · [Before (L12656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12656)

```diff
-       const TB = NI(BB, OI.VwSS),
+       const Ot = we(tt, ve.l2E5),
```

#### 1134. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12658` → after: `L12658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12658) · [Before (L12658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12658)

```diff
-         oB = NI(IB, OI.VwSS),
+         Dt = we(et, ve.l2E5),
```

#### 1135. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12660` → after: `L12660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12660) · [Before (L12660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12660)

```diff
-         vB = OI.pxJv(this.__wbg_ptr, TB, JB, oB, GB, ZB);
+         dt = ve.tjQp(this.__wbg_ptr, Ot, qt, Dt, mt, Vt);
```

#### 1136. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12664` → after: `L12664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12664) · [Before (L12664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12664)

```diff
-       return OI.YzlR(this.__wbg_ptr) >>> 0
+       return ve.gPNC(this.__wbg_ptr) >>> 0
```

#### 1137. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12667` → after: `L12667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12667) · [Before (L12667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12667)

```diff
-       const oB = OI.WJrp(this.__wbg_ptr, BB, IB, ZB, TB, JB);
+       const Dt = ve.u6Vb(this.__wbg_ptr, tt, et, Vt, Ot, qt);
```

#### 1138. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12672` → after: `L12672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12672) · [Before (L12672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12672)

```diff
-       const dB = FI(BB, OI.VwSS),
+       const Jt = fe(tt, ve.l2E5),
```

#### 1139. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12674` → after: `L12674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12674) · [Before (L12674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12674)

```diff
-         QB = qI(IB, OI.VwSS),
+         ut = Ne(et, ve.l2E5),
```

#### 1140. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12676` → after: `L12676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12676) · [Before (L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12676)

```diff
-         wB = NI(ZB, OI.VwSS),
+         ht = we(Vt, ve.l2E5),
```

#### 1141. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12678` → after: `L12678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12678) · [Before (L12678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12678)

```diff
-         YB = gI(TB, OI.VwSS),
+         Wt = ye(Ot, ve.l2E5),
```

#### 1142. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12680` → after: `L12680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12680) · [Before (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12680)

```diff
-         pB = gI(JB, OI.VwSS),
+         ct = ye(qt, ve.l2E5),
```

#### 1143. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12682` → after: `L12682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12682) · [Before (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12682)

```diff
-         HB = NI(oB, OI.VwSS),
+         It = we(Dt, ve.l2E5),
```

#### 1144. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12684` → after: `L12684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12684) · [Before (L12684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12684)

```diff
-         jB = NI(GB, OI.VwSS),
+         Zt = we(mt, ve.l2E5),
```

#### 1145. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12686` → after: `L12686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12686) · [Before (L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12686)

```diff
-         RB = qI(vB, OI.VwSS),
+         Ft = Ne(dt, ve.l2E5),
```

#### 1146. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12688` → after: `L12688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12688) · [Before (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12688)

```diff
-         mB = qI(kB, OI.VwSS),
+         Gt = Ne(jt, ve.l2E5),
```

#### 1147. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12690` → after: `L12690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12690) · [Before (L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12690)

```diff
-         LB = gI(cB, OI.VwSS),
+         ot = ye(Ht, ve.l2E5),
```

#### 1148. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12692` → after: `L12692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12692) · [Before (L12692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12692)

```diff
-       var uB = zI(nB) ? 0 : FI(nB, OI.VwSS),
+       var Ut = Ee(Xt) ? 0 : fe(Xt, ve.l2E5),
```

#### 1149. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12694` → after: `L12694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12694) · [Before (L12694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12694)

```diff
-       const lB = NI(hB, OI.VwSS),
+       const it = we(Qt, ve.l2E5),
```

#### 1150. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12696` → after: `L12696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12696) · [Before (L12696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12696)

```diff
-         tB = gI(zB, OI.VwSS),
+         Bt = ye(lt, ve.l2E5),
```

#### 1151. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12698` → after: `L12698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12698) · [Before (L12698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12698)

```diff
-       var EB = zI(FB) ? 0 : gI(FB, OI.VwSS),
+       var Tt = Ee(Et) ? 0 : ye(Et, ve.l2E5),
```

#### 1152. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12700` → after: `L12700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12700) · [Before (L12700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12700)

```diff
-       const KB = qI(NB, OI.VwSS),
+       const st = Ne(ft, ve.l2E5),
```

#### 1153. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12702` → after: `L12702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12702) · [Before (L12702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12702)

```diff
-         SB = OI.F6ko(dB, CB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB, jB, PB, RB, rB, mB, XB, LB, eB, uB, fB, lB, AB, tB, xB, EB, DB, KB, VB, gB, qB, yB, UB, WB);
+         te = ve.EpxD(Jt, Ct, ut, Kt, ht, vt, Wt, St, ct, Rt, It, Pt, Zt, Lt, Ft, kt, Gt, zt, ot, rt, Ut, At, it, Yt, Bt, xt, Tt, gt, st, nt, wt, yt, Nt, Mt, bt);
```

#### 1154. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12707` → after: `L12707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12707) · [Before (L12707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12707)

```diff
-       const ZB = NI(BB, OI.VwSS),
+       const Vt = we(tt, ve.l2E5),
```

#### 1155. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12709` → after: `L12709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12709) · [Before (L12709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12709)

```diff
-         JB = OI.cJiD(this.__wbg_ptr, ZB, TB, IB);
+         qt = ve.HtdN(this.__wbg_ptr, Vt, Ot, et);
```

#### 1156. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12712` → after: `L12712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12712) · [Before (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12712)

```diff
-       return OI.t267(JB[0], 1 * JB[1], 1), oB
+       return ve.dTko(qt[0], 1 * qt[1], 1), Dt
```

#### 1157. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12715` → after: `L12715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12715) · [Before (L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12715)

```diff
-       OI.C2OK(this.__wbg_ptr, zI(BB) ? 16777215 : BB)
+       ve.fkNM(this.__wbg_ptr, Ee(tt) ? 16777215 : tt)
```

#### 1158. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12718` → after: `L12718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12718) · [Before (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12718)

```diff
-       return OI.OIT9(this.__wbg_ptr, BB) >>> 0
+       return ve.e7l6(this.__wbg_ptr, tt) >>> 0
```

#### 1159. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12721` → after: `L12721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12721) · [Before (L12721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12721)

```diff
-       return OI.pzJU(this.__wbg_ptr) >>> 0
+       return ve.S8RC(this.__wbg_ptr) >>> 0
```

#### 1160. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12724` → after: `L12724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12724) · [Before (L12724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12724)

```diff
-       const BB = OI.v9en(this.__wbg_ptr);
+       const tt = ve.jSqk(this.__wbg_ptr);
```

#### 1161. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12729` → after: `L12729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12729) · [Before (L12729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12729)

```diff
-       return OI.Jz5P(this.__wbg_ptr) >>> 0
+       return ve.vfaB(this.__wbg_ptr) >>> 0
```

#### 1162. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12732` → after: `L12732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12732) · [Before (L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12732)

```diff
-       return OI.nQUm(this.__wbg_ptr) >>> 0
+       return ve.gt1F(this.__wbg_ptr) >>> 0
```

#### 1163. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12743` → after: `L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12743) · [Before (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12743)

```diff
-       OI.LtpF(BB, 0)
+       ve.Bh5f(tt, 0)
```

#### 1164. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12746` → after: `L12746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12746) · [Before (L12746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12746)

```diff
-       var JB = zI(TB) ? 0 : yI(TB, OI.VwSS, OI.CvSx),
+       var qt = Ee(Ot) ? 0 : ae(Ot, ve.l2E5, ve.LBdo),
```

#### 1165. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12748` → after: `L12748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12748) · [Before (L12748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12748)

```diff
-       const GB = OI.GkEb(this.__wbg_ptr, BB, zI(IB) ? Number.MAX_SAFE_INTEGER : IB | 0, ZB, JB, oB);
+       const mt = ve.mtt4(this.__wbg_ptr, tt, Ee(et) ? Number.MAX_SAFE_INTEGER : et | 0, Vt, qt, Dt);
```

#### 1166. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12753` → after: `L12753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12753) · [Before (L12753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12753)

```diff
-       const IB = yI(BB, OI.VwSS, OI.CvSx),
+       const et = ae(tt, ve.l2E5, ve.LBdo),
```

#### 1167. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12755` → after: `L12755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12755) · [Before (L12755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12755)

```diff
-       OI.ZijC(this.__wbg_ptr, IB, ZB)
+       ve.eych(this.__wbg_ptr, et, Vt)
```

#### 1168. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12758` → after: `L12758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12758) · [Before (L12758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12758)

```diff
-       return OI.ZV3n(this.__wbg_ptr) >>> 0
+       return ve.sHJw(this.__wbg_ptr) >>> 0
```

#### 1169. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12761` → after: `L12761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12761) · [Before (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12761)

```diff
-       return OI.jifB(this.__wbg_ptr) >>> 0
+       return ve.AX0m(this.__wbg_ptr) >>> 0
```

#### 1170. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12764` → after: `L12764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12764) · [Before (L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12764)

```diff
-       const IB = OI.jgAU(this.__wbg_ptr, BB);
+       const et = ve.gWbY(this.__wbg_ptr, tt);
```

#### 1171. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12769` → after: `L12769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12769) · [Before (L12769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12769)

```diff
-       const GB = FI(BB, OI.VwSS),
+       const mt = fe(tt, ve.l2E5),
```

#### 1172. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12771` → after: `L12771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12771) · [Before (L12771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12771)

```diff
-         kB = qI(IB, OI.VwSS),
+         jt = Ne(et, ve.l2E5),
```

#### 1173. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12773` → after: `L12773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12773) · [Before (L12773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12773)

```diff
-         nB = NI(ZB, OI.VwSS),
+         Xt = we(Vt, ve.l2E5),
```

#### 1174. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12775` → after: `L12775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12775) · [Before (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12775)

```diff
-         zB = gI(TB, OI.VwSS),
+         lt = ye(Ot, ve.l2E5),
```

#### 1175. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12777` → after: `L12777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12777) · [Before (L12777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12777)

```diff
-         NB = OI.b20J(GB, vB, kB, cB, nB, hB, zB, FB, JB, oB);
+         ft = ve.jBeN(mt, dt, jt, Ht, Xt, Qt, lt, Et, qt, Dt);
```

#### 1176. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12782` → after: `L12782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12782) · [Before (L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12782)

```diff
-       return OI.OnVh(this.__wbg_ptr) >>> 0
+       return ve.q5uf(this.__wbg_ptr) >>> 0
```

#### 1177. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12785` → after: `L12785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12785) · [Before (L12785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12785)

```diff
-       const BB = OI.ndUn(this.__wbg_ptr);
+       const tt = ve.LQWK(this.__wbg_ptr);
```

#### 1178. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12790` → after: `L12790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12790) · [Before (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12790)

```diff
-       return OI.PHW9(this.__wbg_ptr) >>> 0
+       return ve.Bmty(this.__wbg_ptr) >>> 0
```

#### 1179. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12795` → after: `L12795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12795) · [Before (L12795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12795)

```diff
-     const BB = OI.Tj2H();
+     const tt = ve.DGHA();
```

#### 1180. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12797` → after: `L12797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12797) · [Before (L12797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12797)

```diff
-     return OI.t267(BB[0], 4 * BB[1], 4), IB
+     return ve.dTko(tt[0], 4 * tt[1], 4), et
```

#### 1181. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12803` → after: `L12803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12803) · [Before (L12803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12803)

```diff
-       const JB = FI(BB, OI.VwSS),
+       const qt = fe(tt, ve.l2E5),
```

#### 1182. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12805` → after: `L12805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12805) · [Before (L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12805)

```diff
-         GB = yI(IB, OI.VwSS, OI.CvSx),
+         mt = ae(et, ve.l2E5, ve.LBdo),
```

#### 1183. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12807` → after: `L12807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12807) · [Before (L12807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12807)

```diff
-         kB = OI.N0Ib(JB, oB, GB, vB);
+         jt = ve.pvs8(qt, Dt, mt, dt);
```

#### 1184. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12810` → after: `L12810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12810) · [Before (L12810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12810)

```diff
-       OI.t267(ZB, TB, 1)
+       ve.dTko(Vt, Ot, 1)
```

#### 1185. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12815` → after: `L12815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12815) · [Before (L12815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12815)

```diff
-     const BB = OI.sgBZ();
+     const tt = ve.yHux();
```

#### 1186. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12817` → after: `L12817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12817) · [Before (L12817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12817)

```diff
-     return OI.t267(BB[0], 4 * BB[1], 4), IB
+     return ve.dTko(tt[0], 4 * tt[1], 4), et
```

#### 1187. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12821` → after: `L12821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12821) · [Before (L12821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12821)

```diff
-     return 0 !== OI.i1ff(BB)
+     return 0 !== ve.MqLd(tt)
```

#### 1188. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12825` → after: `L12825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12825) · [Before (L12825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12825)

```diff
-     const ZB = yI(BB, OI.VwSS, OI.CvSx),
+     const Vt = ae(tt, ve.l2E5, ve.LBdo),
```

#### 1189. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12827` → after: `L12827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12827) · [Before (L12827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12827)

```diff
-       JB = OI.hABz(ZB, TB, IB);
+       qt = ve.uyLs(Vt, Ot, et);
```

#### 1190. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12832` → after: `L12832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12832) · [Before (L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12832)

```diff
-     OI.LjJr()
+     ve.UfnI()
```

#### 1191. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12836` → after: `L12836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12836) · [Before (L12836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12836)

```diff
-     return OI.JoW6() >>> 0
+     return ve.gaW3() >>> 0
```

#### 1192. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12840` → after: `L12840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12840) · [Before (L12840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12840)

```diff
-     return 0 !== OI.dX3Z(BB)
+     return 0 !== ve.VRk1(tt)
```

#### 1193. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12844` → after: `L12844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12844) · [Before (L12844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12844)

```diff
-     return 0 !== OI.AUmS(BB)
+     return 0 !== ve.MMVb(tt)
```

#### 1194. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12848` → after: `L12848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12848) · [Before (L12848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12848)

```diff
-     OI.kUCV(BB)
+     ve.M7Sw(tt)
```

#### 1195. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12852` → after: `L12852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12852) · [Before (L12852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12852)

```diff
-     return OI.REau() >>> 0
+     return ve.IDlU() >>> 0
```

#### 1196. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12856` → after: `L12856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12856) · [Before (L12856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12856)

```diff
-     return OI.NEUv() >>> 0
+     return ve.s03M() >>> 0
```

#### 1197. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12860` → after: `L12860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12860) · [Before (L12860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12860)

```diff
-     return 0 !== OI.nMNw()
+     return 0 !== ve.bysj()
```

#### 1198. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12864` → after: `L12864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12864) · [Before (L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12864)

```diff
-     const BB = OI.egm9();
+     const tt = ve.bsRj();
```

#### 1199. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12866` → after: `L12866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12866) · [Before (L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12866)

```diff
-     return OI.t267(BB[0], 4 * BB[1], 4), IB
+     return ve.dTko(tt[0], 4 * tt[1], 4), et
```

#### 1200. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12870` → after: `L12870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12870) · [Before (L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12870)

```diff
-     const BB = OI.eg6B();
+     const tt = ve.YFkK();
```

#### 1201. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12872` → after: `L12872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12872) · [Before (L12872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12872)

```diff
-     return OI.t267(BB[0], 4 * BB[1], 4), IB
+     return ve.dTko(tt[0], 4 * tt[1], 4), et
```

#### 1202. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12876` → after: `L12876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12876) · [Before (L12876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12876)

```diff
-     const BB = OI.H300();
+     const tt = ve.WhYC();
```

#### 1203. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12878` → after: `L12878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12878) · [Before (L12878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12878)

```diff
-     return OI.t267(BB[0], 4 * BB[1], 4), IB
+     return ve.dTko(tt[0], 4 * tt[1], 4), et
```

#### 1204. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12882` → after: `L12882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12882) · [Before (L12882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12882)

```diff
-     return OI.k30Q() >>> 0
+     return ve.mlvT() >>> 0
```

#### 1205. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12886` → after: `L12886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12886) · [Before (L12886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12886)

```diff
-     OI.JUjR()
+     ve.iWbT()
```

#### 1206. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12892` → after: `L12892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12892) · [Before (L12892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12892)

```diff
-       const ZB = OI.rO2K();
+       const Vt = ve.s3uE();
```

#### 1207. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12895` → after: `L12895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12895) · [Before (L12895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12895)

```diff
-       OI.t267(BB, IB, 1)
+       ve.dTko(tt, et, 1)
```

#### 1208. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12900` → after: `L12900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12900) · [Before (L12900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12900)

```diff
-     OI.fbFK(EB(BB))
+     ve.ONRI(Tt(tt))
```

#### 1209. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12906` → after: `L12906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12906) · [Before (L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12906)

```diff
-       HJYk: {
+       baO7: {
```

#### 1210. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12908` → after: `L12908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12908) · [Before (L12908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12908)

```diff
-         oonQ: function(BB, IB) {
+         QUmg: function(tt, et) {
```

#### 1211. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12911` → after: `L12911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12911) · [Before (L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12911)

```diff
-         fLpa: function(BB, IB) {
+         jgk9: function(tt, et) {
```

#### 1212. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12914` → after: `L12914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12914) · [Before (L12914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12914)

```diff
-         XMbS: function(BB) {
+         ClE0: function(tt) {
```

#### 1213. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12917` → after: `L12917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12917) · [Before (L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12917)

```diff
-         MfKI: function(BB, IB) {
+         YwCw: function(tt, et) {
```

#### 1214. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12920` → after: `L12920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12920) · [Before (L12920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12920)

```diff
-         Xlbs: function() {
+         w27p: function() {
```

#### 1215. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12923` → after: `L12923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12923) · [Before (L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12923)

```diff
-         Zd7z: function(BB) {
+         xW2v: function(tt) {
```

#### 1216. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12933` → after: `L12933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12933) · [Before (L12933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12933)

```diff
-     } : new FinalizationRegistry((BB => OI.VvWi(BB, 1))),
+     } : new FinalizationRegistry((tt => ve.x2Af(tt, 1))),
```

#### 1217. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12937` → after: `L12937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12937) · [Before (L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12937)

```diff
-     } : new FinalizationRegistry((BB => OI.lOfU(BB, 1))),
+     } : new FinalizationRegistry((tt => ve.AJoG(tt, 1))),
```

#### 1218. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12941` → after: `L12941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12941) · [Before (L12941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12941)

```diff
-     } : new FinalizationRegistry((BB => OI.cjls(BB, 1))),
+     } : new FinalizationRegistry((tt => ve.pTae(tt, 1))),
```

#### 1219. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12945` → after: `L12945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12945) · [Before (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12945)

```diff
-     } : new FinalizationRegistry((BB => OI.qGxN(BB, 1))),
+     } : new FinalizationRegistry((tt => ve.bExh(tt, 1))),
```

#### 1220. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12949` → after: `L12949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12949) · [Before (L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12949)

```diff
-     } : new FinalizationRegistry((BB => OI.vgcz(BB, 1))),
+     } : new FinalizationRegistry((tt => ve.FH5G(tt, 1))),
```

#### 1221. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12953` → after: `L12953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12953) · [Before (L12953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12953)

```diff
-     } : new FinalizationRegistry((BB => OI.wkxq(BB, 1))),
+     } : new FinalizationRegistry((tt => ve.rloY(tt, 1))),
```

#### 1222. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12957` → after: `L12957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12957) · [Before (L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12957)

```diff
-     } : new FinalizationRegistry((BB => OI.fpCo(BB, 1))),
+     } : new FinalizationRegistry((tt => ve.R34H(tt, 1))),
```

#### 1223. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12961` → after: `L12961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12961) · [Before (L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12961)

```diff
-     } : new FinalizationRegistry((BB => OI.LtpF(BB, 1)));
+     } : new FinalizationRegistry((tt => ve.Bh5f(tt, 1)));
```

#### 1224. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12970` → after: `L12970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L12970) · [Before (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L12970)

```diff
-     if (!(BB instanceof IB)) throw new Error(`expected instance of ${IB.name}`)
+     if (!(tt instanceof et)) throw new Error(`expected instance of ${et.name}`)
```

#### 1225. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13090` → after: `L13090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13090) · [Before (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13090)

```diff
-     return wI = BB, OI = BB.exports, sI = IB, BI = null, ZI = null, JI = null, oI = null, vI = null, OI.Hu6y(), OI
+     return he = tt, ve = tt.exports, Ke = et, ee = null, Oe = null, De = null, me = null, je = null, ve.m8vZ(), ve
```

#### 1226. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13114` → after: `L13114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13114) · [Before (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13114)

```diff
-         if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
+         if (!tt.ok) throw new Error(`failed to fetch Wasm: ${tt.status} ${tt.statusText} fetching '${tt.url}'`);
```

#### 1227. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13174` → after: `L13174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13174) · [Before (L13174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13174)

```diff
-     return null === RI ? "not failed" : `${RI}: ${(BB=rI)instanceof Error?`${BB.name}: ${BB.message}`:String(BB)}`;
+     return null === Fe ? "not failed" : `${Fe}: ${(tt=ke)instanceof Error?`${tt.name}: ${tt.message}`:String(tt)}`;
```

#### 1228. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13179` → after: `L13179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13179) · [Before (L13179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13179)

```diff
-     if (!tI()) throw new Error(`Bloxd wasm is not ready (${bI()}): check isBloxdWasmReady() first`);
+     if (!Be()) throw new Error(`Bloxd wasm is not ready (${pe()}): check isBloxdWasmReady() first`);
```

#### 1229. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13212` → after: `L13212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13212) · [Before (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13212)

```diff
-       sh: JB
+       aQ: qt
```

#### 1230. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13233` → after: `L13233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13233) · [Before (L13233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13233)

```diff
-     PI = "failed", RI = IB, rI = BB, console.error(`Bloxd wasm failed (${IB}):`, BB);
+     Le = "failed", Fe = et, ke = tt, console.error(`Bloxd wasm failed (${et}):`, tt);
```

#### 1231. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13248` → after: `L13248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13248) · [Before (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13248)

```diff
-     url: () => new ZB.U(ZB(36335)),
+     url: () => new Vt.U(Vt(36542)),
```

#### 1232. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13252` → after: `L13252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13252) · [Before (L13252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13252)

```diff
-   var ZZ = ZB(3e3),
+   var OV = Vt(2934),
```

#### 1233. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13254` → after: `L13254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13254) · [Before (L13254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13254)

```diff
-     JZ = (ZB(39844), ZB(665));
+     DV = (Vt(39989), Vt(710));
```

#### 1234. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13261` → after: `L13261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13261) · [Before (L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13261)

```diff
-       } = ZB(39852), FB = function(BB, IB, ZB) {
+       } = Vt(39995), Et = function(tt, et, Vt) {
```

#### 1235. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13263` → after: `L13263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13263) · [Before (L13263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13263)

```diff
-         for (const vB of BB.RT) hZ(vB, ZB);
+         for (const dt of tt.BO) lV(dt, Vt);
```

#### 1236. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13266` → after: `L13266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13266) · [Before (L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13266)

```diff
-           RT: BB.RT,
+           BO: tt.BO,
```

#### 1237. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13272` → after: `L13272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13272) · [Before (L13272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13272)

```diff
-           throw new Error(`Custom world-gen terrain "${TB.name}" is not in this generator's catalogue (${BB.length>0?BB.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${Ot.name}" is not in this generator's catalogue (${tt.length>0?tt.join(", "):"empty"})`)
```

#### 1238. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13277` → after: `L13277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13277) · [Before (L13277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13277)

```diff
-               if (null !== BB.PT) throw new Error(`Custom world-gen terrain "${BB.name}" takes no options`);
+               if (null !== tt.YO) throw new Error(`Custom world-gen terrain "${tt.name}" takes no options`);
```

#### 1239. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13281-L13282` → after: `L13281-L13282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13281-L13282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13281-L13282) · [Before (L13281-L13282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13281-L13282)

```diff
-             if (null !== BB.PT) try {
-               ZB = JSON.parse(BB.PT)
+             if (null !== tt.YO) try {
+               Vt = JSON.parse(tt.YO)
```

#### 1240. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13284` → after: `L13284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13284) · [Before (L13284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13284)

```diff
-               throw new Error(`Custom world-gen terrain "${BB.name}" has invalid optionsJson: ${String(TB)}`, {
+               throw new Error(`Custom world-gen terrain "${tt.name}" has invalid optionsJson: ${String(Ot)}`, {
```

#### 1241. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13291` → after: `L13291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13291) · [Before (L13291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13291)

```diff
-           RT: BB.RT,
+           BO: tt.BO,
```

#### 1242. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13294` → after: `L13294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13294) · [Before (L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13294)

```diff
-       }(null !== (nB = null === vB || void 0 === vB ? void 0 : vB.HT) && void 0 !== nB ? nB : null, kB, IB);
+       }(null !== (Xt = null === dt || void 0 === dt ? void 0 : dt.rO) && void 0 !== Xt ? Xt : null, jt, et);
```

#### 1243. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13296` → after: `L13296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13296) · [Before (L13296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13296)

```diff
-       const NB = null !== (hB = null === vB || void 0 === vB ? void 0 : vB.layers) && void 0 !== hB ? hB : [];
+       const ft = null !== (Qt = null === dt || void 0 === dt ? void 0 : dt.layers) && void 0 !== Qt ? Qt : [];
```

#### 1244. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13299` → after: `L13299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13299) · [Before (L13299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13299)

```diff
-         const ZB = [...BB].sort(((BB, IB) => BB.BT - IB.BT));
+         const Vt = [...tt].sort(((tt, et) => tt.XO - et.XO));
```

#### 1245. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13301` → after: `L13301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13301) · [Before (L13301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13301)

```diff
-           if (ZB[TB].BT < ZB[TB - 1].IT) throw new Error(`Custom world-gen layers overlap: [${ZB[TB-1].BT}, ${ZB[TB-1].IT}) and [${ZB[TB].BT}, ${ZB[TB].IT})`)
+           if (Vt[Ot].XO < Vt[Ot - 1].QO) throw new Error(`Custom world-gen layers overlap: [${Vt[Ot-1].XO}, ${Vt[Ot-1].QO}) and [${Vt[Ot].XO}, ${Vt[Ot].QO})`)
```

#### 1246. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13313` → after: `L13313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13313) · [Before (L13313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13313)

```diff
-         if (ZB >= JB.BT && ZB < JB.IT) return oB.getChunk(BB, IB, ZB - JB.ZT, TB);
+         if (Vt >= qt.XO && Vt < qt.QO) return Dt.getChunk(tt, et, Vt - qt.lO, Ot);
```

#### 1247. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13331-L13332` → after: `L13331-L13332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13331-L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13331-L13332) · [Before (L13331-L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13331-L13332)

```diff
-     if (BB.BT >= BB.IT) throw new Error(`Custom world-gen layer has minY (${BB.BT}) >= maxY (${BB.IT})`);
-     if (BB.BT % JZ.C !== 0 || BB.IT % JZ.C !== 0 || BB.ZT % JZ.C !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${JZ.C}); got minY=${BB.BT}, maxY=${BB.IT}, groundY=${BB.ZT}`);
+     if (tt.XO >= tt.QO) throw new Error(`Custom world-gen layer has minY (${tt.XO}) >= maxY (${tt.QO})`);
+     if (tt.XO % DV.u !== 0 || tt.QO % DV.u !== 0 || tt.lO % DV.u !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${DV.u}); got minY=${tt.XO}, maxY=${tt.QO}, groundY=${tt.lO}`);
```

#### 1248. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13334-L13337` → after: `L13334-L13337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13334-L13337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13334-L13337) · [Before (L13334-L13337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13334-L13337)

```diff
-         if (void 0 === (0, JZ.G)(BB.GT, IB)) throw new Error(`Custom world-gen caves lavaPitBlock "${BB.GT}" not found in blockMetadata`);
-         if (BB.vT)
-           for (const ZB of BB.vT) vZ(ZB, IB)
-       }(BB.JT, IB), 0 === BB.dT.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, DV.y)(tt.yO, et)) throw new Error(`Custom world-gen caves lavaPitBlock "${tt.yO}" not found in blockMetadata`);
+         if (tt.NO)
+           for (const Vt of tt.NO) jV(Vt, et)
+       }(tt.fO, et), 0 === tt.RO.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1249. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13339` → after: `L13339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13339) · [Before (L13339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13339)

```diff
-     for (const TB of BB.dT) nZ(TB, IB), ZB += TB.frequency;
+     for (const Ot of tt.RO) QV(Ot, et), Vt += Ot.frequency;
```

#### 1250. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13341` → after: `L13341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13341) · [Before (L13341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13341)

```diff
-     for (const TB of BB.YT) hZ(TB, IB)
+     for (const Ot of tt.kO) lV(Ot, et)
```

#### 1251. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13347-L13349` → after: `L13347-L13349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13347-L13349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13347-L13349) · [Before (L13347-L13349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13347-L13349)

```diff
-       cT: TB,
-       nT: JB,
-       hT: oB
+       MO: Ot,
+       bO: qt,
+       JO: Dt
```

#### 1252. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13351-L13352` → after: `L13351-L13352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13351-L13352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13351-L13352) · [Before (L13351-L13352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13351-L13352)

```diff
-     if (void 0 === (0, JZ.G)(ZB, IB)) throw new Error(`Custom world-gen cave decoration blockName "${ZB}" not found in blockMetadata`);
-     if (!TB && !JB && !oB) throw new Error(`Custom world-gen cave decoration "${ZB}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, DV.y)(Vt, et)) throw new Error(`Custom world-gen cave decoration blockName "${Vt}" not found in blockMetadata`);
+     if (!Ot && !qt && !Dt) throw new Error(`Custom world-gen cave decoration "${Vt}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1253. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13355-L13356` → after: `L13355-L13356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13355-L13356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13355-L13356) · [Before (L13355-L13356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13355-L13356)

```diff
-     if (oB && kZ(ZB, "meta|rot1|top", IB), cZ(BB.zT, ZB, "zT"), cZ(BB.FT, ZB, "FT"), !Number.isInteger(BB.NT) || BB.NT < 0) throw new Error(`Custom world-gen cave decoration "${ZB}" minPlacements must be a non-negative integer, got ${BB.NT}`);
-     if (!(0, JZ.L)(BB.gT) && (cZ(BB.gT.yT, ZB, "depthRamp.deepClusterChance"), BB.gT.UT <= BB.gT.WT)) throw new Error(`Custom world-gen cave decoration "${ZB}" deepY must be strictly smaller than shallowY, but ${BB.gT.UT} <= ${BB.gT.WT} `)
+     if (Dt && HV(Vt, "meta|rot1|top", et), XV(tt.CO, Vt, "CO"), XV(tt.uO, Vt, "uO"), !Number.isInteger(tt.KO) || tt.KO < 0) throw new Error(`Custom world-gen cave decoration "${Vt}" minPlacements must be a non-negative integer, got ${tt.KO}`);
+     if (!(0, DV.B)(tt.hO) && (XV(tt.hO.WO, Vt, "depthRamp.deepClusterChance"), tt.hO.SO <= tt.hO.cO)) throw new Error(`Custom world-gen cave decoration "${Vt}" deepY must be strictly smaller than shallowY, but ${tt.hO.SO} <= ${tt.hO.cO} `)
```

#### 1254. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13360-L13361` → after: `L13360-L13361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13360-L13361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13360-L13361) · [Before (L13360-L13361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13360-L13361)

```diff
-     const TB = `${BB}|${IB}`;
-     if (void 0 === (0, JZ.G)(TB, ZB)) throw new Error(`Custom world-gen cave decoration "${BB}" is missing directional variant "${TB}" required for wall/ceiling anchoring`)
+     const Ot = `${tt}|${et}`;
+     if (void 0 === (0, DV.y)(Ot, Vt)) throw new Error(`Custom world-gen cave decoration "${tt}" is missing directional variant "${Ot}" required for wall/ceiling anchoring`)
```

#### 1255. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13365` → after: `L13365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13365) · [Before (L13365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13365)

```diff
-     if (BB < 0 || BB > 1) throw new Error(`Custom world-gen cave decoration "${IB}" ${ZB} must be in [0, 1], got ${BB}`)
+     if (tt < 0 || tt > 1) throw new Error(`Custom world-gen cave decoration "${et}" ${Vt} must be in [0, 1], got ${tt}`)
```

#### 1256. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13369-L13375` → after: `L13369-L13375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13369-L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13369-L13375) · [Before (L13369-L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13369-L13375)

```diff
-     if (BB.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${BB.frequency}`);
-     if (void 0 === (0, JZ.G)(BB.QT, IB)) throw new Error(`Custom world-gen biome topsoilBlock "${BB.QT}" not found in blockMetadata`);
-     if (void 0 === (0, JZ.G)(BB.sT, IB)) throw new Error(`Custom world-gen biome lowsoilBlock "${BB.sT}" not found in blockMetadata`);
-     if (0 === BB.wT.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const ZB of BB.wT) {
-       if (ZB.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${ZB.frequency}`);
-       if (void 0 === (0, JZ.G)(ZB.blockName, IB)) throw new Error(`Custom world-gen biome stoneType blockName "${ZB.blockName}" not found in blockMetadata`)
+     if (tt.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${tt.frequency}`);
+     if (void 0 === (0, DV.y)(tt.PO, et)) throw new Error(`Custom world-gen biome topsoilBlock "${tt.PO}" not found in blockMetadata`);
+     if (void 0 === (0, DV.y)(tt.ZO, et)) throw new Error(`Custom world-gen biome lowsoilBlock "${tt.ZO}" not found in blockMetadata`);
+     if (0 === tt.LO.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const Vt of tt.LO) {
+       if (Vt.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${Vt.frequency}`);
+       if (void 0 === (0, DV.y)(Vt.blockName, et)) throw new Error(`Custom world-gen biome stoneType blockName "${Vt.blockName}" not found in blockMetadata`)
```

#### 1257. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13380-L13384` → after: `L13380-L13384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13380-L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13380-L13384) · [Before (L13380-L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13380-L13384)

```diff
-     if (void 0 === (0, JZ.G)(BB.blockName, IB)) throw new Error(`Custom world-gen ore blockName "${BB.blockName}" not found in blockMetadata`);
-     if (BB.radius < 0) throw new Error(`Custom world-gen ore "${BB.blockName}" radius must be >= 0, got ${BB.radius}`);
-     if (BB.pT <= 0) throw new Error(`Custom world-gen ore "${BB.blockName}" minDistBetweenDeposits must be > 0, got ${BB.pT}`);
-     if (BB.BT > BB.IT) throw new Error(`Custom world-gen ore "${BB.blockName}" minY (${BB.BT}) must be <= maxY (${BB.IT})`);
-     if (BB.aT < 0 || BB.aT > 1) throw new Error(`Custom world-gen ore "${BB.blockName}" spawnChance must be in [0, 1], got ${BB.aT}`)
+     if (void 0 === (0, DV.y)(tt.blockName, et)) throw new Error(`Custom world-gen ore blockName "${tt.blockName}" not found in blockMetadata`);
+     if (tt.radius < 0) throw new Error(`Custom world-gen ore "${tt.blockName}" radius must be >= 0, got ${tt.radius}`);
+     if (tt.zO <= 0) throw new Error(`Custom world-gen ore "${tt.blockName}" minDistBetweenDeposits must be > 0, got ${tt.zO}`);
+     if (tt.XO > tt.QO) throw new Error(`Custom world-gen ore "${tt.blockName}" minY (${tt.XO}) must be <= maxY (${tt.QO})`);
+     if (tt.oO < 0 || tt.oO > 1) throw new Error(`Custom world-gen ore "${tt.blockName}" spawnChance must be in [0, 1], got ${tt.oO}`)
```

#### 1258. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13386` → after: `L13386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13386) · [Before (L13386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13386)

```diff
-   ZB(39778);
+   Vt(39926);
```

#### 1259. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13391-L13394` → after: `L13391-L13394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13391-L13394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13391-L13394) · [Before (L13391-L13394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13391-L13394)

```diff
-       pT: 10,
-       BT: -98,
-       IT: -78,
-       aT: .4
+       zO: 10,
+       XO: -98,
+       QO: -78,
+       oO: .4
```

#### 1260. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13399-L13402` → after: `L13399-L13402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13399-L13402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13399-L13402) · [Before (L13399-L13402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13399-L13402)

```diff
-       pT: 6,
-       BT: -40,
-       IT: 20,
-       aT: .6
+       zO: 6,
+       XO: -40,
+       QO: 20,
+       oO: .6
```

#### 1261. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13406-L13409` → after: `L13406-L13409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13406-L13409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13406-L13409) · [Before (L13406-L13409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13406-L13409)

```diff
-       pT: 10,
-       BT: -75,
-       IT: -55,
-       aT: .4
+       zO: 10,
+       XO: -75,
+       QO: -55,
+       oO: .4
```

#### 1262. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13413` → after: `L13413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13413) · [Before (L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13413)

```diff
-       PT: null
+       YO: null
```

#### 1263. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13416` → after: `L13416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L13416) · [Before (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/procGenWorker.js#L13416)

```diff
-     [zZ]: () => ZB(39731).b
+     [EV]: () => Vt(39880).b
```
