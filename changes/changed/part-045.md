# Changed — Bundle Modifications Report (Part 045 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `45 / 47` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 044](part-044.md) · [Part 046 →](part-046.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1003 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 809. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10384` → after: `L10397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397) · [Before (L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10384)

```diff
-               if (!Number.isInteger(qQ.clusterBoxSize) || qQ.clusterBoxSize < 2 || qQ.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${qQ.seedPrefix}" has invalid clusterBoxSize (${qQ.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(fk.clusterBoxSize) || fk.clusterBoxSize < 2 || fk.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${fk.seedPrefix}" has invalid clusterBoxSize (${fk.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 810. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10386` → after: `L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399) · [Before (L10386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10386)

```diff
-               QQ > DQ && (DQ = QQ), kQ += Math.max(qQ.uo, null !== (vQ = qQ.Ao) && void 0 !== vQ ? vQ : qQ.uo)
+               kk > bk && (bk = kk), rk += Math.max(fk.ND, null !== (Pk = fk.Df) && void 0 !== Pk ? Pk : fk.ND)
```

#### 811. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10388-L10389` → after: `L10401-L10402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10401-L10402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10401-L10402) · [Before (L10388-L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10388-L10389)

```diff
-             if (kQ > 1) throw new Error(`Cave decoration cluster chances sum to ${kQ} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-             this.pointsGen = new qQ.e("caveDeco", 10, !1, !0, wQ, 4, FQ, null, !0), this.pointsGen.assertReachableFromChunkCentre(FQ, DQ), this.configs = oQ, this.maxHalfBox = DQ
+             if (rk > 1) throw new Error(`Cave decoration cluster chances sum to ${rk} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             this.pointsGen = new fk.d("caveDeco", 10, !1, !0, ik, 4, ek, null, !0), this.pointsGen.assertReachableFromChunkCentre(ek, bk), this.configs = Sk, this.maxHalfBox = bk
```

#### 812. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10393` → after: `L10406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10406) · [Before (L10393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10393)

```diff
-               oQ = this.tx,
+               Sk = this.oU,
```

#### 813. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10410` → after: `L10423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10423) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410)

```diff
-             for (const kQ of oQ) kQ.y >= wQ && kQ.y < DQ && QQ.set(kQ.x - FQ, kQ.y - wQ, kQ.z - LQ, kQ.um)
+             for (const rk of Sk) rk.y >= ik && rk.y < bk && kk.set(rk.x - ek, rk.y - ik, rk.z - Dk, rk.wP)
```

#### 814. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10415` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10428) · [Before (L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10415)

```diff
-             const uQ = new mQ.e(`${this.seed}|${QQ}|${FQ}|cluster`),
+             const mk = new xk.j(`${this.seed}|${kk}|${ek}|cluster`),
```

#### 815. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10429` → after: `L10442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10442) · [Before (L10429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10429)

```diff
-             if (this.scatterClusterCells(QQ, AQ, FQ, eQ, DQ, uQ, MQ), !(MQ.length < eQ.bo))
+             if (this.scatterClusterCells(kk, Hk, ek, lk, bk, mk, pk), !(pk.length < lk.JD))
```

#### 816. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10435` → after: `L10448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10448) · [Before (L10435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10435)

```diff
-               Ho: vQ,
+               RD: Pk,
```

#### 817. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10455` → after: `L10468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10468) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455)

```diff
-                     um: MQ.um
+                     wP: pk.wP
```

#### 818. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10469` → after: `L10482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10482) · [Before (L10469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10469)

```diff
-             this.prefabGenerator = LQ, this.seed = void 0, this.tx = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = Dk, this.seed = void 0, this.oU = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 819. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10472` → after: `L10485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10485) · [Before (L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10472)

```diff
-             if (wQ + this.tx <= DQ.u.bedrockLevel) return {
+             if (ik + this.oU <= bk.t.bedrockLevel) return {
```

#### 820. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10475` → after: `L10488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10488) · [Before (L10475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10475)

```diff
-             const MQ = new CQ.b,
+             const yk = new Kk.d,
```

#### 821. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10479-L10481` → after: `L10492-L10494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10492-L10494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10492-L10494) · [Before (L10479-L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10479-L10481)

```diff
-             if (pQ >= wQ && GQ < wQ + this.tx)
-               for (let LQ = FQ; LQ < FQ + this.tx; LQ++)
-                 for (let vQ = qQ; vQ < qQ + this.tx; vQ++) {
+             if (Lk >= ik && Yk < ik + this.oU)
+               for (let Dk = ek; Dk < ek + this.oU; Dk++)
+                 for (let Pk = fk; Pk < fk + this.oU; Pk++) {
```

#### 822. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10484-L10486` → after: `L10497-L10499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10497-L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10497-L10499) · [Before (L10484-L10486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10484-L10486)

```diff
-                     HQ = kQ.get(LQ, vQ, oQ.c.GroundHeight);
-                   if (HQ >= wQ && HQ < wQ + this.tx) {
-                     const mQ = kQ.get(LQ, vQ, oQ.c.IsLake) === DQ.j ? uQ.getDryBedBlock(LQ, HQ, vQ) : uQ.getTopsoilBlock(LQ, HQ, vQ);
+                     Kk = rk.get(Dk, Pk, Sk.d.GroundHeight);
+                   if (Kk >= ik && Kk < ik + this.oU) {
+                     const mk = rk.get(Dk, Pk, Sk.d.IsLake) === bk.h ? Mk.getDryBedBlock(Dk, Kk, Pk) : Mk.getTopsoilBlock(Dk, Kk, Pk);
```

#### 823. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10490-L10492` → after: `L10503-L10505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10503-L10505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10503-L10505) · [Before (L10490-L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10490-L10492)

```diff
-             if (pQ + 1 >= wQ && GQ - 4 < wQ + this.tx)
-               for (let LQ = FQ; LQ < FQ + this.tx; LQ++)
-                 for (let DQ = qQ; DQ < qQ + this.tx; DQ++) {
+             if (Lk + 1 >= ik && Yk - 4 < ik + this.oU)
+               for (let Dk = ek; Dk < ek + this.oU; Dk++)
+                 for (let bk = fk; bk < fk + this.oU; bk++) {
```

#### 824. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10495-L10496` → after: `L10508-L10509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10508-L10509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10508-L10509) · [Before (L10495-L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495-L10496)

```diff
-                     uQ = kQ.get(LQ, DQ, oQ.c.GroundHeight),
-                     HQ = Math.min(uQ, wQ + this.tx);
+                     Mk = rk.get(Dk, bk, Sk.d.GroundHeight),
+                     Kk = Math.min(Mk, ik + this.oU);
```

#### 825. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10504-L10505` → after: `L10517-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10517-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10517-L10518) · [Before (L10504-L10505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10504-L10505)

```diff
-               for (let wQ = Math.max(qQ - 4, 0); wQ < Math.min(qQ, this.tx); wQ++) QQ.set(FQ, wQ, oQ, this.dirtId);
-               qQ >= 0 && qQ < this.tx && QQ.set(FQ, qQ, oQ, this.grassBlockId)
+               for (let ik = Math.max(fk - 4, 0); ik < Math.min(fk, this.oU); ik++) kk.set(ek, ik, Sk, this.dirtId);
+               fk >= 0 && fk < this.oU && kk.set(ek, fk, Sk, this.grassBlockId)
```

#### 826. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10509-L10510` → after: `L10522-L10523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10522-L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10522-L10523) · [Before (L10509-L10510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10509-L10510)

```diff
-               for (let DQ = FQ; DQ < FQ + this.tx; DQ++)
-                 for (let vQ = qQ; vQ < qQ + this.tx; vQ++) {
+               for (let bk = ek; bk < ek + this.oU; bk++)
+                 for (let Pk = fk; Pk < fk + this.oU; Pk++) {
```

#### 827. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10512-L10513` → after: `L10525-L10526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10525-L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10525-L10526) · [Before (L10512-L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10512-L10513)

```diff
-                     uQ = kQ.get(DQ, vQ, oQ.c.GroundHeight),
-                     HQ = Math.min(uQ - 4, wQ + this.tx),
+                     Mk = rk.get(bk, Pk, Sk.d.GroundHeight),
+                     Kk = Math.min(Mk - 4, ik + this.oU),
```

#### 828. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10518` → after: `L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10531) · [Before (L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10518)

```diff
-                     QQ.set(DQ - FQ, LQ - wQ, vQ - qQ, 0 !== oQ ? oQ : mQ)
+                     kk.set(bk - ek, Dk - ik, Pk - fk, 0 !== Sk ? Sk : mk)
```

#### 829. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10522-L10524` → after: `L10535-L10537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10535-L10537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10537) · [Before (L10522-L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10522-L10524)

```diff
-             if (pQ - 4 >= wQ && this.oreGenerator.addOresToChunk(QQ, FQ, wQ, qQ, 4, kQ, bQ), pQ >= wQ && (tQ.addCavesToChunk(QQ, FQ, wQ, qQ, kQ, HQ), yF.addCaveDecorationsToChunk(QQ, FQ, wQ, qQ, this.tx, AQ)), DQ.u.bedrockLevel >= wQ && DQ.u.bedrockLevel < wQ + this.tx)
-               for (let LQ = FQ; LQ < FQ + this.tx; LQ++)
-                 for (let oQ = qQ; oQ < qQ + this.tx; oQ++) QQ.set(LQ - FQ, DQ.u.bedrockLevel - wQ, oQ - qQ, this.bedrockId);
+             if (Lk - 4 >= ik && this.oreGenerator.addOresToChunk(kk, ek, ik, fk, 4, rk, Uk), Lk >= ik && (Pk.e.addCavesToChunk(kk, ek, ik, fk, rk, nk), Be.addCaveDecorationsToChunk(kk, ek, ik, fk, this.oU, lk)), bk.t.bedrockLevel >= ik && bk.t.bedrockLevel < ik + this.oU)
+               for (let Dk = ek; Dk < ek + this.oU; Dk++)
+                 for (let Sk = fk; Sk < fk + this.oU; Sk++) kk.set(Dk - ek, bk.t.bedrockLevel - ik, Sk - fk, this.bedrockId);
```

#### 830. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10527-L10529` → after: `L10540-L10542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10540-L10542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10540-L10542) · [Before (L10527-L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10527-L10529)

```diff
-               for (let oQ = FQ; oQ < FQ + this.tx; oQ++)
-                 for (let DQ = wQ; DQ < wQ + this.tx; DQ++)
-                   for (let kQ = qQ; kQ < qQ + this.tx; kQ++) {
+               for (let Sk = ek; Sk < ek + this.oU; Sk++)
+                 for (let bk = ik; bk < ik + this.oU; bk++)
+                   for (let rk = fk; rk < fk + this.oU; rk++) {
```

#### 831. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10540-L10541` → after: `L10553-L10554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10553-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10554) · [Before (L10540-L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10540-L10541)

```diff
-               for (let wQ = Math.max(oQ, 0); wQ < Math.min(DQ, this.tx); wQ++) QQ.set(FQ, wQ, qQ, this.waterId);
-               DQ >= 0 && DQ < this.tx && QQ.set(FQ, DQ, qQ, iQ[LQ + 4])
+               for (let ik = Math.max(Sk, 0); ik < Math.min(bk, this.oU); ik++) kk.set(ek, ik, fk, this.waterId);
+               bk >= 0 && bk < this.oU && kk.set(ek, bk, fk, jk[Dk + 4])
```

#### 832. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10544-L10549` → after: `L10557-L10562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10557-L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10557-L10562) · [Before (L10544-L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544-L10549)

```diff
-             if (this.addSurfaceBlocks(QQ, wQ, eQ.lilyPads), cQ && pQ >= wQ && GQ < wQ + this.tx)
-               for (let tQ = FQ; tQ < FQ + this.tx; tQ++)
-                 for (let vQ = qQ; vQ < qQ + this.tx; vQ++) {
-                   const uQ = kQ.get(tQ, vQ, oQ.c.WaterHeight),
-                     HQ = kQ.get(tQ, vQ, oQ.c.GroundHeight);
-                   if (uQ !== DQ.s && HQ >= wQ && HQ < wQ + this.tx)
+             if (this.addSurfaceBlocks(kk, ik, pk.lilyPads), Ck && Lk >= ik && Yk < ik + this.oU)
+               for (let Pk = ek; Pk < ek + this.oU; Pk++)
+                 for (let mk = fk; mk < fk + this.oU; mk++) {
+                   const Mk = rk.get(Pk, mk, Sk.d.WaterHeight),
+                     Kk = rk.get(Pk, mk, Sk.d.GroundHeight);
+                   if (Mk !== bk.q && Kk >= ik && Kk < ik + this.oU)
```

#### 833. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10553` → after: `L10566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566) · [Before (L10553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553)

```diff
-                       if ((0, LQ.D)(oQ, tQ, vQ) < 100) WQ === oQ[0] && RQ === oQ[1] || (WQ = oQ[0], RQ = oQ[1], OQ = new mQ.e(`${this.seed}${WQ}${RQ}`).next() < .3 ? this.chalkId : this.clayId), QQ.set(tQ - FQ, HQ - wQ, vQ - qQ, OQ), HQ - 1 >= wQ && QQ.set(tQ - FQ, HQ - 1 - wQ, v … [truncated]
+                       if ((0, Dk.y)(Sk, Pk, mk) < 100) sk === Sk[0] && Vk === Sk[1] || (sk = Sk[0], Vk = Sk[1], Fk = new xk.j(`${this.seed}${sk}${Vk}`).next() < .3 ? this.chalkId : this.clayId), kk.set(Pk - ek, Kk - ik, mk - fk, Fk), Kk - 1 >= ik && kk.set(Pk - ek, Kk - 1 - ik, m … [truncated]
```

#### 834. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10562-L10565` → after: `L10575-L10578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10575-L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10575-L10578) · [Before (L10562-L10565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10562-L10565)

```diff
-               for (let oQ = FQ; oQ < FQ + this.tx; oQ++)
-                 for (let DQ = wQ; DQ < wQ + this.tx; DQ++)
-                   for (let kQ = qQ; kQ < qQ + this.tx; kQ++) {
-                     const vQ = lQ.d.getBlockFromFixedPointPrefab(oQ, DQ, kQ, LQ);
+               for (let Sk = ek; Sk < ek + this.oU; Sk++)
+                 for (let bk = ik; bk < ik + this.oU; bk++)
+                   for (let rk = fk; rk < fk + this.oU; rk++) {
+                     const Pk = dk.e.getBlockFromFixedPointPrefab(Sk, bk, rk, Dk);
```

#### 835. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10586` → after: `L10599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10599) · [Before (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10586)

```diff
-               qQ >= 0 && qQ < this.tx && QQ.set(wQ[LQ], qQ, wQ[LQ + 2], wQ[LQ + 3])
+               fk >= 0 && fk < this.oU && kk.set(ik[Dk], fk, ik[Dk + 2], ik[Dk + 3])
```

#### 836. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10600` → after: `L10613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10613) · [Before (L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10600)

```diff
-             this.tx = QQ, this.biomeSelector = FQ, this.seed = wQ, this.random = new mQ.e(""), this.lilyPadId = void 0, this.lilyPadId = LQ["Lily Pad"].id
+             this.oU = kk, this.biomeSelector = ek, this.seed = ik, this.random = new xk.j(""), this.lilyPadId = void 0, this.lilyPadId = Dk["Lily Pad"].id
```

#### 837. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10610-L10611` → after: `L10623-L10624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10623-L10624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10623-L10624) · [Before (L10610-L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10610-L10611)

```diff
-             for (let AQ = QQ; AQ < QQ + this.tx; AQ++)
-               for (let eQ = FQ; eQ < FQ + this.tx; eQ++) {
+             for (let wk = kk; wk < kk + this.oU; wk++)
+               for (let lk = ek; lk < ek + this.oU; lk++) {
```

#### 838. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10613-L10614` → after: `L10626-L10627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10626-L10627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626-L10627) · [Before (L10613-L10614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10613-L10614)

```diff
-                   GQ = wQ.getOrGenerate(AQ, eQ, oQ.c.GroundHeight),
-                   pQ = wQ.getOrGenerate(AQ, eQ, oQ.c.WaterHeight);
+                   yk = ik.getOrGenerate(wk, lk, Sk.d.GroundHeight),
+                   Yk = ik.getOrGenerate(wk, lk, Sk.d.WaterHeight);
```

#### 839. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10618-L10619` → after: `L10631-L10632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10631-L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10631-L10632) · [Before (L10618-L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10618-L10619)

```diff
-                 if (pQ !== DQ.s) {
-                   xQ = !0, GQ < pQ && vQ.push(cQ, CQ, GQ + 1, pQ, MQ.topwaterBlockType), MQ.hasScatteredLakes && 1 === wQ.getOrGenerate(AQ, eQ, oQ.c.IsLake) && (this.random.reseed(`${AQ}|${eQ}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(AQ, eQ, wQ) && uQ … [truncated]
+                 if (Yk !== bk.q) {
+                   Hk = !0, yk < Yk && mk.push(Lk, Ck, yk + 1, Yk, pk.topwaterBlockType), pk.hasScatteredLakes && 1 === ik.getOrGenerate(wk, lk, Sk.d.IsLake) && (this.random.reseed(`${wk}|${lk}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(wk, lk, ik) && Kk … [truncated]
```

#### 840. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10623-L10624` → after: `L10636-L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637) · [Before (L10623-L10624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10623-L10624)

```diff
-                 if (MQ.hasScatteredLakes && this.isBesideLake(AQ, eQ, wQ) && (this.random.reseed(`${AQ}|${eQ}|${this.seed}oasisShore`), this.random.next() < .85 && (mQ.push(cQ, GQ, CQ), SQ = this.biomeSelector.baseBiome.floraGenerator)), !tQ.isInCave(AQ, GQ, eQ, LQ) && !lQ.d.isWi … [truncated]
-                   for (let wQ = GQ + 1; wQ <= GQ + MQ.maxFloraHeight; wQ += this.tx) HQ.startY = wQ, SQ.addBiomeFloraToColumn(HQ, QQ, FQ, AQ, wQ, eQ, GQ)
+                 if (pk.hasScatteredLakes && this.isBesideLake(wk, lk, ik) && (this.random.reseed(`${wk}|${lk}|${this.seed}oasisShore`), this.random.next() < .85 && (Mk.push(Lk, yk, Ck), Ak = this.biomeSelector.baseBiome.floraGenerator)), !Pk.e.isInCave(wk, yk, lk, Dk) && !dk.e.is … [truncated]
+                   for (let ik = yk + 1; ik <= yk + pk.maxFloraHeight; ik += this.oU) xk.startY = ik, Ak.addBiomeFloraToColumn(xk, kk, ek, wk, ik, lk, yk)
```

#### 841. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10637` → after: `L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10650) · [Before (L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10637)

```diff
-             return wQ.getOrGenerate(QQ + 1, FQ, oQ.c.WaterHeight) !== DQ.s && wQ.getOrGenerate(QQ - 1, FQ, oQ.c.WaterHeight) !== DQ.s && wQ.getOrGenerate(QQ, FQ + 1, oQ.c.WaterHeight) !== DQ.s && wQ.getOrGenerate(QQ, FQ - 1, oQ.c.WaterHeight) !== DQ.s
+             return ik.getOrGenerate(kk + 1, ek, Sk.d.WaterHeight) !== bk.q && ik.getOrGenerate(kk - 1, ek, Sk.d.WaterHeight) !== bk.q && ik.getOrGenerate(kk, ek + 1, Sk.d.WaterHeight) !== bk.q && ik.getOrGenerate(kk, ek - 1, Sk.d.WaterHeight) !== bk.q
```

#### 842. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10643` → after: `L10656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10656) · [Before (L10643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10643)

```diff
-             return wQ.getOrGenerate(QQ, FQ, oQ.c.WaterHeight) !== DQ.s && 1 === wQ.getOrGenerate(QQ, FQ, oQ.c.IsLake)
+             return ik.getOrGenerate(kk, ek, Sk.d.WaterHeight) !== bk.q && 1 === ik.getOrGenerate(kk, ek, Sk.d.IsLake)
```

#### 843. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10646` → after: `L10659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10659) · [Before (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10646)

```diff
-         var ww = wQ(60770);
+         var Oe = ik(39243);
```

#### 844. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10651` → after: `L10664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10664) · [Before (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10651)

```diff
-             if (this.tx = QQ, this.hashChunkContents = uQ, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.oU = kk, this.hashChunkContents = Kk, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 845. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10653` → after: `L10666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10666) · [Before (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10653)

```diff
-               Lw = new HQ.d("chunk columns", QQ, 4e4)
+               ge = new we.c("chunk columns", kk, 4e4)
```

#### 846. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10655-L10656` → after: `L10668-L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10668-L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10668-L10669) · [Before (L10655-L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10655-L10656)

```diff
-             this.chunkColumnInfos = Lw.partition(), this.caveGenerator = new tQ(qQ, QQ, FQ, null !== (bQ = null === vQ || void 0 === vQ ? void 0 : vQ.Fo.Lo) && void 0 !== bQ ? bQ : "Lava");
-             const pQ = new TF(FQ, qQ, QQ, null !== (YQ = null === vQ || void 0 === vQ ? void 0 : vQ.ro) && void 0 !== YQ ? YQ : [...NF, ...null !== (xQ = null === mQ || void 0 === mQ ? void 0 : mQ.fo) && void 0 !== xQ ? xQ : []]),
+             this.chunkColumnInfos = ge.partition(), this.caveGenerator = new Pk.e(fk, kk, ek, null !== (xk = null === mk || void 0 === mk ? void 0 : mk.BD.TD) && void 0 !== xk ? xk : "Lava");
+             const yk = new se(ek, fk, kk, null !== (nk = null === mk || void 0 === mk ? void 0 : mk.xf) && void 0 !== nk ? nk : [...je, ...null !== (Uk = null === Mk || void 0 === Mk ? void 0 : Mk.Lf) && void 0 !== Uk ? Uk : []]),
```

#### 847. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10658` → after: `L10671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10671) · [Before (L10658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10658)

```diff
-                 tx: QQ,
+                 oU: kk,
```

#### 848. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10666-L10669` → after: `L10679-L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10679-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679-L10682) · [Before (L10666-L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10666-L10669)

```diff
-               CQ = null !== (AQ = null === vQ || void 0 === vQ ? void 0 : vQ.Go) && void 0 !== AQ ? AQ : null,
-               SQ = null !== (eQ = null === mQ || void 0 === mQ ? void 0 : mQ.buildBiomes) && void 0 !== eQ ? eQ : null,
-               iQ = null !== CQ ? (0, KF.g)(CQ, cQ) : null !== SQ ? this.buildTerrainBiomes(SQ, cQ) : (0, KF.k)(cQ);
-             this.biomeSelector = new KF.c(this, pQ, qQ, QQ, FQ, iQ), this.treeGenerator = new SF(this, this.biomeSelector, QQ, qQ, FQ), this.fixedPointPrefabTracker = new lQ.d(kQ, QQ), this.prefabGenerator = new xF({
+               Lk = null !== (Hk = null === mk || void 0 === mk ? void 0 : mk.bf) && void 0 !== Hk ? Hk : null,
+               Ck = null !== (wk = null === Mk || void 0 === Mk ? void 0 : Mk.buildBiomes) && void 0 !== wk ? wk : null,
+               Ak = null !== Lk ? (0, de.g)(Lk, Yk) : null !== Ck ? this.buildTerrainBiomes(Ck, Yk) : (0, de.i)(Yk);
+             this.biomeSelector = new de.d(this, yk, fk, kk, ek, Ak), this.treeGenerator = new Ue(this, this.biomeSelector, kk, fk, ek), this.fixedPointPrefabTracker = new dk.e(rk, kk), this.prefabGenerator = new Se({
```

#### 849. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10671` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684) · [Before (L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10671)

```diff
-               tx: QQ,
+               oU: kk,
```

#### 850. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10675` → after: `L10688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10688) · [Before (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10675)

```diff
-                 [oQ.m.SURFACE]: {
+                 [Sk.i.SURFACE]: {
```

#### 851. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10690) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-                     [oQ.j.MEDIUM]: {
+                     [Sk.f.MEDIUM]: {
```

#### 852. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10680` → after: `L10693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10693) · [Before (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10680)

```diff
-                     [oQ.j.HIGH]: {
+                     [Sk.f.HIGH]: {
```

#### 853. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10683` → after: `L10696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10696) · [Before (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10683)

```diff
-                     [oQ.j.VERY_HIGH]: {
+                     [Sk.f.VERY_HIGH]: {
```

#### 854. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10688` → after: `L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701) · [Before (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10688)

```diff
-                 [oQ.m.UNDERGROUND]: {
+                 [Sk.i.UNDERGROUND]: {
```

#### 855. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10690` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703) · [Before (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10690)

```diff
-                     [oQ.j.MEDIUM]: {
+                     [Sk.f.MEDIUM]: {
```

#### 856. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10693-L10694` → after: `L10706-L10707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10706-L10707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706-L10707) · [Before (L10693-L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10693-L10694)

```diff
-                     [oQ.j.HIGH]: null,
-                     [oQ.j.VERY_HIGH]: null
+                     [Sk.f.HIGH]: null,
+                     [Sk.f.VERY_HIGH]: null
```

#### 857. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10699` → after: `L10712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10712) · [Before (L10699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10699)

```diff
-             }), this.noWaterHeightmapGenerator = new ww.g((0, ww.h)(qQ)), this.heightmapPerturb = new LQ.f([{
+             }), this.noWaterHeightmapGenerator = new Oe.g((0, Oe.h)(fk)), this.heightmapPerturb = new Dk.g([{
```

#### 858. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10708` → after: `L10721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10721) · [Before (L10708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10708)

```diff
-             }], `${qQ}HeightmapPerturb`);
+             }], `${fk}HeightmapPerturb`);
```

#### 859. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10727) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-             this.waterBodyGenerator = new rF(this.biomeSelector, this.noWaterHeightmapGenerator, qQ, QQ, WQ, this.needOutsideWaterDist, DQ, null === (MQ = null === vQ || void 0 === vQ ? void 0 : vQ.Qo) || void 0 === MQ || MQ), this.caveDecorationGenerator = new yF(FQ, QQ, qQ, nul … [truncated]
+             this.waterBodyGenerator = new Le(this.biomeSelector, this.noWaterHeightmapGenerator, fk, kk, jk, this.needOutsideWaterDist, bk, null === (lk = null === mk || void 0 === mk ? void 0 : mk.XD) || void 0 === lk || lk), this.caveDecorationGenerator = new Be(ek, kk, fk, nul … [truncated]
```

#### 860. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10733` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10746) · [Before (L10733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10733)

```diff
-             const wQ = this.tx,
+             const ik = this.oU,
```

#### 861. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10751` → after: `L10764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10764) · [Before (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10751)

```diff
-               if ((null !== (qQ = LQ.get(oQ.key)) && void 0 !== qQ ? qQ : oQ) !== oQ) throw new Error(`A world-gen terrain built two biomes keyed "${oQ.key}"`);
+               if ((null !== (fk = Dk.get(Sk.key)) && void 0 !== fk ? fk : Sk) !== Sk) throw new Error(`A world-gen terrain built two biomes keyed "${Sk.key}"`);
```

#### 862. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10761-L10762` → after: `L10774-L10775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10774-L10775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10774-L10775) · [Before (L10761-L10762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10761-L10762)

```diff
-               const QQ = `${Math.floor(vQ.x/this.tx)}|${Math.floor(vQ.z/this.tx)}`,
-                 FQ = null !== (DQ = oQ.get(QQ)) && void 0 !== DQ ? DQ : [];
+               const kk = `${Math.floor(Pk.x/this.oU)}|${Math.floor(Pk.z/this.oU)}`,
+                 ek = null !== (bk = Sk.get(kk)) && void 0 !== bk ? bk : [];
```

#### 863. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10767-L10768` → after: `L10780-L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10780-L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10780-L10781) · [Before (L10767-L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10767-L10768)

```diff
-               const QQ = Math.floor(vQ[0].x / this.tx) * this.tx,
-                 FQ = Math.floor(vQ[0].z / this.tx) * this.tx,
+               const kk = Math.floor(Pk[0].x / this.oU) * this.oU,
+                 ek = Math.floor(Pk[0].z / this.oU) * this.oU,
```

#### 864. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10789` → after: `L10802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10802) · [Before (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10789)

```diff
-                   Eq: mQ.prefab.name
+                   QD: mk.prefab.name
```

#### 865. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10822` → after: `L10835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10835) · [Before (L10822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10822)

```diff
-               uQ = LQ.getOrGenerate(QQ + Math.floor(this.tx / 2), FQ + Math.floor(this.tx / 2))[0].biome.oreGenerator.getOreBlocksForChunk(QQ, FQ),
+               Mk = Dk.getOrGenerate(kk + Math.floor(this.oU / 2), ek + Math.floor(this.oU / 2))[0].biome.oreGenerator.getOreBlocksForChunk(kk, ek),
```

#### 866. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10840` → after: `L10853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10853) · [Before (L10840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10840)

```diff
-             return LQ.p.create(this.tx, [QQ, FQ], this.biomeSelector)
+             return Dk.n.create(this.oU, [kk, ek], this.biomeSelector)
```

#### 867. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10843-L10844` → after: `L10856-L10857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10856-L10857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10856-L10857) · [Before (L10843-L10844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10843-L10844)

```diff
-             const DQ = new ww.e(wQ, qQ, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-             return LQ.o.create(this.tx, [QQ, FQ], oQ.c.NumFields, DQ)
+             const bk = new Oe.d(ik, fk, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+             return Dk.j.create(this.oU, [kk, ek], Sk.d.NumFields, bk)
```

#### 868. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10861) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-       60772: (QQ, FQ, wQ) => {
+       39250: (kk, ek, ik) => {
```

#### 869. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10850` → after: `L10863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10863) · [Before (L10850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10850)

```diff
-           d: () => aQ,
+           c: () => Wk,
```

#### 870. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10852` → after: `L10865-L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10865-L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10865-L10866) · [Before (L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10852)

```diff
-           f: () => SQ,
+           g: () => Ak,
+           h: () => jk,
```

#### 871. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10854` → after: `L10868-L10869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10868-L10869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10868-L10869) · [Before (L10854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10854)

```diff
-           l: () => IQ,
+           j: () => vk,
+           n: () => uk,
```

#### 872. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10856` → after: `L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10871) · [Before (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10856)

```diff
-           p: () => rQ,
+           q: () => yk,
```

#### 873. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10861-L10863` → after: `L10876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876) · [Before (L10861-L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10861-L10863)

```diff
-           x: () => cQ,
-           z: () => MQ,
-           D: () => eQ
+           y: () => lk
```

#### 874. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10865` → after: `L10878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10878) · [Before (L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10865)

```diff
-         var LQ = wQ(2786),
+         var Dk = ik(2781),
```

#### 875. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10878` → after: `L10891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891) · [Before (L10878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10878)

```diff
-             const FQ = "function" == typeof QQ ? QQ : function(QQ) {
+             const ek = "function" == typeof kk ? kk : function(kk) {
```

#### 876. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11087` → after: `L11100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11100) · [Before (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11087)

```diff
-         var xQ = wQ(60776);
+         var Uk = ik(39253);
```

#### 877. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11116` → after: `L11129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11129) · [Before (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11116)

```diff
-             kD: MQ(QQ, oQ, DQ),
+             Vb: pk(kk, Sk, bk),
```

#### 878. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11147` → after: `L11160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11160) · [Before (L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11147)

```diff
-             for (let wQ = 0; wQ < QQ.length; wQ++) this._simplexes.push(new YQ(`${FQ}${wQ}`))
+             for (let ik = 0; ik < kk.length; ik++) this._simplexes.push(new nk(`${ek}${ik}`))
```

#### 879. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11172` → after: `L11185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11185) · [Before (L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11172)

```diff
-             for (let qQ = 0; qQ < QQ.length; qQ++) this._simplexes.push(new YQ(`${wQ}${qQ}`));
+             for (let fk = 0; fk < kk.length; fk++) this._simplexes.push(new nk(`${ik}${fk}`));
```

#### 880. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11180` → after: `L11193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11193) · [Before (L11180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11180)

```diff
-               if (wQ - this.remainingAmplitudes[LQ] > this.threshold.high || wQ + this.remainingAmplitudes[LQ] < this.threshold.low) return xQ.d;
+               if (ik - this.remainingAmplitudes[Dk] > this.threshold.high || ik + this.remainingAmplitudes[Dk] < this.threshold.low) return Uk.e;
```

#### 881. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11308` → after: `L11321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11321) · [Before (L11308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11308)

```diff
-             if (void 0 === LQ) throw new Error(`Number not found for x=${QQ}, z=${FQ}, thirdIndex=${wQ}`);
+             if (void 0 === Dk) throw new Error(`Number not found for x=${kk}, z=${ek}, thirdIndex=${ik}`);
```

#### 882. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11357` → after: `L11370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11370) · [Before (L11357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11357)

```diff
-             if (void 0 === qQ) throw new Error(`Number not found for x=${QQ}, z=${FQ}, thirdIndex=${wQ}, fourthIndex=${LQ}`);
+             if (void 0 === fk) throw new Error(`Number not found for x=${kk}, z=${ek}, thirdIndex=${ik}, fourthIndex=${Dk}`);
```

#### 883. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11387` → after: `L11400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11400) · [Before (L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11387)

```diff
-       60776: (QQ, FQ, wQ) => {
+       39253: (kk, ek, ik) => {
```

#### 884. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11389-L11395` → after: `L11402-L11408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11402-L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11402-L11408) · [Before (L11389-L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11389-L11395)

```diff
-           d: () => vQ,
-           g: () => DQ,
-           j: () => mQ,
-           m: () => oQ,
-           p: () => kQ,
-           s: () => qQ,
-           u: () => LQ
+           e: () => Pk,
+           f: () => bk,
+           h: () => mk,
+           l: () => Sk,
+           o: () => rk,
+           q: () => fk,
+           t: () => Dk
```

#### 885. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11408` → after: `L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11421) · [Before (L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11408)

```diff
-       60785: (QQ, FQ, wQ) => {
+       39261: (kk, ek, ik) => {
```

#### 886. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11411` → after: `L11424-L11425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11424-L11425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11424-L11425) · [Before (L11411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11411)

```diff
-           c: () => LQ,
+           d: () => Dk,
+           e: () => Pk,
```

#### 887. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413-L11415` → after: `L11427-L11428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11427-L11428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11427-L11428) · [Before (L11413-L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413-L11415)

```diff
-           j: () => kQ,
-           m: () => DQ,
-           q: () => oQ
+           i: () => bk,
+           l: () => Sk
```

#### 888. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11447) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       4136: (QQ, FQ, wQ) => {
+       4206: (kk, ek, ik) => {
```

#### 889. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11439-L11441` → after: `L11450-L11454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11450-L11454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11450-L11454) · [Before (L11439-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11439-L11441)

```diff
-           g: () => kQ,
-           k: () => DQ,
-           l: () => qQ
+           f: () => Sk,
+           j: () => Dk,
+           n: () => rk,
+           r: () => bk,
+           v: () => fk
```

#### 890. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11467` → after: `L11480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11480) · [Before (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11467)

```diff
-             if (this.distribution = void 0, QQ.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(QQ)}`);
+             if (this.distribution = void 0, kk.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(kk)}`);
```

#### 891. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11472` → after: `L11485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11485) · [Before (L11472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11472)

```diff
-               if (FQ.has(LQ)) throw new Error(`Values must be unique: ${JSON.stringify(QQ)}`);
+               if (ek.has(Dk)) throw new Error(`Values must be unique: ${JSON.stringify(kk)}`);
```

#### 892. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11475` → after: `L11488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11488) · [Before (L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11475)

```diff
-               if (oQ <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(QQ)}`);
+               if (Sk <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(kk)}`);
```

#### 893. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11500` → after: `L11513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11513) · [Before (L11500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11500)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, QQ > FQ) throw new Error(`Min must be less than or equal to Max, but Min=${QQ} and Max=${FQ}`);
+             if (this.offset = void 0, this.multiplier = void 0, kk > ek) throw new Error(`Min must be less than or equal to Max, but Min=${kk} and Max=${ek}`);
```

#### 894. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11510` → after: `L11523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11523) · [Before (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11510)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new DQ(QQ, FQ, wQ), !Number.isInteger(QQ) || !Number.isInteger(FQ)) throw new Error(`Min and Max must be integers, but Min=${QQ} and Max=${FQ}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new bk(kk, ek, ik), !Number.isInteger(kk) || !Number.isInteger(ek)) throw new Error(`Min and Max must be integers, but Min=${kk} and Max=${ek}`)
```

#### 895. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11539) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-       619: (QQ, FQ, wQ) => {
+       594: (kk, ek, ik) => {
```

#### 896. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11529-L11531` → after: `L11543-L11545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11543-L11545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11543-L11545) · [Before (L11529-L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11529-L11531)

```diff
-           L: () => HQ,
-           e: () => kQ,
-           g: () => DQ,
+           K: () => Kk,
+           c: () => rk,
+           f: () => bk,
```

#### 897. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11533` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11547) · [Before (L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11533)

```diff
-           q: () => oQ,
+           s: () => Sk,
```

#### 898. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11535-L11537` → after: `L11549-L11550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11549-L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11549-L11550) · [Before (L11535-L11537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11535-L11537)

```diff
-           w: () => mQ,
-           x: () => YQ,
-           z: () => xQ
+           u: () => mk,
+           x: () => nk
```

#### 899. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11539` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11539)

```diff
-         var LQ = wQ(626);
+         var Dk = ik(600);
```

#### 900. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11569` → after: `L11582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11582) · [Before (L11569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11569)

```diff
-         LQ.b, Number(atob("NQ==")), Number(atob("MTM="));
+         Dk.c, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 901. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11577` → after: `L11590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11590) · [Before (L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11577)

```diff
-       626: (QQ, FQ, wQ) => {
+       600: (kk, ek, ik) => {
```

#### 902. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11579` → after: `L11592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11592) · [Before (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11579)

```diff
-           b: () => LQ
+           c: () => Dk
```

#### 903. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11581` → after: `L11594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11594) · [Before (L11581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11581)

```diff
-         const LQ = 869
+         const Dk = 870
```

#### 904. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11604-L11609` → after: `L11617-L11622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11617-L11622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11617-L11622) · [Before (L11604-L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11604-L11609)

```diff
-   }, wQ.f = {}, wQ.e = QQ => Promise.all(Object.keys(wQ.f).reduce(((FQ, LQ) => (wQ.f[LQ](QQ, FQ), FQ)), [])), wQ.u = QQ => "static/js/bqoxjr." + (67 === QQ ? "worldgenTables" : QQ) + "." + {
-     67: "057a9ced",
-     70: "580ff8fb",
-     71: "d80bffe5",
-     72: "8f41e6a9",
-     73: "185ceb0d"
+   }, ik.f = {}, ik.e = kk => Promise.all(Object.keys(ik.f).reduce(((ek, Dk) => (ik.f[Dk](kk, ek), ek)), [])), ik.u = kk => "static/js/3lwmg." + (69 === kk ? "worldgenTables" : kk) + "." + {
+     69: "0a62cd37",
+     72: "55f76ce6",
+     73: "84256315",
+     74: "45ddf7bf",
+     75: "dea35304"
```

#### 905. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11616` → after: `L11629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11629) · [Before (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11616)

```diff
-   }, wQ.j = 68, wQ.p = "/", (() => {
+   }, ik.j = 70, ik.p = "/", (() => {
```

#### 906. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11645` → after: `L11658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11658) · [Before (L11645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11645)

```diff
-         68: 0
+         70: 0
```

#### 907. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11680` → after: `L11693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11693) · [Before (L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11680)

```diff
-       wQ = FQ < 0 ? this.length + FQ : FQ;
+       ik = ek < 0 ? this.length + ek : ek;
```

#### 908. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11695-L11697` → after: `L11708-L11710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11708-L11710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11708-L11710) · [Before (L11695-L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11695-L11697)

```diff
-     Gt: () => jQ,
-     ct: () => aQ,
-     FH: () => XQ,
+     Ew: () => ak,
+     hw: () => Wk,
+     lK: () => tk,
```

#### 909. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11700-L11710` → after: `L11713-L11723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11713-L11723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11713-L11723) · [Before (L11700-L11710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11700-L11710)

```diff
-     wH: () => fQ,
-     LH: () => VQ,
-     qH: () => hQ,
-     oH: () => JQ,
-     DH: () => EQ,
-     kH: () => nQ,
-     vH: () => gQ,
-     mH: () => PQ,
-     YH: () => ZQ,
-     AH: () => yQ,
-     tH: () => BQ
+     pK: () => Xk,
+     yK: () => Bk,
+     YK: () => ck,
+     LK: () => Tk,
+     CK: () => Zk,
+     AK: () => Ok,
+     jK: () => gk,
+     sK: () => Gk,
+     uK: () => Nk,
+     IK: () => Rk,
+     zK: () => Jk
```

#### 910. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11715` → after: `L11728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11728) · [Before (L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11715)

```diff
-   var mQ = wQ(2786),
+   var mk = ik(2781),
```

#### 911. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11750` → after: `L11763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11763) · [Before (L11750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11750)

```diff
-     return null === AQ ? "not failed" : `${AQ}: ${(QQ=tQ)instanceof Error?`${QQ.name}: ${QQ.message}`:String(QQ)}`;
+     return null === Hk ? "not failed" : `${Hk}: ${(kk=wk)instanceof Error?`${kk.name}: ${kk.message}`:String(kk)}`;
```

#### 912. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11755` → after: `L11768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11768) · [Before (L11755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11755)

```diff
-     if (!WQ()) throw new Error(`Bloxd wasm is not ready (${RQ()}): check isBloxdWasmReady() first`);
+     if (!sk()) throw new Error(`Bloxd wasm is not ready (${dk()}): check isBloxdWasmReady() first`);
```

#### 913. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11793` → after: `L11806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11806) · [Before (L11793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11793)

```diff
-       YH: qQ
+       uK: fk
```

#### 914. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11814` → after: `L11827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11827) · [Before (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11814)

```diff
-     xQ = "failed", AQ = FQ, tQ = QQ, console.error(`Bloxd wasm failed (${FQ}):`, QQ);
+     Uk = "failed", Hk = ek, wk = kk, console.error(`Bloxd wasm failed (${ek}):`, kk);
```

#### 915. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11833-L11834` → after: `L11846-L11847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11846-L11847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11846-L11847) · [Before (L11833-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11833-L11834)

```diff
-       reserveUpFront: FQ => QQ().oH(FQ),
-       reserveAhead: FQ => QQ().qH(FQ),
+       reserveUpFront: ek => kk().LK(ek),
+       reserveAhead: ek => kk().YK(ek),
```

#### 916. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11836` → after: `L11849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11849) · [Before (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11836)

```diff
-         QQ().DH(FQ)
+         kk().CK(ek)
```

#### 917. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11838` → after: `L11851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11851) · [Before (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11838)

```diff
-       lowWater: () => zQ[QQ().LH()] ?? "none",
+       lowWater: () => Ek[kk().yK()] ?? "none",
```

#### 918. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11861-L11863` → after: `L11874-L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11874-L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11874-L11876) · [Before (L11861-L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11861-L11863)

```diff
-       }(QQ().kH()),
-       takeBallast: () => QQ().vH(),
-       takePressure: () => QQ().mH()
+       }(kk().AK()),
+       takeBallast: () => kk().jK(),
+       takePressure: () => kk().sK()
```

#### 919. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11873` → after: `L11886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11886) · [Before (L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11873)

```diff
-       eF.Qf9Y(QQ, 0)
+       pe.SsUZ(kk, 0)
```

#### 920. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11876` → after: `L11889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11889) · [Before (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11876)

```diff
-       const FQ = mF(QQ, eF.COrf, eF.TNiv),
+       const ek = Me(kk, pe.J6RE, pe.AsOq),
```

#### 921. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11878` → after: `L11891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11891) · [Before (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11878)

```diff
-       eF.qhzY(this.__wbg_ptr, FQ, wQ)
+       pe.gRY0(this.__wbg_ptr, ek, ik)
```

#### 922. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11881` → after: `L11894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11894) · [Before (L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11881)

```diff
-       return eF.Qopz(this.__wbg_ptr) >>> 0
+       return pe.p459(this.__wbg_ptr) >>> 0
```

#### 923. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11884` → after: `L11897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11897) · [Before (L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11884)

```diff
-       const QQ = eF.Y8nO();
+       const kk = pe.siMB();
```

#### 924. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11888` → after: `L11901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11901) · [Before (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11888)

```diff
-       return eF.ndgH(this.__wbg_ptr) >>> 0
+       return pe.fvvt(this.__wbg_ptr) >>> 0
```

#### 925. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11891` → after: `L11904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11904) · [Before (L11891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11891)

```diff
-       return eF.HGYa(this.__wbg_ptr) >>> 0
+       return pe.mClJ(this.__wbg_ptr) >>> 0
```

#### 926. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11894` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11907) · [Before (L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11894)

```diff
-       return eF.s7Cj(this.__wbg_ptr) >>> 0
+       return pe.VeIs(this.__wbg_ptr) >>> 0
```

#### 927. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11905` → after: `L11918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11918) · [Before (L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11905)

```diff
-       eF.RYTJ(QQ, 0)
+       pe.Kj2d(kk, 0)
```

#### 928. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11908` → after: `L11921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11921) · [Before (L11908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11908)

```diff
-       return eF.HS9I(this.__wbg_ptr, QQ) >>> 0
+       return pe.XLJJ(this.__wbg_ptr, kk) >>> 0
```

#### 929. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11911` → after: `L11924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11924) · [Before (L11911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11911)

```diff
-       return eF.ZvBS(this.__wbg_ptr, QQ) >>> 0
+       return pe.lGa5(this.__wbg_ptr, kk) >>> 0
```

#### 930. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11913-L11914` → after: `L11926-L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11926-L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11926-L11928) · [Before (L11913-L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11913-L11914)

```diff
-     constructor() {
-       const QQ = eF.AJG7();
+     constructor(kk) {
+       const ek = pe.ikRR(void 0 === (ik = kk) || null === ik ? Number.MAX_SAFE_INTEGER : kk >>> 0);
+       var ik;
```

#### 931. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11918` → after: `L11932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11932) · [Before (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11918)

```diff
-       return eF.sZ2y(this.__wbg_ptr) >>> 0
+       return pe.YIPN(this.__wbg_ptr) >>> 0
```

#### 932. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11921` → after: `L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11935) · [Before (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11921)

```diff
-       return eF.Vn3s(this.__wbg_ptr) >>> 0
+       return pe.nXSC(this.__wbg_ptr) >>> 0
```

#### 933. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11924` → after: `L11938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11938) · [Before (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11924)

```diff
-       return eF.A7H9(this.__wbg_ptr, QQ) >>> 0
+       return pe.EWTD(this.__wbg_ptr, kk) >>> 0
```

#### 934. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11929` → after: `L11943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11943) · [Before (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11929)

```diff
-     const wQ = mF(QQ, eF.COrf, eF.TNiv),
+     const ik = Me(kk, pe.J6RE, pe.AsOq),
```

#### 935. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11931` → after: `L11945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11945) · [Before (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11931)

```diff
-       qQ = eF.Qp6i(wQ, LQ, FQ);
+       fk = pe.T5Xz(ik, Dk, ek);
```

#### 936. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11936` → after: `L11950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11950) · [Before (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11936)

```diff
-     eF.Ltvf()
+     pe.wvCc()
```

#### 937. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11940` → after: `L11954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11954) · [Before (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11940)

```diff
-     return eF.qfSw() >>> 0
+     return pe.vFOM() >>> 0
```

#### 938. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11944` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11958) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944)

```diff
-     return 0 !== eF.oAp0(QQ)
+     return 0 !== pe.CPPt(kk)
```

#### 939. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11948` → after: `L11962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11962) · [Before (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11948)

```diff
-     return 0 !== eF.wjAR(QQ)
+     return 0 !== pe.QBdt(kk)
```

#### 940. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11952` → after: `L11966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11966) · [Before (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11952)

```diff
-     eF.R0LD(QQ)
+     pe.WACb(kk)
```

#### 941. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11956` → after: `L11970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11970) · [Before (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11956)

```diff
-     return eF.d4eH() >>> 0
+     return pe.QiN7() >>> 0
```

#### 942. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11960` → after: `L11974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11974) · [Before (L11960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11960)

```diff
-     return eF.DFk8() >>> 0
+     return pe.wNSZ() >>> 0
```

#### 943. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11964` → after: `L11978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11978) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964)

```diff
-     return 0 !== eF.C5Cb()
+     return 0 !== pe.PmVV()
```

#### 944. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11968` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11982) · [Before (L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11968)

```diff
-     return eF.WWwr() >>> 0
+     return pe.jMJ2() >>> 0
```

#### 945. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11974` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988) · [Before (L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11974)

```diff
-       const wQ = eF.YzAA();
+       const ik = pe.vqWq();
```

#### 946. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11977` → after: `L11991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11991) · [Before (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11977)

```diff
-       eF.Ukc5(QQ, FQ, 1)
+       pe.o1nb(kk, ek, 1)
```

#### 947. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11982` → after: `L11996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11996) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11982)

```diff
-     eF.sW4G(wF(QQ))
+     pe.m2P7(De(kk))
```

#### 948. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11988` → after: `L12002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12002) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988)

```diff
-       Ds1K: {
+       XxUV: {
```

#### 949. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11990` → after: `L12004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12004) · [Before (L11990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11990)

```diff
-         Sajy: function(QQ, FQ) {
+         w8P4: function(kk, ek) {
```

#### 950. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11993` → after: `L12007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12007) · [Before (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11993)

```diff
-         naPf: function(QQ, FQ) {
+         x1CJ: function(kk, ek) {
```

#### 951. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11996` → after: `L12010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12010) · [Before (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11996)

```diff
-         IJJS: function(QQ) {
+         drqE: function(kk) {
```

#### 952. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11999` → after: `L12013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12013) · [Before (L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11999)

```diff
-         EdYr: function(QQ, FQ) {
+         RlmQ: function(kk, ek) {
```

#### 953. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12002` → after: `L12016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12016) · [Before (L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12002)

```diff
-         rVpd: function(QQ) {
+         V8v2: function(kk) {
```

#### 954. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12012` → after: `L12026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12026) · [Before (L12012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12012)

```diff
-     } : new FinalizationRegistry((QQ => eF.Qf9Y(QQ, 1))),
+     } : new FinalizationRegistry((kk => pe.SsUZ(kk, 1))),
```

#### 955. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12016` → after: `L12030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12030) · [Before (L12016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12016)

```diff
-     } : new FinalizationRegistry((QQ => eF.RYTJ(QQ, 1)));
+     } : new FinalizationRegistry((kk => pe.Kj2d(kk, 1)));
```

#### 956. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12093` → after: `L12107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12107) · [Before (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12093)

```diff
-     return tF = QQ, eF = QQ.exports, AF = FQ, qF = null, eF.tgjz(), eF
+     return le = kk, pe = kk.exports, we = ek, Se = null, pe.x9CE(), pe
```

#### 957. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12117` → after: `L12131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12131) · [Before (L12117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12117)

```diff
-         if (!QQ.ok) throw new Error(`failed to fetch Wasm: ${QQ.status} ${QQ.statusText} fetching '${QQ.url}'`);
+         if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
```

#### 958. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12147-L12148` → after: `L12161-L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12161-L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12161-L12162) · [Before (L12147-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12147-L12148)

```diff
-       if (!WQ()) throw new Error(`Bloxd wasm is not ready (${RQ()}): check isBloxdWasmReady() first`);
-       if (pQ !== QQ) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${FQ}`)
+       if (!sk()) throw new Error(`Bloxd wasm is not ready (${dk()}): check isBloxdWasmReady() first`);
+       if (Yk !== kk) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${ek}`)
```

#### 959. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12151` → after: `L12165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12165) · [Before (L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12151)

```diff
-   var SF = wQ(619);
+   var je = ik(594);
```

#### 960. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12158` → after: `L12172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12172) · [Before (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12158)

```diff
-       } = wQ(60873), YQ = function(QQ, FQ, wQ) {
+       } = ik(39354), nk = function(kk, ek, ik) {
```

#### 961. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12160` → after: `L12174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12174) · [Before (L12160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12160)

```diff
-         for (const kQ of QQ.fo) IF(kQ, wQ);
+         for (const rk of kk.Lf) Ie(rk, ik);
```

#### 962. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12163` → after: `L12177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12177) · [Before (L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12163)

```diff
-           fo: QQ.fo,
+           Lf: kk.Lf,
```

#### 963. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12169` → after: `L12183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12183) · [Before (L12169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12169)

```diff
-           throw new Error(`Custom world-gen terrain "${LQ.name}" is not in this generator's catalogue (${QQ.length>0?QQ.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${Dk.name}" is not in this generator's catalogue (${kk.length>0?kk.join(", "):"empty"})`)
```

#### 964. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12174` → after: `L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12188) · [Before (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12174)

```diff
-               if (null !== QQ.Xo) throw new Error(`Custom world-gen terrain "${QQ.name}" takes no options`);
+               if (null !== kk.Yf) throw new Error(`Custom world-gen terrain "${kk.name}" takes no options`);
```

#### 965. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12178-L12179` → after: `L12192-L12193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12192-L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12192-L12193) · [Before (L12178-L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12178-L12179)

```diff
-             if (null !== QQ.Xo) try {
-               wQ = JSON.parse(QQ.Xo)
+             if (null !== kk.Yf) try {
+               ik = JSON.parse(kk.Yf)
```

#### 966. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12181` → after: `L12195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12195) · [Before (L12181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12181)

```diff
-               throw new Error(`Custom world-gen terrain "${QQ.name}" has invalid optionsJson: ${String(LQ)}`, {
+               throw new Error(`Custom world-gen terrain "${kk.name}" has invalid optionsJson: ${String(Dk)}`, {
```

#### 967. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12188` → after: `L12202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12202) · [Before (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12188)

```diff
-           fo: QQ.fo,
+           Lf: kk.Lf,
```

#### 968. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12191` → after: `L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12205) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12191)

```diff
-       }(null !== (uQ = null === kQ || void 0 === kQ ? void 0 : kQ.zo) && void 0 !== uQ ? uQ : null, vQ, FQ);
+       }(null !== (Mk = null === rk || void 0 === rk ? void 0 : rk.lf) && void 0 !== Mk ? Mk : null, Pk, ek);
```

#### 969. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12193` → after: `L12207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12207) · [Before (L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12193)

```diff
-       const xQ = null !== (HQ = null === kQ || void 0 === kQ ? void 0 : kQ.layers) && void 0 !== HQ ? HQ : [];
+       const Uk = null !== (Kk = null === rk || void 0 === rk ? void 0 : rk.layers) && void 0 !== Kk ? Kk : [];
```

#### 970. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12196` → after: `L12210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12210) · [Before (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12196)

```diff
-         const wQ = [...QQ].sort(((QQ, FQ) => QQ.yq - FQ.yq));
+         const ik = [...kk].sort(((kk, ek) => kk.aD - ek.aD));
```

#### 971. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12198` → after: `L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12212) · [Before (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12198)

```diff
-           if (wQ[LQ].yq < wQ[LQ - 1].Bq) throw new Error(`Custom world-gen layers overlap: [${wQ[LQ-1].yq}, ${wQ[LQ-1].Bq}) and [${wQ[LQ].yq}, ${wQ[LQ].Bq})`)
+           if (ik[Dk].aD < ik[Dk - 1].WD) throw new Error(`Custom world-gen layers overlap: [${ik[Dk-1].aD}, ${ik[Dk-1].WD}) and [${ik[Dk].aD}, ${ik[Dk].WD})`)
```

#### 972. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12210` → after: `L12224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12224) · [Before (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12210)

```diff
-         if (wQ >= qQ.yq && wQ < qQ.Bq) return oQ.getChunk(QQ, FQ, wQ - qQ.dq, LQ);
+         if (ik >= fk.aD && ik < fk.WD) return Sk.getChunk(kk, ek, ik - fk.tD, Dk);
```

#### 973. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12228-L12229` → after: `L12242-L12243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12242-L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12242-L12243) · [Before (L12228-L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12228-L12229)

```diff
-     if (QQ.yq >= QQ.Bq) throw new Error(`Custom world-gen layer has minY (${QQ.yq}) >= maxY (${QQ.Bq})`);
-     if (QQ.yq % SF.w !== 0 || QQ.Bq % SF.w !== 0 || QQ.dq % SF.w !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${SF.w}); got minY=${QQ.yq}, maxY=${QQ.Bq}, groundY=${QQ.dq}`);
+     if (kk.aD >= kk.WD) throw new Error(`Custom world-gen layer has minY (${kk.aD}) >= maxY (${kk.WD})`);
+     if (kk.aD % je.u !== 0 || kk.WD % je.u !== 0 || kk.tD % je.u !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${je.u}); got minY=${kk.aD}, maxY=${kk.WD}, groundY=${kk.tD}`);
```

#### 974. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12231-L12234` → after: `L12245-L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12245-L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12245-L12248) · [Before (L12231-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12231-L12234)

```diff
-         if (void 0 === (0, SF.z)(QQ.Lo, FQ)) throw new Error(`Custom world-gen caves lavaPitBlock "${QQ.Lo}" not found in blockMetadata`);
-         if (QQ.qo)
-           for (const wQ of QQ.qo) RF(wQ, FQ)
-       }(QQ.Fo, FQ), 0 === QQ.Go.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, je.A)(kk.TD, ek)) throw new Error(`Custom world-gen caves lavaPitBlock "${kk.TD}" not found in blockMetadata`);
+         if (kk.oD)
+           for (const ik of kk.oD) Ve(ik, ek)
+       }(kk.BD, ek), 0 === kk.bf.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 975. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12236` → after: `L12250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12250) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12236)

```diff
-     for (const LQ of QQ.Go) rF(LQ, FQ), wQ += LQ.frequency;
+     for (const Dk of kk.bf) qe(Dk, ek), ik += Dk.frequency;
```

#### 976. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12238` → after: `L12252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12252) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12238)

```diff
-     for (const LQ of QQ.ro) IF(LQ, FQ)
+     for (const Dk of kk.xf) Ie(Dk, ek)
```

#### 977. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12244-L12246` → after: `L12258-L12260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12258-L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12258-L12260) · [Before (L12244-L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12244-L12246)

```diff
-       Do: LQ,
-       ko: qQ,
-       vo: oQ
+       OD: Dk,
+       gD: fk,
+       GD: Sk
```

#### 978. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12248-L12249` → after: `L12262-L12263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12262-L12263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12262-L12263) · [Before (L12248-L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12248-L12249)

```diff
-     if (void 0 === (0, SF.z)(wQ, FQ)) throw new Error(`Custom world-gen cave decoration blockName "${wQ}" not found in blockMetadata`);
-     if (!LQ && !qQ && !oQ) throw new Error(`Custom world-gen cave decoration "${wQ}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, je.A)(ik, ek)) throw new Error(`Custom world-gen cave decoration blockName "${ik}" not found in blockMetadata`);
+     if (!Dk && !fk && !Sk) throw new Error(`Custom world-gen cave decoration "${ik}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 979. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12252-L12253` → after: `L12266-L12267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12266-L12267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12266-L12267) · [Before (L12252-L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12252-L12253)

```diff
-     if (oQ && OF(wQ, "meta|rot1|top", FQ), sF(QQ.uo, wQ, "uo"), sF(QQ.Ho, wQ, "Ho"), !Number.isInteger(QQ.bo) || QQ.bo < 0) throw new Error(`Custom world-gen cave decoration "${wQ}" minPlacements must be a non-negative integer, got ${QQ.bo}`);
-     if (!(0, SF.F)(QQ.Yo) && (sF(QQ.Yo.Ao, wQ, "depthRamp.deepClusterChance"), QQ.Yo.eo <= QQ.Yo.Mo)) throw new Error(`Custom world-gen cave decoration "${wQ}" deepY must be strictly smaller than shallowY, but ${QQ.Yo.eo} <= ${QQ.Yo.Mo} `)
+     if (Sk && Fe(ik, "meta|rot1|top", ek), ue(kk.ND, ik, "ND"), ue(kk.RD, ik, "RD"), !Number.isInteger(kk.JD) || kk.JD < 0) throw new Error(`Custom world-gen cave decoration "${ik}" minPlacements must be a non-negative integer, got ${kk.JD}`);
+     if (!(0, je.F)(kk.kf) && (ue(kk.kf.Df, ik, "depthRamp.deepClusterChance"), kk.kf.ff <= kk.kf.Sf)) throw new Error(`Custom world-gen cave decoration "${ik}" deepY must be strictly smaller than shallowY, but ${kk.kf.ff} <= ${kk.kf.Sf} `)
```

#### 980. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12257-L12258` → after: `L12271-L12272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12271-L12272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12271-L12272) · [Before (L12257-L12258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12257-L12258)

```diff
-     const LQ = `${QQ}|${FQ}`;
-     if (void 0 === (0, SF.z)(LQ, wQ)) throw new Error(`Custom world-gen cave decoration "${QQ}" is missing directional variant "${LQ}" required for wall/ceiling anchoring`)
+     const Dk = `${kk}|${ek}`;
+     if (void 0 === (0, je.A)(Dk, ik)) throw new Error(`Custom world-gen cave decoration "${kk}" is missing directional variant "${Dk}" required for wall/ceiling anchoring`)
```

#### 981. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12262` → after: `L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12276) · [Before (L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12262)

```diff
-     if (QQ < 0 || QQ > 1) throw new Error(`Custom world-gen cave decoration "${FQ}" ${wQ} must be in [0, 1], got ${QQ}`)
+     if (kk < 0 || kk > 1) throw new Error(`Custom world-gen cave decoration "${ek}" ${ik} must be in [0, 1], got ${kk}`)
```

#### 982. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12266-L12272` → after: `L12280-L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12280-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12280-L12286) · [Before (L12266-L12272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12266-L12272)

```diff
-     if (QQ.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${QQ.frequency}`);
-     if (void 0 === (0, SF.z)(QQ.Co, FQ)) throw new Error(`Custom world-gen biome topsoilBlock "${QQ.Co}" not found in blockMetadata`);
-     if (void 0 === (0, SF.z)(QQ.Wo, FQ)) throw new Error(`Custom world-gen biome lowsoilBlock "${QQ.Wo}" not found in blockMetadata`);
-     if (0 === QQ.Ro.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const wQ of QQ.Ro) {
-       if (wQ.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${wQ.frequency}`);
-       if (void 0 === (0, SF.z)(wQ.blockName, FQ)) throw new Error(`Custom world-gen biome stoneType blockName "${wQ.blockName}" not found in blockMetadata`)
+     if (kk.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${kk.frequency}`);
+     if (void 0 === (0, je.A)(kk.Pf, ek)) throw new Error(`Custom world-gen biome topsoilBlock "${kk.Pf}" not found in blockMetadata`);
+     if (void 0 === (0, je.A)(kk.mf, ek)) throw new Error(`Custom world-gen biome lowsoilBlock "${kk.mf}" not found in blockMetadata`);
+     if (0 === kk.Mf.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const ik of kk.Mf) {
+       if (ik.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${ik.frequency}`);
+       if (void 0 === (0, je.A)(ik.blockName, ek)) throw new Error(`Custom world-gen biome stoneType blockName "${ik.blockName}" not found in blockMetadata`)
```

#### 983. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12277-L12281` → after: `L12291-L12295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12291-L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12291-L12295) · [Before (L12277-L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12277-L12281)

```diff
-     if (void 0 === (0, SF.z)(QQ.blockName, FQ)) throw new Error(`Custom world-gen ore blockName "${QQ.blockName}" not found in blockMetadata`);
-     if (QQ.radius < 0) throw new Error(`Custom world-gen ore "${QQ.blockName}" radius must be >= 0, got ${QQ.radius}`);
-     if (QQ.Uo <= 0) throw new Error(`Custom world-gen ore "${QQ.blockName}" minDistBetweenDeposits must be > 0, got ${QQ.Uo}`);
-     if (QQ.yq > QQ.Bq) throw new Error(`Custom world-gen ore "${QQ.blockName}" minY (${QQ.yq}) must be <= maxY (${QQ.Bq})`);
-     if (QQ.Ko < 0 || QQ.Ko > 1) throw new Error(`Custom world-gen ore "${QQ.blockName}" spawnChance must be in [0, 1], got ${QQ.Ko}`)
+     if (void 0 === (0, je.A)(kk.blockName, ek)) throw new Error(`Custom world-gen ore blockName "${kk.blockName}" not found in blockMetadata`);
+     if (kk.radius < 0) throw new Error(`Custom world-gen ore "${kk.blockName}" radius must be >= 0, got ${kk.radius}`);
+     if (kk.Hf <= 0) throw new Error(`Custom world-gen ore "${kk.blockName}" minDistBetweenDeposits must be > 0, got ${kk.Hf}`);
+     if (kk.aD > kk.WD) throw new Error(`Custom world-gen ore "${kk.blockName}" minY (${kk.aD}) must be <= maxY (${kk.WD})`);
+     if (kk.wf < 0 || kk.wf > 1) throw new Error(`Custom world-gen ore "${kk.blockName}" spawnChance must be in [0, 1], got ${kk.wf}`)
```

#### 984. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12287-L12290` → after: `L12301-L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12301-L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12301-L12304) · [Before (L12287-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12287-L12290)

```diff
-       Uo: 10,
-       yq: -98,
-       Bq: -78,
-       Ko: .4
+       Hf: 10,
+       aD: -98,
+       WD: -78,
+       wf: .4
```

#### 985. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12295-L12298` → after: `L12309-L12312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12309-L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12309-L12312) · [Before (L12295-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12295-L12298)

```diff
-       Uo: 6,
-       yq: -40,
-       Bq: 20,
-       Ko: .6
+       Hf: 6,
+       aD: -40,
+       WD: 20,
+       wf: .6
```

#### 986. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12302-L12305` → after: `L12316-L12319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12316-L12319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12316-L12319) · [Before (L12302-L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12302-L12305)

```diff
-       Uo: 10,
-       yq: -75,
-       Bq: -55,
-       Ko: .4
+       Hf: 10,
+       aD: -75,
+       WD: -55,
+       wf: .4
```

#### 987. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12309` → after: `L12323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12323) · [Before (L12309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12309)

```diff
-       Xo: null
+       Yf: null
```

#### 988. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12312` → after: `L12326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12326) · [Before (L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12312)

```diff
-     [UF]: () => wQ(60762).d
+     [ze]: () => ik(39237).e
```

#### 989. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12335` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12349) · [Before (L12335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12335)

```diff
-     const QQ = Promise.all([wQ.e(70), wQ.e(73), wQ.e(72), wQ.e(71), wQ.e(67)]).then((() => wQ(61409))).then((QQ => {
+     const kk = Promise.all([ik.e(72), ik.e(75), ik.e(74), ik.e(73), ik.e(69)]).then((() => ik(39345))).then((kk => {
```

#### 990. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12378` → after: `L12392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12392) · [Before (L12378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12378)

```diff
-               reason: `its memory stats trapped (${String(FQ)})`
+               reason: `its memory stats trapped (${String(ek)})`
```

#### 991. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12384` → after: `L12398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12398) · [Before (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12384)

```diff
-               const wQ = vQ.Ct();
+               const ik = Pk.aw();
```

#### 992. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12387` → after: `L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12401) · [Before (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12387)

```diff
-                 return String.fromCharCode(...new Uint8Array(rQ().buffer, QQ.St(), 32))
+                 return String.fromCharCode(...new Uint8Array(uk().buffer, kk.Ww(), 32))
```

#### 993. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12400` → after: `L12414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12414) · [Before (L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12400)

```diff
-               DQ = tQ.tx, HQ = new Uint16Array(DQ * DQ * DQ),
+               bk = wk.oU, Kk = new Uint16Array(bk * bk * bk),
```

#### 994. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12409` → after: `L12423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12423) · [Before (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12409)

```diff
-                           reason: `the memory ceiling was not set (${String(LQ)})`
+                           reason: `the memory ceiling was not set (${String(Dk)})`
```

#### 995. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12413` → after: `L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12427) · [Before (L12413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12413)

```diff
-                         vQ = new(CF().Gt)
+                         Pk = new(Ae().Ew)
```

#### 996. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12417` → after: `L12431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12431) · [Before (L12417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12417)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(LQ)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(Dk)})`
```

#### 997. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12427` → after: `L12441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12441) · [Before (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12427)

```diff
-                           reason: `the block and item tables did not load (${String(FQ)})`
+                           reason: `the block and item tables did not load (${String(ek)})`
```

#### 998. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12432` → after: `L12446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12446) · [Before (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12432)

```diff
-                       reason: `wasm did not start (${OQ()})`
+                       reason: `wasm did not start (${Vk()})`
```

#### 999. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12436` → after: `L12450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12450) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12436)

```diff
-                     reason: `chunk size ${DQ} is not the encoder's 32`
+                     reason: `chunk size ${bk} is not the encoder's 32`
```

#### 1000. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12447` → after: `L12461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12461) · [Before (L12447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12447)

```diff
-                 mQ = new iF(DQ, kQ.blockMetadata, kQ.itemMetadata, QQ.hq, !1, QQ.Jq, QQ.nq, LQ, AQ)
+                 mk = new se(bk, rk.blockMetadata, rk.itemMetadata, kk.qD, !1, kk.zD, kk.vD, Dk, Hk)
```

#### 1001. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12472` → after: `L12486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12486) · [Before (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12472)

```diff
-                     const wQ = QQ.Wt(),
+                     const ik = kk.tw(),
```

#### 1002. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12474` → after: `L12488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12488) · [Before (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12474)

```diff
-                       qQ = FQ.byteLength >= LQ ? FQ : new ArrayBuffer(LQ),
+                       fk = ek.byteLength >= Dk ? ek : new ArrayBuffer(Dk),
```

#### 1003. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12477` → after: `L12491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12491) · [Before (L12477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12477)

```diff
-                     return DQ.set(new Uint8Array(oQ, QQ.St(), XF)), DQ.set(new Uint8Array(oQ, QQ.Rt(), wQ), XF), {
+                     return bk.set(new Uint8Array(Sk, kk.Ww(), Xe)), bk.set(new Uint8Array(Sk, kk.Xw(), ik), Xe), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L1-L2)

```diff
- export const id = 69;
- export const ids = [69];
+ export const id = 71;
+ export const ids = [71];
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   36050: (QQ, FQ, wQ) => {
+   35939: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6)

```diff
-       c: () => qQ
+       d: () => fk
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L25-L27` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L25) · [Before (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L25-L27)

```diff
-           this.fetchAbort = QQ, this.fetched = this.fetchWithRetries(QQ.signal).finally((() => {
-             this.fetchAbort === QQ && (this.fetchAbort = null)
-           }))
+           this.fetchAbort = kk, this.fetched = this.fetchWithRetries(kk.signal).then((ek => (this.fetchAbort === kk && (this.fetchAbort = null), ek)))
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L40-L42` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L41-L43) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L40-L42)

```diff
-           if (FQ > 0 && wQ.searchParams.set("cache-bust", `${Date.now()}-${FQ}`), await this.fetchWhole(wQ, QQ)) return void(this.scriptUrl = wQ);
-           if (FQ >= 3 || QQ.aborted) return;
-           if (await this.timing.wait(500 * 2 ** FQ), QQ.aborted) return
+           if (ek > 0 && ik.searchParams.set("cache-bust", `${Date.now()}-${ek}`), await this.fetchWhole(ik, kk)) return this.scriptUrl = ik, !0;
+           if (ek >= 3 || kk.aborted) return !1;
+           if (await this.timing.wait(500 * 2 ** ek), kk.aborted) return !1
```

#### 6. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L82` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L83) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L82)

```diff
-   42767: (QQ, FQ, wQ) => {
+   50593: (kk, ek, ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L89` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L90) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L89)

```diff
-     const LQ = new(wQ(36050).c)(new URL(wQ.p + wQ.u(68), wQ.b), {
+     const Dk = new(ik(35939).d)(new URL(ik.p + ik.u(70), ik.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.css` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/main.css` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1)

#### 1. `bundles/bloxd.io/main.css` (Changed code · before: `L873` → after: `L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.css#L885) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.css#L873)

```diff
-     inset: min(0px, (100% - 44px)/2) max(.5rem/-2, min(0px, (100% - 44px)/2));
+     inset: min(0px, (100% - 44px)/2) max(var(--home-button-gap, .5rem)/-2, min(0px, (100% - 44px)/2));
```

#### 2. `bundles/bloxd.io/main.css` (Changed code · before: `L2648-L2652` → after: `L2718-L2721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2718-L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.css#L2718-L2721) · [Before (L2648-L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.css#L2648-L2652)

```diff
- .NewButton .ButtonLoadingOverlay,
- .SecondaryButton {
-   align-items: center;
-   display: flex;
-   justify-content: center
+ .RainbowGradientDefs {
+   height: 0;
+   position: absolute;
+   width: 0
```

#### 3. `bundles/bloxd.io/main.css` (Changed code · before: `L2800` → after: `L2866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.css#L2866) · [Before (L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.css#L2800)

```diff
-   fill: url(#RainbowSecondaryButtonGradient)
+   fill: url(#RainbowGradient)
```

#### 4. `bundles/bloxd.io/main.css` (Changed code · before: `L3380-L3394` → after: `L3445-L3451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3445-L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.css#L3445-L3451) · [Before (L3380-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.css#L3380-L3394)

```diff
-   height: 1.1em;
-   width: 1.1em
- }
- 
- .LoginButtonContainer .LoginButton .LoginButtonIcon .svg-inline--fa {
-   font-size: 1.4em
- }
- 
- .LoginButtonContainer .LoginButton .LoginButtonIcon .fa-user {
-   color: #2e80ee
- }
- 
- .LoginButtonContainer .LoginButton .LoginButtonIcon .fa-discord {
-   color: #5865f2;
-   font-size: 1.2em
+   --icon-width: 1.1em;
+   --icon-height: 1.1em;
+   flex: none;
+   height: calc(var(--icon-height) + 6px);
+   margin: -3px;
+   max-width: none;
+   width: calc(var(--icon-width) + 6px)
```

#### 5. `bundles/bloxd.io/main.css` (Changed code · before: `L3397-L3398` → after: `L3454-L3456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3454-L3456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.css#L3454-L3456) · [Before (L3397-L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.css#L3397-L3398)

```diff
- .LoginButtonContainer .LoginButton .LoginButtonIcon .fa-apple {
-   color: #838383
+ .LoginButtonContainer .LoginButton .LoginButtonIcon img.LoginIconWide {
+   --icon-width: 1.35em;
+   --icon-height: 1.2em
```

#### 6. `bundles/bloxd.io/main.css` (Changed code · before: `L3401-L3403` → after: `L3459-L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3459-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.css#L3459-L3461) · [Before (L3401-L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.css#L3401-L3403)

```diff
- .LoginButtonContainer .LoginButton .LoginButtonIcon .fa-google-play {
-   color: #1dd06d;
-   font-size: 1.1em
+ .LoginButtonContainer .LoginButton .LoginButtonIcon img.LoginIconApple {
+   --icon-width: 1.05em;
+   --icon-height: 1.4em
```

#### 7. `bundles/bloxd.io/main.css` (Changed code · before: `L3406-L3408` → after: `L3464-L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3464-L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.css#L3464-L3466) · [Before (L3406-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.css#L3406-L3408)

```diff
- .LoginButtonContainer .LoginButton .LoginButtonIcon .fa-gamepad-modern {
-   color: #838383;
-   font-size: 1.2em
+ .LoginButtonContainer .LoginButton .LoginButtonIcon img.LoginIconGooglePlay {
+   --icon-width: 0.9625em;
+   --icon-height: 1.1em
```

#### 8. `bundles/bloxd.io/main.css` (Changed code · before: `L7126` → after: `L7211-L7226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7211-L7226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.css#L7211-L7226) · [Before (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.css#L7126)

```diff
-   min-width: 0
+   min-width: 0;
+   position: relative
+ }
+ 
+ @supports(overflow-x:clip) {
+   @media(pointer:coarse) {
+     .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow .SocialBarActionButton:before {
+       content: "";
+       inset: min(0px, (100% - 44px)/2) max(.5rem/-2, min(0px, (100% - 44px)/2));
+       position: absolute
+     }
+ 
+     .SocialBarContainer.Docked .SocialBarOuter .SocialBar .SocialBarInner .SocialBarFooter .SocialBarActions .SocialBarActionsInner .SocialBarActionsRow .SocialBarActionButton {
+       overflow-x: clip
+     }
+   }
```

#### 9. `bundles/bloxd.io/main.css` (Changed code · before: `L7839` → after: `L7938-L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7938-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.css#L7938-L7941) · [Before (L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.css#L7839)

```diff
- .PlayerRows,
+ .PlayerRows:has(.Dropdown-root.is-open) {
+   z-index: 2
+ }
+ 
```

#### 10. `bundles/bloxd.io/main.css` (Changed code · before: `L12776` → after: `L12878-L12879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12878-L12879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.css#L12878-L12879) · [Before (L12776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.css#L12776)

```diff
- .PromptGenericPopup.ReportCard .ReportCardNote {
+ .PromptGenericPopup.ReportCard .ReportCardNote,
+ .PromptGenericPopup.ReportKeyBox .ReportCardNote {
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/main.js` (1086 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see bqoxjr.main.2558012f.js.LICENSE.txt */
+ /*! For license information please see 3lwmg.main.ecbaa066.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L3)

```diff
-     var QQ = [, , , , , (QQ, FQ, wQ) => {
+     var kk = [, , , , , , , , , , , (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L5-L6` → after: `L5-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5-L6) · [Before (L5-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5-L6)

```diff
-             C: () => YQ,
-             D: () => HQ,
+             A: () => Kk,
+             B: () => qk,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L9-L12` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L9-L10) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L9-L12)

```diff
-             H: () => jQ,
-             K: () => cQ,
-             N: () => bQ,
-             P: () => rQ,
+             J: () => Lk,
+             M: () => xk,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L19-L20` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L17-L19) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L19-L20)

```diff
-             d: () => xQ,
-             f: () => tQ,
+             c: () => Uk,
+             db: () => Fk,
+             eb: () => Dk,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L23)

```diff
-             l: () => kQ,
+             k: () => rk,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L25-L26` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L25-L27) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L25-L26)

```diff
-             r: () => MQ,
-             u: () => aQ,
+             s: () => pk,
+             t: () => Xk,
+             x: () => fk,
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L126` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L139) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L126)

```diff
-         }, , , (QQ, FQ, wQ) => {
+         }, , (kk, ek, ik) => {
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L130` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L143) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L130)

```diff
-           var LQ = wQ(17);
+           var Dk = ik(22);
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L152` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L165) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L152)

```diff
-             (LQ.c.set({
+             (Dk.b.set({
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L161-L164` → after: `L174-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L174-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L174-L178) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L161-L164)

```diff
-             c: () => eF,
-             g: () => GF,
-             k: () => MF,
-             l: () => pF
+             b: () => ye,
+             f: () => Ce,
+             i: () => Le,
+             j: () => Ye,
+             n: () => Ae
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L166-L171` → after: `L180-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L180-L185) · [Before (L166-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L166-L171)

```diff
-           var LQ = wQ(22),
-             qQ = wQ(307),
-             oQ = wQ(317),
-             DQ = wQ(27),
-             kQ = wQ(47),
-             vQ = wQ(25),
+           var Dk = ik(26),
+             fk = ik(302),
+             Sk = ik(314),
+             bk = ik(38),
+             rk = ik(55),
+             Pk = ik(29),
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L173-L176` → after: `L187-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L187-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L187-L191) · [Before (L173-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L173-L176)

```diff
-             uQ = wQ(53),
-             HQ = wQ(71),
-             bQ = wQ(96),
-             YQ = wQ(266),
+             Mk = ik(60),
+             Kk = ik(75),
+             xk = ik(99),
+             nk = ik(255),
+             Uk = ik(275),
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L178-L185` → after: `L193-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L193-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L193-L200) · [Before (L178-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L178-L185)

```diff
-             AQ = wQ(282),
-             tQ = wQ(118),
-             eQ = wQ(629),
-             MQ = wQ(634),
-             GQ = wQ(702),
-             pQ = wQ(705),
-             cQ = wQ(714),
-             CQ = wQ(291);
+             wk = ik(115),
+             lk = ik(607),
+             pk = ik(610),
+             yk = ik(686),
+             Yk = ik(697),
+             Lk = ik(706),
+             Ck = ik(711),
+             Ak = ik(284);
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L195` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L210) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L195)

```diff
-               cameraFOV: "mobile" === (0, bQ.getPlatformType)() ? SQ[CQ.e.mobile_fov_v2] : cQ.e,
+               cameraFOV: "mobile" === (0, xk.getPlatformType)() ? jk[Ak.e.mobile_fov_v2] : Ck.b,
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L207` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L222) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L207)

```diff
-             return eQ.g ? "webgl_holdback" : !0 === DQ.i.getItem(tQ.J) ? "old_intel_driver" : eQ.j && !0 === DQ.i.getItem(tQ.H) ? "intel_gen9" : MQ.s && (0, eQ.c)(DQ.i.getItem(tQ.F)) ? "gpu_class_webgl" : !MQ.s && eQ.m && (0, eQ.k)(navigator.userAgent) ? "safari_26" : (0, AQ.r)() … [truncated]
+             return lk.h ? "webgl_holdback" : !0 === bk.f.getItem(wk.H) ? "old_intel_driver" : lk.j && !0 === bk.f.getItem(wk.D) ? "intel_gen9" : pk.s && (0, lk.e)(bk.f.getItem(wk.C)) ? "gpu_class_webgl" : pk.s && !0 === bk.f.getItem(wk.N) ? "gpu_wasm_arm" : !pk.s && (0, lk.m)(nav … [truncated]
```

#### 17. `bundles/bloxd.io/main.js` (Changed code · before: `L210-L211` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L225-L226) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L210-L211)

```diff
-             HF = eQ.q && null === uF;
-           let bF = null === DQ.i.getItem(qQ.lc);
+             ne = lk.r && null === xe;
+           let Ue = null === bk.f.getItem(fk.jc);
```

#### 18. `bundles/bloxd.io/main.js` (Changed code · before: `L223-L224` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L238-L239) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L223-L224)

```diff
-             soundVolume: (0, kQ.c)(),
-             musicVolume: null !== (RQ = DQ.i.getItem("musicVol")) && void 0 !== RQ ? RQ : .5,
+             soundVolume: (0, rk.b)(),
+             musicVolume: null !== (Vk = bk.f.getItem("musicVol")) && void 0 !== Vk ? Vk : .5,
```

#### 19. `bundles/bloxd.io/main.js` (Changed code · before: `L237-L238` → after: `L252-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L252-L253) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L237-L238)

```diff
-               const QQ = DQ.i.getItem("showDistantNametags");
-               return "boolean" === typeof QQ ? QQ : null
+               const kk = bk.f.getItem("showDistantNametags");
+               return "boolean" === typeof kk ? kk : null
```

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L251-L252` → after: `L266-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L266-L267) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L251-L252)

```diff
-             showDebugOverlay: null !== (OQ = DQ.i.getItem("showDebugOverlay")) && void 0 !== OQ && OQ,
-             enabledDebugFeatures: null !== (sQ = DQ.i.getItem("enabledDebugFeatures")) && void 0 !== sQ ? sQ : {},
+             showDebugOverlay: null !== (Fk = bk.f.getItem("showDebugOverlay")) && void 0 !== Fk && Fk,
+             enabledDebugFeatures: null !== (uk = bk.f.getItem("enabledDebugFeatures")) && void 0 !== uk ? uk : {},
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L260-L263` → after: `L275-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L275-L278) · [Before (L260-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L260-L263)

```diff
-               useProfanityFilter: null === (rQ = DQ.i.getItem("UseProfanityFilter")) || void 0 === rQ || rQ,
-               showChat: null === (IQ = DQ.i.getItem("showChat")) || void 0 === IQ || IQ,
-               showNewItemIndicator: null === (UQ = DQ.i.getItem("showNewItemIndicator")) || void 0 === UQ || UQ,
-               showFriendOnlineToasts: null === (NQ = DQ.i.getItem("showFriendOnlineToasts")) || void 0 === NQ || NQ,
+               useProfanityFilter: null === (qk = bk.f.getItem("UseProfanityFilter")) || void 0 === qk || qk,
+               showChat: null === (Ik = bk.f.getItem("showChat")) || void 0 === Ik || Ik,
+               showNewItemIndicator: null === (zk = bk.f.getItem("showNewItemIndicator")) || void 0 === zk || zk,
+               showFriendOnlineToasts: null === (Qk = bk.f.getItem("showFriendOnlineToasts")) || void 0 === Qk || Qk,
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L266-L267` → after: `L281-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L281-L282) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L266-L267)

```diff
-                 const FQ = DQ.i.getItem("friendRequestNotifications");
-                 return null !== (QQ = GQ.d.find((QQ => QQ === FQ))) && void 0 !== QQ ? QQ : "toastAndTray"
+                 const ek = bk.f.getItem("friendRequestNotifications");
+                 return null !== (kk = Yk.e.find((kk => kk === ek))) && void 0 !== kk ? kk : "toastAndTray"
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L269-L287` → after: `L284-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L284-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L284-L302) · [Before (L269-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L269-L287)

```diff
-               touchscreenSensitivity: null !== (TQ = DQ.i.getItem("touchscreenSensitivity")) && void 0 !== TQ ? TQ : 150,
-               mouseSensitivity: null !== (KQ = DQ.i.getItem("mouseSensitivity")) && void 0 !== KQ ? KQ : 15,
-               showCoordinates: null !== (zQ = DQ.i.getItem("showCoordinates")) && void 0 !== zQ && zQ,
-               showChunkCoordinates: null !== (lQ = DQ.i.getItem("showChunkCoordinates")) && void 0 !== lQ && lQ,
-               showFPS: null !== (jQ = DQ.i.getItem("showFPS")) && void 0 !== jQ && jQ,
-               disableBunnyHopping: null !== (aQ = DQ.i.getItem("disableBunnyHopping")) && void 0 !== aQ && aQ,
-               disableTexAtlas: null !== (XQ = DQ.i.getItem("disableTexAtlas")) && void 0 !== XQ && XQ,
-               disableFullscreen: null !== (fQ = DQ.i.getItem("disableFullscreen")) && void 0 !== fQ && fQ,
-               ezBridging: null === (VQ = DQ.i.getItem("ezBridging")) || void 0 === VQ || VQ,
-               ezTowering: null === (hQ = DQ.i.getItem("ezTowering")) || void 0 === hQ || hQ,
-               crouchIsToggle: null !== (JQ = DQ.i.getItem("crouchIsToggle")) && void 0 !== JQ && JQ,
-               vibration: null === (EQ = DQ.i.getItem("vibration")) || void 0 === EQ || EQ,
-               hideUiIsToggle: null !== (nQ = DQ.i.getItem("hideUiIsToggle")) && void 0 !== nQ && nQ,
-               enableLighting: null !== (gQ = DQ.i.getItem("enableLighting")) && void 0 !== gQ && gQ,
-               showFog: null !== (PQ = DQ.i.getItem("showFog")) && void 0 !== PQ && PQ,
-               fogChunkDistance: null !== (ZQ = DQ.i.getItem("fogChunkDistance")) && void 0 !== ZQ ? ZQ : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (vk = bk.f.getItem("touchscreenSensitivity")) && void 0 !== vk ? vk : 150,
+               mouseSensitivity: null !== (Ek = bk.f.getItem("mouseSensitivity")) && void 0 !== Ek ? Ek : 15,
+               showCoordinates: null !== (hk = bk.f.getItem("showCoordinates")) && void 0 !== hk && hk,
+               showChunkCoordinates: null !== (ak = bk.f.getItem("showChunkCoordinates")) && void 0 !== ak && ak,
+               showFPS: null !== (Wk = bk.f.getItem("showFPS")) && void 0 !== Wk && Wk,
+               disableBunnyHopping: null !== (tk = bk.f.getItem("disableBunnyHopping")) && void 0 !== tk && tk,
+               disableTexAtlas: null !== (Xk = bk.f.getItem("disableTexAtlas")) && void 0 !== Xk && Xk,
+               disableFullscreen: null !== (Bk = bk.f.getItem("disableFullscreen")) && void 0 !== Bk && Bk,
+               ezBridging: null === (ck = bk.f.getItem("ezBridging")) || void 0 === ck || ck,
+               ezTowering: null === (Tk = bk.f.getItem("ezTowering")) || void 0 === Tk || Tk,
+               crouchIsToggle: null !== (Zk = bk.f.getItem("crouchIsToggle")) && void 0 !== Zk && Zk,
+               vibration: null === (Ok = bk.f.getItem("vibration")) || void 0 === Ok || Ok,
+               hideUiIsToggle: null !== (gk = bk.f.getItem("hideUiIsToggle")) && void 0 !== gk && gk,
+               enableLighting: null !== (Gk = bk.f.getItem("enableLighting")) && void 0 !== Gk && Gk,
+               showFog: null !== (Nk = bk.f.getItem("showFog")) && void 0 !== Nk && Nk,
+               fogChunkDistance: null !== (Rk = bk.f.getItem("fogChunkDistance")) && void 0 !== Rk ? Rk : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L291-L298` → after: `L306-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L306-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L306-L313) · [Before (L291-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L291-L298)

```diff
-               useWebGpu: null !== (QF = DQ.i.getItem(qQ.lc)) && void 0 !== QF ? QF : HF,
-               pixelScale: null !== (FF = DQ.i.getItem("pixelScale")) && void 0 !== FF ? FF : (0, bQ.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (wF = DQ.i.getItem("pixelSmoothing")) || void 0 === wF || wF,
-               showChunkBorders: null !== (LF = DQ.i.getItem("showChunkBorders")) && void 0 !== LF && LF,
-               showWeaponRaycasts: null !== (qF = DQ.i.getItem("showWeaponRaycasts")) && void 0 !== qF && qF,
-               chunkFadeIn: null === (oF = DQ.i.getItem("chunkFadeIn")) || void 0 === oF || oF,
-               enableClipping: null !== (DF = DQ.i.getItem("enableClipping")) && void 0 !== DF && DF,
-               clipDurationSeconds: null !== (kF = DQ.i.getItem("clipDurationSeconds")) && void 0 !== kF ? kF : pQ.e,
+               useWebGpu: null !== (ie = bk.f.getItem(fk.jc)) && void 0 !== ie ? ie : ne,
+               pixelScale: null !== (De = bk.f.getItem("pixelScale")) && void 0 !== De ? De : (0, xk.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (fe = bk.f.getItem("pixelSmoothing")) || void 0 === fe || fe,
+               showChunkBorders: null !== (Se = bk.f.getItem("showChunkBorders")) && void 0 !== Se && Se,
+               showWeaponRaycasts: null !== (be = bk.f.getItem("showWeaponRaycasts")) && void 0 !== be && be,
+               chunkFadeIn: null === (re = bk.f.getItem("chunkFadeIn")) || void 0 === re || re,
+               enableClipping: null !== (Pe = bk.f.getItem("enableClipping")) && void 0 !== Pe && Pe,
+               clipDurationSeconds: null !== (me = bk.f.getItem("clipDurationSeconds")) && void 0 !== me ? me : Lk.i,
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L300` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L315) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L300)

```diff
-                 null === DQ.i.getItem(iQ) && (120 === DQ.i.getItem("cameraFOV") && DQ.i.removeItem("cameraFOV"), DQ.i.setItem(iQ, !0));
+                 null === bk.f.getItem(sk) && (120 === bk.f.getItem("cameraFOV") && bk.f.removeItem("cameraFOV"), bk.f.setItem(sk, !0));
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L305` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L320) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L305)

```diff
-                     return [wQ, null !== (FQ = DQ.i.getItem(wQ)) && void 0 !== FQ ? FQ : LQ]
+                     return [ik, null !== (ek = bk.f.getItem(ik)) && void 0 !== ek ? ek : Dk]
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L307` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L322) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L307)

```diff
-                 return qQ.ub.includes(FQ.joystickMode) || (console.warn("Dropping stored joystick mode", FQ.joystickMode), DQ.i.removeItem("joystickMode"), FQ.joystickMode = QQ.joystickMode), FQ
+                 return fk.zb.includes(ek.joystickMode) || (console.warn("Dropping stored joystick mode", ek.joystickMode), bk.f.removeItem("joystickMode"), ek.joystickMode = kk.joystickMode), ek
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L315` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L330) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L315)

```diff
-             const wQ = null !== (FQ = DQ.i.getItem(xQ.d)) && void 0 !== FQ ? FQ : (0, YQ.h)();
+             const ik = null !== (ek = bk.f.getItem(Uk.c)) && void 0 !== ek ? ek : (0, nk.f)();
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L325` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L340) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L325)

```diff
-             return null !== DQ.i.getItem(xQ.d)
+             return null !== bk.f.getItem(Uk.c)
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L331` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L346) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L331)

```diff
-               for (const FQ in QQ) LQ.l.GA(`appManagerUpdated|${FQ}`, QQ[FQ])
+               for (const ek in kk) Dk.j.tm(`appManagerUpdated|${ek}`, kk[ek])
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L339` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L354) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L339)

```diff
-               for (const qQ in QQ)(0, oQ.oe)(YF[qQ], QQ[qQ]) || (FQ[qQ] = QQ[qQ], wQ = !0);
+               for (const fk in kk)(0, Sk.Sd)(He[fk], kk[fk]) || (ek[fk] = kk[fk], ik = !0);
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L346` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L361) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L346)

```diff
-                 DQ.i.setItem("UseProfanityFilter", QQ.useProfanityFilter), DQ.i.setItem("showChat", QQ.showChat), DQ.i.setItem("showNewItemIndicator", QQ.showNewItemIndicator), DQ.i.setItem("showFriendOnlineToasts", QQ.showFriendOnlineToasts), DQ.i.setItem("friendRequestNotificat … [truncated]
+                 bk.f.setItem("UseProfanityFilter", kk.useProfanityFilter), bk.f.setItem("showChat", kk.showChat), bk.f.setItem("showNewItemIndicator", kk.showNewItemIndicator), bk.f.setItem("showFriendOnlineToasts", kk.showFriendOnlineToasts), bk.f.setItem("friendRequestNotificat … [truncated]
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L349` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L364) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L349)

```diff
-                     for (const LQ of Object.keys(wQ)) QQ[LQ] !== FQ[LQ] && (QQ[LQ] === wQ[LQ] ? DQ.i.removeItem(LQ) : DQ.i.setItem(LQ, QQ[LQ]))
+                     for (const Dk of Object.keys(ik)) kk[Dk] !== ek[Dk] && (kk[Dk] === ik[Dk] ? bk.f.removeItem(Dk) : bk.f.setItem(Dk, kk[Dk]))
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L352` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L367) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L352)

```diff
-               void 0 !== FQ.soundVolume && DQ.i.setItem("soundVol", FQ.soundVolume), void 0 !== FQ.musicVolume && DQ.i.setItem("musicVol", FQ.musicVolume), void 0 !== FQ.showDistantNametags && DQ.i.setItem("showDistantNametags", FQ.showDistantNametags), void 0 !== FQ.showDebugOve … [truncated]
+               void 0 !== ek.soundVolume && bk.f.setItem("soundVol", ek.soundVolume), void 0 !== ek.musicVolume && bk.f.setItem("musicVol", ek.musicVolume), void 0 !== ek.showDistantNametags && bk.f.setItem("showDistantNametags", ek.showDistantNametags), void 0 !== ek.showDebugOve … [truncated]
```

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L364` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L379) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L364)

```diff
-               return null !== FQ && void 0 !== FQ ? FQ : YF.clientEscMenuOptions.antiAliasing
+               return null !== ek && void 0 !== ek ? ek : He.clientEscMenuOptions.antiAliasing
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L367-L368` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L382-L383) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L367-L368)

```diff
-               (0, YQ.d)(QQ);
-               const FQ = AF() ? YF.clientEscMenuOptions.antiAliasing : (0, YQ.h)();
+               (0, nk.e)(kk);
+               const ek = le() ? He.clientEscMenuOptions.antiAliasing : (0, nk.f)();
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L382-L384` → after: `L397-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L397-L400) · [Before (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L382-L384)

```diff
-               let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AQ.j)();
-               const FQ = (0, AQ.n)(QQ);
-               return (0, AQ.r)() && !0 === DQ.i.getItem(qQ.lc) && DQ.i.removeItem(qQ.lc), FQ
+               let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Hk.l)(),
+                 ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+               const ik = (0, Hk.u)(kk, ek);
+               return (0, Hk.z)() && !0 === bk.f.getItem(fk.jc) && bk.f.removeItem(fk.jc), ik
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L387` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L403) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L387)

```diff
-               return (0, AQ.v)() || !0 === DQ.i.getItem(tQ.J)
+               return (0, Hk.F)() || !0 === bk.f.getItem(wk.H)
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L390` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L406) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L390)

```diff
-               return (0, AQ.r)()
+               return (0, Hk.z)()
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L393` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L409) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L393)

```diff
-               return bF ? uF : null
+               return Ue ? xe : null
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L396` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L412) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L396)

```diff
-               !0 === DQ.i.getItem(tQ.J) && (0, bQ.hasUsableWebGpuAdapter)()
+               !0 === bk.f.getItem(wk.H) && (0, xk.hasUsableWebGpuAdapter)()
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L436` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L456) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L436)

```diff
-         }, , , , , (QQ, FQ, wQ) => {
+         }, , , , (kk, ek, ik) => {
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L438` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L458-L459) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L438)

```diff
-             e: () => kQ,
+             d: () => rk,
+             g: () => Sk,
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L440-L442` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L461-L462) · [Before (L440-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L440-L442)

```diff
-             k: () => uQ,
-             l: () => mQ,
-             o: () => HQ
+             j: () => mk,
+             k: () => Kk
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L444` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L464) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L444)

```diff
-           var LQ = wQ(25),
+           var Dk = ik(29),
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L454` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L474) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L454)

```diff
-               super(...arguments), this.bM = !1, this.pM = [], this.rM = {}
+               super(...arguments), this.Kl = !1, this.Ul = [], this.Al = {}
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L458` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L478) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L458)

```diff
-               this.bM || !wQ ? this.emit(QQ, FQ) : this.pM.push({
+               this.Kl || !ik ? this.emit(kk, ek) : this.Ul.push({
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L465-L466` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L485-L486) · [Before (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L465-L466)

```diff
-               const LQ = this.XM(QQ, FQ);
-               return this.on(QQ, LQ), this.rM[QQ] = (null !== (wQ = this.rM[QQ]) && void 0 !== wQ ? wQ : 0) + 1, {
+               const Dk = this.Vl(kk, ek);
+               return this.on(kk, Dk), this.Al[kk] = (null !== (ik = this.Al[kk]) && void 0 !== ik ? ik : 0) + 1, {
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L475` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L495) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L475)

```diff
-               const wQ = this.XM(QQ, FQ);
+               const ik = this.Vl(kk, ek);
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L482` → after: `L502-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L502-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L502-L505) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L482)

```diff
-               this.off(null === QQ || void 0 === QQ ? void 0 : QQ.event, null === QQ || void 0 === QQ ? void 0 : QQ.listener), "noaTick" !== (null === QQ || void 0 === QQ ? void 0 : QQ.event) && "initInfoReceived" !== (null === QQ || void 0 === QQ ? void 0 : QQ.event) || oQ--, th … [truncated]
+               this.off(null === kk || void 0 === kk ? void 0 : kk.event, null === kk || void 0 === kk ? void 0 : kk.listener), "noaTick" !== (null === kk || void 0 === kk ? void 0 : kk.event) && "initInfoReceived" !== (null === kk || void 0 === kk ? void 0 : kk.event) || Sk--;
+               const ek = null === kk || void 0 === kk ? void 0 : kk.event,
+                 ik = this.Al[ek];
+               ik > 1 ? this.Al[ek] = ik - 1 : 1 === ik && delete this.Al[ek]
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L489` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L512) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L489)

```diff
-                   console.error(`Error in PubSub listener for event ${QQ}:`, LQ)
+                   console.error(`Error in PubSub listener for event ${kk}:`, Dk)
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L494` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L517) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L494)

```diff
-               this.bM = QQ, QQ && (this.pM.forEach((QQ => {
+               this.Kl = kk, kk && (this.Ul.forEach((kk => {
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L499-L500` → after: `L522-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L522-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L522-L526) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L499-L500)

```diff
-                 this.GA(FQ, wQ)
-               })), this.pM = [])
+                 this.tm(ek, ik)
+               })), this.Ul = [])
+             }
+             Tl() {
+               this.Ul = []
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L506` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L532) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L506)

```diff
-             mQ.QG(!0)
+             mk.Bl(!0)
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L522` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L548) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L522)

```diff
-             this.gY = QQ, this.context = FQ, this.once = wQ || !1
+             this.sU = kk, this.context = ek, this.once = ik || !1
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L528-L529` → after: `L554-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L554-L555) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L528-L529)

```diff
-               vQ = wQ ? wQ + FQ : FQ;
-             return QQ._events[vQ] ? QQ._events[vQ].gY ? QQ._events[vQ] = [QQ._events[vQ], kQ] : QQ._events[vQ].push(kQ) : (QQ._events[vQ] = kQ, QQ._eventsCount++), QQ
+               Pk = ik ? ik + ek : ek;
+             return kk._events[Pk] ? kk._events[Pk].sU ? kk._events[Pk] = [kk._events[Pk], rk] : kk._events[Pk].push(rk) : (kk._events[Pk] = rk, kk._eventsCount++), kk
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L533` → after: `L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L559) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L533)

```diff
-             0 === --QQ._eventsCount ? QQ._events = new LQ : delete QQ._events[FQ]
+             0 === --kk._eventsCount ? kk._events = new Dk : delete kk._events[ek]
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L545` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L571) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L545)

```diff
-             var FQ = wQ ? wQ + QQ : QQ,
+             var ek = ik ? ik + kk : kk,
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L548-L549` → after: `L574-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L574-L575) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L548-L549)

```diff
-             if (LQ.gY) return [LQ.gY];
-             for (var qQ = 0, oQ = LQ.length, DQ = new Array(oQ); qQ < oQ; qQ++) DQ[qQ] = LQ[qQ].gY;
+             if (Dk.sU) return [Dk.sU];
+             for (var fk = 0, Sk = Dk.length, bk = new Array(Sk); fk < Sk; fk++) bk[fk] = Dk[fk].sU;
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L552` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L578) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L552)

```diff
-             var FQ = wQ ? wQ + QQ : QQ,
+             var ek = ik ? ik + kk : kk,
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L554` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L580) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L554)

```diff
-             return LQ ? LQ.gY ? 1 : LQ.length : 0
+             return Dk ? Dk.sU ? 1 : Dk.length : 0
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L556` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L582) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L556)

```diff
-             var kQ = wQ ? wQ + QQ : QQ;
+             var rk = ik ? ik + kk : kk;
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L560-L561` → after: `L586-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L586-L587) · [Before (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L560-L561)

```diff
-             if (uQ.gY) {
-               switch (uQ.once && this.removeListener(QQ, uQ.gY, void 0, !0), HQ) {
+             if (Mk.sU) {
+               switch (Mk.once && this.removeListener(kk, Mk.sU, void 0, !0), Kk) {
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L563` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L589) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L563)

```diff
-                   return uQ.gY.call(uQ.context), !0;
+                   return Mk.sU.call(Mk.context), !0;
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L565` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L591) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L565)

```diff
-                   return uQ.gY.call(uQ.context, FQ), !0;
+                   return Mk.sU.call(Mk.context, ek), !0;
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L567` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L593) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L567)

```diff
-                   return uQ.gY.call(uQ.context, FQ, LQ), !0;
+                   return Mk.sU.call(Mk.context, ek, Dk), !0;
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L569` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L595) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L569)

```diff
-                   return uQ.gY.call(uQ.context, FQ, LQ, qQ), !0;
+                   return Mk.sU.call(Mk.context, ek, Dk, fk), !0;
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L571` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L597) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L571)

```diff
-                   return uQ.gY.call(uQ.context, FQ, LQ, qQ, oQ), !0;
+                   return Mk.sU.call(Mk.context, ek, Dk, fk, Sk), !0;
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L573` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L599) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L573)

```diff
-                   return uQ.gY.call(uQ.context, FQ, LQ, qQ, oQ, DQ), !0
+                   return Mk.sU.call(Mk.context, ek, Dk, fk, Sk, bk), !0
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L576` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L602) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L576)

```diff
-               uQ.gY.apply(uQ.context, vQ)
+               Mk.sU.apply(Mk.context, Pk)
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L579` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L605) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L579)

```diff
-               for (mQ = 0; mQ < YQ; mQ++) switch (uQ[mQ].once && this.removeListener(QQ, uQ[mQ].gY, void 0, !0), HQ) {
+               for (mk = 0; mk < nk; mk++) switch (Mk[mk].once && this.removeListener(kk, Mk[mk].sU, void 0, !0), Kk) {
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L581` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L607) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L581)

```diff
-                   uQ[mQ].gY.call(uQ[mQ].context);
+                   Mk[mk].sU.call(Mk[mk].context);
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L584` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L610) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L584)

```diff
-                   uQ[mQ].gY.call(uQ[mQ].context, FQ);
+                   Mk[mk].sU.call(Mk[mk].context, ek);
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L587` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L613) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L587)

```diff
-                   uQ[mQ].gY.call(uQ[mQ].context, FQ, LQ);
+                   Mk[mk].sU.call(Mk[mk].context, ek, Dk);
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L590` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L616) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L590)

```diff
-                   uQ[mQ].gY.call(uQ[mQ].context, FQ, LQ, qQ);
+                   Mk[mk].sU.call(Mk[mk].context, ek, Dk, fk);
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L595` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L621) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L595)

```diff
-                   uQ[mQ].gY.apply(uQ[mQ].context, vQ)
+                   Mk[mk].sU.apply(Mk[mk].context, Pk)
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L604` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L630) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L604)

```diff
-             var oQ = wQ ? wQ + QQ : QQ;
+             var Sk = ik ? ik + kk : kk;
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L608` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L634) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L608)

```diff
-             if (kQ.gY) kQ.gY !== FQ || qQ && !kQ.once || LQ && kQ.context !== LQ || DQ(this, oQ);
+             if (rk.sU) rk.sU !== ek || fk && !rk.once || Dk && rk.context !== Dk || bk(this, Sk);
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L610-L611` → after: `L636-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L636-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L636-L637) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L610-L611)

```diff
-               for (var vQ = 0, mQ = [], uQ = kQ.length; vQ < uQ; vQ++)(kQ[vQ].gY !== FQ || qQ && !kQ[vQ].once || LQ && kQ[vQ].context !== LQ) && mQ.push(kQ[vQ]);
-               mQ.length ? this._events[oQ] = 1 === mQ.length ? mQ[0] : mQ : DQ(this, oQ)
+               for (var Pk = 0, mk = [], Mk = rk.length; Pk < Mk; Pk++)(rk[Pk].sU !== ek || fk && !rk[Pk].once || Dk && rk[Pk].context !== Dk) && mk.push(rk[Pk]);
+               mk.length ? this._events[Sk] = 1 === mk.length ? mk[0] : mk : bk(this, Sk)
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L614` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L640) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L614)

```diff
-           }, kQ.prototype.vG = function(QQ) {
+           }, rk.prototype.Gl = function(kk) {
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L616` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L642) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L616)

```diff
-             return QQ ? (FQ = wQ ? wQ + QQ : QQ, this._events[FQ] && DQ(this, FQ)) : (this._events = new LQ, this._eventsCount = 0), this
+             return kk ? (ek = ik ? ik + kk : kk, this._events[ek] && bk(this, ek)) : (this._events = new Dk, this._eventsCount = 0), this
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L618` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L644) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L618)

```diff
-         }, , (QQ, FQ, wQ) => {
+         }, , , , , , , , , (kk, ek, ik) => {
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L620` → after: `L646-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L646-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L646-L649) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L620)

```diff
-             d: () => uQ,
+             c: () => Mk,
+             e: () => nk,
+             f: () => Kk,
+             g: () => xk,
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L622-L625` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L651) · [Before (L622-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L622-L625)

```diff
-             i: () => HQ,
-             m: () => bQ,
-             q: () => xQ,
-             t: () => mQ
+             j: () => mk
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L627` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L653) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L627)

```diff
-           var LQ = wQ(33),
+           var Dk = ik(47),
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L629` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L655) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L629)

```diff
-             oQ = wQ(38),
+             Sk = ik(52),
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L633` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L659) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L633)

```diff
-               return `bloxd-${QQ}`
+               return `bloxd-${kk}`
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L664` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L690) · [Before (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L664)

```diff
-                 return console.error("Caught error", wQ, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (FQ = this._cachedVals[QQ]) && void 0 !== FQ ? FQ : null
+                 return console.error("Caught error", ik, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (ek = this._cachedVals[kk]) && void 0 !== ek ? ek : null
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L698` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L724) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L698)

```diff
-                 return console.error("Caught error", wQ, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", ik, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L729` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L755) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L729)

```diff
-                 return console.error("Caught error", wQ, "when attempting to read from sessionStorage."), null !== (FQ = this._cachedVals[QQ]) && void 0 !== FQ ? FQ : null
+                 return console.error("Caught error", ik, "when attempting to read from sessionStorage."), null !== (ek = this._cachedVals[kk]) && void 0 !== ek ? ek : null
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L756` → after: `L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L782) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L756)

```diff
-                 return null !== (LQ = this._cachedVals[QQ]) && void 0 !== LQ ? LQ : null
+                 return null !== (Dk = this._cachedVals[kk]) && void 0 !== Dk ? Dk : null
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L778` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L804) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L778)

```diff
-                   for (let LQ, qQ, oQ = 0, DQ = 0; qQ = QQ.charAt(DQ++); ~qQ && (LQ = oQ % 4 ? 64 * LQ + qQ : qQ, oQ++ % 4) ? FQ += String.fromCharCode(255 & LQ >> (-2 * oQ & 6)) : 0) qQ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(qQ);
+                   for (let Dk, fk, Sk = 0, bk = 0; fk = kk.charAt(bk++); ~fk && (Dk = Sk % 4 ? 64 * Dk + fk : fk, Sk++ % 4) ? ek += String.fromCharCode(255 & Dk >> (-2 * Sk & 6)) : 0) fk = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(fk);
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L785` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L811) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L785)

```diff
-               return DQ ? qQ = DQ : (qQ = AQ.FZAkcO(qQ), QQ[oQ] = qQ), qQ
+               return bk ? fk = bk : (fk = Hk.FZAkcO(fk), kk[Sk] = fk), fk
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L827` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L853) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L827)

```diff
-         }, , , , , , (QQ, FQ, wQ) => {
+         }, , , , , , , , , (kk, ek, ik) => {
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L959` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L985) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L959)

```diff
-                 return QQ instanceof this ? QQ : oQ.resolve(new this(qQ), QQ)
+                 return kk instanceof this ? kk : Sk.resolve(new this(fk), kk)
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L1008` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1034) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1008)

```diff
-                 return this.state !== vQ ? HQ(wQ, this.state === kQ ? QQ : FQ, this.outcome) : this.queue.push(new uQ(wQ, QQ, FQ)), wQ
+                 return this.state !== Pk ? Kk(ik, this.state === rk ? kk : ek, this.outcome) : this.queue.push(new Mk(ik, kk, ek)), ik
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L1381` → after: `L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1407) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1381)

```diff
-                       return QQ ? FQ : IQ(FQ)
+                       return kk ? ek : qk(ek)
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L1657` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1683) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1657)

```diff
-                   QQ instanceof ArrayBuffer ? (LQ = QQ, qQ += wF) : (LQ = QQ.buffer, "[object Int8Array]" === wQ ? qQ += qF : "[object Uint8Array]" === wQ ? qQ += oF : "[object Uint8ClampedArray]" === wQ ? qQ += DF : "[object Int16Array]" === wQ ? qQ += kF : "[object Uint16Array] … [truncated]
+                   kk instanceof ArrayBuffer ? (Dk = kk, fk += De) : (Dk = kk.buffer, "[object Int8Array]" === ik ? fk += Se : "[object Uint8Array]" === ik ? fk += be : "[object Uint8ClampedArray]" === ik ? fk += re : "[object Int16Array]" === ik ? fk += Pe : "[object Uint16Array] … [truncated]
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L1681` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1707) · [Before (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1681)

```diff
-                   case wF:
+                   case De:
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1683` → after: `L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1709) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1683)

```diff
-                   case LF:
+                   case fe:
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1687` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1713) · [Before (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1687)

```diff
-                   case qF:
+                   case Se:
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1689` → after: `L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1715) · [Before (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1689)

```diff
-                   case oF:
+                   case be:
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1691` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1717) · [Before (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1691)

```diff
-                   case DF:
+                   case re:
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1693` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1719) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1693)

```diff
-                   case kF:
+                   case Pe:
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1695` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1721) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1695)

```diff
-                   case mF:
+                   case Me:
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1697` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1723) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1697)

```diff
-                   case vF:
+                   case me:
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1699` → after: `L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1725) · [Before (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1699)

```diff
-                   case uF:
+                   case Ke:
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1701` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1727) · [Before (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1701)

```diff
-                   case HF:
+                   case xe:
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1703` → after: `L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1729) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1703)

```diff
-                   case bF:
+                   case ne:
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1741` → after: `L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1767) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1741)

```diff
-                 return wQ.mG = GF, qQ
+                 return ik.Rl = Ye, fk
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1763` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1789) · [Before (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1763)

```diff
-                         LQ && (LQ = qQ.mG.deserialize(LQ)), FQ(LQ)
+                         Dk && (Dk = fk.Rl.deserialize(Dk)), ek(Dk)
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1783` → after: `L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1809) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1783)

```diff
-                             if (mQ && (mQ = qQ.mG.deserialize(mQ)), void 0 !== (mQ = QQ(mQ, vQ.key, kQ + 1))) return void FQ(mQ)
+                             if (mk && (mk = fk.Rl.deserialize(mk)), void 0 !== (mk = kk(mk, Pk.key, rk + 1))) return void ek(mk)
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1803` → after: `L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L1829) · [Before (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L1803)

```diff
-                     vQ.mG.serialize(FQ, (function(FQ, mQ) {
+                     Pk.Rl.serialize(ek, (function(ek, mk) {
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L2014` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2040) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2014)

```diff
-                 return wQ.keyPrefix = lF(QQ, FQ._defaultConfig), aF() ? (FQ._dbInfo = wQ, wQ.mG = GF, mQ.resolve()) : mQ.reject()
+                 return ik.keyPrefix = ae(kk, ek._defaultConfig), te() ? (ek._dbInfo = ik, ik.Rl = Ye, mk.resolve()) : mk.reject()
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L2034` → after: `L2060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2060) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2034)

```diff
-                   return LQ && (LQ = FQ.mG.deserialize(LQ)), LQ
+                   return Dk && (Dk = ek.Rl.deserialize(Dk)), Dk
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L2046` → after: `L2072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2072) · [Before (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2046)

```diff
-                         if (mQ && (mQ = FQ.mG.deserialize(mQ)), void 0 !== (mQ = QQ(mQ, vQ.substring(qQ), DQ++))) return mQ
+                         if (mk && (mk = ek.Rl.deserialize(mk)), void 0 !== (mk = kk(mk, Pk.substring(fk), bk++))) return mk
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L2104` → after: `L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2130) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2104)

```diff
-                     DQ.mG.serialize(FQ, (function(FQ, LQ) {
+                     bk.Rl.serialize(ek, (function(ek, Dk) {
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L2393` → after: `L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2419) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2393)

```diff
-         }, , , , , , , , , (QQ, FQ, wQ) => {
+         }, , , (kk, ek, ik) => {
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L2395` → after: `L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2421) · [Before (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2395)

```diff
-             c: () => qQ
+             b: () => fk
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2397` → after: `L2423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2423) · [Before (L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2397)

```diff
-           var LQ = wQ(27);
+           var Dk = ik(38);
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2401` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2427) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2401)

```diff
-             return null !== (QQ = LQ.i.getItem("soundVol")) && void 0 !== QQ ? QQ : .5
+             return null !== (kk = Dk.f.getItem("soundVol")) && void 0 !== kk ? kk : .5
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2404-L2406` → after: `L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2432) · [Before (L2404-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2404-L2406)

```diff
-           QQ.exports = wQ(60)
-         }, , , , , , , (QQ, FQ, wQ) => {
-           var LQ = wQ(68),
+           var Dk = ik(72),
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2517-L2518` → after: `L2543-L2544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2543-L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2543-L2544) · [Before (L2517-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2517-L2518)

```diff
-                   case qQ:
-                   case oQ:
+                   case fk:
+                   case Sk:
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2539` → after: `L2565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2565) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2539)

```diff
-                   return null === QQ || "object" !== typeof QQ ? null : "function" === typeof(QQ = bQ && QQ[bQ] || QQ["@@iterator"]) ? QQ : null
+                   return null === kk || "object" !== typeof kk ? null : "function" === typeof(kk = xk && kk[xk] || kk["@@iterator"]) ? kk : null
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2693` → after: `L2719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2719) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2693)

```diff
-         }, , , , , , , , QQ => {
+         }, , , , , , kk => {
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2733-L2737` → after: `L2759-L2763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2759-L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2759-L2763) · [Before (L2733-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2733-L2737)

```diff
-           }(), QQ.exports = wQ(79)
-         }, , , , , , , , (QQ, FQ, wQ) => {
-           var LQ = wQ(53),
-             qQ = wQ(68),
-             oQ = wQ(85);
+           }(), kk.exports = ik(81)
+         }, , , , , , (kk, ek, ik) => {
+           var Dk = ik(60),
+             fk = ik(72),
+             Sk = ik(88);
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2824` → after: `L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2850) · [Before (L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2824)

```diff
-             }(FQ) && (null === wQ ? QQ.removeAttribute(FQ) : QQ.setAttribute(FQ, "" + wQ)) : qQ.mustUseProperty ? QQ[qQ.propertyName] = null === wQ ? 3 !== qQ.type && "" : wQ : (FQ = qQ.attributeName, LQ = qQ.attributeNamespace, null === wQ ? QQ.removeAttribute(FQ) : (wQ = 3 ===  … [truncated]
+             }(ek) && (null === ik ? kk.removeAttribute(ek) : kk.setAttribute(ek, "" + ik)) : fk.mustUseProperty ? kk[fk.propertyName] = null === ik ? 3 !== fk.type && "" : ik : (ek = fk.attributeName, Dk = fk.attributeNamespace, null === ik ? kk.removeAttribute(ek) : (ik = 3 ===  … [truncated]
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L2865` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2891) · [Before (L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2865)

```diff
-             return null === QQ || "object" !== typeof QQ ? null : "function" === typeof(QQ = VQ && QQ[VQ] || QQ["@@iterator"]) ? QQ : null
+             return null === kk || "object" !== typeof kk ? null : "function" === typeof(kk = Bk && kk[Bk] || kk["@@iterator"]) ? kk : null
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L2963` → after: `L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2989) · [Before (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2963)

```diff
-               case iQ:
+               case jk:
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L2965` → after: `L2991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2991) · [Before (L2965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2965)

```diff
-               case SQ:
+               case Ak:
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L2967` → after: `L2993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2993) · [Before (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2967)

```diff
-               case RQ:
+               case dk:
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L2969` → after: `L2995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2995) · [Before (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2969)

```diff
-               case WQ:
+               case sk:
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L2971` → after: `L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2997) · [Before (L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2971)

```diff
-               case IQ:
+               case qk:
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L2973` → after: `L2999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L2999) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2973)

```diff
-               case UQ:
+               case Ik:
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L2977` → after: `L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3003) · [Before (L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2977)

```diff
-               case sQ:
+               case Fk:
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L2979` → after: `L3005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3005) · [Before (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2979)

```diff
-               case OQ:
+               case Vk:
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L2981` → after: `L3007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3007) · [Before (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2981)

```diff
-               case rQ:
+               case uk:
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L2984` → after: `L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3010) · [Before (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2984)

```diff
-               case NQ:
+               case zk:
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L2986` → after: `L3012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3012) · [Before (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2986)

```diff
-               case KQ:
+               case vk:
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L2988` → after: `L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3014) · [Before (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L2988)

```diff
-               case TQ:
+               case Qk:
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L3072` → after: `L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3098) · [Before (L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L3072)

```diff
-               checked: null != wQ ? wQ : QQ._wrapperState.initialChecked
+               checked: null != ik ? ik : kk._wrapperState.initialChecked
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L3372` → after: `L3398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3398) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L3372)

```diff
-             QQ: switch (FQ) {
+             kk: switch (ek) {
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L3438` → after: `L3464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3464) · [Before (L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L3438)

```diff
-             return 3 === FQ.tag ? wQ : null
+             return 3 === ek.tag ? ik : null
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L3510` → after: `L3536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3536) · [Before (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L3510)

```diff
-                 return wQ.stateNode.current === wQ ? QQ : FQ
+                 return ik.stateNode.current === ik ? kk : ek
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L3722` → after: `L3748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3748) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L3722)

```diff
-             return 0 !== (QQ = -1073741825 & QQ.pendingLanes) ? QQ : 1073741824 & QQ ? 1073741824 : 0
+             return 0 !== (kk = -1073741825 & kk.pendingLanes) ? kk : 1073741824 & kk ? 1073741824 : 0
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L3846` → after: `L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3872) · [Before (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L3846)

```diff
-             return mL = qQ.slice(QQ, 1 < FQ ? 1 - FQ : void 0)
+             return KD = fk.slice(kk, 1 < ek ? 1 - ek : void 0)
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L3851` → after: `L3877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3877) · [Before (L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L3851)

```diff
-             return "charCode" in QQ ? 0 === (QQ = QQ.charCode) && 13 === FQ && (QQ = 13) : QQ = FQ, 10 === QQ && (QQ = 13), 32 <= QQ || 13 === QQ ? QQ : 0
+             return "charCode" in kk ? 0 === (kk = kk.charCode) && 13 === ek && (kk = 13) : kk = ek, 10 === kk && (kk = 13), 32 <= kk || 13 === kk ? kk : 0
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L3865` → after: `L3891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L3891) · [Before (L3865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L3865)

```diff
-               return this.isDefaultPrevented = (null != qQ.defaultPrevented ? qQ.defaultPrevented : !1 === qQ.returnValue) ? bL : YL, this.isPropagationStopped = YL, this
+               return this.isDefaultPrevented = (null != fk.defaultPrevented ? fk.defaultPrevented : !1 === fk.returnValue) ? UD : HD, this.isPropagationStopped = HD, this
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L4225` → after: `L4251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4251) · [Before (L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4225)

```diff
-               QQ: {
+               kk: {
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L4267` → after: `L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4293) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4267)

```diff
-             var LQ = wQ.window === wQ ? wQ.document : 9 === wQ.nodeType ? wQ : wQ.ownerDocument;
+             var Dk = ik.window === ik ? ik.document : 9 === ik.nodeType ? ik : ik.ownerDocument;
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L4305` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4331) · [Before (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4305)

```diff
-               QQ: {
+               kk: {
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L4331` → after: `L4357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4357) · [Before (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4331)

```diff
-           function fq(QQ) {
+           function of(kk) {
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L4371` → after: `L4397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4397) · [Before (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4371)

```diff
-             if (0 === (1 & FQ) && 0 === (2 & FQ) && null !== LQ) QQ: for (;;) {
+             if (0 === (1 & ek) && 0 === (2 & ek) && null !== Dk) kk: for (;;) {
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L4405` → after: `L4431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4431) · [Before (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4405)

```diff
-               QQ: {
+               kk: {
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L4455-L4457` → after: `L4481-L4483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4481-L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4481-L4483) · [Before (L4455-L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4455-L4457)

```diff
-                     case Tw:
-                     case Kw:
-                     case zw:
+                     case vi:
+                     case Ei:
+                     case ai:
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L4460` → after: `L4486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4486) · [Before (L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4460)

```diff
-                     case lw:
+                     case Wi:
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L4500-L4501` → after: `L4526-L4527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4526-L4527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4526-L4527) · [Before (L4500-L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4500-L4501)

```diff
-                 if (vQ = "mouseout" === QQ || "pointerout" === QQ, (!(kQ = "mouseover" === QQ || "pointerover" === QQ) || 0 !== (16 & FQ) || !(mQ = wQ.relatedTarget || wQ.fromElement) || !bo(mQ) && !mQ[uo]) && (vQ || kQ) && (kQ = qQ.window === qQ ? qQ : (kQ = qQ.ownerDocument) ?  … [truncated]
-                   if (uQ = SL, AQ = "onMouseLeave", bQ = "onMouseEnter", xQ = "mouse", "pointerout" !== QQ && "pointerover" !== QQ || (uQ = jL, AQ = "onPointerLeave", bQ = "onPointerEnter", xQ = "pointer"), HQ = null == vQ ? kQ : xo(vQ), YQ = null == mQ ? kQ : xo(mQ), (kQ = new u … [truncated]
+                 if (Pk = "mouseout" === kk || "pointerout" === kk, (!(rk = "mouseover" === kk || "pointerover" === kk) || 0 !== (16 & ek) || !(mk = ik.relatedTarget || ik.fromElement) || !wS(mk) && !mk[US]) && (Pk || rk) && (rk = fk.window === fk ? fk : (rk = fk.ownerDocument) ?  … [truncated]
+                   if (Mk = sD, Hk = "onMouseLeave", xk = "onMouseEnter", Uk = "mouse", "pointerout" !== kk && "pointerover" !== kk || (Mk = tD, Hk = "onPointerLeave", xk = "onPointerEnter", Uk = "pointer"), Kk = null == Pk ? rk : pS(Pk), nk = null == mk ? rk : pS(mk), (rk = new M … [truncated]
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L4547` → after: `L4573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4573) · [Before (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4547)

```diff
-                 if (JL) QQ: {
+                 if (ZD) kk: {
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L4565` → after: `L4591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4591) · [Before (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4565)

```diff
-                 }), MQ ? GQ.data = MQ : null !== (MQ = BL(wQ)) && (GQ.data = MQ))), (MQ = nL ? function(QQ, FQ) {
+                 }), pk ? yk.data = pk : null !== (pk = kf(ik)) && (yk.data = pk))), (pk = gD ? function(kk, ek) {
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L4803` → after: `L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4829) · [Before (L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4803)

```diff
-             yo = void 0 !== fo ? fo : function() {},
+             kb = void 0 !== TS ? TS : function() {},
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L4808` → after: `L4834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4834) · [Before (L4808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4808)

```diff
-             LD = 1e4 > wD ? Vo : function() {
+             Sb = 1e4 > fb ? oS : function() {
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L4814` → after: `L4840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4840) · [Before (L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4814)

```diff
-               case Jo:
+               case OS:
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L4816` → after: `L4842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4842) · [Before (L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4816)

```diff
-               case Eo:
+               case gS:
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L4818` → after: `L4844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4844) · [Before (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4818)

```diff
-               case no:
+               case GS:
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L4820` → after: `L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4846) · [Before (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4820)

```diff
-               case go:
+               case NS:
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L4822` → after: `L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L4848) · [Before (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4822)

```diff
-               case Po:
+               case RS:
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L4975` → after: `L5001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5001) · [Before (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4975)

```diff
-               null === wQ ? FQ.next = FQ : (FQ.next = wQ.next, wQ.next = FQ), QQ.pending = FQ
+               null === ik ? ek.next = ek : (ek.next = ik.next, ik.next = ek), kk.pending = ek
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L4995` → after: `L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5021) · [Before (L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4995)

```diff
-                   null === oQ ? qQ = oQ = DQ : oQ = oQ.next = DQ, wQ = wQ.next
+                   null === Sk ? fk = Sk = bk : Sk = Sk.next = bk, ik = ik.next
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L4997` → after: `L5023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5023) · [Before (L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L4997)

```diff
-                 null === oQ ? qQ = oQ = FQ : oQ = oQ.next = FQ
+                 null === Sk ? fk = Sk = ek : Sk = Sk.next = ek
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L5007` → after: `L5033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5033) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5007)

```diff
-             null === (QQ = wQ.lastBaseUpdate) ? wQ.firstBaseUpdate = FQ : QQ.next = FQ, wQ.lastBaseUpdate = FQ
+             null === (kk = ik.lastBaseUpdate) ? ik.firstBaseUpdate = ek : kk.next = ek, ik.lastBaseUpdate = ek
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L5020` → after: `L5046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5046) · [Before (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5020)

```diff
-               mQ.next = null, null === kQ ? DQ = uQ : kQ.next = uQ, kQ = mQ;
+               mk.next = null, null === rk ? bk = Mk : rk.next = Mk, rk = mk;
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L5024` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5050) · [Before (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5024)

```diff
-                 bQ !== kQ && (null === bQ ? HQ.firstBaseUpdate = uQ : bQ.next = uQ, HQ.lastBaseUpdate = mQ)
+                 xk !== rk && (null === xk ? Kk.firstBaseUpdate = Mk : xk.next = Mk, Kk.lastBaseUpdate = mk)
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L5040` → after: `L5066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5066) · [Before (L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5040)

```diff
-                   QQ: {
+                   kk: {
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L5093` → after: `L5119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5119) · [Before (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5093)

```diff
-             wQ = null === (wQ = wQ(LQ, FQ = QQ.memoizedState)) || void 0 === wQ ? FQ : qQ({}, FQ, wQ), QQ.memoizedState = wQ, 0 === QQ.lanes && (QQ.updateQueue.baseState = wQ)
+             ik = null === (ik = ik(Dk, ek = kk.memoizedState)) || void 0 === ik ? ek : fk({}, ek, ik), kk.memoizedState = ik, 0 === kk.lanes && (kk.updateQueue.baseState = ik)
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L5130` → after: `L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5156) · [Before (L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5130)

```diff
-             return "object" === typeof oQ && null !== oQ ? oQ = pD(oQ) : (qQ = Oo(FQ) ? Wo : So.current, oQ = (LQ = null !== (LQ = FQ.contextTypes) && void 0 !== LQ) ? Ro(QQ, qQ) : Co), FQ = new FQ(wQ, oQ), QQ.memoizedState = null !== FQ.state && void 0 !== FQ.state ? FQ.state :  … [truncated]
+             return "object" === typeof Sk && null !== Sk ? Sk = Cb(Sk) : (fk = IS(ek) ? uS : VS.current, Sk = (Dk = null !== (Dk = ek.contextTypes) && void 0 !== Dk) ? qS(kk, fk) : dS), ek = new ek(ik, Sk), kk.memoizedState = null !== ek.state && void 0 !== ek.state ? ek.state :  … [truncated]
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L5141` → after: `L5167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5167) · [Before (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5141)

```diff
-             "object" === typeof oQ && null !== oQ ? qQ.context = pD(oQ) : (oQ = Oo(FQ) ? Wo : So.current, qQ.context = Ro(QQ, oQ)), OD(QQ, wQ, qQ, LQ), qQ.state = QQ.memoizedState, "function" === typeof(oQ = FQ.getDerivedStateFromProps) && (ID(QQ, FQ, oQ, wQ), qQ.state = QQ.memoi … [truncated]
+             "object" === typeof Sk && null !== Sk ? fk.context = Cb(Sk) : (Sk = IS(ek) ? uS : VS.current, fk.context = qS(kk, Sk)), ub(kk, ik, fk, Dk), fk.state = kk.memoizedState, "function" === typeof(Sk = ek.getDerivedStateFromProps) && (zb(kk, ek, Sk, ik), fk.state = kk.memoi … [truncated]
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L5193` → after: `L5219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5219) · [Before (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5193)

```diff
-               return FQ.index = LQ, QQ ? null !== (LQ = FQ.alternate) ? (LQ = LQ.index) < wQ ? (FQ.flags = 2, wQ) : LQ : (FQ.flags = 2, wQ) : wQ
+               return ek.index = Dk, kk ? null !== (Dk = ek.alternate) ? (Dk = Dk.index) < ik ? (ek.flags = 2, ik) : Dk : (ek.flags = 2, ik) : ik
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L5220` → after: `L5246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5246) · [Before (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5220)

```diff
-                   case CQ:
+                   case Ck:
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L5222` → after: `L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5248) · [Before (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5222)

```diff
-                   case SQ:
+                   case Ak:
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L5236` → after: `L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5262) · [Before (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5236)

```diff
-                   case CQ:
+                   case Ck:
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L5238` → after: `L5264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5264) · [Before (L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5238)

```diff
-                   case SQ:
+                   case Ak:
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L5251-L5254` → after: `L5277-L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5277-L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5277-L5280) · [Before (L5251-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5251-L5254)

```diff
-                   case CQ:
-                     return QQ = QQ.get(null === LQ.key ? wQ : LQ.key) || null, LQ.type === iQ ? HQ(FQ, QQ, LQ.props.children, qQ, LQ.key) : mQ(FQ, QQ, LQ, qQ);
-                   case SQ:
-                     return uQ(FQ, QQ = QQ.get(null === LQ.key ? wQ : LQ.key) || null, LQ, qQ)
+                   case Ck:
+                     return kk = kk.get(null === Dk.key ? ik : Dk.key) || null, Dk.type === jk ? Kk(ek, kk, Dk.props.children, fk, Dk.key) : mk(ek, kk, Dk, fk);
+                   case Ak:
+                     return Mk(ek, kk = kk.get(null === Dk.key ? ik : Dk.key) || null, Dk, fk)
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L5270` → after: `L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5296) · [Before (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5270)

```diff
-                 QQ && HQ && null === eQ.alternate && FQ(qQ, HQ), DQ = oQ(eQ, DQ, AQ), null === uQ ? mQ = eQ : uQ.sibling = eQ, uQ = eQ, HQ = tQ
+                 kk && Kk && null === lk.alternate && ek(fk, Kk), bk = Sk(lk, bk, Hk), null === Mk ? mk = lk : Mk.sibling = lk, Mk = lk, Kk = wk
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L5274` → after: `L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5300) · [Before (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5274)

```diff
-                 for (; AQ < kQ.length; AQ++) null !== (HQ = bQ(qQ, kQ[AQ], vQ)) && (DQ = oQ(HQ, DQ, AQ), null === uQ ? mQ = HQ : uQ.sibling = HQ, uQ = HQ);
+                 for (; Hk < rk.length; Hk++) null !== (Kk = xk(fk, rk[Hk], Pk)) && (bk = Sk(Kk, bk, Hk), null === Mk ? mk = Kk : Mk.sibling = Kk, Mk = Kk);
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L5277` → after: `L5303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5303) · [Before (L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5277)

```diff
-               for (HQ = LQ(qQ, HQ); AQ < kQ.length; AQ++) null !== (tQ = xQ(HQ, qQ, AQ, kQ[AQ], vQ)) && (QQ && null !== tQ.alternate && HQ.delete(null === tQ.key ? AQ : tQ.key), DQ = oQ(tQ, DQ, AQ), null === uQ ? mQ = tQ : uQ.sibling = tQ, uQ = tQ);
+               for (Kk = Dk(fk, Kk); Hk < rk.length; Hk++) null !== (wk = Uk(Kk, fk, Hk, rk[Hk], Pk)) && (kk && null !== wk.alternate && Kk.delete(null === wk.key ? Hk : wk.key), bk = Sk(wk, bk, Hk), null === Mk ? mk = wk : Mk.sibling = wk, Mk = wk);
```

#### 186. `bundles/bloxd.io/main.js` (Changed code · before: `L5294` → after: `L5320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5320) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5294)

```diff
-                 QQ && AQ && null === GQ.alternate && FQ(qQ, AQ), kQ = oQ(GQ, kQ, tQ), null === HQ ? uQ = GQ : HQ.sibling = GQ, HQ = GQ, AQ = eQ
+                 kk && Hk && null === yk.alternate && ek(fk, Hk), rk = Sk(yk, rk, wk), null === Kk ? Mk = yk : Kk.sibling = yk, Kk = yk, Hk = lk
```

#### 187. `bundles/bloxd.io/main.js` (Changed code · before: `L5298` → after: `L5324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5324) · [Before (L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5298)

```diff
-                 for (; !MQ.done; tQ++, MQ = vQ.next()) null !== (MQ = bQ(qQ, MQ.value, mQ)) && (kQ = oQ(MQ, kQ, tQ), null === HQ ? uQ = MQ : HQ.sibling = MQ, HQ = MQ);
+                 for (; !pk.done; wk++, pk = Pk.next()) null !== (pk = xk(fk, pk.value, mk)) && (rk = Sk(pk, rk, wk), null === Kk ? Mk = pk : Kk.sibling = pk, Kk = pk);
```

#### 188. `bundles/bloxd.io/main.js` (Changed code · before: `L5301` → after: `L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5327) · [Before (L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5301)

```diff
-               for (AQ = LQ(qQ, AQ); !MQ.done; tQ++, MQ = vQ.next()) null !== (MQ = xQ(AQ, qQ, tQ, MQ.value, mQ)) && (QQ && null !== MQ.alternate && AQ.delete(null === MQ.key ? tQ : MQ.key), kQ = oQ(MQ, kQ, tQ), null === HQ ? uQ = MQ : HQ.sibling = MQ, HQ = MQ);
+               for (Hk = Dk(fk, Hk); !pk.done; wk++, pk = Pk.next()) null !== (pk = Uk(Hk, fk, wk, pk.value, mk)) && (kk && null !== pk.alternate && Hk.delete(null === pk.key ? wk : pk.key), rk = Sk(pk, rk, wk), null === Kk ? Mk = pk : Kk.sibling = pk, Kk = pk);
```

#### 189. `bundles/bloxd.io/main.js` (Changed code · before: `L5311-L5312` → after: `L5337-L5338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5337-L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5337-L5338) · [Before (L5311-L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5311-L5312)

```diff
-                 case CQ:
-                   QQ: {
+                 case Ck:
+                   kk: {
```

#### 190. `bundles/bloxd.io/main.js` (Changed code · before: `L5332-L5333` → after: `L5358-L5359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5358-L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5358-L5359) · [Before (L5332-L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5332-L5333)

```diff
-                 case SQ:
-                   QQ: {
+                 case Ak:
+                   kk: {
```

#### 191. `bundles/bloxd.io/main.js` (Changed code · before: `L5471` → after: `L5497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5497) · [Before (L5471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5471)

```diff
-               QQ: {
+               kk: {
```

#### 192. `bundles/bloxd.io/main.js` (Changed code · before: `L5521` → after: `L5547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5547) · [Before (L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5521)

```diff
-             if (Ak = oQ, tk = FQ, FQ.memoizedState = null, FQ.updateQueue = null, FQ.lanes = 0, Yk.current = null === QQ || null === QQ.memoizedState ? yk : Bk, QQ = wQ(LQ, qQ), pk) {
+             if (wr = Sk, lr = ek, ek.memoizedState = null, ek.updateQueue = null, ek.lanes = 0, Ur.current = null === kk || null === kk.memoizedState ? Rr : Jr, kk = ik(Dk, fk), Lr) {
```

#### 193. `bundles/bloxd.io/main.js` (Changed code · before: `L5540` → after: `L5566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5566) · [Before (L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5540)

```diff
-             return null === Mk ? tk.memoizedState = Mk = QQ : Mk = Mk.next = QQ, Mk
+             return null === yr ? lr.memoizedState = yr = kk : yr = yr.next = kk, yr
```

#### 194. `bundles/bloxd.io/main.js` (Changed code · before: `L5558` → after: `L5584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5584) · [Before (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5558)

```diff
-               }, null === Mk ? tk.memoizedState = Mk = QQ : Mk = Mk.next = QQ
+               }, null === yr ? lr.memoizedState = yr = kk : yr = yr.next = kk
```

#### 195. `bundles/bloxd.io/main.js` (Changed code · before: `L5607` → after: `L5633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5633) · [Before (L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5607)

```diff
-               null === vQ ? oQ = LQ : vQ.next = kQ, Mq(LQ, FQ.memoizedState) || (Fv = !0), FQ.memoizedState = LQ, FQ.baseState = oQ, FQ.baseQueue = vQ, wQ.lastRenderedState = LQ
+               null === Pk ? Sk = Dk : Pk.next = rk, Lf(Dk, ek.memoizedState) || (iP = !0), ek.memoizedState = Dk, ek.baseState = Sk, ek.baseQueue = Pk, ik.lastRenderedState = Dk
```

#### 196. `bundles/bloxd.io/main.js` (Changed code · before: `L5635` → after: `L5661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5661) · [Before (L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5635)

```diff
-             if (null !== qQ ? QQ = qQ === LQ : (QQ = QQ.mutableReadLanes, (QQ = (Ak & QQ) === QQ) && (FQ._workInProgressVersionPrimary = LQ, Hk.push(FQ))), QQ) return wQ(FQ._source);
+             if (null !== fk ? kk = fk === Dk : (kk = kk.mutableReadLanes, (kk = (wr & kk) === kk) && (ek._workInProgressVersionPrimary = Dk, xr.push(ek))), kk) return ik(ek._source);
```

#### 197. `bundles/bloxd.io/main.js` (Changed code · before: `L5717` → after: `L5743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5743) · [Before (L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5717)

```diff
-             }, tk.updateQueue = FQ, FQ.lastEffect = QQ.next = QQ) : null === (wQ = FQ.lastEffect) ? FQ.lastEffect = QQ.next = QQ : (LQ = wQ.next, wQ.next = QQ, QQ.next = LQ, FQ.lastEffect = QQ), QQ
+             }, lr.updateQueue = ek, ek.lastEffect = kk.next = kk) : null === (ik = ek.lastEffect) ? ek.lastEffect = kk.next = kk : (Dk = ik.next, ik.next = kk, kk.next = Dk, ek.lastEffect = kk), kk
```

#### 198. `bundles/bloxd.io/main.js` (Changed code · before: `L5812` → after: `L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L5838) · [Before (L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L5812)

```diff
-             if (null === DQ ? oQ.next = oQ : (oQ.next = DQ.next, DQ.next = oQ), FQ.pending = oQ, DQ = QQ.alternate, QQ === tk || null !== DQ && DQ === tk) pk = Gk = !0;
+             if (null === bk ? Sk.next = Sk : (Sk.next = bk.next, bk.next = Sk), ek.pending = Sk, bk = kk.alternate, kk === lr || null !== bk && bk === lr) Lr = Yr = !0;
```

#### 199. `bundles/bloxd.io/main.js` (Changed code · before: `L6014` → after: `L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6040) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6014)

```diff
-             return DQ = QQ.child, 0 === (qQ & oQ) && (qQ = DQ.memoizedProps, (wQ = null !== (wQ = wQ.compare) ? wQ : pq)(qQ, LQ) && QQ.ref === FQ.ref) ? iv(QQ, FQ, oQ) : (FQ.flags |= 1, (QQ = tu(DQ, LQ)).ref = FQ.ref, QQ.return = FQ, FQ.child = QQ)
+             return bk = kk.child, 0 === (fk & Sk) && (fk = bk.memoizedProps, (ik = null !== (ik = ik.compare) ? ik : Af)(fk, Dk) && kk.ref === ek.ref) ? sP(kk, ek, Sk) : (ek.flags |= 1, (kk = lM(bk, Dk)).ref = ek.ref, kk.return = ek, ek.child = kk)
```

#### 200. `bundles/bloxd.io/main.js` (Changed code · before: `L6034` → after: `L6060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6060) · [Before (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6034)

```diff
-                 if (0 === (1073741824 & wQ)) return QQ = null !== oQ ? oQ.baseLanes | wQ : wQ, FQ.lanes = FQ.childLanes = 1073741824, FQ.memoizedState = {
+                 if (0 === (1073741824 & ik)) return kk = null !== Sk ? Sk.baseLanes | ik : ik, ek.lanes = ek.childLanes = 1073741824, ek.memoizedState = {
```

#### 201. `bundles/bloxd.io/main.js` (Changed code · before: `L6051` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6077) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6051)

```diff
-             var oQ = Oo(wQ) ? Wo : So.current;
+             var Sk = IS(ik) ? uS : VS.current;
```

#### 202. `bundles/bloxd.io/main.js` (Changed code · before: `L6067` → after: `L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6093) · [Before (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6067)

```diff
-               "object" === typeof mQ && null !== mQ ? mQ = pD(mQ) : mQ = Ro(FQ, mQ = Oo(wQ) ? Wo : So.current);
+               "object" === typeof mk && null !== mk ? mk = Cb(mk) : mk = qS(ek, mk = IS(ik) ? uS : VS.current);
```

#### 203. `bundles/bloxd.io/main.js` (Changed code · before: `L6074` → after: `L6100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6100) · [Before (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6074)

```diff
-               DQ = FQ.stateNode, SD(QQ, FQ), kQ = FQ.memoizedProps, mQ = FQ.type === FQ.elementType ? kQ : HD(FQ.type, kQ), DQ.props = mQ, HQ = FQ.pendingProps, bQ = DQ.context, "object" === typeof(vQ = wQ.contextType) && null !== vQ ? vQ = pD(vQ) : vQ = Ro(FQ, vQ = Oo(wQ) ? Wo : … [truncated]
+               bk = ek.stateNode, sb(kk, ek), rk = ek.memoizedProps, mk = ek.type === ek.elementType ? rk : nb(ek.type, rk), bk.props = mk, Kk = ek.pendingProps, xk = bk.context, "object" === typeof(Pk = ik.contextType) && null !== Pk ? Pk = Cb(Pk) : Pk = qS(ek, Pk = IS(ik) ? uS : … [truncated]
```

#### 204. `bundles/bloxd.io/main.js` (Changed code · before: `L6157` → after: `L6183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6183) · [Before (L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6157)

```diff
-               Zx: null,
+               yH: null,
```

#### 205. `bundles/bloxd.io/main.js` (Changed code · before: `L6163` → after: `L6189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6189) · [Before (L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6163)

```diff
-             } : (DQ.isBackwards = FQ, DQ.Zx = null, DQ.renderingStartTime = 0, DQ.last = LQ, DQ.tail = wQ, DQ.tailMode = qQ, DQ.lastEffect = oQ)
+             } : (bk.isBackwards = ek, bk.yH = null, bk.renderingStartTime = 0, bk.last = Dk, bk.tail = ik, bk.tailMode = fk, bk.lastEffect = Sk)
```

#### 206. `bundles/bloxd.io/main.js` (Changed code · before: `L6172` → after: `L6198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6198) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6172)

```diff
-               if (null !== QQ && 0 !== (64 & QQ.flags)) QQ: for (QQ = FQ.child; null !== QQ;) {
+               if (null !== kk && 0 !== (64 & kk.flags)) kk: for (kk = ek.child; null !== kk;) {
```

#### 207. `bundles/bloxd.io/main.js` (Changed code · before: `L6321` → after: `L6347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6347) · [Before (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6321)

```diff
-                     switch (mQ = 9 === oQ.nodeType ? oQ : oQ.ownerDocument, QQ === YF && (QQ = AF(wQ)), QQ === YF ? "script" === wQ ? ((QQ = mQ.createElement("div")).innerHTML = "<script><\/script>", QQ = QQ.removeChild(QQ.firstChild)) : "string" === typeof LQ.is ? QQ = mQ.create … [truncated]
+                     switch (mk = 9 === Sk.nodeType ? Sk : Sk.ownerDocument, kk === Ue && (kk = we(ik)), kk === Ue ? "script" === ik ? ((kk = mk.createElement("div")).innerHTML = "<script><\/script>", kk = kk.removeChild(kk.firstChild)) : "string" === typeof Dk.is ? kk = mk.create … [truncated]
```

#### 208. `bundles/bloxd.io/main.js` (Changed code · before: `L6398` → after: `L6424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6424) · [Before (L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6398)

```diff
-                   wQ = gD(nD.current), gD(JD.current), mk(FQ) ? (LQ = FQ.stateNode, wQ = FQ.memoizedProps, LQ[vo] = FQ, LQ.nodeValue !== wQ && (FQ.flags |= 4)) : ((LQ = (9 === wQ.nodeType ? wQ : wQ.ownerDocument).createTextNode(LQ))[vo] = FQ, FQ.stateNode = LQ)
+                   ik = Gb(gb.current), Gb(Zb.current), Mr(ek) ? (Dk = ek.stateNode, ik = ek.memoizedProps, Dk[xS] = ek, Dk.nodeValue !== ik && (ek.flags |= 4)) : ((Dk = (9 === ik.nodeType ? ik : ik.ownerDocument).createTextNode(Dk))[xS] = ek, ek.stateNode = Dk)
```

#### 209. `bundles/bloxd.io/main.js` (Changed code · before: `L6404` → after: `L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/main.js#L6430) · [Before (L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/main.js#L6404)

```diff
-                 return ZD(), Yv(FQ), null === QQ && fq(FQ.stateNode.containerInfo), null;
+                 return Rb(), UP(ek), null === kk && of(ek.stateNode.containerInfo), null;
```
