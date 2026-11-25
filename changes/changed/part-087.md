# Changed — Bundle Modifications Report (Part 087 / 142)

- **Updated at**: `2026-11-25T16:44 JST`
- **Part**: `87 / 142` (**419** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 086](part-086.md) · [Part 088 →](part-088.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (dz8ef.98c5e741 → wp3j0a.a13381cf · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4717 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 3695. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27675-L27679` → after: `L27319-L27323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27319-L27323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27319-L27323) · [Before (L27675-L27679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27675-L27679)

```diff
-         this.Uc.OY(`Meshing worker ${uu} failed chunk (${Uu}, ${Zu}, ${lu}): ${fu}`), this.jobEnded(uu, qu), null === (ju = this.meshProbe) || void 0 === ju || ju.failed(qu), Cu ? this.lightUnused(Uu, Zu, lu, qu) : (this.chunkMirrors[uu].reset(), this.lightMirrors[uu].reset()), b … [truncated]
-         const Ou = this.Uc.zb.CY.bY(Uu, Zu, lu);
-         if (!Ou || Ou.iO !== qu) return;
-         Ou.iO = 0, Ou.qY = !0, Ou.NY = !0;
-         const Yu = null !== (su = this.meshFailures.get(Ou)) && void 0 !== su ? su : {
+         this.wf.Jh(`Meshing worker ${GG} failed chunk (${SG}, ${LG}, ${kG}): ${YG}`), this.jobEnded(GG, UG), null === (ZG = this.meshProbe) || void 0 === ZG || ZG.failed(UG), VG ? this.lightUnused(SG, LG, kG, UG) : (this.chunkMirrors[GG].reset(), this.lightMirrors[GG].reset()), p … [truncated]
+         const KG = this.wf.Op.Qh.Kh(SG, LG, kG);
+         if (!KG || KG.sK !== UG) return;
+         KG.sK = 0, KG.ph = !0, KG.dh = !0;
+         const hG = null !== (wG = this.meshFailures.get(KG)) && void 0 !== wG ? wG : {
```

#### 3696. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27686-L27688` → after: `L27330-L27332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27330-L27332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27330-L27332) · [Before (L27686-L27688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27686-L27688)

```diff
-           const uu = Yu.lostMesher >= 2 ? `lost its worker's mesher ${Yu.lostMesher} times` : Yu.refused >= 6 ? `was refused memory ${Yu.refused} times` : `failed ${Yu.failed} times in a row`;
-           this.Uc.OY(`Meshing chunk (${Uu}, ${Zu}, ${lu}) ${uu}, so it is dropped until it reloads: ${fu}`)
-         } else this.meshFailures.set(Ou, Yu), this.Uc.zb.fY(Ou, !0)
+           const GG = hG.lostMesher >= 2 ? `lost its worker's mesher ${hG.lostMesher} times` : hG.refused >= 6 ? `was refused memory ${hG.refused} times` : `failed ${hG.failed} times in a row`;
+           this.wf.Jh(`Meshing chunk (${SG}, ${LG}, ${kG}) ${GG}, so it is dropped until it reloads: ${YG}`)
+         } else this.meshFailures.set(KG, hG), this.wf.Op.fh(KG, !0)
```

#### 3697. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27691` → after: `L27335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27335) · [Before (L27691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27691)

```diff
-         this.droppedChunks.add(uu), uu.qY = !1, uu.NY = !1, this.SO(uu)
+         this.droppedChunks.add(GG), GG.ph = !1, GG.dh = !1, this.nK(GG)
```

#### 3698. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27707-L27708` → after: `L27351-L27352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27351-L27352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27351-L27352) · [Before (L27707-L27708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27707-L27708)

```diff
-           zb: Eu
-         } = this.Uc, {
+           Op: bG
+         } = this.wf, {
```

#### 3699. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27712-L27713` → after: `L27356-L27357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27356-L27357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27356-L27357) · [Before (L27712-L27713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27712-L27713)

```diff
-         } = uu, Zu = Eu.CY.bY(ju, su, Uu);
-         return Zu && Zu.iO === uu.meshJobId ? Eu.DY.includes(ju, su, Uu) || Eu.gY.includes(ju, su, Uu) ? null : Zu : null
+         } = GG, LG = bG.Qh.Kh(ZG, wG, SG);
+         return LG && LG.sK === GG.meshJobId ? bG.Eh.includes(ZG, wG, SG) || bG.oh.includes(ZG, wG, SG) ? null : LG : null
```

#### 3700. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27716` → after: `L27360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27360) · [Before (L27716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27716)

```diff
-         uu.computedLightData && (0, Xu.q)(uu.computedLightData), this.lightUnused(uu.i, uu.j, uu.k, uu.meshJobId)
+         GG.computedLightData && (0, yG.v)(GG.computedLightData), this.lightUnused(GG.i, GG.j, GG.k, GG.meshJobId)
```

#### 3701. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27719` → after: `L27363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27363) · [Before (L27719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27719)

```diff
-         const Uu = this.Uc.zb.CY.bY(uu, Eu, ju);
+         const SG = this.wf.Op.Qh.Kh(GG, bG, ZG);
```

#### 3702. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27727` → after: `L27371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27371) · [Before (L27727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27727)

```diff
-           if (this.remeshesLostContext && (0, eu.b)(this.Uc.tO.engine)) return this.dropResult(uu), Eu.iO = 0, void this.chunksToRemeshOnRestore.add(Eu);
+           if (this.remeshesLostContext && (0, EG.c)(this.wf.HK.engine)) return this.dropResult(GG), bG.sK = 0, void this.chunksToRemeshOnRestore.add(bG);
```

#### 3703. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27731` → after: `L27375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27375) · [Before (L27731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27731)

```diff
-             this.Uc.OY(`Applying the mesh of chunk (${uu.i}, ${uu.j}, ${uu.k}) failed`, ju)
+             this.wf.Jh(`Applying the mesh of chunk (${GG.i}, ${GG.j}, ${GG.k}) failed`, ZG)
```

#### 3704. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27740` → after: `L27384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27384) · [Before (L27740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27740)

```diff
-         if (uu.iO = 0, this.meshFailures.delete(uu), uu.MY = !!Uu || uu.uO || uu.ZO, !0 === Eu.lightOnlyUpdate) this.assignLightOnlyData(uu, Eu.lightDataArrays) || (uu.qY = !0, uu.NY = !0);
+         if (GG.sK = 0, this.meshFailures.delete(GG), GG.Xh = !!SG || GG.ZK || GG.kK, !0 === bG.lightOnlyUpdate) this.assignLightOnlyData(GG, bG.lightDataArrays) || (GG.ph = !0, GG.dh = !0);
```

#### 3705. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27743-L27744` → after: `L27387-L27388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27387-L27388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27387-L27388) · [Before (L27743-L27744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27743-L27744)

```diff
-           const ju = this.Uc.zb;
-           !ju.eY && Eu.vertexDataInfo.length > 0 && (ju.eY = !0, ju.emit("eY")), this.visibility && void 0 !== Eu.visNegNeighbours && this.setVisibilityFromWorker(uu, Eu.visGraphs, Eu.visNegNeighbours)
+           const ZG = this.wf.Op;
+           !ZG.uh && bG.vertexDataInfo.length > 0 && (ZG.uh = !0, ZG.emit("uh")), this.visibility && void 0 !== bG.visNegNeighbours && this.setVisibilityFromWorker(GG, bG.visGraphs, bG.visNegNeighbours)
```

#### 3706. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27746` → after: `L27390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27390) · [Before (L27746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27746)

```diff
-         if (uu.GY = null !== (ju = Eu.faceLayout) && void 0 !== ju ? ju : null, Uu && "clientBfs" === Eu.lightSource || this.lightUnused(Eu.i, Eu.j, Eu.k, Eu.meshJobId), Uu) {
+         if (GG.ih = null !== (ZG = bG.faceLayout) && void 0 !== ZG ? ZG : null, SG && "clientBfs" === bG.lightSource || this.lightUnused(bG.i, bG.j, bG.k, bG.meshJobId), SG) {
```

#### 3707. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27752-L27754` → after: `L27396-L27398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27396-L27398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27396-L27398) · [Before (L27752-L27754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27752-L27754)

```diff
-           this.storeAndPropagateLight(uu, Uu, Eu.Tj, "server" === Eu.lightSource), this.lightReuse.lightStored(uu, Eu.meshJobId, Eu.lightSource, Uu, Eu.lightSeedColumnsRead), Eu.lightSeedColumnsRead && (0, Xu.t)(Eu.lightSeedColumnsRead)
-         } else this.Uc.pY.wY(uu);
-         uu.qY ? this.Uc.zb.fY(uu, !0) : uu.FO = !1, this.checkSkySeedAtReply(uu, !uu.qY), this.SO(uu), null === (su = this.meshProbe) || void 0 === su || su.applied(uu, Eu.meshJobId)
+           this.storeAndPropagateLight(GG, SG, bG.tZ, "server" === bG.lightSource), this.lightReuse.lightStored(GG, bG.meshJobId, bG.lightSource, SG, bG.lightSeedColumnsRead), bG.lightSeedColumnsRead && (0, yG.z)(bG.lightSeedColumnsRead)
+         } else this.wf.Ch.Wh(GG);
+         GG.ph ? this.wf.Op.fh(GG, !0) : GG.eK = !1, this.checkSkySeedAtReply(GG, !GG.ph), this.nK(GG), null === (wG = this.meshProbe) || void 0 === wG || wG.applied(GG, bG.meshJobId)
```

#### 3708. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27757` → after: `L27401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27401) · [Before (L27757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27757)

```diff
-         uu.dY.length = 0
+         GG.Ih.length = 0
```

#### 3709. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27761-L27764` → after: `L27405-L27408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27405-L27408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27405-L27408) · [Before (L27761-L27764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27761-L27764)

```diff
-         const ju = null === (Eu = this.Uc.tO.xO) || void 0 === Eu ? void 0 : Eu.terrain;
-         uu.dY.forEach((uu => {
-           this.Uc.emit("removingTerrainMesh", uu), null === ju || void 0 === ju || ju.removeChunkMesh(uu), uu.dispose()
-         })), uu.dY.length = 0, uu.GY = null
+         const ZG = null === (bG = this.wf.HK.tK) || void 0 === bG ? void 0 : bG.terrain;
+         GG.Ih.forEach((GG => {
+           this.wf.emit("removingTerrainMesh", GG), null === ZG || void 0 === ZG || ZG.removeChunkMesh(GG), GG.dispose()
+         })), GG.Ih.length = 0, GG.ih = null
```

#### 3710. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27778` → after: `L27422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27422) · [Before (L27778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27778)

```diff
-         if (this.lazyInitMeshingObjs(), uu.iO) return !1;
+         if (this.lazyInitMeshingObjs(), GG.sK) return !1;
```

#### 3711. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27781-L27782` → after: `L27425-L27426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27425-L27426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27425-L27426) · [Before (L27781-L27782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27781-L27782)

```diff
-             if (!uu.uO) return !1;
-             const Eu = uu.bO,
+             if (!GG.ZK) return !1;
+             const bG = GG.QK,
```

#### 3712. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27784` → after: `L27428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27428) · [Before (L27784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27784)

```diff
-             if (ju && !ju.uO) return !1;
+             if (ZG && !ZG.ZK) return !1;
```

#### 3713. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27786` → after: `L27430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27430) · [Before (L27786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27786)

```diff
-             if (su && !su.uO) return !1;
+             if (wG && !wG.ZK) return !1;
```

#### 3714. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27788` → after: `L27432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27432) · [Before (L27788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27788)

```diff
-             if (Uu && !Uu.uO) return !1;
+             if (SG && !SG.ZK) return !1;
```

#### 3715. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27790-L27791` → after: `L27434-L27435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27434-L27435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27434-L27435) · [Before (L27790-L27791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27790-L27791)

```diff
-           }(uu)) return this.meshFailures.delete(uu), this.assignMeshDataToChunk(uu, []), this.setVisibilityOnThisThread(uu), uu.MY = !0, this.Uc.pY.wY(uu), this.checkHeldSkySeedReaders(uu), !0;
-         const Uu = this.Uc.tO.aY;
+           }(GG)) return this.meshFailures.delete(GG), this.assignMeshDataToChunk(GG, []), this.setVisibilityOnThisThread(GG), GG.Xh = !0, this.wf.Ch.Wh(GG), this.checkHeldSkySeedReaders(GG), !0;
+         const SG = this.wf.HK.Fh;
```

#### 3716. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27794` → after: `L27438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27438) · [Before (L27794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27794)

```diff
-         Uu && (Zu = this.Uc.zb.cO(uu.i, uu.k), qu = (0, lu.B)(uu.ZO, uu.j, Zu));
+         SG && (LG = this.wf.Op.KK(GG.i, GG.k), UG = (0, kG.y)(GG.kK, GG.j, LG));
```

#### 3717. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27797` → after: `L27441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27441) · [Before (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27797)

```diff
-         this.providedLightEligible(uu, Zu) && uu.PY && uu.sO && (fu = uu.sO, Cu = uu.XO);
+         this.providedLightEligible(GG, LG) && GG.ah && GG.LK && (YG = GG.LK, VG = GG.UK);
```

#### 3718. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27801` → after: `L27445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27445) · [Before (L27801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27801)

```diff
-         !Uu || qu || uu.uO || fu || (Nu = (0, Xu.i)(uu, lu.j), bu = function(uu, Eu, ju, Uu) {
+         !SG || UG || GG.ZK || YG || (QG = (0, yG.k)(GG, kG.m), pG = function(GG, bG, ZG, SG) {
```

#### 3719. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27803` → after: `L27447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27447) · [Before (L27803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27803)

```diff
-             Xu = Zu.ac;
+             yG = LG.Wf;
```

#### 3720. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27809` → after: `L27453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27453) · [Before (L27809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27809)

```diff
-                 !Zu || Zu.ZO && 0 !== (su | ju | Uu) ? (Xu[lu] = -1, Xu[lu + 1] = -1) : (Xu[lu] = Eu(Zu), Xu[lu + 1] = Zu.IO)
+                 !LG || LG.kK && 0 !== (wG | ZG | SG) ? (yG[kG] = -1, yG[kG + 1] = -1) : (yG[kG] = bG(LG), yG[kG + 1] = LG.gK)
```

#### 3721. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27812` → after: `L27456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27456) · [Before (L27812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27812)

```diff
-         }(uu.bO, this.chunkObjectIdOf, (0, lu.G)(uu.j, Zu), Nu), this.lightReuse.canReuse(uu, uu.sO, bu) && (fu = uu.sO, Cu = uu.XO, cu = !0, (0, Xu.t)(Nu), Nu = null));
+         }(GG.QK, this.chunkObjectIdOf, (0, kG.E)(GG.j, LG), QG), this.lightReuse.canReuse(GG, GG.LK, pG) && (YG = GG.LK, VG = GG.UK, fG = !0, (0, yG.z)(QG), QG = null));
```

#### 3722. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27814` → after: `L27458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27458) · [Before (L27814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27814)

```diff
-           Yu = null === fu && uu.oY;
+           hG = null === YG && GG.jh;
```

#### 3723. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27816-L27817` → after: `L27460-L27461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27460-L27461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27460-L27461) · [Before (L27816-L27817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27816-L27817)

```diff
-             if (!uu.ZO) return !1;
-             const Eu = uu.bO,
+             if (!GG.kK) return !1;
+             const bG = GG.QK,
```

#### 3724. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27821` → after: `L27465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27465) · [Before (L27821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27821)

```diff
-             if (Uu && !Uu.ZO && 0 !== Uu.JN[ju - 1]) return !1;
+             if (SG && !SG.kK && 0 !== SG.WQ[ZG - 1]) return !1;
```

#### 3725. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27823` → after: `L27467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27467) · [Before (L27823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27823)

```diff
-             if (Zu && !Zu.ZO && Su(Zu.ac.data, (ju - 1) * su, 1, su)) return !1;
+             if (LG && !LG.kK && sG(LG.Wf.data, (ZG - 1) * wG, 1, wG)) return !1;
```

#### 3726. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27825` → after: `L27469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27469) · [Before (L27825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27825)

```diff
-             if (Xu && !Xu.ZO && Su(Xu.ac.data, ju - 1, ju, su)) return !1;
+             if (yG && !yG.kK && sG(yG.Wf.data, ZG - 1, ZG, wG)) return !1;
```

#### 3727. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27827-L27828` → after: `L27471-L27472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27471-L27472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27471-L27472) · [Before (L27827-L27828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27827-L27828)

```diff
-           }(uu)) return this.meshFailures.delete(uu), this.assignMeshDataToChunk(uu, []), this.setVisibilityOnThisThread(uu), uu.MY = !0, uu.GY = null, this.Uc.pY.wY(uu), this.checkHeldSkySeedReaders(uu), !0;
-         const hu = this.getLeastLoadedWorkerIndex(null !== (Eu = this.stateWorkerOf.get(uu)) && void 0 !== Eu ? Eu : -1),
+           }(GG)) return this.meshFailures.delete(GG), this.assignMeshDataToChunk(GG, []), this.setVisibilityOnThisThread(GG), GG.Xh = !0, GG.ih = null, this.wf.Ch.Wh(GG), this.checkHeldSkySeedReaders(GG), !0;
+         const dG = this.getLeastLoadedWorkerIndex(null !== (bG = this.stateWorkerOf.get(GG)) && void 0 !== bG ? bG : -1),
```

#### 3728. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27834` → after: `L27478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27478) · [Before (L27834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27834)

```diff
-             aO: Gu,
+             IK: oG,
```

#### 3729. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27836-L27838` → after: `L27480-L27482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27480-L27482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27480-L27482) · [Before (L27836-L27838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27836-L27838)

```diff
-             ZO: wu,
-             uO: Ju,
-             JN: du
+             kK: uG,
+             ZK: iG,
+             WQ: CG
```

#### 3730. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27840` → after: `L27484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27484) · [Before (L27840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27840)

```diff
-         this.tempChunk.i = gu, this.tempChunk.j = Mu, this.tempChunk.k = eu, this.tempChunk.aO = Gu, this.tempChunk.size = pu, this.tempChunk.ZO = wu, this.tempChunk.uO = Ju, this.tempChunk.JN = du, this.tempChunk.bO = null;
+         this.tempChunk.i = rG, this.tempChunk.j = zG, this.tempChunk.k = EG, this.tempChunk.IK = oG, this.tempChunk.size = XG, this.tempChunk.kK = uG, this.tempChunk.ZK = iG, this.tempChunk.WQ = CG, this.tempChunk.QK = null;
```

#### 3731. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27850-L27852` → after: `L27494-L27496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27494-L27496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27494-L27496) · [Before (L27850-L27852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27850-L27852)

```diff
-               ju = (0, Xu.g)(uu, this.Uc.zb, (uu => {
-                 const ju = this.lightTags.get(uu.sO);
-                 return Eu.holds(this.chunkObjectId(uu), ju) ? ju : 0
+               ZG = (0, yG.g)(GG, this.wf.Op, (GG => {
+                 const ZG = this.lightTags.get(GG.LK);
+                 return bG.holds(this.chunkObjectId(GG), ZG) ? ZG : 0
```

#### 3732. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27858` → after: `L27502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27502) · [Before (L27858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27858)

```diff
-           vu = (0, Xu.b)();
+           aG = (0, yG.d)();
```

#### 3733. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27861-L27862` → after: `L27505-L27506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27505-L27506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27505-L27506) · [Before (L27861-L27862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27861-L27862)

```diff
-         let Ku = uu.GY;
-         const Vu = Uu && !uu.NY && uu.MY && uu.dY.length > 0 && !!Ku;
+         let cG = GG.ih;
+         const lG = SG && !GG.dh && GG.Xh && GG.Ih.length > 0 && !!cG;
```

#### 3734. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27864` → after: `L27508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27508) · [Before (L27864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27864)

```diff
-           for (const ju of Eu) uu.push(ju.is.buffer), uu.push(ju.js.buffer), uu.push(ju.ks.buffer), uu.push(ju.wids.buffer), uu.push(ju.hts.buffer), uu.push(ju.pj.buffer), uu.push(ju.diagonals.buffer)
+           for (const ZG of bG) GG.push(ZG.is.buffer), GG.push(ZG.js.buffer), GG.push(ZG.ks.buffer), GG.push(ZG.wids.buffer), GG.push(ZG.hts.buffer), GG.push(ZG.uZ.buffer), GG.push(ZG.diagonals.buffer)
```

#### 3735. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27868` → after: `L27512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27512) · [Before (L27868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27868)

```diff
-         if (uu.iO = ru, this.jobsInFlight[hu].set(ru, uu), bu && this.lightReuse.dispatched(uu, ru, bu), this.visibility) {
+         if (GG.sK = jG, this.jobsInFlight[dG].set(jG, GG), pG && this.lightReuse.dispatched(GG, jG, pG), this.visibility) {
```

#### 3736. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27872` → after: `L27516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27516) · [Before (L27872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27872)

```diff
-             voxelVersion: uu.IO,
+             voxelVersion: GG.gK,
```

#### 3737. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27908` → after: `L27552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27552) · [Before (L27908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27908)

```diff
-             type: "rO",
+             type: "MK",
```

#### 3738. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27912` → after: `L27556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27556) · [Before (L27912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27912)

```diff
-           return this.Uc.OY(`Meshing worker ${hu} postMessage failed`, Bu), uu.iO = 0, this.jobEnded(hu, ru), this.chunkMirrors[hu].reset(), this.lightMirrors[hu].reset(), (0, Xu.n)(vu), mu && (0, Xu.t)(mu), uu.qY = !0, this.Uc.zb.fY(uu, !0), !1
+           return this.wf.Jh(`Meshing worker ${dG} postMessage failed`, gG), GG.sK = 0, this.jobEnded(dG, jG), this.chunkMirrors[dG].reset(), this.lightMirrors[dG].reset(), (0, yG.n)(aG), vG && (0, yG.z)(vG), GG.ph = !0, this.wf.Op.fh(GG, !0), !1
```

#### 3739. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27914` → after: `L27558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27558) · [Before (L27914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27914)

```diff
-         return Vu && (uu.GY = null), null === (ju = this.meshProbe) || void 0 === ju || ju.sent(uu, ru, this.busynessTracker.inFlightCounts[hu] - 1, this.workerInFlightCount, this.jobCapacity()), !0
+         return lG && (GG.ih = null), null === (ZG = this.meshProbe) || void 0 === ZG || ZG.sent(GG, jG, this.busynessTracker.inFlightCounts[dG] - 1, this.workerInFlightCount, this.jobCapacity()), !0
```

#### 3740. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27920` → after: `L27564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27564) · [Before (L27920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27920)

```diff
-           const [Eu, Uu, Xu] = Pu(Zu), lu = uu.bO.get(Eu, Uu, Xu);
+           const [bG, SG, yG] = mG(LG), kG = GG.QK.get(bG, SG, yG);
```

#### 3741. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27933` → after: `L27577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27577) · [Before (L27933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27933)

```diff
-         const fu = Uu ? this.lightTags.get(uu.sO) : void 0;
+         const YG = SG ? this.lightTags.get(GG.LK) : void 0;
```

#### 3742. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27941` → after: `L27585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27585) · [Before (L27941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27941)

```diff
-         } = Xu.dispatched(su ? lu : -1, ju);
+         } = yG.dispatched(wG ? kG : -1, ZG);
```

#### 3743. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27952-L27954` → after: `L27596-L27598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27596-L27598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27596-L27598) · [Before (L27952-L27954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27952-L27954)

```diff
-         const su = !uu.kY && this.Uc.tO.mY() ? performance.now() : 0;
-         uu.kY = !0;
-         const Uu = null === (ju = this.Uc.tO.xO) || void 0 === ju ? void 0 : ju.terrain;
+         const wG = !GG.Ph && this.wf.HK.Mh() ? performance.now() : 0;
+         GG.Ph = !0;
+         const SG = null === (ZG = this.wf.HK.tK) || void 0 === ZG ? void 0 : ZG.terrain;
```

#### 3744. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27956` → after: `L27600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27600) · [Before (L27956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27956)

```diff
-         const Zu = uu.dY;
+         const LG = GG.Ih;
```

#### 3745. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27960` → after: `L27604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27604) · [Before (L27960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27960)

```diff
-           ju && (lu = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.Uc.tO.vY), lu.PO = !0, lu._updateBoundingInfo = Ku, lu._refreshBoundingInfo = Ku, Zu.push(lu)), this.meshBuilder.assignMeshData(lu, Eu[Xu]), Uu || (0, hu.g)(lu, Eu[Xu].faceGroups), ju || this.Uc.tO.KY(lu), null = … [truncated]
+           ZG && (kG = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.wf.HK.Ah), kG.FK = !0, kG._updateBoundingInfo = cG, kG._refreshBoundingInfo = cG, LG.push(kG)), this.meshBuilder.assignMeshData(kG, bG[yG]), SG || (0, dG.i)(kG, bG[yG].faceGroups), ZG || this.wf.HK.sh(kG), null = … [truncated]
```

#### 3746. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27964` → after: `L27608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27608) · [Before (L27964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27964)

```diff
-           this.Uc.emit("removingTerrainMesh", uu), null === Uu || void 0 === Uu || Uu.removeChunkMesh(uu), uu.dispose()
+           this.wf.emit("removingTerrainMesh", GG), null === SG || void 0 === SG || SG.removeChunkMesh(GG), GG.dispose()
```

#### 3747. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27968` → after: `L27612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27612) · [Before (L27968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27968)

```diff
-         const Uu = uu.dY;
+         const SG = GG.Ih;
```

#### 3748. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27972-L27975` → after: `L27616-L27619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27616-L27619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27616-L27619) · [Before (L27972-L27975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27972-L27975)

```diff
-             qu = lu ? new Ou : Uu[Zu];
-           lu && Uu.push(qu), qu.vertexCount = (0, cu.g)(Xu);
-           const fu = qu.metadata[Cu.g];
-           qu.material = null !== fu && void 0 !== fu ? fu : this.terrainMatManager.oO(Xu.terrainID), ju.setChunkMesh(qu, (0, bu.g)(Xu), uu.pos), lu && (qu.metadata[mu] = uu.i, qu.metadata[vu] = uu.k, qu.metadata[ku] = !0, su && this.Uc.tO.iY(qu, su), this.Uc.emit("addingTerrainMe … [truncated]
+             UG = kG ? new KG : SG[LG];
+           kG && SG.push(UG), UG.vertexCount = (0, fG.d)(yG);
+           const YG = UG.metadata[VG.f];
+           UG.material = null !== YG && void 0 !== YG ? YG : this.terrainMatManager.vK(yG.terrainID), ZG.setChunkMesh(UG, (0, pG.f)(yG), GG.pos), kG && (UG.metadata[vG] = GG.i, UG.metadata[aG] = GG.k, UG.metadata[FG] = !0, wG && this.wf.HK.eh(UG, wG), this.wf.emit("addingTerrainMe … [truncated]
```

#### 3749. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27979` → after: `L27623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27623) · [Before (L27979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27979)

```diff
-           this.Uc.emit("removingTerrainMesh", uu), ju.removeChunkMesh(uu), uu.dispose()
+           this.wf.emit("removingTerrainMesh", GG), ZG.removeChunkMesh(GG), GG.dispose()
```

#### 3750. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27983-L27984` → after: `L27627-L27628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27627-L27628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27627-L27628) · [Before (L27983-L27984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27983-L27984)

```diff
-         const ju = uu.dY;
-         if (Eu.length !== ju.length) return console.warn(`Light-only update submesh count mismatch: ${Eu.length} light arrays vs ${ju.length} meshes`), !1;
+         const ZG = GG.Ih;
+         if (bG.length !== ZG.length) return console.warn(`Light-only update submesh count mismatch: ${bG.length} light arrays vs ${ZG.length} meshes`), !1;
```

#### 3751. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27989` → after: `L27633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27633) · [Before (L27989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27989)

```diff
-           if (qu.length !== fu) return console.warn(`Light-only update vertex count mismatch on submesh ${lu}: ${qu.length} vs ${fu}`), !1;
+           if (UG.length !== YG) return console.warn(`Light-only update vertex count mismatch on submesh ${kG}: ${UG.length} vs ${YG}`), !1;
```

#### 3752. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27991` → after: `L27635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27635) · [Before (L27991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27991)

```diff
-           if (uu instanceof Ou) qu.length > 0 && (null === (su = this.Uc.tO.xO) || void 0 === su || null === (Uu = su.terrain) || void 0 === Uu || Uu.setChunkMeshLight(uu, (0, bu.i)(qu)));
+           if (GG instanceof KG) UG.length > 0 && (null === (wG = this.wf.HK.tK) || void 0 === wG || null === (SG = wG.terrain) || void 0 === SG || SG.setChunkMeshLight(GG, (0, pG.j)(UG)));
```

#### 3753. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27996` → after: `L27640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27640) · [Before (L27996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L27996)

```diff
-             ju && ju.isUpdatable() ? ju.updateDirectly(Eu, 0) : uu.setVerticesData("aPackedLightLevels", Eu, !0, 1), this.meshBuilder.releaseCpuCopies(uu), null === (Zu = this.Uc.tO.xO) || void 0 === Zu || null === (Xu = Zu.terrain) || void 0 === Xu || Xu.setChunkMeshLight(uu, (0 … [truncated]
+             ZG && ZG.isUpdatable() ? ZG.updateDirectly(bG, 0) : GG.setVerticesData("aPackedLightLevels", bG, !0, 1), this.meshBuilder.releaseCpuCopies(GG), null === (LG = this.wf.HK.tK) || void 0 === LG || null === (yG = LG.terrain) || void 0 === yG || yG.setChunkMeshLight(GG, (0 … [truncated]
```

#### 3754. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28002` → after: `L27646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27646) · [Before (L28002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28002)

```diff
-         return this.Uc.tO.aY && !uu.uO && !(0, lu.B)(uu.ZO, uu.j, Eu)
+         return this.wf.HK.Fh && !GG.ZK && !(0, kG.y)(GG.kK, GG.j, bG)
```

#### 3755. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28005` → after: `L27649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27649) · [Before (L28005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28005)

```diff
-         this.providedLightEligible(uu, this.Uc.zb.cO(uu.i, uu.k)) && (uu.oY = !0, this.storeAndPropagateLight(uu, Eu, ju, !0), uu.PY = !0)
+         this.providedLightEligible(GG, this.wf.Op.KK(GG.i, GG.k)) && (GG.jh = !0, this.storeAndPropagateLight(GG, bG, ZG, !0), GG.ah = !0)
```

#### 3756. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28009-L28011` → after: `L27653-L27655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27653-L27655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27653-L27655) · [Before (L28009-L28011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28009-L28011)

```diff
-         const Uu = uu.sO,
-           Zu = uu.XO;
-         if ((0, Xu.o)(uu, Eu, ju), !uu.uO) {
+         const SG = GG.LK,
+           LG = GG.UK;
+         if ((0, yG.r)(GG, bG, ZG), !GG.ZK) {
```

#### 3757. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28015` → after: `L27659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27659) · [Before (L28015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28015)

```diff
-             const [ju, Uu, Zu] = lu.f[Eu], fu = uu.bO.get(ju, Uu, Zu);
+             const [ZG, SG, LG] = kG.h[bG], YG = GG.QK.get(ZG, SG, LG);
```

#### 3758. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28018-L28019` → after: `L27662-L27663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27662-L27663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27662-L27663) · [Before (L28018-L28019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28018-L28019)

```diff
-             fu.IY > 0 && (fu.qY ? this.Uc.zb.fY(fu) : Cu = !0);
-             const bu = !su && fu.PY;
+             YG.Hh > 0 && (YG.ph ? this.wf.Op.fh(YG) : VG = !0);
+             const pG = !wG && YG.ah;
```

#### 3759. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28027` → after: `L27671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27671) · [Before (L28027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28027)

```diff
-               ju && (su || this.invalidateProvidedLightFrom(uu, ju), ju.IY > 0 && (ju.qY = !0, uu.FO && (ju.FO = !0), this.Uc.zb.fY(ju, uu.FO)))
+               ZG && (wG || this.invalidateProvidedLightFrom(GG, ZG), ZG.Hh > 0 && (ZG.ph = !0, GG.eK && (ZG.eK = !0), this.wf.Op.fh(ZG, GG.eK)))
```

#### 3760. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28031-L28032` → after: `L27675-L27676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27675-L27676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27675-L27676) · [Before (L28031-L28032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28031-L28032)

```diff
-         const qu = (0, lu.D)(uu.size, lu.j, Uu, Zu, Eu, ju);
-         this.requeueSkySeedReaders(uu, qu, !su, !uu.qY), Uu && (0, Xu.q)(Uu), this.Uc.pY.wY(uu)
+         const UG = (0, kG.B)(GG.size, kG.m, SG, LG, bG, ZG);
+         this.requeueSkySeedReaders(GG, UG, !wG, !GG.ph), SG && (0, yG.v)(SG), this.wf.Ch.Wh(GG)
```

#### 3761. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28035` → after: `L27679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27679) · [Before (L28035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28035)

```diff
-         Eu.PY = !1, uu.oY || (Eu.oY = !1)
+         bG.ah = !1, GG.jh || (bG.jh = !1)
```

#### 3762. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28041-L28042` → after: `L27685-L27686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27685-L27686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27685-L27686) · [Before (L28041-L28042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28041-L28042)

```diff
-               const su = Eu >> 3 * (Zu + 1) + ju + 1 & 1 ? uu.bO.get(Zu, -1, ju) : null;
-               null !== su && void 0 !== su && su.PY && this.invalidateProvidedLightFrom(uu, su)
+               const wG = bG >> 3 * (LG + 1) + ZG + 1 & 1 ? GG.QK.get(LG, -1, ZG) : null;
+               null !== wG && void 0 !== wG && wG.ah && this.invalidateProvidedLightFrom(GG, wG)
```

#### 3763. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28045` → after: `L27689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27689) · [Before (L28045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28045)

```diff
-         if (Uu && (Eu = lu.b), Eu)
+         if (SG && (bG = kG.d), bG)
```

#### 3764. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28051-L28052` → after: `L27695-L27696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27695-L27696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27695-L27696) · [Before (L28051-L28052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28051-L28052)

```diff
-                 const Uu = uu.bO.get(ju, -1, su);
-                 Uu && 0 !== Uu.IY && !Uu.qY && (Uu.iO ? this.skySeedRecheck.add(Uu) : this.skySeedStale(Uu, uu) && (Uu.qY = !0, this.Uc.zb.fY(Uu)))
+                 const SG = GG.QK.get(ZG, -1, wG);
+                 SG && 0 !== SG.Hh && !SG.ph && (SG.sK ? this.skySeedRecheck.add(SG) : this.skySeedStale(SG, GG) && (SG.ph = !0, this.wf.Op.fh(SG)))
```

#### 3765. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28061` → after: `L27705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27705) · [Before (L28061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28061)

```diff
-         this.skySeedRecheck.delete(uu), Eu && (this.checkHeldSkySeedReaders(uu), ju && this.skySeedStale(uu, null) && (uu.qY = !0, this.Uc.zb.fY(uu)))
+         this.skySeedRecheck.delete(GG), bG && (this.checkHeldSkySeedReaders(GG), ZG && this.skySeedStale(GG, null) && (GG.ph = !0, this.wf.Op.fh(GG)))
```

#### 3766. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28064` → after: `L27708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27708) · [Before (L28064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28064)

```diff
-         this.requeueSkySeedReaders(uu, lu.b, !1, !uu.qY)
+         this.requeueSkySeedReaders(GG, kG.d, !1, !GG.ph)
```

#### 3767. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28067-L28068` → after: `L27711-L27712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27711-L27712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27711-L27712) · [Before (L28067-L28068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28067-L28068)

```diff
-         const ju = uu.sO;
-         if (!ju || uu.uO) return !1;
+         const ZG = GG.LK;
+         if (!ZG || GG.ZK) return !1;
```

#### 3768. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28070` → after: `L27714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27714) · [Before (L28070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28070)

```diff
-         if (void 0 === su) return !uu.PY;
+         if (void 0 === wG) return !GG.ah;
```

#### 3769. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28076-L28077` → after: `L27720-L27721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27720-L27721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27720-L27721) · [Before (L28076-L28077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28076-L28077)

```diff
-             const qu = uu.bO.get(Xu, 1, ju);
-             if ((!Eu || qu === Eu) && (0, lu.C)(su, null !== (Zu = null === qu || void 0 === qu ? void 0 : qu.sO) && void 0 !== Zu ? Zu : null, !(null === qu || void 0 === qu || !qu.XO), Xu, ju, Uu, lu.j, 255)) return !0
+             const UG = GG.QK.get(yG, 1, ZG);
+             if ((!bG || UG === bG) && (0, kG.A)(wG, null !== (LG = null === UG || void 0 === UG ? void 0 : UG.LK) && void 0 !== LG ? LG : null, !(null === UG || void 0 === UG || !UG.UK), yG, ZG, SG, kG.m, 255)) return !0
```

#### 3770. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28087` → after: `L27731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27731) · [Before (L28087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28087)

```diff
-         const ju = null !== (uu = null === (Eu = this.busynessTracker) || void 0 === Eu ? void 0 : Eu.sample()) && void 0 !== uu ? uu : null,
+         const ZG = null !== (GG = null === (bG = this.busynessTracker) || void 0 === bG ? void 0 : bG.sample()) && void 0 !== GG ? GG : null,
```

#### 3771. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28117` → after: `L27761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27761) · [Before (L28117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28117)

```diff
-         return this.queueBudget.Mb(this.liveWorkerCount)
+         return this.queueBudget.rp(this.liveWorkerCount)
```

#### 3772. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28120-L28122` → after: `L27764-L27766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27764-L27766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27764-L27766) · [Before (L28120-L28122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28120-L28122)

```diff
-         this.Uc.zb.BY.CO.forEach((uu => {
-           const Eu = this.Uc.zb.CY.bY(uu[0], uu[1], uu[2]);
-           Eu && Eu.dY.length > 0 && (this.disposeChunkMeshes(Eu), this.chunksToRemeshOnRestore.add(Eu))
+         this.wf.Op.Nh.fK.forEach((GG => {
+           const bG = this.wf.Op.Qh.Kh(GG[0], GG[1], GG[2]);
+           bG && bG.Ih.length > 0 && (this.disposeChunkMeshes(bG), this.chunksToRemeshOnRestore.add(bG))
```

#### 3773. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28127` → after: `L27771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27771) · [Before (L28127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28127)

```diff
-         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((Eu => !(!uu.has(Eu) && 0 === Eu.dY.length) && (this.retryDroppedChunk(Eu), !0)), !0)
+         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((bG => !(!GG.has(bG) && 0 === bG.Ih.length) && (this.retryDroppedChunk(bG), !0)), !0)
```

#### 3774. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28130` → after: `L27774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27774) · [Before (L28130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28130)

```diff
-         this.requeueKnownChunks((uu => 0 !== uu.dY.length && (this.retryDroppedChunk(uu), !0)), !0)
+         this.requeueKnownChunks((GG => 0 !== GG.Ih.length && (this.retryDroppedChunk(GG), !0)), !0)
```

#### 3775. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28140` → after: `L27784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27784) · [Before (L28140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28140)

```diff
-         this.requeueKnownChunks((uu => !uu.MY && uu.IY > 0), !1)
+         this.requeueKnownChunks((GG => !GG.Xh && GG.Hh > 0), !1)
```

#### 3776. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28143-L28145` → after: `L27787-L27789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27787-L27789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27787-L27789) · [Before (L28143-L28145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28143-L28145)

```diff
-         this.Uc.zb.BY.CO.forEach((ju => {
-           const su = this.Uc.zb.CY.bY(ju[0], ju[1], ju[2]);
-           su && uu(su) && (su.qY = !0, Eu && (su.NY = !0), this.Uc.zb.fY(su))
+         this.wf.Op.Nh.fK.forEach((ZG => {
+           const wG = this.wf.Op.Qh.Kh(ZG[0], ZG[1], ZG[2]);
+           wG && GG(wG) && (wG.ph = !0, bG && (wG.dh = !0), this.wf.Op.fh(wG))
```

#### 3777. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28156` → after: `L27800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27800) · [Before (L28156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28156)

```diff
-   37909: (uu, Eu, ju) => {
+   37892: (GG, bG, ZG) => {
```

#### 3778. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28173` → after: `L27817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27817) · [Before (L28173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28173)

```diff
-   37907: (uu, Eu, ju) => {
+   37885: (GG, bG, ZG) => {
```

#### 3779. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28176-L28178` → after: `L27820-L27822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27820-L27822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27820-L27822) · [Before (L28176-L28178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28176-L28178)

```diff
-       g: () => su,
-       k: () => Uu,
-       o: () => Zu
+       f: () => wG,
+       i: () => SG,
+       k: () => LG
```

#### 3780. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28181` → after: `L27825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27825) · [Before (L28181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28181)

```diff
-       mj: 0,
+       vZ: 0,
```

#### 3781. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28199` → after: `L27843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27843) · [Before (L28199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28199)

```diff
-   38159: (uu, Eu, ju) => {
+   38180: (GG, bG, ZG) => {
```

#### 3782. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28201-L28202` → after: `L27845-L27846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27845-L27846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27845-L27846) · [Before (L28201-L28202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28201-L28202)

```diff
-       e: () => Uu,
-       i: () => Zu
+       c: () => SG,
+       f: () => LG
```

#### 3783. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28204` → after: `L27848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27848) · [Before (L28204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28204)

```diff
-     var su = ju(37874);
+     var wG = ZG(37855);
```

#### 3784. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28207-L28208` → after: `L27851-L27852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27851-L27852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27851-L27852) · [Before (L28207-L28208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28207-L28208)

```diff
-       const ju = uu.Of,
-         Uu = uu.metadata[su.F] * Math.max(Math.abs(ju.x), Math.abs(ju.y), Math.abs(ju.z)),
+       const ZG = GG.nY,
+         SG = GG.metadata[wG.H] * Math.max(Math.abs(ZG.x), Math.abs(ZG.y), Math.abs(ZG.z)),
```

#### 3785. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28220` → after: `L27864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27864) · [Before (L28220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28220)

```diff
-       return void 0 !== (null === (ju = uu.metadata) || void 0 === ju ? void 0 : ju[su.F]) ? Uu(uu, Eu) : (uu.computeWorldMatrix(), uu.isInFrustum(Eu))
+       return void 0 !== (null === (ZG = GG.metadata) || void 0 === ZG ? void 0 : ZG[wG.H]) ? SG(GG, bG) : (GG.computeWorldMatrix(), GG.isInFrustum(bG))
```

#### 3786. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28223` → after: `L27867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27867) · [Before (L28223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28223)

```diff
-   38068: (uu, Eu, ju) => {
+   38073: (GG, bG, ZG) => {
```

#### 3787. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28225-L28227` → after: `L27869-L27871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27869-L27871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27869-L27871) · [Before (L28225-L28227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28225-L28227)

```diff
-       b: () => Xu,
-       d: () => Zu,
-       h: () => lu,
+       e: () => yG,
+       i: () => LG,
+       j: () => kG,
```

#### 3788. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28247` → after: `L27891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27891) · [Before (L28247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28247)

```diff
-       return "function" === typeof uu && null !== (Eu = uu[Uu]) && void 0 !== Eu ? Eu : null
+       return "function" === typeof GG && null !== (bG = GG[SG]) && void 0 !== bG ? bG : null
```

#### 3789. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28250` → after: `L27894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27894) · [Before (L28250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28250)

```diff
-   37893: (uu, Eu, ju) => {
+   37875: (GG, bG, ZG) => {
```

#### 3790. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28252` → after: `L27896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27896) · [Before (L28252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28252)

```diff
-       e: () => su
+       b: () => wG
```

#### 3791. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28298` → after: `L27942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27942) · [Before (L28298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28298)

```diff
-   38306: (uu, Eu, ju) => {
+   38318: (GG, bG, ZG) => {
```

#### 3792. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28302-L28307` → after: `L27946-L27951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27946-L27951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27946-L27951) · [Before (L28302-L28307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28302-L28307)

```diff
-     var su = ju(37488),
-       Uu = ju(38303),
-       Zu = ju(37843),
-       Xu = ju(37603),
-       lu = ju(37867),
-       qu = ju(38291);
+     var wG = ZG(37432),
+       SG = ZG(38311),
+       LG = ZG(37820),
+       yG = ZG(37550),
+       kG = ZG(37845),
+       UG = ZG(38298);
```

#### 3793. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28309-L28310` → after: `L27953-L27954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27953-L27954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27953-L27954) · [Before (L28309-L28310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28309-L28310)

```diff
-     var Cu = ju(37837);
-     class bu extends Cu.c {
+     var VG = ZG(37808);
+     class pG extends VG.d {
```

#### 3794. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28312` → after: `L27956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27956) · [Before (L28312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28312)

```diff
-         super(uu, Eu, ju), this.model = su, this.owned = Uu, this.HY = Xu, this.sideOrientation = void 0, this.Hr = {}, this._userInstancedBuffersStorage = void 0, this.JV = !1, this.CUu = null, this.instances = [], this._thinInstanceDataStorage = {
+         super(GG, bG, ZG), this.model = wG, this.owned = SG, this.Bh = yG, this.sideOrientation = void 0, this.hA = {}, this._userInstancedBuffersStorage = void 0, this.Ul = !1, this.ESG = null, this.instances = [], this._thinInstanceDataStorage = {
```

#### 3795. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28317` → after: `L27961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27961) · [Before (L28317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28317)

```diff
-         }, this.rEu = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.PO = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
+         }, this.tbG = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.FK = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
```

#### 3796. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28321` → after: `L27965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27965) · [Before (L28321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28321)

```diff
-         lu.create(this.row, 0, Zu.d.isVisible), su && lu.setBounds(this.row, su.boundsMin, su.boundsMax), this.materialIndices = new Array(Xu.length / 4).fill(0), this.sideOrientation = uu.hV().useRightHandedSystem ? 0 : 1, this.material = null
+         kG.create(this.row, 0, LG.d.isVisible), wG && kG.setBounds(this.row, wG.boundsMin, wG.boundsMax), this.materialIndices = new Array(yG.length / 4).fill(0), this.sideOrientation = GG.Dv().useRightHandedSystem ? 0 : 1, this.material = null
```

#### 3797. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28327` → after: `L27971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27971) · [Before (L28327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28327)

```diff
-         this.tO.model.meshes.setFlag(this.row, Zu.d.alwaysSelect, uu)
+         this.HK.model.meshes.setFlag(this.row, LG.d.alwaysSelect, GG)
```

#### 3798. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28333` → after: `L27977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27977) · [Before (L28333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28333)

```diff
-         this.tO.model.meshes.setFlag(this.row, Zu.d.isVisible, uu)
+         this.HK.model.meshes.setFlag(this.row, LG.d.isVisible, GG)
```

#### 3799. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28335` → after: `L27979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27979) · [Before (L28335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28335)

```diff
-       get fUu() {
+       get zSG() {
```

#### 3800. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28339` → after: `L27983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27983) · [Before (L28339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28339)

```diff
-         return this.tO.model.meshes.visibility[this.row]
+         return this.HK.model.meshes.visibility[this.row]
```

#### 3801. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28342` → after: `L27986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27986) · [Before (L28342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28342)

```diff
-         for (const Eu of [this, ...this.instances]) this.tO.model.meshes.setVisibility(Eu.row, uu)
+         for (const bG of [this, ...this.instances]) this.HK.model.meshes.setVisibility(bG.row, GG)
```

#### 3802. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28345` → after: `L27989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27989) · [Before (L28345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28345)

```diff
-         return this.tO.model.meshes.layer[this.row]
+         return this.HK.model.meshes.layer[this.row]
```

#### 3803. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28348` → after: `L27992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27992) · [Before (L28348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28348)

```diff
-         for (const Eu of [this, ...this.instances]) this.tO.model.meshes.setLayer(Eu.row, uu)
+         for (const bG of [this, ...this.instances]) this.HK.model.meshes.setLayer(bG.row, GG)
```

#### 3804. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28354` → after: `L27998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L27998) · [Before (L28354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28354)

```diff
-         this.tO.model.meshes.setFlag(this.row, Zu.d.pickable, uu)
+         this.HK.model.meshes.setFlag(this.row, LG.d.pickable, GG)
```

#### 3805. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28361` → after: `L28005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28005) · [Before (L28361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28361)

```diff
-         const Eu = "MultiMaterial" === (null === uu || void 0 === uu ? void 0 : uu.getClassName()) ? uu.M6 : null,
+         const bG = "MultiMaterial" === (null === GG || void 0 === GG ? void 0 : GG.getClassName()) ? GG.UGG : null,
```

#### 3806. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28365` → after: `L28009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28009) · [Before (L28365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28365)

```diff
-             return null !== (su = Uu && (0, Xu.$)(Uu)) && void 0 !== su ? su : null
+             return null !== (wG = SG && (0, yG.eb)(SG)) && void 0 !== wG ? wG : null
```

#### 3807. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28367-L28368` → after: `L28011-L28012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28011-L28012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28011-L28012) · [Before (L28367-L28368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28367-L28368)

```diff
-           su = new Zu.e(this, this.model, this.HY, ju);
-         for (const Uu of [this, ...this.instances]) this.tO.model.meshes.setParts(Uu.row, su)
+           wG = new LG.h(this, this.model, this.Bh, ZG);
+         for (const SG of [this, ...this.instances]) this.HK.model.meshes.setParts(SG.row, wG)
```

#### 3808. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28380` → after: `L28024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28024) · [Before (L28380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28380)

```diff
-         return (this.forcedInstanceCount || this.F_) > 0
+         return (this.forcedInstanceCount || this.B5) > 0
```

#### 3809. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28384` → after: `L28028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28028) · [Before (L28384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28384)

```diff
-         return this.tO.hV().wO()
+         return this.HK.Dv().CK()
```

#### 3810. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28387` → after: `L28031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28031) · [Before (L28387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28387)

```diff
-         return this.tO.model.meshes.parts[this.row]
+         return this.HK.model.meshes.parts[this.row]
```

#### 3811. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28394` → after: `L28038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28038) · [Before (L28394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28394)

```diff
-         } = null !== (uu = this.model) && void 0 !== uu ? uu : {
+         } = null !== (GG = this.model) && void 0 !== GG ? GG : {
```

#### 3812. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28403` → after: `L28047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28047) · [Before (L28403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28403)

```diff
-             qu = .5 * su.dO.Distance(uu, Eu);
+             UG = .5 * wG.mK.Distance(GG, bG);
```

#### 3813. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28405` → after: `L28049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28049) · [Before (L28405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28405)

```diff
-             Zu.k_(Number.MAX_VALUE), Xu.k_(-Number.MAX_VALUE);
+             LG.N7(Number.MAX_VALUE), yG.N7(-Number.MAX_VALUE);
```

#### 3814. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28410` → after: `L28054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28054) · [Before (L28410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28410)

```diff
-               su.dO.CheckExtends(su.dO.TransformCoordinatesFromFloatsToRef(lu, qu, fu, ju, new su.dO), Zu, Xu)
+               wG.mK.CheckExtends(wG.mK.TransformCoordinatesFromFloatsToRef(kG, UG, YG, ZG, new wG.mK), LG, yG)
```

#### 3815. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28412-L28413` → after: `L28056-L28057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28056-L28057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28056-L28057) · [Before (L28412-L28413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28412-L28413)

```diff
-             lu = su.dO.TransformCoordinates(Uu, ju);
-             const Cu = su.dO.TransformNormalFromFloatsToRef(1, 1, 1, ju, new su.dO);
+             kG = wG.mK.TransformCoordinates(SG, ZG);
+             const VG = wG.mK.TransformNormalFromFloatsToRef(1, 1, 1, ZG, new wG.mK);
```

#### 3816. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28427` → after: `L28071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28071) · [Before (L28427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28427)

```diff
-             Isu: {
+             xwG: {
```

#### 3817. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28435` → after: `L28079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28079) · [Before (L28435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28435)

```diff
-         }(su.dO.FromArray(Eu), su.dO.FromArray(ju), this.getWorldMatrix())
+         }(wG.mK.FromArray(bG), wG.mK.FromArray(ZG), this.getWorldMatrix())
```

#### 3818. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28438` → after: `L28082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28082) · [Before (L28438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28438)

```diff
-         return this.EW().Isu.isInFrustum(uu)
+         return this.HA().xwG.isInFrustum(GG)
```

#### 3819. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28442` → after: `L28086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28086) · [Before (L28442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28442)

```diff
-         return null !== (uu = null === (Eu = this.model) || void 0 === Eu ? void 0 : Eu.vertexCount) && void 0 !== uu ? uu : 0
+         return null !== (GG = null === (bG = this.model) || void 0 === bG ? void 0 : bG.vertexCount) && void 0 !== GG ? GG : 0
```

#### 3820. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28461` → after: `L28105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28105) · [Before (L28461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28461)

```diff
-         return Xu === lu.e && 0 === su && Uu === 4 * Zu && (Array.isArray(ju) || ju instanceof Float32Array) && ju.length === this.model.vertexCount * Zu ? ju : (0, lu.j)(Eu, this.model.vertexCount)
+         return yG === kG.d && 0 === wG && SG === 4 * LG && (Array.isArray(ZG) || ZG instanceof Float32Array) && ZG.length === this.model.vertexCount * LG ? ZG : (0, kG.j)(bG, this.model.vertexCount)
```

#### 3821. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28470` → after: `L28114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28114) · [Before (L28470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28470)

```diff
-         }))) && void 0 !== uu ? uu : []
+         }))) && void 0 !== GG ? GG : []
```

#### 3822. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28472` → after: `L28116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28116) · [Before (L28472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28472)

```diff
-       Ysu() {
+       IwG() {
```

#### 3823. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28474` → after: `L28118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28118) · [Before (L28474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28474)

```diff
-         return null !== (uu = null === (Eu = this.model) || void 0 === Eu ? void 0 : Eu.indexData) && void 0 !== uu ? uu : []
+         return null !== (GG = null === (bG = this.model) || void 0 === bG ? void 0 : bG.indexData) && void 0 !== GG ? GG : []
```

#### 3824. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28486` → after: `L28130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28130) · [Before (L28486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28486)

```diff
-           return null !== (Eu = this.getVerticesData(uu)) && void 0 !== Eu ? Eu : void 0
+           return null !== (bG = this.getVerticesData(GG)) && void 0 !== bG ? bG : void 0
```

#### 3825. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28492` → after: `L28136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28136) · [Before (L28492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28492)

```diff
-         return (0, qu.e)({
+         return (0, UG.g)({
```

#### 3826. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28495` → after: `L28139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28139) · [Before (L28495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28495)

```diff
-           indices: null !== (Eu = this.model.indexData) && void 0 !== Eu ? Eu : [],
+           indices: null !== (bG = this.model.indexData) && void 0 !== bG ? bG : [],
```

#### 3827. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28508` → after: `L28152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28152) · [Before (L28508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28508)

```diff
-         return this.position = su.dO.ZeroReadOnly, this.rotation = su.dO.ZeroReadOnly, this.Of = su.dO.OneReadOnly, uu && (this.rotationQuaternion = {
+         return this.position = wG.mK.ZeroReadOnly, this.rotation = wG.mK.ZeroReadOnly, this.nY = wG.mK.OneReadOnly, GG && (this.rotationQuaternion = {
```

#### 3828. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28517` → after: `L28161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28161) · [Before (L28517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28517)

```diff
-         ju.set(Eu), (0, lu.B)(this.model, ju)
+         ZG.set(bG), (0, kG.x)(this.model, ZG)
```

#### 3829. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28520` → after: `L28164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28164) · [Before (L28520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28520)

```diff
-         (0, lu.p)(uu), this.owned && (0, lu.x)(this.model), this.model = uu, this.owned = !0, Eu !== this.HY && (this.HY = Eu, this.materialIndices = new Array(Eu.length / 4).fill(0), this.partBoxes = null), this.tO.model.meshes.setBounds(this.row, uu.boundsMin, uu.boundsMax), th … [truncated]
+         (0, kG.n)(GG), this.owned && (0, kG.v)(this.model), this.model = GG, this.owned = !0, bG !== this.Bh && (this.Bh = bG, this.materialIndices = new Array(bG.length / 4).fill(0), this.partBoxes = null), this.HK.model.meshes.setBounds(this.row, GG.boundsMin, GG.boundsMax), th … [truncated]
```

#### 3830. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28523` → after: `L28167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28167) · [Before (L28523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28523)

```diff
-         return new Ou(this, this.tO, uu, this.tO.hV().getUniqueId(), this.model, !1, this.HY)
+         return new KG(this, this.HK, GG, this.HK.Dv().getUniqueId(), this.model, !1, this.Bh)
```

#### 3831. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28526` → after: `L28170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28170) · [Before (L28526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28526)

```diff
-         const Eu = new bu(this.tO, uu, this.tO.hV().getUniqueId(), this.model, !1, this.HY);
+         const bG = new pG(this.HK, GG, this.HK.Dv().getUniqueId(), this.model, !1, this.Bh);
```

#### 3832. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28528` → after: `L28172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28172) · [Before (L28528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28528)

```diff
-         return Nu(ju = this, su = Eu), su.parent = ju.parent, su.Wk(ju.isEnabled(!1)),
+         return QG(ZG = this, wG = bG), wG.parent = ZG.parent, wG.DW(ZG.isEnabled(!1)),
```

#### 3833. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28544` → after: `L28188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28188) · [Before (L28544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28544)

```diff
-         for (const Zu of [this, ...this.instances]) Zu.Hr[uu] = null;
+         for (const LG of [this, ...this.instances]) LG.hA[GG] = null;
```

#### 3834. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28567-L28568` → after: `L28211-L28212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28211-L28212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28211-L28212) · [Before (L28567-L28568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28567-L28568)

```diff
-         const Eu = null === (uu = this.CUu) || void 0 === uu ? void 0 : uu.instances;
-         null === Eu || void 0 === Eu || Eu.splice(Eu.indexOf(this), 1), this.owned && (0, lu.x)(this.model)
+         const bG = null === (GG = this.ESG) || void 0 === GG ? void 0 : GG.instances;
+         null === bG || void 0 === bG || bG.splice(bG.indexOf(this), 1), this.owned && (0, kG.v)(this.model)
```

#### 3835. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28584` → after: `L28228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28228) · [Before (L28584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28584)

```diff
-           const uu = null !== Eu && void 0 !== Eu ? Eu : cu.length / Uu;
+           const GG = null !== bG && void 0 !== bG ? bG : fG.length / SG;
```

#### 3836. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28591` → after: `L28235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28235) · [Before (L28591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28591)

```diff
-             glType: lu.e,
+             glType: kG.d,
```

#### 3837. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28597-L28598` → after: `L28241-L28242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28241-L28242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28241-L28242) · [Before (L28597-L28598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28597-L28598)

```diff
-         } = uu, Cu = fu ? (0, lu.v)(Uu, ((uu, Eu) => fu[3 * uu + Eu])) : [Zu, Xu];
-         this.replaceModel(new lu.f(qu, su, Uu, Cu[0], Cu[1]), this.HY)
+         } = GG, VG = YG ? (0, kG.s)(SG, ((GG, bG) => YG[3 * GG + bG])) : [LG, yG];
+         this.replaceModel(new kG.f(UG, wG, SG, VG[0], VG[1]), this.Bh)
```

#### 3838. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28605` → after: `L28249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28249) · [Before (L28605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28605)

```diff
-         return 0 !== (this.tO.model.meshes.flags[this.row] & uu)
+         return 0 !== (this.HK.model.meshes.flags[this.row] & GG)
```

#### 3839. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28608` → after: `L28252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28252) · [Before (L28608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28608)

```diff
-     const cu = ["billboardMode", "infiniteDistance", "isVisible", "VY", "JO", "visibility", "renderingGroupId", "sideOrientation", "rEu", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "PO", "metadata"];
+     const fG = ["billboardMode", "infiniteDistance", "isVisible", "qh", "WK", "visibility", "renderingGroupId", "sideOrientation", "tbG", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "FK", "metadata"];
```

#### 3840. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28611` → after: `L28255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28255) · [Before (L28611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28611)

```diff
-       Eu.position = uu.position, Eu.rotation = uu.rotation, uu.rotationQuaternion && (Eu.rotationQuaternion = uu.rotationQuaternion), Eu.Of = uu.Of
+       bG.position = GG.position, bG.rotation = GG.rotation, GG.rotationQuaternion && (bG.rotationQuaternion = GG.rotationQuaternion), bG.nY = GG.nY
```

#### 3841. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28616` → after: `L28260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28260) · [Before (L28616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28616)

```diff
-         super(...ju), this.CUu = uu, this.JV = !0, uu.instances.push(this);
+         super(...ZG), this.ESG = GG, this.Ul = !0, GG.instances.push(this);
```

#### 3842. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28619-L28620` → after: `L28263-L28264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28263-L28264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28263-L28264) · [Before (L28619-L28620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28619-L28620)

```diff
-         } = this.tO.model;
-         Uu.setParts(this.row, Uu.parts[uu.row]), this.partBoxes = uu.partBoxes, Uu.setVisibility(this.row, uu.visibility), Uu.setLayer(this.row, uu.renderingGroupId), Nu(uu, this), this.infiniteDistance = uu.infiniteDistance, Object.assign(this.Hr, uu.Hr), this.parent = uu.parent
+         } = this.HK.model;
+         SG.setParts(this.row, SG.parts[GG.row]), this.partBoxes = GG.partBoxes, SG.setVisibility(this.row, GG.visibility), SG.setLayer(this.row, GG.renderingGroupId), QG(GG, this), this.infiniteDistance = GG.infiniteDistance, Object.assign(this.hA, GG.hA), this.parent = GG.parent
```

#### 3843. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28623` → after: `L28267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28267) · [Before (L28623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28623)

```diff
-         return this.CUu.visibility
+         return this.ESG.visibility
```

#### 3844. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28627` → after: `L28271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28271) · [Before (L28627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28627)

```diff
-         return this.CUu.renderingGroupId
+         return this.ESG.renderingGroupId
```

#### 3845. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28631` → after: `L28275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28275) · [Before (L28631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28631)

```diff
-         return this.CUu.material
+         return this.ESG.material
```

#### 3846. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28636` → after: `L28280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28280) · [Before (L28636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28636)

```diff
-   37837: (uu, Eu, ju) => {
+   37808: (GG, bG, ZG) => {
```

#### 3847. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28638-L28640` → after: `L28282-L28284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28282-L28284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28282-L28284) · [Before (L28638-L28640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28638-L28640)

```diff
-       c: () => bu,
-       g: () => fu,
-       j: () => cu
+       d: () => pG,
+       e: () => YG,
+       f: () => fG
```

#### 3848. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28642-L28644` → after: `L28286-L28288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28286-L28288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28286-L28288) · [Before (L28642-L28644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28642-L28644)

```diff
-     var su = ju(37488),
-       Uu = ju(37841),
-       Zu = ju(37858);
+     var wG = ZG(37432),
+       SG = ZG(37816),
+       LG = ZG(37843);
```

#### 3849. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28646` → after: `L28290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28290) · [Before (L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28646)

```diff
-       lu = new su.dO;
+       kG = new wG.mK;
```

#### 3850. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28673` → after: `L28317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28317) · [Before (L28673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28673)

```diff
-       BXu(uu, Eu, ju) {
+       ZkG(GG, bG, ZG) {
```

#### 3851. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28676` → after: `L28320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28320) · [Before (L28676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28676)

```diff
-       Osu() {
+       mwG() {
```

#### 3852. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28679` → after: `L28323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28323) · [Before (L28679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28679)

```diff
-       sju(uu) {
+       hZG(GG) {
```

#### 3853. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28684` → after: `L28328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28328) · [Before (L28684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28684)

```diff
-         return new su.dO(this.x, this.y, this.z)
+         return new wG.mK(this.x, this.y, this.z)
```

#### 3854. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28687` → after: `L28331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28331) · [Before (L28687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28687)

```diff
-         return new su.dO(this.x * uu, this.y * uu, this.z * uu)
+         return new wG.mK(this.x * GG, this.y * GG, this.z * GG)
```

#### 3855. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28727` → after: `L28371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28371) · [Before (L28727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28727)

```diff
-         this.tO = uu, this.name = Eu, this.uniqueId = ju, this.row = void 0, this.metadata = null, this.scalingDeterminant = 1, this.wV = new Cu, this.onEffectiveEnabledStateChangedObservable = new Cu, this.xXu = !1, this.rowPosition = void 0, this.rowScaling = void 0, this.rowRo … [truncated]
+         this.HK = GG, this.name = bG, this.uniqueId = ZG, this.row = void 0, this.metadata = null, this.scalingDeterminant = 1, this.Gl = new VG, this.onEffectiveEnabledStateChangedObservable = new VG, this.LkG = !1, this.rowPosition = void 0, this.rowScaling = void 0, this.rowRo … [truncated]
```

#### 3856. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28735` → after: `L28379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28379) · [Before (L28735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28735)

```diff
-         })), this.rowScaling = new qu((() => Uu.Of), 3 * Zu, ((uu, Eu, ju) => {
+         })), this.rowScaling = new UG((() => SG.nY), 3 * LG, ((GG, bG, ZG) => {
```

#### 3857. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28770` → after: `L28414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28414) · [Before (L28770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28770)

```diff
-         } = this.tO.model, ju = this.row;
+         } = this.HK.model, ZG = this.row;
```

#### 3858. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28788` → after: `L28432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28432) · [Before (L28788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28788)

```diff
-         return 0 !== (this.tO.model.nodes.flags[this.row] & Zu.d.infiniteDistance)
+         return 0 !== (this.HK.model.nodes.flags[this.row] & LG.f.infiniteDistance)
```

#### 3859. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28791` → after: `L28435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28435) · [Before (L28791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28791)

```diff
-         this.tO.model.nodes.setInfiniteDistance(this.row, uu)
+         this.HK.model.nodes.setInfiniteDistance(this.row, GG)
```

#### 3860. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28798` → after: `L28442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28442) · [Before (L28798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28798)

```diff
-         this.billboard = uu, this.tO.model.nodes.setBillboard(this.row, null !== (Eu = Uu.d[uu]) && void 0 !== Eu ? Eu : Zu.c.none)
+         this.billboard = GG, this.HK.model.nodes.setBillboard(this.row, null !== (bG = SG.e[GG]) && void 0 !== bG ? bG : LG.c.none)
```

#### 3861. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28804` → after: `L28448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28448) · [Before (L28804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28804)

```diff
-         if (uu === this.parentNode || this.fO) return;
+         if (GG === this.parentNode || this.pK) return;
```

#### 3862. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28806` → after: `L28450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28450) · [Before (L28806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28806)

```diff
-         this.leaveParent(), this.parentNode = uu, uu && fu(uu) && uu.children.push(this), this.tO.model.nodes.setParent(this.row, -1), (0, Uu.h)(this.tO, this, this.row), this.syncEnabled(Eu)
+         this.leaveParent(), this.parentNode = GG, GG && YG(GG) && GG.children.push(this), this.HK.model.nodes.setParent(this.row, -1), (0, SG.m)(this.HK, this, this.row), this.syncEnabled(bG)
```

#### 3863. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28814` → after: `L28458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28458) · [Before (L28814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28814)

```diff
-         return 0 !== (this.tO.model.nodes.flags[this.row] & Zu.d.enabled) && (!uu || null === this.parentNode || this.parentNode.isEnabled())
+         return 0 !== (this.HK.model.nodes.flags[this.row] & LG.f.enabled) && (!GG || null === this.parentNode || this.parentNode.isEnabled())
```

#### 3864. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28819` → after: `L28463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28463) · [Before (L28819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28819)

```diff
-           this.tO.model.nodes.Wk(this.row, uu), this.syncEnabled(Eu)
+           this.HK.model.nodes.DW(this.row, GG), this.syncEnabled(bG)
```

#### 3865. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28823` → after: `L28467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28467) · [Before (L28823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28823)

```diff
-         return this.tO.model.nodes.worldNow(this.row, this.tO.model.view, Xu), su.Matrix.FromArrayToRef(Xu, 0, this.zb)
+         return this.HK.model.nodes.worldNow(this.row, this.HK.model.view, yG), wG.Matrix.FromArrayToRef(yG, 0, this.Op)
```

#### 3866. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28832-L28833` → after: `L28476-L28477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28476-L28477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28476-L28477) · [Before (L28832-L28833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28832-L28833)

```diff
-           Xu = su.dO.TransformNormal(this.rowPosition.clone(), Zu.clone().invert()).add(uu.scale(Eu));
-         return this.position = su.dO.TransformNormal(Xu, Zu), this
+           yG = wG.mK.TransformNormal(this.rowPosition.clone(), LG.clone().invert()).add(GG.scale(bG));
+         return this.position = wG.mK.TransformNormal(yG, LG), this
```

#### 3867. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28841` → after: `L28485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28485) · [Before (L28841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28841)

```diff
-       tEu() {}
+       wZG() {}
```

#### 3868. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28844-L28845` → after: `L28488-L28489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28488-L28489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28488-L28489) · [Before (L28844-L28845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28844-L28845)

```diff
-         const ju = cu(this.tO, uu);
-         return this.tO.model.nodes.setWorldSource(ju.row, Eu), ju
+         const ZG = fG(this.HK, GG);
+         return this.HK.model.nodes.setWorldSource(ZG.row, bG), ZG
```

#### 3869. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28857` → after: `L28501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28501) · [Before (L28857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28857)

```diff
-         const uu = new su.dO(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         const GG = new wG.mK(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
```

#### 3870. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28865-L28866` → after: `L28509-L28510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28509-L28510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28509-L28510) · [Before (L28865-L28866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28865-L28866)

```diff
-             } = Uu.EW();
-             su.dO.CheckExtends(ju.minimumWorld, uu, Eu), su.dO.CheckExtends(ju.maximumWorld, uu, Eu)
+             } = SG.HA();
+             wG.mK.CheckExtends(ZG.minimumWorld, GG, bG), wG.mK.CheckExtends(ZG.maximumWorld, GG, bG)
```

#### 3871. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28879` → after: `L28523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28523) · [Before (L28879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28879)

```diff
-         return this.tO.hV()
+         return this.HK.Dv()
```

#### 3872. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28885` → after: `L28529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28529) · [Before (L28885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28885)

```diff
-         return this.fO
+         return this.pK
```

#### 3873. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28890` → after: `L28534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28534) · [Before (L28890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28890)

```diff
-         if (!this.fO) {
+         if (!this.pK) {
```

#### 3874. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28892` → after: `L28536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28536) · [Before (L28892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28892)

```diff
-           this.fO = !0, (0, Uu.j)(this.tO, this), this.leaveParent(), this.release(), this.wV.notify(), this.wV.clear()
+           this.pK = !0, (0, SG.q)(this.HK, this), this.leaveParent(), this.release(), this.Gl.notify(), this.Gl.clear()
```

#### 3875. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28912` → after: `L28556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28556) · [Before (L28912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28912)

```diff
-       return new bu(uu, Eu, uu.hV().getUniqueId())
+       return new pG(GG, bG, GG.Dv().getUniqueId())
```

#### 3876. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28915` → after: `L28559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28559) · [Before (L28915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28915)

```diff
-   37941: (uu, Eu, ju) => {
+   37928: (GG, bG, ZG) => {
```

#### 3877. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28919-L28921` → after: `L28562-L28565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28562-L28565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28562-L28565) · [Before (L28919-L28921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28919-L28921)

```diff
-       g: () => Cu,
-       i: () => fu,
-       j: () => Ou
+       h: () => UG,
+       k: () => VG,
+       m: () => YG,
+       q: () => KG
```

#### 3878. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28923` → after: `L28567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28567) · [Before (L28923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28923)

```diff
-     var su = ju(37931);
+     var wG = ZG(37918);
```

#### 3879. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28927` → after: `L28571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28571) · [Before (L28927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28927)

```diff
-     su.j;
+     wG.g;
```

#### 3880. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28938` → after: `L28582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28582) · [Before (L28938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28938)

```diff
-       const Xu = su.k;
+       const yG = wG.i;
```

#### 3881. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28947` → after: `L28591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28591) · [Before (L28947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28947)

```diff
-         for (let Eu = 0; Eu < su.m.length; Eu++) {
+         for (let bG = 0; bG < wG.k.length; bG++) {
```

#### 3882. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28949-L28950` → after: `L28593-L28594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28593-L28594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28593-L28594) · [Before (L28949-L28950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28949-L28950)

```diff
-           for (let Uu = Eu + 1; Uu <= su.m.length; Uu++) {
-             const Zu = 1 << su.m[Uu - 1];
+           for (let SG = bG + 1; SG <= wG.k.length; SG++) {
+             const LG = 1 << wG.k[SG - 1];
```

#### 3883. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28955` → after: `L28599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28599) · [Before (L28955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28955)

```diff
-               pj: ju
+               uZ: ZG
```

#### 3884. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28970` → after: `L28614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28614) · [Before (L28970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28970)

```diff
-       for (let Xu = 0; Xu < su.j; Xu++) Nu(uu, Xu) > 0 && (Uu |= 1 << Xu);
+       for (let yG = 0; yG < wG.g; yG++) QG(GG, yG) > 0 && (SG |= 1 << yG);
```

#### 3885. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28972` → after: `L28616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28616) · [Before (L28972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28972)

```diff
-       if (Eu === Uu) return ju[0] = 0, ju[1] = uu[su.e], 1;
+       if (bG === SG) return ZG[0] = 0, ZG[1] = GG[wG.d], 1;
```

#### 3886. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28982` → after: `L28626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28626) · [Before (L28982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28982)

```diff
-                 pj: uu,
+                 uZ: GG,
```

#### 3887. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28987-L28988` → after: `L28631-L28632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28631-L28632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28631-L28632) · [Before (L28987-L28988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28987-L28988)

```diff
-             if ((Zu.pj & uu) === uu && su(Zu.pj, [Zu.start, Zu.end]), 0 !== (Zu.pj & uu))
-               for (const Eu of bu) Eu.start < Zu.end || 0 !== (Zu.pj & Eu.pj) || 0 === (Eu.pj & uu) || ((Zu.pj | Eu.pj) & uu) !== uu || su(Zu.pj | Eu.pj, [Zu.start, Zu.end, Eu.start, Eu.end]);
+             if ((LG.uZ & GG) === GG && wG(LG.uZ, [LG.start, LG.end]), 0 !== (LG.uZ & GG))
+               for (const bG of pG) bG.start < LG.end || 0 !== (LG.uZ & bG.uZ) || 0 === (bG.uZ & GG) || ((LG.uZ | bG.uZ) & GG) !== GG || wG(LG.uZ | bG.uZ, [LG.start, LG.end, bG.start, bG.end]);
```

#### 3888. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28990` → after: `L28634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28634) · [Before (L28990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28990)

```diff
-           return Eu = Uu.filter((uu => !Uu.some((Eu => Eu !== uu && (Eu.pj & uu.pj) === Eu.pj && Eu.windows.length <= uu.windows.length)))), cu[uu] = Eu, Eu
+           return bG = SG.filter((GG => !SG.some((bG => bG !== GG && (bG.uZ & GG.uZ) === bG.uZ && bG.windows.length <= GG.windows.length)))), fG[GG] = bG, bG
```

#### 3889. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28993-L28994` → after: `L28637-L28638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28637-L28638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28637-L28638) · [Before (L28993-L28994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L28993-L28994)

```diff
-         const qu = fu.pj & ~Eu & Uu;
-         for (let Eu = 0; Eu < su.j; Eu++) qu & 1 << Eu && (ju += Nu(uu, Eu));
+         const UG = YG.uZ & ~bG & SG;
+         for (let bG = 0; bG < wG.g; bG++) UG & 1 << bG && (ZG += QG(GG, bG));
```

#### 3890. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29005` → after: `L28649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28649) · [Before (L29005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29005)

```diff
-   37869: (uu, Eu, ju) => {
+   37850: (GG, bG, ZG) => {
```

#### 3891. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29050` → after: `L28694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28694) · [Before (L29050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29050)

```diff
-         this.Mb = void 0, this.count = 0, this.enabled = 0, this.matrices = void 0, this.attributes = void 0, this.rowStride = void 0, this.kinds = void 0, this.mO = void 0, this.stale = void 0, this.released = !1, this.matrixRow = new Float32Array(16), this.attributeRow = void 0 … [truncated]
+         this.rp = void 0, this.count = 0, this.enabled = 0, this.matrices = void 0, this.attributes = void 0, this.rowStride = void 0, this.kinds = void 0, this.cK = void 0, this.stale = void 0, this.released = !1, this.matrixRow = new Float32Array(16), this.attributeRow = void 0 … [truncated]
```

#### 3892. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29058` → after: `L28702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28702) · [Before (L29058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29058)

```diff
-         this.Mb = uu, this.kinds = ju, this.rowStride = Xu, this.matrices = new Float32Array(16 * uu), this.attributes = Xu > 0 ? new Float32Array(uu * Xu) : null, this.attributeRow = new Float32Array(Xu), this.mO = new su(uu), this.stale = new Uu(uu), Zu++
+         this.rp = GG, this.kinds = ZG, this.rowStride = yG, this.matrices = new Float32Array(16 * GG), this.attributes = yG > 0 ? new Float32Array(GG * yG) : null, this.attributeRow = new Float32Array(yG), this.cK = new wG(GG), this.stale = new SG(GG), LG++
```

#### 3893. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29061` → after: `L28705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28705) · [Before (L29061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29061)

```diff
-         this.mO.grow(this.Mb, uu), this.stale.grow(uu);
+         this.cK.grow(this.rp, GG), this.stale.grow(GG);
```

#### 3894. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29065` → after: `L28709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28709) · [Before (L29065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29065)

```diff
-         ju && (this.attributes = new Float32Array(uu * this.rowStride), this.attributes.set(ju)), this.Mb = uu
+         ZG && (this.attributes = new Float32Array(GG * this.rowStride), this.attributes.set(ZG)), this.rp = GG
```

#### 3895. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29094` → after: `L28738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28738) · [Before (L29094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29094)

```diff
-   38209: (uu, Eu, ju) => {
+   38218: (GG, bG, ZG) => {
```

#### 3896. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29097-L29098` → after: `L28741-L28742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28741-L28742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28741-L28742) · [Before (L29097-L29098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29097-L29098)

```diff
-       f: () => bu,
-       j: () => Cu
+       e: () => pG,
+       h: () => VG
```

#### 3897. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29100-L29104` → after: `L28744-L28748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28744-L28748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28744-L28748) · [Before (L29100-L29104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29100-L29104)

```diff
-     var su = ju(38211),
-       Uu = ju(37577),
-       Zu = ju(37833),
-       Xu = ju(37582),
-       lu = ju(37595);
+     var wG = ZG(38225),
+       SG = ZG(37523),
+       LG = ZG(37803),
+       yG = ZG(37532),
+       kG = ZG(37547);
```

#### 3898. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29120` → after: `L28764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28764) · [Before (L29120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29120)

```diff
-         ticksPerAnimState: Math.max(1, Eu / su.b)
+         ticksPerAnimState: Math.max(1, bG / wG.d)
```

#### 3899. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29125` → after: `L28769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28769) · [Before (L29125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29125)

```diff
-       return `floor(${(0,Xu.Y)(uu,"animTick","uAnimTick")} / ${(0,Xu.Ab)(uu,"uTicksPerAnimState")})`
+       return `floor(${(0,yG.T)(GG,"animTick","uAnimTick")} / ${(0,yG.ub)(GG,"uTicksPerAnimState")})`
```

#### 3900. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29131-L29132` → after: `L28775-L28776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28775-L28776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28775-L28776) · [Before (L29131-L29132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29131-L29132)

```diff
-       defines: () => (0, Uu.b)("ANIMATED"),
-       getUniforms: uu => (0, Zu.b)((0, Xu.bb)(uu) ? fu : qu, "vertex", uu),
+       defines: () => (0, SG.c)("ANIMATED"),
+       getUniforms: GG => (0, LG.d)((0, yG.V)(GG) ? YG : UG, "vertex", GG),
```

#### 3901. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29134` → after: `L28778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28778) · [Before (L29134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29134)

```diff
-         uu.updateFloat("uAnimTick", (0, su.g)(Eu)), uu.updateFloat("uAnimStatesNum", this.numAnimStates), uu.updateFloat("uTicksPerAnimState", this.ticksPerAnimState)
+         GG.updateFloat("uAnimTick", (0, wG.f)(bG)), GG.updateFloat("uAnimStatesNum", this.numAnimStates), GG.updateFloat("uTicksPerAnimState", this.ticksPerAnimState)
```

#### 3902. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29138-L29139` → after: `L28782-L28783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28782-L28783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28782-L28783) · [Before (L29138-L29139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29138-L29139)

```diff
-         const ju = (0, Xu.Ab)(Eu, "uAnimStatesNum"),
-           su = (0, Xu.Ib)(Eu, "vMainUV1");
+         const ZG = (0, yG.ub)(bG, "uAnimStatesNum"),
+           wG = (0, yG.Gb)(bG, "vMainUV1");
```

#### 3903. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29141` → after: `L28785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28785) · [Before (L29141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29141)

```diff
-           CUSTOM_VERTEX_MAIN_END: `\n                ${(0,Xu.I)(Eu,"float","frameTick",bu(Eu))}\n                ${(0,Xu.I)(Eu,"float","animTexIndex",(0,Xu.gb)(Eu,"frameTick",ju))}\n                ${su}.y = (${su}.y + animTexIndex) / ${ju};\n            `
+           CUSTOM_VERTEX_MAIN_END: `\n                ${(0,yG.B)(bG,"float","frameTick",pG(bG))}\n                ${(0,yG.B)(bG,"float","animTexIndex",(0,yG.Z)(bG,"frameTick",ZG))}\n                ${wG}.y = (${wG}.y + animTexIndex) / ${ZG};\n            `
```

#### 3904. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29143` → after: `L28787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28787) · [Before (L29143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29143)

```diff
-           [(0, Xu.J)(Eu)]: `baseColor = ${(0,Xu.ob)(Eu,"diffuseSampler",(0,Xu.V)(Eu,"vMainUV1"))};`
+           [(0, yG.C)(bG)]: `baseColor = ${(0,yG.hb)(bG,"diffuseSampler",(0,yG.P)(bG,"vMainUV1"))};`
```

#### 3905. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29147` → after: `L28791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28791) · [Before (L29147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29147)

```diff
-     (0, lu.m)(cu)
+     (0, kG.n)(fG)
```

#### 3906. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29149` → after: `L28793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28793) · [Before (L29149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29149)

```diff
-   38386: (uu, Eu, ju) => {
+   38416: (GG, bG, ZG) => {
```

#### 3907. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29151` → after: `L28795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28795) · [Before (L29151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29151)

```diff
-       e: () => fu
+       b: () => YG
```

#### 3908. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29153-L29157` → after: `L28797-L28801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28797-L28801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28797-L28801) · [Before (L29153-L29157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29153-L29157)

```diff
-     var su = ju(37589),
-       Uu = ju(37577),
-       Zu = ju(37833),
-       Xu = ju(37582),
-       lu = ju(37595);
+     var wG = ZG(37541),
+       SG = ZG(37523),
+       LG = ZG(37803),
+       yG = ZG(37532),
+       kG = ZG(37547);
```

#### 3909. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29166-L29167` → after: `L28810-L28811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28810-L28811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28810-L28811) · [Before (L29166-L29167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29166-L29167)

```diff
-         defines: () => (0, Uu.b)("ARMOUR"),
-         getUniforms: uu => (0, Zu.b)(qu, "vertex", uu),
+         defines: () => (0, SG.c)("ARMOUR"),
+         getUniforms: GG => (0, LG.d)(UG, "vertex", GG),
```

#### 3910. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29177` → after: `L28821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28821) · [Before (L29177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29177)

```diff
-             const uu = (0, Xu.Ib)(Eu, "vMainUV1");
+             const GG = (0, yG.Gb)(bG, "vMainUV1");
```

#### 3911. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29179-L29180` → after: `L28823-L28824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28823-L28824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28823-L28824) · [Before (L29179-L29180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29179-L29180)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Xu.g)(Eu,"aAtlasIdx1","float","highp")}\n\t\t\t\t\t${(0,Xu.g)(Eu,"aArmourTint","vec4","lowp")}\n\n\t\t\t\t\t${(0,su.db)(Eu)}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${uu}.x = (${uu}.x + ${(0,Xu.Fb)(Eu,"aAtlasIdx1")}) / ${(0,Xu.Ab)(Eu,"uArmourAtlasTexNum")};\n\t\t\t\t\t${(0,Xu.tb)(Eu,(0,Xu.Ib)(Eu,"vTintAndOpacity"),`${(0,Xu.Fb)(Eu,"aArmourTint")}.xyz`)}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,yG.g)(bG,"aAtlasIdx1","float","highp")}\n\t\t\t\t\t${(0,yG.g)(bG,"aArmourTint","vec4","lowp")}\n\n\t\t\t\t\t${(0,wG.sb)(bG)}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${GG}.x = (${GG}.x + ${(0,yG.Cb)(bG,"aAtlasIdx1")}) / ${(0,yG.ub)(bG,"uArmourAtlasTexNum")};\n\t\t\t\t\t${(0,yG.mb)(bG,(0,yG.Gb)(bG,"vTintAndOpacity"),`${(0,yG.Cb)(bG,"aArmourTint")}.xyz`)}\n\t\t\t\t`
```

#### 3912. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29184-L29185` → after: `L28828-L28829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28828-L28829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28828-L28829) · [Before (L29184-L29185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29184-L29185)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,su.db)(Eu)}\n\t\t\t\t`,
-             [(0, Xu.J)(Eu)]: `\n\t\t\t\t\t${(0,Xu.I)(Eu,"vec4","col1",(0,Xu.ob)(Eu,"diffuseSampler",(0,Xu.V)(Eu,"vMainUV1")))}\n\t\t\t\t\tbaseColor = ${(0,Xu.r)(Eu,"vec4",`col1.rgb * ${(0,Xu.V)(Eu,"vTintAndOpacity")}.xyz`,"col1.a")};\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,wG.sb)(bG)}\n\t\t\t\t`,
+             [(0, yG.C)(bG)]: `\n\t\t\t\t\t${(0,yG.B)(bG,"vec4","col1",(0,yG.hb)(bG,"diffuseSampler",(0,yG.P)(bG,"vMainUV1")))}\n\t\t\t\t\tbaseColor = ${(0,yG.m)(bG,"vec4",`col1.rgb * ${(0,yG.P)(bG,"vTintAndOpacity")}.xyz`,"col1.a")};\n\t\t\t\t`
```

#### 3913. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29188` → after: `L28832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28832) · [Before (L29188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29188)

```diff
-         AN() {
+         OQ() {
```

#### 3914. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29190-L29192` → after: `L28834-L28836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28834-L28836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28834-L28836) · [Before (L29190-L29192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29190-L29192)

```diff
-             Eu = (0, Xu.Ab)(uu, "uArmourAtlasTexNum"),
-             ju = (0, Xu.V)(uu, "vMainUV1"),
-             su = `${ju}.x * ${Eu}`;
+             bG = (0, yG.ub)(GG, "uArmourAtlasTexNum"),
+             ZG = (0, yG.P)(GG, "vMainUV1"),
+             wG = `${ZG}.x * ${bG}`;
```

#### 3915. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29195-L29197` → after: `L28839-L28841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28839-L28841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28839-L28841) · [Before (L29195-L29197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29195-L29197)

```diff
-               cells: `vec2f(${Eu}, 1.0)`,
-               layers: [`floor(${su})`],
-               uv: `vec2f(fract(${su}), ${ju}.y)`,
+               cells: `vec2f(${bG}, 1.0)`,
+               layers: [`floor(${wG})`],
+               uv: `vec2f(fract(${wG}), ${ZG}.y)`,
```

#### 3916. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29200` → after: `L28844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28844) · [Before (L29200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29200)

```diff
-             enchantTier: `${(0,Xu.Fb)(uu,"aArmourTint")}.w`
+             enchantTier: `${(0,yG.Cb)(GG,"aArmourTint")}.w`
```

#### 3917. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29204` → after: `L28848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28848) · [Before (L29204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29204)

```diff
-     (0, lu.m)(fu)
+     (0, kG.n)(YG)
```

#### 3918. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29206` → after: `L28850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28850) · [Before (L29206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29206)

```diff
-   38218: (uu, Eu, ju) => {
+   38234: (GG, bG, ZG) => {
```

#### 3919. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29208-L29210` → after: `L28852-L28854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28852-L28854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28852-L28854) · [Before (L29208-L29210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29208-L29210)

```diff
-       c: () => cu,
-       d: () => gu,
-       h: () => Mu
+       b: () => fG,
+       e: () => rG,
+       i: () => zG
```

#### 3920. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29212-L29217` → after: `L28856-L28861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28856-L28861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28856-L28861) · [Before (L29212-L29217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29212-L29217)

```diff
-     var su = ju(37589),
-       Uu = ju(37577),
-       Zu = ju(37833),
-       Xu = ju(37582),
-       lu = ju(38211),
-       qu = ju(37595);
+     var wG = ZG(37541),
+       SG = ZG(37523),
+       LG = ZG(37803),
+       yG = ZG(37532),
+       kG = ZG(38225),
+       UG = ZG(37547);
```

#### 3921. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29222` → after: `L28866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28866) · [Before (L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29222)

```diff
-       const Eu = (0, Xu.r)(uu, "vec3", (0, Xu.Fb)(uu, "texAtlasIndices")),
+       const bG = (0, yG.m)(GG, "vec3", (0, yG.Cb)(GG, "texAtlasIndices")),
```

#### 3922. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29225-L29226` → after: `L28869-L28870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28869-L28870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28869-L28870) · [Before (L29225-L29226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29225-L29226)

```diff
-           const Zu = (0, Xu.r)(uu, "vec3", ...su);
-           return (0, Xu.r)(uu, "vec3", (0, Xu.M)(uu, `equal(${Eu}, ${Zu})`, `${Eu} == ${Zu}`))
+           const LG = (0, yG.m)(GG, "vec3", ...wG);
+           return (0, yG.m)(GG, "vec3", (0, yG.G)(GG, `equal(${bG}, ${LG})`, `${bG} == ${LG}`))
```

#### 3923. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29228-L29229` → after: `L28872-L28873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28872-L28873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28872-L28873) · [Before (L29228-L29229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29228-L29229)

```diff
-         su = [`dot(${(0,Xu.Fb)(uu,"aAtlasIdxFaces012")}, ${ju("0.0","1.0","2.0")})`, `dot(${(0,Xu.Fb)(uu,"aAtlasIdxFaces345")}, ${ju("3.0","4.0","5.0")})`].join(" + ");
-       return `\n                    #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                        ${(0,Xu.I)(uu,"float","atlasIdxIn",su,"highp")}\n                    #else\n                        ${(0,Xu.I)(uu,"float","atlasIdxIn",(0,Xu.Fb)(uu,"texAtlasIndices"),"highp")}\n          … [truncated]
+         wG = [`dot(${(0,yG.Cb)(GG,"aAtlasIdxFaces012")}, ${ZG("0.0","1.0","2.0")})`, `dot(${(0,yG.Cb)(GG,"aAtlasIdxFaces345")}, ${ZG("3.0","4.0","5.0")})`].join(" + ");
+       return `\n                    #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                        ${(0,yG.B)(GG,"float","atlasIdxIn",wG,"highp")}\n                    #else\n                        ${(0,yG.B)(GG,"float","atlasIdxIn",(0,yG.Cb)(GG,"texAtlasIndices"),"highp")}\n          … [truncated]
```

#### 3924. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29235-L29236` → after: `L28879-L28880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28879-L28880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28879-L28880) · [Before (L29235-L29236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29235-L29236)

```diff
-         layers: null !== (Eu = uu.imagesPerAtlas[0]) && void 0 !== Eu ? Eu : Cu,
-         width: null !== (ju = uu.atlasTexelWidth) && void 0 !== ju ? ju : fu
+         layers: null !== (bG = GG.imagesPerAtlas[0]) && void 0 !== bG ? bG : VG,
+         width: null !== (ZG = GG.atlasTexelWidth) && void 0 !== ZG ? ZG : YG
```

#### 3925. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29245` → after: `L28889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28889) · [Before (L29245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29245)

```diff
-       return uu.useWebGL2 && Eu > 1 && (0, Xu.bb)(ju)
+       return GG.useWebGL2 && bG > 1 && (0, yG.V)(ZG)
```

#### 3926. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29251-L29253` → after: `L28895-L28897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28895-L28897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28895-L28897) · [Before (L29251-L29253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29251-L29253)

```diff
-       const Uu = (0, su.fb)(null !== (ju = uu.atlasTexelWidth) && void 0 !== ju ? ju : fu),
-         Zu = (0, Xu.V)(Eu, "vDiffuseUV");
-       return `\n                        ${(0,Xu.I)(Eu,"vec2","atlasTexelUV",`${Zu} * ${Uu}`)}\n                        ${(0,Xu.I)(Eu,"vec2","atlasDdx",(0,Xu.u)(Eu,"atlasTexelUV"))}\n                        ${(0,Xu.I)(Eu,"vec2","atlasDdy",(0,Xu.w)(Eu,"atlasTexelUV"))}\n            … [truncated]
+       const SG = (0, wG.tb)(null !== (ZG = GG.atlasTexelWidth) && void 0 !== ZG ? ZG : YG),
+         LG = (0, yG.P)(bG, "vDiffuseUV");
+       return `\n                        ${(0,yG.B)(bG,"vec2","atlasTexelUV",`${LG} * ${SG}`)}\n                        ${(0,yG.B)(bG,"vec2","atlasDdx",(0,yG.q)(bG,"atlasTexelUV"))}\n                        ${(0,yG.B)(bG,"vec2","atlasDdy",(0,yG.s)(bG,"atlasTexelUV"))}\n            … [truncated]
```

#### 3927. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29257-L29258` → after: `L28901-L28902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28901-L28902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28901-L28902) · [Before (L29257-L29258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29257-L29258)

```diff
-       const lu = `textureAtlas${ju}`,
-         qu = (0, Xu.V)(Eu, "vDiffuseUV"),
+       const kG = `textureAtlas${ZG}`,
+         UG = (0, yG.P)(bG, "vDiffuseUV"),
```

#### 3928. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29260-L29263` → after: `L28904-L28907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28904-L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28904-L28907) · [Before (L29260-L29263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29260-L29263)

```diff
-         Cu = ju > 0 ? `${Zu} - ${su[0].toFixed(1)} * ${ju.toFixed(1)}` : Zu;
-       if (uu.useWebGL2) return (0, Xu.mb)(Eu, lu, qu, Cu, fu);
-       const bu = uu.greedyMeshed ? `vec2(${qu}.x, (fract(${qu}.y) + floor(${Cu} + 0.5)) / ${su[ju].toFixed(1)})` : Uu > 1 ? `${qu} - vec2(0.0, ${ju.toFixed(1)})` : qu;
-       return (0, Xu.ob)(Eu, lu, bu)
+         VG = ZG > 0 ? `${LG} - ${wG[0].toFixed(1)} * ${ZG.toFixed(1)}` : LG;
+       if (GG.useWebGL2) return (0, yG.db)(bG, kG, UG, VG, YG);
+       const pG = GG.greedyMeshed ? `vec2(${UG}.x, (fract(${UG}.y) + floor(${VG} + 0.5)) / ${wG[ZG].toFixed(1)})` : SG > 1 ? `${UG} - vec2(0.0, ${ZG.toFixed(1)})` : UG;
+       return (0, yG.hb)(bG, kG, pG)
```

#### 3929. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29268` → after: `L28912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28912) · [Before (L29268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29268)

```diff
-       return 1 === Uu ? `baseColor = ${hu(uu,Eu,0,su,1,ju)};` : su.map(((Zu, Xu) => `\n                        if (${ju} < ${su[0]*(Xu+1)-.5}) {\n                            baseColor = ${hu(uu,Eu,Xu,su,Uu,ju)};\n                        }${Xu+1<Uu?" else ":""}`)).join("")
+       return 1 === SG ? `baseColor = ${dG(GG,bG,0,wG,1,ZG)};` : wG.map(((LG, yG) => `\n                        if (${ZG} < ${wG[0]*(yG+1)-.5}) {\n                            baseColor = ${dG(GG,bG,yG,wG,SG,ZG)};\n                        }${yG+1<SG?" else ":""}`)).join("")
```

#### 3930. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29272` → after: `L28916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28916) · [Before (L29272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29272)

```diff
-       return `\n                    ${(0,Xu.I)(uu,"float","animParamIndex","3.0 * min(numAnimTextures, floor(atlasIdxIn))")}\n                    ${(0,Xu.I)(uu,"float","animStateMask",Eu((0,Xu.xb)(uu,"animParamIndex")))}\n                    ${(0,Xu.I)(uu,"float","animTexIndexSta … [truncated]
+       return `\n                    ${(0,yG.B)(GG,"float","animParamIndex","3.0 * min(numAnimTextures, floor(atlasIdxIn))")}\n                    ${(0,yG.B)(GG,"float","animStateMask",bG((0,yG.qb)(GG,"animParamIndex")))}\n                    ${(0,yG.B)(GG,"float","animTexIndexSta … [truncated]
```

#### 3931. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29279` → after: `L28923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28923) · [Before (L29279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29279)

```diff
-         ...(0, Uu.b)("ATLAS_TEXTURE"),
+         ...(0, SG.c)("ATLAS_TEXTURE"),
```

#### 3932. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29287` → after: `L28931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28931) · [Before (L29287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29287)

```diff
-         for (let Eu = 0; Eu < this.textureAtlases.length; Eu++) uu.push(`textureAtlas${Eu}`)
+         for (let bG = 0; bG < this.textureAtlases.length; bG++) GG.push(`textureAtlas${bG}`)
```

#### 3933. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29293` → after: `L28937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28937) · [Before (L29293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29293)

```diff
-         return this.animDataPerTex ? (0, Zu.b)([{
+         return this.animDataPerTex ? (0, LG.d)([{
```

#### 3934. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29309-L29310` → after: `L28953-L28954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28953-L28954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28953-L28954) · [Before (L29309-L29310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29309-L29310)

```diff
-           if (this.textureAtlases[su]) uu.setTexture(`textureAtlas${su}`, this.textureAtlases[su]);
-           else null === (ju = uu.expectTexture) || void 0 === ju || ju.call(uu, `textureAtlas${su}`)
+           if (this.textureAtlases[wG]) GG.setTexture(`textureAtlas${wG}`, this.textureAtlases[wG]);
+           else null === (ZG = GG.expectTexture) || void 0 === ZG || ZG.call(GG, `textureAtlas${wG}`)
```

#### 3935. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29312` → after: `L28956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28956) · [Before (L29312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29312)

```diff
-         this.animDataPerTex && (this.animData.x = (0, lu.g)(Eu), uu.updateVector3("uAnimData", this.animData))
+         this.animDataPerTex && (this.animData.x = (0, kG.f)(bG), GG.updateVector3("uAnimData", this.animData))
```

#### 3936. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29321` → after: `L28965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28965) · [Before (L29321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29321)

```diff
-             return null !== (ju = this.imagesPerAtlas[Eu]) && void 0 !== ju ? ju : Cu
+             return null !== (ZG = this.imagesPerAtlas[bG]) && void 0 !== ZG ? ZG : VG
```

#### 3937. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29323-L29326` → after: `L28967-L28970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28967-L28970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28967-L28970) · [Before (L29323-L29326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29323-L29326)

```diff
-           Uu = ju.map(((uu, ju) => (0, Xu.vb)(Eu, `textureAtlas${ju}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
-           Zu = (0, Xu.Ab)(Eu, "uAnimData"),
-           lu = (0, Xu.Ab)(Eu, "uAnimDataPerTex"),
-           qu = (0, Xu.k)(Eu),
+           SG = ZG.map(((GG, ZG) => (0, yG.pb)(bG, `textureAtlas${ZG}`, this.useWebGL2 ? "2dArray" : "2d"))).join("\n"),
+           LG = (0, yG.ub)(bG, "uAnimData"),
+           kG = (0, yG.ub)(bG, "uAnimDataPerTex"),
+           UG = (0, yG.j)(bG),
```

#### 3938. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29328-L29329` → after: `L28972-L28973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28972-L28973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28972-L28973) · [Before (L29328-L29329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29328-L29329)

```diff
-             const Eu = (0, Xu.Bb)(uu, "texAtlasIndex", "float", "mediump");
-             return (0, Xu.bb)(uu) ? Eu : `#ifdef WEBGL2\nflat ${(0,Xu.Bb)(uu,"texAtlasIndex","float","highp")}\n#else\n${Eu}\n#endif`
+             const bG = (0, yG.vb)(GG, "texAtlasIndex", "float", "mediump");
+             return (0, yG.V)(GG) ? bG : `#ifdef WEBGL2\nflat ${(0,yG.vb)(GG,"texAtlasIndex","float","highp")}\n#else\n${bG}\n#endif`
```

#### 3939. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29331` → after: `L28975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28975) · [Before (L29331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29331)

```diff
-           cu = (0, Xu.V)(Eu, "texAtlasIndex");
+           fG = (0, yG.P)(bG, "texAtlasIndex");
```

#### 3940. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29334-L29335` → after: `L28978-L28979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28978-L28979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28978-L28979) · [Before (L29334-L29335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29334-L29335)

```diff
-           CUSTOM_VERTEX_MAIN_BEGIN: bu(Eu) + (this.animDataPerTex ? `\n                    ${(0,Xu.I)(Eu,"float","animTick",(0,Xu.Y)(Eu,"animTick",`${Zu}.x`))}\n                    ${(0,Xu.I)(Eu,"float","animTickStride",`${Zu}.y`)}\n                    ${(0,Xu.I)(Eu,"float","numA … [truncated]
-           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,Xu.bb)(Eu)?"":Uu}\n                ${(0,Xu.g)(Eu,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,Xu.g)(Eu,"aAtlasIdxFaces012","vec3","highp")}\n           … [truncated]
+           CUSTOM_VERTEX_MAIN_BEGIN: pG(bG) + (this.animDataPerTex ? `\n                    ${(0,yG.B)(bG,"float","animTick",(0,yG.T)(bG,"animTick",`${LG}.x`))}\n                    ${(0,yG.B)(bG,"float","animTickStride",`${LG}.y`)}\n                    ${(0,yG.B)(bG,"float","numA … [truncated]
+           CUSTOM_VERTEX_DEFINITIONS: `\n                ${(0,yG.V)(bG)?"":SG}\n                ${(0,yG.g)(bG,"texAtlasIndices","float","mediump")}\n                #ifdef BLOXD_PER_FACE_ATLAS_IDX\n                    ${(0,yG.g)(bG,"aAtlasIdxFaces012","vec3","highp")}\n            … [truncated]
```

#### 3941. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29338-L29339` → after: `L28982-L28983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28982-L28983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28982-L28983) · [Before (L29338-L29339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29338-L29339)

```diff
-           [(0, Xu.J)(Eu)]: `${Yu(this,Eu)}${Du(this,Eu,cu,su)}`,
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${Uu}\n                ${fu}\n            `
+           [(0, yG.C)(bG)]: `${hG(this,bG)}${JG(this,bG,fG,wG)}`,
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${SG}\n                ${YG}\n            `
```

#### 3942. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29343` → after: `L28987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28987) · [Before (L29343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29343)

```diff
-     (0, qu.m)(Mu)
+     (0, UG.n)(zG)
```

#### 3943. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29345` → after: `L28989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28989) · [Before (L29345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29345)

```diff
-   38236: (uu, Eu, ju) => {
+   38256: (GG, bG, ZG) => {
```

#### 3944. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29347-L29348` → after: `L28991-L28992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28991-L28992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28991-L28992) · [Before (L29347-L29348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29347-L29348)

```diff
-       b: () => hu,
-       f: () => Du,
+       e: () => dG,
+       h: () => JG,
```

#### 3945. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29350` → after: `L28994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28994) · [Before (L29350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29350)

```diff
-       l: () => bu
+       n: () => pG
```

#### 3946. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29352-L29357` → after: `L28996-L29001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28996-L29001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L28996-L29001) · [Before (L29352-L29357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29352-L29357)

```diff
-     var su = ju(37589),
-       Uu = ju(37577),
-       Zu = ju(37833),
-       Xu = ju(37582),
-       lu = ju(37595),
-       qu = ju(37687);
+     var wG = ZG(37541),
+       SG = ZG(37523),
+       LG = ZG(37803),
+       yG = ZG(37532),
+       kG = ZG(37547),
+       UG = ZG(37631);
```

#### 3947. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29373` → after: `L29017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29017) · [Before (L29373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29373)

```diff
-       return `${uu}.r > 0.0 || ${uu}.g > 0.0 || ${uu}.b > 0.0`
+       return `${GG}.r > 0.0 || ${GG}.g > 0.0 || ${GG}.b > 0.0`
```

#### 3948. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29377-L29379` → after: `L29021-L29023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29021-L29023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29021-L29023) · [Before (L29377-L29379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29377-L29379)

```diff
-       const Uu = (Eu, ju) => (0, Xu.I)(uu, "float", Eu, ju),
-         Zu = (Eu, ju) => (0, Xu.I)(uu, "vec3", Eu, ju);
-       return `\n\t\t${Zu("localPos",`rotationY(${Eu}.w) * ${ju}.xyz`)}\n\t\t${Uu("tickVal",`${ju}.w / 1000.0`)}\n\t\t${Uu("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${Uu("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${Uu("totalMix","mix1 * 0.7 … [truncated]
+       const SG = (bG, ZG) => (0, yG.B)(GG, "float", bG, ZG),
+         LG = (bG, ZG) => (0, yG.B)(GG, "vec3", bG, ZG);
+       return `\n\t\t${LG("localPos",`rotationY(${bG}.w) * ${ZG}.xyz`)}\n\t\t${SG("tickVal",`${ZG}.w / 1000.0`)}\n\t\t${SG("mix1","addLine(localPos, tickVal, 1.1)")}\n\t\t${SG("mix2","addLine(localPos / GOLDEN_RATIO, tickVal / GOLDEN_RATIO, 2.4)")}\n\t\t${SG("totalMix","mix1 * 0.7 … [truncated]
```

#### 3949. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29383-L29385` → after: `L29027-L29029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29027-L29029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29027-L29029) · [Before (L29383-L29385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29383-L29385)

```diff
-       const Eu = (0, Xu.V)(uu, "vEnchantRgbAndRotY"),
-         ju = (0, Xu.V)(uu, "vPositionAndAnimTick");
-       return `\n\t\t\n\t\tif (${Nu(Eu)}) {\n\t\t\t${Ou(uu,Eu,ju,"baseColor.xyz")}\n\t\t\t${(0,Xu.tb)(uu,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
+       const bG = (0, yG.P)(GG, "vEnchantRgbAndRotY"),
+         ZG = (0, yG.P)(GG, "vPositionAndAnimTick");
+       return `\n\t\t\n\t\tif (${QG(bG)}) {\n\t\t\t${KG(GG,bG,ZG,"baseColor.xyz")}\n\t\t\t${(0,yG.mb)(GG,"color","mix(color.xyz, newColor, totalMix)")}\n\t\t}\n\t`
```

#### 3950. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29389` → after: `L29033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29033) · [Before (L29389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29389)

```diff
-       return `fn ${uu}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${Nu("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${Ou(Xu.c.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
+       return `fn ${GG}(rgbAndRotY: vec4f, posAndTick: vec4f, albedo: vec3f) -> vec4f {\n\tif (!(${QG("rgbAndRotY")})) {\n\t\treturn vec4f(0.0);\n\t}\n\t${KG(yG.c.WGSL,"rgbAndRotY","posAndTick","albedo")}\n\treturn vec4f(newColor, totalMix);\n}\n`
```

#### 3951. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29396` → after: `L29040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29040) · [Before (L29396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29396)

```diff
-         ...(0, Uu.b)("ENCHANTMENT"),
+         ...(0, SG.c)("ENCHANTMENT"),
```

#### 3952. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29407` → after: `L29051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29051) · [Before (L29407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29407)

```diff
-         if (!Cu.RO()) {
+         if (!VG.bh()) {
```

#### 3953. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29414` → after: `L29058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29058) · [Before (L29414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29414)

```diff
-       getUniforms: uu => (0, Xu.bb)(uu) ? {} : (0, Zu.b)(fu, "vertex", uu),
+       getUniforms: GG => (0, yG.V)(GG) ? {} : (0, LG.d)(YG, "vertex", GG),
```

#### 3954. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29417-L29421` → after: `L29061-L29065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29061-L29065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29061-L29065) · [Before (L29417-L29421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29417-L29421)

```diff
-           const uu = (0, Xu.Y)(Eu, "timeMs", "uAnimTick"),
-             ju = (0, Xu.Fb)(Eu, "aEnchantmentSpeed"),
-             su = (0, Xu.Fb)(Eu, "aEnchantmentColour"),
-             Uu = (0, Xu.Ib)(Eu, "vEnchantRgbAndRotY"),
-             Zu = (0, Xu.Ib)(Eu, "vPositionAndAnimTick");
+           const GG = (0, yG.T)(bG, "timeMs", "uAnimTick"),
+             ZG = (0, yG.Cb)(bG, "aEnchantmentSpeed"),
+             wG = (0, yG.Cb)(bG, "aEnchantmentColour"),
+             SG = (0, yG.Gb)(bG, "vEnchantRgbAndRotY"),
+             LG = (0, yG.Gb)(bG, "vPositionAndAnimTick");
```

#### 3955. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29423-L29424` → after: `L29067-L29068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29067-L29068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29067-L29068) · [Before (L29423-L29424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29423-L29424)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Xu.g)(Eu,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,Xu.g)(Eu,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,Xu.g)(Eu,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,Xu. … [truncated]
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${Uu} = ${(0,Xu.r)(Eu,"vec4",su,`${(0,Xu.Fb)(Eu,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,Xu.tb)(Eu,Zu,`worldPos.xyz - ${(0,Xu.Fb)(Eu,"aPosition")} + ${(0,Xu.Fb)(Eu,"aOffset")}`) … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,yG.g)(bG,"aEnchantmentColour","vec3","lowp")}\n\t\t\t\t\t${(0,yG.g)(bG,"aEnchantmentSpeed","float","lowp")}\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${(0,yG.g)(bG,"aPosition","vec3","lowp")}\n\t\t\t\t\t\t${(0,yG. … [truncated]
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_NODE_TRANSFORM\n\t\t\t\t\t\t${SG} = ${(0,yG.m)(bG,"vec4",wG,`${(0,yG.Cb)(bG,"aRotation")}.y`)};\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,yG.mb)(bG,LG,`worldPos.xyz - ${(0,yG.Cb)(bG,"aPosition")} + ${(0,yG.Cb)(bG,"aOffset")}`) … [truncated]
```

#### 3956. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29428-L29430` → after: `L29072-L29074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29072-L29074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29072-L29074) · [Before (L29428-L29430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29428-L29430)

```diff
-           const uu = (uu, ju) => (0, Xu.I)(Eu, "float", uu, ju),
-             ju = (uu, ju) => (0, Xu.I)(Eu, "vec3", uu, ju),
-             Uu = (uu, ju) => (0, Xu.I)(Eu, "vec4", uu, ju);
+           const GG = (GG, ZG) => (0, yG.B)(bG, "float", GG, ZG),
+             ZG = (GG, ZG) => (0, yG.B)(bG, "vec3", GG, ZG),
+             SG = (GG, ZG) => (0, yG.B)(bG, "vec4", GG, ZG);
```

#### 3957. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29432` → after: `L29076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29076) · [Before (L29432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29432)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Xu.Bb)(Eu,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,Xu.Bb)(Eu,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,Xu.A)(Eu,"float","GOLDEN_RATIO",(0,su.fb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,Xu.A)(Eu," … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,yG.vb)(bG,"vEnchantRgbAndRotY","vec4","lowp")}\n\t\t\t\t\t${(0,yG.vb)(bG,"vPositionAndAnimTick","vec4","highp")}\n\n\t\t\t\t\t${(0,yG.w)(bG,"float","GOLDEN_RATIO",(0,wG.tb)((1+Math.sqrt(5))/2))}\n\t\t\t\t\t${(0,yG.w)(bG," … [truncated]
```

#### 3958. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29437` → after: `L29081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29081) · [Before (L29437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29437)

```diff
-               (0, Xu.ub)(Eu, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
+               (0, yG.nb)(bG, "P.x == 0.0 && P.y == 0.0 && P.z == 0.0", "0.00001", "P.x")
```

#### 3959. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29439` → after: `L29083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29083) · [Before (L29439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29439)

```diff
-               ju("Pi", `floor(P + dot(P, ${(0,Xu.r)(Eu,"vec3","SKEWFACTOR")}))`)
+               ZG("Pi", `floor(P + dot(P, ${(0,yG.m)(bG,"vec3","SKEWFACTOR")}))`)
```

#### 3960. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29442` → after: `L29086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29086) · [Before (L29442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29442)

```diff
-               ju("x0", `P - Pi + dot(Pi, ${(0,Xu.r)(Eu,"vec3","UNSKEWFACTOR")})`)
+               ZG("x0", `P - Pi + dot(Pi, ${(0,yG.m)(bG,"vec3","UNSKEWFACTOR")})`)
```

#### 3961. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29466` → after: `L29110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29110) · [Before (L29466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29466)

```diff
-               Uu("v1234_x", (0, Xu.r)(Eu, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
+               SG("v1234_x", (0, yG.m)(bG, "vec4", "x0.x", "x1.x", "x2.x", "x3.x"))
```

#### 3962. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29469` → after: `L29113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29113) · [Before (L29469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29469)

```diff
-               Uu("v1234_y", (0, Xu.r)(Eu, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
+               SG("v1234_y", (0, yG.m)(bG, "vec4", "x0.y", "x1.y", "x2.y", "x3.y"))
```

#### 3963. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29472` → after: `L29116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29116) · [Before (L29472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29472)

```diff
-               Uu("v1234_z", (0, Xu.r)(Eu, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
+               SG("v1234_z", (0, yG.m)(bG, "vec4", "x0.z", "x1.z", "x2.z", "x3.z"))
```

#### 3964. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29475` → after: `L29119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29119) · [Before (L29475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29475)

```diff
-               ju("Pi_inc1", `step(Pi, ${(0,Xu.r)(Eu,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
+               ZG("Pi_inc1", `step(Pi, ${(0,yG.m)(bG,"vec3","69.0 - 1.5")}) * (Pi + 1.0)`)
```

#### 3965. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29478` → after: `L29122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29122) · [Before (L29478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29478)

```diff
-               Uu("Pt", `${(0,Xu.r)(Eu,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,Xu.r)(Eu,"vec2","50.0","161.0")}.xyxy`)
+               SG("Pt", `${(0,yG.m)(bG,"vec4","Pi.xy","Pi_inc1.xy")} + ${(0,yG.m)(bG,"vec2","50.0","161.0")}.xyxy`)
```

#### 3966. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29481` → after: `L29125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29125) · [Before (L29481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29481)

```diff
-               Uu("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,Xu.r)(Eu,"vec4","Pi_1.xy","Pi_2.xy")})`)
+               SG("V1xy_V2xy", `mix(Pt.xyxy, Pt.zwzw, ${(0,yG.m)(bG,"vec4","Pi_1.xy","Pi_2.xy")})`)
```

#### 3967. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29484` → after: `L29128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29128) · [Before (L29484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29484)

```diff
-               (0, Xu.r)(Eu, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
+               (0, yG.m)(bG, "vec4", "Pt.x", "V1xy_V2xy.xz", "Pt.z")
```

#### 3968. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29486` → after: `L29130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29130) · [Before (L29486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29486)

```diff
-               (0, Xu.r)(Eu, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
+               (0, yG.m)(bG, "vec4", "Pt.y", "V1xy_V2xy.yw", "Pt.w")
```

#### 3969. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29488` → after: `L29132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29132) · [Before (L29488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29488)

```diff
-               (0, Xu.A)(Eu, "vec3", "SOMELARGEFLOATS", (0, Xu.r)(Eu, "vec3", "635.298681", "682.357502", "668.926525"))
+               (0, yG.w)(bG, "vec3", "SOMELARGEFLOATS", (0, yG.m)(bG, "vec3", "635.298681", "682.357502", "668.926525"))
```

#### 3970. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29491` → after: `L29135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29135) · [Before (L29491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29491)

```diff
-               (0, Xu.A)(Eu, "vec3", "ZINC", (0, Xu.r)(Eu, "vec3", "48.500388", "65.294118", "63.934599"))
+               (0, yG.w)(bG, "vec3", "ZINC", (0, yG.m)(bG, "vec3", "48.500388", "65.294118", "63.934599"))
```

#### 3971. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29500` → after: `L29144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29144) · [Before (L29500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29500)

```diff
-               (0, Xu.ub)(Eu, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
+               (0, yG.nb)(bG, "Pi_1.z < 0.5", "lowz_mods", "highz_mods")
```

#### 3972. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29502` → after: `L29146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29146) · [Before (L29502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29502)

```diff
-               (0, Xu.ub)(Eu, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
+               (0, yG.nb)(bG, "Pi_2.z < 0.5", "lowz_mods", "highz_mods")
```

#### 3973. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29504` → after: `L29148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29148) · [Before (L29504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29504)

```diff
-               Uu("hash_0", `fract( Pt * ${(0,Xu.r)(Eu,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
+               SG("hash_0", `fract( Pt * ${(0,yG.m)(bG,"vec4","lowz_mods.x","Pi_1.x","Pi_2.x","highz_mods.x")} ) - 0.49999`)
```

#### 3974. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29507` → after: `L29151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29151) · [Before (L29507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29507)

```diff
-               Uu("hash_1", `fract( Pt * ${(0,Xu.r)(Eu,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
+               SG("hash_1", `fract( Pt * ${(0,yG.m)(bG,"vec4","lowz_mods.y","Pi_1.y","Pi_2.y","highz_mods.y")} ) - 0.49999`)
```

#### 3975. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29510` → after: `L29154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29154) · [Before (L29510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29510)

```diff
-               Uu("hash_2", `fract( Pt * ${(0,Xu.r)(Eu,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
+               SG("hash_2", `fract( Pt * ${(0,yG.m)(bG,"vec4","lowz_mods.z","Pi_1.z","Pi_2.z","highz_mods.z")} ) - 0.49999`)
```

#### 3976. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29513` → after: `L29157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29157) · [Before (L29513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29513)

```diff
-               Uu("grad_results", `${(0,Xu.ab)(Eu,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
+               SG("grad_results", `${(0,yG.U)(bG,"hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2")} * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z )`)
```

#### 3977. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29516` → after: `L29160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29160) · [Before (L29516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29516)

```diff
-               (0, Xu.A)(Eu, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
+               (0, yG.w)(bG, "float", "FINAL_NORMALIZATION", "37.837227241611314102871574478976")
```

#### 3978. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29522-L29523` → after: `L29166-L29167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29166-L29167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29166-L29167) · [Before (L29522-L29523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29522-L29523)

```diff
-               (0, Xu.r)(Eu, "vec4", "0.0")
-             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,Xu.D)(Eu,"mat3","rotationY",[{name:"y",type:" … [truncated]
+               (0, yG.m)(bG, "vec4", "0.0")
+             });\n\ t\ t\ t\ t\ t\ tkernel_weights = kernel_weights * kernel_weights * kernel_weights;\n\ t\ t\ t\ t\ t\ treturn dot(kernel_weights, grad_results) * FINAL_NORMALIZATION;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,yG.z)(bG,"mat3","rotationY",[{name:"y",type:" … [truncated]
```

#### 3979. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29525-L29526` → after: `L29169-L29170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29169-L29170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29169-L29170) · [Before (L29525-L29526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29525-L29526)

```diff
-               (0, Xu.r)(Eu, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
-             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,Xu.D)(Eu,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
+               (0, yG.m)(bG, "mat3", "-cos(y)", "0.0", "-sin(y)", "0.0", "1.0", "0.0", "sin(y)", "0.0", "-cos(y)")
+             };\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t${(0,yG.z)(bG,"float","pcurve",[{name:"x",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"}],`\
```

#### 3980. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29530` → after: `L29174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29174) · [Before (L29530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29530)

```diff
-             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,Xu.D)(Eu,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
+             n\ t\ t\ t\ t\ t\ treturn k * pow(x, a) * pow(1.0 - x, b);\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,yG.z)(bG,"float","addLine",[{name:"localPos",type:"vec3"},{name:"tickVal",type:"float"},{name:"tiltScale",type:"float"}],`\
```

#### 3981. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29538` → after: `L29182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29182) · [Before (L29538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29538)

```diff
-               uu("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,Xu.r)(Eu,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,Xu.r)(Eu,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
+               GG("intersection", `dot(\n\t\t\t\t\t\t\tlocalPos * ${(0,yG.m)(bG,"vec3","tiltScale","1.0","tiltScale")},\n\t\t\t\t\t\t\tnormalize(${(0,yG.m)(bG,"vec3","sin(planeAnim) * PLANE_TILT_AMOUNT","1.0","cos(planeAnim) * PLANE_TILT_AMOUNT")})\n\t\t\t\t\t\t)`)
```

#### 3982. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29541` → after: `L29185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29185) · [Before (L29541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29541)

```diff
-               uu("sawtooth", (0, Xu.gb)(Eu, "intersection - loopedTickVal", "1.0"))
+               GG("sawtooth", (0, yG.Z)(bG, "intersection - loopedTickVal", "1.0"))
```

#### 3983. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29544` → after: `L29188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29188) · [Before (L29544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29544)

```diff
-               ju("noisePos", `localPos * 4.0 - ${(0,Xu.r)(Eu,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
+               ZG("noisePos", `localPos * 4.0 - ${(0,yG.m)(bG,"vec3","0.0","tickVal * GOLDEN_RATIO * GOLDEN_RATIO","0.0")}`)
```

#### 3984. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29555` → after: `L29199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29199) · [Before (L29555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29555)

```diff
-             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,qu.c)(Eu,"enchantment")}\n\t\t\t\t`,
+             n\ n\ t\ t\ t\ t\ t\ treturn ramp;\n\ t\ t\ t\ t\ t`)}\n\n\t\t\t\t\t${(0,UG.e)(bG,"enchantment")}\n\t\t\t\t`,
```

#### 3985. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29562-L29569` → after: `L29206-L29213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29206-L29213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29206-L29213) · [Before (L29562-L29569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29562-L29569)

```diff
-     (0, lu.m)(Du)
-   },
-   37811: (uu, Eu, ju) => {
-     ju.d(Eu, {
-       c: () => bu,
-       e: () => Yu,
-       g: () => Ou,
-       j: () => cu
+     (0, kG.n)(JG)
+   },
+   37782: (GG, bG, ZG) => {
+     ZG.d(bG, {
+       b: () => pG,
+       f: () => hG,
+       h: () => KG,
+       l: () => fG
```

#### 3986. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29571-L29578` → after: `L29215-L29222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29215-L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29215-L29222) · [Before (L29571-L29578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29571-L29578)

```diff
-     var su = ju(37589),
-       Uu = ju(37816),
-       Zu = ju(37821),
-       Xu = ju(37577),
-       lu = ju(37833),
-       qu = ju(37582),
-       fu = ju(37603),
-       Cu = ju(37595);
+     var wG = ZG(37541),
+       SG = ZG(37788),
+       LG = ZG(37793),
+       yG = ZG(37523),
+       kG = ZG(37803),
+       UG = ZG(37532),
+       YG = ZG(37550),
+       VG = ZG(37547);
```

#### 3987. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29583-L29584` → after: `L29227-L29228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29227-L29228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29227-L29228) · [Before (L29583-L29584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29583-L29584)

```diff
-           tO: uu,
-           uniformWriter: new Zu.h(uu),
+           HK: GG,
+           uniformWriter: new LG.j(GG),
```

#### 3988. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29597` → after: `L29241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29241) · [Before (L29597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29597)

```diff
-       (0, su.K)(ju.x, ju.y, ju.z, ju.w, Eu) && (ju.x = Eu[0], ju.y = Eu[1], ju.z = Eu[2], ju.w = Eu[3], uu.uniformLightVersion++)
+       (0, wG.X)(ZG.x, ZG.y, ZG.z, ZG.w, bG) && (ZG.x = bG[0], ZG.y = bG[1], ZG.z = bG[2], ZG.w = bG[3], GG.uniformLightVersion++)
```

#### 3989. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29609` → after: `L29253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29253) · [Before (L29609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29609)

```diff
-         ...(0, Xu.b)("ENTITY_LIGHT"),
+         ...(0, yG.c)("ENTITY_LIGHT"),
```

#### 3990. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29616` → after: `L29260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29260) · [Before (L29616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29616)

```diff
-         (0, Uu.e)(uu, this.tO.aY);
+         (0, SG.d)(GG, this.HK.Fh);
```

#### 3991. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29618` → after: `L29262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29262) · [Before (L29618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29618)

```diff
-         su ? (0, Cu.f)(uu, su) : Nu.disableUnusedSpecularTerm(uu, Zu);
+         wG ? (0, VG.i)(GG, wG) : QG.disableUnusedSpecularTerm(GG, LG);
```

#### 3992. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29623` → after: `L29267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29267) · [Before (L29623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29623)

```diff
-         return (0, lu.b)(this.uniformLevels ? [...Zu.e, {
+         return (0, kG.d)(this.uniformLevels ? [...LG.f, {
```

#### 3993. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29626` → after: `L29270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29270) · [Before (L29626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29626)

```diff
-         }] : Zu.e, "both", uu)
+         }] : LG.f, "both", GG)
```

#### 3994. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29632` → after: `L29276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29276) · [Before (L29632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29632)

```diff
-         return (0, Zu.p)(this.tO) + this.uniformLightVersion
+         return (0, LG.q)(this.HK) + this.uniformLightVersion
```

#### 3995. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29635` → after: `L29279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29279) · [Before (L29635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29635)

```diff
-         this.tO.aY && !this.uniformLevels && uu.push("aLightLevels")
+         this.HK.Fh && !this.uniformLevels && GG.push("aLightLevels")
```

#### 3996. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29639` → after: `L29283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29283) · [Before (L29639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29639)

```diff
-           const uu = this.uniformLevels ? (0, qu.Ab)(Eu, "uEntityLightLevels") : (0, qu.Fb)(Eu, "aLightLevels");
+           const GG = this.uniformLevels ? (0, UG.ub)(bG, "uEntityLightLevels") : (0, UG.Cb)(bG, "aLightLevels");
```

#### 3997. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29641-L29642` → after: `L29285-L29286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29285-L29286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29285-L29286) · [Before (L29641-L29642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29641-L29642)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,qu.g)(Eu,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,su.D)(Eu)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,su.B)(Eu,uu)}\n\t\t\t\t\t\t${(0,qu.I)(Eu,"vec3","blockLightContrib",(0,su.k)(Eu,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,qu.I)(Eu,"vec3","skyContrib",`mix(${(0,qu.Ab)(Eu,"uAmbientL … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,UG.g)(bG,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,wG.P)(bG)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,wG.O)(bG,GG)}\n\t\t\t\t\t\t${(0,UG.B)(bG,"vec3","blockLightContrib",(0,wG.o)(bG,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,UG.B)(bG,"vec3","skyContrib",`mix(${(0,UG.ub)(bG,"uAmbientL … [truncated]
```

#### 3998. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29646-L29647` → after: `L29290-L29291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29290-L29291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29290-L29291) · [Before (L29646-L29647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29646-L29647)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,su.D)(Eu)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, su.A)(Eu)
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,wG.P)(bG)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, wG.K)(bG)
```

#### 3999. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29651` → after: `L29295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29295) · [Before (L29651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29651)

```diff
-     (0, Cu.m)(Yu)
+     (0, VG.n)(hG)
```

#### 4000. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29653` → after: `L29297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29297) · [Before (L29653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29653)

```diff
-   37595: (uu, Eu, ju) => {
+   37547: (GG, bG, ZG) => {
```

#### 4001. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29659-L29663` → after: `L29303-L29307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29303-L29307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29303-L29307) · [Before (L29659-L29663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29659-L29663)

```diff
-       b: () => Xu,
-       f: () => su,
-       h: () => Zu,
-       k: () => fu,
-       m: () => qu
+       e: () => yG,
+       i: () => wG,
+       j: () => LG,
+       m: () => YG,
+       n: () => UG
```

#### 4002. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29696` → after: `L29340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29340) · [Before (L29696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29696)

```diff
-   37687: (uu, Eu, ju) => {
+   37631: (GG, bG, ZG) => {
```

#### 4003. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29698` → after: `L29342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29342) · [Before (L29698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29698)

```diff
-       c: () => Uu
+       e: () => SG
```

#### 4004. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29700` → after: `L29344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29344) · [Before (L29700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29700)

```diff
-     var su = ju(37582);
+     var wG = ZG(37532);
```

#### 4005. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29703` → after: `L29347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29347) · [Before (L29703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29703)

```diff
-       return `\n\t\t${(0,su.D)(uu,"vec3",`${Eu}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
+       return `\n\t\t${(0,wG.z)(GG,"vec3",`${bG}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
```

#### 4006. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29705` → after: `L29349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29349) · [Before (L29705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29705)

```diff
-         (0, su.I)(uu, "vec4", "K", (0, su.r)(uu, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
+         (0, wG.B)(GG, "vec4", "K", (0, wG.m)(GG, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
```

#### 4007. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29708` → after: `L29352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29352) · [Before (L29708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29708)

```diff
-         (0, su.I)(uu, "vec4", "p", `mix(${(0,su.r)(uu,"vec4","c.bg","K.wz")}, ${(0,su.r)(uu,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
+         (0, wG.B)(GG, "vec4", "p", `mix(${(0,wG.m)(GG,"vec4","c.bg","K.wz")}, ${(0,wG.m)(GG,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
```

#### 4008. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29711` → after: `L29355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29355) · [Before (L29711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29711)

```diff
-         (0, su.I)(uu, "vec4", "q", `mix(${(0,su.r)(uu,"vec4","p.xyw","c.r")}, ${(0,su.r)(uu,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
+         (0, wG.B)(GG, "vec4", "q", `mix(${(0,wG.m)(GG,"vec4","p.xyw","c.r")}, ${(0,wG.m)(GG,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
```

#### 4009. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29714` → after: `L29358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29358) · [Before (L29714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29714)

```diff
-         (0, su.I)(uu, "float", "d", "q.x - min(q.w, q.y)")
+         (0, wG.B)(GG, "float", "d", "q.x - min(q.w, q.y)")
```

#### 4010. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29717` → after: `L29361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29361) · [Before (L29717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29717)

```diff
-         (0, su.I)(uu, "float", "e", "1.0e-10")
+         (0, wG.B)(GG, "float", "e", "1.0e-10")
```

#### 4011. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29720` → after: `L29364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29364) · [Before (L29720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29720)

```diff
-         (0, su.r)(uu, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
+         (0, wG.m)(GG, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
```

#### 4012. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29722` → after: `L29366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29366) · [Before (L29722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29722)

```diff
-       n\ t\ t`)}\n\n\t\t${(0,su.D)(uu,"vec3",`${Eu}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
+       n\ t\ t`)}\n\n\t\t${(0,wG.z)(GG,"vec3",`${bG}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
```

#### 4013. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29724` → after: `L29368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29368) · [Before (L29724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29724)

```diff
-         (0, su.I)(uu, "vec4", "K", (0, su.r)(uu, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
+         (0, wG.B)(GG, "vec4", "K", (0, wG.m)(GG, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
```

#### 4014. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29727` → after: `L29371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29371) · [Before (L29727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29727)

```diff
-         (0, su.I)(uu, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
+         (0, wG.B)(GG, "vec3", "p", "abs(fract(c.xxx + K.xyz) * 6.0 - K.www)")
```

#### 4015. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29730` → after: `L29374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29374) · [Before (L29730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29730)

```diff
-         (0, su.r)(uu, "vec3", "0.0")
+         (0, wG.m)(GG, "vec3", "0.0")
```

#### 4016. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29732` → after: `L29376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29376) · [Before (L29732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29732)

```diff
-         (0, su.r)(uu, "vec3", "1.0")
+         (0, wG.m)(GG, "vec3", "1.0")
```

#### 4017. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29737` → after: `L29381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29381) · [Before (L29737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29737)

```diff
-   38220: (uu, Eu, ju) => {
+   38238: (GG, bG, ZG) => {
```

#### 4018. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29740` → after: `L29384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29384) · [Before (L29740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29740)

```diff
-       e: () => Cu,
+       d: () => VG,
```

#### 4019. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29743-L29747` → after: `L29387-L29391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29387-L29391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29387-L29391) · [Before (L29743-L29747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29743-L29747)

```diff
-     var su = ju(37589),
-       Uu = ju(37577),
-       Zu = ju(37582),
-       Xu = ju(37603),
-       lu = ju(37595);
+     var wG = ZG(37541),
+       SG = ZG(37523),
+       LG = ZG(37532),
+       yG = ZG(37550),
+       kG = ZG(37547);
```

#### 4020. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29754` → after: `L29398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29398) · [Before (L29754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29754)

```diff
-           ...(0, Uu.b)("TERRAIN_FADE"),
+           ...(0, SG.c)("TERRAIN_FADE"),
```

#### 4021. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29762` → after: `L29406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29406) · [Before (L29762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29762)

```diff
-           const ju = (0, Zu.eb)(Eu);
+           const ZG = (0, LG.X)(bG);
```

#### 4022. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29764-L29765` → after: `L29408-L29409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29408-L29409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29408-L29409) · [Before (L29764-L29765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29764-L29765)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,su.q)(Eu)}\n            `,
-             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${qu}\n                if (${ju} < 255.0 / 256.0 && ${ju} < bayerDither(${(0,Zu.S)(Eu)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,wG.t)(bG)}\n            `,
+             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${UG}\n                if (${ZG} < 255.0 / 256.0 && ${ZG} < bayerDither(${(0,LG.J)(bG)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
```

#### 4023. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29773-L29775` → after: `L29417-L29419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29417-L29419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29417-L29419) · [Before (L29773-L29775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29773-L29775)

```diff
-         const Eu = (0, Xu.S)(uu, 1, !1),
-           ju = (0, Xu.W)(uu, 1, !1);
-         (0, Xu.ib)(uu, {
+         const bG = (0, yG.U)(GG, 1, !1),
+           ZG = (0, yG.Y)(GG, 1, !1);
+         (0, yG.lb)(GG, {
```

#### 4024. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29782` → after: `L29426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29426) · [Before (L29782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29782)

```diff
-     }(0, lu.m)(fu)
+     }(0, kG.n)(YG)
```

#### 4025. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29784` → after: `L29428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29428) · [Before (L29784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29784)

```diff
-   38226: (uu, Eu, ju) => {
+   38243: (GG, bG, ZG) => {
```

#### 4026. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29789-L29790` → after: `L29432-L29434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29432-L29434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29432-L29434) · [Before (L29789-L29790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29789-L29790)

```diff
-       k: () => hu,
-       m: () => Ou
+       l: () => hG,
+       o: () => dG,
+       r: () => KG
```

#### 4027. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29792-L29799` → after: `L29436-L29443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29436-L29443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29436-L29443) · [Before (L29792-L29799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29792-L29799)

```diff
-     var su = ju(37589),
-       Uu = ju(37816),
-       Zu = ju(37821),
-       Xu = ju(37577),
-       lu = ju(37833),
-       qu = ju(37582),
-       fu = ju(37603),
-       Cu = ju(37595);
+     var wG = ZG(37541),
+       SG = ZG(37788),
+       LG = ZG(37793),
+       yG = ZG(37523),
+       kG = ZG(37803),
+       UG = ZG(37532),
+       YG = ZG(37550),
+       VG = ZG(37547);
```

#### 4028. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29815` → after: `L29459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29459) · [Before (L29815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29815)

```diff
-         ...(0, Xu.b)("TERRAIN_LIGHT"),
+         ...(0, yG.c)("TERRAIN_LIGHT"),
```

#### 4029. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29825` → after: `L29469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29469) · [Before (L29825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29825)

```diff
-         (0, Uu.e)(uu, this.tO.aY), uu.BLOXD_LIGHT_WORD = Nu.has(ju);
+         (0, SG.d)(GG, this.HK.Fh), GG.BLOXD_LIGHT_WORD = QG.has(ZG);
```

#### 4030. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29827` → after: `L29471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29471) · [Before (L29827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29827)

```diff
-         Zu || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), uu.BLOXD_TERRAIN_DIRECTI … [truncated]
+         LG || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), GG.BLOXD_TERRAIN_DIRECTI … [truncated]
```

#### 4031. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29830` → after: `L29474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29474) · [Before (L29830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29830)

```diff
-         this.tO.aY && uu.push("aPackedLightLevels")
+         this.HK.Fh && GG.push("aPackedLightLevels")
```

#### 4032. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29833` → after: `L29477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29477) · [Before (L29833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29833)

```diff
-         const Eu = (0, lu.b)(Zu.e, "both", uu);
+         const bG = (0, kG.d)(LG.f, "both", GG);
```

#### 4033. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29835-L29836` → after: `L29479-L29480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29479-L29480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29479-L29480) · [Before (L29835-L29836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29835-L29836)

```diff
-         const ju = (0, lu.b)((0, su.w)(this.dirLightCount), "vertex", uu);
-         return (0, qu.bb)(uu) ? {
+         const ZG = (0, kG.d)((0, wG.D)(this.dirLightCount), "vertex", GG);
+         return (0, UG.V)(GG) ? {
```

#### 4034. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29840` → after: `L29484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29484) · [Before (L29840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29840)

```diff
-           vertex: `${Eu.vertex}\n${ju.vertex}`,
+           vertex: `${bG.vertex}\n${ZG.vertex}`,
```

#### 4035. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29849` → after: `L29493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29493) · [Before (L29849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29849)

```diff
-         return (0, Zu.p)(this.tO)
+         return (0, LG.q)(this.HK)
```

#### 4036. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29853-L29854` → after: `L29497-L29498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29497-L29498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29497-L29498) · [Before (L29853-L29854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29853-L29854)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,su.O)(Eu)}\n                    ${(0,su.y)(Eu)}\n                `,
-           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,su.S)(Eu)}\n                    ${(0,su.z)(Eu,this.dirLightCount)}\n                `
+           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,wG.$)(bG)}\n                    ${(0,wG.F)(bG)}\n                `,
+           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,wG.cb)(bG)}\n                    ${(0,wG.J)(bG,this.dirLightCount)}\n                `
```

#### 4037. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29856-L29858` → after: `L29500-L29502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29500-L29502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29500-L29502) · [Before (L29856-L29858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29856-L29858)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,su.G)(Eu)}\n                    ${(0,su.y)(Eu)}\n                `,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, su.E)(Eu),
-           [(0, su.u)(Eu)]: `\n                    ${(0,su.v)(Eu)}\n                    ${(0,su.t)(Eu)}\n                `
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,wG.T)(bG)}\n                    ${(0,wG.F)(bG)}\n                `,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, wG.S)(bG),
+           [(0, wG.y)(bG)]: `\n                    ${(0,wG.A)(bG)}\n                    ${(0,wG.x)(bG)}\n                `
```

#### 4038. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29866-L29868` → after: `L29510-L29512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29510-L29512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29510-L29512) · [Before (L29866-L29868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29866-L29868)

```diff
-         tO: uu,
-         uniformWriter: new Zu.h(uu),
-         dirLightWriter: ju > 0 ? new Zu.d(uu.model.view, ju) : null,
+         HK: GG,
+         uniformWriter: new LG.j(GG),
+         dirLightWriter: ZG > 0 ? new LG.c(GG.model.view, ZG) : null,
```

#### 4039. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29876-L29878` → after: `L29520-L29522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29520-L29522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29520-L29522) · [Before (L29876-L29878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29876-L29878)

```diff
-       const ju = (0, fu.$)(uu);
-       (0, fu.z)(ju, Yu.name) || (0, fu.u)(ju, Yu, hu(Eu, uu)), uu.checkReadyOnlyOnce = !0, (0, fu.cb)(uu, !0)
-     }(0, Cu.m)(Yu)
+       const ZG = (0, YG.eb)(GG);
+       (0, YG.z)(ZG, hG.name) || (0, YG.u)(ZG, hG, dG(bG, GG)), GG.checkReadyOnlyOnce = !0, (0, YG.gb)(GG, !0)
+     }(0, VG.n)(hG)
```

#### 4040. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29880` → after: `L29524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29524) · [Before (L29880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29880)

```diff
-   37830: (uu, Eu, ju) => {
+   37800: (GG, bG, ZG) => {
```

#### 4041. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29884-L29885` → after: `L29527-L29529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29527-L29529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29527-L29529) · [Before (L29884-L29885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29884-L29885)

```diff
-       f: () => Uu,
-       j: () => Xu
+       h: () => wG,
+       j: () => SG,
+       n: () => yG
```

#### 4042. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29905` → after: `L29549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29549) · [Before (L29905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29905)

```diff
-   38291: (uu, Eu, ju) => {
+   38298: (GG, bG, ZG) => {
```

#### 4043. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29907-L29909` → after: `L29551-L29553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29551-L29553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29551-L29553) · [Before (L29907-L29909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29907-L29909)

```diff
-       b: () => bu,
-       d: () => Nu,
-       e: () => cu
+       c: () => pG,
+       f: () => QG,
+       g: () => fG
```

#### 4044. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29911` → after: `L29555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29555) · [Before (L29911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29911)

```diff
-     var su = ju(37854);
+     var wG = ZG(37835);
```

#### 4045. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29916` → after: `L29560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29560) · [Before (L29916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29916)

```diff
-       const qu = "position" === Eu ? su.u : su.v;
+       const UG = "position" === bG ? wG.y : wG.z;
```

#### 4046. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29920` → after: `L29564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29564) · [Before (L29920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29920)

```diff
-           Xu = lu && "position" !== Eu && 0 !== Uu && 1 !== Uu ? 1 / Uu : 1;
+           yG = kG && "position" !== bG && 0 !== SG && 1 !== SG ? 1 / SG : 1;
```

#### 4047. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L29996` → after: `L29640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29640) · [Before (L29996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L29996)

```diff
-             return null !== (Eu = qu(ju)[lu]) && void 0 !== Eu ? Eu : []
+             return null !== (bG = UG(ZG)[kG]) && void 0 !== bG ? bG : []
```

#### 4048. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30111` → after: `L29755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29755) · [Before (L30111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30111)

```diff
-         const [Eu, ju, su, Xu] = null !== (cu = null === Zu || void 0 === Zu ? void 0 : Zu[uu / 4]) && void 0 !== cu ? cu : [0, 0, 1, 1];
+         const [bG, ZG, wG, yG] = null !== (fG = null === LG || void 0 === LG ? void 0 : LG[GG / 4]) && void 0 !== fG ? fG : [0, 0, 1, 1];
```

#### 4049. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30132-L30134` → after: `L29776-L29778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29776-L29778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29776-L29778) · [Before (L30132-L30134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30132-L30134)

```diff
-       c: () => su,
-       d: () => Uu,
-       g: () => Xu
+       f: () => wG,
+       i: () => SG,
+       l: () => yG
```

#### 4050. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30137` → after: `L29781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29781) · [Before (L30137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30137)

```diff
-   37848: (uu, Eu, ju) => {
+   37829: (GG, bG, ZG) => {
```

#### 4051. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30140-L30142` → after: `L29786-L29787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29786-L29787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29786-L29787) · [Before (L30140-L30142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30140-L30142)

```diff
-       h: () => bu,
-       k: () => Cu,
-       o: () => fu,
+       i: () => YG,
+       m: () => UG,
```

#### 4052. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30144-L30145` → after: `L29789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29789) · [Before (L30144-L30145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30144-L30145)

```diff
-       r: () => lu,
-       v: () => Xu
+       s: () => yG
```

#### 4053. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30211` → after: `L29855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29855) · [Before (L30211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30211)

```diff
-       return (ArrayBuffer.isView(ju) ? (ju.byteOffset + su) % 4 === 0 && Uu % 4 === 0 : 12 === Uu && su % 4 === 0) ? Eu : null
+       return (ArrayBuffer.isView(ZG) ? (ZG.byteOffset + wG) % 4 === 0 && SG % 4 === 0 : 12 === SG && wG % 4 === 0) ? bG : null
```

#### 4054. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30267` → after: `L29911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29911) · [Before (L30267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30267)

```diff
-   37867: (uu, Eu, ju) => {
+   37845: (GG, bG, ZG) => {
```

#### 4055. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30269-L30270` → after: `L29913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29913) · [Before (L30269-L30270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30269-L30270)

```diff
-       B: () => Xu,
-       e: () => lu,
+       d: () => kG,
```

#### 4056. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30274-L30275` → after: `L29918-L29919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29918-L29919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29918-L29919) · [Before (L30274-L30275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30274-L30275)

```diff
-       p: () => Ou,
-       r: () => hu,
+       o: () => dG,
+       s: () => fG,
```

#### 4057. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30279` → after: `L29923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L29923) · [Before (L30279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30279)

```diff
-     var su = ju(37630);
+     var wG = ZG(37567);
```

#### 4058. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30363` → after: `L30007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30007) · [Before (L30363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30363)

```diff
-       uu.live && (uu.live = !1, Uu--), uu.released = !0, (0, su.L)(uu.gpu)
+       GG.live && (GG.live = !1, SG--), GG.released = !0, (0, wG.M)(GG.gpu)
```

#### 4059. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30370` → after: `L30014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30014) · [Before (L30370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30370)

```diff
-   37612: (uu, Eu, ju) => {
+   37556: (GG, bG, ZG) => {
```

#### 4060. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30372` → after: `L30016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30016) · [Before (L30372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30372)

```diff
-       c: () => su
+       b: () => wG
```

#### 4061. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30396` → after: `L30040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30040) · [Before (L30396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30396)

```diff
-   37621: (uu, Eu, ju) => {
+   37559: (GG, bG, ZG) => {
```

#### 4062. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30398-L30399` → after: `L30042-L30043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30042-L30043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30042-L30043) · [Before (L30398-L30399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30398-L30399)

```diff
-       b: () => Zu,
-       f: () => Xu
+       c: () => LG,
+       g: () => yG
```

#### 4063. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30410` → after: `L30054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30054) · [Before (L30410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30410)

```diff
-       return null !== (Eu = uu && Uu.get(uu)) && void 0 !== Eu ? Eu : su
+       return null !== (bG = GG && SG.get(GG)) && void 0 !== bG ? bG : wG
```

#### 4064. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30413` → after: `L30057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30057) · [Before (L30413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30413)

```diff
-   37603: (uu, Eu, ju) => {
+   37550: (GG, bG, ZG) => {
```

#### 4065. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30415-L30416` → after: `L30059-L30061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30059-L30061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30059-L30061) · [Before (L30415-L30416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30415-L30416)

```diff
-       $: () => Nu,
-       D: () => mu,
+       B: () => vG,
+       C: () => fG,
+       F: () => cG,
```

#### 4066. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30418-L30420` → after: `L30063-L30064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30063-L30064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30063-L30064) · [Before (L30418-L30420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30418-L30420)

```diff
-       I: () => Ku,
-       K: () => Du,
-       M: () => Yu,
+       L: () => hG,
+       O: () => dG,
```

#### 4067. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30422-L30424` → after: `L30066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30066) · [Before (L30422-L30424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30422-L30424)

```diff
-       R: () => Mu,
-       S: () => iu,
-       W: () => Wu,
+       U: () => MG,
```

#### 4068. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30426` → after: `L30068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30068) · [Before (L30426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30426)

```diff
-       Z: () => Ou,
+       ab: () => aG,
```

#### 4069. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30429-L30433` → after: `L30071-L30076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30071-L30076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30071-L30076) · [Before (L30429-L30433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30429-L30433)

```diff
-       db: () => eu,
-       f: () => pu,
-       fb: () => Qu,
-       ib: () => au,
-       j: () => qu,
+       d: () => XG,
+       eb: () => QG,
+       gb: () => rG,
+       h: () => UG,
+       jb: () => EG,
+       kb: () => PG,
```

#### 4070. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30435` → after: `L30078-L30079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30078-L30079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30078-L30079) · [Before (L30435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30435)

```diff
-       m: () => Cu,
+       lb: () => WG,
+       o: () => VG,
```

#### 4071. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30441-L30443` → after: `L30085-L30087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30085-L30087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30085-L30087) · [Before (L30441-L30443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30441-L30443)

```diff
-     var su = ju(37612),
-       Uu = ju(37621),
-       Zu = ju(37630);
+     var wG = ZG(37556),
+       SG = ZG(37559),
+       LG = ZG(37567);
```

#### 4072. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30503` → after: `L30147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30147) · [Before (L30503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30503)

```diff
-       su !== ju && (ju && (0, Zu.O)(ju), uu[Eu] = ju, su && (0, Zu.M)(su), uu.version++)
+       wG !== ZG && (ZG && (0, LG.Q)(ZG), GG[bG] = ZG, wG && (0, LG.N)(wG), GG.version++)
```

#### 4073. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30511` → after: `L30155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30155) · [Before (L30511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30511)

```diff
-       return void 0 === Eu ? (0, Uu.f)() : Eu
+       return void 0 === bG ? (0, SG.g)() : bG
```

#### 4074. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30517` → after: `L30161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30161) · [Before (L30517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30517)

```diff
-         Xu = (0, Uu.f)(Eu);
+         yG = (0, SG.g)(bG);
```

#### 4075. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30519` → after: `L30163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30163) · [Before (L30519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30519)

```diff
-       const lu = null !== (ju = null === Xu || void 0 === Xu ? void 0 : Xu.create(Zu, Eu)) && void 0 !== ju ? ju : su.c.defines();
+       const kG = null !== (ZG = null === yG || void 0 === yG ? void 0 : yG.create(LG, bG)) && void 0 !== ZG ? ZG : wG.b.defines();
```

#### 4076. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30521` → after: `L30165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30165) · [Before (L30521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30521)

```diff
-         feature: su.c,
+         feature: wG.b,
```

#### 4077. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30533` → after: `L30177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30177) · [Before (L30533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30533)

```diff
-         for (const uu of [Eu.diffuseTexture, Eu.opacityTexture, Eu.emissiveTexture, Eu.reflectionTexture]) uu && ((0, Zu.O)(uu), Uu.push(uu));
+         for (const GG of [bG.diffuseTexture, bG.opacityTexture, bG.emissiveTexture, bG.reflectionTexture]) GG && ((0, LG.Q)(GG), SG.push(GG));
```

#### 4078. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30539` → after: `L30183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30183) · [Before (L30539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30539)

```diff
-           if ("diffuseTexture" === Uu || "opacityTexture" === Uu || "emissiveTexture" === Uu || "reflectionTexture" === Uu) eu(uu, Uu, null !== (Xu = Zu) && void 0 !== Xu ? Xu : null);
+           if ("diffuseTexture" === SG || "opacityTexture" === SG || "emissiveTexture" === SG || "reflectionTexture" === SG) EG(GG, SG, null !== (yG = LG) && void 0 !== yG ? yG : null);
```

#### 4079. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30544` → after: `L30188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30188) · [Before (L30544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30544)

```diff
-         for (const uu of Uu)(0, Zu.M)(uu)
+         for (const GG of SG)(0, LG.N)(GG)
```

#### 4080. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30587` → after: `L30231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30231) · [Before (L30587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30587)

```diff
-       --uu.refs > 0 || (fu--, (0, Zu.L)(uu.gpu), eu(uu, "diffuseTexture", null), eu(uu, "opacityTexture", null), eu(uu, "emissiveTexture", null), eu(uu, "reflectionTexture", null), uu.mirror && (bu.delete(uu.mirror), uu.mirror = null))
+       --GG.refs > 0 || (YG--, (0, LG.M)(GG.gpu), EG(GG, "diffuseTexture", null), EG(GG, "opacityTexture", null), EG(GG, "emissiveTexture", null), EG(GG, "reflectionTexture", null), GG.mirror && (pG.delete(GG.mirror), GG.mirror = null))
```

#### 4081. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30622` → after: `L30266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30266) · [Before (L30622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30622)

```diff
-   37630: (uu, Eu, ju) => {
+   37567: (GG, bG, ZG) => {
```

#### 4082. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30624-L30626` → after: `L30268-L30269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30268-L30269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30268-L30269) · [Before (L30624-L30626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30624-L30626)

```diff
-       D: () => Du,
-       E: () => eu,
-       F: () => gu,
+       B: () => EG,
+       C: () => rG,
```

#### 4083. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30628-L30629` → after: `L30271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30271) · [Before (L30628-L30629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30628-L30629)

```diff
-       I: () => ku,
-       L: () => ou,
+       K: () => FG,
```

#### 4084. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30631` → after: `L30273-L30274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30273-L30274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30273-L30274) · [Before (L30631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30631)

```diff
-       O: () => wu,
+       N: () => iG,
+       Q: () => uG,
```

#### 4085. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30633` → after: `L30276-L30277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30276-L30277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30276-L30277) · [Before (L30633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30633)

```diff
-       T: () => Pu,
+       U: () => mG,
+       c: () => yG,
```

#### 4086. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30635-L30637` → after: `L30279-L30280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30279-L30280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30279-L30280) · [Before (L30635-L30637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30635-L30637)

```diff
-       f: () => Uu,
-       i: () => Zu,
-       l: () => Nu,
+       g: () => LG,
+       k: () => QG,
```

#### 4087. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30641` → after: `L30285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30285) · [Before (L30641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30641)

```diff
-       u: () => Ou,
+       v: () => UG,
```

#### 4088. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30643` → after: `L30287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30287) · [Before (L30643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30643)

```diff
-       z: () => lu
+       y: () => JG
```

#### 4089. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30645` → after: `L30289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30289) · [Before (L30645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30645)

```diff
-     var su = ju(37621);
+     var wG = ZG(37559);
```

#### 4090. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30697-L30698` → after: `L30341-L30342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30341-L30342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30341-L30342) · [Before (L30697-L30698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30697-L30698)

```diff
-         wrapU: null !== (ju = Ou.wrapU) && void 0 !== ju ? ju : fu,
-         wrapV: null !== (Uu = Ou.wrapV) && void 0 !== Uu ? Uu : fu,
+         wrapU: null !== (ZG = KG.wrapU) && void 0 !== ZG ? ZG : YG,
+         wrapV: null !== (SG = KG.wrapV) && void 0 !== SG ? SG : YG,
```

#### 4091. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30702` → after: `L30346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30346) · [Before (L30702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30702)

```diff
-       return hu.hasAlpha = null !== (Zu = Ou.hasAlpha) && void 0 !== Zu && Zu, null === (Xu = (0, su.f)(uu)) || void 0 === Xu || Xu.texture(hu, uu, Eu), hu
+       return dG.hasAlpha = null !== (LG = KG.hasAlpha) && void 0 !== LG && LG, null === (yG = (0, wG.g)(GG)) || void 0 === yG || yG.texture(dG, GG, bG), dG
```

#### 4092. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30725` → after: `L30369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30369) · [Before (L30725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30725)

```diff
-       return bu.matrix[10] = 1, null === (ju = (0, su.f)(uu)) || void 0 === ju || ju.cube(bu, uu, Eu), bu
+       return pG.matrix[10] = 1, null === (ZG = (0, wG.g)(GG)) || void 0 === ZG || ZG.cube(pG, GG, bG), pG
```

#### 4093. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30758` → after: `L30402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30402) · [Before (L30758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30758)

```diff
-       return null !== (Eu = null === (ju = Mu) || void 0 === ju ? void 0 : ju.loaded(uu)) && void 0 !== Eu ? Eu : null
+       return null !== (bG = null === (ZG = zG) || void 0 === ZG ? void 0 : ZG.loaded(GG)) && void 0 !== bG ? bG : null
```

#### 4094. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30769` → after: `L30413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30413) · [Before (L30769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30769)

```diff
-       uu.live || (uu.live = !0, cu++, null === (Eu = Mu) || void 0 === Eu || Eu.dl(uu));
+       GG.live || (GG.live = !0, fG++, null === (bG = zG) || void 0 === bG || bG.Ik(GG));
```

#### 4095. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30795` → after: `L30439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30439) · [Before (L30795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30795)

```diff
-   37854: (uu, Eu, ju) => {
+   37835: (GG, bG, ZG) => {
```

#### 4096. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L30999-L31000` → after: `L30643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30643) · [Before (L30999-L31000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L30999-L31000)

```diff
-       f: () => qu,
-       i: () => bu,
+       g: () => UG,
```

#### 4097. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31002-L31003` → after: `L30645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30645) · [Before (L31002-L31003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31002-L31003)

```diff
-       l: () => cu,
-       p: () => su,
+       n: () => kG,
```

#### 4098. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31007-L31008` → after: `L30648-L30652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30648-L30652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30648-L30652) · [Before (L31007-L31008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31007-L31008)

```diff
-       u: () => fu,
-       v: () => Cu
+       v: () => yG,
+       w: () => hG,
+       x: () => KG,
+       y: () => YG,
+       z: () => VG
```

#### 4099. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31011` → after: `L30655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30655) · [Before (L31011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31011)

```diff
-   37843: (uu, Eu, ju) => {
+   37820: (GG, bG, ZG) => {
```

#### 4100. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31014-L31016` → after: `L30658-L30660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30658-L30660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30658-L30660) · [Before (L31014-L31016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31014-L31016)

```diff
-       e: () => lu,
-       i: () => qu,
-       m: () => fu
+       h: () => kG,
+       j: () => UG,
+       k: () => YG
```

#### 4101. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31018-L31020` → after: `L30662-L30664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30662-L30664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30662-L30664) · [Before (L31018-L31020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31018-L31020)

```diff
-     var su = ju(37848),
-       Uu = ju(37854),
-       Zu = ju(37858);
+     var wG = ZG(37829),
+       SG = ZG(37835),
+       LG = ZG(37843);
```

#### 4102. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31030` → after: `L30674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30674) · [Before (L31030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31030)

```diff
-         this.owner = uu, this.geometry = Eu, this.HY = ju, this.materials = su, this.gpu = []
+         this.owner = GG, this.geometry = bG, this.Bh = ZG, this.materials = wG, this.gpu = []
```

#### 4103. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31035` → after: `L30679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30679) · [Before (L31035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31035)

```diff
-         this.model = void 0, this.position = void 0, this.count = 0, this.HY = new Int32Array(2), this.boxes = new Float64Array(6)
+         this.model = void 0, this.position = void 0, this.count = 0, this.Bh = new Int32Array(2), this.boxes = new Float64Array(6)
```

#### 4104. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31038` → after: `L30682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30682) · [Before (L31038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31038)

```diff
-         this.count = uu, this.HY.length < 2 * uu && (this.HY = new Int32Array(2 * uu), this.boxes = new Float64Array(6 * uu))
+         this.count = GG, this.Bh.length < 2 * GG && (this.Bh = new Int32Array(2 * GG), this.boxes = new Float64Array(6 * GG))
```

#### 4105. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31048-L31049` → after: `L30692-L30693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30692-L30693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30692-L30693) · [Before (L31048-L31049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31048-L31049)

```diff
-         const Xu = this.nodes.Mb;
-         this.flags.length < Xu && (this.layer = (0, Zu.h)(this.layer, Xu), this.flags = (0, Zu.h)(this.flags, Xu), this.version = (0, Zu.h)(this.version, Xu), this.radius = (0, Zu.h)(this.radius, Xu), this.visibility = (0, Zu.h)(this.visibility, Xu), this.sphere = (0, Zu.h)(this. … [truncated]
+         const yG = this.nodes.rp;
+         this.flags.length < yG && (this.layer = (0, LG.n)(this.layer, yG), this.flags = (0, LG.n)(this.flags, yG), this.version = (0, LG.n)(this.version, yG), this.radius = (0, LG.n)(this.radius, yG), this.visibility = (0, LG.n)(this.visibility, yG), this.sphere = (0, LG.n)(this. … [truncated]
```

#### 4106. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31070` → after: `L30714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30714) · [Before (L31070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31070)

```diff
-         this.looseIndex.length < this.nodes.Mb && (this.loose = (0, Zu.h)(this.loose, this.nodes.Mb), this.looseIndex = (0, Zu.h)(this.looseIndex, this.nodes.Mb));
+         this.looseIndex.length < this.nodes.rp && (this.loose = (0, LG.n)(this.loose, this.nodes.rp), this.looseIndex = (0, LG.n)(this.looseIndex, this.nodes.rp));
```

#### 4107. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31086` → after: `L30730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30730) · [Before (L31086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31086)

```diff
-           Of: ju,
+           nY: ZG,
```

#### 4108. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31088` → after: `L30732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30732) · [Before (L31088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31088)

```diff
-           zb: Uu
+           Op: SG
```

#### 4109. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31090` → after: `L30734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30734) · [Before (L31090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31090)

```diff
-         if (0 === (this.nodes.flags[uu] & Zu.d.mesh) || 0 === su[uu] || ju[qu] * ju[qu + 1] * ju[qu + 2] === 0 || 0 === (lu & Xu.isVisible) || !(this.visibility[uu] > 0)) return !1;
+         if (0 === (this.nodes.flags[GG] & LG.f.mesh) || 0 === wG[GG] || ZG[UG] * ZG[UG + 1] * ZG[UG + 2] === 0 || 0 === (kG & yG.isVisible) || !(this.visibility[GG] > 0)) return !1;
```

#### 4110. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31112` → after: `L30756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30756) · [Before (L31112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31112)

```diff
-           Of: lu,
+           nY: kG,
```

#### 4111. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31117` → after: `L30761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30761) · [Before (L31117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31117)

```diff
-           if (0 === (fu[Xu] & Zu.d.mesh) || (ju[Xu] & Cu) !== Cu || 0 === qu[Xu] || Number.isNaN(su[Xu])) continue;
+           if (0 === (YG[yG] & LG.f.mesh) || (ZG[yG] & VG) !== VG || 0 === UG[yG] || Number.isNaN(wG[yG])) continue;
```

#### 4112. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31136` → after: `L30780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30780) · [Before (L31136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31136)

```diff
-         const Eu = Zu.d.mesh | Zu.d.enabled;
+         const bG = LG.f.mesh | LG.f.enabled;
```

#### 4113. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L31146` → after: `L30790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R30790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L30790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L30790) · [Before (L31146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L31146)

```diff
-         if (this.nodes.worldNow(uu, Zu, qu), (0, Uu.f)(qu, 0, fu), (0, Uu.u)(Eu, 0, fu, Cu, 0), (0, Uu.v)(Eu, 3, fu, Cu, 3), Cu[6] = Eu[6], (0, su.v)(Cu), !(0, su.r)(Cu, this.sphere, 4 * uu) || !(0, su.q)(Cu, this.box, 6 * uu)) return -1;
+         if (this.nodes.worldNow(GG, LG, UG), (0, SG.g)(UG, 0, YG), (0, SG.y)(bG, 0, YG, VG, 0), (0, SG.z)(bG, 3, YG, VG, 3), VG[6] = bG[6], (0, wG.s)(VG), !(0, wG.q)(VG, this.sphere, 4 * GG) || !(0, wG.m)(VG, this.box, 6 * GG)) return -1;
```
