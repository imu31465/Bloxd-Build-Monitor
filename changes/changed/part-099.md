# Changed — Bundle Modifications Report (Part 099 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `99 / 146` (**425** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 098](part-098.md) · [Part 100 →](part-100.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (4637 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 3396. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26010` → after: `L25381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25381) · [Before (L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26010)

```diff
-       wM = [SM.sh.Zero(), SM.sh.Zero(), SM.sh.Zero()];
+       NV = [YV.Ik.Zero(), YV.Ik.Zero(), YV.Ik.Zero()];
```

#### 3397. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26028-L26029` → after: `L25399-L25400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25399-L25400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25399-L25400) · [Before (L26028-L26029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26028-L26029)

```diff
-         ]) SM.sh.TransformCoordinatesFromFloatsToRef(HM * jM - nM * jM, hM * aM - QM * aM, -.5, bM, JM), JM.x += nM * jM + iM, JM.y += QM * aM + OM, JM.z += .5;
-       LM.kOM(zM), mM.kOM(zM), MM.set([LM.x, LM.y, LM.z, 0, mM.x, mM.y, mM.z, 0, zM.x, zM.y, zM.z, 0, 0, 0, 0, 1])
+         ]) YV.Ik.TransformCoordinatesFromFloatsToRef(rV * UV - QV * UV, kV * yV - nV * yV, -.5, AV, bV), bV.x += QV * UV + xV, bV.y += nV * yV + JV, bV.z += .5;
+       ZV.IYV(wV), vV.IYV(wV), VV.set([ZV.x, ZV.y, ZV.z, 0, vV.x, vV.y, vV.z, 0, wV.x, wV.y, wV.z, 0, 0, 0, 0, 1])
```

#### 3398. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26033` → after: `L25404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25404) · [Before (L26033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26033)

```diff
-       const iM = (0, PM.Y)(MM),
+       const xV = (0, pV.eb)(VV),
```

#### 3399. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26037` → after: `L25408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25408) · [Before (L26037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26037)

```diff
-         const MM = (0, nM.E)(OM.matrix);
+         const VV = (0, QV.H)(JV.matrix);
```

#### 3400. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26039` → after: `L25410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25410) · [Before (L26039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26039)

```diff
-         if (OM.optimizeUVAllocation = !1, SM && (SM.optimizeUVAllocation = !1), MM)(0, PM.W)(iM), null === SM || void 0 === SM || null === (jM = SM.Hk()) || void 0 === jM || jM.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(SM)))
+         if (JV.optimizeUVAllocation = !1, YV && (YV.optimizeUVAllocation = !1), VV)(0, pV.bb)(xV), null === YV || void 0 === YV || null === (UV = YV.dD()) || void 0 === UV || UV.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(YV)))
```

#### 3401. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26047-L26048` → after: `L25418-L25419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25418-L25419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25418-L25419) · [Before (L26047-L26048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26047-L26048)

```diff
-       (0, PM.y)(MM, rM), rM.Rk.addOnce((() => {
-         (0, PM.T)(MM)
+       (0, pV.D)(VV, eV), eV.eC.addOnce((() => {
+         (0, pV.Z)(VV)
```

#### 3402. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26065` → after: `L25436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25436) · [Before (L26065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26065)

```diff
-           MM[rM] = null !== (SM = null === iM || void 0 === iM ? void 0 : iM.mirror) && void 0 !== SM ? SM : null;
+           VV[eV] = null !== (YV = null === xV || void 0 === xV ? void 0 : xV.mirror) && void 0 !== YV ? YV : null;
```

#### 3403. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26074` → after: `L25445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25445) · [Before (L26074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26074)

```diff
-         OM = !iM || iM instanceof nM.k ? rM : {
+         JV = !xV || xV instanceof QV.l ? eV : {
```

#### 3404. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26076` → after: `L25447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25447) · [Before (L26076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26076)

```diff
-           diffuseTexture: (0, nM.u)(MM.Hk(), iM)
+           diffuseTexture: (0, QV.v)(VV.dD(), xV)
```

#### 3405. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26078-L26079` → after: `L25449-L25450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25449-L25450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25449-L25450) · [Before (L26078-L26079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26078-L26079)

```diff
-         SM = (0, PM.Y)(MM);
-       if (SM)(0, PM.gb)(SM, OM);
+         YV = (0, pV.eb)(VV);
+       if (YV)(0, pV.tb)(YV, JV);
```

#### 3406. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26092` → after: `L25463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25463) · [Before (L26092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26092)

```diff
-       MM.freeze(), (0, PM.$)(MM, !0)
+       VV.freeze(), (0, pV.ib)(VV, !0)
```

#### 3407. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26096` → after: `L25467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25467) · [Before (L26096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26096)

```diff
-       MM.unfreeze(), (0, PM.$)(MM, !1)
+       VV.unfreeze(), (0, pV.ib)(VV, !1)
```

#### 3408. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26101` → after: `L25472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25472) · [Before (L26101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26101)

```diff
-       const OM = null !== (iM = (0, LM.d)(MM)) && void 0 !== iM ? iM : new LM.b(MM),
+       const JV = null !== (xV = (0, ZV.f)(VV)) && void 0 !== xV ? xV : new ZV.b(VV),
```

#### 3409. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26111` → after: `L25482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25482) · [Before (L26111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26111)

```diff
-   38402: (MM, rM, iM) => {
+   38601: (VV, eV, xV) => {
```

#### 3410. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26113` → after: `L25484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25484) · [Before (L26113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26113)

```diff
-       return MM instanceof Float32Array ? MM : new Float32Array(MM)
+       return VV instanceof Float32Array ? VV : new Float32Array(VV)
```

#### 3411. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26117` → after: `L25488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25488) · [Before (L26117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26117)

```diff
-       return MM instanceof Uint16Array ? MM : new Uint16Array(MM)
+       return VV instanceof Uint16Array ? VV : new Uint16Array(VV)
```

#### 3412. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26122` → after: `L25493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25493) · [Before (L26122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26122)

```diff
-         Lh: rM
+         Gk: eV
```

#### 3413. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26126` → after: `L25497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25497) · [Before (L26126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26126)

```diff
-         Lh: SM(rM)
+         Gk: YV(eV)
```

#### 3414. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26130` → after: `L25501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25501) · [Before (L26130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26130)

```diff
-       d: () => OM,
+       e: () => JV,
```

#### 3415. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26135` → after: `L25506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25506) · [Before (L26135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26135)

```diff
-   39006: (MM, rM, iM) => {
+   39184: (VV, eV, xV) => {
```

#### 3416. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26137` → after: `L25508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25508) · [Before (L26137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26137)

```diff
-       c: () => HM,
+       d: () => rV,
```

#### 3417. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26140-L26145` → after: `L25511-L25516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25511-L25516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25511-L25516) · [Before (L26140-L26145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26140-L26145)

```diff
-     var OM = iM(38034),
-       SM = iM(38325),
-       jM = iM(38331),
-       aM = iM(38158),
-       PM = iM(38363);
-     const nM = new SM.i,
+     var JV = xV(38263),
+       YV = xV(38530),
+       UV = xV(38536),
+       yV = xV(38385),
+       pV = xV(38556);
+     const QV = new YV.f,
```

#### 3418. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26150` → after: `L25521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25521) · [Before (L26150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26150)

```diff
-       return MM.AJ && MM.isEnabled() && !MM.krM
+       return VV.QE && VV.isEnabled() && !VV.VJV
```

#### 3419. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26157-L26158` → after: `L25528-L25529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25528-L25529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25528-L25529) · [Before (L26157-L26158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26157-L26158)

```diff
-       } = MM.model, nM = null === (SM = PM.parts[iM]) || void 0 === SM ? void 0 : SM.geometry, QM = nM && (0, jM.m)(nM), zM = PM.parts[iM].Ld;
-       if (null === nM || void 0 === nM || !nM.live || !QM || (null === (aM = rM.material) || void 0 === aM ? void 0 : aM.fillMode) > 2) throw new Error(`${rM.name} is a handle without live parts in a triangle fill mode, which a pick needs`);
+       } = VV.model, QV = null === (YV = pV.parts[xV]) || void 0 === YV ? void 0 : YV.geometry, nV = QV && (0, UV.q)(QV), wV = pV.parts[xV].TE;
+       if (null === QV || void 0 === QV || !QV.live || !nV || (null === (yV = eV.material) || void 0 === yV ? void 0 : yV.fillMode) > 2) throw new Error(`${eV.name} is a handle without live parts in a triangle fill mode, which a pick needs`);
```

#### 3420. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26162` → after: `L25533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25533) · [Before (L26162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26162)

```diff
-         OM.Ld[2 * jM] = zM[4 * jM], OM.Ld[2 * jM + 1] = zM[4 * jM] + zM[4 * jM + 1], OM.boxes.set(null !== (LM = null === (mM = rM.partBoxes) || void 0 === mM ? void 0 : mM.subarray(6 * jM, 6 * jM + 6)) && void 0 !== LM ? LM : [...nM.boundsMin, ...nM.boundsMax], 6 * jM)
+         JV.TE[2 * UV] = wV[4 * UV], JV.TE[2 * UV + 1] = wV[4 * UV] + wV[4 * UV + 1], JV.boxes.set(null !== (ZV = null === (vV = eV.partBoxes) || void 0 === vV ? void 0 : vV.subarray(6 * UV, 6 * UV + 6)) && void 0 !== ZV ? ZV : [...QV.boundsMin, ...QV.boundsMax], 6 * UV)
```

#### 3421. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26168` → after: `L25539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25539) · [Before (L26168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26168)

```diff
-       if (!MM.MJ) return MM.YJ.pickWithRay(rM, LM);
+       if (!VV.jb) return VV.yE.pickWithRay(eV, ZV);
```

#### 3422. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26173` → after: `L25544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25544) · [Before (L26173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26173)

```diff
-       (0, jM.d)(rM, QM);
+       (0, UV.e)(eV, nV);
```

#### 3423. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26183` → after: `L25554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25554) · [Before (L26183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26183)

```diff
-         if (!iM.pickable(jM) || !LM(hM) || null === (HM = hM.metadata) || void 0 === HM || !HM[PM.h] || hM.metadata[PM.j]) continue;
+         if (!xV.pickable(UV) || !ZV(kV) || null === (rV = kV.metadata) || void 0 === rV || !rV[pV.h] || kV.metadata[pV.n]) continue;
```

#### 3424. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26187` → after: `L25558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25558) · [Before (L26187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26187)

```diff
-           pickedPoint: new OM.sh(zM[0], zM[1], zM[2]),
+           pickedPoint: new JV.Ik(wV[0], wV[1], wV[2]),
```

#### 3425. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26199-L26201` → after: `L25570-L25572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25570-L25572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25570-L25572) · [Before (L26199-L26201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26199-L26201)

```diff
-         nM = OM.sh.TransformCoordinatesFromFloatsToRef(jM, PM, -1, SM, new OM.sh),
-         QM = OM.sh.TransformCoordinatesFromFloatsToRef(jM, PM, 1 - 1e-8, SM, new OM.sh);
-       return new aM.f(nM, QM.kOM(nM).normalize())
+         QV = JV.Ik.TransformCoordinatesFromFloatsToRef(UV, pV, -1, YV, new JV.Ik),
+         nV = JV.Ik.TransformCoordinatesFromFloatsToRef(UV, pV, 1 - 1e-8, YV, new JV.Ik);
+       return new yV.f(QV, nV.IYV(QV).normalize())
```

#### 3426. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26204` → after: `L25575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25575) · [Before (L26204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26204)

```diff
-   38474: (MM, rM, iM) => {
+   38679: (VV, eV, xV) => {
```

#### 3427. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26208` → after: `L25579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25579) · [Before (L26208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26208)

```diff
-     var OM = iM(38318);
+     var JV = xV(38523);
```

#### 3428. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26211` → after: `L25582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25582) · [Before (L26211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26211)

```diff
-       (0, OM.p)(MM, rM, iM, SM), jM && MM.UL.set(jM[0], jM[1], jM[2]), aM && MM.rotation.set(aM[0], aM[1], aM[2])
+       (0, JV.q)(VV, eV, xV, YV), UV && VV.WZ.set(UV[0], UV[1], UV[2]), yV && VV.rotation.set(yV[0], yV[1], yV[2])
```

#### 3429. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26214` → after: `L25585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25585) · [Before (L26214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26214)

```diff
-   38476: (MM, rM, iM) => {
+   38688: (VV, eV, xV) => {
```

#### 3430. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26218-L26221` → after: `L25588-L25592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25588-L25592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25588-L25592) · [Before (L26218-L26221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26218-L26221)

```diff
-       d: () => mM,
-       e: () => LM,
-       h: () => PM,
-       l: () => zM
+       g: () => QV,
+       j: () => vV,
+       m: () => ZV,
+       p: () => pV,
+       r: () => wV
```

#### 3431. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26223-L26226` → after: `L25594-L25597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25594-L25597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25594-L25597) · [Before (L26223-L26226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26223-L26226)

```diff
-     var OM = iM(38303),
-       SM = iM(38481),
-       jM = iM(38217);
-     var aM = iM(38235);
+     var JV = xV(38515),
+       YV = xV(38690),
+       UV = xV(38421);
+     var yV = xV(38445);
```

#### 3432. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26230` → after: `L25601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25601) · [Before (L26230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26230)

```diff
-         Cm: rM
+         iv: eV
```

#### 3433. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26234-L26236` → after: `L25605-L25607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25605-L25607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25605-L25607) · [Before (L26234-L26236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26234-L26236)

```diff
-         yV: jM
-       } = MM.model.JV, aM = iM.lq();
-       OM[0] = aM[0], OM[1] = aM[1], OM[2] = aM[2], 0 !== iM.hK ? (SM[0] = iM.pitch + iM.Qd[0] + iM.cameraRotationOffset[0], SM[1] = iM.heading + iM.Qd[1] + iM.cameraRotationOffset[1], SM[2] = iM.zL + iM.Qd[2] + iM.cameraRotationOffset[2]) : (SM[0] = iM.pitch + iM.Qd[0], SM[1] = i … [truncated]
+         I9: UV
+       } = VV.model.K9, yV = xV.T_();
+       JV[0] = yV[0], JV[1] = yV[1], JV[2] = yV[2], 0 !== xV.p_ ? (YV[0] = xV.pitch + xV.tE[0] + xV.cameraRotationOffset[0], YV[1] = xV.heading + xV.tE[1] + xV.cameraRotationOffset[1], YV[2] = xV.tZ + xV.tE[2] + xV.cameraRotationOffset[2]) : (YV[0] = xV.pitch + xV.tE[0], YV[1] = x … [truncated]
```

#### 3434. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26245` → after: `L25616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25616) · [Before (L26245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26245)

```diff
-       SM.fogMode = 3, SM.fogStart = rM, SM.fogEnd = iM, SM.fogColour.set(OM), MM.VOM.setBabylonFog(MM, rM, iM, OM)
+       YV.fogMode = 3, YV.fogStart = eV, YV.fogEnd = xV, YV.fogColour.set(JV), VV.bUV.setBabylonFog(VV, eV, xV, JV)
```

#### 3435. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26253` → after: `L25624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25624) · [Before (L26253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26253)

```diff
-         jM = OM.f;
+         UV = JV.h;
```

#### 3436. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26255` → after: `L25626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25626) · [Before (L26255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26255)

```diff
-         const MM = aM * OM.c;
+         const VV = yV * JV.d;
```

#### 3437. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26262` → after: `L25633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25633) · [Before (L26262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26262)

```diff
-       MM.xPM = rM(MM, "camScreen", (0, SM.g)({
+       VV.ynV = eV(VV, "camScreen", (0, YV.k)({
```

#### 3438. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26265-L26266` → after: `L25636-L25637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25636-L25637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25636-L25637) · [Before (L26265-L26266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26265-L26266)

```diff
-       })), MM.xPM.Wh = !0, MM.xPM.position.set(0, 0, MM.model.JV.near + 1 / 512), MM.xPM.parent = MM.camera, MM.vJ(MM.xPM);
-       const iM = (0, jM.u)("camera_screen_mat", MM.YJ);
+       })), VV.ynV.Sk = !0, VV.ynV.position.set(0, 0, VV.model.K9.near + 1 / 512), VV.ynV.parent = VV.camera, VV.wE(VV.ynV);
+       const xV = (0, UV.r)("camera_screen_mat", VV.yE);
```

#### 3439. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26268` → after: `L25639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25639) · [Before (L26268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26268)

```diff
-       MM.vPM = iM.mirror, (OM = MM.vPM).uniqueId = Number.MAX_SAFE_INTEGER, (0, jM.Y)(OM).uniqueId = Number.MAX_SAFE_INTEGER, (0, jM.gb)(iM, {
+       VV.pnV = xV.mirror, (JV = VV.pnV).uniqueId = Number.MAX_SAFE_INTEGER, (0, UV.eb)(JV).uniqueId = Number.MAX_SAFE_INTEGER, (0, UV.tb)(xV, {
```

#### 3440. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26273` → after: `L25644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25644) · [Before (L26273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26273)

```diff
-       }), MM.xPM.kR(!1), (0, aM.q)(MM.vPM), MM.xPM.material = MM.vPM
+       }), VV.ynV.pW(!1), (0, yV.l)(VV.pnV), VV.ynV.material = VV.pnV
```

#### 3441. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26276` → after: `L25647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25647) · [Before (L26276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26276)

```diff
-   38318: (MM, rM, iM) => {
+   38523: (VV, eV, xV) => {
```

#### 3442. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26278-L26280` → after: `L25649-L25650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25649-L25650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25649-L25650) · [Before (L26278-L26280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26278-L26280)

```diff
-       e: () => dM,
-       f: () => eM,
-       i: () => yM,
+       d: () => EV,
+       g: () => PV,
```

#### 3443. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26283-L26284` → after: `L25653-L25655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25653-L25655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25653-L25655) · [Before (L26283-L26284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26283-L26284)

```diff
-       p: () => lM,
-       q: () => EM
+       o: () => tV,
+       q: () => jV,
+       t: () => qV
```

#### 3444. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26286-L26290` → after: `L25657-L25661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25657-L25661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25657-L25661) · [Before (L26286-L26290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26286-L26290)

```diff
-     var OM = iM(38034),
-       SM = iM(38316),
-       jM = iM(38342),
-       aM = iM(38325),
-       PM = iM(38355);
+     var JV = xV(38263),
+       YV = xV(38519),
+       UV = xV(38545),
+       yV = xV(38530),
+       pV = xV(38550);
```

#### 3445. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26293` → after: `L25664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25664) · [Before (L26293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26293)

```diff
-         this.holderPosition = new Float64Array(3), this.holderRotation = new Float64Array(3), this.yV = new Float64Array(3), this.fov = .8, this.near = 1 / 32, this.far = 1e4
+         this.holderPosition = new Float64Array(3), this.holderRotation = new Float64Array(3), this.I9 = new Float64Array(3), this.fov = .8, this.near = 1 / 32, this.far = 1e4
```

#### 3446. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26296-L26299` → after: `L25667-L25670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25667-L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25667-L25670) · [Before (L26296-L26299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26296-L26299)

```diff
-     var QM = iM(38303),
-       zM = iM(38347),
-       LM = iM(38217),
-       mM = iM(38233);
+     var nV = xV(38515),
+       wV = xV(38547),
+       ZV = xV(38421),
+       vV = xV(38437);
```

#### 3447. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26302` → after: `L25673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25673) · [Before (L26302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26302)

```diff
-         this.view = new QM.h, this.JV = new nM, this.earthSky = null, this.nodes = new jM.h, this.meshes = new aM.j(this.nodes)
+         this.view = new nV.i, this.K9 = new QV, this.earthSky = null, this.nodes = new UV.h, this.meshes = new yV.h(this.nodes)
```

#### 3448. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26309-L26312` → after: `L25680-L25683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25680-L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25680-L25683) · [Before (L26309-L26312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26309-L26312)

```diff
-           materials: (0, LM.C)(),
-           textures: (0, mM.H)(),
-           geometries: (0, zM.m)(),
-           batches: (0, PM.d)(),
+           materials: (0, ZV.E)(),
+           textures: (0, vV.L)(),
+           geometries: (0, wV.o)(),
+           batches: (0, pV.g)(),
```

#### 3449. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26318` → after: `L25689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25689) · [Before (L26318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26318)

```diff
-     var hM = iM(38363);
+     var kV = xV(38556);
```

#### 3450. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26336` → after: `L25707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25707) · [Before (L26336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26336)

```diff
-       MM.position.IaM(rM, iM, OM) || MM.position.set(rM, iM, OM)
+       VV.position.rQV(eV, xV, JV) || VV.position.set(eV, xV, JV)
```

#### 3451. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26354` → after: `L25725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25725) · [Before (L26354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26354)

```diff
-       OM.setListed(rM.row, iM && (0 === (SM.flags[rM.row] & jM.f.mesh) || Number.isNaN(OM.radius[rM.row]))), OM.setFlag(rM.row, aM.e.visible, iM)
+       JV.setListed(eV.row, xV && (0 === (YV.flags[eV.row] & UV.e.mesh) || Number.isNaN(JV.radius[eV.row]))), JV.setFlag(eV.row, yV.b.visible, xV)
```

#### 3452. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26361` → after: `L25732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25732) · [Before (L26361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26361)

```diff
-       } = MM, SM = rM.row, aM = 0 !== (iM.nodes.flags[SM] & jM.f.mesh);
+       } = VV, YV = eV.row, yV = 0 !== (xV.nodes.flags[YV] & UV.e.mesh);
```

#### 3453. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26368-L26371` → after: `L25739-L25742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25739-L25742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25739-L25742) · [Before (L26368-L26371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26368-L26371)

```diff
-       YiM: MM => MM.model.view,
-       JV: MM => MM.model.JV,
-       Nk: SM.f,
-       JOM(MM, rM) {
+       YYV: VV => VV.model.view,
+       K9: VV => VV.model.K9,
+       ZC: YV.f,
+       gYV(VV, eV) {
```

#### 3454. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26379` → after: `L25750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25750) · [Before (L26379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26379)

```diff
-           if (null !== SM && void 0 !== SM && SM[hM.B] && !rM.parent) {
+           if (null !== YV && void 0 !== YV && YV[kV.C] && !eV.parent) {
```

#### 3455. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26383` → after: `L25754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25754) · [Before (L26383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26383)

```diff
-             SM[hM.E] = jM, iM.setRadius(OM, jM), iM.setFlag(OM, aM.e.textPlane | aM.e.alwaysSelect, !0)
+             YV[kV.E] = UV, xV.setRadius(JV, UV), xV.setFlag(JV, yV.b.textPlane | yV.b.alwaysSelect, !0)
```

#### 3456. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26388` → after: `L25759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25759) · [Before (L26388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26388)

```diff
-       E_(MM, rM, iM) {
+       xeV(VV, eV, xV) {
```

#### 3457. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26391` → after: `L25762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25762) · [Before (L26391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26391)

```diff
-       rMM(MM, rM) {
+       teV(VV, eV) {
```

#### 3458. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26400` → after: `L25771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25771) · [Before (L26400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26400)

```diff
-           if (0 !== (OM.flags[aM] & jM.f.mesh) && !(0, hM.z)(MM)) {
+           if (0 !== (JV.flags[yV] & UV.e.mesh) && !(0, kV.z)(VV)) {
```

#### 3459. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26408` → after: `L25779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25779) · [Before (L26408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26408)

```diff
-   38878: (MM, rM, iM) => {
+   39055: (VV, eV, xV) => {
```

#### 3460. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26410-L26415` → after: `L25781-L25784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25781-L25784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25781-L25784) · [Before (L26410-L26415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26410-L26415)

```diff
-       b: () => LM,
-       e: () => HM,
-       f: () => EM,
-       h: () => mM,
-       i: () => lM,
-       l: () => QM,
+       c: () => ZV,
+       g: () => rV,
+       k: () => qV,
+       m: () => vV,
```

#### 3461. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26417` → after: `L25786-L25788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25786-L25788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25786-L25788) · [Before (L26417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26417)

```diff
-       r: () => zM
+       r: () => nV,
+       t: () => kV,
+       w: () => wV
```

#### 3462. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26419-L26424` → after: `L25790-L25795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25790-L25795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25790-L25795) · [Before (L26419-L26424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26419-L26424)

```diff
-     var OM = iM(38885),
-       SM = iM(38889),
-       jM = iM(38316),
-       aM = iM(38347),
-       PM = iM(38869),
-       nM = iM(38457);
+     var JV = xV(39058),
+       YV = xV(39066),
+       UV = xV(38519),
+       yV = xV(38547),
+       pV = xV(39053),
+       QV = xV(38662);
```

#### 3463. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26427` → after: `L25798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25798) · [Before (L26427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26427)

```diff
-       return MM.MJ ? EM(MM, rM, iM, SM.d) : (0, nM.c)().meshFromArrays(rM, iM, MM.Hk())
+       return VV.jb ? qV(VV, eV, xV, YV.e) : (0, QV.e)().meshFromArrays(eV, xV, VV.dD())
```

#### 3464. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26431` → after: `L25802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25802) · [Before (L26431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26431)

```diff
-       return MM.MJ ? QM(MM, rM, iM) : (0, nM.c)().plainMeshFromArrays(rM, iM, MM.Hk(), !0)
+       return VV.jb ? nV(VV, eV, xV) : (0, QV.e)().plainMeshFromArrays(eV, xV, VV.dD(), !0)
```

#### 3465. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26438` → after: `L25809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25809) · [Before (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26438)

```diff
-       } else Object.assign(new((0, nM.c)().VertexData), rM).applyToMesh(MM, !0)
+       } else Object.assign(new((0, QV.e)().VertexData), eV).applyToMesh(VV, !0)
```

#### 3466. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26442` → after: `L25813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25813) · [Before (L26442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26442)

```diff
-       return MM.VOM.linesFromArrays(MM, rM, iM)
+       return VV.bUV.linesFromArrays(VV, eV, xV)
```

#### 3467. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26446` → after: `L25817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25817) · [Before (L26446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26446)

```diff
-       return MM.MJ ? new SM.d(MM, rM, MM.Hk().getUniqueId(), null, !1, new Int32Array(0)) : new((0, nM.c)().Mesh)(rM, MM.Hk())
+       return VV.jb ? new YV.e(VV, eV, VV.dD().getUniqueId(), null, !1, new Int32Array(0)) : new((0, QV.e)().Mesh)(eV, VV.dD())
```

#### 3468. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26450` → after: `L25821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25821) · [Before (L26450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26450)

```diff
-       return MM.MJ ? (0, jM.g)(MM, rM) : new((0, nM.c)().TransformNode)(rM, MM.Hk())
+       return VV.jb ? (0, UV.j)(VV, eV) : new((0, QV.e)().TransformNode)(eV, VV.dD())
```

#### 3469. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26475` → after: `L25846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25846) · [Before (L26475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26475)

```diff
-         indices: null !== (rM = MM.hOM()) && void 0 !== rM ? rM : [],
+         indices: null !== (eV = VV.RYV()) && void 0 !== eV ? eV : [],
```

#### 3470. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26486` → after: `L25857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25857) · [Before (L26486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26486)

```diff
-       if (!(0, jM.f)(MM[0])) return (0, nM.c)().MirroredGeometry.mergeMeshes(MM, !0, iM, null, !1, rM);
+       if (!(0, UV.f)(VV[0])) return (0, QV.e)().MirroredGeometry.mergeMeshes(VV, !0, xV, null, !1, eV);
```

#### 3471. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26490` → after: `L25861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25861) · [Before (L26490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26490)

```diff
-         LM = OM.some((MM => MM.Wk || MM.sideOrientation !== QM.sideOrientation));
+         ZV = JV.some((VV => VV.JC || VV.sideOrientation !== nV.sideOrientation));
```

#### 3472. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26497` → after: `L25868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25868) · [Before (L26497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26497)

```diff
-           return (null !== (iM = null === (OM = MM.material) || void 0 === OM ? void 0 : OM.uniqueId) && void 0 !== iM ? iM : -1) - (null !== (SM = null === (jM = rM.material) || void 0 === jM ? void 0 : jM.uniqueId) && void 0 !== SM ? SM : -1)
+           return (null !== (xV = null === (JV = VV.material) || void 0 === JV ? void 0 : JV.uniqueId) && void 0 !== xV ? xV : -1) - (null !== (YV = null === (UV = eV.material) || void 0 === UV ? void 0 : UV.uniqueId) && void 0 !== YV ? YV : -1)
```

#### 3473. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26508-L26510` → after: `L25879-L25881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25879-L25881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25879-L25881) · [Before (L26508-L26510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26508-L26510)

```diff
-           for (let rM = 0; rM < iM.Ld.length; rM += 4) {
-             const [jM, aM] = [SM + iM.Ld[rM], iM.Ld[rM + 1]], PM = HM.length - 4;
-             PM >= 0 && HM[PM + 2] === OM && HM[PM] + HM[PM + 1] === jM ? HM[PM + 1] += aM : HM.push(jM, aM, OM, 0), MM = Math.max(MM, jM + aM)
+           for (let eV = 0; eV < xV.TE.length; eV += 4) {
+             const [UV, yV] = [YV + xV.TE[eV], xV.TE[eV + 1]], pV = rV.length - 4;
+             pV >= 0 && rV[pV + 2] === JV && rV[pV] + rV[pV + 1] === UV ? rV[pV + 1] += yV : rV.push(UV, yV, JV, 0), VV = Math.max(VV, UV + yV)
```

#### 3474. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26514-L26515` → after: `L25885-L25886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25885-L25886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25885-L25886) · [Before (L26514-L26515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26514-L26515)

```diff
-       const hM = (0, PM.h)(OM.map((MM => [dM(MM), MM.getWorldMatrix().m]))),
-         JM = `${QM.name}_merged`,
+       const kV = (0, pV.d)(JV.map((VV => [EV(VV), VV.getWorldMatrix().m]))),
+         bV = `${nV.name}_merged`,
```

#### 3475. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26517-L26518` → after: `L25888-L25889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25888-L25889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25888-L25889) · [Before (L26517-L26518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26517-L26518)

```diff
-         UM = Int32Array.from(HM, ((MM, rM) => rM % 4 === 2 ? 0 : rM % 4 === 3 ? lM : MM)),
-         GM = EM(QM.CL, JM, hM, SM.d, rM ? UM : void 0);
+         tV = Int32Array.from(rV, ((VV, eV) => eV % 4 === 2 ? 0 : eV % 4 === 3 ? jV : VV)),
+         FV = qV(nV.gZ, bV, kV, YV.e, eV ? tV : void 0);
```

#### 3476. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26524` → after: `L25895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25895) · [Before (L26524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26524)

```diff
-         const [MM, rM] = (0, aM.n)(HM[SM + 1], ((MM, rM) => hM.positions[3 * hM.indices[HM[SM] + MM] + rM]));
+         const [VV, eV] = (0, yV.s)(rV[YV + 1], ((VV, eV) => kV.positions[3 * kV.indices[rV[YV] + VV] + eV]));
```

#### 3477. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26529-L26530` → after: `L25900-L25901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25900-L25901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25900-L25901) · [Before (L26529-L26530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26529-L26530)

```diff
-         uniqueId: QM.Hk().getUniqueId(),
-         B_: mM,
+         uniqueId: nV.dD().getUniqueId(),
+         BeV: vV,
```

#### 3478. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26539-L26540` → after: `L25910-L25911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25910-L25911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25910-L25911) · [Before (L26539-L26540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26539-L26540)

```diff
-       (0, aM.j)(PM);
-       const nM = new SM(MM, rM, MM.Hk().getUniqueId(), PM, !0, jM);
+       (0, yV.m)(pV);
+       const QV = new YV(VV, eV, VV.dD().getUniqueId(), pV, !0, UV);
```

#### 3479. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26544` → after: `L25915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25915) · [Before (L26544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26544)

```diff
-   38188: (MM, rM, iM) => {
+   38399: (VV, eV, xV) => {
```

#### 3480. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26546-L26547` → after: `L25917-L25919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25917-L25919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25917-L25919) · [Before (L26546-L26547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26546-L26547)

```diff
-       A: () => LM,
-       B: () => zM,
+       $: () => oV,
+       Ab: () => nV,
+       C: () => ZV,
```

#### 3481. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26549-L26551` → after: `L25921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25921) · [Before (L26549-L26551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26549-L26551)

```diff
-       E: () => bM,
-       Fb: () => dM,
-       G: () => WM,
+       F: () => wV,
```

#### 3482. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26553-L26554` → after: `L25923-L25925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25923-L25925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25923-L25925) · [Before (L26553-L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26553-L26554)

```diff
-       Hb: () => tM,
-       K: () => jM,
+       Ib: () => EV,
+       J: () => AV,
+       Jb: () => qV,
```

#### 3483. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26556-L26559` → after: `L25927-L25931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25927-L25931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25927-L25931) · [Before (L26556-L26559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26556-L26559)

```diff
-       M: () => kM,
-       Q: () => DM,
-       R: () => UM,
-       U: () => uM,
+       N: () => RV,
+       Nb: () => MV,
+       P: () => UV,
+       S: () => iV,
+       T: () => DV,
```

#### 3484. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26564-L26567` → after: `L25935-L25937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25935-L25937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25935-L25937) · [Before (L26564-L26567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26564-L26567)

```diff
-       b: () => OM,
-       bb: () => NM,
-       cb: () => xM,
-       e: () => JM,
+       d: () => JV,
+       db: () => YV,
+       f: () => bV,
```

#### 3485. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26569-L26570` → after: `L25939-L25941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25939-L25941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25939-L25941) · [Before (L26569-L26570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26569-L26570)

```diff
-       gb: () => CM,
-       h: () => wM,
+       i: () => NV,
+       ib: () => hV,
+       jb: () => LV,
```

#### 3486. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26572-L26573` → after: `L25943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25943) · [Before (L26572-L26573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26572-L26573)

```diff
-       l: () => lM,
-       n: () => nM,
+       m: () => jV,
```

#### 3487. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26575` → after: `L25945-L25947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25945-L25947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25945-L25947) · [Before (L26575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26575)

```diff
-       q: () => ZM,
+       p: () => QV,
+       pb: () => lV,
+       rb: () => fV,
```

#### 3488. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26582` → after: `L25953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25953) · [Before (L26582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26582)

```diff
-       zb: () => yM
+       z: () => rV
```

#### 3489. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26594` → after: `L25965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25965) · [Before (L26594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26594)

```diff
-       return SM(MM) ? iM : rM
+       return YV(VV) ? xV : eV
```

#### 3490. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26610` → after: `L25981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25981) · [Before (L26610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26610)

```diff
-       if (!iM) throw new Error(`No WGSL name for shader type "${rM}"`);
+       if (!xV) throw new Error(`No WGSL name for shader type "${eV}"`);
```

#### 3491. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26616` → after: `L25987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25987) · [Before (L26616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26616)

```diff
-       return `${PM(MM,rM)}(${OM.join(", ")})`
+       return `${pV(VV,eV)}(${JV.join(", ")})`
```

#### 3492. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26624` → after: `L25995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25995) · [Before (L26624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26624)

```diff
-       return SM(MM) ? `var ${iM}: ${PM(MM,rM)} = ${OM};` : `${hM(MM,jM)}${rM} ${iM} = ${OM};`
+       return YV(VV) ? `var ${xV}: ${pV(VV,eV)} = ${JV};` : `${kV(VV,UV)}${eV} ${xV} = ${JV};`
```

#### 3493. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26628` → after: `L25999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L25999) · [Before (L26628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26628)

```diff
-       return SM(MM) ? `var ${iM}: ${PM(MM,rM)};` : `${rM} ${iM};`
+       return YV(VV) ? `var ${xV}: ${pV(VV,eV)};` : `${eV} ${xV};`
```

#### 3494. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26632` → after: `L26003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26003) · [Before (L26632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26632)

```diff
-       return SM(MM) ? `const ${iM}: ${PM(MM,rM)} = ${OM};` : `const ${rM} ${iM} = ${OM};`
+       return YV(VV) ? `const ${xV}: ${pV(VV,eV)} = ${JV};` : `const ${eV} ${xV} = ${JV};`
```

#### 3495. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26637` → after: `L26008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26008) · [Before (L26637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26637)

```diff
-         return `fn ${iM}(${OM.map((rM=>`${rM.name}: ${PM(MM,rM.type)}`)).join(", ")}) -> ${PM(MM,rM)} {${jM}}`
+         return `fn ${xV}(${JV.map((eV=>`${eV.name}: ${pV(VV,eV.type)}`)).join(", ")}) -> ${pV(VV,eV)} {${UV}}`
```

#### 3496. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26639` → after: `L26010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26010) · [Before (L26639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26639)

```diff
-       return `${rM} ${iM}(${OM.map((MM=>`${MM.type} ${MM.name}`)).join(", ")}) {${jM}}`
+       return `${eV} ${xV}(${JV.map((VV=>`${VV.type} ${VV.name}`)).join(", ")}) {${UV}}`
```

#### 3497. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26643` → after: `L26014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26014) · [Before (L26643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26643)

```diff
-       return !rM || SM(MM) ? "" : `${rM} `
+       return !eV || YV(VV) ? "" : `${eV} `
```

#### 3498. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26647` → after: `L26018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26018) · [Before (L26647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26647)

```diff
-       return SM(MM) ? `attribute ${rM}: ${PM(MM,iM)};` : `attribute ${hM(MM,OM)}${iM} ${rM};`
+       return YV(VV) ? `attribute ${eV}: ${pV(VV,xV)};` : `attribute ${kV(VV,JV)}${xV} ${eV};`
```

#### 3499. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26651` → after: `L26022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26022) · [Before (L26651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26651)

```diff
-       return SM(MM) ? `varying ${rM}: ${PM(MM,iM)};` : `varying ${hM(MM,OM)}${iM} ${rM};`
+       return YV(VV) ? `varying ${eV}: ${pV(VV,xV)};` : `varying ${kV(VV,JV)}${xV} ${eV};`
```

#### 3500. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26655` → after: `L26026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26026) · [Before (L26655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26655)

```diff
-       return SM(MM) ? `uniform ${rM}: ${PM(MM,iM)};` : `uniform ${iM} ${rM};`
+       return YV(VV) ? `uniform ${eV}: ${pV(VV,xV)};` : `uniform ${xV} ${eV};`
```

#### 3501. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26663` → after: `L26034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26034) · [Before (L26663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26663)

```diff
-       return SM(MM) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${rM}}` : `void main() {${rM}}`
+       return YV(VV) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${eV}}` : `void main() {${eV}}`
```

#### 3502. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26667` → after: `L26038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26038) · [Before (L26667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26667)

```diff
-       return SM(MM) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${rM}}` : `void main() {${rM}}`
+       return YV(VV) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${eV}}` : `void main() {${eV}}`
```

#### 3503. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26672` → after: `L26043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26043) · [Before (L26672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26672)

```diff
-         return [`var ${rM}Sampler: sampler;`, `var ${rM}: ${"2dArray"===iM?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+         return [`var ${eV}Sampler: sampler;`, `var ${eV}: ${"2dArray"===xV?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
```

#### 3504. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26674` → after: `L26045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26045) · [Before (L26674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26674)

```diff
-       return `uniform highp ${"2dArray"===iM?"sampler2DArray":"sampler2D"} ${rM};`
+       return `uniform highp ${"2dArray"===xV?"sampler2DArray":"sampler2D"} ${eV};`
```

#### 3505. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26678` → after: `L26049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26049) · [Before (L26678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26678)

```diff
-       return SM(MM) ? `textureSample(${rM}, ${rM}Sampler, ${iM})` : `texture2D(${rM}, ${iM})`
+       return YV(VV) ? `textureSample(${eV}, ${eV}Sampler, ${xV})` : `texture2D(${eV}, ${xV})`
```

#### 3506. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26683` → after: `L26054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26054) · [Before (L26683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26683)

```diff
-         return `${jM?"textureSampleLevel":"textureSample"}(${rM}, ${rM}Sampler, ${iM}, ${QM(MM,`round(${OM})`)}${jM?`, ${jM}`:""})`
+         return `${UV?"textureSampleLevel":"textureSample"}(${eV}, ${eV}Sampler, ${xV}, ${nV(VV,`round(${JV})`)}${UV?`, ${UV}`:""})`
```

#### 3507. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26686` → after: `L26057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26057) · [Before (L26686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26686)

```diff
-       return jM ? `textureLod(${rM}, ${aM}, ${jM})` : `texture(${rM}, ${aM})`
+       return UV ? `textureLod(${eV}, ${yV}, ${UV})` : `texture(${eV}, ${yV})`
```

#### 3508. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26702` → after: `L26073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26073) · [Before (L26702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26702)

```diff
-       return SM(MM) ? `vertexInputs.${rM}` : rM
+       return YV(VV) ? `vertexInputs.${eV}` : eV
```

#### 3509. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26706` → after: `L26077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26077) · [Before (L26706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26706)

```diff
-       return SM(MM) ? `vertexOutputs.${rM}` : rM
+       return YV(VV) ? `vertexOutputs.${eV}` : eV
```

#### 3510. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26710` → after: `L26081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26081) · [Before (L26710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26710)

```diff
-       return SM(MM) ? `fragmentInputs.${rM}` : rM
+       return YV(VV) ? `fragmentInputs.${eV}` : eV
```

#### 3511. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26714` → after: `L26085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26085) · [Before (L26714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26714)

```diff
-       return SM(MM) ? `uniforms.${rM}` : rM
+       return YV(VV) ? `uniforms.${eV}` : eV
```

#### 3512. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26718` → after: `L26089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26089) · [Before (L26718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26718)

```diff
-       return SM(MM) ? `frame.${rM}` : iM
+       return YV(VV) ? `frame.${eV}` : xV
```

#### 3513. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26738` → after: `L26109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26109) · [Before (L26738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26738)

```diff
-       return SM(MM) ? `dpdx(${rM})` : `dFdx(${rM})`
+       return YV(VV) ? `dpdx(${eV})` : `dFdx(${eV})`
```

#### 3514. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26742` → after: `L26113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26113) · [Before (L26742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26742)

```diff
-       return SM(MM) ? `dpdy(${rM})` : `dFdy(${rM})`
+       return YV(VV) ? `dpdy(${eV})` : `dFdy(${eV})`
```

#### 3515. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26746` → after: `L26117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26117) · [Before (L26746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26746)

```diff
-       return SM(MM) ? `inverseSqrt(${rM})` : `inversesqrt(${rM})`
+       return YV(VV) ? `inverseSqrt(${eV})` : `inversesqrt(${eV})`
```

#### 3516. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26750` → after: `L26121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26121) · [Before (L26750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26750)

```diff
-       return SM(MM) ? `select(${OM}, ${iM}, ${rM})` : `((${rM}) ? (${iM}) : (${OM}))`
+       return YV(VV) ? `select(${JV}, ${xV}, ${eV})` : `((${eV}) ? (${xV}) : (${JV}))`
```

#### 3517. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26754` → after: `L26125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26125) · [Before (L26754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26754)

```diff
-       return SM(MM) ? `((${rM}) - (${iM}) * floor((${rM}) / (${iM})))` : `mod(${rM}, ${iM})`
+       return YV(VV) ? `((${eV}) - (${xV}) * floor((${eV}) / (${xV})))` : `mod(${eV}, ${xV})`
```

#### 3518. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26758` → after: `L26129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26129) · [Before (L26758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26758)

```diff
-       return SM(MM) ? `${rM} = vec4f(${iM}, ${rM}.a);` : `${rM}.rgb = ${iM};`
+       return YV(VV) ? `${eV} = vec4f(${xV}, ${eV}.a);` : `${eV}.rgb = ${xV};`
```

#### 3519. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26762` → after: `L26133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26133) · [Before (L26762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26762)

```diff
-       return SM(MM) ? `${rM} = vec4f(${rM}.rgb * (${iM}), ${rM}.a);` : `${rM}.rgb *= ${iM};`
+       return YV(VV) ? `${eV} = vec4f(${eV}.rgb * (${xV}), ${eV}.a);` : `${eV}.rgb *= ${xV};`
```

#### 3520. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26766` → after: `L26137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26137) · [Before (L26766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26766)

```diff
-       return SM(MM) ? `${rM} = vec4f(${iM}, ${rM}.w);` : `${rM}.xyz = ${iM};`
+       return YV(VV) ? `${eV} = vec4f(${xV}, ${eV}.w);` : `${eV}.xyz = ${xV};`
```

#### 3521. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26769` → after: `L26140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26140) · [Before (L26769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26769)

```diff
-   38412: (MM, rM, iM) => {
+   38612: (VV, eV, xV) => {
```

#### 3522. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26771-L26773` → after: `L26142-L26144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26142-L26144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26142-L26144) · [Before (L26771-L26773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26771-L26773)

```diff
-       c: () => jM,
-       g: () => SM,
-       k: () => aM
+       e: () => UV,
+       i: () => YV,
+       j: () => yV
```

#### 3523. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26775` → after: `L26146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26146) · [Before (L26775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26775)

```diff
-     var OM = iM(38390);
+     var JV = xV(38595);
```

#### 3524. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26780` → after: `L26151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26151) · [Before (L26780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26780)

```diff
-       return null !== (rM = MM.vertexCount) && void 0 !== rM ? rM : MM.vertices.byteLength / (0, OM.f)(MM.usesAtlas)
+       return null !== (eV = VV.vertexCount) && void 0 !== eV ? eV : VV.vertices.byteLength / (0, JV.k)(VV.usesAtlas)
```

#### 3525. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26785` → after: `L26156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26156) · [Before (L26785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26785)

```diff
-       return [iM, rM[0], rM[1], rM[2]].map((rM => MM ? (0, OM.j)(rM) : 255))
+       return [xV, eV[0], eV[1], eV[2]].map((eV => VV ? (0, JV.l)(eV) : 255))
```

#### 3526. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26788` → after: `L26159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26159) · [Before (L26788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26788)

```diff
-   38404: (MM, rM, iM) => {
+   38604: (VV, eV, xV) => {
```

#### 3527. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26803` → after: `L26174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26174) · [Before (L26803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26803)

```diff
-       (null !== (rM = null === (iM = MM.getBuffer()) || void 0 === iM ? void 0 : iM.vL) && void 0 !== rM ? rM : 0) > 0 && (OM.add(MM), 0 === SM ? aM(MM, null) : jM.add(MM))
+       (null !== (eV = null === (xV = VV.getBuffer()) || void 0 === xV ? void 0 : xV.Jv) && void 0 !== eV ? eV : 0) > 0 && (JV.add(VV), 0 === YV ? yV(VV, null) : UV.add(VV))
```

#### 3528. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26812` → after: `L26183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26183) · [Before (L26812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26812)

```diff
-             for (const SM of Object.values(null !== (iM = null === MM || void 0 === MM ? void 0 : MM.getVertexBuffers()) && void 0 !== iM ? iM : {})) {
+             for (const YV of Object.values(null !== (xV = null === VV || void 0 === VV ? void 0 : VV.getVertexBuffers()) && void 0 !== xV ? xV : {})) {
```

#### 3529. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26831` → after: `L26202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26202) · [Before (L26831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26831)

```diff
-       if (!rM || !(rM.vL > 0)) return;
+       if (!eV || !(eV.Jv > 0)) return;
```

#### 3530. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26833` → after: `L26204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26204) · [Before (L26833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26833)

```diff
-         OM = new Uint8Array(rM.vL);
+         JV = new Uint8Array(eV.Jv);
```

#### 3531. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26837` → after: `L26208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26208) · [Before (L26837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26837)

```diff
-   38418: (MM, rM, iM) => {
+   38621: (VV, eV, xV) => {
```

#### 3532. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26840` → after: `L26211-L26213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26211-L26213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26211-L26213) · [Before (L26840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26840)

```diff
-       g: () => jM,
+       e: () => UV,
+       h: () => QV,
+       i: () => JV,
```

#### 3533. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26842-L26845` → after: `L26215-L26216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26215-L26216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26215-L26216) · [Before (L26842-L26845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26842-L26845)

```diff
-       l: () => OM,
-       n: () => PM,
-       r: () => SM,
-       t: () => QM
+       o: () => YV,
+       p: () => nV
```

#### 3534. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26864` → after: `L26235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26235) · [Before (L26864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26864)

```diff
-   38467: (MM, rM, iM) => {
+   38673: (VV, eV, xV) => {
```

#### 3535. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26866-L26867` → after: `L26237-L26238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26237-L26238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26237-L26238) · [Before (L26866-L26867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26866-L26867)

```diff
-       c: () => PM,
-       f: () => OM
+       d: () => pV,
+       e: () => JV
```

#### 3536. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26872` → after: `L26243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26243) · [Before (L26872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26872)

```diff
-       for (const SM of null !== (rM = MM._drawWrappers) && void 0 !== rM ? rM : []) {
+       for (const YV of null !== (eV = VV._drawWrappers) && void 0 !== eV ? eV : []) {
```

#### 3537. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26879` → after: `L26250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26250) · [Before (L26879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26879)

```diff
-       for (const iM of null !== (rM = MM.iG) && void 0 !== rM ? rM : []) {
+       for (const xV of null !== (eV = VV.hT) && void 0 !== eV ? eV : []) {
```

#### 3538. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26881` → after: `L26252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26252) · [Before (L26881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26881)

```diff
-         const MM = iM.Zh();
+         const VV = xV.eb();
```

#### 3539. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26896` → after: `L26267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26267) · [Before (L26896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26896)

```diff
-           if (rM.xG()) {
+           if (eV.iN()) {
```

#### 3540. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26911` → after: `L26282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26282) · [Before (L26911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26911)

```diff
-   38791: (MM, rM, iM) => {
+   38968: (VV, eV, xV) => {
```

#### 3541. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26914-L26916` → after: `L26286-L26287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26286-L26287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26286-L26287) · [Before (L26914-L26916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26914-L26916)

```diff
-       g: () => lM,
-       k: () => yM,
-       m: () => JM
+       f: () => BV,
+       i: () => bV
```

#### 3542. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26918-L26926` → after: `L26289-L26297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26289-L26297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26289-L26297) · [Before (L26918-L26926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26918-L26926)

```diff
-     var OM = iM(38797),
-       SM = iM(38809),
-       jM = iM(38815),
-       aM = iM(38822),
-       PM = iM(38217),
-       nM = iM(38233),
-       QM = iM(38448),
-       zM = iM(38829),
-       LM = iM(38235);
+     var JV = xV(38977),
+       YV = xV(38985),
+       UV = xV(38987),
+       yV = xV(38991),
+       pV = xV(38421),
+       QV = xV(38437),
+       nV = xV(38653),
+       wV = xV(38994),
+       ZV = xV(38445);
```

#### 3543. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26929` → after: `L26300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26300) · [Before (L26929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26929)

```diff
-         this.Cm = MM, this._defaultMat = void 0, this.allMaterials = void 0, this._blockMatIDtoTerrainID = void 0, this._idCounter = void 0, this._terrainIDtoMatObject = void 0, this._texURLtoTerrainID = void 0, this._renderMatToTerrainID = void 0, this._defaultMat = EM(MM, "base … [truncated]
+         this.iv = VV, this._defaultMat = void 0, this.allMaterials = void 0, this._blockMatIDtoTerrainID = void 0, this._idCounter = void 0, this._terrainIDtoMatObject = void 0, this._texURLtoTerrainID = void 0, this._renderMatToTerrainID = void 0, this._defaultMat = qV(VV, "base … [truncated]
```

#### 3544. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26931` → after: `L26302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26302) · [Before (L26931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26931)

```diff
-       Z8(MM) {
+       vVV(VV) {
```

#### 3545. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26934-L26937` → after: `L26305-L26308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26305-L26308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26305-L26308) · [Before (L26934-L26937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26934-L26937)

```diff
-           var iM = MM.Cm.nL.mJ(rM);
-           if (iM.HJ) {
-             var OM = iM.HJ;
-             return MM._renderMatToTerrainID.has(OM) || ((0, LM.h)(OM), MM._renderMatToTerrainID.set(OM, MM._idCounter++), dM.add(OM)), MM._renderMatToTerrainID.get(OM)
+           var xV = VV.iv.jZ.Wb(eV);
+           if (xV.Rb) {
+             var JV = xV.Rb;
+             return VV._renderMatToTerrainID.has(JV) || ((0, ZV.g)(JV), VV._renderMatToTerrainID.set(JV, VV._idCounter++), EV.add(JV)), VV._renderMatToTerrainID.get(JV)
```

#### 3546. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26939-L26941` → after: `L26310-L26312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26310-L26312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26310-L26312) · [Before (L26939-L26941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26939-L26941)

```diff
-           if (iM.E1.length) {
-             var SM = iM.E1[0];
-             return (SM = (0, QM.g)(MM.Cm, iM, SM)) in MM._texURLtoTerrainID || (MM._texURLtoTerrainID[SM] = MM._idCounter++), MM._texURLtoTerrainID[SM]
+           if (xV.xVV.length) {
+             var YV = xV.xVV[0];
+             return (YV = (0, nV.f)(VV.iv, xV, YV)) in VV._texURLtoTerrainID || (VV._texURLtoTerrainID[YV] = VV._idCounter++), VV._texURLtoTerrainID[YV]
```

#### 3547. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26948` → after: `L26319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26319) · [Before (L26948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26948)

```diff
-               Cm: iM
+               iv: xV
```

#### 3548. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26950-L26952` → after: `L26321-L26323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26321-L26323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26321-L26323) · [Before (L26950-L26952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26950-L26952)

```diff
-             var jM = iM.nL.mJ(rM);
-             if (jM.HJ) return jM.HJ;
-             if (0 === jM.E1.length) {
+             var UV = xV.jZ.Wb(eV);
+             if (UV.Rb) return UV.Rb;
+             if (0 === UV.xVV.length) {
```

#### 3549. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26955` → after: `L26326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26326) · [Before (L26955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26955)

```diff
-                 (0, PM.gb)(MM, {
+                 (0, pV.tb)(VV, {
```

#### 3550. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26962-L26968` → after: `L26333-L26339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26333-L26339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26333-L26339) · [Before (L26962-L26968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26962-L26968)

```diff
-               const rM = jM.E1,
-                 aM = jM.Q0 >= 0,
-                 nM = aM && (0, QM.k)(iM, jM),
-                 LM = !nM && (jM.U1 || aM && rM.some((MM => iM.nL.Y5(MM)))),
-                 mM = rM.map((MM => lM(MM, iM.CL.YJ, LM))),
-                 HM = nM ? PM.n.opaque : LM ? PM.n.alphaTest : null;
-               (0, PM.gb)(MM, {
+               const eV = UV.xVV,
+                 yV = UV.YVV >= 0,
+                 QV = yV && (0, nV.h)(xV, UV),
+                 ZV = !QV && (UV.JVV || yV && eV.some((VV => xV.jZ.jVV(VV)))),
+                 vV = eV.map((VV => jV(VV, xV.gZ.yE, ZV))),
+                 rV = QV ? pV.p.opaque : ZV ? pV.p.alphaTest : null;
+               (0, pV.tb)(VV, {
```

#### 3551. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26974` → after: `L26345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26345) · [Before (L26974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26974)

```diff
-                 Jd: hM
+                 XE: kV
```

#### 3552. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26980-L26981` → after: `L26351-L26352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26351-L26352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26351-L26352) · [Before (L26980-L26981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26980-L26981)

```diff
-                   pixels: null !== (JM = jM.Z2) && void 0 !== JM ? JM : null,
-                   layerWidth: null !== (dM = jM.U3) && void 0 !== dM ? dM : null
+                   pixels: null !== (bV = UV.UVV) && void 0 !== bV ? bV : null,
+                   layerWidth: null !== (EV = UV.yVV) && void 0 !== EV ? EV : null
```

#### 3553. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26983-L26984` → after: `L26354-L26355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26354-L26355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26354-L26355) · [Before (L26983-L26984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26983-L26984)

```diff
-                 (0, PM.r)(MM, SM.g, (0, zM.h)(OM, mM, hM, iM.CL.aJ(), !0))
-               } else hM && (0, PM.r)(MM, OM.b, (0, OM.g)(hM[0] + 1, hM[2]))
+                 (0, pV.q)(VV, YV.h, (0, wV.d)(JV, vV, kV, xV.gZ.Ab(), !0))
+               } else kV && (0, pV.q)(VV, JV.b, (0, JV.g)(kV[0] + 1, kV[2]))
```

#### 3554. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26996` → after: `L26367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26367) · [Before (L26996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26996)

```diff
-         return (0, PM.Y)(this._terrainIDtoMatObject[MM])
+         return (0, pV.eb)(this._terrainIDtoMatObject[VV])
```

#### 3555. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L26999-L27001` → after: `L26370-L26372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26370-L26372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26370-L26372) · [Before (L26999-L27001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L26999-L27001)

```diff
-         const rM = (0, PM.Y)(MM).diffuseTexture;
-         rM.mirror && (rM.mirror.hasAlpha = !0), rM.hasAlpha = !0, (0, LM.V)(MM, {
-           transparencyMode: PM.n.alphaTest,
+         const eV = (0, pV.eb)(VV).diffuseTexture;
+         eV.mirror && (eV.mirror.hasAlpha = !0), eV.hasAlpha = !0, (0, ZV.J)(VV, {
+           transparencyMode: pV.p.alphaTest,
```

#### 3556. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27008` → after: `L26379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26379) · [Before (L27008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27008)

```diff
-       return !MM.HJ && 0 === MM.E1.length && MM.alpha > 0 && MM.alpha < 1
+       return !VV.Rb && 0 === VV.xVV.length && VV.alpha > 0 && VV.alpha < 1
```

#### 3557. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27022` → after: `L26393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26393) · [Before (L27022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27022)

```diff
-       return (0, nM.u)(rM, {
+       return (0, QV.v)(eV, {
```

#### 3558. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27026` → after: `L26397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26397) · [Before (L27026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27026)

```diff
-         samplingMode: nM.i.nearestNearestMipLinear,
+         samplingMode: QV.h.nearestNearestMipLinear,
```

#### 3559. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27035-L27037` → after: `L26406-L26408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26406-L26408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26406-L26408) · [Before (L27035-L27037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27035-L27037)

```diff
-         CL: OM
-       } = MM, SM = (0, PM.u)(rM, OM.YJ);
-       (0, PM.gb)(SM, LM.e), null === iM || void 0 === iM || iM(SM);
+         gZ: JV
+       } = VV, YV = (0, pV.r)(eV, JV.yE);
+       (0, pV.tb)(YV, ZV.e), null === xV || void 0 === xV || xV(YV);
```

#### 3560. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27039` → after: `L26410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26410) · [Before (L27039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27039)

```diff
-       return (0, PM.r)(SM, aM.j, (0, aM.m)(OM, nM)), (0, jM.f)(SM, (0, QM.d)(MM)), (0, LM.q)(nM), nM
+       return (0, pV.q)(YV, yV.j, (0, yV.k)(JV, QV)), (0, UV.i)(YV, (0, nV.d)(VV)), (0, ZV.l)(QV), QV
```

#### 3561. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27042` → after: `L26413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26413) · [Before (L27042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27042)

```diff
-   38388: (MM, rM, iM) => {
+   38589: (VV, eV, xV) => {
```

#### 3562. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27045` → after: `L26416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26416) · [Before (L27045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27045)

```diff
-       f: () => nM
+       g: () => QV
```

#### 3563. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27047-L27051` → after: `L26418-L26422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26418-L26422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26418-L26422) · [Before (L27047-L27051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27047-L27051)

```diff
-     var OM = iM(3182),
-       SM = iM(38390),
-       jM = iM(38395),
-       aM = iM(38402),
-       PM = iM(38404);
+     var JV = xV(3189),
+       YV = xV(38595),
+       UV = xV(38598),
+       yV = xV(38601),
+       pV = xV(38604);
```

#### 3564. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27059` → after: `L26430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26430) · [Before (L27059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27059)

```diff
-       const OM = MM.ph(),
+       const JV = VV.sk(),
```

#### 3565. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27067` → after: `L26438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26438) · [Before (L27067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27067)

```diff
-             SM = (0, jM.f)(new Uint32Array(6 * OM), OM),
+             YV = (0, UV.d)(new Uint32Array(6 * JV), JV),
```

#### 3566. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27072` → after: `L26443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26443) · [Before (L27072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27072)

```diff
-           return iM ? MM._releaseBuffer(iM.buffer) : MM.Rh.addOnce((() => {
+           return xV ? VV._releaseBuffer(xV.buffer) : VV.uk.addOnce((() => {
```

#### 3567. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27086` → after: `L26457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26457) · [Before (L27086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27086)

```diff
-       return !!MM && rM <= MM.vL && MM.vL <= 2 * rM + 64 * iM
+       return !!VV && eV <= VV.Jv && VV.Jv <= 2 * eV + 64 * xV
```

#### 3568. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27099` → after: `L26470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26470) · [Before (L27099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27099)

```diff
-         this.terrainMatManager = MM, this.babylon = rM, this.HL = iM, this.releasesCpuCopies = OM
+         this.terrainMatManager = VV, this.babylon = eV, this.PZ = xV, this.releasesCpuCopies = JV
```

#### 3569. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27111` → after: `L26482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26482) · [Before (L27111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27111)

```diff
-           sh: rM
+           Ik: eV
```

#### 3570. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27113` → after: `L26484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26484) · [Before (L27113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27113)

```diff
-           HL: iM
+           PZ: xV
```

#### 3571. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27122` → after: `L26493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26493) · [Before (L27122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27122)

```diff
-           Dh: zM,
+           Ok: wV,
```

#### 3572. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27126-L27127` → after: `L26497-L26498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26497-L26498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26497-L26498) · [Before (L27126-L27127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27126-L27127)

```diff
-         MM.kh || console.warn(`assignMeshData: chunk mesh "${MM.name}" missing doNotSyncBoundingInfo`), MM.name = `chunk_${zM}_${LM}`;
-         const HM = (0, SM.f)(PM),
+         VV.Vb || console.warn(`assignMeshData: chunk mesh "${VV.name}" missing doNotSyncBoundingInfo`), VV.name = `chunk_${wV}_${ZV}`;
+         const rV = (0, YV.k)(pV),
```

#### 3573. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27129-L27130` → after: `L26500-L26501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26500-L26501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26500-L26501) · [Before (L27129-L27130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27129-L27130)

```diff
-           JM = rM.Lh ? (0, aM.d)(rM.Lh) : hM > 0 ? function(MM) {
-             return (!QM || QM.length < MM) && (QM = new Float32Array(MM).fill(OM.h)), QM.subarray(0, MM)
+           bV = eV.Gk ? (0, yV.e)(eV.Gk) : kV > 0 ? function(VV) {
+             return (!nV || nV.length < VV) && (nV = new Float32Array(VV).fill(JV.j)), nV.subarray(0, VV)
```

#### 3574. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27134` → after: `L26505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26505) · [Before (L27134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27134)

```diff
-         MM.material = null !== dM && void 0 !== dM ? dM : this.terrainMatManager.Zh(LM)
+         VV.material = null !== EV && void 0 !== EV ? EV : this.terrainMatManager.eb(ZV)
```

#### 3575. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27145` → after: `L26516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26516) · [Before (L27145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27145)

```diff
-             return OM ? OM.getWrapperBuffer() === nM : !iM
+             return JV ? JV.getWrapperBuffer() === QV : !xV
```

#### 3576. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27157` → after: `L26528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26528) · [Before (L27157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27157)

```diff
-           Vz: nM,
+           nZ: QV,
```

#### 3577. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27159` → after: `L26530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26530) · [Before (L27159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27159)

```diff
-         } = this.babylon, LM = MM.ph(), mM = function(MM) {
+         } = this.babylon, ZV = VV.sk(), vV = function(VV) {
```

#### 3578. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27171` → after: `L26542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26542) · [Before (L27171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27171)

```diff
-           Oi: yM,
+           wx: BV,
```

#### 3579. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27176` → after: `L26547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26547) · [Before (L27176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27176)

```diff
-         } = SM.c;
+         } = YV.i;
```

#### 3580. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27181` → after: `L26552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26552) · [Before (L27181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27181)

```diff
-         CM.useBoundingInfoFromGeometry || (CM.useBoundingInfoFromGeometry = !0, CM._boundingInfo = this.newChunkBoundingInfo()), MM.setVerticesBuffer(JM("position", yM, 3, QM.FLOAT, !1), !0, OM), HM(MM, OM, aM.length), MM.oh(), PM && MM.setVerticesData("aPackedLightLevels", dM(PM … [truncated]
+         TV.useBoundingInfoFromGeometry || (TV.useBoundingInfoFromGeometry = !0, TV._boundingInfo = this.newChunkBoundingInfo()), VV.setVerticesBuffer(bV("position", BV, 3, nV.FLOAT, !1), !0, JV), rV(VV, JV, yV.length), VV.xb(), pV && VV.setVerticesData("aPackedLightLevels", EV(pV … [truncated]
```

#### 3581. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27185` → after: `L26556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26556) · [Before (L27185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27185)

```diff
-   38375: (MM, rM, iM) => {
+   38573: (VV, eV, xV) => {
```

#### 3582. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27187-L27190` → after: `L26558-L26561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26558-L26561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26558-L26561) · [Before (L27187-L27190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27187-L27190)

```diff
-       e: () => fM,
-       i: () => pM,
-       m: () => WM,
-       q: () => RM
+       b: () => oV,
+       f: () => WV,
+       g: () => RV,
+       k: () => GV
```

#### 3583. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27194` → after: `L26565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26565) · [Before (L27194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27194)

```diff
-         this.Xm = new Float64Array(54), this.useSeed = !1, this.seed = null
+         this.Ur = new Float64Array(54), this.useSeed = !1, this.seed = null
```

#### 3584. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27206` → after: `L26577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26577) · [Before (L27206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27206)

```diff
-         Xm: MM.Xm,
+         Ur: VV.Ur,
```

#### 3585. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27213` → after: `L26584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26584) · [Before (L27213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27213)

```diff
-         this.enabled = !0, this.ML = new WeakMap, this.inFlight = new WeakMap
+         this.enabled = !0, this.ZZ = new WeakMap, this.inFlight = new WeakMap
```

#### 3586. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27216-L27219` → after: `L26587-L26590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26587-L26590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26587-L26590) · [Before (L27216-L27219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27216-L27219)

```diff
-         const OM = this.ML.get(MM);
-         return !!OM && (OM.Lh !== rM ? (this.ML.delete(MM), !1) : this.enabled && function(MM, rM) {
-           const iM = MM.Xm,
-             OM = rM.Xm;
+         const JV = this.ZZ.get(VV);
+         return !!JV && (JV.Gk !== eV ? (this.ZZ.delete(VV), !1) : this.enabled && function(VV, eV) {
+           const xV = VV.Ur,
+             JV = eV.Ur;
```

#### 3587. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27232-L27233` → after: `L26603-L26604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26603-L26604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26603-L26604) · [Before (L27232-L27233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27232-L27233)

```diff
-         const iM = this.ML.get(MM);
-         if (iM && iM.Lh === rM) return iM.inputs.seed
+         const xV = this.ZZ.get(VV);
+         if (xV && xV.Gk === eV) return xV.inputs.seed
```

#### 3588. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27244` → after: `L26615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26615) · [Before (L27244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27244)

```diff
-           if (this.inFlight.delete(MM), "clientBfs" === iM) return void this.ML.set(MM, {
+           if (this.inFlight.delete(VV), "clientBfs" === xV) return void this.ZZ.set(VV, {
```

#### 3589. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27246` → after: `L26617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26617) · [Before (L27246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27246)

```diff
-             Lh: OM
+             Gk: JV
```

#### 3590. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27248-L27249` → after: `L26619-L26620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26619-L26620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26619-L26620) · [Before (L27248-L27249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27248-L27249)

```diff
-           const rM = this.ML.get(MM);
-           if ("reused" === iM && rM) return void this.ML.set(MM, {
+           const eV = this.ZZ.get(VV);
+           if ("reused" === xV && eV) return void this.ZZ.set(VV, {
```

#### 3591. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27251` → after: `L26622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26622) · [Before (L27251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27251)

```diff
-             Lh: OM
+             Gk: JV
```

#### 3592. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27254` → after: `L26625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26625) · [Before (L27254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27254)

```diff
-         this.ML.delete(MM)
+         this.ZZ.delete(VV)
```

#### 3593. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27257-L27259` → after: `L26628-L26630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26628-L26630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26628-L26630) · [Before (L27257-L27259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27257-L27259)

```diff
-     var aM = iM(3180),
-       PM = iM(3182),
-       nM = iM(38379);
+     var yV = xV(3187),
+       pV = xV(3189),
+       QV = xV(38582);
```

#### 3594. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27272-L27274` → after: `L26643-L26645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26643-L26645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26643-L26645) · [Before (L27272-L27274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27272-L27274)

```diff
-     var zM = iM(38388),
-       LM = iM(38402),
-       mM = iM(38412);
+     var wV = xV(38589),
+       ZV = xV(38601),
+       vV = xV(38612);
```

#### 3595. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27278` → after: `L26649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26649) · [Before (L27278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27278)

```diff
-         this.material = null, this.visibility = 1, this.vertexCount = 0, this.metadata = {}, this.iG = HM, this.dh = !1
+         this.material = null, this.visibility = 1, this.vertexCount = 0, this.metadata = {}, this.hT = rV, this.ik = !1
```

#### 3596. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27281` → after: `L26652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26652) · [Before (L27281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27281)

```diff
-         return this.dh
+         return this.ik
```

#### 3597. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27284` → after: `L26655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26655) · [Before (L27284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27284)

```diff
-         this.dh = !0
+         this.ik = !0
```

#### 3598. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27287-L27288` → after: `L26658-L26659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26658-L26659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26658-L26659) · [Before (L27287-L27288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27287-L27288)

```diff
-     var JM = iM(38418),
-       dM = iM(38423);
+     var bV = xV(38621),
+       EV = xV(38630);
```

#### 3599. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27362-L27365` → after: `L26733-L26736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26733-L26736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26733-L26736) · [Before (L27362-L27365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27362-L27365)

```diff
-     var lM = iM(38433),
-       EM = iM(38442);
-     var UM = iM(38446),
-       GM = iM(38448);
+     var jV = xV(38639),
+       qV = xV(38647);
+     var tV = xV(38650),
+       FV = xV(38653);
```

#### 3600. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27370` → after: `L26741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26741) · [Before (L27370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27370)

```diff
-         this.budget = MM, this.sQ = new Map, this.heldBytes = 0, this.jobs = 0, this.forgotten = [], this.forgetAll = !1
+         this.budget = VV, this.hn = new Map, this.heldBytes = 0, this.jobs = 0, this.forgotten = [], this.forgetAll = !1
```

#### 3601. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27386-L27387` → after: `L26757-L26758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26757-L26758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26757-L26758) · [Before (L27386-L27387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27386-L27387)

```diff
-           const LM = nM.Kh;
-           let mM = this.sQ.get(zM);
+           const ZV = QV.kb;
+           let vV = this.hn.get(wV);
```

#### 3602. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27397` → after: `L26768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26768) · [Before (L27397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27397)

```diff
-           }, this.sQ.set(zM, mM)), mM.version = LM, mM.bytes = HM.byteLength, mM.used = OM, this.heldBytes += HM.byteLength, jM.push(zM), aM.push(HM)
+           }, this.hn.set(wV, vV)), vV.version = ZV, vV.bytes = rV.byteLength, vV.used = JV, this.heldBytes += rV.byteLength, UV.push(wV), yV.push(rV)
```

#### 3603. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27399` → after: `L26770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26770) · [Before (L27399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27399)

```diff
-         this.heldBytes > this.budget && this.sQ.size > CM && this.forgetOldest(OM);
+         this.heldBytes > this.budget && this.hn.size > TV && this.forgetOldest(JV);
```

#### 3604. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27410` → after: `L26781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26781) · [Before (L27410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27410)

```diff
-         const rM = [...this.sQ].sort(((MM, rM) => {
+         const eV = [...this.hn].sort(((VV, eV) => {
```

#### 3605. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27419` → after: `L26790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26790) · [Before (L27419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27419)

```diff
-           this.sQ.delete(iM), this.heldBytes -= OM, this.forgotten.push(iM)
+           this.hn.delete(xV), this.heldBytes -= JV, this.forgotten.push(xV)
```

#### 3606. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27423-L27424` → after: `L26794-L26795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26794-L26795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26794-L26795) · [Before (L27423-L27424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27423-L27424)

```diff
-         const rM = this.sQ.get(MM);
-         rM && (this.sQ.delete(MM), this.heldBytes -= rM.bytes, this.forgotten.push(MM))
+         const eV = this.hn.get(VV);
+         eV && (this.hn.delete(VV), this.heldBytes -= eV.bytes, this.forgotten.push(VV))
```

#### 3607. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27427` → after: `L26798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26798) · [Before (L27427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27427)

```diff
-         this.sQ.clear(), this.heldBytes = 0, this.forgotten = [], this.forgetAll = !0
+         this.hn.clear(), this.heldBytes = 0, this.forgotten = [], this.forgetAll = !0
```

#### 3608. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27430` → after: `L26801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26801) · [Before (L27430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27430)

```diff
-         return this.sQ.size
+         return this.hn.size
```

#### 3609. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27439` → after: `L26810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26810) · [Before (L27439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27439)

```diff
-         this.vL = MM, this.sQ = new Map, this.job = 1, this.forgotten = [], this.forgetAll = !1
+         this.Jv = VV, this.hn = new Map, this.job = 1, this.forgotten = [], this.forgetAll = !1
```

#### 3610. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27442` → after: `L26813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26813) · [Before (L27442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27442)

```diff
-         const iM = this.sQ.get(MM);
+         const xV = this.hn.get(VV);
```

#### 3611. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27452-L27454` → after: `L26823-L26825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26823-L26825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26823-L26825) · [Before (L27452-L27454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27452-L27454)

```diff
-           }] of this.sQ) {
-           if (this.sQ.size <= this.vL) break;
-           SM !== this.job && (this.sQ.delete(OM), this.forgotten.push(OM))
+           }] of this.hn) {
+           if (this.hn.size <= this.Jv) break;
+           YV !== this.job && (this.hn.delete(JV), this.forgotten.push(JV))
```

#### 3612. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27463` → after: `L26834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26834) · [Before (L27463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27463)

```diff
-         rM.job = this.job, this.sQ.delete(MM), this.sQ.set(MM, rM)
+         eV.job = this.job, this.hn.delete(VV), this.hn.set(VV, eV)
```

#### 3613. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27466` → after: `L26837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26837) · [Before (L27466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27466)

```diff
-         this.sQ.delete(MM) && this.forgotten.push(MM)
+         this.hn.delete(VV) && this.forgotten.push(VV)
```

#### 3614. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27470` → after: `L26841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26841) · [Before (L27470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27470)

```diff
-         (null === (iM = this.sQ.get(MM)) || void 0 === iM ? void 0 : iM.tag) === rM && this.drop(MM)
+         (null === (xV = this.hn.get(VV)) || void 0 === xV ? void 0 : xV.tag) === eV && this.drop(VV)
```

#### 3615. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27473` → after: `L26844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26844) · [Before (L27473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27473)

```diff
-         this.sQ.clear(), this.forgotten = [], this.forgetAll = !0
+         this.hn.clear(), this.forgotten = [], this.forgetAll = !0
```

#### 3616. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27476` → after: `L26847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26847) · [Before (L27476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27476)

```diff
-         return this.sQ.size
+         return this.hn.size
```

#### 3617. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27522` → after: `L26893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26893) · [Before (L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27522)

```diff
-         return null !== (MM = null === (rM = this.busynessTracker) || void 0 === rM ? void 0 : rM.totalInFlightCount) && void 0 !== MM ? MM : 0
+         return null !== (VV = null === (eV = this.busynessTracker) || void 0 === eV ? void 0 : eV.totalInFlightCount) && void 0 !== VV ? VV : 0
```

#### 3618. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27538` → after: `L26909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26909) · [Before (L27538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27538)

```diff
-         this.Cm = MM, this.terrainMatManager = rM, this.babylon = iM, this.opts = OM, this.allTerrainMaterials = void 0, this._defaultMaterial = void 0, this.meshBuilder = void 0, this.workers = [], this.busynessTracker = null, this.workersStopped = !1, this.workerScanStartIndex  … [truncated]
+         this.iv = VV, this.terrainMatManager = eV, this.babylon = xV, this.opts = JV, this.allTerrainMaterials = void 0, this._defaultMaterial = void 0, this.meshBuilder = void 0, this.workers = [], this.busynessTracker = null, this.workersStopped = !1, this.workerScanStartIndex  … [truncated]
```

#### 3619. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27541` → after: `L26912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26912) · [Before (L27541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27541)

```diff
-             return !(null === (rM = this.currentChunkOf(MM)) || void 0 === rM || !rM.qh)
+             return !(null === (eV = this.currentChunkOf(VV)) || void 0 === eV || !eV.bb)
```

#### 3620. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27554` → after: `L26925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26925) · [Before (L27554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27554)

```diff
-           Dh: null,
+           Ok: null,
```

#### 3621. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27556-L27559` → after: `L26927-L26930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26927-L26930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26927-L26930) · [Before (L27556-L27559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27556-L27559)

```diff
-           Hh: !1,
-           Qh: !1,
-           NH: null,
-           yh: null
+           Rk: !1,
+           Mk: !1,
+           Yk: null,
+           Ck: null
```

#### 3622. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27563-L27565` → after: `L26934-L26936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26934-L26936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26934-L26936) · [Before (L27563-L27565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27563-L27565)

```diff
-           return (null === (rM = iM) || void 0 === rM ? void 0 : rM.version) !== MM.Kh && (iM = {
-             version: MM.Kh,
-             runs: this.Cm.uL.Vh.encode(MM.Xm)
+           return (null === (eV = xV) || void 0 === eV ? void 0 : eV.version) !== VV.kb && (xV = {
+             version: VV.kb,
+             runs: this.iv.cZ.Bb.encode(VV.Ur)
```

#### 3623. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27567` → after: `L26938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26938) · [Before (L27567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27567)

```diff
-         }, this.allTerrainMaterials = rM.allMaterials, this._defaultMaterial = rM._defaultMat, this.HL = null !== (SM = OM.HL) && void 0 !== SM ? SM : 32
+         }, this.allTerrainMaterials = eV.allMaterials, this._defaultMaterial = eV._defaultMat, this.PZ = null !== (YV = JV.PZ) && void 0 !== YV ? YV : 32
```

#### 3624. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27573-L27581` → after: `L26944-L26952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26944-L26952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26944-L26952) · [Before (L27573-L27581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27573-L27581)

```diff
-           nL: SM,
-           CL: jM
-         } = this.Cm;
-         this.chunkStandIns = !(null === (MM = jM.MJ) || void 0 === MM || !MM.terrain);
-         const aM = SM.eH,
-           PM = jM.rJ,
-           nM = jM.gh === jM.bh[0],
-           QM = SM.iJ,
-           LM = SM.OJ,
+           jZ: YV,
+           gZ: UV
+         } = this.iv;
+         this.chunkStandIns = !(null === (VV = UV.jb) || void 0 === VV || !VV.terrain);
+         const yV = YV.ar,
+           pV = UV.qb,
+           QV = UV.Kk === UV.mk[0],
+           nV = YV.tb,
+           ZV = YV.Fb,
```

#### 3625. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27583-L27587` → after: `L26954-L26958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26954-L26958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26954-L26958) · [Before (L27583-L27587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27583-L27587)

```diff
-           HM = jM.bh,
-           hM = jM.gh,
-           dM = SM.SJ,
-           yM = SM.jJ,
-           lM = this.Cm.nh ? function(MM, rM) {
+           rV = UV.mk,
+           kV = UV.Kk,
+           EV = YV.Tb,
+           BV = YV.Pb,
+           jV = this.iv.Xk ? function(VV, eV) {
```

#### 3626. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27596-L27598` → after: `L26967-L26969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26967-L26969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26967-L26969) · [Before (L27596-L27598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27596-L27598)

```diff
-           }(LM, SM.Ah) : null,
-           UM = (jM.MJ ? !(null === (rM = jM.MJ.terrain) || void 0 === rM || !rM.faceGroups) : jM.aJ()) ? this.listFaceGroupTerrainIds(mM) : [],
-           GM = jM.MJ ? JM.r : JM.c;
+           }(ZV, YV.yb) : null,
+           tV = (UV.jb ? !(null === (eV = UV.jb.terrain) || void 0 === eV || !eV.faceGroups) : UV.Ab()) ? this.listFaceGroupTerrainIds(vV) : [],
+           FV = UV.jb ? bV.o : bV.c;
```

#### 3627. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27600-L27602` → after: `L26971-L26973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26971-L26973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26971-L26973) · [Before (L27600-L27602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27600-L27602)

```diff
-         (jM.MJ ? !(null === (iM = jM.MJ.terrain) || void 0 === iM || !iM.visibilityGraph) : jM.aJ()) && (CM = this.listVisOccluders(QM, LM, mM), this.visibility = new EM.d(CM, QM, ((MM, rM, iM, OM) => this.settledAirStamp(MM, rM, iM, OM)), this.visAirSource()), this.visibility.bu … [truncated]
-         const eM = jM.MJ ? null : jM.engine,
-           bM = !!eM && (null !== (OM = eM.PJ) && void 0 !== OM ? OM : 0) >= 2;
+         (UV.jb ? !(null === (xV = UV.jb.terrain) || void 0 === xV || !xV.visibilityGraph) : UV.Ab()) && (TV = this.listVisOccluders(nV, ZV, vV), this.visibility = new qV.e(TV, nV, ((VV, eV, xV, JV) => this.settledAirStamp(VV, eV, xV, JV)), this.visAirSource()), this.visibility.bu … [truncated]
+         const PV = UV.jb ? null : UV.engine,
+           AV = !!PV && (null !== (JV = PV.Nb) && void 0 !== JV ? JV : 0) >= 2;
```

#### 3628. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27614` → after: `L26985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26985) · [Before (L27614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27614)

```diff
-         this.meshBuilder = new zM.e(this.terrainMatManager, this.babylon, this.HL, bM);
+         this.meshBuilder = new wV.e(this.terrainMatManager, this.babylon, this.PZ, AV);
```

#### 3629. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27616-L27618` → after: `L26987-L26989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26987-L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26987-L26989) · [Before (L27616-L27618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27616-L27618)

```diff
-           nJ: wM,
-           QJ: tM,
-           zJ: gM
+           Xb: NV,
+           Mb: XV,
+           zb: MV
```

#### 3630. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27620` → after: `L26991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26991) · [Before (L27620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27620)

```diff
-           HL: this.HL,
+           PZ: this.PZ,
```

#### 3631. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27627-L27628` → after: `L26998-L26999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR26998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L26998-L26999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L26998-L26999) · [Before (L27627-L27628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27627-L27628)

```diff
-           bh: HM,
-           gh: hM,
+           mk: rV,
+           Kk: kV,
```

#### 3632. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27648-L27649` → after: `L27019-L27020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27019-L27020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27019-L27020) · [Before (L27648-L27649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27648-L27649)

```diff
-         const rM = null !== (MM = this.opts.meshingWorkerCount) && void 0 !== MM ? MM : 1;
-         this.busynessTracker = new nM.d(rM), this.busynessTracker.markWindowStart(), this.endWorkers();
+         const eV = null !== (VV = this.opts.meshingWorkerCount) && void 0 !== VV ? VV : 1;
+         this.busynessTracker = new QV.e(eV), this.busynessTracker.markWindowStart(), this.endWorkers();
```

#### 3633. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27659` → after: `L27030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27030) · [Before (L27659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27659)

```diff
-         null !== this.busynessTracker && (this.endWorkers(), this.workersStopped || (this.resultQueue.drainAll(), this.lostWorkers.clear(), this.retiredWorkers.clear(), this.workerReplacements.length = 0, this.jobsTowardRefill.length = 0, this.lostCauses.length = 0, this.workerSc … [truncated]
+         null !== this.busynessTracker && (this.endWorkers(), this.workersStopped || (this.resultQueue.drainAll(), this.lostWorkers.clear(), this.retiredWorkers.clear(), this.workerReplacements.length = 0, this.jobsTowardRefill.length = 0, this.lostCauses.length = 0, this.workerSc … [truncated]
```

#### 3634. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27663` → after: `L27034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27034) · [Before (L27663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27663)

```diff
-         for (const iM of new Set(Object.values(MM)))(0, JM.t)(this.terrainMatManager.getModel(iM)) && rM.push(iM);
+         for (const xV of new Set(Object.values(VV)))(0, bV.p)(this.terrainMatManager.getModel(xV)) && eV.push(xV);
```

#### 3635. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27676` → after: `L27047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27047) · [Before (L27676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27676)

```diff
-               const MM = this.Cm.nL.mJ(OM),
+               const VV = this.iv.jZ.Wb(JV),
```

#### 3636. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27679` → after: `L27050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27050) · [Before (L27679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27679)

```diff
-               PM = !!MM && (0, lM.k)(jM, (0, GM.n)(MM), !!MM.HJ), SM.set(OM, PM)
+               pV = !!VV && (0, jV.l)(UV, (0, FV.m)(VV), !!VV.Rb), YV.set(JV, pV)
```

#### 3637. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27691-L27692` → after: `L27062-L27063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27062-L27063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27062-L27063) · [Before (L27691-L27692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27691-L27692)

```diff
-         const jM = MM.yh,
-           aM = (null !== (rM = jM.get(-1, 0, 0)) && void 0 !== rM && rM.Xm ? 1 : 0) | (null !== (iM = jM.get(0, -1, 0)) && void 0 !== iM && iM.Xm ? 2 : 0) | (null !== (OM = jM.get(0, 0, -1)) && void 0 !== OM && OM.Xm ? 4 : 0),
+         const UV = VV.Ck,
+           yV = (null !== (eV = UV.get(-1, 0, 0)) && void 0 !== eV && eV.Ur ? 1 : 0) | (null !== (xV = UV.get(0, -1, 0)) && void 0 !== xV && xV.Ur ? 2 : 0) | (null !== (JV = UV.get(0, 0, -1)) && void 0 !== JV && JV.Ur ? 4 : 0),
```

#### 3638. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27696-L27698` → after: `L27067-L27069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27067-L27069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27067-L27069) · [Before (L27696-L27698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27696-L27698)

```diff
-           const rM = MM.Xm.data;
-           nM = (0, lM.m)(rM, MM.Hh, MM.size, SM.occluders, this.visScratch, MM.NH), this.visKept.set(MM, {
-             voxelVersion: MM.Kh,
+           const eV = VV.Ur.data;
+           QV = (0, jV.p)(eV, VV.Rk, VV.size, YV.occluders, this.visScratch, VV.Yk), this.visKept.set(VV, {
+             voxelVersion: VV.kb,
```

#### 3639. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27706` → after: `L27077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27077) · [Before (L27706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27706)

```diff
-         return rM && rM.voxelVersion === MM.Kh ? rM.graphs : void 0
+         return eV && eV.voxelVersion === VV.kb ? eV.graphs : void 0
```

#### 3640. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27713` → after: `L27084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27084) · [Before (L27713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27713)

```diff
-         void 0 === jM ? jM = SM && null !== (aM = SM.graphs) && void 0 !== aM ? aM : null : SM && this.visKept.set(MM, {
+         void 0 === UV ? UV = YV && null !== (yV = YV.graphs) && void 0 !== yV ? yV : null : YV && this.visKept.set(VV, {
```

#### 3641. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27717` → after: `L27088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27088) · [Before (L27717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27717)

```diff
-         this.visibility.setChunk(MM.i, MM.j, MM.k, jM, iM, null !== (OM = null === SM || void 0 === SM ? void 0 : SM.stamps) && void 0 !== OM ? OM : uM)
+         this.visibility.setChunk(VV.i, VV.j, VV.k, UV, xV, null !== (JV = null === YV || void 0 === YV ? void 0 : YV.stamps) && void 0 !== JV ? JV : zV)
```

#### 3642. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27720` → after: `L27091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27091) · [Before (L27720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27720)

```diff
-         return this.chunkObjectId(MM) * 2 ** 24 + MM.hJ[rM] % 2 ** 24
+         return this.chunkObjectId(VV) * 2 ** 24 + VV.gb[eV] % 2 ** 24
```

#### 3643. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27728` → after: `L27099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27099) · [Before (L27728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27728)

```diff
-           iM = MM.yh,
+           xV = VV.Ck,
```

#### 3644. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27733` → after: `L27104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27104) · [Before (L27733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27733)

```diff
-           rM[3 + SM] = null !== iM && void 0 !== iM && iM.Xm ? this.visStamp(iM, SM) : -1
+           eV[3 + YV] = null !== xV && void 0 !== xV && xV.Ur ? this.visStamp(xV, YV) : -1
```

#### 3645. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27740` → after: `L27111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27111) · [Before (L27740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27740)

```diff
-         null !== iM && (MM.Hh || rM) && iM(MM.i, MM.j, MM.k)
+         null !== xV && (VV.Rk || eV) && xV(VV.i, VV.j, VV.k)
```

#### 3646. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27743-L27744` → after: `L27114-L27115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27114-L27115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27114-L27115) · [Before (L27743-L27744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27743-L27744)

```diff
-         const SM = this.Cm.uL.yJ.lJ(MM, rM, iM);
-         return !SM || !SM.Hh || SM.JJ || SM.Bh ? -1 : this.visStamp(SM, OM)
+         const YV = this.iv.cZ.Cb.ab(VV, eV, xV);
+         return !YV || !YV.Rk || YV.Db || YV.nb ? -1 : this.visStamp(YV, JV)
```

#### 3647. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27747` → after: `L27118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27118) · [Before (L27747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27747)

```diff
-         const MM = this.Cm.uL.yJ;
+         const VV = this.iv.cZ.Cb;
```

#### 3648. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27750` → after: `L27121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27121) · [Before (L27750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27750)

```diff
-           chunkAt: (rM, iM, OM) => MM.lJ(rM, iM, OM),
+           chunkAt: (eV, xV, JV) => VV.ab(eV, xV, JV),
```

#### 3649. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27754` → after: `L27125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27125) · [Before (L27754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27754)

```diff
-             if (!OM.Hh || OM.JJ || OM.Bh) iM[0] = iM[1] = iM[2] = -1;
+             if (!JV.Rk || JV.Db || JV.nb) xV[0] = xV[1] = xV[2] = -1;
```

#### 3650. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27756` → after: `L27127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27127) · [Before (L27756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27756)

```diff
-               for (let SM = 0; SM < 3; SM++) iM[SM] = rM * 2 ** 24 + OM.hJ[SM] % 2 ** 24
+               for (let YV = 0; YV < 3; YV++) xV[YV] = eV * 2 ** 24 + JV.gb[YV] % 2 ** 24
```

#### 3651. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27781` → after: `L27152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27152) · [Before (L27781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27781)

```diff
-           null === (OM = this.meshProbe) || void 0 === OM || OM.received(SM), this.busynessTracker.onJobCompleted(MM), this.jobsInFlight[MM].delete(SM.meshJobId), this._meshJobsDone++, this.queueBudget.jobDone(SM.jobMs), this.refillReplacements(MM), !1 === SM.lightOnlyUpdate && ( … [truncated]
+           null === (JV = this.meshProbe) || void 0 === JV || JV.received(YV), this.busynessTracker.onJobCompleted(VV), this.jobsInFlight[VV].delete(YV.meshJobId), this._meshJobsDone++, this.queueBudget.jobDone(YV.jobMs), this.refillReplacements(VV), !1 === YV.lightOnlyUpdate && ( … [truncated]
```

#### 3652. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27797` → after: `L27168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27168) · [Before (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27797)

```diff
-         return ++this.workerScanStartIndex >= iM && (this.workerScanStartIndex = 0), MM >= 0 && MM < iM && OM(MM) === aM ? MM : jM
+         return ++this.workerScanStartIndex >= xV && (this.workerScanStartIndex = 0), VV >= 0 && VV < xV && JV(VV) === yV ? VV : UV
```

#### 3653. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27802` → after: `L27173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27173) · [Before (L27802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27802)

```diff
-         console.warn(`Meshing worker ${MM} was lost (${iM}): queueing its ${OM.size} jobs in flight again`);
+         console.warn(`Meshing worker ${VV} was lost (${xV}): queueing its ${JV.size} jobs in flight again`);
```

#### 3654. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27805` → after: `L27176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27176) · [Before (L27805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27805)

```diff
-           this.busynessTracker.onJobCancelled(MM), null === (SM = this.meshProbe) || void 0 === SM || SM.failed(jM), aM.Bh === jM && this.Cm.uL.yJ.lJ(aM.i, aM.j, aM.k) === aM && (aM.Bh = 0, aM.JJ = !0, aM.UJ = !0, this.Cm.uL.dJ(aM, !0))
+           this.busynessTracker.onJobCancelled(VV), null === (YV = this.meshProbe) || void 0 === YV || YV.failed(UV), yV.nb === UV && this.iv.cZ.Cb.ab(yV.i, yV.j, yV.k) === yV && (yV.nb = 0, yV.Db = !0, yV.cb = !0, this.iv.cZ.ib(yV, !0))
```

#### 3655. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27816-L27817` → after: `L27187-L27188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27187-L27188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27187-L27188) · [Before (L27816-L27817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27816-L27817)

```diff
-           OM = null !== (rM = this.workerReplacements[MM]) && void 0 !== rM ? rM : 0;
-         if (OM >= 3) this.retireWorker(MM, `3 replacements used: ${iM}`);
+           JV = null !== (eV = this.workerReplacements[VV]) && void 0 !== eV ? eV : 0;
+         if (JV >= 3) this.retireWorker(VV, `3 replacements used: ${xV}`);
```

#### 3656. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27823` → after: `L27194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27194) · [Before (L27823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27823)

```diff
-             return void this.retireWorker(MM, `no new worker (${SM instanceof Error?SM.message:String(SM)}): ${iM}`)
+             return void this.retireWorker(VV, `no new worker (${YV instanceof Error?YV.message:String(YV)}): ${xV}`)
```

#### 3657. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27825` → after: `L27196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27196) · [Before (L27825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27825)

```diff
-           this.lostWorkers.delete(MM), this.Cm.GJ(`Meshing worker ${MM} replaced (${OM+1} of 3): ${iM}`)
+           this.lostWorkers.delete(VV), this.iv.hb(`Meshing worker ${VV} replaced (${JV+1} of 3): ${xV}`)
```

#### 3658. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27831-L27832` → after: `L27202-L27203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27202-L27203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27202-L27203) · [Before (L27831-L27832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27831-L27832)

```diff
-         const iM = (null !== (rM = this.jobsTowardRefill[MM]) && void 0 !== rM ? rM : 0) + 1;
-         iM < 1e3 ? this.jobsTowardRefill[MM] = iM : (this.jobsTowardRefill[MM] = 0, this.workerReplacements[MM]--)
+         const xV = (null !== (eV = this.jobsTowardRefill[VV]) && void 0 !== eV ? eV : 0) + 1;
+         xV < 1e3 ? this.jobsTowardRefill[VV] = xV : (this.jobsTowardRefill[VV] = 0, this.workerReplacements[VV]--)
```

#### 3659. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27835` → after: `L27206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27206) · [Before (L27835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27835)

```diff
-         if (this.workers[MM].terminate(), this.retiredWorkers.add(MM), this.Cm.GJ(`Meshing worker ${MM} is out for good, ${rM}`), this.retiredWorkers.size === this.workers.length) {
+         if (this.workers[VV].terminate(), this.retiredWorkers.add(VV), this.iv.hb(`Meshing worker ${VV} is out for good, ${eV}`), this.retiredWorkers.size === this.workers.length) {
```

#### 3660. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27841` → after: `L27212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27212) · [Before (L27841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27841)

```diff
-         null !== rM.message && this.Cm.GJ(`Meshing worker ${MM}: ${rM.message}`);
+         null !== eV.message && this.iv.hb(`Meshing worker ${VV}: ${eV.message}`);
```

#### 3661. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27846` → after: `L27217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27217) · [Before (L27846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27846)

```diff
-           const MM = null !== (OM = rM.message) && void 0 !== OM ? OM : `Wasm light failure: ${iM}`,
+           const VV = null !== (JV = eV.message) && void 0 !== JV ? JV : `Wasm light failure: ${xV}`,
```

#### 3662. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27848` → after: `L27219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27219) · [Before (L27848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27848)

```diff
-           this.Cm.CJ(new Error(MM), {
+           this.iv.lb(new Error(VV), {
```

#### 3663. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27851` → after: `L27222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27222) · [Before (L27851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27851)

```diff
-             deviceMemory: String(null !== aM && void 0 !== aM ? aM : "unreported")
+             deviceMemory: String(null !== yV && void 0 !== yV ? yV : "unreported")
```

#### 3664. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27858` → after: `L27229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27229) · [Before (L27858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27858)

```diff
-         rM.lost && this.markLost(MM, null !== (aM = rM.message) && void 0 !== aM ? aM : "no message")
+         eV.lost && this.markLost(VV, null !== (yV = eV.message) && void 0 !== yV ? yV : "no message")
```

#### 3665. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27872-L27876` → after: `L27243-L27247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27243-L27247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27243-L27247) · [Before (L27872-L27876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27872-L27876)

```diff
-         this.Cm.GJ(`Meshing worker ${MM} failed chunk (${SM}, ${jM}, ${PM}): ${QM}`), this.jobEnded(MM, nM), null === (iM = this.meshProbe) || void 0 === iM || iM.failed(nM), zM ? this.lightUnused(SM, jM, PM, nM) : (this.chunkMirrors[MM].reset(), this.lightMirrors[MM].reset()), L … [truncated]
-         const hM = this.Cm.uL.yJ.lJ(SM, jM, PM);
-         if (!hM || hM.Bh !== nM) return;
-         hM.Bh = 0, hM.JJ = !0, hM.UJ = !0;
-         const JM = null !== (OM = this.meshFailures.get(hM)) && void 0 !== OM ? OM : {
+         this.iv.hb(`Meshing worker ${VV} failed chunk (${YV}, ${UV}, ${pV}): ${nV}`), this.jobEnded(VV, QV), null === (xV = this.meshProbe) || void 0 === xV || xV.failed(QV), wV ? this.lightUnused(YV, UV, pV, QV) : (this.chunkMirrors[VV].reset(), this.lightMirrors[VV].reset()), Z … [truncated]
+         const kV = this.iv.cZ.Cb.ab(YV, UV, pV);
+         if (!kV || kV.nb !== QV) return;
+         kV.nb = 0, kV.Db = !0, kV.cb = !0;
+         const bV = null !== (JV = this.meshFailures.get(kV)) && void 0 !== JV ? JV : {
```

#### 3666. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27883-L27885` → after: `L27254-L27256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27254-L27256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27254-L27256) · [Before (L27883-L27885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27883-L27885)

```diff
-           const MM = JM.lostMesher >= 2 ? `lost its worker's mesher ${JM.lostMesher} times` : JM.refused >= 6 ? `was refused memory ${JM.refused} times` : `failed ${JM.failed} times in a row`;
-           this.Cm.GJ(`Meshing chunk (${SM}, ${jM}, ${PM}) ${MM}, so it is dropped until it reloads: ${QM}`)
-         } else this.meshFailures.set(hM, JM), this.Cm.uL.dJ(hM, !0)
+           const VV = bV.lostMesher >= 2 ? `lost its worker's mesher ${bV.lostMesher} times` : bV.refused >= 6 ? `was refused memory ${bV.refused} times` : `failed ${bV.failed} times in a row`;
+           this.iv.hb(`Meshing chunk (${YV}, ${UV}, ${pV}) ${VV}, so it is dropped until it reloads: ${nV}`)
+         } else this.meshFailures.set(kV, bV), this.iv.cZ.ib(kV, !0)
```

#### 3667. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27888` → after: `L27259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27259) · [Before (L27888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27888)

```diff
-         this.droppedChunks.add(MM), MM.JJ = !1, MM.UJ = !1, this.Ih(MM)
+         this.droppedChunks.add(VV), VV.Db = !1, VV.cb = !1, this.rb(VV)
```

#### 3668. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27904-L27905` → after: `L27275-L27276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27275-L27276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27275-L27276) · [Before (L27904-L27905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27904-L27905)

```diff
-           uL: rM
-         } = this.Cm, {
+           cZ: eV
+         } = this.iv, {
```

#### 3669. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27909-L27910` → after: `L27280-L27281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27280-L27281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27280-L27281) · [Before (L27909-L27910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27909-L27910)

```diff
-         } = MM, jM = rM.yJ.lJ(iM, OM, SM);
-         return jM && jM.Bh === MM.meshJobId ? rM.bJ.includes(iM, OM, SM) || rM.wJ.includes(iM, OM, SM) ? null : jM : null
+         } = VV, UV = eV.Cb.ab(xV, JV, YV);
+         return UV && UV.nb === VV.meshJobId ? eV.fb.includes(xV, JV, YV) || eV.Kb.includes(xV, JV, YV) ? null : UV : null
```

#### 3670. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27913` → after: `L27284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27284) · [Before (L27913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27913)

```diff
-         MM.computedLightData && (0, aM.v)(MM.computedLightData), this.lightUnused(MM.i, MM.j, MM.k, MM.meshJobId)
+         VV.computedLightData && (0, yV.z)(VV.computedLightData), this.lightUnused(VV.i, VV.j, VV.k, VV.meshJobId)
```

#### 3671. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27916` → after: `L27287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27287) · [Before (L27916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27916)

```diff
-         const SM = this.Cm.uL.yJ.lJ(MM, rM, iM);
+         const YV = this.iv.cZ.Cb.ab(VV, eV, xV);
```

#### 3672. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27924` → after: `L27295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27295) · [Before (L27924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27924)

```diff
-           if (this.remeshesLostContext && (0, UM.c)(this.Cm.CL.engine)) return this.dropResult(MM), rM.Bh = 0, void this.chunksToRemeshOnRestore.add(rM);
+           if (this.remeshesLostContext && (0, tV.c)(this.iv.gZ.engine)) return this.dropResult(VV), eV.nb = 0, void this.chunksToRemeshOnRestore.add(eV);
```

#### 3673. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27928` → after: `L27299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27299) · [Before (L27928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27928)

```diff
-             this.Cm.GJ(`Applying the mesh of chunk (${MM.i}, ${MM.j}, ${MM.k}) failed`, iM)
+             this.iv.hb(`Applying the mesh of chunk (${VV.i}, ${VV.j}, ${VV.k}) failed`, xV)
```

#### 3674. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27937` → after: `L27308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27308) · [Before (L27937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27937)

```diff
-         if (MM.Bh = 0, this.meshFailures.delete(MM), MM.tJ = !!SM || MM.Qh || MM.Hh, !0 === rM.lightOnlyUpdate) this.assignLightOnlyData(MM, rM.lightDataArrays) || (MM.JJ = !0, MM.UJ = !0);
+         if (VV.nb = 0, this.meshFailures.delete(VV), VV.Hb = !!YV || VV.Mk || VV.Rk, !0 === eV.lightOnlyUpdate) this.assignLightOnlyData(VV, eV.lightDataArrays) || (VV.Db = !0, VV.cb = !0);
```

#### 3675. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27940-L27941` → after: `L27311-L27312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27311-L27312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27311-L27312) · [Before (L27940-L27941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27940-L27941)

```diff
-           const iM = this.Cm.uL;
-           !iM.gJ && rM.vertexDataInfo.length > 0 && (iM.gJ = !0, iM.emit("gJ")), this.visibility && void 0 !== rM.visNegNeighbours && this.setVisibilityFromWorker(MM, rM.visGraphs, rM.visNegNeighbours)
+           const xV = this.iv.cZ;
+           !xV.ub && eV.vertexDataInfo.length > 0 && (xV.ub = !0, xV.emit("ub")), this.visibility && void 0 !== eV.visNegNeighbours && this.setVisibilityFromWorker(VV, eV.visGraphs, eV.visNegNeighbours)
```

#### 3676. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27943` → after: `L27314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27314) · [Before (L27943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27943)

```diff
-         if (MM.uJ = null !== (iM = rM.faceLayout) && void 0 !== iM ? iM : null, SM && "clientBfs" === rM.lightSource || this.lightUnused(rM.i, rM.j, rM.k, rM.meshJobId), SM) {
+         if (VV.sb = null !== (xV = eV.faceLayout) && void 0 !== xV ? xV : null, YV && "clientBfs" === eV.lightSource || this.lightUnused(eV.i, eV.j, eV.k, eV.meshJobId), YV) {
```

#### 3677. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27949-L27951` → after: `L27320-L27322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27320-L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27320-L27322) · [Before (L27949-L27951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27949-L27951)

```diff
-           this.storeAndPropagateLight(MM, SM, rM.MO, "server" === rM.lightSource), this.lightReuse.lightStored(MM, rM.meshJobId, rM.lightSource, SM, rM.lightSeedColumnsRead), rM.lightSeedColumnsRead && (0, aM.y)(rM.lightSeedColumnsRead)
-         } else this.Cm.RJ.pJ(MM);
-         MM.JJ ? this.Cm.uL.dJ(MM, !0) : MM.qh = !1, this.checkSkySeedAtReply(MM, !MM.JJ), this.Ih(MM), null === (OM = this.meshProbe) || void 0 === OM || OM.applied(MM, rM.meshJobId)
+           this.storeAndPropagateLight(VV, YV, eV.wJ, "server" === eV.lightSource), this.lightReuse.lightStored(VV, eV.meshJobId, eV.lightSource, YV, eV.lightSeedColumnsRead), eV.lightSeedColumnsRead && (0, yV.D)(eV.lightSeedColumnsRead)
+         } else this.iv.Sb.Ib(VV);
+         VV.Db ? this.iv.cZ.ib(VV, !0) : VV.bb = !1, this.checkSkySeedAtReply(VV, !VV.Db), this.rb(VV), null === (JV = this.meshProbe) || void 0 === JV || JV.applied(VV, eV.meshJobId)
```

#### 3678. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27954` → after: `L27325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27325) · [Before (L27954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27954)

```diff
-         MM.sJ.length = 0
+         VV.VE.length = 0
```

#### 3679. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27958-L27961` → after: `L27329-L27332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27329-L27332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27329-L27332) · [Before (L27958-L27961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27958-L27961)

```diff
-         const iM = null === (rM = this.Cm.CL.MJ) || void 0 === rM ? void 0 : rM.terrain;
-         MM.sJ.forEach((MM => {
-           this.Cm.emit("removingTerrainMesh", MM), null === iM || void 0 === iM || iM.removeChunkMesh(MM), MM.dispose()
-         })), MM.sJ.length = 0, MM.uJ = null
+         const xV = null === (eV = this.iv.gZ.jb) || void 0 === eV ? void 0 : eV.terrain;
+         VV.VE.forEach((VV => {
+           this.iv.emit("removingTerrainMesh", VV), null === xV || void 0 === xV || xV.removeChunkMesh(VV), VV.dispose()
+         })), VV.VE.length = 0, VV.sb = null
```

#### 3680. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27975` → after: `L27346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27346) · [Before (L27975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27975)

```diff
-         if (this.lazyInitMeshingObjs(), MM.Bh) return !1;
+         if (this.lazyInitMeshingObjs(), VV.nb) return !1;
```

#### 3681. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27978-L27979` → after: `L27349-L27350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27349-L27350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27349-L27350) · [Before (L27978-L27979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27978-L27979)

```diff
-             if (!MM.Qh) return !1;
-             const rM = MM.yh,
+             if (!VV.Mk) return !1;
+             const eV = VV.Ck,
```

#### 3682. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27981` → after: `L27352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27352) · [Before (L27981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27981)

```diff
-             if (iM && !iM.Qh) return !1;
+             if (xV && !xV.Mk) return !1;
```

#### 3683. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27983` → after: `L27354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27354) · [Before (L27983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27983)

```diff
-             if (OM && !OM.Qh) return !1;
+             if (JV && !JV.Mk) return !1;
```

#### 3684. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27985` → after: `L27356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27356) · [Before (L27985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27985)

```diff
-             if (SM && !SM.Qh) return !1;
+             if (YV && !YV.Mk) return !1;
```

#### 3685. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27987-L27988` → after: `L27358-L27359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27358-L27359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27358-L27359) · [Before (L27987-L27988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27987-L27988)

```diff
-           }(MM)) return this.meshFailures.delete(MM), this.assignMeshDataToChunk(MM, []), this.setVisibilityOnThisThread(MM), MM.tJ = !0, this.Cm.RJ.pJ(MM), this.checkHeldSkySeedReaders(MM), !0;
-         const SM = this.Cm.CL.DJ;
+           }(VV)) return this.meshFailures.delete(VV), this.assignMeshDataToChunk(VV, []), this.setVisibilityOnThisThread(VV), VV.Hb = !0, this.iv.Sb.Ib(VV), this.checkHeldSkySeedReaders(VV), !0;
+         const YV = this.iv.gZ.eE;
```

#### 3686. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27991` → after: `L27362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27362) · [Before (L27991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27991)

```diff
-         SM && (jM = this.Cm.uL.Eh(MM.i, MM.k), nM = (0, PM.G)(MM.Hh, MM.j, jM));
+         YV && (UV = this.iv.cZ.ak(VV.i, VV.k), QV = (0, pV.I)(VV.Rk, VV.j, UV));
```

#### 3687. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27994` → after: `L27365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27365) · [Before (L27994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27994)

```diff
-         this.providedLightEligible(MM, jM) && MM.kJ && MM.Lh && (QM = MM.Lh, zM = MM.hh);
+         this.providedLightEligible(VV, UV) && VV.xE && VV.Gk && (nV = VV.Gk, wV = VV.gk);
```

#### 3688. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L27998` → after: `L27369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27369) · [Before (L27998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L27998)

```diff
-         !SM || nM || MM.Qh || QM || (HM = (0, aM.m)(MM, PM.j), LM = function(MM, rM, iM, SM) {
+         !YV || QV || VV.Mk || nV || (rV = (0, yV.l)(VV, pV.l), ZV = function(VV, eV, xV, YV) {
```

#### 3689. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28000` → after: `L27371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27371) · [Before (L28000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28000)

```diff
-             aM = jM.Xm;
+             yV = UV.Ur;
```

#### 3690. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28006` → after: `L27377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27377) · [Before (L28006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28006)

```diff
-                 !jM || jM.Hh && 0 !== (OM | iM | SM) ? (aM[PM] = -1, aM[PM + 1] = -1) : (aM[PM] = rM(jM), aM[PM + 1] = jM.Kh)
+                 !UV || UV.Rk && 0 !== (JV | xV | YV) ? (yV[pV] = -1, yV[pV + 1] = -1) : (yV[pV] = eV(UV), yV[pV + 1] = UV.kb)
```

#### 3691. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28009` → after: `L27380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27380) · [Before (L28009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28009)

```diff
-         }(MM.yh, this.chunkObjectIdOf, (0, PM.R)(MM.j, jM), HM), this.lightReuse.canReuse(MM, MM.Lh, LM) && (QM = MM.Lh, zM = MM.hh, mM = !0, (0, aM.y)(HM), HM = null));
+         }(VV.Ck, this.chunkObjectIdOf, (0, pV.U)(VV.j, UV), rV), this.lightReuse.canReuse(VV, VV.Gk, ZV) && (nV = VV.Gk, wV = VV.gk, vV = !0, (0, yV.D)(rV), rV = null));
```

#### 3692. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28011` → after: `L27382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27382) · [Before (L28011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28011)

```diff
-           JM = null === QM && MM.ZJ;
+           bV = null === nV && VV.JE;
```

#### 3693. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28013-L28014` → after: `L27384-L27385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27384-L27385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27384-L27385) · [Before (L28013-L28014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28013-L28014)

```diff
-             if (!MM.Hh) return !1;
-             const rM = MM.yh,
+             if (!VV.Rk) return !1;
+             const eV = VV.Ck,
```

#### 3694. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28018` → after: `L27389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27389) · [Before (L28018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28018)

```diff
-             if (SM && !SM.Hh && 0 !== SM.NH[iM - 1]) return !1;
+             if (YV && !YV.Rk && 0 !== YV.Yk[xV - 1]) return !1;
```

#### 3695. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28020` → after: `L27391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27391) · [Before (L28020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28020)

```diff
-             if (jM && !jM.Hh && YM(jM.Xm.data, (iM - 1) * OM, 1, OM)) return !1;
+             if (UV && !UV.Rk && cV(UV.Ur.data, (xV - 1) * JV, 1, JV)) return !1;
```

#### 3696. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28022` → after: `L27393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27393) · [Before (L28022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28022)

```diff
-             if (aM && !aM.Hh && YM(aM.Xm.data, iM - 1, iM, OM)) return !1;
+             if (yV && !yV.Rk && cV(yV.Ur.data, xV - 1, xV, JV)) return !1;
```

#### 3697. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28024-L28025` → after: `L27395-L27396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27395-L27396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27395-L27396) · [Before (L28024-L28025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28024-L28025)

```diff
-           }(MM)) return this.meshFailures.delete(MM), this.assignMeshDataToChunk(MM, []), this.setVisibilityOnThisThread(MM), MM.tJ = !0, MM.uJ = null, this.Cm.RJ.pJ(MM), this.checkHeldSkySeedReaders(MM), !0;
-         const dM = this.getLeastLoadedWorkerIndex(null !== (rM = this.stateWorkerOf.get(MM)) && void 0 !== rM ? rM : -1),
+           }(VV)) return this.meshFailures.delete(VV), this.assignMeshDataToChunk(VV, []), this.setVisibilityOnThisThread(VV), VV.Hb = !0, VV.sb = null, this.iv.Sb.Ib(VV), this.checkHeldSkySeedReaders(VV), !0;
+         const EV = this.getLeastLoadedWorkerIndex(null !== (eV = this.stateWorkerOf.get(VV)) && void 0 !== eV ? eV : -1),
```

#### 3698. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28031` → after: `L27402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27402) · [Before (L28031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28031)

```diff
-             Dh: GM,
+             Ok: FV,
```

#### 3699. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28033-L28035` → after: `L27404-L27406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27404-L27406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27404-L27406) · [Before (L28033-L28035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28033-L28035)

```diff
-             Hh: eM,
-             Qh: bM,
-             NH: wM
+             Rk: PV,
+             Mk: AV,
+             Yk: NV
```

#### 3700. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28037` → after: `L27408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27408) · [Before (L28037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28037)

```diff
-         this.tempChunk.i = lM, this.tempChunk.j = EM, this.tempChunk.k = UM, this.tempChunk.Dh = GM, this.tempChunk.size = CM, this.tempChunk.Hh = eM, this.tempChunk.Qh = bM, this.tempChunk.NH = wM, this.tempChunk.yh = null;
+         this.tempChunk.i = jV, this.tempChunk.j = qV, this.tempChunk.k = tV, this.tempChunk.Ok = FV, this.tempChunk.size = TV, this.tempChunk.Rk = PV, this.tempChunk.Mk = AV, this.tempChunk.Yk = NV, this.tempChunk.Ck = null;
```

#### 3701. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28047-L28049` → after: `L27418-L27420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27418-L27420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27418-L27420) · [Before (L28047-L28049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28047-L28049)

```diff
-               iM = (0, aM.i)(MM, this.Cm.uL, (MM => {
-                 const iM = this.lightTags.get(MM.Lh);
-                 return rM.holds(this.chunkObjectId(MM), iM) ? iM : 0
+               xV = (0, yV.k)(VV, this.iv.cZ, (VV => {
+                 const xV = this.lightTags.get(VV.Gk);
+                 return eV.holds(this.chunkObjectId(VV), xV) ? xV : 0
```

#### 3702. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28055` → after: `L27426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27426) · [Before (L28055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28055)

```diff
-           WM = (0, aM.e)();
+           RV = (0, yV.d)();
```

#### 3703. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28058-L28059` → after: `L27429-L27430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27429-L27430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27429-L27430) · [Before (L28058-L28059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28058-L28059)

```diff
-         let sM = MM.uJ;
-         const DM = SM && !MM.UJ && MM.tJ && MM.sJ.length > 0 && !!sM;
+         let gV = VV.sb;
+         const DV = YV && !VV.cb && VV.Hb && VV.VE.length > 0 && !!gV;
```

#### 3704. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28061` → after: `L27432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27432) · [Before (L28061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28061)

```diff
-           for (const iM of rM) MM.push(iM.is.buffer), MM.push(iM.js.buffer), MM.push(iM.ks.buffer), MM.push(iM.wids.buffer), MM.push(iM.hts.buffer), MM.push(iM.Nj.buffer), MM.push(iM.diagonals.buffer)
+           for (const xV of eV) VV.push(xV.is.buffer), VV.push(xV.js.buffer), VV.push(xV.ks.buffer), VV.push(xV.wids.buffer), VV.push(xV.hts.buffer), VV.push(xV.lU.buffer), VV.push(xV.diagonals.buffer)
```

#### 3705. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28065` → after: `L27436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27436) · [Before (L28065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28065)

```diff
-         if (MM.Bh = kM, this.jobsInFlight[dM].set(kM, MM), LM && this.lightReuse.dispatched(MM, kM, LM), this.visibility) {
+         if (VV.nb = iV, this.jobsInFlight[EV].set(iV, VV), ZV && this.lightReuse.dispatched(VV, iV, ZV), this.visibility) {
```

#### 3706. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28069` → after: `L27440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27440) · [Before (L28069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28069)

```diff
-             voxelVersion: MM.Kh,
+             voxelVersion: VV.kb,
```

#### 3707. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28105` → after: `L27476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27476) · [Before (L28105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28105)

```diff
-             type: "xh",
+             type: "pb",
```

#### 3708. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28109` → after: `L27480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27480) · [Before (L28109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28109)

```diff
-           return this.Cm.GJ(`Meshing worker ${dM} postMessage failed`, xM), MM.Bh = 0, this.jobEnded(dM, kM), this.chunkMirrors[dM].reset(), this.lightMirrors[dM].reset(), (0, aM.o)(WM), pM && (0, aM.y)(pM), MM.JJ = !0, this.Cm.uL.dJ(MM, !0), !1
+           return this.iv.hb(`Meshing worker ${EV} postMessage failed`, LV), VV.nb = 0, this.jobEnded(EV, iV), this.chunkMirrors[EV].reset(), this.lightMirrors[EV].reset(), (0, yV.s)(RV), WV && (0, yV.D)(WV), VV.Db = !0, this.iv.cZ.ib(VV, !0), !1
```

#### 3709. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28111` → after: `L27482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27482) · [Before (L28111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28111)

```diff
-         return DM && (MM.uJ = null), null === (iM = this.meshProbe) || void 0 === iM || iM.sent(MM, kM, this.busynessTracker.inFlightCounts[dM] - 1, this.workerInFlightCount, this.jobCapacity()), !0
+         return DV && (VV.sb = null), null === (xV = this.meshProbe) || void 0 === xV || xV.sent(VV, iV, this.busynessTracker.inFlightCounts[EV] - 1, this.workerInFlightCount, this.jobCapacity()), !0
```

#### 3710. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28117` → after: `L27488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27488) · [Before (L28117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28117)

```diff
-           const [rM, SM, aM] = gM(jM), PM = MM.yh.get(rM, SM, aM);
+           const [eV, YV, yV] = MV(UV), pV = VV.Ck.get(eV, YV, yV);
```

#### 3711. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28130` → after: `L27501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27501) · [Before (L28130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28130)

```diff
-         const QM = SM ? this.lightTags.get(MM.Lh) : void 0;
+         const nV = YV ? this.lightTags.get(VV.Gk) : void 0;
```

#### 3712. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28138` → after: `L27509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27509) · [Before (L28138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28138)

```diff
-         } = aM.dispatched(OM ? PM : -1, iM);
+         } = yV.dispatched(JV ? pV : -1, xV);
```

#### 3713. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28149-L28151` → after: `L27520-L27522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27520-L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27520-L27522) · [Before (L28149-L28151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28149-L28151)

```diff
-         const OM = !MM.oJ && this.Cm.CL.fJ() ? performance.now() : 0;
-         MM.oJ = !0;
-         const SM = null === (iM = this.Cm.CL.MJ) || void 0 === iM ? void 0 : iM.terrain;
+         const JV = !VV.YE && this.iv.gZ.UE() ? performance.now() : 0;
+         VV.YE = !0;
+         const YV = null === (xV = this.iv.gZ.jb) || void 0 === xV ? void 0 : xV.terrain;
```

#### 3714. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28153` → after: `L27524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27524) · [Before (L28153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28153)

```diff
-         const jM = MM.sJ;
+         const UV = VV.VE;
```

#### 3715. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28157` → after: `L27528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27528) · [Before (L28157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28157)

```diff
-           iM && (PM = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.Cm.CL.YJ), PM.kh = !0, PM._updateBoundingInfo = sM, PM._refreshBoundingInfo = sM, jM.push(PM)), this.meshBuilder.assignMeshData(PM, rM[aM]), SM || (0, dM.j)(PM, rM[aM].faceGroups), iM || this.Cm.CL.NJ(PM), null = … [truncated]
+           xV && (pV = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.iv.gZ.yE), pV.Vb = !0, pV._updateBoundingInfo = gV, pV._refreshBoundingInfo = gV, UV.push(pV)), this.meshBuilder.assignMeshData(pV, eV[yV]), YV || (0, EV.k)(pV, eV[yV].faceGroups), xV || this.iv.gZ.pE(pV), null = … [truncated]
```

#### 3716. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28161` → after: `L27532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27532) · [Before (L28161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28161)

```diff
-           this.Cm.emit("removingTerrainMesh", MM), null === SM || void 0 === SM || SM.removeChunkMesh(MM), MM.dispose()
+           this.iv.emit("removingTerrainMesh", VV), null === YV || void 0 === YV || YV.removeChunkMesh(VV), VV.dispose()
```

#### 3717. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28165` → after: `L27536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27536) · [Before (L28165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28165)

```diff
-         const SM = MM.sJ;
+         const YV = VV.VE;
```

#### 3718. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28169-L28172` → after: `L27540-L27543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27540-L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27540-L27543) · [Before (L28169-L28172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28169-L28172)

```diff
-             nM = PM ? new hM : SM[jM];
-           PM && SM.push(nM), nM.vertexCount = (0, mM.g)(aM);
-           const QM = nM.metadata[zM.f];
-           nM.material = null !== QM && void 0 !== QM ? QM : this.terrainMatManager.Zh(aM.terrainID), iM.setChunkMesh(nM, (0, LM.f)(aM), MM.pos), PM && (nM.metadata[pM] = MM.i, nM.metadata[WM] = MM.k, nM.metadata[RM] = !0, OM && this.Cm.CL.FJ(nM, OM), this.Cm.emit("addingTerrainMe … [truncated]
+             QV = pV ? new kV : YV[UV];
+           pV && YV.push(QV), QV.vertexCount = (0, vV.i)(yV);
+           const nV = QV.metadata[wV.g];
+           QV.material = null !== nV && void 0 !== nV ? nV : this.terrainMatManager.eb(yV.terrainID), xV.setChunkMesh(QV, (0, ZV.f)(yV), VV.pos), pV && (QV.metadata[WV] = VV.i, QV.metadata[RV] = VV.k, QV.metadata[GV] = !0, JV && this.iv.gZ.ZE(QV, JV), this.iv.emit("addingTerrainMe … [truncated]
```

#### 3719. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28176` → after: `L27547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27547) · [Before (L28176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28176)

```diff
-           this.Cm.emit("removingTerrainMesh", MM), iM.removeChunkMesh(MM), MM.dispose()
+           this.iv.emit("removingTerrainMesh", VV), xV.removeChunkMesh(VV), VV.dispose()
```

#### 3720. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28180-L28181` → after: `L27551-L27552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27551-L27552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27551-L27552) · [Before (L28180-L28181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28180-L28181)

```diff
-         const iM = MM.sJ;
-         if (rM.length !== iM.length) return console.warn(`Light-only update submesh count mismatch: ${rM.length} light arrays vs ${iM.length} meshes`), !1;
+         const xV = VV.VE;
+         if (eV.length !== xV.length) return console.warn(`Light-only update submesh count mismatch: ${eV.length} light arrays vs ${xV.length} meshes`), !1;
```

#### 3721. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28186` → after: `L27557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27557) · [Before (L28186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28186)

```diff
-           if (nM.length !== QM) return console.warn(`Light-only update vertex count mismatch on submesh ${PM}: ${nM.length} vs ${QM}`), !1;
+           if (QV.length !== nV) return console.warn(`Light-only update vertex count mismatch on submesh ${pV}: ${QV.length} vs ${nV}`), !1;
```

#### 3722. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28188` → after: `L27559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27559) · [Before (L28188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28188)

```diff
-           if (MM instanceof hM) nM.length > 0 && (null === (OM = this.Cm.CL.MJ) || void 0 === OM || null === (SM = OM.terrain) || void 0 === SM || SM.setChunkMeshLight(MM, (0, LM.h)(nM)));
+           if (VV instanceof kV) QV.length > 0 && (null === (JV = this.iv.gZ.jb) || void 0 === JV || null === (YV = JV.terrain) || void 0 === YV || YV.setChunkMeshLight(VV, (0, ZV.h)(QV)));
```

#### 3723. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28191` → after: `L27562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27562) · [Before (L28191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28191)

```diff
-             const rM = (0, LM.d)(nM),
+             const eV = (0, ZV.e)(QV),
```

#### 3724. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28193` → after: `L27564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27564) · [Before (L28193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28193)

```diff
-             iM && iM.isUpdatable() ? iM.updateDirectly(rM, 0) : MM.setVerticesData("aPackedLightLevels", rM, !0, 1), this.meshBuilder.releaseCpuCopies(MM), null === (jM = this.Cm.CL.MJ) || void 0 === jM || null === (aM = jM.terrain) || void 0 === aM || aM.setChunkMeshLight(MM, (0 … [truncated]
+             xV && xV.isUpdatable() ? xV.updateDirectly(eV, 0) : VV.setVerticesData("aPackedLightLevels", eV, !0, 1), this.meshBuilder.releaseCpuCopies(VV), null === (UV = this.iv.gZ.jb) || void 0 === UV || null === (yV = UV.terrain) || void 0 === yV || yV.setChunkMeshLight(VV, (0 … [truncated]
```

#### 3725. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28199` → after: `L27570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27570) · [Before (L28199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28199)

```diff
-         return this.Cm.CL.DJ && !MM.Qh && !(0, PM.G)(MM.Hh, MM.j, rM)
+         return this.iv.gZ.eE && !VV.Mk && !(0, pV.I)(VV.Rk, VV.j, eV)
```

#### 3726. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28202` → after: `L27573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27573) · [Before (L28202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28202)

```diff
-         this.providedLightEligible(MM, this.Cm.uL.Eh(MM.i, MM.k)) && (MM.ZJ = !0, this.storeAndPropagateLight(MM, rM, iM, !0), MM.kJ = !0)
+         this.providedLightEligible(VV, this.iv.cZ.ak(VV.i, VV.k)) && (VV.JE = !0, this.storeAndPropagateLight(VV, eV, xV, !0), VV.xE = !0)
```

#### 3727. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28206-L28208` → after: `L27577-L27579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27577-L27579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27577-L27579) · [Before (L28206-L28208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28206-L28208)

```diff
-         const SM = MM.Lh,
-           jM = MM.hh;
-         if ((0, aM.r)(MM, rM, iM), !MM.Qh) {
+         const YV = VV.Gk,
+           UV = VV.gk;
+         if ((0, yV.v)(VV, eV, xV), !VV.Mk) {
```

#### 3728. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28212` → after: `L27583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27583) · [Before (L28212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28212)

```diff
-             const [iM, SM, jM] = PM.e[rM], QM = MM.yh.get(iM, SM, jM);
+             const [xV, YV, UV] = pV.f[eV], nV = VV.Ck.get(xV, YV, UV);
```

#### 3729. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28215-L28216` → after: `L27586-L27587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27586-L27587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27586-L27587) · [Before (L28215-L28216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28215-L28216)

```diff
-             QM.IJ > 0 && (QM.JJ ? this.Cm.uL.dJ(QM) : zM = !0);
-             const LM = !OM && QM.kJ;
+             nV.kE > 0 && (nV.Db ? this.iv.cZ.ib(nV) : wV = !0);
+             const ZV = !JV && nV.xE;
```

#### 3730. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28220` → after: `L27591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27591) · [Before (L28220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28220)

```diff
-             const QM = (0, PM.u)(MM.size, SM, jM, rM, iM, aM);
+             const nV = (0, pV.v)(VV.size, YV, UV, eV, xV, yV);
```

#### 3731. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28224` → after: `L27595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27595) · [Before (L28224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28224)

```diff
-               iM && (OM || this.invalidateProvidedLightFrom(MM, iM), iM.IJ > 0 && (iM.JJ = !0, MM.qh && (iM.qh = !0), this.Cm.uL.dJ(iM, MM.qh)))
+               xV && (JV || this.invalidateProvidedLightFrom(VV, xV), xV.kE > 0 && (xV.Db = !0, VV.bb && (xV.bb = !0), this.iv.cZ.ib(xV, VV.bb)))
```

#### 3732. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28228-L28229` → after: `L27599-L27600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27599-L27600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27599-L27600) · [Before (L28228-L28229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28228-L28229)

```diff
-         const nM = (0, PM.K)(MM.size, PM.j, SM, jM, rM, iM);
-         this.requeueSkySeedReaders(MM, nM, !OM, !MM.JJ), SM && (0, aM.v)(SM), this.Cm.RJ.pJ(MM)
+         const QV = (0, pV.N)(VV.size, pV.l, YV, UV, eV, xV);
+         this.requeueSkySeedReaders(VV, QV, !JV, !VV.Db), YV && (0, yV.z)(YV), this.iv.Sb.Ib(VV)
```

#### 3733. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28232` → after: `L27603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27603) · [Before (L28232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28232)

```diff
-         rM.kJ = !1, MM.ZJ || (rM.ZJ = !1)
+         eV.xE = !1, VV.JE || (eV.JE = !1)
```

#### 3734. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28238-L28239` → after: `L27609-L27610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27609-L27610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27609-L27610) · [Before (L28238-L28239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28238-L28239)

```diff
-               const OM = rM >> 3 * (jM + 1) + iM + 1 & 1 ? MM.yh.get(jM, -1, iM) : null;
-               null !== OM && void 0 !== OM && OM.kJ && this.invalidateProvidedLightFrom(MM, OM)
+               const JV = eV >> 3 * (UV + 1) + xV + 1 & 1 ? VV.Ck.get(UV, -1, xV) : null;
+               null !== JV && void 0 !== JV && JV.xE && this.invalidateProvidedLightFrom(VV, JV)
```

#### 3735. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28242` → after: `L27613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27613) · [Before (L28242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28242)

```diff
-         if (SM && (rM = PM.b), rM)
+         if (YV && (eV = pV.d), eV)
```

#### 3736. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28248-L28249` → after: `L27619-L27620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27619-L27620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27619-L27620) · [Before (L28248-L28249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28248-L28249)

```diff
-                 const SM = MM.yh.get(iM, -1, OM);
-                 SM && 0 !== SM.IJ && !SM.JJ && (SM.Bh ? this.skySeedRecheck.add(SM) : this.skySeedStale(SM, MM) && (SM.JJ = !0, this.Cm.uL.dJ(SM)))
+                 const YV = VV.Ck.get(xV, -1, JV);
+                 YV && 0 !== YV.kE && !YV.Db && (YV.nb ? this.skySeedRecheck.add(YV) : this.skySeedStale(YV, VV) && (YV.Db = !0, this.iv.cZ.ib(YV)))
```

#### 3737. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28258` → after: `L27629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27629) · [Before (L28258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28258)

```diff
-         this.skySeedRecheck.delete(MM), rM && (this.checkHeldSkySeedReaders(MM), iM && this.skySeedStale(MM, null) && (MM.JJ = !0, this.Cm.uL.dJ(MM)))
+         this.skySeedRecheck.delete(VV), eV && (this.checkHeldSkySeedReaders(VV), xV && this.skySeedStale(VV, null) && (VV.Db = !0, this.iv.cZ.ib(VV)))
```

#### 3738. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28261` → after: `L27632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27632) · [Before (L28261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28261)

```diff
-         this.requeueSkySeedReaders(MM, PM.b, !1, !MM.JJ)
+         this.requeueSkySeedReaders(VV, pV.d, !1, !VV.Db)
```

#### 3739. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28264-L28265` → after: `L27635-L27636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27635-L27636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27635-L27636) · [Before (L28264-L28265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28264-L28265)

```diff
-         const iM = MM.Lh;
-         if (!iM || MM.Qh) return !1;
+         const xV = VV.Gk;
+         if (!xV || VV.Mk) return !1;
```

#### 3740. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28267` → after: `L27638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27638) · [Before (L28267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28267)

```diff
-         if (void 0 === OM) return !MM.kJ;
+         if (void 0 === JV) return !VV.xE;
```

#### 3741. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28273-L28274` → after: `L27644-L27645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27644-L27645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27644-L27645) · [Before (L28273-L28274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28273-L28274)

```diff
-             const nM = MM.yh.get(aM, 1, iM);
-             if ((!rM || nM === rM) && (0, PM.J)(OM, null !== (jM = null === nM || void 0 === nM ? void 0 : nM.Lh) && void 0 !== jM ? jM : null, !(null === nM || void 0 === nM || !nM.hh), aM, iM, SM, PM.j, 255)) return !0
+             const QV = VV.Ck.get(yV, 1, xV);
+             if ((!eV || QV === eV) && (0, pV.K)(JV, null !== (UV = null === QV || void 0 === QV ? void 0 : QV.Gk) && void 0 !== UV ? UV : null, !(null === QV || void 0 === QV || !QV.gk), yV, xV, YV, pV.l, 255)) return !0
```

#### 3742. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28284` → after: `L27655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27655) · [Before (L28284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28284)

```diff
-         const iM = null !== (MM = null === (rM = this.busynessTracker) || void 0 === rM ? void 0 : rM.sample()) && void 0 !== MM ? MM : null,
+         const xV = null !== (VV = null === (eV = this.busynessTracker) || void 0 === eV ? void 0 : eV.sample()) && void 0 !== VV ? VV : null,
```

#### 3743. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28314` → after: `L27685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27685) · [Before (L28314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28314)

```diff
-         return this.queueBudget.vL(this.liveWorkerCount)
+         return this.queueBudget.Jv(this.liveWorkerCount)
```

#### 3744. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28317-L28319` → after: `L27688-L27690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27688-L27690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27688-L27690) · [Before (L28317-L28319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28317-L28319)

```diff
-         this.Cm.uL.qJ.OL.forEach((MM => {
-           const rM = this.Cm.uL.yJ.lJ(MM[0], MM[1], MM[2]);
-           rM && rM.sJ.length > 0 && (this.disposeChunkMeshes(rM), this.chunksToRemeshOnRestore.add(rM))
+         this.iv.cZ.EE.kZ.forEach((VV => {
+           const eV = this.iv.cZ.Cb.ab(VV[0], VV[1], VV[2]);
+           eV && eV.VE.length > 0 && (this.disposeChunkMeshes(eV), this.chunksToRemeshOnRestore.add(eV))
```

#### 3745. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28324` → after: `L27695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27695) · [Before (L28324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28324)

```diff
-         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((rM => !(!MM.has(rM) && 0 === rM.sJ.length) && (this.retryDroppedChunk(rM), !0)), !0)
+         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((eV => !(!VV.has(eV) && 0 === eV.VE.length) && (this.retryDroppedChunk(eV), !0)), !0)
```

#### 3746. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28327` → after: `L27698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27698) · [Before (L28327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28327)

```diff
-         this.requeueKnownChunks((MM => 0 !== MM.sJ.length && (this.retryDroppedChunk(MM), !0)), !0)
+         this.requeueKnownChunks((VV => 0 !== VV.VE.length && (this.retryDroppedChunk(VV), !0)), !0)
```

#### 3747. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28337` → after: `L27708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27708) · [Before (L28337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28337)

```diff
-         this.requeueKnownChunks((MM => !MM.tJ && MM.IJ > 0), !1)
+         this.requeueKnownChunks((VV => !VV.Hb && VV.kE > 0), !1)
```

#### 3748. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28340-L28342` → after: `L27711-L27713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27711-L27713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27711-L27713) · [Before (L28340-L28342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28340-L28342)

```diff
-         this.Cm.uL.qJ.OL.forEach((iM => {
-           const OM = this.Cm.uL.yJ.lJ(iM[0], iM[1], iM[2]);
-           OM && MM(OM) && (OM.JJ = !0, rM && (OM.UJ = !0), this.Cm.uL.dJ(OM))
+         this.iv.cZ.EE.kZ.forEach((xV => {
+           const JV = this.iv.cZ.Cb.ab(xV[0], xV[1], xV[2]);
+           JV && VV(JV) && (JV.Db = !0, eV && (JV.cb = !0), this.iv.cZ.ib(JV))
```

#### 3749. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28353` → after: `L27724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27724) · [Before (L28353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28353)

```diff
-   38395: (MM, rM, iM) => {
+   38598: (VV, eV, xV) => {
```

#### 3750. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28355-L28356` → after: `L27726-L27727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27726-L27727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27726-L27727) · [Before (L28355-L28356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28355-L28356)

```diff
-       e: () => SM,
-       f: () => jM
+       b: () => YV,
+       d: () => UV
```

#### 3751. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28370` → after: `L27741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27741) · [Before (L28370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28370)

```diff
-   38390: (MM, rM, iM) => {
+   38595: (VV, eV, xV) => {
```

#### 3752. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28372-L28375` → after: `L27743-L27746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27743-L27746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27743-L27746) · [Before (L28372-L28375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28372-L28375)

```diff
-       b: () => aM,
-       c: () => OM,
-       f: () => SM,
-       j: () => jM
+       e: () => yV,
+       i: () => JV,
+       k: () => YV,
+       l: () => UV
```

#### 3753. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28378` → after: `L27749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27749) · [Before (L28378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28378)

```diff
-       Oi: 0,
+       wx: 0,
```

#### 3754. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28396` → after: `L27767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27767) · [Before (L28396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28396)

```diff
-   38749: (MM, rM, iM) => {
+   38919: (VV, eV, xV) => {
```

#### 3755. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28398-L28399` → after: `L27769-L27770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27769-L27770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27769-L27770) · [Before (L28398-L28399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28398-L28399)

```diff
-       b: () => SM,
-       c: () => jM
+       d: () => YV,
+       g: () => UV
```

#### 3756. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28401` → after: `L27772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27772) · [Before (L28401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28401)

```diff
-     var OM = iM(38363);
+     var JV = xV(38556);
```

#### 3757. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28404` → after: `L27775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27775) · [Before (L28404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28404)

```diff
-       const iM = MM.UL,
+       const xV = VV.WZ,
```

#### 3758. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28420` → after: `L27791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27791) · [Before (L28420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28420)

```diff
-   38645: (MM, rM, iM) => {
+   38819: (VV, eV, xV) => {
```

#### 3759. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28424` → after: `L27794-L27795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27794-L27795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27794-L27795) · [Before (L28424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28424)

```diff
-       h: () => PM,
+       e: () => UV,
+       i: () => pV,
```

#### 3760. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28444` → after: `L27815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27815) · [Before (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28444)

```diff
-       return "function" === typeof MM && null !== (rM = MM[SM]) && void 0 !== rM ? rM : null
+       return "function" === typeof VV && null !== (eV = VV[YV]) && void 0 !== eV ? eV : null
```

#### 3761. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28447` → after: `L27818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27818) · [Before (L28447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28447)

```diff
-   38379: (MM, rM, iM) => {
+   38582: (VV, eV, xV) => {
```

#### 3762. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28449` → after: `L27820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27820) · [Before (L28449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28449)

```diff
-       d: () => OM
+       e: () => JV
```

#### 3763. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28495` → after: `L27866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27866) · [Before (L28495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28495)

```diff
-   38889: (MM, rM, iM) => {
+   39066: (VV, eV, xV) => {
```

#### 3764. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28497` → after: `L27868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27868) · [Before (L28497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28497)

```diff
-       d: () => LM
+       e: () => ZV
```

#### 3765. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28499-L28504` → after: `L27870-L27875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27870-L27875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27870-L27875) · [Before (L28499-L28504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28499-L28504)

```diff
-     var OM = iM(38034),
-       SM = iM(38885),
-       jM = iM(38325),
-       aM = iM(38217),
-       PM = iM(38347),
-       nM = iM(38869);
+     var JV = xV(38263),
+       YV = xV(39058),
+       UV = xV(38530),
+       yV = xV(38421),
+       pV = xV(38547),
+       QV = xV(39053);
```

#### 3766. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28506-L28507` → after: `L27877-L27878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27877-L27878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27877-L27878) · [Before (L28506-L28507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28506-L28507)

```diff
-     var zM = iM(38316);
-     class LM extends zM.c {
+     var wV = xV(38519);
+     class ZV extends wV.e {
```

#### 3767. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28509` → after: `L27880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27880) · [Before (L28509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28509)

```diff
-         super(MM, rM, iM), this.model = OM, this.owned = SM, this.Ld = aM, this.sideOrientation = void 0, this.xZ = {}, this._userInstancedBuffersStorage = void 0, this.Wk = !1, this.QSM = null, this.instances = [], this._thinInstanceDataStorage = {
+         super(VV, eV, xV), this.model = JV, this.owned = YV, this.TE = yV, this.sideOrientation = void 0, this.sC = {}, this._userInstancedBuffersStorage = void 0, this.JC = !1, this.XUV = null, this.instances = [], this._thinInstanceDataStorage = {
```

#### 3768. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28514` → after: `L27885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27885) · [Before (L28514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28514)

```diff
-         }, this.krM = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.kh = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
+         }, this.VJV = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.Vb = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
```

#### 3769. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28518` → after: `L27889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27889) · [Before (L28518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28518)

```diff
-         PM.create(this.row, 0, jM.e.isVisible), OM && PM.setBounds(this.row, OM.boundsMin, OM.boundsMax), this.materialIndices = new Array(aM.length / 4).fill(0), this.sideOrientation = MM.Hk().useRightHandedSystem ? 0 : 1, this.material = null
+         pV.create(this.row, 0, UV.b.isVisible), JV && pV.setBounds(this.row, JV.boundsMin, JV.boundsMax), this.materialIndices = new Array(yV.length / 4).fill(0), this.sideOrientation = VV.dD().useRightHandedSystem ? 0 : 1, this.material = null
```

#### 3770. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28521` → after: `L27892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27892) · [Before (L28521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28521)

```diff
-         return this.meshFlag(jM.e.alwaysSelect)
+         return this.meshFlag(UV.b.alwaysSelect)
```

#### 3771. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28524` → after: `L27895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27895) · [Before (L28524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28524)

```diff
-         this.CL.model.meshes.setFlag(this.row, jM.e.alwaysSelect, MM)
+         this.gZ.model.meshes.setFlag(this.row, UV.b.alwaysSelect, VV)
```

#### 3772. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28527` → after: `L27898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27898) · [Before (L28527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28527)

```diff
-         return this.meshFlag(jM.e.isVisible)
+         return this.meshFlag(UV.b.isVisible)
```

#### 3773. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28530` → after: `L27901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27901) · [Before (L28530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28530)

```diff
-         this.CL.model.meshes.setFlag(this.row, jM.e.isVisible, MM)
+         this.gZ.model.meshes.setFlag(this.row, UV.b.isVisible, VV)
```

#### 3774. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28532` → after: `L27903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27903) · [Before (L28532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28532)

```diff
-       get nSM() {
+       get NUV() {
```

#### 3775. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28536` → after: `L27907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27907) · [Before (L28536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28536)

```diff
-         return this.CL.model.meshes.visibility[this.row]
+         return this.gZ.model.meshes.visibility[this.row]
```

#### 3776. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28539` → after: `L27910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27910) · [Before (L28539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28539)

```diff
-         for (const rM of [this, ...this.instances]) this.CL.model.meshes.setVisibility(rM.row, MM)
+         for (const eV of [this, ...this.instances]) this.gZ.model.meshes.setVisibility(eV.row, VV)
```

#### 3777. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28542` → after: `L27913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27913) · [Before (L28542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28542)

```diff
-         return this.CL.model.meshes.layer[this.row]
+         return this.gZ.model.meshes.layer[this.row]
```

#### 3778. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28545` → after: `L27916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27916) · [Before (L28545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28545)

```diff
-         for (const rM of [this, ...this.instances]) this.CL.model.meshes.setLayer(rM.row, MM)
+         for (const eV of [this, ...this.instances]) this.gZ.model.meshes.setLayer(eV.row, VV)
```

#### 3779. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28548` → after: `L27919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27919) · [Before (L28548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28548)

```diff
-         return this.meshFlag(jM.e.pickable)
+         return this.meshFlag(UV.b.pickable)
```

#### 3780. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28551` → after: `L27922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27922) · [Before (L28551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28551)

```diff
-         this.CL.model.meshes.setFlag(this.row, jM.e.pickable, MM)
+         this.gZ.model.meshes.setFlag(this.row, UV.b.pickable, VV)
```

#### 3781. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28558` → after: `L27929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27929) · [Before (L28558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28558)

```diff
-         const rM = "MultiMaterial" === (null === MM || void 0 === MM ? void 0 : MM.getClassName()) ? MM.B_ : null,
+         const eV = "MultiMaterial" === (null === VV || void 0 === VV ? void 0 : VV.getClassName()) ? VV.BeV : null,
```

#### 3782. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28562` → after: `L27933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27933) · [Before (L28562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28562)

```diff
-             return null !== (OM = SM && (0, aM.Y)(SM)) && void 0 !== OM ? OM : null
+             return null !== (JV = YV && (0, yV.eb)(YV)) && void 0 !== JV ? JV : null
```

#### 3783. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28564-L28565` → after: `L27935-L27936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27935-L27936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27935-L27936) · [Before (L28564-L28565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28564-L28565)

```diff
-           OM = new jM.h(this, this.model, this.Ld, iM);
-         for (const SM of [this, ...this.instances]) this.CL.model.meshes.setParts(SM.row, OM)
+           JV = new UV.e(this, this.model, this.TE, xV);
+         for (const YV of [this, ...this.instances]) this.gZ.model.meshes.setParts(YV.row, JV)
```

#### 3784. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28567` → after: `L27938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27938) · [Before (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28567)

```diff
-       get y_() {
+       get VeV() {
```

#### 3785. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28570` → after: `L27941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27941) · [Before (L28570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28570)

```diff
-       set y_(MM) {
+       set VeV(VV) {
```

#### 3786. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28577` → after: `L27948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27948) · [Before (L28577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28577)

```diff
-         return (this.forcedInstanceCount || this.y_) > 0
+         return (this.forcedInstanceCount || this.VeV) > 0
```

#### 3787. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28581` → after: `L27952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27952) · [Before (L28581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28581)

```diff
-         return this.CL.Hk().ph()
+         return this.gZ.dD().sk()
```

#### 3788. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28584` → after: `L27955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27955) · [Before (L28584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28584)

```diff
-         return this.CL.model.meshes.parts[this.row]
+         return this.gZ.model.meshes.parts[this.row]
```

#### 3789. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28591` → after: `L27962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27962) · [Before (L28591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28591)

```diff
-         } = null !== (MM = this.model) && void 0 !== MM ? MM : {
+         } = null !== (VV = this.model) && void 0 !== VV ? VV : {
```

#### 3790. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28600` → after: `L27971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27971) · [Before (L28600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28600)

```diff
-             nM = .5 * OM.sh.Distance(MM, rM);
+             QV = .5 * JV.Ik.Distance(VV, eV);
```

#### 3791. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28602` → after: `L27973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27973) · [Before (L28602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28602)

```diff
-             jM.P_(Number.MAX_VALUE), aM.P_(-Number.MAX_VALUE);
+             UV.HVV(Number.MAX_VALUE), yV.HVV(-Number.MAX_VALUE);
```

#### 3792. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28607` → after: `L27978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27978) · [Before (L28607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28607)

```diff
-               OM.sh.CheckExtends(OM.sh.TransformCoordinatesFromFloatsToRef(PM, nM, QM, iM, new OM.sh), jM, aM)
+               JV.Ik.CheckExtends(JV.Ik.TransformCoordinatesFromFloatsToRef(pV, QV, nV, xV, new JV.Ik), UV, yV)
```

#### 3793. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28609-L28610` → after: `L27980-L27981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27980-L27981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27980-L27981) · [Before (L28609-L28610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28609-L28610)

```diff
-             PM = OM.sh.TransformCoordinates(SM, iM);
-             const zM = OM.sh.TransformNormalFromFloatsToRef(1, 1, 1, iM, new OM.sh);
+             pV = JV.Ik.TransformCoordinates(YV, xV);
+             const wV = JV.Ik.TransformNormalFromFloatsToRef(1, 1, 1, xV, new JV.Ik);
```

#### 3794. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28624` → after: `L27995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR27995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L27995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L27995) · [Before (L28624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28624)

```diff
-             YOM: {
+             xUV: {
```

#### 3795. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28632` → after: `L28003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28003) · [Before (L28632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28632)

```diff
-         }(OM.sh.FromArray(rM), OM.sh.FromArray(iM), this.getWorldMatrix())
+         }(JV.Ik.FromArray(eV), JV.Ik.FromArray(xV), this.getWorldMatrix())
```

#### 3796. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28635` → after: `L28006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28006) · [Before (L28635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28635)

```diff
-         return this.aY().YOM.isInFrustum(MM)
+         return this.qL().xUV.isInFrustum(VV)
```

#### 3797. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28639` → after: `L28010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28010) · [Before (L28639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28639)

```diff
-         return null !== (MM = null === (rM = this.model) || void 0 === rM ? void 0 : rM.vertexCount) && void 0 !== MM ? MM : 0
+         return null !== (VV = null === (eV = this.model) || void 0 === eV ? void 0 : eV.vertexCount) && void 0 !== VV ? VV : 0
```

#### 3798. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28658` → after: `L28029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28029) · [Before (L28658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28658)

```diff
-         return aM === PM.b && 0 === OM && SM === 4 * jM && (Array.isArray(iM) || iM instanceof Float32Array) && iM.length === this.model.vertexCount * jM ? iM : (0, PM.f)(rM, this.model.vertexCount)
+         return yV === pV.d && 0 === JV && YV === 4 * UV && (Array.isArray(xV) || xV instanceof Float32Array) && xV.length === this.model.vertexCount * UV ? xV : (0, pV.g)(eV, this.model.vertexCount)
```

#### 3799. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28667` → after: `L28038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28038) · [Before (L28667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28667)

```diff
-         }))) && void 0 !== MM ? MM : []
+         }))) && void 0 !== VV ? VV : []
```

#### 3800. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28669` → after: `L28040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28040) · [Before (L28669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28669)

```diff
-       hOM() {
+       RYV() {
```

#### 3801. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28671` → after: `L28042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28042) · [Before (L28671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28671)

```diff
-         return null !== (MM = null === (rM = this.model) || void 0 === rM ? void 0 : rM.indexData) && void 0 !== MM ? MM : []
+         return null !== (VV = null === (eV = this.model) || void 0 === eV ? void 0 : eV.indexData) && void 0 !== VV ? VV : []
```

#### 3802. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28683` → after: `L28054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28054) · [Before (L28683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28683)

```diff
-           return null !== (rM = this.getVerticesData(MM)) && void 0 !== rM ? rM : void 0
+           return null !== (eV = this.getVerticesData(VV)) && void 0 !== eV ? eV : void 0
```

#### 3803. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28689` → after: `L28060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28060) · [Before (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28689)

```diff
-         return (0, nM.l)({
+         return (0, QV.f)({
```

#### 3804. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28692` → after: `L28063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28063) · [Before (L28692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28692)

```diff
-           indices: null !== (rM = this.model.indexData) && void 0 !== rM ? rM : [],
+           indices: null !== (eV = this.model.indexData) && void 0 !== eV ? eV : [],
```

#### 3805. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28705` → after: `L28076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28076) · [Before (L28705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28705)

```diff
-         return this.position = OM.sh.ZeroReadOnly, this.rotation = OM.sh.ZeroReadOnly, this.UL = OM.sh.OneReadOnly, MM && (this.rotationQuaternion = {
+         return this.position = JV.Ik.ZeroReadOnly, this.rotation = JV.Ik.ZeroReadOnly, this.WZ = JV.Ik.OneReadOnly, VV && (this.rotationQuaternion = {
```

#### 3806. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28714` → after: `L28085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28085) · [Before (L28714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28714)

```diff
-         iM.set(rM), (0, PM.t)(this.model, iM)
+         xV.set(eV), (0, pV.v)(this.model, xV)
```

#### 3807. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28717` → after: `L28088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28088) · [Before (L28717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28717)

```diff
-         (0, PM.j)(MM), this.owned && (0, PM.p)(this.model), this.model = MM, this.owned = !0, rM !== this.Ld && (this.Ld = rM, this.materialIndices = new Array(rM.length / 4).fill(0), this.partBoxes = null), this.CL.model.meshes.setBounds(this.row, MM.boundsMin, MM.boundsMax), th … [truncated]
+         (0, pV.m)(VV), this.owned && (0, pV.u)(this.model), this.model = VV, this.owned = !0, eV !== this.TE && (this.TE = eV, this.materialIndices = new Array(eV.length / 4).fill(0), this.partBoxes = null), this.gZ.model.meshes.setBounds(this.row, VV.boundsMin, VV.boundsMax), th … [truncated]
```

#### 3808. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28720` → after: `L28091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28091) · [Before (L28720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28720)

```diff
-         return new hM(this, this.CL, MM, this.CL.Hk().getUniqueId(), this.model, !1, this.Ld)
+         return new kV(this, this.gZ, VV, this.gZ.dD().getUniqueId(), this.model, !1, this.TE)
```

#### 3809. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28723` → after: `L28094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28094) · [Before (L28723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28723)

```diff
-         const rM = new LM(this.CL, MM, this.CL.Hk().getUniqueId(), this.model, !1, this.Ld);
+         const eV = new ZV(this.gZ, VV, this.gZ.dD().getUniqueId(), this.model, !1, this.TE);
```

#### 3810. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28725` → after: `L28096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28096) · [Before (L28725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28725)

```diff
-         return HM(iM = this, OM = rM), OM.parent = iM.parent, OM.kR(iM.isEnabled(!1)),
+         return rV(xV = this, JV = eV), JV.parent = xV.parent, JV.pW(xV.isEnabled(!1)),
```

#### 3811. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28741` → after: `L28112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28112) · [Before (L28741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28741)

```diff
-         for (const jM of [this, ...this.instances]) jM.xZ[MM] = null;
+         for (const UV of [this, ...this.instances]) UV.sC[VV] = null;
```

#### 3812. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28764-L28765` → after: `L28135-L28136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28135-L28136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28135-L28136) · [Before (L28764-L28765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28764-L28765)

```diff
-         const rM = null === (MM = this.QSM) || void 0 === MM ? void 0 : MM.instances;
-         null === rM || void 0 === rM || rM.splice(rM.indexOf(this), 1), this.owned && (0, PM.p)(this.model)
+         const eV = null === (VV = this.XUV) || void 0 === VV ? void 0 : VV.instances;
+         null === eV || void 0 === eV || eV.splice(eV.indexOf(this), 1), this.owned && (0, pV.u)(this.model)
```

#### 3813. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28781` → after: `L28152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28152) · [Before (L28781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28781)

```diff
-           const MM = null !== rM && void 0 !== rM ? rM : mM.length / SM;
+           const VV = null !== eV && void 0 !== eV ? eV : vV.length / YV;
```

#### 3814. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28788` → after: `L28159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28159) · [Before (L28788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28788)

```diff
-             glType: PM.b,
+             glType: pV.d,
```

#### 3815. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28794-L28795` → after: `L28165-L28166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28165-L28166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28165-L28166) · [Before (L28794-L28795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28794-L28795)

```diff
-         } = MM, zM = QM ? (0, PM.n)(SM, ((MM, rM) => QM[3 * MM + rM])) : [jM, aM];
-         this.replaceModel(new PM.e(nM, OM, SM, zM[0], zM[1]), this.Ld)
+         } = VV, wV = nV ? (0, pV.s)(YV, ((VV, eV) => nV[3 * VV + eV])) : [UV, yV];
+         this.replaceModel(new pV.e(QV, JV, YV, wV[0], wV[1]), this.TE)
```

#### 3816. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28802` → after: `L28173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28173) · [Before (L28802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28802)

```diff
-         return 0 !== (this.CL.model.meshes.flags[this.row] & MM)
+         return 0 !== (this.gZ.model.meshes.flags[this.row] & VV)
```

#### 3817. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28805` → after: `L28176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28176) · [Before (L28805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28805)

```diff
-     const mM = ["billboardMode", "infiniteDistance", "isVisible", "AJ", "Wh", "visibility", "renderingGroupId", "sideOrientation", "krM", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "kh", "metadata"];
+     const vV = ["billboardMode", "infiniteDistance", "isVisible", "QE", "Sk", "visibility", "renderingGroupId", "sideOrientation", "VJV", "hasVertexAlpha", "applyFog", "useVertexColors", "layerMask", "isUnIndexed", "receiveShadows", "Vb", "metadata"];
```

#### 3818. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28808` → after: `L28179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28179) · [Before (L28808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28808)

```diff
-       rM.position = MM.position, rM.rotation = MM.rotation, MM.rotationQuaternion && (rM.rotationQuaternion = MM.rotationQuaternion), rM.UL = MM.UL
+       eV.position = VV.position, eV.rotation = VV.rotation, VV.rotationQuaternion && (eV.rotationQuaternion = VV.rotationQuaternion), eV.WZ = VV.WZ
```

#### 3819. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28813` → after: `L28184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28184) · [Before (L28813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28813)

```diff
-         super(...iM), this.QSM = MM, this.Wk = !0, MM.instances.push(this);
+         super(...xV), this.XUV = VV, this.JC = !0, VV.instances.push(this);
```

#### 3820. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L28816-L28817` → after: `L28187-L28188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR28187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L28187-L28188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L28187-L28188) · [Before (L28816-L28817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L28816-L28817)

```diff
-         } = this.CL.model;
-         SM.setParts(this.row, SM.parts[MM.row]), this.partBoxes = MM.partBoxes, SM.setVisibility(this.row, MM.visibility), SM.setLayer(this.row, MM.renderingGroupId), HM(MM, this), this.infiniteDistance = MM.infiniteDistance, Object.assign(this.xZ, MM.xZ), this.parent = MM.parent
+         } = this.gZ.model;
+         YV.setParts(this.row, YV.parts[VV.row]), this.partBoxes = VV.partBoxes, YV.setVisibility(this.row, VV.visibility), YV.setLayer(this.row, VV.renderingGroupId), rV(VV, this), this.infiniteDistance = VV.infiniteDistance, Object.assign(this.sC, VV.sC), this.parent = VV.parent
```
