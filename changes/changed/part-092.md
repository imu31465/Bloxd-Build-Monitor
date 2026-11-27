# Changed — Bundle Modifications Report (Part 092 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `92 / 153` (**410** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 091](part-091.md) · [Part 093 →](part-093.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (4689 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 2365. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17786-L17788` → after: `L17205-L17207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17205-L17207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17205-L17207) · [Before (L17786-L17788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17786-L17788)

```diff
-         await (0, pO.n)(`lifeform ${BB} model`), DB.addAllToScene();
-         const QB = (0, YO.d)(DB, YB);
-         if (!QB) return DB.dispose(), console.error(`Corrupt pre-reconstructed model for ${OB} (no __root__) - falling back to runtime reconstruction.`), null;
+         await (0, fi.o)(`lifeform ${ee} model`), be.addAllToScene();
+         const Me = (0, yi.k)(be, ye);
+         if (!Me) return be.dispose(), console.error(`Corrupt pre-reconstructed model for ${ie} (no __root__) - falling back to runtime reconstruction.`), null;
```

#### 2366. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17792` → after: `L17211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17211) · [Before (L17792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17792)

```diff
-         const GB = await (0, OO.g)("", OB, {
+         const He = await (0, ii.e)("", ie, {
```

#### 2367. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17795` → after: `L17214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17214) · [Before (L17795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17795)

```diff
-         await (0, pO.n)(`lifeform ${BB} model`), mB = KB ? YO.c.reconstructModel(GB, KB.reconstructionSchema, OB, PB) : {
+         await (0, fi.o)(`lifeform ${ee} model`), Ae = De ? yi.i.reconstructModel(He, De.reconstructionSchema, ie, Re) : {
```

#### 2368. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17800-L17801` → after: `L17219-L17220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17219-L17220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17219-L17220) · [Before (L17800-L17801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17800-L17801)

```diff
-       await (0, pO.n)(`lifeform ${BB} meshes`);
-       const IB = (0, cB.g)(),
+       await (0, fi.o)(`lifeform ${ee} meshes`);
+       const Ye = (0, me.h)(),
```

#### 2369. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17803` → after: `L17222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17222) · [Before (L17803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17803)

```diff
-           UP: FB
+           PR: Ve
```

#### 2370. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17805-L17806` → after: `L17224-L17225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17224-L17225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17224-L17225) · [Before (L17805-L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17805-L17806)

```diff
-         iB = FB.kF,
-         hB = QB || !FB.Dq;
+         ae = Ve.vx,
+         le = Me || !Ve.pT;
```

#### 2371. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17809-L17810` → after: `L17228-L17229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17228-L17229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17228-L17229) · [Before (L17809-L17810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17809-L17810)

```diff
-         const BB = (0, TB.j)(DB) ? fB : null !== (aB = null !== lB && void 0 !== lB && lB.includes(DB.name) ? UB : null) && void 0 !== aB ? aB : nB;
-         BB && hB && (QB ? OB.UDB(DB, !1) : FB.YL(DB)), (0, XB.u)(DB) || (0, XB.D)(DB, 1 / 512), DB.mF(), DB.material = BB, DB.sideOrientation = QO.d.CounterClockWiseSideOrientation, (0, oO.e)(DB) ? null !== pB && void 0 !== pB && pB.includes(DB.name) && (DB.noSunShadowVertices =  … [truncated]
+         const ee = (0, je.i)(be) ? te : null !== (Se = null !== qe && void 0 !== qe && qe.includes(be.name) ? We : null) && void 0 !== Se ? Se : de;
+         ee && le && (Me ? ie.Nbe(be, !1) : Ve.dL(be)), (0, Ce.t)(be) || (0, Ce.C)(be, 1 / 512), be.RL(), be.material = ee, be.sideOrientation = Mi.e.CounterClockWiseSideOrientation, (0, Ki.f)(be) ? null !== fe && void 0 !== fe && fe.includes(be.name) && (be.noSunShadowVertices =  … [truncated]
```

#### 2372. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17813` → after: `L17232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17232) · [Before (L17813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17813)

```diff
-         ((0, oO.e)(DB) ? !DB.material : !DB.JF().meshes.includes(DB)) && 0 === DB.getChildMeshes().length && DB.Zk(!1)
+         ((0, Ki.f)(be) ? !be.material : !be.Xx().meshes.includes(be)) && 0 === be.getChildMeshes().length && be.JY(!1)
```

#### 2373. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17819` → after: `L17238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17238) · [Before (L17819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17819)

```diff
-           "ArmLeftMesh" === qB.name && qB.translate(DB.Xp.LeftReadOnly, BB), "ArmRightMesh" === qB.name && qB.translate(DB.Xp.RightReadOnly, BB), "HeadMesh" === qB.name && qB.translate(DB.Xp.DownReadOnly, BB), "LegLeftMesh" === qB.name && qB.translate(DB.Xp.UpReadOnly, BB), "LegR … [truncated]
+           "ArmLeftMesh" === Te.name && Te.translate(be.rf.LeftReadOnly, ee), "ArmRightMesh" === Te.name && Te.translate(be.rf.RightReadOnly, ee), "HeadMesh" === Te.name && Te.translate(be.rf.DownReadOnly, ee), "LegLeftMesh" === Te.name && Te.translate(be.rf.UpReadOnly, ee), "LegR … [truncated]
```

#### 2374. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17826` → after: `L17245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17245) · [Before (L17826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17826)

```diff
-         for (const DB of CB) DB.material && FB.YL(DB);
+         for (const be of Ie) be.material && Ve.dL(be);
```

#### 2375. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17828-L17829` → after: `L17247-L17248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17247-L17248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17247-L17248) · [Before (L17828-L17829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17828-L17829)

```diff
-         const BB = (0, TB.q)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
-           GB = await (0, OO.e)("", OB, {
+         const ee = (0, je.m)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
+           He = await (0, ii.c)("", ie, {
```

#### 2376. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17835-L17837` → after: `L17254-L17256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17254-L17256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17254-L17256) · [Before (L17835-L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17835-L17837)

```diff
-           } = OB.Gw();
-           if (DB.Xp.DistanceSquared(BB.minimum, BB.maximum)) {
-             (0, XB.u)(OB) || (0, XB.D)(OB, 1 / 128), OB.name = "Cape", OB.SP = OB.SP.scale(.12), OB.bq = !1, eB = OB;
+           } = ie.WC();
+           if (be.rf.DistanceSquared(ee.minimum, ee.maximum)) {
+             (0, Ce.t)(ie) || (0, Ce.C)(ie, 1 / 128), ie.name = "Cape", ie.wR = ie.wR.scale(.12), ie.Mp = !1, ne = ie;
```

#### 2377. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17844` → after: `L17263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17263) · [Before (L17844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17844)

```diff
-           eq: OB,
+           yp: ie,
```

#### 2378. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17850` → after: `L17269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17269) · [Before (L17850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17850)

```diff
-           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (YB = oB.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== YB ? YB : {}).map((OB => {
+           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (ye = Ke.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== ye ? ye : {}).map((ie => {
```

#### 2379. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17853` → after: `L17272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17272) · [Before (L17853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17853)

```diff
-               numTexturesInAtlas: "default" === YB.numTexturesInAtlas ? "Player" === jB ? JB : AB.p[BB].length : YB.numTexturesInAtlas
+               numTexturesInAtlas: "default" === ye.numTexturesInAtlas ? "Player" === Ue ? Je : Ee.m[ee].length : ye.numTexturesInAtlas
```

#### 2380. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17857` → after: `L17276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17276) · [Before (L17857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17857)

```diff
-         JO = QB ? `${BB}Preview` : BB;
+         Ji = Me ? `${ee}Preview` : ee;
```

#### 2381. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17859` → after: `L17278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17278) · [Before (L17859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17859)

```diff
-         CP: 32,
+         bk: 32,
```

#### 2382. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17883` → after: `L17302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17302) · [Before (L17883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17883)

```diff
-       }), iB.setPickableForType(JO, !QB), iB.setCullableForType(JO, !QB), (0, GO.v)(bB), {
+       }), ae.setPickableForType(Ji, !Me), ae.setCullableForType(Ji, !Me), (0, Hi.t)(se), {
```

#### 2383. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17891-L17893` → after: `L17310-L17312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17310-L17312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17310-L17312) · [Before (L17891-L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17891-L17893)

```diff
-       return (0, BO.c)({
-         name: `${BB}SpriteSheet${QB?"":"WithVisibleBackFaces"}`,
-         eq: OB,
+       return (0, ei.b)({
+         name: `${ee}SpriteSheet${Me?"":"WithVisibleBackFaces"}`,
+         yp: ie,
```

#### 2384. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17901` → after: `L17320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17320) · [Before (L17901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17901)

```diff
-             samplingMode: jO.g.nearest
+             samplingMode: Ui.h.nearest
```

#### 2385. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17912` → after: `L17331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17331) · [Before (L17912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17912)

```diff
-           (0, CB.e)(BB, YB, YB, DB), (0, yO.w)(BB, HB.c), (0, vB.e)(BB, (0, cB.g)().UP), (0, tB.d)(BB), (0, yO.K)(BB)
+           (0, Ie.d)(ee, ye, ye, be), (0, Fi.u)(ee, he.d), (0, Ne.e)(ee, (0, me.h)().PR), (0, Qe.e)(ee), (0, Fi.I)(ee)
```

#### 2386. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17922-L17924` → after: `L17341-L17343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17341-L17343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17341-L17343) · [Before (L17922-L17924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17922-L17924)

```diff
-       const QB = (0, cB.g)().UP.kF,
-         oB = DB ? `${BB}Preview` : BB;
-       if (!QB.hasType(oB)) throw new Error(`Thin instance manager not set up for ${BB}`);
+       const Me = (0, me.h)().PR.vx,
+         Ke = be ? `${ee}Preview` : ee;
+       if (!Me.hasType(Ke)) throw new Error(`Thin instance manager not set up for ${ee}`);
```

#### 2387. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17926` → after: `L17345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17345) · [Before (L17926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17926)

```diff
-       GB && QB.Zk(jB, !0);
+       He && Me.JY(Ue, !0);
```

#### 2388. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17930` → after: `L17349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17349) · [Before (L17930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17930)

```diff
-       return QB.setGroupEnabled(jB, "armour", yB), yB && QB.setGroup(jB, "armour", "aArmourTint", 1, 1, 1, 0), qO[BB].meshApi.updateMeshOverlayColour(jB, new YB.e(0, 0, 0, 0)), qO[BB].meshApi.updateMeshLightLevels(jB, JO.d), QB.getScale(jB).scaleInPlace(OB), QB.setDirty(jB, 0), j … [truncated]
+       return Me.setGroupEnabled(Ue, "armour", Fe), Fe && Me.setGroup(Ue, "armour", "aArmourTint", 1, 1, 1, 0), Ti[ee].meshApi.updateMeshOverlayColour(Ue, new ye.e(0, 0, 0, 0)), Ti[ee].meshApi.updateMeshLightLevels(Ue, Ji.e), Me.getScale(Ue).scaleInPlace(ie), Me.setDirty(Ue, 0), U … [truncated]
```

#### 2389. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17936` → after: `L17355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17355) · [Before (L17936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17936)

```diff
-         DW: VB
+         sE: ge
```

#### 2390. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17939` → after: `L17358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17358) · [Before (L17939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17939)

```diff
-       } = (0, DO.b)(BB), KB = OB.UP.kF, uB = AO(BB), mB = KB.yDB(uB, 0);
+       } = (0, bi.b)(ee), De = ie.PR.vx, Pe = gi(ee), Ae = De.Abe(Pe, 0);
```

#### 2391. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17941` → after: `L17360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17360) · [Before (L17941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17941)

```diff
-       "humanoidMesh" === dB.type ? (LB = SB.p, gB = SB.l) : (LB = SB.j, gB = SB.f), VB.RL(GB, VB.names.moveState), VB.RL(GB, "genericLifeformState"), VB.RL(GB, "genericLifeform", {
+       "humanoidMesh" === we.type ? (ce = Oe.p, xe = Oe.m) : (ce = Oe.h, xe = Oe.d), ge.uL(He, ge.names.moveState), ge.uL(He, "genericLifeformState"), ge.uL(He, "genericLifeform", {
```

#### 2392. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17943-L17945` → after: `L17362-L17364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17362-L17364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17362-L17364) · [Before (L17943-L17945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17943-L17945)

```diff
-           uF: uB,
-           HYB: mB
-         }), VB.RL(GB, "cW"), VB.RL(GB, "meshRotation", {
+           Ix: Pe,
+           Xbe: Ae
+         }), ge.uL(He, "OW"), ge.uL(He, "meshRotation", {
```

#### 2393. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17951` → after: `L17370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17370) · [Before (L17951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17951)

```diff
-           modelYRotationOffset: null !== (DB = dB.modelYRotationOffset) && void 0 !== DB ? DB : 0
+           modelYRotationOffset: null !== (be = we.modelYRotationOffset) && void 0 !== be ? be : 0
```

#### 2394. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17954` → after: `L17373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17373) · [Before (L17954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17954)

```diff
-           const GB = BB.DW.yYB(OB),
+           const He = ee.sE.Aye(ie),
```

#### 2395. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17956` → after: `L17375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17375) · [Before (L17956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17956)

```diff
-             DB = BB.xR.showPlayersInUnloadedChunks || !1;
+             be = ee.uE.showPlayersInUnloadedChunks || !1;
```

#### 2396. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17960` → after: `L17379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17379) · [Before (L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17960)

```diff
-           BB.DW.RL(OB, "inLoadedChunk", {
+           ee.sE.uL(ie, "inLoadedChunk", {
```

#### 2397. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17962` → after: `L17381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17381) · [Before (L17962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17962)

```diff
-               QB = DB, oB || (YB.setBooleanType("inLoadedChunk", DB), OB !== BB.EX && (GB.isLifeformMeshEnabled = DB))
+               Me = be, Ke || (ye.setBooleanType("inLoadedChunk", be), ie !== ee.gC && (He.isLifeformMeshEnabled = be))
```

#### 2398. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17965-L17966` → after: `L17384-L17385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17384-L17385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17384-L17385) · [Before (L17965-L17966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17965-L17966)

```diff
-           const jB = FB.e.subscribe("showPlayersInUnloadedChunks", (DB => {
-               oB = DB, oB ? (YB.setBooleanType("inLoadedChunk", !0), GB.isLifeformMeshEnabled = !0) : (YB.setBooleanType("inLoadedChunk", QB), OB !== BB.EX && (GB.isLifeformMeshEnabled = QB))
+           const Ue = Ve.c.subscribe("showPlayersInUnloadedChunks", (be => {
+               Ke = be, Ke ? (ye.setBooleanType("inLoadedChunk", !0), He.isLifeformMeshEnabled = !0) : (ye.setBooleanType("inLoadedChunk", Me), ie !== ee.gC && (He.isLifeformMeshEnabled = Me))
```

#### 2399. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17968-L17969` → after: `L17387-L17388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17387-L17388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17387-L17388) · [Before (L17968-L17969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17968-L17969)

```diff
-             yB = iB.o.subscribe(`lifeformDisposed|${OB}`, (() => {
-               jB(), iB.o.unsubscribe(yB)
+             Fe = ae.h.subscribe(`lifeformDisposed|${ie}`, (() => {
+               Ue(), ae.h.unsubscribe(Fe)
```

#### 2400. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17971-L17973` → after: `L17390-L17392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17390-L17392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17390-L17392) · [Before (L17971-L17973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17971-L17973)

```diff
-         }(OB, GB), VB.RL(GB, "updateWalkingState", {
-           uF: uB,
-           HYB: mB,
+         }(ie, He), ge.uL(He, "updateWalkingState", {
+           Ix: Pe,
+           Xbe: Ae,
```

#### 2401. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17975-L17984` → after: `L17394-L17403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17394-L17403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17394-L17403) · [Before (L17975-L17984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17975-L17984)

```diff
-         }), VB.RL(GB, VB.names[dB.type], {
-           uF: uB,
-           HYB: mB,
-           heldItemPositionParams: null !== (QB = dB.heldItemPositionParams) && void 0 !== QB ? QB : {},
-           maxWalkingAngleOverride: null !== (PB = dB.walkingLegSwingAngle) && void 0 !== PB ? PB : null
-         }), VB.RL(GB, "animator", {
-           uF: uB,
-           HYB: mB,
-           modelLifeformType: null !== (zB = dB.lifeformTypeForModelOverride) && void 0 !== zB ? zB : BB
-         }), lO.e.hasAnimation(BB) && VB.RL(GB, "rigAnimation", {
+         }), ge.uL(He, ge.names[we.type], {
+           Ix: Pe,
+           Xbe: Ae,
+           heldItemPositionParams: null !== (Me = we.heldItemPositionParams) && void 0 !== Me ? Me : {},
+           maxWalkingAngleOverride: null !== (Re = we.walkingLegSwingAngle) && void 0 !== Re ? Re : null
+         }), ge.uL(He, "animator", {
+           Ix: Pe,
+           Xbe: Ae,
+           modelLifeformType: null !== (ke = we.lifeformTypeForModelOverride) && void 0 !== ke ? ke : ee
+         }), qi.f.hasAnimation(ee) && ge.uL(He, "rigAnimation", {
```

#### 2402. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17986` → after: `L17405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17405) · [Before (L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17986)

```diff
-           uF: uB
+           Ix: Pe
```

#### 2403. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17990-L17991` → after: `L17409-L17410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17409-L17410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17409-L17410) · [Before (L17990-L17991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17990-L17991)

```diff
-             DW: YB
-           } = OB, DB = (0, DO.b)(BB), QB = YB.yYB(GB), yB = YB.getState(GB, YB.names.KP);
+             sE: ye
+           } = ie, be = (0, bi.b)(ee), Me = ye.Aye(He), Fe = ye.getState(He, ye.names.aR);
```

#### 2404. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17994` → after: `L17413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17413) · [Before (L17994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17994)

```diff
-               QB.meshEnabledCombinator.setBooleanType(BB, OB), YB.getState(GB, YB.names.KP).enabledCombinator.setBooleanType(BB, OB)
+               Me.meshEnabledCombinator.setBooleanType(ee, ie), ye.getState(He, ye.names.aR).enabledCombinator.setBooleanType(ee, ie)
```

#### 2405. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17999` → after: `L17418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17418) · [Before (L17999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L17999)

```diff
-                 OB.UP.kF.setVisibility(QB.uF, BB)
+                 ie.PR.vx.setVisibility(Me.Ix, ee)
```

#### 2406. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18001` → after: `L17420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17420) · [Before (L18001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18001)

```diff
-               const jB = (0, cB.d)().getFollowingEntities(GB);
+               const Ue = (0, me.e)().getFollowingEntities(He);
```

#### 2407. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18003` → after: `L17422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17422) · [Before (L18003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18003)

```diff
-                 const DB = YB.iGB(GB);
+                 const be = ye.rHe(He);
```

#### 2408. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18006` → after: `L17425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17425) · [Before (L18006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18006)

```diff
-                     uF: GB
+                     Ix: He
```

#### 2409. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18009-L18010` → after: `L17428-L17429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17428-L17429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17428-L17429) · [Before (L18009-L18010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18009-L18010)

```diff
-                     OB.UP.kF.Zk(GB, BB)
-                   } else DB.mesh.name !== kB.e.SKYBOX && (DB.mesh.isVisible = BB)
+                     ie.PR.vx.JY(He, ee)
+                   } else be.mesh.name !== Ze.c.SKYBOX && (be.mesh.isVisible = ee)
```

#### 2410. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18013` → after: `L17432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17432) · [Before (L18013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18013)

```diff
-               YB.getState(GB, YB.names.KP).enabledCombinator.setBooleanType("visible", BB)
+               ye.getState(He, ye.names.aR).enabledCombinator.setBooleanType("visible", ee)
```

#### 2411. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18016-L18017` → after: `L17435-L17436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17435-L17436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17435-L17436) · [Before (L18016-L18017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18016-L18017)

```diff
-               const QB = (0, jB.c)("meshScaling", YB),
-                 yB = OB.DW.getState((0, oB.b)(GB), DB.meshMetadata.type);
+               const Me = (0, Ue.e)("meshScaling", ye),
+                 Fe = ie.sE.getState((0, Ke.b)(He), be.meshMetadata.type);
```

#### 2412. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18019` → after: `L17438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17438) · [Before (L18019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18019)

```diff
-               const JB = (0, cB.g)().UP.kF,
+               const Je = (0, me.h)().PR.vx,
```

#### 2413. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18021` → after: `L17440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17440) · [Before (L18021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18021)

```diff
-                   uF: MB
+                   Ix: oe
```

#### 2414. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18024` → after: `L17443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17443) · [Before (L18024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18024)

```diff
-               const PB = OB.DW.getState((0, oB.b)(GB), "animator"),
+               const Re = ie.sE.getState((0, Ke.b)(He), "animator"),
```

#### 2415. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18026` → after: `L17445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17445) · [Before (L18026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18026)

```diff
-                 pB = zB ? lB.m : JB.getNodeNames(MB);
+                 fe = ke ? qe.k : Je.getNodeNames(oe);
```

#### 2416. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18031` → after: `L17450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17450) · [Before (L18031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18031)

```diff
-                   GB = null !== (qB = QB[BB]) && void 0 !== qB ? qB : [1, 1, 1];
+                   He = null !== (Te = Me[ee]) && void 0 !== Te ? Te : [1, 1, 1];
```

#### 2417. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18035-L18038` → after: `L17454-L17457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17454-L17457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17454-L17457) · [Before (L18035-L18038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18035-L18038)

```diff
-             zB = OB.FX[OB.EX][GB];
-           zB && (JB("notDead", (0, jB.c)("_isAlive", zB._isAlive)), JB("canSeeSetting", (0, jB.c)("canSee", zB.canSee)), MB(!zB._invisibleEffect), PB(zB.meshScaling));
-           const pB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|_isAlive`, (BB => {
-               JB("notDead", (0, jB.c)("_isAlive", BB))
+             ke = ie.zC[ie.gC][He];
+           ke && (Je("notDead", (0, Ue.e)("_isAlive", ke._isAlive)), Je("canSeeSetting", (0, Ue.e)("canSee", ke.canSee)), oe(!ke._invisibleEffect), Re(ke.meshScaling));
+           const fe = ae.h.subscribe(`otherEntitySettingsClientifiedEId|${He}|_isAlive`, (ee => {
+               Je("notDead", (0, Ue.e)("_isAlive", ee))
```

#### 2418. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18040-L18041` → after: `L17459-L17460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17459-L17460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17459-L17460) · [Before (L18040-L18041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18040-L18041)

```diff
-             qB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|canSee`, (BB => {
-               JB("canSeeSetting", (0, jB.c)("canSee", BB))
+             Te = ae.h.subscribe(`otherEntitySettingsClientifiedEId|${He}|canSee`, (ee => {
+               Je("canSeeSetting", (0, Ue.e)("canSee", ee))
```

#### 2419. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18043` → after: `L17462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17462) · [Before (L18043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18043)

```diff
-             ZB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|_invisibleEffect`, (BB => {
+             pe = ae.h.subscribe(`otherEntitySettingsClientifiedEId|${He}|_invisibleEffect`, (ee => {
```

#### 2420. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18046` → after: `L17465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17465) · [Before (L18046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18046)

```diff
-             NB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|meshScaling`, (BB => {
+             Xe = ae.h.subscribe(`otherEntitySettingsClientifiedEId|${He}|meshScaling`, (ee => {
```

#### 2421. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18050` → after: `L17469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17469) · [Before (L18050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18050)

```diff
-           if (GB === OB.EX) {
+           if (He === ie.gC) {
```

#### 2422. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18054-L18056` → after: `L17473-L17475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17473-L17475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17473-L17475) · [Before (L18054-L18056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18054-L18056)

```diff
-             RB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${OB.EX}|_isAlive`, (GB => {
-               const YB = OB.DW.mC(OB.EX);
-               if ((0, jB.c)("_isAlive", GB)) {
+             ze = ae.h.subscribe(`otherEntitySettingsClientifiedEId|${ie.gC}|_isAlive`, (He => {
+               const ye = ie.sE.XN(ie.gC);
+               if ((0, Ue.e)("_isAlive", He)) {
```

#### 2423. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18059` → after: `L17478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17478) · [Before (L18059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18059)

```diff
-               } else BB.gravityMultiplier = YB.gravityMultiplier, YB.gravityMultiplier = 0, YB.lZ[0] = 0, YB.lZ[1] = 0, YB.lZ[2] = 0, YB.eT[0] = 0, YB.eT[1] = 0, YB.eT[2] = 0, YB.YC[0] = 0, YB.YC[1] = 0, YB.YC[2] = 0
+               } else ee.gravityMultiplier = ye.gravityMultiplier, ye.gravityMultiplier = 0, ye.Op[0] = 0, ye.Op[1] = 0, ye.Op[2] = 0, ye.JI[0] = 0, ye.JI[1] = 0, ye.JI[2] = 0, ye.pI[0] = 0, ye.pI[1] = 0, ye.pI[2] = 0
```

#### 2424. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18062-L18063` → after: `L17481-L17482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17481-L17482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17481-L17482) · [Before (L18062-L18063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18062-L18063)

```diff
-           const WB = iB.o.subscribe(`lifeformDisposed|${GB}`, (() => {
-             iB.o.unsubscribe(pB), iB.o.unsubscribe(qB), iB.o.unsubscribe(ZB), iB.o.unsubscribe(NB), iB.o.unsubscribe(RB), iB.o.unsubscribe(WB)
+           const Be = ae.h.subscribe(`lifeformDisposed|${He}`, (() => {
+             ae.h.unsubscribe(fe), ae.h.unsubscribe(Te), ae.h.unsubscribe(pe), ae.h.unsubscribe(Xe), ae.h.unsubscribe(ze), ae.h.unsubscribe(Be)
```

#### 2425. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18065-L18066` → after: `L17484-L17485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17484-L17485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17484-L17485) · [Before (L18065-L18066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18065-L18066)

```diff
-         }(BB, OB, GB), VB.RL(GB, VB.names.mesh, {
-           WyB: "humanoidMesh" === dB.type ? BB => {
+         }(ee, ie, He), ge.uL(He, ge.names.mesh, {
+           lFe: "humanoidMesh" === we.type ? ee => {
```

#### 2426. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18068` → after: `L17487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17487) · [Before (L18068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18068)

```diff
-             const DB = VB.EGB(GB),
+             const be = ge.Uye(He),
```

#### 2427. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18072` → after: `L17491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17491) · [Before (L18072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18072)

```diff
-               oB = null !== (YB = DB.ridingVehicleEId) && void 0 !== YB ? YB : null;
+               Ke = null !== (ye = be.ridingVehicleEId) && void 0 !== ye ? ye : null;
```

#### 2428. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18075` → after: `L17494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17494) · [Before (L18075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18075)

```diff
-               const YB = OB.bloxd.getEntityHeading(null !== oB && void 0 !== oB ? oB : GB, !0);
+               const ye = ie.bloxd.getEntityHeading(null !== Ke && void 0 !== Ke ? Ke : He, !0);
```

#### 2429. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18078` → after: `L17497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17497) · [Before (L18078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18078)

```diff
-             null !== oB && (0, eB.c)(OB, oB, BB)
+             null !== Ke && (0, ne.d)(ie, Ke, ee)
```

#### 2430. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18080-L18081` → after: `L17499-L17500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17499-L17500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17499-L17500) · [Before (L18080-L18081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18080-L18081)

```diff
-           uF: uB,
-           HYB: mB,
+           Ix: Pe,
+           Xbe: Ae,
```

#### 2431. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18083-L18087` → after: `L17502-L17506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17502-L17506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17502-L17506) · [Before (L18083-L18087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18083-L18087)

```diff
-           bq: !1,
-           sYB: !1
-         }), VB.RL(GB, VB.names.cape);
-       const rB = (0, MB.c)(OB).getFloating((0, oB.b)(GB));
-       VB.RL(GB, "floating", rB ? {
+           Mp: !1,
+           Bbe: !1
+         }), ge.uL(He, ge.names.cape);
+       const Le = (0, oe.d)(ie).getFloating((0, Ke.b)(He));
+       ge.uL(He, "floating", Le ? {
```

#### 2432. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18089` → after: `L17508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17508) · [Before (L18089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18089)

```diff
-         DB: rB.DB
+         Me: Le.Me
```

#### 2433. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18091-L18093` → after: `L17510-L17512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17510-L17512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17510-L17512) · [Before (L18091-L18093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18091-L18093)

```diff
-       const XB = VB.yYB(GB).meshEnabledCombinator.getTotalBooleanVal();
-       if (KB.Zk(uB, XB), KB.setEntityId(uB, GB), KB.setPickable(uB, (0, zO.l)(GB)), mO(BB)) {
-         VB.RL(GB, VB.names.meshAttachments);
+       const Ce = ge.Aye(He).meshEnabledCombinator.getTotalBooleanVal();
+       if (De.JY(Pe, Ce), De.setEntityId(Pe, He), De.setPickable(Pe, (0, ki.h)(He)), Yi(ee)) {
+         ge.uL(He, ge.names.meshAttachments);
```

#### 2434. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18096` → after: `L17515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17515) · [Before (L18096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18096)

```diff
-           for (const OB of lB.c) {
+           for (const ie of qe.b) {
```

#### 2435. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18101` → after: `L17520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17520) · [Before (L18101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18101)

```diff
-       if ((0, JB.l)(OB, (0, oB.b)(GB)), "Player" === BB) {
+       if ((0, Je.g)(ie, (0, Ke.b)(He)), "Player" === ee) {
```

#### 2436. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18103` → after: `L17522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17522) · [Before (L18103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18103)

```diff
-         if (yB.d[GB]) {
+         if (Fe.b[He]) {
```

#### 2437. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18106` → after: `L17525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17525) · [Before (L18106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18106)

```diff
-           for (const BB of nB.t) yB.d[GB][BB] && YB.updatePlayerCosmetic(OB, uB, BB, yB.d[GB][BB])
+           for (const ee of de.v) Fe.b[He][ee] && ye.updatePlayerCosmetic(ie, Pe, ee, Fe.b[He][ee])
```

#### 2438. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18108-L18109` → after: `L17527-L17528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17527-L17528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17527-L17528) · [Before (L18108-L18109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18108-L18109)

```diff
-         GB === OB.EX || null !== (wB = (0, cB.d)().client) && void 0 !== wB && wB.isReplayMode() || (VB.RL(GB, "proximityHide"), iB.o.tM(`otherPlayerTeleported|${GB}`, {
-           pos: OB.DW.pR(GB)
+         He === ie.gC || null !== (ve = (0, me.e)().client) && void 0 !== ve && ve.isReplayMode() || (ge.uL(He, "proximityHide"), ae.h.yR(`otherPlayerTeleported|${He}`, {
+           pos: ie.sE.pE(He)
```

#### 2439. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18112-L18113` → after: `L17531-L17532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17531-L17532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17531-L17532) · [Before (L18112-L18113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18112-L18113)

```diff
-       VB.getState(GB, VB.names.KP).size = UB.d, VB.RL(GB, "proximityFade", {
-         serverOpacity: null !== (pB = null === (qB = OB.FX[OB.EX][GB]) || void 0 === qB ? void 0 : qB.opacity) && void 0 !== pB ? pB : 1
+       ge.getState(He, ge.names.aR).size = We.c, ge.uL(He, "proximityFade", {
+         serverOpacity: null !== (fe = null === (Te = ie.zC[ie.gC][He]) || void 0 === Te ? void 0 : Te.opacity) && void 0 !== fe ? fe : 1
```

#### 2440. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18116-L18117` → after: `L17535-L17536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17535-L17536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17535-L17536) · [Before (L18116-L18117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18116-L18117)

```diff
-       GB === OB.EX && (EB = OB.QGB, iB.o.subscribe("initInfoReceived", (() => {
-         EB = OB.QGB
+       He === ie.gC && (ue = ie.dHe, ae.h.subscribe("initInfoReceived", (() => {
+         ue = ie.dHe
```

#### 2441. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18119` → after: `L17538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17538) · [Before (L18119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18119)

```diff
-       const hB = (0, cB.d)().E1(GB);
+       const le = (0, me.e)().v_(He);
```

#### 2442. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18121` → after: `L17540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17540) · [Before (L18121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18121)

```diff
-       const aB = iB.o.subscribe("otherEntitySettings|opacity", (BB => {
+       const Se = ae.h.subscribe("otherEntitySettings|opacity", (ee => {
```

#### 2443. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18127-L18128` → after: `L17546-L17547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17546-L17547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17546-L17547) · [Before (L18127-L18128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18127-L18128)

```diff
-           const QB = OB.DW.pYB(GB);
-           QB && (QB.serverOpacity = (0, jB.c)("opacity", DB))
+           const Me = ie.sE.Lye(He);
+           Me && (Me.serverOpacity = (0, Ue.e)("opacity", be))
```

#### 2444. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18130` → after: `L17549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17549) · [Before (L18130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18130)

```diff
-         TB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|_invincible`, (BB => {
+         je = ae.h.subscribe(`otherEntitySettingsClientifiedEId|${He}|_invincible`, (ee => {
```

#### 2445. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18135` → after: `L17554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17554) · [Before (L18135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18135)

```diff
-         !BB && VB.YGB(GB, "flashingMeshOverlay") && VB.dL(GB, "flashingMeshOverlay"), BB && !VB.YGB(GB, "flashingMeshOverlay") && VB.RL(GB, "flashingMeshOverlay")
+         !ee && ge.gHe(He, "flashingMeshOverlay") && ge.lL(He, "flashingMeshOverlay"), ee && !ge.gHe(He, "flashingMeshOverlay") && ge.uL(He, "flashingMeshOverlay")
```

#### 2446. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18137-L18138` → after: `L17556-L17557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17556-L17557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17556-L17557) · [Before (L18137-L18138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18137-L18138)

```diff
-       bB(null === (ZB = OB.FX[OB.EX][GB]) || void 0 === ZB ? void 0 : ZB._invincible);
-       const CB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|zIndex`, (BB => {
+       se(null === (pe = ie.zC[ie.gC][He]) || void 0 === pe ? void 0 : pe._invincible);
+       const Ie = ae.h.subscribe(`otherEntitySettingsClientifiedEId|${He}|zIndex`, (ee => {
```

#### 2447. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18141-L18142` → after: `L17560-L17561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17560-L17561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17560-L17561) · [Before (L18141-L18142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18141-L18142)

```diff
-       KB.setRenderingGroupId(uB, null !== (NB = null === (RB = OB.FX[OB.EX][GB]) || void 0 === RB ? void 0 : RB.zIndex) && void 0 !== NB ? NB : 0);
-       const HB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|overlayColour`, (BB => {
+       De.setRenderingGroupId(Pe, null !== (Xe = null === (ze = ie.zC[ie.gC][He]) || void 0 === ze ? void 0 : ze.zIndex) && void 0 !== Xe ? Xe : 0);
+       const he = ae.h.subscribe(`otherEntitySettingsClientifiedEId|${He}|overlayColour`, (ee => {
```

#### 2448. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18152` → after: `L17571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17571) · [Before (L18152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18152)

```diff
-         OB.DW.YYB(GB).overlayColourOverride = DB
+         ie.sE.Wye(He).overlayColourOverride = be
```

#### 2449. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18154-L18155` → after: `L17573-L17574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17573-L17574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17573-L17574) · [Before (L18154-L18155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18154-L18155)

```diff
-       vB(null !== (WB = null === (AB = OB.FX[OB.EX][GB]) || void 0 === AB ? void 0 : AB.overlayColour) && void 0 !== WB ? WB : null);
-       const sB = iB.o.subscribe(`entityScale|${GB}`, (YB => {
+       Ne(null !== (Be = null === (Ee = ie.zC[ie.gC][He]) || void 0 === Ee ? void 0 : Ee.overlayColour) && void 0 !== Be ? Be : null);
+       const Ge = ae.h.subscribe(`entityScale|${He}`, (ye => {
```

#### 2450. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18162` → after: `L17581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17581) · [Before (L18162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18162)

```diff
-           jB = BB.DW.getState((0, oB.b)(OB), QB.meshMetadata.type);
+           Ue = ee.sE.getState((0, Ke.b)(ie), Me.meshMetadata.type);
```

#### 2451. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18165` → after: `L17584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17584) · [Before (L18165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18165)

```diff
-           uF: yB
+           Ix: Fe
```

#### 2452. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18170` → after: `L17589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17589) · [Before (L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18170)

```diff
-         } = (0, UB.g)(YB, GB), MB = BB.UP.kF, PB = (0, oB.b)(OB);
+         } = (0, We.g)(ye, He), oe = ee.PR.vx, Re = (0, Ke.b)(ie);
```

#### 2453. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18173` → after: `L17592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17592) · [Before (L18173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18173)

```diff
-           const BB = MB.yDB(yB, 0).scale;
+           const ee = oe.Abe(Fe, 0).scale;
```

#### 2454. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18176-L18178` → after: `L17595-L17597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17595-L17597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17595-L17597) · [Before (L18176-L18178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18176-L18178)

```diff
-         const lB = YB * (null !== (DB = QB.modelScale) && void 0 !== DB ? DB : 1);
-         BB.DW.getState(PB, "animator").setNodeOwnScale(0, zB[0] * lB, zB[1] * lB, zB[2] * lB);
-         const pB = BB.DW.getState(PB, BB.DW.names.KP);
+         const qe = ye * (null !== (be = Me.modelScale) && void 0 !== be ? be : 1);
+         ee.sE.getState(Re, "animator").setNodeOwnScale(0, ke[0] * qe, ke[1] * qe, ke[2] * qe);
+         const fe = ee.sE.getState(Re, ee.sE.names.aR);
```

#### 2455. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18181-L18182` → after: `L17600-L17601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17600-L17601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17600-L17601) · [Before (L18181-L18182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18181-L18182)

```diff
-       const tB = iB.o.subscribe(`lifeformDisposed|${GB}`, (() => {
-         iB.o.unsubscribe(aB), iB.o.unsubscribe(TB), iB.o.unsubscribe(CB), iB.o.unsubscribe(HB), iB.o.unsubscribe(sB), iB.o.unsubscribe(tB), GB !== OB.EX && delete nO[GB]
+       const Qe = ae.h.subscribe(`lifeformDisposed|${He}`, (() => {
+         ae.h.unsubscribe(Se), ae.h.unsubscribe(je), ae.h.unsubscribe(Ie), ae.h.unsubscribe(he), ae.h.unsubscribe(Ge), ae.h.unsubscribe(Qe), He !== ie.gC && delete Wi[He]
```

#### 2456. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18184` → after: `L17603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17603) · [Before (L18184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18184)

```diff
-       iB.o.tM(`lifeformSetupFinished|${GB}`)
+       ae.h.yR(`lifeformSetupFinished|${He}`)
```

#### 2457. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18190-L18192` → after: `L17609-L17611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17609-L17611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17609-L17611) · [Before (L18190-L18192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18190-L18192)

```diff
-         nB: GB,
-         UB: YB,
-         fB: DB
+         de: He,
+         te: ye,
+         Ze: be
```

#### 2458. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18195-L18196` → after: `L17614-L17615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17614-L17615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17614-L17615) · [Before (L18195-L18196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18195-L18196)

```diff
-       yB.d[GB] = {
-         ...yB.d[GB],
+       Fe.b[He] = {
+         ...Fe.b[He],
```

#### 2459. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18198-L18199` → after: `L17617-L17618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17617-L17618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17617-L17618) · [Before (L18198-L18199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18198-L18199)

```diff
-       }, yB.d[QB] = {
-         ...yB.d[QB],
+       }, Fe.b[Me] = {
+         ...Fe.b[Me],
```

#### 2460. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18202` → after: `L17621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17621) · [Before (L18202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18202)

```diff
-       const jB = (0, cB.g)().DW.zYB(QB);
+       const Ue = (0, me.h)().sE.cye(Me);
```

#### 2461. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18204-L18205` → after: `L17623-L17624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17623-L17624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17623-L17624) · [Before (L18204-L18205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18204-L18205)

```diff
-       const JB = null !== (OB = jB.uF) && void 0 !== OB ? OB : null;
-       null !== JB && qO ? qO.Player.meshApi.updatePlayerCosmetic(QB, jB.uF, YB, DB) : console.error(`Error: ${QB} not ready for updateIngamePlayerCustomisation, ${null!==JB} ${!!qO}`)
+       const Je = null !== (ie = Ue.Ix) && void 0 !== ie ? ie : null;
+       null !== Je && Ti ? Ti.Player.meshApi.updatePlayerCosmetic(Me, Ue.Ix, ye, be) : console.error(`Error: ${Me} not ready for updateIngamePlayerCustomisation, ${null!==Je} ${!!Ti}`)
```

#### 2462. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18212` → after: `L17631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17631) · [Before (L18212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18212)

```diff
-       return null !== (OB = nO[(0, oB.b)(BB)]) && void 0 !== OB ? OB : {}
+       return null !== (ie = Wi[(0, Ke.b)(ee)]) && void 0 !== ie ? ie : {}
```

#### 2463. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18217` → after: `L17636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17636) · [Before (L18217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18217)

```diff
-       return null !== (OB = UO[(0, oB.b)(BB)]) && void 0 !== OB ? OB : 1
+       return null !== (ie = ti[(0, Ke.b)(ee)]) && void 0 !== ie ? ie : 1
```

#### 2464. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18222` → after: `L17641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17641) · [Before (L18222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18222)

```diff
-       return null !== (OB = null === (GB = nO[(0, oB.b)(BB)]) || void 0 === GB || null === (YB = GB.Helmet) || void 0 === YB ? void 0 : YB.itemName) && void 0 !== OB ? OB : null
+       return null !== (ie = null === (He = Wi[(0, Ke.b)(ee)]) || void 0 === He || null === (ye = He.Helmet) || void 0 === ye ? void 0 : ye.itemName) && void 0 !== ie ? ie : null
```

#### 2465. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18228` → after: `L17647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17647) · [Before (L18228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18228)

```diff
-       const QB = (0, cB.g)(),
+       const Me = (0, me.h)(),
```

#### 2466. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18237-L18239` → after: `L17656-L17658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17656-L17658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17656-L17658) · [Before (L18237-L18239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18237-L18239)

```diff
-       const yB = QB.DW.zYB(jB);
-       if (null === (null !== (DB = null === yB || void 0 === yB ? void 0 : yB.uF) && void 0 !== DB ? DB : null) || !qO) return;
-       const JB = (0, cB.d)().getLifeformType(jB),
+       const Fe = Me.sE.cye(Ue);
+       if (null === (null !== (be = null === Fe || void 0 === Fe ? void 0 : Fe.Ix) && void 0 !== be ? be : null) || !Ti) return;
+       const Je = (0, me.e)().getLifeformType(Ue),
```

#### 2467. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18241-L18242` → after: `L17660-L17661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17660-L17661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17660-L17661) · [Before (L18241-L18242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18241-L18242)

```diff
-       if (!(MB instanceof bB.d)) return;
-       const PB = GB ? dB.k[GB] : void 0;
+       if (!(oe instanceof se.b)) return;
+       const Re = He ? we.p[He] : void 0;
```

#### 2468. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18246-L18247` → after: `L17665-L17666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17665-L17666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17665-L17666) · [Before (L18246-L18247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18246-L18247)

```diff
-         const BB = GB ? (0, dB.j)(GB) : null,
-           DB = GB ? (0, KB.g)(GB) : null;
+         const ee = He ? (0, we.m)(He) : null,
+           be = He ? (0, De.h)(He) : null;
```

#### 2469. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18256-L18258` → after: `L17675-L17677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17675-L17677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17675-L17677) · [Before (L18256-L18258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18256-L18258)

```diff
-         EX: BB
-       } = (0, cB.g)();
-       for (const OB of lB.c) uO(BB, OB, null, null);
+         gC: ee
+       } = (0, me.h)();
+       for (const ie of qe.b) Ai(ee, ie, null, null);
```

#### 2470. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18262` → after: `L17681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17681) · [Before (L18262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18262)

```diff
-   38798: (BB, OB, GB) => {
+   38944: (ee, ie, He) => {
```

#### 2471. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18264` → after: `L17683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17683) · [Before (L18264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18264)

```diff
-       e: () => JB
+       c: () => Je
```

#### 2472. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18266-L18270` → after: `L17685-L17689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17685-L17689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17685-L17689) · [Before (L18266-L18270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18266-L18270)

```diff
-     var YB = GB(37885),
-       DB = GB(3088),
-       QB = GB(38167),
-       oB = GB(37771),
-       jB = GB(38801);
+     var ye = He(38020),
+       be = He(2969),
+       Me = He(38307),
+       Ke = He(37913),
+       Ue = He(38949);
```

#### 2473. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18284` → after: `L17703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17703) · [Before (L18284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18284)

```diff
-           if (void 0 !== GB[yB.name]) yB.BX("aAtlasIdx1", 1), yB.BX("aArmourTint", 4), yB.BX("aEnchantmentColour", 3), yB.BX("aEnchantmentSpeed", 1), yB.yX.aAtlasIdx1 = 0, yB.yX.aArmourTint = new YB.e(1, 1, 1, 0), yB.yX.aEnchantmentColour = new YB.Color3(0, 0, 0), yB.yX.aEnchantm … [truncated]
+           if (void 0 !== He[Fe.name]) Fe.fC("aAtlasIdx1", 1), Fe.fC("aArmourTint", 4), Fe.fC("aEnchantmentColour", 3), Fe.fC("aEnchantmentSpeed", 1), Fe.pC.aAtlasIdx1 = 0, Fe.pC.aArmourTint = new ye.e(1, 1, 1, 0), Fe.pC.aEnchantmentColour = new ye.Color3(0, 0, 0), Fe.pC.aEnchantm … [truncated]
```

#### 2474. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18287-L18288` → after: `L17706-L17707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17706-L17707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17706-L17707) · [Before (L18287-L18288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18287-L18288)

```diff
-             for (let OB = 1; OB <= BB; OB++) yB.BX((0, jB.i)(OB), 4);
-             for (let OB = 1; OB <= BB; OB++) yB.yX[(0, jB.i)(OB)] = oB.Vector4.FromArray(DB, 4 * (OB - 1))
+             for (let ie = 1; ie <= ee; ie++) Fe.fC((0, Ue.e)(ie), 4);
+             for (let ie = 1; ie <= ee; ie++) Fe.pC[(0, Ue.e)(ie)] = Ke.Vector4.FromArray(be, 4 * (ie - 1))
```

#### 2475. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18290` → after: `L17709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17709) · [Before (L18290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18290)

```diff
-           yB.BX("aOpacity", 1), yB.yX.aOpacity = 1, yB.BX("aLightLevels", 4), yB.yX.aLightLevels = (0, QB.m)()
+           Fe.fC("aOpacity", 1), Fe.pC.aOpacity = 1, Fe.fC("aLightLevels", 4), Fe.pC.aLightLevels = (0, Me.o)()
```

#### 2476. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18294` → after: `L17713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17713) · [Before (L18294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18294)

```diff
-         const GB = (0, DB.g)().UP.kF;
+         const He = (0, be.h)().PR.vx;
```

#### 2477. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18299` → after: `L17718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17718) · [Before (L18299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18299)

```diff
-         (0, DB.g)().UP.kF.setGroupEnabled(BB, OB, GB)
+         (0, be.h)().PR.vx.setGroupEnabled(ee, ie, He)
```

#### 2478. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18302-L18303` → after: `L17721-L17722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17721-L17722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17721-L17722) · [Before (L18302-L18303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18302-L18303)

```diff
-         const GB = (0, DB.g)().UP.kF;
-         GB.set(BB, "aOpacity", OB), GB.Jw(BB, "aOpacity", OB)
+         const He = (0, be.h)().PR.vx;
+         He.set(ee, "aOpacity", ie), He.tC(ee, "aOpacity", ie)
```

#### 2479. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18306-L18307` → after: `L17725-L17726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17725-L17726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17725-L17726) · [Before (L18306-L18307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18306-L18307)

```diff
-         const GB = (0, DB.g)().UP.kF;
-         GB.set(BB, "aLightLevels", OB), GB.Jw(BB, "aLightLevels", OB)
+         const He = (0, be.h)().PR.vx;
+         He.set(ee, "aLightLevels", ie), He.tC(ee, "aLightLevels", ie)
```

#### 2480. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18310` → after: `L17729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17729) · [Before (L18310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18310)

```diff
-         const GB = (0, DB.g)().UP.kF;
+         const He = (0, be.h)().PR.vx;
```

#### 2481. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18316-L18317` → after: `L17735-L17736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17735-L17736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17735-L17736) · [Before (L18316-L18317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18316-L18317)

```diff
-           } = (0, jB.j)(Number(YB));
-           this.playerAtlasVec4s[BB][DB - 1][QB] = OB[YB], GB.setGroup(BB, "notArmour", `aAtlasIdx${DB}`, this.playerAtlasVec4s[BB][DB - 1])
+           } = (0, Ue.i)(Number(ye));
+           this.playerAtlasVec4s[ee][be - 1][Me] = ie[ye], He.setGroup(ee, "notArmour", `aAtlasIdx${be}`, this.playerAtlasVec4s[ee][be - 1])
```

#### 2482. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18322` → after: `L17741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17741) · [Before (L18322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18322)

```diff
-   38796: (BB, OB, GB) => {
+   38940: (ee, ie, He) => {
```

#### 2483. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18324` → after: `L17743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17743) · [Before (L18324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18324)

```diff
-       d: () => NB
+       b: () => Xe
```

#### 2484. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18326` → after: `L17745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17745) · [Before (L18326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18326)

```diff
-     var YB = GB(363),
+     var ye = He(352),
```

#### 2485. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18328-L18338` → after: `L17747-L17757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17747-L17757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17747-L17757) · [Before (L18328-L18338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18328-L18338)

```diff
-       QB = GB(3622),
-       oB = GB(38545),
-       jB = GB(2392),
-       yB = GB(38798),
-       JB = GB(3088),
-       MB = GB(353),
-       PB = GB(38805),
-       zB = GB(2787),
-       lB = GB(37763),
-       pB = GB(38275),
-       qB = GB(38542);
+       Me = He(3517),
+       Ke = He(38702),
+       Ue = He(2278),
+       Fe = He(38944),
+       Je = He(2969),
+       oe = He(347),
+       Re = He(38952),
+       ke = He(2683),
+       qe = He(37906),
+       fe = He(38425),
+       Te = He(38694);
```

#### 2486. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18340` → after: `L17759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17759) · [Before (L18340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18340)

```diff
-     class NB extends yB.e {
+     class Xe extends Fe.c {
```

#### 2487. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18347-L18350` → after: `L17766-L17769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17766-L17769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17766-L17769) · [Before (L18347-L18350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18347-L18350)

```diff
-         YB ??= (0, zB.d)(GB);
-         const QB = (0, jB.n)(GB, YB);
-         if (!QB) return void console.error(`Error: ${YB} not a valid cosmetic of type ${GB}`);
-         const oB = (0, JB.g)();
+         ye ??= (0, ke.e)(He);
+         const Me = (0, Ue.h)(He, ye);
+         if (!Me) return void console.error(`Error: ${ye} not a valid cosmetic of type ${He}`);
+         const Ke = (0, Je.h)();
```

#### 2488. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18352` → after: `L17771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17771) · [Before (L18352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18352)

```diff
-         const MB = PB.e.indexOf(GB);
+         const oe = Re.c.indexOf(He);
```

#### 2489. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18355` → after: `L17774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17774) · [Before (L18355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18355)

```diff
-           const BB = null !== (qB = QB.atlasIdx) && void 0 !== qB ? qB : (0, jB.n)(GB, `${GB}_none`).atlasIdx;
+           const ee = null !== (Te = Me.atlasIdx) && void 0 !== Te ? Te : (0, Ue.h)(He, `${He}_none`).atlasIdx;
```

#### 2490. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18362` → after: `L17781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17781) · [Before (L18362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18362)

```diff
-             DW: OB
+             sE: ie
```

#### 2491. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18375-L18377` → after: `L17794-L17796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17794-L17796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17794-L17796) · [Before (L18375-L18377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18375-L18377)

```diff
-         const yB = (0, JB.g)(),
-           PB = yB.DW.zYB(BB);
-         if (!PB) return void console.error(`Error: ${BB} not ready for updatePlayerArmour, ${PB}`);
+         const Fe = (0, Je.h)(),
+           Re = Fe.sE.cye(ee);
+         if (!Re) return void console.error(`Error: ${ee} not ready for updatePlayerArmour, ${Re}`);
```

#### 2492. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18379` → after: `L17798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17798) · [Before (L18379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18379)

```diff
-           lB = yB.UP.kF,
+           qe = Fe.PR.vx,
```

#### 2493. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18381` → after: `L17800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17800) · [Before (L18381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18381)

```diff
-             uF: pB
+             Ix: fe
```

#### 2494. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18387` → after: `L17806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17806) · [Before (L18387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18387)

```diff
-             lB.setNode(pB, BB, "aAtlasIdx1", QB.d[GB]);
+             qe.setNode(fe, ee, "aAtlasIdx1", Me.h[He]);
```

#### 2495. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18390` → after: `L17809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17809) · [Before (L18390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18390)

```diff
-             const jB = null !== (ZB = oB.q[DB]) && void 0 !== ZB ? ZB : oB.q.None;
+             const Ue = null !== (pe = Ke.r[be]) && void 0 !== pe ? pe : Ke.r.None;
```

#### 2496. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18392` → after: `L17811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17811) · [Before (L18392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18392)

```diff
-             const yB = null !== (NB = MB.rb[DB]) && void 0 !== NB ? NB : MB.rb.None;
+             const Fe = null !== (Xe = oe.tb[be]) && void 0 !== Xe ? Xe : oe.tb.None;
```

#### 2497. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18399` → after: `L17818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17818) · [Before (L18399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18399)

```diff
-         const GB = (0, JB.g)(),
+         const He = (0, Je.h)(),
```

#### 2498. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18401` → after: `L17820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17820) · [Before (L18401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18401)

```diff
-             DW: YB
+             sE: ye
```

#### 2499. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18403-L18405` → after: `L17822-L17824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17822-L17824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17822-L17824) · [Before (L18403-L18405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18403-L18405)

```diff
-           QB = BB === GB.EX ? YB.f4(BB).Y1 : YB.pR(BB),
-           oB = BB === GB.EX ? DB().ZERO : GB.Tz,
-           jB = GB.UP.kF;
+           Me = ee === He.gC ? ye.M_(ee).x_ : ye.pE(ee),
+           Ke = ee === He.gC ? be().ZERO : He.yq,
+           Ue = He.PR.vx;
```

#### 2500. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18410` → after: `L17829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17829) · [Before (L18410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18410)

```diff
-           QB = BB.yDB(OB, 0);
+           Me = ee.Abe(ie, 0);
```

#### 2501. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18438` → after: `L17857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17857) · [Before (L18438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18438)

```diff
-   38812: (BB, OB, GB) => {
+   38958: (ee, ie, He) => {
```

#### 2502. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18442-L18449` → after: `L17861-L17868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17861-L17868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17861-L17868) · [Before (L18442-L18449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18442-L18449)

```diff
-     var YB = GB(39123),
-       DB = GB(39127),
-       QB = GB(37452),
-       oB = GB(38771),
-       jB = GB(38816),
-       yB = GB(25),
-       JB = GB(37857),
-       MB = GB(38272);
+     var ye = He(39252),
+       be = He(39259),
+       Me = He(37590),
+       Ke = He(38927),
+       Ue = He(38965),
+       Fe = He(27),
+       Je = He(37992),
+       oe = He(38419);
```

#### 2503. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18452` → after: `L17871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17871) · [Before (L18452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18452)

```diff
-         this.bloxd = BB, this.eId = OB, this.lifeformType = void 0, this.kz = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = GB, this.kz = BB.kz
+         this.bloxd = ee, this.eId = ie, this.lifeformType = void 0, this.uk = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = He, this.uk = ee.uk
```

#### 2504. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18456` → after: `L17875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17875) · [Before (L18456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18456)

```diff
-         !this.bloxd.getEntityName(this.eId) && OB.defaultName && this.bloxd.setEntityName(this.eId, OB.defaultName), this.kz.DW.add([BB.x, BB.y, BB.z], OB.physicsBodyDimensions.width, OB.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.kz.DW.RL(this.eId, this.kz. … [truncated]
+         !this.bloxd.getEntityName(this.eId) && ie.defaultName && this.bloxd.setEntityName(this.eId, ie.defaultName), this.uk.sE.add([ee.x, ee.y, ee.z], ie.physicsBodyDimensions.width, ie.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.uk.sE.uL(this.eId, this.uk. … [truncated]
```

#### 2505. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18459-L18462` → after: `L17878-L17881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17878-L17881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17878-L17881) · [Before (L18459-L18462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18459-L18462)

```diff
-           const GB = this.kz.UP.kF,
-             YB = null !== (BB = null === (OB = this.kz.DW.iGB(this.eId)) || void 0 === OB ? void 0 : OB.uF) && void 0 !== BB ? BB : null,
-             DB = (0, MB.l)(this.eId);
-           null === YB && console.error(`Error: ${this.eId} not ready for pickability change to ${DB}`), GB.setPickable(YB, DB)
+           const He = this.uk.PR.vx,
+             ye = null !== (ee = null === (ie = this.uk.sE.rHe(this.eId)) || void 0 === ie ? void 0 : ie.Ix) && void 0 !== ee ? ee : null,
+             be = (0, oe.h)(this.eId);
+           null === ye && console.error(`Error: ${this.eId} not ready for pickability change to ${be}`), He.setPickable(ye, be)
```

#### 2506. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18464` → after: `L17883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17883) · [Before (L18464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18464)

```diff
-         this.canAttackSub = yB.o.subscribe(`otherEntitySettings|${this.eId}|canAttack`, GB), this.interactableSub = yB.o.subscribe(`otherEntitySettings|${this.eId}|interactable`, GB), this.multilineTextBoxSub = (0, JB.w)(this.kz, this.eId), (0, oB.x)(this.lifeformType, this.kz, t … [truncated]
+         this.canAttackSub = Fe.h.subscribe(`otherEntitySettings|${this.eId}|canAttack`, He), this.interactableSub = Fe.h.subscribe(`otherEntitySettings|${this.eId}|interactable`, He), this.multilineTextBoxSub = (0, Je.t)(this.uk, this.eId), (0, Ke.r)(this.lifeformType, this.uk, t … [truncated]
```

#### 2507. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18467` → after: `L17886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17886) · [Before (L18467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18467)

```diff
-         const GB = this.kz.DW.EGB(this.eId);
+         const He = this.uk.sE.Uye(this.eId);
```

#### 2508. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18471-L18472` → after: `L17890-L17891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17890-L17891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17890-L17891) · [Before (L18471-L18472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18471-L18472)

```diff
-             if ("yRotation" === BB ? GB.heading = OB : void 0 !== GB[BB] && (GB[BB] = OB), "armSwinging" === BB && OB) {
-               const BB = this.kz.DW.zYB(this.eId);
+             if ("yRotation" === ee ? He.heading = ie : void 0 !== He[ee] && (He[ee] = ie), "armSwinging" === ee && ie) {
+               const ee = this.uk.sE.cye(this.eId);
```

#### 2509. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18474` → after: `L17893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17893) · [Before (L18474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18474)

```diff
-             } else if ("xRotation" === BB || "yRotation" === BB || "zRotation" === BB)(0, JB.x)(this.kz, this.eId, BB, OB);
+             } else if ("xRotation" === ee || "yRotation" === ee || "zRotation" === ee)(0, Je.x)(this.uk, this.eId, ee, ie);
```

#### 2510. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18477-L18478` → after: `L17896-L17897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17896-L17897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17896-L17897) · [Before (L18477-L18478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18477-L18478)

```diff
-               const BB = this.kz.DW.JYB(this.eId);
-               BB.networkedHeldItemName = OB, (0, jB.updateHeldItemState)(this.kz, BB)
+               const ee = this.uk.sE.Yye(this.eId);
+               ee.networkedHeldItemName = ie, (0, Ue.updateHeldItemState)(this.uk, ee)
```

#### 2511. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18480-L18481` → after: `L17899-L17900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17899-L17900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17899-L17900) · [Before (L18480-L18481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18480-L18481)

```diff
-               const BB = this.kz.DW.JYB(this.eId);
-               BB.networkedHeldItemEnchantmentTier = OB, (0, jB.updateHeldItemState)(this.kz, BB)
+               const ee = this.uk.sE.Yye(this.eId);
+               ee.networkedHeldItemEnchantmentTier = ie, (0, Ue.updateHeldItemState)(this.uk, ee)
```

#### 2512. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18487` → after: `L17906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17906) · [Before (L18487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18487)

```diff
-         this.kz.DW.deleteEntity(this.eId), yB.o.tM(`lifeformDisposed|${(0,QB.b)(this.eId)}`), "Player" === this.lifeformType && yB.o.tM("playerNamesUpdated"), yB.o.unsubscribe(this.canAttackSub), yB.o.unsubscribe(this.interactableSub), yB.o.unsubscribe(this.multilineTextBoxSub)
+         this.uk.sE.deleteEntity(this.eId), Fe.h.yR(`lifeformDisposed|${(0,Me.b)(this.eId)}`), "Player" === this.lifeformType && Fe.h.yR("playerNamesUpdated"), Fe.h.unsubscribe(this.canAttackSub), Fe.h.unsubscribe(this.interactableSub), Fe.h.unsubscribe(this.multilineTextBoxSub)
```

#### 2513. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18491-L18492` → after: `L17910-L17911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17910-L17911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17910-L17911) · [Before (L18491-L18492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18491-L18492)

```diff
-         const OB = this.kz.DW;
-         if (OB.PYB(this.eId)) yB.o.tM(`entityNameChanged|${this.eId}`);
+         const ie = this.uk.sE;
+         if (ie.aye(this.eId)) Fe.h.yR(`entityNameChanged|${this.eId}`);
```

#### 2514. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18495` → after: `L17914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17914) · [Before (L18495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18495)

```diff
-           OB.RL(this.eId, OB.names.entityName, {
+           ie.uL(this.eId, ie.names.entityName, {
```

#### 2515. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18499` → after: `L17918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17918) · [Before (L18499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18499)

```diff
-         "Player" === this.lifeformType && yB.o.tM("playerNamesUpdated")
+         "Player" === this.lifeformType && Fe.h.yR("playerNamesUpdated")
```

#### 2516. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18502-L18508` → after: `L17921-L17927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17921-L17927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17921-L17927) · [Before (L18502-L18508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18502-L18508)

```diff
-     var zB, lB, pB = GB(38796),
-       qB = GB(635),
-       ZB = GB(38219),
-       NB = GB(3088),
-       RB = GB(4111),
-       WB = GB(4166),
-       AB = GB(38744);
+     var ke, qe, fe = He(38940),
+       Te = He(608),
+       pe = He(38364),
+       Xe = He(2969),
+       ze = He(4075),
+       Be = He(4142),
+       Ee = He(38897);
```

#### 2517. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18517-L18518` → after: `L17936-L17937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17936-L17937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17936-L17937) · [Before (L18517-L18518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18517-L18518)

```diff
-           (0, AB.setRigAiState)(this.kz, this.eId, null !== (GB = qB.k[OB]) && void 0 !== GB ? GB : null)
-         } else "armSwinging" === BB && OB && !this.kz.DW.zYB(this.eId) && (0, AB.playRigAction)(this.kz, this.eId, ZB.o)
+           (0, Ee.setRigAiState)(this.uk, this.eId, null !== (He = Te.i[ie]) && void 0 !== He ? He : null)
+         } else "armSwinging" === ee && ie && !this.uk.sE.cye(this.eId) && (0, Ee.playRigAction)(this.uk, this.eId, pe.w)
```

#### 2518. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18522` → after: `L17941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17941) · [Before (L18522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18522)

```diff
-         return this.kz.DW.getState(this.eId, BB.meshMetadata.type).uF
+         return this.uk.sE.getState(this.eId, ee.meshMetadata.type).Ix
```

#### 2519. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18525` → after: `L17944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17944) · [Before (L18525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18525)

```diff
-         oB.e[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, BB)
+         Ke.b[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, ee)
```

#### 2520. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18528-L18532` → after: `L17947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17947) · [Before (L18528-L18532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18528-L18532)

```diff
-     const SB = ["b", 0, 1, "i", 3, "a", "j", 88, "f", 6, 37, 8, 255, "length", "undefined", void 0, "c", "d", 63, "fromCodePoint", 7, 12, "push", 165, 84, 53, "h", 179, 71, 91, 5, 55, 8191, 13, 14, 134, 9, 43, 146, 233, 2, 247, 159, 58, 191, 59, 156, 33, 193, 172, 4, 131, 89, 160 … [truncated]
- 
-     function nB(...BB) {
-       return BB[SB[13]] = SB[2], typeof mB !== SB[14] && mB ? (new mB).decode(new IB(BB[SB[1]])) : typeof FB !== SB[14] && FB ? FB.from(BB[SB[1]]).toString("utf-8") : gB(BB[SB[1]])
-     }
+     const Oe = ["b", 0, 1, 8, "c", "a", 219, "g", "e", "f", 4, 255, "length", 168, 2, "d", 70, "undefined", void 0, 22, 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, 26, 58, 182, 5, 185, 127, 128, 230, "h", 217, 33554432, 67108864, 66, "i", 236, 120, !0, !1];
```

#### 2521. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18535-L18548` → after: `L17950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17950) · [Before (L18535-L18548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18535-L18548)

```diff
-       if (BB[SB[13]] = SB[4], BB[SB[1]] === function(...BB) {
-           return BB[SB[13]] = SB[2], typeof zB[BB[SB[1]]] === SB[14] ? zB[BB[SB[1]]] = function(...BB) {
-             for (kB(BB[SB[13]] = SB[2], BB[SB[2]] = '1XS%C6I!mUBv"VrAdJ+Z?Qi(4l}qGx>Kh$]u.n_{pza&YL:*;OE<P,Hwbs)[7D|8yMt2/#9R@0gefj5Tc=NF3~k^W`o', BB[-SB[25]] = "" + (BB[SB[1]] || ""), BB[SB[16]] = BB[-SB[25]].length, BB[SB[17]] = [], BB[SB[30]] = SB[1], BB[-SB[31]] = SB[1], BB[S … [truncated]
-               if (BB[SB[27]] = BB[SB[2]].indexOf(BB[-SB[25]][BB[SB[26]]]), BB[SB[27]] !== -SB[2])
-                 if (BB[SB[28]] < SB[1]) BB[SB[28]] = BB[SB[27]];
-                 else {
-                   kB(BB[SB[28]] += BB[SB[27]] * SB[29], BB[SB[30]] |= BB[SB[28]] << BB[-SB[31]], BB[-SB[31]] += (BB[SB[28]] & SB[32]) > SB[7] ? SB[33] : SB[34]);
-                   do {
-                     kB(BB[SB[17]].push(BB[SB[30]] & SB[12]), BB[SB[30]] >>= SB[11], BB[-SB[31]] -= SB[11])
-                   } while (BB[-SB[31]] > SB[20]);
-                   BB[SB[28]] = -SB[2]
-                 } return BB[SB[28]] > -SB[2] && BB[SB[17]].push((BB[SB[30]] | BB[SB[28]] << BB[-SB[31]]) & SB[12]), nB(BB[SB[17]])
-           }(lB[BB[SB[1]]]) : zB[BB[SB[1]]]
-         }(SB[84])) return BB[SB[2]] + BB[SB[40]]
+       return ee[Oe[12]] = Oe[2], typeof Pe !== Oe[17] && Pe ? (new Pe).decode(new Ae(ee[Oe[1]])) : typeof Ye !== Oe[17] && Ye ? Ye.from(ee[Oe[1]]).toString("utf-8") : ce(ee[Oe[1]])
```

#### 2522. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18556-L18557` → after: `L17958-L17959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17958-L17959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17958-L17959) · [Before (L18556-L18557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18556-L18557)

```diff
-     kB(zB = {}, lB = ["%[Cn[d?6gQguc&aV=@j^N!(=S$^*o>W1tp$)P&K7mt)?c5&qR7PLFB8_ue~zA", '.kMGQw#XeQ:S8/mFa@`+Vyda,5"0zo^Fq)IK8YN7%', "<nha*+QhxeV<G>t", '#D"ynbbiW/pZ],QVD8dc>w@6rx(CjMd{5";a+NYld)*ihM2Uqx_)Z&PQd)Z|R', '+xgK9sggWxXmg%BF4$9LRF6?()![],1g{=SjR<=beQ&"JU)', "gx<)azr_4I[| … [truncated]
-       var BB, OB, GB, YB = [function() {
+     te(ke = {}, qe = ["&KN`7T#[QQCJe|Y@i%BlHNY;zs@5$A%rSE", "&7Tg}bNpWs", "/?oZCOR;rQ{", "s<F]DW06=T6kwrF;klZJKJ7E", "L?|`tq%=+K/b$Zn{`vQJVTr:5bY_L;0(+6`l60rzGbm1*0<;Plj(_=pp2Hs^E", "5v`<wXrQWKAlQoRsK4U(eXpn$O4u1w;*X<)v0[kRZK5EE", "[N]c;N8#R", 'k"hDQqnn_h', "gNklyNa~?T(Jaj%?nvx19 … [truncated]
+       te(ee[Oe[12]] = Oe[1], ee[-Oe[16]] = [function() {
```

#### 2523. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18565-L18566` → after: `L17967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17967) · [Before (L18565-L18566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18565-L18566)

```diff
-       }];
-       kB(BB = void 0, OB = []);
+       }], ee[-Oe[13]] = Oe[18], ee[Oe[14]] = []);
```

#### 2524. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18568` → after: `L17969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17969) · [Before (L18568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18568)

```diff
-         kB(BB = Object, OB[SB[22]]("".__proto__.constructor.name))
+         te(ee[-Oe[13]] = Object, ee[Oe[14]][Oe[25]]("".__proto__.constructor.name))
```

#### 2525. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18570-L18574` → after: `L17971-L17974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17971-L17974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17971-L17974) · [Before (L18570-L18574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18570-L18574)

```diff
-       BB: for (GB = SB[1]; GB < YB[SB[13]]; GB++) try {
-         var DB;
-         for (BB = YB[GB](), DB = SB[1]; DB < OB[SB[13]]; DB++)
-           if (typeof BB[OB[DB]] === SB[14]) continue BB;
-         return BB
+       ee: for (ee[Oe[15]] = Oe[1]; ee[Oe[15]] < ee[-Oe[16]][Oe[12]]; ee[Oe[15]]++) try {
+         for (ee[-Oe[13]] = ee[-Oe[16]][ee[Oe[15]]](), ee[Oe[10]] = Oe[1]; ee[Oe[10]] < ee[Oe[14]][Oe[12]]; ee[Oe[10]]++)
+           if (typeof ee[-Oe[13]][ee[Oe[14]][ee[Oe[10]]]] === Oe[17]) continue ee;
+         return ee[-Oe[13]]
```

#### 2526. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18576-L18578` → after: `L17976-L17979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17976-L17979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17976-L17979) · [Before (L18576-L18578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18576-L18578)

```diff
-       return BB || this
-     }() || {}, mB = uB.TextDecoder, IB = uB.Uint8Array, FB = uB.BP, iB = uB.String || String, LB = uB.Array || Array, gB = function(...BB) {
-       return kB(BB[SB[13]] = SB[1], BB[-SB[23]] = new LB(SB[68]), BB[SB[24]] = iB[SB[19]] || iB.fromCharCode, BB[SB[16]] = []),
+       return ee[-Oe[13]] || this
+     }() || {}, Pe = De.TextDecoder, Ae = De.Uint8Array, Ye = De.bR, Ve = De.String || String, ae = De.Array || Array, ce = function() {
+       var ee, ie, He = new ae(Oe[38]);
+       return te(ee = Ve[Oe[22]] || Ve.fromCharCode, ie = []),
```

#### 2527. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18580-L18764` → after: `L17981-L17998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17981-L17998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L17981-L17998) · [Before (L18580-L18764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18580-L18764)

```diff
-           for (kB(OB[SB[13]] = SB[2], OB[SB[2]] = SB[15], OB[SB[0]] = SB[15], OB[SB[16]] = OB[SB[1]][SB[13]], BB[SB[16]][SB[13]] = SB[1]), OB[SB[17]] = SB[1]; OB[SB[17]] < OB[SB[16]];) kB(OB[SB[0]] = OB[SB[1]][OB[SB[17]]++], OB[SB[0]] <= SB[65] ? OB[SB[2]] = OB[SB[0]] : OB[SB[0]] … [truncated]
-           return BB[SB[16]].join("")
-         }
-     }()), (() => {
-       function BB(...BB) {
-         return BB[SB[13]] = SB[2], typeof zB[BB[SB[1]]] === SB[14] ? zB[BB[SB[1]]] = function(BB) {
-           var OB, GB, YB, DB, QB, oB, jB;
-           for (kB(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = SB[1], QB = SB[1], oB = -SB[2]), jB = SB[1]; jB < GB; jB++) {
-             var yB = ',DC~^YuI}l5NOq7cw1WZLd)ep&_]Ji!=2z$FnK+s8Prj"v4|BEAQxR.g?S{6:%yob9VfH0m;</tT`GXUa#*[M>h@3(k'.indexOf(OB[jB]);
-             if (yB !== -SB[2])
-               if (oB < SB[1]) oB = yB;
-               else {
-                 kB(oB += yB * SB[29], DB |= oB << QB, QB += (oB & SB[32]) > SB[7] ? SB[33] : SB[34]);
-                 do {
-                   kB(YB.push(DB & SB[12]), DB >>= SB[11], QB -= SB[11])
-                 } while (QB > SB[20]);
- ... (169 more removed lines; see GitHub link above)
+           for (te(ye[Oe[12]] = Oe[2], ye[-Oe[19]] = Oe[18], ye[Oe[14]] = Oe[18], ye[Oe[4]] = ye[Oe[1]][Oe[12]], ie[Oe[12]] = Oe[1]), ye[Oe[15]] = Oe[1]; ye[Oe[15]] < ye[Oe[4]];) te(ye[Oe[14]] = ye[Oe[1]][ye[Oe[15]]++], ye[Oe[14]] <= Oe[37] ? ye[-Oe[19]] = ye[Oe[14]] : ye[Oe[14]]  … [truncated]
+           return ie.join("")
+         }
+     }()), (() => {
+       if ([][Oe[12]] = Oe[1], function(...ee) {
+           return ee[Oe[12]] = Oe[2], typeof ke[ee[Oe[1]]] === Oe[17] ? ke[ee[Oe[1]]] = function(ee) {
+             var ie, He, ye, be, Me, Ke, Ue;
+             for (te(ie = "" + (ee || ""), He = ie.length, ye = [], be = Oe[1], Me = Oe[1], Ke = -Oe[2]), Ue = Oe[1]; Ue < He; Ue++) {
+               var Fe = 'n"L=Hx@yk5,%sj{zAEw09v2#eh]mu`!lSWF};&p7_4>G(cXgI|8[P)iV<?tdZ^a:6D+o$r3*J/~.Y1bOUfRMqBNCQKT'.indexOf(ie[Ue]);
+               if (Fe !== -Oe[2])
+                 if (Ke < Oe[1]) Ke = Fe;
+                 else {
+                   te(Ke += Fe * Oe[26], be |= Ke << Me, Me += (Ke & Oe[27]) > Oe[28] ? Oe[29] : Oe[30]);
+                   do {
+                     te(ye.push(be & Oe[11]), be >>= Oe[3], Me -= Oe[3])
+                   } while (Me > Oe[23]);
+ ... (2 more added lines; see GitHub link above)
```

#### 2528. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18767-L18779` → after: `L18016-L18020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18016-L18020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18016-L18020) · [Before (L18767-L18779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18767-L18779)

```diff
-             function IB(...BB) {
-               return kB(BB[SB[13]] = SB[40], BB[SB[40]] = (BB[SB[1]] & SB[75]) + (BB[SB[2]] & SB[75]), BB[SB[76]] = (BB[SB[1]] >> SB[55]) + (BB[SB[2]] >> SB[55]) + (BB[SB[40]] >> SB[55])), BB[SB[76]] << SB[55] | BB[SB[40]] & SB[75]
-             }
-             return OB = "", GB = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 6048076 … [truncated]
-               hex: DB,
-               b64: oB,
-               any: jB,
-               hex_hmac: QB,
-               b64_hmac: oB,
-               any_hmac: jB
-             }
-           }(), console.log(OB[SB[5]]))
-         }(), SB[80]) {
+           function He(ee) {
+             return typeof ke[ee] === Oe[17] ? ke[ee] = ie(qe[ee]) : ke[ee]
+           }
+           ee[Oe[12]] = Oe[1], te(ee[Oe[39]] = He(124) + He(125) + He(126) + He(Oe[37]) + He(Oe[38]) + He(129) + "om", ee[Oe[0]] = He(130) + He(131) + He(132) + He(133) + He(134) + He(135) + He(136), ee[Oe[14]] = He(137) + He(138) + He(139) + ")", ee[Oe[39]].match(ee[Oe[0]] + ee[O … [truncated]
+         }(), Oe[48]) {
```

#### 2529. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18781-L18783` → after: `L18022-L18024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18022-L18024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18022-L18024) · [Before (L18781-L18783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18781-L18783)

```diff
-           for (kB(BB[SB[13]] = SB[2], BB[SB[5]] = 'sk*at67lBu@;C4fiv?~hzTncD!92j&:V^)8EHMx{|y$<".+Rwqr1S,d[N=Z]3pLIPmKGQ5U/0Ye#_WOg(%`>AF}XboJ', BB[SB[0]] = "" + (BB[SB[1]] || ""), BB[SB[4]] = BB[SB[0]].length, BB[SB[78]] = [], BB[SB[63]] = SB[1], BB[SB[9]] = SB[1], BB[SB[77]] =  … [truncated]
-             if (BB[SB[3]] = BB[SB[5]].indexOf(BB[SB[0]][BB[SB[26]]]), BB[SB[3]] !== -SB[2])
-               if (BB[SB[77]] < SB[1]) BB[SB[77]] = BB[SB[3]];
+           for (te(ee[Oe[12]] = Oe[2], ee[Oe[5]] = 'sdnTHoh]xMC;IRD7:fubric6y[gE0Bqtv$>%|YN*~+U)w^!W},K?z{8Pj/.(3`9=#5@2_"41&<FLepGQAVJZXSOmalk', ee[Oe[0]] = "" + (ee[Oe[1]] || ""), ee[Oe[4]] = ee[Oe[0]].length, ee[-Oe[41]] = [], ee[Oe[8]] = Oe[1], ee[Oe[9]] = Oe[1], ee[Oe[7]] = - … [truncated]
+             if (ee[-Oe[13]] = ee[Oe[5]].indexOf(ee[Oe[0]][ee[Oe[40]]]), ee[-Oe[13]] !== -Oe[2])
+               if (ee[Oe[7]] < Oe[1]) ee[Oe[7]] = ee[-Oe[13]];
```

#### 2530. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18785` → after: `L18026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18026) · [Before (L18785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18785)

```diff
-                 kB(BB[SB[77]] += BB[SB[3]] * SB[29], BB[SB[63]] |= BB[SB[77]] << BB[SB[9]], BB[SB[9]] += (BB[SB[77]] & SB[32]) > SB[7] ? SB[33] : SB[34]);
+                 te(ee[Oe[7]] += ee[-Oe[13]] * Oe[26], ee[Oe[8]] |= ee[Oe[7]] << ee[Oe[9]], ee[Oe[9]] += (ee[Oe[7]] & Oe[27]) > Oe[28] ? Oe[29] : Oe[30]);
```

#### 2531. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18787-L18790` → after: `L18028-L18031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18028-L18031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18028-L18031) · [Before (L18787-L18790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18787-L18790)

```diff
-                   kB(BB[SB[78]].push(BB[SB[63]] & SB[12]), BB[SB[63]] >>= SB[11], BB[SB[9]] -= SB[11])
-                 } while (BB[SB[9]] > SB[20]);
-                 BB[SB[77]] = -SB[2]
-               } return BB[SB[77]] > -SB[2] && BB[SB[78]].push((BB[SB[63]] | BB[SB[77]] << BB[SB[9]]) & SB[12]), nB(BB[SB[78]])
+                   te(ee[-Oe[41]].push(ee[Oe[8]] & Oe[11]), ee[Oe[8]] >>= Oe[3], ee[Oe[9]] -= Oe[3])
+                 } while (ee[Oe[9]] > Oe[23]);
+                 ee[Oe[7]] = -Oe[2]
+               } return ee[Oe[7]] > -Oe[2] && ee[-Oe[41]].push((ee[Oe[8]] | ee[Oe[7]] << ee[Oe[9]]) & Oe[11]), de(ee[-Oe[41]])
```

#### 2532. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18794` → after: `L18035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18035) · [Before (L18794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18794)

```diff
-           return BB[SB[13]] = SB[2], typeof zB[BB[SB[1]]] === SB[14] ? zB[BB[SB[1]]] = OB(lB[BB[SB[1]]]) : zB[BB[SB[1]]]
+           return ie[Oe[12]] = Oe[2], typeof ke[ie[Oe[1]]] === Oe[17] ? ke[ie[Oe[1]]] = ee(qe[ie[Oe[1]]]) : ke[ie[Oe[1]]]
```

#### 2533. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18796-L18823` → after: `L18037-L18064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18037-L18064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18037-L18064) · [Before (L18796-L18823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18796-L18823)

```diff
-         let YB = SB[87];
-         kB(setInterval((() => {
-           if (BB(123) in fB && function() {
-               var BB = function(...BB) {
-                 kB(BB[SB[13]] = SB[2], this.CP = BB[SB[1]], this.length = SB[1], this.map = {}, this.head = SB[79], this.tail = SB[79])
-               };
-               kB(BB.prototype.get = function(...BB) {
-                 var OB;
-                 return kB(BB[SB[13]] = SB[2], OB = this.map[BB[SB[1]]]), OB ? (this.remove(OB), this.insert(OB.key, OB.val), OB.val) : -SB[2]
-               }, BB.prototype.put = function(BB, OB) {
-                 this.map[BB] ? (this.remove(this.map[BB]), this.insert(BB, OB)) : this.length === this.CP ? (this.remove(this.head), this.insert(BB, OB)) : (this.insert(BB, OB), this.length++)
-               }, BB.prototype.remove = function(BB) {
-                 var OB, GB = BB.prev;
-                 (OB = BB.next) && (OB.prev = GB), GB && (GB.next = OB), this.head === BB && (this.head = OB), this.tail === BB && (this.tail = GB), delete this.map[BB.key]
-               }, BB.prototype.insert = function(...BB) {
-                 kB(BB[SB[13]] = SB[40], BB[SB[40]] = new List(BB[SB[1]], BB[SB[2]]), this.tail ? (this.tail.next = BB[SB[40]], BB[SB[40]].prev = this.tail, this.tail = BB[SB[40]]) : (this.tail = BB[SB[40]], this.head = BB[SB[40]]), this.map[BB[SB[1]]] = BB[SB[40]])
- ... (12 more removed lines; see GitHub link above)
+ 
+         function He(...ee) {
+           ee[Oe[12]] = Oe[1];
+           const He = require("path"),
+             {
+               version: ye
+             } = require("../../package"),
+             {
+               version: be
+             } = require("@redacted/enterprise-plugin/package"),
+             {
+               version: Me
+             } = require("@redacted/components/package"),
+             {
+               sdkVersion: Ke
+             } = require("@redacted/enterprise-plugin");
+ ... (12 more added lines; see GitHub link above)
```

#### 2534. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18825` → after: `L18066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18066) · [Before (L18825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18825)

```diff
-                       kB(BB[-SB[81]] += BB[SB[3]] * SB[29], BB[-SB[82]] |= BB[-SB[81]] << BB[SB[9]], BB[SB[9]] += (BB[-SB[81]] & SB[32]) > SB[7] ? SB[33] : SB[34]);
+                       te(Ke += Fe * Oe[26], be |= Ke << Me, Me += (Ke & Oe[27]) > Oe[28] ? Oe[29] : Oe[30]);
```

#### 2535. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18827-L18868` → after: `L18068-L18071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18068-L18071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18068-L18071) · [Before (L18827-L18868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18827-L18868)

```diff
-                         kB(BB[SB[50]].push(BB[-SB[82]] & SB[12]), BB[-SB[82]] >>= SB[11], BB[SB[9]] -= SB[11])
-                       } while (BB[SB[9]] > SB[20]);
-                       BB[-SB[81]] = -SB[2]
-                     } return BB[-SB[81]] > -SB[2] && BB[SB[50]].push((BB[-SB[82]] | BB[-SB[81]] << BB[SB[9]]) & SB[12]), nB(BB[SB[50]])
-               }(lB[BB[SB[1]]]) : zB[BB[SB[1]]]
-             }(SB[65]) in fB && function(...BB) {
-               BB[SB[13]] = SB[1];
-               const OB = require("big-integer");
-               kB(BB[SB[86]] = class {
-                 static randomPrime(...BB) {
-                   BB[SB[13]] = SB[2];
-                   const GB = OB.one.shiftLeft(BB[SB[1]] - SB[2]),
-                     YB = OB.one.shiftLeft(BB[SB[1]]).prev();
-                   for (; SB[80];) {
-                     let BB = OB.randBetween(GB, YB);
-                     if (BB.isProbablePrime(SB[83])) return BB
- ... (26 more removed lines; see GitHub link above)
+                         te(ye.push(be & Oe[11]), be >>= Oe[3], Me -= Oe[3])
+                       } while (Me > Oe[23]);
+                       Ke = -Oe[2]
+                     }
```

#### 2536. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18870-L18878` → after: `L18073-L18089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18073-L18089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18073-L18089) · [Before (L18870-L18878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18870-L18878)

```diff
-                 static decode(...BB) {
-                   BB[SB[13]] = SB[2];
-                   const OB = BB[SB[1]].toString();
-                   BB[-SB[85]] = "";
-                   for (let GB = SB[1]; GB < OB.length; GB += SB[40]) {
-                     let YB = Number(OB.substr(GB, SB[40]));
-                     YB <= 30 ? (BB[-SB[85]] += String.fromCharCode(Number(OB.substr(GB, SB[4]))), GB++) : BB[-SB[85]] += String.fromCharCode(YB)
-                   }
-                   return BB[-SB[85]]
+                 return Ke > -Oe[2] && ye.push((be | Ke << Me) & Oe[11]), de(ye)
+               }(qe[ee[Oe[1]]]) : ke[ee[Oe[1]]]
+             }(143) in We && function(...ee) {
+               function ie(ee) {
+                 return ee[Oe[2]] * Oe[43] + (ee[Oe[1]] < Oe[1] ? Oe[42] | ee[Oe[1]] : ee[Oe[1]])
+               }
+ 
+               function He(...ee) {
+                 switch (ee[Oe[12]] = Oe[2], ((ee[Oe[1]] & Oe[42]) !== Oe[1]) * Oe[2] + (ee[Oe[1]] < Oe[1]) * Oe[14]) {
+                   case Oe[1]:
+                     return [ee[Oe[1]] % Oe[42], Math.trunc(ee[Oe[1]] / Oe[43])];
+                   case Oe[2]:
+                     return [ee[Oe[1]] % Oe[42] - Oe[42], Math.trunc(ee[Oe[1]] / Oe[43]) + Oe[2]];
+                   case Oe[14]:
+                     return [((ee[Oe[1]] + Oe[42]) % Oe[42] + Oe[42]) % Oe[42], Math.round(ee[Oe[1]] / Oe[43])];
+                   case Oe[31]:
+ ... (1 more added lines; see GitHub link above)
```

#### 2537. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18880-L18881` → after: `L18091-L18114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18091-L18114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18091-L18114) · [Before (L18880-L18881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18880-L18881)

```diff
-               }, module.exports = BB[SB[86]])
-             }(), YB = SB[87]
+               }
+               ee[Oe[12]] = Oe[1], te(ee[-Oe[44]] = ie([Oe[14], Oe[10]]), ee[Oe[0]] = ie([Oe[2], Oe[14]]), ee[Oe[4]] = ee[-Oe[44]] + ee[Oe[0]], ee[Oe[31]] = ee[Oe[4]] - ee[Oe[0]], ee[Oe[10]] = ee[Oe[31]] * Oe[14], ee[Oe[35]] = ee[Oe[10]] / Oe[14], console.log(He(ee[Oe[4]])), conso … [truncated]
+             }(), !ye && (0, Xe[Oe[40]])()) {
+             function ie(...ee) {
+               for (te(ee[Oe[12]] = Oe[2], ee[Oe[2]] = 'wDZcy?z1;7e&X|$K_HbaUuv{h8gx34=CFM/j2d#s65}mIk[GYW(l@pOo>Jt+Ef]q,RTin!9Q%L)~:.B^*S<A"P0rV`N', ee[Oe[0]] = "" + (ee[Oe[1]] || ""), ee[Oe[31]] = ee[Oe[0]].length, ee[Oe[10]] = [], ee[-Oe[47]] = Oe[1], ee[Oe[21]] = Oe[1], ee[-Oe … [truncated]
+                 if (ee[Oe[45]] = ee[Oe[2]].indexOf(ee[Oe[0]][ee[Oe[40]]]), ee[Oe[45]] !== -Oe[2])
+                   if (ee[-Oe[46]] < Oe[1]) ee[-Oe[46]] = ee[Oe[45]];
+                   else {
+                     te(ee[-Oe[46]] += ee[Oe[45]] * Oe[26], ee[-Oe[47]] |= ee[-Oe[46]] << ee[Oe[21]], ee[Oe[21]] += (ee[-Oe[46]] & Oe[27]) > Oe[28] ? Oe[29] : Oe[30]);
+                     do {
+                       te(ee[Oe[10]].push(ee[-Oe[47]] & Oe[11]), ee[-Oe[47]] >>= Oe[3], ee[Oe[21]] -= Oe[3])
+                     } while (ee[Oe[21]] > Oe[23]);
+                     ee[-Oe[46]] = -Oe[2]
+                   } return ee[-Oe[46]] > -Oe[2] && ee[Oe[10]].push((ee[-Oe[47]] | ee[-Oe[46]] << ee[Oe[21]]) & Oe[11]), de(ee[Oe[10]])
+             }
+ 
+ ... (8 more added lines; see GitHub link above)
```

#### 2538. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18885-L18897` → after: `L18118-L18130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18118-L18130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18118-L18130) · [Before (L18885-L18897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18885-L18897)

```diff
-     var dB, KB, uB, mB, IB, FB, iB, LB, gB, rB = GB(38798),
-       XB = GB(38801),
-       wB = GB(38011),
-       EB = GB(38019),
-       cB = GB(38005),
-       hB = GB(39115),
-       aB = GB(3573),
-       eB = GB(3580),
-       TB = GB(37928),
-       bB = GB(37880),
-       CB = GB(37962),
-       HB = GB(37946);
-     class vB extends rB.e {
+     var Ze, we, De, Pe, Ae, Ye, Ve, ae, ce, xe = He(38944),
+       Le = He(38949),
+       Ce = He(38137),
+       ve = He(38141),
+       ue = He(38126),
+       me = He(39249),
+       le = He(3465),
+       Se = He(3473),
+       ne = He(38049),
+       je = He(38012),
+       se = He(38075),
+       Ie = He(38057);
+     class he extends xe.c {
```

#### 2539. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18902` → after: `L18135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18135) · [Before (L18902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18902)

```diff
-           eq: GB,
+           yp: He,
```

#### 2540. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18909` → after: `L18142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18142) · [Before (L18909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18909)

```diff
-           } = DB[QB], oB = aB.c.getTexture(`${OB}${QB}_Atlas`, eB.h.LIFEFORM_ATLAS).url, {
+           } = be[Me], Ke = le.c.getTexture(`${ie}${Me}_Atlas`, Se.j.LIFEFORM_ATLAS).url, {
```

#### 2541. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18911-L18913` → after: `L18144-L18146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18144-L18146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18144-L18146) · [Before (L18911-L18913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18911-L18913)

```diff
-           } = (0, TB.c)({
-             name: `${OB}${QB}SpriteSheet`,
-             eq: GB,
+           } = (0, ne.b)({
+             name: `${ie}${Me}SpriteSheet`,
+             yp: He,
```

#### 2542. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18915` → after: `L18148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18148) · [Before (L18915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18915)

```diff
-               transparencyMode: bB.d.MATERIAL_ALPHATEST,
+               transparencyMode: je.e.MATERIAL_ALPHATEST,
```

#### 2543. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18921` → after: `L18154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18154) · [Before (L18921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18921)

```diff
-                 samplingMode: CB.g.nearestNearestMipLinear,
+                 samplingMode: se.h.nearestNearestMipLinear,
```

#### 2544. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18930` → after: `L18163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18163) · [Before (L18930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18930)

```diff
-               (0, XB.e)(OB, BB, 1, 1), (0, HB.w)(OB, wB.c), (0, EB.e)(OB, (0, NB.g)().UP), (0, cB.d)(OB), (0, HB.K)(OB)
+               (0, Le.d)(ie, ee, 1, 1), (0, Ie.u)(ie, Ce.d), (0, ve.e)(ie, (0, Xe.h)().PR), (0, ue.e)(ie), (0, Ie.I)(ie)
```

#### 2545. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18938-L18939` → after: `L18171-L18172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18171-L18172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18171-L18172) · [Before (L18938-L18939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18938-L18939)

```diff
-         const YB = (0, hB.d)(OB, GB);
-         if (!YB) return void console.error(`No texture metadata found for variation "${GB}" of mob type "${OB}"`);
+         const ye = (0, me.b)(ie, He);
+         if (!ye) return void console.error(`No texture metadata found for variation "${He}" of mob type "${ie}"`);
```

#### 2546. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18955` → after: `L18188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18188) · [Before (L18955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18955)

```diff
-     const sB = ["b", 0, 1, 8, 3, 108, "i", 7, 192, 133, 53, 255, "length", "d", 19, "c", 212, "undefined", void 0, 199, 207, 158, 148, 63, 6, "fromCodePoint", 12, "push", "a", 2, "h", 235, 9, "g", 91, 5, 8191, 88, 13, 14, 4, !0, 256, 65537, 23, 100, 30, 165, 146, "e", "f", 139, 3 … [truncated]
+     const Ne = [0, 1, 8, 255, "length", "c", 58, 109, 4, "undefined", void 0, "b", 204, "d", 3, 106, 63, 6, "fromCodePoint", 7, 12, "push", 237, 111, "a", 92, 80, "i", 91, 5, "f", 8191, 88, 13, 14, !0, !1];
```

#### 2547. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18958` → after: `L18191-L18206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18191-L18206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18191-L18206) · [Before (L18958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18958)

```diff
-       return BB[sB[12]] = sB[2], typeof mB !== sB[17] && mB ? (new mB).decode(new IB(BB[sB[1]])) : typeof FB !== sB[17] && FB ? FB.from(BB[sB[1]]).toString("utf-8") : gB(BB[sB[1]])
+       return ee[Ne[4]] = Ne[1], typeof Ze[ee[Ne[0]]] === Ne[9] ? Ze[ee[Ne[0]]] = function(ee) {
+         var ie, He, ye, be, Me, Ke, Ue;
+         for (Qe(ie = "" + (ee || ""), He = ie.length, ye = [], be = Ne[0], Me = Ne[0], Ke = -Ne[1]), Ue = Ne[0]; Ue < He; Ue++) {
+           var Fe = 'e9.F<t=0Jw@KbcNi+y/67v&r(s2_C,MZ{L!zxRV#*%~k$u5]43I)D[1Q}`8BH:G>^AdjO|Sp;lqPXUTE?"gnaWhYmof'.indexOf(ie[Ue]);
+           if (Fe !== -Ne[1])
+             if (Ke < Ne[0]) Ke = Fe;
+             else {
+               Qe(Ke += Fe * Ne[28], be |= Ke << Me, Me += (Ke & Ne[31]) > Ne[32] ? Ne[33] : Ne[34]);
+               do {
+                 Qe(ye.push(be & Ne[3]), be >>= Ne[2], Me -= Ne[2])
+               } while (Me > Ne[19]);
+               Ke = -Ne[1]
+             }
+         }
+         return Ke > -Ne[1] && ye.push((be | Ke << Me) & Ne[3]), re(ye)
+       }(we[ee[Ne[0]]]) : Ze[ee[Ne[0]]]
```

#### 2548. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18961` → after: `L18209-L18211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18209-L18211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18209-L18211) · [Before (L18961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18961)

```diff
-     function tB() {}
+     function re(ee) {
+       return typeof Pe !== Ne[9] && Pe ? (new Pe).decode(new Ae(ee)) : typeof Ye !== Ne[9] && Ye ? Ye.from(ee).toString("utf-8") : ce(ee)
+     }
```

#### 2549. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18966-L18996` → after: `L18216-L18253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18216-L18253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18216-L18253) · [Before (L18966-L18996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18966-L18996)

```diff
-     BO(dB = {}, KB = ["u@O3[`F9sCG/(go{sjx=K<57hq0/7/,;", 'P`:hU"g7w0x|;g_', '/:#TC4TcAle}]b8|z%zjd^<"LvAkB%JM8:ITzQacO_uW*P9).4kjAEu', "mMM<H^G(h", "UMyrD`J`h,D|F/{sZ5<VT>ca", "&Da$eEsI(8lh?7v|*Z9HzQNf%,b`+^McAF1|i(#(;G*", "_@z{P9u", '@&>U;g09X1XM"zn!6]3~|7m?%Z%?om+w9u', 'pUjqIQ … [truncated]
-         BO(BB[sB[12]] = sB[1], BB[sB[15]] = [function() {
-           return globalThis
-         }, function() {
-           return global
-         }, function() {
-           return window
-         }, function() {
-           return new Function("return this")()
-         }], BB[sB[13]] = sB[18], BB[sB[14]] = []);
-         try {
-           BO(BB[sB[13]] = Object, BB[sB[14]][sB[27]]("".__proto__.constructor.name))
-         } catch (KB) {}
-         BB: for (BB[sB[4]] = sB[1]; BB[sB[4]] < BB[sB[15]][sB[12]]; BB[sB[4]]++) try {
-           for (BB[sB[13]] = BB[sB[15]][BB[sB[4]]](), BB[-sB[16]] = sB[1]; BB[-sB[16]] < BB[sB[14]][sB[12]]; BB[-sB[16]]++)
-             if (typeof BB[sB[13]][BB[sB[14]][BB[-sB[16]]]] === sB[17]) continue BB;
- ... (15 more removed lines; see GitHub link above)
+     Qe(Ze = {}, we = ["O=+w4g%03/", "$pI_6|2xTJkdhs2zRyF", "N`sMpG]6@Q.!(_Z,/,<q{Ot%%NpS9aJZjyU0?x?8y`5Qz2:y_iRq}H&5d>#", "p4j2|q8qj`Y`CB`,J57Q]3e", "o#/_/G/xa1W[l(3#3e", '%)J1M*"|Zv4lmxQ,CkdJ~l/.', "b3uXTxT8AHh5s;+_T)u<PVp>?/_=5cxy+9", 'N55C`ag*kJkDL4JZeHgt:4E`@NWjl"6_MATDCpm!Li … [truncated]
+       Qe(ee[Ne[4]] = Ne[0], ee[-Ne[7]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], ee[Ne[1]] = Ne[10], ee[Ne[5]] = []);
+       try {
+         Qe(ee[Ne[1]] = Object, ee[Ne[5]][Ne[21]]("".__proto__.constructor.name))
+       } catch (we) {}
+       ee: for (ee[Ne[6]] = Ne[0]; ee[Ne[6]] < ee[-Ne[7]][Ne[4]]; ee[Ne[6]]++) try {
+         for (ee[Ne[1]] = ee[-Ne[7]][ee[Ne[6]]](), ee[Ne[8]] = Ne[0]; ee[Ne[8]] < ee[Ne[5]][Ne[4]]; ee[Ne[8]]++)
+           if (typeof ee[Ne[1]][ee[Ne[5]][ee[Ne[8]]]] === Ne[9]) continue ee;
+ ... (22 more added lines; see GitHub link above)
```

#### 2550. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18998` → after: `L18255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18255) · [Before (L18998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L18998)

```diff
-                 BO(BB[sB[7]] += BB[sB[6]] * sB[34], BB[sB[8]] |= BB[sB[7]] << BB[-sB[9]], BB[-sB[9]] += (BB[sB[7]] & sB[36]) > sB[37] ? sB[38] : sB[39]);
+                 Qe(ee[Ne[19]] += ee[Ne[27]] * Ne[28], ee[Ne[29]] |= ee[Ne[19]] << ee[Ne[30]], ee[Ne[30]] += (ee[Ne[19]] & Ne[31]) > Ne[32] ? Ne[33] : Ne[34]);
```

#### 2551. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19000-L19067` → after: `L18257-L18260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18257-L18260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18257-L18260) · [Before (L19000-L19067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19000-L19067)

```diff
-                   BO(BB[sB[10]].push(BB[sB[8]] & sB[11]), BB[sB[8]] >>= sB[3], BB[-sB[9]] -= sB[3])
-                 } while (BB[-sB[9]] > sB[7]);
-                 BB[sB[7]] = -sB[2]
-               } return BB[sB[7]] > -sB[2] && BB[sB[10]].push((BB[sB[8]] | BB[sB[7]] << BB[-sB[9]]) & sB[11]), xB(BB[sB[10]])
-         }(KB[BB[sB[1]]]) : dB[BB[sB[1]]]
-       }(95) + "4" in tB && function(...BB) {
-         BB[sB[12]] = sB[1];
-         const OB = require("big-integer");
-         BO(BB[sB[28]] = class {
-           static randomPrime(...BB) {
-             BB[sB[12]] = sB[2];
-             const GB = OB.one.shiftLeft(BB[sB[1]] - sB[2]),
-               YB = OB.one.shiftLeft(BB[sB[1]]).prev();
-             for (; sB[41];) {
-               let BB = OB.randBetween(GB, YB);
-               if (BB.isProbablePrime(sB[42])) return BB
- ... (52 more removed lines; see GitHub link above)
+                   Qe(ee[Ne[8]].push(ee[Ne[29]] & Ne[3]), ee[Ne[29]] >>= Ne[2], ee[Ne[30]] -= Ne[2])
+                 } while (ee[Ne[30]] > Ne[19]);
+                 ee[Ne[19]] = -Ne[1]
+               } return ee[Ne[19]] > -Ne[1] && ee[Ne[8]].push((ee[Ne[29]] | ee[Ne[19]] << ee[Ne[30]]) & Ne[3]), re(ee[Ne[8]])
```

#### 2552. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19117-L19132` → after: `L18263-L18264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18263-L18264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18263-L18264) · [Before (L19117-L19132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19117-L19132)

```diff
-               function GB(...BB) {
-                 BO(BB[sB[12]] = sB[1], BB[sB[15]] = function(...BB) {
-                   for (BO(BB[sB[12]] = sB[2], BB[sB[28]] = sB[1], BB[sB[59]] = {}, BB[sB[4]] = sB[1], BB[sB[13]] = sB[1], BB[sB[35]] = sB[1], BB[sB[50]] = BB[sB[1]].length), BB[-sB[58]] = sB[1]; BB[-sB[58]] < BB[sB[50]]; BB[-sB[58]]++) {
-                     for (BO(BB[sB[59]] = {}, BB[sB[4]] = sB[1], BB[sB[13]] = sB[2]), BB[sB[60]] = BB[-sB[58]] + sB[2]; BB[sB[60]] < BB[sB[50]]; BB[sB[60]]++) BB[sB[1]][BB[-sB[58]]].x !== BB[sB[1]][BB[sB[60]]].x || BB[sB[1]][BB[-sB[58]]].y !== BB[sB[1]][BB[sB[60]]].y ? (BB[sB[1]][ … [truncated]
-                     BO(BB[sB[4]] += BB[sB[13]], BB[sB[28]] = Math.max(BB[sB[28]], BB[sB[4]]))
-                   }
-                   return BB[sB[28]]
-                 }, console.log(BB[sB[15]]))
-               }
-               OB(99) + "s" in tB && GB();
-               let YB = sB[18];
-               BO(DB = sB[41], (0, RB[OB(sB[45])])(WB.dj, YB))
-             }
-           }), 13318), (0, RB[BB(101) + GB(102)])((() => {
-             DB = sB[61]
-           })))
+         function ie(...ie) {
+           return ie[Ne[4]] = Ne[1], typeof Ze[ie[Ne[0]]] === Ne[9] ? Ze[ie[Ne[0]]] = ee(we[ie[Ne[0]]]) : Ze[ie[Ne[0]]]
```

#### 2553. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19134-L19135` → after: `L18266-L18277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18266-L18277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18266-L18277) · [Before (L19134-L19135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19134-L19135)

```diff
-       })();
-     var OO = GB(641);
+         let He = Ne[36];
+         Qe(setInterval((() => {
+           if (!He && (0, Xe.h)()) {
+             let ee = Ne[10];
+             Qe(He = Ne[35], (0, ze[Ge(77)])(Be.aj, ee))
+           }
+         }), 16049), (0, ze[ie(78) + ie(79)])((() => {
+           He = Ne[36]
+         })))
+       }
+     })();
+     var ei = He(610);
```

#### 2554. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19248` → after: `L18390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18390) · [Before (L19248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19248)

```diff
-     class YO extends pB.d {
+     class Hi extends fe.b {
```

#### 2555. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19250` → after: `L18392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18392) · [Before (L19250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19250)

```diff
-         if (super(BB), BB.lifeformType !== DO) throw new Error(`NPC Meshes are not supported for lifeform type "${BB.lifeformType}"`)
+         if (super(ee), ee.lifeformType !== yi) throw new Error(`NPC Meshes are not supported for lifeform type "${ee.lifeformType}"`)
```

#### 2556. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19253` → after: `L18395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18395) · [Before (L19253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19253)

```diff
-         const YB = (0, NB.g)().UP.kF.getEntityId(BB),
+         const ye = (0, Xe.h)().PR.vx.getEntityId(ee),
```

#### 2557. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19274` → after: `L18416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18416) · [Before (L19274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19274)

```diff
-               oB.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", BB)
+               Ke.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", ee)
```

#### 2558. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19282` → after: `L18424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18424) · [Before (L19282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19282)

```diff
-               oB.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", BB)
+               Ke.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", ee)
```

#### 2559. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19290` → after: `L18432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18432) · [Before (L19290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19290)

```diff
-               oB.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", BB)
+               Ke.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", ee)
```

#### 2560. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19299` → after: `L18441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18441) · [Before (L19299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19299)

```diff
-             super.onChangeClient(BB, OB), "ownerDbId" === BB && this.setCollarVisible(!(0, OO.Q)(OB))
+             super.onChangeClient(ee, ie), "ownerDbId" === ee && this.setCollarVisible(!(0, ei.P)(ie))
```

#### 2561. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19302` → after: `L18444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18444) · [Before (L19302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19302)

```diff
-             oB.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", BB)
+             Ke.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", ee)
```

#### 2562. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19307` → after: `L18449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18449) · [Before (L19307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19307)

```diff
-         Player: pB.d,
+         Player: fe.b,
```

#### 2563. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19313-L19314` → after: `L18455-L18456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18455-L18456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18455-L18456) · [Before (L19313-L19314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19313-L19314)

```diff
-         const QB = (0, DB.b)(GB),
-           oB = null !== (OB = jO[GB]) && void 0 !== OB ? OB : vB,
+         const Me = (0, be.d)(He),
+           Ke = null !== (ie = Ki[He]) && void 0 !== ie ? ie : he,
```

#### 2564. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19328` → after: `L18470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18470) · [Before (L19328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19328)

```diff
-                 atlas: null === BB.atlasTexture ? aB.c.getArmourAtlas() : aB.c.getTexture(BB.atlasTexture, eB.h.LIFEFORM_ATLAS).url,
+                 atlas: null === ee.atlasTexture ? le.c.getArmourAtlas() : le.c.getTexture(ee.atlasTexture, Se.j.LIFEFORM_ATLAS).url,
```

#### 2565. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19337` → after: `L18479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18479) · [Before (L19337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19337)

```diff
-           RJ: oO[YB.handler],
+           oJ: Mi[ye.handler],
```

#### 2566. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19343` → after: `L18485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18485) · [Before (L19343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19343)

```diff
-   38780: (BB, OB, GB) => {
+   38933: (ee, ie, He) => {
```

#### 2567. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19345` → after: `L18487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18487) · [Before (L19345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19345)

```diff
-       c: () => DB
+       e: () => be
```

#### 2568. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19347` → after: `L18489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18489) · [Before (L19347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19347)

```diff
-     var YB = GB(37871);
+     var ye = He(38005);
```

#### 2569. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19350` → after: `L18492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18492) · [Before (L19350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19350)

```diff
-       return null !== OB && void 0 !== OB ? OB : YB.e[BB]
+       return null !== ie && void 0 !== ie ? ie : ye.b[ee]
```

#### 2570. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19353` → after: `L18495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18495) · [Before (L19353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19353)

```diff
-   38786: (BB, OB, GB) => {
+   38936: (ee, ie, He) => {
```

#### 2571. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19355` → after: `L18497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18497) · [Before (L19355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19355)

```diff
-       d: () => YB,
+       b: () => ye,
```

#### 2572. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19364` → after: `L18506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18506) · [Before (L19364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19364)

```diff
-   37996: (BB, OB, GB) => {
+   38118: (ee, ie, He) => {
```

#### 2573. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19366-L19367` → after: `L18508-L18509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18508-L18509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18508-L18509) · [Before (L19366-L19367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19366-L19367)

```diff
-       b: () => zB,
-       c: () => PB
+       c: () => ke,
+       e: () => Re
```

#### 2574. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19369-L19374` → after: `L18511-L18516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18511-L18516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18511-L18516) · [Before (L19369-L19374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19369-L19374)

```diff
-     var YB = GB(37946),
-       DB = GB(38049),
-       QB = GB(38019),
-       oB = GB(38005),
-       jB = GB(38011),
-       yB = GB(37849);
+     var ye = He(38057),
+       be = He(38171),
+       Me = He(38141),
+       Ke = He(38126),
+       Ue = He(38137),
+       Fe = He(37987);
```

#### 2575. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19379` → after: `L18521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18521) · [Before (L19379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19379)

```diff
-       return JB.get((0, yB.k)(BB, OB))
+       return Je.get((0, Fe.m)(ee, ie))
```

#### 2576. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19383` → after: `L18525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18525) · [Before (L19383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19383)

```diff
-       const zB = (0, yB.k)(OB, GB);
+       const ke = (0, Fe.m)(ie, He);
```

#### 2577. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19386-L19388` → after: `L18528-L18530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18528-L18530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18528-L18530) · [Before (L19386-L19388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19386-L19388)

```diff
-         const MB = await (0, yB.n)(OB, BB.UP.eq),
-           lB = (0, yB.g)(null !== GB && void 0 !== GB ? GB : OB, BB.UP.eq, (OB => {
-             (0, YB.w)(OB, jB.c), (0, QB.e)(OB, BB.UP), (0, oB.d)(OB), (0, YB.K)(OB)
+         const oe = await (0, Fe.o)(ie, ee.PR.yp),
+           qe = (0, Fe.i)(null !== He && void 0 !== He ? He : ie, ee.PR.yp, (ie => {
+             (0, ye.u)(ie, Ue.d), (0, Me.e)(ie, ee.PR), (0, Ke.e)(ie), (0, ye.I)(ie)
```

#### 2578. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19390` → after: `L18532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18532) · [Before (L19390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19390)

```diff
-         (0, yB.r)(MB, lB, {
+         (0, Fe.q)(oe, qe, {
```

#### 2579. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19394` → after: `L18536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18536) · [Before (L19394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19394)

```diff
-             (0, DB.e)(BB) || BB.JF().sF(BB)
+             (0, be.f)(ee) || ee.Xx().gL(ee)
```

#### 2580. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19402` → after: `L18544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18544) · [Before (L19402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19402)

```diff
-   37849: (BB, OB, GB) => {
+   37987: (ee, ie, He) => {
```

#### 2581. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19404-L19409` → after: `L18546-L18551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18546-L18551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18546-L18551) · [Before (L19404-L19409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19404-L19409)

```diff
-       c: () => AB,
-       g: () => NB,
-       k: () => lB,
-       n: () => pB,
-       r: () => RB,
-       v: () => ZB,
+       e: () => Ee,
+       i: () => Xe,
+       m: () => qe,
+       o: () => fe,
+       q: () => ze,
+       t: () => pe,
```

#### 2582. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19412-L19421` → after: `L18554-L18563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18554-L18563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18554-L18563) · [Before (L19412-L19421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19412-L19421)

```diff
-     var YB = GB(37857),
-       DB = GB(37877),
-       QB = GB(37885),
-       oB = GB(37880),
-       jB = GB(37962),
-       yB = GB(37946),
-       JB = GB(37771),
-       MB = GB(37899),
-       PB = GB(37928),
-       zB = GB(37984);
+     var ye = He(37992),
+       be = He(38007),
+       Me = He(38020),
+       Ke = He(38012),
+       Ue = He(38075),
+       Fe = He(38057),
+       Je = He(37913),
+       oe = He(38026),
+       Re = He(38049),
+       ke = He(38107);
```

#### 2583. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19424` → after: `L18566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18566) · [Before (L19424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19424)

```diff
-       return OB ? `${BB}|${OB}` : BB
+       return ie ? `${ee}|${ie}` : ee
```

#### 2584. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19428-L19429` → after: `L18570-L18571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18570-L18571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18570-L18571) · [Before (L19428-L19429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19428-L19429)

```diff
-       const GB = (0, YB.q)("Player", `${BB}.glb`).replace("model/gltf-binary;", "");
-       return (0, zB.g)("", OB, {
+       const He = (0, ye.m)("Player", `${ee}.glb`).replace("model/gltf-binary;", "");
+       return (0, ke.e)("", ie, {
```

#### 2585. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19435` → after: `L18577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18577) · [Before (L19435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19435)

```diff
-       BB.position.uBB(0), BB.rotation = JB.Xp.Zero(), BB.SP.uBB(1), BB.mF();
+       ee.position.Iee(0), ee.rotation = Je.rf.Zero(), ee.wR.Iee(1), ee.RL();
```

#### 2586. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19442` → after: `L18584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18584) · [Before (L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19442)

```diff
-         BB.position.uBB(0), BB.rotationQuaternion ? BB.rotationQuaternion.set(0, 0, 0, 1) : BB.rotation.uBB(0), BB.SP.uBB(1), BB.mF();
+         ee.position.Iee(0), ee.rotationQuaternion ? ee.rotationQuaternion.set(0, 0, 0, 1) : ee.rotation.Iee(0), ee.wR.Iee(1), ee.RL();
```

#### 2587. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19450-L19452` → after: `L18592-L18594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18592-L18594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18592-L18594) · [Before (L19450-L19452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19450-L19452)

```diff
-       return (0, PB.c)({
-         name: `${BB}Attachment`,
-         eq: OB,
+       return (0, Re.b)({
+         name: `${ee}Attachment`,
+         yp: ie,
```

#### 2588. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19455` → after: `L18597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18597) · [Before (L19455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19455)

```diff
-           transparencyMode: oB.d.MATERIAL_ALPHATEST,
+           transparencyMode: Ke.e.MATERIAL_ALPHATEST,
```

#### 2589. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19458` → after: `L18600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18600) · [Before (L19458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19458)

```diff
-             url: (0, YB.q)("Player", `${BB}.png`),
+             url: (0, ye.m)("Player", `${ee}.png`),
```

#### 2590. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19461` → after: `L18603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18603) · [Before (L19461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19461)

```diff
-             samplingMode: jB.g.nearestNearestMipLinear,
+             samplingMode: Ue.h.nearestNearestMipLinear,
```

#### 2591. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19470` → after: `L18612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18612) · [Before (L19470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19470)

```diff
-           (0, yB.w)(BB, MB.d), null === GB || void 0 === GB || GB(BB)
+           (0, Fe.u)(ee, oe.b), null === He || void 0 === He || He(ee)
```

#### 2592. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19482` → after: `L18624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18624) · [Before (L19482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19482)

```diff
-         if (jB.getVerticesData("uv")) jB.material = OB, (0, DB.u)(jB) || (0, DB.D)(jB, 1 / 512), WB(jB), jB.sideOrientation = null !== GB && void 0 !== GB && GB.backFaceCulling ? oB.d.ClockWiseSideOrientation : oB.d.CounterClockWiseSideOrientation, null === GB || void 0 === GB || … [truncated]
+         if (Ue.getVerticesData("uv")) Ue.material = ie, (0, be.t)(Ue) || (0, be.C)(Ue, 1 / 512), Be(Ue), Ue.sideOrientation = null !== He && void 0 !== He && He.backFaceCulling ? Ke.e.ClockWiseSideOrientation : Ke.e.CounterClockWiseSideOrientation, null === He || void 0 === He || … [truncated]
```

#### 2593. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19488` → after: `L18630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18630) · [Before (L19488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19488)

```diff
-       BB.BX("aHueColour", 4), BB.yX.aHueColour = new QB.e(0, 0, 0, 0)
+       ee.fC("aHueColour", 4), ee.pC.aHueColour = new Me.e(0, 0, 0, 0)
```

#### 2594. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19499` → after: `L18641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18641) · [Before (L19499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19499)

```diff
-       for (const YB of [BB, ...BB.getChildMeshes()]) YB.yX && (YB.yX.aHueColour = GB)
+       for (const ye of [ee, ...ee.getChildMeshes()]) ye.pC && (ye.pC.aHueColour = He)
```

#### 2595. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19502` → after: `L18644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18644) · [Before (L19502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19502)

```diff
-   37857: (BB, OB, GB) => {
+   37992: (ee, ie, He) => {
```

#### 2596. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19505` → after: `L18647-L18648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18647-L18648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18647-L18648) · [Before (L19505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19505)

```diff
-       g: () => zB,
+       f: () => ke,
+       i: () => Fe,
```

#### 2597. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19513-L19516` → after: `L18655-L18658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18655-L18658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18655-L18658) · [Before (L19513-L19516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19513-L19516)

```diff
-     var YB = GB(25),
-       DB = GB(37871),
-       QB = GB(37452),
-       oB = GB(3088);
+     var ye = He(27),
+       be = He(38005),
+       Me = He(37590),
+       Ke = He(2969);
```

#### 2598. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19519` → after: `L18661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18661) · [Before (L19519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19519)

```diff
-       return GB(37863)(`./${BB}/${OB}`)
+       return He(38e3)(`./${ee}/${ie}`)
```

#### 2599. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19528` → after: `L18670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18670) · [Before (L19528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19528)

```diff
-       const QB = YB.o.subscribe(`otherEntitySettingsClientifiedEId|${OB}|multilineTextBox`, (GB => {
+       const Me = ye.h.subscribe(`otherEntitySettingsClientifiedEId|${ie}|multilineTextBox`, (He => {
```

#### 2600. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19531` → after: `L18673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18673) · [Before (L19531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19531)

```diff
-       return MB(BB, OB, null === (GB = BB.FX[BB.EX]) || void 0 === GB || null === (DB = GB[OB]) || void 0 === DB ? void 0 : DB.multilineTextBox), QB
+       return oe(ee, ie, null === (He = ee.zC[ee.gC]) || void 0 === He || null === (be = He[ie]) || void 0 === be ? void 0 : be.multilineTextBox), Me
```

#### 2601. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19535-L19536` → after: `L18677-L18678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18677-L18678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18677-L18678) · [Before (L19535-L19536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19535-L19536)

```diff
-       const YB = BB.DW.YGB(OB, "entityMultilineTextBox");
-       null === GB || void 0 === GB ? YB && BB.DW.dL(OB, "entityMultilineTextBox") : YB || BB.DW.RL(OB, "entityMultilineTextBox")
+       const ye = ee.sE.gHe(ie, "entityMultilineTextBox");
+       null === He || void 0 === He ? ye && ee.sE.lL(ie, "entityMultilineTextBox") : ye || ee.sE.uL(ie, "entityMultilineTextBox")
```

#### 2602. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19541` → after: `L18683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18683) · [Before (L19541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19541)

```diff
-         QB = BB.DW.getState(OB, "meshRotation");
+         Me = ee.sE.getState(ie, "meshRotation");
```

#### 2603. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19546-L19547` → after: `L18688-L18689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18688-L18689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18688-L18689) · [Before (L19546-L19547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19546-L19547)

```diff
-       const OB = (0, oB.g)();
-       if (OB.FX[OB.EX][BB]) return;
+       const ie = (0, Ke.h)();
+       if (ie.zC[ie.gC][ee]) return;
```

#### 2604. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19549` → after: `L18691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18691) · [Before (L19549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19549)

```diff
-       OB.FX[OB.EX][BB] = {}, OB.FX[OB.EX][GB] = {}, OB.FX[OB.QGB][BB] = {}, OB.FX[OB.QGB][GB] = {}
+       ie.zC[ie.gC][ee] = {}, ie.zC[ie.gC][He] = {}, ie.zC[ie.dHe][ee] = {}, ie.zC[ie.dHe][He] = {}
```

#### 2605. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19553` → after: `L18695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18695) · [Before (L19553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19553)

```diff
-       const YB = (0, oB.g)(),
+       const ye = (0, Ke.h)(),
```

#### 2606. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19555` → after: `L18697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18697) · [Before (L19555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19555)

```diff
-       YB.FX[YB.EX][BB][OB] = GB, YB.FX[YB.EX][DB][OB] = GB, YB.FX[YB.QGB][BB][OB] = GB, YB.FX[YB.QGB][DB][OB] = GB, pB(BB, OB, GB)
+       ye.zC[ye.gC][ee][ie] = He, ye.zC[ye.gC][be][ie] = He, ye.zC[ye.dHe][ee][ie] = He, ye.zC[ye.dHe][be][ie] = He, fe(ee, ie, He)
```

#### 2607. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19559` → after: `L18701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18701) · [Before (L19559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19559)

```diff
-       const oB = void 0 === GB ? DB.e[OB] : GB,
+       const Ke = void 0 === He ? be.b[ie] : He,
```

#### 2608. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19561` → after: `L18703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18703) · [Before (L19561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19561)

```diff
-       YB.o.tM(`otherEntitySettings|${OB}`, {
+       ye.h.yR(`otherEntitySettings|${ie}`, {
```

#### 2609. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19564` → after: `L18706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18706) · [Before (L19564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19564)

```diff
-       }), YB.o.tM(`otherEntitySettings|${BB}|${OB}`, oB), YB.o.tM(`otherEntitySettingsClientifiedEId|${jB}|${OB}`, oB)
+       }), ye.h.yR(`otherEntitySettings|${ee}|${ie}`, Ke), ye.h.yR(`otherEntitySettingsClientifiedEId|${Ue}|${ie}`, Ke)
```

#### 2610. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19568-L19569` → after: `L18710-L18711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18710-L18711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18710-L18711) · [Before (L19568-L19569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19568-L19569)

```diff
-       const YB = BB.DW.iGB(OB);
-       YB && (null !== YB.uF ? BB.UP.kF.Zk(YB.uF, GB) : BB.UP.NJB(YB.mesh, GB))
+       const ye = ee.sE.rHe(ie);
+       ye && (null !== ye.Ix ? ee.PR.vx.JY(ye.Ix, He) : ee.PR.lJe(ye.mesh, He))
```

#### 2611. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19572` → after: `L18714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18714) · [Before (L19572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19572)

```diff
-   38757: (BB, OB, GB) => {
+   38907: (ee, ie, He) => {
```

#### 2612. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19575` → after: `L18717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18717) · [Before (L19575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19575)

```diff
-       const DB = null === (GB = BB.DW.JYB(OB)) || void 0 === GB ? void 0 : GB.cW;
+       const be = null === (He = ee.sE.Yye(ie)) || void 0 === He ? void 0 : He.OW;
```

#### 2613. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19579` → after: `L18721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18721) · [Before (L19579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19579)

```diff
-       e: () => YB
+       b: () => ye
```

#### 2614. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19582` → after: `L18724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18724) · [Before (L19582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19582)

```diff
-   38606: (BB, OB, GB) => {
+   38770: (ee, ie, He) => {
```

#### 2615. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19584-L19586` → after: `L18726-L18728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18726-L18728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18726-L18728) · [Before (L19584-L19586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19584-L19586)

```diff
-       b: () => yB,
-       e: () => MB,
-       h: () => JB
+       c: () => Fe,
+       g: () => oe,
+       i: () => Je
```

#### 2616. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19588-L19592` → after: `L18730-L18734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18730-L18734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18730-L18734) · [Before (L19588-L19592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19588-L19592)

```diff
-     var YB = GB(37946),
-       DB = GB(38167),
-       QB = GB(38615),
-       oB = GB(38019),
-       jB = GB(3088);
+     var ye = He(38057),
+       be = He(38307),
+       Me = He(38772),
+       Ke = He(38141),
+       Ue = He(2969);
```

#### 2617. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19595-L19597` → after: `L18737-L18739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18737-L18739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18737-L18739) · [Before (L19595-L19597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19595-L19597)

```diff
-       (0, QB.d)(BB, (BB => {
-         const OB = (0, YB.U)(BB);
-         OB && !(0, YB.A)(OB, oB.f.name) && (0, oB.e)(OB, (0, jB.g)().UP)
+       (0, Me.b)(ee, (ee => {
+         const ie = (0, ye.V)(ee);
+         ie && !(0, ye.y)(ie, Ke.f.name) && (0, Ke.e)(ie, (0, Ue.h)().PR)
```

#### 2618. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19606` → after: `L18748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18748) · [Before (L19606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19606)

```diff
-       BB.BX("aLightLevels", 4), BB.yX.aLightLevels = (0, DB.m)()
+       ee.fC("aLightLevels", 4), ee.pC.aLightLevels = (0, be.o)()
```

#### 2619. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19609` → after: `L18751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18751) · [Before (L19609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19609)

```diff
-   37761: (BB, OB, GB) => {
+   37899: (ee, ie, He) => {
```

#### 2620. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19612-L19613` → after: `L18755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18755) · [Before (L19612-L19613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19612-L19613)

```diff
-       h: () => NB,
-       l: () => RB
+       g: () => ze
```

#### 2621. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19615-L19627` → after: `L18757-L18769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18757-L18769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18757-L18769) · [Before (L19615-L19627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19615-L19627)

```diff
-     var YB = GB(38167),
-       DB = GB(38055),
-       QB = GB(37880),
-       oB = GB(3088),
-       jB = GB(4111),
-       yB = GB(37452),
-       JB = GB(37763),
-       MB = GB(38275),
-       PB = GB(38289),
-       zB = GB(37771),
-       lB = GB(4642),
-       pB = GB(38294),
-       qB = GB(37839);
+     var ye = He(38307),
+       be = He(38173),
+       Me = He(38012),
+       Ke = He(2969),
+       Ue = He(4075),
+       Fe = He(37590),
+       Je = He(37906),
+       oe = He(38425),
+       Re = He(38447),
+       ke = He(37913),
+       qe = He(4598),
+       fe = He(38450),
+       Te = He(37965);
```

#### 2622. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19639-L19642` → after: `L18781-L18784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18781-L18784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18781-L18784) · [Before (L19639-L19642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19639-L19642)

```diff
-           tB: GB,
-           BO: YB,
-           OO: DB
-         } = OB, QB = (0, yB.b)(GB), oB = (0, qB.c)(BB);
+           bi: He,
+           Mi: ye,
+           Ki: be
+         } = ie, Me = (0, Fe.b)(He), Ke = (0, Te.d)(ee);
```

#### 2623. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19644-L19645` → after: `L18786-L18787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18786-L18787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18786-L18787) · [Before (L19644-L19645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19644-L19645)

```diff
-         const jB = BB.DW.iGB(QB);
-         if (jB && null === jB.uF) return;
+         const Ue = ee.sE.rHe(Me);
+         if (Ue && null === Ue.Ix) return;
```

#### 2624. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19651` → after: `L18793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18793) · [Before (L19651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19651)

```diff
-       for (const GB of (0, qB.c)(BB).getAttachments(OB)) AB(BB, GB)
+       for (const He of (0, Te.d)(ee).getAttachments(ie)) Ee(ee, He)
```

#### 2625. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19655` → after: `L18797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18797) · [Before (L19655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19655)

```diff
-       (0, qB.c)((0, oB.g)()).clearAttachments((0, yB.b)(BB))
+       (0, Te.d)((0, Ke.h)()).clearAttachments((0, Fe.b)(ee))
```

#### 2626. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19661-L19664` → after: `L18803-L18806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18803-L18806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18803-L18806) · [Before (L19661-L19664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19661-L19664)

```diff
-           tB: GB,
-           BO: YB,
-           OO: DB
-         } = OB, QB = (0, yB.b)(GB), oB = BB.DW.iGB(QB);
+           bi: He,
+           Mi: ye,
+           Ki: be
+         } = ie, Me = (0, Fe.b)(He), Ke = ee.sE.rHe(Me);
```

#### 2627. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19666-L19668` → after: `L18808-L18810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18808-L18810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18808-L18810) · [Before (L19666-L19668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19666-L19668)

```diff
-         const jB = oB.uF;
-         if (null === jB) return console.error(`attachMeshToEntity: parent ${GB} has no thin instance - not supported`), null;
-         const JB = BB.UP.kF,
+         const Ue = Ke.Ix;
+         if (null === Ue) return console.error(`attachMeshToEntity: parent ${He} has no thin instance - not supported`), null;
+         const Je = ee.PR.vx,
```

#### 2628. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19670` → after: `L18812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18812) · [Before (L19670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19670)

```diff
-         return null === MB ? (console.error(`Couldn't find node ${YB} on ${GB} to attach mesh ${DB}`), null) : {
+         return null === oe ? (console.error(`Couldn't find node ${ye} on ${He} to attach mesh ${be}`), null) : {
```

#### 2629. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19686` → after: `L18828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18828) · [Before (L19686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19686)

```diff
-       }(BB, GB), OB.OO && function(BB, OB, GB) {
+       }(ee, He), ie.Ki && function(ee, ie, He) {
```

#### 2630. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19688-L19692` → after: `L18830-L18834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18830-L18834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18830-L18834) · [Before (L19688-L19692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19688-L19692)

```diff
-           tB: YB,
-           OO: jB,
-           BO: yB,
-           GO: JB,
-           YO: MB
+           bi: ye,
+           Ki: Ue,
+           Mi: Fe,
+           Ui: Je,
+           Fi: oe
```

#### 2631. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19703` → after: `L18845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18845) · [Before (L19703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19703)

```diff
-         } = AB, IB = (0, qB.c)(BB).bumpAttachmentGeneration(WB, yB), FB = {
+         } = Ee, Ye = (0, Te.d)(ee).bumpAttachmentGeneration(Be, Fe), Ve = {
```

#### 2632. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19706-L19707` → after: `L18848-L18849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18848-L18849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18848-L18849) · [Before (L19706-L19707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19706-L19707)

```diff
-           GO: JB,
-           YO: MB,
+           Ui: Je,
+           Fi: oe,
```

#### 2633. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19709` → after: `L18851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18851) · [Before (L19709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19709)

```diff
-           BO: yB,
+           Mi: Fe,
```

#### 2634. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19718` → after: `L18860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18860) · [Before (L19718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19718)

```diff
-           } = GB, yB = oB.h.itemsClient[DB];
+           } = He, Fe = Ke.k.itemsClient[be];
```

#### 2635. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19721` → after: `L18863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18863) · [Before (L19721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19721)

```diff
-             [MB, PB, zB] = Array.isArray(QB) ? QB : [QB, QB, QB],
+             [oe, Re, ke] = Array.isArray(Me) ? Me : [Me, Me, Me],
```

#### 2636. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19728` → after: `L18870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18870) · [Before (L19728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19728)

```diff
-             ZB = pB.h.includes(jB) ? jB : void 0;
+             pe = fe.e.includes(Ue) ? Ue : void 0;
```

#### 2637. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19730` → after: `L18872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18872) · [Before (L19730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19730)

```diff
-             sJ: !1,
+             lJ: !1,
```

#### 2638. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19737` → after: `L18879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18879) · [Before (L19737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19737)

```diff
-         const LB = (0, oB.d)().client.meshCreator.getEntityMesh(uB, mB, (OB => {
+         const ce = (0, Ke.e)().client.meshCreator.getEntityMesh(Pe, Ae, (ie => {
```

#### 2639. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19739` → after: `L18881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18881) · [Before (L19739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19739)

```diff
-             if (DB = GB, !("SF" in DB) || !0 !== DB.SF) return void console.error(`Box attachment ${GB.name} is not an instance`);
+             if (be = He, !("Zx" in be) || !0 !== be.Zx) return void console.error(`Box attachment ${He.name} is not an instance`);
```

#### 2640. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19742` → after: `L18884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18884) · [Before (L19742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19742)

```diff
-               jB = nB(GB.SP, oB),
+               Ue = de(He.wR, Ke),
```

#### 2641. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19744-L19746` → after: `L18886-L18888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18886-L18888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18886-L18888) · [Before (L19744-L19746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19744-L19746)

```diff
-                 const DB = GB.yX.aShaderPackItem,
-                   oB = (0, PB.g)(YB),
-                   jB = `nodeAttachment|${GB.name}|${GB.uniqueId}|${oB}`;
+                 const be = He.pC.aShaderPackItem,
+                   Ke = (0, Re.d)(ye),
+                   Ue = `nodeAttachment|${He.name}|${He.uniqueId}|${Ke}`;
```

#### 2642. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19748-L19750` → after: `L18890-L18892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18890-L18892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18890-L18892) · [Before (L19748-L19750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19748-L19750)

```diff
-                   const yB = GB.clone(`thinNodeAttachment_${GB.name}|${oB}`, null);
-                   yB.makeGeometryUnique(), YB && (yB.sideOrientation = QB.d.ClockWiseSideOrientation), OB.newObjectType(jB, yB, {
-                     CP: 4,
+                   const Fe = He.clone(`thinNodeAttachment_${He.name}|${Ke}`, null);
+                   Fe.makeGeometryUnique(), ye && (Fe.sideOrientation = Me.e.ClockWiseSideOrientation), ie.newObjectType(Ue, Fe, {
+                     bk: 4,
```

#### 2643. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19752-L19753` → after: `L18894-L18895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18894-L18895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18894-L18895) · [Before (L19752-L19753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19752-L19753)

```diff
-                     strides: DB ? KB : dB
-                   }), OB.setPickableForType(jB, !1), BB.UP.YL(yB)
+                     strides: be ? De : we
+                   }), ie.setPickableForType(Ue, !1), ee.PR.dL(Fe)
```

#### 2644. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19758` → after: `L18900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18900) · [Before (L19758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19758)

```diff
-               }(BB, OB, GB.AQB, UB(jB, oB));
+               }(ee, ie, He.jMe, We(Ue, Ke));
```

#### 2645. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19765` → after: `L18907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18907) · [Before (L19765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19765)

```diff
-           uF: rB
+           Ix: Le
```

#### 2646. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19768-L19770` → after: `L18910-L18912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18910-L18912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18910-L18912) · [Before (L19768-L19770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19768-L19770)

```diff
-         gB && !gB.lV() && (! function(BB, OB, GB, YB) {
-           (0, DB.s)(OB, GB[0], GB[1], GB[2]), OB.rotation.set(YB[0], YB[1], YB[2])
-         }(BB.UP, gB, JB, MB), zB.attachTransformNode(gB, NB, RB))
+         xe && !xe.RZ() && (! function(ee, ie, He, ye) {
+           (0, be.n)(ie, He[0], He[1], He[2]), ie.rotation.set(ye[0], ye[1], ye[2])
+         }(ee.PR, xe, Je, oe), ke.attachTransformNode(xe, Xe, ze))
```

#### 2647. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19775` → after: `L18917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18917) · [Before (L19775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19775)

```diff
-       return !OB.has(GB.parentThinObjectId) || (0, qB.c)(BB).getAttachmentGeneration(GB.clientifiedAttachToEId, GB.BO) !== GB.generation
+       return !ie.has(He.parentThinObjectId) || (0, Te.d)(ee).getAttachmentGeneration(He.clientifiedAttachToEId, He.Mi) !== He.generation
```

#### 2648. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19783` → after: `L18925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18925) · [Before (L19783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19783)

```diff
-       return new zB.Xp(OB ? -BB.x : BB.x, BB.y, BB.z)
+       return new ke.rf(ie ? -ee.x : ee.x, ee.y, ee.z)
```

#### 2649. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19787` → after: `L18929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18929) · [Before (L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19787)

```diff
-       return (0, PB.d)(BB.x * BB.y * BB.z < 0, OB)
+       return (0, Re.c)(ee.x * ee.y * ee.z < 0, ie)
```

#### 2650. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19795-L19796` → after: `L18937-L18938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18937-L18938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18937-L18938) · [Before (L19795-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19795-L19796)

```diff
-         GO: PB,
-         YO: zB,
+         Ui: Re,
+         Fi: ke,
```

#### 2651. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19799` → after: `L18941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18941) · [Before (L19799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19799)

```diff
-       kB(OB, GB, PB, zB), OB.setScale(GB, DB.x, DB.y, DB.z), OB.attachThinObject(GB, yB, JB), OB.set(GB, "aOpacity", (0, MB.holderAttachmentOpacity)(BB, lB)), OB.set(GB, "aLightLevels", null !== (oB = null === (jB = BB.DW.YYB(lB)) || void 0 === jB ? void 0 : jB._lightLevels) && v … [truncated]
+       Ze(ie, He, Re, ke), ie.setScale(He, be.x, be.y, be.z), ie.attachThinObject(He, Fe, Je), ie.set(He, "aOpacity", (0, oe.holderAttachmentOpacity)(ee, qe)), ie.set(He, "aLightLevels", null !== (Ke = null === (Ue = ee.sE.Wye(qe)) || void 0 === Ue ? void 0 : Ue._lightLevels) && v … [truncated]
```

#### 2652. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19805` → after: `L18947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18947) · [Before (L19805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19805)

```diff
-       const BB = (0, oB.g)();
+       const ee = (0, Ke.h)();
```

#### 2653. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19807-L19813` → after: `L18949-L18955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18949-L18955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18949-L18955) · [Before (L19807-L19813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19807-L19813)

```diff
-           BO: GB
-         }] of(0, qB.c)(BB).iterateAttachments()) AB(BB, {
-         tB: OB,
-         BO: GB,
-         OO: null,
-         GO: [0, 0, 0],
-         YO: [0, 0, 0]
+           Mi: He
+         }] of(0, Te.d)(ee).iterateAttachments()) Ee(ee, {
+         bi: ie,
+         Mi: He,
+         Ki: null,
+         Ui: [0, 0, 0],
+         Fi: [0, 0, 0]
```

#### 2654. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19826` → after: `L18968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18968) · [Before (L19826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19826)

```diff
-   38623: (BB, OB, GB) => {
+   38777: (ee, ie, He) => {
```

#### 2655. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19828-L19829` → after: `L18970-L18971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18970-L18971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18970-L18971) · [Before (L19828-L19829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19828-L19829)

```diff
-       e: () => oB,
-       h: () => jB
+       c: () => Ke,
+       f: () => Ue
```

#### 2656. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19831-L19833` → after: `L18973-L18975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18973-L18975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18973-L18975) · [Before (L19831-L19833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19831-L19833)

```diff
-     var YB = GB(38615),
-       DB = GB(38005),
-       QB = GB(37946);
+     var ye = He(38772),
+       be = He(38126),
+       Me = He(38057);
```

#### 2657. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19837-L19839` → after: `L18979-L18981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18979-L18981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18979-L18981) · [Before (L19837-L19839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19837-L19839)

```diff
-       BB.BX("aOpacity", 1), BB.yX.aOpacity = 1, BB.material && (OB = BB.material, (0, YB.d)(OB, (BB => {
-         const OB = (0, QB.U)(BB);
-         OB && (0, DB.d)(OB, !0)
+       ee.fC("aOpacity", 1), ee.pC.aOpacity = 1, ee.material && (ie = ee.material, (0, ye.b)(ie, (ee => {
+         const ie = (0, Me.V)(ee);
+         ie && (0, be.e)(ie, !0)
```

#### 2658. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19852` → after: `L18994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18994) · [Before (L19852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19852)

```diff
-         yX: GB
+         pC: He
```

#### 2659. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19857` → after: `L18999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L18999) · [Before (L19857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19857)

```diff
-   39108: (BB, OB, GB) => {
+   39243: (ee, ie, He) => {
```

#### 2660. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19860-L19861` → after: `L19002-L19003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19002-L19003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19002-L19003) · [Before (L19860-L19861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19860-L19861)

```diff
-       e: () => PB,
-       i: () => DB,
+       f: () => Re,
+       g: () => be,
```

#### 2661. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19864` → after: `L19006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19006) · [Before (L19864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19864)

```diff
-     var YB = GB(3088);
+     var ye = He(2969);
```

#### 2662. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19868` → after: `L19010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19010) · [Before (L19868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19868)

```diff
-       const OB = (0, YB.d)().client;
+       const ie = (0, ye.e)().client;
```

#### 2663. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19882` → after: `L19024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19024) · [Before (L19882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19882)

```diff
-       (oB = !1, null !== BB && void 0 !== BB && BB.isChargeable()) ? BB.clearChargingPose(): null === (GB = OB.DW.getState(OB.EX, "playerCameraAdjustment")) || void 0 === GB || GB.fovMultiplier.removeMultiplier("chargeableZoom")
+       (Ke = !1, null !== ee && void 0 !== ee && ee.isChargeable()) ? ee.clearChargingPose(): null === (He = ie.sE.getState(ie.gC, "playerCameraAdjustment")) || void 0 === He || He.fovMultiplier.removeMultiplier("chargeableZoom")
```

#### 2664. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19895` → after: `L19037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19037) · [Before (L19895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19895)

```diff
-       } = GB, PB = BB.DW.pYB(OB);
+       } = He, Re = ee.sE.Lye(ie);
```

#### 2665. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19897-L19898` → after: `L19039-L19040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19039-L19040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19039-L19040) · [Before (L19897-L19898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19897-L19898)

```diff
-       const zB = BB.DW.JYB(OB),
-         lB = BB.DW.MYB(OB);
+       const ke = ee.sE.Yye(ie),
+         qe = ee.sE.Vye(ie);
```

#### 2666. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19902` → after: `L19044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19044) · [Before (L19902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19902)

```diff
-         zB.replayUseFirstPersonMesh = YB, BB !== YB && (null === lB || void 0 === lB || lB.IMB())
+         ke.replayUseFirstPersonMesh = ye, ee !== ye && (null === qe || void 0 === qe || qe.FRe())
```

#### 2667. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19904` → after: `L19046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19046) · [Before (L19904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19904)

```diff
-       const qB = BB.DW.YYB(OB);
+       const Te = ee.sE.Wye(ie);
```

#### 2668. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19914` → after: `L19056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19056) · [Before (L19914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19914)

```diff
-       const GB = BB.DW.pYB(OB);
+       const He = ee.sE.Lye(ie);
```

#### 2669. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19916-L19919` → after: `L19058-L19061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19058-L19061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19058-L19061) · [Before (L19916-L19919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19916-L19919)

```diff
-       const YB = BB.DW.JYB(OB),
-         DB = BB.DW.MYB(OB);
-       void 0 !== (null === YB || void 0 === YB ? void 0 : YB.replayUseFirstPersonMesh) && (YB.replayUseFirstPersonMesh = void 0, null === DB || void 0 === DB || DB.IMB());
-       const QB = BB.DW.YYB(OB);
+       const ye = ee.sE.Yye(ie),
+         be = ee.sE.Vye(ie);
+       void 0 !== (null === ye || void 0 === ye ? void 0 : ye.replayUseFirstPersonMesh) && (ye.replayUseFirstPersonMesh = void 0, null === be || void 0 === be || be.FRe());
+       const Me = ee.sE.Wye(ie);
```

#### 2670. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19923` → after: `L19065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19065) · [Before (L19923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19923)

```diff
-   37993: (BB, OB, GB) => {
+   38112: (ee, ie, He) => {
```

#### 2671. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19925-L19926` → after: `L19067-L19068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19067-L19068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19067-L19068) · [Before (L19925-L19926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19925-L19926)

```diff
-       c: () => DB,
-       f: () => YB
+       b: () => be,
+       d: () => ye
```

#### 2672. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19943` → after: `L19085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19085) · [Before (L19943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19943)

```diff
-   37984: (BB, OB, GB) => {
+   38107: (ee, ie, He) => {
```

#### 2673. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19946-L19948` → after: `L19089-L19090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19089-L19090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19089-L19090) · [Before (L19946-L19948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19946-L19948)

```diff
-       g: () => JB,
-       h: () => MB,
-       k: () => oB
+       i: () => oe,
+       l: () => Ke
```

#### 2674. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19950` → after: `L19092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19092) · [Before (L19950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19950)

```diff
-     var YB = GB(37993);
+     var ye = He(38112);
```

#### 2675. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19954` → after: `L19096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19096) · [Before (L19954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19954)

```diff
-       return DB ??= Promise.all([GB.e(227), GB.e(230)]).then((() => GB(44646))).then((BB => BB), (BB => {
+       return be ??= Promise.all([He.e(227), He.e(230)]).then((() => He(44693))).then((ee => ee), (ee => {
```

#### 2676. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19969` → after: `L19111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19111) · [Before (L19969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19969)

```diff
-         YB.f.failed++;
+         ye.d.failed++;
```

#### 2677. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19977` → after: `L19119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19119) · [Before (L19977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19977)

```diff
-       return (0, YB.c)("importMesh"), jB(BB, GB, DB, ((BB, GB, YB) => {
+       return (0, ye.b)("importMesh"), Ue(ee, He, be, ((ee, He, ye) => {
```

#### 2678. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19979` → after: `L19121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19121) · [Before (L19979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19979)

```diff
-         return BB.loadGlbTree(GB, OB, null !== (DB = YB.rootUrl) && void 0 !== DB ? DB : "", !1, YB.materials)
+         return ee.loadGlbTree(He, ie, null !== (be = ye.rootUrl) && void 0 !== be ? be : "", !1, ye.materials)
```

#### 2679. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19984` → after: `L19126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19126) · [Before (L19984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19984)

```diff
-       return (0, YB.c)("assetContainer"), jB(BB, GB, DB, ((BB, GB, YB) => {
+       return (0, ye.b)("assetContainer"), Ue(ee, He, be, ((ee, He, ye) => {
```

#### 2680. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19986` → after: `L19128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19128) · [Before (L19986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19986)

```diff
-         return BB.loadGlbTree(GB, OB, null !== (DB = YB.rootUrl) && void 0 !== DB ? DB : "", !0, YB.materials)
+         return ee.loadGlbTree(He, ie, null !== (be = ye.rootUrl) && void 0 !== be ? be : "", !0, ye.materials)
```

#### 2681. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19991` → after: `L19133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19133) · [Before (L19991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19991)

```diff
-       return (0, YB.c)("importMesh"), jB(BB, {
+       return (0, ye.b)("importMesh"), Ue(ee, {
```

#### 2682. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19995` → after: `L19137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19137) · [Before (L19995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19995)

```diff
-         return BB.loadGlbAsset(GB, OB, null !== (DB = YB.rootUrl) && void 0 !== DB ? DB : "", QB)
+         return ee.loadGlbAsset(He, ie, null !== (be = ye.rootUrl) && void 0 !== be ? be : "", Me)
```

#### 2683. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19999` → after: `L19141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19141) · [Before (L19999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L19999)

```diff
-   38573: (BB, OB, GB) => {
+   38729: (ee, ie, He) => {
```

#### 2684. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20001-L20002` → after: `L19143-L19144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19143-L19144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19143-L19144) · [Before (L20001-L20002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20001-L20002)

```diff
-       e: () => JB,
-       g: () => MB
+       b: () => Je,
+       f: () => oe
```

#### 2685. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20004-L20005` → after: `L19146-L19147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19146-L19147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19146-L19147) · [Before (L20004-L20005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20004-L20005)

```diff
-     var YB = GB(37946),
-       DB = GB(37885);
+     var ye = He(38057),
+       be = He(38020);
```

#### 2686. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20016` → after: `L19158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19158) · [Before (L20016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20016)

```diff
-     var jB = GB(37966);
+     var Ue = He(38081);
```

#### 2687. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20033` → after: `L19175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19175) · [Before (L20033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20033)

```diff
-         emissiveTexture: BB.emissionColorTexture ? (0, jB.u)(BB.emissionColorTexture) : null,
+         emissiveTexture: ee.emissionColorTexture ? (0, Ue.y)(ee.emissionColorTexture) : null,
```

#### 2688. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20052` → after: `L19194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19194) · [Before (L20052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20052)

```diff
-           return YB && (BB.baseColor = DB.Color3.FromArray(YB), BB.geometryOpacity = YB[3]), OB.unlit ? BB.isUnlit = !0 : BB.emissionColor = OB.emissiveFactor ? DB.Color3.FromArray(OB.emissiveFactor) : new DB.Color3(0, 0, 0), OB.doubleSided && (BB.backFaceCulling = !1, BB.twoSide … [truncated]
+           return ye && (ee.baseColor = be.Color3.FromArray(ye), ee.geometryOpacity = ye[3]), ie.unlit ? ee.isUnlit = !0 : ee.emissionColor = ie.emissiveFactor ? be.Color3.FromArray(ie.emissiveFactor) : new be.Color3(0, 0, 0), ie.doubleSided && (ee.backFaceCulling = !1, ee.twoSide … [truncated]
```

#### 2689. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20074` → after: `L19216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19216) · [Before (L20074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20074)

```diff
-   38851: (BB, OB, GB) => {
+   38996: (ee, ie, He) => {
```

#### 2690. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20076` → after: `L19218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19218) · [Before (L20076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20076)

```diff
-       d: () => QB
+       c: () => Me
```

#### 2691. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20078` → after: `L19220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19220) · [Before (L20078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20078)

```diff
-     var YB = GB(641);
+     var ye = He(610);
```

#### 2692. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20081` → after: `L19223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19223) · [Before (L20081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20081)

```diff
-       const YB = OB => BB.kz.bloxd.getMetaInfo(OB).rootName,
+       const ye = ie => ee.uk.bloxd.getMetaInfo(ie).rootName,
```

#### 2693. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20083` → after: `L19225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19225) · [Before (L20083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20083)

```diff
-       return DB && YB(DB.name) === YB(GB) ? DB : null
+       return be && ye(be.name) === ye(He) ? be : null
```

#### 2694. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20097` → after: `L19239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19239) · [Before (L20097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20097)

```diff
-         return !(!oB || (null !== (QB = oB.amount) && void 0 !== QB ? QB : 1) < OB) && YB.removeItem(BB, OB)
+         return !(!Ke || (null !== (Me = Ke.amount) && void 0 !== Me ? Me : 1) < ie) && ye.removeItem(ee, ie)
```

#### 2695. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20114` → after: `L19256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19256) · [Before (L20114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20114)

```diff
-       return QB => BB.craftItem(OB, QB.playerInventory, GB, YB, DB).vM === DB
+       return Me => ee.craftItem(ie, Me.playerInventory, He, ye, be).eR === be
```

#### 2696. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20119` → after: `L19261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19261) · [Before (L20119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20119)

```diff
-         return null !== QB && GB <= (null !== (DB = QB.amount) && void 0 !== DB ? DB : 0) && BB.salvageItem(YB.playerInventory, OB, QB.name, GB)
+         return null !== Me && He <= (null !== (be = Me.amount) && void 0 !== be ? be : 0) && ee.salvageItem(ye.playerInventory, ie, Me.name, He)
```

#### 2697. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20134` → after: `L19276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19276) · [Before (L20134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20134)

```diff
-         return !!oB && (QB.playerInventory.setItemSlot(BB, GB, 1, null !== YB && void 0 !== YB ? YB : oB.attributes), !0)
+         return !!Ke && (Me.playerInventory.setItemSlot(ee, He, 1, null !== ye && void 0 !== ye ? ye : Ke.attributes), !0)
```

#### 2698. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20140` → after: `L19282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19282) · [Before (L20140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20140)

```diff
-         return (null === jB || void 0 === jB ? void 0 : jB.name) === OB && (1 === jB.amount || null === jB.amount ? (oB.setItemSlot(BB, GB, 1, {}), !0) : !(null === DB || DB < 0 || DB >= YB.t || null !== oB.getItemAtIdx(DB)) && (oB.setItemSlot(BB, OB, jB.amount - 1, {}), oB.setIt … [truncated]
+         return (null === Ue || void 0 === Ue ? void 0 : Ue.name) === ie && (1 === Ue.amount || null === Ue.amount ? (Ke.setItemSlot(ee, He, 1, {}), !0) : !(null === be || be < 0 || be >= ye.u || null !== Ke.getItemAtIdx(be)) && (Ke.setItemSlot(ee, ie, Ue.amount - 1, {}), Ke.setIt … [truncated]
```

#### 2699. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20143` → after: `L19285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19285) · [Before (L20143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20143)

```diff
-       return YB => !!DB(YB, OB, GB) && (YB.kz.bloxd.removeEatenItem(BB, YB.playerInventory, OB), !0)
+       return ye => !!be(ye, ie, He) && (ye.uk.bloxd.removeEatenItem(ee, ye.playerInventory, ie), !0)
```

#### 2700. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20152` → after: `L19294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19294) · [Before (L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20152)

```diff
-   38476: (BB, OB, GB) => {
+   38635: (ee, ie, He) => {
```

#### 2701. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20154` → after: `L19296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19296) · [Before (L20154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20154)

```diff
-       e: () => YB
+       b: () => ye
```

#### 2702. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20161` → after: `L19303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19303) · [Before (L20161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20161)

```diff
-   38556: (BB, OB, GB) => {
+   38714: (ee, ie, He) => {
```

#### 2703. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20164-L20165` → after: `L19306-L19307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19306-L19307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19306-L19307) · [Before (L20164-L20165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20164-L20165)

```diff
-       f: () => JB,
-       h: () => UB
+       e: () => Je,
+       i: () => We
```

#### 2704. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20167-L20172` → after: `L19309-L19314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19309-L19314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19309-L19314) · [Before (L20167-L20172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20167-L20172)

```diff
-     var YB = GB(204),
-       DB = GB(9927),
-       QB = GB(2050),
-       oB = GB(4111),
-       jB = GB(25),
-       yB = GB(3088);
+     var ye = He(198),
+       be = He(9961),
+       Me = He(2018),
+       Ke = He(4075),
+       Ue = He(27),
+       Fe = He(2969);
```

#### 2705. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20186-L20187` → after: `L19328-L19329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19328-L19329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19328-L19329) · [Before (L20186-L20187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20186-L20187)

```diff
-       const GB = (0, YB.c)(BB, OB);
-       return (null === GB || void 0 === GB ? void 0 : GB.name) === OB ? GB : void 0
+       const He = (0, ye.b)(ee, ie);
+       return (null === He || void 0 === He ? void 0 : He.name) === ie ? He : void 0
```

#### 2706. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20195` → after: `L19337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19337) · [Before (L20195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20195)

```diff
-       RB(yB.h.blocksClient, BB)
+       ze(Fe.k.blocksClient, ee)
```

#### 2707. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20207` → after: `L19349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19349) · [Before (L20207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20207)

```diff
-       return DB.h[BB.name].ttb
+       return be.i[ee.name].ttb
```

#### 2708. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20211` → after: `L19353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19353) · [Before (L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20211)

```diff
-       if ("droppedItemScale" === BB) zB = "number" === typeof OB && isFinite(OB) ? OB : 1;
+       if ("droppedItemScale" === ee) ke = "number" === typeof ie && isFinite(ie) ? ie : 1;
```

#### 2709. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20215` → after: `L19357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19357) · [Before (L20215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20215)

```diff
-         const GB = NB(yB.h.itemsClient, BB.slice(0, -MB.length));
+         const He = Xe(Fe.k.itemsClient, ee.slice(0, -oe.length));
```

#### 2710. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20218` → after: `L19360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19360) · [Before (L20218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20218)

```diff
-         const GB = NB(yB.h.blocksClient, BB.slice(0, -PB.length));
+         const He = Xe(Fe.k.blocksClient, ee.slice(0, -Re.length));
```

#### 2711. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20224` → after: `L19366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19366) · [Before (L20224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20224)

```diff
-       QB.e.subscribeAll((BB => {
+       Me.c.subscribeAll((ee => {
```

#### 2712. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20226` → after: `L19368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19368) · [Before (L20226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20226)

```diff
-       })), jB.o.subscribe("ttbEffectMultiplier", (BB => {
+       })), Ue.h.subscribe("ttbEffectMultiplier", (ee => {
```

#### 2713. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20229` → after: `L19371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19371) · [Before (L20229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20229)

```diff
-         zB = 1, lB = !1, pB = 1, qB = 1, RB(yB.h.itemsClient, (BB => {
+         ke = 1, qe = !1, fe = 1, Te = 1, ze(Fe.k.itemsClient, (ee => {
```

#### 2714. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20237` → after: `L19379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19379) · [Before (L20237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20237)

```diff
-   38364: (BB, OB, GB) => {
+   38528: (ee, ie, He) => {
```

#### 2715. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20339` → after: `L19481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19481) · [Before (L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20339)

```diff
-         const YB = Array.isArray(OB) ? OB : null !== (GB = null === OB || void 0 === OB ? void 0 : OB.transfer) && void 0 !== GB ? GB : [];
+         const ye = Array.isArray(ie) ? ie : null !== (He = null === ie || void 0 === ie ? void 0 : ie.transfer) && void 0 !== He ? He : [];
```

#### 2716. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20378` → after: `L19520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19520) · [Before (L20378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20378)

```diff
-   38301: (BB, OB, GB) => {
+   38460: (ee, ie, He) => {
```

#### 2717. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20380-L20381` → after: `L19522-L19523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19522-L19523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19522-L19523) · [Before (L20380-L20381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20380-L20381)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.DW.nYB(OB);
-       return OB === BB.EX || (null === GB || void 0 === GB ? void 0 : GB.qp) === BB.EX && GB.UYB
+       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.sE.jye(ie);
+       return ie === ee.gC || (null === He || void 0 === He ? void 0 : He.Df) === ee.gC && He.sye
```

#### 2718. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20384` → after: `L19526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19526) · [Before (L20384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20384)

```diff
-       c: () => YB
+       d: () => ye
```

#### 2719. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20387` → after: `L19529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19529) · [Before (L20387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20387)

```diff
-   38615: (BB, OB, GB) => {
+   38772: (ee, ie, He) => {
```

#### 2720. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20389-L20390` → after: `L19531-L19532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19531-L19532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19531-L19532) · [Before (L20389-L20390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20389-L20390)

```diff
-       if ("jOB" in BB && Array.isArray(BB.jOB))
-         for (const GB of BB.jOB) GB && OB(GB);
+       if ("gie" in ee && Array.isArray(ee.gie))
+         for (const He of ee.gie) He && ie(He);
```

#### 2721. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20394` → after: `L19536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19536) · [Before (L20394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20394)

```diff
-       d: () => YB
+       b: () => ye
```

#### 2722. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20397` → after: `L19539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19539) · [Before (L20397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20397)

```diff
-   37877: (BB, OB, GB) => {
+   38007: (ee, ie, He) => {
```

#### 2723. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20399-L20402` → after: `L19541-L19544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19541-L19544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19541-L19544) · [Before (L20399-L20402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20399-L20402)

```diff
-       D: () => PB,
-       E: () => NB,
-       c: () => oB,
-       e: () => RB,
+       A: () => Je,
+       C: () => Re,
+       G: () => Xe,
+       d: () => Ke,
```

#### 2724. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20406-L20409` → after: `L19549-L19551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19549-L19551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19549-L19551) · [Before (L20406-L20409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20406-L20409)

```diff
-       q: () => MB,
-       u: () => zB,
-       x: () => yB,
-       z: () => JB
+       s: () => oe,
+       t: () => ke,
+       x: () => Fe
```

#### 2725. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20411-L20413` → after: `L19553-L19555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19553-L19555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19553-L19555) · [Before (L20411-L20413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20411-L20413)

```diff
-     var YB = GB(37771),
-       DB = GB(1998),
-       QB = GB(37880);
+     var ye = He(37913),
+       be = He(1952),
+       Me = He(38012);
```

#### 2726. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20439` → after: `L19581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19581) · [Before (L20439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20439)

```diff
-         YB = null !== GB && void 0 !== GB && GB.model ? GB : null;
+         ye = null !== He && void 0 !== He && He.model ? He : null;
```

#### 2727. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20459` → after: `L19601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19601) · [Before (L20459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20459)

```diff
-         indices: null !== (GB = null === (YB = OB.geometry.indexData) || void 0 === YB ? void 0 : YB.slice()) && void 0 !== GB ? GB : [],
+         indices: null !== (He = null === (ye = ie.geometry.indexData) || void 0 === ye ? void 0 : ye.slice()) && void 0 !== He ? He : [],
```

#### 2728. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20474` → after: `L19616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19616) · [Before (L20474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20474)

```diff
-         const GB = QB.d.UVKind,
+         const He = Me.e.UVKind,
```

#### 2729. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20476` → after: `L19618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19618) · [Before (L20476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20476)

```diff
-         jB(YB, BB.KDB(), OB), BB.setVerticesData(GB, YB)
+         Ue(ye, ee.eMe(), ie), ee.setVerticesData(He, ye)
```

#### 2730. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20482` → after: `L19624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19624) · [Before (L20482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20482)

```diff
-       return !!(null !== (OB = BB.metadata) && void 0 !== OB && null !== (GB = OB.Im) && void 0 !== GB && null !== (YB = GB.extras) && void 0 !== YB && YB.bloxdProcessed || null !== (DB = BB.parent) && void 0 !== DB && null !== (QB = DB.metadata) && void 0 !== QB && null !== (oB  … [truncated]
+       return !!(null !== (ie = ee.metadata) && void 0 !== ie && null !== (He = ie.YV) && void 0 !== He && null !== (ye = He.extras) && void 0 !== ye && ye.bloxdProcessed || null !== (be = ee.parent) && void 0 !== be && null !== (Me = be.metadata) && void 0 !== Me && null !== (Ke  … [truncated]
```

#### 2731. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20498` → after: `L19640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19640) · [Before (L20498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20498)

```diff
-         BB.SP.set(OB, OB, OB), BB.bakeCurrentTransformIntoVertices(!1)
+         ee.wR.set(ie, ie, ie), ee.bakeCurrentTransformIntoVertices(!1)
```

#### 2732. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20504` → after: `L19646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19646) · [Before (L20504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20504)

```diff
-       return (0, DB.s)(`v${qB}|${JSON.stringify(BB)}|${OB}`)
+       return (0, be.s)(`v${Te}|${JSON.stringify(ee)}|${ie}`)
```

#### 2733. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20525` → after: `L19667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19667) · [Before (L20525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20525)

```diff
-         }(BB)) || void 0 === GB || null === (YB = GB.extras) || void 0 === YB ? void 0 : YB.bloxdBuildHash) && void 0 !== OB ? OB : null
+         }(ee)) || void 0 === He || null === (ye = He.extras) || void 0 === ye ? void 0 : ye.bloxdBuildHash) && void 0 !== ie ? ie : null
```

#### 2734. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20538-L20539` → after: `L19680-L19681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19680-L19681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19680-L19681) · [Before (L20538-L20539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20538-L20539)

```diff
-         GB = YB.Xp.One(),
-         DB = new YB.Xp;
+         He = ye.rf.One(),
+         be = new ye.rf;
```

#### 2735. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20546` → after: `L19688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19688) · [Before (L20546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20546)

```diff
-         const BB = YB.Matrix.Compose(GB, YB.Quaternion.RotationYawPitchRoll(zB, lB, 0), new YB.Xp(JB, MB, PB)),
+         const ee = ye.Matrix.Compose(He, ye.Quaternion.RotationYawPitchRoll(ke, qe, 0), new ye.rf(Je, oe, Re)),
```

#### 2736. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20548` → after: `L19690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19690) · [Before (L20548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20548)

```diff
-         for (let GB = 0; GB < QB.length; GB += 3) YB.Xp.TransformCoordinatesFromFloatsToRef(QB[GB], QB[GB + 1], QB[GB + 2], BB, DB), OB.positions.push(DB.x, DB.y, DB.z), YB.Xp.TransformNormalFromFloatsToRef(oB[GB], oB[GB + 1], oB[GB + 2], BB, DB), OB.normals.push(DB.x, DB.y, DB.z … [truncated]
+         for (let He = 0; He < Me.length; He += 3) ye.rf.TransformCoordinatesFromFloatsToRef(Me[He], Me[He + 1], Me[He + 2], ee, be), ie.positions.push(be.x, be.y, be.z), ye.rf.TransformNormalFromFloatsToRef(Ke[He], Ke[He + 1], Ke[He + 2], ee, be), ie.normals.push(be.x, be.y, be.z … [truncated]
```

#### 2737. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20555` → after: `L19697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19697) · [Before (L20555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20555)

```diff
-   38716: (BB, OB, GB) => {
+   38884: (ee, ie, He) => {
```

#### 2738. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20562-L20565` → after: `L19704-L19707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19704-L19707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19704-L19707) · [Before (L20562-L20565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20562-L20565)

```diff
-     var YB = GB(37723),
-       DB = GB(4111),
-       QB = GB(38466),
-       oB = GB(38722),
+     var ye = He(37853),
+       be = He(4075),
+       Me = He(38621),
+       Ke = He(38886),
```

#### 2739. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20567-L20585` → after: `L19709-L19727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19709-L19727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19709-L19727) · [Before (L20567-L20585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20567-L20585)

```diff
-       yB = GB(9927),
-       JB = GB(38686),
-       MB = GB(25),
-       PB = GB(162),
-       zB = GB(3573),
-       lB = GB(38470),
-       pB = GB(3580),
-       qB = GB(16),
-       ZB = GB(3088),
-       NB = GB(4166),
-       RB = GB(38563),
-       WB = GB(37928),
-       AB = GB(37984),
-       VB = GB(37771),
-       SB = GB(37962),
-       nB = GB(37880),
- ... (3 more removed lines; see GitHub link above)
+       Fe = He(9961),
+       Je = He(38856),
+       oe = He(27),
+       Re = He(153),
+       ke = He(3465),
+       qe = He(38630),
+       fe = He(3473),
+       Te = He(18),
+       pe = He(2969),
+       Xe = He(4142),
+       ze = He(38722),
+       Be = He(38049),
+       Ee = He(38107),
+       ge = He(37913),
+       Oe = He(38075),
+       de = He(38012),
+ ... (3 more added lines; see GitHub link above)
```

#### 2740. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20589-L20590` → after: `L19731-L19732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19731-L19732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19731-L19732) · [Before (L20589-L20590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20589-L20590)

```diff
-       (0, kB.c)(BB);
-       const GB = zB.c.getTexture(OB, pB.h.BLOCK).url,
+       (0, Ze.e)(ee);
+       const He = ke.c.getTexture(ie, fe.j.BLOCK).url,
```

#### 2741. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20597` → after: `L19739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19739) · [Before (L20597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20597)

```diff
-           samplingMode: SB.g.nearestNearestMipLinear,
+           samplingMode: Oe.h.nearestNearestMipLinear,
```

#### 2742. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20599-L20600` → after: `L19741-L19742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19741-L19742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19741-L19742) · [Before (L20599-L20600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20599-L20600)

```diff
-             wrapU: SB.c.clamp,
-             wrapV: SB.c.clamp,
+             wrapU: Oe.b.clamp,
+             wrapV: Oe.b.clamp,
```

#### 2743. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20606-L20608` → after: `L19748-L19750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19748-L19750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19748-L19750) · [Before (L20606-L20608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20606-L20608)

```diff
-         } = (0, WB.c)({
-           name: `${OB}BlockModelMeshMat`,
-           eq: BB,
+         } = (0, Be.b)({
+           name: `${ie}BlockModelMeshMat`,
+           yp: ee,
```

#### 2744. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20611` → after: `L19753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19753) · [Before (L20611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20611)

```diff
-             transparencyMode: nB.d.MATERIAL_ALPHATEST,
+             transparencyMode: de.e.MATERIAL_ALPHATEST,
```

#### 2745. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20631` → after: `L19773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19773) · [Before (L20631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20631)

```diff
-       return (0, UB.q)((0, ZB.g)().UP, BB, (0, fB.f)({
+       return (0, We.n)((0, pe.h)().PR, ee, (0, te.g)({
```

#### 2746. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20646-L20647` → after: `L19788-L19789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19788-L19789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19788-L19789) · [Before (L20646-L20647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20646-L20647)

```diff
-         const GB = mB(`${OB}CstmPlnMdl1`);
-         GB.bq = !1, GB.rotation.set(...jB.rotation), GB.bakeCurrentTransformIntoVertices();
+         const He = Ae(`${ie}CstmPlnMdl1`);
+         He.Mp = !1, He.rotation.set(...Ue.rotation), He.bakeCurrentTransformIntoVertices();
```

#### 2747. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20651-L20652` → after: `L19793-L19794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19793-L19794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19793-L19794) · [Before (L20651-L20652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20651-L20652)

```diff
-       const oB = (0, UB.o)(DB, QB.size > 1, !1);
-       return oB.bq = !1, oB
+       const Ke = (0, We.l)(be, Me.size > 1, !1);
+       return Ke.Mp = !1, Ke
```

#### 2748. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20683` → after: `L19825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19825) · [Before (L20683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20683)

```diff
-     const LB = new VB.Xp(.5, .5, .5);
+     const ce = new ge.rf(.5, .5, .5);
```

#### 2749. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20687` → after: `L19829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19829) · [Before (L20687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20687)

```diff
-           const GB = VB.Matrix.Compose(VB.Xp.One(), VB.Quaternion.RotationYawPitchRoll(BB.rotation[1], BB.rotation[0], BB.rotation[2]), VB.Xp.FromArray(BB.position)),
+           const He = ge.Matrix.Compose(ge.rf.One(), ge.Quaternion.RotationYawPitchRoll(ee.rotation[1], ee.rotation[0], ee.rotation[2]), ge.rf.FromArray(ee.position)),
```

#### 2750. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20691` → after: `L19833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19833) · [Before (L20691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20691)

```diff
-               SP: QB
+               wR: Me
```

#### 2751. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20696-L20698` → after: `L19838-L19840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19838-L19840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19838-L19840) · [Before (L20696-L20698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20696-L20698)

```diff
-         DB = VB.Xp.TransformCoordinates(VB.Xp.Zero(), YB),
-         QB = VB.Xp.TransformNormal(new VB.Xp(1, 0, 0), YB),
-         oB = VB.Xp.TransformNormal(new VB.Xp(0, 1, 0), YB),
+         be = ge.rf.TransformCoordinates(ge.rf.Zero(), ye),
+         Me = ge.rf.TransformNormal(new ge.rf(1, 0, 0), ye),
+         Ke = ge.rf.TransformNormal(new ge.rf(0, 1, 0), ye),
```

#### 2752. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20704` → after: `L19846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19846) · [Before (L20704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20704)

```diff
-         texture: zB.c.getTexture(OB, pB.h.BLOCK).url
+         texture: ke.c.getTexture(ie, fe.j.BLOCK).url
```

#### 2753. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20714` → after: `L19856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19856) · [Before (L20714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20714)

```diff
-           return FB("CentreCross" === GB ? uB : BB.customPlanesInfo).map((BB => {
+           return Ve("CentreCross" === He ? Pe : ee.customPlanesInfo).map((ee => {
```

#### 2754. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20746` → after: `L19888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19888) · [Before (L20746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20746)

```diff
-       (0, kB.c)(BB);
+       (0, Ze.e)(ee);
```

#### 2755. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20752` → after: `L19894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19894) · [Before (L20752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20752)

```diff
-       return hB(BB, OB, wB(BB, OB.name, QB.d))
+       return le(ee, ie, ve(ee, ie.name, Me.c))
```

#### 2756. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20756` → after: `L19898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19898) · [Before (L20756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20756)

```diff
-       return hB(BB, OB, wB(BB, OB.name, QB.e), GB)
+       return le(ee, ie, ve(ee, ie.name, Me.f), He)
```

#### 2757. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20760` → after: `L19902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19902) · [Before (L20760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20760)

```diff
-       const DB = lB.e.getBlockAtlasMaterialForPlacement(BB, !!OB.transTex, !!OB.unlitStandaloneMesh),
+       const be = qe.c.getBlockAtlasMaterialForPlacement(ee, !!ie.transTex, !!ie.unlitStandaloneMesh),
```

#### 2758. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20766` → after: `L19908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19908) · [Before (L20766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20766)

```diff
-       return QB.Zk(!0), QB
+       return Me.JY(!0), Me
```

#### 2759. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20768-L20775` → after: `L19910-L19917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19910-L19917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19910-L19917) · [Before (L20768-L20775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20768-L20775)

```diff
-     var aB = GB(9974),
-       eB = GB(1217),
-       TB = GB(38730),
-       bB = GB(38634),
-       CB = GB(9983),
-       HB = GB(4886),
-       vB = GB(38580),
-       sB = GB(37877);
+     var Se = He(10008),
+       ne = He(1169),
+       je = He(38888),
+       se = He(38787),
+       Ie = He(10012),
+       he = He(4861),
+       Ne = He(38734),
+       Ge = He(38007);
```

#### 2760. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20779` → after: `L19921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19921) · [Before (L20779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20779)

```diff
-         XD: GB,
+         rb: He,
```

#### 2761. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20791` → after: `L19933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19933) · [Before (L20791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20791)

```diff
-           XD: GB[1],
+           rb: He[1],
```

#### 2762. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20796-L20797` → after: `L19938-L19939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19938-L19939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19938-L19939) · [Before (L20796-L20797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20796-L20797)

```diff
-       }(OB((0, CB.l)(BB.postPiece, null))), oB = VB.Matrix.Translation(-DB, -GB, -QB).multiply(VB.Matrix.Scaling(1 / YB, 1 / YB, 1 / YB)).multiply(VB.Matrix.Translation(0, -.5, 0)), jB = (BB, GB) => {
-         const YB = YB => (0, vB.g)((0, vB.b)(OB((0, CB.l)(BB, YB))), GB.m);
+       }(ie((0, Ie.t)(ee.postPiece, null))), Ke = ge.Matrix.Translation(-be, -He, -Me).multiply(ge.Matrix.Scaling(1 / ye, 1 / ye, 1 / ye)).multiply(ge.Matrix.Translation(0, -.5, 0)), Ue = (ee, He) => {
+         const ye = ye => (0, Ne.j)((0, Ne.d)(ie((0, Ie.t)(ee, ye))), He.m);
```

#### 2763. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20800` → after: `L19942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19942) · [Before (L20800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20800)

```diff
-           arms: CB.q.map(((BB, OB) => YB(OB)))
+           arms: Ie.y.map(((ee, ie) => ye(ie)))
```

#### 2764. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20808` → after: `L19950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19950) · [Before (L20808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20808)

```diff
-           arms: yB.arms.map(((BB, OB) => (0, vB.c)([
+           arms: Fe.arms.map(((ee, ie) => (0, Ne.g)([
```

#### 2765. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20822` → after: `L19964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19964) · [Before (L20822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20822)

```diff
-       return (0, vB.c)([GB, ...DB].map((BB => [BB, null])))
+       return (0, Ne.g)([He, ...be].map((ee => [ee, null])))
```

#### 2766. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20834-L20835` → after: `L19976-L19977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19976-L19977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19976-L19977) · [Before (L20834-L20835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20834-L20835)

```diff
-       if (!YB) throw new Error(`"${GB}" has no node named "${OB}"`);
-       if (!YB.length) throw new Error(`"${GB}" node "${OB}" has no mesh`);
+       if (!ye) throw new Error(`"${He}" has no node named "${ie}"`);
+       if (!ye.length) throw new Error(`"${He}" node "${ie}" has no mesh`);
```

#### 2767. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20837-L20838` → after: `L19979-L19980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19979-L19980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19979-L19980) · [Before (L20837-L20838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20837-L20838)

```diff
-         const GB = (0, sB.q)(BB, OB);
-         return (0, vB.g)(GB, BB.worldMatrix(OB, !1)),
+         const He = (0, Ge.s)(ee, ie);
+         return (0, Ne.j)(He, ee.worldMatrix(ie, !1)),
```

#### 2768. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20852` → after: `L19994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19994) · [Before (L20852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20852)

```diff
-       return (0, vB.c)(DB)
+       return (0, Ne.g)(be)
```

#### 2769. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20854` → after: `L19996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19996) · [Before (L20854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20854)

```diff
-     var GO = GB(38539);
+     var Hi = He(38688);
```

#### 2770. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20856` → after: `L19998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR19998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L19998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L19998) · [Before (L20856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20856)

```diff
-         fence: CB.u
+         fence: Ie.B
```

#### 2771. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20863` → after: `L20005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR20005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L20005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L20005) · [Before (L20863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20863)

```diff
-         DB = await (0, AB.h)("", BB, YB, (() => zB.c.getModelOverride(OB) ? {
+         be = await (0, Ee.i)("", ee, ye, (() => ke.c.getModelOverride(ie) ? {
```

#### 2772. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20873` → after: `L20015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR20015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L20015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L20015) · [Before (L20873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20873)

```diff
-       return OB ? GB & CB.g ? BB.stackedPost : BB.post : BB.top
+       return ie ? He & Ie.m ? ee.stackedPost : ee.post : ee.top
```

#### 2773. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20878` → after: `L20020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR20020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L20020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L20020) · [Before (L20878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20878)

```diff
-       const QB = yB.u[(0, HB.m)(OB.textureInfo)];
+       const Me = Fe.s[(0, he.l)(ie.textureInfo)];
```

#### 2774. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20883-L20884` → after: `L20025-L20026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR20025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L20025-L20026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L20025-L20026) · [Before (L20883-L20884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L20883-L20884)

```diff
-         const YB = (0, GO.j)();
-         for (let DB = 1; DB < GB.length; DB += 2) GB[DB] = (0, GO.f)(OB, GB[DB], YB)
+         const ye = (0, Hi.h)();
+         for (let be = 1; be < He.length; be += 2) He[be] = (0, Hi.g)(ie, He[be], ye)
```
