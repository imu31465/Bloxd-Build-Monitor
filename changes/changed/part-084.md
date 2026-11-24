# Changed — Bundle Modifications Report (Part 084 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `84 / 137` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 083](part-083.md) · [Part 085 →](part-085.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4621 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 3646. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28205-L28209` → after: `L27138-L27142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27138-L27142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27138-L27142) · [Before (L28205-L28209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28205-L28209)

```diff
-         this.ur.Xm(`Meshing worker ${BB} failed chunk (${nB}, ${dB}, ${NB}): ${UB}`), this.jobEnded(BB, uB), null === (zB = this.meshProbe) || void 0 === zB || zB.failed(uB), aB ? this.lightUnused(nB, dB, NB, uB) : (this.chunkMirrors[BB].reset(), this.lightMirrors[BB].reset()), p … [truncated]
-         const JB = this.ur.zr.Fm.Ym(nB, dB, NB);
-         if (!JB || JB.nm !== uB) return;
-         JB.nm = 0, JB.Hm = !0, JB.hm = !0;
-         const mB = null !== (QB = this.meshFailures.get(JB)) && void 0 !== QB ? QB : {
+         this.Nz.wg(`Meshing worker ${BB} failed chunk (${JB}, ${oB}, ${vB}): ${cB}`), this.jobEnded(BB, kB), null === (ZB = this.meshProbe) || void 0 === ZB || ZB.failed(kB), nB ? this.lightUnused(JB, oB, vB, kB) : (this.chunkMirrors[BB].reset(), this.lightMirrors[BB].reset()), h … [truncated]
+         const NB = this.Nz.vz.Wg.Cg(JB, oB, vB);
+         if (!NB || NB.xN !== kB) return;
+         NB.xN = 0, NB.yg = !0, NB.sg = !0;
+         const gB = null !== (TB = this.meshFailures.get(NB)) && void 0 !== TB ? TB : {
```

#### 3647. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28216-L28218` → after: `L27149-L27151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27149-L27151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27149-L27151) · [Before (L28216-L28218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28216-L28218)

```diff
-           const BB = mB.lostMesher >= 2 ? `lost its worker's mesher ${mB.lostMesher} times` : mB.refused >= 6 ? `was refused memory ${mB.refused} times` : `failed ${mB.failed} times in a row`;
-           this.ur.Xm(`Meshing chunk (${nB}, ${dB}, ${NB}) ${BB}, so it is dropped until it reloads: ${UB}`)
-         } else this.meshFailures.set(JB, mB), this.ur.zr.Dm(JB, !0)
+           const BB = gB.lostMesher >= 2 ? `lost its worker's mesher ${gB.lostMesher} times` : gB.refused >= 6 ? `was refused memory ${gB.refused} times` : `failed ${gB.failed} times in a row`;
+           this.Nz.wg(`Meshing chunk (${JB}, ${oB}, ${vB}) ${BB}, so it is dropped until it reloads: ${cB}`)
+         } else this.meshFailures.set(NB, gB), this.Nz.vz.Ug(NB, !0)
```

#### 3648. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28221` → after: `L27154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27154) · [Before (L28221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28221)

```diff
-         this.droppedChunks.add(BB), BB.Hm = !1, BB.hm = !1, this.Im(BB)
+         this.droppedChunks.add(BB), BB.yg = !1, BB.sg = !1, this.DN(BB)
```

#### 3649. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28237-L28238` → after: `L27170-L27171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27170-L27171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27170-L27171) · [Before (L28237-L28238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28237-L28238)

```diff
-           zr: jB
-         } = this.ur, {
+           vz: IB
+         } = this.Nz, {
```

#### 3650. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28242-L28243` → after: `L27175-L27176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27175-L27176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27175-L27176) · [Before (L28242-L28243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28242-L28243)

```diff
-         } = BB, dB = jB.Fm.Ym(zB, QB, nB);
-         return dB && dB.nm === BB.meshJobId ? jB.Tm.includes(zB, QB, nB) || jB.Pm.includes(zB, QB, nB) ? null : dB : null
+         } = BB, oB = IB.Wg.Cg(ZB, TB, JB);
+         return oB && oB.xN === BB.meshJobId ? IB.ig.includes(ZB, TB, JB) || IB.ag.includes(ZB, TB, JB) ? null : oB : null
```

#### 3651. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28246` → after: `L27179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27179) · [Before (L28246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28246)

```diff
-         BB.computedLightData && (0, IB.u)(BB.computedLightData), this.lightUnused(BB.i, BB.j, BB.k, BB.meshJobId)
+         BB.computedLightData && (0, GB.v)(BB.computedLightData), this.lightUnused(BB.i, BB.j, BB.k, BB.meshJobId)
```

#### 3652. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28249` → after: `L27182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27182) · [Before (L28249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28249)

```diff
-         const nB = this.ur.zr.Fm.Ym(BB, jB, zB);
+         const JB = this.Nz.vz.Wg.Cg(BB, IB, ZB);
```

#### 3653. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28257` → after: `L27190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27190) · [Before (L28257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28257)

```diff
-           if (this.remeshesLostContext && (0, gB.e)(this.ur.pm.engine)) return this.dropResult(BB), jB.nm = 0, void this.chunksToRemeshOnRestore.add(jB);
+           if (this.remeshesLostContext && (0, dB.e)(this.Nz.Ig.engine)) return this.dropResult(BB), IB.xN = 0, void this.chunksToRemeshOnRestore.add(IB);
```

#### 3654. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28261` → after: `L27194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27194) · [Before (L28261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28261)

```diff
-             this.ur.Xm(`Applying the mesh of chunk (${BB.i}, ${BB.j}, ${BB.k}) failed`, zB)
+             this.Nz.wg(`Applying the mesh of chunk (${BB.i}, ${BB.j}, ${BB.k}) failed`, ZB)
```

#### 3655. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28270` → after: `L27203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27203) · [Before (L28270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28270)

```diff
-         if (BB.nm = 0, this.meshFailures.delete(BB), BB.Wm = !!nB || BB.gJ || BB.iJ, !0 === jB.lightOnlyUpdate) this.assignLightOnlyData(BB, jB.lightDataArrays) || (BB.Hm = !0, BB.hm = !0);
+         if (BB.xN = 0, this.meshFailures.delete(BB), BB.Hg = !!JB || BB.nN || BB.gN, !0 === IB.lightOnlyUpdate) this.assignLightOnlyData(BB, IB.lightDataArrays) || (BB.yg = !0, BB.sg = !0);
```

#### 3656. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28273-L28274` → after: `L27206-L27207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27206-L27207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27206-L27207) · [Before (L28273-L28274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28273-L28274)

```diff
-           const zB = this.ur.zr;
-           !zB.lm && jB.vertexDataInfo.length > 0 && (zB.lm = !0, zB.emit("lm")), this.visibility && void 0 !== jB.visNegNeighbours && this.setVisibilityFromWorker(BB, jB.visGraphs, jB.visNegNeighbours)
+           const ZB = this.Nz.vz;
+           !ZB.Mg && IB.vertexDataInfo.length > 0 && (ZB.Mg = !0, ZB.emit("Mg")), this.visibility && void 0 !== IB.visNegNeighbours && this.setVisibilityFromWorker(BB, IB.visGraphs, IB.visNegNeighbours)
```

#### 3657. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28276` → after: `L27209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27209) · [Before (L28276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28276)

```diff
-         if (BB.wm = null !== (zB = jB.faceLayout) && void 0 !== zB ? zB : null, nB && "clientBfs" === jB.lightSource || this.lightUnused(jB.i, jB.j, jB.k, jB.meshJobId), nB) {
+         if (BB.jg = null !== (ZB = IB.faceLayout) && void 0 !== ZB ? ZB : null, JB && "clientBfs" === IB.lightSource || this.lightUnused(IB.i, IB.j, IB.k, IB.meshJobId), JB) {
```

#### 3658. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28282-L28284` → after: `L27215-L27217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27215-L27217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27215-L27217) · [Before (L28282-L28284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28282-L28284)

```diff
-           this.storeAndPropagateLight(BB, nB, jB.bz, "server" === jB.lightSource), this.lightReuse.lightStored(BB, jB.meshJobId, jB.lightSource, nB, jB.lightSeedColumnsRead), jB.lightSeedColumnsRead && (0, IB.y)(jB.lightSeedColumnsRead)
-         } else this.ur.xm.Km(BB);
-         BB.Hm ? this.ur.zr.Dm(BB, !0) : BB.um = !1, this.checkSkySeedAtReply(BB, !BB.Hm), this.Im(BB), null === (QB = this.meshProbe) || void 0 === QB || QB.applied(BB, jB.meshJobId)
+           this.storeAndPropagateLight(BB, JB, IB.tZ, "server" === IB.lightSource), this.lightReuse.lightStored(BB, IB.meshJobId, IB.lightSource, JB, IB.lightSeedColumnsRead), IB.lightSeedColumnsRead && (0, GB.x)(IB.lightSeedColumnsRead)
+         } else this.Nz.Pg.Rg(BB);
+         BB.yg ? this.Nz.vz.Ug(BB, !0) : BB.VN = !1, this.checkSkySeedAtReply(BB, !BB.yg), this.DN(BB), null === (TB = this.meshProbe) || void 0 === TB || TB.applied(BB, IB.meshJobId)
```

#### 3659. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28287` → after: `L27220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27220) · [Before (L28287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28287)

```diff
-         BB.bm.length = 0
+         BB.mg.length = 0
```

#### 3660. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28291-L28294` → after: `L27224-L27227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27224-L27227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27224-L27227) · [Before (L28291-L28294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28291-L28294)

```diff
-         const zB = null === (jB = this.ur.pm.rm) || void 0 === jB ? void 0 : jB.terrain;
-         BB.bm.forEach((BB => {
-           this.ur.emit("removingTerrainMesh", BB), null === zB || void 0 === zB || zB.removeChunkMesh(BB), BB.dispose()
-         })), BB.bm.length = 0, BB.wm = null
+         const ZB = null === (IB = this.Nz.Ig.Zg) || void 0 === IB ? void 0 : IB.terrain;
+         BB.mg.forEach((BB => {
+           this.Nz.emit("removingTerrainMesh", BB), null === ZB || void 0 === ZB || ZB.removeChunkMesh(BB), BB.dispose()
+         })), BB.mg.length = 0, BB.jg = null
```

#### 3661. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28308` → after: `L27241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27241) · [Before (L28308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28308)

```diff
-         if (this.lazyInitMeshingObjs(), BB.nm) return !1;
+         if (this.lazyInitMeshingObjs(), BB.xN) return !1;
```

#### 3662. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28311-L28312` → after: `L27244-L27245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27244-L27245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27244-L27245) · [Before (L28311-L28312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28311-L28312)

```diff
-             if (!BB.gJ) return !1;
-             const jB = BB.FJ,
+             if (!BB.nN) return !1;
+             const IB = BB.CN,
```

#### 3663. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28314` → after: `L27247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27247) · [Before (L28314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28314)

```diff
-             if (zB && !zB.gJ) return !1;
+             if (ZB && !ZB.nN) return !1;
```

#### 3664. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28316` → after: `L27249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27249) · [Before (L28316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28316)

```diff
-             if (QB && !QB.gJ) return !1;
+             if (TB && !TB.nN) return !1;
```

#### 3665. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28318` → after: `L27251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27251) · [Before (L28318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28318)

```diff
-             if (nB && !nB.gJ) return !1;
+             if (JB && !JB.nN) return !1;
```

#### 3666. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28320-L28321` → after: `L27253-L27254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27253-L27254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27253-L27254) · [Before (L28320-L28321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28320-L28321)

```diff
-           }(BB)) return this.meshFailures.delete(BB), this.assignMeshDataToChunk(BB, []), this.setVisibilityOnThisThread(BB), BB.Wm = !0, this.ur.xm.Km(BB), this.checkHeldSkySeedReaders(BB), !0;
-         const nB = this.ur.pm.Rm;
+           }(BB)) return this.meshFailures.delete(BB), this.assignMeshDataToChunk(BB, []), this.setVisibilityOnThisThread(BB), BB.Hg = !0, this.Nz.Pg.Rg(BB), this.checkHeldSkySeedReaders(BB), !0;
+         const JB = this.Nz.Ig.Xg;
```

#### 3667. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28324` → after: `L27257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27257) · [Before (L28324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28324)

```diff
-         nB && (dB = this.ur.zr.YJ(BB.i, BB.k), uB = (0, NB.D)(BB.iJ, BB.j, dB));
+         JB && (oB = this.Nz.vz.QN(BB.i, BB.k), kB = (0, vB.E)(BB.gN, BB.j, oB));
```

#### 3668. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28327` → after: `L27260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27260) · [Before (L28327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28327)

```diff
-         this.providedLightEligible(BB, dB) && BB.Om && BB.MJ && (UB = BB.MJ, aB = BB.qJ);
+         this.providedLightEligible(BB, oB) && BB.Lg && BB.FN && (cB = BB.FN, nB = BB.qN);
```

#### 3669. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28331` → after: `L27264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27264) · [Before (L28331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28331)

```diff
-         !nB || uB || BB.gJ || UB || (sB = (0, IB.m)(BB, NB.k), pB = function(BB, jB, zB, nB) {
+         !JB || kB || BB.nN || cB || (FB = (0, GB.j)(BB, vB.j), hB = function(BB, IB, ZB, JB) {
```

#### 3670. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28333` → after: `L27266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27266) · [Before (L28333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28333)

```diff
-             IB = dB.Vr;
+             GB = oB.mz;
```

#### 3671. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28339` → after: `L27272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27272) · [Before (L28339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28339)

```diff
-                 !dB || dB.iJ && 0 !== (QB | zB | nB) ? (IB[NB] = -1, IB[NB + 1] = -1) : (IB[NB] = jB(dB), IB[NB + 1] = dB.Nm)
+                 !oB || oB.gN && 0 !== (TB | ZB | JB) ? (GB[vB] = -1, GB[vB + 1] = -1) : (GB[vB] = IB(oB), GB[vB + 1] = oB.KN)
```

#### 3672. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28342` → after: `L27275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27275) · [Before (L28342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28342)

```diff
-         }(BB.FJ, this.chunkObjectIdOf, (0, NB.O)(BB.j, dB), sB), this.lightReuse.canReuse(BB, BB.MJ, pB) && (UB = BB.MJ, aB = BB.qJ, rB = !0, (0, IB.y)(sB), sB = null));
+         }(BB.CN, this.chunkObjectIdOf, (0, vB.Q)(BB.j, oB), FB), this.lightReuse.canReuse(BB, BB.FN, hB) && (cB = BB.FN, nB = BB.qN, zB = !0, (0, GB.x)(FB), FB = null));
```

#### 3673. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28344` → after: `L27277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27277) · [Before (L28344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28344)

```diff
-           mB = null === UB && BB.jy;
+           gB = null === cB && BB.eg;
```

#### 3674. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28346-L28347` → after: `L27279-L27280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27279-L27280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27279-L27280) · [Before (L28346-L28347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28346-L28347)

```diff
-             if (!BB.iJ) return !1;
-             const jB = BB.FJ,
+             if (!BB.gN) return !1;
+             const IB = BB.CN,
```

#### 3675. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28351` → after: `L27284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27284) · [Before (L28351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28351)

```diff
-             if (nB && !nB.iJ && 0 !== nB.ls[zB - 1]) return !1;
+             if (JB && !JB.gN && 0 !== JB.PF[ZB - 1]) return !1;
```

#### 3676. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28353` → after: `L27286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27286) · [Before (L28353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28353)

```diff
-             if (dB && !dB.iJ && TB(dB.Vr.data, (zB - 1) * QB, 1, QB)) return !1;
+             if (oB && !oB.gN && LB(oB.mz.data, (ZB - 1) * TB, 1, TB)) return !1;
```

#### 3677. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28355` → after: `L27288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27288) · [Before (L28355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28355)

```diff
-             if (IB && !IB.iJ && TB(IB.Vr.data, zB - 1, zB, QB)) return !1;
+             if (GB && !GB.gN && LB(GB.mz.data, ZB - 1, ZB, TB)) return !1;
```

#### 3678. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28357-L28358` → after: `L27290-L27291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27290-L27291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27290-L27291) · [Before (L28357-L28358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28357-L28358)

```diff
-           }(BB)) return this.meshFailures.delete(BB), this.assignMeshDataToChunk(BB, []), this.setVisibilityOnThisThread(BB), BB.Wm = !0, BB.wm = null, this.ur.xm.Km(BB), this.checkHeldSkySeedReaders(BB), !0;
-         const yB = this.getLeastLoadedWorkerIndex(null !== (jB = this.stateWorkerOf.get(BB)) && void 0 !== jB ? jB : -1),
+           }(BB)) return this.meshFailures.delete(BB), this.assignMeshDataToChunk(BB, []), this.setVisibilityOnThisThread(BB), BB.Hg = !0, BB.jg = null, this.Nz.Pg.Rg(BB), this.checkHeldSkySeedReaders(BB), !0;
+         const qB = this.getLeastLoadedWorkerIndex(null !== (IB = this.stateWorkerOf.get(BB)) && void 0 !== IB ? IB : -1),
```

#### 3679. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28364` → after: `L27297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27297) · [Before (L28364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28364)

```diff
-             CJ: tB,
+             mN: CB,
```

#### 3680. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28366-L28368` → after: `L27299-L27301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27299-L27301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27299-L27301) · [Before (L28366-L28368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28366-L28368)

```diff
-             iJ: MB,
-             gJ: EB,
-             ls: iB
+             gN: sB,
+             nN: wB,
+             PF: OB
```

#### 3681. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28370` → after: `L27303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27303) · [Before (L28370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28370)

```diff
-         this.tempChunk.i = GB, this.tempChunk.j = LB, this.tempChunk.k = gB, this.tempChunk.CJ = tB, this.tempChunk.size = SB, this.tempChunk.iJ = MB, this.tempChunk.gJ = EB, this.tempChunk.ls = iB, this.tempChunk.FJ = null;
+         this.tempChunk.i = UB, this.tempChunk.j = WB, this.tempChunk.k = dB, this.tempChunk.mN = CB, this.tempChunk.size = QB, this.tempChunk.gN = sB, this.tempChunk.nN = wB, this.tempChunk.PF = OB, this.tempChunk.CN = null;
```

#### 3682. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28380-L28382` → after: `L27313-L27315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27313-L27315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27313-L27315) · [Before (L28380-L28382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28380-L28382)

```diff
-               zB = (0, IB.i)(BB, this.ur.zr, (BB => {
-                 const zB = this.lightTags.get(BB.MJ);
-                 return jB.holds(this.chunkObjectId(BB), zB) ? zB : 0
+               ZB = (0, GB.h)(BB, this.Nz.vz, (BB => {
+                 const ZB = this.lightTags.get(BB.FN);
+                 return IB.holds(this.chunkObjectId(BB), ZB) ? ZB : 0
```

#### 3683. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28391-L28392` → after: `L27324-L27325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27324-L27325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27324-L27325) · [Before (L28391-L28392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28391-L28392)

```diff
-         let YB = BB.wm;
-         const VB = nB && !BB.hm && BB.Wm && BB.bm.length > 0 && !!YB;
+         let jB = BB.jg;
+         const PB = JB && !BB.sg && BB.Hg && BB.mg.length > 0 && !!jB;
```

#### 3684. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28394` → after: `L27327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27327) · [Before (L28394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28394)

```diff
-           for (const zB of jB) BB.push(zB.is.buffer), BB.push(zB.js.buffer), BB.push(zB.ks.buffer), BB.push(zB.wids.buffer), BB.push(zB.hts.buffer), BB.push(zB.Mz.buffer), BB.push(zB.diagonals.buffer)
+           for (const ZB of IB) BB.push(ZB.is.buffer), BB.push(ZB.js.buffer), BB.push(ZB.ks.buffer), BB.push(ZB.wids.buffer), BB.push(ZB.hts.buffer), BB.push(ZB.QZ.buffer), BB.push(ZB.diagonals.buffer)
```

#### 3685. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28398` → after: `L27331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27331) · [Before (L28398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28398)

```diff
-         if (BB.nm = hB, this.jobsInFlight[yB].set(hB, BB), pB && this.lightReuse.dispatched(BB, hB, pB), this.visibility) {
+         if (BB.xN = RB, this.jobsInFlight[qB].set(RB, BB), hB && this.lightReuse.dispatched(BB, RB, hB), this.visibility) {
```

#### 3686. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28402` → after: `L27335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27335) · [Before (L28402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28402)

```diff
-             voxelVersion: BB.Nm,
+             voxelVersion: BB.KN,
```

#### 3687. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28438` → after: `L27371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27371) · [Before (L28438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28438)

```diff
-             type: "zm",
+             type: "tN",
```

#### 3688. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28442` → after: `L27375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27375) · [Before (L28442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28442)

```diff
-           return this.ur.Xm(`Meshing worker ${yB} postMessage failed`, eB), BB.nm = 0, this.jobEnded(yB, hB), this.chunkMirrors[yB].reset(), this.lightMirrors[yB].reset(), (0, IB.q)(FB), DB && (0, IB.y)(DB), BB.Hm = !0, this.ur.zr.Dm(BB, !0), !1
+           return this.Nz.wg(`Meshing worker ${qB} postMessage failed`, fB), BB.xN = 0, this.jobEnded(qB, RB), this.chunkMirrors[qB].reset(), this.lightMirrors[qB].reset(), (0, GB.o)(MB), HB && (0, GB.x)(HB), BB.yg = !0, this.Nz.vz.Ug(BB, !0), !1
```

#### 3689. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28444` → after: `L27377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27377) · [Before (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28444)

```diff
-         return VB && (BB.wm = null), null === (zB = this.meshProbe) || void 0 === zB || zB.sent(BB, hB, this.busynessTracker.inFlightCounts[yB] - 1, this.workerInFlightCount, this.jobCapacity()), !0
+         return PB && (BB.jg = null), null === (ZB = this.meshProbe) || void 0 === ZB || ZB.sent(BB, RB, this.busynessTracker.inFlightCounts[qB] - 1, this.workerInFlightCount, this.jobCapacity()), !0
```

#### 3690. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28450` → after: `L27383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27383) · [Before (L28450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28450)

```diff
-           const [jB, nB, IB] = fB(dB), NB = BB.FJ.get(jB, nB, IB);
+           const [IB, JB, GB] = iB(oB), vB = BB.CN.get(IB, JB, GB);
```

#### 3691. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28463` → after: `L27396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27396) · [Before (L28463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28463)

```diff
-         const UB = nB ? this.lightTags.get(BB.MJ) : void 0;
+         const cB = JB ? this.lightTags.get(BB.FN) : void 0;
```

#### 3692. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28471` → after: `L27404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27404) · [Before (L28471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28471)

```diff
-         } = IB.dispatched(QB ? NB : -1, zB);
+         } = GB.dispatched(TB ? vB : -1, ZB);
```

#### 3693. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28482-L28484` → after: `L27415-L27417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27415-L27417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27415-L27417) · [Before (L28482-L28484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28482-L28484)

```diff
-         const QB = !BB.zy && this.ur.pm.Qy() ? performance.now() : 0;
-         BB.zy = !0;
-         const nB = null === (zB = this.ur.pm.rm) || void 0 === zB ? void 0 : zB.terrain;
+         const TB = !BB.ug && this.Nz.Ig.fg() ? performance.now() : 0;
+         BB.ug = !0;
+         const JB = null === (ZB = this.Nz.Ig.Zg) || void 0 === ZB ? void 0 : ZB.terrain;
```

#### 3694. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28486` → after: `L27419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27419) · [Before (L28486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28486)

```diff
-         const dB = BB.bm;
+         const oB = BB.mg;
```

#### 3695. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28490` → after: `L27423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27423) · [Before (L28490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28490)

```diff
-           zB && (NB = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.ur.pm.ny), NB.cJ = !0, NB._updateBoundingInfo = YB, NB._refreshBoundingInfo = YB, dB.push(NB)), this.meshBuilder.assignMeshData(NB, jB[IB]), nB || (0, yB.i)(NB, jB[IB].faceGroups), zB || this.ur.pm.Iy(NB), null = … [truncated]
+           ZB && (vB = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.Nz.Ig.lg), vB.XN = !0, vB._updateBoundingInfo = jB, vB._refreshBoundingInfo = jB, oB.push(vB)), this.meshBuilder.assignMeshData(vB, IB[GB]), JB || (0, qB.i)(vB, IB[GB].faceGroups), ZB || this.Nz.Ig.Ag(vB), null = … [truncated]
```

#### 3696. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28494` → after: `L27427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27427) · [Before (L28494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28494)

```diff
-           this.ur.emit("removingTerrainMesh", BB), null === nB || void 0 === nB || nB.removeChunkMesh(BB), BB.dispose()
+           this.Nz.emit("removingTerrainMesh", BB), null === JB || void 0 === JB || JB.removeChunkMesh(BB), BB.dispose()
```

#### 3697. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28498` → after: `L27431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27431) · [Before (L28498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28498)

```diff
-         const nB = BB.bm;
+         const JB = BB.mg;
```

#### 3698. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28502-L28505` → after: `L27435-L27438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27435-L27438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27435-L27438) · [Before (L28502-L28505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28502-L28505)

```diff
-             uB = NB ? new JB : nB[dB];
-           NB && nB.push(uB), uB.vertexCount = (0, rB.i)(IB);
-           const UB = uB.metadata[aB.f];
-           uB.material = null !== UB && void 0 !== UB ? UB : this.terrainMatManager.bJ(IB.terrainID), zB.setChunkMesh(uB, (0, pB.f)(IB), BB.pos), NB && (uB.metadata[DB] = BB.i, uB.metadata[FB] = BB.k, uB.metadata[HB] = !0, QB && this.ur.pm.sy(uB, QB), this.ur.emit("addingTerrainMe … [truncated]
+             kB = vB ? new NB : JB[oB];
+           vB && JB.push(kB), kB.vertexCount = (0, zB.h)(GB);
+           const cB = kB.metadata[nB.e];
+           kB.material = null !== cB && void 0 !== cB ? cB : this.terrainMatManager.LN(GB.terrainID), ZB.setChunkMesh(kB, (0, hB.f)(GB), BB.pos), vB && (kB.metadata[HB] = BB.i, kB.metadata[MB] = BB.k, kB.metadata[aB] = !0, TB && this.Nz.Ig.Eg(kB, TB), this.Nz.emit("addingTerrainMe … [truncated]
```

#### 3699. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28509` → after: `L27442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27442) · [Before (L28509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28509)

```diff
-           this.ur.emit("removingTerrainMesh", BB), zB.removeChunkMesh(BB), BB.dispose()
+           this.Nz.emit("removingTerrainMesh", BB), ZB.removeChunkMesh(BB), BB.dispose()
```

#### 3700. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28513-L28514` → after: `L27446-L27447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27446-L27447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27446-L27447) · [Before (L28513-L28514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28513-L28514)

```diff
-         const zB = BB.bm;
-         if (jB.length !== zB.length) return console.warn(`Light-only update submesh count mismatch: ${jB.length} light arrays vs ${zB.length} meshes`), !1;
+         const ZB = BB.mg;
+         if (IB.length !== ZB.length) return console.warn(`Light-only update submesh count mismatch: ${IB.length} light arrays vs ${ZB.length} meshes`), !1;
```

#### 3701. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28519` → after: `L27452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27452) · [Before (L28519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28519)

```diff
-           if (uB.length !== UB) return console.warn(`Light-only update vertex count mismatch on submesh ${NB}: ${uB.length} vs ${UB}`), !1;
+           if (kB.length !== cB) return console.warn(`Light-only update vertex count mismatch on submesh ${vB}: ${kB.length} vs ${cB}`), !1;
```

#### 3702. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28521` → after: `L27454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27454) · [Before (L28521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28521)

```diff
-           if (BB instanceof JB) uB.length > 0 && (null === (QB = this.ur.pm.rm) || void 0 === QB || null === (nB = QB.terrain) || void 0 === nB || nB.setChunkMeshLight(BB, (0, pB.h)(uB)));
+           if (BB instanceof NB) kB.length > 0 && (null === (TB = this.Nz.Ig.Zg) || void 0 === TB || null === (JB = TB.terrain) || void 0 === JB || JB.setChunkMeshLight(BB, (0, hB.i)(kB)));
```

#### 3703. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28524` → after: `L27457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27457) · [Before (L28524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28524)

```diff
-             const jB = (0, pB.d)(uB),
+             const IB = (0, hB.c)(kB),
```

#### 3704. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28526` → after: `L27459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27459) · [Before (L28526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28526)

```diff
-             zB && zB.isUpdatable() ? zB.updateDirectly(jB, 0) : BB.setVerticesData("aPackedLightLevels", jB, !0, 1), this.meshBuilder.releaseCpuCopies(BB), null === (dB = this.ur.pm.rm) || void 0 === dB || null === (IB = dB.terrain) || void 0 === IB || IB.setChunkMeshLight(BB, (0 … [truncated]
+             ZB && ZB.isUpdatable() ? ZB.updateDirectly(IB, 0) : BB.setVerticesData("aPackedLightLevels", IB, !0, 1), this.meshBuilder.releaseCpuCopies(BB), null === (oB = this.Nz.Ig.Zg) || void 0 === oB || null === (GB = oB.terrain) || void 0 === GB || GB.setChunkMeshLight(BB, (0 … [truncated]
```

#### 3705. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28532` → after: `L27465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27465) · [Before (L28532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28532)

```diff
-         return this.ur.pm.Rm && !BB.gJ && !(0, NB.D)(BB.iJ, BB.j, jB)
+         return this.Nz.Ig.Xg && !BB.nN && !(0, vB.E)(BB.gN, BB.j, IB)
```

#### 3706. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28535` → after: `L27468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27468) · [Before (L28535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28535)

```diff
-         this.providedLightEligible(BB, this.ur.zr.YJ(BB.i, BB.k)) && (BB.jy = !0, this.storeAndPropagateLight(BB, jB, zB, !0), BB.Om = !0)
+         this.providedLightEligible(BB, this.Nz.vz.QN(BB.i, BB.k)) && (BB.eg = !0, this.storeAndPropagateLight(BB, IB, ZB, !0), BB.Lg = !0)
```

#### 3707. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28539-L28541` → after: `L27472-L27474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27472-L27474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27472-L27474) · [Before (L28539-L28541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28539-L28541)

```diff
-         const nB = BB.MJ,
-           dB = BB.qJ;
-         if ((0, IB.r)(BB, jB, zB), !BB.gJ) {
+         const JB = BB.FN,
+           oB = BB.qN;
+         if ((0, GB.s)(BB, IB, ZB), !BB.nN) {
```

#### 3708. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28545` → after: `L27478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27478) · [Before (L28545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28545)

```diff
-             const [zB, nB, dB] = NB.e[jB], UB = BB.FJ.get(zB, nB, dB);
+             const [ZB, JB, oB] = vB.c[IB], cB = BB.CN.get(ZB, JB, oB);
```

#### 3709. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28548-L28549` → after: `L27481-L27482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27481-L27482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27481-L27482) · [Before (L28548-L28549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28548-L28549)

```diff
-             UB.yy > 0 && (UB.Hm ? this.ur.zr.Dm(UB) : aB = !0);
-             const pB = !QB && UB.Om;
+             cB.Vg > 0 && (cB.yg ? this.Nz.vz.Ug(cB) : nB = !0);
+             const hB = !TB && cB.Lg;
```

#### 3710. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28553` → after: `L27486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27486) · [Before (L28553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28553)

```diff
-             const UB = (0, NB.u)(BB.size, nB, dB, jB, zB, IB);
+             const cB = (0, vB.t)(BB.size, JB, oB, IB, ZB, GB);
```

#### 3711. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28557` → after: `L27490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27490) · [Before (L28557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28557)

```diff
-               zB && (QB || this.invalidateProvidedLightFrom(BB, zB), zB.yy > 0 && (zB.Hm = !0, BB.um && (zB.um = !0), this.ur.zr.Dm(zB, BB.um)))
+               ZB && (TB || this.invalidateProvidedLightFrom(BB, ZB), ZB.Vg > 0 && (ZB.yg = !0, BB.VN && (ZB.VN = !0), this.Nz.vz.Ug(ZB, BB.VN)))
```

#### 3712. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28561-L28562` → after: `L27494-L27495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27494-L27495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27494-L27495) · [Before (L28561-L28562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28561-L28562)

```diff
-         const uB = (0, NB.I)(BB.size, NB.k, nB, dB, jB, zB);
-         this.requeueSkySeedReaders(BB, uB, !QB, !BB.Hm), nB && (0, IB.u)(nB), this.ur.xm.Km(BB)
+         const kB = (0, vB.L)(BB.size, vB.j, JB, oB, IB, ZB);
+         this.requeueSkySeedReaders(BB, kB, !TB, !BB.yg), JB && (0, GB.v)(JB), this.Nz.Pg.Rg(BB)
```

#### 3713. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28565` → after: `L27498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27498) · [Before (L28565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28565)

```diff
-         jB.Om = !1, BB.jy || (jB.jy = !1)
+         IB.Lg = !1, BB.eg || (IB.eg = !1)
```

#### 3714. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28571-L28572` → after: `L27504-L27505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27504-L27505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27504-L27505) · [Before (L28571-L28572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28571-L28572)

```diff
-               const QB = jB >> 3 * (dB + 1) + zB + 1 & 1 ? BB.FJ.get(dB, -1, zB) : null;
-               null !== QB && void 0 !== QB && QB.Om && this.invalidateProvidedLightFrom(BB, QB)
+               const TB = IB >> 3 * (oB + 1) + ZB + 1 & 1 ? BB.CN.get(oB, -1, ZB) : null;
+               null !== TB && void 0 !== TB && TB.Lg && this.invalidateProvidedLightFrom(BB, TB)
```

#### 3715. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28575` → after: `L27508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27508) · [Before (L28575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28575)

```diff
-         if (nB && (jB = NB.d), jB)
+         if (JB && (IB = vB.b), IB)
```

#### 3716. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28581-L28582` → after: `L27514-L27515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27514-L27515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27514-L27515) · [Before (L28581-L28582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28581-L28582)

```diff
-                 const nB = BB.FJ.get(zB, -1, QB);
-                 nB && 0 !== nB.yy && !nB.Hm && (nB.nm ? this.skySeedRecheck.add(nB) : this.skySeedStale(nB, BB) && (nB.Hm = !0, this.ur.zr.Dm(nB)))
+                 const JB = BB.CN.get(ZB, -1, TB);
+                 JB && 0 !== JB.Vg && !JB.yg && (JB.xN ? this.skySeedRecheck.add(JB) : this.skySeedStale(JB, BB) && (JB.yg = !0, this.Nz.vz.Ug(JB)))
```

#### 3717. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28591` → after: `L27524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27524) · [Before (L28591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28591)

```diff
-         this.skySeedRecheck.delete(BB), jB && (this.checkHeldSkySeedReaders(BB), zB && this.skySeedStale(BB, null) && (BB.Hm = !0, this.ur.zr.Dm(BB)))
+         this.skySeedRecheck.delete(BB), IB && (this.checkHeldSkySeedReaders(BB), ZB && this.skySeedStale(BB, null) && (BB.yg = !0, this.Nz.vz.Ug(BB)))
```

#### 3718. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28594` → after: `L27527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27527) · [Before (L28594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28594)

```diff
-         this.requeueSkySeedReaders(BB, NB.d, !1, !BB.Hm)
+         this.requeueSkySeedReaders(BB, vB.b, !1, !BB.yg)
```

#### 3719. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28597-L28598` → after: `L27530-L27531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27530-L27531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27530-L27531) · [Before (L28597-L28598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28597-L28598)

```diff
-         const zB = BB.MJ;
-         if (!zB || BB.gJ) return !1;
+         const ZB = BB.FN;
+         if (!ZB || BB.nN) return !1;
```

#### 3720. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28600` → after: `L27533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27533) · [Before (L28600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28600)

```diff
-         if (void 0 === QB) return !BB.Om;
+         if (void 0 === TB) return !BB.Lg;
```

#### 3721. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28606-L28607` → after: `L27539-L27540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27539-L27540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27539-L27540) · [Before (L28606-L28607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28606-L28607)

```diff
-             const uB = BB.FJ.get(IB, 1, zB);
-             if ((!jB || uB === jB) && (0, NB.G)(QB, null !== (dB = null === uB || void 0 === uB ? void 0 : uB.MJ) && void 0 !== dB ? dB : null, !(null === uB || void 0 === uB || !uB.qJ), IB, zB, nB, NB.k, 255)) return !0
+             const kB = BB.CN.get(GB, 1, ZB);
+             if ((!IB || kB === IB) && (0, vB.H)(TB, null !== (oB = null === kB || void 0 === kB ? void 0 : kB.FN) && void 0 !== oB ? oB : null, !(null === kB || void 0 === kB || !kB.qN), GB, ZB, JB, vB.j, 255)) return !0
```

#### 3722. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28647` → after: `L27580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27580) · [Before (L28647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28647)

```diff
-         return this.queueBudget.Ep(this.liveWorkerCount)
+         return this.queueBudget.ah(this.liveWorkerCount)
```

#### 3723. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28650-L28652` → after: `L27583-L27585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27583-L27585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27583-L27585) · [Before (L28650-L28652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28650-L28652)

```diff
-         this.ur.zr.Gy.DJ.forEach((BB => {
-           const jB = this.ur.zr.Fm.Ym(BB[0], BB[1], BB[2]);
-           jB && jB.bm.length > 0 && (this.disposeChunkMeshes(jB), this.chunksToRemeshOnRestore.add(jB))
+         this.Nz.vz.Bq.dN.forEach((BB => {
+           const IB = this.Nz.vz.Wg.Cg(BB[0], BB[1], BB[2]);
+           IB && IB.mg.length > 0 && (this.disposeChunkMeshes(IB), this.chunksToRemeshOnRestore.add(IB))
```

#### 3724. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28657` → after: `L27590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27590) · [Before (L28657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28657)

```diff
-         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((jB => !(!BB.has(jB) && 0 === jB.bm.length) && (this.retryDroppedChunk(jB), !0)), !0)
+         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((IB => !(!BB.has(IB) && 0 === IB.mg.length) && (this.retryDroppedChunk(IB), !0)), !0)
```

#### 3725. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28660` → after: `L27593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27593) · [Before (L28660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28660)

```diff
-         this.requeueKnownChunks((BB => 0 !== BB.bm.length && (this.retryDroppedChunk(BB), !0)), !0)
+         this.requeueKnownChunks((BB => 0 !== BB.mg.length && (this.retryDroppedChunk(BB), !0)), !0)
```

#### 3726. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28670` → after: `L27603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27603) · [Before (L28670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28670)

```diff
-         this.requeueKnownChunks((BB => !BB.Wm && BB.yy > 0), !1)
+         this.requeueKnownChunks((BB => !BB.Hg && BB.Vg > 0), !1)
```

#### 3727. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28673-L28675` → after: `L27606-L27608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27606-L27608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27606-L27608) · [Before (L28673-L28675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28673-L28675)

```diff
-         this.ur.zr.Gy.DJ.forEach((zB => {
-           const QB = this.ur.zr.Fm.Ym(zB[0], zB[1], zB[2]);
-           QB && BB(QB) && (QB.Hm = !0, jB && (QB.hm = !0), this.ur.zr.Dm(QB))
+         this.Nz.vz.Bq.dN.forEach((ZB => {
+           const TB = this.Nz.vz.Wg.Cg(ZB[0], ZB[1], ZB[2]);
+           TB && BB(TB) && (TB.yg = !0, IB && (TB.sg = !0), this.Nz.vz.Ug(TB))
```

#### 3728. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28686` → after: `L27619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27619) · [Before (L28686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28686)

```diff
-   37616: (BB, jB, zB) => {
+   37582: (BB, IB, ZB) => {
```

#### 3729. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28688-L28689` → after: `L27621-L27622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27621-L27622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27621-L27622) · [Before (L28688-L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28688-L28689)

```diff
-       d: () => nB,
-       h: () => dB
+       c: () => JB,
+       d: () => oB
```

#### 3730. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28703` → after: `L27636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27636) · [Before (L28703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28703)

```diff
-   37614: (BB, jB, zB) => {
+   37576: (BB, IB, ZB) => {
```

#### 3731. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28707-L28708` → after: `L27639-L27641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27639-L27641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27639-L27641) · [Before (L28707-L28708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28707-L28708)

```diff
-       e: () => nB,
-       h: () => dB
+       d: () => TB,
+       h: () => JB,
+       l: () => oB
```

#### 3732. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28711` → after: `L27644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27644) · [Before (L28711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28711)

```diff
-       Yz: 0,
+       aZ: 0,
```

#### 3733. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28729` → after: `L27662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27662) · [Before (L28729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28729)

```diff
-   37871: (BB, jB, zB) => {
+   37830: (BB, IB, ZB) => {
```

#### 3734. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28732` → after: `L27665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27665) · [Before (L28732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28732)

```diff
-       h: () => dB
+       g: () => oB
```

#### 3735. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28734` → after: `L27667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27667) · [Before (L28734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28734)

```diff
-     var QB = zB(37586);
+     var TB = ZB(37535);
```

#### 3736. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28737-L28738` → after: `L27670-L27671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27670-L27671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27670-L27671) · [Before (L28737-L28738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28737-L28738)

```diff
-       const zB = BB.pp,
-         nB = BB.metadata[QB.A] * Math.max(Math.abs(zB.x), Math.abs(zB.y), Math.abs(zB.z)),
+       const ZB = BB.ek,
+         JB = BB.metadata[TB.y] * Math.max(Math.abs(ZB.x), Math.abs(ZB.y), Math.abs(ZB.z)),
```

#### 3737. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28750` → after: `L27683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27683) · [Before (L28750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28750)

```diff
-       return void 0 !== (null === (zB = BB.metadata) || void 0 === zB ? void 0 : zB[QB.A]) ? nB(BB, jB) : (BB.computeWorldMatrix(), BB.isInFrustum(jB))
+       return void 0 !== (null === (ZB = BB.metadata) || void 0 === ZB ? void 0 : ZB[TB.y]) ? JB(BB, IB) : (BB.computeWorldMatrix(), BB.isInFrustum(IB))
```

#### 3738. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28753` → after: `L27686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27686) · [Before (L28753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28753)

```diff
-   37776: (BB, jB, zB) => {
+   37729: (BB, IB, ZB) => {
```

#### 3739. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28758` → after: `L27690-L27691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27690-L27691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27690-L27691) · [Before (L28758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28758)

```diff
-       i: () => uB
+       k: () => vB,
+       o: () => kB
```

#### 3740. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28777` → after: `L27710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27710) · [Before (L28777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28777)

```diff
-       return "function" === typeof BB && null !== (jB = BB[nB]) && void 0 !== jB ? jB : null
+       return "function" === typeof BB && null !== (IB = BB[JB]) && void 0 !== IB ? IB : null
```

#### 3741. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28780` → after: `L27713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27713) · [Before (L28780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28780)

```diff
-   37600: (BB, jB, zB) => {
+   37560: (BB, IB, ZB) => {
```

#### 3742. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28782` → after: `L27715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27715) · [Before (L28782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28782)

```diff
-       c: () => QB
+       b: () => TB
```

#### 3743. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28828` → after: `L27761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27761) · [Before (L28828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28828)

```diff
-   37993: (BB, jB, zB) => {
+   37966: (BB, IB, ZB) => {
```

#### 3744. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28830` → after: `L27763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27763) · [Before (L28830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28830)

```diff
-       b: () => pB
+       c: () => hB
```

#### 3745. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28832-L28837` → after: `L27765-L27770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27765-L27770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27765-L27770) · [Before (L28832-L28837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28832-L28837)

```diff
-     var QB = zB(37166),
-       nB = zB(37987),
-       dB = zB(37559),
-       IB = zB(37300),
-       NB = zB(37578),
-       uB = zB(37980);
+     var TB = ZB(37113),
+       JB = ZB(37964),
+       oB = ZB(37506),
+       GB = ZB(37243),
+       vB = ZB(37525),
+       kB = ZB(37954);
```

#### 3746. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28839-L28840` → after: `L27772-L27773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27772-L27773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27772-L27773) · [Before (L28839-L28840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28839-L28840)

```diff
-     var aB = zB(37551);
-     class pB extends aB.d {
+     var nB = ZB(37495);
+     class hB extends nB.b {
```

#### 3747. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28842` → after: `L27775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27775) · [Before (L28842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28842)

```diff
-         super(BB, jB, zB), this.model = QB, this.owned = nB, this.gy = IB, this.sideOrientation = void 0, this.vY = {}, this._userInstancedBuffersStorage = void 0, this.rY = !1, this.vQB = null, this.instances = [], this._thinInstanceDataStorage = {
+         super(BB, IB, ZB), this.model = TB, this.owned = JB, this.vq = GB, this.sideOrientation = void 0, this.Zm = {}, this._userInstancedBuffersStorage = void 0, this.vR = !1, this.wJB = null, this.instances = [], this._thinInstanceDataStorage = {
```

#### 3748. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28847` → after: `L27780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27780) · [Before (L28847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28847)

```diff
-         }, this.tjB = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.cJ = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
+         }, this.DIB = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.XN = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
```

#### 3749. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28851` → after: `L27784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27784) · [Before (L28851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28851)

```diff
-         NB.create(this.row, 0, dB.b.isVisible), QB && NB.setBounds(this.row, QB.boundsMin, QB.boundsMax), this.materialIndices = new Array(IB.length / 4).fill(0), this.sideOrientation = BB.aY().useRightHandedSystem ? 0 : 1, this.material = null
+         vB.create(this.row, 0, oB.e.isVisible), TB && vB.setBounds(this.row, TB.boundsMin, TB.boundsMax), this.materialIndices = new Array(GB.length / 4).fill(0), this.sideOrientation = BB.JR().useRightHandedSystem ? 0 : 1, this.material = null
```

#### 3750. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28854` → after: `L27787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27787) · [Before (L28854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28854)

```diff
-         return this.meshFlag(dB.b.alwaysSelect)
+         return this.meshFlag(oB.e.alwaysSelect)
```

#### 3751. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28857` → after: `L27790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27790) · [Before (L28857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28857)

```diff
-         this.pm.model.meshes.setFlag(this.row, dB.b.alwaysSelect, BB)
+         this.Ig.model.meshes.setFlag(this.row, oB.e.alwaysSelect, BB)
```

#### 3752. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28860` → after: `L27793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27793) · [Before (L28860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28860)

```diff
-         return this.meshFlag(dB.b.isVisible)
+         return this.meshFlag(oB.e.isVisible)
```

#### 3753. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28863` → after: `L27796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27796) · [Before (L28863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28863)

```diff
-         this.pm.model.meshes.setFlag(this.row, dB.b.isVisible, BB)
+         this.Ig.model.meshes.setFlag(this.row, oB.e.isVisible, BB)
```

#### 3754. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28865` → after: `L27798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27798) · [Before (L28865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28865)

```diff
-       get bQB() {
+       get sJB() {
```

#### 3755. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28869` → after: `L27802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27802) · [Before (L28869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28869)

```diff
-         return this.pm.model.meshes.visibility[this.row]
+         return this.Ig.model.meshes.visibility[this.row]
```

#### 3756. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28872` → after: `L27805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27805) · [Before (L28872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28872)

```diff
-         for (const jB of [this, ...this.instances]) this.pm.model.meshes.setVisibility(jB.row, BB)
+         for (const IB of [this, ...this.instances]) this.Ig.model.meshes.setVisibility(IB.row, BB)
```

#### 3757. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28875` → after: `L27808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27808) · [Before (L28875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28875)

```diff
-         return this.pm.model.meshes.layer[this.row]
+         return this.Ig.model.meshes.layer[this.row]
```

#### 3758. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28878` → after: `L27811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27811) · [Before (L28878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28878)

```diff
-         for (const jB of [this, ...this.instances]) this.pm.model.meshes.setLayer(jB.row, BB)
+         for (const IB of [this, ...this.instances]) this.Ig.model.meshes.setLayer(IB.row, BB)
```

#### 3759. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28881` → after: `L27814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27814) · [Before (L28881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28881)

```diff
-         return this.meshFlag(dB.b.pickable)
+         return this.meshFlag(oB.e.pickable)
```

#### 3760. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28884` → after: `L27817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27817) · [Before (L28884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28884)

```diff
-         this.pm.model.meshes.setFlag(this.row, dB.b.pickable, BB)
+         this.Ig.model.meshes.setFlag(this.row, oB.e.pickable, BB)
```

#### 3761. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28891` → after: `L27824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27824) · [Before (L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28891)

```diff
-         const jB = "MultiMaterial" === (null === BB || void 0 === BB ? void 0 : BB.getClassName()) ? BB.Y5 : null,
+         const IB = "MultiMaterial" === (null === BB || void 0 === BB ? void 0 : BB.getClassName()) ? BB.JBB : null,
```

#### 3762. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28895` → after: `L27828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27828) · [Before (L28895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28895)

```diff
-             return null !== (QB = nB && (0, IB.eb)(nB)) && void 0 !== QB ? QB : null
+             return null !== (TB = JB && (0, GB._)(JB)) && void 0 !== TB ? TB : null
```

#### 3763. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28897-L28898` → after: `L27830-L27831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27830-L27831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27830-L27831) · [Before (L28897-L28898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28897-L28898)

```diff
-           QB = new dB.e(this, this.model, this.gy, zB);
-         for (const nB of [this, ...this.instances]) this.pm.model.meshes.setParts(nB.row, QB)
+           TB = new oB.g(this, this.model, this.vq, ZB);
+         for (const JB of [this, ...this.instances]) this.Ig.model.meshes.setParts(JB.row, TB)
```

#### 3764. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28910` → after: `L27843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27843) · [Before (L28910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28910)

```diff
-         return (this.forcedInstanceCount || this.F_) > 0
+         return (this.forcedInstanceCount || this.B3) > 0
```

#### 3765. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28914` → after: `L27847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27847) · [Before (L28914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28914)

```diff
-         return this.pm.aY().wJ()
+         return this.Ig.JR().PN()
```

#### 3766. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28917` → after: `L27850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27850) · [Before (L28917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28917)

```diff
-         return this.pm.model.meshes.parts[this.row]
+         return this.Ig.model.meshes.parts[this.row]
```

#### 3767. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28933` → after: `L27866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27866) · [Before (L28933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28933)

```diff
-             uB = .5 * QB.KJ.Distance(BB, jB);
+             kB = .5 * TB.rN.Distance(BB, IB);
```

#### 3768. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28935` → after: `L27868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27868) · [Before (L28935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28935)

```diff
-             dB.S_(Number.MAX_VALUE), IB.S_(-Number.MAX_VALUE);
+             oB.K9(Number.MAX_VALUE), GB.K9(-Number.MAX_VALUE);
```

#### 3769. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28940` → after: `L27873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27873) · [Before (L28940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28940)

```diff
-               QB.KJ.CheckExtends(QB.KJ.TransformCoordinatesFromFloatsToRef(NB, uB, UB, zB, new QB.KJ), dB, IB)
+               TB.rN.CheckExtends(TB.rN.TransformCoordinatesFromFloatsToRef(vB, kB, cB, ZB, new TB.rN), oB, GB)
```

#### 3770. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28942-L28943` → after: `L27875-L27876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27875-L27876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27875-L27876) · [Before (L28942-L28943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28942-L28943)

```diff
-             NB = QB.KJ.TransformCoordinates(nB, zB);
-             const aB = QB.KJ.TransformNormalFromFloatsToRef(1, 1, 1, zB, new QB.KJ);
+             vB = TB.rN.TransformCoordinates(JB, ZB);
+             const nB = TB.rN.TransformNormalFromFloatsToRef(1, 1, 1, ZB, new TB.rN);
```

#### 3771. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28957` → after: `L27890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27890) · [Before (L28957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28957)

```diff
-             fQB: {
+             ZJB: {
```

#### 3772. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28965` → after: `L27898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27898) · [Before (L28965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28965)

```diff
-         }(QB.KJ.FromArray(jB), QB.KJ.FromArray(zB), this.getWorldMatrix())
+         }(TB.rN.FromArray(IB), TB.rN.FromArray(ZB), this.getWorldMatrix())
```

#### 3773. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28968` → after: `L27901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27901) · [Before (L28968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28968)

```diff
-         return this.rV().fQB.isInFrustum(BB)
+         return this.qm().ZJB.isInFrustum(BB)
```

#### 3774. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28991` → after: `L27924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27924) · [Before (L28991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L28991)

```diff
-         return IB === NB.e && 0 === QB && nB === 4 * dB && (Array.isArray(zB) || zB instanceof Float32Array) && zB.length === this.model.vertexCount * dB ? zB : (0, NB.k)(jB, this.model.vertexCount)
+         return GB === vB.d && 0 === TB && JB === 4 * oB && (Array.isArray(ZB) || ZB instanceof Float32Array) && ZB.length === this.model.vertexCount * oB ? ZB : (0, vB.f)(IB, this.model.vertexCount)
```

#### 3775. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29002` → after: `L27935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27935) · [Before (L29002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29002)

```diff
-       dQB() {
+       MTB() {
```

#### 3776. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29016` → after: `L27949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27949) · [Before (L29016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29016)

```diff
-           return null !== (jB = this.getVerticesData(BB)) && void 0 !== jB ? jB : void 0
+           return null !== (IB = this.getVerticesData(BB)) && void 0 !== IB ? IB : void 0
```

#### 3777. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29022` → after: `L27955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27955) · [Before (L29022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29022)

```diff
-         return (0, uB.h)({
+         return (0, kB.f)({
```

#### 3778. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29025` → after: `L27958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27958) · [Before (L29025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29025)

```diff
-           indices: null !== (jB = this.model.indexData) && void 0 !== jB ? jB : [],
+           indices: null !== (IB = this.model.indexData) && void 0 !== IB ? IB : [],
```

#### 3779. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29038` → after: `L27971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27971) · [Before (L29038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29038)

```diff
-         return this.position = QB.KJ.ZeroReadOnly, this.rotation = QB.KJ.ZeroReadOnly, this.pp = QB.KJ.OneReadOnly, BB && (this.rotationQuaternion = {
+         return this.position = TB.rN.ZeroReadOnly, this.rotation = TB.rN.ZeroReadOnly, this.ek = TB.rN.OneReadOnly, BB && (this.rotationQuaternion = {
```

#### 3780. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29047` → after: `L27980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27980) · [Before (L29047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29047)

```diff
-         zB.set(jB), (0, NB.A)(this.model, zB)
+         ZB.set(IB), (0, vB.s)(this.model, ZB)
```

#### 3781. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29050` → after: `L27983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27983) · [Before (L29050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29050)

```diff
-         (0, NB.o)(BB), this.owned && (0, NB.z)(this.model), this.model = BB, this.owned = !0, jB !== this.gy && (this.gy = jB, this.materialIndices = new Array(jB.length / 4).fill(0), this.partBoxes = null), this.pm.model.meshes.setBounds(this.row, BB.boundsMin, BB.boundsMax), th … [truncated]
+         (0, vB.i)(BB), this.owned && (0, vB.r)(this.model), this.model = BB, this.owned = !0, IB !== this.vq && (this.vq = IB, this.materialIndices = new Array(IB.length / 4).fill(0), this.partBoxes = null), this.Ig.model.meshes.setBounds(this.row, BB.boundsMin, BB.boundsMax), th … [truncated]
```

#### 3782. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29053` → after: `L27986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27986) · [Before (L29053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29053)

```diff
-         return new JB(this, this.pm, BB, this.pm.aY().getUniqueId(), this.model, !1, this.gy)
+         return new NB(this, this.Ig, BB, this.Ig.JR().getUniqueId(), this.model, !1, this.vq)
```

#### 3783. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29056` → after: `L27989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27989) · [Before (L29056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29056)

```diff
-         const jB = new pB(this.pm, BB, this.pm.aY().getUniqueId(), this.model, !1, this.gy);
+         const IB = new hB(this.Ig, BB, this.Ig.JR().getUniqueId(), this.model, !1, this.vq);
```

#### 3784. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29058` → after: `L27991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L27991) · [Before (L29058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29058)

```diff
-         return sB(zB = this, QB = jB), QB.parent = zB.parent, QB.mH(zB.isEnabled(!1)),
+         return FB(ZB = this, TB = IB), TB.parent = ZB.parent, TB.qY(ZB.isEnabled(!1)),
```

#### 3785. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29074` → after: `L28007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28007) · [Before (L29074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29074)

```diff
-         for (const dB of [this, ...this.instances]) dB.vY[BB] = null;
+         for (const oB of [this, ...this.instances]) oB.Zm[BB] = null;
```

#### 3786. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29097-L29098` → after: `L28030-L28031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28030-L28031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28030-L28031) · [Before (L29097-L29098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29097-L29098)

```diff
-         const jB = null === (BB = this.vQB) || void 0 === BB ? void 0 : BB.instances;
-         null === jB || void 0 === jB || jB.splice(jB.indexOf(this), 1), this.owned && (0, NB.z)(this.model)
+         const IB = null === (BB = this.wJB) || void 0 === BB ? void 0 : BB.instances;
+         null === IB || void 0 === IB || IB.splice(IB.indexOf(this), 1), this.owned && (0, vB.r)(this.model)
```

#### 3787. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29114` → after: `L28047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28047) · [Before (L29114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29114)

```diff
-           const BB = null !== jB && void 0 !== jB ? jB : rB.length / nB;
+           const BB = null !== IB && void 0 !== IB ? IB : zB.length / JB;
```

#### 3788. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29121` → after: `L28054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28054) · [Before (L29121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29121)

```diff
-             glType: NB.e,
+             glType: vB.d,
```

#### 3789. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29127-L29128` → after: `L28060-L28061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28060-L28061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28060-L28061) · [Before (L29127-L29128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29127-L29128)

```diff
-         } = BB, aB = UB ? (0, NB.v)(nB, ((BB, jB) => UB[3 * BB + jB])) : [dB, IB];
-         this.replaceModel(new NB.h(uB, QB, nB, aB[0], aB[1]), this.gy)
+         } = BB, nB = cB ? (0, vB.n)(JB, ((BB, IB) => cB[3 * BB + IB])) : [oB, GB];
+         this.replaceModel(new vB.e(kB, TB, JB, nB[0], nB[1]), this.vq)
```

#### 3790. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29135` → after: `L28068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28068) · [Before (L29135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29135)

```diff
-         return 0 !== (this.pm.model.meshes.flags[this.row] & BB)
+         return 0 !== (this.Ig.model.meshes.flags[this.row] & BB)
```

#### 3791. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29138` → after: `L28071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28071) · [Before (L29138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29138)

```diff
-     const rB = ["billboardMode", "infiniteDistance", "isVisible", "Ny", "xJ", "visibility", "renderingGroupId", "sideOrientation", "tjB", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "cJ", "metadata"];
+     const zB = ["billboardMode", "infiniteDistance", "isVisible", "tg", "RN", "visibility", "renderingGroupId", "sideOrientation", "DIB", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "XN", "metadata"];
```

#### 3792. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29141` → after: `L28074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28074) · [Before (L29141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29141)

```diff
-       jB.position = BB.position, jB.rotation = BB.rotation, BB.rotationQuaternion && (jB.rotationQuaternion = BB.rotationQuaternion), jB.pp = BB.pp
+       IB.position = BB.position, IB.rotation = BB.rotation, BB.rotationQuaternion && (IB.rotationQuaternion = BB.rotationQuaternion), IB.ek = BB.ek
```

#### 3793. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29146` → after: `L28079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28079) · [Before (L29146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29146)

```diff
-         super(...zB), this.vQB = BB, this.rY = !0, BB.instances.push(this);
+         super(...ZB), this.wJB = BB, this.vR = !0, BB.instances.push(this);
```

#### 3794. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29149-L29150` → after: `L28082-L28083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28082-L28083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28082-L28083) · [Before (L29149-L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29149-L29150)

```diff
-         } = this.pm.model;
-         nB.setParts(this.row, nB.parts[BB.row]), this.partBoxes = BB.partBoxes, nB.setVisibility(this.row, BB.visibility), nB.setLayer(this.row, BB.renderingGroupId), sB(BB, this), this.infiniteDistance = BB.infiniteDistance, Object.assign(this.vY, BB.vY), this.parent = BB.parent
+         } = this.Ig.model;
+         JB.setParts(this.row, JB.parts[BB.row]), this.partBoxes = BB.partBoxes, JB.setVisibility(this.row, BB.visibility), JB.setLayer(this.row, BB.renderingGroupId), FB(BB, this), this.infiniteDistance = BB.infiniteDistance, Object.assign(this.Zm, BB.Zm), this.parent = BB.parent
```

#### 3795. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29153` → after: `L28086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28086) · [Before (L29153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29153)

```diff
-         return this.vQB.visibility
+         return this.wJB.visibility
```

#### 3796. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29157` → after: `L28090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28090) · [Before (L29157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29157)

```diff
-         return this.vQB.renderingGroupId
+         return this.wJB.renderingGroupId
```

#### 3797. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29161` → after: `L28094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28094) · [Before (L29161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29161)

```diff
-         return this.vQB.material
+         return this.wJB.material
```

#### 3798. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29166` → after: `L28099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28099) · [Before (L29166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29166)

```diff
-   37551: (BB, jB, zB) => {
+   37495: (BB, IB, ZB) => {
```

#### 3799. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29169-L29170` → after: `L28103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28103) · [Before (L29169-L29170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29169-L29170)

```diff
-       e: () => UB,
-       f: () => rB
+       e: () => zB
```

#### 3800. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29172-L29174` → after: `L28105-L28107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28105-L28107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28105-L28107) · [Before (L29172-L29174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29172-L29174)

```diff
-     var QB = zB(37166),
-       nB = zB(37553),
-       dB = zB(37574);
+     var TB = ZB(37113),
+       JB = ZB(37504),
+       oB = ZB(37522);
```

#### 3801. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29176` → after: `L28109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28109) · [Before (L29176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29176)

```diff
-       NB = new QB.KJ;
+       vB = new TB.rN;
```

#### 3802. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29203` → after: `L28136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28136) · [Before (L29203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29203)

```diff
-       YIB(BB, jB, zB) {
+       kvB(BB, IB, ZB) {
```

#### 3803. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29206` → after: `L28139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28139) · [Before (L29206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29206)

```diff
-       nQB() {
+       HTB() {
```

#### 3804. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29209` → after: `L28142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28142) · [Before (L29209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29209)

```diff
-       ljB(BB) {
+       WZB(BB) {
```

#### 3805. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29214` → after: `L28147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28147) · [Before (L29214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29214)

```diff
-         return new QB.KJ(this.x, this.y, this.z)
+         return new TB.rN(this.x, this.y, this.z)
```

#### 3806. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29217` → after: `L28150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28150) · [Before (L29217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29217)

```diff
-         return new QB.KJ(this.x * BB, this.y * BB, this.z * BB)
+         return new TB.rN(this.x * BB, this.y * BB, this.z * BB)
```

#### 3807. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29257` → after: `L28190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28190) · [Before (L29257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29257)

```diff
-         this.pm = BB, this.name = jB, this.uniqueId = zB, this.row = void 0, this.metadata = null, this.scalingDeterminant = 1, this.pY = new aB, this.onEffectiveEnabledStateChangedObservable = new aB, this.XIB = !1, this.rowPosition = void 0, this.rowScaling = void 0, this.rowRo … [truncated]
+         this.Ig = BB, this.name = IB, this.uniqueId = ZB, this.row = void 0, this.metadata = null, this.scalingDeterminant = 1, this.oR = new nB, this.onEffectiveEnabledStateChangedObservable = new nB, this.hvB = !1, this.rowPosition = void 0, this.rowScaling = void 0, this.rowRo … [truncated]
```

#### 3808. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29265` → after: `L28198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28198) · [Before (L29265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29265)

```diff
-         })), this.rowScaling = new uB((() => nB.pp), 3 * dB, ((BB, jB, zB) => {
+         })), this.rowScaling = new kB((() => JB.ek), 3 * oB, ((BB, IB, ZB) => {
```

#### 3809. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29300` → after: `L28233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28233) · [Before (L29300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29300)

```diff
-         } = this.pm.model, zB = this.row;
+         } = this.Ig.model, ZB = this.row;
```

#### 3810. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29318` → after: `L28251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28251) · [Before (L29318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29318)

```diff
-         return 0 !== (this.pm.model.nodes.flags[this.row] & dB.d.infiniteDistance)
+         return 0 !== (this.Ig.model.nodes.flags[this.row] & oB.f.infiniteDistance)
```

#### 3811. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29321` → after: `L28254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28254) · [Before (L29321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29321)

```diff
-         this.pm.model.nodes.setInfiniteDistance(this.row, BB)
+         this.Ig.model.nodes.setInfiniteDistance(this.row, BB)
```

#### 3812. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29328` → after: `L28261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28261) · [Before (L29328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29328)

```diff
-         this.billboard = BB, this.pm.model.nodes.setBillboard(this.row, null !== (jB = nB.c[BB]) && void 0 !== jB ? jB : dB.c.none)
+         this.billboard = BB, this.Ig.model.nodes.setBillboard(this.row, null !== (IB = JB.d[BB]) && void 0 !== IB ? IB : oB.d.none)
```

#### 3813. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29334` → after: `L28267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28267) · [Before (L29334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29334)

```diff
-         if (BB === this.parentNode || this.HJ) return;
+         if (BB === this.parentNode || this.WN) return;
```

#### 3814. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29336` → after: `L28269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28269) · [Before (L29336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29336)

```diff
-         this.leaveParent(), this.parentNode = BB, BB && UB(BB) && BB.children.push(this), this.pm.model.nodes.setParent(this.row, -1), (0, nB.e)(this.pm, this, this.row), this.syncEnabled(jB)
+         this.leaveParent(), this.parentNode = BB, BB && cB(BB) && BB.children.push(this), this.Ig.model.nodes.setParent(this.row, -1), (0, JB.i)(this.Ig, this, this.row), this.syncEnabled(IB)
```

#### 3815. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29344` → after: `L28277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28277) · [Before (L29344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29344)

```diff
-         return 0 !== (this.pm.model.nodes.flags[this.row] & dB.d.enabled) && (!BB || null === this.parentNode || this.parentNode.isEnabled())
+         return 0 !== (this.Ig.model.nodes.flags[this.row] & oB.f.enabled) && (!BB || null === this.parentNode || this.parentNode.isEnabled())
```

#### 3816. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29349` → after: `L28282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28282) · [Before (L29349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29349)

```diff
-           this.pm.model.nodes.mH(this.row, BB), this.syncEnabled(jB)
+           this.Ig.model.nodes.qY(this.row, BB), this.syncEnabled(IB)
```

#### 3817. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29353` → after: `L28286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28286) · [Before (L29353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29353)

```diff
-         return this.pm.model.nodes.worldNow(this.row, this.pm.model.view, IB), QB.Matrix.FromArrayToRef(IB, 0, this.zr)
+         return this.Ig.model.nodes.worldNow(this.row, this.Ig.model.view, GB), TB.Matrix.FromArrayToRef(GB, 0, this.vz)
```

#### 3818. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29362-L29363` → after: `L28295-L28296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28295-L28296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28295-L28296) · [Before (L29362-L29363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29362-L29363)

```diff
-           IB = QB.KJ.TransformNormal(this.rowPosition.clone(), dB.clone().invert()).add(BB.scale(jB));
-         return this.position = QB.KJ.TransformNormal(IB, dB), this
+           GB = TB.rN.TransformNormal(this.rowPosition.clone(), oB.clone().invert()).add(BB.scale(IB));
+         return this.position = TB.rN.TransformNormal(GB, oB), this
```

#### 3819. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29371` → after: `L28304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28304) · [Before (L29371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29371)

```diff
-       DjB() {}
+       GZB() {}
```

#### 3820. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29374-L29375` → after: `L28307-L28308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28307-L28308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28307-L28308) · [Before (L29374-L29375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29374-L29375)

```diff
-         const zB = rB(this.pm, BB);
-         return this.pm.model.nodes.setWorldSource(zB.row, jB), zB
+         const ZB = zB(this.Ig, BB);
+         return this.Ig.model.nodes.setWorldSource(ZB.row, IB), ZB
```

#### 3821. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29387` → after: `L28320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28320) · [Before (L29387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29387)

```diff
-         const BB = new QB.KJ(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         const BB = new TB.rN(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
```

#### 3822. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29395-L29396` → after: `L28328-L28329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28328-L28329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28328-L28329) · [Before (L29395-L29396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29395-L29396)

```diff
-             } = nB.rV();
-             QB.KJ.CheckExtends(zB.minimumWorld, BB, jB), QB.KJ.CheckExtends(zB.maximumWorld, BB, jB)
+             } = JB.qm();
+             TB.rN.CheckExtends(ZB.minimumWorld, BB, IB), TB.rN.CheckExtends(ZB.maximumWorld, BB, IB)
```

#### 3823. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29409` → after: `L28342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28342) · [Before (L29409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29409)

```diff
-         return this.pm.aY()
+         return this.Ig.JR()
```

#### 3824. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29415` → after: `L28348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28348) · [Before (L29415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29415)

```diff
-         return this.HJ
+         return this.WN
```

#### 3825. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29420` → after: `L28353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28353) · [Before (L29420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29420)

```diff
-         if (!this.HJ) {
+         if (!this.WN) {
```

#### 3826. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29422` → after: `L28355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28355) · [Before (L29422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29422)

```diff
-           this.HJ = !0, (0, nB.i)(this.pm, this), this.leaveParent(), this.release(), this.pY.notify(), this.pY.clear()
+           this.WN = !0, (0, JB.m)(this.Ig, this), this.leaveParent(), this.release(), this.oR.notify(), this.oR.clear()
```

#### 3827. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29442` → after: `L28375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28375) · [Before (L29442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29442)

```diff
-       return new pB(BB, jB, BB.aY().getUniqueId())
+       return new hB(BB, IB, BB.JR().getUniqueId())
```

#### 3828. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29445` → after: `L28378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28378) · [Before (L29445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29445)

```diff
-   37655: (BB, jB, zB) => {
+   37622: (BB, IB, ZB) => {
```

#### 3829. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29449-L29451` → after: `L28381-L28384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28381-L28384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28381-L28384) · [Before (L29449-L29451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29449-L29451)

```diff
-       f: () => aB,
-       j: () => UB,
-       k: () => JB
+       h: () => kB,
+       i: () => nB,
+       l: () => cB,
+       p: () => NB
```

#### 3830. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29453` → after: `L28386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28386) · [Before (L29453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29453)

```diff
-     var QB = zB(37640);
+     var TB = ZB(37609);
```

#### 3831. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29468` → after: `L28401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28401) · [Before (L29468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29468)

```diff
-       const IB = QB.p;
+       const GB = TB.o;
```

#### 3832. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29477` → after: `L28410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28410) · [Before (L29477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29477)

```diff
-         for (let jB = 0; jB < QB.t.length; jB++) {
+         for (let IB = 0; IB < TB.p.length; IB++) {
```

#### 3833. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29479-L29480` → after: `L28412-L28413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28412-L28413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28412-L28413) · [Before (L29479-L29480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29479-L29480)

```diff
-           for (let nB = jB + 1; nB <= QB.t.length; nB++) {
-             const dB = 1 << QB.t[nB - 1];
+           for (let JB = IB + 1; JB <= TB.p.length; JB++) {
+             const oB = 1 << TB.p[JB - 1];
```

#### 3834. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29485` → after: `L28418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28418) · [Before (L29485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29485)

```diff
-               Mz: zB
+               QZ: ZB
```

#### 3835. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29502` → after: `L28435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28435) · [Before (L29502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29502)

```diff
-       if (jB === nB) return zB[0] = 0, zB[1] = BB[QB.d], 1;
+       if (IB === JB) return ZB[0] = 0, ZB[1] = BB[TB.g], 1;
```

#### 3836. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29512` → after: `L28445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28445) · [Before (L29512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29512)

```diff
-                 Mz: BB,
+                 QZ: BB,
```

#### 3837. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29517-L29518` → after: `L28450-L28451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28450-L28451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28450-L28451) · [Before (L29517-L29518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29517-L29518)

```diff
-             if ((dB.Mz & BB) === BB && QB(dB.Mz, [dB.start, dB.end]), 0 !== (dB.Mz & BB))
-               for (const jB of pB) jB.start < dB.end || 0 !== (dB.Mz & jB.Mz) || 0 === (jB.Mz & BB) || ((dB.Mz | jB.Mz) & BB) !== BB || QB(dB.Mz | jB.Mz, [dB.start, dB.end, jB.start, jB.end]);
+             if ((oB.QZ & BB) === BB && TB(oB.QZ, [oB.start, oB.end]), 0 !== (oB.QZ & BB))
+               for (const IB of hB) IB.start < oB.end || 0 !== (oB.QZ & IB.QZ) || 0 === (IB.QZ & BB) || ((oB.QZ | IB.QZ) & BB) !== BB || TB(oB.QZ | IB.QZ, [oB.start, oB.end, IB.start, IB.end]);
```

#### 3838. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29520` → after: `L28453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28453) · [Before (L29520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29520)

```diff
-           return jB = nB.filter((BB => !nB.some((jB => jB !== BB && (jB.Mz & BB.Mz) === jB.Mz && jB.windows.length <= BB.windows.length)))), rB[BB] = jB, jB
+           return IB = JB.filter((BB => !JB.some((IB => IB !== BB && (IB.QZ & BB.QZ) === IB.QZ && IB.windows.length <= BB.windows.length)))), zB[BB] = IB, IB
```

#### 3839. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29523` → after: `L28456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28456) · [Before (L29523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29523)

```diff
-         const uB = UB.Mz & ~jB & nB;
+         const kB = cB.QZ & ~IB & JB;
```

#### 3840. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29535` → after: `L28468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28468) · [Before (L29535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29535)

```diff
-   37580: (BB, jB, zB) => {
+   37533: (BB, IB, ZB) => {
```

#### 3841. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29537-L29539` → after: `L28470-L28472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28470-L28472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28470-L28472) · [Before (L29537-L29539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29537-L29539)

```diff
-       e: () => IB,
-       g: () => UB,
-       j: () => uB
+       d: () => GB,
+       h: () => cB,
+       i: () => kB
```

#### 3842. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29580` → after: `L28513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28513) · [Before (L29580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29580)

```diff
-         this.Ep = void 0, this.count = 0, this.enabled = 0, this.matrices = void 0, this.attributes = void 0, this.rowStride = void 0, this.kinds = void 0, this.RJ = void 0, this.stale = void 0, this.released = !1, this.matrixRow = new Float32Array(16), this.attributeRow = void 0 … [truncated]
+         this.ah = void 0, this.count = 0, this.enabled = 0, this.matrices = void 0, this.attributes = void 0, this.rowStride = void 0, this.kinds = void 0, this.uN = void 0, this.stale = void 0, this.released = !1, this.matrixRow = new Float32Array(16), this.attributeRow = void 0 … [truncated]
```

#### 3843. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29588` → after: `L28521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28521) · [Before (L29588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29588)

```diff
-         this.Ep = BB, this.kinds = zB, this.rowStride = IB, this.matrices = new Float32Array(16 * BB), this.attributes = IB > 0 ? new Float32Array(BB * IB) : null, this.attributeRow = new Float32Array(IB), this.RJ = new QB(BB), this.stale = new nB(BB), dB++
+         this.ah = BB, this.kinds = ZB, this.rowStride = GB, this.matrices = new Float32Array(16 * BB), this.attributes = GB > 0 ? new Float32Array(BB * GB) : null, this.attributeRow = new Float32Array(GB), this.uN = new TB(BB), this.stale = new JB(BB), oB++
```

#### 3844. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29591` → after: `L28524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28524) · [Before (L29591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29591)

```diff
-         this.RJ.grow(this.Ep, BB), this.stale.grow(BB);
+         this.uN.grow(this.ah, BB), this.stale.grow(BB);
```

#### 3845. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29595` → after: `L28528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28528) · [Before (L29595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29595)

```diff
-         zB && (this.attributes = new Float32Array(BB * this.rowStride), this.attributes.set(zB)), this.Ep = BB
+         ZB && (this.attributes = new Float32Array(BB * this.rowStride), this.attributes.set(ZB)), this.ah = BB
```

#### 3846. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29624` → after: `L28557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28557) · [Before (L29624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29624)

```diff
-   37908: (BB, jB, zB) => {
+   37869: (BB, IB, ZB) => {
```

#### 3847. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29626-L29628` → after: `L28559-L28561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28559-L28561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28559-L28561) · [Before (L29626-L29628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29626-L29628)

```diff
-       d: () => rB,
-       g: () => pB,
-       j: () => aB
+       e: () => zB,
+       f: () => hB,
+       g: () => nB
```

#### 3848. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29630-L29634` → after: `L28563-L28567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28563-L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28563-L28567) · [Before (L29630-L29634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29630-L29634)

```diff
-     var QB = zB(37911),
-       nB = zB(37279),
-       dB = zB(37547),
-       IB = zB(37283),
-       NB = zB(37291);
+     var TB = ZB(37876),
+       JB = ZB(37218),
+       oB = ZB(37490),
+       GB = ZB(37223),
+       vB = ZB(37239);
```

#### 3849. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29650` → after: `L28583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28583) · [Before (L29650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29650)

```diff
-         ticksPerAnimState: Math.max(1, jB / QB.b)
+         ticksPerAnimState: Math.max(1, IB / TB.e)
```

#### 3850. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29655` → after: `L28588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28588) · [Before (L29655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29655)

```diff
-       return `floor(${(0,IB.W)(BB,"animTick","uAnimTick")} / ${(0,IB.Ab)(BB,"uTicksPerAnimState")})`
+       return `floor(${(0,GB.X)(BB,"animTick","uAnimTick")} / ${(0,GB.Hb)(BB,"uTicksPerAnimState")})`
```

#### 3851. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29661-L29662` → after: `L28594-L28595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28594-L28595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28594-L28595) · [Before (L29661-L29662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29661-L29662)

```diff
-       defines: () => (0, nB.b)("ANIMATED"),
-       getUniforms: BB => (0, dB.b)((0, IB.ab)(BB) ? UB : uB, "vertex", BB),
+       defines: () => (0, JB.c)("ANIMATED"),
+       getUniforms: BB => (0, oB.b)((0, GB.ab)(BB) ? cB : kB, "vertex", BB),
```

#### 3852. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29664` → after: `L28597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28597) · [Before (L29664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29664)

```diff
-         BB.updateFloat("uAnimTick", (0, QB.g)(jB)), BB.updateFloat("uAnimStatesNum", this.numAnimStates), BB.updateFloat("uTicksPerAnimState", this.ticksPerAnimState)
+         BB.updateFloat("uAnimTick", (0, TB.i)(IB)), BB.updateFloat("uAnimStatesNum", this.numAnimStates), BB.updateFloat("uTicksPerAnimState", this.ticksPerAnimState)
```

#### 3853. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29668-L29669` → after: `L28601-L28602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28601-L28602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28601-L28602) · [Before (L29668-L29669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29668-L29669)

```diff
-         const zB = (0, IB.Ab)(jB, "uAnimStatesNum"),
-           QB = (0, IB.Kb)(jB, "vMainUV1");
+         const ZB = (0, GB.Hb)(IB, "uAnimStatesNum"),
+           TB = (0, GB.Sb)(IB, "vMainUV1");
```

#### 3854. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29671` → after: `L28604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28604) · [Before (L29671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29671)

```diff
-           CUSTOM_VERTEX_MAIN_END: `\n                ${(0,IB.A)(jB,"float","frameTick",pB(jB))}\n                ${(0,IB.A)(jB,"float","animTexIndex",(0,IB.hb)(jB,"frameTick",zB))}\n                ${QB}.y = (${QB}.y + animTexIndex) / ${zB};\n            `
+           CUSTOM_VERTEX_MAIN_END: `\n                ${(0,GB.C)(IB,"float","frameTick",hB(IB))}\n                ${(0,GB.C)(IB,"float","animTexIndex",(0,GB.db)(IB,"frameTick",ZB))}\n                ${TB}.y = (${TB}.y + animTexIndex) / ${ZB};\n            `
```

#### 3855. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29673` → after: `L28606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28606) · [Before (L29673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29673)

```diff
-           [(0, IB.E)(jB)]: `baseColor = ${(0,IB.mb)(jB,"diffuseSampler",(0,IB.T)(jB,"vMainUV1"))};`
+           [(0, GB.E)(IB)]: `baseColor = ${(0,GB.mb)(IB,"diffuseSampler",(0,GB.W)(IB,"vMainUV1"))};`
```

#### 3856. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29677` → after: `L28610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28610) · [Before (L29677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29677)

```diff
-     (0, NB.l)(rB)
+     (0, vB.p)(zB)
```

#### 3857. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29679` → after: `L28612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28612) · [Before (L29679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29679)

```diff
-   38096: (BB, jB, zB) => {
+   38070: (BB, IB, ZB) => {
```

#### 3858. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29681` → after: `L28614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28614) · [Before (L29681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29681)

```diff
-       e: () => UB
+       d: () => cB
```

#### 3859. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29683-L29687` → after: `L28616-L28620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28616-L28620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28616-L28620) · [Before (L29683-L29687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29683-L29687)

```diff
-     var QB = zB(37286),
-       nB = zB(37279),
-       dB = zB(37547),
-       IB = zB(37283),
-       NB = zB(37291);
+     var TB = ZB(37231),
+       JB = ZB(37218),
+       oB = ZB(37490),
+       GB = ZB(37223),
+       vB = ZB(37239);
```

#### 3860. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29696` → after: `L28629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28629) · [Before (L29696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29696)

```diff
-         defines: () => (0, nB.b)("ARMOUR"),
+         defines: () => (0, JB.c)("ARMOUR"),
```

#### 3861. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29707` → after: `L28640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28640) · [Before (L29707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29707)

```diff
-             const BB = (0, IB.Kb)(jB, "vMainUV1");
+             const BB = (0, GB.Sb)(IB, "vMainUV1");
```

#### 3862. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29709-L29710` → after: `L28642-L28643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28642-L28643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28642-L28643) · [Before (L29709-L29710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29709-L29710)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,IB.g)(jB,"aAtlasIdx1","float","highp")}\n\t\t\t\t\t${(0,IB.g)(jB,"aArmourTint","vec4","lowp")}\n\n\t\t\t\t\t${(0,QB.gb)(jB)}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${BB}.x = (${BB}.x + ${(0,IB.Gb)(jB,"aAtlasIdx1")}) / ${(0,IB.Ab)(jB,"uArmourAtlasTexNum")};\n\t\t\t\t\t${(0,IB.qb)(jB,(0,IB.Kb)(jB,"vTintAndOpacity"),`${(0,IB.Gb)(jB,"aArmourTint")}.xyz`)}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,GB.g)(IB,"aAtlasIdx1","float","highp")}\n\t\t\t\t\t${(0,GB.g)(IB,"aArmourTint","vec4","lowp")}\n\n\t\t\t\t\t${(0,TB.kb)(IB)}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${BB}.x = (${BB}.x + ${(0,GB.Pb)(IB,"aAtlasIdx1")}) / ${(0,GB.Hb)(IB,"uArmourAtlasTexNum")};\n\t\t\t\t\t${(0,GB.rb)(IB,(0,GB.Sb)(IB,"vTintAndOpacity"),`${(0,GB.Pb)(IB,"aArmourTint")}.xyz`)}\n\t\t\t\t`
```

#### 3863. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29714-L29715` → after: `L28647-L28648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28647-L28648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28647-L28648) · [Before (L29714-L29715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29714-L29715)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,QB.gb)(jB)}\n\t\t\t\t`,
-             [(0, IB.E)(jB)]: `\n\t\t\t\t\t${(0,IB.A)(jB,"vec4","col1",(0,IB.mb)(jB,"diffuseSampler",(0,IB.T)(jB,"vMainUV1")))}\n\t\t\t\t\tbaseColor = ${(0,IB.m)(jB,"vec4",`col1.rgb * ${(0,IB.T)(jB,"vTintAndOpacity")}.xyz`,"col1.a")};\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,TB.kb)(IB)}\n\t\t\t\t`,
+             [(0, GB.E)(IB)]: `\n\t\t\t\t\t${(0,GB.C)(IB,"vec4","col1",(0,GB.mb)(IB,"diffuseSampler",(0,GB.W)(IB,"vMainUV1")))}\n\t\t\t\t\tbaseColor = ${(0,GB.p)(IB,"vec4",`col1.rgb * ${(0,GB.W)(IB,"vTintAndOpacity")}.xyz`,"col1.a")};\n\t\t\t\t`
```

#### 3864. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29718` → after: `L28651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28651) · [Before (L29718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29718)

```diff
-         mJ() {
+         oN() {
```

#### 3865. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29720-L29722` → after: `L28653-L28655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28653-L28655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28653-L28655) · [Before (L29720-L29722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29720-L29722)

```diff
-             jB = (0, IB.Ab)(BB, "uArmourAtlasTexNum"),
-             zB = (0, IB.T)(BB, "vMainUV1"),
-             QB = `${zB}.x * ${jB}`;
+             IB = (0, GB.Hb)(BB, "uArmourAtlasTexNum"),
+             ZB = (0, GB.W)(BB, "vMainUV1"),
+             TB = `${ZB}.x * ${IB}`;
```

#### 3866. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29725-L29727` → after: `L28658-L28660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28658-L28660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28658-L28660) · [Before (L29725-L29727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29725-L29727)

```diff
-               cells: `vec2f(${jB}, 1.0)`,
-               layers: [`floor(${QB})`],
-               uv: `vec2f(fract(${QB}), ${zB}.y)`,
+               cells: `vec2f(${IB}, 1.0)`,
+               layers: [`floor(${TB})`],
+               uv: `vec2f(fract(${TB}), ${ZB}.y)`,
```

#### 3867. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29730` → after: `L28663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28663) · [Before (L29730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29730)

```diff
-             enchantTier: `${(0,IB.Gb)(BB,"aArmourTint")}.w`
+             enchantTier: `${(0,GB.Pb)(BB,"aArmourTint")}.w`
```

#### 3868. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29734` → after: `L28667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28667) · [Before (L29734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29734)

```diff
-     (0, NB.l)(UB)
+     (0, vB.p)(cB)
```

#### 3869. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29736` → after: `L28669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28669) · [Before (L29736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29736)

```diff
-   37915: (BB, jB, zB) => {
+   37878: (BB, IB, ZB) => {
```

#### 3870. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29738-L29740` → after: `L28671-L28673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28671-L28673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28671-L28673) · [Before (L29738-L29740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29738-L29740)

```diff
-       c: () => rB,
-       e: () => GB,
-       h: () => LB
+       b: () => zB,
+       f: () => UB,
+       g: () => WB
```

#### 3871. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29742-L29747` → after: `L28675-L28680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28675-L28680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28675-L28680) · [Before (L29742-L29747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29742-L29747)

```diff
-     var QB = zB(37286),
-       nB = zB(37279),
-       dB = zB(37547),
-       IB = zB(37283),
-       NB = zB(37911),
-       uB = zB(37291);
+     var TB = ZB(37231),
+       JB = ZB(37218),
+       oB = ZB(37490),
+       GB = ZB(37223),
+       vB = ZB(37876),
+       kB = ZB(37239);
```

#### 3872. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29752` → after: `L28685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28685) · [Before (L29752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29752)

```diff
-       const jB = (0, IB.m)(BB, "vec3", (0, IB.Gb)(BB, "texAtlasIndices")),
+       const IB = (0, GB.p)(BB, "vec3", (0, GB.Pb)(BB, "texAtlasIndices")),
```

#### 3873. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29755-L29756` → after: `L28688-L28689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28688-L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28688-L28689) · [Before (L29755-L29756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29755-L29756)

```diff
-           const dB = (0, IB.m)(BB, "vec3", ...QB);
-           return (0, IB.m)(BB, "vec3", (0, IB.K)(BB, `equal(${jB}, ${dB})`, `${jB} == ${dB}`))
+           const oB = (0, GB.p)(BB, "vec3", ...TB);
+           return (0, GB.p)(BB, "vec3", (0, GB.J)(BB, `equal(${IB}, ${oB})`, `${IB} == ${oB}`))
```

#### 3874. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29758-L29759` → after: `L28691-L28692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28691-L28692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28691-L28692) · [Before (L29758-L29759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29758-L29759)

```diff
-         QB = [`dot(${(0,IB.Gb)(BB,"aAtlasIdxFaces012")}, ${zB("0.0","1.0","2.0")})`, `dot(${(0,IB.Gb)(BB,"aAtlasIdxFaces345")}, ${zB("3.0","4.0","5.0")})`].join(" + ");
-       return `\n                    #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                        ${(0,IB.A)(BB,"float","atlasIdxIn",QB,"highp")}\n                    #else\n                        ${(0,IB.A)(BB,"float","atlasIdxIn",(0,IB.Gb)(BB,"texAtlasIndices"),"highp")}\n          … [truncated]
+         TB = [`dot(${(0,GB.Pb)(BB,"aAtlasIdxFaces012")}, ${ZB("0.0","1.0","2.0")})`, `dot(${(0,GB.Pb)(BB,"aAtlasIdxFaces345")}, ${ZB("3.0","4.0","5.0")})`].join(" + ");
+       return `\n                    #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                        ${(0,GB.C)(BB,"float","atlasIdxIn",TB,"highp")}\n                    #else\n                        ${(0,GB.C)(BB,"float","atlasIdxIn",(0,GB.Pb)(BB,"texAtlasIndices"),"highp")}\n          … [truncated]
```

#### 3875. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29765-L29766` → after: `L28698-L28699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28698-L28699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28698-L28699) · [Before (L29765-L29766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29765-L29766)

```diff
-         layers: null !== (jB = BB.imagesPerAtlas[0]) && void 0 !== jB ? jB : aB,
-         width: null !== (zB = BB.atlasTexelWidth) && void 0 !== zB ? zB : UB
+         layers: null !== (IB = BB.imagesPerAtlas[0]) && void 0 !== IB ? IB : nB,
+         width: null !== (ZB = BB.atlasTexelWidth) && void 0 !== ZB ? ZB : cB
```

#### 3876. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29781-L29783` → after: `L28714-L28716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28714-L28716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28714-L28716) · [Before (L29781-L29783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29781-L29783)

```diff
-       const nB = (0, QB.jb)(null !== (zB = BB.atlasTexelWidth) && void 0 !== zB ? zB : UB),
-         dB = (0, IB.T)(jB, "vDiffuseUV");
-       return `\n                        ${(0,IB.A)(jB,"vec2","atlasTexelUV",`${dB} * ${nB}`)}\n                        ${(0,IB.A)(jB,"vec2","atlasDdx",(0,IB.n)(jB,"atlasTexelUV"))}\n                        ${(0,IB.A)(jB,"vec2","atlasDdy",(0,IB.r)(jB,"atlasTexelUV"))}\n            … [truncated]
+       const JB = (0, TB.nb)(null !== (ZB = BB.atlasTexelWidth) && void 0 !== ZB ? ZB : cB),
+         oB = (0, GB.W)(IB, "vDiffuseUV");
+       return `\n                        ${(0,GB.C)(IB,"vec2","atlasTexelUV",`${oB} * ${JB}`)}\n                        ${(0,GB.C)(IB,"vec2","atlasDdx",(0,GB.s)(IB,"atlasTexelUV"))}\n                        ${(0,GB.C)(IB,"vec2","atlasDdy",(0,GB.t)(IB,"atlasTexelUV"))}\n            … [truncated]
```

#### 3877. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29787-L29788` → after: `L28720-L28721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28720-L28721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28720-L28721) · [Before (L29787-L29788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29787-L29788)

```diff
-       const NB = `textureAtlas${zB}`,
-         uB = (0, IB.T)(jB, "vDiffuseUV"),
+       const vB = `textureAtlas${ZB}`,
+         kB = (0, GB.W)(IB, "vDiffuseUV"),
```

#### 3878. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29790-L29792` → after: `L28723-L28725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28723-L28725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28723-L28725) · [Before (L29790-L29792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29790-L29792)

```diff
-         aB = zB > 0 ? `${dB} - ${QB[0].toFixed(1)} * ${zB.toFixed(1)}` : dB;
-       if (BB.useWebGL2) return (0, IB.kb)(jB, NB, uB, aB, UB);
-       const pB = BB.greedyMeshed ? `vec2(${uB}.x, (fract(${uB}.y) + floor(${aB} + 0.5)) / ${QB[zB].toFixed(1)})` : nB > 1 ? `${uB} - vec2(0.0, ${zB.toFixed(1)})` : uB;
+         nB = ZB > 0 ? `${oB} - ${TB[0].toFixed(1)} * ${ZB.toFixed(1)}` : oB;
+       if (BB.useWebGL2) return (0, GB.jb)(IB, vB, kB, nB, cB);
+       const hB = BB.greedyMeshed ? `vec2(${kB}.x, (fract(${kB}.y) + floor(${nB} + 0.5)) / ${TB[ZB].toFixed(1)})` : JB > 1 ? `${kB} - vec2(0.0, ${ZB.toFixed(1)})` : kB;
```

#### 3879. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29798` → after: `L28731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28731) · [Before (L29798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29798)

```diff
-       return 1 === nB ? `baseColor = ${yB(BB,jB,0,QB,1,zB)};` : QB.map(((dB, IB) => `\n                        if (${zB} < ${QB[0]*(IB+1)-.5}) {\n                            baseColor = ${yB(BB,jB,IB,QB,nB,zB)};\n                        }${IB+1<nB?" else ":""}`)).join("")
+       return 1 === JB ? `baseColor = ${qB(BB,IB,0,TB,1,ZB)};` : TB.map(((oB, GB) => `\n                        if (${ZB} < ${TB[0]*(GB+1)-.5}) {\n                            baseColor = ${qB(BB,IB,GB,TB,JB,ZB)};\n                        }${GB+1<JB?" else ":""}`)).join("")
```

#### 3880. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29802` → after: `L28735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28735) · [Before (L29802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29802)

```diff
-       return `\n                    ${(0,IB.A)(BB,"float","animParamIndex","3.0 * min(numAnimTextures, floor(atlasIdxIn))")}\n                    ${(0,IB.A)(BB,"float","animStateMask",jB((0,IB.wb)(BB,"animParamIndex")))}\n                    ${(0,IB.A)(BB,"float","animTexIndexSta … [truncated]
+       return `\n                    ${(0,GB.C)(BB,"float","animParamIndex","3.0 * min(numAnimTextures, floor(atlasIdxIn))")}\n                    ${(0,GB.C)(BB,"float","animStateMask",IB((0,GB.Cb)(BB,"animParamIndex")))}\n                    ${(0,GB.C)(BB,"float","animTexIndexSta … [truncated]
```

#### 3881. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29809` → after: `L28742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28742) · [Before (L29809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29809)

```diff
-         ...(0, nB.b)("ATLAS_TEXTURE"),
+         ...(0, JB.c)("ATLAS_TEXTURE"),
```

#### 3882. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29817` → after: `L28750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28750) · [Before (L29817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29817)

```diff
-         for (let jB = 0; jB < this.textureAtlases.length; jB++) BB.push(`textureAtlas${jB}`)
+         for (let IB = 0; IB < this.textureAtlases.length; IB++) BB.push(`textureAtlas${IB}`)
```

#### 3883. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29839-L29840` → after: `L28772-L28773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28772-L28773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28772-L28773) · [Before (L29839-L29840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29839-L29840)

```diff
-           if (this.textureAtlases[QB]) BB.setTexture(`textureAtlas${QB}`, this.textureAtlases[QB]);
-           else null === (zB = BB.expectTexture) || void 0 === zB || zB.call(BB, `textureAtlas${QB}`)
+           if (this.textureAtlases[TB]) BB.setTexture(`textureAtlas${TB}`, this.textureAtlases[TB]);
+           else null === (ZB = BB.expectTexture) || void 0 === ZB || ZB.call(BB, `textureAtlas${TB}`)
```

#### 3884. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29842` → after: `L28775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28775) · [Before (L29842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29842)

```diff
-         this.animDataPerTex && (this.animData.x = (0, NB.g)(jB), BB.updateVector3("uAnimData", this.animData))
+         this.animDataPerTex && (this.animData.x = (0, vB.i)(IB), BB.updateVector3("uAnimData", this.animData))
```

#### 3885. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29851` → after: `L28784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28784) · [Before (L29851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29851)

```diff
-             return null !== (zB = this.imagesPerAtlas[jB]) && void 0 !== zB ? zB : aB
+             return null !== (ZB = this.imagesPerAtlas[IB]) && void 0 !== ZB ? ZB : nB
```

#### 3886. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29853-L29856` → after: `L28786-L28789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28786-L28789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28786-L28789) · [Before (L29853-L29856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29853-L29856)

```diff
-           nB = zB.map(((BB, zB) => (0, IB.ub)(jB, `textureAtlas${zB}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
-           dB = (0, IB.Ab)(jB, "uAnimData"),
-           NB = (0, IB.Ab)(jB, "uAnimDataPerTex"),
-           uB = (0, IB.h)(jB),
+           JB = ZB.map(((BB, ZB) => (0, GB.yb)(IB, `textureAtlas${ZB}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
+           oB = (0, GB.Hb)(IB, "uAnimData"),
+           vB = (0, GB.Hb)(IB, "uAnimDataPerTex"),
+           kB = (0, GB.k)(IB),
```

#### 3887. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29858-L29859` → after: `L28791-L28792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28791-L28792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28791-L28792) · [Before (L29858-L29859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29858-L29859)

```diff
-             const jB = (0, IB.Bb)(BB, "texAtlasIndex", "float", "mediump");
-             return (0, IB.ab)(BB) ? jB : `#ifdef WEBGL2\nflat ${(0,IB.Bb)(BB,"texAtlasIndex","float","highp")}\n#else\n${jB}\n#endif`
+             const IB = (0, GB.Kb)(BB, "texAtlasIndex", "float", "mediump");
+             return (0, GB.ab)(BB) ? IB : `#ifdef WEBGL2\nflat ${(0,GB.Kb)(BB,"texAtlasIndex","float","highp")}\n#else\n${IB}\n#endif`
```

#### 3888. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29861` → after: `L28794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28794) · [Before (L29861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29861)

```diff
-           rB = (0, IB.T)(jB, "texAtlasIndex");
+           zB = (0, GB.W)(IB, "texAtlasIndex");
```

#### 3889. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29864-L29865` → after: `L28797-L28798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28797-L28798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28797-L28798) · [Before (L29864-L29865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29864-L29865)

```diff
-           CUSTOM_VERTEX_MAIN_BEGIN: pB(jB) + (this.animDataPerTex ? `\n                    ${(0,IB.A)(jB,"float","animTick",(0,IB.W)(jB,"animTick",`${dB}.x`))}\n                    ${(0,IB.A)(jB,"float","animTickStride",`${dB}.y`)}\n                    ${(0,IB.A)(jB,"float","numA … [truncated]
-           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,IB.ab)(jB)?"":nB}\n                ${(0,IB.g)(jB,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,IB.g)(jB,"aAtlasIdxFaces012","vec3","highp")}\n           … [truncated]
+           CUSTOM_VERTEX_MAIN_BEGIN: hB(IB) + (this.animDataPerTex ? `\n                    ${(0,GB.C)(IB,"float","animTick",(0,GB.X)(IB,"animTick",`${oB}.x`))}\n                    ${(0,GB.C)(IB,"float","animTickStride",`${oB}.y`)}\n                    ${(0,GB.C)(IB,"float","numA … [truncated]
+           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,GB.ab)(IB)?"":JB}\n                ${(0,GB.g)(IB,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,GB.g)(IB,"aAtlasIdxFaces012","vec3","highp")}\n           … [truncated]
```

#### 3890. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29868-L29869` → after: `L28801-L28802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28801-L28802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28801-L28802) · [Before (L29868-L29869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29868-L29869)

```diff
-           [(0, IB.E)(jB)]: `${mB(this,jB)}${kB(this,jB,rB,QB)}`,
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${nB}\n                ${UB}\n            `
+           [(0, GB.E)(IB)]: `${gB(this,IB)}${yB(this,IB,zB,TB)}`,
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${JB}\n                ${cB}\n            `
```

#### 3891. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29873` → after: `L28806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28806) · [Before (L29873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29873)

```diff
-     (0, uB.l)(LB)
+     (0, kB.p)(WB)
```

#### 3892. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29875` → after: `L28808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28808) · [Before (L29875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29875)

```diff
-   37936: (BB, jB, zB) => {
+   37901: (BB, IB, ZB) => {
```

#### 3893. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29877-L29878` → after: `L28810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28810) · [Before (L29877-L29878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29877-L29878)

```diff
-       c: () => yB,
-       d: () => kB,
+       b: () => qB,
```

#### 3894. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29880` → after: `L28812-L28813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28812-L28813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28812-L28813) · [Before (L29880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29880)

```diff
-       g: () => pB
+       h: () => gB,
+       l: () => hB
```

#### 3895. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29882-L29887` → after: `L28815-L28820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28815-L28820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28815-L28820) · [Before (L29882-L29887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29882-L29887)

```diff
-     var QB = zB(37286),
-       nB = zB(37279),
-       dB = zB(37547),
-       IB = zB(37283),
-       NB = zB(37291),
-       uB = zB(37389);
+     var TB = ZB(37231),
+       JB = ZB(37218),
+       oB = ZB(37490),
+       GB = ZB(37223),
+       vB = ZB(37239),
+       kB = ZB(37321);
```

#### 3896. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29907-L29909` → after: `L28840-L28842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28840-L28842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28840-L28842) · [Before (L29907-L29909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29907-L29909)

```diff
-       const nB = (jB, zB) => (0, IB.A)(BB, "float", jB, zB),
-         dB = (jB, zB) => (0, IB.A)(BB, "vec3", jB, zB);
-       return `\n\t\t${dB("localPos",`rotationY(${jB}.w) * ${zB}.xyz`)}\n\t\t${nB("tickVal",`${zB}.w / 1000.0`)}\n\t\t${nB("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${nB("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${nB("totalMix","mix1 * 0.7 … [truncated]
+       const JB = (IB, ZB) => (0, GB.C)(BB, "float", IB, ZB),
+         oB = (IB, ZB) => (0, GB.C)(BB, "vec3", IB, ZB);
+       return `\n\t\t${oB("localPos",`rotationY(${IB}.w) * ${ZB}.xyz`)}\n\t\t${JB("tickVal",`${ZB}.w / 1000.0`)}\n\t\t${JB("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${JB("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${JB("totalMix","mix1 * 0.7 … [truncated]
```

#### 3897. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29913-L29915` → after: `L28846-L28848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28846-L28848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28846-L28848) · [Before (L29913-L29915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29913-L29915)

```diff
-       const jB = (0, IB.T)(BB, "vEnchantRgbAndRotY"),
-         zB = (0, IB.T)(BB, "vPositionAndAnimTick");
-       return `\n\t\t\n\t\tif (${sB(jB)}) {\n\t\t\t${JB(BB,jB,zB,"baseColor.xyz")}\n\t\t\t${(0,IB.qb)(BB,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
+       const IB = (0, GB.W)(BB, "vEnchantRgbAndRotY"),
+         ZB = (0, GB.W)(BB, "vPositionAndAnimTick");
+       return `\n\t\t\n\t\tif (${FB(IB)}) {\n\t\t\t${NB(BB,IB,ZB,"baseColor.xyz")}\n\t\t\t${(0,GB.rb)(BB,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
```

#### 3898. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29919` → after: `L28852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28852) · [Before (L29919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29919)

```diff
-       return `fn ${BB}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${sB("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${JB(IB.c.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
+       return `fn ${BB}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${FB("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${NB(GB.c.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
```

#### 3899. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29926` → after: `L28859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28859) · [Before (L29926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29926)

```diff
-         ...(0, nB.b)("ENCHANTMENT"),
+         ...(0, JB.c)("ENCHANTMENT"),
```

#### 3900. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29937` → after: `L28870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28870) · [Before (L29937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29937)

```diff
-         if (!aB.Lm()) {
+         if (!nB.kg()) {
```

#### 3901. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29947-L29951` → after: `L28880-L28884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28880-L28884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28880-L28884) · [Before (L29947-L29951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29947-L29951)

```diff
-           const BB = (0, IB.W)(jB, "timeMs", "uAnimTick"),
-             zB = (0, IB.Gb)(jB, "aEnchantmentSpeed"),
-             QB = (0, IB.Gb)(jB, "aEnchantmentColour"),
-             nB = (0, IB.Kb)(jB, "vEnchantRgbAndRotY"),
-             dB = (0, IB.Kb)(jB, "vPositionAndAnimTick");
+           const BB = (0, GB.X)(IB, "timeMs", "uAnimTick"),
+             ZB = (0, GB.Pb)(IB, "aEnchantmentSpeed"),
+             TB = (0, GB.Pb)(IB, "aEnchantmentColour"),
+             JB = (0, GB.Sb)(IB, "vEnchantRgbAndRotY"),
+             oB = (0, GB.Sb)(IB, "vPositionAndAnimTick");
```

#### 3902. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29953-L29954` → after: `L28886-L28887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28886-L28887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28886-L28887) · [Before (L29953-L29954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29953-L29954)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,IB.g)(jB,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,IB.g)(jB,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,IB.g)(jB,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,IB. … [truncated]
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${nB} = ${(0,IB.m)(jB,"vec4",QB,`${(0,IB.Gb)(jB,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,IB.qb)(jB,dB,`worldPos.xyz - ${(0,IB.Gb)(jB,"aPosition")} + ${(0,IB.Gb)(jB,"aOffset")}`) … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,GB.g)(IB,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,GB.g)(IB,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,GB.g)(IB,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,GB. … [truncated]
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${JB} = ${(0,GB.p)(IB,"vec4",TB,`${(0,GB.Pb)(IB,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,GB.rb)(IB,oB,`worldPos.xyz - ${(0,GB.Pb)(IB,"aPosition")} + ${(0,GB.Pb)(IB,"aOffset")}`) … [truncated]
```

#### 3903. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29958-L29960` → after: `L28891-L28893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28891-L28893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28891-L28893) · [Before (L29958-L29960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29958-L29960)

```diff
-           const BB = (BB, zB) => (0, IB.A)(jB, "float", BB, zB),
-             zB = (BB, zB) => (0, IB.A)(jB, "vec3", BB, zB),
-             nB = (BB, zB) => (0, IB.A)(jB, "vec4", BB, zB);
+           const BB = (BB, ZB) => (0, GB.C)(IB, "float", BB, ZB),
+             ZB = (BB, ZB) => (0, GB.C)(IB, "vec3", BB, ZB),
+             JB = (BB, ZB) => (0, GB.C)(IB, "vec4", BB, ZB);
```

#### 3904. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29962` → after: `L28895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28895) · [Before (L29962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29962)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,IB.Bb)(jB,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,IB.Bb)(jB,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,IB.s)(jB,"float","GOLDEN_RATIO",(0,QB.jb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,IB.s)(jB," … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,GB.Kb)(IB,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,GB.Kb)(IB,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,GB.x)(IB,"float","GOLDEN_RATIO",(0,TB.nb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,GB.x)(IB," … [truncated]
```

#### 3905. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29967` → after: `L28900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28900) · [Before (L29967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29967)

```diff
-               (0, IB.sb)(jB, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
+               (0, GB.ub)(IB, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
```

#### 3906. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29969` → after: `L28902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28902) · [Before (L29969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29969)

```diff
-               zB("Pi", `floor(P + dot(P, ${(0,IB.m)(jB,"vec3","SKEWFACTOR")}))`)
+               ZB("Pi", `floor(P + dot(P, ${(0,GB.p)(IB,"vec3","SKEWFACTOR")}))`)
```

#### 3907. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29972` → after: `L28905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28905) · [Before (L29972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29972)

```diff
-               zB("x0", `P - Pi + dot(Pi, ${(0,IB.m)(jB,"vec3","UNSKEWFACTOR")})`)
+               ZB("x0", `P - Pi + dot(Pi, ${(0,GB.p)(IB,"vec3","UNSKEWFACTOR")})`)
```

#### 3908. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29996` → after: `L28929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28929) · [Before (L29996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29996)

```diff
-               nB("v1234_x", (0, IB.m)(jB, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
+               JB("v1234_x", (0, GB.p)(IB, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
```

#### 3909. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29999` → after: `L28932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28932) · [Before (L29999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L29999)

```diff
-               nB("v1234_y", (0, IB.m)(jB, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
+               JB("v1234_y", (0, GB.p)(IB, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
```

#### 3910. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30002` → after: `L28935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28935) · [Before (L30002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30002)

```diff
-               nB("v1234_z", (0, IB.m)(jB, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
+               JB("v1234_z", (0, GB.p)(IB, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
```

#### 3911. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30005` → after: `L28938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28938) · [Before (L30005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30005)

```diff
-               zB("Pi_inc1", `step(Pi, ${(0,IB.m)(jB,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
+               ZB("Pi_inc1", `step(Pi, ${(0,GB.p)(IB,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
```

#### 3912. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30008` → after: `L28941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28941) · [Before (L30008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30008)

```diff
-               nB("Pt", `${(0,IB.m)(jB,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,IB.m)(jB,"vec2","50.0","161.0")}.xyxy`)
+               JB("Pt", `${(0,GB.p)(IB,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,GB.p)(IB,"vec2","50.0","161.0")}.xyxy`)
```

#### 3913. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30011` → after: `L28944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28944) · [Before (L30011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30011)

```diff
-               nB("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,IB.m)(jB,"vec4","Pi_1.xy","Pi_2.xy")})`)
+               JB("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,GB.p)(IB,"vec4","Pi_1.xy","Pi_2.xy")})`)
```

#### 3914. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30014` → after: `L28947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28947) · [Before (L30014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30014)

```diff
-               (0, IB.m)(jB, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
+               (0, GB.p)(IB, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
```

#### 3915. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30016` → after: `L28949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28949) · [Before (L30016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30016)

```diff
-               (0, IB.m)(jB, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
+               (0, GB.p)(IB, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
```

#### 3916. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30018` → after: `L28951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28951) · [Before (L30018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30018)

```diff
-               (0, IB.s)(jB, "vec3", "SOMELARGEFLOATS", (0, IB.m)(jB, "vec3", "635.298681", "682.357502", "668.926525"))
+               (0, GB.x)(IB, "vec3", "SOMELARGEFLOATS", (0, GB.p)(IB, "vec3", "635.298681", "682.357502", "668.926525"))
```

#### 3917. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30021` → after: `L28954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28954) · [Before (L30021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30021)

```diff
-               (0, IB.s)(jB, "vec3", "ZINC", (0, IB.m)(jB, "vec3", "48.500388", "65.294118", "63.934599"))
+               (0, GB.x)(IB, "vec3", "ZINC", (0, GB.p)(IB, "vec3", "48.500388", "65.294118", "63.934599"))
```

#### 3918. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30030` → after: `L28963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28963) · [Before (L30030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30030)

```diff
-               (0, IB.sb)(jB, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
+               (0, GB.ub)(IB, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
```

#### 3919. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30032` → after: `L28965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28965) · [Before (L30032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30032)

```diff
-               (0, IB.sb)(jB, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
+               (0, GB.ub)(IB, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
```

#### 3920. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30034` → after: `L28967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28967) · [Before (L30034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30034)

```diff
-               nB("hash_0", `fract( Pt * ${(0,IB.m)(jB,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
+               JB("hash_0", `fract( Pt * ${(0,GB.p)(IB,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
```

#### 3921. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30037` → after: `L28970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28970) · [Before (L30037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30037)

```diff
-               nB("hash_1", `fract( Pt * ${(0,IB.m)(jB,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
+               JB("hash_1", `fract( Pt * ${(0,GB.p)(IB,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
```

#### 3922. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30040` → after: `L28973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28973) · [Before (L30040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30040)

```diff
-               nB("hash_2", `fract( Pt * ${(0,IB.m)(jB,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
+               JB("hash_2", `fract( Pt * ${(0,GB.p)(IB,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
```

#### 3923. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30043` → after: `L28976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28976) · [Before (L30043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30043)

```diff
-               nB("grad_results", `${(0,IB.Z)(jB,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
+               JB("grad_results", `${(0,GB._)(IB,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
```

#### 3924. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30046` → after: `L28979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28979) · [Before (L30046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30046)

```diff
-               (0, IB.s)(jB, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
+               (0, GB.x)(IB, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
```

#### 3925. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30052-L30053` → after: `L28985-L28986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28985-L28986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28985-L28986) · [Before (L30052-L30053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30052-L30053)

```diff
-               (0, IB.m)(jB, "vec4", "0.0")
-             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,IB.w)(jB,"mat3","rotationY",[{name:"y",type:" … [truncated]
+               (0, GB.p)(IB, "vec4", "0.0")
+             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,GB.y)(IB,"mat3","rotationY",[{name:"y",type:" … [truncated]
```

#### 3926. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30055-L30056` → after: `L28988-L28989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28988-L28989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28988-L28989) · [Before (L30055-L30056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30055-L30056)

```diff
-               (0, IB.m)(jB, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
-             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,IB.w)(jB,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
+               (0, GB.p)(IB, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
+             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,GB.y)(IB,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
```

#### 3927. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30060` → after: `L28993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L28993) · [Before (L30060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30060)

```diff
-             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,IB.w)(jB,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
+             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,GB.y)(IB,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
```

#### 3928. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30068` → after: `L29001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29001) · [Before (L30068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30068)

```diff
-               BB("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,IB.m)(jB,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,IB.m)(jB,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
+               BB("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,GB.p)(IB,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,GB.p)(IB,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
```

#### 3929. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30071` → after: `L29004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29004) · [Before (L30071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30071)

```diff
-               BB("sawtooth", (0, IB.hb)(jB, "intersection - loopedTickVal", "1.0"))
+               BB("sawtooth", (0, GB.db)(IB, "intersection - loopedTickVal", "1.0"))
```

#### 3930. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30074` → after: `L29007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29007) · [Before (L30074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30074)

```diff
-               zB("noisePos", `localPos * 4.0 - ${(0,IB.m)(jB,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
+               ZB("noisePos", `localPos * 4.0 - ${(0,GB.p)(IB,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
```

#### 3931. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30085` → after: `L29018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29018) · [Before (L30085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30085)

```diff
-             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,uB.d)(jB,"enchantment")}\n\t\t\t\t`,
+             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,kB.b)(IB,"enchantment")}\n\t\t\t\t`,
```

#### 3932. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30092` → after: `L29025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29025) · [Before (L30092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30092)

```diff
-     (0, NB.l)(kB)
+     (0, vB.p)(yB)
```

#### 3933. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30094` → after: `L29027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29027) · [Before (L30094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30094)

```diff
-   37528: (BB, jB, zB) => {
+   37469: (BB, IB, ZB) => {
```

#### 3934. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30096` → after: `L29029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29029) · [Before (L30096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30096)

```diff
-       b: () => pB,
+       c: () => hB,
```

#### 3935. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30098-L30099` → after: `L29031-L29032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29031-L29032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29031-L29032) · [Before (L30098-L30099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30098-L30099)

```diff
-       h: () => JB,
-       k: () => rB
+       f: () => NB,
+       h: () => zB
```

#### 3936. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30101-L30108` → after: `L29034-L29041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29034-L29041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29034-L29041) · [Before (L30101-L30108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30101-L30108)

```diff
-     var QB = zB(37286),
-       nB = zB(37534),
-       dB = zB(37536),
-       IB = zB(37279),
-       NB = zB(37547),
-       uB = zB(37283),
-       UB = zB(37300),
-       aB = zB(37291);
+     var TB = ZB(37231),
+       JB = ZB(37477),
+       oB = ZB(37482),
+       GB = ZB(37218),
+       vB = ZB(37490),
+       kB = ZB(37223),
+       cB = ZB(37243),
+       nB = ZB(37239);
```

#### 3937. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30111` → after: `L29044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29044) · [Before (L30111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30111)

```diff
-       const QB = (0, UB.s)(BB, mB, function(BB, jB, zB, QB) {
+       const TB = (0, cB.r)(BB, gB, function(BB, IB, ZB, TB) {
```

#### 3938. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30113-L30114` → after: `L29046-L29047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29046-L29047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29046-L29047) · [Before (L30113-L30114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30113-L30114)

```diff
-           pm: BB,
-           uniformWriter: new dB.e(BB),
+           Ig: BB,
+           uniformWriter: new oB.h(BB),
```

#### 3939. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30127` → after: `L29060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29060) · [Before (L30127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30127)

```diff
-       (0, QB.X)(zB.x, zB.y, zB.z, zB.w, jB) && (zB.x = jB[0], zB.y = jB[1], zB.z = jB[2], zB.w = jB[3], BB.uniformLightVersion++)
+       (0, TB.U)(ZB.x, ZB.y, ZB.z, ZB.w, IB) && (ZB.x = IB[0], ZB.y = IB[1], ZB.z = IB[2], ZB.w = IB[3], BB.uniformLightVersion++)
```

#### 3940. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30139` → after: `L29072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29072) · [Before (L30139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30139)

```diff
-         ...(0, IB.b)("ENTITY_LIGHT"),
+         ...(0, GB.c)("ENTITY_LIGHT"),
```

#### 3941. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30146` → after: `L29079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29079) · [Before (L30146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30146)

```diff
-         (0, nB.b)(BB, this.pm.Rm);
+         (0, JB.c)(BB, this.Ig.Xg);
```

#### 3942. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30148` → after: `L29081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29081) · [Before (L30148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30148)

```diff
-         QB ? (0, aB.e)(BB, QB) : sB.disableUnusedSpecularTerm(BB, dB);
+         TB ? (0, nB.g)(BB, TB) : FB.disableUnusedSpecularTerm(BB, oB);
```

#### 3943. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30153` → after: `L29086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29086) · [Before (L30153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30153)

```diff
-         return (0, NB.b)(this.uniformLevels ? [...dB.c, {
+         return (0, vB.b)(this.uniformLevels ? [...oB.f, {
```

#### 3944. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30156` → after: `L29089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29089) · [Before (L30156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30156)

```diff
-         }] : dB.c, "both", BB)
+         }] : oB.f, "both", BB)
```

#### 3945. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30162` → after: `L29095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29095) · [Before (L30162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30162)

```diff
-         return (0, dB.l)(this.pm) + this.uniformLightVersion
+         return (0, oB.q)(this.Ig) + this.uniformLightVersion
```

#### 3946. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30165` → after: `L29098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29098) · [Before (L30165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30165)

```diff
-         this.pm.Rm && !this.uniformLevels && BB.push("aLightLevels")
+         this.Ig.Xg && !this.uniformLevels && BB.push("aLightLevels")
```

#### 3947. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30169` → after: `L29102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29102) · [Before (L30169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30169)

```diff
-           const BB = this.uniformLevels ? (0, uB.Ab)(jB, "uEntityLightLevels") : (0, uB.Gb)(jB, "aLightLevels");
+           const BB = this.uniformLevels ? (0, kB.Hb)(IB, "uEntityLightLevels") : (0, kB.Pb)(IB, "aLightLevels");
```

#### 3948. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30171-L30172` → after: `L29104-L29105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29104-L29105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29104-L29105) · [Before (L30171-L30172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30171-L30172)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,uB.g)(jB,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,QB.O)(jB)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,QB.K)(jB,BB)}\n\t\t\t\t\t\t${(0,uB.A)(jB,"vec3","blockLightContrib",(0,QB.n)(jB,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,uB.A)(jB,"vec3","skyContrib",`mix(${(0,uB.Ab)(jB,"uAmbientL … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,kB.g)(IB,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,TB.J)(IB)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,TB.G)(IB,BB)}\n\t\t\t\t\t\t${(0,kB.C)(IB,"vec3","blockLightContrib",(0,TB.k)(IB,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,kB.C)(IB,"vec3","skyContrib",`mix(${(0,kB.Hb)(IB,"uAmbientL … [truncated]
```

#### 3949. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30176-L30177` → after: `L29109-L29110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29109-L29110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29109-L29110) · [Before (L30176-L30177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30176-L30177)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,QB.O)(jB)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, QB.J)(jB)
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,TB.J)(IB)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, TB.E)(IB)
```

#### 3950. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30181` → after: `L29114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29114) · [Before (L30181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30181)

```diff
-     (0, aB.l)(mB)
+     (0, nB.p)(gB)
```

#### 3951. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30183` → after: `L29116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29116) · [Before (L30183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30183)

```diff
-   37291: (BB, jB, zB) => {
+   37239: (BB, IB, ZB) => {
```

#### 3952. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30189-L30190` → after: `L29122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29122) · [Before (L30189-L30190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30189-L30190)

```diff
-       d: () => IB,
-       e: () => QB,
+       c: () => GB,
```

#### 3953. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30192-L30193` → after: `L29124-L29126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29124-L29126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29124-L29126) · [Before (L30192-L30193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30192-L30193)

```diff
-       i: () => UB,
-       l: () => uB
+       h: () => oB,
+       l: () => cB,
+       p: () => kB
```

#### 3954. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30226` → after: `L29159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29159) · [Before (L30226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30226)

```diff
-   37389: (BB, jB, zB) => {
+   37321: (BB, IB, ZB) => {
```

#### 3955. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30228` → after: `L29161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29161) · [Before (L30228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30228)

```diff
-       d: () => nB
+       b: () => JB
```

#### 3956. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30230` → after: `L29163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29163) · [Before (L30230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30230)

```diff
-     var QB = zB(37283);
+     var TB = ZB(37223);
```

#### 3957. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30233` → after: `L29166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29166) · [Before (L30233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30233)

```diff
-       return `\n\t\t${(0,QB.w)(BB,"vec3",`${jB}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
+       return `\n\t\t${(0,TB.y)(BB,"vec3",`${IB}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
```

#### 3958. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30235` → after: `L29168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29168) · [Before (L30235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30235)

```diff
-         (0, QB.A)(BB, "vec4", "K", (0, QB.m)(BB, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
+         (0, TB.C)(BB, "vec4", "K", (0, TB.p)(BB, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
```

#### 3959. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30238` → after: `L29171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29171) · [Before (L30238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30238)

```diff
-         (0, QB.A)(BB, "vec4", "p", `mix(${(0,QB.m)(BB,"vec4","c.bg","K.wz")}, ${(0,QB.m)(BB,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
+         (0, TB.C)(BB, "vec4", "p", `mix(${(0,TB.p)(BB,"vec4","c.bg","K.wz")}, ${(0,TB.p)(BB,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
```

#### 3960. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30241` → after: `L29174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29174) · [Before (L30241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30241)

```diff
-         (0, QB.A)(BB, "vec4", "q", `mix(${(0,QB.m)(BB,"vec4","p.xyw","c.r")}, ${(0,QB.m)(BB,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
+         (0, TB.C)(BB, "vec4", "q", `mix(${(0,TB.p)(BB,"vec4","p.xyw","c.r")}, ${(0,TB.p)(BB,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
```

#### 3961. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30244` → after: `L29177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29177) · [Before (L30244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30244)

```diff
-         (0, QB.A)(BB, "float", "d", "q.x - min(q.w, q.y)")
+         (0, TB.C)(BB, "float", "d", "q.x - min(q.w, q.y)")
```

#### 3962. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30247` → after: `L29180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29180) · [Before (L30247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30247)

```diff
-         (0, QB.A)(BB, "float", "e", "1.0e-10")
+         (0, TB.C)(BB, "float", "e", "1.0e-10")
```

#### 3963. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30250` → after: `L29183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29183) · [Before (L30250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30250)

```diff
-         (0, QB.m)(BB, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
+         (0, TB.p)(BB, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
```

#### 3964. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30252` → after: `L29185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29185) · [Before (L30252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30252)

```diff
-       n\ t\ t`)}\n\n\t\t${(0,QB.w)(BB,"vec3",`${jB}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
+       n\ t\ t`)}\n\n\t\t${(0,TB.y)(BB,"vec3",`${IB}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
```

#### 3965. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30254` → after: `L29187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29187) · [Before (L30254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30254)

```diff
-         (0, QB.A)(BB, "vec4", "K", (0, QB.m)(BB, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
+         (0, TB.C)(BB, "vec4", "K", (0, TB.p)(BB, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
```

#### 3966. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30257` → after: `L29190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29190) · [Before (L30257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30257)

```diff
-         (0, QB.A)(BB, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
+         (0, TB.C)(BB, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
```

#### 3967. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30260` → after: `L29193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29193) · [Before (L30260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30260)

```diff
-         (0, QB.m)(BB, "vec3", "0.0")
+         (0, TB.p)(BB, "vec3", "0.0")
```

#### 3968. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30262` → after: `L29195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29195) · [Before (L30262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30262)

```diff
-         (0, QB.m)(BB, "vec3", "1.0")
+         (0, TB.p)(BB, "vec3", "1.0")
```

#### 3969. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30267` → after: `L29200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29200) · [Before (L30267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30267)

```diff
-   37924: (BB, jB, zB) => {
+   37884: (BB, IB, ZB) => {
```

#### 3970. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30269-L30271` → after: `L29202-L29204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29202-L29204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29202-L29204) · [Before (L30269-L30271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30269-L30271)

```diff
-       e: () => uB,
-       h: () => aB,
-       i: () => UB
+       c: () => kB,
+       g: () => nB,
+       k: () => cB
```

#### 3971. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30273-L30277` → after: `L29206-L29210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29206-L29210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29206-L29210) · [Before (L30273-L30277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30273-L30277)

```diff
-     var QB = zB(37286),
-       nB = zB(37279),
-       dB = zB(37283),
-       IB = zB(37300),
-       NB = zB(37291);
+     var TB = ZB(37231),
+       JB = ZB(37218),
+       oB = ZB(37223),
+       GB = ZB(37243),
+       vB = ZB(37239);
```

#### 3972. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30284` → after: `L29217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29217) · [Before (L30284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30284)

```diff
-           ...(0, nB.b)("TERRAIN_FADE"),
+           ...(0, JB.c)("TERRAIN_FADE"),
```

#### 3973. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30292` → after: `L29225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29225) · [Before (L30292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30292)

```diff
-           const zB = (0, dB.eb)(jB);
+           const ZB = (0, oB.cb)(IB);
```

#### 3974. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30294-L30295` → after: `L29227-L29228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29227-L29228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29227-L29228) · [Before (L30294-L30295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30294-L30295)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,QB.u)(jB)}\n            `,
-             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${uB}\n                if (${zB} < 255.0 / 256.0 && ${zB} < bayerDither(${(0,dB.O)(jB)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,TB.n)(IB)}\n            `,
+             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${kB}\n                if (${ZB} < 255.0 / 256.0 && ${ZB} < bayerDither(${(0,oB.P)(IB)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
```

#### 3975. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30303-L30305` → after: `L29236-L29238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29236-L29238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29236-L29238) · [Before (L30303-L30305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30303-L30305)

```diff
-         const jB = (0, IB.U)(BB, 1, !1),
-           zB = (0, IB.Y)(BB, 1, !1);
-         (0, IB.nb)(BB, {
+         const IB = (0, GB.P)(BB, 1, !1),
+           ZB = (0, GB.S)(BB, 1, !1);
+         (0, GB.ib)(BB, {
```

#### 3976. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30308` → after: `L29241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29241) · [Before (L30308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30308)

```diff
-       }(0, IB.s)(BB, UB, {
+       }(0, GB.r)(BB, cB, {
```

#### 3977. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30312` → after: `L29245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29245) · [Before (L30312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30312)

```diff
-     }(0, NB.l)(UB)
+     }(0, vB.p)(cB)
```

#### 3978. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30314` → after: `L29247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29247) · [Before (L30314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30314)

```diff
-   37926: (BB, jB, zB) => {
+   37890: (BB, IB, ZB) => {
```

#### 3979. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30316` → after: `L29249-L29251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29249-L29251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29249-L29251) · [Before (L30316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30316)

```diff
-       e: () => kB,
+       b: () => yB,
+       c: () => zB,
+       f: () => gB,
```

#### 3980. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30318-L30320` → after: `L29253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29253) · [Before (L30318-L30320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30318-L30320)

```diff
-       j: () => mB,
-       l: () => yB,
-       n: () => JB
+       k: () => NB
```

#### 3981. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30322-L30329` → after: `L29255-L29262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29255-L29262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29255-L29262) · [Before (L30322-L30329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30322-L30329)

```diff
-     var QB = zB(37286),
-       nB = zB(37534),
-       dB = zB(37536),
-       IB = zB(37279),
-       NB = zB(37547),
-       uB = zB(37283),
-       UB = zB(37300),
-       aB = zB(37291);
+     var TB = ZB(37231),
+       JB = ZB(37477),
+       oB = ZB(37482),
+       GB = ZB(37218),
+       vB = ZB(37490),
+       kB = ZB(37223),
+       cB = ZB(37243),
+       nB = ZB(37239);
```

#### 3982. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30345` → after: `L29278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29278) · [Before (L30345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30345)

```diff
-         ...(0, IB.b)("TERRAIN_LIGHT"),
+         ...(0, GB.c)("TERRAIN_LIGHT"),
```

#### 3983. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30355` → after: `L29288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29288) · [Before (L30355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30355)

```diff
-         (0, nB.b)(BB, this.pm.Rm), BB.BLOXD_LIGHT_WORD = sB.has(zB);
+         (0, JB.c)(BB, this.Ig.Xg), BB.BLOXD_LIGHT_WORD = FB.has(ZB);
```

#### 3984. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30357` → after: `L29290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29290) · [Before (L30357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30357)

```diff
-         dB || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), BB.BLOXD_TERRAIN_DIRECTI … [truncated]
+         oB || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), BB.BLOXD_TERRAIN_DIRECTI … [truncated]
```

#### 3985. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30360` → after: `L29293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29293) · [Before (L30360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30360)

```diff
-         this.pm.Rm && BB.push("aPackedLightLevels")
+         this.Ig.Xg && BB.push("aPackedLightLevels")
```

#### 3986. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30363` → after: `L29296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29296) · [Before (L30363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30363)

```diff
-         const jB = (0, NB.b)(dB.c, "both", BB);
+         const IB = (0, vB.b)(oB.f, "both", BB);
```

#### 3987. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30365` → after: `L29298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29298) · [Before (L30365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30365)

```diff
-         const zB = (0, NB.b)((0, QB.B)(this.dirLightCount), "vertex", BB);
+         const ZB = (0, vB.b)((0, TB.w)(this.dirLightCount), "vertex", BB);
```

#### 3988. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30370` → after: `L29303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29303) · [Before (L30370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30370)

```diff
-           vertex: `${jB.vertex}\n${zB.vertex}`,
+           vertex: `${IB.vertex}\n${ZB.vertex}`,
```

#### 3989. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30379` → after: `L29312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29312) · [Before (L30379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30379)

```diff
-         return (0, dB.l)(this.pm)
+         return (0, oB.q)(this.Ig)
```

#### 3990. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30383-L30384` → after: `L29316-L29317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29316-L29317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29316-L29317) · [Before (L30383-L30384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30383-L30384)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,QB.Z)(jB)}\n                    ${(0,QB.F)(jB)}\n                `,
-           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,QB.$)(jB)}\n                    ${(0,QB.I)(jB,this.dirLightCount)}\n                `
+           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,TB.W)(IB)}\n                    ${(0,TB.A)(IB)}\n                `,
+           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,TB.Y)(IB)}\n                    ${(0,TB.B)(IB,this.dirLightCount)}\n                `
```

#### 3991. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30386-L30388` → after: `L29319-L29321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29319-L29321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29319-L29321) · [Before (L30386-L30388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30386-L30388)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,QB.V)(jB)}\n                    ${(0,QB.F)(jB)}\n                `,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, QB.R)(jB),
-           [(0, QB.z)(jB)]: `\n                    ${(0,QB.A)(jB)}\n                    ${(0,QB.y)(jB)}\n                `
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,TB.Q)(IB)}\n                    ${(0,TB.A)(IB)}\n                `,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, TB.N)(IB),
+           [(0, TB.r)(IB)]: `\n                    ${(0,TB.v)(IB)}\n                    ${(0,TB.p)(IB)}\n                `
```

#### 3992. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30394` → after: `L29327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29327) · [Before (L30394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30394)

```diff
-       const zB = (0, dB.q)(BB.model.view);
+       const ZB = (0, oB.v)(BB.model.view);
```

#### 3993. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30396-L30397` → after: `L29329-L29330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29329-L29330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29329-L29330) · [Before (L30396-L30397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30396-L30397)

```diff
-         pm: BB,
-         uniformWriter: new dB.e(BB),
+         Ig: BB,
+         uniformWriter: new oB.h(BB),
```

#### 3994. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30406-L30408` → after: `L29339-L29341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29339-L29341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29339-L29341) · [Before (L30406-L30408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30406-L30408)

```diff
-       const zB = (0, UB.eb)(BB);
-       (0, UB.w)(zB, mB.name) || (0, UB.s)(zB, mB, yB(jB, BB)), BB.checkReadyOnlyOnce = !0, (0, UB.ib)(BB, !0)
-     }(0, aB.l)(mB)
+       const ZB = (0, cB._)(BB);
+       (0, cB.v)(ZB, gB.name) || (0, cB.r)(ZB, gB, qB(IB, BB)), BB.checkReadyOnlyOnce = !0, (0, cB.cb)(BB, !0)
+     }(0, nB.p)(gB)
```

#### 3995. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30410` → after: `L29343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29343) · [Before (L30410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30410)

```diff
-   37542: (BB, jB, zB) => {
+   37484: (BB, IB, ZB) => {
```

#### 3996. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30413-L30414` → after: `L29346-L29347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29346-L29347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29346-L29347) · [Before (L30413-L30414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30413-L30414)

```diff
-       d: () => QB,
-       g: () => nB,
+       f: () => TB,
+       h: () => JB,
```

#### 3997. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30435` → after: `L29368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29368) · [Before (L30435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30435)

```diff
-   37980: (BB, jB, zB) => {
+   37954: (BB, IB, ZB) => {
```

#### 3998. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30437` → after: `L29370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29370) · [Before (L30437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30437)

```diff
-       c: () => pB,
+       b: () => hB,
```

#### 3999. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30439` → after: `L29372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29372) · [Before (L30439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30439)

```diff
-       h: () => rB
+       f: () => zB
```

#### 4000. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30441` → after: `L29374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29374) · [Before (L30441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30441)

```diff
-     var QB = zB(37568);
+     var TB = ZB(37516);
```

#### 4001. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30446` → after: `L29379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29379) · [Before (L30446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30446)

```diff
-       const uB = "position" === jB ? QB.B : QB.F;
+       const kB = "position" === IB ? TB.y : TB.z;
```

#### 4002. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30450` → after: `L29383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29383) · [Before (L30450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30450)

```diff
-           IB = NB && "position" !== jB && 0 !== nB && 1 !== nB ? 1 / nB : 1;
+           GB = vB && "position" !== IB && 0 !== JB && 1 !== JB ? 1 / JB : 1;
```

#### 4003. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30526` → after: `L29459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29459) · [Before (L30526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30526)

```diff
-             return null !== (jB = uB(zB)[NB]) && void 0 !== jB ? jB : []
+             return null !== (IB = kB(ZB)[vB]) && void 0 !== IB ? IB : []
```

#### 4004. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30562` → after: `L29495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29495) · [Before (L30562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30562)

```diff
-   37719: (BB, jB, zB) => {
+   37671: (BB, IB, ZB) => {
```

#### 4005. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30641` → after: `L29574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29574) · [Before (L30641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30641)

```diff
-         const [jB, zB, QB, IB] = null !== (rB = null === dB || void 0 === dB ? void 0 : dB[BB / 4]) && void 0 !== rB ? rB : [0, 0, 1, 1];
+         const [IB, ZB, TB, GB] = null !== (zB = null === oB || void 0 === oB ? void 0 : oB[BB / 4]) && void 0 !== zB ? zB : [0, 0, 1, 1];
```

#### 4006. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30664` → after: `L29597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29597) · [Before (L30664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30664)

```diff
-       h: () => IB
+       g: () => GB
```

#### 4007. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30667` → after: `L29600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29600) · [Before (L30667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30667)

```diff
-   37565: (BB, jB, zB) => {
+   37514: (BB, IB, ZB) => {
```

#### 4008. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30669` → after: `L29602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29602) · [Before (L30669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30669)

```diff
-       c: () => dB,
+       d: () => oB,
```

#### 4009. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30671-L30675` → after: `L29604-L29608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29604-L29608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29604-L29608) · [Before (L30671-L30675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30671-L30675)

```diff
-       i: () => aB,
-       m: () => UB,
-       n: () => uB,
-       r: () => NB,
-       s: () => IB
+       f: () => nB,
+       h: () => cB,
+       j: () => kB,
+       l: () => vB,
+       p: () => GB
```

#### 4010. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30741` → after: `L29674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29674) · [Before (L30741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30741)

```diff
-       return (ArrayBuffer.isView(zB) ? (zB.byteOffset + QB) % 4 === 0 && nB % 4 === 0 : 12 === nB && QB % 4 === 0) ? jB : null
+       return (ArrayBuffer.isView(ZB) ? (ZB.byteOffset + TB) % 4 === 0 && JB % 4 === 0 : 12 === JB && TB % 4 === 0) ? IB : null
```

#### 4011. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30797` → after: `L29730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29730) · [Before (L30797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30797)

```diff
-   37578: (BB, jB, zB) => {
+   37525: (BB, IB, ZB) => {
```

#### 4012. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30799` → after: `L29732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29732) · [Before (L30799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30799)

```diff
-       A: () => IB,
+       d: () => vB,
```

#### 4013. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30801-L30802` → after: `L29734-L29736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29734-L29736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29734-L29736) · [Before (L30801-L30802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30801-L30802)

```diff
-       h: () => dB,
-       k: () => pB,
+       f: () => hB,
+       g: () => FB,
+       i: () => NB,
```

#### 4014. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30804-L30807` → after: `L29738-L29740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29738-L29740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29738-L29740) · [Before (L30804-L30807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30804-L30807)

```diff
-       o: () => JB,
-       s: () => yB,
-       v: () => rB,
-       z: () => mB
+       n: () => zB,
+       r: () => gB,
+       s: () => GB
```

#### 4015. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30809` → after: `L29742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29742) · [Before (L30809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30809)

```diff
-     var QB = zB(37321);
+     var TB = ZB(37253);
```

#### 4016. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30893` → after: `L29826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29826) · [Before (L30893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30893)

```diff
-       BB.live && (BB.live = !1, nB--), BB.released = !0, (0, QB.Q)(BB.gpu)
+       BB.live && (BB.live = !1, JB--), BB.released = !0, (0, TB.L)(BB.gpu)
```

#### 4017. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30900` → after: `L29833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29833) · [Before (L30900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30900)

```diff
-   37307: (BB, jB, zB) => {
+   37246: (BB, IB, ZB) => {
```

#### 4018. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30902` → after: `L29835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29835) · [Before (L30902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30902)

```diff
-       e: () => QB
+       d: () => TB
```

#### 4019. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30926` → after: `L29859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29859) · [Before (L30926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30926)

```diff
-   37315: (BB, jB, zB) => {
+   37248: (BB, IB, ZB) => {
```

#### 4020. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30928` → after: `L29861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29861) · [Before (L30928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30928)

```diff
-       d: () => dB,
+       e: () => oB,
```

#### 4021. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30940` → after: `L29873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29873) · [Before (L30940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30940)

```diff
-       return null !== (jB = BB && nB.get(BB)) && void 0 !== jB ? jB : QB
+       return null !== (IB = BB && JB.get(BB)) && void 0 !== IB ? IB : TB
```

#### 4022. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30943` → after: `L29876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29876) · [Before (L30943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30943)

```diff
-   37300: (BB, jB, zB) => {
+   37243: (BB, IB, ZB) => {
```

#### 4023. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30946` → after: `L29879-L29880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29879-L29880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29879-L29880) · [Before (L30946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30946)

```diff
-       G: () => YB,
+       E: () => jB,
+       F: () => yB,
```

#### 4024. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30949-L30951` → after: `L29884-L29886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29884-L29886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29884-L29886) · [Before (L30949-L30951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30949-L30951)

```diff
-       M: () => yB,
-       Q: () => LB,
-       U: () => ZB,
+       P: () => mB,
+       S: () => XB,
+       V: () => MB,
```

#### 4025. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30954-L30956` → after: `L29889-L29890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29889-L29890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29889-L29890) · [Before (L30954-L30956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30954-L30956)

```diff
-       ab: () => JB,
-       b: () => NB,
-       d: () => SB,
+       cb: () => UB,
+       db: () => dB,
```

#### 4026. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30961-L30964` → after: `L29897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29897) · [Before (L30961-L30964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30961-L30964)

```diff
-       jb: () => gB,
-       l: () => aB,
-       lb: () => XB,
-       nb: () => qB,
+       m: () => nB,
```

#### 4027. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30966` → after: `L29899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29899) · [Before (L30966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30966)

```diff
-       s: () => HB,
+       r: () => aB,
```

#### 4028. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30968-L30969` → after: `L29901-L29902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29901-L29902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29901-L29902) · [Before (L30968-L30969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30968-L30969)

```diff
-       w: () => fB,
-       z: () => DB
+       v: () => iB,
+       y: () => HB
```

#### 4029. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30971-L30973` → after: `L29904-L29906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29904-L29906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29904-L29906) · [Before (L30971-L30973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L30971-L30973)

```diff
-     var QB = zB(37307),
-       nB = zB(37315),
-       dB = zB(37321);
+     var TB = ZB(37246),
+       JB = ZB(37248),
+       oB = ZB(37253);
```

#### 4030. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31033` → after: `L29966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29966) · [Before (L31033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31033)

```diff
-       QB !== zB && (zB && (0, dB.W)(zB), BB[jB] = zB, QB && (0, dB.S)(QB), BB.version++)
+       TB !== ZB && (ZB && (0, oB.S)(ZB), BB[IB] = ZB, TB && (0, oB.P)(TB), BB.version++)
```

#### 4031. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31049` → after: `L29982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29982) · [Before (L31049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31049)

```diff
-       const NB = null !== (zB = null === IB || void 0 === IB ? void 0 : IB.create(dB, jB)) && void 0 !== zB ? zB : QB.e.defines();
+       const vB = null !== (ZB = null === GB || void 0 === GB ? void 0 : GB.create(oB, IB)) && void 0 !== ZB ? ZB : TB.d.defines();
```

#### 4032. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31051` → after: `L29984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29984) · [Before (L31051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31051)

```diff
-         feature: QB.e,
+         feature: TB.d,
```

#### 4033. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31063` → after: `L29996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L29996) · [Before (L31063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31063)

```diff
-         for (const BB of [jB.diffuseTexture, jB.opacityTexture, jB.emissiveTexture, jB.reflectionTexture]) BB && ((0, dB.W)(BB), nB.push(BB));
+         for (const BB of [IB.diffuseTexture, IB.opacityTexture, IB.emissiveTexture, IB.reflectionTexture]) BB && ((0, oB.S)(BB), JB.push(BB));
```

#### 4034. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31069` → after: `L30002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30002) · [Before (L31069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31069)

```diff
-           if ("diffuseTexture" === nB || "opacityTexture" === nB || "emissiveTexture" === nB || "reflectionTexture" === nB) gB(BB, nB, null !== (IB = dB) && void 0 !== IB ? IB : null);
+           if ("diffuseTexture" === JB || "opacityTexture" === JB || "emissiveTexture" === JB || "reflectionTexture" === JB) dB(BB, JB, null !== (GB = oB) && void 0 !== GB ? GB : null);
```

#### 4035. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31074` → after: `L30007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30007) · [Before (L31074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31074)

```diff
-         for (const BB of nB)(0, dB.S)(BB)
+         for (const BB of JB)(0, oB.P)(BB)
```

#### 4036. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31117` → after: `L30050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30050) · [Before (L31117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31117)

```diff
-       --BB.refs > 0 || (UB--, (0, dB.Q)(BB.gpu), gB(BB, "diffuseTexture", null), gB(BB, "opacityTexture", null), gB(BB, "emissiveTexture", null), gB(BB, "reflectionTexture", null), BB.mirror && (pB.delete(BB.mirror), BB.mirror = null))
+       --BB.refs > 0 || (cB--, (0, oB.L)(BB.gpu), dB(BB, "diffuseTexture", null), dB(BB, "opacityTexture", null), dB(BB, "emissiveTexture", null), dB(BB, "reflectionTexture", null), BB.mirror && (hB.delete(BB.mirror), BB.mirror = null))
```

#### 4037. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31152` → after: `L30085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30085) · [Before (L31152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31152)

```diff
-   37321: (BB, jB, zB) => {
+   37253: (BB, IB, ZB) => {
```

#### 4038. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31154-L31155` → after: `L30087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30087) · [Before (L31154-L31155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31154-L31155)

```diff
-       C: () => uB,
-       D: () => NB,
+       A: () => yB,
```

#### 4039. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31157` → after: `L30089-L30090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30089-L30090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30089-L30090) · [Before (L31157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31157)

```diff
-       I: () => gB,
+       F: () => UB,
+       G: () => YB,
```

#### 4040. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31159-L31161` → after: `L30092-L30093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30092-L30093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30092-L30093) · [Before (L31159-L31161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31159-L31161)

```diff
-       M: () => qB,
-       O: () => HB,
-       Q: () => oB,
+       L: () => pB,
+       P: () => wB,
```

#### 4041. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31164-L31167` → after: `L30097-L30098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30097-L30098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30097-L30098) · [Before (L31164-L31167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31164-L31167)

```diff
-       Z: () => tB,
-       bb: () => fB,
-       d: () => IB,
-       g: () => nB,
+       c: () => GB,
+       f: () => JB,
```

#### 4042. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31169-L31171` → after: `L30100-L30103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30100-L30103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30100-L30103) · [Before (L31169-L31171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31169-L31171)

```diff
-       n: () => sB,
-       p: () => SB,
-       s: () => mB,
+       l: () => FB,
+       m: () => QB,
+       q: () => gB,
+       u: () => qB,
```

#### 4043. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31175` → after: `L30108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30108) · [Before (L31175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31175)

```diff
-     var QB = zB(37315);
+     var TB = ZB(37248);
```

#### 4044. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31227-L31228` → after: `L30160-L30161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30160-L30161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30160-L30161) · [Before (L31227-L31228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31227-L31228)

```diff
-         wrapU: null !== (zB = JB.wrapU) && void 0 !== zB ? zB : UB,
-         wrapV: null !== (nB = JB.wrapV) && void 0 !== nB ? nB : UB,
+         wrapU: null !== (ZB = NB.wrapU) && void 0 !== ZB ? ZB : cB,
+         wrapV: null !== (JB = NB.wrapV) && void 0 !== JB ? JB : cB,
```

#### 4045. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31288` → after: `L30221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30221) · [Before (L31288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31288)

```diff
-       return null !== (jB = null === (zB = LB) || void 0 === zB ? void 0 : zB.loaded(BB)) && void 0 !== jB ? jB : null
+       return null !== (IB = null === (ZB = WB) || void 0 === ZB ? void 0 : ZB.loaded(BB)) && void 0 !== IB ? IB : null
```

#### 4046. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31299` → after: `L30232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30232) · [Before (L31299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31299)

```diff
-       BB.live || (BB.live = !0, rB++, null === (jB = LB) || void 0 === jB || jB.DN(BB));
+       BB.live || (BB.live = !0, zB++, null === (IB = WB) || void 0 === IB || IB.sv(BB));
```

#### 4047. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31325` → after: `L30258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30258) · [Before (L31325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31325)

```diff
-   37568: (BB, jB, zB) => {
+   37516: (BB, IB, ZB) => {
```

#### 4048. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31527-L31531` → after: `L30460-L30464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30460-L30464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30460-L30464) · [Before (L31527-L31531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31527-L31531)

```diff
-       B: () => UB,
-       F: () => aB,
-       e: () => dB,
-       h: () => nB,
-       k: () => uB,
+       b: () => oB,
+       f: () => JB,
+       g: () => kB,
+       i: () => hB,
+       j: () => vB,
```

#### 4049. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31534` → after: `L30468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30468) · [Before (L31534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31534)

```diff
-       r: () => rB,
+       t: () => gB,
```

#### 4050. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31536-L31538` → after: `L30470-L30471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30470-L30471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30470-L30471) · [Before (L31536-L31538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31536-L31538)

```diff
-       w: () => IB,
-       x: () => mB,
-       y: () => JB
+       y: () => cB,
+       z: () => nB
```

#### 4051. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31541` → after: `L30474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30474) · [Before (L31541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31541)

```diff
-   37559: (BB, jB, zB) => {
+   37506: (BB, IB, ZB) => {
```

#### 4052. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31545-L31546` → after: `L30477-L30479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30477-L30479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30477-L30479) · [Before (L31545-L31546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31545-L31546)

```diff
-       i: () => uB,
-       l: () => UB
+       g: () => vB,
+       k: () => kB,
+       n: () => cB
```

#### 4053. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31548-L31550` → after: `L30481-L30483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30481-L30483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30481-L30483) · [Before (L31548-L31550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31548-L31550)

```diff
-     var QB = zB(37565),
-       nB = zB(37568),
-       dB = zB(37574);
+     var TB = ZB(37514),
+       JB = ZB(37516),
+       oB = ZB(37522);
```

#### 4054. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31560` → after: `L30493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30493) · [Before (L31560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31560)

```diff
-         this.owner = BB, this.geometry = jB, this.gy = zB, this.materials = QB, this.gpu = []
+         this.owner = BB, this.geometry = IB, this.vq = ZB, this.materials = TB, this.gpu = []
```

#### 4055. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31565` → after: `L30498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30498) · [Before (L31565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31565)

```diff
-         this.model = void 0, this.position = void 0, this.count = 0, this.gy = new Int32Array(2), this.boxes = new Float64Array(6)
+         this.model = void 0, this.position = void 0, this.count = 0, this.vq = new Int32Array(2), this.boxes = new Float64Array(6)
```

#### 4056. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31568` → after: `L30501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30501) · [Before (L31568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31568)

```diff
-         this.count = BB, this.gy.length < 2 * BB && (this.gy = new Int32Array(2 * BB), this.boxes = new Float64Array(6 * BB))
+         this.count = BB, this.vq.length < 2 * BB && (this.vq = new Int32Array(2 * BB), this.boxes = new Float64Array(6 * BB))
```

#### 4057. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31578-L31579` → after: `L30511-L30512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30511-L30512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30511-L30512) · [Before (L31578-L31579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31578-L31579)

```diff
-         const IB = this.nodes.Ep;
-         this.flags.length < IB && (this.layer = (0, dB.k)(this.layer, IB), this.flags = (0, dB.k)(this.flags, IB), this.version = (0, dB.k)(this.version, IB), this.radius = (0, dB.k)(this.radius, IB), this.visibility = (0, dB.k)(this.visibility, IB), this.sphere = (0, dB.k)(this. … [truncated]
+         const GB = this.nodes.ah;
+         this.flags.length < GB && (this.layer = (0, oB.k)(this.layer, GB), this.flags = (0, oB.k)(this.flags, GB), this.version = (0, oB.k)(this.version, GB), this.radius = (0, oB.k)(this.radius, GB), this.visibility = (0, oB.k)(this.visibility, GB), this.sphere = (0, oB.k)(this. … [truncated]
```

#### 4058. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31600` → after: `L30533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30533) · [Before (L31600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31600)

```diff
-         this.looseIndex.length < this.nodes.Ep && (this.loose = (0, dB.k)(this.loose, this.nodes.Ep), this.looseIndex = (0, dB.k)(this.looseIndex, this.nodes.Ep));
+         this.looseIndex.length < this.nodes.ah && (this.loose = (0, oB.k)(this.loose, this.nodes.ah), this.looseIndex = (0, oB.k)(this.looseIndex, this.nodes.ah));
```

#### 4059. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31616` → after: `L30549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30549) · [Before (L31616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31616)

```diff
-           pp: zB,
+           ek: ZB,
```

#### 4060. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31618` → after: `L30551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30551) · [Before (L31618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31618)

```diff
-           zr: nB
+           vz: JB
```

#### 4061. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31620` → after: `L30553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30553) · [Before (L31620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31620)

```diff
-         if (0 === (this.nodes.flags[BB] & dB.d.mesh) || 0 === QB[BB] || zB[uB] * zB[uB + 1] * zB[uB + 2] === 0 || 0 === (NB & IB.isVisible) || !(this.visibility[BB] > 0)) return !1;
+         if (0 === (this.nodes.flags[BB] & oB.f.mesh) || 0 === TB[BB] || ZB[kB] * ZB[kB + 1] * ZB[kB + 2] === 0 || 0 === (vB & GB.isVisible) || !(this.visibility[BB] > 0)) return !1;
```

#### 4062. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31642` → after: `L30575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30575) · [Before (L31642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31642)

```diff
-           pp: NB,
+           ek: vB,
```

#### 4063. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31647` → after: `L30580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30580) · [Before (L31647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31647)

```diff
-           if (0 === (UB[IB] & dB.d.mesh) || (zB[IB] & aB) !== aB || 0 === uB[IB] || Number.isNaN(QB[IB])) continue;
+           if (0 === (cB[GB] & oB.f.mesh) || (ZB[GB] & nB) !== nB || 0 === kB[GB] || Number.isNaN(TB[GB])) continue;
```

#### 4064. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31666` → after: `L30599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30599) · [Before (L31666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31666)

```diff
-         const jB = dB.d.mesh | dB.d.enabled;
+         const IB = oB.f.mesh | oB.f.enabled;
```

#### 4065. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31676` → after: `L30609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30609) · [Before (L31676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31676)

```diff
-         if (this.nodes.worldNow(BB, dB, uB), (0, nB.k)(uB, 0, UB), (0, nB.B)(jB, 0, UB, aB, 0), (0, nB.F)(jB, 3, UB, aB, 3), aB[6] = jB[6], (0, QB.s)(aB), !(0, QB.r)(aB, this.sphere, 4 * BB) || !(0, QB.n)(aB, this.box, 6 * BB)) return -1;
+         if (this.nodes.worldNow(BB, oB, kB), (0, JB.g)(kB, 0, cB), (0, JB.y)(IB, 0, cB, nB, 0), (0, JB.z)(IB, 3, cB, nB, 3), nB[6] = IB[6], (0, TB.p)(nB), !(0, TB.l)(nB, this.sphere, 4 * BB) || !(0, TB.j)(nB, this.box, 6 * BB)) return -1;
```

#### 4066. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31679-L31680` → after: `L30612-L30613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30612-L30613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L30612-L30613) · [Before (L31679-L31680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L31679-L31680)

```diff
-           if (IB.count > 1 && !(0, QB.n)(aB, IB.boxes, 6 * nB)) continue;
-           const BB = (0, QB.i)(IB.model, IB.position, aB, zB, IB.gy[2 * nB], IB.gy[2 * nB + 1]); - 1 !== BB && (-1 === rB || BB < rB) && (rB = BB)
+           if (GB.count > 1 && !(0, TB.j)(nB, GB.boxes, 6 * JB)) continue;
+           const BB = (0, TB.f)(GB.model, GB.position, nB, ZB, GB.vq[2 * JB], GB.vq[2 * JB + 1]); - 1 !== BB && (-1 === zB || BB < zB) && (zB = BB)
```
