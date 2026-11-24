# Changed — Bundle Modifications Report (Part 103 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `103 / 142` (**433** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 102](part-102.md) · [Part 104 →](part-104.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (3925 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 1721. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13430` → after: `L13266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13266) · [Before (L13430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13430)

```diff
-         this.HP = pp, this.meshCreator = ip, this.entities = {}, this.ironChestPasskeyCache = new jY, this.cameraController = void 0, this.freeCameraController = void 0, this.scriptedCameraController = void 0, this.environmentController = void 0, this.groundArrowPathController =  … [truncated]
+         this.Rl = TT, this.meshCreator = UT, this.entities = {}, this.ironChestPasskeyCache = new Ok, this.cameraController = void 0, this.freeCameraController = void 0, this.scriptedCameraController = void 0, this.environmentController = void 0, this.groundArrowPathController =  … [truncated]
```

#### 1722. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13432-L13434` → after: `L13268-L13270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13268-L13270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13268-L13270) · [Before (L13432-L13434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13432-L13434)

```diff
-             if (TS.c.get("clientEscMenuOptions").showChunkBorders) {
-               const pp = this.HP.camera.sH();
-               return (0, Np.T)(pp)
+             if (Ig.b.get("clientEscMenuOptions").showChunkBorders) {
+               const TT = this.Rl.camera.Aq();
+               return (0, sT.J)(TT)
```

#### 1723. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13440` → after: `L13276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13276) · [Before (L13440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13440)

```diff
-         }), this.gameRecorder = new JW(this, this.HP), this.gameReplayer = new qy(this, this.HP), this.itemDropPrediction = new ly(new Qy(pp)), (0, Tp.onGameResetOnce)((() => {
+         }), this.gameRecorder = new Qp(this, this.Rl), this.gameReplayer = new wB(this, this.Rl), this.itemDropPrediction = new IB(new QB(TT)), (0, FT.onGameResetOnce)((() => {
```

#### 1724. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13442` → after: `L13278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13278) · [Before (L13442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13442)

```diff
-         })), this.inventoryPrediction = new My((() => pp.Yk.fip(pp.NJ)), (pp => {
+         })), this.inventoryPrediction = new tB((() => TT.pY.yUT(TT.VV)), (TT => {
```

#### 1725. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13445` → after: `L13281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13281) · [Before (L13445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13445)

```diff
-           (0, Tp.sendColyMessage)(pL.Mi, null)
+           (0, FT.sendColyMessage)(Rn.Ei, null)
```

#### 1726. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13455-L13456` → after: `L13291-L13292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13291-L13292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13291-L13292) · [Before (L13455-L13456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13455-L13456)

```diff
-         (0, Oi.l)(), (0, DL.g)();
-         const ip = Promise.all([by.load(), PL.g.load()]);
+         (0, UU.i)(), (0, kH.k)();
+         const UT = Promise.all([CB.load(), lH.h.load()]);
```

#### 1727. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13458-L13459` → after: `L13294-L13295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13294-L13295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13294-L13295) · [Before (L13458-L13459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13458-L13459)

```diff
-         const cp = (0, uS.g)(),
-           [Op, op] = (0, qY.i)(),
+         const mT = (0, fg.i)(),
+           [WT, zT] = (0, xk.e)(),
```

#### 1728. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13464` → after: `L13300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13300) · [Before (L13464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13464)

```diff
-         (0, MY.n)(null);
+         (0, dk.k)(null);
```

#### 1729. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13466-L13467` → after: `L13302-L13303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13302-L13303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13302-L13303) · [Before (L13466-L13467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13466-L13467)

```diff
-           xp = TS.c.get("clientEscMenuOptions");
-         TS.c.reprobeOldIntelDriver(), await (0, DL.s)("shader pack");
+           nT = Ig.b.get("clientEscMenuOptions");
+         Ig.b.reprobeOldIntelDriver(), await (0, kH.r)("shader pack");
```

#### 1730. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13469` → after: `L13305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13305) · [Before (L13469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13469)

```diff
-           Yp = TS.c.isWebGpuDefaultOff(),
+           kT = Ig.b.isWebGpuDefaultOff(),
```

#### 1731. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13476` → after: `L13312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13312) · [Before (L13476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13476)

```diff
-           await (0, DL.s)("renderer");
+           await (0, kH.r)("renderer");
```

#### 1732. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13484` → after: `L13320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13320) · [Before (L13484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13484)

```diff
-             webGpuDefaultOffReason: TS.c.webGpuDefaultOffReason(),
+             webGpuDefaultOffReason: Ig.b.webGpuDefaultOffReason(),
```

#### 1733. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13495` → after: `L13331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13331) · [Before (L13495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13495)

```diff
-             (0, xx.d)((ip => {
+             (0, Wn.c)((UT => {
```

#### 1734. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13500` → after: `L13336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13336) · [Before (L13500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13500)

```diff
-           const Ip = await cp() ? PS.C() : null;
+           const MT = await mT() ? Hg.x() : null;
```

#### 1735. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13502-L13504` → after: `L13338-L13340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13338-L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13338-L13340) · [Before (L13502-L13504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13502-L13504)

```diff
-             (0, CS.k)();
-             const pp = (0, kS.g)();
-             return di.d.errorWithCode("timeout" === pp || "fetch_failed" === pp ? "Bloxd couldn't finish loading. Check your connection and refresh the page." : "Bloxd couldn't start in this browser. Try another browser, or turn off blockers for this site.", ei.k.INITIALISE_NOA,  … [truncated]
+             (0, Jg.i)();
+             const TT = (0, ig.f)();
+             return fU.c.errorWithCode("timeout" === TT || "fetch_failed" === TT ? "Bloxd couldn't finish loading. Check your connection and refresh the page." : "Bloxd couldn't start in this browser. Try another browser, or turn off blockers for this site.", qU.j.INITIALISE_NOA,  … [truncated]
```

#### 1736. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13508-L13510` → after: `L13344-L13346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13344-L13346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13344-L13346) · [Before (L13508-L13510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13508-L13510)

```diff
-           const Up = null !== (Wp = null === op || void 0 === op ? void 0 : op.WH) && void 0 !== Wp ? Wp : await (0, MS.f)();
-           await (0, DL.s)("engine");
-           const Hp = TS.c.get("clientEscMenuOptions").antiAliasing;
+           const ZT = null !== (pT = null === zT || void 0 === zT ? void 0 : zT.Yq) && void 0 !== pT ? pT : await (0, Yg.f)();
+           await (0, kH.r)("engine");
+           const qT = Ig.b.get("clientEscMenuOptions").antiAliasing;
```

#### 1737. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13512-L13515` → after: `L13348-L13351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13348-L13351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13348-L13351) · [Before (L13512-L13515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13512-L13515)

```diff
-               oN: pp,
-               WH: Up,
-               yU: null !== (vp = null === op || void 0 === op ? void 0 : op.yU) && void 0 !== vp ? vp : null,
-               Bl: yp.g.clientTicksPerSecond,
+               eC: TT,
+               Yq: ZT,
+               NB: null !== (vT = null === zT || void 0 === zT ? void 0 : zT.NB) && void 0 !== vT ? vT : null,
+               sF: BT.f.clientTicksPerSecond,
```

#### 1738. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13518-L13525` → after: `L13354-L13361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13354-L13361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13354-L13361) · [Before (L13518-L13525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13518-L13525)

```diff
-               aG: !1,
-               hG: !1,
-               Qy: yp.g.Qy,
-               iv: yp.g.iv,
-               xpp: [0, 5, 0],
-               Vw: yp.g.Vw,
-               Kw: yp.g.Kw,
-               pv: yp.g.pv,
+               lN: !1,
+               kN: !1,
+               cB: BT.f.cB,
+               Vc: BT.f.Vc,
+               nTT: [0, 5, 0],
+               Fc: BT.f.Fc,
+               sc: BT.f.sc,
+               Pc: BT.f.Pc,
```

#### 1739. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13527-L13533` → after: `L13363-L13369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13363-L13369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13363-L13369) · [Before (L13527-L13533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13527-L13533)

```diff
-               UU: !xp.disableAmbientOcclusion,
-               gcp: [.92, .8, .5],
-               Gcp: 1,
-               Xu: [Sp.horizontal, Sp.vertical],
-               pE: (0, MY.i)(Sp),
-               WE: [ui.b.xz, ui.b.y],
-               YG: !1,
+               EB: !nT.disableAmbientOcclusion,
+               wmT: [.92, .8, .5],
+               tmT: 1,
+               mY: [gT.horizontal, gT.vertical],
+               ZI: (0, dk.e)(gT),
+               qI: [iU.e.xz, iU.e.y],
+               wG: !1,
```

#### 1740. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13535-L13537` → after: `L13371-L13373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13371-L13373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13371-L13373) · [Before (L13535-L13537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13535-L13537)

```diff
-               QP: yp.g.QP,
-               Fcp: Hp,
-               qP: (0, ji.c)((() => Ap), (() => Zp.k.bloxd)),
+               pL: BT.f.pL,
+               dmT: qT,
+               nL: (0, bU.d)((() => lT), (() => ET.j.bloxd)),
```

#### 1741. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13557` → after: `L13393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13393) · [Before (L13557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13557)

```diff
-               rcp: pp => {
+               amT: TT => {
```

#### 1742. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13561` → after: `L13397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13397) · [Before (L13561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13561)

```diff
-               Xy: {
+               BB: {
```

#### 1743. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13566` → after: `L13402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13402) · [Before (L13566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13566)

```diff
-               Hpp: {
+               fTT: {
```

#### 1744. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13569` → after: `L13405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13405) · [Before (L13569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13569)

```diff
-               Dy: Lp && null !== op ? {
+               Np: HT && null !== zT ? {
```

#### 1745. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13575-L13576` → after: `L13411-L13412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13411-L13412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13411-L13412) · [Before (L13575-L13576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13575-L13576)

```diff
-               wp.m.subscribe("appManagerUpdated|gameState", (ip => {
-                 "landingPage" === ip ? pp.Zk.stopWorkers() : (0, TS.f)(ip) && pp.Zk.restartWorkers()
+               cT.j.subscribe("appManagerUpdated|gameState", (UT => {
+                 "landingPage" === UT ? TT.JY.stopWorkers() : (0, Ig.c)(UT) && TT.JY.restartWorkers()
```

#### 1746. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13578` → after: `L13414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13414) · [Before (L13578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13578)

```diff
-             }(Ap), (0, tL.g)(Ap, WS.c()), (0, DL.e)() && (Ap.ZC(!0), Pp = !0), function(pp) {
+             }(lT), (0, vH.e)(lT, kg.c()), (0, kH.h)() && (lT.MI(!0), LT = !0), function(TT) {
```

#### 1747. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13580` → after: `L13416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13416) · [Before (L13580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13580)

```diff
-               ip && ((0, hS.k)(), (0, Sx.r)("webgpuloss") && (0, Sx.e)("loseWebGpuDevice", (() => {
+               UT && ((0, Fg.p)(), (0, mn.r)("webgpuloss") && (0, mn.b)("loseWebGpuDevice", (() => {
```

#### 1748. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13587-L13588` → after: `L13423-L13424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13423-L13424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13423-L13424) · [Before (L13587-L13588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13587-L13588)

```diff
-               (0, hS.k)();
-               const ip = new ox(pp._gl.getExtension("WEBGL_lose_context"), pp.eU, new cx),
+               (0, Fg.p)();
+               const UT = new Tn(TT._gl.getExtension("WEBGL_lose_context"), TT.TZ, new Ag),
```

#### 1749. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13599` → after: `L13435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13435) · [Before (L13599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13599)

```diff
-             }(Ap.WU.engine), null !== op && void 0 !== op && op.gpuDevice && Ap.Dy) {
+             }(lT.GB.engine), null !== zT && void 0 !== zT && zT.gpuDevice && lT.Np) {
```

#### 1750. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13601` → after: `L13437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13437) · [Before (L13601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13601)

```diff
-             const pp = Ap.Dy;
+             const TT = lT.Np;
```

#### 1751. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13607` → after: `L13443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13443) · [Before (L13607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13607)

```diff
-           Ap.WP.on("aU", (() => {
+           lT.Nl.on("bZ", (() => {
```

#### 1752. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13609` → after: `L13445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13445) · [Before (L13609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13609)

```diff
-               Ap.WP.aU && (0, UY.l)()
+               lT.Nl.bZ && (0, Bk.i)()
```

#### 1753. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13613` → after: `L13449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13449) · [Before (L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13613)

```diff
-           return (0, CS.k)(), ep instanceof Error && ep.message.startsWith("WebGL not supported") ? di.d.errorWithCode("An issue with your browser is preventing the game from loading. It will work after you have fully closed and re-opened your browser.", ei.k.INITIALISE_WEBGL, {
+           return (0, Jg.i)(), bT instanceof Error && bT.message.startsWith("WebGL not supported") ? fU.c.errorWithCode("An issue with your browser is preventing the game from loading. It will work after you have fully closed and re-opened your browser.", qU.j.INITIALISE_WEBGL, {
```

#### 1754. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13616` → after: `L13452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13452) · [Before (L13616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13616)

```diff
-           }) : di.d.errorWithCode(ep.toString(), ei.k.INITIALISE_NOA, {
+           }) : fU.c.errorWithCode(bT.toString(), qU.j.INITIALISE_NOA, {
```

#### 1755. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13621-L13622` → after: `L13457-L13458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13457-L13458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13457-L13458) · [Before (L13621-L13622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13621-L13622)

```diff
-         wp.m.GA("matchmakeAndPlayStepCompleted", {
-           step: ei.k.INITIALISE_NOA,
+         cT.j.EZ("matchmakeAndPlayStepCompleted", {
+           step: qU.j.INITIALISE_NOA,
```

#### 1756. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13624-L13627` → after: `L13460-L13463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13460-L13463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13460-L13463) · [Before (L13624-L13627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13624-L13627)

```diff
-         }), await (0, DL.s)("world gen"), (0, yL.b)(Ap), (0, UL.e)(Ap), await (0, DL.s)("particles"), (0, lp.v)(Ap), await (0, DL.s)("gameplay"), ay.setupBloxdForGameplay(Ap, pp);
-         Zp.k.bloxd, Zp.k.HP = Ap, PY.b.initNoa(Ap), (0, Ty.d)(Ap), await (0, DL.s)("registration");
-         const Hp = (0, hp.f)(Ap).catch((pp => {
-             console.error(pp.stack), (0, tP.NU)(pp);
+         }), await (0, kH.r)("world gen"), (0, pH.b)(lT), (0, BH.e)(lT), await (0, kH.r)("particles"), (0, yT.u)(lT), await (0, kH.r)("gameplay"), KB.setupBloxdForGameplay(lT, TT);
+         ET.j.bloxd, ET.j.Rl = lT, lk.d.initNoa(lT), (0, VB.e)(lT), await (0, kH.r)("registration");
+         const qT = (0, uT.g)(lT).catch((TT => {
+             console.error(TT.stack), (0, fL.cZ)(TT);
```

#### 1757. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13629` → after: `L13465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13465) · [Before (L13629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13629)

```diff
-             return Up.d.getId() !== zp.b && (ip += ' - try switching to the "Default 2" texture pack in settings.'), {
+             return ZT.e.getId() !== hT.c && (UT += ' - try switching to the "Default 2" texture pack in settings.'), {
```

#### 1758. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13638` → after: `L13474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13474) · [Before (L13638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13638)

```diff
-           dp = (0, Xp.q)(Ap).catch((pp => (console.error(pp.stack), {
+           iT = (0, aT.r)(lT).catch((TT => (console.error(TT.stack), {
```

#### 1759. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13646-L13648` → after: `L13482-L13484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13482-L13484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13482-L13484) · [Before (L13646-L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13646-L13648)

```diff
-         return ay.initialAssetLoadedProm = Promise.all([Hp, dp]), Pp && (0, DL.v)((() => {
-           Ap.ZC(!1)
-         })), di.d.value({
+         return KB.initialAssetLoadedProm = Promise.all([qT, iT]), LT && (0, kH.u)((() => {
+           lT.MI(!1)
+         })), fU.c.value({
```

#### 1760. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13657` → after: `L13493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13493) · [Before (L13657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13657)

```diff
-         return Zp.k.bloxd = op, pp.bloxd = Zp.k.bloxd, cp.init(op), ti.e.init(), wp.m.GA("newBloxdSetup", op), {
+         return ET.j.bloxd = zT, TT.bloxd = ET.j.bloxd, mT.init(zT), cU.d.init(), cT.j.EZ("newBloxdSetup", zT), {
```

#### 1761. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13663` → after: `L13499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13499) · [Before (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13663)

```diff
-         if (Op.aborted) return di.d.errorWithCode("Left the game while it loaded", ei.k.CONNECT_TO_GAME_SERVER, {
+         if (WT.aborted) return fU.c.errorWithCode("Left the game while it loaded", qU.j.CONNECT_TO_GAME_SERVER, {
```

#### 1762. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13665` → after: `L13501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13501) · [Before (L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13665)

```diff
-           OO: !0
+           Km: !0
```

#### 1763. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13669` → after: `L13505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13505) · [Before (L13669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13669)

```diff
-             (0, vP.h)(op, (0, vP.e)(Op))
+             (0, vL.k)(zT, (0, vL.i)(WT))
```

#### 1764. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13675` → after: `L13511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13511) · [Before (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13675)

```diff
-           xp = hy.load(ip.gameNameWithVariation).then((() => null), (pp => null !== pp && void 0 !== pp ? pp : new Error("the game's code did not load")));
+           nT = rB.load(UT.gameNameWithVariation).then((() => null), (TT => null !== TT && void 0 !== TT ? TT : new Error("the game's code did not load")));
```

#### 1765. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13680` → after: `L13516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13516) · [Before (L13680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13680)

```diff
-         const Yp = wp.m.subscribe("leaveGame", (() => {
+         const kT = cT.j.subscribe("leaveGame", (() => {
```

#### 1766. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13686` → after: `L13522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13522) · [Before (L13686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13686)

```diff
-           wp.m.unsubscribe(Yp), Op.removeEventListener("abort", Ip)
+           cT.j.unsubscribe(kT), WT.removeEventListener("abort", MT)
```

#### 1767. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13691` → after: `L13527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13527) · [Before (L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13691)

```diff
-         wp.m.GA("onStartAssetLoading");
+         cT.j.EZ("onStartAssetLoading");
```

#### 1768. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13693` → after: `L13529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13529) · [Before (L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13693)

```diff
-         if (!1 === Lp.success) return di.d.errorWithCode(Lp.failDetails.reason, ei.k.CONNECT_TO_GAME_SERVER, {
+         if (!1 === HT.success) return fU.c.errorWithCode(HT.failDetails.reason, qU.j.CONNECT_TO_GAME_SERVER, {
```

#### 1769. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13695` → after: `L13531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13531) · [Before (L13695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13695)

```diff
-           OO: !0 === Lp.failDetails.goesToUpdateWaiting || Sp(),
+           Km: !0 === HT.failDetails.goesToUpdateWaiting || gT(),
```

#### 1770. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13701-L13702` → after: `L13537-L13538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13537-L13538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13537-L13538) · [Before (L13701-L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13701-L13702)

```diff
-         wp.m.GA("matchmakeAndPlayStepCompleted", {
-           step: ei.k.CONNECT_TO_GAME_SERVER,
+         cT.j.EZ("matchmakeAndPlayStepCompleted", {
+           step: qU.j.CONNECT_TO_GAME_SERVER,
```

#### 1771. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13710-L13711` → after: `L13546-L13547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13546-L13547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13546-L13547) · [Before (L13710-L13711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13710-L13711)

```diff
-           Pp = ip => (Ap.dispose(), Dp.YH(), Dp.leave(), pp.msgHandler === Dp && (pp.msgHandler = null), ip),
-           Wp = pp => Pp(di.d.errorWithCode("Left the game while it loaded", pp, {
+           LT = UT => (lT.dispose(), jT.lq(), jT.leave(), TT.msgHandler === jT && (TT.msgHandler = null), UT),
+           pT = TT => LT(fU.c.errorWithCode("Left the game while it loaded", TT, {
```

#### 1772. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13713` → after: `L13549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13549) · [Before (L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13713)

```diff
-             OO: !0
+             Km: !0
```

#### 1773. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13715-L13717` → after: `L13551-L13553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13551-L13553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13551-L13553) · [Before (L13715-L13717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13715-L13717)

```diff
-         if (Sp()) return Wp(ei.k.CONNECT_TO_GAME_SERVER);
-         const [yp, vp] = await ay.initialAssetLoadedProm, tp = Up.d.getGenerationFailure();
-         if (null !== tp) return Sp() ? Wp(ei.k.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES) : Pp(di.d.errorWithCode(tp.message, ei.k.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES, {
+         if (gT()) return pT(qU.j.CONNECT_TO_GAME_SERVER);
+         const [BT, vT] = await KB.initialAssetLoadedProm, fT = ZT.e.getGenerationFailure();
+         if (null !== fT) return gT() ? pT(qU.j.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES) : LT(fU.c.errorWithCode(fT.message, qU.j.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES, {
```

#### 1774. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13721` → after: `L13557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13557) · [Before (L13721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13721)

```diff
-         if (!1 === yp.success) return di.d.errorWithCode(yp.failDetails.reason, ei.k.REGISTRATION, {
+         if (!1 === BT.success) return fU.c.errorWithCode(BT.failDetails.reason, qU.j.REGISTRATION, {
```

#### 1775. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13724` → after: `L13560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13560) · [Before (L13724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13724)

```diff
-         if (!1 === vp.success) return di.d.errorWithCode(vp.failDetails.reason, ei.k.SETUP_LIFEFORMS, {
+         if (!1 === vT.success) return fU.c.errorWithCode(vT.failDetails.reason, qU.j.SETUP_LIFEFORMS, {
```

#### 1776. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13727` → after: `L13563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13563) · [Before (L13727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13727)

```diff
-         if (Sp()) return Wp(ei.k.REGISTRATION);
+         if (gT()) return pT(qU.j.REGISTRATION);
```

#### 1777. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13729` → after: `L13565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13565) · [Before (L13729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13729)

```diff
-         if (null !== Hp) return Pp(di.d.errorWithCode(String(Hp), ei.k.REGISTRATION, {
+         if (null !== qT) return LT(fU.c.errorWithCode(String(qT), qU.j.REGISTRATION, {
```

#### 1778. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13733-L13735` → after: `L13569-L13571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13569-L13571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13569-L13571) · [Before (L13733-L13735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13733-L13735)

```diff
-         const dp = pp.HP,
-           ep = await KD.applyForGame(dp.Dy, ip.gameNameWithVariation, (() => Sp() || Ip()));
-         return SL.d.beforeServerListeners && await SL.d.beforeServerListeners(), Sp() || "OO" === ep.status && !Ip() ? Wp(ei.k.SHADER_PACK) : "failed" === ep.status ? Pp(di.d.errorWithCode(ep.messageKey, ei.k.SHADER_PACK, {
+         const iT = TT.Rl,
+           bT = await Aj.applyForGame(iT.Np, UT.gameNameWithVariation, (() => gT() || MT()));
+         return MH.c.beforeServerListeners && await MH.c.beforeServerListeners(), gT() || "Km" === bT.status && !MT() ? pT(qU.j.SHADER_PACK) : "failed" === bT.status ? LT(fU.c.errorWithCode(bT.messageKey, qU.j.SHADER_PACK, {
```

#### 1779. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13737` → after: `L13573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13573) · [Before (L13737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13737)

```diff
-         })) : Ip() ? Pp(di.d.ok()) : Dp.uR() ? Pp(di.d.errorWithCode("You have disconnected from the server.", ei.k.CONNECT_TO_GAME_SERVER, {
+         })) : MT() ? LT(fU.c.ok()) : jT.bJ() ? LT(fU.c.errorWithCode("You have disconnected from the server.", qU.j.CONNECT_TO_GAME_SERVER, {
```

#### 1780. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13739` → after: `L13575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13575) · [Before (L13739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13739)

```diff
-         })) : (null !== (xp = dp.Dy) && void 0 !== xp && xp.isRunning() && (0, Jy.c)(ip.userContext, ip.gameNameWithVariation).catch((pp => {
+         })) : (null !== (nT = iT.Np) && void 0 !== nT && nT.isRunning() && (0, sB.h)(UT.userContext, UT.gameNameWithVariation).catch((TT => {
```

#### 1781. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13741` → after: `L13577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13577) · [Before (L13741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13741)

```diff
-         })), "ok" === ep.status && void 0 !== ep.couldntRun && (0, Jy.b)(ep.couldntRun), pp.handleServerConnectionInitialised(cp, ip.userContext, Dp, Ap), di.d.ok())
+         })), "ok" === bT.status && void 0 !== bT.couldntRun && (0, sB.d)(bT.couldntRun), TT.handleServerConnectionInitialised(mT, UT.userContext, jT, lT), fU.c.ok())
```

#### 1782. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13745` → after: `L13581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13581) · [Before (L13745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13745)

```diff
-         (0, DL.d)();
+         (0, kH.e)();
```

#### 1783. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13754-L13755` → after: `L13590-L13591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13590-L13591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13590-L13591) · [Before (L13754-L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13754-L13755)

```diff
-         } = ay.setupBloxdForGameplay((0, Zp.g)(), pp)));
-         const Ip = (0, Zp.g)(),
+         } = KB.setupBloxdForGameplay((0, ET.h)(), TT)));
+         const MT = (0, ET.h)(),
```

#### 1784. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13757` → after: `L13593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13593) · [Before (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13757)

```diff
-         return Sp.isError() ? Sp.asError().forward() : (Ip.ZC(!1), op.gameRecorder.onGameSessionStarted(), (0, wL.l)(Ip), (0, EY.c)(), ay.hasPlayedFirstGame = !0, di.d.ok())
+         return gT.isError() ? gT.asError().forward() : (MT.MI(!1), zT.gameRecorder.onGameSessionStarted(), (0, ZH.j)(MT), (0, tk.e)(), KB.hasPlayedFirstGame = !0, fU.c.ok())
```

#### 1785. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13760-L13761` → after: `L13596-L13597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13596-L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13596-L13597) · [Before (L13760-L13761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13760-L13761)

```diff
-         Zp.k.bloxd.client.closeClientGameSession(), (0, Tp.resetUtil)();
-         const cp = (0, Zp.g)(),
+         ET.j.bloxd.client.closeClientGameSession(), (0, FT.resetUtil)();
+         const mT = (0, ET.h)(),
```

#### 1786. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13767` → after: `L13603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13603) · [Before (L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13767)

```diff
-         return Ip.isError() ? Ip.asError().forward() : (cp.ZC(!1), op.gameRecorder.onGameSessionStarted(), di.d.ok())
+         return MT.isError() ? MT.asError().forward() : (mT.MI(!1), zT.gameRecorder.onGameSessionStarted(), fU.c.ok())
```

#### 1787. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13770-L13771` → after: `L13606-L13607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13606-L13607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13606-L13607) · [Before (L13770-L13771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13770-L13771)

```diff
-         const op = new RL(this.HP, pp, ip, new DY(this.HP), HL.b);
-         this.clientApi = op, this.clientConnection = Op, Op.setupServerListeners(this.HP, cp, op)
+         const zT = new JH(this.Rl, TT, UT, new kk(this.Rl), fH.c);
+         this.clientApi = zT, this.clientConnection = WT, WT.setupServerListeners(this.Rl, mT, zT)
```

#### 1788. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13778-L13779` → after: `L13614-L13615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13614-L13615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13614-L13615) · [Before (L13778-L13779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13778-L13779)

```diff
-           Ip = (0, xp.Mb)(Op),
-           Sp = (0, xp.Ib)(Op),
+           MT = (0, nT.dc)(WT),
+           gT = (0, nT._b)(WT),
```

#### 1789. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13781` → after: `L13617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13617) · [Before (L13781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13781)

```diff
-           Yp = (0, ki.I)(op),
+           kT = (0, OU.S)(zT),
```

#### 1790. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13783` → after: `L13619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13619) · [Before (L13783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13783)

```diff
-             localPlayerId: this.HP.NJ
+             localPlayerId: this.Rl.VV
```

#### 1791. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13789` → after: `L13625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13625) · [Before (L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13789)

```diff
-           (0, ES.b)("No client code for the joined game", Up)
+           (0, xg.d)("No client code for the joined game", ZT)
```

#### 1792. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13791` → after: `L13627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13627) · [Before (L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13791)

```diff
-         const Pp = null !== (pp = null === (ip = Ap) || void 0 === ip ? void 0 : ip(Yp, Lp, Sp, Dp)) && void 0 !== pp ? pp : {};
+         const LT = null !== (TT = null === (UT = lT) || void 0 === UT ? void 0 : UT(kT, HT, gT, jT)) && void 0 !== TT ? TT : {};
```

#### 1793. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13795` → after: `L13631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13631) · [Before (L13795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13795)

```diff
-           localBlockBroken: (0, mY.d)(),
+           localBlockBroken: (0, Yk.b)(),
```

#### 1794. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13805` → after: `L13641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13641) · [Before (L13805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13805)

```diff
-         const cp = new WL.e(pp);
+         const mT = new LH.d(TT);
```

#### 1795. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13813` → after: `L13649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13649) · [Before (L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13813)

```diff
-               reason: (0, fy.i)(Ip),
+               reason: (0, uB.f)(MT),
```

#### 1796. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13819` → after: `L13655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13655) · [Before (L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13819)

```diff
-         return await cp.connectToServer(this.HP, op, ip).then((pp => {
+         return await mT.connectToServer(this.Rl, zT, UT).then((TT => {
```

#### 1797. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13839` → after: `L13675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13675) · [Before (L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13839)

```diff
-         return !!(0, AY.d)().websocketUrl || !!this.msgHandler
+         return !!(0, jk.c)().websocketUrl || !!this.msgHandler
```

#### 1798. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13855` → after: `L13691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13691) · [Before (L13855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13855)

```diff
-         wp.m.GA("unwantedLeftGame", {
+         cT.j.EZ("unwantedLeftGame", {
```

#### 1799. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13864` → after: `L13700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13700) · [Before (L13864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13864)

```diff
-         }), this.leaveGame(Sp ? (0, mi.c)(xp, Lp) : "/")
+         }), this.leaveGame(gT ? (0, eU.d)(nT, HT) : "/")
```

#### 1800. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13869` → after: `L13705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13705) · [Before (L13869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13869)

```diff
-         (0, HP.e)(), this.gameRecorder.suspendCaptureForLeave(), console.log("Leaving game"), (0, qS.f)(), this.closeClientGameSession(), KD.endGame(), wp.m.GA("leaveGame", {
+         (0, qL.f)(), this.gameRecorder.suspendCaptureForLeave(), console.log("Leaving game"), (0, eg.e)(), this.closeClientGameSession(), Aj.endGame(), cT.j.EZ("leaveGame", {
```

#### 1801. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13871` → after: `L13707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13707) · [Before (L13871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13871)

```diff
-         }), null === (pp = this.msgHandler) || void 0 === pp || pp.YH(), null === (ip = this.msgHandler) || void 0 === ip || ip.leave(), this.msgHandler = null, delete this.HP.Fpp, (0, Tp.resetUtil)(), (0, yL.g)(this.HP), (0, AY.p)({
+         }), null === (TT = this.msgHandler) || void 0 === TT || TT.lq(), null === (UT = this.msgHandler) || void 0 === UT || UT.leave(), this.msgHandler = null, delete this.Rl.rTT, (0, FT.resetUtil)(), (0, pH.g)(this.Rl), (0, jk.m)({
```

#### 1802. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13873` → after: `L13709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13709) · [Before (L13873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13873)

```diff
-         }), this.HP.ZC(!0), HL.b.freeSheetsAfterGame(), (0, CY.I)(), this.clientConnection = null, this.clientApi = null, this.leaveGameReloadsPage() && (0, wP.reloadBloxd)(cp)
+         }), this.Rl.MI(!0), fH.c.freeSheetsAfterGame(), (0, wk.L)(), this.clientConnection = null, this.clientApi = null, this.leaveGameReloadsPage() && (0, cL.reloadBloxd)(mT)
```

#### 1803. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13876` → after: `L13712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13712) · [Before (L13876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13876)

```diff
-         return Up.d.isUsingTemporaryTexturePack() || this.isReplayMode()
+         return ZT.e.isUsingTemporaryTexturePack() || this.isReplayMode()
```

#### 1804. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13885` → after: `L13721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13721) · [Before (L13885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13885)

```diff
-         this.clientGame = null, this.clientPlugins = null, (0, kY.closeClientGame)(ip, cp), (0, tA.n)(), null === (pp = this.clientApi) || void 0 === pp || pp.disposeGameOutput()
+         this.clientGame = null, this.clientPlugins = null, (0, ek.closeClientGame)(UT, mT), (0, fl.m)(), null === (TT = this.clientApi) || void 0 === TT || TT.disposeGameOutput()
```

#### 1805. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13892` → after: `L13728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13728) · [Before (L13892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13892)

```diff
-         null === (pp = this.clientConnection) || void 0 === pp || pp.dispose(), this.clientConnection = null, null === (ip = this.msgHandler) || void 0 === ip || ip.YH(), null === (cp = this.msgHandler) || void 0 === cp || cp.leave(), this.msgHandler = null, this.currentConnectio … [truncated]
+         null === (TT = this.clientConnection) || void 0 === TT || TT.dispose(), this.clientConnection = null, null === (UT = this.msgHandler) || void 0 === UT || UT.lq(), null === (mT = this.msgHandler) || void 0 === mT || mT.leave(), this.msgHandler = null, this.currentConnectio … [truncated]
```

#### 1806. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13894` → after: `L13730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13730) · [Before (L13894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13894)

```diff
-         }), (0, WY.f)()
+         }), (0, Lk.k)()
```

#### 1807. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13908` → after: `L13744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13744) · [Before (L13908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13908)

```diff
-             console.error(`Error in client game callback ${pp} with args list ${JSON.stringify(cp)}`, xp)
+             console.error(`Error in client game callback ${TT} with args list ${JSON.stringify(mT)}`, nT)
```

#### 1808. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13916` → after: `L13752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13752) · [Before (L13916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13916)

```diff
-               console.error(`Error in client plugin callback ${pp} with args list ${JSON.stringify(cp)}`, xp)
+               console.error(`Error in client plugin callback ${TT} with args list ${JSON.stringify(mT)}`, nT)
```

#### 1809. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13921` → after: `L13757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13757) · [Before (L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13921)

```diff
-         this.HP.BU = ES.b, this.HP.NU = tP.NU, console.log("Defined noa.logErrorMessage"), Zp.k.HP && console.log("client csv detection");
+         this.Rl.ZZ = xg.d, this.Rl.cZ = fL.cZ, console.log("Defined noa.logErrorMessage"), ET.j.Rl && console.log("client csv detection");
```

#### 1810. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13941` → after: `L13777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13777) · [Before (L13941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13941)

```diff
-             this.HP.BU(`Uncaught error in window event listener ${ip}, ${cp}, ${Op}, ${op}, ${Ip}`, Ip)
+             this.Rl.ZZ(`Uncaught error in window event listener ${UT}, ${mT}, ${WT}, ${zT}, ${MT}`, MT)
```

#### 1811. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13951` → after: `L13787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13787) · [Before (L13951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13951)

```diff
-         if (this.entities[pp]) throw new Error(`Entity with id ${pp} already exists`);
+         if (this.entities[TT]) throw new Error(`Entity with id ${TT} already exists`);
```

#### 1812. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13954-L13955` → after: `L13790-L13791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13790-L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13790-L13791) · [Before (L13954-L13955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13954-L13955)

```diff
-           vy: cp
-         }, (0, WY.i)(pp), null === cp || void 0 === cp || cp.initClient(ip)
+           UB: mT
+         }, (0, Lk.l)(TT), null === mT || void 0 === mT || mT.initClient(UT)
```

#### 1813. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13959` → after: `L13795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13795) · [Before (L13959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13959)

```diff
-         null === (Op = this.entities[pp]) || void 0 === Op || null === (op = Op.vy) || void 0 === op || null === (Ip = op.onChangeClient) || void 0 === Ip || Ip.call(op, ip, cp)
+         null === (WT = this.entities[TT]) || void 0 === WT || null === (zT = WT.UB) || void 0 === zT || null === (MT = zT.onChangeClient) || void 0 === MT || MT.call(zT, UT, mT)
```

#### 1814. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13968-L13969` → after: `L13804-L13805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13804-L13805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13804-L13805) · [Before (L13968-L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13968-L13969)

```diff
-         ((0, bp.e)(this.HP).disposeEntity(Op), Op !== this.HP.NJ) && (null === (op = this.HP.QJ[this.HP.NJ]) || void 0 === op || delete op[pp], null === (Ip = this.HP.QJ[this.HP.Fpp]) || void 0 === Ip || delete Ip[pp], (0, Zp.d)().removeEntityName(pp));
-         null === (ip = this.entities[pp]) || void 0 === ip || null === (cp = ip.vy) || void 0 === cp || cp.disposeClient(), delete this.entities[pp]
+         ((0, VT.d)(this.Rl).disposeEntity(WT), WT !== this.Rl.VV) && (null === (zT = this.Rl.sV[this.Rl.VV]) || void 0 === zT || delete zT[TT], null === (MT = this.Rl.sV[this.Rl.rTT]) || void 0 === MT || delete MT[TT], (0, ET.d)().removeEntityName(TT));
+         null === (UT = this.entities[TT]) || void 0 === UT || null === (mT = UT.UB) || void 0 === mT || mT.disposeClient(), delete this.entities[TT]
```

#### 1815. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13972-L13973` → after: `L13808-L13809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13808-L13809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13808-L13809) · [Before (L13972-L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13972-L13973)

```diff
-         const ip = (0, fp.b)(pp);
-         return String(ip) === String(this.HP.NJ) ? this.HP.NJ : ip
+         const UT = (0, PT.e)(TT);
+         return String(UT) === String(this.Rl.VV) ? this.Rl.VV : UT
```

#### 1816. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13979` → after: `L13815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13815) · [Before (L13979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13979)

```diff
-         return null !== (ip = null === (cp = this.entities[pp]) || void 0 === cp || null === (Op = cp.colyseusEntity) || void 0 === Op ? void 0 : Op.type) && void 0 !== ip ? ip : null
+         return null !== (UT = null === (mT = this.entities[TT]) || void 0 === mT || null === (WT = mT.colyseusEntity) || void 0 === WT ? void 0 : WT.type) && void 0 !== UT ? UT : null
```

#### 1817. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13983-L13984` → after: `L13819-L13820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13819-L13820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13819-L13820) · [Before (L13983-L13984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13983-L13984)

```diff
-         const Sp = pp === this.HP.NJ ? this.HP.Fpp : pp;
-         return null !== (ip = null === (cp = this.msgHandler) || void 0 === cp || null === (Op = cp.zcp) || void 0 === Op || null === (op = Op.state) || void 0 === op || null === (Ip = op.entities) || void 0 === Ip ? void 0 : Ip.get(Sp)) && void 0 !== ip ? ip : null
+         const gT = TT === this.Rl.VV ? this.Rl.rTT : TT;
+         return null !== (UT = null === (mT = this.msgHandler) || void 0 === mT || null === (WT = mT.XmT) || void 0 === WT || null === (zT = WT.state) || void 0 === zT || null === (MT = zT.entities) || void 0 === MT ? void 0 : MT.get(gT)) && void 0 !== UT ? UT : null
```

#### 1818. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13987` → after: `L13823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13823) · [Before (L13987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13987)

```diff
-         const Op = null === (pp = this.msgHandler) || void 0 === pp || null === (ip = pp.zcp) || void 0 === ip || null === (cp = ip.state) || void 0 === cp ? void 0 : cp.items;
+         const WT = null === (TT = this.msgHandler) || void 0 === TT || null === (UT = TT.XmT) || void 0 === UT || null === (mT = UT.state) || void 0 === mT ? void 0 : mT.items;
```

#### 1819. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13993` → after: `L13829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13829) · [Before (L13993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13993)

```diff
-         return null !== (ip = null === (cp = this.msgHandler) || void 0 === cp || null === (Op = cp.zcp) || void 0 === Op || null === (op = Op.state) || void 0 === op || null === (Ip = op.items) || void 0 === Ip ? void 0 : Ip.get(pp)) && void 0 !== ip ? ip : null
+         return null !== (UT = null === (mT = this.msgHandler) || void 0 === mT || null === (WT = mT.XmT) || void 0 === WT || null === (zT = WT.state) || void 0 === zT || null === (MT = zT.items) || void 0 === MT ? void 0 : MT.get(TT)) && void 0 !== UT ? UT : null
```

#### 1820. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13997` → after: `L13833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13833) · [Before (L13997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L13997)

```diff
-         return null !== (ip = null === (cp = this.getColyseusEntity(pp)) || void 0 === cp ? void 0 : cp.scale) && void 0 !== ip ? ip : 1
+         return null !== (UT = null === (mT = this.getColyseusEntity(TT)) || void 0 === mT ? void 0 : mT.scale) && void 0 !== UT ? UT : 1
```

#### 1821. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14001` → after: `L13837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13837) · [Before (L14001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14001)

```diff
-         return null !== (pp = this.currentConnectionInfo) && void 0 !== pp ? pp : null
+         return null !== (TT = this.currentConnectionInfo) && void 0 !== TT ? TT : null
```

#### 1822. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14004-L14005` → after: `L13840-L13841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13840-L13841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13840-L13841) · [Before (L14004-L14005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14004-L14005)

```diff
-         (0, bp.e)(this.HP).setEffect(this.toReplicatedStateEId(pp), ip, cp), wp.m.GA("EffectUpdate", {
-           Np: pp,
+         (0, VT.d)(this.Rl).setEffect(this.toReplicatedStateEId(TT), UT, mT), cT.j.EZ("EffectUpdate", {
+           XT: TT,
```

#### 1823. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14014` → after: `L13850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13850) · [Before (L14014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14014)

```diff
-         return (0, bp.e)(this.HP).getEffects(this.toReplicatedStateEId(pp))
+         return (0, VT.d)(this.Rl).getEffects(this.toReplicatedStateEId(TT))
```

#### 1824. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14018` → after: `L13854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13854) · [Before (L14018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14018)

```diff
-         return null !== (cp = null === (Op = this.getEffects(pp)[ip]) || void 0 === Op ? void 0 : Op.level) && void 0 !== cp ? cp : 0
+         return null !== (mT = null === (WT = this.getEffects(TT)[UT]) || void 0 === WT ? void 0 : WT.level) && void 0 !== mT ? mT : 0
```

#### 1825. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14021-L14023` → after: `L13857-L13859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13857-L13859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13857-L13859) · [Before (L14021-L14023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14021-L14023)

```diff
-         const cp = (0, bp.e)(this.HP).removeEffect(this.toReplicatedStateEId(pp), ip);
-         wp.m.GA("RemoveEffect", {
-           Np: pp,
+         const mT = (0, VT.d)(this.Rl).removeEffect(this.toReplicatedStateEId(TT), UT);
+         cT.j.EZ("RemoveEffect", {
+           XT: TT,
```

#### 1826. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14032` → after: `L13868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13868) · [Before (L14032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14032)

```diff
-       const cp = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.variants) && void 0 !== ip ? ip : [],
+       const mT = null !== (UT = null === TT || void 0 === TT ? void 0 : TT.variants) && void 0 !== UT ? UT : [],
```

#### 1827. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14044` → after: `L13880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13880) · [Before (L14044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14044)

```diff
-           (0, jS.e)(pp, ip)
+           (0, qg.d)(TT, UT)
```

#### 1828. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14052` → after: `L13888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13888) · [Before (L14052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14052)

```diff
-     ay.hasPlayedFirstGame = !1, ay.initialAssetLoadedProm = void 0, ay.initialSetupProm = null, (0, Ri.i)(Hi.m)
+     KB.hasPlayedFirstGame = !1, KB.initialAssetLoadedProm = void 0, KB.initialSetupProm = null, (0, YU.g)(vU.o)
```

#### 1829. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14054` → after: `L13890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13890) · [Before (L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14054)

```diff
-   39324: (pp, ip, cp) => {
+   39278: (TT, UT, mT) => {
```

#### 1830. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14059` → after: `L13895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13895) · [Before (L14059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14059)

```diff
-     var Op = cp(337);
+     var WT = mT(366);
```

#### 1831. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14078` → after: `L13914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13914) · [Before (L14078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14078)

```diff
-               color: Op.N.redUiText
+               color: WT.R.redUiText
```

#### 1832. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14084-L14085` → after: `L13920-L13921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13920-L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13920-L13921) · [Before (L14084-L14085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14084-L14085)

```diff
-     var Ip = cp(4341),
-       Sp = cp(1251);
+     var MT = mT(4328),
+       gT = mT(1336);
```

#### 1833. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14095` → after: `L13931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13931) · [Before (L14095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14095)

```diff
-         TA: 1,
+         fl: 1,
```

#### 1834. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14110` → after: `L13946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13946) · [Before (L14110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14110)

```diff
-         blendMode: Ip.g.Standard
+         blendMode: MT.e.Standard
```

#### 1835. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14115` → after: `L13951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13951) · [Before (L14115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14115)

```diff
-         TA: 96,
+         fl: 96,
```

#### 1836. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14136` → after: `L13972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L13972) · [Before (L14136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14136)

```diff
-         blendMode: Ip.g.Standard
+         blendMode: MT.e.Standard
```

#### 1837. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14197` → after: `L14033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14033) · [Before (L14197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14197)

```diff
-           if (pp !== Sp.z) return;
+           if (TT !== gT.w) return;
```

#### 1838. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14219-L14220` → after: `L14055-L14056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14055-L14056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14055-L14056) · [Before (L14219-L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14219-L14220)

```diff
-     var tp = cp(4972),
-       Hp = cp(4964);
+     var fT = mT(4956),
+       qT = mT(4939);
```

#### 1839. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14241` → after: `L14077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14077) · [Before (L14241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14241)

```diff
-           } = (0, Hp.h)(Ip);
+           } = (0, qT.e)(MT);
```

#### 1840. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14247` → after: `L14083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14083) · [Before (L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14247)

```diff
-     var ep = cp(39330);
+     var bT = mT(39281);
```

#### 1841. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14261` → after: `L14097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14097) · [Before (L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14261)

```diff
-       const xp = ((null !== (Op = pp.getMetaInfo(cp).rot) && void 0 !== Op ? Op : 1) - 1) * Math.PI / 2,
+       const nT = ((null !== (WT = TT.getMetaInfo(mT).rot) && void 0 !== WT ? WT : 1) - 1) * Math.PI / 2,
```

#### 1842. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14301` → after: `L14137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14137) · [Before (L14301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14301)

```diff
-           blendMode: Ip.g.Standard,
+           blendMode: MT.e.Standard,
```

#### 1843. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14318` → after: `L14154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14154) · [Before (L14318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14318)

```diff
-           blendMode: Ip.g.Add,
+           blendMode: MT.e.Add,
```

#### 1844. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14331` → after: `L14167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14167) · [Before (L14331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14331)

```diff
-         let op = this.smokes.find((pp => pp.pos[0] === ip[0] && pp.pos[1] === ip[1] && pp.pos[2] === ip[2] && pp.tx === cp));
+         let zT = this.smokes.find((TT => TT.pos[0] === UT[0] && TT.pos[1] === UT[1] && TT.pos[2] === UT[2] && TT.Gg === mT));
```

#### 1845. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14334` → after: `L14170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14170) · [Before (L14334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14334)

```diff
-             tx: cp,
+             Gg: mT,
```

#### 1846. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14340` → after: `L14176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14176) · [Before (L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14340)

```diff
-           const ip = this.smokes.reduce(((pp, ip) => ip.endMs < pp.endMs ? ip : pp));
+           const UT = this.smokes.reduce(((TT, UT) => UT.endMs < TT.endMs ? UT : TT));
```

#### 1847. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14352` → after: `L14188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14188) · [Before (L14352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14352)

```diff
-           const [Op, op, Ip] = ip.pos, Sp = cp < ip.endMs && pp.getBlockId(Op, op, Ip) === ip.tx;
+           const [WT, zT, MT] = UT.pos, gT = mT < UT.endMs && TT.getBlockId(WT, zT, MT) === UT.Gg;
```

#### 1848. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14383` → after: `L14219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14219) · [Before (L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14383)

```diff
-         for (const cp of null !== (ip = this.puffers) && void 0 !== ip ? ip : []) {
+         for (const mT of null !== (UT = this.puffers) && void 0 !== UT ? UT : []) {
```

#### 1849. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14396` → after: `L14232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14232) · [Before (L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14396)

```diff
-           return new ep.i(ip, Math.ceil(4 * Op), Cp)
+           return new bT.e(UT, Math.ceil(4 * WT), wT)
```

#### 1850. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14413` → after: `L14249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14249) · [Before (L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14413)

```diff
-           cp === Sp.C && ip.start(pp, Op)
+           mT === gT.A && UT.start(TT, WT)
```

#### 1851. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14434` → after: `L14270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14270) · [Before (L14434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14434)

```diff
-       for (const op of [pp, ...null !== ip && void 0 !== ip ? ip : []]) try {
+       for (const zT of [TT, ...null !== UT && void 0 !== UT ? UT : []]) try {
```

#### 1852. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14442` → after: `L14278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14278) · [Before (L14442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14442)

```diff
-   39456: (pp, ip, cp) => {
+   39390: (TT, UT, mT) => {
```

#### 1853. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14446` → after: `L14282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14282) · [Before (L14446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14446)

```diff
-     var Op = cp(38261);
+     var WT = mT(38164);
```

#### 1854. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14451` → after: `L14287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14287) · [Before (L14451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14451)

```diff
-           placeAgainstBeds: (0, Op.c)()
+           placeAgainstBeds: (0, WT.b)()
```

#### 1855. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14466` → after: `L14302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14302) · [Before (L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14466)

```diff
-   39460: (pp, ip, cp) => {
+   39398: (TT, UT, mT) => {
```

#### 1856. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14482` → after: `L14318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14318) · [Before (L14482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14482)

```diff
-   39464: (pp, ip, cp) => {
+   39403: (TT, UT, mT) => {
```

#### 1857. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14489` → after: `L14325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14325) · [Before (L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14489)

```diff
-     var Sp = cp(38724);
+     var gT = mT(38633);
```

#### 1858. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14492` → after: `L14328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14328) · [Before (L14492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14492)

```diff
-         this.api = pp, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Sp.b(pp, {
+         this.api = TT, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new gT.c(TT, {
```

#### 1859. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14498` → after: `L14334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14334) · [Before (L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14498)

```diff
-         if (pp.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${pp.id} with < 2 waypoints`);
+         if (TT.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${TT.id} with < 2 waypoints`);
```

#### 1860. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14500` → after: `L14336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14336) · [Before (L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14500)

```diff
-         if (!ip) return void(this.unshown.has(pp.itemName) || (this.unshown.add(pp.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${pp.itemName}"`)));
+         if (!UT) return void(this.unshown.has(TT.itemName) || (this.unshown.add(TT.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${TT.itemName}"`)));
```

#### 1861. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14570` → after: `L14406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14406) · [Before (L14570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14570)

```diff
-         null === (pp = this.pipeVisualizer) || void 0 === pp || pp.gH()
+         null === (TT = this.pipeVisualizer) || void 0 === TT || TT.hq()
```

#### 1862. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14575` → after: `L14411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14411) · [Before (L14575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14575)

```diff
-         const Lp = null === (xp = this.api.Acp(pp)) || void 0 === xp ? void 0 : xp.name;
+         const HT = null === (nT = this.api.RUT(TT)) || void 0 === nT ? void 0 : nT.name;
```

#### 1863. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14594-L14595` → after: `L14430-L14431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14430-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14430-L14431) · [Before (L14594-L14595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14594-L14595)

```diff
-         LP: () => {
-           Op.gH()
+         Cl: () => {
+           WT.hq()
```

#### 1864. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14602` → after: `L14438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14438) · [Before (L14602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14602)

```diff
-   39472: (pp, ip, cp) => {
+   39411: (TT, UT, mT) => {
```

#### 1865. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14618` → after: `L14454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14454) · [Before (L14618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14618)

```diff
-   39474: (pp, ip, cp) => {
+   39420: (TT, UT, mT) => {
```

#### 1866. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14622` → after: `L14458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14458) · [Before (L14622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14622)

```diff
-     var Op = cp(62);
+     var WT = mT(63);
```

#### 1867. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14624-L14627` → after: `L14460-L14463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14460-L14463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14460-L14463) · [Before (L14624-L14627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14624-L14627)

```diff
-       Ip = cp(1938),
-       Sp = cp(34),
-       xp = cp(36799),
-       Lp = cp(1049),
+       MT = mT(2031),
+       gT = mT(31),
+       nT = mT(36693),
+       HT = mT(1126),
```

#### 1868. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14629-L14639` → after: `L14465-L14475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14465-L14475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14465-L14475) · [Before (L14629-L14639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14629-L14639)

```diff
-       Dp = cp(1476),
-       Ap = cp(1201),
-       Pp = cp(4621),
-       Wp = cp(1363),
-       yp = cp(1480),
-       Up = cp(1941),
-       wp = cp(1387),
-       vp = cp(1929),
-       tp = cp(2004),
-       Hp = cp(209);
-     const dp = cp(39480),
+       jT = mT(1567),
+       lT = mT(1288),
+       LT = mT(4639),
+       pT = mT(1452),
+       BT = mT(1569),
+       ZT = mT(2034),
+       cT = mT(1475),
+       vT = mT(2023),
+       fT = mT(2089),
+       qT = mT(218);
+     const iT = mT(39428),
```

#### 1869. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14644-L14646` → after: `L14480-L14482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14480-L14482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14480-L14482) · [Before (L14644-L14646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14644-L14646)

```diff
-       const cp = ip ? pp : `${pp}-uncaught`,
-         Op = (0, Hp.e)(ep, cp);
-       return void 0 !== Op || jp.has(cp) || (jp.add(cp), console.warn(`Containment Breach has no mugshot ${cp}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Op
+       const mT = UT ? TT : `${TT}-uncaught`,
+         WT = (0, qT.b)(bT, mT);
+       return void 0 !== WT || OT.has(mT) || (OT.add(mT), console.warn(`Containment Breach has no mugshot ${mT}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), WT
```

#### 1870. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14648` → after: `L14484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14484) · [Before (L14648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14648)

```diff
-     var mp = cp(1112);
+     var YT = mT(1188);
```

#### 1871. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14664-L14665` → after: `L14500-L14501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14500-L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14500-L14501) · [Before (L14664-L14665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14664-L14665)

```diff
-       const Ap = `${op}Title`;
-       return (0, mp.jsx)(Pp.c, {
+       const lT = `${zT}Title`;
+       return (0, YT.jsx)(LT.e, {
```

#### 1872. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14685` → after: `L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14521) · [Before (L14685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14685)

```diff
-             }), Sp, (0, mp.jsx)(yp.l, {
+             }), gT, (0, YT.jsx)(BT.k, {
```

#### 1873. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14705` → after: `L14541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14541) · [Before (L14705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14705)

```diff
-       return (0, mp.jsx)(Up.d, {
+       return (0, YT.jsx)(ZT.b, {
```

#### 1874. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14734` → after: `L14570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14570) · [Before (L14734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14734)

```diff
-         sx: Op,
+         fn: WT,
```

#### 1875. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14737` → after: `L14573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14573) · [Before (L14737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14737)

```diff
-       return (0, mp.jsx)(wp.f, {
+       return (0, YT.jsx)(cT.e, {
```

#### 1876. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14745` → after: `L14581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14581) · [Before (L14745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14745)

```diff
-           sx: Op
+           fn: WT
```

#### 1877. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14767` → after: `L14603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14603) · [Before (L14767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14767)

```diff
-         sx: op
+         fn: zT
```

#### 1878. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14771` → after: `L14607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14607) · [Before (L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14771)

```diff
-       } = (0, Ap.H)(), Sp = (0, tp.f)("itemInfo", (pp => pp[cp])), {
+       } = (0, lT.z)(), gT = (0, fT.f)("itemInfo", (TT => TT[mT])), {
```

#### 1879. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14798` → after: `L14634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14634) · [Before (L14798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14798)

```diff
-             text: null !== (ip = null === Sp || void 0 === Sp ? void 0 : Sp.displayName) && void 0 !== ip ? ip : cp,
+             text: null !== (UT = null === gT || void 0 === gT ? void 0 : gT.displayName) && void 0 !== UT ? UT : mT,
```

#### 1880. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14810` → after: `L14646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14646) · [Before (L14810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14810)

```diff
-               children: Ip(`${Rp}:chipDroppedBy`)
+               children: MT(`${JT}:chipDroppedBy`)
```

#### 1881. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14819` → after: `L14655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14655) · [Before (L14819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14819)

```diff
-             children: Ip(`${Rp}:chipYouHave`)
+             children: MT(`${JT}:chipYouHave`)
```

#### 1882. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14825` → after: `L14661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14661) · [Before (L14825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14825)

```diff
-             }), ` / ${Op.toLocaleString()}`]
+             }), ` / ${WT.toLocaleString()}`]
```

#### 1883. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14903` → after: `L14739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14739) · [Before (L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14903)

```diff
-     var Tp = cp(38745);
+     var FT = mT(38667);
```

#### 1884. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14905` → after: `L14741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14741) · [Before (L14905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14905)

```diff
-     class bp extends Tp.b {
+     class VT extends FT.e {
```

#### 1885. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14923-L14925` → after: `L14759-L14761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14759-L14761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14759-L14761) · [Before (L14923-L14925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14923-L14925)

```diff
-         codexAnyDifficulty: `${Rp}:codexNeedsAny`,
-         codexNormalOnly: `${Rp}:codexNeedsNormal`,
-         codexHardOnly: `${Rp}:codexNeedsHard`
+         codexAnyDifficulty: `${JT}:codexNeedsAny`,
+         codexNormalOnly: `${JT}:codexNeedsNormal`,
+         codexHardOnly: `${JT}:codexNeedsHard`
```

#### 1886. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14933-L14935` → after: `L14769-L14771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14769-L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14769-L14771) · [Before (L14933-L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14933-L14935)

```diff
-         codexContained: `${Rp}:codexContainedBadge`,
-         codexEncountered: `${Rp}:codexEncounteredBadge`,
-         codexUnidentified: `${Rp}:codexUnidentifiedBadge`
+         codexContained: `${JT}:codexContainedBadge`,
+         codexEncountered: `${JT}:codexEncounteredBadge`,
+         codexUnidentified: `${JT}:codexUnidentifiedBadge`
```

#### 1887. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14945` → after: `L14781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14781) · [Before (L14945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14945)

```diff
-       } = (0, Ap.H)();
+       } = (0, lT.z)();
```

#### 1888. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14955-L14956` → after: `L14791-L14792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14791-L14792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14791-L14792) · [Before (L14955-L14956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L14955-L14956)

```diff
-       } = (0, Ap.H)();
-       return "codexUnidentified" === pp.codexEntryState ? ip(`${Rp}:codexUnidentifiedName`) : pp.codexEntryName
+       } = (0, lT.z)();
+       return "codexUnidentified" === TT.codexEntryState ? UT(`${JT}:codexUnidentifiedName`) : TT.codexEntryName
```

#### 1889. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15037` → after: `L14873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14873) · [Before (L15037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15037)

```diff
-       } = (0, Ap.H)();
+       } = (0, lT.z)();
```

#### 1890. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15040` → after: `L14876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14876) · [Before (L15040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15040)

```diff
-         children: [Op(`${Rp}:codexProgress`, {
+         children: [WT(`${JT}:codexProgress`, {
```

#### 1891. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15061` → after: `L14897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14897) · [Before (L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15061)

```diff
-       } = (0, Ap.H)(), op = "codexContained" === ip.codexEntryState;
+       } = (0, lT.z)(), zT = "codexContained" === UT.codexEntryState;
```

#### 1892. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15068` → after: `L14904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14904) · [Before (L15068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15068)

```diff
-             children: Op(`${Rp}:codexFileNumber`, {
+             children: WT(`${JT}:codexFileNumber`, {
```

#### 1893. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15085` → after: `L14921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14921) · [Before (L15085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15085)

```diff
-               children: [Op(`${Rp}:codexContainments`, {
+               children: [WT(`${JT}:codexContainments`, {
```

#### 1894. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15093` → after: `L14929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14929) · [Before (L15093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15093)

```diff
-               children: Op(`${Rp}:codexContainedBadge`)
+               children: WT(`${JT}:codexContainedBadge`)
```

#### 1895. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15105` → after: `L14941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14941) · [Before (L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15105)

```diff
-                 children: Op(`${Rp}:codexRedacted`)
+                 children: WT(`${JT}:codexRedacted`)
```

#### 1896. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15110` → after: `L14946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14946) · [Before (L15110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15110)

```diff
-                 children: Op(`${Rp}:codexHintLabel`)
+                 children: WT(`${JT}:codexHintLabel`)
```

#### 1897. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15127` → after: `L14963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14963) · [Before (L15127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15127)

```diff
-       const cp = (0, Dp.i)(fp, ip.getSnapshot()),
+       const mT = (0, jT.j)(PT, UT.getSnapshot()),
```

#### 1898. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15130` → after: `L14966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14966) · [Before (L15130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15130)

```diff
-         } = (0, Ap.H)();
+         } = (0, lT.z)();
```

#### 1899. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15138` → after: `L14974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14974) · [Before (L15138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15138)

```diff
-         title: Op(`${Rp}:codexTitle`),
+         title: WT(`${JT}:codexTitle`),
```

#### 1900. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15157-L15158` → after: `L14993-L14994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14993-L14994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14993-L14994) · [Before (L15157-L15158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15157-L15158)

```diff
-     var ii = cp(337);
-     class ci extends Tp.b {
+     var RT = mT(366);
+     class TU extends FT.e {
```

#### 1901. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15163` → after: `L14999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L14999) · [Before (L15163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15163)

```diff
-           if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${pp} ${ip}`, this.rollBack)) return;
+           if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${TT} ${UT}`, this.rollBack)) return;
```

#### 1902. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15282` → after: `L15118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15118) · [Before (L15282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15282)

```diff
-         loadoutSlotOptions: ip.loadoutSlotOptions.map((pp => null !== Op && pp.loadoutOptionId === Op.loadoutOptionId ? Op : pp))
+         loadoutSlotOptions: UT.loadoutSlotOptions.map((TT => null !== WT && TT.loadoutOptionId === WT.loadoutOptionId ? WT : TT))
```

#### 1903. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15286` → after: `L15122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15122) · [Before (L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15286)

```diff
-         loadoutSlots: pp.loadoutSlots.map((pp => pp === ip ? op : pp))
+         loadoutSlots: TT.loadoutSlots.map((TT => TT === UT ? zT : TT))
```

#### 1904. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15293` → after: `L15129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15129) · [Before (L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15293)

```diff
-         loadoutPerks: pp.loadoutPerks.map((pp => pp.loadoutPerkId === ip.loadoutPerkId ? ip : pp))
+         loadoutPerks: TT.loadoutPerks.map((TT => TT.loadoutPerkId === UT.loadoutPerkId ? UT : TT))
```

#### 1905. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15351` → after: `L15187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15187) · [Before (L15351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15351)

```diff
-         return (null !== (cp = ip.find((pp => pp.loadoutPerkEquipped))) && void 0 !== cp ? cp : ip[0]).loadoutPerkId
+         return (null !== (mT = UT.find((TT => TT.loadoutPerkEquipped))) && void 0 !== mT ? mT : UT[0]).loadoutPerkId
```

#### 1906. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15356-L15357` → after: `L15192-L15193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15192-L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15192-L15193) · [Before (L15356-L15357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15356-L15357)

```diff
-     var ti = cp(37084),
-       Hi = cp(1295);
+     var cU = mT(36974),
+       vU = mT(1376);
```

#### 1907. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15359-L15364` → after: `L15195-L15200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15195-L15200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15195-L15200) · [Before (L15359-L15364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15359-L15364)

```diff
-         loadoutPrimary: `${Rp}:loadoutSlotPrimary`,
-         loadoutSecondary: `${Rp}:loadoutSlotSecondary`,
-         loadoutOffensive: `${Rp}:loadoutSlotOffensive`,
-         loadoutSelfHelp: `${Rp}:loadoutSlotSelfHelp`,
-         loadoutArmour: `${Rp}:loadoutSlotArmour`,
-         loadoutPerks: `${Rp}:loadoutSlotPerks`
+         loadoutPrimary: `${JT}:loadoutSlotPrimary`,
+         loadoutSecondary: `${JT}:loadoutSlotSecondary`,
+         loadoutOffensive: `${JT}:loadoutSlotOffensive`,
+         loadoutSelfHelp: `${JT}:loadoutSlotSelfHelp`,
+         loadoutArmour: `${JT}:loadoutSlotArmour`,
+         loadoutPerks: `${JT}:loadoutSlotPerks`
```

#### 1908. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15368` → after: `L15204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15204) · [Before (L15368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15368)

```diff
-         SW: "bottom",
+         VL: "bottom",
```

#### 1909. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15381` → after: `L15217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15217) · [Before (L15381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15381)

```diff
-       return (cp, Op) => (null === pp || void 0 === pp ? void 0 : pp.kind) === cp && pp.id === Op ? ip : void 0
+       return (mT, WT) => (null === TT || void 0 === TT ? void 0 : TT.kind) === mT && TT.id === WT ? UT : void 0
```

#### 1910. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15404` → after: `L15240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15240) · [Before (L15404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15404)

```diff
-       const [op, Ip] = pp(`${Rp}:${ip}`, {
+       const [zT, MT] = TT(`${JT}:${UT}`, {
```

#### 1911. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15423` → after: `L15259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15259) · [Before (L15423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15423)

```diff
-       } = (0, Ap.H)(), Sp = ip.loadout, xp = ip.open ? Sp.loadoutWalkthrough.map((pp => ({
+       } = (0, lT.z)(), gT = UT.loadout, nT = UT.open ? gT.loadoutWalkthrough.map((TT => ({
```

#### 1912. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15443` → after: `L15279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15279) · [Before (L15443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15443)

```diff
-           kind: "SW",
+           kind: "VL",
```

#### 1913. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15451` → after: `L15287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15287) · [Before (L15451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15451)

```diff
-           return `${pp.kind}:${pp.id}`
+           return `${TT.kind}:${TT.id}`
```

#### 1914. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15484-L15485` → after: `L15320-L15321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15320-L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15320-L15321) · [Before (L15484-L15485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15484-L15485)

```diff
-       } = (0, Ap.H)(), xp = (0, Op.useRef)(ip);
-       return xp.current = ip, (0, Hi.x)("popup", xp, op), (0, mp.jsxs)(ti.h, {
+       } = (0, lT.z)(), nT = (0, WT.useRef)(UT);
+       return nT.current = UT, (0, vU.p)("popup", nT, zT), (0, YT.jsxs)(cU.d, {
```

#### 1915. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15499-L15500` → after: `L15335-L15336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15335-L15336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15335-L15336) · [Before (L15499-L15500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15499-L15500)

```diff
-             children: Sp(`${Rp}:operatorName`)
-           }), (0, mp.jsx)(yp.l, {
+             children: gT(`${JT}:operatorName`)
+           }), (0, YT.jsx)(BT.k, {
```

#### 1916. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15502` → after: `L15338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15338) · [Before (L15502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15502)

```diff
-             ariaLabel: Sp(`${Rp}:loadoutWalkthroughClose`),
+             ariaLabel: gT(`${JT}:loadoutWalkthroughClose`),
```

#### 1917. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15520` → after: `L15356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15356) · [Before (L15520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15520)

```diff
-       } = (0, Ap.H)();
+       } = (0, lT.z)();
```

#### 1918. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15523` → after: `L15359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15359) · [Before (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15523)

```diff
-         children: Op(`${Rp}:loadoutFree`)
+         children: WT(`${JT}:loadoutFree`)
```

#### 1919. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15529` → after: `L15365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15365) · [Before (L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15529)

```diff
-           sx: cp.loadoutCoins
+           fn: mT.loadoutCoins
```

#### 1920. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15535` → after: `L15371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15371) · [Before (L15535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15535)

```diff
-             sx: ip.loadoutHeldPartAmount
+             fn: UT.loadoutHeldPartAmount
```

#### 1921. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15541-L15543` → after: `L15377-L15379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15377-L15379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15377-L15379) · [Before (L15541-L15543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15541-L15543)

```diff
-       loadoutStatFireRate: `${Rp}:loadoutUnitPerMinute`,
-       loadoutStatReload: `${Rp}:loadoutUnitSeconds`,
-       loadoutStatResupply: `${Rp}:loadoutUnitSeconds`
+       loadoutStatFireRate: `${JT}:loadoutUnitPerMinute`,
+       loadoutStatReload: `${JT}:loadoutUnitSeconds`,
+       loadoutStatResupply: `${JT}:loadoutUnitSeconds`
```

#### 1922. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15547` → after: `L15383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15383) · [Before (L15547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15547)

```diff
-       return "loadoutStatPotency" === pp.loadoutStatKind ? (0, ii.V)(pp.loadoutStatValue) : String(pp.loadoutStatValue)
+       return "loadoutStatPotency" === TT.loadoutStatKind ? (0, RT.Z)(TT.loadoutStatValue) : String(TT.loadoutStatValue)
```

#### 1923. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15557` → after: `L15393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15393) · [Before (L15557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15557)

```diff
-       } = (0, Ap.H)(), op = cp.loadoutOptionTiers, Ip = null === (ip = op[0]) || void 0 === ip ? void 0 : ip.loadoutTierStats.map((pp => pp.loadoutStatKind));
+       } = (0, lT.z)(), zT = mT.loadoutOptionTiers, MT = null === (UT = zT[0]) || void 0 === UT ? void 0 : UT.loadoutTierStats.map((TT => TT.loadoutStatKind));
```

#### 1924. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15573-L15574` → after: `L15409-L15410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15409-L15410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15409-L15410) · [Before (L15573-L15574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15573-L15574)

```diff
-               children: Op(`${Rp}:loadoutTier`, {
-                 tier: (0, ii.V)(ip + 1)
+               children: WT(`${JT}:loadoutTier`, {
+                 tier: (0, RT.Z)(UT + 1)
```

#### 1925. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15584` → after: `L15420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15420) · [Before (L15584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15584)

```diff
-                 children: [Op(`${Rp}:${pp}`), ip && (0, mp.jsx)("span", {
+                 children: [WT(`${JT}:${TT}`), UT && (0, YT.jsx)("span", {
```

#### 1926. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15623` → after: `L15459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15459) · [Before (L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15623)

```diff
-       } = (0, Ap.H)(), Sp = ip.loadout, xp = op.loadoutOptionOwnedTier, Lp = op.loadoutOptionTiers.length, Yp = Op.loadoutSlotEquippedId === op.loadoutOptionId, Dp = xp < Lp ? op.loadoutOptionTiers[xp].loadoutTierCost : null, Pp = null !== Dp && Oi(Sp, Dp), Wp = op.loadoutOptionI … [truncated]
+       } = (0, lT.z)(), gT = UT.loadout, nT = zT.loadoutOptionOwnedTier, HT = zT.loadoutOptionTiers.length, kT = WT.loadoutSlotEquippedId === zT.loadoutOptionId, jT = nT < HT ? zT.loadoutOptionTiers[nT].loadoutTierCost : null, LT = null !== jT && UU(gT, jT), pT = zT.loadoutOptionI … [truncated]
```

#### 1927. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15628-L15629` → after: `L15464-L15465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15464-L15465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15464-L15465) · [Before (L15628-L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15628-L15629)

```diff
-           status: 0 === xp ? Ip(`${Rp}:loadoutLocked`) : Lp > 1 ? Ip(`${Rp}:loadoutTier`, {
-             tier: (0, ii.V)(xp)
+           status: 0 === nT ? MT(`${JT}:loadoutLocked`) : HT > 1 ? MT(`${JT}:loadoutTier`, {
+             tier: (0, RT.Z)(nT)
```

#### 1928. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15646` → after: `L15482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15482) · [Before (L15646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15646)

```diff
-             }), (0, mp.jsx)(yp.o, {
+             }), (0, YT.jsx)(BT.l, {
```

#### 1929. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15651-L15652` → after: `L15487-L15488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15487-L15488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15487-L15488) · [Before (L15651-L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15651-L15652)

```diff
-               children: 0 === xp ? Ip(`${Rp}:loadoutUnlock`) : Ip(`${Rp}:loadoutUpgrade`, {
-                 tier: (0, ii.V)(xp + 1)
+               children: 0 === nT ? MT(`${JT}:loadoutUnlock`) : MT(`${JT}:loadoutUpgrade`, {
+                 tier: (0, RT.Z)(nT + 1)
```

#### 1930. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15657-L15658` → after: `L15493-L15494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15493-L15494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15493-L15494) · [Before (L15657-L15658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15657-L15658)

```diff
-             children: Ip(`${Rp}:loadoutMaxed`)
-           }), xp > 0 && !Yp && (0, mp.jsx)(yp.f, {
+             children: MT(`${JT}:loadoutMaxed`)
+           }), nT > 0 && !kT && (0, YT.jsx)(BT.e, {
```

#### 1931. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15663` → after: `L15499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15499) · [Before (L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15663)

```diff
-             children: Ip(`${Rp}:loadoutEquip`)
+             children: MT(`${JT}:loadoutEquip`)
```

#### 1932. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15677` → after: `L15513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15513) · [Before (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15677)

```diff
-       } = (0, Ap.H)(), Ip = ip.loadout, Sp = Si(Ip), xp = Op.loadoutPerkId, Lp = ji();
+       } = (0, lT.z)(), MT = UT.loadout, gT = zU(MT), nT = WT.loadoutPerkId, HT = bU();
```

#### 1933. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15682` → after: `L15518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15518) · [Before (L15682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15682)

```diff
-           status: Op.loadoutPerkOwned ? null : op(`${Rp}:loadoutLocked`),
+           status: WT.loadoutPerkOwned ? null : zT(`${JT}:loadoutLocked`),
```

#### 1934. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15696` → after: `L15532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15532) · [Before (L15696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15696)

```diff
-             }), (0, mp.jsx)(yp.o, {
+             }), (0, YT.jsx)(BT.l, {
```

#### 1935. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15701` → after: `L15537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15537) · [Before (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15701)

```diff
-               children: op(`${Rp}:loadoutUnlock`)
+               children: zT(`${JT}:loadoutUnlock`)
```

#### 1936. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15703` → after: `L15539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15539) · [Before (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15703)

```diff
-           }), Op.loadoutPerkOwned && !Op.loadoutPerkEquipped && (0, mp.jsx)(yp.f, {
+           }), WT.loadoutPerkOwned && !WT.loadoutPerkEquipped && (0, YT.jsx)(BT.e, {
```

#### 1937. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15708` → after: `L15544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15544) · [Before (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15708)

```diff
-             children: op(`${Rp}:loadoutEquip`)
+             children: zT(`${JT}:loadoutEquip`)
```

#### 1938. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15711-L15712` → after: `L15547-L15548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15547-L15548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15547-L15548) · [Before (L15711-L15712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15711-L15712)

```diff
-             children: op(`${Rp}:loadoutSocketsFullHint`)
-           }), Op.loadoutPerkEquipped && (0, mp.jsx)(yp.S, {
+             children: zT(`${JT}:loadoutSocketsFullHint`)
+           }), WT.loadoutPerkEquipped && (0, YT.jsx)(BT.L, {
```

#### 1939. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15717` → after: `L15553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15553) · [Before (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15717)

```diff
-             children: op(`${Rp}:loadoutUnequip`)
+             children: zT(`${JT}:loadoutUnequip`)
```

#### 1940. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15733` → after: `L15569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15569) · [Before (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15733)

```diff
-       } = (0, Ap.H)();
+       } = (0, lT.z)();
```

#### 1941. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15746` → after: `L15582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15582) · [Before (L15746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15746)

```diff
-           children: Sp(`${Rp}:loadoutEquippedBadge`)
+           children: gT(`${JT}:loadoutEquippedBadge`)
```

#### 1942. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15805` → after: `L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15641) · [Before (L15805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15805)

```diff
-       } = (0, Ap.H)(), op = ip.loadout, Ip = ji();
+       } = (0, lT.z)(), zT = UT.loadout, MT = bU();
```

#### 1943. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15808` → after: `L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15644) · [Before (L15808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15808)

```diff
-         "aria-label": Op(`${Rp}:loadoutKit`),
+         "aria-label": WT(`${JT}:loadoutKit`),
```

#### 1944. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15856` → after: `L15692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15692) · [Before (L15856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15856)

```diff
-       } = (0, Ap.H)(), op = ip.loadout, Ip = op.loadoutPerks.filter((pp => pp.loadoutPerkEquipped)), Sp = ji();
+       } = (0, lT.z)(), zT = UT.loadout, MT = zT.loadoutPerks.filter((TT => TT.loadoutPerkEquipped)), gT = bU();
```

#### 1945. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15873` → after: `L15709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15709) · [Before (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15873)

```diff
-             children: Op(`${Rp}:loadoutPerkCount`, {
+             children: WT(`${JT}:loadoutPerkCount`, {
```

#### 1946. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15896` → after: `L15732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15732) · [Before (L15896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15896)

```diff
-                 children: cp ? cp.loadoutPerkName : Op(`${Rp}:loadoutPerkSocketEmpty`)
+                 children: mT ? mT.loadoutPerkName : WT(`${JT}:loadoutPerkSocketEmpty`)
```

#### 1947. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15918` → after: `L15754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15754) · [Before (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15918)

```diff
-       } = (0, Ap.H)();
+       } = (0, lT.z)();
```

#### 1948. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15930` → after: `L15766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15766) · [Before (L15930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15930)

```diff
-           children: Dp(`${Rp}:loadoutEquippedBadge`)
+           children: jT(`${JT}:loadoutEquippedBadge`)
```

#### 1949. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15933` → after: `L15769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15769) · [Before (L15933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15933)

```diff
-           children: Dp(`${Rp}:loadoutLocked`)
+           children: jT(`${JT}:loadoutLocked`)
```

#### 1950. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15958` → after: `L15794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15794) · [Before (L15958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15958)

```diff
-           buttonRef: op("SW", pp.loadoutPerkId),
+           buttonRef: zT("VL", TT.loadoutPerkId),
```

#### 1951. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L15975` → after: `L15811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15811) · [Before (L15975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L15975)

```diff
-           buttonRef: op("SW", pp.loadoutOptionId),
+           buttonRef: zT("VL", TT.loadoutOptionId),
```

#### 1952. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16000` → after: `L15836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15836) · [Before (L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16000)

```diff
-       const cp = (0, Dp.i)(yi, ip.getSnapshot()),
+       const mT = (0, jT.j)(LU, UT.getSnapshot()),
```

#### 1953. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16003` → after: `L15839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15839) · [Before (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16003)

```diff
-         } = (0, Ap.H)();
+         } = (0, lT.z)();
```

#### 1954. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16012` → after: `L15848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15848) · [Before (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16012)

```diff
-           title: Op(`${Rp}:loadoutTitle`),
+           title: WT(`${JT}:loadoutTitle`),
```

#### 1955. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16021-L16022` → after: `L15857-L15858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15857-L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15857-L15858) · [Before (L16021-L16022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16021-L16022)

```diff
-               children: Op(`${Rp}:loadoutRadioBadge`)
-             }), null !== op && Op(`${Rp}:${op.loadoutNoticeKey}`, {
+               children: WT(`${JT}:loadoutRadioBadge`)
+             }), null !== zT && WT(`${JT}:${zT.loadoutNoticeKey}`, {
```

#### 1956. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16024` → after: `L15860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15860) · [Before (L16024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16024)

```diff
-               tier: (0, ii.V)(op.loadoutNoticeTier),
+               tier: (0, RT.Z)(zT.loadoutNoticeTier),
```

#### 1957. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16076` → after: `L15912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15912) · [Before (L16076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16076)

```diff
-           return pp.locatorEntryArmed === cp ? pp : {
+           return TT.locatorEntryArmed === mT ? TT : {
```

#### 1958. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16105` → after: `L15941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15941) · [Before (L16105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16105)

```diff
-         return (null !== (ip = cp.find((pp => pp.locatorEntryArmed))) && void 0 !== ip ? ip : cp[0]).locatorEntryId
+         return (null !== (UT = mT.find((TT => TT.locatorEntryArmed))) && void 0 !== UT ? UT : mT[0]).locatorEntryId
```

#### 1959. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16118-L16120` → after: `L15954-L15956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15954-L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15954-L15956) · [Before (L16118-L16120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16118-L16120)

```diff
-         locatorContained: `${Rp}:locatorFlavourContained`,
-         locatorEncountered: `${Rp}:locatorFlavourEncountered`,
-         locatorUnseen: `${Rp}:locatorFlavourUnseen`
+         locatorContained: `${JT}:locatorFlavourContained`,
+         locatorEncountered: `${JT}:locatorFlavourEncountered`,
+         locatorUnseen: `${JT}:locatorFlavourUnseen`
```

#### 1960. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16124-L16125` → after: `L15960-L15961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15960-L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15960-L15961) · [Before (L16124-L16125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16124-L16125)

```diff
-         codexNormalOnly: `${Rp}:locatorAttunedNormal`,
-         codexHardOnly: `${Rp}:locatorAttunedHard`
+         codexNormalOnly: `${JT}:locatorAttunedNormal`,
+         codexHardOnly: `${JT}:locatorAttunedHard`
```

#### 1961. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16149` → after: `L15985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15985) · [Before (L16149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16149)

```diff
-       } = (0, Ap.H)();
+       } = (0, lT.z)();
```

#### 1962. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16152` → after: `L15988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15988) · [Before (L16152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16152)

```diff
-         children: cp(`${Rp}:locatorArmedBadge`)
+         children: mT(`${JT}:locatorArmedBadge`)
```

#### 1963. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16155` → after: `L15991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R15991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L15991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L15991) · [Before (L16155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16155)

```diff
-         children: cp(`${Rp}:locatorOwnedBadge`)
+         children: mT(`${JT}:locatorOwnedBadge`)
```

#### 1964. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16168` → after: `L16004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16004) · [Before (L16168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16168)

```diff
-         sx: cp,
+         fn: mT,
```

#### 1965. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16181` → after: `L16017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16017) · [Before (L16181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16181)

```diff
-       } = (0, Ap.H)(), Ip = Op.locatorEntryId, Sp = ip.locators.locatorEntries.find((pp => pp.locatorEntryArmed && pp !== Op));
+       } = (0, lT.z)(), MT = WT.locatorEntryId, gT = UT.locators.locatorEntries.find((TT => TT.locatorEntryArmed && TT !== WT));
```

#### 1966. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16184` → after: `L16020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16020) · [Before (L16184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16184)

```diff
-         children: [Op.locatorEntryArmed && (0, mp.jsx)(yp.S, {
+         children: [WT.locatorEntryArmed && (0, YT.jsx)(BT.L, {
```

#### 1967. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16189-L16190` → after: `L16025-L16026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16025-L16026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16025-L16026) · [Before (L16189-L16190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16189-L16190)

```diff
-           children: op(`${Rp}:locatorDisarm`)
-         }), Op.locatorEntryOwned && !Op.locatorEntryArmed && (0, mp.jsx)(yp.f, {
+           children: zT(`${JT}:locatorDisarm`)
+         }), WT.locatorEntryOwned && !WT.locatorEntryArmed && (0, YT.jsx)(BT.e, {
```

#### 1968. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16195` → after: `L16031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16031) · [Before (L16195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16195)

```diff
-           children: op(`${Rp}:locatorArm`)
+           children: zT(`${JT}:locatorArm`)
```

#### 1969. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16201` → after: `L16037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16037) · [Before (L16201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16201)

```diff
-           }), (0, mp.jsx)(yp.o, {
+           }), (0, YT.jsx)(BT.l, {
```

#### 1970. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16206` → after: `L16042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16042) · [Before (L16206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16206)

```diff
-             children: op(`${Rp}:locatorBuy`)
+             children: zT(`${JT}:locatorBuy`)
```

#### 1971. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16210` → after: `L16046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16046) · [Before (L16210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16210)

```diff
-           children: op(`${Rp}:locatorReplacesHint`, {
+           children: zT(`${JT}:locatorReplacesHint`, {
```

#### 1972. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16237` → after: `L16073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16073) · [Before (L16237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16237)

```diff
-       } = (0, Ap.H)(), Ip = Vi[Op.locatorEntryDifficulty];
+       } = (0, lT.z)(), MT = DU[WT.locatorEntryDifficulty];
```

#### 1973. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16248` → after: `L16084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16084) · [Before (L16248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16248)

```diff
-             name: op(`${Rp}:locatorName`, {
+             name: zT(`${JT}:locatorName`, {
```

#### 1974. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16256` → after: `L16092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16092) · [Before (L16256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16256)

```diff
-             children: op(Op.locatorEntryArmed ? `${Rp}:locatorFlavourArmed` : Ki[Op.locatorEntryStanding])
+             children: zT(WT.locatorEntryArmed ? `${JT}:locatorFlavourArmed` : hU[WT.locatorEntryStanding])
```

#### 1975. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16262` → after: `L16098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16098) · [Before (L16262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16262)

```diff
-             children: op(`${Rp}:locatorUsage`)
+             children: zT(`${JT}:locatorUsage`)
```

#### 1976. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16276` → after: `L16112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16112) · [Before (L16276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16276)

```diff
-       const cp = (0, Dp.i)(zi, ip.getSnapshot()),
+       const mT = (0, jT.j)(NU, UT.getSnapshot()),
```

#### 1977. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16279` → after: `L16115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16115) · [Before (L16279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16279)

```diff
-         } = (0, Ap.H)(),
+         } = (0, lT.z)(),
```

#### 1978. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16287` → after: `L16123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16123) · [Before (L16287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16287)

```diff
-         title: Op(`${Rp}:locatorTitle`),
+         title: WT(`${JT}:locatorTitle`),
```

#### 1979. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16297-L16298` → after: `L16133-L16134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16133-L16134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16133-L16134) · [Before (L16297-L16298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16297-L16298)

```diff
-             children: Op(`${Rp}:locatorKeeperName`)
-           }), null !== Sp && Op(`${Rp}:${Sp.locatorNoticeKey}`, {
+             children: WT(`${JT}:locatorKeeperName`)
+           }), null !== gT && WT(`${JT}:${gT.locatorNoticeKey}`, {
```

#### 1980. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16349` → after: `L16185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16185) · [Before (L16349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16349)

```diff
-     var Lc = cp(38767);
+     var Mm = mT(38693);
```

#### 1981. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16353` → after: `L16189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16189) · [Before (L16353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16353)

```diff
-         this.sendCommand = pp, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Lc.b({
+         this.sendCommand = TT, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Mm.d({
```

#### 1982. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16386` → after: `L16222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16222) · [Before (L16386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16386)

```diff
-     var Dc = cp(38762);
+     var nm = mT(38684);
```

#### 1983. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16405` → after: `L16241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16241) · [Before (L16405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16405)

```diff
-           (0, xp.t)()
+           (0, nT.l)()
```

#### 1984. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16408` → after: `L16244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16244) · [Before (L16408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16408)

```diff
-           pp && (0, xp.l)()
+           TT && (0, nT.f)()
```

#### 1985. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16414` → after: `L16250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16250) · [Before (L16414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16414)

```diff
-           Sp.m.GA(yi, pp, !0)
+           gT.j.EZ(LU, TT, !0)
```

#### 1986. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16417` → after: `L16253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16253) · [Before (L16417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16417)

```diff
-           Sp.m.GA(fp, pp, !0)
+           gT.j.EZ(PT, TT, !0)
```

#### 1987. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16420` → after: `L16256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16256) · [Before (L16420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16420)

```diff
-           Sp.m.GA(zi, pp, !0)
+           gT.j.EZ(NU, TT, !0)
```

#### 1988. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16425` → after: `L16261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16261) · [Before (L16425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16425)

```diff
-           pp = ip, cp = (0, xp.A)(null, {
+           TT = UT, mT = (0, nT.q)(null, {
```

#### 1989. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16434` → after: `L16270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16270) · [Before (L16434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16434)

```diff
-           }), Lp = (0, Ip.f)(Pc)
+           }), HT = (0, MT.i)(km)
```

#### 1990. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16437` → after: `L16273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16273) · [Before (L16437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16437)

```diff
-           "containmentLoadout" === pp ? Wp.Ey(ip) : "containmentLoadoutClose" === pp ? Wp.isOpen() && (Wp.close(), (0, xp.h)()) : "containmentCodex" === pp ? yp.Ey(ip) : "containmentLocator" === pp && Up.Ey(ip)
+           "containmentLoadout" === TT ? pT.pB(UT) : "containmentLoadoutClose" === TT ? pT.isOpen() && (pT.close(), (0, nT.d)()) : "containmentCodex" === TT ? BT.pB(UT) : "containmentLocator" === TT && ZT.pB(UT)
```

#### 1991. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16439-L16440` → after: `L16275-L16276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16275-L16276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16275-L16276) · [Before (L16439-L16440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16439-L16440)

```diff
-         LP: () => {
-           ip || op.c.get("loadingOverlayVisible") || (ip = !0, pp.sendCommand("containmentEntered"))
+         Cl: () => {
+           UT || zT.b.get("loadingOverlayVisible") || (UT = !0, TT.sendCommand("containmentEntered"))
```

#### 1992. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16451` → after: `L16287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16287) · [Before (L16451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16451)

```diff
-   39608: (pp, ip, cp) => {
+   39543: (TT, UT, mT) => {
```

#### 1993. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16471` → after: `L16307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16307) · [Before (L16471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16471)

```diff
-   39617: (pp, ip, cp) => {
+   39552: (TT, UT, mT) => {
```

#### 1994. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16487` → after: `L16323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16323) · [Before (L16487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16487)

```diff
-   39623: (pp, ip, cp) => {
+   39557: (TT, UT, mT) => {
```

#### 1995. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16492-L16497` → after: `L16328-L16333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16328-L16333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16328-L16333) · [Before (L16492-L16497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16492-L16497)

```diff
-     var op = cp(62),
-       Ip = cp(36799),
-       Sp = cp(37246),
-       xp = cp(36819),
-       Lp = cp(1765),
-       Yp = cp(34);
+     var zT = mT(63),
+       MT = mT(36693),
+       gT = mT(37125),
+       nT = mT(36710),
+       HT = mT(1863),
+       kT = mT(31);
```

#### 1996. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16591` → after: `L16427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16427) · [Before (L16591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16591)

```diff
-         for (let Sp = 0; Sp < 4; Sp++) cp.push((op = Sp * ip + .35, Ip = (Sp + 1) * ip - .35, yp(`M${Ap+(Op=6+pp)*Math.cos(op)} ${Ap+Op*Math.sin(op)} A${Op} ${Op} 0 0 1 ${Ap+Op*Math.cos(Ip)} ${Ap+Op*Math.sin(Ip)}`, 2)));
+         for (let gT = 0; gT < 4; gT++) mT.push((zT = gT * UT + .35, MT = (gT + 1) * UT - .35, BT(`M${lT+(WT=6+TT)*Math.cos(zT)} ${lT+WT*Math.sin(zT)} A${WT} ${WT} 0 0 1 ${lT+WT*Math.cos(MT)} ${lT+WT*Math.sin(MT)}`, 2)));
```

#### 1997. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16596` → after: `L16432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16432) · [Before (L16596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16596)

```diff
-       marksman: pp => [yp(`M${26-pp/2} ${39+pp/2} L32 33 L${38+pp/2} ${39+pp/2}`, 2), Pp(14 - pp, Ap, 24 - pp, Ap, 1.5), Pp(40 + pp, Ap, 50 + pp, Ap, 1.5), Pp(14 - pp, 30, 14 - pp, 34, 1.5), Pp(50 + pp, 30, 50 + pp, 34, 1.5)],
+       marksman: TT => [BT(`M${26-TT/2} ${39+TT/2} L32 33 L${38+TT/2} ${39+TT/2}`, 2), LT(14 - TT, lT, 24 - TT, lT, 1.5), LT(40 + TT, lT, 50 + TT, lT, 1.5), LT(14 - TT, 30, 14 - TT, 34, 1.5), LT(50 + TT, 30, 50 + TT, 34, 1.5)],
```

#### 1998. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16605` → after: `L16441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16441) · [Before (L16605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16605)

```diff
-           ]) cp.push(yp(`M${Ap+Op*ip} ${Ap+op*(ip-5)} L${Ap+Op*ip} ${Ap+op*ip} L${Ap+Op*(ip-5)} ${Ap+op*ip}`, 2));
+           ]) mT.push(BT(`M${lT+WT*UT} ${lT+zT*(UT-5)} L${lT+WT*UT} ${lT+zT*UT} L${lT+WT*(UT-5)} ${lT+zT*UT}`, 2));
```

#### 1999. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16618-L16620` → after: `L16454-L16456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16454-L16456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16454-L16456) · [Before (L16618-L16620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16618-L16620)

```diff
-       } = pp, op = `<${ip}`;
-       for (const [Ip, Sp] of Object.entries(cp)) op += ` ${Ip}="${Sp}"`;
-       return void 0 === Op ? `${op}/>` : `${op}>${Op}</${ip}>`
+       } = TT, zT = `<${UT}`;
+       for (const [MT, gT] of Object.entries(mT)) zT += ` ${MT}="${gT}"`;
+       return void 0 === WT ? `${zT}/>` : `${zT}>${WT}</${UT}>`
```

#### 2000. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16628` → after: `L16464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16464) · [Before (L16628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16628)

```diff
-         }, this.tokens = [Yp.m.subscribe("aimingOverlay", (pp => {
+         }, this.tokens = [kT.j.subscribe("aimingOverlay", (TT => {
```

#### 2001. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16630` → after: `L16466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16466) · [Before (L16630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16630)

```diff
-         })), Yp.m.subscribe("mouseState", (pp => {
+         })), kT.j.subscribe("mouseState", (TT => {
```

#### 2002. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16645` → after: `L16481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16481) · [Before (L16645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16645)

```diff
-         } = this, Ip = op.isAlive(this.localPlayerId) && null !== (cp = null === (Op = op.Acp(this.localPlayerId)) || void 0 === Op ? void 0 : Op.name) && void 0 !== cp ? cp : null, Sp = (xp = Ip) && Dp[xp] || null;
+         } = this, MT = zT.isAlive(this.localPlayerId) && null !== (mT = null === (WT = zT.RUT(this.localPlayerId)) || void 0 === WT ? void 0 : WT.name) && void 0 !== mT ? mT : null, gT = (nT = MT) && jT[nT] || null;
```

#### 2003. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16655` → after: `L16491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16491) · [Before (L16655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16655)

```diff
-           Wp = null !== Lp && void 0 !== Lp ? Lp : 0;
+           pT = null !== HT && void 0 !== HT ? HT : 0;
```

#### 2004. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16661` → after: `L16497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16497) · [Before (L16661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16661)

```diff
-         for (const pp of this.tokens) Yp.m.unsubscribe(pp);
+         for (const TT of this.tokens) kT.j.unsubscribe(TT);
```

#### 2005. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16667-L16668` → after: `L16503-L16504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16503-L16504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16503-L16504) · [Before (L16667-L16668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16667-L16668)

```diff
-           return `<svg viewBox="0 0 64 64">${vp[pp](ip).map(tp).join("")}</svg>`
-         }(pp, ip), this.shapes = Array.from(null !== (cp = null === (Op = this.element.firstElementChild) || void 0 === Op ? void 0 : Op.children) && void 0 !== cp ? cp : [])) : ip !== this.drawnGap && (this.drawnGap = ip, function(pp, ip, cp) {
+           return `<svg viewBox="0 0 64 64">${vT[TT](UT).map(fT).join("")}</svg>`
+         }(TT, UT), this.shapes = Array.from(null !== (mT = null === (WT = this.element.firstElementChild) || void 0 === WT ? void 0 : WT.children) && void 0 !== mT ? mT : [])) : UT !== this.drawnGap && (this.drawnGap = UT, function(TT, UT, mT) {
```

#### 2006. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16682` → after: `L16518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16518) · [Before (L16682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16682)

```diff
-         const cp = pp * Sp.j / 2;
+         const mT = TT * gT.h / 2;
```

#### 2007. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16686` → after: `L16522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16522) · [Before (L16686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16686)

```diff
-         const ip = 2 + ((0, xp.e)(pp) - 1) * this.gapPerVh;
+         const UT = 2 + ((0, nT.h)(TT) - 1) * this.gapPerVh;
```

#### 2008. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16701` → after: `L16537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16537) · [Before (L16701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16701)

```diff
-         }, this.maxHealth = null, this.Bp = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = pp => {
+         }, this.maxHealth = null, this.yT = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = TT => {
```

#### 2009. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16703-L16704` → after: `L16539-L16540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16539-L16540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16539-L16540) · [Before (L16703-L16704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16703-L16704)

```diff
-           this.clearHits(), this.root = pp, this.lowLayer = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.querySelector(".FrontlineDamageLow")) && void 0 !== ip ? ip : null, this.arcLayer = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.querySelector(".Fron … [truncated]
-         }, this.token = Yp.m.subscribe("damagedByOtherPlayer", (pp => {
+           this.clearHits(), this.root = TT, this.lowLayer = null !== (UT = null === TT || void 0 === TT ? void 0 : TT.querySelector(".FrontlineDamageLow")) && void 0 !== UT ? UT : null, this.arcLayer = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.querySelector(".Fron … [truncated]
+         }, this.token = kT.j.subscribe("damagedByOtherPlayer", (TT => {
```

#### 2010. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16707` → after: `L16543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16543) · [Before (L16707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16707)

```diff
-             Qp: cp
+             tT: mT
```

#### 2011. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16720` → after: `L16556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16556) · [Before (L16720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16720)

```diff
-         Yp.m.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(dp)
+         kT.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(iT)
```

#### 2012. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16730-L16731` → after: `L16566-L16567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16566-L16567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16566-L16567) · [Before (L16730-L16731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16730-L16731)

```diff
-         if (this.readHealth = pp, this.readShield = ip, this.readMaxHealth = cp, null === pp || void 0 === pp || !cp) return this.lastHealthPool = null, this.maxHealth = null, this.Bp = 1, this.dead = !1, void this.drawLow();
-         const Op = pp + (null !== ip && void 0 !== ip ? ip : 0);
+         if (this.readHealth = TT, this.readShield = UT, this.readMaxHealth = mT, null === TT || void 0 === TT || !mT) return this.lastHealthPool = null, this.maxHealth = null, this.yT = 1, this.dead = !1, void this.drawLow();
+         const WT = TT + (null !== UT && void 0 !== UT ? UT : 0);
```

#### 2013. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16743` → after: `L16579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16579) · [Before (L16743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16743)

```diff
-         this.dead = pp <= 0, this.dead && this.clearHits(), this.lastHealthPool = Op, this.maxHealth = cp, this.Bp = pp > 0 ? pp / cp : 1, this.drawLow()
+         this.dead = TT <= 0, this.dead && this.clearHits(), this.lastHealthPool = WT, this.maxHealth = mT, this.yT = TT > 0 ? TT / mT : 1, this.drawLow()
```

#### 2014. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16763-L16766` → after: `L16599-L16602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16599-L16602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16599-L16602) · [Before (L16763-L16766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16763-L16766)

```diff
-         const pp = Rp((ep - this.Bp) / .25),
-           ip = Rp((jp - this.Bp) / .15000000000000002),
-           cp = this.Bp < ep;
-         this.lowLayer.classList.toggle("Active", cp), this.lowLayer.classList.toggle("Critical", this.Bp < jp), this.lowLayer.style.opacity = String(cp ? .55 + .3 * pp + .15 * ip : 0)
+         const TT = JT((bT - this.yT) / .25),
+           UT = JT((OT - this.yT) / .15000000000000002),
+           mT = this.yT < bT;
+         this.lowLayer.classList.toggle("Active", mT), this.lowLayer.classList.toggle("Critical", this.yT < OT), this.lowLayer.style.opacity = String(mT ? .55 + .3 * TT + .15 * UT : 0)
```

#### 2015. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16818` → after: `L16654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16654) · [Before (L16818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16818)

```diff
-         (null === pp.drawnAngle || Math.abs(ip - pp.drawnAngle) > .005) && (pp.drawnAngle = ip, pp.element.style.rotate = `${ip}rad`)
+         (null === TT.drawnAngle || Math.abs(UT - TT.drawnAngle) > .005) && (TT.drawnAngle = UT, TT.element.style.rotate = `${UT}rad`)
```

#### 2016. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16823` → after: `L16659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16659) · [Before (L16823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16823)

```diff
-         let Ip = this.flashes.find((ip => null === ip.angle || null === pp ? ip.angle === pp : mp(ip.angle, pp) < .5));
+         let MT = this.flashes.find((UT => null === UT.angle || null === TT ? UT.angle === TT : YT(UT.angle, TT) < .5));
```

#### 2017. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16873` → after: `L16709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16709) · [Before (L16873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16873)

```diff
-         Ip.glow.classList.toggle("Everywhere", null === pp), Pp.setProperty("--glowX", `${Lp}px`), Pp.setProperty("--glowY", `${Yp}px`), Pp.setProperty("--glowRx", `${Dp}px`), Pp.setProperty("--glowRy", `${Ap}px`), Ip.element.style.transformOrigin = `${Lp}px ${Yp}px`, null === (o … [truncated]
+         MT.glow.classList.toggle("Everywhere", null === TT), LT.setProperty("--glowX", `${HT}px`), LT.setProperty("--glowY", `${kT}px`), LT.setProperty("--glowRx", `${jT}px`), LT.setProperty("--glowRy", `${lT}px`), MT.element.style.transformOrigin = `${HT}px ${kT}px`, null === (z … [truncated]
```

#### 2018. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16924` → after: `L16760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16760) · [Before (L16924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16924)

```diff
-     var Mp = cp(1049),
+     var dT = mT(1126),
```

#### 2019. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16926-L16929` → after: `L16762-L16765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16762-L16765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16762-L16765) · [Before (L16926-L16929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16926-L16929)

```diff
-       Ep = cp(36791),
-       Xp = cp(36879),
-       lp = cp(1201),
-       Qp = cp(1476);
+       tT = mT(36687),
+       aT = mT(36776),
+       yT = mT(1288),
+       XT = mT(1567);
```

#### 2020. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16946` → after: `L16782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16782) · [Before (L16946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16946)

```diff
-         this.wire = pp, Yp.m.GA(Jp, pp, !0)
+         this.wire = TT, kT.j.EZ(IT, TT, !0)
```

#### 2021. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16954` → after: `L16790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16790) · [Before (L16954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16954)

```diff
-         }, Yp.m.GA(Bp, this.scoreboard, !0)
+         }, kT.j.EZ(QT, this.scoreboard, !0)
```

#### 2022. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16957` → after: `L16793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16793) · [Before (L16957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16957)

```diff
-     var Tp = cp(1112);
+     var FT = mT(1188);
```

#### 2023. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16985` → after: `L16821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16821) · [Before (L16985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16985)

```diff
-         className: Cp()(ip, `Owner-${op||"None"}`, `Leader-${Sp||"None"}`, {
+         className: wT()(UT, `Owner-${zT||"None"}`, `Leader-${gT||"None"}`, {
```

#### 2024. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L16995` → after: `L16831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16831) · [Before (L16995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L16995)

```diff
-             width: `${Ip}%`
+             width: `${MT}%`
```

#### 2025. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17007` → after: `L16843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16843) · [Before (L17007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17007)

```diff
-         } = (0, lp.H)();
+         } = (0, yT.z)();
```

#### 2026. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17021` → after: `L16857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16857) · [Before (L17021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17021)

```diff
-                   className: Cp()("FrontlinePointMarkerHomeTurf", `Team-${op}`),
+                   className: wT()("FrontlinePointMarkerHomeTurf", `Team-${zT}`),
```

#### 2027. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17054-L17055` → after: `L16890-L16891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16890-L16891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16890-L16891) · [Before (L17054-L17055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17054-L17055)

```diff
-       const Ip = (0, Qp.i)(Jp, ip.getWire()),
-         Sp = (0, Qp.i)(Bp, ip.getScoreboard());
+       const MT = (0, XT.j)(IT, UT.getWire()),
+         gT = (0, XT.j)(QT, UT.getScoreboard());
```

#### 2028. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17067` → after: `L16903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16903) · [Before (L17067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17067)

```diff
-         }), (0, Tp.jsx)(Ep.h, {
+         }), (0, FT.jsx)(tT.d, {
```

#### 2029. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17097` → after: `L16933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16933) · [Before (L17097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17097)

```diff
-         } = (0, lp.H)();
+         } = (0, yT.z)();
```

#### 2030. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17101` → after: `L16937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16937) · [Before (L17101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17101)

```diff
-             className: Cp()("FrontlinePlate", `Status-${Op}`, `Leader-${Ip||"None"}`),
+             className: wT()("FrontlinePlate", `Status-${WT}`, `Leader-${MT||"None"}`),
```

#### 2031. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17135` → after: `L16971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16971) · [Before (L17135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17135)

```diff
-             className: Cp()("FrontlinePlate", "FrontlineAlert", `Tone-${op}`),
+             className: wT()("FrontlinePlate", "FrontlineAlert", `Tone-${zT}`),
```

#### 2032. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17153` → after: `L16989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16989) · [Before (L17153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17153)

```diff
-         } = (0, lp.H)(), Op = (0, op.useRef)(null), Ip = function(pp, ip) {
+         } = (0, yT.z)(), WT = (0, zT.useRef)(null), MT = function(TT, UT) {
```

#### 2033. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17158-L17159` → after: `L16994-L16995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R16994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L16994-L16995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L16994-L16995) · [Before (L17158-L17159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17158-L17159)

```diff
-             const cp = document.querySelector(`.${Xp.h}`),
-               op = document.querySelector(`.${Xp.l}`),
+             const mT = document.querySelector(`.${aT.e}`),
+               zT = document.querySelector(`.${aT.h}`),
```

#### 2034. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17164` → after: `L17000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17000) · [Before (L17164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17164)

```diff
-                   xp = ip.getBoundingClientRect().width - 2 * (null !== (pp = null === Ip || void 0 === Ip ? void 0 : Ip.getBoundingClientRect().width) && void 0 !== pp ? pp : 0),
+                   nT = UT.getBoundingClientRect().width - 2 * (null !== (TT = null === MT || void 0 === MT ? void 0 : MT.getBoundingClientRect().width) && void 0 !== TT ? TT : 0),
```

#### 2035. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17168` → after: `L17004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17004) · [Before (L17168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17168)

```diff
-                   Pp = Math.min(Yp - Dp, Ap - Yp) - Xp.e - xp / 2,
+                   LT = Math.min(kT - jT, lT - kT) - aT.c - nT / 2,
```

#### 2036. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17170-L17171` → after: `L17006-L17007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17006-L17007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17006-L17007) · [Before (L17170-L17171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17170-L17171)

```diff
-                   yp = Wp ? (window.innerWidth - xp) / 2 - Xp.e : Pp;
-                 ip.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(yp,14*Sp)))}px`), Op(Wp)
+                   BT = pT ? (window.innerWidth - nT) / 2 - aT.c : LT;
+                 UT.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(BT,14*gT)))}px`), WT(pT)
```

#### 2037. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17230` → after: `L17066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17066) · [Before (L17230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17230)

```diff
-       } = (0, lp.H)(), Sp = String(cp).padStart(3, "0"), xp = Sp.search(/[1-9]/), Lp = -1 === xp ? Sp : Sp.slice(0, xp), Yp = Math.min(20, Math.floor(cp / Op * 20));
+       } = (0, yT.z)(), gT = String(mT).padStart(3, "0"), nT = gT.search(/[1-9]/), HT = -1 === nT ? gT : gT.slice(0, nT), kT = Math.min(20, Math.floor(mT / WT * 20));
```

#### 2038. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17232` → after: `L17068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17068) · [Before (L17232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17232)

```diff
-         className: Cp()("FrontlineTeamScore", op, `Team-${ip}`),
+         className: wT()("FrontlineTeamScore", zT, `Team-${UT}`),
```

#### 2039. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17291-L17294` → after: `L17127-L17130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17127-L17130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17127-L17130) · [Before (L17291-L17294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17291-L17294)

```diff
-     var ii = cp(36872),
-       ci = cp(1260),
-       Oi = cp(38712),
-       oi = cp(38751);
+     var RT = mT(36772),
+       TU = mT(1345),
+       UU = mT(38622),
+       mU = mT(38669);
```

#### 2040. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17301` → after: `L17137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17137) · [Before (L17301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17301)

```diff
-         }, this.render = null, this.Ry = !1, this.mH = () => {
+         }, this.render = null, this.kB = !1, this.Qq = () => {
```

#### 2041. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17306` → after: `L17142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17142) · [Before (L17306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17306)

```diff
-         }, window.addEventListener("resize", this.mH), null === (ip = window.visualViewport) || void 0 === ip || ip.addEventListener("resize", this.mH)
+         }, window.addEventListener("resize", this.Qq), null === (UT = window.visualViewport) || void 0 === UT || UT.addEventListener("resize", this.Qq)
```

#### 2042. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17312` → after: `L17148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17148) · [Before (L17312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17312)

```diff
-           null === (cp = this.markers.get(pp)) || void 0 === cp || cp.stopObserving(), this.markers.delete(pp), ip && !this.Ry && this.markers.set(pp, this.mount(ip))
+           null === (mT = this.markers.get(TT)) || void 0 === mT || mT.stopObserving(), this.markers.delete(TT), UT && !this.kB && this.markers.set(TT, this.mount(UT))
```

#### 2043. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17321` → after: `L17157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17157) · [Before (L17321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17321)

```diff
-             pp && op && (pp.target ??= [0, 0, 0], pp.target[0] = op[0], pp.target[1] = op[1] + 2.5, pp.target[2] = op[2], this.place(pp), this.ri(pp, ip && Math.hypot(op[0] - ip[0], op[1] - ip[1], op[2] - ip[2])))
+             TT && zT && (TT.target ??= [0, 0, 0], TT.target[0] = zT[0], TT.target[1] = zT[1] + 2.5, TT.target[2] = zT[2], this.place(TT), this.yU(TT, UT && Math.hypot(zT[0] - UT[0], zT[1] - UT[1], zT[2] - UT[2])))
```

#### 2044. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17326` → after: `L17162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17162) · [Before (L17326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17326)

```diff
-         this.Ry = !0, window.removeEventListener("resize", this.mH), null === (pp = window.visualViewport) || void 0 === pp || pp.removeEventListener("resize", this.mH);
+         this.kB = !0, window.removeEventListener("resize", this.Qq), null === (TT = window.visualViewport) || void 0 === TT || TT.removeEventListener("resize", this.Qq);
```

#### 2045. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17343-L17344` → after: `L17179-L17180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17179-L17180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17179-L17180) · [Before (L17343-L17344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17343-L17344)

```diff
-           Sp = null !== Ip && void 0 !== Ip ? Ip : ip.projectWorldPosToScreenPos(pp.target),
-           xp = (0, oi.d)({
+           gT = null !== MT && void 0 !== MT ? MT : UT.projectWorldPosToScreenPos(TT.target),
+           nT = (0, mU.e)({
```

#### 2046. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17349` → after: `L17185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17185) · [Before (L17349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17349)

```diff
-         (0, Oi.b)(pp.root, Math.round(100 * xp.x) / 100, Math.round(100 * xp.y) / 100)
+         (0, UU.d)(TT.root, Math.round(100 * nT.x) / 100, Math.round(100 * nT.y) / 100)
```

#### 2047. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17354` → after: `L17190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17190) · [Before (L17354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17354)

```diff
-         (null === pp.metres || (0, ii.c)(ip, pp.metres, pp.metresShownAt)) && (pp.metres = Math.round(ip), pp.metresShownAt = cp, pp.distance.textContent = (0, lp.B)(ci.g.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
+         (null === TT.metres || (0, RT.b)(UT, TT.metres, TT.metresShownAt)) && (TT.metres = Math.round(UT), TT.metresShownAt = mT, TT.distance.textContent = (0, yT.v)(TU.f.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
```

#### 2048. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17388-L17389` → after: `L17224-L17225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17224-L17225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17224-L17225) · [Before (L17388-L17389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17388-L17389)

```diff
-     var Si = cp(6566),
-       xi = cp(2695);
+     var zU = mT(6508),
+       MU = mT(2731);
```

#### 2049. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17408` → after: `L17244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17244) · [Before (L17408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17408)

```diff
-         }, Yp.m.GA(Li, this.view, !0)
+         }, kT.j.EZ(gU, this.view, !0)
```

#### 2050. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17411` → after: `L17247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17247) · [Before (L17411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17411)

```diff
-     const Di = (0, op.lazy)((() => (0, xi.c)(Promise.all([cp.e(239), cp.e(202)]).then((() => cp(42012))), (pp => pp.FrontlineMvpLineup)))),
+     const HU = (0, zT.lazy)((() => (0, MU.b)(Promise.all([mT.e(239), mT.e(202)]).then((() => mT(41901))), (TT => TT.FrontlineMvpLineup)))),
```

#### 2051. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17425` → after: `L17261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17261) · [Before (L17425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17425)

```diff
-       const cp = (0, Qp.i)(Li, ip.getView()),
+       const mT = (0, XT.j)(gU, UT.getView()),
```

#### 2052. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17439` → after: `L17275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17275) · [Before (L17439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17439)

```diff
-       } = (0, lp.H)(), [, Sp, xp, Lp, Yp, , Dp, Ap] = ip, Pp = (0, op.useMemo)((() => Pi.filter((pp => pp < Ap.length))), [Ap]), Wp = (0, op.useMemo)((() => Pp.map((pp => {
+       } = (0, yT.z)(), [, gT, nT, HT, kT, , jT, lT] = UT, LT = (0, zT.useMemo)((() => jU.filter((TT => TT < lT.length))), [lT]), pT = (0, zT.useMemo)((() => LT.map((TT => {
```

#### 2053. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17452` → after: `L17288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17288) · [Before (L17452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17452)

```diff
-         className: Cp()("FrontlineRoundEnd", `Result-${Sp}`),
+         className: wT()("FrontlineRoundEnd", `Result-${gT}`),
```

#### 2054. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17466` → after: `L17302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17302) · [Before (L17466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17466)

```diff
-             }), (yp = Ip(Wi[Sp]), /\p{Script=Arabic}/u.test(yp) ? [yp] : (0, Si.d)(yp)).map(((pp, ip) => (0, Tp.jsx)("span", {
+             }), (BT = MT(lU[gT]), /\p{Script=Arabic}/u.test(BT) ? [BT] : (0, zU.c)(BT)).map(((TT, UT) => (0, FT.jsx)("span", {
```

#### 2055. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17521-L17522` → after: `L17357-L17358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17357-L17358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17357-L17358) · [Before (L17521-L17522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17521-L17522)

```diff
-       } = (0, lp.H)(), [op, Ip, Sp, xp, Lp] = ip, [Yp, Dp] = Op(function(pp, ip) {
-         return 1 === ip && "damage" !== pp ? `frontlineRoundEnd:${pp}One` : `frontlineRoundEnd:${pp}`
+       } = (0, yT.z)(), [zT, MT, gT, nT, HT] = UT, [kT, jT] = WT(function(TT, UT) {
+         return 1 === UT && "damage" !== TT ? `frontlineRoundEnd:${TT}One` : `frontlineRoundEnd:${TT}`
```

#### 2056. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17528` → after: `L17364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17364) · [Before (L17528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17528)

```diff
-         className: Cp()("FrontlineMvpCard", `Place-${cp+1}`, `Team-${Ip}`),
+         className: wT()("FrontlineMvpCard", `Place-${mT+1}`, `Team-${MT}`),
```

#### 2057. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17530` → after: `L17366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17366) · [Before (L17530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17530)

```diff
-           "--revealMs": `${Ai[cp]}ms`
+           "--revealMs": `${kU[mT]}ms`
```

#### 2058. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17566` → after: `L17402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17402) · [Before (L17566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17566)

```diff
-         null === (pp = Dp) || void 0 === pp || pp.eC(!cp), null === (ip = Ap) || void 0 === ip || ip.eC(!Op)
+         null === (TT = jT) || void 0 === TT || TT.Qy(!mT), null === (UT = lT) || void 0 === UT || UT.Qy(!WT)
```

#### 2059. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17570` → after: `L17406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17406) · [Before (L17570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17570)

```diff
-           Yp = pp, Dp = new Hp(pp, Sp), Ap = new kp(pp, Sp), Pp = new Ii(xp), Up(), Wp = (0, Ip.A)((0, op.createElement)(op.Fragment, null, (0, op.createElement)(gp, {
+           kT = TT, jT = new qT(TT, gT), lT = new eT(TT, gT), LT = new WU(nT), ZT(), pT = (0, MT.q)((0, zT.createElement)(zT.Fragment, null, (0, zT.createElement)(ST, {
```

#### 2060. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17585` → after: `L17421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17421) · [Before (L17585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17585)

```diff
-           null === (cp = Dp) || void 0 === cp || cp.frame(pp, ip.tanHalfFovY), null === (Op = Ap) || void 0 === Op || Op.frame(ip.cameraHeading), null === (op = Pp) || void 0 === op || op.frame(ip, null !== (Ip = Yp) && void 0 !== Ip && Ip.checkValid(Sp) ? Yp.sH(Sp) : null)
+           null === (mT = jT) || void 0 === mT || mT.frame(TT, UT.tanHalfFovY), null === (WT = lT) || void 0 === WT || WT.frame(UT.cameraHeading), null === (zT = LT) || void 0 === zT || zT.frame(UT, null !== (MT = kT) && void 0 !== MT && MT.checkValid(gT) ? kT.Aq(gT) : null)
```

#### 2061. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17588` → after: `L17424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17424) · [Before (L17588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17588)

```diff
-           "frontlineHud" === pp ? xp.Ey(ip) : "frontlineScoreboard" === pp ? xp.receiveScoreboard(ip) : "frontlineRoundEnd" === pp ? Lp.Ey(ip) : "frontlinePrefs" === pp && (yp = ip, Up())
+           "frontlineHud" === TT ? nT.pB(UT) : "frontlineScoreboard" === TT ? nT.receiveScoreboard(UT) : "frontlineRoundEnd" === TT ? HT.pB(UT) : "frontlinePrefs" === TT && (BT = UT, ZT())
```

#### 2062. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17593` → after: `L17429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17429) · [Before (L17593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17593)

```diff
-   39631: (pp, ip, cp) => {
+   39559: (TT, UT, mT) => {
```

#### 2063. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17652` → after: `L17488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17488) · [Before (L17652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17652)

```diff
-             "ballState" === pp ? (Lp = null !== (cp = ip.eId) && void 0 !== cp ? cp : null, Lp || Up()) : "frozen" === pp ? xp = ip.frozen : "pitchInfo" === pp && (Yp = ip.goalZRed, Dp = ip.goalZBlue, Ap = Math.abs(Dp - Yp) / 2)
+             "ballState" === TT ? (HT = null !== (mT = UT.eId) && void 0 !== mT ? mT : null, HT || ZT()) : "frozen" === TT ? nT = UT.frozen : "pitchInfo" === TT && (kT = UT.goalZRed, jT = UT.goalZBlue, lT = Math.abs(jT - kT) / 2)
```

#### 2064. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17654` → after: `L17490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17490) · [Before (L17654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17654)

```diff
-           LP: pp => {
+           Cl: TT => {
```

#### 2065. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17660` → after: `L17496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17496) · [Before (L17660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17660)

```diff
-   39640: (pp, ip, cp) => {
+   39567: (TT, UT, mT) => {
```

#### 2066. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17674-L17676` → after: `L17510-L17512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17510-L17512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17510-L17512) · [Before (L17674-L17676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17674-L17676)

```diff
-     var op = cp(62),
-       Ip = cp(38261),
-       Sp = cp(337);
+     var zT = mT(63),
+       MT = mT(38164),
+       gT = mT(366);
```

#### 2067. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17680` → after: `L17516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17516) · [Before (L17680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17680)

```diff
-       return `${"Basic"===ip?"":`${ip} `}${"Simple"===pp?"":`${pp} `}Lucky Block`
+       return `${"Basic"===UT?"":`${UT} `}${"Simple"===TT?"":`${TT} `}Lucky Block`
```

#### 2068. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17693` → after: `L17529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17529) · [Before (L17693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17693)

```diff
-       Wp = [...["Red", "Blue", "Green", "Yellow"].map((pp => `${(0,Sp.ab)(pp)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Ap, ...Pp];
+       pT = [...["Red", "Blue", "Green", "Yellow"].map((TT => `${(0,gT.hb)(TT)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", lT, ...LT];
```

#### 2069. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17698` → after: `L17534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17534) · [Before (L17698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17698)

```diff
-     var Up = cp(640);
+     var ZT = mT(653);
```

#### 2070. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17714-L17716` → after: `L17550-L17552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17550-L17552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17550-L17552) · [Before (L17714-L17716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17714-L17716)

```diff
-       length: Up.p - Up.l
-     }, ((pp, ip) => Up.l + ip)), ...Array.from({
-       length: Up.l
+       length: ZT.q - ZT.n
+     }, ((TT, UT) => ZT.n + UT)), ...Array.from({
+       length: ZT.n
```

#### 2071. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17726` → after: `L17562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17562) · [Before (L17726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17726)

```diff
-         (null === Op || void 0 === Op ? void 0 : Op.name) === pp && (null !== (ip = Op.amount) && void 0 !== ip ? ip : 1) <= 1 && Hp(pp) && this.pending.set(cp, pp)
+         (null === WT || void 0 === WT ? void 0 : WT.name) === TT && (null !== (UT = WT.amount) && void 0 !== UT ? UT : 1) <= 1 && qT(TT) && this.pending.set(mT, TT)
```

#### 2072. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17729` → after: `L17565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17565) · [Before (L17729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17729)

```diff
-         ip < Up.l && null === this.inventory.itemAt(ip) && Hp(pp) && this.refill(ip, pp)
+         UT < ZT.n && null === this.inventory.itemAt(UT) && qT(TT) && this.refill(UT, TT)
```

#### 2073. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17742` → after: `L17578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17578) · [Before (L17742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17742)

```diff
-             if (!xp || Sp < Up.l && ip !== cp) continue;
+             if (!nT || gT < ZT.n && UT !== mT) continue;
```

#### 2074. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17755-L17757` → after: `L17591-L17593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17591-L17593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17591-L17593) · [Before (L17755-L17757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17755-L17757)

```diff
-     var dp = cp(36799),
-       ep = cp(82),
-       jp = cp(1049),
+     var iT = mT(36693),
+       bT = mT(85),
+       OT = mT(1126),
```

#### 2075. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17773-L17774` → after: `L17609-L17610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17609-L17610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17609-L17610) · [Before (L17773-L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17773-L17774)

```diff
-     var Cp = cp(322),
-       Ep = cp(2492),
+     var wT = mT(351),
+       tT = mT(2552),
```

#### 2076. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17776-L17780` → after: `L17612-L17616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17612-L17616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17612-L17616) · [Before (L17776-L17780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17776-L17780)

```diff
-       lp = cp(2657),
-       Qp = cp(1941),
-       Jp = cp(36791),
-       Bp = cp(1060);
-     var Np = cp(1112);
+       yT = mT(2698),
+       XT = mT(2034),
+       IT = mT(36687),
+       QT = mT(1135);
+     var sT = mT(1188);
```

#### 2077. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17782-L17784` → after: `L17618-L17620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17618-L17620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17618-L17620) · [Before (L17782-L17784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17782-L17784)

```diff
-       Basic: Sp.N.whiteUiText,
-       Rare: Sp.N.goldUiText,
-       Super: Sp.N.cyanUiText
+       Basic: gT.R.whiteUiText,
+       Rare: gT.R.goldUiText,
+       Super: gT.R.cyanUiText
```

#### 2078. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17789` → after: `L17625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17625) · [Before (L17789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17789)

```diff
-       const pp = (0, Ep.i)("currencyAmounts"),
+       const TT = (0, tT.f)("currencyAmounts"),
```

#### 2079. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17791` → after: `L17627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17627) · [Before (L17791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17791)

```diff
-       return !ip || ip.hidden ? null : (0, Np.jsx)(Jp.h, {
+       return !UT || UT.hidden ? null : (0, sT.jsx)(IT.d, {
```

#### 2080. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17805` → after: `L17641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17641) · [Before (L17805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17805)

```diff
-       } = (0, Xp.o)(["openEverythingMenuName"]), Yp = (0, lp.b)(), [Dp, Ap] = (0, op.useState)(Ip), [Pp, Wp] = (0, op.useState)(null), [yp, Up] = (0, op.useState)(0), [wp, vp] = (0, op.useState)([]), tp = (0, op.useRef)(Ip), Hp = (0, op.useRef)(!1), dp = (0, op.useRef)(null), jp  … [truncated]
+       } = (0, aT.h)(["openEverythingMenuName"]), kT = (0, yT.b)(), [jT, lT] = (0, zT.useState)(MT), [LT, pT] = (0, zT.useState)(null), [BT, ZT] = (0, zT.useState)(0), [cT, vT] = (0, zT.useState)([]), fT = (0, zT.useRef)(MT), qT = (0, zT.useRef)(!1), iT = (0, zT.useRef)(null), OT  … [truncated]
```

#### 2081. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17829` → after: `L17665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17665) · [Before (L17829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17829)

```diff
-           const cp = Sp.d.clamp((ip - xp) / 600, 0, 1);
+           const mT = gT.e.clamp((UT - nT) / 600, 0, 1);
```

#### 2082. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17838` → after: `L17674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17674) · [Before (L17838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17838)

```diff
-           const cp = null !== (ip = xp.find((ip => pp < qp(ip)))) && void 0 !== ip ? ip : "Super";
+           const mT = null !== (UT = nT.find((UT => TT < xT(UT)))) && void 0 !== UT ? UT : "Super";
```

#### 2083. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17841` → after: `L17677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17677) · [Before (L17841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17841)

```diff
-             progress: Sp.d.clamp(pp / qp(cp), 0, 1)
+             progress: gT.e.clamp(TT / xT(mT), 0, 1)
```

#### 2084. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17858` → after: `L17694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17694) · [Before (L17858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17858)

```diff
-                 transform: `scaleX(${Rp.progress})`
+                 transform: `scaleX(${JT.progress})`
```

#### 2085. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17863` → after: `L17699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17699) · [Before (L17863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17863)

```diff
-                 animationDelay: `${null!==(ip=null===Pp||void 0===Pp?void 0:Pp.delayMs)&&void 0!==ip?ip:0}ms`
+                 animationDelay: `${null!==(UT=null===LT||void 0===LT?void 0:LT.delayMs)&&void 0!==UT?UT:0}ms`
```

#### 2086. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17869` → after: `L17705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17705) · [Before (L17869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17869)

```diff
-                 animationDelay: `${null!==(Op=null===Pp||void 0===Pp?void 0:Pp.delayMs)&&void 0!==Op?Op:0}ms`
+                 animationDelay: `${null!==(WT=null===LT||void 0===LT?void 0:LT.delayMs)&&void 0!==WT?WT:0}ms`
```

#### 2087. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17871` → after: `L17707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17707) · [Before (L17871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17871)

```diff
-               children: (0, Np.jsx)(Qp.d, {
+               children: (0, sT.jsx)(XT.b, {
```

#### 2088. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17875` → after: `L17711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17711) · [Before (L17875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17875)

```diff
-             }, null !== (cp = null === Pp || void 0 === Pp ? void 0 : Pp.id) && void 0 !== cp ? cp : 0), (0, Np.jsx)("span", {
+             }, null !== (mT = null === LT || void 0 === LT ? void 0 : LT.id) && void 0 !== mT ? mT : 0), (0, sT.jsx)("span", {
```

#### 2089. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17878` → after: `L17714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17714) · [Before (L17878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17878)

```diff
-             }), Ep && (0, Np.jsx)(Bp.d, {
+             }), tT && (0, sT.jsx)(QT.c, {
```

#### 2090. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17908` → after: `L17744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17744) · [Before (L17908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17908)

```diff
-           transform: `translate(${Sp}px, ${xp}px) scale(0.3)`,
+           transform: `translate(${gT}px, ${nT}px) scale(0.3)`,
```

#### 2091. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17911` → after: `L17747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17747) · [Before (L17911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17911)

```diff
-           transform: `translate(${Lp}px, ${Yp}px) scale(1.3)`,
+           transform: `translate(${HT}px, ${kT}px) scale(1.3)`,
```

#### 2092. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17915` → after: `L17751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17751) · [Before (L17915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17915)

```diff
-           transform: `translate(${op.left}px, ${op.top}px) scale(0.8)`,
+           transform: `translate(${zT.left}px, ${zT.top}px) scale(0.8)`,
```

#### 2093. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17929` → after: `L17765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17765) · [Before (L17929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17929)

```diff
-         children: (0, Np.jsx)(Qp.d, {
+         children: (0, sT.jsx)(XT.b, {
```

#### 2094. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17935` → after: `L17771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17771) · [Before (L17935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17935)

```diff
-     var np = cp(34);
+     var rT = mT(31);
```

#### 2095. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17947` → after: `L17783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17783) · [Before (L17947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17947)

```diff
-       return null !== (ip = gp[pp.split(" ")[0]]) && void 0 !== ip ? ip : "#e07bff"
+       return null !== (UT = ST[TT.split(" ")[0]]) && void 0 !== UT ? UT : "#e07bff"
```

#### 2096. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17970` → after: `L17806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17806) · [Before (L17970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17970)

```diff
-         this.GA()
+         this.EZ()
```

#### 2097. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17985` → after: `L17821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17821) · [Before (L17985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17985)

```diff
-         cp && this.GA()
+         mT && this.EZ()
```

#### 2098. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17991` → after: `L17827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17827) · [Before (L17991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17991)

```diff
-         }, np.m.GA(Fp, this.view)
+         }, rT.j.EZ(KT, this.view)
```

#### 2099. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17994` → after: `L17830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17830) · [Before (L17994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17994)

```diff
-     var Zp = cp(1476);
+     var ET = mT(1567);
```

#### 2100. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L17997` → after: `L17833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17833) · [Before (L17997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L17997)

```diff
-       return document.querySelector(`.HotBar [data-inven-idx="${pp}"]`)
+       return document.querySelector(`.HotBar [data-inven-idx="${TT}"]`)
```

#### 2101. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18007` → after: `L17843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17843) · [Before (L18007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18007)

```diff
-         Op(null !== (pp = null === (cp = zp(ip.slot)) || void 0 === cp ? void 0 : cp.getBoundingClientRect()) && void 0 !== pp ? pp : null)
+         WT(null !== (TT = null === (mT = hT(UT.slot)) || void 0 === mT ? void 0 : mT.getBoundingClientRect()) && void 0 !== TT ? TT : null)
```

#### 2102. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18048` → after: `L17884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17884) · [Before (L18048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18048)

```diff
-       const cp = (0, Zp.i)(Fp, ip.getView());
+       const mT = (0, ET.j)(KT, UT.getView());
```

#### 2103. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18075` → after: `L17911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17911) · [Before (L18075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18075)

```diff
-           placeAgainstBeds: (0, Ip.c)()
+           placeAgainstBeds: (0, MT.b)()
```

#### 2104. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18078` → after: `L17914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17914) · [Before (L18078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18078)

```diff
-           xp = pp, Yp = (0, dp.A)((0, op.createElement)(op.Fragment, null, (0, op.createElement)(bp), (0, op.createElement)(Vp, {
+           nT = TT, kT = (0, iT.q)((0, zT.createElement)(zT.Fragment, null, (0, zT.createElement)(VT), (0, zT.createElement)(AT, {
```

#### 2105. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18086-L18087` → after: `L17922-L17923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17922-L17923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17922-L17923) · [Before (L18086-L18087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18086-L18087)

```diff
-         LP: () => {
-           Dp.LP(), Ap.LP()
+         Cl: () => {
+           jT.Cl(), lT.Cl()
```

#### 2106. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18090` → after: `L17926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17926) · [Before (L18090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18090)

```diff
-           "luckyGearUpgrade" === pp && Ap.Ey(ip)
+           "luckyGearUpgrade" === TT && lT.pB(UT)
```

#### 2107. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18107` → after: `L17943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17943) · [Before (L18107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18107)

```diff
-   39642: (pp, ip, cp) => {
+   39574: (TT, UT, mT) => {
```

#### 2108. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18111` → after: `L17947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17947) · [Before (L18111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18111)

```diff
-     var Op = cp(34);
+     var WT = mT(31);
```

#### 2109. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18119` → after: `L17955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17955) · [Before (L18119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18119)

```diff
-           ip || "Workbench" !== op.getMetaInfo(xp).rootName || Op.m.GA("toggleMenu", "inventory|Workbench")
+           UT || "Workbench" !== zT.getMetaInfo(nT).rootName || WT.j.EZ("toggleMenu", "inventory|Workbench")
```

#### 2110. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18124` → after: `L17960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17960) · [Before (L18124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18124)

```diff
-   39649: (pp, ip, cp) => {
+   39582: (TT, UT, mT) => {
```

#### 2111. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18150` → after: `L17986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L17986) · [Before (L18150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18150)

```diff
-         LP: () => {
+         Cl: () => {
```

#### 2112. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18176` → after: `L18012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18012) · [Before (L18176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18176)

```diff
-   39655: (pp, ip, cp) => {
+   39589: (TT, UT, mT) => {
```

#### 2113. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18182-L18183` → after: `L18018-L18019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18018-L18019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18018-L18019) · [Before (L18182-L18183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18182-L18183)

```diff
-     var Ip = cp(62),
-       Sp = cp(36799),
+     var MT = mT(63),
+       gT = mT(36693),
```

#### 2114. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18185-L18188` → after: `L18021-L18024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18021-L18024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18021-L18024) · [Before (L18185-L18188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18185-L18188)

```diff
-       Lp = cp(1476),
-       Yp = cp(2012),
-       Dp = cp(1201),
-       Ap = cp(1049),
+       HT = mT(1567),
+       kT = mT(2104),
+       jT = mT(1288),
+       lT = mT(1126),
```

#### 2115. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18190-L18196` → after: `L18026-L18032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18026-L18032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18026-L18032) · [Before (L18190-L18196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18190-L18196)

```diff
-       Wp = cp(1650),
-       yp = cp(36791),
-       Up = cp(1060),
-       wp = cp(1941),
-       vp = cp(2007),
-       tp = cp(3523),
-       Hp = cp(1765);
+       pT = mT(1752),
+       BT = mT(36687),
+       ZT = mT(1135),
+       cT = mT(2034),
+       vT = mT(2095),
+       fT = mT(3518),
+       qT = mT(1863);
```

#### 2116. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18205` → after: `L18041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18041) · [Before (L18205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18205)

```diff
-     var jp = cp(34);
+     var OT = mT(31);
```

#### 2117. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18295` → after: `L18131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18131) · [Before (L18295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18295)

```diff
-       return null !== (ip = Mp.get(pp)) && void 0 !== ip ? ip : null
+       return null !== (UT = dT.get(TT)) && void 0 !== UT ? UT : null
```

#### 2118. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18359` → after: `L18195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18195) · [Before (L18359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18359)

```diff
-           this.placement.stop(), this.Yy(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
+           this.placement.stop(), this.Gp(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
```

#### 2119. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18361` → after: `L18197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18197) · [Before (L18361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18361)

```diff
-           this.placement.start(pp), (0, Sp.h)()
+           this.placement.start(TT), (0, gT.d)()
```

#### 2120. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18363` → after: `L18199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18199) · [Before (L18363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18363)

```diff
-           this.api.sendCommand(`${op} cancel`)
+           this.api.sendCommand(`${zT} cancel`)
```

#### 2121. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18371` → after: `L18207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18207) · [Before (L18371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18371)

```diff
-         this.pages = Xp(ip, cp), jp.m.GA(lp, this.pages, !0)
+         this.pages = aT(UT, mT), OT.j.EZ(yT, this.pages, !0)
```

#### 2122. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18375` → after: `L18211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18211) · [Before (L18375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18375)

```diff
-         this.openRequested = ip, this.LP()
+         this.openRequested = UT, this.Cl()
```

#### 2123. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18379` → after: `L18215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18215) · [Before (L18379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18379)

```diff
-         null === pp || xp.c.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, Wp.l)() || (0, Hp.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = pp, (0, Sp.t)()))
+         null === TT || nT.b.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, pT.l)() || (0, qT.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = TT, (0, gT.l)()))
```

#### 2124. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18382` → after: `L18218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18218) · [Before (L18382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18382)

```diff
-         this.reported.has(pp) || (this.reported.add(pp), this.api.sendCommand(`${op} report ${pp}`))
+         this.reported.has(TT) || (this.reported.add(TT), this.api.sendCommand(`${zT} report ${TT}`))
```

#### 2125. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18385` → after: `L18221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18221) · [Before (L18385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18385)

```diff
-     var Jp = cp(1112);
+     var IT = mT(1188);
```

#### 2126. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18392` → after: `L18228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18228) · [Before (L18392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18392)

```diff
-       const cp = (0, Lp.i)(lp, ip.getPages()),
+       const mT = (0, HT.j)(yT, UT.getPages()),
```

#### 2127. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18395` → after: `L18231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18231) · [Before (L18395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18395)

```diff
-         } = (0, xp.o)(["isTouchScreen"]),
+         } = (0, nT.h)(["isTouchScreen"]),
```

#### 2128. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18398` → after: `L18234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18234) · [Before (L18398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18398)

```diff
-         } = (0, Dp.H)(),
+         } = (0, jT.z)(),
```

#### 2129. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18400-L18402` → after: `L18236-L18238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18236-L18238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18236-L18238) · [Before (L18400-L18402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18400-L18402)

```diff
-       return (0, tp.b)((pp => null !== cp && pp.code === Bp && !pp.repeat && !(0, Hp.isTypingInInput)()), (pp => {
-         (0, Wp.v)(pp, !0, Sp.t)
-       })), null === cp ? null : (0, Jp.jsx)(yp.h, {
+       return (0, fT.c)((TT => null !== mT && TT.code === QT && !TT.repeat && !(0, qT.isTypingInInput)()), (TT => {
+         (0, pT.y)(TT, !0, gT.l)
+       })), null === mT ? null : (0, IT.jsx)(BT.d, {
```

#### 2130. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18412` → after: `L18248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18248) · [Before (L18412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18412)

```diff
-             onClick: Sp.t,
+             onClick: gT.l,
```

#### 2131. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18415` → after: `L18251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18251) · [Before (L18415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18415)

```diff
-               children: (0, Jp.jsx)(wp.d, {
+               children: (0, IT.jsx)(cT.b, {
```

#### 2132. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18419` → after: `L18255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18255) · [Before (L18419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18419)

```diff
-             }), op("plotsGame:journalButton"), !Op && (0, Jp.jsx)(vp.d, {
+             }), zT("plotsGame:journalButton"), !WT && (0, IT.jsx)(vT.c, {
```

#### 2133. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18422` → after: `L18258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18258) · [Before (L18422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18422)

```diff
-             }), "openJournal" === Yp.hint && (0, Jp.jsx)(Up.d, {
+             }), "openJournal" === kT.hint && (0, IT.jsx)(ZT.c, {
```

#### 2134. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18430` → after: `L18266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18266) · [Before (L18430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18430)

```diff
-     var Tp = cp(9338);
+     var FT = mT(9330);
```

#### 2135. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18461` → after: `L18297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18297) · [Before (L18461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18461)

```diff
-         return `r${pp}|m${Number(ip)}`
+         return `r${TT}|m${Number(UT)}`
```

#### 2136. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18495` → after: `L18331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18331) · [Before (L18495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18495)

```diff
-         const [, Wp, yp] = null !== (op = ap.exec(Ap)) && void 0 !== op ? op : [];
+         const [, pT, BT] = null !== (zT = CT.exec(lT)) && void 0 !== zT ? zT : [];
```

#### 2137. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18498` → after: `L18334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18334) · [Before (L18498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18498)

```diff
-           Pp = null !== (Up = null === (wp = Ip[`${Dp}|meta|${[hp.split("").filter(((pp,ip)=>Wp.split("").some((pp=>{const cp=hp.indexOf(pp);return((Op?3-cp:cp)+Sp)%4===ip})))).join(""),yp].filter(Boolean).join("|")}`]) || void 0 === wp ? void 0 : wp.id) && void 0 !== Up ? Up : x … [truncated]
+           LT = null !== (ZT = null === (cT = MT[`${jT}|meta|${[uT.split("").filter(((TT,UT)=>pT.split("").some((TT=>{const mT=uT.indexOf(TT);return((WT?3-mT:mT)+gT)%4===UT})))).join(""),BT].filter(Boolean).join("|")}`]) || void 0 === cT ? void 0 : cT.id) && void 0 !== ZT ? ZT : n … [truncated]
```

#### 2138. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18503` → after: `L18339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18339) · [Before (L18503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18503)

```diff
-           let ip = Ap.replace(`rot${Yp}`, `rot${pp}`);
+           let UT = lT.replace(`rot${kT}`, `rot${TT}`);
```

#### 2139. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18508` → after: `L18344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18344) · [Before (L18508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18508)

```diff
-             ip = `${op[1]}|${pp.join("")}`
+             UT = `${zT[1]}|${TT.join("")}`
```

#### 2140. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18510-L18511` → after: `L18346-L18347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18346-L18347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18346-L18347) · [Before (L18510-L18511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18510-L18511)

```diff
-           const Sp = `${Dp}|${ip}`;
-           if (Pp = null !== (vp = null === (tp = Ip[Sp]) || void 0 === tp ? void 0 : tp.id) && void 0 !== vp ? vp : null, null === Pp) {
+           const gT = `${jT}|${UT}`;
+           if (LT = null !== (vT = null === (fT = MT[gT]) || void 0 === fT ? void 0 : fT.id) && void 0 !== vT ? vT : null, null === LT) {
```

#### 2141. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18525-L18526` → after: `L18361-L18362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18361-L18362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18361-L18362) · [Before (L18525-L18526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18525-L18526)

```diff
-       const Ip = op ? ip : pp;
-       return null === Op ? Ip : Op - Ip
+       const MT = zT ? UT : TT;
+       return null === WT ? MT : WT - MT
```

#### 2142. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18534-L18535` → after: `L18370-L18371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18370-L18371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18370-L18371) · [Before (L18534-L18535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18534-L18535)

```diff
-       const Ip = op ? pp : ip;
-       return null === Op ? Ip : Op - Ip
+       const MT = zT ? TT : UT;
+       return null === WT ? MT : WT - MT
```

#### 2143. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18602` → after: `L18438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18438) · [Before (L18602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18602)

```diff
-       const cp = `${pp}|${ip}`;
+       const mT = `${TT}|${UT}`;
```

#### 2144. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18626` → after: `L18462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18462) · [Before (L18626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18626)

```diff
-               throw new Error(`Invalid rotation: ${pp}`)
+               throw new Error(`Invalid rotation: ${TT}`)
```

#### 2145. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18633` → after: `L18469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18469) · [Before (L18633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18633)

```diff
-         }(ip, Lp, Yp), Ap = Fp.for(Tp.e), Pp = Ip.map((pp => (0, Tp.d)(Ap.turnBlockId((0, Tp.f)(pp), ip, !1)))), Wp = [];
+         }(UT, HT, kT), lT = KT.for(FT.g), LT = MT.map((TT => (0, FT.e)(lT.turnBlockId((0, FT.j)(TT), UT, !1)))), pT = [];
```

#### 2146. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18667` → after: `L18503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18503) · [Before (L18667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18667)

```diff
-             Op[ip[1]] = (null !== (cp = Op[ip[1]]) && void 0 !== cp ? cp : 0) + 1
+             WT[UT[1]] = (null !== (mT = WT[UT[1]]) && void 0 !== mT ? mT : 0) + 1
```

#### 2147. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18688` → after: `L18524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18524) · [Before (L18688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18688)

```diff
-         this.shown = pp, this.topOpen = 0, null === pp && this.GA(null)
+         this.shown = TT, this.topOpen = 0, null === TT && this.EZ(null)
```

#### 2148. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18692` → after: `L18528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18528) · [Before (L18692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18692)

```diff
-         null !== Op && (pp >= ip && (this.topOpen = cp), this.GA(Vp(Op.id, ip - Op.y, pp >= ip ? cp : this.topOpen + cp)))
+         null !== WT && (TT >= UT && (this.topOpen = mT), this.EZ(AT(WT.id, UT - WT.y, TT >= UT ? mT : this.topOpen + mT)))
```

#### 2149. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18696` → after: `L18532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18532) · [Before (L18696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18696)

```diff
-         (null === pp || void 0 === pp ? void 0 : pp.id) === (null === ip || void 0 === ip ? void 0 : ip.id) && (null === pp || void 0 === pp ? void 0 : pp.filled) === (null === ip || void 0 === ip ? void 0 : ip.filled) && (null === pp || void 0 === pp ? void 0 : pp.total) === (nu … [truncated]
+         (null === TT || void 0 === TT ? void 0 : TT.id) === (null === UT || void 0 === UT ? void 0 : UT.id) && (null === TT || void 0 === TT ? void 0 : TT.filled) === (null === UT || void 0 === UT ? void 0 : UT.filled) && (null === TT || void 0 === TT ? void 0 : TT.total) === (nu … [truncated]
```

#### 2150. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18710` → after: `L18546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18546) · [Before (L18710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18710)

```diff
-         this.plot = pp, jp.m.GA(ci, pp, !0)
+         this.plot = TT, OT.j.EZ(TU, TT, !0)
```

#### 2151. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18716` → after: `L18552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18552) · [Before (L18716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18716)

```diff
-         this.guide = pp, jp.m.GA(Oi, pp, !0)
+         this.guide = TT, OT.j.EZ(UU, TT, !0)
```

#### 2152. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18719` → after: `L18555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18555) · [Before (L18719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18719)

```diff
-         jp.m.GA(oi, void 0, !0)
+         OT.j.EZ(mU, void 0, !0)
```

#### 2153. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L18722-L18725` → after: `L18558-L18561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R18558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L18558-L18561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L18558-L18561) · [Before (L18722-L18725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L18722-L18725)

```diff
-     var Si = cp(1295),
-       xi = cp(38756),
-       Li = cp(37084),
-       Yi = cp(1502);
+     var zU = mT(1376),
+       MU = mT(38676),
+       gU = mT(36974),
+       nU = mT(1591);
```
