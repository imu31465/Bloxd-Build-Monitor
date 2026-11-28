# Changed — Bundle Modifications Report (Part 102 / 154)

- **Updated at**: `2026-11-28T21:24 JST`
- **Part**: `102 / 154` (**424** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 101](part-101.md) · [Part 103 →](part-103.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (yteou.5361c997 → welxxc.ffac0572 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (4830 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 3833. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29027-L29028` → after: `L28812-L28813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28812-L28813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28812-L28813) · [Before (L29027-L29028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29027-L29028)

```diff
-               const Wd = Od >> 3 * (Rd + 1) + md + 1 & 1 ? dd.rq.get(Rd, -1, md) : null;
-               null !== Wd && void 0 !== Wd && Wd.CH && this.invalidateProvidedLightFrom(dd, Wd)
+               const eb = wb >> 3 * (pb + 1) + Mb + 1 & 1 ? bb.sC.get(pb, -1, Mb) : null;
+               null !== eb && void 0 !== eb && eb.ZE && this.invalidateProvidedLightFrom(bb, eb)
```

#### 3834. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29037-L29038` → after: `L28822-L28823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28822-L28823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28822-L28823) · [Before (L29037-L29038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29037-L29038)

```diff
-                 const Fd = dd.rq.get(md, -1, Wd);
-                 Fd && 0 !== Fd.hy && !Fd.BH && (Fd.XH ? this.skySeedRecheck.add(Fd) : this.skySeedStale(Fd, dd) && (Fd.BH = !0, this.zo.Bt.SH(Fd)))
+                 const Hb = bb.sC.get(Mb, -1, eb);
+                 Hb && 0 !== Hb.iE && !Hb.UE && (Hb.aC ? this.skySeedRecheck.add(Hb) : this.skySeedStale(Hb, bb) && (Hb.UE = !0, this.hU.XO.tE(Hb)))
```

#### 3835. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29047` → after: `L28832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28832) · [Before (L29047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29047)

```diff
-         this.skySeedRecheck.delete(dd), Od && (this.checkHeldSkySeedReaders(dd), md && this.skySeedStale(dd, null) && (dd.BH = !0, this.zo.Bt.SH(dd)))
+         this.skySeedRecheck.delete(bb), wb && (this.checkHeldSkySeedReaders(bb), Mb && this.skySeedStale(bb, null) && (bb.UE = !0, this.hU.XO.tE(bb)))
```

#### 3836. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29050` → after: `L28835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28835) · [Before (L29050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29050)

```diff
-         this.requeueSkySeedReaders(dd, Kd.b, !1, !dd.BH)
+         this.requeueSkySeedReaders(bb, gb.b, !1, !bb.UE)
```

#### 3837. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29053-L29054` → after: `L28838-L28839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28838-L28839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28838-L28839) · [Before (L29053-L29054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29053-L29054)

```diff
-         const md = dd.Bq;
-         if (!md || dd.Uq) return !1;
+         const Mb = bb.UC;
+         if (!Mb || bb.IC) return !1;
```

#### 3838. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29056` → after: `L28841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28841) · [Before (L29056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29056)

```diff
-         if (void 0 === Wd) return !dd.CH;
+         if (void 0 === eb) return !bb.ZE;
```

#### 3839. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29062-L29063` → after: `L28847-L28848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28847-L28848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28847-L28848) · [Before (L29062-L29063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29062-L29063)

```diff
-             const hd = dd.rq.get(Xd, 1, md);
-             if ((!Od || hd === Od) && (0, Kd.B)(Wd, null !== (Rd = null === hd || void 0 === hd ? void 0 : hd.Bq) && void 0 !== Rd ? Rd : null, !(null === hd || void 0 === hd || !hd.Vq), Xd, md, Fd, Kd.i, 255)) return !0
+             const lb = bb.sC.get(Vb, 1, Mb);
+             if ((!wb || lb === wb) && (0, gb.G)(eb, null !== (pb = null === lb || void 0 === lb ? void 0 : lb.UC) && void 0 !== pb ? pb : null, !(null === lb || void 0 === lb || !lb.EC), Vb, Mb, Hb, gb.k, 255)) return !0
```

#### 3840. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29073` → after: `L28858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28858) · [Before (L29073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29073)

```diff
-         const md = null !== (dd = null === (Od = this.busynessTracker) || void 0 === Od ? void 0 : Od.sample()) && void 0 !== dd ? dd : null,
+         const Mb = null !== (bb = null === (wb = this.busynessTracker) || void 0 === wb ? void 0 : wb.sample()) && void 0 !== bb ? bb : null,
```

#### 3841. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29101` → after: `L28886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28886) · [Before (L29101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29101)

```diff
-         return this.queueBudget.Mt(this.liveWorkerCount)
+         return this.queueBudget.qO(this.liveWorkerCount)
```

#### 3842. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29104-L29106` → after: `L28889-L28891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28889-L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28889-L28891) · [Before (L29104-L29106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29104-L29106)

```diff
-         this.zo.Bt.Qy.dt.forEach((dd => {
-           const Od = this.zo.Bt.sH.uH(dd[0], dd[1], dd[2]);
-           Od && Od.IH.length > 0 && (this.disposeChunkMeshes(Od), this.chunksToRemeshOnRestore.add(Od))
+         this.hU.XO.dE.TI.forEach((bb => {
+           const wb = this.hU.XO.CE.EE(bb[0], bb[1], bb[2]);
+           wb && wb.cE.length > 0 && (this.disposeChunkMeshes(wb), this.chunksToRemeshOnRestore.add(wb))
```

#### 3843. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29111` → after: `L28896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28896) · [Before (L29111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29111)

```diff
-         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((Od => !(!dd.has(Od) && 0 === Od.IH.length) && (this.retryDroppedChunk(Od), !0)), !0)
+         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((wb => !(!bb.has(wb) && 0 === wb.cE.length) && (this.retryDroppedChunk(wb), !0)), !0)
```

#### 3844. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29114` → after: `L28899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28899) · [Before (L29114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29114)

```diff
-         this.requeueKnownChunks((dd => 0 !== dd.IH.length && (this.retryDroppedChunk(dd), !0)), !0)
+         this.requeueKnownChunks((bb => 0 !== bb.cE.length && (this.retryDroppedChunk(bb), !0)), !0)
```

#### 3845. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29124` → after: `L28909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28909) · [Before (L29124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29124)

```diff
-         this.requeueKnownChunks((dd => !dd.PH && dd.hy > 0), !1)
+         this.requeueKnownChunks((bb => !bb.xE && bb.iE > 0), !1)
```

#### 3846. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29127-L29129` → after: `L28912-L28914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28912-L28914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28912-L28914) · [Before (L29127-L29129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29127-L29129)

```diff
-         this.zo.Bt.Qy.dt.forEach((md => {
-           const Wd = this.zo.Bt.sH.uH(md[0], md[1], md[2]);
-           Wd && dd(Wd) && (Wd.BH = !0, Od && (Wd.iH = !0), this.zo.Bt.SH(Wd))
+         this.hU.XO.dE.TI.forEach((Mb => {
+           const eb = this.hU.XO.CE.EE(Mb[0], Mb[1], Mb[2]);
+           eb && bb(eb) && (eb.UE = !0, wb && (eb.BE = !0), this.hU.XO.tE(eb))
```

#### 3847. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29140` → after: `L28925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28925) · [Before (L29140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29140)

```diff
-   38973: (dd, Od, md) => {
+   38643: (bb, wb, Mb) => {
```

#### 3848. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29142-L29143` → after: `L28927-L28928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28927-L28928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28927-L28928) · [Before (L29142-L29143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29142-L29143)

```diff
-       d: () => Fd,
-       h: () => Rd
+       c: () => Hb,
+       e: () => pb
```

#### 3849. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29157` → after: `L28942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28942) · [Before (L29157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29157)

```diff
-   38964: (dd, Od, md) => {
+   38637: (bb, wb, Mb) => {
```

#### 3850. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29160-L29162` → after: `L28945-L28947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28945-L28947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28945-L28947) · [Before (L29160-L29162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29160-L29162)

```diff
-       h: () => Wd,
-       l: () => Fd,
-       n: () => Rd
+       f: () => eb,
+       g: () => Hb,
+       j: () => pb
```

#### 3851. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29165` → after: `L28950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28950) · [Before (L29165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29165)

```diff
-       RF: 0,
+       pH: 0,
```

#### 3852. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29183` → after: `L28968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28968) · [Before (L29183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29183)

```diff
-   39314: (dd, Od, md) => {
+   39009: (bb, wb, Mb) => {
```

#### 3853. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29185-L29186` → after: `L28970-L28971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28970-L28971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28970-L28971) · [Before (L29185-L29186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29185-L29186)

```diff
-       c: () => Fd,
-       e: () => Rd
+       b: () => Hb,
+       c: () => pb
```

#### 3854. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29188` → after: `L28973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28973) · [Before (L29188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29188)

```diff
-     var Wd = md(38933);
+     var eb = Mb(38613);
```

#### 3855. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29191-L29192` → after: `L28976-L28977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28976-L28977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28976-L28977) · [Before (L29191-L29192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29191-L29192)

```diff
-       const md = dd.Tt,
-         Fd = dd.metadata[Wd.H] * Math.max(Math.abs(md.x), Math.abs(md.y), Math.abs(md.z)),
+       const Mb = bb.CO,
+         Hb = bb.metadata[eb.A] * Math.max(Math.abs(Mb.x), Math.abs(Mb.y), Math.abs(Mb.z)),
```

#### 3856. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29204` → after: `L28989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28989) · [Before (L29204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29204)

```diff
-       return void 0 !== (null === (md = dd.metadata) || void 0 === md ? void 0 : md[Wd.H]) ? Fd(dd, Od) : (dd.computeWorldMatrix(), dd.isInFrustum(Od))
+       return void 0 !== (null === (Mb = bb.metadata) || void 0 === Mb ? void 0 : Mb[eb.A]) ? Hb(bb, wb) : (bb.computeWorldMatrix(), bb.isInFrustum(wb))
```

#### 3857. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29207` → after: `L28992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28992) · [Before (L29207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29207)

```diff
-   39205: (dd, Od, md) => {
+   38900: (bb, wb, Mb) => {
```

#### 3858. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29210-L29212` → after: `L28995-L28997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28995-L28997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L28995-L28997) · [Before (L29210-L29212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29210-L29212)

```diff
-       g: () => Rd,
-       h: () => Kd,
-       j: () => hd
+       f: () => pb,
+       j: () => gb,
+       k: () => lb
```

#### 3859. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29231` → after: `L29016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29016) · [Before (L29231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29231)

```diff
-       return "function" === typeof dd && null !== (Od = dd[Fd]) && void 0 !== Od ? Od : null
+       return "function" === typeof bb && null !== (wb = bb[Hb]) && void 0 !== wb ? wb : null
```

#### 3860. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29234` → after: `L29019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29019) · [Before (L29234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29234)

```diff
-   38951: (dd, Od, md) => {
+   38625: (bb, wb, Mb) => {
```

#### 3861. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29282` → after: `L29067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29067) · [Before (L29282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29282)

```diff
-   39466: (dd, Od, md) => {
+   39153: (bb, wb, Mb) => {
```

#### 3862. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29286-L29291` → after: `L29071-L29076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29071-L29076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29071-L29076) · [Before (L29286-L29291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29286-L29291)

```diff
-     var Wd = md(38627),
-       Fd = md(39461),
-       Rd = md(38914),
-       Xd = md(38779),
-       Kd = md(38929),
-       hd = md(39451);
+     var eb = Mb(38281),
+       Hb = Mb(39148),
+       pb = Mb(38571),
+       Vb = Mb(38449),
+       gb = Mb(38599),
+       lb = Mb(39133);
```

#### 3863. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29293-L29294` → after: `L29078-L29079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29078-L29079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29078-L29079) · [Before (L29293-L29294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29293-L29294)

```diff
-     var Qd = md(38898);
-     class td extends Qd.e {
+     var Ib = Mb(38563);
+     class Ob extends Ib.c {
```

#### 3864. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29296` → after: `L29081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29081) · [Before (L29296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29296)

```diff
-         super(dd, Od, md), this.model = Wd, this.owned = Fd, this.By = Xd, this.sideOrientation = void 0, this.xG = {}, this._userInstancedBuffersStorage = void 0, this.lV = !1, this.ZRd = null, this.instances = [], this._thinInstanceDataStorage = {
+         super(bb, wb, Mb), this.model = eb, this.owned = Hb, this.gF = Vb, this.sideOrientation = void 0, this.hN = {}, this._userInstancedBuffersStorage = void 0, this.QJ = !1, this.opb = null, this.instances = [], this._thinInstanceDataStorage = {
```

#### 3865. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29301` → after: `L29086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29086) · [Before (L29301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29301)

```diff
-         }, this.kmd = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.kq = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
+         }, this.uMb = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.fC = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
```

#### 3866. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29305` → after: `L29090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29090) · [Before (L29305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29305)

```diff
-         Kd.create(this.row, 0, Rd.e.isVisible), Wd && Kd.setBounds(this.row, Wd.boundsMin, Wd.boundsMax), this.materialIndices = new Array(Xd.length / 4).fill(0), this.sideOrientation = dd.zV().useRightHandedSystem ? 0 : 1, this.material = null
+         gb.create(this.row, 0, pb.c.isVisible), eb && gb.setBounds(this.row, eb.boundsMin, eb.boundsMax), this.materialIndices = new Array(Vb.length / 4).fill(0), this.sideOrientation = bb.RJ().useRightHandedSystem ? 0 : 1, this.material = null
```

#### 3867. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29308` → after: `L29093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29093) · [Before (L29308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29308)

```diff
-         return this.meshFlag(Rd.e.alwaysSelect)
+         return this.meshFlag(pb.c.alwaysSelect)
```

#### 3868. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29311` → after: `L29096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29096) · [Before (L29311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29311)

```diff
-         this.gt.model.meshes.setFlag(this.row, Rd.e.alwaysSelect, dd)
+         this.FO.model.meshes.setFlag(this.row, pb.c.alwaysSelect, bb)
```

#### 3869. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29314` → after: `L29099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29099) · [Before (L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29314)

```diff
-         return this.meshFlag(Rd.e.isVisible)
+         return this.meshFlag(pb.c.isVisible)
```

#### 3870. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29317` → after: `L29102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29102) · [Before (L29317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29317)

```diff
-         this.gt.model.meshes.setFlag(this.row, Rd.e.isVisible, dd)
+         this.FO.model.meshes.setFlag(this.row, pb.c.isVisible, bb)
```

#### 3871. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29319` → after: `L29104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29104) · [Before (L29319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29319)

```diff
-       get CRd() {
+       get ypb() {
```

#### 3872. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29323` → after: `L29108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29108) · [Before (L29323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29323)

```diff
-         return this.gt.model.meshes.visibility[this.row]
+         return this.FO.model.meshes.visibility[this.row]
```

#### 3873. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29326` → after: `L29111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29111) · [Before (L29326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29326)

```diff
-         for (const Od of [this, ...this.instances]) this.gt.model.meshes.setVisibility(Od.row, dd)
+         for (const wb of [this, ...this.instances]) this.FO.model.meshes.setVisibility(wb.row, bb)
```

#### 3874. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29329` → after: `L29114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29114) · [Before (L29329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29329)

```diff
-         return this.gt.model.meshes.layer[this.row]
+         return this.FO.model.meshes.layer[this.row]
```

#### 3875. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29332` → after: `L29117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29117) · [Before (L29332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29332)

```diff
-         for (const Od of [this, ...this.instances]) this.gt.model.meshes.setLayer(Od.row, dd)
+         for (const wb of [this, ...this.instances]) this.FO.model.meshes.setLayer(wb.row, bb)
```

#### 3876. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29335` → after: `L29120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29120) · [Before (L29335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29335)

```diff
-         return this.meshFlag(Rd.e.pickable)
+         return this.meshFlag(pb.c.pickable)
```

#### 3877. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29338` → after: `L29123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29123) · [Before (L29338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29338)

```diff
-         this.gt.model.meshes.setFlag(this.row, Rd.e.pickable, dd)
+         this.FO.model.meshes.setFlag(this.row, pb.c.pickable, bb)
```

#### 3878. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29345` → after: `L29130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29130) · [Before (L29345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29345)

```diff
-         const Od = "MultiMaterial" === (null === dd || void 0 === dd ? void 0 : dd.getClassName()) ? dd.WOd : null,
+         const wb = "MultiMaterial" === (null === bb || void 0 === bb ? void 0 : bb.getClassName()) ? bb.Lwb : null,
```

#### 3879. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29349` → after: `L29134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29134) · [Before (L29349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29349)

```diff
-             return null !== (Wd = Fd && (0, Xd.db)(Fd)) && void 0 !== Wd ? Wd : null
+             return null !== (eb = Hb && (0, Vb.ab)(Hb)) && void 0 !== eb ? eb : null
```

#### 3880. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29351-L29352` → after: `L29136-L29137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29136-L29137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29136-L29137) · [Before (L29351-L29352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29351-L29352)

```diff
-           Wd = new Rd.h(this, this.model, this.By, md);
-         for (const Fd of [this, ...this.instances]) this.gt.model.meshes.setParts(Fd.row, Wd)
+           eb = new pb.g(this, this.model, this.gF, Mb);
+         for (const Hb of [this, ...this.instances]) this.FO.model.meshes.setParts(Hb.row, eb)
```

#### 3881. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29354` → after: `L29139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29139) · [Before (L29354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29354)

```diff
-       get ndd() {
+       get ibb() {
```

#### 3882. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29357` → after: `L29142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29142) · [Before (L29357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29357)

```diff
-       set ndd(dd) {
+       set ibb(bb) {
```

#### 3883. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29364` → after: `L29149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29149) · [Before (L29364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29364)

```diff
-         return (this.forcedInstanceCount || this.ndd) > 0
+         return (this.forcedInstanceCount || this.ibb) > 0
```

#### 3884. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29368` → after: `L29153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29153) · [Before (L29368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29368)

```diff
-         return this.gt.zV().Iq()
+         return this.FO.RJ().DC()
```

#### 3885. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29371` → after: `L29156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29156) · [Before (L29371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29371)

```diff
-         return this.gt.model.meshes.parts[this.row]
+         return this.FO.model.meshes.parts[this.row]
```

#### 3886. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29378` → after: `L29163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29163) · [Before (L29378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29378)

```diff
-         } = null !== (dd = this.model) && void 0 !== dd ? dd : {
+         } = null !== (bb = this.model) && void 0 !== bb ? bb : {
```

#### 3887. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29387` → after: `L29172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29172) · [Before (L29387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29387)

```diff
-             hd = .5 * Wd.Cq.Distance(dd, Od);
+             lb = .5 * eb.YC.Distance(bb, wb);
```

#### 3888. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29389` → after: `L29174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29174) · [Before (L29389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29389)

```diff
-             Rd.Bdd(Number.MAX_VALUE), Xd.Bdd(-Number.MAX_VALUE);
+             pb.Jbb(Number.MAX_VALUE), Vb.Jbb(-Number.MAX_VALUE);
```

#### 3889. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29394` → after: `L29179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29179) · [Before (L29394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29394)

```diff
-               Wd.Cq.CheckExtends(Wd.Cq.TransformCoordinatesFromFloatsToRef(Kd, hd, vd, md, new Wd.Cq), Rd, Xd)
+               eb.YC.CheckExtends(eb.YC.TransformCoordinatesFromFloatsToRef(gb, lb, Lb, Mb, new eb.YC), pb, Vb)
```

#### 3890. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29396-L29397` → after: `L29181-L29182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29181-L29182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29181-L29182) · [Before (L29396-L29397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29396-L29397)

```diff
-             Kd = Wd.Cq.TransformCoordinates(Fd, md);
-             const Qd = Wd.Cq.TransformNormalFromFloatsToRef(1, 1, 1, md, new Wd.Cq);
+             gb = eb.YC.TransformCoordinates(Hb, Mb);
+             const Ib = eb.YC.TransformNormalFromFloatsToRef(1, 1, 1, Mb, new eb.YC);
```

#### 3891. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29411` → after: `L29196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29196) · [Before (L29411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29411)

```diff
-             ERd: {
+             Kpb: {
```

#### 3892. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29419` → after: `L29204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29204) · [Before (L29419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29419)

```diff
-         }(Wd.Cq.FromArray(Od), Wd.Cq.FromArray(md), this.getWorldMatrix())
+         }(eb.YC.FromArray(wb), eb.YC.FromArray(Mb), this.getWorldMatrix())
```

#### 3893. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29422` → after: `L29207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29207) · [Before (L29422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29422)

```diff
-         return this.iG().ERd.isInFrustum(dd)
+         return this.XN().Kpb.isInFrustum(bb)
```

#### 3894. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29426` → after: `L29211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29211) · [Before (L29426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29426)

```diff
-         return null !== (dd = null === (Od = this.model) || void 0 === Od ? void 0 : Od.vertexCount) && void 0 !== dd ? dd : 0
+         return null !== (bb = null === (wb = this.model) || void 0 === wb ? void 0 : wb.vertexCount) && void 0 !== bb ? bb : 0
```

#### 3895. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29445` → after: `L29230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29230) · [Before (L29445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29445)

```diff
-         return Xd === Kd.e && 0 === Wd && Fd === 4 * Rd && (Array.isArray(md) || md instanceof Float32Array) && md.length === this.model.vertexCount * Rd ? md : (0, Kd.j)(Od, this.model.vertexCount)
+         return Vb === gb.c && 0 === eb && Hb === 4 * pb && (Array.isArray(Mb) || Mb instanceof Float32Array) && Mb.length === this.model.vertexCount * pb ? Mb : (0, gb.g)(wb, this.model.vertexCount)
```

#### 3896. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29454` → after: `L29239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29239) · [Before (L29454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29454)

```diff
-         }))) && void 0 !== dd ? dd : []
+         }))) && void 0 !== bb ? bb : []
```

#### 3897. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29456` → after: `L29241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29241) · [Before (L29456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29456)

```diff
-       jRd() {
+       ipb() {
```

#### 3898. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29458` → after: `L29243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29243) · [Before (L29458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29458)

```diff
-         return null !== (dd = null === (Od = this.model) || void 0 === Od ? void 0 : Od.indexData) && void 0 !== dd ? dd : []
+         return null !== (bb = null === (wb = this.model) || void 0 === wb ? void 0 : wb.indexData) && void 0 !== bb ? bb : []
```

#### 3899. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29470` → after: `L29255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29255) · [Before (L29470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29470)

```diff
-           return null !== (Od = this.getVerticesData(dd)) && void 0 !== Od ? Od : void 0
+           return null !== (wb = this.getVerticesData(bb)) && void 0 !== wb ? wb : void 0
```

#### 3900. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29476` → after: `L29261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29261) · [Before (L29476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29476)

```diff
-         return (0, hd.f)({
+         return (0, lb.i)({
```

#### 3901. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29479` → after: `L29264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29264) · [Before (L29479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29479)

```diff
-           indices: null !== (Od = this.model.indexData) && void 0 !== Od ? Od : [],
+           indices: null !== (wb = this.model.indexData) && void 0 !== wb ? wb : [],
```

#### 3902. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29492` → after: `L29277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29277) · [Before (L29492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29492)

```diff
-         return this.position = Wd.Cq.ZeroReadOnly, this.rotation = Wd.Cq.ZeroReadOnly, this.Tt = Wd.Cq.OneReadOnly, dd && (this.rotationQuaternion = {
+         return this.position = eb.YC.ZeroReadOnly, this.rotation = eb.YC.ZeroReadOnly, this.CO = eb.YC.OneReadOnly, bb && (this.rotationQuaternion = {
```

#### 3903. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29501` → after: `L29286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29286) · [Before (L29501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29501)

```diff
-         md.set(Od), (0, Kd.w)(this.model, md)
+         Mb.set(wb), (0, gb.t)(this.model, Mb)
```

#### 3904. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29504` → after: `L29289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29289) · [Before (L29504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29504)

```diff
-         (0, Kd.o)(dd), this.owned && (0, Kd.u)(this.model), this.model = dd, this.owned = !0, Od !== this.By && (this.By = Od, this.materialIndices = new Array(Od.length / 4).fill(0), this.partBoxes = null), this.gt.model.meshes.setBounds(this.row, dd.boundsMin, dd.boundsMax), th … [truncated]
+         (0, gb.j)(bb), this.owned && (0, gb.p)(this.model), this.model = bb, this.owned = !0, wb !== this.gF && (this.gF = wb, this.materialIndices = new Array(wb.length / 4).fill(0), this.partBoxes = null), this.FO.model.meshes.setBounds(this.row, bb.boundsMin, bb.boundsMax), th … [truncated]
```

#### 3905. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29507` → after: `L29292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29292) · [Before (L29507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29507)

```diff
-         return new qd(this, this.gt, dd, this.gt.zV().getUniqueId(), this.model, !1, this.By)
+         return new Cb(this, this.FO, bb, this.FO.RJ().getUniqueId(), this.model, !1, this.gF)
```

#### 3906. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29510` → after: `L29295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29295) · [Before (L29510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29510)

```diff
-         const Od = new td(this.gt, dd, this.gt.zV().getUniqueId(), this.model, !1, this.By);
+         const wb = new Ob(this.FO, bb, this.FO.RJ().getUniqueId(), this.model, !1, this.gF);
```

#### 3907. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29512` → after: `L29297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29297) · [Before (L29512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29512)

```diff
-         return Nd(md = this, Wd = Od), Wd.parent = md.parent, Wd.rY(md.isEnabled(!1)),
+         return tb(Mb = this, eb = wb), eb.parent = Mb.parent, eb.Bx(Mb.isEnabled(!1)),
```

#### 3908. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29520` → after: `L29305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29305) · [Before (L29520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29520)

```diff
-         (0, Fd.b)()
+         (0, Hb.c)()
```

#### 3909. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29528` → after: `L29313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29313) · [Before (L29528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29528)

```diff
-         for (const Rd of [this, ...this.instances]) Rd.xG[dd] = null;
+         for (const pb of [this, ...this.instances]) pb.hN[bb] = null;
```

#### 3910. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29551-L29552` → after: `L29336-L29337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29336-L29337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29336-L29337) · [Before (L29551-L29552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29551-L29552)

```diff
-         const Od = null === (dd = this.ZRd) || void 0 === dd ? void 0 : dd.instances;
-         null === Od || void 0 === Od || Od.splice(Od.indexOf(this), 1), this.owned && (0, Kd.u)(this.model)
+         const wb = null === (bb = this.opb) || void 0 === bb ? void 0 : bb.instances;
+         null === wb || void 0 === wb || wb.splice(wb.indexOf(this), 1), this.owned && (0, gb.p)(this.model)
```

#### 3911. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29568` → after: `L29353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29353) · [Before (L29568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29568)

```diff
-           const dd = null !== Od && void 0 !== Od ? Od : od.length / Fd;
+           const bb = null !== wb && void 0 !== wb ? wb : Ub.length / Hb;
```

#### 3912. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29575` → after: `L29360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29360) · [Before (L29575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29575)

```diff
-             glType: Kd.e,
+             glType: gb.c,
```

#### 3913. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29581-L29582` → after: `L29366-L29367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29366-L29367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29366-L29367) · [Before (L29581-L29582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29581-L29582)

```diff
-         } = dd, Qd = vd ? (0, Kd.s)(Fd, ((dd, Od) => vd[3 * dd + Od])) : [Rd, Xd];
-         this.replaceModel(new Kd.i(hd, Wd, Fd, Qd[0], Qd[1]), this.By)
+         } = bb, Ib = Lb ? (0, gb.m)(Hb, ((bb, wb) => Lb[3 * bb + wb])) : [pb, Vb];
+         this.replaceModel(new gb.d(lb, eb, Hb, Ib[0], Ib[1]), this.gF)
```

#### 3914. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29589` → after: `L29374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29374) · [Before (L29589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29589)

```diff
-         return 0 !== (this.gt.model.meshes.flags[this.row] & dd)
+         return 0 !== (this.FO.model.meshes.flags[this.row] & bb)
```

#### 3915. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29592` → after: `L29377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29377) · [Before (L29592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29592)

```diff
-     const od = ["billboardMode", "infiniteDistance", "isVisible", "my", "lq", "visibility", "renderingGroupId", "sideOrientation", "kmd", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "kq", "metadata"];
+     const Ub = ["billboardMode", "infiniteDistance", "isVisible", "NE", "cC", "visibility", "renderingGroupId", "sideOrientation", "uMb", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "fC", "metadata"];
```

#### 3916. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29595` → after: `L29380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29380) · [Before (L29595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29595)

```diff
-       Od.position = dd.position, Od.rotation = dd.rotation, dd.rotationQuaternion && (Od.rotationQuaternion = dd.rotationQuaternion), Od.Tt = dd.Tt
+       wb.position = bb.position, wb.rotation = bb.rotation, bb.rotationQuaternion && (wb.rotationQuaternion = bb.rotationQuaternion), wb.CO = bb.CO
```

#### 3917. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29600` → after: `L29385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29385) · [Before (L29600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29600)

```diff
-         super(...md), this.ZRd = dd, this.lV = !0, dd.instances.push(this);
+         super(...Mb), this.opb = bb, this.QJ = !0, bb.instances.push(this);
```

#### 3918. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29603-L29604` → after: `L29388-L29389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29388-L29389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29388-L29389) · [Before (L29603-L29604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29603-L29604)

```diff
-         } = this.gt.model;
-         Fd.setParts(this.row, Fd.parts[dd.row]), this.partBoxes = dd.partBoxes, Fd.setVisibility(this.row, dd.visibility), Fd.setLayer(this.row, dd.renderingGroupId), Nd(dd, this), this.infiniteDistance = dd.infiniteDistance, Object.assign(this.xG, dd.xG), this.parent = dd.parent
+         } = this.FO.model;
+         Hb.setParts(this.row, Hb.parts[bb.row]), this.partBoxes = bb.partBoxes, Hb.setVisibility(this.row, bb.visibility), Hb.setLayer(this.row, bb.renderingGroupId), tb(bb, this), this.infiniteDistance = bb.infiniteDistance, Object.assign(this.hN, bb.hN), this.parent = bb.parent
```

#### 3919. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29607` → after: `L29392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29392) · [Before (L29607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29607)

```diff
-         return this.ZRd.visibility
+         return this.opb.visibility
```

#### 3920. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29611` → after: `L29396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29396) · [Before (L29611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29611)

```diff
-         return this.ZRd.renderingGroupId
+         return this.opb.renderingGroupId
```

#### 3921. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29615` → after: `L29400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29400) · [Before (L29615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29615)

```diff
-         return this.ZRd.material
+         return this.opb.material
```

#### 3922. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29620` → after: `L29405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29405) · [Before (L29620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29620)

```diff
-   38898: (dd, Od, md) => {
+   38563: (bb, wb, Mb) => {
```

#### 3923. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29623-L29624` → after: `L29409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29409) · [Before (L29623-L29624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29623-L29624)

```diff
-       g: () => vd,
-       h: () => od
+       f: () => Ub
```

#### 3924. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29626-L29628` → after: `L29411-L29413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29411-L29413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29411-L29413) · [Before (L29626-L29628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29626-L29628)

```diff
-     var Wd = md(38627),
-       Fd = md(38907),
-       Rd = md(38925);
+     var eb = Mb(38281),
+       Hb = Mb(38566),
+       pb = Mb(38593);
```

#### 3925. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29630` → after: `L29415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29415) · [Before (L29630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29630)

```diff
-       Kd = new Wd.Cq;
+       gb = new eb.YC;
```

#### 3926. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29654` → after: `L29439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29439) · [Before (L29654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29654)

```diff
-       Bdd(dd) {
+       Jbb(bb) {
```

#### 3927. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29657` → after: `L29442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29442) · [Before (L29657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29657)

```diff
-       Qhd(dd, Od, md) {
+       Flb(bb, wb, Mb) {
```

#### 3928. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29660` → after: `L29445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29445) · [Before (L29660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29660)

```diff
-       RRd() {
+       ppb() {
```

#### 3929. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29668` → after: `L29453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29453) · [Before (L29668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29668)

```diff
-         return new Wd.Cq(this.x, this.y, this.z)
+         return new eb.YC(this.x, this.y, this.z)
```

#### 3930. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29671` → after: `L29456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29456) · [Before (L29671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29671)

```diff
-         return new Wd.Cq(this.x * dd, this.y * dd, this.z * dd)
+         return new eb.YC(this.x * bb, this.y * bb, this.z * bb)
```

#### 3931. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29711` → after: `L29496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29496) · [Before (L29711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29711)

```diff
-         this.gt = dd, this.name = Od, this.uniqueId = md, this.row = void 0, this.metadata = null, this.scalingDeterminant = 1, this.cV = new Qd, this.onEffectiveEnabledStateChangedObservable = new Qd, this.Nhd = !1, this.rowPosition = void 0, this.rowScaling = void 0, this.rowRo … [truncated]
+         this.FO = bb, this.name = wb, this.uniqueId = Mb, this.row = void 0, this.metadata = null, this.scalingDeterminant = 1, this.vJ = new Ib, this.onEffectiveEnabledStateChangedObservable = new Ib, this.hlb = !1, this.rowPosition = void 0, this.rowScaling = void 0, this.rowRo … [truncated]
```

#### 3932. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29719` → after: `L29504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29504) · [Before (L29719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29719)

```diff
-         })), this.rowScaling = new hd((() => Fd.Tt), 3 * Rd, ((dd, Od, md) => {
+         })), this.rowScaling = new lb((() => Hb.CO), 3 * pb, ((bb, wb, Mb) => {
```

#### 3933. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29754` → after: `L29539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29539) · [Before (L29754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29754)

```diff
-         } = this.gt.model, md = this.row;
+         } = this.FO.model, Mb = this.row;
```

#### 3934. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29772` → after: `L29557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29557) · [Before (L29772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29772)

```diff
-         return 0 !== (this.gt.model.nodes.flags[this.row] & Rd.f.infiniteDistance)
+         return 0 !== (this.FO.model.nodes.flags[this.row] & pb.f.infiniteDistance)
```

#### 3935. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29775` → after: `L29560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29560) · [Before (L29775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29775)

```diff
-         this.gt.model.nodes.setInfiniteDistance(this.row, dd)
+         this.FO.model.nodes.setInfiniteDistance(this.row, bb)
```

#### 3936. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29782` → after: `L29567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29567) · [Before (L29782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29782)

```diff
-         this.billboard = dd, this.gt.model.nodes.setBillboard(this.row, null !== (Od = Fd.e[dd]) && void 0 !== Od ? Od : Rd.c.none)
+         this.billboard = bb, this.FO.model.nodes.setBillboard(this.row, null !== (wb = Hb.c[bb]) && void 0 !== wb ? wb : pb.d.none)
```

#### 3937. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29788` → after: `L29573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29573) · [Before (L29788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29788)

```diff
-         if (dd === this.parentNode || this.Aq) return;
+         if (bb === this.parentNode || this.BC) return;
```

#### 3938. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29790` → after: `L29575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29575) · [Before (L29790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29790)

```diff
-         this.leaveParent(), this.parentNode = dd, dd && vd(dd) && dd.children.push(this), this.gt.model.nodes.setParent(this.row, -1), (0, Fd.k)(this.gt, this, this.row), this.syncEnabled(Od)
+         this.leaveParent(), this.parentNode = bb, bb && Lb(bb) && bb.children.push(this), this.FO.model.nodes.setParent(this.row, -1), (0, Hb.i)(this.FO, this, this.row), this.syncEnabled(wb)
```

#### 3939. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29798` → after: `L29583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29583) · [Before (L29798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29798)

```diff
-         return 0 !== (this.gt.model.nodes.flags[this.row] & Rd.f.enabled) && (!dd || null === this.parentNode || this.parentNode.isEnabled())
+         return 0 !== (this.FO.model.nodes.flags[this.row] & pb.f.enabled) && (!bb || null === this.parentNode || this.parentNode.isEnabled())
```

#### 3940. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29803` → after: `L29588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29588) · [Before (L29803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29803)

```diff
-           this.gt.model.nodes.rY(this.row, dd), this.syncEnabled(Od)
+           this.FO.model.nodes.Bx(this.row, bb), this.syncEnabled(wb)
```

#### 3941. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29807` → after: `L29592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29592) · [Before (L29807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29807)

```diff
-         return this.gt.model.nodes.worldNow(this.row, this.gt.model.view, Xd), Wd.Matrix.FromArrayToRef(Xd, 0, this.Bt)
+         return this.FO.model.nodes.worldNow(this.row, this.FO.model.view, Vb), eb.Matrix.FromArrayToRef(Vb, 0, this.XO)
```

#### 3942. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29816-L29817` → after: `L29601-L29602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29601-L29602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29601-L29602) · [Before (L29816-L29817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29816-L29817)

```diff
-           Xd = Wd.Cq.TransformNormal(this.rowPosition.clone(), Rd.clone().invert()).add(dd.scale(Od));
-         return this.position = Wd.Cq.TransformNormal(Xd, Rd), this
+           Vb = eb.YC.TransformNormal(this.rowPosition.clone(), pb.clone().invert()).add(bb.scale(wb));
+         return this.position = eb.YC.TransformNormal(Vb, pb), this
```

#### 3943. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29825` → after: `L29610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29610) · [Before (L29825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29825)

```diff
-       KWd() {}
+       eeb() {}
```

#### 3944. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29828-L29829` → after: `L29613-L29614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29613-L29614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29613-L29614) · [Before (L29828-L29829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29828-L29829)

```diff
-         const md = od(this.gt, dd);
-         return this.gt.model.nodes.setWorldSource(md.row, Od), md
+         const Mb = Ub(this.FO, bb);
+         return this.FO.model.nodes.setWorldSource(Mb.row, wb), Mb
```

#### 3945. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29841` → after: `L29626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29626) · [Before (L29841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29841)

```diff
-         const dd = new Wd.Cq(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         const bb = new eb.YC(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
```

#### 3946. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29849-L29850` → after: `L29634-L29635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29634-L29635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29634-L29635) · [Before (L29849-L29850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29849-L29850)

```diff
-             } = Fd.iG();
-             Wd.Cq.CheckExtends(md.minimumWorld, dd, Od), Wd.Cq.CheckExtends(md.maximumWorld, dd, Od)
+             } = Hb.XN();
+             eb.YC.CheckExtends(Mb.minimumWorld, bb, wb), eb.YC.CheckExtends(Mb.maximumWorld, bb, wb)
```

#### 3947. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29863` → after: `L29648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29648) · [Before (L29863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29863)

```diff
-         return this.gt.zV()
+         return this.FO.RJ()
```

#### 3948. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29869` → after: `L29654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29654) · [Before (L29869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29869)

```diff
-         return this.Aq
+         return this.BC
```

#### 3949. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29874` → after: `L29659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29659) · [Before (L29874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29874)

```diff
-         if (!this.Aq) {
+         if (!this.BC) {
```

#### 3950. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29876` → after: `L29661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29661) · [Before (L29876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29876)

```diff
-           this.Aq = !0, (0, Fd.n)(this.gt, this), this.leaveParent(), this.release(), this.cV.notify(), this.cV.clear()
+           this.BC = !0, (0, Hb.k)(this.FO, this), this.leaveParent(), this.release(), this.vJ.notify(), this.vJ.clear()
```

#### 3951. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29896` → after: `L29681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29681) · [Before (L29896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29896)

```diff
-       return new td(dd, Od, dd.zV().getUniqueId())
+       return new Ob(bb, wb, bb.RJ().getUniqueId())
```

#### 3952. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29899` → after: `L29684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29684) · [Before (L29899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29899)

```diff
-   39002: (dd, Od, md) => {
+   38678: (bb, wb, Mb) => {
```

#### 3953. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29901-L29903` → after: `L29686-L29688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29686-L29688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29686-L29688) · [Before (L29901-L29903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29901-L29903)

```diff
-       e: () => Kd,
-       h: () => hd,
-       k: () => Qd,
+       c: () => gb,
+       g: () => lb,
+       j: () => Ib,
```

#### 3954. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29905` → after: `L29690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29690) · [Before (L29905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29905)

```diff
-       n: () => qd
+       m: () => Cb
```

#### 3955. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29907` → after: `L29692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29692) · [Before (L29907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29907)

```diff
-     var Wd = md(38987);
+     var eb = Mb(38668);
```

#### 3956. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29911` → after: `L29696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29696) · [Before (L29911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29911)

```diff
-     Wd.k;
+     eb.h;
```

#### 3957. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29922` → after: `L29707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29707) · [Before (L29922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29922)

```diff
-       const Xd = Wd.n;
+       const Vb = eb.l;
```

#### 3958. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29931` → after: `L29716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29716) · [Before (L29931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29931)

```diff
-         for (let Od = 0; Od < Wd.p.length; Od++) {
+         for (let wb = 0; wb < eb.m.length; wb++) {
```

#### 3959. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29933-L29934` → after: `L29718-L29719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29718-L29719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29718-L29719) · [Before (L29933-L29934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29933-L29934)

```diff
-           for (let Fd = Od + 1; Fd <= Wd.p.length; Fd++) {
-             const Rd = 1 << Wd.p[Fd - 1];
+           for (let Hb = wb + 1; Hb <= eb.m.length; Hb++) {
+             const pb = 1 << eb.m[Hb - 1];
```

#### 3960. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29939` → after: `L29724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29724) · [Before (L29939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29939)

```diff
-               Od: md
+               wb: Mb
```

#### 3961. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29948` → after: `L29733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29733) · [Before (L29948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29948)

```diff
-       const md = Wd.h[Od];
+       const Mb = eb.d[wb];
```

#### 3962. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29954` → after: `L29739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29739) · [Before (L29954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29954)

```diff
-       for (let Xd = 0; Xd < Wd.k; Xd++) Nd(dd, Xd) > 0 && (Fd |= 1 << Xd);
+       for (let Vb = 0; Vb < eb.h; Vb++) tb(bb, Vb) > 0 && (Hb |= 1 << Vb);
```

#### 3963. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29956` → after: `L29741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29741) · [Before (L29956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29956)

```diff
-       if (Od === Fd) return md[0] = 0, md[1] = dd[Wd.d], 1;
+       if (wb === Hb) return Mb[0] = 0, Mb[1] = bb[eb.c], 1;
```

#### 3964. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29966` → after: `L29751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29751) · [Before (L29966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29966)

```diff
-                 Od: dd,
+                 wb: bb,
```

#### 3965. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29971-L29972` → after: `L29756-L29757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29756-L29757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29756-L29757) · [Before (L29971-L29972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29971-L29972)

```diff
-             if ((Rd.Od & dd) === dd && Wd(Rd.Od, [Rd.start, Rd.end]), 0 !== (Rd.Od & dd))
-               for (const Od of td) Od.start < Rd.end || 0 !== (Rd.Od & Od.Od) || 0 === (Od.Od & dd) || ((Rd.Od | Od.Od) & dd) !== dd || Wd(Rd.Od | Od.Od, [Rd.start, Rd.end, Od.start, Od.end]);
+             if ((pb.wb & bb) === bb && eb(pb.wb, [pb.start, pb.end]), 0 !== (pb.wb & bb))
+               for (const wb of Ob) wb.start < pb.end || 0 !== (pb.wb & wb.wb) || 0 === (wb.wb & bb) || ((pb.wb | wb.wb) & bb) !== bb || eb(pb.wb | wb.wb, [pb.start, pb.end, wb.start, wb.end]);
```

#### 3966. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29974` → after: `L29759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29759) · [Before (L29974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29974)

```diff
-           return Od = Fd.filter((dd => !Fd.some((Od => Od !== dd && (Od.Od & dd.Od) === Od.Od && Od.windows.length <= dd.windows.length)))), od[dd] = Od, Od
+           return wb = Hb.filter((bb => !Hb.some((wb => wb !== bb && (wb.wb & bb.wb) === wb.wb && wb.windows.length <= bb.windows.length)))), Ub[bb] = wb, wb
```

#### 3967. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29977-L29978` → after: `L29762-L29763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29762-L29763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29762-L29763) · [Before (L29977-L29978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29977-L29978)

```diff
-         const hd = vd.Od & ~Od & Fd;
-         for (let Od = 0; Od < Wd.k; Od++) hd & 1 << Od && (md += Nd(dd, Od));
+         const lb = Lb.wb & ~wb & Hb;
+         for (let wb = 0; wb < eb.h; wb++) lb & 1 << wb && (Mb += tb(bb, wb));
```

#### 3968. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29989` → after: `L29774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29774) · [Before (L29989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29989)

```diff
-   38931: (dd, Od, md) => {
+   38606: (bb, wb, Mb) => {
```

#### 3969. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L29991-L29993` → after: `L29776-L29778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29776-L29778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29776-L29778) · [Before (L29991-L29993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L29991-L29993)

```diff
-       e: () => Xd,
-       f: () => vd,
-       g: () => hd
+       d: () => Vb,
+       h: () => Lb,
+       k: () => lb
```

#### 3970. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30034` → after: `L29819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29819) · [Before (L30034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30034)

```diff
-         this.Mt = void 0, this.count = 0, this.enabled = 0, this.matrices = void 0, this.attributes = void 0, this.rowStride = void 0, this.kinds = void 0, this.dH = void 0, this.stale = void 0, this.released = !1, this.matrixRow = new Float32Array(16), this.attributeRow = void 0 … [truncated]
+         this.qO = void 0, this.count = 0, this.enabled = 0, this.matrices = void 0, this.attributes = void 0, this.rowStride = void 0, this.kinds = void 0, this.JC = void 0, this.stale = void 0, this.released = !1, this.matrixRow = new Float32Array(16), this.attributeRow = void 0 … [truncated]
```

#### 3971. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30042` → after: `L29827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29827) · [Before (L30042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30042)

```diff
-         this.Mt = dd, this.kinds = md, this.rowStride = Xd, this.matrices = new Float32Array(16 * dd), this.attributes = Xd > 0 ? new Float32Array(dd * Xd) : null, this.attributeRow = new Float32Array(Xd), this.dH = new Wd(dd), this.stale = new Fd(dd), Rd++
+         this.qO = bb, this.kinds = Mb, this.rowStride = Vb, this.matrices = new Float32Array(16 * bb), this.attributes = Vb > 0 ? new Float32Array(bb * Vb) : null, this.attributeRow = new Float32Array(Vb), this.JC = new eb(bb), this.stale = new Hb(bb), pb++
```

#### 3972. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30045` → after: `L29830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29830) · [Before (L30045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30045)

```diff
-         this.dH.grow(this.Mt, dd), this.stale.grow(dd);
+         this.JC.grow(this.qO, bb), this.stale.grow(bb);
```

#### 3973. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30049` → after: `L29834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29834) · [Before (L30049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30049)

```diff
-         md && (this.attributes = new Float32Array(dd * this.rowStride), this.attributes.set(md)), this.Mt = dd
+         Mb && (this.attributes = new Float32Array(bb * this.rowStride), this.attributes.set(Mb)), this.qO = bb
```

#### 3974. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30078` → after: `L29863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29863) · [Before (L30078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30078)

```diff
-   39368: (dd, Od, md) => {
+   39054: (bb, wb, Mb) => {
```

#### 3975. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30080` → after: `L29865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29865) · [Before (L30080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30080)

```diff
-       e: () => od,
+       c: () => Ub,
```

#### 3976. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30082` → after: `L29867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29867) · [Before (L30082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30082)

```diff
-       k: () => Qd
+       i: () => Ib
```

#### 3977. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30084-L30088` → after: `L29869-L29873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29869-L29873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29869-L29873) · [Before (L30084-L30088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30084-L30088)

```diff
-     var Wd = md(38837),
-       Fd = md(38750),
-       Rd = md(38845),
-       Xd = md(38752),
-       Kd = md(38758);
+     var eb = Mb(38514),
+       Hb = Mb(38414),
+       pb = Mb(38516),
+       Vb = Mb(38419),
+       gb = Mb(38432);
```

#### 3978. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30104` → after: `L29889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29889) · [Before (L30104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30104)

```diff
-         ticksPerAnimState: Math.max(1, Od / Wd.d)
+         ticksPerAnimState: Math.max(1, wb / eb.b)
```

#### 3979. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30109` → after: `L29894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29894) · [Before (L30109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30109)

```diff
-       return `floor(${(0,Xd.Q)(dd,"animTick","uAnimTick")} / ${(0,Xd.ob)(dd,"uTicksPerAnimState")})`
+       return `floor(${(0,Vb.U)(bb,"animTick","uAnimTick")} / ${(0,Vb.sb)(bb,"uTicksPerAnimState")})`
```

#### 3980. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30115-L30116` → after: `L29900-L29901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29900-L29901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29900-L29901) · [Before (L30115-L30116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30115-L30116)

```diff
-       defines: () => (0, Fd.b)("ANIMATED"),
-       getUniforms: dd => (0, Rd.e)((0, Xd.S)(dd) ? vd : hd, "vertex", dd),
+       defines: () => (0, Hb.e)("ANIMATED"),
+       getUniforms: bb => (0, pb.e)((0, Vb.Y)(bb) ? Lb : lb, "vertex", bb),
```

#### 3981. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30118` → after: `L29903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29903) · [Before (L30118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30118)

```diff
-         dd.updateFloat("uAnimTick", (0, Wd.h)(Od)), dd.updateFloat("uAnimStatesNum", this.numAnimStates), dd.updateFloat("uTicksPerAnimState", this.ticksPerAnimState)
+         bb.updateFloat("uAnimTick", (0, eb.g)(wb)), bb.updateFloat("uAnimStatesNum", this.numAnimStates), bb.updateFloat("uTicksPerAnimState", this.ticksPerAnimState)
```

#### 3982. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30122-L30123` → after: `L29907-L29908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29907-L29908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29907-L29908) · [Before (L30122-L30123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30122-L30123)

```diff
-         const md = (0, Xd.ob)(Od, "uAnimStatesNum"),
-           Wd = (0, Xd.Ab)(Od, "vMainUV1");
+         const Mb = (0, Vb.sb)(wb, "uAnimStatesNum"),
+           eb = (0, Vb.Db)(wb, "vMainUV1");
```

#### 3983. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30125` → after: `L29910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29910) · [Before (L30125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30125)

```diff
-           CUSTOM_VERTEX_MAIN_END: `\n                ${(0,Xd.z)(Od,"float","frameTick",td(Od))}\n                ${(0,Xd.z)(Od,"float","animTexIndex",(0,Xd.Z)(Od,"frameTick",md))}\n                ${Wd}.y = (${Wd}.y + animTexIndex) / ${md};\n            `
+           CUSTOM_VERTEX_MAIN_END: `\n                ${(0,Vb.u)(wb,"float","frameTick",Ob(wb))}\n                ${(0,Vb.u)(wb,"float","animTexIndex",(0,Vb._)(wb,"frameTick",Mb))}\n                ${eb}.y = (${eb}.y + animTexIndex) / ${Mb};\n            `
```

#### 3984. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30127` → after: `L29912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29912) · [Before (L30127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30127)

```diff
-           [(0, Xd.A)(Od)]: `baseColor = ${(0,Xd.bb)(Od,"diffuseSampler",(0,Xd.O)(Od,"vMainUV1"))};`
+           [(0, Vb.y)(wb)]: `baseColor = ${(0,Vb.cb)(wb,"diffuseSampler",(0,Vb.R)(wb,"vMainUV1"))};`
```

#### 3985. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30131` → after: `L29916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29916) · [Before (L30131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30131)

```diff
-     (0, Kd.m)(od)
+     (0, gb.j)(Ub)
```

#### 3986. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30133` → after: `L29918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29918) · [Before (L30133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30133)

```diff
-   39567: (dd, Od, md) => {
+   39254: (bb, wb, Mb) => {
```

#### 3987. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30135` → after: `L29920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29920) · [Before (L30135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30135)

```diff
-       c: () => vd
+       e: () => Lb
```

#### 3988. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30137-L30141` → after: `L29922-L29926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29922-L29926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29922-L29926) · [Before (L30137-L30141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30137-L30141)

```diff
-     var Wd = md(38856),
-       Fd = md(38750),
-       Rd = md(38845),
-       Xd = md(38752),
-       Kd = md(38758);
+     var eb = Mb(38526),
+       Hb = Mb(38414),
+       pb = Mb(38516),
+       Vb = Mb(38419),
+       gb = Mb(38432);
```

#### 3989. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30150` → after: `L29935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29935) · [Before (L30150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30150)

```diff
-         defines: () => (0, Fd.b)("ARMOUR"),
+         defines: () => (0, Hb.e)("ARMOUR"),
```

#### 3990. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30161` → after: `L29946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29946) · [Before (L30161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30161)

```diff
-             const dd = (0, Xd.Ab)(Od, "vMainUV1");
+             const bb = (0, Vb.Db)(wb, "vMainUV1");
```

#### 3991. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30163-L30164` → after: `L29948-L29949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29948-L29949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29948-L29949) · [Before (L30163-L30164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30163-L30164)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Xd.f)(Od,"aAtlasIdx1","float","highp")}\n\t\t\t\t\t${(0,Xd.f)(Od,"aArmourTint","vec4","lowp")}\n\n\t\t\t\t\t${(0,Wd.bb)(Od)}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${dd}.x = (${dd}.x + ${(0,Xd.wb)(Od,"aAtlasIdx1")}) / ${(0,Xd.ob)(Od,"uArmourAtlasTexNum")};\n\t\t\t\t\t${(0,Xd.eb)(Od,(0,Xd.Ab)(Od,"vTintAndOpacity"),`${(0,Xd.wb)(Od,"aArmourTint")}.xyz`)}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Vb.d)(wb,"aAtlasIdx1","float","highp")}\n\t\t\t\t\t${(0,Vb.d)(wb,"aArmourTint","vec4","lowp")}\n\n\t\t\t\t\t${(0,eb.ib)(wb)}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${bb}.x = (${bb}.x + ${(0,Vb.zb)(wb,"aAtlasIdx1")}) / ${(0,Vb.sb)(wb,"uArmourAtlasTexNum")};\n\t\t\t\t\t${(0,Vb.gb)(wb,(0,Vb.Db)(wb,"vTintAndOpacity"),`${(0,Vb.zb)(wb,"aArmourTint")}.xyz`)}\n\t\t\t\t`
```

#### 3992. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30168-L30169` → after: `L29953-L29954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29953-L29954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29953-L29954) · [Before (L30168-L30169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30168-L30169)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Wd.bb)(Od)}\n\t\t\t\t`,
-             [(0, Xd.A)(Od)]: `\n\t\t\t\t\t${(0,Xd.z)(Od,"vec4","col1",(0,Xd.bb)(Od,"diffuseSampler",(0,Xd.O)(Od,"vMainUV1")))}\n\t\t\t\t\tbaseColor = ${(0,Xd.l)(Od,"vec4",`col1.rgb * ${(0,Xd.O)(Od,"vTintAndOpacity")}.xyz`,"col1.a")};\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,eb.ib)(wb)}\n\t\t\t\t`,
+             [(0, Vb.y)(wb)]: `\n\t\t\t\t\t${(0,Vb.u)(wb,"vec4","col1",(0,Vb.cb)(wb,"diffuseSampler",(0,Vb.R)(wb,"vMainUV1")))}\n\t\t\t\t\tbaseColor = ${(0,Vb.j)(wb,"vec4",`col1.rgb * ${(0,Vb.R)(wb,"vTintAndOpacity")}.xyz`,"col1.a")};\n\t\t\t\t`
```

#### 3993. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30172-L30176` → after: `L29957-L29961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29957-L29961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29957-L29961) · [Before (L30172-L30176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30172-L30176)

```diff
-         Jq() {
-           const dd = Xd.e.WGSL,
-             Od = (0, Xd.ob)(dd, "uArmourAtlasTexNum"),
-             md = (0, Xd.O)(dd, "vMainUV1"),
-             Wd = `${md}.x * ${Od}`;
+         LC() {
+           const bb = Vb.b.WGSL,
+             wb = (0, Vb.sb)(bb, "uArmourAtlasTexNum"),
+             Mb = (0, Vb.R)(bb, "vMainUV1"),
+             eb = `${Mb}.x * ${wb}`;
```

#### 3994. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30179-L30181` → after: `L29964-L29966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29964-L29966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29964-L29966) · [Before (L30179-L30181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30179-L30181)

```diff
-               cells: `vec2f(${Od}, 1.0)`,
-               layers: [`floor(${Wd})`],
-               uv: `vec2f(fract(${Wd}), ${md}.y)`,
+               cells: `vec2f(${wb}, 1.0)`,
+               layers: [`floor(${eb})`],
+               uv: `vec2f(fract(${eb}), ${Mb}.y)`,
```

#### 3995. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30184` → after: `L29969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29969) · [Before (L30184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30184)

```diff
-             enchantTier: `${(0,Xd.wb)(dd,"aArmourTint")}.w`
+             enchantTier: `${(0,Vb.zb)(bb,"aArmourTint")}.w`
```

#### 3996. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30188` → after: `L29973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29973) · [Before (L30188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30188)

```diff
-     (0, Kd.m)(vd)
+     (0, gb.j)(Lb)
```

#### 3997. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30190` → after: `L29975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29975) · [Before (L30190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30190)

```diff
-   39371: (dd, Od, md) => {
+   39056: (bb, wb, Mb) => {
```

#### 3998. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30192` → after: `L29977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29977) · [Before (L30192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30192)

```diff
-       e: () => od,
+       c: () => Ub,
```

#### 3999. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30194` → after: `L29979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29979) · [Before (L30194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30194)

```diff
-       h: () => pd
+       i: () => mb
```

#### 4000. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30196-L30201` → after: `L29981-L29986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29981-L29986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29981-L29986) · [Before (L30196-L30201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30196-L30201)

```diff
-     var Wd = md(38856),
-       Fd = md(38750),
-       Rd = md(38845),
-       Xd = md(38752),
-       Kd = md(38837),
-       hd = md(38758);
+     var eb = Mb(38526),
+       Hb = Mb(38414),
+       pb = Mb(38516),
+       Vb = Mb(38419),
+       gb = Mb(38514),
+       lb = Mb(38432);
```

#### 4001. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30206` → after: `L29991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29991) · [Before (L30206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30206)

```diff
-       const Od = (0, Xd.l)(dd, "vec3", (0, Xd.wb)(dd, "texAtlasIndices")),
+       const wb = (0, Vb.j)(bb, "vec3", (0, Vb.zb)(bb, "texAtlasIndices")),
```

#### 4002. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30209-L30210` → after: `L29994-L29995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29994-L29995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29994-L29995) · [Before (L30209-L30210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30209-L30210)

```diff
-           const Rd = (0, Xd.l)(dd, "vec3", ...Wd);
-           return (0, Xd.l)(dd, "vec3", (0, Xd.F)(dd, `equal(${Od}, ${Rd})`, `${Od} == ${Rd}`))
+           const pb = (0, Vb.j)(bb, "vec3", ...eb);
+           return (0, Vb.j)(bb, "vec3", (0, Vb.D)(bb, `equal(${wb}, ${pb})`, `${wb} == ${pb}`))
```

#### 4003. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30212-L30213` → after: `L29997-L29998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R29997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L29997-L29998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L29997-L29998) · [Before (L30212-L30213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30212-L30213)

```diff
-         Wd = [`dot(${(0,Xd.wb)(dd,"aAtlasIdxFaces012")}, ${md("0.0","1.0","2.0")})`, `dot(${(0,Xd.wb)(dd,"aAtlasIdxFaces345")}, ${md("3.0","4.0","5.0")})`].join(" + ");
-       return `\n                    #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                        ${(0,Xd.z)(dd,"float","atlasIdxIn",Wd,"highp")}\n                    #else\n                        ${(0,Xd.z)(dd,"float","atlasIdxIn",(0,Xd.wb)(dd,"texAtlasIndices"),"highp")}\n          … [truncated]
+         eb = [`dot(${(0,Vb.zb)(bb,"aAtlasIdxFaces012")}, ${Mb("0.0","1.0","2.0")})`, `dot(${(0,Vb.zb)(bb,"aAtlasIdxFaces345")}, ${Mb("3.0","4.0","5.0")})`].join(" + ");
+       return `\n                    #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                        ${(0,Vb.u)(bb,"float","atlasIdxIn",eb,"highp")}\n                    #else\n                        ${(0,Vb.u)(bb,"float","atlasIdxIn",(0,Vb.zb)(bb,"texAtlasIndices"),"highp")}\n          … [truncated]
```

#### 4004. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30219-L30220` → after: `L30004-L30005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30004-L30005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30004-L30005) · [Before (L30219-L30220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30219-L30220)

```diff
-         layers: null !== (Od = dd.imagesPerAtlas[0]) && void 0 !== Od ? Od : Qd,
-         width: null !== (md = dd.atlasTexelWidth) && void 0 !== md ? md : vd
+         layers: null !== (wb = bb.imagesPerAtlas[0]) && void 0 !== wb ? wb : Ib,
+         width: null !== (Mb = bb.atlasTexelWidth) && void 0 !== Mb ? Mb : Lb
```

#### 4005. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30229` → after: `L30014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30014) · [Before (L30229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30229)

```diff
-       return dd.useWebGL2 && Od > 1 && (0, Xd.S)(md)
+       return bb.useWebGL2 && wb > 1 && (0, Vb.Y)(Mb)
```

#### 4006. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30235-L30237` → after: `L30020-L30022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30020-L30022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30020-L30022) · [Before (L30235-L30237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30235-L30237)

```diff
-       const Fd = (0, Wd.cb)(null !== (md = dd.atlasTexelWidth) && void 0 !== md ? md : vd),
-         Rd = (0, Xd.O)(Od, "vDiffuseUV");
-       return `\n                        ${(0,Xd.z)(Od,"vec2","atlasTexelUV",`${Rd} * ${Fd}`)}\n                        ${(0,Xd.z)(Od,"vec2","atlasDdx",(0,Xd.n)(Od,"atlasTexelUV"))}\n                        ${(0,Xd.z)(Od,"vec2","atlasDdy",(0,Xd.o)(Od,"atlasTexelUV"))}\n            … [truncated]
+       const Hb = (0, eb.mb)(null !== (Mb = bb.atlasTexelWidth) && void 0 !== Mb ? Mb : Lb),
+         pb = (0, Vb.R)(wb, "vDiffuseUV");
+       return `\n                        ${(0,Vb.u)(wb,"vec2","atlasTexelUV",`${pb} * ${Hb}`)}\n                        ${(0,Vb.u)(wb,"vec2","atlasDdx",(0,Vb.l)(wb,"atlasTexelUV"))}\n                        ${(0,Vb.u)(wb,"vec2","atlasDdy",(0,Vb.m)(wb,"atlasTexelUV"))}\n            … [truncated]
```

#### 4007. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30241-L30242` → after: `L30026-L30027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30026-L30027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30026-L30027) · [Before (L30241-L30242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30241-L30242)

```diff
-       const Kd = `textureAtlas${md}`,
-         hd = (0, Xd.O)(Od, "vDiffuseUV"),
+       const gb = `textureAtlas${Mb}`,
+         lb = (0, Vb.R)(wb, "vDiffuseUV"),
```

#### 4008. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30244-L30247` → after: `L30029-L30032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30029-L30032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30029-L30032) · [Before (L30244-L30247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30244-L30247)

```diff
-         Qd = md > 0 ? `${Rd} - ${Wd[0].toFixed(1)} * ${md.toFixed(1)}` : Rd;
-       if (dd.useWebGL2) return (0, Xd.$)(Od, Kd, hd, Qd, vd);
-       const td = dd.greedyMeshed ? `vec2(${hd}.x, (fract(${hd}.y) + floor(${Qd} + 0.5)) / ${Wd[md].toFixed(1)})` : Fd > 1 ? `${hd} - vec2(0.0, ${md.toFixed(1)})` : hd;
-       return (0, Xd.bb)(Od, Kd, td)
+         Ib = Mb > 0 ? `${pb} - ${eb[0].toFixed(1)} * ${Mb.toFixed(1)}` : pb;
+       if (bb.useWebGL2) return (0, Vb.bb)(wb, gb, lb, Ib, Lb);
+       const Ob = bb.greedyMeshed ? `vec2(${lb}.x, (fract(${lb}.y) + floor(${Ib} + 0.5)) / ${eb[Mb].toFixed(1)})` : Hb > 1 ? `${lb} - vec2(0.0, ${Mb.toFixed(1)})` : lb;
+       return (0, Vb.cb)(wb, gb, Ob)
```

#### 4009. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30252` → after: `L30037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30037) · [Before (L30252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30252)

```diff
-       return 1 === Fd ? `baseColor = ${yd(dd,Od,0,Wd,1,md)};` : Wd.map(((Rd, Xd) => `\n                        if (${md} < ${Wd[0]*(Xd+1)-.5}) {\n                            baseColor = ${yd(dd,Od,Xd,Wd,Fd,md)};\n                        }${Xd+1<Fd?" else ":""}`)).join("")
+       return 1 === Hb ? `baseColor = ${Fb(bb,wb,0,eb,1,Mb)};` : eb.map(((pb, Vb) => `\n                        if (${Mb} < ${eb[0]*(Vb+1)-.5}) {\n                            baseColor = ${Fb(bb,wb,Vb,eb,Hb,Mb)};\n                        }${Vb+1<Hb?" else ":""}`)).join("")
```

#### 4010. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30256` → after: `L30041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30041) · [Before (L30256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30256)

```diff
-       return `\n                    ${(0,Xd.z)(dd,"float","animParamIndex","3.0 * min(numAnimTextures, floor(atlasIdxIn))")}\n                    ${(0,Xd.z)(dd,"float","animStateMask",Od((0,Xd.mb)(dd,"animParamIndex")))}\n                    ${(0,Xd.z)(dd,"float","animTexIndexSta … [truncated]
+       return `\n                    ${(0,Vb.u)(bb,"float","animParamIndex","3.0 * min(numAnimTextures, floor(atlasIdxIn))")}\n                    ${(0,Vb.u)(bb,"float","animStateMask",wb((0,Vb.ob)(bb,"animParamIndex")))}\n                    ${(0,Vb.u)(bb,"float","animTexIndexSta … [truncated]
```

#### 4011. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30263` → after: `L30048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30048) · [Before (L30263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30263)

```diff
-         ...(0, Fd.b)("ATLAS_TEXTURE"),
+         ...(0, Hb.e)("ATLAS_TEXTURE"),
```

#### 4012. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30271` → after: `L30056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30056) · [Before (L30271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30271)

```diff
-         for (let Od = 0; Od < this.textureAtlases.length; Od++) dd.push(`textureAtlas${Od}`)
+         for (let wb = 0; wb < this.textureAtlases.length; wb++) bb.push(`textureAtlas${wb}`)
```

#### 4013. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30293-L30294` → after: `L30078-L30079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30078-L30079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30078-L30079) · [Before (L30293-L30294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30293-L30294)

```diff
-           if (this.textureAtlases[Wd]) dd.setTexture(`textureAtlas${Wd}`, this.textureAtlases[Wd]);
-           else null === (md = dd.expectTexture) || void 0 === md || md.call(dd, `textureAtlas${Wd}`)
+           if (this.textureAtlases[eb]) bb.setTexture(`textureAtlas${eb}`, this.textureAtlases[eb]);
+           else null === (Mb = bb.expectTexture) || void 0 === Mb || Mb.call(bb, `textureAtlas${eb}`)
```

#### 4014. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30296` → after: `L30081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30081) · [Before (L30296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30296)

```diff
-         this.animDataPerTex && (this.animData.x = (0, Kd.h)(Od), dd.updateVector3("uAnimData", this.animData))
+         this.animDataPerTex && (this.animData.x = (0, gb.g)(wb), bb.updateVector3("uAnimData", this.animData))
```

#### 4015. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30305` → after: `L30090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30090) · [Before (L30305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30305)

```diff
-             return null !== (md = this.imagesPerAtlas[Od]) && void 0 !== md ? md : Qd
+             return null !== (Mb = this.imagesPerAtlas[wb]) && void 0 !== Mb ? Mb : Ib
```

#### 4016. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30307-L30310` → after: `L30092-L30095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30092-L30095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30092-L30095) · [Before (L30307-L30310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30307-L30310)

```diff
-           Fd = md.map(((dd, md) => (0, Xd.jb)(Od, `textureAtlas${md}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
-           Rd = (0, Xd.ob)(Od, "uAnimData"),
-           Kd = (0, Xd.ob)(Od, "uAnimDataPerTex"),
-           hd = (0, Xd.g)(Od),
+           Hb = Mb.map(((bb, Mb) => (0, Vb.kb)(wb, `textureAtlas${Mb}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
+           pb = (0, Vb.sb)(wb, "uAnimData"),
+           gb = (0, Vb.sb)(wb, "uAnimDataPerTex"),
+           lb = (0, Vb.e)(wb),
```

#### 4017. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30312-L30313` → after: `L30097-L30098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30097-L30098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30097-L30098) · [Before (L30312-L30313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30312-L30313)

```diff
-             const Od = (0, Xd.qb)(dd, "texAtlasIndex", "float", "mediump");
-             return (0, Xd.S)(dd) ? Od : `#ifdef WEBGL2\nflat ${(0,Xd.qb)(dd,"texAtlasIndex","float","highp")}\n#else\n${Od}\n#endif`
+             const wb = (0, Vb.vb)(bb, "texAtlasIndex", "float", "mediump");
+             return (0, Vb.Y)(bb) ? wb : `#ifdef WEBGL2\nflat ${(0,Vb.vb)(bb,"texAtlasIndex","float","highp")}\n#else\n${wb}\n#endif`
```

#### 4018. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30315` → after: `L30100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30100) · [Before (L30315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30315)

```diff
-           od = (0, Xd.O)(Od, "texAtlasIndex");
+           Ub = (0, Vb.R)(wb, "texAtlasIndex");
```

#### 4019. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30318-L30319` → after: `L30103-L30104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30103-L30104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30103-L30104) · [Before (L30318-L30319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30318-L30319)

```diff
-           CUSTOM_VERTEX_MAIN_BEGIN: td(Od) + (this.animDataPerTex ? `\n                    ${(0,Xd.z)(Od,"float","animTick",(0,Xd.Q)(Od,"animTick",`${Rd}.x`))}\n                    ${(0,Xd.z)(Od,"float","animTickStride",`${Rd}.y`)}\n                    ${(0,Xd.z)(Od,"float","numA … [truncated]
-           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,Xd.S)(Od)?"":Fd}\n                ${(0,Xd.f)(Od,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,Xd.f)(Od,"aAtlasIdxFaces012","vec3","highp")}\n            … [truncated]
+           CUSTOM_VERTEX_MAIN_BEGIN: Ob(wb) + (this.animDataPerTex ? `\n                    ${(0,Vb.u)(wb,"float","animTick",(0,Vb.U)(wb,"animTick",`${pb}.x`))}\n                    ${(0,Vb.u)(wb,"float","animTickStride",`${pb}.y`)}\n                    ${(0,Vb.u)(wb,"float","numA … [truncated]
+           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,Vb.Y)(wb)?"":Hb}\n                ${(0,Vb.d)(wb,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,Vb.d)(wb,"aAtlasIdxFaces012","vec3","highp")}\n            … [truncated]
```

#### 4020. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30322-L30323` → after: `L30107-L30108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30107-L30108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30107-L30108) · [Before (L30322-L30323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30322-L30323)

```diff
-           [(0, Xd.A)(Od)]: `${Hd(this,Od)}${bd(this,Od,od,Wd)}`,
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${Fd}\n                ${vd}\n            `
+           [(0, Vb.y)(wb)]: `${Eb(this,wb)}${Bb(this,wb,Ub,eb)}`,
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${Hb}\n                ${Lb}\n            `
```

#### 4021. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30327` → after: `L30112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30112) · [Before (L30327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30327)

```diff
-     (0, hd.m)(pd)
+     (0, lb.j)(mb)
```

#### 4022. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30329` → after: `L30114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30114) · [Before (L30329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30329)

```diff
-   39395: (dd, Od, md) => {
+   39079: (bb, wb, Mb) => {
```

#### 4023. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30334` → after: `L30118-L30119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30118-L30119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30118-L30119) · [Before (L30334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30334)

```diff
-       i: () => td
+       i: () => Eb,
+       m: () => Ob
```

#### 4024. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30336-L30341` → after: `L30121-L30126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30121-L30126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30121-L30126) · [Before (L30336-L30341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30336-L30341)

```diff
-     var Wd = md(38856),
-       Fd = md(38750),
-       Rd = md(38845),
-       Xd = md(38752),
-       Kd = md(38758),
-       hd = md(38756);
+     var eb = Mb(38526),
+       Hb = Mb(38414),
+       pb = Mb(38516),
+       Vb = Mb(38419),
+       gb = Mb(38432),
+       lb = Mb(38424);
```

#### 4025. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30357` → after: `L30142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30142) · [Before (L30357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30357)

```diff
-       return `${dd}.r > 0.0 || ${dd}.g > 0.0 || ${dd}.b > 0.0`
+       return `${bb}.r > 0.0 || ${bb}.g > 0.0 || ${bb}.b > 0.0`
```

#### 4026. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30361-L30363` → after: `L30146-L30148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30146-L30148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30146-L30148) · [Before (L30361-L30363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30361-L30363)

```diff
-       const Fd = (Od, md) => (0, Xd.z)(dd, "float", Od, md),
-         Rd = (Od, md) => (0, Xd.z)(dd, "vec3", Od, md);
-       return `\n\t\t${Rd("localPos",`rotationY(${Od}.w) * ${md}.xyz`)}\n\t\t${Fd("tickVal",`${md}.w / 1000.0`)}\n\t\t${Fd("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${Fd("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${Fd("totalMix","mix1 * 0.7 … [truncated]
+       const Hb = (wb, Mb) => (0, Vb.u)(bb, "float", wb, Mb),
+         pb = (wb, Mb) => (0, Vb.u)(bb, "vec3", wb, Mb);
+       return `\n\t\t${pb("localPos",`rotationY(${wb}.w) * ${Mb}.xyz`)}\n\t\t${Hb("tickVal",`${Mb}.w / 1000.0`)}\n\t\t${Hb("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${Hb("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${Hb("totalMix","mix1 * 0.7 … [truncated]
```

#### 4027. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30367-L30369` → after: `L30152-L30154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30152-L30154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30152-L30154) · [Before (L30367-L30369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30367-L30369)

```diff
-       const Od = (0, Xd.O)(dd, "vEnchantRgbAndRotY"),
-         md = (0, Xd.O)(dd, "vPositionAndAnimTick");
-       return `\n\t\t\n\t\tif (${Nd(Od)}) {\n\t\t\t${qd(dd,Od,md,"baseColor.xyz")}\n\t\t\t${(0,Xd.eb)(dd,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
+       const wb = (0, Vb.R)(bb, "vEnchantRgbAndRotY"),
+         Mb = (0, Vb.R)(bb, "vPositionAndAnimTick");
+       return `\n\t\t\n\t\tif (${tb(wb)}) {\n\t\t\t${Cb(bb,wb,Mb,"baseColor.xyz")}\n\t\t\t${(0,Vb.gb)(bb,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
```

#### 4028. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30373` → after: `L30158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30158) · [Before (L30373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30373)

```diff
-       return `fn ${dd}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${Nd("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${qd(Xd.e.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
+       return `fn ${bb}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${tb("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${Cb(Vb.b.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
```

#### 4029. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30380` → after: `L30165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30165) · [Before (L30380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30380)

```diff
-         ...(0, Fd.b)("ENCHANTMENT"),
+         ...(0, Hb.e)("ENCHANTMENT"),
```

#### 4030. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30391` → after: `L30176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30176) · [Before (L30391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30391)

```diff
-         if (!Qd.pH()) {
+         if (!Ib.eE()) {
```

#### 4031. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30398` → after: `L30183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30183) · [Before (L30398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30398)

```diff
-       getUniforms: dd => (0, Xd.S)(dd) ? {} : (0, Rd.e)(vd, "vertex", dd),
+       getUniforms: bb => (0, Vb.Y)(bb) ? {} : (0, pb.e)(Lb, "vertex", bb),
```

#### 4032. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30401-L30405` → after: `L30186-L30190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30186-L30190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30186-L30190) · [Before (L30401-L30405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30401-L30405)

```diff
-           const dd = (0, Xd.Q)(Od, "timeMs", "uAnimTick"),
-             md = (0, Xd.wb)(Od, "aEnchantmentSpeed"),
-             Wd = (0, Xd.wb)(Od, "aEnchantmentColour"),
-             Fd = (0, Xd.Ab)(Od, "vEnchantRgbAndRotY"),
-             Rd = (0, Xd.Ab)(Od, "vPositionAndAnimTick");
+           const bb = (0, Vb.U)(wb, "timeMs", "uAnimTick"),
+             Mb = (0, Vb.zb)(wb, "aEnchantmentSpeed"),
+             eb = (0, Vb.zb)(wb, "aEnchantmentColour"),
+             Hb = (0, Vb.Db)(wb, "vEnchantRgbAndRotY"),
+             pb = (0, Vb.Db)(wb, "vPositionAndAnimTick");
```

#### 4033. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30407-L30408` → after: `L30192-L30193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30192-L30193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30192-L30193) · [Before (L30407-L30408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30407-L30408)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Xd.f)(Od,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,Xd.f)(Od,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,Xd.f)(Od,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,Xd. … [truncated]
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${Fd} = ${(0,Xd.l)(Od,"vec4",Wd,`${(0,Xd.wb)(Od,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,Xd.eb)(Od,Rd,`worldPos.xyz - ${(0,Xd.wb)(Od,"aPosition")} + ${(0,Xd.wb)(Od,"aOffset")}`) … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Vb.d)(wb,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,Vb.d)(wb,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,Vb.d)(wb,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,Vb. … [truncated]
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${Hb} = ${(0,Vb.j)(wb,"vec4",eb,`${(0,Vb.zb)(wb,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,Vb.gb)(wb,pb,`worldPos.xyz - ${(0,Vb.zb)(wb,"aPosition")} + ${(0,Vb.zb)(wb,"aOffset")}`) … [truncated]
```

#### 4034. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30412-L30414` → after: `L30197-L30199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30197-L30199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30197-L30199) · [Before (L30412-L30414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30412-L30414)

```diff
-           const dd = (dd, md) => (0, Xd.z)(Od, "float", dd, md),
-             md = (dd, md) => (0, Xd.z)(Od, "vec3", dd, md),
-             Fd = (dd, md) => (0, Xd.z)(Od, "vec4", dd, md);
+           const bb = (bb, Mb) => (0, Vb.u)(wb, "float", bb, Mb),
+             Mb = (bb, Mb) => (0, Vb.u)(wb, "vec3", bb, Mb),
+             Hb = (bb, Mb) => (0, Vb.u)(wb, "vec4", bb, Mb);
```

#### 4035. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30416` → after: `L30201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30201) · [Before (L30416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30416)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Xd.qb)(Od,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,Xd.qb)(Od,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,Xd.s)(Od,"float","GOLDEN_RATIO",(0,Wd.cb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,Xd.s)(Od," … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Vb.vb)(wb,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,Vb.vb)(wb,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,Vb.n)(wb,"float","GOLDEN_RATIO",(0,eb.mb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,Vb.n)(wb," … [truncated]
```

#### 4036. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30421` → after: `L30206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30206) · [Before (L30421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30421)

```diff
-               (0, Xd.fb)(Od, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
+               (0, Vb.ib)(wb, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
```

#### 4037. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30423` → after: `L30208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30208) · [Before (L30423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30423)

```diff
-               md("Pi", `floor(P + dot(P, ${(0,Xd.l)(Od,"vec3","SKEWFACTOR")}))`)
+               Mb("Pi", `floor(P + dot(P, ${(0,Vb.j)(wb,"vec3","SKEWFACTOR")}))`)
```

#### 4038. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30426` → after: `L30211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30211) · [Before (L30426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30426)

```diff
-               md("x0", `P - Pi + dot(Pi, ${(0,Xd.l)(Od,"vec3","UNSKEWFACTOR")})`)
+               Mb("x0", `P - Pi + dot(Pi, ${(0,Vb.j)(wb,"vec3","UNSKEWFACTOR")})`)
```

#### 4039. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30450` → after: `L30235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30235) · [Before (L30450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30450)

```diff
-               Fd("v1234_x", (0, Xd.l)(Od, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
+               Hb("v1234_x", (0, Vb.j)(wb, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
```

#### 4040. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30453` → after: `L30238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30238) · [Before (L30453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30453)

```diff
-               Fd("v1234_y", (0, Xd.l)(Od, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
+               Hb("v1234_y", (0, Vb.j)(wb, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
```

#### 4041. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30456` → after: `L30241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30241) · [Before (L30456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30456)

```diff
-               Fd("v1234_z", (0, Xd.l)(Od, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
+               Hb("v1234_z", (0, Vb.j)(wb, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
```

#### 4042. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30459` → after: `L30244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30244) · [Before (L30459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30459)

```diff
-               md("Pi_inc1", `step(Pi, ${(0,Xd.l)(Od,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
+               Mb("Pi_inc1", `step(Pi, ${(0,Vb.j)(wb,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
```

#### 4043. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30462` → after: `L30247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30247) · [Before (L30462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30462)

```diff
-               Fd("Pt", `${(0,Xd.l)(Od,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,Xd.l)(Od,"vec2","50.0","161.0")}.xyxy`)
+               Hb("Pt", `${(0,Vb.j)(wb,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,Vb.j)(wb,"vec2","50.0","161.0")}.xyxy`)
```

#### 4044. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30465` → after: `L30250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30250) · [Before (L30465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30465)

```diff
-               Fd("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,Xd.l)(Od,"vec4","Pi_1.xy","Pi_2.xy")})`)
+               Hb("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,Vb.j)(wb,"vec4","Pi_1.xy","Pi_2.xy")})`)
```

#### 4045. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30468` → after: `L30253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30253) · [Before (L30468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30468)

```diff
-               (0, Xd.l)(Od, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
+               (0, Vb.j)(wb, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
```

#### 4046. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30470` → after: `L30255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30255) · [Before (L30470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30470)

```diff
-               (0, Xd.l)(Od, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
+               (0, Vb.j)(wb, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
```

#### 4047. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30472` → after: `L30257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30257) · [Before (L30472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30472)

```diff
-               (0, Xd.s)(Od, "vec3", "SOMELARGEFLOATS", (0, Xd.l)(Od, "vec3", "635.298681", "682.357502", "668.926525"))
+               (0, Vb.n)(wb, "vec3", "SOMELARGEFLOATS", (0, Vb.j)(wb, "vec3", "635.298681", "682.357502", "668.926525"))
```

#### 4048. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30475` → after: `L30260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30260) · [Before (L30475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30475)

```diff
-               (0, Xd.s)(Od, "vec3", "ZINC", (0, Xd.l)(Od, "vec3", "48.500388", "65.294118", "63.934599"))
+               (0, Vb.n)(wb, "vec3", "ZINC", (0, Vb.j)(wb, "vec3", "48.500388", "65.294118", "63.934599"))
```

#### 4049. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30484` → after: `L30269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30269) · [Before (L30484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30484)

```diff
-               (0, Xd.fb)(Od, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
+               (0, Vb.ib)(wb, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
```

#### 4050. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30486` → after: `L30271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30271) · [Before (L30486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30486)

```diff
-               (0, Xd.fb)(Od, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
+               (0, Vb.ib)(wb, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
```

#### 4051. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30488` → after: `L30273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30273) · [Before (L30488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30488)

```diff
-               Fd("hash_0", `fract( Pt * ${(0,Xd.l)(Od,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
+               Hb("hash_0", `fract( Pt * ${(0,Vb.j)(wb,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
```

#### 4052. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30491` → after: `L30276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30276) · [Before (L30491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30491)

```diff
-               Fd("hash_1", `fract( Pt * ${(0,Xd.l)(Od,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
+               Hb("hash_1", `fract( Pt * ${(0,Vb.j)(wb,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
```

#### 4053. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30494` → after: `L30279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30279) · [Before (L30494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30494)

```diff
-               Fd("hash_2", `fract( Pt * ${(0,Xd.l)(Od,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
+               Hb("hash_2", `fract( Pt * ${(0,Vb.j)(wb,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
```

#### 4054. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30497` → after: `L30282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30282) · [Before (L30497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30497)

```diff
-               Fd("grad_results", `${(0,Xd.R)(Od,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
+               Hb("grad_results", `${(0,Vb.X)(wb,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
```

#### 4055. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30500` → after: `L30285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30285) · [Before (L30500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30500)

```diff
-               (0, Xd.s)(Od, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
+               (0, Vb.n)(wb, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
```

#### 4056. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30506-L30507` → after: `L30291-L30292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30291-L30292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30291-L30292) · [Before (L30506-L30507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30506-L30507)

```diff
-               (0, Xd.l)(Od, "vec4", "0.0")
-             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,Xd.t)(Od,"mat3","rotationY",[{name:"y",type:" … [truncated]
+               (0, Vb.j)(wb, "vec4", "0.0")
+             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,Vb.r)(wb,"mat3","rotationY",[{name:"y",type:" … [truncated]
```

#### 4057. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30509-L30510` → after: `L30294-L30295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30294-L30295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30294-L30295) · [Before (L30509-L30510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30509-L30510)

```diff
-               (0, Xd.l)(Od, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
-             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,Xd.t)(Od,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
+               (0, Vb.j)(wb, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
+             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,Vb.r)(wb,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
```

#### 4058. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30514` → after: `L30299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30299) · [Before (L30514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30514)

```diff
-             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,Xd.t)(Od,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
+             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,Vb.r)(wb,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
```

#### 4059. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30522` → after: `L30307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30307) · [Before (L30522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30522)

```diff
-               dd("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,Xd.l)(Od,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,Xd.l)(Od,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
+               bb("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,Vb.j)(wb,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,Vb.j)(wb,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
```

#### 4060. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30525` → after: `L30310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30310) · [Before (L30525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30525)

```diff
-               dd("sawtooth", (0, Xd.Z)(Od, "intersection - loopedTickVal", "1.0"))
+               bb("sawtooth", (0, Vb._)(wb, "intersection - loopedTickVal", "1.0"))
```

#### 4061. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30528` → after: `L30313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30313) · [Before (L30528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30528)

```diff
-               md("noisePos", `localPos * 4.0 - ${(0,Xd.l)(Od,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
+               Mb("noisePos", `localPos * 4.0 - ${(0,Vb.j)(wb,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
```

#### 4062. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30539` → after: `L30324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30324) · [Before (L30539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30539)

```diff
-             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,hd.b)(Od,"enchantment")}\n\t\t\t\t`,
+             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,lb.b)(wb,"enchantment")}\n\t\t\t\t`,
```

#### 4063. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30546` → after: `L30331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30331) · [Before (L30546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30546)

```diff
-     (0, Kd.m)(bd)
+     (0, gb.j)(Bb)
```

#### 4064. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30548` → after: `L30333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30333) · [Before (L30548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30548)

```diff
-   38869: (dd, Od, md) => {
+   38542: (bb, wb, Mb) => {
```

#### 4065. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30550-L30553` → after: `L30335-L30338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30335-L30338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30335-L30338) · [Before (L30550-L30553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30550-L30553)

```diff
-       e: () => td,
-       h: () => Hd,
-       j: () => qd,
-       l: () => od
+       b: () => Ob,
+       c: () => Eb,
+       d: () => Cb,
+       e: () => Ub
```

#### 4066. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30555-L30562` → after: `L30340-L30347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30340-L30347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30340-L30347) · [Before (L30555-L30562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30555-L30562)

```diff
-     var Wd = md(38856),
-       Fd = md(38877),
-       Rd = md(38884),
-       Xd = md(38750),
-       Kd = md(38845),
-       hd = md(38752),
-       vd = md(38779),
-       Qd = md(38758);
+     var eb = Mb(38526),
+       Hb = Mb(38547),
+       pb = Mb(38552),
+       Vb = Mb(38414),
+       gb = Mb(38516),
+       lb = Mb(38419),
+       Lb = Mb(38449),
+       Ib = Mb(38432);
```

#### 4067. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30567-L30568` → after: `L30352-L30353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30352-L30353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30352-L30353) · [Before (L30567-L30568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30567-L30568)

```diff
-           gt: dd,
-           uniformWriter: new Rd.h(dd),
+           FO: bb,
+           uniformWriter: new pb.g(bb),
```

#### 4068. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30581` → after: `L30366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30366) · [Before (L30581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30581)

```diff
-       (0, Wd.Q)(md.x, md.y, md.z, md.w, Od) && (md.x = Od[0], md.y = Od[1], md.z = Od[2], md.w = Od[3], dd.uniformLightVersion++)
+       (0, eb.W)(Mb.x, Mb.y, Mb.z, Mb.w, wb) && (Mb.x = wb[0], Mb.y = wb[1], Mb.z = wb[2], Mb.w = wb[3], bb.uniformLightVersion++)
```

#### 4069. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30593` → after: `L30378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30378) · [Before (L30593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30593)

```diff
-         ...(0, Xd.b)("ENTITY_LIGHT"),
+         ...(0, Vb.e)("ENTITY_LIGHT"),
```

#### 4070. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30600` → after: `L30385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30385) · [Before (L30600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30600)

```diff
-         (0, Fd.b)(dd, this.gt.lH);
+         (0, Hb.d)(bb, this.FO.YE);
```

#### 4071. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30602` → after: `L30387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30387) · [Before (L30602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30602)

```diff
-         Wd ? (0, Qd.f)(dd, Wd) : Nd.disableUnusedSpecularTerm(dd, Rd);
+         eb ? (0, Ib.d)(bb, eb) : tb.disableUnusedSpecularTerm(bb, pb);
```

#### 4072. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30607` → after: `L30392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30392) · [Before (L30607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30607)

```diff
-         return (0, Kd.e)(this.uniformLevels ? [...Rd.f, {
+         return (0, gb.e)(this.uniformLevels ? [...pb.c, {
```

#### 4073. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30610` → after: `L30395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30395) · [Before (L30610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30610)

```diff
-         }] : Rd.f, "both", dd)
+         }] : pb.c, "both", bb)
```

#### 4074. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30616` → after: `L30401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30401) · [Before (L30616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30616)

```diff
-         return (0, Rd.r)(this.gt) + this.uniformLightVersion
+         return (0, pb.p)(this.FO) + this.uniformLightVersion
```

#### 4075. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30619` → after: `L30404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30404) · [Before (L30619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30619)

```diff
-         this.gt.lH && !this.uniformLevels && dd.push("aLightLevels")
+         this.FO.YE && !this.uniformLevels && bb.push("aLightLevels")
```

#### 4076. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30623` → after: `L30408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30408) · [Before (L30623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30623)

```diff
-           const dd = this.uniformLevels ? (0, hd.ob)(Od, "uEntityLightLevels") : (0, hd.wb)(Od, "aLightLevels");
+           const bb = this.uniformLevels ? (0, lb.sb)(wb, "uEntityLightLevels") : (0, lb.zb)(wb, "aLightLevels");
```

#### 4077. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30625-L30626` → after: `L30410-L30411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30410-L30411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30410-L30411) · [Before (L30625-L30626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30625-L30626)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,hd.f)(Od,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,Wd.L)(Od)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,Wd.J)(Od,dd)}\n\t\t\t\t\t\t${(0,hd.z)(Od,"vec3","blockLightContrib",(0,Wd.l)(Od,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,hd.z)(Od,"vec3","skyContrib",`mix(${(0,hd.ob)(Od,"uAmbientL … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,lb.d)(wb,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,eb.O)(wb)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,eb.K)(wb,bb)}\n\t\t\t\t\t\t${(0,lb.u)(wb,"vec3","blockLightContrib",(0,eb.n)(wb,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,lb.u)(wb,"vec3","skyContrib",`mix(${(0,lb.sb)(wb,"uAmbientL … [truncated]
```

#### 4078. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30630` → after: `L30415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30415) · [Before (L30630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30630)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,Wd.L)(Od)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,eb.O)(wb)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
```

#### 4079. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30635` → after: `L30420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30420) · [Before (L30635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30635)

```diff
-     (0, Qd.m)(Hd)
+     (0, Ib.j)(Eb)
```

#### 4080. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30637` → after: `L30422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30422) · [Before (L30637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30637)

```diff
-   38758: (dd, Od, md) => {
+   38432: (bb, wb, Mb) => {
```

#### 4081. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30644-L30647` → after: `L30430-L30432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30430-L30432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30430-L30432) · [Before (L30644-L30647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30644-L30647)

```diff
-       f: () => Wd,
-       i: () => Rd,
-       j: () => vd,
-       m: () => hd
+       e: () => pb,
+       g: () => Lb,
+       j: () => lb
```

#### 4082. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30680` → after: `L30465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30465) · [Before (L30680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30680)

```diff
-   38756: (dd, Od, md) => {
+   38424: (bb, wb, Mb) => {
```

#### 4083. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30684` → after: `L30469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30469) · [Before (L30684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30684)

```diff
-     var Wd = md(38752);
+     var eb = Mb(38419);
```

#### 4084. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30687` → after: `L30472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30472) · [Before (L30687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30687)

```diff
-       return `\n\t\t${(0,Wd.t)(dd,"vec3",`${Od}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
+       return `\n\t\t${(0,eb.r)(bb,"vec3",`${wb}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
```

#### 4085. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30689` → after: `L30474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30474) · [Before (L30689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30689)

```diff
-         (0, Wd.z)(dd, "vec4", "K", (0, Wd.l)(dd, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
+         (0, eb.u)(bb, "vec4", "K", (0, eb.j)(bb, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
```

#### 4086. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30692` → after: `L30477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30477) · [Before (L30692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30692)

```diff
-         (0, Wd.z)(dd, "vec4", "p", `mix(${(0,Wd.l)(dd,"vec4","c.bg","K.wz")}, ${(0,Wd.l)(dd,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
+         (0, eb.u)(bb, "vec4", "p", `mix(${(0,eb.j)(bb,"vec4","c.bg","K.wz")}, ${(0,eb.j)(bb,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
```

#### 4087. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30695` → after: `L30480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30480) · [Before (L30695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30695)

```diff
-         (0, Wd.z)(dd, "vec4", "q", `mix(${(0,Wd.l)(dd,"vec4","p.xyw","c.r")}, ${(0,Wd.l)(dd,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
+         (0, eb.u)(bb, "vec4", "q", `mix(${(0,eb.j)(bb,"vec4","p.xyw","c.r")}, ${(0,eb.j)(bb,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
```

#### 4088. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30698` → after: `L30483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30483) · [Before (L30698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30698)

```diff
-         (0, Wd.z)(dd, "float", "d", "q.x - min(q.w, q.y)")
+         (0, eb.u)(bb, "float", "d", "q.x - min(q.w, q.y)")
```

#### 4089. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30701` → after: `L30486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30486) · [Before (L30701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30701)

```diff
-         (0, Wd.z)(dd, "float", "e", "1.0e-10")
+         (0, eb.u)(bb, "float", "e", "1.0e-10")
```

#### 4090. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30704` → after: `L30489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30489) · [Before (L30704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30704)

```diff
-         (0, Wd.l)(dd, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
+         (0, eb.j)(bb, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
```

#### 4091. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30706` → after: `L30491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30491) · [Before (L30706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30706)

```diff
-       n\ t\ t`)}\n\n\t\t${(0,Wd.t)(dd,"vec3",`${Od}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
+       n\ t\ t`)}\n\n\t\t${(0,eb.r)(bb,"vec3",`${wb}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
```

#### 4092. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30708` → after: `L30493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30493) · [Before (L30708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30708)

```diff
-         (0, Wd.z)(dd, "vec4", "K", (0, Wd.l)(dd, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
+         (0, eb.u)(bb, "vec4", "K", (0, eb.j)(bb, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
```

#### 4093. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30711` → after: `L30496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30496) · [Before (L30711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30711)

```diff
-         (0, Wd.z)(dd, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
+         (0, eb.u)(bb, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
```

#### 4094. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30714` → after: `L30499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30499) · [Before (L30714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30714)

```diff
-         (0, Wd.l)(dd, "vec3", "0.0")
+         (0, eb.j)(bb, "vec3", "0.0")
```

#### 4095. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30716` → after: `L30501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30501) · [Before (L30716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30716)

```diff
-         (0, Wd.l)(dd, "vec3", "1.0")
+         (0, eb.j)(bb, "vec3", "1.0")
```

#### 4096. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30721` → after: `L30506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30506) · [Before (L30721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30721)

```diff
-   39380: (dd, Od, md) => {
+   39059: (bb, wb, Mb) => {
```

#### 4097. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30724-L30725` → after: `L30509-L30510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30509-L30510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30509-L30510) · [Before (L30724-L30725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30724-L30725)

```diff
-       g: () => Qd,
-       i: () => vd
+       i: () => Ib,
+       l: () => Lb
```

#### 4098. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30727-L30731` → after: `L30512-L30516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30512-L30516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30512-L30516) · [Before (L30727-L30731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30727-L30731)

```diff
-     var Wd = md(38856),
-       Fd = md(38750),
-       Rd = md(38752),
-       Xd = md(38779),
-       Kd = md(38758);
+     var eb = Mb(38526),
+       Hb = Mb(38414),
+       pb = Mb(38419),
+       Vb = Mb(38449),
+       gb = Mb(38432);
```

#### 4099. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30738` → after: `L30523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30523) · [Before (L30738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30738)

```diff
-           ...(0, Fd.b)("TERRAIN_FADE"),
+           ...(0, Hb.e)("TERRAIN_FADE"),
```

#### 4100. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30746` → after: `L30531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30531) · [Before (L30746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30746)

```diff
-           const md = (0, Rd.W)(Od);
+           const Mb = (0, pb.Z)(wb);
```

#### 4101. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30748-L30749` → after: `L30533-L30534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30533-L30534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30533-L30534) · [Before (L30748-L30749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30748-L30749)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,Wd.r)(Od)}\n            `,
-             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${hd}\n                if (${md} < 255.0 / 256.0 && ${md} < bayerDither(${(0,Rd.K)(Od)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,eb.s)(wb)}\n            `,
+             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${lb}\n                if (${Mb} < 255.0 / 256.0 && ${Mb} < bayerDither(${(0,pb.L)(wb)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
```

#### 4102. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30757-L30760` → after: `L30542-L30545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30542-L30545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30542-L30545) · [Before (L30757-L30760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30757-L30760)

```diff
-         const Od = (0, Xd.T)(dd, 1, !1),
-           md = (0, Xd.W)(dd, 1, !1);
-         (0, Xd.pb)(dd, {
-           transparencyMode: Od ? Xd.r.alphaBlend : md ? Xd.r.alphaTest : Xd.r.opaque
+         const wb = (0, Vb.O)(bb, 1, !1),
+           Mb = (0, Vb.R)(bb, 1, !1);
+         (0, Vb.ib)(bb, {
+           transparencyMode: wb ? Vb.s.alphaBlend : Mb ? Vb.s.alphaTest : Vb.s.opaque
```

#### 4103. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30766` → after: `L30551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30551) · [Before (L30766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30766)

```diff
-     }(0, Kd.m)(vd)
+     }(0, gb.j)(Lb)
```

#### 4104. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30768` → after: `L30553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30553) · [Before (L30768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30768)

```diff
-   39384: (dd, Od, md) => {
+   39068: (bb, wb, Mb) => {
```

#### 4105. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30770-L30774` → after: `L30555-L30559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30555-L30559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30555-L30559) · [Before (L30770-L30774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30770-L30774)

```diff
-       e: () => bd,
-       f: () => od,
-       j: () => Hd,
-       k: () => yd,
-       n: () => qd
+       c: () => Bb,
+       d: () => Ub,
+       g: () => Eb,
+       i: () => Fb,
+       l: () => Cb
```

#### 4106. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30776-L30783` → after: `L30561-L30568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30561-L30568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30561-L30568) · [Before (L30776-L30783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30776-L30783)

```diff
-     var Wd = md(38856),
-       Fd = md(38877),
-       Rd = md(38884),
-       Xd = md(38750),
-       Kd = md(38845),
-       hd = md(38752),
-       vd = md(38779),
-       Qd = md(38758);
+     var eb = Mb(38526),
+       Hb = Mb(38547),
+       pb = Mb(38552),
+       Vb = Mb(38414),
+       gb = Mb(38516),
+       lb = Mb(38419),
+       Lb = Mb(38449),
+       Ib = Mb(38432);
```

#### 4107. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30799` → after: `L30584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30584) · [Before (L30799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30799)

```diff
-         ...(0, Xd.b)("TERRAIN_LIGHT"),
+         ...(0, Vb.e)("TERRAIN_LIGHT"),
```

#### 4108. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30809` → after: `L30594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30594) · [Before (L30809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30809)

```diff
-         (0, Fd.b)(dd, this.gt.lH), dd.BLOXD_LIGHT_WORD = Nd.has(md);
+         (0, Hb.d)(bb, this.FO.YE), bb.BLOXD_LIGHT_WORD = tb.has(Mb);
```

#### 4109. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30811` → after: `L30596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30596) · [Before (L30811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30811)

```diff
-         Rd || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), dd.BLOXD_TERRAIN_DIRECTI … [truncated]
+         pb || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), bb.BLOXD_TERRAIN_DIRECTI … [truncated]
```

#### 4110. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30814` → after: `L30599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30599) · [Before (L30814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30814)

```diff
-         this.gt.lH && dd.push("aPackedLightLevels")
+         this.FO.YE && bb.push("aPackedLightLevels")
```

#### 4111. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30817` → after: `L30602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30602) · [Before (L30817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30817)

```diff
-         const Od = (0, Kd.e)(Rd.f, "both", dd);
+         const wb = (0, gb.e)(pb.c, "both", bb);
```

#### 4112. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30819-L30820` → after: `L30604-L30605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30604-L30605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30604-L30605) · [Before (L30819-L30820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30819-L30820)

```diff
-         const md = (0, Kd.e)((0, Wd.D)(this.dirLightCount), "vertex", dd);
-         return (0, hd.S)(dd) ? {
+         const Mb = (0, gb.e)((0, eb.y)(this.dirLightCount), "vertex", bb);
+         return (0, lb.Y)(bb) ? {
```

#### 4113. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30824` → after: `L30609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30609) · [Before (L30824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30824)

```diff
-           vertex: `${Od.vertex}\n${md.vertex}`,
+           vertex: `${wb.vertex}\n${Mb.vertex}`,
```

#### 4114. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30833` → after: `L30618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30618) · [Before (L30833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30833)

```diff
-         return (0, Rd.r)(this.gt)
+         return (0, pb.p)(this.FO)
```

#### 4115. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30837-L30838` → after: `L30622-L30623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30622-L30623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30622-L30623) · [Before (L30837-L30838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30837-L30838)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,Wd.U)(Od)}\n                    ${(0,Wd.E)(Od)}\n                `,
-           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,Wd.V)(Od)}\n                    ${(0,Wd.G)(Od,this.dirLightCount)}\n                `
+           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,eb.X)(wb)}\n                    ${(0,eb.A)(wb)}\n                `,
+           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,eb._)(wb)}\n                    ${(0,eb.E)(wb,this.dirLightCount)}\n                `
```

#### 4116. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30840-L30842` → after: `L30625-L30627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30625-L30627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30625-L30627) · [Before (L30840-L30842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30840-L30842)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,Wd.O)(Od)}\n                    ${(0,Wd.E)(Od)}\n                `,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, Wd.M)(Od),
-           [(0, Wd.y)(Od)]: `\n                    ${(0,Wd.C)(Od)}\n                    ${(0,Wd.u)(Od)}\n                `
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,eb.S)(wb)}\n                    ${(0,eb.A)(wb)}\n                `,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, eb.Q)(wb),
+           [(0, eb.v)(wb)]: `\n                    ${(0,eb.x)(wb)}\n                    ${(0,eb.t)(wb)}\n                `
```

#### 4117. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30848` → after: `L30633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30633) · [Before (L30848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30848)

```diff
-       const md = (0, Rd.z)(dd.model.view);
+       const Mb = (0, pb.u)(bb.model.view);
```

#### 4118. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30850-L30852` → after: `L30635-L30637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30635-L30637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30635-L30637) · [Before (L30850-L30852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30850-L30852)

```diff
-         gt: dd,
-         uniformWriter: new Rd.h(dd),
-         dirLightWriter: md > 0 ? new Rd.d(dd.model.view, md) : null,
+         FO: bb,
+         uniformWriter: new pb.g(bb),
+         dirLightWriter: Mb > 0 ? new pb.b(bb.model.view, Mb) : null,
```

#### 4119. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30860-L30862` → after: `L30645-L30647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30645-L30647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30645-L30647) · [Before (L30860-L30862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30860-L30862)

```diff
-       const md = (0, vd.db)(dd);
-       (0, vd.B)(md, Hd.name) || (0, vd.t)(md, Hd, yd(Od, dd)), dd.checkReadyOnlyOnce = !0, (0, vd.fb)(dd, !0)
-     }(0, Qd.m)(Hd)
+       const Mb = (0, Lb.ab)(bb);
+       (0, Lb.w)(Mb, Eb.name) || (0, Lb.t)(Mb, Eb, Fb(wb, bb)), bb.checkReadyOnlyOnce = !0, (0, Lb.cb)(bb, !0)
+     }(0, Ib.j)(Eb)
```

#### 4120. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30864` → after: `L30649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30649) · [Before (L30864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30864)

```diff
-   38835: (dd, Od, md) => {
+   38505: (bb, wb, Mb) => {
```

#### 4121. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30866-L30867` → after: `L30651-L30652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30651-L30652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30651-L30652) · [Before (L30866-L30867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30866-L30867)

```diff
-       b: () => Hd,
-       f: () => Qd
+       c: () => Eb,
+       e: () => Ib
```

#### 4122. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30869-L30873` → after: `L30654-L30658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30654-L30658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30654-L30658) · [Before (L30869-L30873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30869-L30873)

```diff
-     var Wd = md(38837),
-       Fd = md(38750),
-       Rd = md(38845),
-       Xd = md(38752),
-       Kd = md(38758);
+     var eb = Mb(38514),
+       Hb = Mb(38414),
+       pb = Mb(38516),
+       Vb = Mb(38419),
+       gb = Mb(38432);
```

#### 4123. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30903` → after: `L30688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30688) · [Before (L30903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30903)

```diff
-         ticksPerFrame: Rd > 0 ? Rd / Wd.d : 1
+         ticksPerFrame: pb > 0 ? pb / eb.b : 1
```

#### 4124. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30908-L30909` → after: `L30693-L30694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30693-L30694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30693-L30694) · [Before (L30908-L30909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30908-L30909)

```diff
-       const Od = (0, Xd.Q)(dd, "animTick", "uStripTick");
-       return (0, Xd.Z)(dd, `floor(${Od} / ${(0,Xd.ob)(dd,"uStripTicksPerFrame")})`, (0, Xd.ob)(dd, "uStripFrames"))
+       const wb = (0, Vb.U)(bb, "animTick", "uStripTick");
+       return (0, Vb._)(bb, `floor(${wb} / ${(0,Vb.sb)(bb,"uStripTicksPerFrame")})`, (0, Vb.sb)(bb, "uStripFrames"))
```

#### 4125. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30913` → after: `L30698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30698) · [Before (L30913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30913)

```diff
-       return `clamp(${Od}, ${(0,Xd.l)(dd,"vec2","0.0")}, ${(0,Xd.l)(dd,"vec2","1.0 - 1.0 / 2048.0")})`
+       return `clamp(${wb}, ${(0,Vb.j)(bb,"vec2","0.0")}, ${(0,Vb.j)(bb,"vec2","1.0 - 1.0 / 2048.0")})`
```

#### 4126. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30917` → after: `L30702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30702) · [Before (L30917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30917)

```diff
-       return (0, Xd.l)(dd, "vec2", `${Od}.x / ${(0,Xd.ob)(dd,"uStripColumns")}`, `(${Od}.y + ${md}) / ${(0,Xd.ob)(dd,"uStripRows")}`)
+       return (0, Vb.j)(bb, "vec2", `${wb}.x / ${(0,Vb.sb)(bb,"uStripColumns")}`, `(${wb}.y + ${Mb}) / ${(0,Vb.sb)(bb,"uStripRows")}`)
```

#### 4127. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30924-L30925` → after: `L30709-L30710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30709-L30710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30709-L30710) · [Before (L30924-L30925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30924-L30925)

```diff
-         defines: () => (0, Fd.b)("TEXTURE_STRIP"),
-         getUniforms: dd => (0, Rd.e)((0, Xd.S)(dd) ? vd : hd, "fragment", dd),
+         defines: () => (0, Hb.e)("TEXTURE_STRIP"),
+         getUniforms: bb => (0, pb.e)((0, Vb.Y)(bb) ? Lb : lb, "fragment", bb),
```

#### 4128. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30927` → after: `L30712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30712) · [Before (L30927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30927)

```diff
-           dd.updateFloat("uStripTick", (0, Wd.h)(Od) % (this.frames * this.ticksPerFrame)), dd.updateFloat("uStripFrames", this.frames), dd.updateFloat("uStripRows", this.rows), dd.updateFloat("uStripColumns", this.columns), dd.updateFloat("uStripTicksPerFrame", this.ticksPerFram … [truncated]
+           bb.updateFloat("uStripTick", (0, eb.g)(wb) % (this.frames * this.ticksPerFrame)), bb.updateFloat("uStripFrames", this.frames), bb.updateFloat("uStripRows", this.rows), bb.updateFloat("uStripColumns", this.columns), bb.updateFloat("uStripTicksPerFrame", this.ticksPerFram … [truncated]
```

#### 4129. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30932-L30934` → after: `L30717-L30719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30717-L30719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30717-L30719) · [Before (L30932-L30934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30932-L30934)

```diff
-           const md = (0, Xd.ob)(Od, "uStripColumns"),
-             Wd = Nd(Od, od(Od, (0, Xd.O)(Od, "vMainUV1")), "stripFrame"),
-             Fd = `(${md} - 1.0) * ${(0,Xd.bb)(Od,"diffuseSampler",`stripUv + ${(0,Xd.l)(Od,"vec2",`1.0 / ${md}`,"0.0")}`)}.r`;
+           const Mb = (0, Vb.sb)(wb, "uStripColumns"),
+             eb = tb(wb, Ub(wb, (0, Vb.R)(wb, "vMainUV1")), "stripFrame"),
+             Hb = `(${Mb} - 1.0) * ${(0,Vb.cb)(wb,"diffuseSampler",`stripUv + ${(0,Vb.j)(wb,"vec2",`1.0 / ${Mb}`,"0.0")}`)}.r`;
```

#### 4130. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30936-L30937` → after: `L30721-L30722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30721-L30722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30721-L30722) · [Before (L30936-L30937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30936-L30937)

```diff
-             [(0, Xd.A)(Od)]: `\n                ${(0,Xd.z)(Od,"float","stripFrame",td(Od))}\n                ${(0,Xd.z)(Od,"vec2","stripUv",Wd)}\n                baseColor = ${(0,Xd.bb)(Od,"diffuseSampler","stripUv")};\n                ${(0,Xd.z)(Od,"float",qd,Fd)}\n            ` … [truncated]
-             CUSTOM_FRAGMENT_BEFORE_FOG: `\n                ${(0,Xd.db)(Od,"color",`mix(color.rgb, baseColor.rgb, ${qd})`)}\n            `
+             [(0, Vb.y)(wb)]: `\n                ${(0,Vb.u)(wb,"float","stripFrame",Ob(wb))}\n                ${(0,Vb.u)(wb,"vec2","stripUv",eb)}\n                baseColor = ${(0,Vb.cb)(wb,"diffuseSampler","stripUv")};\n                ${(0,Vb.u)(wb,"float",Cb,Hb)}\n            ` … [truncated]
+             CUSTOM_FRAGMENT_BEFORE_FOG: `\n                ${(0,Vb.db)(wb,"color",`mix(color.rgb, baseColor.rgb, ${Cb})`)}\n            `
```

#### 4131. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30940-L30942` → after: `L30725-L30727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30725-L30727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30725-L30727) · [Before (L30940-L30942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30940-L30942)

```diff
-         Jq() {
-           const dd = Xd.e.WGSL,
-             Od = (0, Xd.ob)(dd, "uStripColumns"),
+         LC() {
+           const bb = Vb.b.WGSL,
+             wb = (0, Vb.sb)(bb, "uStripColumns"),
```

#### 4132. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30944` → after: `L30729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30729) · [Before (L30944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30944)

```diff
-             Wd = (0, Xd.O)(dd, "vMainUV1");
+             eb = (0, Vb.R)(bb, "vMainUV1");
```

#### 4133. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30947-L30948` → after: `L30732-L30733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30732-L30733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30732-L30733) · [Before (L30947-L30948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30947-L30948)

```diff
-               cells: `vec2f(${Od}, ${(0,Xd.ob)(dd,"uStripRows")})`,
-               layers: [`${md} * ${Od}`],
+               cells: `vec2f(${wb}, ${(0,Vb.sb)(bb,"uStripRows")})`,
+               layers: [`${Mb} * ${wb}`],
```

#### 4134. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30950` → after: `L30735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30735) · [Before (L30950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30950)

```diff
-               levelUv: Nd(dd, Wd, `(${md})`)
+               levelUv: tb(bb, eb, `(${Mb})`)
```

#### 4135. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30956` → after: `L30741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30741) · [Before (L30956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30956)

```diff
-     (0, Kd.m)(Hd)
+     (0, gb.j)(Eb)
```

#### 4136. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30958` → after: `L30743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30743) · [Before (L30958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30958)

```diff
-   38891: (dd, Od, md) => {
+   38560: (bb, wb, Mb) => {
```

#### 4137. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30960` → after: `L30745-L30746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30745-L30746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30745-L30746) · [Before (L30960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30960)

```diff
-       e: () => Rd,
+       c: () => pb,
+       f: () => eb,
```

#### 4138. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30983` → after: `L30768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30768) · [Before (L30983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30983)

```diff
-   39451: (dd, Od, md) => {
+   39133: (bb, wb, Mb) => {
```

#### 4139. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30985-L30987` → after: `L30770-L30772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30770-L30772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30770-L30772) · [Before (L30985-L30987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30985-L30987)

```diff
-       b: () => td,
-       e: () => Nd,
-       f: () => od
+       d: () => Ob,
+       h: () => tb,
+       i: () => Ub
```

#### 4140. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30989` → after: `L30774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30774) · [Before (L30989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30989)

```diff
-     var Wd = md(38922);
+     var eb = Mb(38584);
```

#### 4141. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30994` → after: `L30779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30779) · [Before (L30994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30994)

```diff
-       const hd = "position" === Od ? Wd.F : Wd.G;
+       const lb = "position" === wb ? eb.K : eb.N;
```

#### 4142. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L30998` → after: `L30783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30783) · [Before (L30998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L30998)

```diff
-           Xd = Kd && "position" !== Od && 0 !== Fd && 1 !== Fd ? 1 / Fd : 1;
+           Vb = gb && "position" !== wb && 0 !== Hb && 1 !== Hb ? 1 / Hb : 1;
```

#### 4143. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31074` → after: `L30859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30859) · [Before (L31074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31074)

```diff
-             return null !== (Od = hd(md)[Kd]) && void 0 !== Od ? Od : []
+             return null !== (wb = lb(Mb)[gb]) && void 0 !== wb ? wb : []
```

#### 4144. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31110` → after: `L30895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30895) · [Before (L31110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31110)

```diff
-   39074: (dd, Od, md) => {
+   38752: (bb, wb, Mb) => {
```

#### 4145. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31189` → after: `L30974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30974) · [Before (L31189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31189)

```diff
-         const [Od, md, Wd, Xd] = null !== (od = null === Rd || void 0 === Rd ? void 0 : Rd[dd / 4]) && void 0 !== od ? od : [0, 0, 1, 1];
+         const [wb, Mb, eb, Vb] = null !== (Ub = null === pb || void 0 === pb ? void 0 : pb[bb / 4]) && void 0 !== Ub ? Ub : [0, 0, 1, 1];
```

#### 4146. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31209-L31210` → after: `L30994-L30995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30994-L30995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30994-L30995) · [Before (L31209-L31210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31209-L31210)

```diff
-       b: () => Rd,
-       f: () => Wd,
+       d: () => pb,
+       h: () => eb,
```

#### 4147. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31212` → after: `L30997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R30997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L30997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L30997) · [Before (L31212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31212)

```diff
-       l: () => Xd
+       n: () => Vb
```

#### 4148. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31215` → after: `L31000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31000) · [Before (L31215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31215)

```diff
-   38917: (dd, Od, md) => {
+   38576: (bb, wb, Mb) => {
```

#### 4149. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31219-L31221` → after: `L31003-L31004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31003-L31004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31003-L31004) · [Before (L31219-L31221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31219-L31221)

```diff
-       g: () => Qd,
-       k: () => vd,
-       n: () => hd,
+       i: () => Ob,
+       m: () => Ib,
```

#### 4150. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31223` → after: `L31006-L31008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31006-L31008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31006-L31008) · [Before (L31223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31223)

```diff
-       r: () => Xd
+       r: () => lb,
+       s: () => gb,
+       u: () => Vb
```

#### 4151. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31289` → after: `L31074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31074) · [Before (L31289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31289)

```diff
-       return (ArrayBuffer.isView(md) ? (md.byteOffset + Wd) % 4 === 0 && Fd % 4 === 0 : 12 === Fd && Wd % 4 === 0) ? Od : null
+       return (ArrayBuffer.isView(Mb) ? (Mb.byteOffset + eb) % 4 === 0 && Hb % 4 === 0 : 12 === Hb && eb % 4 === 0) ? wb : null
```

#### 4152. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31345` → after: `L31130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31130) · [Before (L31345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31345)

```diff
-   38929: (dd, Od, md) => {
+   38599: (bb, wb, Mb) => {
```

#### 4153. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31347` → after: `L31132-L31134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31132-L31134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31132-L31134) · [Before (L31347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31347)

```diff
-       e: () => Kd,
+       c: () => gb,
+       d: () => pb,
+       g: () => Ob,
```

#### 4154. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31350-L31355` → after: `L31137-L31140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31137-L31140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31137-L31140) · [Before (L31350-L31355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31350-L31355)

```diff
-       l: () => Nd,
-       o: () => qd,
-       r: () => yd,
-       s: () => od,
-       u: () => Hd,
-       w: () => Xd
+       k: () => Fb,
+       m: () => Ub,
+       p: () => Eb,
+       t: () => Vb
```

#### 4155. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31357` → after: `L31142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31142) · [Before (L31357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31357)

```diff
-     var Wd = md(38794);
+     var eb = Mb(38468);
```

#### 4156. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31441` → after: `L31226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31226) · [Before (L31441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31441)

```diff
-       dd.live && (dd.live = !1, Fd--), dd.released = !0, (0, Wd.K)(dd.gpu)
+       bb.live && (bb.live = !1, Hb--), bb.released = !0, (0, eb.L)(bb.gpu)
```

#### 4157. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31448` → after: `L31233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31233) · [Before (L31448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31448)

```diff
-   38782: (dd, Od, md) => {
+   38458: (bb, wb, Mb) => {
```

#### 4158. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31474` → after: `L31259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31259) · [Before (L31474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31474)

```diff
-   38788: (dd, Od, md) => {
+   38462: (bb, wb, Mb) => {
```

#### 4159. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31476-L31477` → after: `L31261-L31262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31261-L31262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31261-L31262) · [Before (L31476-L31477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31476-L31477)

```diff
-       d: () => Rd,
-       e: () => Xd
+       b: () => pb,
+       f: () => Vb
```

#### 4160. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31488` → after: `L31273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31273) · [Before (L31488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31488)

```diff
-       return null !== (Od = dd && Fd.get(dd)) && void 0 !== Od ? Od : Wd
+       return null !== (wb = bb && Hb.get(bb)) && void 0 !== wb ? wb : eb
```

#### 4161. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31491` → after: `L31276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31276) · [Before (L31491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31491)

```diff
-   38779: (dd, Od, md) => {
+   38449: (bb, wb, Mb) => {
```

#### 4162. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31493` → after: `L31278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31278) · [Before (L31493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31493)

```diff
-       B: () => Bd,
+       A: () => Yb,
```

#### 4163. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31495` → after: `L31280-L31281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31280-L31281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31280-L31281) · [Before (L31495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31495)

```diff
-       E: () => od,
+       D: () => fb,
+       G: () => Bb,
```

#### 4164. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31497-L31498` → after: `L31283-L31284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31283-L31284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31283-L31284) · [Before (L31497-L31498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31497-L31498)

```diff
-       J: () => bd,
-       M: () => Hd,
+       L: () => Fb,
+       N: () => mb,
```

#### 4165. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31500-L31502` → after: `L31286-L31287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31286-L31287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31286-L31287) · [Before (L31500-L31502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31500-L31502)

```diff
-       Q: () => pd,
-       T: () => Ld,
-       W: () => Pd,
+       R: () => Nb,
+       V: () => Zb,
```

#### 4166. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31505` → after: `L31290-L31291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31290-L31291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31290-L31291) · [Before (L31505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31505)

```diff
-       d: () => Kd,
+       b: () => gb,
+       cb: () => sb,
```

#### 4167. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31507-L31515` → after: `L31293-L31299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31293-L31299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31293-L31299) · [Before (L31507-L31515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31507-L31515)

```diff
-       f: () => wd,
-       fb: () => Td,
-       i: () => hd,
-       jb: () => Yd,
-       m: () => gd,
-       n: () => Qd,
-       nb: () => nd,
-       pb: () => xd,
-       r: () => Xd,
+       e: () => Xb,
+       gb: () => Jb,
+       h: () => lb,
+       ib: () => rb,
+       l: () => zb,
+       o: () => Ib,
+       s: () => Vb,
```

#### 4168. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31517` → after: `L31301-L31302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31301-L31302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31301-L31302) · [Before (L31517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31517)

```diff
-       x: () => Ud
+       u: () => Kb,
+       w: () => Rb
```

#### 4169. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31519-L31521` → after: `L31304-L31306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31304-L31306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31304-L31306) · [Before (L31519-L31521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31519-L31521)

```diff
-     var Wd = md(38782),
-       Fd = md(38788),
-       Rd = md(38794);
+     var eb = Mb(38458),
+       Hb = Mb(38462),
+       pb = Mb(38468);
```

#### 4170. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31581` → after: `L31366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31366) · [Before (L31581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31581)

```diff
-       Wd !== md && (md && (0, Rd.N)(md), dd[Od] = md, Wd && (0, Rd.L)(Wd), dd.version++)
+       eb !== Mb && (Mb && (0, pb.O)(Mb), bb[wb] = Mb, eb && (0, pb.N)(eb), bb.version++)
```

#### 4171. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31589` → after: `L31374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31374) · [Before (L31589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31589)

```diff
-       return void 0 === Od ? (0, Fd.e)() : Od
+       return void 0 === wb ? (0, Hb.f)() : wb
```

#### 4172. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31595` → after: `L31380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31380) · [Before (L31595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31595)

```diff
-         Xd = (0, Fd.e)(Od);
+         Vb = (0, Hb.f)(wb);
```

#### 4173. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31597` → after: `L31382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31382) · [Before (L31597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31597)

```diff
-       const Kd = null !== (md = null === Xd || void 0 === Xd ? void 0 : Xd.create(Rd, Od)) && void 0 !== md ? md : Wd.e.defines();
+       const gb = null !== (Mb = null === Vb || void 0 === Vb ? void 0 : Vb.create(pb, wb)) && void 0 !== Mb ? Mb : eb.e.defines();
```

#### 4174. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31611` → after: `L31396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31396) · [Before (L31611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31611)

```diff
-         for (const dd of [Od.diffuseTexture, Od.opacityTexture, Od.emissiveTexture, Od.reflectionTexture]) dd && ((0, Rd.N)(dd), Fd.push(dd));
+         for (const bb of [wb.diffuseTexture, wb.opacityTexture, wb.emissiveTexture, wb.reflectionTexture]) bb && ((0, pb.O)(bb), Hb.push(bb));
```

#### 4175. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31617` → after: `L31402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31402) · [Before (L31617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31617)

```diff
-           if ("diffuseTexture" === Fd || "opacityTexture" === Fd || "emissiveTexture" === Fd || "reflectionTexture" === Fd) Yd(dd, Fd, null !== (Xd = Rd) && void 0 !== Xd ? Xd : null);
+           if ("diffuseTexture" === Hb || "opacityTexture" === Hb || "emissiveTexture" === Hb || "reflectionTexture" === Hb) hb(bb, Hb, null !== (Vb = pb) && void 0 !== Vb ? Vb : null);
```

#### 4176. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31622` → after: `L31407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31407) · [Before (L31622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31622)

```diff
-         for (const dd of Fd)(0, Rd.L)(dd)
+         for (const bb of Hb)(0, pb.N)(bb)
```

#### 4177. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31665` → after: `L31450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31450) · [Before (L31665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31665)

```diff
-       --dd.refs > 0 || (vd--, (0, Rd.K)(dd.gpu), Yd(dd, "diffuseTexture", null), Yd(dd, "opacityTexture", null), Yd(dd, "emissiveTexture", null), Yd(dd, "reflectionTexture", null), dd.mirror && (td.delete(dd.mirror), dd.mirror = null))
+       --bb.refs > 0 || (Lb--, (0, pb.L)(bb.gpu), hb(bb, "diffuseTexture", null), hb(bb, "opacityTexture", null), hb(bb, "emissiveTexture", null), hb(bb, "reflectionTexture", null), bb.mirror && (Ob.delete(bb.mirror), bb.mirror = null))
```

#### 4178. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31700` → after: `L31485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31485) · [Before (L31700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31700)

```diff
-   38794: (dd, Od, md) => {
+   38468: (bb, wb, Mb) => {
```

#### 4179. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31704` → after: `L31489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31489) · [Before (L31704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31704)

```diff
-       F: () => xd,
+       D: () => sb,
```

#### 4180. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31706` → after: `L31491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31491) · [Before (L31706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31706)

```diff
-       K: () => Sd,
+       I: () => cb,
```

#### 4181. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31710-L31711` → after: `L31496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31496) · [Before (L31710-L31711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31710-L31711)

```diff
-       T: () => Bd,
-       b: () => Xd,
+       Q: () => Rb,
```

#### 4182. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31716-L31717` → after: `L31500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31500) · [Before (L31716-L31717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31716-L31717)

```diff
-       l: () => Hd,
-       m: () => yd,
+       n: () => tb,
```

#### 4183. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31723` → after: `L31508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31508) · [Before (L31723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31723)

```diff
-     var Wd = md(38788);
+     var eb = Mb(38462);
```

#### 4184. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31775-L31776` → after: `L31560-L31561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31560-L31561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31560-L31561) · [Before (L31775-L31776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31775-L31776)

```diff
-         wrapU: null !== (md = qd.wrapU) && void 0 !== md ? md : vd,
-         wrapV: null !== (Fd = qd.wrapV) && void 0 !== Fd ? Fd : vd,
+         wrapU: null !== (Mb = Cb.wrapU) && void 0 !== Mb ? Mb : Lb,
+         wrapV: null !== (Hb = Cb.wrapV) && void 0 !== Hb ? Hb : Lb,
```

#### 4185. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31780` → after: `L31565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31565) · [Before (L31780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31780)

```diff
-       return yd.hasAlpha = null !== (Rd = qd.hasAlpha) && void 0 !== Rd && Rd, null === (Xd = (0, Wd.e)(dd)) || void 0 === Xd || Xd.texture(yd, dd, Od), yd
+       return Fb.hasAlpha = null !== (pb = Cb.hasAlpha) && void 0 !== pb && pb, null === (Vb = (0, eb.f)(bb)) || void 0 === Vb || Vb.texture(Fb, bb, wb), Fb
```

#### 4186. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31803` → after: `L31588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31588) · [Before (L31803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31803)

```diff
-       return td.matrix[10] = 1, null === (md = (0, Wd.e)(dd)) || void 0 === md || md.cube(td, dd, Od), td
+       return Ob.matrix[10] = 1, null === (Mb = (0, eb.f)(bb)) || void 0 === Mb || Mb.cube(Ob, bb, wb), Ob
```

#### 4187. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31836` → after: `L31621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31621) · [Before (L31836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31836)

```diff
-       return null !== (Od = null === (md = pd) || void 0 === md ? void 0 : md.loaded(dd)) && void 0 !== Od ? Od : null
+       return null !== (wb = null === (Mb = mb) || void 0 === Mb ? void 0 : Mb.loaded(bb)) && void 0 !== wb ? wb : null
```

#### 4188. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31847` → after: `L31632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31632) · [Before (L31847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31847)

```diff
-       dd.live || (dd.live = !0, od++, null === (Od = pd) || void 0 === Od || Od.jK(dd));
+       bb.live || (bb.live = !0, Ub++, null === (wb = mb) || void 0 === wb || wb.dg(bb));
```

#### 4189. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31873` → after: `L31658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31658) · [Before (L31873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L31873)

```diff
-   38922: (dd, Od, md) => {
+   38584: (bb, wb, Mb) => {
```

#### 4190. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32075-L32077` → after: `L31860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31860) · [Before (L32075-L32077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32075-L32077)

```diff
-       B: () => Hd,
-       C: () => qd,
-       F: () => vd,
+       D: () => Vb,
```

#### 4191. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32082-L32086` → after: `L31867-L31871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31867-L31871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31867-L31871) · [Before (L32082-L32086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32082-L32086)

```diff
-       m: () => td,
-       q: () => Kd,
-       s: () => od,
-       u: () => Wd,
-       x: () => Xd
+       l: () => lb,
+       p: () => Ob,
+       t: () => gb,
+       w: () => Ub,
+       z: () => eb
```

#### 4192. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32089` → after: `L31874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31874) · [Before (L32089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32089)

```diff
-   38914: (dd, Od, md) => {
+   38571: (bb, wb, Mb) => {
```

#### 4193. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32091` → after: `L31876-L31877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31876-L31877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31876-L31877) · [Before (L32091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32091)

```diff
-       e: () => Xd,
+       c: () => Vb,
+       g: () => gb,
```

#### 4194. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32093-L32094` → after: `L31879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31879) · [Before (L32093-L32094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32093-L32094)

```diff
-       l: () => hd,
-       m: () => vd
+       l: () => Lb
```

#### 4195. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32096-L32098` → after: `L31881-L31883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31881-L31883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31881-L31883) · [Before (L32096-L32098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32096-L32098)

```diff
-     var Wd = md(38917),
-       Fd = md(38922),
-       Rd = md(38925);
+     var eb = Mb(38576),
+       Hb = Mb(38584),
+       pb = Mb(38593);
```

#### 4196. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32108` → after: `L31893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31893) · [Before (L32108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32108)

```diff
-         this.owner = dd, this.geometry = Od, this.By = md, this.materials = Wd, this.gpu = []
+         this.owner = bb, this.geometry = wb, this.gF = Mb, this.materials = eb, this.gpu = []
```

#### 4197. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32113` → after: `L31898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31898) · [Before (L32113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32113)

```diff
-         this.model = void 0, this.position = void 0, this.count = 0, this.By = new Int32Array(2), this.boxes = new Float64Array(6)
+         this.model = void 0, this.position = void 0, this.count = 0, this.gF = new Int32Array(2), this.boxes = new Float64Array(6)
```

#### 4198. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32116` → after: `L31901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31901) · [Before (L32116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32116)

```diff
-         this.count = dd, this.By.length < 2 * dd && (this.By = new Int32Array(2 * dd), this.boxes = new Float64Array(6 * dd))
+         this.count = bb, this.gF.length < 2 * bb && (this.gF = new Int32Array(2 * bb), this.boxes = new Float64Array(6 * bb))
```

#### 4199. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32126` → after: `L31911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31911) · [Before (L32126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32126)

```diff
-         const Xd = this.nodes.Mt;
+         const Vb = this.nodes.qO;
```

#### 4200. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32148` → after: `L31933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31933) · [Before (L32148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32148)

```diff
-         this.looseIndex.length < this.nodes.Mt && (this.loose = (0, Rd.j)(this.loose, this.nodes.Mt), this.looseIndex = (0, Rd.j)(this.looseIndex, this.nodes.Mt));
+         this.looseIndex.length < this.nodes.qO && (this.loose = (0, pb.j)(this.loose, this.nodes.qO), this.looseIndex = (0, pb.j)(this.looseIndex, this.nodes.qO));
```

#### 4201. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32164` → after: `L31949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31949) · [Before (L32164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32164)

```diff
-           Tt: md,
+           CO: Mb,
```

#### 4202. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32166` → after: `L31951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31951) · [Before (L32166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32166)

```diff
-           Bt: Fd
+           XO: Hb
```

#### 4203. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32190` → after: `L31975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L31975) · [Before (L32190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32190)

```diff
-           Tt: Kd,
+           CO: gb,
```

#### 4204. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32224` → after: `L32009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32009) · [Before (L32224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32224)

```diff
-         if (this.nodes.worldNow(dd, Rd, hd), (0, Fd.i)(hd, 0, vd), (0, Fd.F)(Od, 0, vd, Qd, 0), (0, Fd.G)(Od, 3, vd, Qd, 3), Qd[6] = Od[6], (0, Wd.r)(Qd), !(0, Wd.p)(Qd, this.sphere, 4 * dd) || !(0, Wd.n)(Qd, this.box, 6 * dd)) return -1;
+         if (this.nodes.worldNow(bb, pb, lb), (0, Hb.l)(lb, 0, Lb), (0, Hb.K)(wb, 0, Lb, Ib, 0), (0, Hb.N)(wb, 3, Lb, Ib, 3), Ib[6] = wb[6], (0, eb.u)(Ib), !(0, eb.s)(Ib, this.sphere, 4 * bb) || !(0, eb.r)(Ib, this.box, 6 * bb)) return -1;
```

#### 4205. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32227-L32228` → after: `L32012-L32013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32012-L32013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32012-L32013) · [Before (L32227-L32228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32227-L32228)

```diff
-           if (Xd.count > 1 && !(0, Wd.n)(Qd, Xd.boxes, 6 * Fd)) continue;
-           const dd = (0, Wd.g)(Xd.model, Xd.position, Qd, md, Xd.By[2 * Fd], Xd.By[2 * Fd + 1]); - 1 !== dd && (-1 === od || dd < od) && (od = dd)
+           if (Vb.count > 1 && !(0, eb.r)(Ib, Vb.boxes, 6 * Hb)) continue;
+           const bb = (0, eb.m)(Vb.model, Vb.position, Ib, Mb, Vb.gF[2 * Hb], Vb.gF[2 * Hb + 1]); - 1 !== bb && (-1 === Ub || bb < Ub) && (Ub = bb)
```

#### 4206. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32231` → after: `L32016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32016) · [Before (L32231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32231)

```diff
-         (0, Fd.F)(Qd, 0, hd, td, 0), td[3] = Qd[3] * od, td[4] = Qd[4] * od, td[5] = Qd[5] * od, (0, Fd.G)(td, 3, hd, Kd, 0), Kd[0] += td[0], Kd[1] += td[1], Kd[2] += td[2];
+         (0, Hb.K)(Ib, 0, lb, Ob, 0), Ob[3] = Ib[3] * Ub, Ob[4] = Ib[4] * Ub, Ob[5] = Ib[5] * Ub, (0, Hb.N)(Ob, 3, lb, gb, 0), gb[0] += Ob[0], gb[1] += Ob[1], gb[2] += Ob[2];
```

#### 4207. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32241` → after: `L32026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32026) · [Before (L32241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32241)

```diff
-         const Wd = md ? this.flags[dd] | Od : this.flags[dd] & ~Od;
+         const eb = Mb ? this.flags[bb] | wb : this.flags[bb] & ~wb;
```

#### 4208. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32252` → after: `L32037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32037) · [Before (L32252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32252)

```diff
-   38925: (dd, Od, md) => {
+   38593: (bb, wb, Mb) => {
```

#### 4209. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32254` → after: `L32039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32039) · [Before (L32254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32254)

```diff
-       c: () => Fd,
+       d: () => Hb,
```

#### 4210. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32256` → after: `L32041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32041) · [Before (L32256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32256)

```diff
-       g: () => Kd,
+       i: () => gb,
```

#### 4211. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32259` → after: `L32044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32044) · [Before (L32259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32259)

```diff
-     var Wd = md(38922);
+     var eb = Mb(38584);
```

#### 4212. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32277` → after: `L32062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32062) · [Before (L32277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32277)

```diff
-         this.Mt = 0, this.liveCount = 0, this.parent = new Int32Array(0), this.position = new Float64Array(0), this.rotation = new Float64Array(0), this.Tt = new Float64Array(0), this.Bt = new Float32Array(0), this.flags = new Uint8Array(0), this.billboard = new Uint8Array(0), th … [truncated]
+         this.qO = 0, this.liveCount = 0, this.parent = new Int32Array(0), this.position = new Float64Array(0), this.rotation = new Float64Array(0), this.CO = new Float64Array(0), this.XO = new Float32Array(0), this.flags = new Uint8Array(0), this.billboard = new Uint8Array(0), th … [truncated]
```

#### 4213. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32281` → after: `L32066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32066) · [Before (L32281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32281)

```diff
-         return this.freeCount > 0 ? dd = this.free[--this.freeCount] : (this.rows === this.Mt && this.grow(Math.max(16, 2 * this.Mt)), dd = this.rows++), this.parent[dd] = Od, this.position.fill(0, 3 * dd, 3 * dd + 3), this.rotation.set(Xd, 4 * dd), this.Tt.fill(1, 3 * dd, 3 * dd … [truncated]
+         return this.freeCount > 0 ? bb = this.free[--this.freeCount] : (this.rows === this.qO && this.grow(Math.max(16, 2 * this.qO)), bb = this.rows++), this.parent[bb] = wb, this.position.fill(0, 3 * bb, 3 * bb + 3), this.rotation.set(Vb, 4 * bb), this.CO.fill(1, 3 * bb, 3 * bb … [truncated]
```

#### 4214. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32284` → after: `L32069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32069) · [Before (L32284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32284)

```diff
-         0 !== (this.flags[dd] & Rd.live) && (this.flags[dd] = 0, this.sources[dd] = null, this.enabled[dd] = 0, this.Aq[this.disposedCount + this.pendingCount++] = dd, this.orderStale = !0, this.liveCount--)
+         0 !== (this.flags[bb] & pb.live) && (this.flags[bb] = 0, this.sources[bb] = null, this.enabled[bb] = 0, this.BC[this.disposedCount + this.pendingCount++] = bb, this.orderStale = !0, this.liveCount--)
```

#### 4215. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32287` → after: `L32072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32072) · [Before (L32287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32287)

```diff
-         this.parent[dd] = Od, this.dH[dd] = 1, this.orderStale = !0
+         this.parent[bb] = wb, this.JC[bb] = 1, this.orderStale = !0
```

#### 4216. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32291` → after: `L32076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32076) · [Before (L32291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32291)

```diff
-         this.position[Fd] = Od, this.position[Fd + 1] = md, this.position[Fd + 2] = Wd, this.dH[dd] = 1
+         this.position[Hb] = wb, this.position[Hb + 1] = Mb, this.position[Hb + 2] = eb, this.JC[bb] = 1
```

#### 4217. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32295` → after: `L32080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32080) · [Before (L32295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32295)

```diff
-         this.rotation[Rd] = Od, this.rotation[Rd + 1] = md, this.rotation[Rd + 2] = Wd, this.rotation[Rd + 3] = Fd, this.dH[dd] = 1
+         this.rotation[pb] = wb, this.rotation[pb + 1] = Mb, this.rotation[pb + 2] = eb, this.rotation[pb + 3] = Hb, this.JC[bb] = 1
```

#### 4218. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32299` → after: `L32084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32084) · [Before (L32299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32299)

```diff
-         Rd[0] = md, Rd[1] = Od, Rd[2] = Fd, (0, Wd.u)(Rd, 0, this.rotation, 4 * dd), this.dH[dd] = 1
+         pb[0] = Mb, pb[1] = wb, pb[2] = Hb, (0, eb.z)(pb, 0, this.rotation, 4 * bb), this.JC[bb] = 1
```

#### 4219. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32303` → after: `L32088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32088) · [Before (L32303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32303)

```diff
-         this.Tt[Fd] = Od, this.Tt[Fd + 1] = md, this.Tt[Fd + 2] = Wd, this.dH[dd] = 1
+         this.CO[Hb] = wb, this.CO[Hb + 1] = Mb, this.CO[Hb + 2] = eb, this.JC[bb] = 1
```

#### 4220. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32309` → after: `L32094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32094) · [Before (L32309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32309)

```diff
-         this.billboard[dd] = Od, this.dH[dd] = 1
+         this.billboard[bb] = wb, this.JC[bb] = 1
```

#### 4221. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32312` → after: `L32097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32097) · [Before (L32312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32312)

```diff
-         this.setFlag(dd, Rd.infiniteDistance, Od), this.dH[dd] = 1
+         this.setFlag(bb, pb.infiniteDistance, wb), this.JC[bb] = 1
```

#### 4222. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32318` → after: `L32103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32103) · [Before (L32318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32318)

```diff
-         this.sources[dd] = Od, this.setFlag(dd, Rd.copied, null !== Od), this.dH[dd] = 1
+         this.sources[bb] = wb, this.setFlag(bb, pb.copied, null !== wb), this.JC[bb] = 1
```

#### 4223. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32323-L32324` → after: `L32108-L32109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32108-L32109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32108-L32109) · [Before (L32323-L32324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32323-L32324)

```diff
-         for (let Fd = 0; Fd < this.disposedCount; Fd++) this.free[this.freeCount++] = this.Aq[Fd];
-         this.Aq.copyWithin(0, this.disposedCount, this.disposedCount + this.pendingCount), this.disposedCount = this.pendingCount, this.pendingCount = 0, this.orderStale && this.sortParentsFirst(), this.cameraBillboards(Od);
+         for (let Hb = 0; Hb < this.disposedCount; Hb++) this.free[this.freeCount++] = this.BC[Hb];
+         this.BC.copyWithin(0, this.disposedCount, this.disposedCount + this.pendingCount), this.disposedCount = this.pendingCount, this.pendingCount = 0, this.orderStale && this.sortParentsFirst(), this.cameraBillboards(wb);
```

#### 4224. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32330` → after: `L32115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32115) · [Before (L32330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32330)

```diff
-           dH: hd,
+           JC: lb,
```

#### 4225. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32343` → after: `L32128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32128) · [Before (L32343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32343)

```diff
-           0 === hd[dd] && !bd && (Nd < 0 || Qd[dd] === vd[Nd]) || (hd[dd] = 0, Nd >= 0 && (Qd[dd] = vd[Nd]), yd ? this.out.set(this.sources[dd]) : this.computeWorld(dd, Nd, Hd, Od, this.Bt, 16 * Nd), this.storeWorld(dd) && vd[dd]++)
+           0 === lb[bb] && !Bb && (tb < 0 || Ib[bb] === Lb[tb]) || (lb[bb] = 0, tb >= 0 && (Ib[bb] = Lb[tb]), Fb ? this.out.set(this.sources[bb]) : this.computeWorld(bb, tb, Eb, wb, this.XO, 16 * tb), this.storeWorld(bb) && Lb[bb]++)
```

#### 4226. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32347` → after: `L32132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32132) · [Before (L32347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32347)

```diff
-         this.flags[dd] = md ? this.flags[dd] | Od : this.flags[dd] & ~Od
+         this.flags[bb] = Mb ? this.flags[bb] | wb : this.flags[bb] & ~wb
```

#### 4227. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32350` → after: `L32135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32135) · [Before (L32350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32350)

```diff
-         this.Mt = dd, this.parent = hd(this.parent, dd), this.position = hd(this.position, 3 * dd), this.rotation = hd(this.rotation, 4 * dd), this.Tt = hd(this.Tt, 3 * dd), this.Bt = hd(this.Bt, 16 * dd), this.worldBits = new Uint32Array(this.Bt.buffer), this.flags = hd(this.fla … [truncated]
+         this.qO = bb, this.parent = lb(this.parent, bb), this.position = lb(this.position, 3 * bb), this.rotation = lb(this.rotation, 4 * bb), this.CO = lb(this.CO, 3 * bb), this.XO = lb(this.XO, 16 * bb), this.worldBits = new Uint32Array(this.XO.buffer), this.flags = lb(this.fla … [truncated]
```

#### 4228. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32356` → after: `L32141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32141) · [Before (L32356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32356)

```diff
-           dH: md,
+           JC: Mb,
```

#### 4229. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32381` → after: `L32166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32166) · [Before (L32381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32381)

```diff
-         Od.set(dd.viewMatrix), Od[12] = 0, Od[13] = 0, Od[14] = 0, (0, Wd.i)(Od, 0, md), (0, Wd.B)(md, this.scale, this.facing, Fd), Rd[0] = 0, (0, Wd.h)(Fd, Rd, 1), Rd[2] = 0, (0, Wd.u)(Rd, 0, Fd, 0), (0, Wd.x)(Fd, this.billboardY)
+         wb.set(bb.viewMatrix), wb[12] = 0, wb[13] = 0, wb[14] = 0, (0, eb.l)(wb, 0, Mb), (0, eb.G)(Mb, this.scale, this.facing, Hb), pb[0] = 0, (0, eb.i)(Hb, pb, 1), pb[2] = 0, (0, eb.z)(pb, 0, Hb, 0), (0, eb.D)(Hb, this.billboardY)
```

#### 4230. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32387` → after: `L32172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32172) · [Before (L32387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32387)

```diff
-           dH: Xd,
+           JC: Vb,
```

#### 4231. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32394` → after: `L32179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32179) · [Before (L32394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32394)

```diff
-           const Od = this.Bt,
+           const wb = this.XO,
```

#### 4232. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32401` → after: `L32186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32186) · [Before (L32401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32401)

```diff
-             0 !== (Fd[dd] & Rd.copied) ? this.out.set(this.sources[dd]) : this.computeWorld(dd, Xd, this.billboard[dd], Od, Qd === vd ? this.Bt : md, Qd === vd ? 16 * Xd : 0), md.set(this.out)
+             0 !== (Hb[bb] & pb.copied) ? this.out.set(this.sources[bb]) : this.computeWorld(bb, Vb, this.billboard[bb], wb, Ib === Lb ? this.XO : Mb, Ib === Lb ? 16 * Vb : 0), Mb.set(this.out)
```

#### 4233. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32414` → after: `L32199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32199) · [Before (L32414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32414)

```diff
-         }(0, Wd.e)(this.Tt, td, this.rotation, 4 * dd, od, Nd, Od < 0 ? vd : Qd), Od >= 0 && (md === Fd.none ? (0, Wd.q)(Qd, Kd, hd, vd) : ((0, Wd.C)(Kd, hd, this.scale, this.inverse, this.parentPart), (0, Wd.q)(Qd, this.parentPart, 0, vd))), md === Fd.all ? this.turn(this.billbo … [truncated]
+         }(0, eb.e)(this.CO, Ob, this.rotation, 4 * bb, Ub, tb, wb < 0 ? Lb : Ib), wb >= 0 && (Mb === Hb.none ? (0, eb.t)(Ib, gb, lb, Lb) : ((0, eb.J)(gb, lb, this.scale, this.inverse, this.parentPart), (0, eb.t)(Ib, this.parentPart, 0, Lb))), Mb === Hb.all ? this.turn(this.billbo … [truncated]
```

#### 4234. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32421` → after: `L32206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32206) · [Before (L32421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32421)

```diff
-         Od[12] = 0, Od[13] = 0, Od[14] = 0, (0, Wd.q)(Od, dd, 0, Od), Od[12] = md, Od[13] = Fd, Od[14] = Rd
+         wb[12] = 0, wb[13] = 0, wb[14] = 0, (0, eb.t)(wb, bb, 0, wb), wb[12] = Mb, wb[13] = Hb, wb[14] = pb
```

#### 4235. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32425` → after: `L32210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32210) · [Before (L32425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32425)

```diff
-         (0, Wd.i)(this.out, 0, Od);
+         (0, eb.l)(this.out, 0, wb);
```

#### 4236. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32439` → after: `L32224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32224) · [Before (L32439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32439)

```diff
-         td[0] = -Math.atan2(hd, Math.sqrt(Kd * Kd + vd * vd)), td[1] = -Math.atan2(vd, Kd) + Math.PI / 2, (0, Wd.u)(td, 0, this.quaternion, 0), (0, Wd.x)(this.quaternion, this.facing), this.turn(this.facing)
+         Ob[0] = -Math.atan2(lb, Math.sqrt(gb * gb + Lb * Lb)), Ob[1] = -Math.atan2(Lb, gb) + Math.PI / 2, (0, eb.z)(Ob, 0, this.quaternion, 0), (0, eb.D)(this.quaternion, this.facing), this.turn(this.facing)
```

#### 4237. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32447` → after: `L32232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32232) · [Before (L32447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32447)

```diff
-           if (Od[Wd + Fd] !== md[Fd]) return this.Bt.set(this.out, Wd), !0;
+           if (wb[eb + Hb] !== Mb[Hb]) return this.XO.set(this.out, eb), !0;
```

#### 4238. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32457` → after: `L32242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32242) · [Before (L32457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32457)

```diff
-   38815: (dd, Od, md) => {
+   38486: (bb, wb, Mb) => {
```

#### 4239. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32459` → after: `L32244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32244) · [Before (L32459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32459)

```diff
-       e: () => Fd,
+       d: () => Hb,
```

#### 4240. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32473` → after: `L32258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32258) · [Before (L32473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32473)

```diff
-   39741: (dd, Od, md) => {
+   39435: (bb, wb, Mb) => {
```

#### 4241. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32475-L32476` → after: `L32260-L32261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32260-L32261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32260-L32261) · [Before (L32475-L32476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32475-L32476)

```diff
-       c: () => hd,
-       d: () => td
+       e: () => lb,
+       g: () => Ob
```

#### 4242. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32478-L32481` → after: `L32263-L32266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32263-L32266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32263-L32266) · [Before (L32478-L32481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32478-L32481)

```diff
-     var Wd = md(38587),
-       Fd = md(1300),
-       Rd = md(699),
-       Xd = md(405);
+     var eb = Mb(38240),
+       Hb = Mb(1313),
+       pb = Mb(655),
+       Vb = Mb(382);
```

#### 4243. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32492` → after: `L32277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32277) · [Before (L32492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32492)

```diff
-           ...Object.fromEntries(Xd.zc.map((Od => [`Invisible ${Od} Light`, {
+           ...Object.fromEntries(Vb.Uc.map((wb => [`Invisible ${wb} Light`, {
```

#### 4244. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32494` → after: `L32279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32279) · [Before (L32494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32494)

```diff
-             altNames: [`${Od} Light Block`]
+             altNames: [`${wb} Light Block`]
```

#### 4245. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32502` → after: `L32287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R32287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L32287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L32287) · [Before (L32502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L32502)

```diff
-       hd = ["Dirt", "Grass Block", "Pine Grass Block", "Jungle Grass Block", "Dry Grass Block", "Sand", "Red Sand", "Ash", "Clay", "Snow", "Ice", "Maple Log", "Ancient Maple Log", "Maple Wood Planks", "Stone", "Messy Stone", "Smooth Stone", "Diorite", "Smooth Diorite", "Andesite" … [truncated]
+       lb = ["Dirt", "Grass Block", "Pine Grass Block", "Jungle Grass Block", "Dry Grass Block", "Sand", "Red Sand", "Ash", "Clay", "Snow", "Ice", "Maple Log", "Ancient Maple Log", "Maple Wood Planks", "Stone", "Messy Stone", "Smooth Stone", "Diorite", "Smooth Diorite", "Andesite" … [truncated]
```

#### 4246. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33850` → after: `L33635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33635) · [Before (L33850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33850)

```diff
-       [(0, Xd.Ob)("Sheep")]: {
+       [(0, Vb.$b)("Sheep")]: {
```

#### 4247. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33853` → after: `L33638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33638) · [Before (L33853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33853)

```diff
-       [(0, Xd.Ob)("Cow")]: {
+       [(0, Vb.$b)("Cow")]: {
```

#### 4248. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33856` → after: `L33641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33641) · [Before (L33856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33856)

```diff
-       [(0, Xd.Ob)("Pig")]: {
+       [(0, Vb.$b)("Pig")]: {
```

#### 4249. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33859` → after: `L33644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33644) · [Before (L33859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33859)

```diff
-       [(0, Xd.Ob)("Horse")]: {
+       [(0, Vb.$b)("Horse")]: {
```

#### 4250. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33862` → after: `L33647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33647) · [Before (L33862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33862)

```diff
-       [(0, Xd.Ob)("Camel")]: {
+       [(0, Vb.$b)("Camel")]: {
```

#### 4251. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33865` → after: `L33650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33650) · [Before (L33865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33865)

```diff
-       [(0, Xd.Ob)("Wolf")]: {
+       [(0, Vb.$b)("Wolf")]: {
```

#### 4252. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33868` → after: `L33653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33653) · [Before (L33868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33868)

```diff
-       [(0, Xd.Ob)("Deer")]: {
+       [(0, Vb.$b)("Deer")]: {
```

#### 4253. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33871` → after: `L33656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33656) · [Before (L33871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33871)

```diff
-       [(0, Xd.Ob)("Wildcat")]: {
+       [(0, Vb.$b)("Wildcat")]: {
```

#### 4254. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33908` → after: `L33693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33693) · [Before (L33908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33908)

```diff
-       return Object.fromEntries(Rd.B.map((dd => [(0, Xd.Rb)(dd), qd(dd, [`Mob ${dd} Spawn Egg`])])))
+       return Object.fromEntries(pb.w.map((bb => [(0, Vb.dc)(bb), Cb(bb, [`Mob ${bb} Spawn Egg`])])))
```

#### 4255. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33912` → after: `L33697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33697) · [Before (L33912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33912)

```diff
-       return Object.fromEntries(Rd.B.map((dd => [(0, Xd.Tb)(dd), qd(dd, [`${dd} Mob Spawner Block`])])))
+       return Object.fromEntries(pb.w.map((bb => [(0, Vb.gc)(bb), Cb(bb, [`${bb} Mob Spawner Block`])])))
```

#### 4256. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L33916` → after: `L33701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L33701) · [Before (L33916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L33916)

```diff
-       const md = Rd.k.includes(dd);
+       const Mb = pb.f.includes(bb);
```
