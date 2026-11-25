# Changed — Bundle Modifications Report (Part 127 / 141)

- **Updated at**: `2026-11-25T09:11 JST`
- **Part**: `127 / 141` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 126](part-126.md) · [Part 128 →](part-128.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (igzsf.a0b73a5f → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1817 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 659. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7214` → after: `L7214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7214) · [Before (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7214)

```diff
-             if (this.caveMetadataForChunkCache = tt, this.heightmapVals = et, this.caveGeneratorsPerChunk = [], Vt !== qt.u) throw new Error(`Cave generation is not supported for chunk sizes other than ${qt.u}`)
+             if (this.caveMetadataForChunkCache = BB, this.heightmapVals = IB, this.caveGeneratorsPerChunk = [], ZB !== JB.C) throw new Error(`Cave generation is not supported for chunk sizes other than ${JB.C}`)
```

#### 660. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7217-L7218` → after: `L7217-L7218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7217-L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7217-L7218) · [Before (L7217-L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7217-L7218)

```diff
-             const Ot = (0, qt.H)(tt),
-               Dt = (0, qt.H)(et);
+             const TB = (0, JB.T)(BB),
+               oB = (0, JB.T)(IB);
```

#### 661. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7233` → after: `L7233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7233) · [Before (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7233)

```diff
-             for (let Ot = 0; Ot < this.numCaveTypes; Ot++) Vt.set(tt, et, Ot, Dt.d.FloorY, mt.j), Vt.set(tt, et, Ot, Dt.d.CeilingY, mt.j)
+             for (let TB = 0; TB < this.numCaveTypes; TB++) ZB.set(BB, IB, TB, oB.c.FloorY, GB.j), ZB.set(BB, IB, TB, oB.c.CeilingY, GB.j)
```

#### 662. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7240` → after: `L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7240) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7240)

```diff
-               if (dt === mt.c) continue;
+               if (vB === GB.d) continue;
```

#### 663. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7253` → after: `L7253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7253) · [Before (L7253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7253)

```diff
-               Et + 1 === this.heightmapVals.getOrGenerate(tt, et, Dt.h.GroundHeight) && Et++, Vt.set(tt, et, Ot.caveType, Dt.d.FloorY, lt), Vt.set(tt, et, Ot.caveType, Dt.d.CeilingY, Et)
+               FB + 1 === this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight) && FB++, ZB.set(BB, IB, TB.caveType, oB.c.FloorY, zB), ZB.set(BB, IB, TB.caveType, oB.c.CeilingY, FB)
```

#### 664. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7279` → after: `L7279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7279) · [Before (L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7279)

```diff
-               ft = Math.floor(ft), wt = Math.floor(wt), (Qt || wt + 1 === this.heightmapVals.getOrGenerate(tt, et, Dt.h.GroundHeight)) && wt++;
+               NB = Math.floor(NB), gB = Math.floor(gB), (hB || gB + 1 === this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight)) && gB++;
```

#### 665. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7281` → after: `L7281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7281) · [Before (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7281)

```diff
-               null !== Ot.wallType && (Nt <= .9 || Mt <= .9) ? Jt = Ot.wallType : Ot.pitCeilingThickness > 0 && (wt -= Ot.pitCeilingThickness, Vt.set(tt, et, Ot.ceilingType, Dt.d.FloorY, wt), Vt.set(tt, et, Ot.ceilingType, Dt.d.CeilingY, wt + Ot.pitCeilingThickness)), Vt.set(tt,  … [truncated]
+               null !== TB.wallType && (yB <= .9 || UB <= .9) ? dB = TB.wallType : TB.pitCeilingThickness > 0 && (gB -= TB.pitCeilingThickness, ZB.set(BB, IB, TB.ceilingType, oB.c.FloorY, gB), ZB.set(BB, IB, TB.ceilingType, oB.c.CeilingY, gB + TB.pitCeilingThickness)), ZB.set(BB,  … [truncated]
```

#### 666. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7295` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7295) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7295)

```diff
-                 Et = (0, Ot.D)(mt, Qt, lt);
+                 FB = (0, TB.I)(GB, hB, zB);
```

#### 667. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7300` → after: `L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7300) · [Before (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7300)

```diff
-                 Nt = (0, Ot.t)(ft, wt, yt),
+                 yB = (0, TB.s)(NB, gB, qB),
```

#### 668. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7312` → after: `L7312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7312) · [Before (L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7312)

```diff
-               Jt = Math.floor(Jt), Ct = Math.floor(Ct), Ct + 1 === this.heightmapVals.getOrGenerate(tt, et, Dt.h.GroundHeight) && Ct++, Vt.set(tt, et, qt.caveType, Dt.d.FloorY, Jt), Vt.set(tt, et, qt.caveType, Dt.d.CeilingY, Ct)
+               dB = Math.floor(dB), CB = Math.floor(CB), CB + 1 === this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight) && CB++, ZB.set(BB, IB, JB.caveType, oB.c.FloorY, dB), ZB.set(BB, IB, JB.caveType, oB.c.CeilingY, CB)
```

#### 669. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7329` → after: `L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7329) · [Before (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7329)

```diff
-               ft + 1 === this.heightmapVals.getOrGenerate(tt, et, Dt.h.GroundHeight) && ft++, Vt.set(tt, et, Ot.caveType, Dt.d.FloorY, Et), Vt.set(tt, et, Ot.caveType, Dt.d.CeilingY, ft)
+               NB + 1 === this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight) && NB++, ZB.set(BB, IB, TB.caveType, oB.c.FloorY, FB), ZB.set(BB, IB, TB.caveType, oB.c.CeilingY, NB)
```

#### 670. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7333-L7334` → after: `L7333-L7334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7333-L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7333-L7334) · [Before (L7333-L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7333-L7334)

```diff
-             const Ot = this.heightmapVals.getOrGenerate(tt, et, Dt.h.CavesAllowedBelowY);
-             if (Ot !== mt.i)
+             const TB = this.heightmapVals.getOrGenerate(BB, IB, oB.f.CavesAllowedBelowY);
+             if (TB !== GB.g)
```

#### 671. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7336-L7337` → after: `L7336-L7337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7336-L7337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7336-L7337) · [Before (L7336-L7337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7336-L7337)

```diff
-                 if (Vt.get(tt, et, qt, Dt.d.CeilingY) <= Ot) continue;
-                 Vt.get(tt, et, qt, Dt.d.FloorY) <= Ot ? Vt.set(tt, et, qt, Dt.d.CeilingY, Ot) : (Vt.set(tt, et, qt, Dt.d.FloorY, mt.j), Vt.set(tt, et, qt, Dt.d.CeilingY, mt.j))
+                 if (ZB.get(BB, IB, JB, oB.c.CeilingY) <= TB) continue;
+                 ZB.get(BB, IB, JB, oB.c.FloorY) <= TB ? ZB.set(BB, IB, JB, oB.c.CeilingY, TB) : (ZB.set(BB, IB, JB, oB.c.FloorY, GB.j), ZB.set(BB, IB, JB, oB.c.CeilingY, GB.j))
```

#### 672. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7494-L7495` → after: `L7494-L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7494-L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7494-L7495) · [Before (L7494-L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7494-L7495)

```diff
-                     caveEdgeNoiseGenerator: new Ot.i(Vt.caveEdgeNoiseParams, `${tt}CaveCutoff${mt}${qt}`),
-                     caveHeightNoiseGenerator: new Ot.j(Vt.caveHeightNoiseParams, Vt.caveHeightNoiseThresholdParams, `${tt}Cave${mt}${qt}`),
+                     caveEdgeNoiseGenerator: new TB.g(ZB.caveEdgeNoiseParams, `${BB}CaveCutoff${GB}${JB}`),
+                     caveHeightNoiseGenerator: new TB.i(ZB.caveHeightNoiseParams, ZB.caveHeightNoiseThresholdParams, `${BB}Cave${GB}${JB}`),
```

#### 673. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7499-L7500` → after: `L7499-L7500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7499-L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7499-L7500) · [Before (L7499-L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7499-L7500)

```diff
-                     caveXZPerturbNoiseGenerator: new Ot.i(Vt.caveXZPerturbNoiseParams, `${tt}CaveHeightPerturb${mt}${qt}`),
-                     caveYPerturbNoiseGenerator: new Ot.i(Vt.caveYPerturbNoiseParams, `${tt}CaveHeightNoise${mt}${qt}`),
+                     caveXZPerturbNoiseGenerator: new TB.g(ZB.caveXZPerturbNoiseParams, `${BB}CaveHeightPerturb${GB}${JB}`),
+                     caveYPerturbNoiseGenerator: new TB.g(ZB.caveYPerturbNoiseParams, `${BB}CaveHeightNoise${GB}${JB}`),
```

#### 674. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7595-L7596` → after: `L7595-L7596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7595-L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7595-L7596) · [Before (L7595-L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7595-L7596)

```diff
-                     fillBlockId: (0, qt.y)(Dt, Vt),
-                     wallBlockIds: new dt.g([{
+                     fillBlockId: (0, JB.G)(oB, ZB),
+                     wallBlockIds: new vB.i([{
```

#### 675. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7619-L7621` → after: `L7619-L7621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7619-L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7619-L7621) · [Before (L7619-L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7619-L7621)

```diff
-                       lt = new Ot.i(qt.pitXZPerturbNoiseParams, `${tt}DistPitPerturb${Dt}`),
-                       ft = `${tt}PitGen${Dt}`,
-                       wt = new Ht.b("cavePit", qt.numChunksBetweenPits, !0, !1, ft, 100, et),
+                       zB = new TB.g(JB.pitXZPerturbNoiseParams, `${BB}DistPitPerturb${oB}`),
+                       NB = `${BB}PitGen${oB}`,
+                       gB = new cB.d("cavePit", JB.numChunksBetweenPits, !0, !1, NB, 100, IB),
```

#### 676. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7623-L7627` → after: `L7623-L7627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7623-L7627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7623-L7627) · [Before (L7623-L7627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7623-L7627)

```diff
-                     console.assert(yt.chunkSearchRadius <= qt.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${yt.chunkSearchRadius} ${qt.numChunksBetweenPits/2}`);
-                     const Nt = new dt.o(qt.pitMinWidth, qt.pitMaxWidth),
-                       Mt = new dt.o(qt.pitMinFloorY, qt.pitMaxFloorY),
-                       bt = new dt.o(qt.pitMinHeight, qt.pitMaxHeight),
-                       Jt = new Ot.i(qt.pitFloorYPerturbNoiseParams, `${tt}yPitPerturb${Dt}`);
+                     console.assert(qB.chunkSearchRadius <= JB.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${qB.chunkSearchRadius} ${JB.numChunksBetweenPits/2}`);
+                     const yB = new vB.l(JB.pitMinWidth, JB.pitMaxWidth),
+                       UB = new vB.l(JB.pitMinFloorY, JB.pitMaxFloorY),
+                       WB = new vB.l(JB.pitMinHeight, JB.pitMaxHeight),
+                       dB = new TB.g(JB.pitFloorYPerturbNoiseParams, `${BB}yPitPerturb${oB}`);
```

#### 677. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7629-L7630` → after: `L7629-L7630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7629-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7629-L7630) · [Before (L7629-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7629-L7630)

```diff
-                     null !== qt.pitHeightPerturbNoiseParams && (Ct = new Ot.i(qt.pitHeightPerturbNoiseParams, `${tt}heightPitPerturb${Dt}`));
-                     const ut = new Ot.i(qt.pitMidpointNoiseParams, `${tt}edgesPitPerturb${Dt}`),
+                     null !== JB.pitHeightPerturbNoiseParams && (CB = new TB.g(JB.pitHeightPerturbNoiseParams, `${BB}heightPitPerturb${oB}`));
+                     const QB = new TB.g(JB.pitMidpointNoiseParams, `${BB}edgesPitPerturb${oB}`),
```

#### 678. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7637` → after: `L7637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7637) · [Before (L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7637)

```diff
-                     null !== qt.ceilingParams && (vt = mt++, Wt = new dt.o(qt.ceilingParams.minThickness, qt.ceilingParams.maxThickness), Xt[vt] = qt.ceilingParams.blockIds), void 0 !== qt.priority && (Qt[Kt] = qt.priority, null !== ht && (Qt[ht] = qt.priority), null !== vt && (Q … [truncated]
+                     null !== JB.ceilingParams && (OB = GB++, YB = new vB.l(JB.ceilingParams.minThickness, JB.ceilingParams.maxThickness), nB[OB] = JB.ceilingParams.blockIds), void 0 !== JB.priority && (hB[sB] = JB.priority, null !== wB && (hB[wB] = JB.priority), null !== OB && (h … [truncated]
```

#### 679. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7700)

```diff
-                     Qt = new Ot.i(Xt.ravineXZPerturbNoiseParams, `${tt}DistRavPerturb${mt}`);
+                     hB = new TB.g(nB.ravineXZPerturbNoiseParams, `${BB}DistRavPerturb${GB}`);
```

#### 680. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7703-L7705` → after: `L7703-L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7703-L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7703-L7705) · [Before (L7703-L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7703-L7705)

```diff
-                   const Et = new Ot.i(Xt.ravineYPerturbNoiseParams, `${tt}yRavinePerturb${mt}`),
-                     ft = `${tt}RavineGen${mt}`,
-                     wt = new Ht.b("caveRav", Xt.numChunksBetweenRavines, !0, !1, ft, 100, et),
+                   const FB = new TB.g(nB.ravineYPerturbNoiseParams, `${BB}yRavinePerturb${GB}`),
+                     NB = `${BB}RavineGen${GB}`,
+                     gB = new cB.d("caveRav", nB.numChunksBetweenRavines, !0, !1, NB, 100, IB),
```

#### 681. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7707-L7712` → after: `L7707-L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7707-L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7707-L7712) · [Before (L7707-L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7707-L7712)

```diff
-                   console.assert(yt.chunkSearchRadius <= Xt.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${yt.chunkSearchRadius} ${Xt.numChunksBetweenRavines/2}`);
-                   const Nt = new dt.o(Xt.ravineMinWidth, Xt.ravineMaxWidth),
-                     Mt = new dt.o(Xt.ravineMinLength, Xt.ravineMaxLength),
-                     bt = new dt.o(Xt.ravineMinFloorY, Xt.ravineMaxFloorY, !0),
-                     Jt = new dt.o(Xt.ravineMinHeight, Xt.ravineMaxHeight),
-                     Ct = new dt.s(-1, 1);
+                   console.assert(qB.chunkSearchRadius <= nB.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${qB.chunkSearchRadius} ${nB.numChunksBetweenRavines/2}`);
+                   const yB = new vB.l(nB.ravineMinWidth, nB.ravineMaxWidth),
+                     UB = new vB.l(nB.ravineMinLength, nB.ravineMaxLength),
+                     WB = new vB.l(nB.ravineMinFloorY, nB.ravineMaxFloorY, !0),
+                     dB = new vB.l(nB.ravineMinHeight, nB.ravineMaxHeight),
+                     CB = new vB.o(-1, 1);
```

#### 682. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7754` → after: `L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7754) · [Before (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7754)

```diff
-                     Qt = new Ot.i(Xt.sphereXZPerturbNoiseParams, `${tt}DistSpherePerturb${mt}`);
+                     hB = new TB.g(nB.sphereXZPerturbNoiseParams, `${BB}DistSpherePerturb${GB}`);
```

#### 683. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7757-L7758` → after: `L7757-L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7757-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7757-L7758) · [Before (L7757-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7757-L7758)

```diff
-                   const Et = `${tt}SphereGen${mt}`,
-                     ft = new Ht.b("caveSph", Xt.numChunksBetweenSpheres, !0, !1, Et, 100, et),
+                   const FB = `${BB}SphereGen${GB}`,
+                     NB = new cB.d("caveSph", nB.numChunksBetweenSpheres, !0, !1, FB, 100, IB),
```

#### 684. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7760-L7762` → after: `L7760-L7762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7760-L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7760-L7762) · [Before (L7760-L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7760-L7762)

```diff
-                   console.assert(wt.chunkSearchRadius <= Xt.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${wt.chunkSearchRadius} ${Xt.numChunksBetweenSpheres/2}`);
-                   const yt = new dt.o(Xt.sphereMinRadius, Xt.sphereMaxRadius, !0),
-                     Nt = new dt.o(Xt.sphereMinCentreY, Xt.sphereMaxCentreY);
+                   console.assert(gB.chunkSearchRadius <= nB.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${gB.chunkSearchRadius} ${nB.numChunksBetweenSpheres/2}`);
+                   const qB = new vB.l(nB.sphereMinRadius, nB.sphereMaxRadius, !0),
+                     yB = new vB.l(nB.sphereMinCentreY, nB.sphereMaxCentreY);
```

#### 685. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7796-L7797` → after: `L7796-L7797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7796-L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7796-L7797) · [Before (L7796-L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7796-L7797)

```diff
-             if (!(0, qt.B)(Vt)) return Vt;
-             const Ot = [(0, qt.t)(tt), (0, qt.t)(et)],
+             if (!(0, JB.L)(ZB)) return ZB;
+             const TB = [(0, JB.y)(BB), (0, JB.y)(IB)],
```

#### 686. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7815` → after: `L7815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7815) · [Before (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7815)

```diff
-                   Ht = new dt.k(`pit${mt}|${jt}|${qt}${this.seed}`),
+                   cB = new vB.j(`pit${GB}|${kB}|${JB}${this.seed}`),
```

#### 687. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7825` → after: `L7825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7825) · [Before (L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7825)

```diff
-                   bt = null !== (Vt = null === (Ot = Dt.pitCeilingThicknessDistribution) || void 0 === Ot ? void 0 : Ot.sample(Ht)) && void 0 !== Vt ? Vt : 0;
+                   WB = null !== (ZB = null === (TB = oB.pitCeilingThicknessDistribution) || void 0 === TB ? void 0 : TB.sample(cB)) && void 0 !== ZB ? ZB : 0;
```

#### 688. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7858` → after: `L7858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7858) · [Before (L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7858)

```diff
-                   jt = new dt.k(`rav${Dt}|${mt}|${Vt}${this.seed}`),
+                   kB = new vB.j(`rav${oB}|${GB}|${ZB}${this.seed}`),
```

#### 689. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7864` → after: `L7864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7864) · [Before (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7864)

```diff
-                 (0, Ot.B)(Et);
+                 (0, TB.G)(FB);
```

#### 690. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7895` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7895) · [Before (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7895)

```diff
-                   mt = new dt.k(`sph${qt}|${Dt}|${Vt}${this.seed}`),
+                   GB = new vB.j(`sph${JB}|${oB}|${ZB}${this.seed}`),
```

#### 691. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7915` → after: `L7915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7915) · [Before (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7915)

```diff
-       39903: (tt, et, Vt) => {
+       39751: (BB, IB, ZB) => {
```

#### 692. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7917` → after: `L7917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7917) · [Before (L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7917)

```diff
-           c: () => yt
+           b: () => qB
```

#### 693. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7919-L7921` → after: `L7919-L7921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7919-L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7919-L7921) · [Before (L7919-L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7919-L7921)

```diff
-         var Ot = Vt(39896),
-           qt = Vt(39890),
-           Dt = Vt(1744),
+         var TB = ZB(39748),
+           JB = ZB(39735),
+           oB = ZB(1723),
```

#### 694. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7923-L7924` → after: `L7923-L7924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7923-L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7923-L7924) · [Before (L7923-L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7923-L7924)

```diff
-           dt = Vt(710),
-           jt = Vt(2934),
+           vB = ZB(665),
+           kB = ZB(3e3),
```

#### 695. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7926-L7929` → after: `L7926-L7929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7926-L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7926-L7929) · [Before (L7926-L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7926-L7929)

```diff
-           Xt = Vt(37980),
-           Qt = Vt(39909),
-           lt = Vt(39353),
-           Et = Vt(39914);
+           nB = ZB(37794),
+           hB = ZB(39759),
+           zB = ZB(39207),
+           FB = ZB(39767);
```

#### 696. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7935` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7935) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7935)

```diff
-             if (!(0, dt.B)(tt)) throw new Error(`Duplicate chunk at ${qt.chunkX}, ${qt.chunkY}, ${qt.chunkZ}`);
+             if (!(0, vB.L)(BB)) throw new Error(`Duplicate chunk at ${JB.chunkX}, ${JB.chunkY}, ${JB.chunkZ}`);
```

#### 697. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7938` → after: `L7938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7938) · [Before (L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7938)

```diff
-           return new Qt.d(tt, {
+           return new hB.b(BB, {
```

#### 698. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7998` → after: `L7998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L7998) · [Before (L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L7998)

```diff
-             this.ff = et, this.chunkToFixedPointPrefabs = void 0;
+             this.YN = IB, this.chunkToFixedPointPrefabs = void 0;
```

#### 699. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8002` → after: `L8002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8002) · [Before (L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8002)

```diff
-                 mO: qt,
+                 DZ: JB,
```

#### 700. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8009)

```diff
-               if (void 0 === tt) throw new Error(`Fixed-point prefab "${qt}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
+               if (void 0 === BB) throw new Error(`Fixed-point prefab "${JB}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
```

#### 701. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8060` → after: `L8060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8060) · [Before (L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8060)

```diff
-               nearestFixedPrefabInfoForChunk: qt.q.create(this.ff, [tt, et], Ot.i.NumFields, dt)
+               nearestFixedPrefabInfoForChunk: JB.o.create(this.YN, [BB, IB], TB.j.NumFields, vB)
```

#### 702. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8065` → after: `L8065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8065) · [Before (L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8065)

```diff
-             const Dt = qt.getOrGenerate(tt, et, Ot.i.DistanceToNearestFixedPrefab);
+             const oB = JB.getOrGenerate(BB, IB, TB.j.DistanceToNearestFixedPrefab);
```

#### 703. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8069` → after: `L8069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8069) · [Before (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8069)

```diff
-             const dt = qt.getOrGenerate(tt, et, Ot.i.HeightOfNearestFixedPrefab);
+             const vB = JB.getOrGenerate(BB, IB, TB.j.HeightOfNearestFixedPrefab);
```

#### 704. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8074` → after: `L8074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8074) · [Before (L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8074)

```diff
-             return Vt.getOrGenerate(tt, et, Ot.i.DistanceToNearestFixedPrefab) <= Mt
+             return ZB.getOrGenerate(BB, IB, TB.j.DistanceToNearestFixedPrefab) <= UB
```

#### 705. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8078` → after: `L8078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8078) · [Before (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8078)

```diff
-             return 0 === Vt.getOrGenerate(tt, et, Ot.i.DistanceToNearestFixedPrefab)
+             return 0 === ZB.getOrGenerate(BB, IB, TB.j.DistanceToNearestFixedPrefab)
```

#### 706. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8096` → after: `L8096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8096) · [Before (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8096)

```diff
-             return `${tt}|${et}`
+             return `${BB}|${IB}`
```

#### 707. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8101` → after: `L8101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8101) · [Before (L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8101)

```diff
-             if (!(0, dt.B)(Vt)) return Vt;
+             if (!(0, vB.L)(ZB)) return ZB;
```

#### 708. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8105-L8109` → after: `L8105-L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8105-L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8105-L8109) · [Before (L8105-L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8105-L8109)

```diff
-             for (let Dt = 0; Dt < Ot.x; Dt += dt.u)
-               for (let et = 0; et < Ot.y; et += dt.u)
-                 for (let Vt = 0; Vt < Ot.z; Vt += dt.u) {
-                   const mt = Ht()(new Uint16Array(dt.u * dt.u * dt.u), [dt.u, dt.u, dt.u]),
-                     jt = tt.getRLEChunk((0, dt.H)(Dt), (0, dt.H)(et), (0, dt.H)(Vt));
+             for (let oB = 0; oB < TB.x; oB += vB.C)
+               for (let IB = 0; IB < TB.y; IB += vB.C)
+                 for (let ZB = 0; ZB < TB.z; ZB += vB.C) {
+                   const GB = cB()(new Uint16Array(vB.C * vB.C * vB.C), [vB.C, vB.C, vB.C]),
+                     kB = BB.getRLEChunk((0, vB.T)(oB), (0, vB.T)(IB), (0, vB.T)(ZB));
```

#### 709. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8111-L8113` → after: `L8111-L8113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8111-L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8111-L8113) · [Before (L8111-L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8111-L8113)

```diff
-                   const Qt = Math.min(dt.u, Ot.x - Dt),
-                     lt = Math.min(dt.u, Ot.y - et),
-                     Et = Math.min(dt.u, Ot.z - Vt);
+                   const hB = Math.min(vB.C, TB.x - oB),
+                     zB = Math.min(vB.C, TB.y - IB),
+                     FB = Math.min(vB.C, TB.z - ZB);
```

#### 710. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8148` → after: `L8148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8148) · [Before (L8148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8148)

```diff
-             Vt.set(tt, et, Ot.i.DistanceToNearestFixedPrefab, qt), Vt.set(tt, et, Ot.i.HeightOfNearestFixedPrefab, Dt)
+             ZB.set(BB, IB, TB.j.DistanceToNearestFixedPrefab, JB), ZB.set(BB, IB, TB.j.HeightOfNearestFixedPrefab, oB)
```

#### 711. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8153` → after: `L8153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8153) · [Before (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8153)

```diff
-       39888: (tt, et, Vt) => {
+       39733: (BB, IB, ZB) => {
```

#### 712. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8155-L8157` → after: `L8155-L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8155-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8155-L8157) · [Before (L8155-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8155-L8157)

```diff
-           e: () => Ht,
-           i: () => jt,
-           k: () => dt
+           d: () => cB,
+           h: () => kB,
+           j: () => vB
```

#### 713. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8159-L8162` → after: `L8159-L8162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8159-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8159-L8162) · [Before (L8159-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8159-L8162)

```diff
-         var Ot = Vt(39890),
-           qt = Vt(39896),
-           Dt = Vt(39893),
-           mt = Vt(39903);
+         var TB = ZB(39735),
+           JB = ZB(39748),
+           oB = ZB(39743),
+           GB = ZB(39751);
```

#### 714. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8165` → after: `L8165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8165) · [Before (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8165)

```diff
-           return new Ot.i([{
+           return new TB.g([{
```

#### 715. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8171)

```diff
-           }], `${tt}GlobalHeightmapOffset`)
+           }], `${BB}GlobalHeightmapOffset`)
```

#### 716. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8207` → after: `L8207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8207) · [Before (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8207)

```diff
-             null !== Et && (Ht = Et, Xt = Dt.k, Qt = Et - Dt.d, lt = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(tt, et, qt, mt, Vt, Ht, Xt, Qt, lt)
+             null !== FB && (cB = FB, nB = oB.n, hB = FB - oB.e, zB = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(BB, IB, JB, GB, ZB, cB, nB, hB, zB)
```

#### 717. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8220-L8221` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8220-L8221) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8220-L8221)

```diff
-               Et = Dt.k,
-               ft = Dt.i,
+               FB = oB.n,
+               NB = oB.g,
```

#### 718. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8231)

```diff
-                 et < 1 && (Et = Ht + Math.floor((jt - Ht) * et), lt >= Et && (Et = Dt.k, wt = Dt.e))
+                 IB < 1 && (FB = cB + Math.floor((kB - cB) * IB), zB >= FB && (FB = oB.n, gB = oB.f))
```

#### 719. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8239` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8239) · [Before (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8239)

```diff
-               ft = lt - Dt.d
+               NB = zB - oB.e
```

#### 720. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8249-L8250` → after: `L8249-L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8249-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8249-L8250) · [Before (L8249-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8249-L8250)

```diff
-             const lt = mt.c.smoothHeightmapForFixedPointPrefab(Math.round(tt + Vt / 4), Math.round(et + Ot / 4), jt, this.nearestFixedPrefabInfoForChunk);
-             null !== lt && Ht > (jt = lt) && (Ht = Dt.k, Qt = 0), dt.set(tt, et, qt.h.GroundHeight, jt), dt.set(tt, et, qt.h.WaterHeight, Ht), dt.set(tt, et, qt.h.CavesAllowedBelowY, Xt), dt.set(tt, et, qt.h.IsLake, Qt), this.shouldCurtailCave(tt, et, null !== lt) && dt.set(tt, e … [truncated]
+             const zB = GB.b.smoothHeightmapForFixedPointPrefab(Math.round(BB + ZB / 4), Math.round(IB + TB / 4), kB, this.nearestFixedPrefabInfoForChunk);
+             null !== zB && cB > (kB = zB) && (cB = oB.n, hB = 0), vB.set(BB, IB, JB.f.GroundHeight, kB), vB.set(BB, IB, JB.f.WaterHeight, cB), vB.set(BB, IB, JB.f.CavesAllowedBelowY, nB), vB.set(BB, IB, JB.f.IsLake, hB), this.shouldCurtailCave(BB, IB, null !== zB) && vB.set(BB, I … [truncated]
```

#### 721. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8262` → after: `L8262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8262) · [Before (L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8262)

```diff
-       39926: (tt, et, Vt) => {
+       39778: (BB, IB, ZB) => {
```

#### 722. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8264-L8265` → after: `L8264-L8265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8264-L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8264-L8265) · [Before (L8264-L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8264-L8265)

```diff
-           b: () => Xt,
-           c: () => Ht
+           d: () => nB,
+           f: () => cB
```

#### 723. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8267-L8268` → after: `L8267-L8268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8267-L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8267-L8268) · [Before (L8267-L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8267-L8268)

```diff
-         var Ot = Vt(39890),
-           qt = Vt(39935),
+         var TB = ZB(39735),
+           JB = ZB(39784),
```

#### 724. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8270-L8271` → after: `L8270-L8271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8270-L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8270-L8271) · [Before (L8270-L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8270-L8271)

```diff
-           mt = Vt(4347),
-           dt = Vt(39975);
+           GB = ZB(4428),
+           vB = ZB(39832);
```

#### 725. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8293` → after: `L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8293) · [Before (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8293)

```diff
-             if (this.gridSize < Vt) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${Vt} (chunkSize=${tt}, halfBox=${et}). Points near chunk edges would be missed.`)
+             if (this.gridSize < ZB) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${ZB} (chunkSize=${BB}, halfBox=${IB}). Points near chunk edges would be missed.`)
```

#### 726. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8300` → after: `L8300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8300) · [Before (L8300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8300)

```diff
-             return !!Ot.has((0, dt.c)(tt, et))
+             return !!TB.has((0, vB.d)(BB, IB))
```

#### 727. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8309` → after: `L8309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8309) · [Before (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8309)

```diff
-               const Vt = (0, Ot.D)(jt, tt, et);
+               const ZB = (0, TB.I)(kB, BB, IB);
```

#### 728. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8338` → after: `L8338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8338) · [Before (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8338)

```diff
-               const tt = (0, Ot.D)(Ht, et, Vt);
+               const BB = (0, TB.I)(cB, IB, ZB);
```

#### 729. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8350` → after: `L8350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8350) · [Before (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8350)

```diff
-               const Qt = (0, Ot.D)(Xt, et, Vt) - mt;
+               const hB = (0, TB.I)(nB, IB, ZB) - GB;
```

#### 730. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8383` → after: `L8383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8383) · [Before (L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8383)

```diff
-               const Dt = new mt.k(`${tt}${et}${this.seed}jitter`);
+               const oB = new GB.j(`${BB}${IB}${this.seed}jitter`);
```

#### 731. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8394` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8394) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8394)

```diff
-               const dt = new mt.k(`${tt}${et}${this.seed}pts`),
+               const vB = new GB.j(`${BB}${IB}${this.seed}pts`),
```

#### 732. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8422` → after: `L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8422) · [Before (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8422)

```diff
-               for (const tt of qt) jt.add((0, dt.c)(tt[0], tt[1]))
+               for (const BB of JB) kB.add((0, vB.d)(BB[0], BB[1]))
```

#### 733. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8426` → after: `L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8426) · [Before (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8426)

```diff
-               points: this.useKthClosestPoint ? qt : null
+               points: this.useKthClosestPoint ? JB : null
```

#### 734. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8431` → after: `L8431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8431) · [Before (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8431)

```diff
-       39995: (tt, et, Vt) => {
+       39852: (BB, IB, ZB) => {
```

#### 735. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8435-L8444` → after: `L8435-L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8435-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8435-L8444) · [Before (L8435-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8435-L8444)

```diff
-         var Ot = Vt(39890),
-           qt = Vt(39926),
-           Dt = Vt(39896),
-           mt = Vt(39893),
-           dt = Vt(37980),
-           jt = Vt(39989),
-           Ht = Vt(694),
-           Xt = Vt(710),
-           Qt = Vt(39353),
-           lt = Vt(4347);
+         var TB = ZB(39735),
+           JB = ZB(39778),
+           oB = ZB(39748),
+           GB = ZB(39743),
+           vB = ZB(37794),
+           kB = ZB(39844),
+           cB = ZB(641),
+           nB = ZB(665),
+           hB = ZB(39207),
+           zB = ZB(4428);
```

#### 736. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8459` → after: `L8459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8459) · [Before (L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8459)

```diff
-             return null !== (et = wt[this.suffixMapping[tt]]) && void 0 !== et ? et : []
+             return null !== (IB = gB[this.suffixMapping[BB]]) && void 0 !== IB ? IB : []
```

#### 737. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8478` → after: `L8478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8478) · [Before (L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8478)

```diff
-               et[Vt] = (null !== (mt = et[Vt]) && void 0 !== mt ? mt : 0) + 1, et[Vt] >= Nt && Ot.splice(Ot.indexOf(Vt), 1)
+               IB[ZB] = (null !== (GB = IB[ZB]) && void 0 !== GB ? GB : 0) + 1, IB[ZB] >= yB && TB.splice(TB.indexOf(ZB), 1)
```

#### 738. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8545` → after: `L8545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8545) · [Before (L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8545)

```diff
-             return `r${tt}|m${Number(et)}`
+             return `r${BB}|m${Number(IB)}`
```

#### 739. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8579` → after: `L8579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8579) · [Before (L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8579)

```diff
-             const [, Et, ft] = null !== (qt = Ct.exec(Qt)) && void 0 !== qt ? qt : [];
+             const [, FB, NB] = null !== (JB = CB.exec(hB)) && void 0 !== JB ? JB : [];
```

#### 740. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8582` → after: `L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8582) · [Before (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8582)

```diff
-               lt = null !== (wt = null === (yt = Dt[`${Xt}|meta|${[Jt.split("").filter(((tt,et)=>Et.split("").some((tt=>{const Vt=Jt.indexOf(tt);return((Ot?3-Vt:Vt)+mt)%4===et})))).join(""),ft].filter(Boolean).join("|")}`]) || void 0 === yt ? void 0 : yt.id) && void 0 !== wt ? wt … [truncated]
+               zB = null !== (gB = null === (qB = oB[`${nB}|meta|${[dB.split("").filter(((BB,IB)=>FB.split("").some((BB=>{const ZB=dB.indexOf(BB);return((TB?3-ZB:ZB)+GB)%4===IB})))).join(""),NB].filter(Boolean).join("|")}`]) || void 0 === qB ? void 0 : qB.id) && void 0 !== gB ? gB … [truncated]
```

#### 741. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8587` → after: `L8587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8587) · [Before (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8587)

```diff
-               let et = Qt.replace(`rot${Ht}`, `rot${tt}`);
+               let IB = hB.replace(`rot${cB}`, `rot${BB}`);
```

#### 742. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8592` → after: `L8592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8592) · [Before (L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8592)

```diff
-                 et = `${qt[1]}|${tt.join("")}`
+                 IB = `${JB[1]}|${BB.join("")}`
```

#### 743. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8594-L8595` → after: `L8594-L8595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8594-L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8594-L8595) · [Before (L8594-L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8594-L8595)

```diff
-               const mt = `${Xt}|${et}`;
-               if (lt = null !== (Nt = null === (Mt = Dt[mt]) || void 0 === Mt ? void 0 : Mt.id) && void 0 !== Nt ? Nt : null, null === lt) {
+               const GB = `${nB}|${IB}`;
+               if (zB = null !== (yB = null === (UB = oB[GB]) || void 0 === UB ? void 0 : UB.id) && void 0 !== yB ? yB : null, null === zB) {
```

#### 744. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8603` → after: `L8603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8603) · [Before (L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8603)

```diff
-         var ht = Vt(2934),
+         var wB = ZB(3e3),
```

#### 745. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8605` → after: `L8605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8605) · [Before (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8605)

```diff
-           Wt = Vt(39903);
+           YB = ZB(39751);
```

#### 746. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8610` → after: `L8610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8610) · [Before (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8610)

```diff
-             const jt = Vt.getOrGenerate(tt, et, dt, Dt.d.FloorY);
+             const kB = ZB.getOrGenerate(BB, IB, vB, oB.c.FloorY);
```

#### 747. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8612` → after: `L8612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8612) · [Before (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8612)

```diff
-             Rt(qt, jt, Vt.getOrGenerate(tt, et, dt, Dt.d.CeilingY))
+             aB(JB, kB, ZB.getOrGenerate(BB, IB, vB, oB.c.CeilingY))
```

#### 748. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8633` → after: `L8633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8633) · [Before (L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8633)

```diff
-         const It = new lt.g([{
+         const HB = new zB.i([{
```

#### 749. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8646)

```diff
-           Pt = new lt.g([{
+           MB = new zB.i([{
```

#### 750. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8656` → after: `L8656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8656) · [Before (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8656)

```diff
-         const Ft = new lt.g(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const RB = new zB.i(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 751. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8665` → after: `L8665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8665) · [Before (L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8665)

```diff
-             const et = `${Ft.sample(tt)} ${this.mobType}`;
+             const IB = `${RB.sample(BB)} ${this.mobType}`;
```

#### 752. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8681` → after: `L8681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8681) · [Before (L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8681)

```diff
-               const tt = new lt.o(Ot.minItems, Ot.maxItems + 1),
+               const BB = new zB.l(TB.minItems, TB.maxItems + 1),
```

#### 753. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8685-L8686` → after: `L8685-L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8685-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8685-L8686) · [Before (L8685-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8685-L8686)

```diff
-                 const tt = et.amount ? new lt.o(et.amount.min, et.amount.max + 1) : null,
-                   Ot = null !== (Vt = et.itemAttributesDistribution) && void 0 !== Vt ? Vt : null;
+                 const BB = IB.amount ? new zB.l(IB.amount.min, IB.amount.max + 1) : null,
+                   TB = null !== (ZB = IB.itemAttributesDistribution) && void 0 !== ZB ? ZB : null;
```

#### 754. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8696` → after: `L8696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8696) · [Before (L8696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8696)

```diff
-               const Dt = new lt.g(qt);
+               const oB = new zB.i(JB);
```

#### 755. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8702` → after: `L8702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8702) · [Before (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8702)

```diff
-             this.itemCategoryDistributions = et, this.shouldEnchantDistribution = new lt.d(tt.enchantmentProbability), this.enchantmentTier = tt.enchantmentTier
+             this.itemCategoryDistributions = IB, this.shouldEnchantDistribution = new zB.e(BB.enchantmentProbability), this.enchantmentTier = BB.enchantmentTier
```

#### 756. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8713-L8715` → after: `L8713-L8715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8713-L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8713-L8715) · [Before (L8713-L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8713-L8715)

```diff
-                   lt = null !== (Ot = null === (qt = Xt.amountDistribution) || void 0 === qt ? void 0 : qt.sample(tt)) && void 0 !== Ot ? Ot : null,
-                   Et = null !== (Dt = null === (mt = Xt.attributesDistribution) || void 0 === mt ? void 0 : mt.sample(tt)) && void 0 !== Dt ? Dt : {},
-                   ft = null !== (dt = this.getEnchantmentAttributesForItem(tt, Qt)) && void 0 !== dt ? dt : {};
+                   zB = null !== (TB = null === (JB = nB.amountDistribution) || void 0 === JB ? void 0 : JB.sample(BB)) && void 0 !== TB ? TB : null,
+                   FB = null !== (oB = null === (GB = nB.attributesDistribution) || void 0 === GB ? void 0 : GB.sample(BB)) && void 0 !== oB ? oB : {},
+                   NB = null !== (vB = this.getEnchantmentAttributesForItem(BB, hB)) && void 0 !== vB ? vB : {};
```

#### 757. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8722` → after: `L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8722) · [Before (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8722)

```diff
-                       ...null !== (jt = Et.customAttributes) && void 0 !== jt ? jt : {},
+                       ...null !== (kB = FB.customAttributes) && void 0 !== kB ? kB : {},
```

#### 758. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8729` → after: `L8729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L8729) · [Before (L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L8729)

```diff
-             return (0, lt.v)(et, tt), et
+             return (0, zB.s)(IB, BB), IB
```

#### 759. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9016` → after: `L9016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9016) · [Before (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9016)

```diff
-             name: `${tt} Pickaxe`,
+             name: `${BB} Pickaxe`,
```

#### 760. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9020` → after: `L9020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9020) · [Before (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9020)

```diff
-             name: `${tt} Axe`,
+             name: `${BB} Axe`,
```

#### 761. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9024` → after: `L9024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9024) · [Before (L9024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9024)

```diff
-             name: `${tt} Spade`,
+             name: `${BB} Spade`,
```

#### 762. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9028` → after: `L9028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9028) · [Before (L9028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9028)

```diff
-             name: `${tt} Hoe`,
+             name: `${BB} Hoe`,
```

#### 763. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9035` → after: `L9035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9035) · [Before (L9035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9035)

```diff
-           if (et < 0 || et > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${et}`);
+           if (IB < 0 || IB > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${IB}`);
```

#### 764. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9059` → after: `L9059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9059) · [Before (L9059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9059)

```diff
-             name: `${tt} Sword`,
+             name: `${BB} Sword`,
```

#### 765. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9063` → after: `L9063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9063) · [Before (L9063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9063)

```diff
-             name: `${tt} Bow`,
+             name: `${BB} Bow`,
```

#### 766. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9067` → after: `L9067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9067) · [Before (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9067)

```diff
-             name: `${tt} Crossbow`,
+             name: `${BB} Crossbow`,
```

#### 767. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9080` → after: `L9080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9080) · [Before (L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9080)

```diff
-           if (tt === ot.STONE) throw new Error(`${tt} armour is not supported`);
+           if (BB === LB.STONE) throw new Error(`${BB} armour is not supported`);
```

#### 768. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9082` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9082) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9082)

```diff
-               name: `${tt} Helmet`,
+               name: `${BB} Helmet`,
```

#### 769. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9086` → after: `L9086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9086) · [Before (L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9086)

```diff
-               name: `${tt} Chestplate`,
+               name: `${BB} Chestplate`,
```

#### 770. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9090` → after: `L9090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9090) · [Before (L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9090)

```diff
-               name: `${tt} Gauntlets`,
+               name: `${BB} Gauntlets`,
```

#### 771. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9094` → after: `L9094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9094) · [Before (L9094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9094)

```diff
-               name: `${tt} Leggings`,
+               name: `${BB} Leggings`,
```

#### 772. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9098` → after: `L9098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9098) · [Before (L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9098)

```diff
-               name: `${tt} Boots`,
+               name: `${BB} Boots`,
```

#### 773. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9106` → after: `L9106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9106) · [Before (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9106)

```diff
-           [Xt.h.COMMON]: new Gt({
+           [nB.i.COMMON]: new mB({
```

#### 774. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9135)

```diff
-           [Xt.h.UNCOMMON]: new Gt({
+           [nB.i.UNCOMMON]: new mB({
```

#### 775. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9164` → after: `L9164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9164) · [Before (L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9164)

```diff
-           [Xt.h.RARE]: new Gt({
+           [nB.i.RARE]: new mB({
```

#### 776. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9193` → after: `L9193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9193) · [Before (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9193)

```diff
-           [Xt.h.EPIC]: new Gt({
+           [nB.i.EPIC]: new mB({
```

#### 777. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9230` → after: `L9230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9230) · [Before (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9230)

```diff
-           [Xt.h.LEGENDARY]: new Gt({
+           [nB.i.LEGENDARY]: new mB({
```

#### 778. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9355` → after: `L9355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9355) · [Before (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9355)

```diff
-             const tt = new lt.k(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
+             const BB = new zB.j(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
```

#### 779. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9360` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9360) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9360)

```diff
-                   chestStr: (0, Xt.w)(et),
+                   chestStr: (0, nB.F)(IB),
```

#### 780. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9370` → after: `L9370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9370) · [Before (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9370)

```diff
-             this.seed = void 0, this.ff = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.YN = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 781. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9373` → after: `L9373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9373) · [Before (L9373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9373)

```diff
-               ff: Vt,
+               YN: ZB,
```

#### 782. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9379` → after: `L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9379) · [Before (L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9379)

```diff
-             De.BLOCK_ID_MAPPINGS || (De.BLOCK_ID_MAPPINGS = new Kt(Ot)), Zt || (Zt = new ft(mt)), this.seed = et, this.ff = Vt, this.invisibleSolidBlockId = Ot["Invisible Solid"].id, this.emptySpawnerBlockId = Ot["Empty Spawner Block"].id, this.chestToLootChestBlockId = new Ht.c( … [truncated]
+             JI.BLOCK_ID_MAPPINGS || (JI.BLOCK_ID_MAPPINGS = new sB(TB)), jB || (jB = new NB(GB)), this.seed = IB, this.YN = ZB, this.invisibleSolidBlockId = TB["Invisible Solid"].id, this.emptySpawnerBlockId = TB["Empty Spawner Block"].id, this.chestToLootChestBlockId = new cB.c( … [truncated]
```

#### 783. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9386` → after: `L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9386) · [Before (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9386)

```diff
-             for (const qt of Dt.r) Xt[qt] = Ot[`${qt} Spawner Block`].id;
+             for (const JB of oB.q) nB[JB] = TB[`${JB} Spawner Block`].id;
```

#### 784. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9401` → after: `L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9401) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9401)

```diff
-                   jt = new qt.b(`prefab|${tt}|${mt}`, dt.minDistanceBetweenPrefabs, !1, !0, et, Ot, Vt, null, !0)
+                   kB = new JB.d(`prefab|${BB}|${GB}`, vB.minDistanceBetweenPrefabs, !1, !0, IB, TB, ZB, null, !0)
```

#### 785. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9415` → after: `L9415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9415) · [Before (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9415)

```diff
-             return new lt.k(`${tt}|${et}|${this.seed}|prefabGenerator`)
+             return new zB.j(`${BB}|${IB}|${this.seed}|prefabGenerator`)
```

#### 786. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9444` → after: `L9444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9444) · [Before (L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9444)

```diff
-               Ht = this.ff >> 1,
+               cB = this.YN >> 1,
```

#### 787. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9446` → after: `L9446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9446) · [Before (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9446)

```diff
-               lt = tt + this.ff + this.prefabRadius,
+               zB = BB + this.YN + this.prefabRadius,
```

#### 788. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9448` → after: `L9448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9448) · [Before (L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9448)

```diff
-               ft = et + this.ff + this.prefabRadius;
+               NB = IB + this.YN + this.prefabRadius;
```

#### 789. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9456` → after: `L9456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9456) · [Before (L9456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9456)

```diff
-                 if (yt === Dt.o.SURFACE && Mt === Dt.k.VERY_HIGH && !dt.regionMayHaveVeryHighSurfacePrefabs(Xt, Et, lt, ft)) continue;
+                 if (qB === oB.n.SURFACE && UB === oB.l.VERY_HIGH && !vB.regionMayHaveVeryHighSurfacePrefabs(nB, FB, zB, NB)) continue;
```

#### 790. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9466` → after: `L9466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9466) · [Before (L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9466)

```diff
-                   if (yt === Dt.o.SURFACE && !Ht.canPlaceSurfacePrefab(et, dt)) continue;
+                   if (qB === oB.n.SURFACE && !cB.canPlaceSurfacePrefab(IB, vB)) continue;
```

#### 791. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9485` → after: `L9485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9485) · [Before (L9485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9485)

```diff
-                       console.error(`Invalid prefab rotation: ${bt}`)
+                       console.error(`Invalid prefab rotation: ${WB}`)
```

#### 792. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9502` → after: `L9502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9502) · [Before (L9502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9502)

```diff
-                   if (yt === Dt.o.SURFACE && null !== Ht.maxSurfacePrefabRelief) {
+                   if (qB === oB.n.SURFACE && null !== cB.maxSurfacePrefabRelief) {
```

#### 793. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9547` → after: `L9547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9547) · [Before (L9547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9547)

```diff
-                 const Ot = qt.getOrGenerate(tt + Xt, et + Vt, Dt.h.GroundHeight);
+                 const TB = JB.getOrGenerate(BB + nB, IB + ZB, oB.f.GroundHeight);
```

#### 794. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9568-L9569` → after: `L9568-L9569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9568-L9569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9568-L9569) · [Before (L9568-L9569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9568-L9569)

```diff
-                 XO: tt,
-                 QO: Vt
+                 BT: BB,
+                 IT: ZB
```

#### 795. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9582` → after: `L9582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9582) · [Before (L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9582)

```diff
-                   if (Vt.getOrGenerate(Ht, tt, Dt.h.WaterHeight) !== mt.k) return {
+                   if (ZB.getOrGenerate(cB, BB, oB.f.WaterHeight) !== GB.n) return {
```

#### 796. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9586-L9587` → after: `L9586-L9587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9586-L9587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9586-L9587) · [Before (L9586-L9587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9586-L9587)

```diff
-                   const et = Vt.getOrGenerate(Ht, tt, Dt.h.GroundHeight);
-                   if (jt.c.isInCave(Ht, et, tt, Ot)) return {
+                   const IB = ZB.getOrGenerate(cB, BB, oB.f.GroundHeight);
+                   if (kB.b.isInCave(cB, IB, BB, TB)) return {
```

#### 797. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9591` → after: `L9591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9591) · [Before (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9591)

```diff
-                   if (Wt.c.isNearFixedPointPrefab(Ht, tt, qt)) return {
+                   if (YB.b.isNearFixedPointPrefab(cB, BB, JB)) return {
```

#### 798. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9638-L9639` → after: `L9638-L9639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9638-L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9638-L9639) · [Before (L9638-L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9638-L9639)

```diff
-             if (dt === this.emptySpawnerBlockId && (dt = null !== (jt = Ot.spawnerBlockLocationToBlockId.get(tt, et, Vt)) && void 0 !== jt ? jt : this.defaultSpawnerBlockId), dt < 0) return dt;
-             if (dt = null !== (Dt = null === (mt = Ot.blockIdMapping) || void 0 === mt ? void 0 : mt[dt]) && void 0 !== Dt ? Dt : dt, void 0 !== this.chestToLootChestBlockId.reverseGet(dt)) {
+             if (vB === this.emptySpawnerBlockId && (vB = null !== (kB = TB.spawnerBlockLocationToBlockId.get(BB, IB, ZB)) && void 0 !== kB ? kB : this.defaultSpawnerBlockId), vB < 0) return vB;
+             if (vB = null !== (oB = null === (GB = TB.blockIdMapping) || void 0 === GB ? void 0 : GB[vB]) && void 0 !== oB ? oB : vB, void 0 !== this.chestToLootChestBlockId.reverseGet(vB)) {
```

#### 799. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9641` → after: `L9641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9641) · [Before (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9641)

```diff
-               const Dt = null !== (Ht = Ot.chestLocationToQuality.get(tt, et, Vt)) && void 0 !== Ht ? Ht : De.DEFAULT_CHEST_QUALITY,
+               const oB = null !== (cB = TB.chestLocationToQuality.get(BB, IB, ZB)) && void 0 !== cB ? cB : JI.DEFAULT_CHEST_QUALITY,
```

#### 800. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9672-L9676` → after: `L9672-L9676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9672-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9672-L9676) · [Before (L9672-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9672-L9676)

```diff
-             for (let Ht = 0; Ht < Vt; Ht += Xt.u)
-               for (let et = 0; et < Ot; et += Xt.u)
-                 for (let Qt = 0; Qt < qt; Qt += Xt.u) {
-                   const lt = vt()(new Uint16Array(Xt.u * Xt.u * Xt.u), [Xt.u, Xt.u, Xt.u]),
-                     Et = tt.schematic.getRLEChunk((0, Xt.H)(Ht), (0, Xt.H)(et), (0, Xt.H)(Qt));
+             for (let cB = 0; cB < ZB; cB += nB.C)
+               for (let IB = 0; IB < TB; IB += nB.C)
+                 for (let hB = 0; hB < JB; hB += nB.C) {
+                   const zB = OB()(new Uint16Array(nB.C * nB.C * nB.C), [nB.C, nB.C, nB.C]),
+                     FB = BB.schematic.getRLEChunk((0, nB.T)(cB), (0, nB.T)(IB), (0, nB.T)(hB));
```

#### 801. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9678-L9680` → after: `L9678-L9680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9678-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9678-L9680) · [Before (L9678-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9678-L9680)

```diff
-                   const ft = Math.min(Xt.u, Vt - Ht),
-                     wt = Math.min(Xt.u, Ot - et),
-                     yt = Math.min(Xt.u, qt - Qt);
+                   const NB = Math.min(nB.C, ZB - cB),
+                     gB = Math.min(nB.C, TB - IB),
+                     qB = Math.min(nB.C, JB - hB);
```

#### 802. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9689)

```diff
-                         else if (this.emptySpawnerBlockId === dt) jt.get(Xt, Et, ft) || console.error(`Empty spawner block found in prefab ${tt.schematic.name} at (${Xt}, ${Et}, ${ft}) with no mob type specified. Defaulting to "${De.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === vB) kB.get(nB, FB, NB) || console.error(`Empty spawner block found in prefab ${BB.schematic.name} at (${nB}, ${FB}, ${NB}) with no mob type specified. Defaulting to "${JI.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 803. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9692` → after: `L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9692) · [Before (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9692)

```diff
-                           void 0 !== et && (mt.get(Xt, Et, ft) || console.error(`Chest found in prefab ${tt.schematic.name} at (${Xt}, ${Et}, ${ft}) with no quality specified. Defaulting to "${De.DEFAULT_CHEST_QUALITY}" quality.`), dt = et)
+                           void 0 !== IB && (GB.get(nB, FB, NB) || console.error(`Chest found in prefab ${BB.schematic.name} at (${nB}, ${FB}, ${NB}) with no quality specified. Defaulting to "${JI.DEFAULT_CHEST_QUALITY}" quality.`), vB = IB)
```

#### 804. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9715` → after: `L9715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9715) · [Before (L9715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9715)

```diff
-           }(tt, tt.shouldSwapXZ ? Vt : et)
+           }(BB, BB.shouldSwapXZ ? ZB : IB)
```

#### 805. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9722` → after: `L9722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9722) · [Before (L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9722)

```diff
-           }(tt, tt.shouldSwapXZ ? et : Vt)
+           }(BB, BB.shouldSwapXZ ? IB : ZB)
```

#### 806. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9724` → after: `L9724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9724) · [Before (L9724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9724)

```diff
-         De.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, De.BLOCK_ID_MAPPINGS = void 0, De.DEFAULT_MOB_TYPE = "Draugr Zombie", De.DEFAULT_CHEST_QUALITY = Xt.h.COMMON;
+         JI.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, JI.BLOCK_ID_MAPPINGS = void 0, JI.DEFAULT_MOB_TYPE = "Draugr Zombie", JI.DEFAULT_CHEST_QUALITY = nB.i.COMMON;
```

#### 807. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9745` → after: `L9745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9745) · [Before (L9745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9745)

```diff
-             const Vt = new Ot.g(2 * tt + 1, [-tt, -tt]);
+             const ZB = new TB.e(2 * BB + 1, [-BB, -BB]);
```

#### 808. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9754` → after: `L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9754) · [Before (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9754)

```diff
-             this.ff = Vt, this.seed = Ot, this.blockMetadata = Dt, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.YN = ZB, this.seed = TB, this.blockMetadata = oB, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 809. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9757` → after: `L9757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9757) · [Before (L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9757)

```diff
-                 [Xt.s.Maple]: {
+                 [nB.v.Maple]: {
```

#### 810. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9765` → after: `L9765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9765) · [Before (L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9765)

```diff
-                 [Xt.s.Pine]: {
+                 [nB.v.Pine]: {
```

#### 811. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9775` → after: `L9775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9775) · [Before (L9775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9775)

```diff
-                 [Xt.s.Plum]: {
+                 [nB.v.Plum]: {
```

#### 812. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9783` → after: `L9783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9783) · [Before (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9783)

```diff
-                 [Xt.s.Cedar]: {
+                 [nB.v.Cedar]: {
```

#### 813. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9791` → after: `L9791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9791) · [Before (L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9791)

```diff
-                 [Xt.s.Aspen]: {
+                 [nB.v.Aspen]: {
```

#### 814. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9801` → after: `L9801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9801) · [Before (L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9801)

```diff
-                 [Xt.s.Jungle]: {
+                 [nB.v.Jungle]: {
```

#### 815. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9811` → after: `L9811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9811) · [Before (L9811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9811)

```diff
-                 [Xt.s.Palm]: {
+                 [nB.v.Palm]: {
```

#### 816. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9821` → after: `L9821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9821) · [Before (L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9821)

```diff
-                 [Xt.s.AutumnMaple]: {
+                 [nB.v.AutumnMaple]: {
```

#### 817. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9829` → after: `L9829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9829) · [Before (L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9829)

```diff
-                 [Xt.s.Pear]: {
+                 [nB.v.Pear]: {
```

#### 818. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9839` → after: `L9839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9839) · [Before (L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9839)

```diff
-                 [Xt.s.Cherry]: {
+                 [nB.v.Cherry]: {
```

#### 819. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9849` → after: `L9849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9849) · [Before (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9849)

```diff
-                 [Xt.s.Spectral]: {
+                 [nB.v.Spectral]: {
```

#### 820. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9857` → after: `L9857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9857) · [Before (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9857)

```diff
-                 [Xt.s.Mango]: {
+                 [nB.v.Mango]: {
```

#### 821. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9867` → after: `L9867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9867) · [Before (L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9867)

```diff
-                 [Xt.s.AutumnAspen]: {
+                 [nB.v.AutumnAspen]: {
```

#### 822. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9877` → after: `L9877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9877) · [Before (L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9877)

```diff
-                 [Xt.s.Dead]: {
+                 [nB.v.Dead]: {
```

#### 823. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9887` → after: `L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9887) · [Before (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9887)

```diff
-                 [Xt.s.FallenLog]: {
+                 [nB.v.FallenLog]: {
```

#### 824. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9897-L9898` → after: `L9897-L9898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9897-L9898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9897-L9898) · [Before (L9897-L9898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9897-L9898)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((tt => Dt[tt].id)), this.maxTreeRadius = tt.maxTreeRadius, this.ff <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.ff <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((BB => oB[BB].id)), this.maxTreeRadius = BB.maxTreeRadius, this.YN <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.YN <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 825. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9972` → after: `L9972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9972) · [Before (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9972)

```diff
-               if (tt.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${tt.radius} for canopy type "${qt}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (BB.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${BB.radius} for canopy type "${JB}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 826. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9976-L9977` → after: `L9976-L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9976-L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9976-L9977) · [Before (L9976-L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9976-L9977)

```diff
-             for (const qt of tt.biomeSelector.RO) qt.biome.treeMinDist && (dt = Math.min(dt, qt.biome.treeMinDist), jt = Math.max(jt, qt.biome.treeMinDist));
-             this.treePointGen = new qt.b("tree", 6, !0, !1, Ot, 300, Vt, {
+             for (const JB of BB.biomeSelector.dT) JB.biome.treeMinDist && (vB = Math.min(vB, JB.biome.treeMinDist), kB = Math.max(kB, JB.biome.treeMinDist));
+             this.treePointGen = new JB.d("tree", 6, !0, !1, TB, 300, ZB, {
```

#### 827. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9985-L9986` → after: `L9985-L9986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9985-L9986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9985-L9986) · [Before (L9985-L9986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9985-L9986)

```diff
-             for (let Et = tt - this.maxTreeRadius; Et < tt + this.ff + this.maxTreeRadius; Et++)
-               for (let tt = et - this.maxTreeRadius; tt < et + this.ff + this.maxTreeRadius; tt++) {
+             for (let FB = BB - this.maxTreeRadius; FB < BB + this.YN + this.maxTreeRadius; FB++)
+               for (let BB = IB - this.maxTreeRadius; BB < IB + this.YN + this.maxTreeRadius; BB++) {
```

#### 828. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9990-L9992` → after: `L9990-L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9990-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9990-L9992) · [Before (L9990-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9990-L9992)

```diff
-                   if (Vt.getOrGenerate(Et, tt, Dt.h.WaterHeight) !== mt.k) continue;
-                   const Ot = Vt.getOrGenerate(Et, tt, Dt.h.GroundHeight);
-                   if (jt.c.isInCave(Et, Ot, tt, qt)) continue;
+                   if (ZB.getOrGenerate(FB, BB, oB.f.WaterHeight) !== GB.n) continue;
+                   const TB = ZB.getOrGenerate(FB, BB, oB.f.GroundHeight);
+                   if (kB.b.isInCave(FB, TB, BB, JB)) continue;
```

#### 829. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9994-L9995` → after: `L9994-L9995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9994-L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L9994-L9995) · [Before (L9994-L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L9994-L9995)

```diff
-                   if (Wt.c.isNearFixedPointPrefab(Et, tt, Ht)) continue;
-                   const ft = new lt.k(`${Et}${tt}${this.seed}treeHeight`),
+                   if (YB.b.isNearFixedPointPrefab(FB, BB, cB)) continue;
+                   const NB = new zB.j(`${FB}${BB}${this.seed}treeHeight`),
```

#### 830. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10001` → after: `L10001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10001) · [Before (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10001)

```diff
-                   if (wt === Xt.s.FallenLog) {
+                   if (gB === nB.v.FallenLog) {
```

#### 831. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10004` → after: `L10004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10004) · [Before (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10004)

```diff
-                       if (Vt.getOrGenerate(0 === Nt ? Et + et : Et, 0 === Nt ? tt : tt + et, Dt.h.GroundHeight) !== Ot) {
+                       if (ZB.getOrGenerate(0 === yB ? FB + IB : FB, 0 === yB ? BB : BB + IB, oB.f.GroundHeight) !== TB) {
```

#### 832. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10025-L10026` → after: `L10025-L10026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10025-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10025-L10026) · [Before (L10025-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10025-L10026)

```diff
-               Dt = null !== (Vt = qt.minHeight) && void 0 !== Vt ? Vt : this.minTreeHeight,
-               mt = null !== (Ot = qt.maxHeight) && void 0 !== Ot ? Ot : this.maxTreeHeight;
+               oB = null !== (ZB = JB.minHeight) && void 0 !== ZB ? ZB : this.minTreeHeight,
+               GB = null !== (TB = JB.maxHeight) && void 0 !== TB ? TB : this.maxTreeHeight;
```

#### 833. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10041-L10042` → after: `L10041-L10042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10041-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10041-L10042) · [Before (L10041-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10041-L10042)

```diff
-               const qt = new lt.k(`${Dt.treeX}|${Dt.treeZ}|${Dt.trunkBase}|tree`);
-               if (Dt.treeType === Xt.s.Dead || Dt.treeType === Xt.s.FallenLog) {
+               const JB = new zB.j(`${oB.treeX}|${oB.treeZ}|${oB.trunkBase}|tree`);
+               if (oB.treeType === nB.v.Dead || oB.treeType === nB.v.FallenLog) {
```

#### 834. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10059` → after: `L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10059) · [Before (L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10059)

```diff
-                 qt >= et && qt < et + this.ff && Dt >= Vt && Dt < Vt + this.ff && dt >= Ot && dt < Ot + this.ff && tt.set(qt - et, Dt - Vt, dt - Ot, mt)
+                 JB >= IB && JB < IB + this.YN && oB >= ZB && oB < ZB + this.YN && vB >= TB && vB < TB + this.YN && BB.set(JB - IB, oB - ZB, vB - TB, GB)
```

#### 835. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10061` → after: `L10061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10061) · [Before (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10061)

```diff
-             if (qt.treeType === Xt.s.FallenLog) {
+             if (JB.treeType === nB.v.FallenLog) {
```

#### 836. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10063` → after: `L10063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10063) · [Before (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10063)

```diff
-               for (let tt = -1; tt < Qt - 1; tt++) lt(0 === qt.vineDir ? dt + tt : dt, Ht, 0 === qt.vineDir ? jt : jt + tt);
+               for (let BB = -1; BB < hB - 1; BB++) zB(0 === JB.vineDir ? vB + BB : vB, cB, 0 === JB.vineDir ? kB : kB + BB);
```

#### 837. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10088` → after: `L10088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10088) · [Before (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10088)

```diff
-               wt = Math.min(Et, Vt + this.ff - 1);
+               gB = Math.min(FB, ZB + this.YN - 1);
```

#### 838. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10091` → after: `L10091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10091) · [Before (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10091)

```diff
-               Nt = Math.min(mt + Qt.radius, et + this.ff - 1);
+               yB = Math.min(GB + hB.radius, IB + this.YN - 1);
```

#### 839. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10094` → after: `L10094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10094) · [Before (L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10094)

```diff
-               bt = Math.min(dt + Qt.radius, Ot + this.ff - 1);
+               WB = Math.min(vB + hB.radius, TB + this.YN - 1);
```

#### 840. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10169` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10169) · [Before (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10169)

```diff
-               if (wt !== Ee.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${wt}`);
+               if (gB !== zI.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${gB}`);
```

#### 841. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10176-L10178` → after: `L10176-L10178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10176-L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10176-L10178) · [Before (L10176-L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10176-L10178)

```diff
-             const mt = et + this.ff,
-               dt = Vt + this.ff,
-               jt = Ot + this.ff,
+             const GB = IB + this.YN,
+               vB = ZB + this.YN,
+               kB = TB + this.YN,
```

#### 842. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10204` → after: `L10204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10204) · [Before (L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10204)

```diff
-             const et = this.ff >> 1,
+             const IB = this.YN >> 1,
```

#### 843. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10226` → after: `L10226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10226) · [Before (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10226)

```diff
-         var ye = Vt(39975);
+         var gI = ZB(39832);
```

#### 844. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10230)

```diff
-             this.biomeSelector = tt, this.noWaterHeightmapGenerator = et, this.hydrology = Vt, this.lakeRadiusNoiseModifier = Dt, this.seed = mt, this.needOutsideWaterDist = jt, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = BB, this.noWaterHeightmapGenerator = IB, this.hydrology = ZB, this.lakeRadiusNoiseModifier = oB, this.seed = GB, this.needOutsideWaterDist = kB, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 845. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10240` → after: `L10240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10240) · [Before (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10240)

```diff
-               if ((0, Ot.F)(Qt, tt, et) > Dt) continue;
+               if ((0, TB.L)(hB, BB, IB) > oB) continue;
```

#### 846. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10244)

```diff
-               const qt = (0, Ot.D)(Vt.origin, tt, et),
+               const JB = (0, TB.I)(ZB.origin, BB, IB),
```

#### 847. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10261` → after: `L10261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10261) · [Before (L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10261)

```diff
-             if (!(0, Xt.B)(et)) return et.lake;
+             if (!(0, nB.L)(IB)) return IB.lake;
```

#### 848. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10274` → after: `L10274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10274) · [Before (L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10274)

```diff
-             } = this, Dt = new lt.k(`${tt[0]}|${tt[1]}${this.seed}oasisLake`), mt = this.hydrology.getHydrologyWaterGenInfo(tt[0], tt[1]), dt = Math.floor(mt.distFromWater - mt.waterRadius - qt);
+             } = this, oB = new zB.j(`${BB[0]}|${BB[1]}${this.seed}oasisLake`), GB = this.hydrology.getHydrologyWaterGenInfo(BB[0], BB[1]), vB = Math.floor(GB.distFromWater - GB.waterRadius - JB);
```

#### 849. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10294` → after: `L10294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10294) · [Before (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10294)

```diff
-             this.biomeSelector = tt, this.noWaterHeightmapGenerator = et, this.needOutsideWaterBodyDist = mt, this.EO = jt, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = BB, this.noWaterHeightmapGenerator = IB, this.needOutsideWaterBodyDist = GB, this.TT = kB, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 850. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10308` → after: `L10308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10308) · [Before (L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10308)

```diff
-             this.cellCenterMaxOffset = this.gridSize / 2 - Ht, this.seed = Vt, this.lakeRadiusNoiseModifier = new Ot.i([{
+             this.cellCenterMaxOffset = this.gridSize / 2 - cB, this.seed = ZB, this.lakeRadiusNoiseModifier = new TB.g([{
```

#### 851. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10314` → after: `L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10314) · [Before (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10314)

```diff
-             }], `${Vt}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, Ot.x)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new ae(tt, et, this, this.lakeRadiusNoiseModifier, Vt, qt, mt, dt)
+             }], `${ZB}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, TB.z)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new yI(BB, IB, this, this.lakeRadiusNoiseModifier, ZB, JB, GB, vB)
```

#### 852. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10318` → after: `L10318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10318) · [Before (L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10318)

```diff
-             if (!this.EO) return ue(this.needOutsideWaterBodyDist);
+             if (!this.TT) return QI(this.needOutsideWaterBodyDist);
```

#### 853. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10322` → after: `L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10322) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10322)

```diff
-             return null === qt || Ce(Ot) <= Ce(qt) ? Ot : qt
+             return null === JB || CI(TB) <= CI(JB) ? TB : JB
```

#### 854. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10348` → after: `L10348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10348) · [Before (L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10348)

```diff
-                 pm: tt,
+                 uG: BB,
```

#### 855. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10363` → after: `L10363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10363) · [Before (L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10363)

```diff
-                 pm: tt,
+                 uG: BB,
```

#### 856. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10387` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10387) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10387)

```diff
-                 mt *= Dt.lakeRadius / this.lakeSettings.maxRadius, lt = Dt.lakeRadius - mt, Vt = (0, Ot.D)(qt.origin, tt, et) - lt
+                 GB *= oB.lakeRadius / this.lakeSettings.maxRadius, zB = oB.lakeRadius - GB, ZB = (0, TB.I)(JB.origin, BB, IB) - zB
```

#### 857. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10401` → after: `L10401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10401) · [Before (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10401)

```diff
-                 const Vt = (0, Ot.D)(qt.origin, tt, et),
+                 const ZB = (0, TB.I)(JB.origin, BB, IB),
```

#### 858. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10428` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10428) · [Before (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10428)

```diff
-             if (!(0, Xt.B)(Vt)) return this.lastReadInfo.cellX = tt, this.lastReadInfo.cellZ = et, this.lastReadInfo.info = Vt, Vt;
+             if (!(0, nB.L)(ZB)) return this.lastReadInfo.cellX = BB, this.lastReadInfo.cellZ = IB, this.lastReadInfo.info = ZB, ZB;
```

#### 859. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10492` → after: `L10492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10492) · [Before (L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10492)

```diff
-             return -1 !== qt ? Ot : null
+             return -1 !== JB ? TB : null
```

#### 860. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10497` → after: `L10497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10497) · [Before (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10497)

```diff
-               qt = new lt.k(`${tt}${et}${this.seed}riverCell`);
+               JB = new zB.j(`${BB}${IB}${this.seed}riverCell`);
```

#### 861. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10537-L10540` → after: `L10537-L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10537-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10537-L10540) · [Before (L10537-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10537-L10540)

```diff
-           zO: 40,
-           XO: -85,
-           QO: -85,
-           oO: .5
+           pT: 40,
+           BT: -85,
+           IT: -85,
+           aT: .5
```

#### 862. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10544-L10547` → after: `L10544-L10547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10544-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10544-L10547) · [Before (L10544-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10544-L10547)

```diff
-           zO: 13,
-           XO: -100,
-           QO: -85,
-           oO: .28
+           pT: 13,
+           BT: -100,
+           IT: -85,
+           aT: .28
```

#### 863. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10551-L10554` → after: `L10551-L10554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10551-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10551-L10554) · [Before (L10551-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10551-L10554)

```diff
-           zO: 10,
-           XO: -100,
-           QO: -75,
-           oO: .4
+           pT: 10,
+           BT: -100,
+           IT: -75,
+           aT: .4
```

#### 864. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10558-L10561` → after: `L10558-L10561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10558-L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10558-L10561) · [Before (L10558-L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10558-L10561)

```diff
-           zO: 5,
-           XO: -80,
-           QO: 15,
-           oO: .5
+           pT: 5,
+           BT: -80,
+           IT: 15,
+           aT: .5
```

#### 865. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10565-L10568` → after: `L10565-L10568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10565-L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10565-L10568) · [Before (L10565-L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10565-L10568)

```diff
-           zO: 4,
-           XO: -60,
-           QO: 40,
-           oO: .5
+           pT: 4,
+           BT: -60,
+           IT: 40,
+           aT: .5
```

#### 866. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10572-L10573` → after: `L10572-L10573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10572-L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10572-L10573) · [Before (L10572-L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10572-L10573)

```diff
-             this.seed = et, this.ff = Vt, this.kO = void 0, this.kO = Ot.map((Ot => {
-               const Dt = new qt.b("ore", Ot.zO, !1, !0, `${et}${Ot.blockName}`, 20, Vt, null, !0);
+             this.seed = IB, this.YN = ZB, this.YT = void 0, this.YT = TB.map((TB => {
+               const oB = new JB.d("ore", TB.pT, !1, !0, `${IB}${TB.blockName}`, 20, ZB, null, !0);
```

#### 867. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10575` → after: `L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10575) · [Before (L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10575)

```diff
-                 qd: (0, Xt.y)(Ot.blockName, tt),
+                 KG: (0, nB.G)(TB.blockName, BB),
```

#### 868. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10577-L10580` → after: `L10577-L10580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10577-L10580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10577-L10580) · [Before (L10577-L10580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10577-L10580)

```diff
-                 zO: Ot.zO,
-                 XO: Ot.XO,
-                 QO: Ot.QO,
-                 oO: Ot.oO,
+                 pT: TB.pT,
+                 BT: TB.BT,
+                 IT: TB.IT,
+                 aT: TB.aT,
```

#### 869. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10587-L10590` → after: `L10587-L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10587-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10587-L10590) · [Before (L10587-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10587-L10590)

```diff
-               qt = new lt.k(`${tt}${et}${this.seed}oreExists`);
-             for (const Dt of this.kO) {
-               const mt = Dt.pointGenerator.getPointsAroundPoint(tt + this.ff / 2, et + this.ff / 2),
-                 dt = tt + this.ff + Dt.radius,
+               JB = new zB.j(`${BB}${IB}${this.seed}oreExists`);
+             for (const oB of this.YT) {
+               const GB = oB.pointGenerator.getPointsAroundPoint(BB + this.YN / 2, IB + this.YN / 2),
+                 vB = BB + this.YN + oB.radius,
```

#### 870. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10592` → after: `L10592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10592) · [Before (L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10592)

```diff
-                 Ht = et + this.ff + Dt.radius,
+                 cB = IB + this.YN + oB.radius,
```

#### 871. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10596-L10597` → after: `L10596-L10597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10596-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10596-L10597) · [Before (L10596-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10596-L10597)

```diff
-                 const mt = new lt.k(`${Qt[0]}${Qt[1]}${this.seed}ore`),
-                   Et = Math.floor(mt.next() * (Dt.QO + 1 - Dt.XO)) + Dt.XO,
+                 const GB = new zB.j(`${hB[0]}${hB[1]}${this.seed}ore`),
+                   FB = Math.floor(GB.next() * (oB.IT + 1 - oB.BT)) + oB.BT,
```

#### 872. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10599` → after: `L10599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10599) · [Before (L10599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10599)

```diff
-                   wt = Math.min(tt + this.ff - 1, Qt[0] + Dt.radius),
+                   gB = Math.min(BB + this.YN - 1, hB[0] + oB.radius),
```

#### 873. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10601` → after: `L10601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10601) · [Before (L10601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10601)

```diff
-                   Nt = Math.min(et + this.ff - 1, Qt[1] + Dt.radius);
+                   yB = Math.min(IB + this.YN - 1, hB[1] + oB.radius);
```

#### 874. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10604` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10604) · [Before (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10604)

```diff
-                     (0, Ot.A)(Qt, tt, et) > Dt.radius || (qt.next() >= Dt.oO || Vt.push(tt, Et, et, Dt.qd))
+                     (0, TB.D)(hB, BB, IB) > oB.radius || (JB.next() >= oB.aT || ZB.push(BB, FB, IB, oB.KG))
```

#### 875. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10611` → after: `L10611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10611) · [Before (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10611)

```diff
-             const jt = Vt + this.ff,
+             const kB = ZB + this.YN,
```

#### 876. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10618` → after: `L10618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10618) · [Before (L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10618)

```diff
-               if (Ht < mt.get(Qt, lt, Dt.h.GroundHeight) - qt) {
+               if (cB < GB.get(hB, zB, oB.f.GroundHeight) - JB) {
```

#### 877. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10625` → after: `L10625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10625) · [Before (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10625)

```diff
-         var ve = Vt(39979);
+         var OI = ZB(39839);
```

#### 878. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10635-L10636` → after: `L10635-L10636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10635-L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10635-L10636) · [Before (L10635-L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10635-L10636)

```diff
-             CO: Vt,
-             WO: Ot,
+             zT: ZB,
+             yT: TB,
```

#### 879. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10646` → after: `L10646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10646) · [Before (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10646)

```diff
-           return Vt.MO && Ot.push({
+           return ZB.cT && TB.push({
```

#### 880. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10648-L10649` → after: `L10648-L10649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10648-L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10648-L10649) · [Before (L10648-L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10648-L10649)

```diff
-             qd: tt[et].id
-           }), Vt.bO && Ot.push({
+             KG: BB[IB].id
+           }), ZB.nT && TB.push({
```

#### 881. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10651` → after: `L10651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10651) · [Before (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10651)

```diff
-             qd: tt[`${et}|meta|rot2|side`].id
+             KG: BB[`${IB}|meta|rot2|side`].id
```

#### 882. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10654` → after: `L10654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10654) · [Before (L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10654)

```diff
-             qd: tt[`${et}|meta|rot4|side`].id
+             KG: BB[`${IB}|meta|rot4|side`].id
```

#### 883. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10657` → after: `L10657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10657) · [Before (L10657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10657)

```diff
-             qd: tt[`${et}|meta|rot1|side`].id
+             KG: BB[`${IB}|meta|rot1|side`].id
```

#### 884. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10660-L10661` → after: `L10660-L10661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10660-L10661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10660-L10661) · [Before (L10660-L10661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10660-L10661)

```diff
-             qd: tt[`${et}|meta|rot3|side`].id
-           }), Vt.JO && Ot.push({
+             KG: BB[`${IB}|meta|rot3|side`].id
+           }), ZB.hT && TB.push({
```

#### 885. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10663)

```diff
-             qd: tt[`${et}|meta|rot1|top`].id
+             KG: BB[`${IB}|meta|rot1|top`].id
```

#### 886. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10672-L10674` → after: `L10672-L10674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10672-L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10672-L10674) · [Before (L10672-L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10672-L10674)

```diff
-                 MO: !0,
-                 bO: !0,
-                 JO: !0
+                 cT: !0,
+                 nT: !0,
+                 hT: !0
```

#### 887. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10677-L10680` → after: `L10677-L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10677-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10677-L10680) · [Before (L10677-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10677-L10680)

```diff
-               uO: .8,
-               KO: 0,
-               CO: .12,
-               WO: .25,
+               FT: .8,
+               NT: 0,
+               zT: .12,
+               yT: .25,
```

#### 888. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10686-L10688` → after: `L10686-L10688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10686-L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10686-L10688) · [Before (L10686-L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10686-L10688)

```diff
-                 MO: !0,
-                 bO: !0,
-                 JO: !1
+                 cT: !0,
+                 nT: !0,
+                 hT: !1
```

#### 889. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10691-L10693` → after: `L10691-L10693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10691-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10691-L10693) · [Before (L10691-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10691-L10693)

```diff
-               uO: .7,
-               KO: 2,
-               CO: .58
+               FT: .7,
+               NT: 2,
+               zT: .58
```

#### 890. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10696` → after: `L10696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10696) · [Before (L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10696)

```diff
-             const Vt = et.hO;
+             const ZB = IB.gT;
```

#### 891. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10700-L10702` → after: `L10700-L10702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10700-L10702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10700-L10702) · [Before (L10700-L10702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10700-L10702)

```diff
-                 MO: et.MO,
-                 bO: et.bO,
-                 JO: et.JO
+                 cT: IB.cT,
+                 nT: IB.nT,
+                 hT: IB.hT
```

#### 892. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10705-L10710` → after: `L10705-L10710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10705-L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10705-L10710) · [Before (L10705-L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10705-L10710)

```diff
-               uO: et.uO,
-               KO: et.KO,
-               CO: et.CO,
-               WO: null === Vt || void 0 === Vt ? void 0 : Vt.WO,
-               shallowClusterY: null === Vt || void 0 === Vt ? void 0 : Vt.SO,
-               deepClusterY: null === Vt || void 0 === Vt ? void 0 : Vt.cO
+               FT: IB.FT,
+               NT: IB.NT,
+               zT: IB.zT,
+               yT: null === ZB || void 0 === ZB ? void 0 : ZB.yT,
+               shallowClusterY: null === ZB || void 0 === ZB ? void 0 : ZB.UT,
+               deepClusterY: null === ZB || void 0 === ZB ? void 0 : ZB.WT
```

#### 893. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10729` → after: `L10729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10729) · [Before (L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10729)

```diff
-             const Ot = this.heightmapVals.getOrGenerate(tt, et, Dt.h.GroundHeight) - this.surfaceMargin,
+             const TB = this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight) - this.surfaceMargin,
```

#### 894. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10736` → after: `L10736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10736) · [Before (L10736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10736)

```diff
-               tt - Dt.floorY + 1 < qt || mt.push(tt === Dt.ceilingY ? Dt : {
+               BB - oB.floorY + 1 < JB || GB.push(BB === oB.ceilingY ? oB : {
```

#### 895. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10746` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10746) · [Before (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10746)

```diff
-             this.heightmapVals = tt, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new Ot.n(new ke(et)), this.decoratableCavesCache = new Ot.n(new Ge(et, tt, Vt, qt))
+             this.heightmapVals = BB, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new TB.k(new rI(IB)), this.decoratableCavesCache = new TB.k(new mI(IB, BB, ZB, JB))
```

#### 896. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10752` → after: `L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10752) · [Before (L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10752)

```diff
-             return this.heightmapVals.getOrGenerate(tt, et, Dt.h.GroundHeight)
+             return this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight)
```

#### 897. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10771` → after: `L10771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10771) · [Before (L10771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10771)

```diff
-             oe(tt + jt.offset[0], et + jt.offset[1], Vt + jt.offset[2], Dt) && (jt.offset === We ? mt = jt : dt.push(jt))
+             LI(BB + kB.offset[0], IB + kB.offset[1], ZB + kB.offset[2], oB) && (kB.offset === YI ? GB = kB : vB.push(kB))
```

#### 898. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10773` → after: `L10773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10773) · [Before (L10773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10773)

```diff
-           return null !== mt ? mt : 0 === dt.length ? null : dt[Math.floor(qt * dt.length)]
+           return null !== GB ? GB : 0 === vB.length ? null : vB[Math.floor(JB * vB.length)]
```

#### 899. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10778` → after: `L10778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10778) · [Before (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10778)

```diff
-             this.ff = et, this.seed = Vt, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.YN = IB, this.seed = ZB, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 900. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10784` → after: `L10784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10784) · [Before (L10784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10784)

```diff
-               if (!Number.isInteger(qt.clusterBoxSize) || qt.clusterBoxSize < 2 || qt.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${qt.seedPrefix}" has invalid clusterBoxSize (${qt.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(JB.clusterBoxSize) || JB.clusterBoxSize < 2 || JB.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${JB.seedPrefix}" has invalid clusterBoxSize (${JB.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 901. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10786` → after: `L10786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10786) · [Before (L10786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10786)

```diff
-               tt > mt && (mt = tt), dt += Math.max(qt.CO, null !== (jt = qt.WO) && void 0 !== jt ? jt : qt.CO)
+               BB > GB && (GB = BB), vB += Math.max(JB.zT, null !== (kB = JB.yT) && void 0 !== kB ? kB : JB.zT)
```

#### 902. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10788-L10789` → after: `L10788-L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10788-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10788-L10789) · [Before (L10788-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10788-L10789)

```diff
-             if (dt > 1) throw new Error(`Cave decoration cluster chances sum to ${dt} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-             this.pointsGen = new qt.b("caveDeco", 10, !1, !0, Vt, 4, et, null, !0), this.pointsGen.assertReachableFromChunkCentre(et, mt), this.configs = Dt, this.maxHalfBox = mt
+             if (vB > 1) throw new Error(`Cave decoration cluster chances sum to ${vB} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             this.pointsGen = new JB.d("caveDeco", 10, !1, !0, ZB, 4, IB, null, !0), this.pointsGen.assertReachableFromChunkCentre(IB, GB), this.configs = oB, this.maxHalfBox = GB
```

#### 903. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10793` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10793) · [Before (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10793)

```diff
-               Dt = this.ff,
+               oB = this.YN,
```

#### 904. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10810` → after: `L10810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10810) · [Before (L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10810)

```diff
-             for (const dt of Dt) dt.y >= Vt && dt.y < mt && tt.set(dt.x - et, dt.y - Vt, dt.z - Ot, dt.qd)
+             for (const vB of oB) vB.y >= ZB && vB.y < GB && BB.set(vB.x - IB, vB.y - ZB, vB.z - TB, vB.KG)
```

#### 905. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10815)

```diff
-             const Ht = new lt.k(`${this.seed}|${tt}|${et}|cluster`),
+             const cB = new zB.j(`${this.seed}|${BB}|${IB}|cluster`),
```

#### 906. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10829` → after: `L10829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10829) · [Before (L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10829)

```diff
-             if (this.scatterClusterCells(tt, wt, et, Nt, mt, Ht, Mt), !(Mt.length < Nt.KO))
+             if (this.scatterClusterCells(BB, gB, IB, yB, GB, cB, UB), !(UB.length < yB.NT))
```

#### 907. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10835` → after: `L10835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10835) · [Before (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10835)

```diff
-               uO: jt,
+               FT: kB,
```

#### 908. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10855` → after: `L10855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10855) · [Before (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10855)

```diff
-                     qd: Mt.qd
+                     KG: UB.KG
```

#### 909. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10869` → after: `L10869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10869) · [Before (L10869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10869)

```diff
-             this.prefabGenerator = Ot, this.seed = void 0, this.ff = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = TB, this.seed = void 0, this.YN = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 910. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10872` → after: `L10872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10872) · [Before (L10872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10872)

```diff
-             if (Vt + this.ff <= mt.o.bedrockLevel) return {
+             if (ZB + this.YN <= GB.r.bedrockLevel) return {
```

#### 911. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10879-L10881` → after: `L10879-L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10879-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10879-L10881) · [Before (L10879-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10879-L10881)

```diff
-             if (Ct >= Vt && Jt < Vt + this.ff)
-               for (let Ot = et; Ot < et + this.ff; Ot++)
-                 for (let jt = qt; jt < qt + this.ff; jt++) {
+             if (CB >= ZB && dB < ZB + this.YN)
+               for (let TB = IB; TB < IB + this.YN; TB++)
+                 for (let kB = JB; kB < JB + this.YN; kB++) {
```

#### 912. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10884-L10886` → after: `L10884-L10886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10884-L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10884-L10886) · [Before (L10884-L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10884-L10886)

```diff
-                     Qt = dt.get(Ot, jt, Dt.h.GroundHeight);
-                   if (Qt >= Vt && Qt < Vt + this.ff) {
-                     const Ht = dt.get(Ot, jt, Dt.h.IsLake) === mt.e ? Xt.getDryBedBlock(Ot, Qt, jt) : Xt.getTopsoilBlock(Ot, Qt, jt);
+                     hB = vB.get(TB, kB, oB.f.GroundHeight);
+                   if (hB >= ZB && hB < ZB + this.YN) {
+                     const cB = vB.get(TB, kB, oB.f.IsLake) === GB.f ? nB.getDryBedBlock(TB, hB, kB) : nB.getTopsoilBlock(TB, hB, kB);
```

#### 913. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10890-L10892` → after: `L10890-L10892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10890-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10890-L10892) · [Before (L10890-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10890-L10892)

```diff
-             if (Ct + 1 >= Vt && Jt - 4 < Vt + this.ff)
-               for (let Ot = et; Ot < et + this.ff; Ot++)
-                 for (let mt = qt; mt < qt + this.ff; mt++) {
+             if (CB + 1 >= ZB && dB - 4 < ZB + this.YN)
+               for (let TB = IB; TB < IB + this.YN; TB++)
+                 for (let GB = JB; GB < JB + this.YN; GB++) {
```

#### 914. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10895-L10896` → after: `L10895-L10896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10895-L10896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10895-L10896) · [Before (L10895-L10896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10895-L10896)

```diff
-                     Xt = dt.get(Ot, mt, Dt.h.GroundHeight),
-                     Qt = Math.min(Xt, Vt + this.ff);
+                     nB = vB.get(TB, GB, oB.f.GroundHeight),
+                     hB = Math.min(nB, ZB + this.YN);
```

#### 915. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10904-L10905` → after: `L10904-L10905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10904-L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10904-L10905) · [Before (L10904-L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10904-L10905)

```diff
-               for (let Vt = Math.max(qt - 4, 0); Vt < Math.min(qt, this.ff); Vt++) tt.set(et, Vt, Dt, this.dirtId);
-               qt >= 0 && qt < this.ff && tt.set(et, qt, Dt, this.grassBlockId)
+               for (let ZB = Math.max(JB - 4, 0); ZB < Math.min(JB, this.YN); ZB++) BB.set(IB, ZB, oB, this.dirtId);
+               JB >= 0 && JB < this.YN && BB.set(IB, JB, oB, this.grassBlockId)
```

#### 916. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10909-L10910` → after: `L10909-L10910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10909-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10909-L10910) · [Before (L10909-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10909-L10910)

```diff
-               for (let mt = et; mt < et + this.ff; mt++)
-                 for (let jt = qt; jt < qt + this.ff; jt++) {
+               for (let GB = IB; GB < IB + this.YN; GB++)
+                 for (let kB = JB; kB < JB + this.YN; kB++) {
```

#### 917. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10912-L10913` → after: `L10912-L10913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10912-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10912-L10913) · [Before (L10912-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10912-L10913)

```diff
-                     Xt = dt.get(mt, jt, Dt.h.GroundHeight),
-                     Qt = Math.min(Xt - 4, Vt + this.ff),
+                     nB = vB.get(GB, kB, oB.f.GroundHeight),
+                     hB = Math.min(nB - 4, ZB + this.YN),
```

#### 918. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10918` → after: `L10918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10918) · [Before (L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10918)

```diff
-                     tt.set(mt - et, Ot - Vt, jt - qt, 0 !== Dt ? Dt : Ht)
+                     BB.set(GB - IB, TB - ZB, kB - JB, 0 !== oB ? oB : cB)
```

#### 919. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10922-L10924` → after: `L10922-L10924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10922-L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10922-L10924) · [Before (L10922-L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10922-L10924)

```diff
-             if (Ct - 4 >= Vt && this.oreGenerator.addOresToChunk(tt, et, Vt, qt, 4, dt, ft), Ct >= Vt && (jt.c.addCavesToChunk(tt, et, Vt, qt, dt, Et), Ue.addCaveDecorationsToChunk(tt, et, Vt, qt, this.ff, Nt)), mt.o.bedrockLevel >= Vt && mt.o.bedrockLevel < Vt + this.ff)
-               for (let Ot = et; Ot < et + this.ff; Ot++)
-                 for (let Dt = qt; Dt < qt + this.ff; Dt++) tt.set(Ot - et, mt.o.bedrockLevel - Vt, Dt - qt, this.bedrockId);
+             if (CB - 4 >= ZB && this.oreGenerator.addOresToChunk(BB, IB, ZB, JB, 4, vB, NB), CB >= ZB && (kB.b.addCavesToChunk(BB, IB, ZB, JB, vB, FB), uI.addCaveDecorationsToChunk(BB, IB, ZB, JB, this.YN, yB)), GB.r.bedrockLevel >= ZB && GB.r.bedrockLevel < ZB + this.YN)
+               for (let TB = IB; TB < IB + this.YN; TB++)
+                 for (let oB = JB; oB < JB + this.YN; oB++) BB.set(TB - IB, GB.r.bedrockLevel - ZB, oB - JB, this.bedrockId);
```

#### 920. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10927-L10929` → after: `L10927-L10929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10927-L10929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10927-L10929) · [Before (L10927-L10929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10927-L10929)

```diff
-               for (let Dt = et; Dt < et + this.ff; Dt++)
-                 for (let mt = Vt; mt < Vt + this.ff; mt++)
-                   for (let dt = qt; dt < qt + this.ff; dt++) {
+               for (let oB = IB; oB < IB + this.YN; oB++)
+                 for (let GB = ZB; GB < ZB + this.YN; GB++)
+                   for (let vB = JB; vB < JB + this.YN; vB++) {
```

#### 921. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10940-L10941` → after: `L10940-L10941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10940-L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10940-L10941) · [Before (L10940-L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10940-L10941)

```diff
-               for (let Vt = Math.max(Dt, 0); Vt < Math.min(mt, this.ff); Vt++) tt.set(et, Vt, qt, this.waterId);
-               mt >= 0 && mt < this.ff && tt.set(et, mt, qt, ht[Ot + 4])
+               for (let ZB = Math.max(oB, 0); ZB < Math.min(GB, this.YN); ZB++) BB.set(IB, ZB, JB, this.waterId);
+               GB >= 0 && GB < this.YN && BB.set(IB, GB, JB, wB[TB + 4])
```

#### 922. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10944-L10949` → after: `L10944-L10949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10944-L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10944-L10949) · [Before (L10944-L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10944-L10949)

```diff
-             if (this.addSurfaceBlocks(tt, Vt, Mt.lilyPads), ut && Ct >= Vt && Jt < Vt + this.ff)
-               for (let jt = et; jt < et + this.ff; jt++)
-                 for (let Ht = qt; Ht < qt + this.ff; Ht++) {
-                   const Xt = dt.get(jt, Ht, Dt.h.WaterHeight),
-                     Qt = dt.get(jt, Ht, Dt.h.GroundHeight);
-                   if (Xt !== mt.k && Qt >= Vt && Qt < Vt + this.ff)
+             if (this.addSurfaceBlocks(BB, ZB, UB.lilyPads), QB && CB >= ZB && dB < ZB + this.YN)
+               for (let kB = IB; kB < IB + this.YN; kB++)
+                 for (let cB = JB; cB < JB + this.YN; cB++) {
+                   const nB = vB.get(kB, cB, oB.f.WaterHeight),
+                     hB = vB.get(kB, cB, oB.f.GroundHeight);
+                   if (nB !== GB.n && hB >= ZB && hB < ZB + this.YN)
```

#### 923. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10953` → after: `L10953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10953) · [Before (L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10953)

```diff
-                       if ((0, Ot.F)(Dt, jt, Ht) < 100) vt === Dt[0] && St === Dt[1] || (vt = Dt[0], St = Dt[1], ct = new lt.k(`${this.seed}${vt}${St}`).next() < .3 ? this.chalkId : this.clayId), tt.set(jt - et, Qt - Vt, Ht - qt, ct), Qt - 1 >= Vt && tt.set(jt - et, Qt - 1 - Vt, H … [truncated]
+                       if ((0, TB.L)(oB, kB, cB) < 100) OB === oB[0] && iB === oB[1] || (OB = oB[0], iB = oB[1], pB = new zB.j(`${this.seed}${OB}${iB}`).next() < .3 ? this.chalkId : this.clayId), BB.set(kB - IB, hB - ZB, cB - JB, pB), hB - 1 >= ZB && BB.set(kB - IB, hB - 1 - ZB, c … [truncated]
```

#### 924. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10962-L10965` → after: `L10962-L10965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10962-L10965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10962-L10965) · [Before (L10962-L10965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10962-L10965)

```diff
-               for (let Dt = et; Dt < et + this.ff; Dt++)
-                 for (let mt = Vt; mt < Vt + this.ff; mt++)
-                   for (let dt = qt; dt < qt + this.ff; dt++) {
-                     const jt = Wt.c.getBlockFromFixedPointPrefab(Dt, mt, dt, Ot);
+               for (let oB = IB; oB < IB + this.YN; oB++)
+                 for (let GB = ZB; GB < ZB + this.YN; GB++)
+                   for (let vB = JB; vB < JB + this.YN; vB++) {
+                     const kB = YB.b.getBlockFromFixedPointPrefab(oB, GB, vB, TB);
```

#### 925. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10986` → after: `L10986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L10986) · [Before (L10986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L10986)

```diff
-               qt >= 0 && qt < this.ff && tt.set(Vt[Ot], qt, Vt[Ot + 2], Vt[Ot + 3])
+               JB >= 0 && JB < this.YN && BB.set(ZB[TB], JB, ZB[TB + 2], ZB[TB + 3])
```

#### 926. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11000` → after: `L11000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11000) · [Before (L11000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11000)

```diff
-             this.ff = tt, this.biomeSelector = et, this.seed = Vt, this.random = new lt.k(""), this.lilyPadId = void 0, this.lilyPadId = Ot["Lily Pad"].id
+             this.YN = BB, this.biomeSelector = IB, this.seed = ZB, this.random = new zB.j(""), this.lilyPadId = void 0, this.lilyPadId = TB["Lily Pad"].id
```

#### 927. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11010-L11011` → after: `L11010-L11011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11010-L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11010-L11011) · [Before (L11010-L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11010-L11011)

```diff
-             for (let yt = tt; yt < tt + this.ff; yt++)
-               for (let Nt = et; Nt < et + this.ff; Nt++) {
+             for (let qB = BB; qB < BB + this.YN; qB++)
+               for (let yB = IB; yB < IB + this.YN; yB++) {
```

#### 928. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11013-L11014` → after: `L11013-L11014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11013-L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11013-L11014) · [Before (L11013-L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11013-L11014)

```diff
-                   bt = Vt.getOrGenerate(yt, Nt, Dt.h.GroundHeight),
-                   Jt = Vt.getOrGenerate(yt, Nt, Dt.h.WaterHeight);
+                   WB = ZB.getOrGenerate(qB, yB, oB.f.GroundHeight),
+                   dB = ZB.getOrGenerate(qB, yB, oB.f.WaterHeight);
```

#### 929. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11018-L11019` → after: `L11018-L11019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11018-L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11018-L11019) · [Before (L11018-L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11018-L11019)

```diff
-                 if (Jt !== mt.k) {
-                   wt = !0, bt < Jt && Ht.push(Ct, ut, bt + 1, Jt, Mt.topwaterBlockType), Mt.hasScatteredLakes && 1 === Vt.getOrGenerate(yt, Nt, Dt.h.IsLake) && (this.random.reseed(`${yt}|${Nt}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(yt, Nt, Vt) && Qt … [truncated]
+                 if (dB !== GB.n) {
+                   gB = !0, WB < dB && cB.push(CB, QB, WB + 1, dB, UB.topwaterBlockType), UB.hasScatteredLakes && 1 === ZB.getOrGenerate(qB, yB, oB.f.IsLake) && (this.random.reseed(`${qB}|${yB}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(qB, yB, ZB) && hB … [truncated]
```

#### 930. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11023-L11024` → after: `L11023-L11024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11023-L11024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11023-L11024) · [Before (L11023-L11024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11023-L11024)

```diff
-                 if (Mt.hasScatteredLakes && this.isBesideLake(yt, Nt, Vt) && (this.random.reseed(`${yt}|${Nt}|${this.seed}oasisShore`), this.random.next() < .85 && (Xt.push(Ct, bt, ut), Kt = this.biomeSelector.baseBiome.floraGenerator)), !jt.c.isInCave(yt, bt, Nt, Ot) && !Wt.c.is … [truncated]
-                   for (let Vt = bt + 1; Vt <= bt + Mt.maxFloraHeight; Vt += this.ff) lt.startY = Vt, Kt.addBiomeFloraToColumn(lt, tt, et, yt, Vt, Nt, bt)
+                 if (UB.hasScatteredLakes && this.isBesideLake(qB, yB, ZB) && (this.random.reseed(`${qB}|${yB}|${this.seed}oasisShore`), this.random.next() < .85 && (nB.push(CB, WB, QB), sB = this.biomeSelector.baseBiome.floraGenerator)), !kB.b.isInCave(qB, WB, yB, TB) && !YB.b.is … [truncated]
+                   for (let ZB = WB + 1; ZB <= WB + UB.maxFloraHeight; ZB += this.YN) zB.startY = ZB, sB.addBiomeFloraToColumn(zB, BB, IB, qB, ZB, yB, WB)
```

#### 931. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11037` → after: `L11037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11037) · [Before (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11037)

```diff
-             return Vt.getOrGenerate(tt + 1, et, Dt.h.WaterHeight) !== mt.k && Vt.getOrGenerate(tt - 1, et, Dt.h.WaterHeight) !== mt.k && Vt.getOrGenerate(tt, et + 1, Dt.h.WaterHeight) !== mt.k && Vt.getOrGenerate(tt, et - 1, Dt.h.WaterHeight) !== mt.k
+             return ZB.getOrGenerate(BB + 1, IB, oB.f.WaterHeight) !== GB.n && ZB.getOrGenerate(BB - 1, IB, oB.f.WaterHeight) !== GB.n && ZB.getOrGenerate(BB, IB + 1, oB.f.WaterHeight) !== GB.n && ZB.getOrGenerate(BB, IB - 1, oB.f.WaterHeight) !== GB.n
```

#### 932. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11043` → after: `L11043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11043) · [Before (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11043)

```diff
-             return Vt.getOrGenerate(tt, et, Dt.h.WaterHeight) !== mt.k && 1 === Vt.getOrGenerate(tt, et, Dt.h.IsLake)
+             return ZB.getOrGenerate(BB, IB, oB.f.WaterHeight) !== GB.n && 1 === ZB.getOrGenerate(BB, IB, oB.f.IsLake)
```

#### 933. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11046` → after: `L11046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11046) · [Before (L11046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11046)

```diff
-         var pe = Vt(39888);
+         var bI = ZB(39733);
```

#### 934. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11051` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11051) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11051)

```diff
-             if (this.ff = tt, this.hashChunkContents = Qt, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.YN = BB, this.hashChunkContents = hB, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 935. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11055-L11056` → after: `L11055-L11056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11055-L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11055-L11056) · [Before (L11055-L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11055-L11056)

```diff
-             this.chunkColumnInfos = xe.partition(), this.caveGenerator = new jt.c(qt, tt, et, null !== (lt = null === Ht || void 0 === Ht ? void 0 : Ht.fO.yO) && void 0 !== lt ? lt : "Lava");
-             const bt = new he(et, qt, tt, null !== (Et = null === Ht || void 0 === Ht ? void 0 : Ht.kO) && void 0 !== Et ? Et : [...Ke, ...null !== (ft = null === Xt || void 0 === Xt ? void 0 : Xt.BO) && void 0 !== ft ? ft : []]),
+             this.chunkColumnInfos = xI.partition(), this.caveGenerator = new kB.b(JB, BB, IB, null !== (zB = null === cB || void 0 === cB ? void 0 : cB.JT.GT) && void 0 !== zB ? zB : "Lava");
+             const WB = new wI(IB, JB, BB, null !== (FB = null === cB || void 0 === cB ? void 0 : cB.YT) && void 0 !== FB ? FB : [...sI, ...null !== (NB = null === nB || void 0 === nB ? void 0 : nB.RT) && void 0 !== NB ? NB : []]),
```

#### 936. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11058` → after: `L11058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11058) · [Before (L11058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11058)

```diff
-                 ff: tt,
+                 YN: BB,
```

#### 937. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11066-L11069` → after: `L11066-L11069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11066-L11069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11066-L11069) · [Before (L11066-L11069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11066-L11069)

```diff
-               Ct = null !== (wt = null === Ht || void 0 === Ht ? void 0 : Ht.RO) && void 0 !== wt ? wt : null,
-               ut = null !== (yt = null === Xt || void 0 === Xt ? void 0 : Xt.buildBiomes) && void 0 !== yt ? yt : null,
-               Kt = null !== Ct ? (0, ve.e)(Ct, Jt) : null !== ut ? this.buildTerrainBiomes(ut, Jt) : (0, ve.f)(Jt);
-             this.biomeSelector = new ve.b(this, bt, qt, tt, et, Kt), this.treeGenerator = new fe(this, this.biomeSelector, tt, qt, et), this.fixedPointPrefabTracker = new Wt.c(dt, tt), this.prefabGenerator = new De({
+               CB = null !== (gB = null === cB || void 0 === cB ? void 0 : cB.dT) && void 0 !== gB ? gB : null,
+               QB = null !== (qB = null === nB || void 0 === nB ? void 0 : nB.buildBiomes) && void 0 !== qB ? qB : null,
+               sB = null !== CB ? (0, OI.d)(CB, dB) : null !== QB ? this.buildTerrainBiomes(QB, dB) : (0, OI.f)(dB);
+             this.biomeSelector = new OI.c(this, WB, JB, BB, IB, sB), this.treeGenerator = new FI(this, this.biomeSelector, BB, JB, IB), this.fixedPointPrefabTracker = new YB.b(vB, BB), this.prefabGenerator = new JI({
```

#### 938. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11071` → after: `L11071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11071) · [Before (L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11071)

```diff
-               ff: tt,
+               YN: BB,
```

#### 939. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11075` → after: `L11075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11075) · [Before (L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11075)

```diff
-                 [Dt.o.SURFACE]: {
+                 [oB.n.SURFACE]: {
```

#### 940. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11077` → after: `L11077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11077) · [Before (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11077)

```diff
-                     [Dt.k.MEDIUM]: {
+                     [oB.l.MEDIUM]: {
```

#### 941. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11080` → after: `L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11080) · [Before (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11080)

```diff
-                     [Dt.k.HIGH]: {
+                     [oB.l.HIGH]: {
```

#### 942. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11083` → after: `L11083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11083) · [Before (L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11083)

```diff
-                     [Dt.k.VERY_HIGH]: {
+                     [oB.l.VERY_HIGH]: {
```

#### 943. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11088` → after: `L11088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11088) · [Before (L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11088)

```diff
-                 [Dt.o.UNDERGROUND]: {
+                 [oB.n.UNDERGROUND]: {
```

#### 944. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11090` → after: `L11090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11090) · [Before (L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11090)

```diff
-                     [Dt.k.MEDIUM]: {
+                     [oB.l.MEDIUM]: {
```

#### 945. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11093-L11094` → after: `L11093-L11094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11093-L11094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11093-L11094) · [Before (L11093-L11094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11093-L11094)

```diff
-                     [Dt.k.HIGH]: null,
-                     [Dt.k.VERY_HIGH]: null
+                     [oB.l.HIGH]: null,
+                     [oB.l.VERY_HIGH]: null
```

#### 946. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11099` → after: `L11099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11099) · [Before (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11099)

```diff
-             }), this.noWaterHeightmapGenerator = new pe.i((0, pe.k)(qt)), this.heightmapPerturb = new Ot.i([{
+             }), this.noWaterHeightmapGenerator = new bI.h((0, bI.j)(JB)), this.heightmapPerturb = new TB.g([{
```

#### 947. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11108` → after: `L11108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11108) · [Before (L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11108)

```diff
-             }], `${qt}HeightmapPerturb`);
+             }], `${JB}HeightmapPerturb`);
```

#### 948. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11114` → after: `L11114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11114) · [Before (L11114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11114)

```diff
-             this.waterBodyGenerator = new Je(this.biomeSelector, this.noWaterHeightmapGenerator, qt, tt, ht, this.needOutsideWaterDist, mt, null === (Nt = null === Ht || void 0 === Ht ? void 0 : Ht.EO) || void 0 === Nt || Nt), this.caveDecorationGenerator = new Ue(et, tt, qt, nul … [truncated]
+             this.waterBodyGenerator = new dI(this.biomeSelector, this.noWaterHeightmapGenerator, JB, BB, wB, this.needOutsideWaterDist, GB, null === (yB = null === cB || void 0 === cB ? void 0 : cB.TT) || void 0 === yB || yB), this.caveDecorationGenerator = new uI(IB, BB, JB, nul … [truncated]
```

#### 949. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11133` → after: `L11133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11133) · [Before (L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11133)

```diff
-             const Vt = this.ff,
+             const ZB = this.YN,
```

#### 950. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11151` → after: `L11151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11151) · [Before (L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11151)

```diff
-               if ((null !== (qt = Ot.get(Dt.key)) && void 0 !== qt ? qt : Dt) !== Dt) throw new Error(`A world-gen terrain built two biomes keyed "${Dt.key}"`);
+               if ((null !== (JB = TB.get(oB.key)) && void 0 !== JB ? JB : oB) !== oB) throw new Error(`A world-gen terrain built two biomes keyed "${oB.key}"`);
```

#### 951. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11161-L11162` → after: `L11161-L11162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11161-L11162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11161-L11162) · [Before (L11161-L11162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11161-L11162)

```diff
-               const tt = `${Math.floor(jt.x/this.ff)}|${Math.floor(jt.z/this.ff)}`,
-                 et = null !== (mt = Dt.get(tt)) && void 0 !== mt ? mt : [];
+               const BB = `${Math.floor(kB.x/this.YN)}|${Math.floor(kB.z/this.YN)}`,
+                 IB = null !== (GB = oB.get(BB)) && void 0 !== GB ? GB : [];
```

#### 952. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11167-L11168` → after: `L11167-L11168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11167-L11168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11167-L11168) · [Before (L11167-L11168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11167-L11168)

```diff
-               const tt = Math.floor(jt[0].x / this.ff) * this.ff,
-                 et = Math.floor(jt[0].z / this.ff) * this.ff,
+               const BB = Math.floor(kB[0].x / this.YN) * this.YN,
+                 IB = Math.floor(kB[0].z / this.YN) * this.YN,
```

#### 953. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11189` → after: `L11189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11189) · [Before (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11189)

```diff
-                   mO: Ht.prefab.name
+                   DZ: cB.prefab.name
```

#### 954. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11222` → after: `L11222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11222) · [Before (L11222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11222)

```diff
-               Xt = Ot.getOrGenerate(tt + Math.floor(this.ff / 2), et + Math.floor(this.ff / 2))[0].biome.oreGenerator.getOreBlocksForChunk(tt, et),
+               nB = TB.getOrGenerate(BB + Math.floor(this.YN / 2), IB + Math.floor(this.YN / 2))[0].biome.oreGenerator.getOreBlocksForChunk(BB, IB),
```

#### 955. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11240` → after: `L11240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11240) · [Before (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11240)

```diff
-             return Ot.s.create(this.ff, [tt, et], this.biomeSelector)
+             return TB.p.create(this.YN, [BB, IB], this.biomeSelector)
```

#### 956. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11243-L11244` → after: `L11243-L11244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11243-L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11243-L11244) · [Before (L11243-L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11243-L11244)

```diff
-             const mt = new pe.e(Vt, qt, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-             return Ot.q.create(this.ff, [tt, et], Dt.h.NumFields, mt)
+             const GB = new bI.d(ZB, JB, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+             return TB.o.create(this.YN, [BB, IB], oB.f.NumFields, GB)
```

#### 957. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11248` → after: `L11248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11248) · [Before (L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11248)

```diff
-       39890: (tt, et, Vt) => {
+       39735: (BB, IB, ZB) => {
```

#### 958. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11253-L11255` → after: `L11254-L11256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11254-L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11254-L11256) · [Before (L11253-L11255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11253-L11255)

```diff
-           j: () => ht,
-           n: () => It,
-           q: () => Ft,
+           k: () => HB,
+           o: () => RB,
+           p: () => aB,
```

#### 959. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11259-L11261` → after: `L11259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11259) · [Before (L11259-L11261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11259-L11261)

```diff
-           x: () => ut,
-           A: () => wt,
-           B: () => Ct,
+           z: () => QB,
```

#### 960. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11263` → after: `L11261-L11263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11261-L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11261-L11263) · [Before (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11263)

```diff
-           F: () => Nt
+           G: () => CB,
+           I: () => UB,
+           L: () => yB
```

#### 961. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11265` → after: `L11265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11265) · [Before (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11265)

```diff
-         var Ot = Vt(2934),
+         var TB = ZB(3e3),
```

#### 962. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11278` → after: `L11278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11278) · [Before (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11278)

```diff
-             const et = "function" == typeof tt ? tt : function(tt) {
+             const IB = "function" == typeof BB ? BB : function(BB) {
```

#### 963. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11487` → after: `L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11487) · [Before (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11487)

```diff
-         var ft = Vt(39893);
+         var NB = ZB(39743);
```

#### 964. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11516` → after: `L11516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11516) · [Before (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11516)

```diff
-             pm: Mt(tt, Dt, mt),
+             uG: UB(BB, oB, GB),
```

#### 965. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11547` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11547) · [Before (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11547)

```diff
-             for (let Vt = 0; Vt < tt.length; Vt++) this._simplexes.push(new Et(`${et}${Vt}`))
+             for (let ZB = 0; ZB < BB.length; ZB++) this._simplexes.push(new FB(`${IB}${ZB}`))
```

#### 966. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11572` → after: `L11572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11572) · [Before (L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11572)

```diff
-             for (let qt = 0; qt < tt.length; qt++) this._simplexes.push(new Et(`${Vt}${qt}`));
+             for (let JB = 0; JB < BB.length; JB++) this._simplexes.push(new FB(`${ZB}${JB}`));
```

#### 967. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11580` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11580) · [Before (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11580)

```diff
-               if (Vt - this.remainingAmplitudes[Ot] > this.threshold.high || Vt + this.remainingAmplitudes[Ot] < this.threshold.low) return ft.c;
+               if (ZB - this.remainingAmplitudes[TB] > this.threshold.high || ZB + this.remainingAmplitudes[TB] < this.threshold.low) return NB.d;
```

#### 968. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11708` → after: `L11708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11708) · [Before (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11708)

```diff
-             if (void 0 === Ot) throw new Error(`Number not found for x=${tt}, z=${et}, thirdIndex=${Vt}`);
+             if (void 0 === TB) throw new Error(`Number not found for x=${BB}, z=${IB}, thirdIndex=${ZB}`);
```

#### 969. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11757` → after: `L11757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11757) · [Before (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11757)

```diff
-             if (void 0 === qt) throw new Error(`Number not found for x=${tt}, z=${et}, thirdIndex=${Vt}, fourthIndex=${Ot}`);
+             if (void 0 === JB) throw new Error(`Number not found for x=${BB}, z=${IB}, thirdIndex=${ZB}, fourthIndex=${TB}`);
```

#### 970. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11787` → after: `L11787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11787) · [Before (L11787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11787)

```diff
-       39893: (tt, et, Vt) => {
+       39743: (BB, IB, ZB) => {
```

#### 971. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11792` → after: `L11791-L11792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11791-L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11791-L11792) · [Before (L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11792)

```diff
-           i: () => Dt,
+           f: () => cB,
+           g: () => oB,
```

#### 972. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11794-L11795` → after: `L11794-L11795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11794-L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11794-L11795) · [Before (L11794-L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11794-L11795)

```diff
-           k: () => qt,
-           o: () => Ot
+           n: () => JB,
+           r: () => TB
```

#### 973. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11808` → after: `L11808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11808) · [Before (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11808)

```diff
-       39896: (tt, et, Vt) => {
+       39748: (BB, IB, ZB) => {
```

#### 974. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11810-L11815` → after: `L11810-L11815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11810-L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11810-L11815) · [Before (L11810-L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11810-L11815)

```diff
-           d: () => qt,
-           h: () => Ot,
-           i: () => jt,
-           k: () => dt,
-           o: () => mt,
-           r: () => Dt
+           c: () => JB,
+           f: () => TB,
+           j: () => kB,
+           l: () => vB,
+           n: () => GB,
+           q: () => oB
```

#### 975. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11834` → after: `L11834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11834) · [Before (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11834)

```diff
-       4347: (tt, et, Vt) => {
+       4428: (BB, IB, ZB) => {
```

#### 976. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11836-L11838` → after: `L11836-L11839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11836-L11839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11836-L11839) · [Before (L11836-L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11836-L11838)

```diff
-           d: () => jt,
-           g: () => Dt,
-           k: () => Ot,
+           e: () => kB,
+           i: () => oB,
+           j: () => TB,
+           l: () => vB,
```

#### 977. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11840-L11841` → after: `L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11841) · [Before (L11840-L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11840-L11841)

```diff
-           s: () => mt,
-           v: () => qt
+           s: () => JB
```

#### 978. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11867` → after: `L11867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11867) · [Before (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11867)

```diff
-             if (this.distribution = void 0, tt.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(tt)}`);
+             if (this.distribution = void 0, BB.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(BB)}`);
```

#### 979. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11872` → after: `L11872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11872) · [Before (L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11872)

```diff
-               if (et.has(Ot)) throw new Error(`Values must be unique: ${JSON.stringify(tt)}`);
+               if (IB.has(TB)) throw new Error(`Values must be unique: ${JSON.stringify(BB)}`);
```

#### 980. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11875` → after: `L11875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11875) · [Before (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11875)

```diff
-               if (Dt <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(tt)}`);
+               if (oB <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(BB)}`);
```

#### 981. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11900` → after: `L11900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11900) · [Before (L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11900)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, tt > et) throw new Error(`Min must be less than or equal to Max, but Min=${tt} and Max=${et}`);
+             if (this.offset = void 0, this.multiplier = void 0, BB > IB) throw new Error(`Min must be less than or equal to Max, but Min=${BB} and Max=${IB}`);
```

#### 982. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11910` → after: `L11910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11910) · [Before (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11910)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new mt(tt, et, Vt), !Number.isInteger(tt) || !Number.isInteger(et)) throw new Error(`Min and Max must be integers, but Min=${tt} and Max=${et}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new GB(BB, IB, ZB), !Number.isInteger(BB) || !Number.isInteger(IB)) throw new Error(`Min and Max must be integers, but Min=${BB} and Max=${IB}`)
```

#### 983. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11926` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11926) · [Before (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11926)

```diff
-       710: (tt, et, Vt) => {
+       665: (BB, IB, ZB) => {
```

#### 984. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11928-L11931` → after: `L11928-L11934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11928-L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11928-L11934) · [Before (L11928-L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11928-L11931)

```diff
-           B: () => jt,
-           H: () => Qt,
-           e: () => dt,
-           h: () => mt,
+           C: () => cB,
+           F: () => FB,
+           G: () => NB,
+           L: () => kB,
+           T: () => hB,
+           d: () => vB,
+           i: () => GB,
```

#### 985. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11933-L11936` → after: `L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11936) · [Before (L11933-L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11933-L11936)

```diff
-           s: () => Dt,
-           t: () => lt,
-           u: () => Ht,
-           w: () => Et,
+           v: () => oB,
```

#### 986. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11939` → after: `L11939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11939) · [Before (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11939)

```diff
-         var Ot = Vt(712);
+         var TB = ZB(671);
```

#### 987. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11969` → after: `L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11969) · [Before (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11969)

```diff
-         Ot.d, Number(atob("NQ==")), Number(atob("MTM="));
+         TB.b, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 988. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11977` → after: `L11977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11977) · [Before (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11977)

```diff
-       712: (tt, et, Vt) => {
+       671: (BB, IB, ZB) => {
```

#### 989. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11979` → after: `L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11979) · [Before (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11979)

```diff
-           d: () => Ot
+           b: () => TB
```

#### 990. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11983-L11984` → after: `L11983-L11984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11983-L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L11983-L11984) · [Before (L11983-L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L11983-L11984)

```diff
-       36542: (tt, et, Vt) => {
-         tt.exports = Vt.p + "static/media/bloxd_wasm_bg.64474d163218655c8ebd.wasm"
+       36335: (BB, IB, ZB) => {
+         BB.exports = ZB.p + "static/media/bloxd_wasm_bg.aa99019a959b1a22dab3.wasm"
```

#### 991. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12066` → after: `L12066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12066) · [Before (L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12066)

```diff
-       Vt = et < 0 ? this.length + et : et;
+       ZB = IB < 0 ? this.length + IB : IB;
```

#### 992. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12081` → after: `L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12081) · [Before (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12081)

```diff
-     pX: () => Ht,
+     Vn: () => cB,
```

#### 993. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12083` → after: `L12083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12083) · [Before (L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12083)

```diff
-     xX: () => Qt,
+     Sn: () => hB,
```

#### 994. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12085-L12094` → after: `L12085-L12094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12085-L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12085-L12094) · [Before (L12085-L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12085-L12094)

```diff
-     TX: () => Et,
-     gX: () => ft,
-     sX: () => wt,
-     tQ: () => yt,
-     eQ: () => Nt,
-     VQ: () => Mt,
-     OQ: () => bt,
-     qQ: () => Jt,
-     DQ: () => Ct,
-     mQ: () => ut,
+     Bh: () => FB,
+     Ih: () => NB,
+     Zh: () => gB,
+     Th: () => qB,
+     Jh: () => yB,
+     oh: () => UB,
+     Gh: () => WB,
+     kh: () => dB,
+     nh: () => CB,
+     hh: () => QB,
```

#### 995. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12097-L12111` → after: `L12097-L12111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12097-L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12097-L12111) · [Before (L12097-L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12097-L12111)

```diff
-     dQ: () => Kt,
-     jQ: () => ht,
-     HQ: () => vt,
-     XQ: () => Wt,
-     QQ: () => St,
-     lQ: () => ct,
-     EQ: () => Rt,
-     fQ: () => It,
-     wQ: () => Pt,
-     yQ: () => Zt,
-     NQ: () => Lt,
-     aQ: () => Ft,
-     MQ: () => kt,
-     bQ: () => Gt,
-     JQ: () => zt
+     zh: () => sB,
+     Fh: () => wB,
+     Nh: () => OB,
+     gh: () => YB,
+     qh: () => iB,
+     yh: () => pB,
+     Uh: () => aB,
+     Wh: () => HB,
+     dh: () => MB,
+     Ch: () => jB,
+     Qh: () => PB,
+     sh: () => RB,
+     Oh: () => rB,
+     Yh: () => mB,
+     ih: () => XB
```

#### 996. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12125` → after: `L12125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12125) · [Before (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12125)

```diff
-       ve.x2Af(tt, 0)
+       OI.VvWi(BB, 0)
```

#### 997. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12128` → after: `L12128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12128) · [Before (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12128)

```diff
-       const tt = ve.rLMm(this.__wbg_ptr);
+       const BB = OI.IbXN(this.__wbg_ptr);
```

#### 998. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12133` → after: `L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12133) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12133)

```diff
-       return ve.D8cT(this.__wbg_ptr) >>> 0
+       return OI.UviD(this.__wbg_ptr) >>> 0
```

#### 999. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12136` → after: `L12136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12136) · [Before (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12136)

```diff
-       const tt = ve.itQy();
+       const BB = OI.PfkX();
```

#### 1000. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12140` → after: `L12140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12140) · [Before (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12140)

```diff
-       return ve.ICYr(this.__wbg_ptr) >>> 0
+       return OI.C5GE(this.__wbg_ptr) >>> 0
```

#### 1001. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12143` → after: `L12143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12143) · [Before (L12143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12143)

```diff
-       const et = ve.jY71(this.__wbg_ptr, tt);
+       const IB = OI.zxKP(this.__wbg_ptr, BB);
```

#### 1002. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12148` → after: `L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12148) · [Before (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12148)

```diff
-       const et = ve.p7wJ(this.__wbg_ptr, tt);
+       const IB = OI.TmAP(this.__wbg_ptr, BB);
```

#### 1003. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12183` → after: `L12183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12183) · [Before (L12183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12183)

```diff
-       ve.AJoG(tt, 0)
+       OI.lOfU(BB, 0)
```

#### 1004. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12186` → after: `L12186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12186) · [Before (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12186)

```diff
-       const Vt = ve.CAuP(this.__wbg_ptr, tt, et);
+       const ZB = OI.sgWq(this.__wbg_ptr, BB, IB);
```

#### 1005. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12191` → after: `L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12191) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12191)

```diff
-       const et = ve.waCJ(this.__wbg_ptr, tt);
+       const IB = OI.tKJj(this.__wbg_ptr, BB);
```

#### 1006. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12196` → after: `L12196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12196) · [Before (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12196)

```diff
-       ve.Jsqi(this.__wbg_ptr)
+       OI.aJxf(this.__wbg_ptr)
```

#### 1007. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12199` → after: `L12199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12199) · [Before (L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12199)

```diff
-       return ve.tGHt() >>> 0
+       return OI.pjX2() >>> 0
```

#### 1008. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12202` → after: `L12202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12202) · [Before (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12202)

```diff
-       return ve.yoaD(this.__wbg_ptr) >>> 0
+       return OI.qAtq(this.__wbg_ptr) >>> 0
```

#### 1009. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12205` → after: `L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12205) · [Before (L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12205)

```diff
-       const tt = ve.Sbrw(this.__wbg_ptr);
+       const BB = OI.Gjtt(this.__wbg_ptr);
```

#### 1010. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12209` → after: `L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12209) · [Before (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12209)

```diff
-       return ve.FYA2(this.__wbg_ptr) >>> 0
+       return OI.wKLn(this.__wbg_ptr) >>> 0
```

#### 1011. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12212` → after: `L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12212) · [Before (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12212)

```diff
-       return ve.sqee(this.__wbg_ptr) >>> 0
+       return OI.D7sp(this.__wbg_ptr) >>> 0
```

#### 1012. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12215` → after: `L12215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12215) · [Before (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12215)

```diff
-       return ve.YGdI() >>> 0
+       return OI.JVox() >>> 0
```

#### 1013. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12218` → after: `L12218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12218) · [Before (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12218)

```diff
-       const tt = ve.ymW8();
+       const BB = OI.ovMl();
```

#### 1014. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12222` → after: `L12222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12222) · [Before (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12222)

```diff
-       return ve.cvUE(this.__wbg_ptr) >>> 0
+       return OI.uW1U(this.__wbg_ptr) >>> 0
```

#### 1015. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12225` → after: `L12225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12225) · [Before (L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12225)

```diff
-       return ve.pMKG(this.__wbg_ptr) >>> 0
+       return OI.V8YV(this.__wbg_ptr) >>> 0
```

#### 1016. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12228` → after: `L12228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12228) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12228)

```diff
-       return ve.UmqC(this.__wbg_ptr) >>> 0
+       return OI.Tb7g(this.__wbg_ptr) >>> 0
```

#### 1017. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12231` → after: `L12231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12231) · [Before (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12231)

```diff
-       return ve.wvQ5(this.__wbg_ptr, tt) >>> 0
+       return OI.xdmR(this.__wbg_ptr, BB) >>> 0
```

#### 1018. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12234` → after: `L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12234) · [Before (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12234)

```diff
-       const Vt = ve.qSYI(this.__wbg_ptr, tt, et);
+       const ZB = OI.lgEt(this.__wbg_ptr, BB, IB);
```

#### 1019. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12238` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12238) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12238)

```diff
-       const Vt = we(tt, ve.l2E5),
+       const ZB = NI(BB, OI.VwSS),
```

#### 1020. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12240` → after: `L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12240) · [Before (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12240)

```diff
-       ve.Q46E(this.__wbg_ptr, Vt, Ot, et)
+       OI.JqXD(this.__wbg_ptr, ZB, TB, IB)
```

#### 1021. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12245` → after: `L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12245) · [Before (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12245)

```diff
-         const Vt = ve.Kfqe(this.__wbg_ptr);
+         const ZB = OI.HXtR(this.__wbg_ptr);
```

#### 1022. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12248` → after: `L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12248) · [Before (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12248)

```diff
-         ve.dTko(tt, et, 1)
+         OI.t267(BB, IB, 1)
```

#### 1023. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12260` → after: `L12260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12260) · [Before (L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12260)

```diff
-       ve.pTae(tt, 0)
+       OI.cjls(BB, 0)
```

#### 1024. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12264` → after: `L12264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12264) · [Before (L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12264)

```diff
-       const Vt = ve.oN2Q(this.__wbg_ptr, tt, et.__wbg_ptr);
+       const ZB = OI.T3z0(this.__wbg_ptr, BB, IB.__wbg_ptr);
```

#### 1025. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12269` → after: `L12269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12269) · [Before (L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12269)

```diff
-       const tt = ve.uS6N(this.__wbg_ptr);
+       const BB = OI.RvN3(this.__wbg_ptr);
```

#### 1026. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12274` → after: `L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12274) · [Before (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12274)

```diff
-       const Qt = ve.WUsQ(this.__wbg_ptr, tt.__wbg_ptr, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt);
+       const hB = OI.wTDN(this.__wbg_ptr, BB.__wbg_ptr, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB);
```

#### 1027. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12279` → after: `L12279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12279) · [Before (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12279)

```diff
-       const tt = ve.BSSk(this.__wbg_ptr);
+       const BB = OI.Qi8F(this.__wbg_ptr);
```

#### 1028. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12281` → after: `L12281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12281) · [Before (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12281)

```diff
-       return ve.dTko(tt[0], 8 * tt[1], 8), et
+       return OI.t267(BB[0], 8 * BB[1], 8), IB
```

#### 1029. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12284` → after: `L12284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12284) · [Before (L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12284)

```diff
-       return ve.nz47(this.__wbg_ptr) >>> 0
+       return OI.vbtJ(this.__wbg_ptr) >>> 0
```

#### 1030. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12287` → after: `L12287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12287) · [Before (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12287)

```diff
-       return ve.xiky(this.__wbg_ptr) >>> 0
+       return OI.d6ma(this.__wbg_ptr) >>> 0
```

#### 1031. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12290` → after: `L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12290) · [Before (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12290)

```diff
-       return ve.UgdC(this.__wbg_ptr) >>> 0
+       return OI.mTKR(this.__wbg_ptr) >>> 0
```

#### 1032. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12293` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12293) · [Before (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12293)

```diff
-       const jt = ve.Qubx(tt, et, Vt, Ot, qt, Dt, mt, dt);
+       const kB = OI.ETFC(BB, IB, ZB, TB, JB, oB, GB, vB);
```

#### 1033. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12299` → after: `L12299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12299) · [Before (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12299)

```diff
-       const et = ve.eekZ(this.__wbg_ptr, tt.__wbg_ptr);
+       const IB = OI.qF7A(this.__wbg_ptr, BB.__wbg_ptr);
```

#### 1034. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12304` → after: `L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12304) · [Before (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12304)

```diff
-       const et = ve.ZdKq(this.__wbg_ptr, tt);
+       const IB = OI.lYkF(this.__wbg_ptr, BB);
```

#### 1035. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12308` → after: `L12308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12308) · [Before (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12308)

```diff
-       return ve.oYqx(this.__wbg_ptr) >>> 0
+       return OI.IxBx(this.__wbg_ptr) >>> 0
```

#### 1036. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12312` → after: `L12312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12312) · [Before (L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12312)

```diff
-       const Vt = ve.ZLfW(this.__wbg_ptr, tt.__wbg_ptr, et.__wbg_ptr);
+       const ZB = OI.WjjO(this.__wbg_ptr, BB.__wbg_ptr, IB.__wbg_ptr);
```

#### 1037. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12317` → after: `L12317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12317) · [Before (L12317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12317)

```diff
-       const et = ve.pJ7A(this.__wbg_ptr, tt);
+       const IB = OI.DJbX(this.__wbg_ptr, BB);
```

#### 1038. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12322` → after: `L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12322) · [Before (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12322)

```diff
-       const Vt = ve.n4Jo(this.__wbg_ptr, tt, et.__wbg_ptr);
+       const ZB = OI.TtY1(this.__wbg_ptr, BB, IB.__wbg_ptr);
```

#### 1039. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12326` → after: `L12326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12326) · [Before (L12326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12326)

```diff
-       const et = Ne(tt, ve.l2E5),
+       const IB = qI(BB, OI.VwSS),
```

#### 1040. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12328` → after: `L12328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12328) · [Before (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12328)

```diff
-         Ot = ve.Fn1y(this.__wbg_ptr, et, Vt);
+         TB = OI.iv6M(this.__wbg_ptr, IB, ZB);
```

#### 1041. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12332` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12332) · [Before (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12332)

```diff
-       const mt = ve.Axma(this.__wbg_ptr, tt, et, Vt, Ot, qt, Dt);
+       const GB = OI.wvVf(this.__wbg_ptr, BB, IB, ZB, TB, JB, oB);
```

#### 1042. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12336` → after: `L12336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12336) · [Before (L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12336)

```diff
-       const qt = we(tt, ve.l2E5),
+       const JB = NI(BB, OI.VwSS),
```

#### 1043. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12338` → after: `L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12338) · [Before (L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12338)

```diff
-         mt = Ne(et, ve.l2E5),
+         GB = qI(IB, OI.VwSS),
```

#### 1044. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12340` → after: `L12340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12340) · [Before (L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12340)

```diff
-         jt = Ne(Vt, ve.l2E5),
+         kB = qI(ZB, OI.VwSS),
```

#### 1045. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12342` → after: `L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12342) · [Before (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12342)

```diff
-         Xt = Ne(Ot, ve.l2E5),
+         nB = qI(TB, OI.VwSS),
```

#### 1046. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12344` → after: `L12344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12344) · [Before (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12344)

```diff
-         lt = ve.kpT4(this.__wbg_ptr, qt, Dt, mt, dt, jt, Ht, Xt, Qt);
+         zB = OI.Ordq(this.__wbg_ptr, JB, oB, GB, vB, kB, cB, nB, hB);
```

#### 1047. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12349` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12349) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12349)

```diff
-       const Vt = ve.ngoX(this.__wbg_ptr, tt, et.__wbg_ptr);
+       const ZB = OI.nYXS(this.__wbg_ptr, BB, IB.__wbg_ptr);
```

#### 1048. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12353` → after: `L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12353) · [Before (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12353)

```diff
-       const Ot = ve.j1Ix(this.__wbg_ptr, tt, et, Vt);
+       const TB = OI.OTUN(this.__wbg_ptr, BB, IB, ZB);
```

#### 1049. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12358` → after: `L12358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12358) · [Before (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12358)

```diff
-       return ve.Pa5B(this.__wbg_ptr, tt.__wbg_ptr, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht)
+       return OI.Rf2M(this.__wbg_ptr, BB.__wbg_ptr, IB, ZB, TB, JB, oB, GB, vB, kB, cB)
```

#### 1050. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12373` → after: `L12373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12373) · [Before (L12373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12373)

```diff
-       ve.bExh(tt, 0)
+       OI.qGxN(BB, 0)
```

#### 1051. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12376` → after: `L12376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12376) · [Before (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12376)

```diff
-       const et = ve.kf55(this.__wbg_ptr, tt);
+       const IB = OI.TDRm(this.__wbg_ptr, BB);
```

#### 1052. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12381` → after: `L12381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12381) · [Before (L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12381)

```diff
-       return ve.udwU(this.__wbg_ptr, tt, et, Vt)
+       return OI.FZXn(this.__wbg_ptr, BB, IB, ZB)
```

#### 1053. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12384` → after: `L12384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12384) · [Before (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12384)

```diff
-       return ve.Dnz0(this.__wbg_ptr, tt, et, Vt) >>> 0
+       return OI.rTlR(this.__wbg_ptr, BB, IB, ZB) >>> 0
```

#### 1054. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12387` → after: `L12387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12387) · [Before (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12387)

```diff
-       return 0 !== ve.QegG(this.__wbg_ptr, tt, et, Vt, Ot)
+       return 0 !== OI.DPJq(this.__wbg_ptr, BB, IB, ZB, TB)
```

#### 1055. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12390` → after: `L12390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12390) · [Before (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12390)

```diff
-       ve.phlL(this.__wbg_ptr)
+       OI.MWSi(this.__wbg_ptr)
```

#### 1056. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12393` → after: `L12393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12393) · [Before (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12393)

```diff
-       const et = ve.BcBT(this.__wbg_ptr, tt);
+       const IB = OI.vW1m(this.__wbg_ptr, BB);
```

#### 1057. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12396` → after: `L12396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12396) · [Before (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12396)

```diff
-       return ve.dTko(et[0], 1 * et[1], 1), Vt
+       return OI.t267(IB[0], 1 * IB[1], 1), ZB
```

#### 1058. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12399` → after: `L12399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12399) · [Before (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12399)

```diff
-       return ve.RSxS(this.__wbg_ptr, tt, et) >>> 0
+       return OI.fqaP(this.__wbg_ptr, BB, IB) >>> 0
```

#### 1059. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12402` → after: `L12402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12402) · [Before (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12402)

```diff
-       ve.qih3(this.__wbg_ptr)
+       OI.cSzL(this.__wbg_ptr)
```

#### 1060. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12405` → after: `L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12405) · [Before (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12405)

```diff
-       ve.kzxB(this.__wbg_ptr, tt, et, Vt)
+       OI.NZVH(this.__wbg_ptr, BB, IB, ZB)
```

#### 1061. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12408` → after: `L12408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12408) · [Before (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12408)

```diff
-       const et = ve.k3TQ(this.__wbg_ptr, tt);
+       const IB = OI.fJDB(this.__wbg_ptr, BB);
```

#### 1062. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12412` → after: `L12412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12412) · [Before (L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12412)

```diff
-       return ve.alIW(this.__wbg_ptr) >>> 0
+       return OI.sjkM(this.__wbg_ptr) >>> 0
```

#### 1063. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12415` → after: `L12415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12415) · [Before (L12415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12415)

```diff
-       return ve.flKk(this.__wbg_ptr) >>> 0
+       return OI.iDmU(this.__wbg_ptr) >>> 0
```

#### 1064. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12418` → after: `L12418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12418) · [Before (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12418)

```diff
-       ve.q5fN(this.__wbg_ptr, tt, et, Vt)
+       OI.VXXt(this.__wbg_ptr, BB, IB, ZB)
```

#### 1065. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12421` → after: `L12421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12421) · [Before (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12421)

```diff
-       ve.P040(this.__wbg_ptr, tt, et, Vt)
+       OI.VzK9(this.__wbg_ptr, BB, IB, ZB)
```

#### 1066. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12424` → after: `L12424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12424) · [Before (L12424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12424)

```diff
-       return ve.JLQc(this.__wbg_ptr) >>> 0
+       return OI.n9yk(this.__wbg_ptr) >>> 0
```

#### 1067. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12427` → after: `L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12427) · [Before (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12427)

```diff
-       return ve.mlsF(this.__wbg_ptr) >>> 0
+       return OI.ywfN(this.__wbg_ptr) >>> 0
```

#### 1068. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12430` → after: `L12430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12430) · [Before (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12430)

```diff
-       const tt = ve.Z0LA();
+       const BB = OI.XR8H();
```

#### 1069. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12434` → after: `L12434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12434) · [Before (L12434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12434)

```diff
-       const tt = ve.rslU();
+       const BB = OI.Q4fD();
```

#### 1070. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12438` → after: `L12438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12438) · [Before (L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12438)

```diff
-       return ve.FLPI(this.__wbg_ptr) >>> 0
+       return OI.jyZE(this.__wbg_ptr) >>> 0
```

#### 1071. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12441` → after: `L12441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12441) · [Before (L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12441)

```diff
-       return ve.bCMj(this.__wbg_ptr) >>> 0
+       return OI.ci83(this.__wbg_ptr) >>> 0
```

#### 1072. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12444` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12444) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12444)

```diff
-       const qt = ve.mHIX(this.__wbg_ptr, tt, et, Vt, Ot);
+       const JB = OI.Yd12(this.__wbg_ptr, BB, IB, ZB, TB);
```

#### 1073. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12448` → after: `L12448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L12448) · [Before (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/procGenWorker.js#L12448)

```diff
-       return ve.KkCS(this.__wbg_ptr) >>> 0
+       return OI.GkVD(this.__wbg_ptr) >>> 0
```
