# Changed — Bundle Modifications Report (Part 021 / 133)

- **Updated at**: `2026-11-21T12:06 JST`
- **Part**: `21 / 133` (**418** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 020](part-020.md) · [Part 022 →](part-022.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/113.js` (x17cru.159bd7ce → bqoxjr.2558012f · continued)

- **File**: `bundles/bloxd.io/chunks/js/113.js` (4641 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787)

#### 3568. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26779-L26780` → after: `L26383-L26384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26383-L26384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26383-L26384) · [Before (L26779-L26780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26779-L26780)

```diff
-         const Jd = null !== (dd = this.opts.meshingWorkerCount) && void 0 !== dd ? dd : 1;
-         this.busynessTracker = new gd.e(Jd), this.busynessTracker.markWindowStart(), this.endWorkers();
+         const FQ = null !== (QQ = this.opts.meshingWorkerCount) && void 0 !== QQ ? QQ : 1;
+         this.busynessTracker = new vQ.c(FQ), this.busynessTracker.markWindowStart(), this.endWorkers();
```

#### 3569. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26790` → after: `L26394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26394) · [Before (L26790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26790)

```diff
-         null !== this.busynessTracker && (this.endWorkers(), this.workersStopped || (this.resultQueue.drainAll(), this.lostWorkers.clear(), this.retiredWorkers.clear(), this.workerReplacements.length = 0, this.jobsTowardRefill.length = 0, this.lostCauses.length = 0, this.workerSc … [truncated]
+         null !== this.busynessTracker && (this.endWorkers(), this.workersStopped || (this.resultQueue.drainAll(), this.lostWorkers.clear(), this.retiredWorkers.clear(), this.workerReplacements.length = 0, this.jobsTowardRefill.length = 0, this.lostCauses.length = 0, this.workerSc … [truncated]
```

#### 3570. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26794` → after: `L26398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26398) · [Before (L26794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26794)

```diff
-         for (const kd of new Set(Object.values(dd)))(0, Od.u)(this.terrainMatManager.getModel(kd)) && Jd.push(kd);
+         for (const wQ of new Set(Object.values(QQ)))(0, AQ.p)(this.terrainMatManager.getModel(wQ)) && FQ.push(wQ);
```

#### 3571. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26807` → after: `L26411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26411) · [Before (L26807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26807)

```diff
-               const dd = this.Jl.Hl.wL(pd),
+               const QQ = this.dH.Bb.uA(LQ),
```

#### 3572. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26810` → after: `L26414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26414) · [Before (L26810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26810)

```diff
-               Zd = !!dd && (0, Id.l)(Wd, (0, xd.o)(dd), !!dd.AL), Nd.set(pd, Zd)
+               kQ = !!QQ && (0, MQ.l)(oQ, (0, cQ.j)(QQ), !!QQ.HA), qQ.set(LQ, kQ)
```

#### 3573. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26822-L26823` → after: `L26426-L26427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26426-L26427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26426-L26427) · [Before (L26822-L26823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26822-L26823)

```diff
-         const Wd = dd.WL,
-           Pd = (null !== (Jd = Wd.get(-1, 0, 0)) && void 0 !== Jd && Jd.ql ? 1 : 0) | (null !== (kd = Wd.get(0, -1, 0)) && void 0 !== kd && kd.ql ? 2 : 0) | (null !== (pd = Wd.get(0, 0, -1)) && void 0 !== pd && pd.ql ? 4 : 0),
+         const oQ = QQ.mx,
+           DQ = (null !== (FQ = oQ.get(-1, 0, 0)) && void 0 !== FQ && FQ.Sb ? 1 : 0) | (null !== (wQ = oQ.get(0, -1, 0)) && void 0 !== wQ && wQ.Sb ? 2 : 0) | (null !== (LQ = oQ.get(0, 0, -1)) && void 0 !== LQ && LQ.Sb ? 4 : 0),
```

#### 3574. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26827-L26829` → after: `L26431-L26433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26431-L26433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26431-L26433) · [Before (L26827-L26829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26827-L26829)

```diff
-           const Jd = dd.ql.data;
-           gd = (0, Id.m)(Jd, dd.AQ, dd.size, Nd.occluders, this.visScratch, dd.IQ), this.visKept.set(dd, {
-             voxelVersion: dd.jL,
+           const FQ = QQ.Sb.data;
+           vQ = (0, MQ.o)(FQ, QQ.wx, QQ.size, qQ.occluders, this.visScratch, QQ.pY), this.visKept.set(QQ, {
+             voxelVersion: QQ.Ex,
```

#### 3575. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26837` → after: `L26441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26441) · [Before (L26837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26837)

```diff
-         return Jd && Jd.voxelVersion === dd.jL ? Jd.graphs : void 0
+         return FQ && FQ.voxelVersion === QQ.Ex ? FQ.graphs : void 0
```

#### 3576. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26844` → after: `L26448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26448) · [Before (L26844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26844)

```diff
-         void 0 === Wd ? Wd = Nd && null !== (Pd = Nd.graphs) && void 0 !== Pd ? Pd : null : Nd && this.visKept.set(dd, {
+         void 0 === oQ ? oQ = qQ && null !== (DQ = qQ.graphs) && void 0 !== DQ ? DQ : null : qQ && this.visKept.set(QQ, {
```

#### 3577. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26848` → after: `L26452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26452) · [Before (L26848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26848)

```diff
-         this.visibility.setChunk(dd.i, dd.j, dd.k, Wd, kd, null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd.stamps) && void 0 !== pd ? pd : Yd)
+         this.visibility.setChunk(QQ.i, QQ.j, QQ.k, oQ, wQ, null !== (LQ = null === qQ || void 0 === qQ ? void 0 : qQ.stamps) && void 0 !== LQ ? LQ : sQ)
```

#### 3578. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26851` → after: `L26455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26455) · [Before (L26851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26851)

```diff
-         return this.chunkObjectId(dd) * 2 ** 24 + dd.dO[Jd] % 2 ** 24
+         return this.chunkObjectId(QQ) * 2 ** 24 + QQ.bA[FQ] % 2 ** 24
```

#### 3579. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26859` → after: `L26463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26463) · [Before (L26859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26859)

```diff
-           kd = dd.WL,
+           wQ = QQ.mx,
```

#### 3580. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26864` → after: `L26468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26468) · [Before (L26864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26864)

```diff
-           Jd[3 + Nd] = null !== kd && void 0 !== kd && kd.ql ? this.visStamp(kd, Nd) : -1
+           FQ[3 + qQ] = null !== wQ && void 0 !== wQ && wQ.Sb ? this.visStamp(wQ, qQ) : -1
```

#### 3581. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26871` → after: `L26475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26475) · [Before (L26871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26871)

```diff
-         null !== kd && (dd.AQ || Jd) && kd(dd.i, dd.j, dd.k)
+         null !== wQ && (QQ.wx || FQ) && wQ(QQ.i, QQ.j, QQ.k)
```

#### 3582. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26874-L26875` → after: `L26478-L26479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26478-L26479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26478-L26479) · [Before (L26874-L26875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26874-L26875)

```diff
-         const Nd = this.Jl.Vo.pO.NO(dd, Jd, kd);
-         return !Nd || !Nd.AQ || Nd.JO || Nd.mL ? -1 : this.visStamp(Nd, pd)
+         const qQ = this.dH.nH.AA.tA(QQ, FQ, wQ);
+         return !qQ || !qQ.wx || qQ.YA || qQ.Vx ? -1 : this.visStamp(qQ, LQ)
```

#### 3583. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26878` → after: `L26482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26482) · [Before (L26878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26878)

```diff
-         const dd = this.Jl.Vo.pO;
+         const QQ = this.dH.nH.AA;
```

#### 3584. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26881` → after: `L26485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26485) · [Before (L26881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26881)

```diff
-           chunkAt: (Jd, kd, pd) => dd.NO(Jd, kd, pd),
+           chunkAt: (FQ, wQ, LQ) => QQ.tA(FQ, wQ, LQ),
```

#### 3585. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26885` → after: `L26489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26489) · [Before (L26885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26885)

```diff
-             if (!pd.AQ || pd.JO || pd.mL) kd[0] = kd[1] = kd[2] = -1;
+             if (!LQ.wx || LQ.YA || LQ.Vx) wQ[0] = wQ[1] = wQ[2] = -1;
```

#### 3586. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26887` → after: `L26491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26491) · [Before (L26887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26887)

```diff
-               for (let Nd = 0; Nd < 3; Nd++) kd[Nd] = Jd * 2 ** 24 + pd.dO[Nd] % 2 ** 24
+               for (let qQ = 0; qQ < 3; qQ++) wQ[qQ] = FQ * 2 ** 24 + LQ.bA[qQ] % 2 ** 24
```

#### 3587. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26911` → after: `L26515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26515) · [Before (L26911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26911)

```diff
-           null === (kd = this.meshProbe) || void 0 === kd || kd.received(pd), this.busynessTracker.onJobCompleted(dd), this._meshJobsDone++, this.queueBudget.jobDone(pd.jobMs), this.refillReplacements(dd), !1 === pd.lightOnlyUpdate && (this._fullMeshCompletionsSinceReset++, "wasm … [truncated]
+           null === (wQ = this.meshProbe) || void 0 === wQ || wQ.received(LQ), this.busynessTracker.onJobCompleted(QQ), this._meshJobsDone++, this.queueBudget.jobDone(LQ.jobMs), this.refillReplacements(QQ), !1 === LQ.lightOnlyUpdate && (this._fullMeshCompletionsSinceReset++, "wasm … [truncated]
```

#### 3588. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26913` → after: `L26517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26517) · [Before (L26913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26913)

```diff
-           this.Jl.PO(`Meshing worker ${dd} catastrophic error`, Jd)
+           this.dH.MA(`Meshing worker ${QQ} catastrophic error`, FQ)
```

#### 3589. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26925` → after: `L26529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26529) · [Before (L26925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26925)

```diff
-         return ++this.workerScanStartIndex >= kd && (this.workerScanStartIndex = 0), dd >= 0 && dd < kd && pd(dd) === Pd ? dd : Wd
+         return ++this.workerScanStartIndex >= wQ && (this.workerScanStartIndex = 0), QQ >= 0 && QQ < wQ && LQ(QQ) === DQ ? QQ : oQ
```

#### 3590. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26931-L26932` → after: `L26535-L26536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26535-L26536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26535-L26536) · [Before (L26931-L26932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26931-L26932)

```diff
-           pd = null !== (Jd = this.workerReplacements[dd]) && void 0 !== Jd ? Jd : 0;
-         if (pd >= 3) this.retireWorker(dd, `3 replacements used: ${kd}`);
+           LQ = null !== (FQ = this.workerReplacements[QQ]) && void 0 !== FQ ? FQ : 0;
+         if (LQ >= 3) this.retireWorker(QQ, `3 replacements used: ${wQ}`);
```

#### 3591. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26938` → after: `L26542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26542) · [Before (L26938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26938)

```diff
-             return void this.retireWorker(dd, `no new worker (${Nd instanceof Error?Nd.message:String(Nd)}): ${kd}`)
+             return void this.retireWorker(QQ, `no new worker (${qQ instanceof Error?qQ.message:String(qQ)}): ${wQ}`)
```

#### 3592. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26940` → after: `L26544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26544) · [Before (L26940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26940)

```diff
-           this.lostWorkers.delete(dd), this.Jl.PO(`Meshing worker ${dd} replaced (${pd+1} of 3): ${kd}`)
+           this.lostWorkers.delete(QQ), this.dH.MA(`Meshing worker ${QQ} replaced (${LQ+1} of 3): ${wQ}`)
```

#### 3593. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26946-L26947` → after: `L26550-L26551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26550-L26551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26550-L26551) · [Before (L26946-L26947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26946-L26947)

```diff
-         const kd = (null !== (Jd = this.jobsTowardRefill[dd]) && void 0 !== Jd ? Jd : 0) + 1;
-         kd < 1e3 ? this.jobsTowardRefill[dd] = kd : (this.jobsTowardRefill[dd] = 0, this.workerReplacements[dd]--)
+         const wQ = (null !== (FQ = this.jobsTowardRefill[QQ]) && void 0 !== FQ ? FQ : 0) + 1;
+         wQ < 1e3 ? this.jobsTowardRefill[QQ] = wQ : (this.jobsTowardRefill[QQ] = 0, this.workerReplacements[QQ]--)
```

#### 3594. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26950` → after: `L26554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26554) · [Before (L26950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26950)

```diff
-         if (this.workers[dd].terminate(), this.retiredWorkers.add(dd), this.Jl.PO(`Meshing worker ${dd} is out for good, ${Jd}`), this.retiredWorkers.size === this.workers.length) {
+         if (this.workers[QQ].terminate(), this.retiredWorkers.add(QQ), this.dH.MA(`Meshing worker ${QQ} is out for good, ${FQ}`), this.retiredWorkers.size === this.workers.length) {
```

#### 3595. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26956` → after: `L26560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26560) · [Before (L26956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26956)

```diff
-         null !== Jd.message && this.Jl.PO(`Meshing worker ${dd}: ${Jd.message}`);
+         null !== FQ.message && this.dH.MA(`Meshing worker ${QQ}: ${FQ.message}`);
```

#### 3596. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26961-L26962` → after: `L26565-L26566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26565-L26566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26565-L26566) · [Before (L26961-L26962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26961-L26962)

```diff
-           const dd = null !== (pd = Jd.message) && void 0 !== pd ? pd : `Wasm light failure: ${kd}`;
-           this.Jl.ZO(new Error(dd), {
+           const QQ = null !== (LQ = FQ.message) && void 0 !== LQ ? LQ : `Wasm light failure: ${wQ}`;
+           this.dH.pA(new Error(QQ), {
```

#### 3597. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26971` → after: `L26575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26575) · [Before (L26971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26971)

```diff
-         Jd.lost && (this.lostWorkers.add(dd), this.lostCauses[dd] = null !== (Pd = Jd.message) && void 0 !== Pd ? Pd : "no message", this.replaceLostWorker(dd))
+         FQ.lost && (this.lostWorkers.add(QQ), this.lostCauses[QQ] = null !== (DQ = FQ.message) && void 0 !== DQ ? DQ : "no message", this.replaceLostWorker(QQ))
```

#### 3598. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26985-L26989` → after: `L26589-L26593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26589-L26593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26589-L26593) · [Before (L26985-L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26985-L26989)

```diff
-         this.Jl.PO(`Meshing worker ${dd} failed chunk (${Nd}, ${Wd}, ${Zd}): ${Cd}`), this.jobEnded(dd), null === (kd = this.meshProbe) || void 0 === kd || kd.failed(gd), Kd ? this.lightUnused(Nd, Wd, Zd, gd) : (this.chunkMirrors[dd].reset(), this.lightMirrors[dd].reset()), od && … [truncated]
-         const Ld = this.Jl.Vo.pO.NO(Nd, Wd, Zd);
-         if (!Ld || Ld.mL !== gd) return;
-         Ld.mL = 0, Ld.JO = !0, Ld.gO = !0;
-         const Od = null !== (pd = this.meshFailures.get(Ld)) && void 0 !== pd ? pd : {
+         this.dH.MA(`Meshing worker ${QQ} failed chunk (${qQ}, ${oQ}, ${kQ}): ${mQ}`), this.jobEnded(QQ), null === (wQ = this.meshProbe) || void 0 === wQ || wQ.failed(vQ), uQ ? this.lightUnused(qQ, oQ, kQ, vQ) : (this.chunkMirrors[QQ].reset(), this.lightMirrors[QQ].reset()), HQ && … [truncated]
+         const xQ = this.dH.nH.AA.tA(qQ, oQ, kQ);
+         if (!xQ || xQ.Vx !== vQ) return;
+         xQ.Vx = 0, xQ.YA = !0, xQ.cA = !0;
+         const AQ = null !== (LQ = this.meshFailures.get(xQ)) && void 0 !== LQ ? LQ : {
```

#### 3599. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L26996-L26998` → after: `L26600-L26602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26600-L26602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26600-L26602) · [Before (L26996-L26998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L26996-L26998)

```diff
-           const dd = Od.lostMesher >= 2 ? `lost its worker's mesher ${Od.lostMesher} times` : Od.refused >= 6 ? `was refused memory ${Od.refused} times` : `failed ${Od.failed} times in a row`;
-           this.Jl.PO(`Meshing chunk (${Nd}, ${Wd}, ${Zd}) ${dd}, so it is dropped until it reloads: ${Cd}`)
-         } else this.meshFailures.set(Ld, Od), this.Jl.Vo.kO(Ld, !0)
+           const QQ = AQ.lostMesher >= 2 ? `lost its worker's mesher ${AQ.lostMesher} times` : AQ.refused >= 6 ? `was refused memory ${AQ.refused} times` : `failed ${AQ.failed} times in a row`;
+           this.dH.MA(`Meshing chunk (${qQ}, ${oQ}, ${kQ}) ${QQ}, so it is dropped until it reloads: ${mQ}`)
+         } else this.meshFailures.set(xQ, AQ), this.dH.nH.xA(xQ, !0)
```

#### 3600. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27001` → after: `L26605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26605) · [Before (L27001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27001)

```diff
-         this.droppedChunks.add(dd), dd.JO = !1, dd.gO = !1, this.SL(dd)
+         this.droppedChunks.add(QQ), QQ.YA = !1, QQ.cA = !1, this.Jx(QQ)
```

#### 3601. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27017-L27018` → after: `L26621-L26622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26621-L26622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26621-L26622) · [Before (L27017-L27018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27017-L27018)

```diff
-           Vo: Jd
-         } = this.Jl, {
+           nH: FQ
+         } = this.dH, {
```

#### 3602. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27022-L27023` → after: `L26626-L26627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26626-L26627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26626-L26627) · [Before (L27022-L27023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27022-L27023)

```diff
-         } = dd, Wd = Jd.pO.NO(kd, pd, Nd);
-         return Wd && Wd.mL === dd.meshJobId ? Jd.KO.includes(kd, pd, Nd) || Jd.oO.includes(kd, pd, Nd) ? null : Wd : null
+         } = QQ, oQ = FQ.AA.tA(wQ, LQ, qQ);
+         return oQ && oQ.Vx === QQ.meshJobId ? FQ.SA.includes(wQ, LQ, qQ) || FQ.iA.includes(wQ, LQ, qQ) ? null : oQ : null
```

#### 3603. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27026` → after: `L26630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26630) · [Before (L27026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27026)

```diff
-         dd.computedLightData && (0, Pd.s)(dd.computedLightData), this.lightUnused(dd.i, dd.j, dd.k, dd.meshJobId)
+         QQ.computedLightData && (0, DQ.v)(QQ.computedLightData), this.lightUnused(QQ.i, QQ.j, QQ.k, QQ.meshJobId)
```

#### 3604. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27029` → after: `L26633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26633) · [Before (L27029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27029)

```diff
-         const Nd = this.Jl.Vo.pO.NO(dd, Jd, kd);
+         const qQ = this.dH.nH.AA.tA(QQ, FQ, wQ);
```

#### 3605. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27037` → after: `L26641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26641) · [Before (L27037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27037)

```diff
-           if (this.remeshesLostContext && (0, vd.d)(this.Jl.UL.engine)) return this.dropResult(dd), Jd.mL = 0, void this.chunksToRemeshOnRestore.add(Jd);
+           if (this.remeshesLostContext && (0, pQ.e)(this.dH.Zx.engine)) return this.dropResult(QQ), FQ.Vx = 0, void this.chunksToRemeshOnRestore.add(FQ);
```

#### 3606. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27041` → after: `L26645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26645) · [Before (L27041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27041)

```diff
-             this.Jl.PO(`Applying the mesh of chunk (${dd.i}, ${dd.j}, ${dd.k}) failed`, kd)
+             this.dH.MA(`Applying the mesh of chunk (${QQ.i}, ${QQ.j}, ${QQ.k}) failed`, wQ)
```

#### 3607. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27050` → after: `L26654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26654) · [Before (L27050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27050)

```diff
-         if (dd.mL = 0, this.meshFailures.delete(dd), dd.lO = !!Nd || dd.tQ || dd.AQ, !0 === Jd.lightOnlyUpdate ? this.assignLightOnlyData(dd, Jd.lightDataArrays) || (dd.JO = !0, dd.gO = !0) : (this.assignMeshDataToChunk(dd, Jd.vertexDataInfo), this.visibility && void 0 !== Jd.vis … [truncated]
+         if (QQ.Vx = 0, this.meshFailures.delete(QQ), QQ.WA = !!qQ || QQ.yY || QQ.wx, !0 === FQ.lightOnlyUpdate ? this.assignLightOnlyData(QQ, FQ.lightDataArrays) || (QQ.YA = !0, QQ.cA = !0) : (this.assignMeshDataToChunk(QQ, FQ.vertexDataInfo), this.visibility && void 0 !== FQ.vis … [truncated]
```

#### 3608. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27056-L27058` → after: `L26660-L26662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26660-L26662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26660-L26662) · [Before (L27056-L27058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27056-L27058)

```diff
-           this.storeAndPropagateLight(dd, Nd, Jd.vJ, "server" === Jd.lightSource), this.lightReuse.lightStored(dd, Jd.meshJobId, Jd.lightSource, Nd, Jd.lightSeedColumnsRead), Jd.lightSeedColumnsRead && (0, Pd.w)(Jd.lightSeedColumnsRead)
-         } else this.Jl.LO.OO(dd);
-         dd.JO ? this.Jl.Vo.kO(dd, !0) : dd.XL = !1, this.checkSkySeedAtReply(dd, !dd.JO), this.SL(dd), null === (pd = this.meshProbe) || void 0 === pd || pd.applied(dd, Jd.meshJobId)
+           this.storeAndPropagateLight(QQ, qQ, FQ.YF, "server" === FQ.lightSource), this.lightReuse.lightStored(QQ, FQ.meshJobId, FQ.lightSource, qQ, FQ.lightSeedColumnsRead), FQ.lightSeedColumnsRead && (0, DQ.x)(FQ.lightSeedColumnsRead)
+         } else this.dH.OA.sA(QQ);
+         QQ.YA ? this.dH.nH.xA(QQ, !0) : QQ.nx = !1, this.checkSkySeedAtReply(QQ, !QQ.YA), this.Jx(QQ), null === (LQ = this.meshProbe) || void 0 === LQ || LQ.applied(QQ, FQ.meshJobId)
```

#### 3609. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27061` → after: `L26665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26665) · [Before (L27061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27061)

```diff
-         dd.RO.length = 0
+         QQ.IA.length = 0
```

#### 3610. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27065-L27068` → after: `L26669-L26672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26669-L26672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26669-L26672) · [Before (L27065-L27068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27065-L27068)

```diff
-         const kd = null === (Jd = this.Jl.UL.yL) || void 0 === Jd ? void 0 : Jd.terrain;
-         dd.RO.forEach((dd => {
-           this.Jl.emit("removingTerrainMesh", dd), null === kd || void 0 === kd || kd.removeChunkMesh(dd), dd.dispose()
-         })), dd.RO.length = 0, dd.QO = null
+         const wQ = null === (FQ = this.dH.Zx.yx) || void 0 === FQ ? void 0 : FQ.terrain;
+         QQ.IA.forEach((QQ => {
+           this.dH.emit("removingTerrainMesh", QQ), null === wQ || void 0 === wQ || wQ.removeChunkMesh(QQ), QQ.dispose()
+         })), QQ.IA.length = 0, QQ.RA = null
```

#### 3611. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27082` → after: `L26686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26686) · [Before (L27082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27082)

```diff
-         if (this.lazyInitMeshingObjs(), dd.mL) return !1;
+         if (this.lazyInitMeshingObjs(), QQ.Vx) return !1;
```

#### 3612. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27085-L27086` → after: `L26689-L26690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26689-L26690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26689-L26690) · [Before (L27085-L27086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27085-L27086)

```diff
-             if (!dd.tQ) return !1;
-             const Jd = dd.WL,
+             if (!QQ.yY) return !1;
+             const FQ = QQ.mx,
```

#### 3613. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27088` → after: `L26692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26692) · [Before (L27088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27088)

```diff
-             if (kd && !kd.tQ) return !1;
+             if (wQ && !wQ.yY) return !1;
```

#### 3614. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27090` → after: `L26694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26694) · [Before (L27090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27090)

```diff
-             if (pd && !pd.tQ) return !1;
+             if (LQ && !LQ.yY) return !1;
```

#### 3615. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27092` → after: `L26696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26696) · [Before (L27092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27092)

```diff
-             if (Nd && !Nd.tQ) return !1;
+             if (qQ && !qQ.yY) return !1;
```

#### 3616. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27094-L27095` → after: `L26698-L26699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26698-L26699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26698-L26699) · [Before (L27094-L27095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27094-L27095)

```diff
-           }(dd)) return this.meshFailures.delete(dd), this.assignMeshDataToChunk(dd, []), this.setVisibilityOnThisThread(dd), dd.lO = !0, this.Jl.LO.OO(dd), this.checkHeldSkySeedReaders(dd), !0;
-         const Nd = this.Jl.UL.IO;
+           }(QQ)) return this.meshFailures.delete(QQ), this.assignMeshDataToChunk(QQ, []), this.setVisibilityOnThisThread(QQ), QQ.WA = !0, this.dH.OA.sA(QQ), this.checkHeldSkySeedReaders(QQ), !0;
+         const qQ = this.dH.Zx.UA;
```

#### 3617. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27098` → after: `L26702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26702) · [Before (L27098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27098)

```diff
-         Nd && (Wd = this.Jl.Vo.PL(dd.i, dd.k), gd = (0, Zd.E)(dd.AQ, dd.j, Wd));
+         qQ && (oQ = this.dH.nH.Hx(QQ.i, QQ.k), vQ = (0, kQ.x)(QQ.wx, QQ.j, oQ));
```

#### 3618. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27101` → after: `L26705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26705) · [Before (L27101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27101)

```diff
-         this.providedLightEligible(dd, Wd) && dd.GO && dd.HQ && (Cd = dd.HQ, Kd = dd.dL);
+         this.providedLightEligible(QQ, oQ) && QQ.NA && QQ.Qx && (mQ = QQ.Qx, uQ = QQ.Lx);
```

#### 3619. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27105` → after: `L26709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26709) · [Before (L27105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27105)

```diff
-         !Nd || gd || dd.tQ || Cd || (Qd = (0, Pd.l)(dd, Zd.l), od = function(dd, Jd, kd, Nd) {
+         !qQ || vQ || QQ.yY || mQ || (YQ = (0, DQ.n)(QQ, kQ.j), HQ = function(QQ, FQ, wQ, qQ) {
```

#### 3620. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27107` → after: `L26711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26711) · [Before (L27107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27107)

```diff
-             Pd = Wd.ql;
+             DQ = oQ.Sb;
```

#### 3621. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27113` → after: `L26717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26717) · [Before (L27113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27113)

```diff
-                 !Wd || Wd.AQ && 0 !== (pd | kd | Nd) ? (Pd[Zd] = -1, Pd[Zd + 1] = -1) : (Pd[Zd] = Jd(Wd), Pd[Zd + 1] = Wd.jL)
+                 !oQ || oQ.wx && 0 !== (LQ | wQ | qQ) ? (DQ[kQ] = -1, DQ[kQ + 1] = -1) : (DQ[kQ] = FQ(oQ), DQ[kQ + 1] = oQ.Ex)
```

#### 3622. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27116` → after: `L26720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26720) · [Before (L27116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27116)

```diff
-         }(dd.WL, this.chunkObjectIdOf, (0, Zd.L)(dd.j, Wd), Qd), this.lightReuse.canReuse(dd, dd.HQ, od) && (Cd = dd.HQ, Kd = dd.dL, ld = !0, (0, Pd.w)(Qd), Qd = null));
+         }(QQ.mx, this.chunkObjectIdOf, (0, kQ.E)(QQ.j, oQ), YQ), this.lightReuse.canReuse(QQ, QQ.Qx, HQ) && (mQ = QQ.Qx, uQ = QQ.Lx, bQ = !0, (0, DQ.x)(YQ), YQ = null));
```

#### 3623. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27118` → after: `L26722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26722) · [Before (L27118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27118)

```diff
-           Od = null === Cd && dd.vO;
+           AQ = null === mQ && QQ.TA;
```

#### 3624. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27120-L27121` → after: `L26724-L26725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26724-L26725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26724-L26725) · [Before (L27120-L27121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27120-L27121)

```diff
-             if (!dd.AQ) return !1;
-             const Jd = dd.WL,
+             if (!QQ.wx) return !1;
+             const FQ = QQ.mx,
```

#### 3625. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27125` → after: `L26729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26729) · [Before (L27125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27125)

```diff
-             if (Nd && !Nd.AQ && 0 !== Nd.IQ[kd - 1]) return !1;
+             if (qQ && !qQ.wx && 0 !== qQ.pY[wQ - 1]) return !1;
```

#### 3626. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27127` → after: `L26731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26731) · [Before (L27127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27127)

```diff
-             if (Wd && !Wd.AQ && Dd(Wd.ql.data, (kd - 1) * pd, 1, pd)) return !1;
+             if (oQ && !oQ.wx && aQ(oQ.Sb.data, (wQ - 1) * LQ, 1, LQ)) return !1;
```

#### 3627. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27129` → after: `L26733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26733) · [Before (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27129)

```diff
-             if (Pd && !Pd.AQ && Dd(Pd.ql.data, kd - 1, kd, pd)) return !1;
+             if (DQ && !DQ.wx && aQ(DQ.Sb.data, wQ - 1, wQ, LQ)) return !1;
```

#### 3628. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27131-L27132` → after: `L26735-L26736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26735-L26736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26735-L26736) · [Before (L27131-L27132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27131-L27132)

```diff
-           }(dd)) return this.meshFailures.delete(dd), this.assignMeshDataToChunk(dd, []), this.setVisibilityOnThisThread(dd), dd.lO = !0, dd.QO = null, this.Jl.LO.OO(dd), this.checkHeldSkySeedReaders(dd), !0;
-         const ed = this.getLeastLoadedWorkerIndex(null !== (Jd = this.stateWorkerOf.get(dd)) && void 0 !== Jd ? Jd : -1),
+           }(QQ)) return this.meshFailures.delete(QQ), this.assignMeshDataToChunk(QQ, []), this.setVisibilityOnThisThread(QQ), QQ.WA = !0, QQ.RA = null, this.dH.OA.sA(QQ), this.checkHeldSkySeedReaders(QQ), !0;
+         const tQ = this.getLeastLoadedWorkerIndex(null !== (FQ = this.stateWorkerOf.get(QQ)) && void 0 !== FQ ? FQ : -1),
```

#### 3629. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27138` → after: `L26742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26742) · [Before (L27138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27138)

```diff
-             vL: xd,
+             sx: cQ,
```

#### 3630. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27140-L27142` → after: `L26744-L26746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26744-L26746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26744-L26746) · [Before (L27140-L27142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27140-L27142)

```diff
-             AQ: Bd,
-             tQ: sd,
-             IQ: ad
+             wx: SQ,
+             yY: iQ,
+             pY: WQ
```

#### 3631. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27144` → after: `L26748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26748) · [Before (L27144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27144)

```diff
-         this.tempChunk.i = Id, this.tempChunk.j = Gd, this.tempChunk.k = vd, this.tempChunk.vL = xd, this.tempChunk.size = qd, this.tempChunk.AQ = Bd, this.tempChunk.tQ = sd, this.tempChunk.IQ = ad, this.tempChunk.WL = null;
+         this.tempChunk.i = MQ, this.tempChunk.j = GQ, this.tempChunk.k = pQ, this.tempChunk.sx = cQ, this.tempChunk.size = CQ, this.tempChunk.wx = SQ, this.tempChunk.yY = iQ, this.tempChunk.pY = WQ, this.tempChunk.mx = null;
```

#### 3632. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27154-L27156` → after: `L26758-L26760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26758-L26760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26758-L26760) · [Before (L27154-L27156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27154-L27156)

```diff
-               kd = (0, Pd.h)(dd, this.Jl.Vo, (dd => {
-                 const kd = this.lightTags.get(dd.HQ);
-                 return Jd.holds(this.chunkObjectId(dd), kd) ? kd : 0
+               wQ = (0, DQ.l)(QQ, this.dH.nH, (QQ => {
+                 const wQ = this.lightTags.get(QQ.Qx);
+                 return FQ.holds(this.chunkObjectId(QQ), wQ) ? wQ : 0
```

#### 3633. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27162` → after: `L26766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26766) · [Before (L27162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27162)

```diff
-           Sd = (0, Pd.d)();
+           UQ = (0, DQ.e)();
```

#### 3634. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27165-L27166` → after: `L26769-L26770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26769-L26770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26769-L26770) · [Before (L27165-L27166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27165-L27166)

```diff
-         let jd = dd.QO;
-         const Xd = Nd && !dd.gO && dd.lO && dd.RO.length > 0 && !!jd;
+         let NQ = QQ.RA;
+         const TQ = qQ && !QQ.cA && QQ.WA && QQ.IA.length > 0 && !!NQ;
```

#### 3635. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27168` → after: `L26772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26772) · [Before (L27168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27168)

```diff
-           for (const kd of Jd) dd.push(kd.is.buffer), dd.push(kd.js.buffer), dd.push(kd.ks.buffer), dd.push(kd.wids.buffer), dd.push(kd.hts.buffer), dd.push(kd.qJ.buffer), dd.push(kd.diagonals.buffer)
+           for (const wQ of FQ) QQ.push(wQ.is.buffer), QQ.push(wQ.js.buffer), QQ.push(wQ.ks.buffer), QQ.push(wQ.wids.buffer), QQ.push(wQ.hts.buffer), QQ.push(wQ.tF.buffer), QQ.push(wQ.diagonals.buffer)
```

#### 3636. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27172` → after: `L26776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26776) · [Before (L27172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27172)

```diff
-         if (dd.mL = fd, od && this.lightReuse.dispatched(dd, fd, od), this.visibility) {
+         if (QQ.Vx = KQ, HQ && this.lightReuse.dispatched(QQ, KQ, HQ), this.visibility) {
```

#### 3637. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27176` → after: `L26780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26780) · [Before (L27176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27176)

```diff
-             voxelVersion: dd.jL,
+             voxelVersion: QQ.Ex,
```

#### 3638. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27212` → after: `L26816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26816) · [Before (L27212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27212)

```diff
-             type: "FL",
+             type: "jx",
```

#### 3639. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27216` → after: `L26820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26820) · [Before (L27216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27216)

```diff
-           return this.Jl.PO(`Meshing worker ${ed} postMessage failed`, cd), dd.mL = 0, this.jobEnded(ed), this.chunkMirrors[ed].reset(), this.lightMirrors[ed].reset(), (0, Pd.o)(Sd), bd && (0, Pd.w)(bd), dd.JO = !0, this.Jl.Vo.kO(dd, !0), !1
+           return this.dH.MA(`Meshing worker ${tQ} postMessage failed`, VQ), QQ.Vx = 0, this.jobEnded(tQ), this.chunkMirrors[tQ].reset(), this.lightMirrors[tQ].reset(), (0, DQ.q)(UQ), IQ && (0, DQ.x)(IQ), QQ.YA = !0, this.dH.nH.xA(QQ, !0), !1
```

#### 3640. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27218` → after: `L26822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26822) · [Before (L27218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27218)

```diff
-         return Xd && (dd.QO = null), null === (kd = this.meshProbe) || void 0 === kd || kd.sent(dd, fd, this.busynessTracker.inFlightCounts[ed] - 1, this.workerInFlightCount, this.jobCapacity()), !0
+         return TQ && (QQ.RA = null), null === (wQ = this.meshProbe) || void 0 === wQ || wQ.sent(QQ, KQ, this.busynessTracker.inFlightCounts[tQ] - 1, this.workerInFlightCount, this.jobCapacity()), !0
```

#### 3641. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27224` → after: `L26828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26828) · [Before (L27224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27224)

```diff
-           const [Jd, Nd, Pd] = Fd(Wd), Zd = dd.WL.get(Jd, Nd, Pd);
+           const [FQ, qQ, DQ] = OQ(oQ), kQ = QQ.mx.get(FQ, qQ, DQ);
```

#### 3642. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27237` → after: `L26841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26841) · [Before (L27237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27237)

```diff
-         const Cd = Nd ? this.lightTags.get(dd.HQ) : void 0;
+         const mQ = qQ ? this.lightTags.get(QQ.Qx) : void 0;
```

#### 3643. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27245` → after: `L26849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26849) · [Before (L27245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27245)

```diff
-         } = Pd.dispatched(pd ? Zd : -1, kd);
+         } = DQ.dispatched(LQ ? kQ : -1, wQ);
```

#### 3644. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27256-L27258` → after: `L26860-L26862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26860-L26862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26860-L26862) · [Before (L27256-L27258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27256-L27258)

```diff
-         const pd = !dd.xO && this.Jl.UL.qO() ? performance.now() : 0;
-         dd.xO = !0;
-         const Nd = null === (kd = this.Jl.UL.yL) || void 0 === kd ? void 0 : kd.terrain;
+         const LQ = !QQ.KA && this.dH.Zx.zA() ? performance.now() : 0;
+         QQ.KA = !0;
+         const qQ = null === (wQ = this.dH.Zx.yx) || void 0 === wQ ? void 0 : wQ.terrain;
```

#### 3645. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27260` → after: `L26864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26864) · [Before (L27260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27260)

```diff
-         const Wd = dd.RO;
+         const oQ = QQ.IA;
```

#### 3646. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27264` → after: `L26868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26868) · [Before (L27264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27264)

```diff
-           kd && (Zd = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.Jl.UL.BO), Zd.xL = !0, Zd._updateBoundingInfo = jd, Zd._refreshBoundingInfo = jd, Wd.push(Zd)), this.meshBuilder.assignMeshData(Zd, Jd[Pd]), Nd || (0, ed.j)(Zd, Jd[Pd].faceGroups), kd || this.Jl.UL.sO(Zd), null = … [truncated]
+           wQ && (kQ = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.dH.Zx.lA), kQ.Ix = !0, kQ._updateBoundingInfo = NQ, kQ._refreshBoundingInfo = NQ, oQ.push(kQ)), this.meshBuilder.assignMeshData(kQ, FQ[DQ]), qQ || (0, tQ.j)(kQ, FQ[DQ].faceGroups), wQ || this.dH.Zx.jA(kQ), null = … [truncated]
```

#### 3647. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27268` → after: `L26872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26872) · [Before (L27268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27268)

```diff
-           this.Jl.emit("removingTerrainMesh", dd), null === Nd || void 0 === Nd || Nd.removeChunkMesh(dd), dd.dispose()
+           this.dH.emit("removingTerrainMesh", QQ), null === qQ || void 0 === qQ || qQ.removeChunkMesh(QQ), QQ.dispose()
```

#### 3648. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27272` → after: `L26876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26876) · [Before (L27272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27272)

```diff
-         const Nd = dd.RO;
+         const qQ = QQ.IA;
```

#### 3649. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27276` → after: `L26880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26880) · [Before (L27276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27276)

```diff
-             gd = Zd ? new Ld : Nd[Wd];
+             vQ = kQ ? new xQ : qQ[oQ];
```

#### 3650. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27279` → after: `L26883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26883) · [Before (L27279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27279)

```diff
-           gd.material = null !== Cd && void 0 !== Cd ? Cd : this.terrainMatManager.qL(Pd.terrainID), kd.setChunkMesh(gd, (0, od.g)(Pd), dd.pos), Zd && (gd.metadata[bd] = dd.i, gd.metadata[Sd] = dd.k, gd.metadata[md] = !0, pd && this.Jl.UL.FO(gd, pd), this.Jl.emit("addingTerrainMe … [truncated]
+           vQ.material = null !== mQ && void 0 !== mQ ? mQ : this.terrainMatManager.Ux(DQ.terrainID), wQ.setChunkMesh(vQ, (0, HQ.f)(DQ), QQ.pos), kQ && (vQ.metadata[IQ] = QQ.i, vQ.metadata[UQ] = QQ.k, vQ.metadata[rQ] = !0, LQ && this.dH.Zx.VA(vQ, LQ), this.dH.emit("addingTerrainMe … [truncated]
```

#### 3651. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27283` → after: `L26887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26887) · [Before (L27283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27283)

```diff
-           this.Jl.emit("removingTerrainMesh", dd), kd.removeChunkMesh(dd), dd.dispose()
+           this.dH.emit("removingTerrainMesh", QQ), wQ.removeChunkMesh(QQ), QQ.dispose()
```

#### 3652. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27287-L27288` → after: `L26891-L26892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26891-L26892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26891-L26892) · [Before (L27287-L27288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27287-L27288)

```diff
-         const kd = dd.RO;
-         if (Jd.length !== kd.length) return console.warn(`Light-only update submesh count mismatch: ${Jd.length} light arrays vs ${kd.length} meshes`), !1;
+         const wQ = QQ.IA;
+         if (FQ.length !== wQ.length) return console.warn(`Light-only update submesh count mismatch: ${FQ.length} light arrays vs ${wQ.length} meshes`), !1;
```

#### 3653. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27293` → after: `L26897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26897) · [Before (L27293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27293)

```diff
-           if (gd.length !== Cd) return console.warn(`Light-only update vertex count mismatch on submesh ${Zd}: ${gd.length} vs ${Cd}`), !1;
+           if (vQ.length !== mQ) return console.warn(`Light-only update vertex count mismatch on submesh ${kQ}: ${vQ.length} vs ${mQ}`), !1;
```

#### 3654. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27295` → after: `L26899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26899) · [Before (L27295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27295)

```diff
-           if (dd instanceof Ld) gd.length > 0 && (null === (pd = this.Jl.UL.yL) || void 0 === pd || null === (Nd = pd.terrain) || void 0 === Nd || Nd.setChunkMeshLight(dd, (0, od.j)(gd)));
+           if (QQ instanceof xQ) vQ.length > 0 && (null === (LQ = this.dH.Zx.yx) || void 0 === LQ || null === (qQ = LQ.terrain) || void 0 === qQ || qQ.setChunkMeshLight(QQ, (0, HQ.g)(vQ)));
```

#### 3655. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27298` → after: `L26902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26902) · [Before (L27298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27298)

```diff
-             const Jd = (0, od.e)(gd),
+             const FQ = (0, HQ.d)(vQ),
```

#### 3656. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27300` → after: `L26904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26904) · [Before (L27300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27300)

```diff
-             kd && kd.isUpdatable() ? kd.updateDirectly(Jd, 0) : dd.setVerticesData("aPackedLightLevels", Jd, !0, 1), this.meshBuilder.releaseCpuCopies(dd), null === (Wd = this.Jl.UL.yL) || void 0 === Wd || null === (Pd = Wd.terrain) || void 0 === Pd || Pd.setChunkMeshLight(dd, (0 … [truncated]
+             wQ && wQ.isUpdatable() ? wQ.updateDirectly(FQ, 0) : QQ.setVerticesData("aPackedLightLevels", FQ, !0, 1), this.meshBuilder.releaseCpuCopies(QQ), null === (oQ = this.dH.Zx.yx) || void 0 === oQ || null === (DQ = oQ.terrain) || void 0 === DQ || DQ.setChunkMeshLight(QQ, (0 … [truncated]
```

#### 3657. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27306` → after: `L26910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26910) · [Before (L27306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27306)

```diff
-         return this.Jl.UL.IO && !dd.tQ && !(0, Zd.E)(dd.AQ, dd.j, Jd)
+         return this.dH.Zx.UA && !QQ.yY && !(0, kQ.x)(QQ.wx, QQ.j, FQ)
```

#### 3658. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27309` → after: `L26913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26913) · [Before (L27309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27309)

```diff
-         this.providedLightEligible(dd, this.Jl.Vo.PL(dd.i, dd.k)) && (dd.vO = !0, this.storeAndPropagateLight(dd, Jd, kd, !0), dd.GO = !0)
+         this.providedLightEligible(QQ, this.dH.nH.Hx(QQ.i, QQ.k)) && (QQ.TA = !0, this.storeAndPropagateLight(QQ, FQ, wQ, !0), QQ.NA = !0)
```

#### 3659. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27313-L27315` → after: `L26917-L26919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26917-L26919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26917-L26919) · [Before (L27313-L27315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27313-L27315)

```diff
-         const Nd = dd.HQ,
-           Wd = dd.dL;
-         if ((0, Pd.r)(dd, Jd, kd), !dd.tQ) {
+         const qQ = QQ.Qx,
+           oQ = QQ.Lx;
+         if ((0, DQ.s)(QQ, FQ, wQ), !QQ.yY) {
```

#### 3660. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27319` → after: `L26923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26923) · [Before (L27319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27319)

```diff
-             const [kd, Nd, Wd] = Zd.g[Jd], Cd = dd.WL.get(kd, Nd, Wd);
+             const [wQ, qQ, oQ] = kQ.f[FQ], mQ = QQ.mx.get(wQ, qQ, oQ);
```

#### 3661. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27322-L27323` → after: `L26926-L26927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26926-L26927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26926-L26927) · [Before (L27322-L27323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27322-L27323)

```diff
-             Cd.bO > 0 && (Cd.JO ? this.Jl.Vo.kO(Cd) : Kd = !0);
-             const od = !pd && Cd.GO;
+             mQ.EA > 0 && (mQ.YA ? this.dH.nH.xA(mQ) : uQ = !0);
+             const HQ = !LQ && mQ.NA;
```

#### 3662. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27327` → after: `L26931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26931) · [Before (L27327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27327)

```diff
-             const Cd = (0, Zd.t)(dd.size, Nd, Wd, Jd, kd, Pd);
+             const mQ = (0, kQ.o)(QQ.size, qQ, oQ, FQ, wQ, DQ);
```

#### 3663. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27331` → after: `L26935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26935) · [Before (L27331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27331)

```diff
-               kd && (pd || this.invalidateProvidedLightFrom(dd, kd), kd.bO > 0 && (kd.JO = !0, dd.XL && (kd.XL = !0), this.Jl.Vo.kO(kd, dd.XL)))
+               wQ && (LQ || this.invalidateProvidedLightFrom(QQ, wQ), wQ.EA > 0 && (wQ.YA = !0, QQ.nx && (wQ.nx = !0), this.dH.nH.xA(wQ, QQ.nx)))
```

#### 3664. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27335-L27336` → after: `L26939-L26940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26939-L26940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26939-L26940) · [Before (L27335-L27336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27335-L27336)

```diff
-         const gd = (0, Zd.I)(dd.size, Zd.l, Nd, Wd, Jd, kd);
-         this.requeueSkySeedReaders(dd, gd, !pd, !dd.JO), Nd && (0, Pd.s)(Nd), this.Jl.LO.OO(dd)
+         const vQ = (0, kQ.B)(QQ.size, kQ.j, qQ, oQ, FQ, wQ);
+         this.requeueSkySeedReaders(QQ, vQ, !LQ, !QQ.YA), qQ && (0, DQ.v)(qQ), this.dH.OA.sA(QQ)
```

#### 3665. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27339` → after: `L26943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26943) · [Before (L27339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27339)

```diff
-         Jd.GO = !1, dd.vO || (Jd.vO = !1)
+         FQ.NA = !1, QQ.TA || (FQ.TA = !1)
```

#### 3666. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27345-L27346` → after: `L26949-L26950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26949-L26950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26949-L26950) · [Before (L27345-L27346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27345-L27346)

```diff
-               const pd = Jd >> 3 * (Wd + 1) + kd + 1 & 1 ? dd.WL.get(Wd, -1, kd) : null;
-               null !== pd && void 0 !== pd && pd.GO && this.invalidateProvidedLightFrom(dd, pd)
+               const LQ = FQ >> 3 * (oQ + 1) + wQ + 1 & 1 ? QQ.mx.get(oQ, -1, wQ) : null;
+               null !== LQ && void 0 !== LQ && LQ.NA && this.invalidateProvidedLightFrom(QQ, LQ)
```

#### 3667. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27349` → after: `L26953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26953) · [Before (L27349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27349)

```diff
-         if (Nd && (Jd = Zd.c), Jd)
+         if (qQ && (FQ = kQ.e), FQ)
```

#### 3668. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27355-L27356` → after: `L26959-L26960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26959-L26960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26959-L26960) · [Before (L27355-L27356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27355-L27356)

```diff
-                 const Nd = dd.WL.get(kd, -1, pd);
-                 Nd && 0 !== Nd.bO && !Nd.JO && (Nd.mL ? this.skySeedRecheck.add(Nd) : this.skySeedStale(Nd, dd) && (Nd.JO = !0, this.Jl.Vo.kO(Nd)))
+                 const qQ = QQ.mx.get(wQ, -1, LQ);
+                 qQ && 0 !== qQ.EA && !qQ.YA && (qQ.Vx ? this.skySeedRecheck.add(qQ) : this.skySeedStale(qQ, QQ) && (qQ.YA = !0, this.dH.nH.xA(qQ)))
```

#### 3669. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27365` → after: `L26969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26969) · [Before (L27365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27365)

```diff
-         this.skySeedRecheck.delete(dd), Jd && (this.checkHeldSkySeedReaders(dd), kd && this.skySeedStale(dd, null) && (dd.JO = !0, this.Jl.Vo.kO(dd)))
+         this.skySeedRecheck.delete(QQ), FQ && (this.checkHeldSkySeedReaders(QQ), wQ && this.skySeedStale(QQ, null) && (QQ.YA = !0, this.dH.nH.xA(QQ)))
```

#### 3670. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27368` → after: `L26972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26972) · [Before (L27368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27368)

```diff
-         this.requeueSkySeedReaders(dd, Zd.c, !1, !dd.JO)
+         this.requeueSkySeedReaders(QQ, kQ.e, !1, !QQ.YA)
```

#### 3671. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27371-L27372` → after: `L26975-L26976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26975-L26976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26975-L26976) · [Before (L27371-L27372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27371-L27372)

```diff
-         const kd = dd.HQ;
-         if (!kd || dd.tQ) return !1;
+         const wQ = QQ.Qx;
+         if (!wQ || QQ.yY) return !1;
```

#### 3672. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27374` → after: `L26978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26978) · [Before (L27374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27374)

```diff
-         if (void 0 === pd) return !dd.GO;
+         if (void 0 === LQ) return !QQ.NA;
```

#### 3673. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27380-L27381` → after: `L26984-L26985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26984-L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26984-L26985) · [Before (L27380-L27381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27380-L27381)

```diff
-             const gd = dd.WL.get(Pd, 1, kd);
-             if ((!Jd || gd === Jd) && (0, Zd.F)(pd, null !== (Wd = null === gd || void 0 === gd ? void 0 : gd.HQ) && void 0 !== Wd ? Wd : null, !(null === gd || void 0 === gd || !gd.dL), Pd, kd, Nd, Zd.l, 255)) return !0
+             const vQ = QQ.mx.get(DQ, 1, wQ);
+             if ((!FQ || vQ === FQ) && (0, kQ.A)(LQ, null !== (oQ = null === vQ || void 0 === vQ ? void 0 : vQ.Qx) && void 0 !== oQ ? oQ : null, !(null === vQ || void 0 === vQ || !vQ.Lx), DQ, wQ, qQ, kQ.j, 255)) return !0
```

#### 3674. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27391` → after: `L26995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R26995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L26995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L26995) · [Before (L27391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27391)

```diff
-         const kd = null !== (dd = null === (Jd = this.busynessTracker) || void 0 === Jd ? void 0 : Jd.sample()) && void 0 !== dd ? dd : null,
+         const wQ = null !== (QQ = null === (FQ = this.busynessTracker) || void 0 === FQ ? void 0 : FQ.sample()) && void 0 !== QQ ? QQ : null,
```

#### 3675. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27421` → after: `L27025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27025) · [Before (L27421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27421)

```diff
-         return this.queueBudget.oo(this.liveWorkerCount)
+         return this.queueBudget.MH(this.liveWorkerCount)
```

#### 3676. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27424-L27426` → after: `L27028-L27030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27028-L27030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27028-L27030) · [Before (L27424-L27426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27424-L27426)

```diff
-         this.Jl.Vo.jO.NL.forEach((dd => {
-           const Jd = this.Jl.Vo.pO.NO(dd[0], dd[1], dd[2]);
-           Jd && Jd.RO.length > 0 && (this.disposeChunkMeshes(Jd), this.chunksToRemeshOnRestore.add(Jd))
+         this.dH.nH.gA.vx.forEach((QQ => {
+           const FQ = this.dH.nH.AA.tA(QQ[0], QQ[1], QQ[2]);
+           FQ && FQ.IA.length > 0 && (this.disposeChunkMeshes(FQ), this.chunksToRemeshOnRestore.add(FQ))
```

#### 3677. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27431` → after: `L27035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27035) · [Before (L27431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27431)

```diff
-         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((Jd => !(!dd.has(Jd) && 0 === Jd.RO.length) && (this.droppedChunks.delete(Jd) && this.meshFailures.set(Jd, {
+         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((FQ => !(!QQ.has(FQ) && 0 === FQ.IA.length) && (this.droppedChunks.delete(FQ) && this.meshFailures.set(FQ, {
```

#### 3678. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27438` → after: `L27042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27042) · [Before (L27438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27438)

```diff
-         this.requeueKnownChunks((dd => !dd.lO && dd.bO > 0), !1)
+         this.requeueKnownChunks((QQ => !QQ.WA && QQ.EA > 0), !1)
```

#### 3679. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27441-L27443` → after: `L27045-L27047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27045-L27047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27045-L27047) · [Before (L27441-L27443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27441-L27443)

```diff
-         this.Jl.Vo.jO.NL.forEach((kd => {
-           const pd = this.Jl.Vo.pO.NO(kd[0], kd[1], kd[2]);
-           pd && dd(pd) && (pd.JO = !0, Jd && (pd.gO = !0), this.Jl.Vo.kO(pd))
+         this.dH.nH.gA.vx.forEach((wQ => {
+           const LQ = this.dH.nH.AA.tA(wQ[0], wQ[1], wQ[2]);
+           LQ && QQ(LQ) && (LQ.YA = !0, FQ && (LQ.cA = !0), this.dH.nH.xA(LQ))
```

#### 3680. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27454` → after: `L27058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27058) · [Before (L27454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27454)

```diff
-   37732: (dd, Jd, kd) => {
+   37111: (QQ, FQ, wQ) => {
```

#### 3681. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27456-L27457` → after: `L27060-L27061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27060-L27061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27060-L27061) · [Before (L27456-L27457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27456-L27457)

```diff
-       e: () => Nd,
-       f: () => Wd
+       c: () => qQ,
+       e: () => oQ
```

#### 3682. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27471` → after: `L27075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27075) · [Before (L27471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27471)

```diff
-   37725: (dd, Jd, kd) => {
+   37109: (QQ, FQ, wQ) => {
```

#### 3683. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27475-L27476` → after: `L27079-L27080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27079-L27080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27079-L27080) · [Before (L27475-L27476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27475-L27476)

```diff
-       k: () => Nd,
-       n: () => Wd
+       h: () => qQ,
+       l: () => oQ
```

#### 3684. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27479` → after: `L27083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27083) · [Before (L27479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27479)

```diff
-       Dk: 0,
+       Uw: 0,
```

#### 3685. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27497` → after: `L27101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27101) · [Before (L27497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27497)

```diff
-   37978: (dd, Jd, kd) => {
+   37333: (QQ, FQ, wQ) => {
```

#### 3686. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27499-L27500` → after: `L27103-L27104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27103-L27104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27103-L27104) · [Before (L27499-L27500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27499-L27500)

```diff
-       c: () => Nd,
-       f: () => Wd
+       b: () => qQ,
+       d: () => oQ
```

#### 3687. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27502` → after: `L27106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27106) · [Before (L27502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27502)

```diff
-     var pd = kd(37697);
+     var LQ = wQ(37082);
```

#### 3688. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27505-L27506` → after: `L27109-L27110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27109-L27110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27109-L27110) · [Before (L27505-L27506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27505-L27506)

```diff
-       const kd = dd.fp,
-         Nd = dd.metadata[pd.B] * Math.max(Math.abs(kd.x), Math.abs(kd.y), Math.abs(kd.z)),
+       const wQ = QQ.ck,
+         qQ = QQ.metadata[LQ.H] * Math.max(Math.abs(wQ.x), Math.abs(wQ.y), Math.abs(wQ.z)),
```

#### 3689. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27518` → after: `L27122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27122) · [Before (L27518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27518)

```diff
-       return void 0 !== (null === (kd = dd.metadata) || void 0 === kd ? void 0 : kd[pd.B]) ? Nd(dd, Jd) : (dd.computeWorldMatrix(), dd.isInFrustum(Jd))
+       return void 0 !== (null === (wQ = QQ.metadata) || void 0 === wQ ? void 0 : wQ[LQ.H]) ? qQ(QQ, FQ) : (QQ.computeWorldMatrix(), QQ.isInFrustum(FQ))
```

#### 3690. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27521` → after: `L27125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27125) · [Before (L27521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27521)

```diff
-   37876: (dd, Jd, kd) => {
+   37228: (QQ, FQ, wQ) => {
```

#### 3691. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27526` → after: `L27129-L27130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27129-L27130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27129-L27130) · [Before (L27526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27526)

```diff
-       m: () => gd
+       l: () => kQ,
+       o: () => vQ
```

#### 3692. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27545` → after: `L27149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27149) · [Before (L27545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27545)

```diff
-       return "function" === typeof dd && null !== (Jd = dd[Nd]) && void 0 !== Jd ? Jd : null
+       return "function" === typeof QQ && null !== (FQ = QQ[qQ]) && void 0 !== FQ ? FQ : null
```

#### 3693. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27548` → after: `L27152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27152) · [Before (L27548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27548)

```diff
-   37716: (dd, Jd, kd) => {
+   37097: (QQ, FQ, wQ) => {
```

#### 3694. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27550` → after: `L27154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27154) · [Before (L27550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27550)

```diff
-       e: () => pd
+       c: () => LQ
```

#### 3695. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27596` → after: `L27200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27200) · [Before (L27596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27596)

```diff
-   38108: (dd, Jd, kd) => {
+   37460: (QQ, FQ, wQ) => {
```

#### 3696. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27598` → after: `L27202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27202) · [Before (L27598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27598)

```diff
-       d: () => od
+       b: () => HQ
```

#### 3697. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27600-L27605` → after: `L27204-L27209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27204-L27209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27204-L27209) · [Before (L27600-L27605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27600-L27605)

```diff
-     var pd = kd(37245),
-       Nd = kd(38105),
-       Wd = kd(37657),
-       Pd = kd(37366),
-       Zd = kd(37682),
-       gd = kd(38090);
+     var LQ = wQ(36688),
+       qQ = wQ(37452),
+       oQ = wQ(37045),
+       DQ = wQ(36809),
+       kQ = wQ(37065),
+       vQ = wQ(37443);
```

#### 3698. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27607-L27608` → after: `L27211-L27212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27211-L27212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27211-L27212) · [Before (L27607-L27608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27607-L27608)

```diff
-     var Kd = kd(37640);
-     class od extends Kd.e {
+     var uQ = wQ(37036);
+     class HQ extends uQ.c {
```

#### 3699. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27610` → after: `L27214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27214) · [Before (L27610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27610)

```diff
-         super(dd, Jd, kd), this.model = pd, this.owned = Nd, this.UO = Pd, this.sideOrientation = void 0, this.fn = {}, this._userInstancedBuffersStorage = void 0, this.Km = !1, this.RNd = null, this.instances = [], this._thinInstanceDataStorage = {
+         super(QQ, FQ, wQ), this.model = LQ, this.owned = qQ, this.PA = DQ, this.sideOrientation = void 0, this.bK = {}, this._userInstancedBuffersStorage = void 0, this.lN = !1, this.cqQ = null, this.instances = [], this._thinInstanceDataStorage = {
```

#### 3700. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27615` → after: `L27219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27219) · [Before (L27615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27615)

```diff
-         }, this.hJd = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.xL = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
+         }, this.hFQ = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.Ix = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
```

#### 3701. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27619` → after: `L27223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27223) · [Before (L27619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27619)

```diff
-         Zd.create(this.row, 0, Wd.c.isVisible), pd && Zd.setBounds(this.row, pd.boundsMin, pd.boundsMax), this.materialIndices = new Array(Pd.length / 4).fill(0), this.sideOrientation = dd.Wm().useRightHandedSystem ? 0 : 1, this.material = null
+         kQ.create(this.row, 0, oQ.c.isVisible), LQ && kQ.setBounds(this.row, LQ.boundsMin, LQ.boundsMax), this.materialIndices = new Array(DQ.length / 4).fill(0), this.sideOrientation = QQ.iN().useRightHandedSystem ? 0 : 1, this.material = null
```

#### 3702. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27625` → after: `L27229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27229) · [Before (L27625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27625)

```diff
-         this.UL.model.meshes.setFlag(this.row, Wd.c.alwaysSelect, dd)
+         this.Zx.model.meshes.setFlag(this.row, oQ.c.alwaysSelect, QQ)
```

#### 3703. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27631` → after: `L27235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27235) · [Before (L27631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27631)

```diff
-         this.UL.model.meshes.setFlag(this.row, Wd.c.isVisible, dd)
+         this.Zx.model.meshes.setFlag(this.row, oQ.c.isVisible, QQ)
```

#### 3704. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27633` → after: `L27237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27237) · [Before (L27633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27633)

```diff
-       get eNd() {
+       get pqQ() {
```

#### 3705. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27637` → after: `L27241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27241) · [Before (L27637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27637)

```diff
-         return this.UL.model.meshes.visibility[this.row]
+         return this.Zx.model.meshes.visibility[this.row]
```

#### 3706. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27640` → after: `L27244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27244) · [Before (L27640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27640)

```diff
-         for (const Jd of [this, ...this.instances]) this.UL.model.meshes.setVisibility(Jd.row, dd)
+         for (const FQ of [this, ...this.instances]) this.Zx.model.meshes.setVisibility(FQ.row, QQ)
```

#### 3707. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27643` → after: `L27247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27247) · [Before (L27643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27643)

```diff
-         return this.UL.model.meshes.layer[this.row]
+         return this.Zx.model.meshes.layer[this.row]
```

#### 3708. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27646` → after: `L27250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27250) · [Before (L27646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27646)

```diff
-         for (const Jd of [this, ...this.instances]) this.UL.model.meshes.setLayer(Jd.row, dd)
+         for (const FQ of [this, ...this.instances]) this.Zx.model.meshes.setLayer(FQ.row, QQ)
```

#### 3709. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27652` → after: `L27256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27256) · [Before (L27652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27652)

```diff
-         this.UL.model.meshes.setFlag(this.row, Wd.c.pickable, dd)
+         this.Zx.model.meshes.setFlag(this.row, oQ.c.pickable, QQ)
```

#### 3710. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27659` → after: `L27263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27263) · [Before (L27659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27659)

```diff
-         const Jd = "MultiMaterial" === (null === dd || void 0 === dd ? void 0 : dd.getClassName()) ? dd.f6 : null,
+         const FQ = "MultiMaterial" === (null === QQ || void 0 === QQ ? void 0 : QQ.getClassName()) ? QQ.qQQ : null,
```

#### 3711. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27663` → after: `L27267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27267) · [Before (L27663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27663)

```diff
-             return null !== (pd = Nd && (0, Pd.$)(Nd)) && void 0 !== pd ? pd : null
+             return null !== (LQ = qQ && (0, DQ.jb)(qQ)) && void 0 !== LQ ? LQ : null
```

#### 3712. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27665-L27666` → after: `L27269-L27270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27269-L27270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27269-L27270) · [Before (L27665-L27666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27665-L27666)

```diff
-           pd = new Wd.f(this, this.model, this.UO, kd);
-         for (const Nd of [this, ...this.instances]) this.UL.model.meshes.setParts(Nd.row, pd)
+           LQ = new oQ.g(this, this.model, this.PA, wQ);
+         for (const qQ of [this, ...this.instances]) this.Zx.model.meshes.setParts(qQ.row, LQ)
```

#### 3713. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27678` → after: `L27282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27282) · [Before (L27678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27678)

```diff
-         return (this.forcedInstanceCount || this.W8) > 0
+         return (this.forcedInstanceCount || this.o4) > 0
```

#### 3714. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27682` → after: `L27286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27286) · [Before (L27682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27682)

```diff
-         return this.UL.Wm().eL()
+         return this.Zx.iN().Wx()
```

#### 3715. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27685` → after: `L27289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27289) · [Before (L27685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27685)

```diff
-         return this.UL.model.meshes.parts[this.row]
+         return this.Zx.model.meshes.parts[this.row]
```

#### 3716. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27692` → after: `L27296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27296) · [Before (L27692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27692)

```diff
-         } = null !== (dd = this.model) && void 0 !== dd ? dd : {
+         } = null !== (QQ = this.model) && void 0 !== QQ ? QQ : {
```

#### 3717. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27701` → after: `L27305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27305) · [Before (L27701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27701)

```diff
-             gd = .5 * pd.IL.Distance(dd, Jd);
+             vQ = .5 * LQ.Ox.Distance(QQ, FQ);
```

#### 3718. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27703` → after: `L27307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27307) · [Before (L27703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27703)

```diff
-             Wd.o5(Number.MAX_VALUE), Pd.o5(-Number.MAX_VALUE);
+             oQ.K3(Number.MAX_VALUE), DQ.K3(-Number.MAX_VALUE);
```

#### 3719. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27708` → after: `L27312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27312) · [Before (L27708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27708)

```diff
-               pd.IL.CheckExtends(pd.IL.TransformCoordinatesFromFloatsToRef(Zd, gd, Cd, kd, new pd.IL), Wd, Pd)
+               LQ.Ox.CheckExtends(LQ.Ox.TransformCoordinatesFromFloatsToRef(kQ, vQ, mQ, wQ, new LQ.Ox), oQ, DQ)
```

#### 3720. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27710-L27711` → after: `L27314-L27315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27314-L27315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27314-L27315) · [Before (L27710-L27711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27710-L27711)

```diff
-             Zd = pd.IL.TransformCoordinates(Nd, kd);
-             const Kd = pd.IL.TransformNormalFromFloatsToRef(1, 1, 1, kd, new pd.IL);
+             kQ = LQ.Ox.TransformCoordinates(qQ, wQ);
+             const uQ = LQ.Ox.TransformNormalFromFloatsToRef(1, 1, 1, wQ, new LQ.Ox);
```

#### 3721. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27725` → after: `L27329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27329) · [Before (L27725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27725)

```diff
-             zpd: {
+             BLQ: {
```

#### 3722. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27733` → after: `L27337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27337) · [Before (L27733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27733)

```diff
-         }(pd.IL.FromArray(Jd), pd.IL.FromArray(kd), this.getWorldMatrix())
+         }(LQ.Ox.FromArray(FQ), LQ.Ox.FromArray(wQ), this.getWorldMatrix())
```

#### 3723. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27736` → after: `L27340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27340) · [Before (L27736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27736)

```diff
-         return this.pU().zpd.isInFrustum(dd)
+         return this.sK().BLQ.isInFrustum(QQ)
```

#### 3724. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27740` → after: `L27344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27344) · [Before (L27740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27740)

```diff
-         return null !== (dd = null === (Jd = this.model) || void 0 === Jd ? void 0 : Jd.vertexCount) && void 0 !== dd ? dd : 0
+         return null !== (QQ = null === (FQ = this.model) || void 0 === FQ ? void 0 : FQ.vertexCount) && void 0 !== QQ ? QQ : 0
```

#### 3725. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27759` → after: `L27363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27363) · [Before (L27759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27759)

```diff
-         return Pd === Zd.b && 0 === pd && Nd === 4 * Wd && (Array.isArray(kd) || kd instanceof Float32Array) && kd.length === this.model.vertexCount * Wd ? kd : (0, Zd.d)(Jd, this.model.vertexCount)
+         return DQ === kQ.e && 0 === LQ && qQ === 4 * oQ && (Array.isArray(wQ) || wQ instanceof Float32Array) && wQ.length === this.model.vertexCount * oQ ? wQ : (0, kQ.l)(FQ, this.model.vertexCount)
```

#### 3726. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27768` → after: `L27372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27372) · [Before (L27768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27768)

```diff
-         }))) && void 0 !== dd ? dd : []
+         }))) && void 0 !== QQ ? QQ : []
```

#### 3727. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27770` → after: `L27374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27374) · [Before (L27770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27770)

```diff
-       ipd() {
+       OLQ() {
```

#### 3728. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27772` → after: `L27376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27376) · [Before (L27772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27772)

```diff
-         return null !== (dd = null === (Jd = this.model) || void 0 === Jd ? void 0 : Jd.indexData) && void 0 !== dd ? dd : []
+         return null !== (QQ = null === (FQ = this.model) || void 0 === FQ ? void 0 : FQ.indexData) && void 0 !== QQ ? QQ : []
```

#### 3729. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27784` → after: `L27388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27388) · [Before (L27784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27784)

```diff
-           return null !== (Jd = this.getVerticesData(dd)) && void 0 !== Jd ? Jd : void 0
+           return null !== (FQ = this.getVerticesData(QQ)) && void 0 !== FQ ? FQ : void 0
```

#### 3730. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27790` → after: `L27394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27394) · [Before (L27790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27790)

```diff
-         return (0, gd.j)({
+         return (0, vQ.i)({
```

#### 3731. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27793` → after: `L27397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27397) · [Before (L27793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27793)

```diff
-           indices: null !== (Jd = this.model.indexData) && void 0 !== Jd ? Jd : [],
+           indices: null !== (FQ = this.model.indexData) && void 0 !== FQ ? FQ : [],
```

#### 3732. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27806` → after: `L27410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27410) · [Before (L27806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27806)

```diff
-         return this.position = pd.IL.ZeroReadOnly, this.rotation = pd.IL.ZeroReadOnly, this.fp = pd.IL.OneReadOnly, dd && (this.rotationQuaternion = {
+         return this.position = LQ.Ox.ZeroReadOnly, this.rotation = LQ.Ox.ZeroReadOnly, this.ck = LQ.Ox.OneReadOnly, QQ && (this.rotationQuaternion = {
```

#### 3733. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27815` → after: `L27419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27419) · [Before (L27815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27815)

```diff
-         kd.set(Jd), (0, Zd.x)(this.model, kd)
+         wQ.set(FQ), (0, kQ.E)(this.model, wQ)
```

#### 3734. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27818` → after: `L27422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27422) · [Before (L27818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27818)

```diff
-         (0, Zd.j)(dd), this.owned && (0, Zd.t)(this.model), this.model = dd, this.owned = !0, Jd !== this.UO && (this.UO = Jd, this.materialIndices = new Array(Jd.length / 4).fill(0), this.partBoxes = null), this.UL.model.meshes.setBounds(this.row, dd.boundsMin, dd.boundsMax), th … [truncated]
+         (0, kQ.p)(QQ), this.owned && (0, kQ.B)(this.model), this.model = QQ, this.owned = !0, FQ !== this.PA && (this.PA = FQ, this.materialIndices = new Array(FQ.length / 4).fill(0), this.partBoxes = null), this.Zx.model.meshes.setBounds(this.row, QQ.boundsMin, QQ.boundsMax), th … [truncated]
```

#### 3735. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27821` → after: `L27425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27425) · [Before (L27821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27821)

```diff
-         return new Ld(this, this.UL, dd, this.UL.Wm().getUniqueId(), this.model, !1, this.UO)
+         return new xQ(this, this.Zx, QQ, this.Zx.iN().getUniqueId(), this.model, !1, this.PA)
```

#### 3736. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27824` → after: `L27428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27428) · [Before (L27824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27824)

```diff
-         const Jd = new od(this.UL, dd, this.UL.Wm().getUniqueId(), this.model, !1, this.UO);
+         const FQ = new HQ(this.Zx, QQ, this.Zx.iN().getUniqueId(), this.model, !1, this.PA);
```

#### 3737. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27826` → after: `L27430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27430) · [Before (L27826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27826)

```diff
-         return Qd(kd = this, pd = Jd), pd.parent = kd.parent, pd.XM(kd.isEnabled(!1)),
+         return YQ(wQ = this, LQ = FQ), LQ.parent = wQ.parent, LQ.Qr(wQ.isEnabled(!1)),
```

#### 3738. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27834` → after: `L27438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27438) · [Before (L27834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27834)

```diff
-         (0, Nd.c)()
+         (0, qQ.d)()
```

#### 3739. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27842` → after: `L27446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27446) · [Before (L27842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27842)

```diff
-         for (const Wd of [this, ...this.instances]) Wd.fn[dd] = null;
+         for (const oQ of [this, ...this.instances]) oQ.bK[QQ] = null;
```

#### 3740. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27865-L27866` → after: `L27469-L27470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27469-L27470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27469-L27470) · [Before (L27865-L27866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27865-L27866)

```diff
-         const Jd = null === (dd = this.RNd) || void 0 === dd ? void 0 : dd.instances;
-         null === Jd || void 0 === Jd || Jd.splice(Jd.indexOf(this), 1), this.owned && (0, Zd.t)(this.model)
+         const FQ = null === (QQ = this.cqQ) || void 0 === QQ ? void 0 : QQ.instances;
+         null === FQ || void 0 === FQ || FQ.splice(FQ.indexOf(this), 1), this.owned && (0, kQ.B)(this.model)
```

#### 3741. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27882` → after: `L27486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27486) · [Before (L27882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27882)

```diff
-           const dd = null !== Jd && void 0 !== Jd ? Jd : ld.length / Nd;
+           const QQ = null !== FQ && void 0 !== FQ ? FQ : bQ.length / qQ;
```

#### 3742. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27889` → after: `L27493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27493) · [Before (L27889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27889)

```diff
-             glType: Zd.b,
+             glType: kQ.e,
```

#### 3743. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27895-L27896` → after: `L27499-L27500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27499-L27500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27499-L27500) · [Before (L27895-L27896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27895-L27896)

```diff
-         } = dd, Kd = Cd ? (0, Zd.p)(Nd, ((dd, Jd) => Cd[3 * dd + Jd])) : [Wd, Pd];
-         this.replaceModel(new Zd.c(gd, pd, Nd, Kd[0], Kd[1]), this.UO)
+         } = QQ, uQ = mQ ? (0, kQ.x)(qQ, ((QQ, FQ) => mQ[3 * QQ + FQ])) : [oQ, DQ];
+         this.replaceModel(new kQ.h(vQ, LQ, qQ, uQ[0], uQ[1]), this.PA)
```

#### 3744. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27903` → after: `L27507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27507) · [Before (L27903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27903)

```diff
-         return 0 !== (this.UL.model.meshes.flags[this.row] & dd)
+         return 0 !== (this.Zx.model.meshes.flags[this.row] & QQ)
```

#### 3745. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27906` → after: `L27510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27510) · [Before (L27906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27906)

```diff
-     const ld = ["billboardMode", "infiniteDistance", "isVisible", "iO", "RL", "visibility", "renderingGroupId", "sideOrientation", "hJd", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "xL", "metadata"];
+     const bQ = ["billboardMode", "infiniteDistance", "isVisible", "aA", "Rx", "visibility", "renderingGroupId", "sideOrientation", "hFQ", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "Ix", "metadata"];
```

#### 3746. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27909` → after: `L27513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27513) · [Before (L27909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27909)

```diff
-       Jd.position = dd.position, Jd.rotation = dd.rotation, dd.rotationQuaternion && (Jd.rotationQuaternion = dd.rotationQuaternion), Jd.fp = dd.fp
+       FQ.position = QQ.position, FQ.rotation = QQ.rotation, QQ.rotationQuaternion && (FQ.rotationQuaternion = QQ.rotationQuaternion), FQ.ck = QQ.ck
```

#### 3747. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27914` → after: `L27518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27518) · [Before (L27914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27914)

```diff
-         super(...kd), this.RNd = dd, this.Km = !0, dd.instances.push(this);
+         super(...wQ), this.cqQ = QQ, this.lN = !0, QQ.instances.push(this);
```

#### 3748. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27917-L27918` → after: `L27521-L27522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27521-L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27521-L27522) · [Before (L27917-L27918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27917-L27918)

```diff
-         } = this.UL.model;
-         Nd.setParts(this.row, Nd.parts[dd.row]), this.partBoxes = dd.partBoxes, Nd.setVisibility(this.row, dd.visibility), Nd.setLayer(this.row, dd.renderingGroupId), Qd(dd, this), this.infiniteDistance = dd.infiniteDistance, Object.assign(this.fn, dd.fn), this.parent = dd.parent
+         } = this.Zx.model;
+         qQ.setParts(this.row, qQ.parts[QQ.row]), this.partBoxes = QQ.partBoxes, qQ.setVisibility(this.row, QQ.visibility), qQ.setLayer(this.row, QQ.renderingGroupId), YQ(QQ, this), this.infiniteDistance = QQ.infiniteDistance, Object.assign(this.bK, QQ.bK), this.parent = QQ.parent
```

#### 3749. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27921` → after: `L27525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27525) · [Before (L27921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27921)

```diff
-         return this.RNd.visibility
+         return this.cqQ.visibility
```

#### 3750. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27925` → after: `L27529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27529) · [Before (L27925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27925)

```diff
-         return this.RNd.renderingGroupId
+         return this.cqQ.renderingGroupId
```

#### 3751. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27929` → after: `L27533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27533) · [Before (L27929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27929)

```diff
-         return this.RNd.material
+         return this.cqQ.material
```

#### 3752. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27934` → after: `L27538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27538) · [Before (L27934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27934)

```diff
-   37640: (dd, Jd, kd) => {
+   37036: (QQ, FQ, wQ) => {
```

#### 3753. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27936-L27938` → after: `L27540-L27542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27540-L27542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27540-L27542) · [Before (L27936-L27938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27936-L27938)

```diff
-       e: () => od,
-       h: () => Cd,
-       l: () => ld
+       c: () => HQ,
+       g: () => mQ,
+       k: () => bQ
```

#### 3754. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27940-L27942` → after: `L27544-L27546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27544-L27546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27544-L27546) · [Before (L27940-L27942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27940-L27942)

```diff
-     var pd = kd(37245),
-       Nd = kd(37649),
-       Wd = kd(37675);
+     var LQ = wQ(36688),
+       qQ = wQ(37042),
+       oQ = wQ(37057);
```

#### 3755. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27944` → after: `L27548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27548) · [Before (L27944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27944)

```diff
-       Zd = new pd.IL;
+       kQ = new LQ.Ox;
```

#### 3756. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27971` → after: `L27575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27575) · [Before (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27971)

```diff
-       zPd(dd, Jd, kd) {
+       LkQ(QQ, FQ, wQ) {
```

#### 3757. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27974` → after: `L27578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27578) · [Before (L27974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27974)

```diff
-       spd() {
+       RLQ() {
```

#### 3758. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27977` → after: `L27581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27581) · [Before (L27977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27977)

```diff
-       lkd(dd) {
+       bwQ(QQ) {
```

#### 3759. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27982` → after: `L27586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27586) · [Before (L27982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27982)

```diff
-         return new pd.IL(this.x, this.y, this.z)
+         return new LQ.Ox(this.x, this.y, this.z)
```

#### 3760. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L27985` → after: `L27589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27589) · [Before (L27985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L27985)

```diff
-         return new pd.IL(this.x * dd, this.y * dd, this.z * dd)
+         return new LQ.Ox(this.x * QQ, this.y * QQ, this.z * QQ)
```

#### 3761. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28025` → after: `L27629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27629) · [Before (L28025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28025)

```diff
-         this.UL = dd, this.name = Jd, this.uniqueId = kd, this.row = void 0, this.metadata = null, this.scalingDeterminant = 1, this.Zm = new Kd, this.onEffectiveEnabledStateChangedObservable = new Kd, this.APd = !1, this.rowPosition = void 0, this.rowScaling = void 0, this.rowRo … [truncated]
+         this.Zx = QQ, this.name = FQ, this.uniqueId = wQ, this.row = void 0, this.metadata = null, this.scalingDeterminant = 1, this.zN = new uQ, this.onEffectiveEnabledStateChangedObservable = new uQ, this.kkQ = !1, this.rowPosition = void 0, this.rowScaling = void 0, this.rowRo … [truncated]
```

#### 3762. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28033` → after: `L27637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27637) · [Before (L28033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28033)

```diff
-         })), this.rowScaling = new gd((() => Nd.fp), 3 * Wd, ((dd, Jd, kd) => {
+         })), this.rowScaling = new vQ((() => qQ.ck), 3 * oQ, ((QQ, FQ, wQ) => {
```

#### 3763. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28068` → after: `L27672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27672) · [Before (L28068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28068)

```diff
-         } = this.UL.model, kd = this.row;
+         } = this.Zx.model, wQ = this.row;
```

#### 3764. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28086` → after: `L27690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27690) · [Before (L28086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28086)

```diff
-         return 0 !== (this.UL.model.nodes.flags[this.row] & Wd.h.infiniteDistance)
+         return 0 !== (this.Zx.model.nodes.flags[this.row] & oQ.f.infiniteDistance)
```

#### 3765. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28089` → after: `L27693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27693) · [Before (L28089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28089)

```diff
-         this.UL.model.nodes.setInfiniteDistance(this.row, dd)
+         this.Zx.model.nodes.setInfiniteDistance(this.row, QQ)
```

#### 3766. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28096` → after: `L27700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27700) · [Before (L28096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28096)

```diff
-         this.billboard = dd, this.UL.model.nodes.setBillboard(this.row, null !== (Jd = Nd.c[dd]) && void 0 !== Jd ? Jd : Wd.e.none)
+         this.billboard = QQ, this.Zx.model.nodes.setBillboard(this.row, null !== (FQ = qQ.b[QQ]) && void 0 !== FQ ? FQ : oQ.c.none)
```

#### 3767. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28102` → after: `L27706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27706) · [Before (L28102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28102)

```diff
-         if (dd === this.parentNode || this.pL) return;
+         if (QQ === this.parentNode || this.kx) return;
```

#### 3768. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28104` → after: `L27708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27708) · [Before (L28104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28104)

```diff
-         this.leaveParent(), this.parentNode = dd, dd && Cd(dd) && dd.children.push(this), this.UL.model.nodes.setParent(this.row, -1), (0, Nd.h)(this.UL, this, this.row), this.syncEnabled(Jd)
+         this.leaveParent(), this.parentNode = QQ, QQ && mQ(QQ) && QQ.children.push(this), this.Zx.model.nodes.setParent(this.row, -1), (0, qQ.f)(this.Zx, this, this.row), this.syncEnabled(FQ)
```

#### 3769. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28112` → after: `L27716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27716) · [Before (L28112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28112)

```diff
-         return 0 !== (this.UL.model.nodes.flags[this.row] & Wd.h.enabled) && (!dd || null === this.parentNode || this.parentNode.isEnabled())
+         return 0 !== (this.Zx.model.nodes.flags[this.row] & oQ.f.enabled) && (!QQ || null === this.parentNode || this.parentNode.isEnabled())
```

#### 3770. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28117` → after: `L27721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27721) · [Before (L28117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28117)

```diff
-           this.UL.model.nodes.XM(this.row, dd), this.syncEnabled(Jd)
+           this.Zx.model.nodes.Qr(this.row, QQ), this.syncEnabled(FQ)
```

#### 3771. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28121` → after: `L27725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27725) · [Before (L28121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28121)

```diff
-         return this.UL.model.nodes.worldNow(this.row, this.UL.model.view, Pd), pd.Matrix.FromArrayToRef(Pd, 0, this.Vo)
+         return this.Zx.model.nodes.worldNow(this.row, this.Zx.model.view, DQ), LQ.Matrix.FromArrayToRef(DQ, 0, this.nH)
```

#### 3772. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28130-L28131` → after: `L27734-L27735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27734-L27735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27734-L27735) · [Before (L28130-L28131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28130-L28131)

```diff
-           Pd = pd.IL.TransformNormal(this.rowPosition.clone(), Wd.clone().invert()).add(dd.scale(Jd));
-         return this.position = pd.IL.TransformNormal(Pd, Wd), this
+           DQ = LQ.Ox.TransformNormal(this.rowPosition.clone(), oQ.clone().invert()).add(QQ.scale(FQ));
+         return this.position = LQ.Ox.TransformNormal(DQ, oQ), this
```

#### 3773. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28139` → after: `L27743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27743) · [Before (L28139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28139)

```diff
-       dkd() {}
+       dFQ() {}
```

#### 3774. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28142-L28143` → after: `L27746-L27747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27746-L27747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27746-L27747) · [Before (L28142-L28143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28142-L28143)

```diff
-         const kd = ld(this.UL, dd);
-         return this.UL.model.nodes.setWorldSource(kd.row, Jd), kd
+         const wQ = bQ(this.Zx, QQ);
+         return this.Zx.model.nodes.setWorldSource(wQ.row, FQ), wQ
```

#### 3775. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28155` → after: `L27759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27759) · [Before (L28155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28155)

```diff
-         const dd = new pd.IL(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         const QQ = new LQ.Ox(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
```

#### 3776. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28163-L28164` → after: `L27767-L27768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27767-L27768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27767-L27768) · [Before (L28163-L28164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28163-L28164)

```diff
-             } = Nd.pU();
-             pd.IL.CheckExtends(kd.minimumWorld, dd, Jd), pd.IL.CheckExtends(kd.maximumWorld, dd, Jd)
+             } = qQ.sK();
+             LQ.Ox.CheckExtends(wQ.minimumWorld, QQ, FQ), LQ.Ox.CheckExtends(wQ.maximumWorld, QQ, FQ)
```

#### 3777. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28177` → after: `L27781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27781) · [Before (L28177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28177)

```diff
-         return this.UL.Wm()
+         return this.Zx.iN()
```

#### 3778. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28183` → after: `L27787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27787) · [Before (L28183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28183)

```diff
-         return this.pL
+         return this.kx
```

#### 3779. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28188` → after: `L27792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27792) · [Before (L28188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28188)

```diff
-         if (!this.pL) {
+         if (!this.kx) {
```

#### 3780. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28190` → after: `L27794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27794) · [Before (L28190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28190)

```diff
-           this.pL = !0, (0, Nd.i)(this.UL, this), this.leaveParent(), this.release(), this.Zm.notify(), this.Zm.clear()
+           this.kx = !0, (0, qQ.j)(this.Zx, this), this.leaveParent(), this.release(), this.zN.notify(), this.zN.clear()
```

#### 3781. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28210` → after: `L27814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27814) · [Before (L28210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28210)

```diff
-       return new od(dd, Jd, dd.Wm().getUniqueId())
+       return new HQ(QQ, FQ, QQ.iN().getUniqueId())
```

#### 3782. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28213` → after: `L27817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27817) · [Before (L28213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28213)

```diff
-   37769: (dd, Jd, kd) => {
+   37134: (QQ, FQ, wQ) => {
```

#### 3783. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28215-L28219` → after: `L27819-L27823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27819-L27823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27819-L27823) · [Before (L28215-L28219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28215-L28219)

```diff
-       e: () => Zd,
-       i: () => gd,
-       k: () => Kd,
-       m: () => Cd,
-       n: () => Ld
+       c: () => kQ,
+       f: () => vQ,
+       j: () => uQ,
+       l: () => mQ,
+       p: () => xQ
```

#### 3784. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28221` → after: `L27825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27825) · [Before (L28221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28221)

```diff
-     var pd = kd(37753);
+     var LQ = wQ(37123);
```

#### 3785. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28225` → after: `L27829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27829) · [Before (L28225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28225)

```diff
-     pd.n;
+     LQ.k;
```

#### 3786. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28236` → after: `L27840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27840) · [Before (L28236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28236)

```diff
-       const Pd = pd.p;
+       const DQ = LQ.l;
```

#### 3787. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28245` → after: `L27849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27849) · [Before (L28245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28245)

```diff
-         for (let Jd = 0; Jd < pd.r.length; Jd++) {
+         for (let FQ = 0; FQ < LQ.n.length; FQ++) {
```

#### 3788. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28247-L28248` → after: `L27851-L27852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27851-L27852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27851-L27852) · [Before (L28247-L28248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28247-L28248)

```diff
-           for (let Nd = Jd + 1; Nd <= pd.r.length; Nd++) {
-             const Wd = 1 << pd.r[Nd - 1];
+           for (let qQ = FQ + 1; qQ <= LQ.n.length; qQ++) {
+             const oQ = 1 << LQ.n[qQ - 1];
```

#### 3789. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28253` → after: `L27857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27857) · [Before (L28253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28253)

```diff
-               qJ: kd
+               tF: wQ
```

#### 3790. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28262` → after: `L27866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27866) · [Before (L28262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28262)

```diff
-       const kd = pd.k[Jd];
+       const wQ = LQ.g[FQ];
```

#### 3791. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28268` → after: `L27872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27872) · [Before (L28268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28268)

```diff
-       for (let Pd = 0; Pd < pd.n; Pd++) Qd(dd, Pd) > 0 && (Nd |= 1 << Pd);
+       for (let DQ = 0; DQ < LQ.k; DQ++) YQ(QQ, DQ) > 0 && (qQ |= 1 << DQ);
```

#### 3792. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28270` → after: `L27874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27874) · [Before (L28270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28270)

```diff
-       if (Jd === Nd) return kd[0] = 0, kd[1] = dd[pd.g], 1;
+       if (FQ === qQ) return wQ[0] = 0, wQ[1] = QQ[LQ.d], 1;
```

#### 3793. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28280` → after: `L27884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27884) · [Before (L28280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28280)

```diff
-                 qJ: dd,
+                 tF: QQ,
```

#### 3794. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28285-L28286` → after: `L27889-L27890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27889-L27890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27889-L27890) · [Before (L28285-L28286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28285-L28286)

```diff
-             if ((Wd.qJ & dd) === dd && pd(Wd.qJ, [Wd.start, Wd.end]), 0 !== (Wd.qJ & dd))
-               for (const Jd of od) Jd.start < Wd.end || 0 !== (Wd.qJ & Jd.qJ) || 0 === (Jd.qJ & dd) || ((Wd.qJ | Jd.qJ) & dd) !== dd || pd(Wd.qJ | Jd.qJ, [Wd.start, Wd.end, Jd.start, Jd.end]);
+             if ((oQ.tF & QQ) === QQ && LQ(oQ.tF, [oQ.start, oQ.end]), 0 !== (oQ.tF & QQ))
+               for (const FQ of HQ) FQ.start < oQ.end || 0 !== (oQ.tF & FQ.tF) || 0 === (FQ.tF & QQ) || ((oQ.tF | FQ.tF) & QQ) !== QQ || LQ(oQ.tF | FQ.tF, [oQ.start, oQ.end, FQ.start, FQ.end]);
```

#### 3795. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28288` → after: `L27892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27892) · [Before (L28288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28288)

```diff
-           return Jd = Nd.filter((dd => !Nd.some((Jd => Jd !== dd && (Jd.qJ & dd.qJ) === Jd.qJ && Jd.windows.length <= dd.windows.length)))), ld[dd] = Jd, Jd
+           return FQ = qQ.filter((QQ => !qQ.some((FQ => FQ !== QQ && (FQ.tF & QQ.tF) === FQ.tF && FQ.windows.length <= QQ.windows.length)))), bQ[QQ] = FQ, FQ
```

#### 3796. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28291-L28292` → after: `L27895-L27896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27895-L27896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27895-L27896) · [Before (L28291-L28292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28291-L28292)

```diff
-         const gd = Cd.qJ & ~Jd & Nd;
-         for (let Jd = 0; Jd < pd.n; Jd++) gd & 1 << Jd && (kd += Qd(dd, Jd));
+         const vQ = mQ.tF & ~FQ & qQ;
+         for (let FQ = 0; FQ < LQ.k; FQ++) vQ & 1 << FQ && (wQ += YQ(QQ, FQ));
```

#### 3797. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28303` → after: `L27907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27907) · [Before (L28303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28303)

```diff
-   37689: (dd, Jd, kd) => {
+   37074: (QQ, FQ, wQ) => {
```

#### 3798. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28305-L28307` → after: `L27909-L27911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27909-L27911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27909-L27911) · [Before (L28305-L28307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28305-L28307)

```diff
-       e: () => Pd,
-       i: () => Cd,
-       l: () => gd
+       c: () => DQ,
+       d: () => mQ,
+       e: () => vQ
```

#### 3799. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28345` → after: `L27949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27949) · [Before (L28345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28345)

```diff
-         this.oo = void 0, this.count = 0, this.enabled = 0, this.matrices = void 0, this.attributes = void 0, this.rowStride = void 0, this.kinds = void 0, this.sL = void 0, this.stale = void 0, this.released = !1, this.matrixRow = new Float32Array(16), this.attributeRow = void 0 … [truncated]
+         this.MH = void 0, this.count = 0, this.enabled = 0, this.matrices = void 0, this.attributes = void 0, this.rowStride = void 0, this.kinds = void 0, this.Tx = void 0, this.stale = void 0, this.released = !1, this.matrixRow = new Float32Array(16), this.attributeRow = void 0 … [truncated]
```

#### 3800. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28353` → after: `L27957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27957) · [Before (L28353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28353)

```diff
-         this.oo = dd, this.kinds = kd, this.rowStride = Pd, this.matrices = new Float32Array(16 * dd), this.attributes = Pd > 0 ? new Float32Array(dd * Pd) : null, this.attributeRow = new Float32Array(Pd), this.sL = new pd(dd), this.stale = new Nd(dd), Wd++
+         this.MH = QQ, this.kinds = wQ, this.rowStride = DQ, this.matrices = new Float32Array(16 * QQ), this.attributes = DQ > 0 ? new Float32Array(QQ * DQ) : null, this.attributeRow = new Float32Array(DQ), this.Tx = new LQ(QQ), this.stale = new qQ(QQ), oQ++
```

#### 3801. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28356` → after: `L27960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27960) · [Before (L28356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28356)

```diff
-         this.sL.grow(this.oo, dd), this.stale.grow(dd);
+         this.Tx.grow(this.MH, QQ), this.stale.grow(QQ);
```

#### 3802. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28360` → after: `L27964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27964) · [Before (L28360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28360)

```diff
-         kd && (this.attributes = new Float32Array(dd * this.rowStride), this.attributes.set(kd)), this.oo = dd
+         wQ && (this.attributes = new Float32Array(QQ * this.rowStride), this.attributes.set(wQ)), this.MH = QQ
```

#### 3803. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28389` → after: `L27993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27993) · [Before (L28389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28389)

```diff
-   38016: (dd, Jd, kd) => {
+   37368: (QQ, FQ, wQ) => {
```

#### 3804. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28391-L28393` → after: `L27995-L27997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27995-L27997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27995-L27997) · [Before (L28391-L28393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28391-L28393)

```diff
-       d: () => ld,
-       h: () => od,
-       j: () => Kd
+       e: () => bQ,
+       i: () => HQ,
+       m: () => uQ
```

#### 3805. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28395-L28399` → after: `L27999-L28003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R27999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L27999-L28003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L27999-L28003) · [Before (L28395-L28399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28395-L28399)

```diff
-     var pd = kd(38019),
-       Nd = kd(37341),
-       Wd = kd(37632),
-       Pd = kd(37347),
-       Zd = kd(37360);
+     var LQ = wQ(37372),
+       qQ = wQ(36786),
+       oQ = wQ(37032),
+       DQ = wQ(36795),
+       kQ = wQ(36803);
```

#### 3806. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28415` → after: `L28019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28019) · [Before (L28415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28415)

```diff
-         ticksPerAnimState: Math.max(1, Jd / pd.d)
+         ticksPerAnimState: Math.max(1, FQ / LQ.b)
```

#### 3807. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28420` → after: `L28024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28024) · [Before (L28420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28420)

```diff
-       return `floor(${(0,Pd.Q)(dd,"animTick","uAnimTick")} / ${(0,Pd.Cb)(dd,"uTicksPerAnimState")})`
+       return `floor(${(0,DQ.db)(QQ,"animTick","uAnimTick")} / ${(0,DQ.Pb)(QQ,"uTicksPerAnimState")})`
```

#### 3808. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28426-L28427` → after: `L28030-L28031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28030-L28031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28030-L28031) · [Before (L28426-L28427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28426-L28427)

```diff
-       defines: () => (0, Nd.b)("ANIMATED"),
-       getUniforms: dd => (0, Wd.c)((0, Pd.V)(dd) ? Cd : gd, "vertex", dd),
+       defines: () => (0, qQ.e)("ANIMATED"),
+       getUniforms: QQ => (0, oQ.e)((0, DQ.ib)(QQ) ? mQ : vQ, "vertex", QQ),
```

#### 3809. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28429` → after: `L28033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28033) · [Before (L28429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28429)

```diff
-         dd.updateFloat("uAnimTick", (0, pd.h)(Jd)), dd.updateFloat("uAnimStatesNum", this.numAnimStates), dd.updateFloat("uTicksPerAnimState", this.ticksPerAnimState)
+         QQ.updateFloat("uAnimTick", (0, LQ.j)(FQ)), QQ.updateFloat("uAnimStatesNum", this.numAnimStates), QQ.updateFloat("uTicksPerAnimState", this.ticksPerAnimState)
```

#### 3810. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28433-L28434` → after: `L28037-L28038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28037-L28038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28037-L28038) · [Before (L28433-L28434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28433-L28434)

```diff
-         const kd = (0, Pd.Cb)(Jd, "uAnimStatesNum"),
-           pd = (0, Pd.Nb)(Jd, "vMainUV1");
+         const wQ = (0, DQ.Pb)(FQ, "uAnimStatesNum"),
+           LQ = (0, DQ.Yb)(FQ, "vMainUV1");
```

#### 3811. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28436` → after: `L28040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28040) · [Before (L28436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28436)

```diff
-           CUSTOM_VERTEX_MAIN_END: `\n                ${(0,Pd.z)(Jd,"float","frameTick",od(Jd))}\n                ${(0,Pd.z)(Jd,"float","animTexIndex",(0,Pd.ab)(Jd,"frameTick",kd))}\n                ${pd}.y = (${pd}.y + animTexIndex) / ${kd};\n            `
+           CUSTOM_VERTEX_MAIN_END: `\n                ${(0,DQ.I)(FQ,"float","frameTick",HQ(FQ))}\n                ${(0,DQ.I)(FQ,"float","animTexIndex",(0,DQ.pb)(FQ,"frameTick",wQ))}\n                ${LQ}.y = (${LQ}.y + animTexIndex) / ${wQ};\n            `
```

#### 3812. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28438` → after: `L28042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28042) · [Before (L28438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28438)

```diff
-           [(0, Pd.A)(Jd)]: `baseColor = ${(0,Pd.ib)(Jd,"diffuseSampler",(0,Pd.M)(Jd,"vMainUV1"))};`
+           [(0, DQ.L)(FQ)]: `baseColor = ${(0,DQ.yb)(FQ,"diffuseSampler",(0,DQ.bb)(FQ,"vMainUV1"))};`
```

#### 3813. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28442` → after: `L28046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28046) · [Before (L28442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28442)

```diff
-     (0, Zd.n)(ld)
+     (0, kQ.p)(bQ)
```

#### 3814. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28444` → after: `L28048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28048) · [Before (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28444)

```diff
-   38202: (dd, Jd, kd) => {
+   37557: (QQ, FQ, wQ) => {
```

#### 3815. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28448-L28452` → after: `L28052-L28056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28052-L28056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28052-L28056) · [Before (L28448-L28452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28448-L28452)

```diff
-     var pd = kd(37351),
-       Nd = kd(37341),
-       Wd = kd(37632),
-       Pd = kd(37347),
-       Zd = kd(37360);
+     var LQ = wQ(36797),
+       qQ = wQ(36786),
+       oQ = wQ(37032),
+       DQ = wQ(36795),
+       kQ = wQ(36803);
```

#### 3816. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28461-L28462` → after: `L28065-L28066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28065-L28066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28065-L28066) · [Before (L28461-L28462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28461-L28462)

```diff
-         defines: () => (0, Nd.b)("ARMOUR"),
-         getUniforms: dd => (0, Wd.c)(gd, "vertex", dd),
+         defines: () => (0, qQ.e)("ARMOUR"),
+         getUniforms: QQ => (0, oQ.e)(vQ, "vertex", QQ),
```

#### 3817. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28472` → after: `L28076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28076) · [Before (L28472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28472)

```diff
-             const dd = (0, Pd.Nb)(Jd, "vMainUV1");
+             const QQ = (0, DQ.Yb)(FQ, "vMainUV1");
```

#### 3818. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28474-L28475` → after: `L28078-L28079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28078-L28079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28078-L28079) · [Before (L28474-L28475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28474-L28475)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Pd.h)(Jd,"aAtlasIdx1","float","highp")}\n\t\t\t\t\t${(0,Pd.h)(Jd,"aArmourTint","vec4","lowp")}\n\n\t\t\t\t\t${(0,pd.ib)(Jd)}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${dd}.x = (${dd}.x + ${(0,Pd.Jb)(Jd,"aAtlasIdx1")}) / ${(0,Pd.Cb)(Jd,"uArmourAtlasTexNum")};\n\t\t\t\t\t${(0,Pd.ob)(Jd,(0,Pd.Nb)(Jd,"vTintAndOpacity"),`${(0,Pd.Jb)(Jd,"aArmourTint")}.xyz`)}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,DQ.h)(FQ,"aAtlasIdx1","float","highp")}\n\t\t\t\t\t${(0,DQ.h)(FQ,"aArmourTint","vec4","lowp")}\n\n\t\t\t\t\t${(0,LQ.nb)(FQ)}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${QQ}.x = (${QQ}.x + ${(0,DQ.Vb)(FQ,"aAtlasIdx1")}) / ${(0,DQ.Pb)(FQ,"uArmourAtlasTexNum")};\n\t\t\t\t\t${(0,DQ.Cb)(FQ,(0,DQ.Yb)(FQ,"vTintAndOpacity"),`${(0,DQ.Vb)(FQ,"aArmourTint")}.xyz`)}\n\t\t\t\t`
```

#### 3819. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28479-L28480` → after: `L28083-L28084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28083-L28084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28083-L28084) · [Before (L28479-L28480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28479-L28480)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,pd.ib)(Jd)}\n\t\t\t\t`,
-             [(0, Pd.A)(Jd)]: `\n\t\t\t\t\t${(0,Pd.z)(Jd,"vec4","col1",(0,Pd.ib)(Jd,"diffuseSampler",(0,Pd.M)(Jd,"vMainUV1")))}\n\t\t\t\t\tbaseColor = ${(0,Pd.n)(Jd,"vec4",`col1.rgb * ${(0,Pd.M)(Jd,"vTintAndOpacity")}.xyz`,"col1.a")};\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,LQ.nb)(FQ)}\n\t\t\t\t`,
+             [(0, DQ.L)(FQ)]: `\n\t\t\t\t\t${(0,DQ.I)(FQ,"vec4","col1",(0,DQ.yb)(FQ,"diffuseSampler",(0,DQ.bb)(FQ,"vMainUV1")))}\n\t\t\t\t\tbaseColor = ${(0,DQ.q)(FQ,"vec4",`col1.rgb * ${(0,DQ.bb)(FQ,"vTintAndOpacity")}.xyz`,"col1.a")};\n\t\t\t\t`
```

#### 3820. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28483` → after: `L28087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28087) · [Before (L28483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28483)

```diff
-         EQ() {
+         JY() {
```

#### 3821. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28485-L28487` → after: `L28089-L28091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28089-L28091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28089-L28091) · [Before (L28485-L28487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28485-L28487)

```diff
-             Jd = (0, Pd.Cb)(dd, "uArmourAtlasTexNum"),
-             kd = (0, Pd.M)(dd, "vMainUV1"),
-             pd = `${kd}.x * ${Jd}`;
+             FQ = (0, DQ.Pb)(QQ, "uArmourAtlasTexNum"),
+             wQ = (0, DQ.bb)(QQ, "vMainUV1"),
+             LQ = `${wQ}.x * ${FQ}`;
```

#### 3822. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28490-L28492` → after: `L28094-L28096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28094-L28096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28094-L28096) · [Before (L28490-L28492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28490-L28492)

```diff
-               cells: `vec2f(${Jd}, 1.0)`,
-               layers: [`floor(${pd})`],
-               uv: `vec2f(fract(${pd}), ${kd}.y)`,
+               cells: `vec2f(${FQ}, 1.0)`,
+               layers: [`floor(${LQ})`],
+               uv: `vec2f(fract(${LQ}), ${wQ}.y)`,
```

#### 3823. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28495` → after: `L28099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28099) · [Before (L28495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28495)

```diff
-             enchantTier: `${(0,Pd.Jb)(dd,"aArmourTint")}.w`
+             enchantTier: `${(0,DQ.Vb)(QQ,"aArmourTint")}.w`
```

#### 3824. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28499` → after: `L28103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28103) · [Before (L28499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28499)

```diff
-     (0, Zd.n)(Cd)
+     (0, kQ.p)(mQ)
```

#### 3825. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28501` → after: `L28105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28105) · [Before (L28501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28501)

```diff
-   38027: (dd, Jd, kd) => {
+   37381: (QQ, FQ, wQ) => {
```

#### 3826. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28504-L28505` → after: `L28108-L28109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28108-L28109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28108-L28109) · [Before (L28504-L28505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28504-L28505)

```diff
-       g: () => Id,
-       i: () => Gd
+       i: () => MQ,
+       l: () => GQ
```

#### 3827. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28507-L28512` → after: `L28111-L28116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28111-L28116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28111-L28116) · [Before (L28507-L28512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28507-L28512)

```diff
-     var pd = kd(37351),
-       Nd = kd(37341),
-       Wd = kd(37632),
-       Pd = kd(37347),
-       Zd = kd(38019),
-       gd = kd(37360);
+     var LQ = wQ(36797),
+       qQ = wQ(36786),
+       oQ = wQ(37032),
+       DQ = wQ(36795),
+       kQ = wQ(37372),
+       vQ = wQ(36803);
```

#### 3828. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28517` → after: `L28121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28121) · [Before (L28517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28517)

```diff
-       const Jd = (0, Pd.n)(dd, "vec3", (0, Pd.Jb)(dd, "texAtlasIndices")),
+       const FQ = (0, DQ.q)(QQ, "vec3", (0, DQ.Vb)(QQ, "texAtlasIndices")),
```

#### 3829. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28520-L28521` → after: `L28124-L28125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28124-L28125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28124-L28125) · [Before (L28520-L28521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28520-L28521)

```diff
-           const Wd = (0, Pd.n)(dd, "vec3", ...pd);
-           return (0, Pd.n)(dd, "vec3", (0, Pd.F)(dd, `equal(${Jd}, ${Wd})`, `${Jd} == ${Wd}`))
+           const oQ = (0, DQ.q)(QQ, "vec3", ...LQ);
+           return (0, DQ.q)(QQ, "vec3", (0, DQ.T)(QQ, `equal(${FQ}, ${oQ})`, `${FQ} == ${oQ}`))
```

#### 3830. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28523-L28524` → after: `L28127-L28128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28127-L28128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28127-L28128) · [Before (L28523-L28524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28523-L28524)

```diff
-         pd = [`dot(${(0,Pd.Jb)(dd,"aAtlasIdxFaces012")}, ${kd("0.0","1.0","2.0")})`, `dot(${(0,Pd.Jb)(dd,"aAtlasIdxFaces345")}, ${kd("3.0","4.0","5.0")})`].join(" + ");
-       return `\n                    #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                        ${(0,Pd.z)(dd,"float","atlasIdxIn",pd,"highp")}\n                    #else\n                        ${(0,Pd.z)(dd,"float","atlasIdxIn",(0,Pd.Jb)(dd,"texAtlasIndices"),"highp")}\n          … [truncated]
+         LQ = [`dot(${(0,DQ.Vb)(QQ,"aAtlasIdxFaces012")}, ${wQ("0.0","1.0","2.0")})`, `dot(${(0,DQ.Vb)(QQ,"aAtlasIdxFaces345")}, ${wQ("3.0","4.0","5.0")})`].join(" + ");
+       return `\n                    #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                        ${(0,DQ.I)(QQ,"float","atlasIdxIn",LQ,"highp")}\n                    #else\n                        ${(0,DQ.I)(QQ,"float","atlasIdxIn",(0,DQ.Vb)(QQ,"texAtlasIndices"),"highp")}\n          … [truncated]
```

#### 3831. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28530-L28531` → after: `L28134-L28135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28134-L28135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28134-L28135) · [Before (L28530-L28531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28530-L28531)

```diff
-         layers: null !== (Jd = dd.imagesPerAtlas[0]) && void 0 !== Jd ? Jd : Kd,
-         width: null !== (kd = dd.atlasTexelWidth) && void 0 !== kd ? kd : Cd
+         layers: null !== (FQ = QQ.imagesPerAtlas[0]) && void 0 !== FQ ? FQ : uQ,
+         width: null !== (wQ = QQ.atlasTexelWidth) && void 0 !== wQ ? wQ : mQ
```

#### 3832. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28540` → after: `L28144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28144) · [Before (L28540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28540)

```diff
-       return dd.useWebGL2 && Jd > 1 && (0, Pd.V)(kd)
+       return QQ.useWebGL2 && FQ > 1 && (0, DQ.ib)(wQ)
```

#### 3833. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28546-L28548` → after: `L28150-L28152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28150-L28152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28150-L28152) · [Before (L28546-L28548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28546-L28548)

```diff
-       const Nd = (0, pd.mb)(null !== (kd = dd.atlasTexelWidth) && void 0 !== kd ? kd : Cd),
-         Wd = (0, Pd.M)(Jd, "vDiffuseUV");
-       return `\n                        ${(0,Pd.z)(Jd,"vec2","atlasTexelUV",`${Wd} * ${Nd}`)}\n                        ${(0,Pd.z)(Jd,"vec2","atlasDdx",(0,Pd.p)(Jd,"atlasTexelUV"))}\n                        ${(0,Pd.z)(Jd,"vec2","atlasDdy",(0,Pd.t)(Jd,"atlasTexelUV"))}\n            … [truncated]
+       const qQ = (0, LQ.rb)(null !== (wQ = QQ.atlasTexelWidth) && void 0 !== wQ ? wQ : mQ),
+         oQ = (0, DQ.bb)(FQ, "vDiffuseUV");
+       return `\n                        ${(0,DQ.I)(FQ,"vec2","atlasTexelUV",`${oQ} * ${qQ}`)}\n                        ${(0,DQ.I)(FQ,"vec2","atlasDdx",(0,DQ.t)(FQ,"atlasTexelUV"))}\n                        ${(0,DQ.I)(FQ,"vec2","atlasDdy",(0,DQ.x)(FQ,"atlasTexelUV"))}\n            … [truncated]
```

#### 3834. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28552-L28553` → after: `L28156-L28157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28156-L28157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28156-L28157) · [Before (L28552-L28553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28552-L28553)

```diff
-       const Zd = `textureAtlas${kd}`,
-         gd = (0, Pd.M)(Jd, "vDiffuseUV"),
+       const kQ = `textureAtlas${wQ}`,
+         vQ = (0, DQ.bb)(FQ, "vDiffuseUV"),
```

#### 3835. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28555-L28558` → after: `L28159-L28162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28159-L28162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28159-L28162) · [Before (L28555-L28558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28555-L28558)

```diff
-         Kd = kd > 0 ? `${Wd} - ${pd[0].toFixed(1)} * ${kd.toFixed(1)}` : Wd;
-       if (dd.useWebGL2) return (0, Pd.hb)(Jd, Zd, gd, Kd, Cd);
-       const od = dd.greedyMeshed ? `vec2(${gd}.x, (fract(${gd}.y) + ${Kd}) / ${pd[kd].toFixed(1)})` : Nd > 1 ? `${gd} - vec2(0.0, ${kd.toFixed(1)})` : gd;
-       return (0, Pd.ib)(Jd, Zd, od)
+         uQ = wQ > 0 ? `${oQ} - ${LQ[0].toFixed(1)} * ${wQ.toFixed(1)}` : oQ;
+       if (QQ.useWebGL2) return (0, DQ.ub)(FQ, kQ, vQ, uQ, mQ);
+       const HQ = QQ.greedyMeshed ? `vec2(${vQ}.x, (fract(${vQ}.y) + ${uQ}) / ${LQ[wQ].toFixed(1)})` : qQ > 1 ? `${vQ} - vec2(0.0, ${wQ.toFixed(1)})` : vQ;
+       return (0, DQ.yb)(FQ, kQ, HQ)
```

#### 3836. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28563` → after: `L28167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28167) · [Before (L28563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28563)

```diff
-       return 1 === Nd ? `baseColor = ${ed(dd,Jd,0,pd,1,kd)};` : pd.map(((Wd, Pd) => `\n                        if (${kd} < ${pd[0]*(Pd+1)-.5}) {\n                            baseColor = ${ed(dd,Jd,Pd,pd,Nd,kd)};\n                        }${Pd+1<Nd?" else ":""}`)).join("")
+       return 1 === qQ ? `baseColor = ${tQ(QQ,FQ,0,LQ,1,wQ)};` : LQ.map(((oQ, DQ) => `\n                        if (${wQ} < ${LQ[0]*(DQ+1)-.5}) {\n                            baseColor = ${tQ(QQ,FQ,DQ,LQ,qQ,wQ)};\n                        }${DQ+1<qQ?" else ":""}`)).join("")
```

#### 3837. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28567` → after: `L28171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28171) · [Before (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28567)

```diff
-       return `\n                    ${(0,Pd.z)(dd,"float","animParamIndex","3.0 * min(numAnimTextures, floor(atlasIdxIn))")}\n                    ${(0,Pd.z)(dd,"float","animStateMask",Jd((0,Pd.yb)(dd,"animParamIndex")))}\n                    ${(0,Pd.z)(dd,"float","animTexIndexSta … [truncated]
+       return `\n                    ${(0,DQ.I)(QQ,"float","animParamIndex","3.0 * min(numAnimTextures, floor(atlasIdxIn))")}\n                    ${(0,DQ.I)(QQ,"float","animStateMask",FQ((0,DQ.Kb)(QQ,"animParamIndex")))}\n                    ${(0,DQ.I)(QQ,"float","animTexIndexSta … [truncated]
```

#### 3838. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28574` → after: `L28178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28178) · [Before (L28574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28574)

```diff
-         ...(0, Nd.b)("ATLAS_TEXTURE"),
+         ...(0, qQ.e)("ATLAS_TEXTURE"),
```

#### 3839. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28582` → after: `L28186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28186) · [Before (L28582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28582)

```diff
-         for (let Jd = 0; Jd < this.textureAtlases.length; Jd++) dd.push(`textureAtlas${Jd}`)
+         for (let FQ = 0; FQ < this.textureAtlases.length; FQ++) QQ.push(`textureAtlas${FQ}`)
```

#### 3840. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28588` → after: `L28192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28192) · [Before (L28588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28588)

```diff
-         return this.animDataPerTex ? (0, Wd.c)([{
+         return this.animDataPerTex ? (0, oQ.e)([{
```

#### 3841. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28604-L28605` → after: `L28208-L28209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28208-L28209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28208-L28209) · [Before (L28604-L28605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28604-L28605)

```diff
-           if (this.textureAtlases[pd]) dd.setTexture(`textureAtlas${pd}`, this.textureAtlases[pd]);
-           else null === (kd = dd.expectTexture) || void 0 === kd || kd.call(dd, `textureAtlas${pd}`)
+           if (this.textureAtlases[LQ]) QQ.setTexture(`textureAtlas${LQ}`, this.textureAtlases[LQ]);
+           else null === (wQ = QQ.expectTexture) || void 0 === wQ || wQ.call(QQ, `textureAtlas${LQ}`)
```

#### 3842. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28607` → after: `L28211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28211) · [Before (L28607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28607)

```diff
-         this.animDataPerTex && (this.animData.x = (0, Zd.h)(Jd), dd.updateVector3("uAnimData", this.animData))
+         this.animDataPerTex && (this.animData.x = (0, kQ.j)(FQ), QQ.updateVector3("uAnimData", this.animData))
```

#### 3843. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28616` → after: `L28220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28220) · [Before (L28616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28616)

```diff
-             return null !== (kd = this.imagesPerAtlas[Jd]) && void 0 !== kd ? kd : Kd
+             return null !== (wQ = this.imagesPerAtlas[FQ]) && void 0 !== wQ ? wQ : uQ
```

#### 3844. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28618-L28623` → after: `L28222-L28227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28222-L28227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28222-L28227) · [Before (L28618-L28623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28618-L28623)

```diff
-           Nd = kd.map(((dd, kd) => (0, Pd.vb)(Jd, `textureAtlas${kd}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
-           Wd = (0, Pd.Cb)(Jd, "uAnimData"),
-           Zd = (0, Pd.Cb)(Jd, "uAnimDataPerTex"),
-           gd = (0, Pd.j)(Jd),
-           Cd = (0, Pd.Fb)(Jd, "texAtlasIndex", "float", "mediump"),
-           ld = (0, Pd.M)(Jd, "texAtlasIndex");
+           qQ = wQ.map(((QQ, wQ) => (0, DQ.Jb)(FQ, `textureAtlas${wQ}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
+           oQ = (0, DQ.Pb)(FQ, "uAnimData"),
+           kQ = (0, DQ.Pb)(FQ, "uAnimDataPerTex"),
+           vQ = (0, DQ.k)(FQ),
+           mQ = (0, DQ.Sb)(FQ, "texAtlasIndex", "float", "mediump"),
+           bQ = (0, DQ.bb)(FQ, "texAtlasIndex");
```

#### 3845. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28626-L28627` → after: `L28230-L28231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28230-L28231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28230-L28231) · [Before (L28626-L28627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28626-L28627)

```diff
-           CUSTOM_VERTEX_MAIN_BEGIN: od(Jd) + (this.animDataPerTex ? `\n                    ${(0,Pd.z)(Jd,"float","animTick",(0,Pd.Q)(Jd,"animTick",`${Wd}.x`))}\n                    ${(0,Pd.z)(Jd,"float","animTickStride",`${Wd}.y`)}\n                    ${(0,Pd.z)(Jd,"float","numA … [truncated]
-           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,Pd.V)(Jd)?"":Nd}\n                ${(0,Pd.h)(Jd,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,Pd.h)(Jd,"aAtlasIdxFaces012","vec3","highp")}\n            … [truncated]
+           CUSTOM_VERTEX_MAIN_BEGIN: HQ(FQ) + (this.animDataPerTex ? `\n                    ${(0,DQ.I)(FQ,"float","animTick",(0,DQ.db)(FQ,"animTick",`${oQ}.x`))}\n                    ${(0,DQ.I)(FQ,"float","animTickStride",`${oQ}.y`)}\n                    ${(0,DQ.I)(FQ,"float","num … [truncated]
+           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,DQ.ib)(FQ)?"":qQ}\n                ${(0,DQ.h)(FQ,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,DQ.h)(FQ,"aAtlasIdxFaces012","vec3","highp")}\n           … [truncated]
```

#### 3846. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28630-L28631` → after: `L28234-L28235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28234-L28235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28234-L28235) · [Before (L28630-L28631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28630-L28631)

```diff
-           [(0, Pd.A)(Jd)]: `${Od(this,Jd)}${Rd(this,Jd,ld,pd)}`,
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${Nd}\n                ${Cd}\n            `
+           [(0, DQ.L)(FQ)]: `${AQ(this,FQ)}${eQ(this,FQ,bQ,LQ)}`,
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${qQ}\n                ${mQ}\n            `
```

#### 3847. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28635` → after: `L28239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28239) · [Before (L28635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28635)

```diff
-     (0, gd.n)(Gd)
+     (0, vQ.p)(GQ)
```

#### 3848. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28637` → after: `L28241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28241) · [Before (L28637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28637)

```diff
-   38054: (dd, Jd, kd) => {
+   37401: (QQ, FQ, wQ) => {
```

#### 3849. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28639-L28642` → after: `L28243-L28246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28243-L28246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28243-L28246) · [Before (L28639-L28642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28639-L28642)

```diff
-       d: () => ed,
-       f: () => Rd,
-       j: () => Od,
-       n: () => od
+       c: () => tQ,
+       e: () => eQ,
+       g: () => AQ,
+       h: () => HQ
```

#### 3850. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28644-L28649` → after: `L28248-L28253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28248-L28253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28248-L28253) · [Before (L28644-L28649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28644-L28649)

```diff
-     var pd = kd(37351),
-       Nd = kd(37341),
-       Wd = kd(37632),
-       Pd = kd(37347),
-       Zd = kd(37360),
-       gd = kd(37448);
+     var LQ = wQ(36797),
+       qQ = wQ(36786),
+       oQ = wQ(37032),
+       DQ = wQ(36795),
+       kQ = wQ(36803),
+       vQ = wQ(36887);
```

#### 3851. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28665` → after: `L28269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28269) · [Before (L28665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28665)

```diff
-       return `${dd}.r > 0.0 || ${dd}.g > 0.0 || ${dd}.b > 0.0`
+       return `${QQ}.r > 0.0 || ${QQ}.g > 0.0 || ${QQ}.b > 0.0`
```

#### 3852. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28669-L28671` → after: `L28273-L28275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28273-L28275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28273-L28275) · [Before (L28669-L28671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28669-L28671)

```diff
-       const Nd = (Jd, kd) => (0, Pd.z)(dd, "float", Jd, kd),
-         Wd = (Jd, kd) => (0, Pd.z)(dd, "vec3", Jd, kd);
-       return `\n\t\t${Wd("localPos",`rotationY(${Jd}.w) * ${kd}.xyz`)}\n\t\t${Nd("tickVal",`${kd}.w / 1000.0`)}\n\t\t${Nd("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${Nd("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${Nd("totalMix","mix1 * 0.7 … [truncated]
+       const qQ = (FQ, wQ) => (0, DQ.I)(QQ, "float", FQ, wQ),
+         oQ = (FQ, wQ) => (0, DQ.I)(QQ, "vec3", FQ, wQ);
+       return `\n\t\t${oQ("localPos",`rotationY(${FQ}.w) * ${wQ}.xyz`)}\n\t\t${qQ("tickVal",`${wQ}.w / 1000.0`)}\n\t\t${qQ("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${qQ("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${qQ("totalMix","mix1 * 0.7 … [truncated]
```

#### 3853. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28675-L28677` → after: `L28279-L28281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28279-L28281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28279-L28281) · [Before (L28675-L28677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28675-L28677)

```diff
-       const Jd = (0, Pd.M)(dd, "vEnchantRgbAndRotY"),
-         kd = (0, Pd.M)(dd, "vPositionAndAnimTick");
-       return `\n\t\t\n\t\tif (${Qd(Jd)}) {\n\t\t\t${Ld(dd,Jd,kd,"baseColor.xyz")}\n\t\t\t${(0,Pd.ob)(dd,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
+       const FQ = (0, DQ.bb)(QQ, "vEnchantRgbAndRotY"),
+         wQ = (0, DQ.bb)(QQ, "vPositionAndAnimTick");
+       return `\n\t\t\n\t\tif (${YQ(FQ)}) {\n\t\t\t${xQ(QQ,FQ,wQ,"baseColor.xyz")}\n\t\t\t${(0,DQ.Cb)(QQ,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
```

#### 3854. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28681` → after: `L28285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28285) · [Before (L28681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28681)

```diff
-       return `fn ${dd}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${Qd("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${Ld(Pd.d.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
+       return `fn ${QQ}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${YQ("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${xQ(DQ.d.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
```

#### 3855. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28688` → after: `L28292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28292) · [Before (L28688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28688)

```diff
-         ...(0, Nd.b)("ENCHANTMENT"),
+         ...(0, qQ.e)("ENCHANTMENT"),
```

#### 3856. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28699` → after: `L28303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28303) · [Before (L28699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28699)

```diff
-         if (!Kd.rL()) {
+         if (!uQ.qA()) {
```

#### 3857. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28706` → after: `L28310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28310) · [Before (L28706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28706)

```diff
-       getUniforms: dd => (0, Pd.V)(dd) ? {} : (0, Wd.c)(Cd, "vertex", dd),
+       getUniforms: QQ => (0, DQ.ib)(QQ) ? {} : (0, oQ.e)(mQ, "vertex", QQ),
```

#### 3858. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28709-L28713` → after: `L28313-L28317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28313-L28317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28313-L28317) · [Before (L28709-L28713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28709-L28713)

```diff
-           const dd = (0, Pd.Q)(Jd, "timeMs", "uAnimTick"),
-             kd = (0, Pd.Jb)(Jd, "aEnchantmentSpeed"),
-             pd = (0, Pd.Jb)(Jd, "aEnchantmentColour"),
-             Nd = (0, Pd.Nb)(Jd, "vEnchantRgbAndRotY"),
-             Wd = (0, Pd.Nb)(Jd, "vPositionAndAnimTick");
+           const QQ = (0, DQ.db)(FQ, "timeMs", "uAnimTick"),
+             wQ = (0, DQ.Vb)(FQ, "aEnchantmentSpeed"),
+             LQ = (0, DQ.Vb)(FQ, "aEnchantmentColour"),
+             qQ = (0, DQ.Yb)(FQ, "vEnchantRgbAndRotY"),
+             oQ = (0, DQ.Yb)(FQ, "vPositionAndAnimTick");
```

#### 3859. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28715-L28716` → after: `L28319-L28320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28319-L28320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28319-L28320) · [Before (L28715-L28716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28715-L28716)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Pd.h)(Jd,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,Pd.h)(Jd,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,Pd.h)(Jd,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,Pd. … [truncated]
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${Nd} = ${(0,Pd.n)(Jd,"vec4",pd,`${(0,Pd.Jb)(Jd,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,Pd.ob)(Jd,Wd,`worldPos.xyz - ${(0,Pd.Jb)(Jd,"aPosition")} + ${(0,Pd.Jb)(Jd,"aOffset")}`) … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,DQ.h)(FQ,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,DQ.h)(FQ,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,DQ.h)(FQ,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,DQ. … [truncated]
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${qQ} = ${(0,DQ.q)(FQ,"vec4",LQ,`${(0,DQ.Vb)(FQ,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,DQ.Cb)(FQ,oQ,`worldPos.xyz - ${(0,DQ.Vb)(FQ,"aPosition")} + ${(0,DQ.Vb)(FQ,"aOffset")}`) … [truncated]
```

#### 3860. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28720-L28722` → after: `L28324-L28326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28324-L28326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28324-L28326) · [Before (L28720-L28722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28720-L28722)

```diff
-           const dd = (dd, kd) => (0, Pd.z)(Jd, "float", dd, kd),
-             kd = (dd, kd) => (0, Pd.z)(Jd, "vec3", dd, kd),
-             Nd = (dd, kd) => (0, Pd.z)(Jd, "vec4", dd, kd);
+           const QQ = (QQ, wQ) => (0, DQ.I)(FQ, "float", QQ, wQ),
+             wQ = (QQ, wQ) => (0, DQ.I)(FQ, "vec3", QQ, wQ),
+             qQ = (QQ, wQ) => (0, DQ.I)(FQ, "vec4", QQ, wQ);
```

#### 3861. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28724` → after: `L28328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28328) · [Before (L28724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28724)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Pd.Fb)(Jd,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,Pd.Fb)(Jd,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,Pd.u)(Jd,"float","GOLDEN_RATIO",(0,pd.mb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,Pd.u)(Jd," … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,DQ.Sb)(FQ,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,DQ.Sb)(FQ,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,DQ.B)(FQ,"float","GOLDEN_RATIO",(0,LQ.rb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,DQ.B)(FQ," … [truncated]
```

#### 3862. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28729` → after: `L28333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28333) · [Before (L28729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28729)

```diff
-               (0, Pd.sb)(Jd, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
+               (0, DQ.Gb)(FQ, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
```

#### 3863. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28731` → after: `L28335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28335) · [Before (L28731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28731)

```diff
-               kd("Pi", `floor(P + dot(P, ${(0,Pd.n)(Jd,"vec3","SKEWFACTOR")}))`)
+               wQ("Pi", `floor(P + dot(P, ${(0,DQ.q)(FQ,"vec3","SKEWFACTOR")}))`)
```

#### 3864. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28734` → after: `L28338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28338) · [Before (L28734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28734)

```diff
-               kd("x0", `P - Pi + dot(Pi, ${(0,Pd.n)(Jd,"vec3","UNSKEWFACTOR")})`)
+               wQ("x0", `P - Pi + dot(Pi, ${(0,DQ.q)(FQ,"vec3","UNSKEWFACTOR")})`)
```

#### 3865. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28758` → after: `L28362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28362) · [Before (L28758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28758)

```diff
-               Nd("v1234_x", (0, Pd.n)(Jd, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
+               qQ("v1234_x", (0, DQ.q)(FQ, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
```

#### 3866. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28761` → after: `L28365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28365) · [Before (L28761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28761)

```diff
-               Nd("v1234_y", (0, Pd.n)(Jd, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
+               qQ("v1234_y", (0, DQ.q)(FQ, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
```

#### 3867. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28764` → after: `L28368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28368) · [Before (L28764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28764)

```diff
-               Nd("v1234_z", (0, Pd.n)(Jd, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
+               qQ("v1234_z", (0, DQ.q)(FQ, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
```

#### 3868. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28767` → after: `L28371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28371) · [Before (L28767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28767)

```diff
-               kd("Pi_inc1", `step(Pi, ${(0,Pd.n)(Jd,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
+               wQ("Pi_inc1", `step(Pi, ${(0,DQ.q)(FQ,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
```

#### 3869. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28770` → after: `L28374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28374) · [Before (L28770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28770)

```diff
-               Nd("Pt", `${(0,Pd.n)(Jd,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,Pd.n)(Jd,"vec2","50.0","161.0")}.xyxy`)
+               qQ("Pt", `${(0,DQ.q)(FQ,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,DQ.q)(FQ,"vec2","50.0","161.0")}.xyxy`)
```

#### 3870. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28773` → after: `L28377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28377) · [Before (L28773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28773)

```diff
-               Nd("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,Pd.n)(Jd,"vec4","Pi_1.xy","Pi_2.xy")})`)
+               qQ("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,DQ.q)(FQ,"vec4","Pi_1.xy","Pi_2.xy")})`)
```

#### 3871. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28776` → after: `L28380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28380) · [Before (L28776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28776)

```diff
-               (0, Pd.n)(Jd, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
+               (0, DQ.q)(FQ, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
```

#### 3872. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28778` → after: `L28382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28382) · [Before (L28778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28778)

```diff
-               (0, Pd.n)(Jd, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
+               (0, DQ.q)(FQ, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
```

#### 3873. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28780` → after: `L28384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28384) · [Before (L28780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28780)

```diff
-               (0, Pd.u)(Jd, "vec3", "SOMELARGEFLOATS", (0, Pd.n)(Jd, "vec3", "635.298681", "682.357502", "668.926525"))
+               (0, DQ.B)(FQ, "vec3", "SOMELARGEFLOATS", (0, DQ.q)(FQ, "vec3", "635.298681", "682.357502", "668.926525"))
```

#### 3874. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28783` → after: `L28387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28387) · [Before (L28783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28783)

```diff
-               (0, Pd.u)(Jd, "vec3", "ZINC", (0, Pd.n)(Jd, "vec3", "48.500388", "65.294118", "63.934599"))
+               (0, DQ.B)(FQ, "vec3", "ZINC", (0, DQ.q)(FQ, "vec3", "48.500388", "65.294118", "63.934599"))
```

#### 3875. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28792` → after: `L28396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28396) · [Before (L28792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28792)

```diff
-               (0, Pd.sb)(Jd, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
+               (0, DQ.Gb)(FQ, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
```

#### 3876. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28794` → after: `L28398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28398) · [Before (L28794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28794)

```diff
-               (0, Pd.sb)(Jd, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
+               (0, DQ.Gb)(FQ, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
```

#### 3877. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28796` → after: `L28400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28400) · [Before (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28796)

```diff
-               Nd("hash_0", `fract( Pt * ${(0,Pd.n)(Jd,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
+               qQ("hash_0", `fract( Pt * ${(0,DQ.q)(FQ,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
```

#### 3878. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28799` → after: `L28403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28403) · [Before (L28799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28799)

```diff
-               Nd("hash_1", `fract( Pt * ${(0,Pd.n)(Jd,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
+               qQ("hash_1", `fract( Pt * ${(0,DQ.q)(FQ,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
```

#### 3879. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28802` → after: `L28406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28406) · [Before (L28802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28802)

```diff
-               Nd("hash_2", `fract( Pt * ${(0,Pd.n)(Jd,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
+               qQ("hash_2", `fract( Pt * ${(0,DQ.q)(FQ,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
```

#### 3880. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28805` → after: `L28409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28409) · [Before (L28805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28805)

```diff
-               Nd("grad_results", `${(0,Pd.U)(Jd,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
+               qQ("grad_results", `${(0,DQ.eb)(FQ,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
```

#### 3881. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28808` → after: `L28412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28412) · [Before (L28808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28808)

```diff
-               (0, Pd.u)(Jd, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
+               (0, DQ.B)(FQ, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
```

#### 3882. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28814-L28815` → after: `L28418-L28419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28418-L28419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28418-L28419) · [Before (L28814-L28815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28814-L28815)

```diff
-               (0, Pd.n)(Jd, "vec4", "0.0")
-             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,Pd.w)(Jd,"mat3","rotationY",[{name:"y",type:" … [truncated]
+               (0, DQ.q)(FQ, "vec4", "0.0")
+             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,DQ.E)(FQ,"mat3","rotationY",[{name:"y",type:" … [truncated]
```

#### 3883. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28817-L28818` → after: `L28421-L28422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28421-L28422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28421-L28422) · [Before (L28817-L28818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28817-L28818)

```diff
-               (0, Pd.n)(Jd, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
-             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,Pd.w)(Jd,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
+               (0, DQ.q)(FQ, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
+             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,DQ.E)(FQ,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
```

#### 3884. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28822` → after: `L28426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28426) · [Before (L28822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28822)

```diff
-             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,Pd.w)(Jd,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
+             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,DQ.E)(FQ,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
```

#### 3885. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28830` → after: `L28434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28434) · [Before (L28830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28830)

```diff
-               dd("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,Pd.n)(Jd,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,Pd.n)(Jd,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
+               QQ("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,DQ.q)(FQ,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,DQ.q)(FQ,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
```

#### 3886. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28833` → after: `L28437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28437) · [Before (L28833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28833)

```diff
-               dd("sawtooth", (0, Pd.ab)(Jd, "intersection - loopedTickVal", "1.0"))
+               QQ("sawtooth", (0, DQ.pb)(FQ, "intersection - loopedTickVal", "1.0"))
```

#### 3887. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28836` → after: `L28440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28440) · [Before (L28836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28836)

```diff
-               kd("noisePos", `localPos * 4.0 - ${(0,Pd.n)(Jd,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
+               wQ("noisePos", `localPos * 4.0 - ${(0,DQ.q)(FQ,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
```

#### 3888. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28847` → after: `L28451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28451) · [Before (L28847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28847)

```diff
-             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,gd.e)(Jd,"enchantment")}\n\t\t\t\t`,
+             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,vQ.b)(FQ,"enchantment")}\n\t\t\t\t`,
```

#### 3889. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28854` → after: `L28458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28458) · [Before (L28854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28854)

```diff
-     (0, Zd.n)(Rd)
+     (0, kQ.p)(eQ)
```

#### 3890. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28856` → after: `L28460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28460) · [Before (L28856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28856)

```diff
-   37610: (dd, Jd, kd) => {
+   37016: (QQ, FQ, wQ) => {
```

#### 3891. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28858-L28859` → after: `L28462-L28463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28462-L28463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28462-L28463) · [Before (L28858-L28859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28858-L28859)

```diff
-       e: () => od,
-       f: () => Od,
+       d: () => HQ,
+       h: () => AQ,
```

#### 3892. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28861` → after: `L28465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28465) · [Before (L28861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28861)

```diff
-       k: () => ld
+       n: () => bQ
```

#### 3893. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28863-L28870` → after: `L28467-L28474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28467-L28474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28467-L28474) · [Before (L28863-L28870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28863-L28870)

```diff
-     var pd = kd(37351),
-       Nd = kd(37613),
-       Wd = kd(37618),
-       Pd = kd(37341),
-       Zd = kd(37632),
-       gd = kd(37347),
-       Cd = kd(37366),
-       Kd = kd(37360);
+     var LQ = wQ(36797),
+       qQ = wQ(37019),
+       oQ = wQ(37026),
+       DQ = wQ(36786),
+       kQ = wQ(37032),
+       vQ = wQ(36795),
+       mQ = wQ(36809),
+       uQ = wQ(36803);
```

#### 3894. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28873` → after: `L28477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28477) · [Before (L28873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28873)

```diff
-       const pd = (0, Cd.s)(dd, Od, function(dd, Jd, kd, pd) {
+       const LQ = (0, mQ.u)(QQ, AQ, function(QQ, FQ, wQ, LQ) {
```

#### 3895. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28875-L28876` → after: `L28479-L28480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28479-L28480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28479-L28480) · [Before (L28875-L28876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28875-L28876)

```diff
-           UL: dd,
-           uniformWriter: new Wd.j(dd),
+           Zx: QQ,
+           uniformWriter: new oQ.i(QQ),
```

#### 3896. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28889` → after: `L28493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28493) · [Before (L28889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28889)

```diff
-       (0, pd.R)(kd.x, kd.y, kd.z, kd.w, Jd) && (kd.x = Jd[0], kd.y = Jd[1], kd.z = Jd[2], kd.w = Jd[3], dd.uniformLightVersion++)
+       (0, LQ.Y)(wQ.x, wQ.y, wQ.z, wQ.w, FQ) && (wQ.x = FQ[0], wQ.y = FQ[1], wQ.z = FQ[2], wQ.w = FQ[3], QQ.uniformLightVersion++)
```

#### 3897. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28901` → after: `L28505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28505) · [Before (L28901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28901)

```diff
-         ...(0, Pd.b)("ENTITY_LIGHT"),
+         ...(0, DQ.e)("ENTITY_LIGHT"),
```

#### 3898. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28908` → after: `L28512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28512) · [Before (L28908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28908)

```diff
-         (0, Nd.c)(dd, this.UL.IO);
+         (0, qQ.b)(QQ, this.Zx.UA);
```

#### 3899. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28910` → after: `L28514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28514) · [Before (L28910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28910)

```diff
-         pd ? (0, Kd.e)(dd, pd) : Qd.disableUnusedSpecularTerm(dd, Wd);
+         LQ ? (0, uQ.f)(QQ, LQ) : YQ.disableUnusedSpecularTerm(QQ, oQ);
```

#### 3900. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28915` → after: `L28519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28519) · [Before (L28915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28915)

```diff
-         return (0, Zd.c)(this.uniformLevels ? [...Wd.i, {
+         return (0, kQ.e)(this.uniformLevels ? [...oQ.f, {
```

#### 3901. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28918` → after: `L28522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28522) · [Before (L28918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28918)

```diff
-         }] : Wd.i, "both", dd)
+         }] : oQ.f, "both", QQ)
```

#### 3902. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28924` → after: `L28528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28528) · [Before (L28924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28924)

```diff
-         return (0, Wd.t)(this.UL) + this.uniformLightVersion
+         return (0, oQ.m)(this.Zx) + this.uniformLightVersion
```

#### 3903. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28927` → after: `L28531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28531) · [Before (L28927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28927)

```diff
-         this.UL.IO && !this.uniformLevels && dd.push("aLightLevels")
+         this.Zx.UA && !this.uniformLevels && QQ.push("aLightLevels")
```

#### 3904. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28931` → after: `L28535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28535) · [Before (L28931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28931)

```diff
-           const dd = this.uniformLevels ? (0, gd.Cb)(Jd, "uEntityLightLevels") : (0, gd.Jb)(Jd, "aLightLevels");
+           const QQ = this.uniformLevels ? (0, vQ.Pb)(FQ, "uEntityLightLevels") : (0, vQ.Vb)(FQ, "aLightLevels");
```

#### 3905. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28933-L28934` → after: `L28537-L28538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28537-L28538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28537-L28538) · [Before (L28933-L28934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28933-L28934)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,gd.h)(Jd,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,pd.K)(Jd)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,pd.I)(Jd,dd)}\n\t\t\t\t\t\t${(0,gd.z)(Jd,"vec3","blockLightContrib",(0,pd.n)(Jd,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,gd.z)(Jd,"vec3","skyContrib",`mix(${(0,gd.Cb)(Jd,"uAmbientL … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,vQ.h)(FQ,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,LQ.S)(FQ)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,LQ.O)(FQ,QQ)}\n\t\t\t\t\t\t${(0,vQ.I)(FQ,"vec3","blockLightContrib",(0,LQ.n)(FQ,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,vQ.I)(FQ,"vec3","skyContrib",`mix(${(0,vQ.Pb)(FQ,"uAmbientL … [truncated]
```

#### 3906. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28938-L28939` → after: `L28542-L28543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28542-L28543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28542-L28543) · [Before (L28938-L28939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28938-L28939)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,pd.K)(Jd)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, pd.F)(Jd)
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,LQ.S)(FQ)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, LQ.M)(FQ)
```

#### 3907. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28943` → after: `L28547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28547) · [Before (L28943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28943)

```diff
-     (0, Kd.n)(Od)
+     (0, uQ.p)(AQ)
```

#### 3908. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28945` → after: `L28549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28549) · [Before (L28945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28945)

```diff
-   37360: (dd, Jd, kd) => {
+   36803: (QQ, FQ, wQ) => {
```

#### 3909. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28953` → after: `L28556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28556) · [Before (L28953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28953)

```diff
-       i: () => Wd,
+       f: () => LQ,
```

#### 3910. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28955` → after: `L28558-L28559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28558-L28559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28558-L28559) · [Before (L28955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28955)

```diff
-       n: () => gd
+       l: () => mQ,
+       p: () => vQ
```

#### 3911. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28988` → after: `L28592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28592) · [Before (L28988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28988)

```diff
-   37448: (dd, Jd, kd) => {
+   36887: (QQ, FQ, wQ) => {
```

#### 3912. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28990` → after: `L28594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28594) · [Before (L28990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28990)

```diff
-       e: () => Nd
+       b: () => qQ
```

#### 3913. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28992` → after: `L28596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28596) · [Before (L28992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28992)

```diff
-     var pd = kd(37347);
+     var LQ = wQ(36795);
```

#### 3914. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28995` → after: `L28599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28599) · [Before (L28995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28995)

```diff
-       return `\n\t\t${(0,pd.w)(dd,"vec3",`${Jd}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
+       return `\n\t\t${(0,LQ.E)(QQ,"vec3",`${FQ}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
```

#### 3915. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L28997` → after: `L28601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28601) · [Before (L28997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L28997)

```diff
-         (0, pd.z)(dd, "vec4", "K", (0, pd.n)(dd, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
+         (0, LQ.I)(QQ, "vec4", "K", (0, LQ.q)(QQ, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
```

#### 3916. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29000` → after: `L28604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28604) · [Before (L29000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29000)

```diff
-         (0, pd.z)(dd, "vec4", "p", `mix(${(0,pd.n)(dd,"vec4","c.bg","K.wz")}, ${(0,pd.n)(dd,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
+         (0, LQ.I)(QQ, "vec4", "p", `mix(${(0,LQ.q)(QQ,"vec4","c.bg","K.wz")}, ${(0,LQ.q)(QQ,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
```

#### 3917. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29003` → after: `L28607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28607) · [Before (L29003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29003)

```diff
-         (0, pd.z)(dd, "vec4", "q", `mix(${(0,pd.n)(dd,"vec4","p.xyw","c.r")}, ${(0,pd.n)(dd,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
+         (0, LQ.I)(QQ, "vec4", "q", `mix(${(0,LQ.q)(QQ,"vec4","p.xyw","c.r")}, ${(0,LQ.q)(QQ,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
```

#### 3918. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29006` → after: `L28610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28610) · [Before (L29006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29006)

```diff
-         (0, pd.z)(dd, "float", "d", "q.x - min(q.w, q.y)")
+         (0, LQ.I)(QQ, "float", "d", "q.x - min(q.w, q.y)")
```

#### 3919. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29009` → after: `L28613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28613) · [Before (L29009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29009)

```diff
-         (0, pd.z)(dd, "float", "e", "1.0e-10")
+         (0, LQ.I)(QQ, "float", "e", "1.0e-10")
```

#### 3920. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29012` → after: `L28616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28616) · [Before (L29012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29012)

```diff
-         (0, pd.n)(dd, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
+         (0, LQ.q)(QQ, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
```

#### 3921. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29014` → after: `L28618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28618) · [Before (L29014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29014)

```diff
-       n\ t\ t`)}\n\n\t\t${(0,pd.w)(dd,"vec3",`${Jd}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
+       n\ t\ t`)}\n\n\t\t${(0,LQ.E)(QQ,"vec3",`${FQ}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
```

#### 3922. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29016` → after: `L28620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28620) · [Before (L29016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29016)

```diff
-         (0, pd.z)(dd, "vec4", "K", (0, pd.n)(dd, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
+         (0, LQ.I)(QQ, "vec4", "K", (0, LQ.q)(QQ, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
```

#### 3923. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29019` → after: `L28623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28623) · [Before (L29019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29019)

```diff
-         (0, pd.z)(dd, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
+         (0, LQ.I)(QQ, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
```

#### 3924. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29022` → after: `L28626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28626) · [Before (L29022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29022)

```diff
-         (0, pd.n)(dd, "vec3", "0.0")
+         (0, LQ.q)(QQ, "vec3", "0.0")
```

#### 3925. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29024` → after: `L28628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28628) · [Before (L29024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29024)

```diff
-         (0, pd.n)(dd, "vec3", "1.0")
+         (0, LQ.q)(QQ, "vec3", "1.0")
```

#### 3926. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29029` → after: `L28633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28633) · [Before (L29029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29029)

```diff
-   38034: (dd, Jd, kd) => {
+   37389: (QQ, FQ, wQ) => {
```

#### 3927. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29033` → after: `L28637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28637) · [Before (L29033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29033)

```diff
-       i: () => Cd
+       j: () => mQ
```

#### 3928. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29035-L29039` → after: `L28639-L28643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28639-L28643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28639-L28643) · [Before (L29035-L29039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29035-L29039)

```diff
-     var pd = kd(37351),
-       Nd = kd(37341),
-       Wd = kd(37347),
-       Pd = kd(37366),
-       Zd = kd(37360);
+     var LQ = wQ(36797),
+       qQ = wQ(36786),
+       oQ = wQ(36795),
+       DQ = wQ(36809),
+       kQ = wQ(36803);
```

#### 3929. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29046` → after: `L28650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28650) · [Before (L29046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29046)

```diff
-           ...(0, Nd.b)("TERRAIN_FADE"),
+           ...(0, qQ.e)("TERRAIN_FADE"),
```

#### 3930. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29054` → after: `L28658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28658) · [Before (L29054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29054)

```diff
-           const kd = (0, Wd.Z)(Jd);
+           const wQ = (0, oQ.mb)(FQ);
```

#### 3931. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29056-L29057` → after: `L28660-L28661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28660-L28661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28660-L28661) · [Before (L29056-L29057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29056-L29057)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,pd.r)(Jd)}\n            `,
-             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${gd}\n                if (${kd} < 255.0 / 256.0 && ${kd} < bayerDither(${(0,Wd.I)(Jd)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,LQ.u)(FQ)}\n            `,
+             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${vQ}\n                if (${wQ} < 255.0 / 256.0 && ${wQ} < bayerDither(${(0,oQ.X)(FQ)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
```

#### 3932. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29065-L29068` → after: `L28669-L28672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28669-L28672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28669-L28672) · [Before (L29065-L29068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29065-L29068)

```diff
-         const Jd = (0, Pd.P)(dd, 1, !1),
-           kd = (0, Pd.S)(dd, 1, !1);
-         (0, Pd.gb)(dd, {
-           transparencyMode: Jd ? Pd.r.alphaBlend : kd ? Pd.r.alphaTest : Pd.r.opaque
+         const FQ = (0, DQ.Y)(QQ, 1, !1),
+           wQ = (0, DQ.ab)(QQ, 1, !1);
+         (0, DQ.vb)(QQ, {
+           transparencyMode: FQ ? DQ.q.alphaBlend : wQ ? DQ.q.alphaTest : DQ.q.opaque
```

#### 3933. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29070` → after: `L28674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28674) · [Before (L29070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29070)

```diff
-       }(0, Pd.s)(dd, Cd, {
+       }(0, DQ.u)(QQ, mQ, {
```

#### 3934. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29074` → after: `L28678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28678) · [Before (L29074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29074)

```diff
-     }(0, Zd.n)(Cd)
+     }(0, kQ.p)(mQ)
```

#### 3935. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29076` → after: `L28680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28680) · [Before (L29076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29076)

```diff
-   38043: (dd, Jd, kd) => {
+   37392: (QQ, FQ, wQ) => {
```

#### 3936. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29078-L29080` → after: `L28682-L28683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28682-L28683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28682-L28683) · [Before (L29078-L29080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29078-L29080)

```diff
-       b: () => Rd,
-       c: () => ld,
-       f: () => Od,
+       d: () => eQ,
+       g: () => bQ,
```

#### 3937. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29082` → after: `L28685-L28686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28685-L28686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28685-L28686) · [Before (L29082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29082)

```diff
-       i: () => Ld
+       i: () => tQ,
+       m: () => xQ
```

#### 3938. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29084-L29091` → after: `L28688-L28695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28688-L28695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28688-L28695) · [Before (L29084-L29091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29084-L29091)

```diff
-     var pd = kd(37351),
-       Nd = kd(37613),
-       Wd = kd(37618),
-       Pd = kd(37341),
-       Zd = kd(37632),
-       gd = kd(37347),
-       Cd = kd(37366),
-       Kd = kd(37360);
+     var LQ = wQ(36797),
+       qQ = wQ(37019),
+       oQ = wQ(37026),
+       DQ = wQ(36786),
+       kQ = wQ(37032),
+       vQ = wQ(36795),
+       mQ = wQ(36809),
+       uQ = wQ(36803);
```

#### 3939. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29107` → after: `L28711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28711) · [Before (L29107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29107)

```diff
-         ...(0, Pd.b)("TERRAIN_LIGHT"),
+         ...(0, DQ.e)("TERRAIN_LIGHT"),
```

#### 3940. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29117` → after: `L28721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28721) · [Before (L29117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29117)

```diff
-         (0, Nd.c)(dd, this.UL.IO), dd.BLOXD_LIGHT_WORD = Qd.has(kd);
+         (0, qQ.b)(QQ, this.Zx.UA), QQ.BLOXD_LIGHT_WORD = YQ.has(wQ);
```

#### 3941. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29119` → after: `L28723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28723) · [Before (L29119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29119)

```diff
-         Wd || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), dd.BLOXD_TERRAIN_DIRECTI … [truncated]
+         oQ || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), QQ.BLOXD_TERRAIN_DIRECTI … [truncated]
```

#### 3942. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29122` → after: `L28726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28726) · [Before (L29122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29122)

```diff
-         this.UL.IO && dd.push("aPackedLightLevels")
+         this.Zx.UA && QQ.push("aPackedLightLevels")
```

#### 3943. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29125` → after: `L28729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28729) · [Before (L29125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29125)

```diff
-         const Jd = (0, Zd.c)(Wd.i, "both", dd);
+         const FQ = (0, kQ.e)(oQ.f, "both", QQ);
```

#### 3944. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29127-L29128` → after: `L28731-L28732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28731-L28732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28731-L28732) · [Before (L29127-L29128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29127-L29128)

```diff
-         const kd = (0, Zd.c)((0, pd.x)(this.dirLightCount), "vertex", dd);
-         return (0, gd.V)(dd) ? {
+         const wQ = (0, kQ.e)((0, LQ.E)(this.dirLightCount), "vertex", QQ);
+         return (0, vQ.ib)(QQ) ? {
```

#### 3945. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29132` → after: `L28736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28736) · [Before (L29132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29132)

```diff
-           vertex: `${Jd.vertex}\n${kd.vertex}`,
+           vertex: `${FQ.vertex}\n${wQ.vertex}`,
```

#### 3946. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29141` → after: `L28745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28745) · [Before (L29141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29141)

```diff
-         return (0, Wd.t)(this.UL)
+         return (0, oQ.m)(this.Zx)
```

#### 3947. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29145-L29146` → after: `L28749-L28750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28749-L28750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28749-L28750) · [Before (L29145-L29146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29145-L29146)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,pd.U)(Jd)}\n                    ${(0,pd.A)(Jd)}\n                `,
-           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,pd.Y)(Jd)}\n                    ${(0,pd.C)(Jd,this.dirLightCount)}\n                `
+           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,LQ.$)(FQ)}\n                    ${(0,LQ.F)(FQ)}\n                `,
+           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,LQ.ab)(FQ)}\n                    ${(0,LQ.I)(FQ,this.dirLightCount)}\n                `
```

#### 3948. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29148-L29150` → after: `L28752-L28754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28752-L28754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28752-L28754) · [Before (L29148-L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29148-L29150)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,pd.P)(Jd)}\n                    ${(0,pd.A)(Jd)}\n                `,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, pd.M)(Jd),
-           [(0, pd.v)(Jd)]: `\n                    ${(0,pd.w)(Jd)}\n                    ${(0,pd.u)(Jd)}\n                `
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,LQ.X)(FQ)}\n                    ${(0,LQ.F)(FQ)}\n                `,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, LQ.T)(FQ),
+           [(0, LQ.z)(FQ)]: `\n                    ${(0,LQ.B)(FQ)}\n                    ${(0,LQ.v)(FQ)}\n                `
```

#### 3949. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29156` → after: `L28760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28760) · [Before (L29156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29156)

```diff
-       const kd = (0, Wd.w)(dd.model.view);
+       const wQ = (0, oQ.p)(QQ.model.view);
```

#### 3950. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29158-L29160` → after: `L28762-L28764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28762-L28764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28762-L28764) · [Before (L29158-L29160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29158-L29160)

```diff
-         UL: dd,
-         uniformWriter: new Wd.j(dd),
-         dirLightWriter: kd > 0 ? new Wd.e(dd.model.view, kd) : null,
+         Zx: QQ,
+         uniformWriter: new oQ.i(QQ),
+         dirLightWriter: wQ > 0 ? new oQ.b(QQ.model.view, wQ) : null,
```

#### 3951. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29168-L29170` → after: `L28772-L28774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28772-L28774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28772-L28774) · [Before (L29168-L29170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29168-L29170)

```diff
-       const kd = (0, Cd.$)(dd);
-       (0, Cd.v)(kd, Od.name) || (0, Cd.s)(kd, Od, ed(Jd, dd)), dd.checkReadyOnlyOnce = !0, (0, Cd.bb)(dd, !0)
-     }(0, Kd.n)(Od)
+       const wQ = (0, mQ.jb)(QQ);
+       (0, mQ.z)(wQ, AQ.name) || (0, mQ.u)(wQ, AQ, tQ(FQ, QQ)), QQ.checkReadyOnlyOnce = !0, (0, mQ.lb)(QQ, !0)
+     }(0, uQ.p)(AQ)
```

#### 3952. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29172` → after: `L28776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28776) · [Before (L29172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29172)

```diff
-   37627: (dd, Jd, kd) => {
+   37030: (QQ, FQ, wQ) => {
```

#### 3953. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29174-L29177` → after: `L28778-L28781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28778-L28781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28778-L28781) · [Before (L29174-L29177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29174-L29177)

```diff
-       c: () => Wd,
-       g: () => pd,
-       h: () => Nd,
-       l: () => Pd
+       e: () => oQ,
+       f: () => LQ,
+       i: () => qQ,
+       k: () => DQ
```

#### 3954. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29197` → after: `L28801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28801) · [Before (L29197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29197)

```diff
-   38090: (dd, Jd, kd) => {
+   37443: (QQ, FQ, wQ) => {
```

#### 3955. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29200-L29201` → after: `L28805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28805) · [Before (L29200-L29201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29200-L29201)

```diff
-       f: () => Qd,
-       j: () => ld
+       i: () => bQ
```

#### 3956. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29203` → after: `L28807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28807) · [Before (L29203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29203)

```diff
-     var pd = kd(37669);
+     var LQ = wQ(37052);
```

#### 3957. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29208` → after: `L28812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28812) · [Before (L29208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29208)

```diff
-       const gd = "position" === Jd ? pd.B : pd.D;
+       const vQ = "position" === FQ ? LQ.H : LQ.J;
```

#### 3958. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29212` → after: `L28816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28816) · [Before (L29212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29212)

```diff
-           Pd = Zd && "position" !== Jd && 0 !== Nd && 1 !== Nd ? 1 / Nd : 1;
+           DQ = kQ && "position" !== FQ && 0 !== qQ && 1 !== qQ ? 1 / qQ : 1;
```

#### 3959. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29288` → after: `L28892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28892) · [Before (L29288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29288)

```diff
-             return null !== (Jd = gd(kd)[Zd]) && void 0 !== Jd ? Jd : []
+             return null !== (FQ = vQ(wQ)[kQ]) && void 0 !== FQ ? FQ : []
```

#### 3960. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29324` → after: `L28928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R28928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L28928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L28928) · [Before (L29324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29324)

```diff
-   37816: (dd, Jd, kd) => {
+   37178: (QQ, FQ, wQ) => {
```

#### 3961. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29403` → after: `L29007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29007) · [Before (L29403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29403)

```diff
-         const [Jd, kd, pd, Pd] = null !== (ld = null === Wd || void 0 === Wd ? void 0 : Wd[dd / 4]) && void 0 !== ld ? ld : [0, 0, 1, 1];
+         const [FQ, wQ, LQ, DQ] = null !== (bQ = null === oQ || void 0 === oQ ? void 0 : oQ[QQ / 4]) && void 0 !== bQ ? bQ : [0, 0, 1, 1];
```

#### 3962. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29425-L29426` → after: `L29029-L29030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29029-L29030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29029-L29030) · [Before (L29425-L29426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29425-L29426)

```diff
-       k: () => Nd,
-       m: () => Pd
+       l: () => qQ,
+       n: () => DQ
```

#### 3963. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29429` → after: `L29033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29033) · [Before (L29429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29429)

```diff
-   37661: (dd, Jd, kd) => {
+   37048: (QQ, FQ, wQ) => {
```

#### 3964. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29431` → after: `L29035-L29036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29035-L29036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29035-L29036) · [Before (L29431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29431)

```diff
-       c: () => Wd,
+       b: () => oQ,
+       e: () => HQ,
```

#### 3965. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29434-L29437` → after: `L29041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29041) · [Before (L29434-L29437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29434-L29437)

```diff
-       l: () => Cd,
-       m: () => gd,
-       p: () => Zd,
-       r: () => Pd
+       n: () => DQ
```

#### 3966. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29503` → after: `L29107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29107) · [Before (L29503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29503)

```diff
-       return (ArrayBuffer.isView(kd) ? (kd.byteOffset + pd) % 4 === 0 && Nd % 4 === 0 : 12 === Nd && pd % 4 === 0) ? Jd : null
+       return (ArrayBuffer.isView(wQ) ? (wQ.byteOffset + LQ) % 4 === 0 && qQ % 4 === 0 : 12 === qQ && LQ % 4 === 0) ? FQ : null
```

#### 3967. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29559` → after: `L29163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29163) · [Before (L29559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29559)

```diff
-   37682: (dd, Jd, kd) => {
+   37065: (QQ, FQ, wQ) => {
```

#### 3968. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29561-L29563` → after: `L29165-L29167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29165-L29167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29165-L29167) · [Before (L29561-L29563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29561-L29563)

```diff
-       b: () => Zd,
-       c: () => Wd,
-       d: () => od,
+       B: () => AQ,
+       E: () => DQ,
+       e: () => kQ,
```

#### 3969. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29565` → after: `L29169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29169) · [Before (L29565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29565)

```diff
-       j: () => Ld,
+       l: () => HQ,
```

#### 3970. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29571` → after: `L29175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29175) · [Before (L29571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29571)

```diff
-     var pd = kd(37386);
+     var LQ = wQ(36822);
```

#### 3971. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29655` → after: `L29259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29259) · [Before (L29655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29655)

```diff
-       dd.live && (dd.live = !1, Nd--), dd.released = !0, (0, pd.M)(dd.gpu)
+       QQ.live && (QQ.live = !1, qQ--), QQ.released = !0, (0, LQ.H)(QQ.gpu)
```

#### 3972. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29662` → after: `L29266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29266) · [Before (L29662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29662)

```diff
-   37373: (dd, Jd, kd) => {
+   36816: (QQ, FQ, wQ) => {
```

#### 3973. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29664` → after: `L29268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29268) · [Before (L29664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29664)

```diff
-       b: () => pd
+       c: () => LQ
```

#### 3974. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29688` → after: `L29292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29292) · [Before (L29688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29688)

```diff
-   37381: (dd, Jd, kd) => {
+   36820: (QQ, FQ, wQ) => {
```

#### 3975. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29690-L29691` → after: `L29294-L29295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29294-L29295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29294-L29295) · [Before (L29690-L29691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29690-L29691)

```diff
-       c: () => Wd,
-       g: () => Pd
+       d: () => oQ,
+       h: () => DQ
```

#### 3976. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29702` → after: `L29306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29306) · [Before (L29702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29702)

```diff
-       return null !== (Jd = dd && Nd.get(dd)) && void 0 !== Jd ? Jd : pd
+       return null !== (FQ = QQ && qQ.get(QQ)) && void 0 !== FQ ? FQ : LQ
```

#### 3977. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29705` → after: `L29309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29309) · [Before (L29705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29705)

```diff
-   37366: (dd, Jd, kd) => {
+   36809: (QQ, FQ, wQ) => {
```

#### 3978. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29707-L29708` → after: `L29311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29311) · [Before (L29707-L29708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29707-L29708)

```diff
-       $: () => Qd,
-       B: () => jd,
+       C: () => IQ,
```

#### 3979. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29711-L29712` → after: `L29314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29314) · [Before (L29711-L29712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29711-L29712)

```diff
-       M: () => ed,
-       O: () => Gd,
+       L: () => eQ,
```

#### 3980. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29714-L29715` → after: `L29316-L29317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29316-L29317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29316-L29317) · [Before (L29714-L29715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29714-L29715)

```diff
-       S: () => yd,
-       W: () => Sd,
+       R: () => tQ,
+       U: () => GQ,
```

#### 3981. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29717-L29718` → after: `L29319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29319) · [Before (L29717-L29718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29717-L29718)

```diff
-       b: () => Zd,
-       bb: () => Id,
+       ab: () => jQ,
```

#### 3982. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29720` → after: `L29321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29321) · [Before (L29720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29720)

```diff
-       f: () => qd,
+       d: () => kQ,
```

#### 3983. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29722-L29723` → after: `L29323-L29326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29323-L29326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29323-L29326) · [Before (L29722-L29723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29722-L29723)

```diff
-       gb: () => Md,
-       i: () => gd,
+       g: () => CQ,
+       jb: () => YQ,
+       k: () => vQ,
+       lb: () => MQ,
```

#### 3984. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29725-L29731` → after: `L29328-L29335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29328-L29335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29328-L29335) · [Before (L29725-L29731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29725-L29731)

```diff
-       p: () => Kd,
-       r: () => Pd,
-       s: () => md,
-       t: () => ad,
-       v: () => Fd,
-       w: () => bd,
-       x: () => ld
+       n: () => uQ,
+       pb: () => pQ,
+       q: () => DQ,
+       sb: () => zQ,
+       u: () => rQ,
+       vb: () => RQ,
+       y: () => WQ,
+       z: () => OQ
```

#### 3985. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L29733-L29735` → after: `L29337-L29339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R29337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L29337-L29339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/113.js#L29337-L29339) · [Before (L29733-L29735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/113.js#L29733-L29735)

```diff
-     var pd = kd(37373),
-       Nd = kd(37381),
-       Wd = kd(37386);
+     var LQ = wQ(36816),
+       qQ = wQ(36820),
+       oQ = wQ(36822);
```
